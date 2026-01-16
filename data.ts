
import { Project, Experience, SkillCategory, Achievement } from './types';

export const SKILLS: SkillCategory[] = [
  {
    category: "Data Science/AI",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "SQL", "Statistical Modeling", "ETL", "Data Cleaning"]
  },
  {
    category: "Visualization",
    skills: ["Tableau", "Matplotlib", "Seaborn", "PowerBI", "Excel"]
  },
  {
    category: "Development",
    skills: ["C++", "JavaScript", "React", "Node.js", "OpenAI API", "Git"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "rpa-bot",
    title: "AI-Powered RPA Auto-Reply Bot",
    year: "2024",
    category: "AI",
    link: "https://github.com/Tahir0763/Auto_Reply_Bot",
    description: [
      "Designed a hands-free bot bridging RPA and Generative AI to 'read' screens and automate WhatsApp Web interactions.",
      "Integrated OpenAI’s GPT-3.5 for sentiment-aware, multi-lingual (Urdu/English) humor and creative responses.",
      "Engineered low-latency screen control with PyAutoGUI and Pyperclip for targeted user detection and rapid replies."
    ],
    tags: ["Python", "RPA", "OpenAI API", "PyAutoGUI"],
    image: "/projects/auto-reply-gen.png"
  },
  {
    id: "prompt-widget",
    title: "Windows-based AI Prompt Enhancer",
    year: "2025",
    category: "AI",
    link: "https://github.com/Tahir0763/Windows-based-AI-prompt-enhancer-widget",
    description: [
      "A lightweight Windows desktop widget that instantly transforms basic ideas into professional, high-performance AI prompts.",
      "Features an AI-Powered overlay widget for quick interactions and seamless clipboard integration.",
      "Supports model selection (Gemini, OpenRouter) and custom prompt optimization workflows."
    ],
    tags: ["Python", "Windows API", "Gemini API", "Desktop Widget"],
    image: "/projects/prompt-widget-gen.png"
  },
  {
    id: "ai-meeting",
    title: "AI Meeting Intelligence Suite",
    year: "2025",
    category: "AI",
    link: "https://github.com/Tahir0763/scribeAi-intelligent-meeting-notes-",
    description: [
      "Engineered a scalable NLP system for tracking and summarizing meeting transcripts with 50+ participants.",
      "Implemented automated data extraction algorithms for task prioritization and sentiment analysis.",
      "Generated comprehensive analytics reports and personalized automated follow-up workflows."
    ],
    tags: ["NLP", "Python", "Data Extraction", "Automation"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "agrivision",
    title: "AgriVision AI",
    year: "2024",
    category: "AI",
    link: "https://github.com/Tahir0763",
    description: [
      "Developed a predictive modeling platform integrating satellite imagery to classify crop types and detect soil diseases.",
      "Engineered data pipelines to process spatial and environmental datasets for risk mitigation.",
      "Utilized Computer Vision for localized soil health indicators and farming recommendations."
    ],
    tags: ["Computer Vision", "Predictive Analytics", "GIS", "Python"],
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "scheduler",
    title: "Academic Time Scheduler",
    year: "2024",
    category: "Dev",
    link: "https://github.com/Tahir0763",
    description: [
      "Built a robust scheduling system leveraging constraint-based optimization and a high-performance C++ backend.",
      "Applied advanced data structures to solve complex resource allocation problems."
    ],
    tags: ["C++", "Optimization", "Algorithms", "Backend"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "jarvis",
    title: "Jarvis Personal AI Assistant",
    year: "2024",
    category: "AI",
    link: "https://github.com/Tahir0763/Jarvis_virtual_assistant",
    description: [
      "Developed a voice-activated assistant using Python and OpenAI API for complex task automation.",
      "Integrated data visualization modules (Pandas, Matplotlib) for real-time reporting via voice commands."
    ],
    tags: ["OpenAI API", "Voice AI", "Automation", "Matplotlib"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Freelance Data Analyst",
    company: "Upwork & Fiverr",
    location: "Remote",
    period: "March 2025 – Present",
    details: [
      "Executing end-to-end data analysis for international clients using Python and SQL to derive insights.",
      "Designing interactive dashboards in Tableau and PowerBI, improving stakeholder decision clarity.",
      "Managing ETL processes to clean and transform messy datasets for predictive modeling readiness."
    ]
  },
  {
    role: "C++ Intern",
    company: "Code Alpha",
    location: "Remote",
    period: "June 2025 – Jan 2026",
    details: [
      "Developed and optimized C++ applications, enhancing real-time data processing for 3+ projects.",
      "Improved system performance by 10% and reliability of existing systems through debugging.",
      "Implemented efficient algorithms, reducing processing time by 15%."
    ]
  },
  {
    role: "IT Support Specialist",
    company: "Samboyan Technologies",
    location: "Lahore, Pakistan",
    period: "Jan 2025 – May 2025",
    details: [
      "Managed data entry and processing using Microsoft Office and custom software, improving workflow efficiency by 15%.",
      "Maintained hardware and software systems, reducing downtime by troubleshooting technical issues."
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "AI Hackathon Winner",
    subtitle: "Google Developers Group (GDG), FAST-NUCES"
  },
  {
    title: "Professional Badminton Player",
    subtitle: "Two-time University Sports Finalist"
  },
  {
    title: "University Cricket Captain",
    subtitle: "Led the squad in inter-university competitions"
  }
];

export const CERTIFICATIONS = [
  "Google Data Analytics Professional Certificate",
  "Python for Data Science & Machine Learning (Coursera)",
  "Advanced SQL for Data Scientists (Udemy)",
  "Web Development Bootcamp (Udemy)"
];
