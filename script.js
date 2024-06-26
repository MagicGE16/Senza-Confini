
//-------------------------------------- ANIMAZIONI SINISTRA -> DESTRA \/ ------------------------------------------

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('text_swoop_left_show');
        } else {
            entry.target.classList.remove('text_swoop_left_show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.text_swoop_left_hidden');
hiddenElements.forEach((el) => observer.observe(el));


//-------------------------------------- ANIMAZIONI FADE IN \/ ------------------------------------------

const observer_two = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('text_fade_in_anim_show');
        } else {
            entry.target.classList.remove('text_fade_in_anim_show');
        }
    });
});

const hiddenElements_two = document.querySelectorAll('.text_fade_in_anim_hidden');
hiddenElements_two.forEach((el) => observer_two.observe(el));


//-------------------------------------- ANIMAZIONI DESTRA -> SINISTRA \/ ------------------------------------------

const observer_three = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('text_swoop_right_show');
        } else {
            entry.target.classList.remove('text_swoop_right_show');
        }
    });
});

const hiddenElements_three = document.querySelectorAll('.text_swoop_right_hidden');
hiddenElements_three.forEach((el) => observer_three.observe(el));


//-------------------------------------- ANIMAZIONI BASSO -> ALTO \/ ------------------------------------------

const observer_four = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('text_swoop_up_show');
        } else {
            entry.target.classList.remove('text_swoop_up_show');
        }
    });
});

const hiddenElements_four = document.querySelectorAll('.text_swoop_up_hidden');
hiddenElements_four.forEach((el) => observer_four.observe(el));



document.getElementById("testo_iniziale_senzaconfini").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


document.getElementById("mission_button").addEventListener("click", function() {
    document.getElementById("mission_paragrafo").scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById("storie_button").addEventListener("click", function() {
    document.getElementById("storie_paragrafo").scrollIntoView({
        behavior: "smooth"
        });
        });
        
/*
document.getElementById("mission_button").addEventListener("click", function() {
    document.getElementById("mission_paragrafo").scrollIntoView({
        behavior: "smooth"
    });
});

*/
