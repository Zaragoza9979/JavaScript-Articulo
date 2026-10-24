function alternarTema() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    const botonTexto = document.querySelector('#boton-tema .texto-modo');
    const esOscuro = body.classList.contains('dark-mode');

    localStorage.setItem('tema', esOscuro ? 'dark' : 'light');

    const icono = document.querySelector('#boton-tema');
    if (esOscuro) {
        icono.innerHTML = '☀️ <span class="texto-modo" data-es="Modo Claro" data-en="Light Mode">' + (document.getElementById('selector-idioma').value === 'en' ? 'Light Mode' : 'Modo Claro') + '</span>';
    } else {
        icono.innerHTML = '🌙 <span class="texto-modo" data-es="Modo Oscuro" data-en="Dark Mode">' + (document.getElementById('selector-idioma').value === 'en' ? 'Dark Mode' : 'Modo Oscuro') + '</span>';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('tema') === 'dark') {
        document.body.classList.add('dark-mode');
        const boton = document.querySelector('#boton-tema');
        if(boton) boton.innerHTML = '☀️ <span class="texto-modo">Modo Claro</span>';
    }
});

const traducciones = {
    es: {
        "titulo-principal": "IMAX: La Revolución del Cine",
        "subtitulo": "Cómo la tecnología de gran formato transformó nuestra forma de vivir el séptimo arte.",
        "seccion-1": "1. ¿Qué es la tecnología IMAX?",
        "seccion-2": "2. La experiencia inmersiva y el sonido",
        "seccion-3": "3. El impacto en las superproducciones modernas",
        "fuentes": "Fuentes y referencias"
    },
    en: {
        "titulo-principal": "IMAX: The Cinema Revolution",
        "subtitulo": "How large-format technology transformed the way we experience the seventh art.",
        "seccion-1": "1. What is IMAX technology?",
        "seccion-2": "2. The immersive experience and sound",
        "seccion-3": "3. The impact on modern blockbusters",
        "fuentes": "Sources and references"
    }
};

function cambiarIdioma(lang) {
    const elementos = document.querySelectorAll('[data-es]');
    elementos.forEach(el => {
        if (lang === 'en') {
            el.textContent = el.getAttribute('data-en');
        } else {
            el.textContent = el.getAttribute('data-es');
        }
    });

    const esOscuro = document.body.classList.contains('dark-mode');
    const botonTema = document.querySelector('#boton-tema');
    if (botonTema) {
        if (esOscuro) {
            botonTema.innerHTML = lang === 'en' ? '☀️ <span class="texto-modo">Light Mode</span>' : '☀️ <span class="texto-modo">Modo Claro</span>';
        } else {
            botonTema.innerHTML = lang === 'en' ? '🌙 <span class="texto-modo">Dark Mode</span>' : '🌙 <span class="texto-modo">Modo Oscuro</span>';
        }
    }
}