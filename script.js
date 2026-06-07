```javascript
/* ==========================================
   Cursor Glow
========================================== */

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;

});


/* ==========================================
   Reveal Animation
========================================== */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },

        {
            threshold: 0.15
        }

    );

revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* ==========================================
   Navbar Scroll Effect
========================================== */

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(8,9,12,0.85)";

        navbar.style.backdropFilter =
            "blur(20px)";

        navbar.style.borderBottom =
            "1px solid rgba(255,255,255,0.06)";

    }

    else {

        navbar.style.background =
            "rgba(8,9,12,0.65)";

        navbar.style.backdropFilter =
            "blur(16px)";

        navbar.style.borderBottom =
            "1px solid rgba(255,255,255,0.04)";
    }

});


/* ==========================================
   Active Navigation Highlight
========================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
                sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active-link");
        }

    });

});


/* ==========================================
   Smooth Anchor Scroll
========================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach((anchor) => {

        anchor.addEventListener(
            "click",
            function (e) {

                const targetId =
                    this.getAttribute("href");

                if (targetId === "#")
                    return;

                e.preventDefault();

                const target =
                    document.querySelector(
                        targetId
                    );

                if (!target) return;

                window.scrollTo({

                    top:
                        target.offsetTop - 70,

                    behavior: "smooth"

                });

            }
        );

    });


/* ==========================================
   Hero Fade In
========================================== */

window.addEventListener("load", () => {

    const hero =
        document.querySelector(".hero-content");

    hero.style.opacity = "0";
    hero.style.transform =
        "translateY(30px)";

    setTimeout(() => {

        hero.style.transition =
            "all 1s ease";

        hero.style.opacity = "1";

        hero.style.transform =
            "translateY(0)";

    }, 200);

});


/* ==========================================
   Research Card Hover Glow
========================================== */

const cards =
    document.querySelectorAll(
        ".research-card"
    );

cards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (e) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            card.style.background = `
            radial-gradient(
                circle at ${x}px ${y}px,
                rgba(59,130,246,0.12),
                rgba(19,22,27,1) 45%
            )
            `;
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.background =
                "var(--card)";
        }
    );

});


/* ==========================================
   Typing Effect (Optional Motto)
========================================== */

const footerQuote =
    document.querySelector("footer p");

if (footerQuote) {

    const text =
        footerQuote.innerText;

    footerQuote.innerText = "";

    let i = 0;

    function typeQuote() {

        if (i < text.length) {

            footerQuote.innerText +=
                text.charAt(i);

            i++;

            setTimeout(
                typeQuote,
                25
            );
        }

    }

    setTimeout(
        typeQuote,
        1200
    );

}


/* ==========================================
   Console Easter Egg
========================================== */

console.log(
`
███████╗██╗     ██╗    ██╗██╗
╚══███╔╝██║     ██║    ██║██║
  ███╔╝ ██║     ██║ █╗ ██║██║
 ███╔╝  ██║     ██║███╗██║██║
███████╗███████╗╚███╔███╔╝███████╗
╚══════╝╚══════╝ ╚══╝╚══╝ ╚══════╝

AI Security Researcher

Welcome to my website.
`
);
```
