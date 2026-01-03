let menuVisible = false;
const scriptURL = 'https://script.google.com/macros/s/AKfycbwhbz32v0Il6Js1LFCI9GRMAyfL9EULZOnxDNtrZgNWEgvvUDkAsUjM6T87AmNPPAglqA/exec';
const form = document.getElementById('miFormulario');
const btn = document.getElementById('btnEnviar');

// --- FORMULARIO ---
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        btn.disabled = true;
        btn.innerHTML = "Enviando... <i class='fas fa-spinner fa-spin'></i>";

        const formData = new FormData(form);

        fetch(scriptURL, { 
            method: 'POST', 
            body: formData,
            mode: 'no-cors' 
        })
        .then(() => {
            alert("¡Éxito! Tu mensaje ha sido enviado.");
            btn.disabled = false;
            btn.innerHTML = 'Enviar mensaje <i class="fa-solid fa-paper-plane"></i>';
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert("Algo salió mal.");
            btn.disabled = false;
            btn.innerHTML = 'Enviar mensaje <i class="fa-solid fa-paper-plane"></i>';
        });
    });
}

// --- MENÚ ---
function mostrarOcutarMenu() {
    let nav = document.getElementById("nav");
    nav.classList.toggle("responsive");
}

function seleccionar() {
    document.getElementById("nav").classList.remove("responsive");
}

// --- ANIMACIÓN DE SKILLS (Intersection Observer) ---
function iniciarObservador() {
    const skillsSection = document.getElementById('skills');
    const barras = document.querySelectorAll('.progreso');

    if (!skillsSection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                barras.forEach(barra => {
                    barra.classList.add('efecto-habilidades');
                });
                observer.unobserve(entry.target);
            }
        });
    }, { 
        // 0.1 significa que apenas entre un 10% de la sección, se activa.
        // Esto es ideal para secciones largas en tablets.
        threshold: 0.1,
        // Este margen de -100px evita que se dispare si apenas toca el borde,
        // obligando a que el usuario entre un poco más.
        rootMargin: "0px 0px -100px 0px" 
    });

    observer.observe(skillsSection);
}

// --- INICIALIZACIÓN ÚNICA ---
document.addEventListener("DOMContentLoaded", () => {
    // Forzamos scroll arriba al recargar para evitar bugs de posición
    if (window.scrollY > 0) {
        window.scrollTo(0, 0);
    }
    
    // Iniciamos el observador una sola vez
    iniciarObservador();
});

function efectoHabilidades() {
    const skillsSection = document.getElementById('skills');
    const barras = document.querySelectorAll('.progreso');

    if (!skillsSection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                barras.forEach(barra => {
                    barra.classList.add('efecto-habilidades');
                });
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.2 // Se activa cuando ves un poco de la sección
    });

    observer.observe(skillsSection);
}

document.addEventListener("DOMContentLoaded", efectoHabilidades);