//-------------------------------------- ANIMAZIONE FADE IN \/ ------------------------------------------

const observer_two = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('text_fade_in_anim_show');
        }

        //else {
        //    entry.target.classList.remove('text_fade_in_anim_show');
        //}

    });
});

const hiddenElements_two = document.querySelectorAll('.text_fade_in_anim_hidden');
hiddenElements_two.forEach((el) => observer_two.observe(el));


//-------------------------------------- ANIMAZIONI SINISTRA -> DESTRA \/ ------------------------------------------

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('text_swoop_left_show');
        } 
    });
});

const hiddenElements = document.querySelectorAll('.text_swoop_left_hidden');
hiddenElements.forEach((el) => observer.observe(el));


//-------------------------------------- ANIMAZIONI DESTRA -> SINISTRA \/ ------------------------------------------

const observer_three = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('text_swoop_right_show');
        }
    });
});

const hiddenElements_three = document.querySelectorAll('.text_swoop_right_hidden');
hiddenElements_three.forEach((el) => observer_three.observe(el));


//-------------------------------------- ANIMAZIONI BASSO -> ALTO \/ ------------------------------------------

const observer_four = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('text_swoop_up_show');
        } 
    });
});

const hiddenElements_four = document.querySelectorAll('.text_swoop_up_hidden');
hiddenElements_four.forEach((el) => observer_four.observe(el));

//-------------------------------------- ANIMAZIONI ALTO -> BASSO \/ ------------------------------------------

const observer_five = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('text_swoop_down_show');
        } 
    });
});

const hiddenElements_five = document.querySelectorAll('.text_swoop_down_hidden');
hiddenElements_five.forEach((el) => observer_five.observe(el));

//-------------------------------------- SCROLL ORIZZONTALE \/ ------------------------------------------


document.addEventListener('DOMContentLoaded', function() {
    const SCROLL_SPEED = 2; // Fattore di moltiplicazione per aumentare la velocità dello scorrimento
    let targetScroll = 0;
    let currentScroll = 0;

    function smoothScroll() {
        currentScroll += (targetScroll - currentScroll) * 0.1; // Easing
        window.scrollTo({
            left: currentScroll,
            behavior: 'auto' // Imposta su 'auto' per evitare problemi di prestazioni
        });
        requestAnimationFrame(smoothScroll);
    }

    window.addEventListener('wheel', function(event) {
        const maxScroll = document.body.scrollWidth - window.innerWidth;
        targetScroll += event.deltaY * SCROLL_SPEED;
        targetScroll = Math.max(0, Math.min(targetScroll, maxScroll)); // Limita targetScroll
        event.preventDefault(); // Previeni lo scorrimento verticale
    });

    // Avvia l'animazione
    requestAnimationFrame(smoothScroll);
});

//-------------------------------------- BOTTONE TORNA ALL'INIZIO \/ ------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const SCROLL_SPEED = 2; // Fattore di moltiplicazione per aumentare la velocità dello scorrimento
    let targetScroll = 0;
    let currentScroll = 0;

    function smoothScroll() {
        currentScroll += (targetScroll - currentScroll) * 0.1; // Easing
        window.scrollTo({
            left: currentScroll,
            behavior: 'auto' // Imposta su 'auto' per evitare problemi di prestazioni
        });
        requestAnimationFrame(smoothScroll);
    }

    window.addEventListener('wheel', function(event) {
        const maxScroll = document.body.scrollWidth - window.innerWidth;
        targetScroll += event.deltaY * SCROLL_SPEED;
        targetScroll = Math.max(0, Math.min(targetScroll, maxScroll)); // Limita targetScroll
        event.preventDefault(); // Previeni lo scorrimento verticale
    });

    // Listener per il pulsante
    document.getElementById("torna_all_inizio_button").addEventListener("click", function() {
        targetScroll = 0; // Imposta targetScroll a 0 per tornare all'inizio
    });

    // Avvia l'animazione
    requestAnimationFrame(smoothScroll);
});