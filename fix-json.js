const fs = require('fs');

// English translations
const enContent = `{
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
  "whyChoose": {
    "title": "Why Choose DMV Exterminators?",
    "locallyOwned": {
      "title": "Locally Owned",
      "description": "Serving the DC Metro Area for over 20 years"
    },
    "licensed": {
      "title": "Licensed Experts",
      "description": "Understanding local pest challenges"
    },
    "petFriendly": {
      "title": "Pet Friendly",
      "description": "Safe solutions for your entire family"
    },
    "guaranteed": {
      "title": "Guaranteed Results",
      "description": "We stand behind our services"
    }
  },
  "reviews": {
    "title": "Trusted by Your Neighbors"
  },
  "quote": {
    "title": "Get Your Free Pest Control Quote Today!",
    "cta": "Schedule Free Inspection"
  },
  "about": {
    "title": "About DMV Exterminators",
    "description": "With over two decades of experience serving the DC Metropolitan area, DMV Exterminators has become the trusted name in pest control. Our commitment to using safe, effective methods and providing exceptional customer service has earned us the loyalty of thousands of satisfied customers.",
    "cta": "Learn More About Us →"
  },
  "footer": {
    "contact": {
      "title": "Contact Us",
      "area": "Washington DC Metro Area"
    },
    "services": {
      "title": "Services",
      "general": "General Pest Control",
      "bedBug": "Bed Bug Control",
      "preventative": "Preventative Services"
    },
    "company": {
      "title": "Company",
      "about": "About Us",
      "privacy": "Privacy Policy",
      "terms": "Terms of Service"
    },
    "social": {
      "title": "Follow Us"
    },
    "copyright": "© 2025 DMV Exterminators. All rights reserved."
  },
  "language": {
    "toggle": "ES"
  },
  "aboutPage": {
    "hero": {
      "title": "Our Story",
      "subtitle": "Serving the DMV Community Since 2005"
    },
    "history": {
      "title": "Our Local Roots",
      "description": "Founded in 2005 in Rockville, Maryland, DMV Exterminators was born from a simple mission: to provide our local community with reliable, effective pest control solutions. Our founder, Carlos Marchena, recognized the unique pest challenges faced by homeowners and businesses in the DC Metro area and set out to create a company that truly understands and serves our local community."
    },
    "mission": {
      "title": "Our Mission & Values",
      "founderCaption": "Carlos Marchena, Founder & Lead Technician",
      "value1Title": "Community First",
      "value1Description": "We're not just a pest control company - we're your neighbors. We're committed to making our community a better place to live and work.",
      "value2Title": "Local Expertise",
      "value2Description": "With 20+ years of experience in the DMV area, we understand the unique pest challenges of our region and how to solve them effectively."
    },
    "serviceArea": {
      "title": "Our Service Area",
      "weServe": "We Serve:",
      "montgomery": "Montgomery County, MD",
      "pg": "Prince George's County, MD",
      "fairfax": "Fairfax County, VA",
      "arlington": "Arlington County, VA",
      "dc": "Washington, DC",
      "surrounding": "And surrounding areas within 30 miles of Rockville"
    },
    "contact": {
      "title": "Contact Our Team",
      "getInTouch": "Get in Touch",
      "serving": "Serving the DMV Area",
      "hours": "Mon-Fri: 8am-6pm<br>Sat: 9am-2pm",
      "namePlaceholder": "Your Name",
      "emailPlaceholder": "Your Email",
      "phonePlaceholder": "Your Phone",
      "messagePlaceholder": "How can we help you?",
      "sendButton": "Send Message"
    }
  },
  "contactPage": {
    "hero": {
      "title": "Contact Our Team",
      "subtitle": "Get in touch with DMV Exterminators for fast, reliable pest control solutions"
    },
    "info": {
      "call": {
        "title": "Call Us",
        "hours": "Mon-Fri: 8am-6pm<br>Sat: 9am-2pm"
      },
      "email": {
        "title": "Email Us",
        "response": "Response within 24 hours"
      },
      "area": {
        "title": "Service Area",
        "radius": "30-mile radius of Rockville, MD",
        "counties": "Including DC, Montgomery, and Fairfax Counties"
      }
    },
    "form": {
      "title": "Request a Free Quote",
      "description": "Fill out the form below and our team will get back to you within 24 hours.",
      "nameLabel": "Full Name",
      "namePlaceholder": "Your Name",
      "emailLabel": "Email Address",
      "emailPlaceholder": "Your Email",
      "phoneLabel": "Phone Number",
      "phonePlaceholder": "Your Phone",
      "addressLabel": "Service Address",
      "addressPlaceholder": "Your Address",
      "messageLabel": "Message",
      "messagePlaceholder": "How can we help you?",
      "submitButton": "Submit Request"
    },
    "faq": {
      "title": "Frequently Asked Questions",
      "question1": "Are the treatments safe for my family and pets?",
      "answer1": "We prioritize the safety of your family and pets by using EPA-approved products and following strict application guidelines. Our technicians are trained to apply treatments in a manner that minimizes any potential risks.",
      "question2": "Will the pests be completely eliminated?",
      "answer2": "Our experienced technicians conduct thorough inspections to identify the source of the infestation and develop a targeted treatment plan. We are committed to completely eliminating the pests and will work with you to ensure your home is pest-free",
      "question3": "How much will the service cost?",
      "answer3": "We strive to offer high-quality pest control services at a competitive price point within the local market. The exact cost will depend on the type of pest, the size of the infestation, and the size of your property, so we recommend contacting us for a free, no-obligation quote.",
      "question4": "Are the treatments environmentally friendly?",
      "answer4": "We do offer eco-friendly chemical services. We understand the importance of protecting the environment and offer a range of treatment options that utilize more environmentally conscious products. Our team can discuss these options with you to find the best solution for your needs.",
      "question5": "How quickly can you respond to my pest problem?",
      "answer5": "We understand that pest problems can be urgent and disruptive. Depending on our current schedule and the severity of the issue, we can often respond as soon as the same day or the next day. Please call us to discuss your specific situation, and we will do our best to schedule your service as quickly as possible.",
      "question6": "Do you offer any guarantee?",
      "answer6": "Our guarantee is built on our 20 years of experience and our commitment to effective pest control. We are confident in our ability to get rid of pests, typically within 3 visits or less. To ensure long-term pest prevention, we also offer preventative treatment plans tailored to your specific needs."
    }
  },
  "generalPest": {
    "hero": {
      "title": "General Pest Control Services",
      "subtitle": "Keeping Your Home or Business Pest-Free in the DMV"
    },
    "description": {
      "title": "Comprehensive Pest Control Solutions",
      "text": "Are unwanted pests like ants, spiders, roaches, earwigs, and silverfish invading your space? Our general pest control services offer comprehensive solutions to identify, eliminate, and prevent these common nuisances. We use proven techniques and safe products to ensure a pest-free environment for your peace of mind."
    },
    "details": {
      "inspection": {
        "title": "Thorough Inspection",
        "text": "We conduct comprehensive inspections to identify pest entry points and nesting areas."
      },
      "treatment": {
        "title": "Safe Treatment",
        "text": "We use products and methods that are safe for your family and pets."
      },
      "prevention": {
        "title": "Prevention",
        "text": "Implementing long-term solutions to prevent future infestations."
      }
    },
    "pests": {
      "title": "Common Pests We Treat",
      "ants": {
        "title": "Ants",
        "text": "Eliminating ant colonies and preventing future invasions."
      },
      "spiders": {
        "title": "Spiders",
        "text": "Removing spiders and their webs from your property."
      },
      "cockroaches": {
        "title": "Cockroaches",
        "text": "Eradicating roach infestations at the source."
      },
      "earwigs": {
        "title": "Earwigs",
        "text": "Controlling earwig populations in and around your home."
      },
      "silverfish": {
        "title": "Silverfish",
        "text": "Treating silverfish infestations in dark, damp areas."
      },
      "bedbugs": {
        "title": "Bedbugs",
        "text": "Exterminating bedbugs with targeted treatments."
      }
    },
    "cta": {
      "title": "Ready to Take Back Your Space?",
      "text": "Contact us today for a free inspection and quote.",
      "button": "Schedule Free Inspection"
    }
  },
  "bedBugControl": {
    "hero": {
      "title": "Bed Bug Control Services",
      "subtitle": "Get Rid of Bed Bugs Quickly and Effectively in the DC Metro Area"
    },
    "description": {
      "title": "Expert Bed Bug Elimination",
      "text": "Bed bugs can be a persistent and frustrating problem. DMV Exterminators offers specialized bed bug control services, including heat treatments and targeted chemical treatments, designed to eliminate these pests from your home or business in Montgomery County, Prince Georges County, Fairfax County, and Washington D.C. We understand the urgency and work discreetly to restore your comfort."
    },
    "signs": {
      "title": "Signs of Bed Bug Infestation",
      "bites": {
        "title": "Bite Marks",
        "text": "Small, red, itchy welts in a line or cluster pattern on exposed skin."
      },
      "blood": {
        "title": "Blood Stains",
        "text": "Tiny blood spots on sheets, pillowcases, or mattresses."
      },
      "fecal": {
        "title": "Fecal Spots",
        "text": "Dark, rust-colored spots on bedding, furniture, or walls."
      },
      "odor": {
        "title": "Musty Odor",
        "text": "A sweet, musty smell in heavily infested areas."
      }
    },
    "prevention": {
      "title": "Bed Bug Prevention Tips",
      "travel": {
        "title": "Travel Precautions",
        "tip1": "Inspect hotel rooms before unpacking",
        "tip2": "Keep luggage on luggage racks",
        "tip3": "Wash clothes in hot water after travel"
      },
      "secondhand": {
        "title": "Secondhand Items",
        "tip1": "Inspect used furniture before bringing home",
        "tip2": "Wash secondhand clothing immediately",
        "tip3": "Consider professional inspection of large items"
      },
      "home": {
        "title": "Home Protection",
        "tip1": "Use protective mattress covers",
        "tip2": "Regularly vacuum and clean",
        "tip3": "Reduce clutter in bedrooms"
      }
    },
    "cta": {
      "title": "Need Bed Bug Treatment?",
      "text": "Contact us today for a free inspection and customized treatment plan.",
      "button": "Schedule Free Inspection"
    }
  },
  "termiteControl": {
    "hero": {
      "title": "Termite Control Services",
      "subtitle": "Protecting Your Property from Costly Damage in the DC Metro Area"
    },
    "description": {
      "title": "Expert Termite Protection",
      "text": "Termites can cause significant structural damage to homes and businesses in our region. DMV Exterminators provides expert termite control services, including thorough inspections to detect infestations, effective treatments using liquid and baiting systems, and preventative measures to safeguard your property in Montgomery County, Prince Georges County, Fairfax County, and DC. Don't wait until it's too late – protect your investment today."
    },
    "details": {
      "inspection": {
        "title": "Comprehensive Inspection",
        "text": "Thorough examination of your property to identify termite activity and potential entry points."
      },
      "treatment": {
        "title": "Advanced Treatment",
        "text": "Utilizing treatments and proven systems for maximum effectiveness."
      },
      "prevention": {
        "title": "Preventative Care",
        "text": "Ongoing monitoring and maintenance to prevent future infestations."
      }
    },
    "signs": {
      "title": "Signs of Termite Infestation",
      "mudTubes": {
        "title": "Mud Tubes",
        "text": "Small tunnels made of mud on foundation walls or in crawl spaces."
      },
      "hollowWood": {
        "title": "Hollow Wood",
        "text": "Wood that sounds hollow when tapped or appears damaged."
      },
      "swarmers": {
        "title": "Swarmers",
        "text": "Winged termites or discarded wings near windows or doors."
      },
      "frass": {
        "title": "Frass",
        "text": "Termite droppings that resemble sawdust or coffee grounds."
      }
    },
    "cta": {
      "title": "Protect Your Property Today",
      "text": "Schedule a free termite inspection and get a customized treatment plan.",
      "button": "Schedule Free Inspection"
    }
  },
  "rodentControl": {
    "hero": {
      "title": "Rodent Control Services",
      "subtitle": "Humane and Effective Removal in Montgomery County, Prince Georges County, Fairfax County, and DC"
    },
    "description": {
      "title": "Expert Rodent Removal",
      "text": "Mice, rats, and voles can be more than just a nuisance; they can carry diseases and cause damage to your property. Our rodent control services focus on humane and effective removal of these pests, followed by preventative strategies to keep them from returning to your home or business in the DMV area."
    },
    "details": {
      "inspection": {
        "title": "Thorough Inspection",
        "text": "Comprehensive assessment to identify entry points and nesting areas."
      },
      "removal": {
        "title": "Humane Removal",
        "text": "Using safe and ethical methods to remove rodents from your property."
      },
      "prevention": {
        "title": "Prevention",
        "text": "Implementing long-term solutions to prevent future infestations."
      }
    },
    "risks": {
      "title": "Health Risks of Rodent Infestations",
      "disease": {
        "title": "Disease Transmission",
        "text": "Rodents can carry and transmit various diseases through their droppings and urine."
      },
      "allergens": {
        "title": "Allergens",
        "text": "Rodent dander and droppings can trigger allergies and asthma attacks."
      },
      "damage": {
        "title": "Property Damage",
        "text": "Rodents can chew through wires, insulation, and structural elements."
      },
      "food": {
        "title": "Food Contamination",
        "text": "Rodents can contaminate food supplies and preparation areas."
      }
    },
    "prevention": {
      "title": "Rodent Prevention Tips",
      "entry": {
        "title": "Seal Entry Points",
        "tip1": "Inspect your property for gaps and holes",
        "tip2": "Seal cracks in foundation and walls",
        "tip3": "Install door sweeps and weather stripping"
      },
      "cleanliness": {
        "title": "Maintain Cleanliness",
        "tip1": "Store food in sealed containers",
        "tip2": "Regularly clean up crumbs and spills",
        "tip3": "Keep garbage in sealed bins"
      },
      "landscape": {
        "title": "Landscape Management",
        "tip1": "Trim vegetation away from buildings",
        "tip2": "Remove potential nesting sites",
        "tip3": "Keep firewood stored away from structures"
      }
    },
    "cta": {
      "title": "Need Help with Rodents?",
      "text": "Contact us today for a free inspection and customized rodent control plan.",
      "button": "Schedule Free Inspection"
    }
  },
  "preventativeControl": {
    "hero": {
      "title": "Preventative Pest Control Services",
      "subtitle": "Long-Term Protection for Your DMV Property"
    },
    "description": {
      "title": "Proactive Pest Protection",
      "text": "Don't wait for a pest problem to arise. Our preventative pest control services offer regular inspections, barrier treatments, and exclusion services to keep pests away from your home or business in Montgomery County, Prince Georges County, Fairfax County, and DC year-round. Proactive pest control is the key to a pest-free future."
    },
    "methods": {
      "title": "Our Protection Methods",
      "inspections": {
        "title": "Regular Inspections",
        "intro": "Comprehensive property assessments to identify potential issues:",
        "item1": "Quarterly property inspections",
        "item2": "Early detection of pest activity",
        "item3": "Identification of entry points"
      },
      "barriers": {
        "title": "Barrier Treatments",
        "intro": "Creating protective barriers around your property:",
        "item1": "Perimeter treatments",
        "item2": "Entry point sealing",
        "item3": "Safe, long-lasting products"
      },
      "exclusion": {
        "title": "Exclusion Services",
        "intro": "Preventing pest entry through structural improvements:",
        "item1": "Sealing cracks and gaps",
        "item2": "Installing door sweeps",
        "item3": "Improving ventilation"
      }
    },
    "benefits": {
      "title": "Benefits of Preventative Pest Control",
      "cost": {
        "title": "Cost Savings",
        "text": "Prevent expensive infestations and property damage before they occur."
      },
      "peace": {
        "title": "Peace of Mind",
        "text": "Enjoy a pest-free environment year-round with regular protection."
      },
      "health": {
        "title": "Health Protection",
        "text": "Reduce health risks associated with pests and their droppings."
      },
      "property": {
        "title": "Property Value",
        "text": "Maintain and potentially increase your property's value."
      }
    },
    "cta": {
      "title": "Ready for Year-Round Protection?",
      "text": "Contact us today to discuss our preventative pest control plans and find the right solution for your property.",
      "button": "Schedule Free Consultation"
    }
  },
  "commercialControl": {
    "hero": {
      "title": "Commercial Pest Control Services",
      "subtitle": "Tailored Solutions for Businesses in the DC Metro Area"
    },
    "description": {
      "title": "Professional Commercial Pest Management",
      "text": "DMV Exterminators understands the unique pest control needs of businesses, restaurants, and other commercial properties in Montgomery County, Prince Georges County, Fairfax County, and Washington D.C. We offer tailored commercial pest control solutions that are effective, discreet, and compliant with industry regulations. Protect your reputation and your bottom line with our professional services."
    },
    "benefits": {
      "title": "Why Choose Our Commercial Services",
      "scheduling": {
        "title": "Flexible Scheduling",
        "text": "Services scheduled around your business hours to minimize disruption."
      },
      "reputation": {
        "title": "Reputation",
        "text": "Maintain your business image with discreet and effective pest control services."
      },
      "cost": {
        "title": "Cost-Effective",
        "text": "Preventative programs to reduce long-term pest control costs."
      }
    },
    "cta": {
      "title": "Protect Your Business Today",
      "text": "Contact us for a customized commercial pest control solution that fits your business needs.",
      "button": "Request Commercial Quote"
    }
  }
}`;

// Spanish translations
const esContent = `{
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
  "whyChoose": {
    "title": "¿Por Qué Elegir DMV Exterminators?",
    "locallyOwned": {
      "title": "Propiedad Local",
      "description": "Sirviendo al área metropolitana de DC por más de 20 años"
    },
    "licensed": {
      "title": "Expertos Certificados",
      "description": "Entendemos los desafíos locales de plagas"
    },
    "petFriendly": {
      "title": "Amigable con Mascotas",
      "description": "Soluciones seguras para toda su familia"
    },
    "guaranteed": {
      "title": "Resultados Garantizados",
      "description": "Respaldamos nuestros servicios"
    }
  },
  "reviews": {
    "title": "Recomendado por sus Vecinos"
  },
  "quote": {
    "title": "¡Obtenga su Presupuesto Gratuito Hoy!",
    "cta": "Programar Inspección Gratuita"
  },
  "about": {
    "title": "Acerca de DMV Exterminators",
    "description": "Con más de dos décadas de experiencia sirviendo al área metropolitana de DC, DMV Exterminators se ha convertido en el nombre de confianza en el control de plagas. Nuestro compromiso con el uso de métodos seguros y efectivos, y brindar un servicio excepcional al cliente, nos ha ganado la lealtad de miles de clientes satisfechos.",
    "cta": "Conozca Más Sobre Nosotros →"
  },
  "footer": {
    "contact": {
      "title": "Contáctenos",
      "area": "Área Metropolitana de Washington DC"
    },
    "services": {
      "title": "Servicios",
      "general": "Control General de Plagas",
      "bedBug": "Control de Chinches",
      "preventative": "Servicios Preventivos"
    },
    "company": {
      "title": "Compañía",
      "about": "Sobre Nosotros",
      "privacy": "Política de Privacidad",
      "terms": "Términos de Servicio"
    },
    "social": {
      "title": "Síguenos"
    },
    "copyright": "© 2025 DMV Exterminators. Todos los derechos reservados."
  },
  "language": {
    "toggle": "EN"
  },
  "aboutPage": {
    "hero": {
      "title": "Nuestra Historia",
      "subtitle": "Sirviendo a la Comunidad de DMV desde 2005"
    },
    "history": {
      "title": "Nuestras Raíces Locales",
      "description": "Fundada en 2005 en Rockville, Maryland, DMV Exterminators nació de una misión simple: proporcionar a nuestra comunidad local soluciones confiables y efectivas para el control de plagas. Nuestro fundador, Carlos Marchena, reconoció los desafíos únicos de plagas que enfrentan los propietarios de viviendas y negocios en el área metropolitana de DC y se propuso crear una empresa que realmente entienda y sirva a nuestra comunidad local."
    },
    "mission": {
      "title": "Nuestra Misión y Valores",
      "founderCaption": "Carlos Marchena, Fundador y Técnico Principal",
      "value1Title": "La Comunidad Primero",
      "value1Description": "No somos solo una empresa de control de plagas - somos sus vecinos. Estamos comprometidos a hacer de nuestra comunidad un mejor lugar para vivir y trabajar.",
      "value2Title": "Experiencia Local",
      "value2Description": "Con más de 20 años de experiencia en el área de DMV, entendemos los desafíos únicos de plagas de nuestra región y cómo resolverlos de manera efectiva."
    },
    "serviceArea": {
      "title": "Nuestra Área de Servicio",
      "weServe": "Servimos a:",
      "montgomery": "Condado de Montgomery, MD",
      "pg": "Condado de Prince George's, MD",
      "fairfax": "Condado de Fairfax, VA",
      "arlington": "Condado de Arlington, VA",
      "dc": "Washington, DC",
      "surrounding": "Y áreas circundantes dentro de 30 millas de Rockville"
    },
    "contact": {
      "title": "Contacte a Nuestro Equipo",
      "getInTouch": "Póngase en Contacto",
      "serving": "Sirviendo al Área de DMV",
      "hours": "Lun-Vie: 8am-6pm<br>Sáb: 9am-2pm",
      "namePlaceholder": "Su Nombre",
      "emailPlaceholder": "Su Correo Electrónico",
      "phonePlaceholder": "Su Teléfono",
      "messagePlaceholder": "¿Cómo podemos ayudarle?",
      "sendButton": "Enviar Mensaje"
    }
  },
  "contactPage": {
    "hero": {
      "title": "Contacte a Nuestro Equipo",
      "subtitle": "Póngase en contacto con DMV Exterminators para soluciones rápidas y confiables de control de plagas"
    },
    "info": {
      "call": {
        "title": "Llámenos",
        "hours": "Lun-Vie: 8am-6pm<br>Sáb: 9am-2pm"
      },
      "email": {
        "title": "Envíenos un Email",
        "response": "Respuesta en 24 horas"
      },
      "area": {
        "title": "Área de Servicio",
        "radius": "Radio de 30 millas desde Rockville, MD",
        "counties": "Incluyendo DC, Condado de Montgomery y Condado de Fairfax"
      }
    },
    "form": {
      "title": "Solicite un Presupuesto Gratuito",
      "description": "Complete el formulario a continuación y nuestro equipo se comunicará con usted en 24 horas.",
      "nameLabel": "Nombre Completo",
      "namePlaceholder": "Su Nombre",
      "emailLabel": "Correo Electrónico",
      "emailPlaceholder": "Su Correo Electrónico",
      "phoneLabel": "Número de Teléfono",
      "phonePlaceholder": "Su Teléfono",
      "addressLabel": "Dirección de Servicio",
      "addressPlaceholder": "Su Dirección",
      "messageLabel": "Mensaje",
      "messagePlaceholder": "¿Cómo podemos ayudarle?",
      "submitButton": "Enviar Solicitud"
    },
    "faq": {
      "title": "Preguntas Frecuentes",
      "question1": "¿Son seguros los tratamientos para mi familia y mascotas?",
      "answer1": "Priorizamos la seguridad de su familia y mascotas utilizando productos aprobados por la EPA y siguiendo estrictas pautas de aplicación. Nuestros técnicos están capacitados para aplicar tratamientos de manera que minimice cualquier riesgo potencial.",
      "question2": "¿Se eliminarán completamente las plagas?",
      "answer2": "Nuestros técnicos experimentados realizan inspecciones exhaustivas para identificar la fuente de la infestación y desarrollar un plan de tratamiento específico. Estamos comprometidos a eliminar completamente las plagas y trabajaremos con usted para garantizar que su hogar esté libre de plagas.",
      "question3": "¿Cuánto costará el servicio?",
      "answer3": "Nos esforzamos por ofrecer servicios de control de plagas de alta calidad a un precio competitivo dentro del mercado local. El costo exacto dependerá del tipo de plaga, el tamaño de la infestación y el tamaño de su propiedad, por lo que recomendamos contactarnos para obtener un presupuesto gratuito sin compromiso.",
      "question4": "¿Los tratamientos son respetuosos con el medio ambiente?",
      "answer4": "Ofrecemos servicios químicos ecológicos. Entendemos la importancia de proteger el medio ambiente y ofrecemos una variedad de opciones de tratamiento que utilizan productos más respetuosos con el medio ambiente. Nuestro equipo puede discutir estas opciones con usted para encontrar la mejor solución para sus necesidades.",
      "question5": "¿Qué tan rápido pueden responder a mi problema de plagas?",
      "answer5": "Entendemos que los problemas de plagas pueden ser urgentes y perturbadores. Dependiendo de nuestro horario actual y la gravedad del problema, a menudo podemos responder el mismo día o al día siguiente. Llámenos para discutir su situación específica, y haremos todo lo posible para programar su servicio lo más rápido posible.",
      "question6": "¿Ofrecen alguna garantía?",
      "answer6": "Nuestra garantía se basa en nuestros 20 años de experiencia y nuestro compromiso con el control efectivo de plagas. Confiamos en nuestra capacidad para eliminar las plagas, típicamente en 3 visitas o menos. Para garantizar la prevención de plagas a largo plazo, también ofrecemos planes de tratamiento preventivo adaptados a sus necesidades específicas."
    }
  },
  "generalPest": {
    "hero": {
      "title": "Servicios de Control General de Plagas",
      "subtitle": "Mantenga su hogar o negocio libre de plagas en el DMV"
    },
    "description": {
      "title": "Soluciones Integrales de Control de Plagas",
      "text": "¿Están invadiendo su espacio plagas no deseadas como hormigas, arañas, cucarachas, tijeretas y lepismas? Nuestros servicios de control general de plagas ofrecen soluciones integrales para identificar, eliminar y prevenir estas molestias comunes. Utilizamos técnicas probadas y productos seguros para garantizar un ambiente libre de plagas para su tranquilidad."
    },
    "details": {
      "inspection": {
        "title": "Inspección Exhaustiva",
        "text": "Realizamos inspecciones completas para identificar puntos de entrada de plagas y áreas de anidación."
      },
      "treatment": {
        "title": "Tratamiento Seguro",
        "text": "Utilizamos productos y métodos que son seguros para su familia y mascotas."
      },
      "prevention": {
        "title": "Prevención",
        "text": "Implementamos soluciones a largo plazo para prevenir infestaciones futuras."
      }
    },
    "pests": {
      "title": "Plagas Comunes que Tratamos",
      "ants": {
        "title": "Hormigas",
        "text": "Eliminación de colonias de hormigas y prevención de futuras invasiones."
      },
      "spiders": {
        "title": "Arañas",
        "text": "Eliminación de arañas y sus telarañas de su propiedad."
      },
      "cockroaches": {
        "title": "Cucarachas",
        "text": "Erradicación de infestaciones de cucarachas desde la fuente."
      },
      "earwigs": {
        "title": "Tijeretas",
        "text": "Control de poblaciones de tijeretas dentro y alrededor de su hogar."
      },
      "silverfish": {
        "title": "Lepismas",
        "text": "Tratamiento de infestaciones de lepismas en áreas oscuras y húmedas."
      },
      "bedbugs": {
        "title": "Chinches",
        "text": "Exterminación de chinches con tratamientos específicos."
      }
    },
    "cta": {
      "title": "¿Listo para Recuperar su Espacio?",
      "text": "Contáctenos hoy para una inspección y presupuesto gratuitos.",
      "button": "Programar Inspección Gratuita"
    }
  },
  "bedBugControl": {
    "hero": {
      "title": "Servicios de Control de Chinches",
      "subtitle": "Elimine las Chinches Rápida y Efectivamente en el Área Metropolitana de DC"
    },
    "description": {
      "title": "Eliminación Experta de Chinches",
      "text": "Las chinches pueden ser un problema persistente y frustrante. DMV Exterminators ofrece servicios especializados de control de chinches, incluyendo tratamientos térmicos y tratamientos químicos específicos, diseñados para eliminar estas plagas de su hogar o negocio en el Condado de Montgomery, Condado de Prince Georges, Condado de Fairfax y Washington D.C. Entendemos la urgencia y trabajamos discretamente para restaurar su comodidad."
    },
    "signs": {
      "title": "Señales de Infestación de Chinches",
      "bites": {
        "title": "Marcas de Picaduras",
        "text": "Pequeñas ronchas rojas y con picazón en línea o patrón de grupo en la piel expuesta."
      },
      "blood": {
        "title": "Manchas de Sangre",
        "text": "Pequeñas manchas de sangre en sábanas, fundas de almohada o colchones."
      },
      "fecal": {
        "title": "Manchas Fecales",
        "text": "Manchas oscuras, color óxido en la ropa de cama, muebles o paredes."
      },
      "odor": {
        "title": "Olor a Humedad",
        "text": "Un olor dulce y a humedad en áreas muy infestadas."
      }
    },
    "prevention": {
      "title": "Consejos para Prevenir Chinches",
      "travel": {
        "title": "Precauciones al Viajar",
        "tip1": "Inspeccione las habitaciones de hotel antes de desempacar",
        "tip2": "Mantenga el equipaje en los portaequipajes",
        "tip3": "Lave la ropa con agua caliente después de viajar"
      },
      "secondhand": {
        "title": "Artículos de Segunda Mano",
        "tip1": "Inspeccione los muebles usados antes de llevarlos a casa",
        "tip2": "Lave la ropa de segunda mano inmediatamente",
        "tip3": "Considere una inspección profesional para artículos grandes"
      },
      "home": {
        "title": "Protección del Hogar",
        "tip1": "Use fundas protectoras para colchones",
        "tip2": "Aspire y limpie regularmente",
        "tip3": "Reduzca el desorden en los dormitorios"
      }
    },
    "cta": {
      "title": "¿Necesita Tratamiento para Chinches?",
      "text": "Contáctenos hoy para una inspección gratuita y un plan de tratamiento personalizado.",
      "button": "Programar Inspección Gratuita"
    }
  },
  "termiteControl": {
    "hero": {
      "title": "Servicios de Control de Termitas",
      "subtitle": "Protegiendo su Propiedad de Daños Costosos en el Área Metropolitana de DC"
    },
    "description": {
      "title": "Protección Experta contra Termitas",
      "text": "Las termitas pueden causar daños estructurales significativos en hogares y negocios de nuestra región. DMV Exterminators proporciona servicios expertos de control de termitas, incluyendo inspecciones minuciosas para detectar infestaciones, tratamientos efectivos utilizando sistemas líquidos y de cebos, y medidas preventivas para proteger su propiedad en el Condado de Montgomery, Condado de Prince Georges, Condado de Fairfax y DC. No espere hasta que sea demasiado tarde – proteja su inversión hoy."
    },
    "details": {
      "inspection": {
        "title": "Inspección Integral",
        "text": "Examen minucioso de su propiedad para identificar actividad de termitas y posibles puntos de entrada."
      },
      "treatment": {
        "title": "Tratamiento Avanzado",
        "text": "Utilizando tratamientos y sistemas probados para máxima efectividad."
      },
      "prevention": {
        "title": "Cuidado Preventivo",
        "text": "Monitoreo y mantenimiento continuos para prevenir futuras infestaciones."
      }
    },
    "signs": {
      "title": "Señales de Infestación de Termitas",
      "mudTubes": {
        "title": "Tubos de Barro",
        "text": "Pequeños túneles hechos de barro en paredes de cimientos o en espacios de arrastre."
      },
      "hollowWood": {
        "title": "Madera Hueca",
        "text": "Madera que suena hueca al golpearla o parece dañada."
      },
      "swarmers": {
        "title": "Enjambres",
        "text": "Termitas aladas o alas descartadas cerca de ventanas o puertas."
      },
      "frass": {
        "title": "Desechos",
        "text": "Excrementos de termitas que se asemejan a aserrín o granos de café."
      }
    },
    "cta": {
      "title": "Proteja su Propiedad Hoy",
      "text": "Programe una inspección gratuita de termitas y obtenga un plan de tratamiento personalizado.",
      "button": "Programar Inspección Gratuita"
    }
  },
  "rodentControl": {
    "hero": {
      "title": "Servicios de Control de Roedores",
      "subtitle": "Eliminación Humana y Efectiva en el Condado de Montgomery, Condado de Prince Georges, Condado de Fairfax y DC"
    },
    "description": {
      "title": "Eliminación Experta de Roedores",
      "text": "Los ratones, ratas y topillos pueden ser más que una simple molestia; pueden portar enfermedades y causar daños a su propiedad. Nuestros servicios de control de roedores se centran en la eliminación humana y efectiva de estas plagas, seguido de estrategias preventivas para evitar que regresen a su hogar o negocio en el área de DMV."
    },
    "details": {
      "inspection": {
        "title": "Inspección Completa",
        "text": "Evaluación exhaustiva para identificar puntos de entrada y áreas de anidación."
      },
      "removal": {
        "title": "Eliminación Humana",
        "text": "Utilizando métodos seguros y éticos para eliminar roedores de su propiedad."
      },
      "prevention": {
        "title": "Prevención",
        "text": "Implementando soluciones a largo plazo para prevenir futuras infestaciones."
      }
    },
    "risks": {
      "title": "Riesgos para la Salud de Infestaciones de Roedores",
      "disease": {
        "title": "Transmisión de Enfermedades",
        "text": "Los roedores pueden portar y transmitir varias enfermedades a través de sus excrementos y orina."
      },
      "allergens": {
        "title": "Alérgenos",
        "text": "La caspa y excrementos de roedores pueden desencadenar alergias y ataques de asma."
      },
      "damage": {
        "title": "Daño a la Propiedad",
        "text": "Los roedores pueden roer cables, aislamiento y elementos estructurales."
      },
      "food": {
        "title": "Contaminación de Alimentos",
        "text": "Los roedores pueden contaminar suministros de alimentos y áreas de preparación."
      }
    },
    "prevention": {
      "title": "Consejos para Prevenir Roedores",
      "entry": {
        "title": "Sellar Puntos de Entrada",
        "tip1": "Inspeccione su propiedad buscando brechas y agujeros",
        "tip2": "Selle grietas en cimientos y paredes",
        "tip3": "Instale burletes y protectores contra corrientes de aire"
      },
      "cleanliness": {
        "title": "Mantener la Limpieza",
        "tip1": "Almacene alimentos en contenedores sellados",
        "tip2": "Limpie regularmente migas y derrames",
        "tip3": "Mantenga la basura en contenedores sellados"
      },
      "landscape": {
        "title": "Gestión del Paisaje",
        "tip1": "Pode la vegetación alejándola de los edificios",
        "tip2": "Elimine posibles sitios de anidación",
        "tip3": "Mantenga la leña almacenada lejos de las estructuras"
      }
    },
    "cta": {
      "title": "¿Necesita Ayuda con Roedores?",
      "text": "Contáctenos hoy para una inspección gratuita y un plan personalizado de control de roedores.",
      "button": "Programar Inspección Gratuita"
    }
  },
  "preventativeControl": {
    "hero": {
      "title": "Servicios de Control Preventivo de Plagas",
      "subtitle": "Protección a Largo Plazo para su Propiedad en DMV"
    },
    "description": {
      "title": "Protección Proactiva contra Plagas",
      "text": "No espere a que surja un problema de plagas. Nuestros servicios de control preventivo de plagas ofrecen inspecciones regulares, tratamientos de barrera y servicios de exclusión para mantener las plagas alejadas de su hogar o negocio en el Condado de Montgomery, Condado de Prince Georges, Condado de Fairfax y DC durante todo el año. El control proactivo de plagas es la clave para un futuro libre de plagas."
    },
    "methods": {
      "title": "Nuestros Métodos de Protección",
      "inspections": {
        "title": "Inspecciones Regulares",
        "intro": "Evaluaciones completas de la propiedad para identificar problemas potenciales:",
        "item1": "Inspecciones trimestrales de la propiedad",
        "item2": "Detección temprana de actividad de plagas",
        "item3": "Identificación de puntos de entrada"
      },
      "barriers": {
        "title": "Tratamientos de Barrera",
        "intro": "Creación de barreras protectoras alrededor de su propiedad:",
        "item1": "Tratamientos perimetrales",
        "item2": "Sellado de puntos de entrada",
        "item3": "Productos seguros y duraderos"
      },
      "exclusion": {
        "title": "Servicios de Exclusión",
        "intro": "Prevención de entrada de plagas mediante mejoras estructurales:",
        "item1": "Sellado de grietas y huecos",
        "item2": "Instalación de burletes en puertas",
        "item3": "Mejora de la ventilación"
      }
    },
    "benefits": {
      "title": "Beneficios del Control Preventivo de Plagas",
      "cost": {
        "title": "Ahorro de Costos",
        "text": "Previene infestaciones costosas y daños a la propiedad antes de que ocurran."
      },
      "peace": {
        "title": "Tranquilidad",
        "text": "Disfrute de un ambiente libre de plagas durante todo el año con protección regular."
      },
      "health": {
        "title": "Protección de la Salud",
        "text": "Reduzca los riesgos para la salud asociados con las plagas y sus excrementos."
      },
      "property": {
        "title": "Valor de la Propiedad",
        "text": "Mantenga y potencialmente aumente el valor de su propiedad."
      }
    },
    "cta": {
      "title": "¿Listo para Protección Durante Todo el Año?",
      "text": "Contáctenos hoy para discutir nuestros planes de control preventivo de plagas y encontrar la solución adecuada para su propiedad.",
      "button": "Programar Consulta Gratuita"
    }
  },
  "commercialControl": {
    "hero": {
      "title": "Servicios de Control de Plagas Comercial",
      "subtitle": "Soluciones Personalizadas para Negocios en el Área Metropolitana de DC"
    },
    "description": {
      "title": "Gestión Profesional de Plagas Comerciales",
      "text": "DMV Exterminators comprende las necesidades únicas de control de plagas de empresas, restaurantes y otras propiedades comerciales en el Condado de Montgomery, Condado de Prince Georges, Condado de Fairfax y Washington D.C. Ofrecemos soluciones personalizadas de control de plagas comerciales que son efectivas, discretas y cumplen con las regulaciones de la industria. Proteja su reputación y sus resultados con nuestros servicios profesionales."
    },
    "benefits": {
      "title": "Por Qué Elegir Nuestros Servicios Comerciales",
      "scheduling": {
        "title": "Horarios Flexibles",
        "text": "Servicios programados alrededor de sus horarios comerciales para minimizar interrupciones."
      },
      "reputation": {
        "title": "Reputación",
        "text": "Mantenga la imagen de su negocio con servicios discretos y efectivos de control de plagas."
      },
      "cost": {
        "title": "Rentable",
        "text": "Programas preventivos para reducir los costos de control de plagas a largo plazo."
      }
    },
    "cta": {
      "title": "Proteja Su Negocio Hoy",
      "text": "Contáctenos para obtener una solución personalizada de control de plagas comercial que se adapte a las necesidades de su negocio.",
      "button": "Solicitar Presupuesto Comercial"
    }
  }
}`;

// Write the files
fs.writeFileSync('languages/en.json', enContent, 'utf8');
fs.writeFileSync('languages/es.json', esContent, 'utf8');

console.log('Language files created successfully!'); 