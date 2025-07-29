# 🎯 VS Code Settings Management

## 📋 Zweck dieser Datei
Diese Datei dient als **zentrale Schnittstelle** zwischen Ihrer lokalen `settings.json` und der KI.

**Pfad zur originalen Datei:**
```
C:\Users\User01\AppData\Roaming\Code - Insiders\User\settings.json
```

## 🔄 Workflow
1. **KI analysiert** den aktuellen Inhalt hier
2. **KI empfiehlt** konkrete Änderungen mit Begründung
3. **Sie kopieren** die Änderungen in Ihre echte settings.json
4. **Sie aktualisieren** den Inhalt hier nach Änderungen

## ⚠️ Wichtiger Hinweis
**Nach jeder Änderung an der echten settings.json:**
- Kopieren Sie den aktualisierten Inhalt hierher
- So bleibt die KI immer auf dem neuesten Stand

**Original-Inhalt der settings.json Datei:**


{
    "github.copilot.chat.search.keywordSuggestions": true,
    "github.copilot.chat.followUps": "always",
    "github.copilot.chat.localeOverride": "de",
    "github.copilot.chat.scopeSelection": true,
    "github.copilot.nextEditSuggestions.enabled": true,
    "github.copilot.nextEditSuggestions.fixes": true,
    "github.copilot.chat.codesearch.enabled": true,
    "github.copilot.chat.agent.thinkingTool": true,
    "github.copilot.chat.completionContext.typescript.mode": "on",
    "github.copilot.chat.editor.temporalContext.enabled": true,
    "github.copilot.chat.edits.temporalContext.enabled": true,
    "github.copilot.chat.generateTests.codeLens": true,
    "github.copilot.chat.languageContext.fix.typescript.enabled": true,
    "github.copilot.chat.languageContext.inline.typescript.enabled": true,
    "github.copilot.chat.languageContext.typescript.enabled": true,
    "git.enableSmartCommit": true,
    "astro.content-intellisense": true,
    "websearch.preferredEngine": "bing",
    "dotnetAcquisitionExtension.enablePreviewFeatures": true,
    "github.codespaces.allowUnsafeConnections": true,
    "github.codespaces.devcontainerChangedNotificationStyle": "none",
    "githubIssues.alwaysPromptForNewIssueRepo": true,
    "explorer.confirmDelete": false,
    "gitlens.ai.model": "vscode",
    "gitlens.ai.vscode.model": "copilot:claude-opus-4",
    
    // 🔥 LIGHTHOUSE 4x100 OPTIMIERUNGEN
    "github.copilot.chat.agent.autoFix": true,
    "github.copilot.chat.agent.runTasks": true,
    "github.copilot.chat.agent.maxRequests": 25,
    "chat.agent.enabled": true,
    
    // 🎯 SEO-EXCELLENCE SETTINGS
    "github.copilot.chat.reviewSelection.enabled": true,
    "github.copilot.chat.setupTests.enabled": true,
    
    // ⚡ LIGHTHOUSE-OPTIMIERTE WORKFLOWS
    "editor.inlineSuggest.edits.allowCodeShifting": "always",
    "editor.inlineSuggest.edits.renderSideBySide": "auto",
    "editor.inlineSuggest.syntaxHighlightingEnabled": true,
    "inlineChat.finishOnType": false,
    "inlineChat.holdToSpeech": false,
    "inlineChat.accessibleDiffView": "auto",
    
    "explorer.confirmDragAndDrop": false,
    "workbench.startupEditor": "none",
    "chat.editing.confirmEditRequestRetry": false,
    "github.copilot.advanced": {},
    "git.openRepositoryInParentFolders": "never",
    
    "github.copilot.chat.commitMessageGeneration.instructions": [
    
        {
            "text": "Format: 'feat/fix/docs: [Komponente] - [Änderung] - Lighthouse: [Score-Impact]'. Beispiel: 'feat: SEOEnhanced - Schema.org integration - Lighthouse: SEO +5 Punkte'"
        }
    ],
    "github.copilot.chat.pullRequestDescriptionGeneration.instructions": [
        {
            "text": "Beschreibung mit Lighthouse-Impact: Performance, Accessibility, Best Practices, SEO Scores. Vor/Nach Vergleich mit konkreten Zahlen."
        }
    ],
    
    // 🎯 GITHUB-STANDARD INTEGRATION  
    "github.copilot.chat.codeGeneration.useInstructionFiles": true,
    "github.copilot.chat.useInstructionFiles": true,
    "github.copilot.chat.alwaysLoadInstructions": true,
    "chat.promptFiles": true,
    "chat.promptFilesLocations": {
        ".github/prompts": true
    },
    // ✅ OPTIMIERUNG: Projektspezifische Instruction-Pfade
    "chat.instructionsFilesLocations": {
        ".github/instructions": true,           // ← Ihr Hauptordner
        "instructions": true,                   // ← Fallback
        "C:\\apps\\website\\simon-recht\\.github": true  // ← Absoluter Pfad (aktuell aktiv)
    
    },
    "git.confirmSync": false,
    "security.workspace.trust.untrustedFiles": "open",
    "github.copilot.chat.notebook.followCellExecution.enabled": true,
    "liveServer.settings.donotVerifyTags": true,
    "window.confirmSaveUntitledWorkspace": false,
    "github.copilot.enable": {
        "*": true,
        "plaintext": false,
        "markdown": true,
        "scminput": false
    },
    "geminicodeassist.inlineSuggestions.enableAuto": true,
    "workbench.editor.empty.hint": "hidden",
    "github.copilot.chat.agent.terminal.allowList": {
        "pnpm build": true,
        "Continue": true,
        "node scripts": true,
        "pnpm run build": true,
        "node -e": true,
        "cd scripts && node -e": true,
        "timeout 10 node scripts": true,
        "Continue to iterate?": true,
        "node -c scripts": true,
        "node -c scripts/build.js": true,
        "node memory-optimized-checker.js": true,
        "node": true,
        "node tools\\build_check\\scripte\\build-checker.js": true,
        "node checker\\intelligent-checker.js": true,
        "node checker\\*.js": true,
        "cd checker && node": true,
        "npm run build": true,
        "pnpm lint": true,
        "build-checker.cjs": true,
        "git add": true,
        "git commit": true,
        "$content = Get-Content": true,
        "git log": true,
        "git push": true,
        "git status": true
    },
    "javascript.updateImportsOnFileMove.enabled": "always",
    "github.copilot.chat.agent.terminal.denyList": {
        "rm": false
    },
    "github.copilot.chat.reviewSelection.instructions": [
    

    ]
}