/* ==========================================
   TYPING EFFECT
========================================== */

const typingText = document.getElementById("typingText");

const words = [
    "C++ Developer",
    "Web Developer",
    "IoT Enthusiast",
    "Public Speaker",
    "Tech Enthusiast"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeWriter() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeWriter, 1400);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(
        typeWriter,
        deleting ? 50 : 100
    );
}

typeWriter();


/* ==========================================
   MOBILE MENU
========================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const icon =
        menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* Close menu after clicking a link */

document
    .querySelectorAll(".nav-links a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            const icon =
                menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });


/* ==========================================
   DARK / LIGHT MODE
========================================== */

const themeToggle =
    document.getElementById("themeToggle");


themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    const icon =
        themeToggle.querySelector("i");

    if (
        document.body.classList.contains("light-mode")
    ) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

    }

});


/* ==========================================
   BACK TO TOP
========================================== */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================================
   CONTACT FORM
========================================== */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "Thank you " +
        name +
        "! Your message has been received."
    );

    contactForm.reset();

});


/* ==========================================
   CURRENT YEAR
========================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();
    /* =========================================================
   PREMIUM PORTFOLIO EFFECTS
========================================================= */


/* =========================================================
   1. MOUSE FOLLOW GLOW
========================================================= */

const cards = document.querySelectorAll(
    ".skill-card, .achievement-card, .certificate-card, .project-card"
);

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);

    });

});


/* =========================================================
   2. 3D CARD TILT
========================================================= */

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -4;

        const rotateY =
            ((x - centerX) / centerX) * 4;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)
             scale(1.02)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =========================================================
   3. SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .skill-card, .achievement-card, .certificate-card, .project-card, .education-card, .contact-container"
);

revealElements.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   4. DARK MODE
========================================================= */

const themeButton =
    document.querySelector(".theme-btn");


if (themeButton) {

    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");


        /* Save preference */

        const isDark =
            document.body.classList.contains("dark-mode");

        localStorage.setItem(
            "portfolio-theme",
            isDark ? "dark" : "light"
        );

    });

}


/* =========================================================
   5. REMEMBER DARK MODE
========================================================= */

const savedTheme =
    localStorage.getItem("portfolio-theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

}
/* =========================================================
   PREMIUM CARD INTERACTIONS
========================================================= */

const interactiveCards = document.querySelectorAll(
    ".skill-card, .achievement-card, .certificate-card, .project-card, .education-card"
);


/* =========================================================
   MOUSE FOLLOW GLOW
========================================================= */

interactiveCards.forEach(card => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        card.style.setProperty(
            "--mouse-x",
            `${x}px`
        );

        card.style.setProperty(
            "--mouse-y",
            `${y}px`
        );

    });

});


/* =========================================================
   3D TILT
========================================================= */

interactiveCards.forEach(card => {

    card.addEventListener("mousemove", (event) => {

        /* Don't use 3D tilt on mobile */

        if (window.innerWidth <= 650) {
            return;
        }

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;


        const rotateX =
            ((y - centerY) / centerY) * -3;

        const rotateY =
            ((x - centerX) / centerX) * 3;


        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-9px)
             scale(1.015)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});
