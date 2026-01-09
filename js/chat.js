// CHAT LOGIC - Gestion du chat principal

// État du chat
let conversationHistory = [];
let messageCount = 0;
let currentMethodology = null;
let currentStep = 0;
let userSituation = "";
let showedDashboard = false;

// Éléments DOM
const chatMessagesDiv = document.getElementById('chatMessages');
const userInputEl = document.getElementById('userInput');
const sendBtnEl = document.getElementById('sendBtn');
const proposedQuestionsDiv = document.getElementById('proposedQuestions');
const dashboardDiv = document.getElementById('dashboardSummary');
const loadingSpinnerEl = document.getElementById('loadingSpinner');

// API Key Modal (si besoin)
const apiKeyPrompt = () => {
  const key = localStorage.getItem('gemini_api_key') || '';
  if (!key) {
    const userKey = prompt(`🔑 Entrez votre clé API Gemini

1. Allez sur: https://makersuite.google.com/app/apikey
2. Créez une nouvelle clé API
3. Copiez-collez la clé ici:

(Elle sera sauvegardée localement)`);
    if (userKey) {
      localStorage.setItem('gemini_api_key', userKey);
      initGeminiAPI(userKey);
    }
  } else {
    initGeminiAPI(key);
  }
};

// Initialiser le chat
function initChat() {
  apiKeyPrompt();
  
  // Messages initiaux
  addAIMessage(`Bonjour ! 👋 Je suis votre AI Business Advisor, créé par Firas Bourguiba pour Think Positif.

Je suis là pour vous aider à structurer votre **transformation digitale** en utilisant les meilleures méthodologies.

Parlez-moi simplement de votre situation. Vous pouvez :
✅ Lancer une **startup**
✅ Transformer votre **organisation**
✅ Innover sur un **produit**
✅ Ou simplement partager votre **idée**

Je vais vous guider pas à pas. À vous! 😊`);
  
  // Event listeners
  sendBtnEl.addEventListener('click', sendMessage);
  userInputEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });
  
  // Buttons pour revenir au chat depuis dashboard
  const backToChatBtn = document.getElementById('backToChat');
  if (backToChatBtn) {
    backToChatBtn.addEventListener('click', () => {
      dashboardDiv.classList.add('hidden');
      userInputEl.focus();
    });
  }
  
  const closeDashboardBtn = document.getElementById('closeDashboard');
  if (closeDashboardBtn) {
    closeDashboardBtn.addEventListener('click', () => {
      dashboardDiv.classList.add('hidden');
      userInputEl.focus();
    });
  }
}

// Envoyer un message
async function sendMessage() {
  const message = userInputEl.value.trim();
  if (!message) return;
  
  // Ajouter le message utilisateur
  addUserMessage(message);
  userInputEl.value = '';
  
  // Mettre à jour la situation
  if (messageCount === 0) {
    userSituation = message;
  }
  
  // Analyser et déterminer méthodologie si c'est le premier message
  if (!currentMethodology) {
    currentMethodology = suggestMethodology(message);
  }
  
  messageCount++;
  
  // Afficher le spinner
  showLoadingSpinner(true);
  
  // Obtenir la réponse de l'IA
  try {
    const aiResponse = await callGeminiAPI(
      generatePromptWithContext(message),
      conversationHistory
    );
    
    // Ajouter la réponse à l'historique
    conversationHistory.push({
      role: 'user',
      content: message
    });
    conversationHistory.push({
      role: 'assistant',
      content: aiResponse
    });
    
    // Afficher la réponse
    addAIMessage(aiResponse);
    
    // Proposer des questions suivantes
    showProposedQuestions();
    
    // Vérifier si on doit montrer le dashboard (après 8-10 messages)
    if (messageCount >= 8 && !showedDashboard) {
      setTimeout(() => {
        showDashboard();
      }, 1000);
    }
    
  } catch (error) {
    console.error('Erreur:', error);
    addAIMessage(`❌ Désolé, une erreur s'est produite: ${error.message}`);
  } finally {
    showLoadingSpinner(false);
    userInputEl.focus();
  }
}

// Générer un prompt avec contexte méthodologique
function generatePromptWithContext(userMessage) {
  let contextPrompt = userMessage;
  
  if (currentMethodology) {
    contextPrompt = `L'utilisateur est dans le contexte de: "${currentMethodology.description}"

Réponds à: "${userMessage}"

Continue à guider selon la méthodologie actuelle, en posant des questions naturelles et encourageantes.`;
  }
  
  return contextPrompt;
}

// Ajouter message utilisateur
function addUserMessage(text) {
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message-bubble message-user fade-in';
  messageDiv.innerHTML = `<div class="bubble-content bubble-user-content">${escapeHtml(text)}</div>`;
  chatMessagesDiv.appendChild(messageDiv);
  scrollToBottom();
}

// Ajouter message IA
function addAIMessage(text) {
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message-bubble fade-in';
  
  // Parser le texte pour formater les bullet points
  const formattedText = formatAIResponse(text);
  messageDiv.innerHTML = `<div class="bubble-content bubble-ai-content">${formattedText}</div>`;
  chatMessagesDiv.appendChild(messageDiv);
  scrollToBottom();
}

// Formater la réponse IA (markdown simple)
function formatAIResponse(text) {
  let formatted = escapeHtml(text);
  
  // Convertir les bullet points
  formatted = formatted.replace(/^[\*\-] /gm, '• ');
  
  // Convertir les nombres suivis de point (listes numérotées)
  formatted = formatted.replace(/^(\d+)\. /gm, '$1. ');
  
  // Convertir les gras ** texte **
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Convertir les lignes vides en paragraphes
  const lines = formatted.split('\n');
  let html = '';
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim()) {
      html += lines[i] + '<br>';
    } else {
      html += '<br>';
    }
  }
  
  return html;
}

// Montrer les questions proposées
function showProposedQuestions() {
  proposedQuestionsDiv.innerHTML = '';
  
  if (!currentMethodology || currentStep >= currentMethodology.steps.length) {
    return;
  }
  
  const step = currentMethodology.steps[currentStep];
  if (step && step.questions) {
    const questionsToShow = step.questions.slice(0, 2); // Montrer 2 questions max
    
    questionsToShow.forEach(question => {
      const btn = document.createElement('button');
      btn.className = 'question-button';
      btn.textContent = `💡 ${question}`;
      btn.addEventListener('click', () => {
        userInputEl.value = question;
        sendMessage();
      });
      proposedQuestionsDiv.appendChild(btn);
    });
  }
}

// Montrer le dashboard de résumé
async function showDashboard() {
  if (showedDashboard) return;
  showedDashboard = true;
  
  // Générer le résumé
  const journeyText = `Vous avez partagé: "${userSituation}"
  
Après ${messageCount} échanges, vous avez exploré la méthodologie: ${currentMethodology.name}`;
  
  document.getElementById('journeySummary').textContent = journeyText;
  
  // Propositions basées sur la méthodologie
  const canvasText = currentMethodology.steps
    .slice(0, 3)
    .map((step, i) => `${i + 1}. ${step.title}: ${step.description}`)
    .join('\n');
  
  document.getElementById('canvasSummary').innerHTML = formatAIResponse(canvasText);
  
  // Montrer le dashboard
  dashboardDiv.classList.remove('hidden');
}

// Afficher/Masquer le spinner
function showLoadingSpinner(show) {
  if (show) {
    loadingSpinnerEl.classList.remove('hidden');
  } else {
    loadingSpinnerEl.classList.add('hidden');
  }
}

// Scroller vers le bas
function scrollToBottom() {
  setTimeout(() => {
    chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight;
  }, 100);
}

// Échapper le HTML
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Démarrer le chat
document.addEventListener('DOMContentLoaded', initChat);