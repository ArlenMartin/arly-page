document.addEventListener('DOMContentLoaded', function() {
    console.log('Página de animales acuáticos cargada');
    
// Modifica el array aquaticAnimals con tus rutas locales
const aquaticAnimals = [
    { 
        name: 'Delfín', 
        image: 'images/delfin.jpeg'  // Ruta relativa desde tu HTML
    },
    { 
        name: 'Tiburón', 
        image: 'images/tiburon.jpg'
    },
    { 
        name: 'Pulpo', 
        image: 'images/pulpo.jpeg'
    },
    // Añade más animales según necesites
     { 
        name: 'Tortuga marina', 
        image: 'images/tortuga.jpeg'
    },
     { 
        name: 'caballo de mar', 
        image: 'images/caballo.jpeg'
    },
     { 
        name: 'Medusa', 
        image: 'images/medusa.jpg'
    },
     { 
        name: 'Ballena', 
        image: 'images/ballena.jpeg'
    },
     { 
        name: 'Pez payaso', 
        image: 'images/payaso.jpeg'
    },
];

    // Generar galería dinámica
    const gallery = document.getElementById('image-gallery');
    aquaticAnimals.forEach(animal => {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'gallery-item';
        imgContainer.innerHTML = `
            <img src="${animal.image}" alt="${animal.name}">
            <p>${animal.name}</p>
        `;
        gallery.appendChild(imgContainer);
    });

    // Interacciones
    const ctaButton = document.getElementById('cta-button');
    ctaButton.addEventListener('click', () => {
        alert('¡Prepárate para explorar el fascinante mundo acuático! 🐋');
    });

    const donateBtn = document.getElementById('donate-btn');
    donateBtn.addEventListener('click', () => {
        const donation = prompt('¿Cuánto te gustaría donar para la conservación marina? (USD)');
        if (donation) {
            alert(`¡Gracias por tu donación de $${donation}! Tu apoyo ayuda a proteger los océanos.`);
        }
    });

    // Efecto scroll suave para navegación
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });

    // Cambiar color de header al hacer scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'var(--dark-color)';
        } else {
            header.style.backgroundColor = 'var(--primary-color)';
        }
    });
});