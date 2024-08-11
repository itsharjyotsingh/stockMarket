document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, Observer, MotionPathPlugin, TextPlugin)

    const cursorPointerScript = () => {
        const allPointers = document.querySelectorAll(".cursor-pointer");

        allPointers.forEach((pointer) => {
            const cursor = document.querySelector("#cursor-follower");

            pointer.addEventListener("mouseenter", () => {
                cursor.style.transition = "width 0.1s, height 0.1s";
                cursor.style.width = "10px";
                cursor.style.height = "10px";
            });

            pointer.addEventListener("mouseleave", () => {
                cursor.style.width = "20px";
                cursor.style.height = "20px";
                cursor.style.border = "none";
            });
        });
    }

    const cursorFollowerScript = () => {
        const cursor = document.querySelector("#cursor-follower");

        document.addEventListener("mousemove", (e) => {
            cursor.style.left = e.pageX + "px";
            cursor.style.top = e.pageY + "px";
        });

        document.addEventListener("mousedown", () => {
            cursor.style.transition = "width 0.1s, height 0.1s";
            cursor.style.width = "15px";
            cursor.style.height = "15px";
        });

        document.addEventListener("mouseup", () => {
            cursor.style.width = "20px";
            cursor.style.height = "20px";
        });

        document.addEventListener("mouseleave", () => {
            cursor.style.width = "0px";
            cursor.style.height = "0px";
            cursor.style.border = "none";
        });

        document.addEventListener("mouseenter", () => {
            cursor.style.width = "20px";
            cursor.style.height = "20px";
            cursor.style.border = "1px solid white";
        });
    }

    const navbarCourses = () => {
        const courses = document.querySelector("#navLinks").children[0].children[1];
        console.log(courses);
        const coursesDropdown = document.querySelector("#col-list");

        courses.addEventListener("mouseenter", () => {
            coursesDropdown.style.height = "auto";
            coursesDropdown.style.padding = "10px 20px";
        });

        courses.addEventListener("mouseleave", () => {
            coursesDropdown.style.height = "0";
            coursesDropdown.style.padding = "0";
        });
    }

    const navbarAnimation = () => {
        const navbar = document.querySelector("#navbar");
        const navLinks = document.querySelectorAll("#navLinks > ul > li");
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
            delay: -1,
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

    cursorFollowerScript();
    cursorPointerScript();
    navbarAnimation();
    headersTextAnimation();
    navbarCourses();
});