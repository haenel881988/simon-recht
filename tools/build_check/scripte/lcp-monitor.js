// 🚀 LCP Performance Monitor
// Tracks Core Web Vitals and sends data to analytics

class LCPMonitor {
  constructor() {
    this.metrics = {};
    this.lcpThreshold = 2500; // 2.5s threshold for LCP
    this.initializeObservers();
    this.trackImageLoading();
  }

  initializeObservers() {
    // LCP Observer
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((entryList) => {
        const lcpEntries = entryList.getEntries();
        lcpEntries.forEach((entry) => {
          this.metrics.lcp = entry.startTime;
          this.metrics.lcpElement = entry.element;
          this.metrics.lcpUrl = entry.url;
          
          // Track if our hero image is the LCP element
          if (entry.element?.classList?.contains('hero-image')) {
            this.metrics.isHeroImageLCP = true;
          }
          
          console.log(`🎯 LCP: ${entry.startTime.toFixed(2)}ms`, {
            element: entry.element,
            url: entry.url,
            isHeroImage: this.metrics.isHeroImageLCP
          });
        });
      });
      
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    }

    // CLS Observer
    if ('PerformanceObserver' in window) {
      const clsObserver = new PerformanceObserver((entryList) => {
        let clsValue = 0;
        entryList.getEntries().forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        this.metrics.cls = clsValue;
        console.log(`📏 CLS: ${clsValue.toFixed(4)}`);
      });
      
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }

    // FID Observer
    if ('PerformanceObserver' in window) {
      const fidObserver = new PerformanceObserver((entryList) => {
        entryList.getEntries().forEach((entry) => {
          this.metrics.fid = entry.processingStart - entry.startTime;
          console.log(`⚡ FID: ${this.metrics.fid.toFixed(2)}ms`);
        });
      });
      
      fidObserver.observe({ entryTypes: ['first-input'] });
    }
  }

  trackImageLoading() {
    // Track when hero image starts/finishes loading
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
      const startTime = performance.now();
      
      heroImage.addEventListener('load', () => {
        const loadTime = performance.now() - startTime;
        this.metrics.heroImageLoadTime = loadTime;
        console.log(`🖼️ Hero Image Load: ${loadTime.toFixed(2)}ms`);
        
        // Check if image format was AVIF
        if (heroImage.currentSrc?.includes('.avif')) {
          this.metrics.heroImageFormat = 'AVIF';
          console.log('✅ AVIF format successfully loaded');
        } else if (heroImage.currentSrc?.includes('.webp')) {
          this.metrics.heroImageFormat = 'WebP';
          console.log('✅ WebP format loaded (AVIF fallback)');
        } else {
          this.metrics.heroImageFormat = 'JPG';
          console.log('⚠️ JPG format loaded (fallback)');
        }
      });

      heroImage.addEventListener('error', () => {
        console.error('❌ Hero image failed to load');
        this.metrics.heroImageError = true;
      });
    }
  }

  sendMetrics() {
    // Send to Google Analytics if available
    if (typeof gtag !== 'undefined') {
      if (this.metrics.lcp) {
        gtag('event', 'web-vitals', {
          event_category: 'Performance',
          event_label: 'LCP',
          value: Math.round(this.metrics.lcp),
          custom_parameter: {
            threshold_met: this.metrics.lcp <= this.lcpThreshold,
            is_hero_image: this.metrics.isHeroImageLCP,
            image_format: this.metrics.heroImageFormat
          }
        });
      }

      if (this.metrics.cls) {
        gtag('event', 'web-vitals', {
          event_category: 'Performance',
          event_label: 'CLS',
          value: Math.round(this.metrics.cls * 1000), // Convert to integer
        });
      }

      if (this.metrics.fid) {
        gtag('event', 'web-vitals', {
          event_category: 'Performance',
          event_label: 'FID',
          value: Math.round(this.metrics.fid),
        });
      }
    }

    // Console summary for debugging
    console.table({
      'LCP (ms)': this.metrics.lcp?.toFixed(2) || 'N/A',
      'CLS': this.metrics.cls?.toFixed(4) || 'N/A',
      'FID (ms)': this.metrics.fid?.toFixed(2) || 'N/A',
      'Hero Load (ms)': this.metrics.heroImageLoadTime?.toFixed(2) || 'N/A',
      'Image Format': this.metrics.heroImageFormat || 'N/A',
      'LCP Threshold Met': this.metrics.lcp ? (this.metrics.lcp <= this.lcpThreshold ? '✅' : '❌') : 'N/A'
    });
  }

  // Call this on page unload to send final metrics
  setupFinalReport() {
    window.addEventListener('beforeunload', () => {
      this.sendMetrics();
    });

    // Also send after 10 seconds for immediate feedback
    setTimeout(() => {
      this.sendMetrics();
    }, 10000);
  }
}

// Initialize monitoring if not in production (for debugging)
if (typeof window !== 'undefined') {
  // Initialize after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      const monitor = new LCPMonitor();
      monitor.setupFinalReport();
    });
  } else {
    const monitor = new LCPMonitor();
    monitor.setupFinalReport();
  }
}

export default LCPMonitor;
