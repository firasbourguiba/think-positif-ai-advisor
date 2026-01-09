// MÉTHODOLOGIES - Basées sur les ateliers de Manuel Lesaicherre

const METHODOLOGIES = {
  // ===== LEAN STARTUP =====
  lean_startup: {
    name: "Créer votre produit initial",
    id: "lean_startup",
    emoji: "🚀",
    description: "Méthode pour lancer rapidement votre idée avec des clients réels",
    steps: [
      {
        number: 1,
        title: "Créer votre produit initial",
        description: "Lancez la version la plus simple possible de votre produit",
        questions: [
          "Quel produit ou service allez-vous créer ?",
          "Quelles fonctionnalités essentielles inclure ?",
          "Combien de temps pour lancer ?"
        ],
        tips: "Commencez petit, c'est plus rapide et moins risqué"
      },
      {
        number: 2,
        title: "Tester avec vos premiers clients",
        description: "Mettez votre produit entre les mains de vrais utilisateurs",
        questions: [
          "Qui sont vos premiers clients ?",
          "Combien de clients potentiels avez-vous au total (marché total) ?",
          "Quels chiffres allez-vous mesurer pour voir si ça marche ?"
        ],
        tips: "Les vrais clients vous donnent le meilleur feedback"
      },
      {
        number: 3,
        title: "Apprendre et s'améliorer",
        description: "Analysez ce que vous avez appris et adaptez votre stratégie",
        questions: [
          "Qu'avez-vous appris de vos premiers clients ?",
          "Allez-vous continuer avec cette idée ou la modifier ?"
        ],
        tips: "L'itération est la clé du succès"
      }
    ]
  },

  // ===== DESIGN THINKING =====
  design_thinking: {
    name: "Concevoir pour vos clients",
    id: "design_thinking",
    emoji: "💡",
    description: "Méthode pour créer des solutions que vos clients adorent",
    steps: [
      {
        number: 1,
        title: "Comprendre vos utilisateurs",
        description: "Écoutez et comprenez vraiment vos clients et leurs besoins",
        questions: [
          "Qui est votre client idéal ?",
          "Quel est son plus grand problème ?",
          "Comment vit-il ce problème au quotidien ?"
        ],
        tips: "L'empathie est le fondement du design"
      },
      {
        number: 2,
        title: "Définir le vrai problème",
        description: "Clarifiez précisément le problème à résoudre",
        questions: [
          "Quel est le problème central ?",
          "Pourquoi c'est important de le résoudre ?"
        ],
        tips: "Ne pas bien définir le problème, c'est se tromper de solution"
      },
      {
        number: 3,
        title: "Générer des idées créatives",
        description: "Explorez plusieurs solutions possibles",
        questions: [
          "Quelles solutions pourriez-vous imaginer ?",
          "Y a-t-il des approches originales ?"
        ],
        tips: "L'idée folle d'aujourd'hui est peut-être la meilleure solution"
      },
      {
        number: 4,
        title: "Créer un prototype simple",
        description: "Construisez une version rudimentaire pour tester",
        questions: [
          "Quelle est la version la plus simple à tester ?",
          "Comment voudriez-vous voir le prototype ?"
        ],
        tips: "Un mauvais prototype testé vaut mieux qu'une belle théorie"
      },
      {
        number: 5,
        title: "Tester avec vos utilisateurs",
        description: "Montrez votre prototype à vos clients et apprenez",
        questions: [
          "Qu'en pensent vos utilisateurs ?",
          "Qu'allez-vous changer ?"
        ],
        tips: "Le feedback réel est votre meilleur guide"
      }
    ]
  },

  // ===== LEADING CHANGE =====
  leading_change: {
    name: "Faire accepter le changement",
    id: "leading_change",
    emoji: "🔄",
    description: "Méthode pour transformer votre organisation avec succès (Kotter 8 étapes)",
    steps: [
      {
        number: 1,
        title: "Créer une urgence",
        description: "Montrez pourquoi le changement est nécessaire",
        questions: [
          "Pourquoi ce changement est-il urgent ?",
          "Quels sont les risques si vous ne changez pas ?",
          "Qu'est-ce qui pourrait mal tourner ?"
        ],
        tips: "Les gens bougent quand ils comprennent l'urgence"
      },
      {
        number: 2,
        title: "Constituer une équipe guide",
        description: "Réunissez les bonnes personnes qui croient au changement",
        questions: [
          "Qui sont les leaders du changement dans votre organisation ?",
          "Avez-vous les meilleures compétences ?"
        ],
        tips: "L'équipe doit avoir du pouvoir et du crédibilité"
      },
      {
        number: 3,
        title: "Créer une vision claire",
        description: "Définissez précisément où vous voulez aller",
        questions: [
          "Quelle est votre vision du futur ?",
          "Comment sera différente votre organisation ?"
        ],
        tips: "Une vision claire inspire les équipes"
      },
      {
        number: 4,
        title: "Communiquer la vision",
        description: "Expliquez le changement clairement et régulièrement",
        questions: [
          "Comment allez-vous communiquer ?",
          "Qui doit être informé en priorité ?"
        ],
        tips: "La communication répétée ancre le message"
      },
      {
        number: 5,
        title: "Autoriser les actions",
        description: "Enlevez les obstacles et laissez les gens agir",
        questions: [
          "Quels obstacles freinent le changement ?",
          "Comment éliminer les barrières ?"
        ],
        tips: "Les équipes doivent pouvoir agir sans blocages"
      },
      {
        number: 6,
        title: "Créer des succès rapides",
        description: "Montrez que le changement marche avec des petites victoires",
        questions: [
          "Quel premier objectif pouvez-vous atteindre rapidement ?",
          "Comment célébrer cette première victoire ?"
        ],
        tips: "Les petites victoires motivent pour les grands changements"
      },
      {
        number: 7,
        title: "Consolider les gains",
        description: "Construisez sur ces succès pour aller plus loin",
        questions: [
          "Comment amplifier les résultats ?",
          "Quels objectifs suivants ?"
        ],
        tips: "Ne vous arrêtez pas trop tôt"
      },
      {
        number: 8,
        title: "Ancrer la nouvelle culture",
        description: "Intégrez le changement dans vos habitudes durables",
        questions: [
          "Comment faire du changement une nouvelle normalité ?",
          "Comment l'enseigner aux nouveaux arrivants ?"
        ],
        tips: "La culture durable change prend du temps"
      }
    ]
  },

  // ===== OPEN INNOVATION =====
  open_innovation: {
    name: "Innover ensemble",
    id: "open_innovation",
    emoji: "🌐",
    description: "Méthode pour innover en collaborant avec l'extérieur",
    steps: [
      {
        number: 1,
        title: "Définir le défi",
        description: "Clarifiez précisément le problème que vous voulez résoudre",
        questions: [
          "Quel est votre défi d'innovation ?",
          "Pourquoi c'est difficile à résoudre seul ?"
        ],
        tips: "Un bon défi attire les bonnes idées"
      },
      {
        number: 2,
        title: "Chercher des idées externes",
        description: "Explorez les solutions d'autres entreprises et partenaires",
        questions: [
          "Qui pourrait vous aider à innover ?",
          "Quelles technologies externes existent ?",
          "Qui coinvente avec vous ?"
        ],
        tips: "Les meilleures idées viennent souvent de l'extérieur"
      },
      {
        number: 3,
        title: "Collaborer et coproduit",
        description: "Travaillez ensemble pour créer quelque chose de nouveau",
        questions: [
          "Qui pourriez-vous coopter dans votre projet ?",
          "Comment structurer une collaboration gagnant-gagnant ?"
        ],
        tips: "La collaboration multiplie les ressources et l'expertise"
      }
    ]
  }
};

// Fonction pour obtenir une méthodologie
function getMethodology(id) {
  return METHODOLOGIES[id] || null;
}

// Fonction pour obtenir toutes les méthodologies
function getAllMethodologies() {
  return Object.values(METHODOLOGIES);
}

// Fonction pour déterminer la meilleure méthodologie basée sur la situation
function suggestMethodology(userInput) {
  const input = userInput.toLowerCase();
  
  // Keywords pour Lean Startup
  if (input.includes('startup') || input.includes('produit') || input.includes('lancer') || input.includes('client')) {
    return METHODOLOGIES.lean_startup;
  }
  
  // Keywords pour Design Thinking
  if (input.includes('design') || input.includes('utilisateur') || input.includes('idée') || input.includes('créer') || input.includes('solution')) {
    return METHODOLOGIES.design_thinking;
  }
  
  // Keywords pour Leading Change
  if (input.includes('changement') || input.includes('organisation') || input.includes('équipe') || input.includes('culture') || input.includes('transformation')) {
    return METHODOLOGIES.leading_change;
  }
  
  // Keywords pour Open Innovation
  if (input.includes('innovation') || input.includes('collaboration') || input.includes('partenaire') || input.includes('externe')) {
    return METHODOLOGIES.open_innovation;
  }
  
  // Par défaut, retourner Lean Startup
  return METHODOLOGIES.lean_startup;
}

// Fonction pour extraire la première question d'une méthodologie
function getFirstQuestion(methodology) {
  if (methodology && methodology.steps && methodology.steps.length > 0) {
    const questions = methodology.steps[0].questions;
    return questions[0] || "Parlez-moi de votre situation";
  }
  return "Parlez-moi de votre situation";
}