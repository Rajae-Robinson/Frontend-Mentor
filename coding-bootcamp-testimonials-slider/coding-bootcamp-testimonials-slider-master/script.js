var id = 0;
var users = {
    0: { 
        "review": "“ I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future. ”",
        "img": "images/image-tanya.jpg",
        "name": "Tanya Sinclair",
        "job": "UX Engineer"
    },
    1: {
        "review": "“ If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
        "img": "images/image-john.jpg",
        "name": "John Tarkpor",
        "job": "Junior Front-end Developer"
    },
}

const personName = document.querySelector('.testimonials-container__body__name');
const job = document.querySelector('.testimonials-container__body__job');
const img = document.querySelector('.testimonials-container__image');
const review = document.querySelector('.testimonials-container__body__review');

const arrowPrevious = document.querySelector('.testimonials-container__btn--prev');
const arrowNext = document.querySelector('.testimonials-container__btn--next');

function changeInfo(id) {
    review.innerHTML = users[id]['review'];
    img.src = users[id]['img'];
    personName.innerHTML = users[id]['name'];
    job.innerHTML = users[id]['job'];
}

function prevSlide() {
    // if the first slide is the current slide, prev btn disabled
    if (id == 0) return;
    id -= 1;
    changeInfo(id);
}

function nextSlide() {
    if (id == Object.keys(users).length - 1) return;
    id += 1;
    changeInfo(id);
}

arrowPrevious.addEventListener('click', prevSlide);
arrowNext.addEventListener('click', nextSlide);