export const mockData = {
  // Información personal
  personalInfo: {
    name: "Roberto",
    title: "Full-Stack Developer Junior",
    email: "robertocrma04@gmail.com",
    phone: "+34 642 48 87 33",
    location: "Alcalá de Henares, Madrid",
    github: "https://github.com/wqryx",
    linkedin: "https://www.linkedin.com/in/roberto-cristian-mangiurea",
    bio: "Desarrollador full-stack apasionado por crear soluciones innovadoras. Especializado en tecnologías modernas como React, Node.js, Python y Java. Actualmente graduado en DAM (Desarrollo de Aplicaciones Multiplataforma) y siempre en busca de nuevos desafíos y oportunidades para crecer profesionalmente."
  },

  // Tecnologías y habilidades
  technologies: [
    { name: "JavaScript", level: 85, category: "Frontend", icon: "Code" },
    { name: "TypeScript", level: 80, category: "Frontend", icon: "FileCode" },
    { name: "React", level: 75, category: "Frontend", icon: "Layout" },
    { name: "HTML/CSS", level: 90, category: "Frontend", icon: "Palette" },
    { name: "Tailwind CSS", level: 85, category: "Frontend", icon: "Paintbrush" },
    { name: "Node.js", level: 80, category: "Backend", icon: "Server" },
    { name: "Python", level: 85, category: "Backend", icon: "Code2" },
    { name: "Java", level: 75, category: "Backend", icon: "Coffee" },
    { name: "MongoDB", level: 70, category: "Database", icon: "Database" },
    { name: "MySQL", level: 75, category: "Database", icon: "HardDrive" },
    { name: "PostgreSQL", level: 70, category: "Database", icon: "Layers" }
  ],

  // Proyectos
  projects: [
    {
      id: 1,
      title: "CyberShield",
      description: "Aplicación de ciberseguridad desarrollada para el Trabajo Final de Grado.",
      technologies: ["HTML", "CSS", "JavaScript", "React","Tailwind","TypeScript"],
      image: "https://i.ibb.co/dJjr2xs5/cybershield.png",
      github: "https://github.com/wqryx/CyberShield",
      demo: "https://cybershield-7w4x.onrender.com",
      featured: true
    },
    {
      id: 2,
      title: "Aplicación de Contactos Web",
      description: "Agenda de Contactos hecha con Astro y Docker.",
      technologies: ["Astro", "Docker"],
      image: "https://i.ibb.co/fw4bT6Y/contactos.png",
      github: "https://github.com/wqryx/Contactos-Web",
      demo: "https://contactos-astro.onrender.com/",
      featured: true
    },
    {
      id: 3,
      title: "Dashboard - CRM",
      description: "Desarrollo de un dashboard para un CRM utilizando HTML, CSS, JavaScript y Bootstrap. Participación en la maquetación y diseño de la interfaz de usuario.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: "https://i.ibb.co/tPBw7d6Y/dashboard.png",
      github: "",
      demo: "",
      featured: false
    },
    {
      id: 4,
      title: "Primer Portfolio",
      description: "Mi primer portfolio desarrollado con HTML, CSS, JavaScript y Tailwind.",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind"],
      image: "https://i.ibb.co/7JCKHpcb/portfolio.png",
      github: "https://github.com/wqryx/Primer-Portfolio",
      demo: "https://portfolio-roberto-cm.vercel.app",
      featured: false
    }
  ],

  // Experiencia
  experience: [
    {
      company: "CHISOFT-TPC",
      position: "Desarrollador Frontend - Prácticas DAM",
      period: "Marzo - Junio 2025",
      description: "Desarrollo de un dashboard para un CRM utilizando HTML, CSS, JavaScript y Bootstrap. Participación en la maquetación y diseño de la interfaz de usuario. Colaboración en un entorno de desarrollo en línea.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"]
    },
    {
      company: "COS - Aeropuerto de Barajas",
      position: "Técnico de Microinformática - Prácticas SMR",
      period: "Marzo - Junio 2023",
      description: "Resolución de incidencias de hardware y software en equipos de microinformática. Mantenimiento y configuración de sistemas para garantizar su correcto funcionamiento.",
      technologies: ["Hardware", "Software", "Sistemas", "Redes"]
    }
  ],

  // Educación
  education: [
    {
      institution: "Linkia FP",
      degree: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
      period: "2023 - 2025",
      description: "Programación Backend con Java y Python, diseño de bases de datos y desarrollo de aplicaciones web y móviles."
    },
    {
      institution: "Linkia FP",
      degree: "Grado Medio en Sistemas Microinformáticos y Redes (SMR)",
      period: "2021 - 2023",
      description: "Montaje y mantenimiento de equipos, instalación de sistemas operativos, y configuración de redes y servidores."
    }
  ],

  // Testimonios
  testimonials: [
    {
      name: "Carlos Fernández",
      position: "Senior Developer - CHISOFT-TPC",
      text: "Roberto demostró gran dedicación durante sus prácticas. Su capacidad de aprendizaje y adaptación a nuevas tecnologías es excelente. Siempre entrega trabajo de calidad.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
      name: "Ana Martínez",
      position: "Profesora DAM - Linkia FP",
      text: "Roberto es uno de los estudiantes más aplicados que he tenido. Su progreso en programación ha sido impresionante y su actitud colaborativa lo convierte en un gran compañero.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop"
    }
  ]
};