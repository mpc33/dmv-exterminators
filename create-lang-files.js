const fs = require('fs');

const enTranslations = {
  "nav": {
    "home": "Home",
    "services": "Services",
    "about": "About",
    "contact": "Contact",
    "generalPest": "General Pest Control",
    "bedBug": "Bed Bug Control",
    "termite": "Termite Control",
    "rodent": "Rodent Control",
    "preventative": "Preventative Pest Control",
    "commercial": "Commercial Pest Control"
  },
  "hero": {
    "title": "Reliable Pest Control Services in the DMV",
    "subtitle": "Fast, Safe, and Effective Pest Solutions for Homes and Businesses in the DC Metro Area - Get a Free Inspection!",
    "cta": "Request a Free Quote",
    "serving": "Serving: Montgomery County • Prince Georges County • Fairfax County • Washington DC"
  },
  "services": {
    "title": "Our Professional Services",
    "residential": {
      "title": "Residential Pest Control",
      "description": "Protect your home from common pests like ants, spiders, roaches, and more.",
      "cta": "Learn More →"
    },
    "bedBug": {
      "title": "Bed Bug Treatment & Prevention",
      "description": "Expert termite inspections and treatments to safeguard your property.",
      "cta": "Learn More →"
    },
    "commercial": {
      "title": "Commercial Pest Control",
      "description": "Services tailored to businesses, restaurants, and other commercial properties.",
      "cta": "Learn More →"
    }
  },
  "language": {
    "toggle": "ES"
  }
};

const esTranslations = {
  "nav": {
    "home": "Inicio",
    "services": "Servicios",
    "about": "Nosotros",
    "contact": "Contacto",
    "generalPest": "Control General de Plagas",
    "bedBug": "Control de Chinches",
    "termite": "Control de Termitas",
    "rodent": "Control de Roedores",
    "preventative": "Control Preventivo de Plagas",
    "commercial": "Control de Plagas Comercial"
  },
  "hero": {
    "title": "Servicios Confiables de Control de Plagas en DMV",
    "subtitle": "Soluciones Rápidas, Seguras y Efectivas para Hogares y Negocios en el Área Metro de DC - ¡Obtenga una Inspección Gratuita!",
    "cta": "Solicitar Presupuesto Gratis",
    "serving": "Sirviendo: Condado de Montgomery • Condado de Prince Georges • Condado de Fairfax • Washington DC"
  },
  "services": {
    "title": "Nuestros Servicios Profesionales",
    "residential": {
      "title": "Control de Plagas Residencial",
      "description": "Proteja su hogar de plagas comunes como hormigas, arañas, cucarachas y más.",
      "cta": "Más Información →"
    },
    "bedBug": {
      "title": "Tratamiento y Prevención de Chinches",
      "description": "Inspecciones y tratamientos expertos contra termitas para proteger su propiedad.",
      "cta": "Más Información →"
    },
    "commercial": {
      "title": "Control de Plagas Comercial",
      "description": "Servicios adaptados a empresas, restaurantes y otras propiedades comerciales.",
      "cta": "Más Información →"
    }
  },
  "language": {
    "toggle": "EN"
  }
};

fs.writeFileSync('languages/en.json', JSON.stringify(enTranslations, null, 2));
fs.writeFileSync('languages/es.json', JSON.stringify(esTranslations, null, 2));

console.log('Language files created successfully!'); 