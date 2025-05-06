import "@styles/lenis.css";

import Lenis from "lenis";

// Script to handle Lenis library settings for smooth scrolling
// https://github.com/darkroomengineering/lenis
// const lenis = new Lenis({
//     autoRaf: true,
// });

const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);