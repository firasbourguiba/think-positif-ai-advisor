// CONFIG.JS - Configuration centralisée de l'application
// Toutes les constantes et configurations globales

const APP_CONFIG = {
  // ===== APP INFO =====
  name: "AI Business Advisor",
  version: "1.0.0",
  author: "Firas Bourguiba",
  year: 2025,
  
  // ===== URLS =====
  urls: {
    home: "./index.html",
    chat: "./chat.html",
    profile: "./profile.html",
    about: "./about.html",
    thinkPositifWebsite: "https://www.thinkpositif.eu",
    thinkPositifContactForm: "https://www.thinkpositif.eu/contact/",
    thinkPositifLinkedin: "https://linkedin.com/company/thinkpositif",
    firasPorfolio: [
      "https://lvmh-bi-strategique.netlify.app/",
      "https://groupe-la-poste.netlify.app/",
      "https://suez-case.netlify.app/",
      "https://etam-strategic.netlify.app/"
    ]
  },
  
  // ===== API CONFIGURATION =====
  api: {
    geminiBaseUrl: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
    geminiModel: "gemini-2.5-flash",
    geminiMaxTokens: 1024,
    geminiTemperature: 0.7,
    geminiTopP: 0.9,
    geminiTopK: 40
  },
  
  // ===== CHAT CONFIGURATION =====
  chat: {
    maxMessageLength: 5000,
    maxMessages: 100,
    messageDashboardTrigger: 8,  // Montrer dashboard après X messages
    typingDelay: 300,            // ms avant de montrer le spinner
    scrollDelay: 100,            // ms avant de scroller
    proposedQuestionsCount: 2,   // Nombre de questions à proposer
  },
  
  // ===== STORAGE KEYS =====
  storage: {
    apiKey: "gemini_api_key",
    chatHistory: "chat_history",
    userPreferences: "user_preferences",
    hasShownTutorial: "has_shown_tutorial"
  },
  
  // ===== COLORS =====
  colors: {
    gold: "#d4af37",
    goldLight: "#e8c547",
    goldDark: "#c9a961",
    dark900: "#0f0f0f",
    dark800: "#1a1a1a",
    dark700: "#2d2d2d",
    white: "#ffffff",
    lightGray: "#d0d0d0",
    darkGray: "#666666"
  },
  
  // ===== BREAKPOINTS =====
  breakpoints: {
    mobile: 320,
    tablet: 768,
    desktop: 1024,
    wide: 1440
  },
  
  // ===== TIMEOUTS =====
  timeouts: {
    shortDelay: 300,
    mediumDelay: 600,
    longDelay: 1000,
    veryLongDelay: 2000
  },
  
  // ===== MESSAGES =====
  messages: {
    welcomeMessage: `Bonjour ! 👋 Je suis votre AI Business Advisor, créé par Firas Bourguiba pour Think Positif.

Je suis là pour vous aider à structurer votre **transformation digitale** en utilisant les meilleures méthodologies.

Parlez-moi simplement de votre situation. Vous pouvez :
✅ Lancer une **startup**
✅ Transformer votre **organisation**
✅ Innover sur un **produit**
✅ Ou simplement partager votre **idée**

Je vais vous guider pas à pas. À vous! 😊`,

    errorApiKey: `🔑 Erreur: Clé API Gemini non configurée. 
    
Veuillez d'abord configurer votre clé API Gemini dans les paramètres.
    
1. Allez sur: https://makersuite.google.com/app/apikey
2. Créez une nouvelle clé API
3. Copiez-collez la clé ici:

(Elle sera sauvegardée localement)`,

    errorConnection: "❌ Erreur de connexion. Vérifiez votre Internet et réessayez.",
    errorGeneric: "❌ Une erreur est survenue. Veuillez réessayer.",
    loadingMessage: "⏳ Je réfléchis... Un moment svp",
    typingIndicator: "...",
    
    dashboardTrigger: "Excellent ! Après tous ces échanges, vous avez une bonne clarté. Voici un résumé et les prochaines étapes :"
  },
  
  // ===== FEATURES =====
  features: {
    enableAnalytics: false,  // À passer à true si Analytics setup
    enableDebugMode: false,
    enableLocalStorage: true,
    enableProposedQuestions: true,
    enableDashboard: true,
    enableExportPDF: false  // À implémenter
  },
  
  // ===== VALIDATION =====
  validation: {
    minMessageLength: 3,
    maxMessageLength: 5000,
    apiKeyMinLength: 20,
    apiKeyPattern: /^[A-Za-z0-9_-]+$/ // Simple pattern
  }
};

// ===== HELPER FUNCTIONS =====

/**
 * Obtenir une configuration par clé (notation pointée)
 * @param {string} key - ex: "api.geminiModel"
 * @returns {*} Valeur de la config
 */
function getConfig(key) {
  return key.split('.').reduce((obj, k) => obj?.[k], APP_CONFIG);
}

/**
 * Définir une configuration
 * @param {string} key - ex: "chat.maxMessages"
 * @param {*} value - Nouvelle valeur
 */
function setConfig(key, value) {
  const keys = key.split('.');
  const lastKey = keys.pop();
  const obj = keys.reduce((o, k) => o[k] = o[k] || {}, APP_CONFIG);
  obj[lastKey] = value;
}

/**
 * Vérifier si un feature est activé
 * @param {string} featureName
 * @returns {boolean}
 */
function isFeatureEnabled(featureName) {
  return APP_CONFIG.features[featureName] === true;
}

/**
 * Obtenir la breakpoint actuelle
 * @returns {string} "mobile" | "tablet" | "desktop" | "wide"
 */
function getCurrentBreakpoint() {
  const width = window.innerWidth;
  if (width < APP_CONFIG.breakpoints.tablet) return 'mobile';
  if (width < APP_CONFIG.breakpoints.desktop) return 'tablet';
  if (width < APP_CONFIG.breakpoints.wide) return 'desktop';
  return 'wide';
}

/**
 * Vérifier si on est mobile
 * @returns {boolean}
 */
function isMobileView() {
  return getCurrentBreakpoint() === 'mobile';
}

/**
 * Obtenir une couleur
 * @param {string} colorName
 * @returns {string} Hex color
 */
function getColor(colorName) {
  return APP_CONFIG.colors[colorName] || '#d4af37';
}

/**
 * Obtenir un timeout
 * @param {string} timeoutName
 * @returns {number} Milliseconds
 */
function getTimeout(timeoutName) {
  return APP_CONFIG.timeouts[timeoutName] || 500;
}

/**
 * Valider une clé API
 * @param {string} apiKey
 * @returns {boolean}
 */
function validateApiKey(apiKey) {
  if (!apiKey) return false;
  if (apiKey.length < APP_CONFIG.validation.apiKeyMinLength) return false;
  return true;
}

/**
 * Valider un message
 * @param {string} message
 * @returns {boolean}
 */
function validateMessage(message) {
  if (!message) return false;
  if (message.length < APP_CONFIG.validation.minMessageLength) return false;
  if (message.length > APP_CONFIG.validation.maxMessageLength) return false;
  return true;
}

// ===== DEBUG =====

/**
 * Log en mode debug
 * @param {string} message
 * @param {*} data
 */
function debugLog(message, data = null) {
  if (APP_CONFIG.features.enableDebugMode) {
    console.log(`[DEBUG] ${message}`, data || '');
  }
}

// Export
window.APP_CONFIG = APP_CONFIG;
window.getConfig = getConfig;
window.setConfig = setConfig;
window.isFeatureEnabled = isFeatureEnabled;
window.getCurrentBreakpoint = getCurrentBreakpoint;
window.isMobileView = isMobileView;
window.getColor = getColor;
window.getTimeout = getTimeout;
window.validateApiKey = validateApiKey;
window.validateMessage = validateMessage;
window.debugLog = debugLog;

// Log au démarrage
console.log(`🚀 ${APP_CONFIG.name} v${APP_CONFIG.version}`);
console.log(`Created by ${APP_CONFIG.author}`);