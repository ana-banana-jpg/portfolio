const heroImage = document.getElementById('hero-image');
const contactImage = document.getElementById('contact-image');
const toastContainer = document.getElementById('toast-container');

contactImage.addEventListener("click", () => {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.style.outline = '1px solid gray';
    notif.innerText = 'Beep boop! Do you have a byte to share?';

    toastContainer.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
});

heroImage.addEventListener("click", () => {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.style.outline = '1px solid gray';
    notif.innerText = 'Hello! It\'s nice to meet you!';

    toastContainer.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 2000);
});

var animateHero;
var animateContact;

function hoverHeroImage() {
    animateHero = setInterval(moveHeroArm, 250);
}

function stopHoverHeroImage() {
    clearInterval(animateHero);
}

function clickImage() {
    heroImage.style.top = '-5px';
    setTimeout(floatDown, 600);
}

function hoverContactImage() {
    animateContact = setInterval(moveContactArm, 250);
}

function stopHoverContactImage() {
    clearInterval(animateContact);
}

function moveHeroArm() {
    const img = document.getElementById('hero-image');
    img.classList.toggle('active');

    if (img.classList.contains('active')) {
        img.src = "./images/figure-on-rings-2.png";
    } else {
        img.src = "./images/figure-on-rings-1.png";
    }
}

function moveContactArm() {
    const img = document.getElementById('contact-image');
    img.classList.toggle('active');

    if (img.classList.contains('active')) {
        img.src = "./images/robot-rings-1.png";
    } else {
        img.src = "./images/robot-rings-2.png";
    }
}

function floatUp() {
    heroImage.style.transform = 'translateY(5px)';
    setTimeout(floatDown, 400);
}

function floatDown() {
    heroImage.style.top = '0px';
}


function clickContactImage() {

}
