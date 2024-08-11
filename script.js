document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, Observer, MotionPathPlugin, TextPlugin)
    
    const navbarAnimation = () => {
        const navbar = document.querySelector("#navbar");
        const navLinks = document.querySelectorAll("#navbar a");
        const getInTouch = document.querySelector("#getInTouch");

        const tl = gsap.timeline({});

        tl.from(navbar, {
            y: -50,
            opacity: 0,
            duration: 0.8,
        });

        tl.from(getInTouch, {
            width: 1,
        });

        tl.from(navLinks, {
            y: -50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
        });


        tl.play();
    }

    const headersTextAnimation = () => {
        const header1 = document.querySelector("#motto").childNodes[1];
        const header2 = document.querySelector("#motto").childNodes[3];
        
        const tl = gsap.timeline({});

        tl.from(header1, {
            y: -50,
            opacity: 0,
            duration: 0.8,
        });

        tl.from(header2, {
            y: -50,
            opacity: 0,
            duration: 0.8,
            delay: -0.4,
        });

        tl.play();
    }

    navbarAnimation();
    headersTextAnimation();
});