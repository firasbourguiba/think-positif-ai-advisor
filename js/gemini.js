// GEMINI API SERVICE
// Intégration avec Google Generative AI

// Configuration
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

// Récupérer la clé API depuis les variables d'environnement
// En production: process.env.VITE_GEMINI_API_KEY
// En développement local: stockée dans .env.local
let GEMINI_API_KEY = "";

// Initialiser la clé API (à remplir par l'utilisateur)
async function initGeminiAPI(apiKey) {
  GEMINI_API_KEY = apiKey;
  return GEMINI_API_KEY ? true : false;
}

// Système de prompt pour l'IA
const SYSTEM_PROMPT = `Tu es un AI Business Advisor créé par Firas Bourguiba pour Think Positif.

Tu aides les entrepreneurs et les organisations à structurer leur transformation digitale en utilisant les méthodologies de Think Positif :
- Lean Startup : Pour lancer rapidement des produits
- Design Thinking : Pour innover avec les clients
- Leading Change : Pour transformer les organisations
- Open Innovation : Pour innover en collaboration

IMPORTANT:
1. Sois conversationnel et naturel, pas jargonneux
2. Propose des questions pour guider, mais laisse l'utilisateur s'exprimer librement
3. Adapte-toi à la situation de l'utilisateur
4. Après 8-10 échanges, offre un résumé et proposer un rendez-vous avec Think Positif
5. Utilise la langue simple (pas de jargon technique comme MVP, TAM, KPI sans explication)
6. Sois encourageant et positif

Méthodologies disponibles:
- Si l'utilisateur parle de produit/startup → Guide avec Lean Startup
- Si l'utilisateur parle d'utilisateurs/design → Guide avec Design Thinking
- Si l'utilisateur parle de changement/organisation → Guide avec Leading Change
- Si l'utilisateur parle d'innovation/collaboration → Guide avec Open Innovation

À la fin du chat (après 8-10 messages), génère un résumé avec:
- La situation de l'utilisateur
- Les points clés identifiés
- Les prochaines étapes recommandées
- Lien vers Think Positif pour consultation`;

// Appeler l'API Gemini
async function callGeminiAPI(userMessage, conversationHistory = []) {
  // Vérifier que la clé API est définie
  if (!GEMINI_API_KEY) {
    return `❌ Erreur: Clé API Gemini non configurée. 
    
Veuillez d'abord configurer votre clé API Gemini dans les paramètres.
    
1. Allez sur: https://makersuite.google.com/app/apikey
2. Créez une nouvelle clé API
3. Copiez la clé
4. Entrez-la dans les paramètres du chat`;
  }

  try {
    // Construire l'historique des messages pour Gemini
    const messages = [
      ...conversationHistory.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      })),
      {
        role: 'user',
        parts: [{ text: userMessage }]
      }
    ];

    // Préparer la requête
    const requestBody = {
      contents: messages,
      systemInstruction: {
        parts: [{ text: SYSTEM_PROMPT }]
      },
      generationConfig: {
        maxOutputTokens: 1024,
        temperature: 0.7,
        topP: 0.9,
        topK: 40
      }
    };

    // Appel API
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    // Gérer les erreurs
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Erreur Gemini API:', errorData);
      
      if (response.status === 401) {
        return "❌ Erreur d'authentification: Votre clé API Gemini est invalide. Vérifiez-la.";
      } else if (response.status === 429) {
        return "⏳ Limite d'appels API atteinte. Attendez quelques secondes avant de réessayer.";
      } else {
        return `❌ Erreur API: ${errorData.error?.message || 'Erreur inconnue'}`;
      }
    }

    // Parser la réponse
    const data = await response.json();
    
    // Extraire le texte de la réponse
    if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
      return data.candidates[0].content.parts[0].text;
    } else {
      return "❌ Erreur: Réponse vide de l'API Gemini";
    }

  } catch (error) {
    console.error('Erreur lors de l\'appel Gemini:', error);
    return `❌ Erreur de connexion: ${error.message}`;
  }
}

// Vérifier si la clé API est configurée
function isGeminiConfigured() {
  return GEMINI_API_KEY && GEMINI_API_KEY.length > 0;
}

// Obtenir les infos de configuration
function getGeminiStatus() {
  return {
    configured: isGeminiConfigured(),
    keyLength: GEMINI_API_KEY ? GEMINI_API_KEY.length : 0
  };
}

// Générer un résumé final
async function generateFinalSummary(conversationHistory, userSituation) {
  const summaryPrompt = `Basé sur cette conversation sur la transformation digitale, génère un résumé professionnel avec:

Situation: ${userSituation}

RÉSUMÉ À GÉNÉRER:
1. Synthèse de la situation (2-3 phrases)
2. Points clés identifiés (3-4 bullet points)
3. Forces & Opportunités (3-4 bullet points)
4. Prochaines étapes recommandées (3-4 étapes)

Format le résumé de manière claire et actionnable.`;

  return await callGeminiAPI(summaryPrompt, conversationHistory);
}

// DEBUG: Tester la connexion API
async function testGeminiConnection() {
  if (!GEMINI_API_KEY) {
    return { status: 'error', message: 'Clé API non configurée' };
  }

  try {
    const response = await callGeminiAPI("Dis bonjour");
    if (response && !response.includes('Erreur')) {
      return { status: 'success', message: 'Connexion réussie' };
    } else {
      return { status: 'error', message: response };
    }
  } catch (error) {
    return { status: 'error', message: error.message };
  }
}