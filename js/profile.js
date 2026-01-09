// PROFIL PERSONNEL - Firas Bourguiba

const PROFILE = {
  fullName: "Firas Bourguiba",
  title: "Étudiant en Data Science & Intelligence Artificielle | Ynov Paris",
  shortBio: "Étudiant en Bachelor Informatique recherchant une alternance en intelligence/data analytics",
  email: "Firasbourguiba98@gmail.com",
  phone: "+33 6 62 05 00 42",
  location: "Paris, France",
  
  social: {
    linkedin: "https://linkedin.com/in/bourguiba-firas-a0453428r",
    github: "https://github.com/firasbourguiba"
  },
  
  skills: {
    languages: ["Python", "SQL", "JavaScript", "PHP", "Go"],
    bi_tools: ["Tableau", "Power BI", "Excel avancé", "Matplotlib", "Pandas"],
    ml_ai: ["TensorFlow", "PyTorch", "Keras", "NLP", "Deep Learning", "Computer Vision"],
    other: ["ETL", "Business Intelligence", "Data Visualization", "Airflow", "DBeaver"]
  },
  
  languages: [
    { lang: "Français", level: "Avancé" },
    { lang: "Anglais", level: "Avancé" },
    { lang: "Arabe", level: "Maternelle" }
  ],
  
  portfolio: [
    {
      name: "LVMH BI Stratégique",
      url: "https://lvmh-bi-strategique.netlify.app/",
      description: "Dashboard BI stratégique pour optimisation performance commerciale",
      impact: "Augmentation de 15% du chiffre d'affaires"
    },
    {
      name: "Groupe La Poste",
      url: "https://groupe-la-poste.netlify.app/",
      description: "Prévision IA + KPI pour optimiser saturation relais/lockers",
      impact: "Réduction retours & km à vide, amélioration NPS"
    },
    {
      name: "SUEZ Case Study",
      url: "https://suez-case.netlify.app/",
      description: "ML prédictif + GenAI pour optimiser paramètres physico-chimiques",
      impact: "Réduction coûts réactifs, reporting temps réel"
    },
    {
      name: "ETAM Strategic",
      url: "https://etam-strategic.netlify.app/",
      description: "Étude BI complète : analyse marché, solutions data-driven",
      impact: "Roadmap 12 mois & ROI financier défini"
    }
  ],
  
  experience: [
    {
      company: "Engie",
      role: "Analyse de tweets clients",
      duration: "Récent",
      description: "Création tableaux de bord Power BI, synthèse sentiments clients via KPI",
      skills: ["Python", "Pandas", "SQL", "Power BI", "NLP"]
    },
    {
      company: "Data analyse/BI Freelance",
      role: "Consultant Data",
      duration: "02/2025 - 04/2025",
      description: "Collecte, nettoyage et transformation données ETL",
      skills: ["ETL", "Python", "Communication Stratégique"]
    },
    {
      company: "Association La Famille au Grand Coeur",
      role: "Gestion de projet",
      duration: "12/2024 - 02/2025",
      description: "Pilotage création site web de A à Z",
      skills: ["Gestion de Projet", "Autonomie", "Web Development"]
    }
  ],
  
  education: [
    {
      school: "Ynov Campus Paris",
      degree: "Bachelor Informatique",
      startDate: "09/2023",
      status: "En cours"
    },
    {
      school: "ISIMM - Institut Supérieur d'Informatique et de Mathématiques",
      degree: "Licence EEA",
      startDate: "2022",
      endDate: "07/2023"
    }
  ],
  
  engagements: [
    {
      org: "JCI (Jeunes Chambre Internationale)",
      role: "Membre",
      duration: "2018 - 2022",
      description: "Participation à projets communautaires & développement leadership"
    },
    {
      org: "IEEE",
      role: "Membre",
      duration: "2022 - 2023",
      description: "Suivi actualités technologiques & innovations en électronique/IA"
    }
  ]
};

// THINK POSITIF - Informations
const THINK_POSITIF = {
  name: "Think Positif",
  tagline: "Un monde d'opportunités digitales",
  description: "Cabinet de conseil en transformation digitale et innovation numérique depuis 2019",
  website: "https://www.thinkpositif.eu",
  contactForm: "https://www.thinkpositif.eu/contact/",
  email: "contact@thinkpositif.eu",
  location: "Paris, Île-de-France",
  
  founder: {
    name: "Manuel Lesaicherre",
    title: "Fondateur & Directeur",
    experience: "20 ans d'expérience en innovation digitale et communication",
    expertise: ["Digital Transformation", "Change Management", "Innovation", "Formation"]
  },
  
  mission: "Accompagner les organisations et les écoles dans leur transformation digitale en gardant l'humain au centre",
  
  services: [
    "Conseil en transformation digitale",
    "Formation et coaching",
    "Innovation numérique intelligente",
    "Conduite du changement"
  ],
  
  methodologies: [
    { name: "Lean Startup", description: "Build-Measure-Learn feedback loop" },
    { name: "Design Thinking", description: "Centré utilisateur pour innover" },
    { name: "Leading Change", description: "Framework Kotter pour transformations" },
    { name: "Open Innovation", description: "Innover en collaboration externe" }
  ],
  
  notable_clients: [
    "IONIS Education Group",
    "ESME-Sudria",
    "Sorbonne Université",
    "Orange",
    "CCM Benchmark Group",
    "Giphar",
    "UCO Vannes"
  ],
  
  colors: {
    primary: "#d4af37",
    dark: "#1a1a1a"
  }
};

// Fonction pour obtenir le profil
function getProfile() {
  return PROFILE;
}

// Fonction pour obtenir les infos Think Positif
function getThinkPositif() {
  return THINK_POSITIF;
}

// Fonction pour format contact
function getContactInfo() {
  return {
    firas: {
      email: PROFILE.email,
      phone: PROFILE.phone,
      linkedin: PROFILE.social.linkedin
    },
    thinkPositif: {
      email: THINK_POSITIF.email,
      website: THINK_POSITIF.website,
      contactForm: THINK_POSITIF.contactForm
    }
  };
}