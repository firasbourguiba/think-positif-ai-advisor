// MAIN.JS - Navigation et utilitaires généraux

// Initialiser la navigation dynamique si nécessaire
document.addEventListener('DOMContentLoaded', () => {
  // Rien de spécial nécessaire pour le moment
  // Les pages HTML gèrent leurs propres navigations
  console.log('✨ AI Business Advisor - Think Positif');
  console.log('Créé par Firas Bourguiba');
});

// Utilitaires
const Utils = {
  // Formater une date
  formatDate: (date) => {
    return new Date(date).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  },
  
  // Copier du texte dans le presse-papiers
  copyToClipboard: (text) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Copié!');
    });
  },
  
  // Obtenir les initiales d'un nom
  getInitials: (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  },
  
  // Slugifier un texte
  slugify: (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  },
  
  // Vérifier si en mobile
  isMobile: () => {
    return window.innerWidth <= 768;
  }
};

// Gestion du localStorage
const Storage = {
  get: (key) => localStorage.getItem(key),
  set: (key, value) => localStorage.setItem(key, value),
  remove: (key) => localStorage.removeItem(key),
  clear: () => localStorage.clear()
};

// Analytics basic
const Analytics = {
  trackEvent: (eventName, eventData) => {
    console.log(`📊 Event: ${eventName}`, eventData);
    // À ajouter : Google Analytics ou autre service
  },
  
  pageView: (pageName) => {
    console.log(`📄 Page: ${pageName}`);
    Analytics.trackEvent('page_view', { page: pageName });
  }
};

// Gestion des erreurs globales
window.addEventListener('error', (event) => {
  console.error('❌ Erreur globale:', event.error);
  // Pourrrait envoyer à un service de monitoring
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('❌ Promise rejetée:', event.reason);
});

// Vérifier la connexion Internet
function checkOnlineStatus() {
  if (!navigator.onLine) {
    console.warn('⚠️ Pas de connexion Internet');
    alert('Vous êtes hors ligne. Certaines fonctionnalités pourraient ne pas marcher.');
  }
}

window.addEventListener('online', () => {
  console.log('✅ Connexion rétablie');
});

window.addEventListener('offline', () => {
  console.warn('⚠️ Connexion perdue');
});

// Vérifier au chargement
checkOnlineStatus();

// Export pour utilisation dans d'autres fichiers
window.Utils = Utils;
window.Storage = Storage;
window.Analytics = Analytics;