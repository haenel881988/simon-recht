// internal-linking.js - Utilities für automatische interne Verlinkung
import { getCollection } from 'astro:content';

/**
 * Generiert HTML für verwandte Artikel basierend auf Keywords
 * @param {string} currentUrl - Aktuelle Seiten-URL
 * @param {Object} options - Optionen für die Verlinkung
 * @returns {Promise<string>} HTML-String mit verwandten Artikeln
 */
export async function generateRelatedArticlesHTML(currentUrl, options = {}) {
  const {
    focusKeyword = '',
    keywords = [],
    category = '',
    maxSuggestions = 3,
    showRelatedArticles = true
  } = options;

  if (!showRelatedArticles) {
    return '';
  }

  try {
    // Hole alle Blog-Einträge
    const allBlogEntries = await getCollection('blog');
    
    // Filtere den aktuellen Artikel aus
    const otherArticles = allBlogEntries.filter(entry => 
      `/blog/${entry.slug}` !== currentUrl
    );

    // Bewerte Relevanz basierend auf Keywords
    const scoredArticles = otherArticles.map(entry => {
      let score = 0;
      const content = entry.data.title + ' ' + (entry.data.description || '') + ' ' + (entry.data.tags?.join(' ') || '');
      const contentLower = content.toLowerCase();
      
      // Score für Focus Keyword
      if (focusKeyword && contentLower.includes(focusKeyword.toLowerCase())) {
        score += 10;
      }
      
      // Score für andere Keywords
      keywords.forEach(keyword => {
        if (contentLower.includes(keyword.toLowerCase())) {
          score += 5;
        }
      });
      
      // Score für Category
      if (category && entry.data.category === category) {
        score += 7;
      }
      
      return { entry, score };
    });

    // Sortiere nach Score und nimm die besten
    const topArticles = scoredArticles
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, maxSuggestions)
      .map(item => item.entry);

    // Generiere HTML
    if (topArticles.length === 0) {
      return '';
    }

    const articlesHTML = topArticles.map(entry => `
      <li class="internal-link-suggestion">
        <a href="/blog/${entry.slug}" class="text-blue-600 hover:text-blue-800 font-medium">
          ${entry.data.title}
        </a>
        <p class="text-gray-600 text-sm mt-1">${entry.data.description || ''}</p>
      </li>
    `).join('');

    return `
      <div class="internal-links-section mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 class="text-lg font-semibold text-blue-900 mb-3">Verwandte Artikel</h3>
        <ul class="space-y-3">
          ${articlesHTML}
        </ul>
      </div>
    `;
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error('Fehler beim Generieren der verwandten Artikel:', error);
    }
    return '';
  }
}

/**
 * Findet automatisch passende interne Links im Content
 * @param {string} content - Der Content-Text
 * @param {Array} availablePages - Verfügbare Seiten für Verlinkung
 * @returns {string} Content mit automatischen internen Links
 */
export async function addAutomaticInternalLinks(content, availablePages = []) {
  try {
    if (!availablePages.length) {
      const allBlogEntries = await getCollection('blog');
      availablePages = allBlogEntries.map(entry => ({
        url: `/blog/${entry.slug}`,
        title: entry.data.title,
        keywords: entry.data.tags || []
      }));
    }

    let enhancedContent = content;

    // Einfache automatische Verlinkung basierend auf Titel-Matches
    availablePages.forEach(page => {
      const titleWords = page.title.split(' ');
      
      // Verlinke nur bei Titeln mit mehr als 2 Wörtern
      if (titleWords.length >= 3) {
        const regex = new RegExp(`\\b${page.title}\\b`, 'gi');
        const replacement = `<a href="${page.url}" class="internal-auto-link text-blue-600 hover:text-blue-800">${page.title}</a>`;
        
        // Ersetze nur das erste Vorkommen um Spam zu vermeiden
        enhancedContent = enhancedContent.replace(regex, replacement);
      }
    });

    return enhancedContent;

  } catch (error) {
    console.error('Fehler beim Hinzufügen automatischer Links:', error);
    return content;
  }
}
