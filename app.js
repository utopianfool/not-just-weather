/* Navigation */
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    // get all nav links
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle nav
    burger.addEventListener('click', function() {
        nav.classList.toggle('nav-active');
        
        // Animate links
        navLinks.forEach((link, index) => {
            // console.log(index);
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.3}s`; // add delay at end
            }
        });

        // Animate burger
        burger.classList.toggle('toggle');
    });

}

const slider = () => {
    /* Slider */
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');

    // Buttons
    const prevBtn = document.querySelector('#prev-button');
    const nextBtn = document.querySelector('#next-button');

    let counter = 0;
    const size = carouselImages[0].clientWidth;

    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    // Button listeners

    nextBtn.addEventListener('click', () => {
        if (counter >= carouselImages.length -1) return;
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return; // Fixes slide disappearing if clicked too fast
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    carouselSlide.addEventListener('transitionend', () => {
        if (carouselImages[counter].id === 'lastClone') {
            carouselSlide.style.transition = 'none'; // Remove transition of all slides to begining
            counter = carouselImages.length - 2;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        };
        if (carouselImages[counter].id === 'firstClone') {
            carouselSlide.style.transition = 'none'; // Remove transition of all slides to begining
            counter = carouselImages.length - counter;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        };
    });

}

const typewriter = () => {
    const texts = ['make websites', 'create things', 'write stories', 'build games'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type() {

        if (count === texts.length) { // check amount of texts items
            count = 0; // create loop by reseting count to 0 when total texts has been reached
        }

        currentText = texts[count]; // use count to select specific text
        letter = currentText.slice(0, ++index);

        document.querySelector('.typing').textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
        }

        setTimeout(type, 400);

    }()); // invoke function immediately
}

// keep it tidy by invoking smaller functions inside of app function
const app = () => {
    navSlide();
    slider();
    typewriter();
}

app();