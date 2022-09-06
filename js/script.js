/**
 * Instancia a classe para manipular animações de scroll.
 */
window.scroll = ScrollReveal({ 
    distance: '1rem',
    reset: true
});

/**
 * Faz a chamada dos métodos para exibição das classes.
 */
scroll.reveal('.title', {duration : 2000, origin: 'right'})
scroll.reveal('nav .icon', {duration : 2000, origin: 'right'})
scroll.reveal('.about', {duration : 2000, origin: 'bottom'})
scroll.reveal('.resume-box', {duration : 2000, origin:'bottom'})
scroll.reveal('#top', {duration : 2000, origin:'bottom'})
scroll.reveal('#links', {duration : 2000, origin:'bottom'})
scroll.reveal('#contact', {duration : 2500, origin:'bottom'})
scroll.reveal('#bottom', {duration : 3000, origin:'bottom'})

/**
 * Realiza a animação dos ícones do header de forma recorrente.
 */
setInterval(() => {
    jQuery('header .icon').children().each((index, element) => {
        const timeout = 50 * index;
        setTimeout(() => {
            jQuery(element).hide().fadeIn(200 + timeout);
        }, timeout);
    });
}, 5000);