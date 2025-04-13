import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const lenis = new Lenis({
    // lerp: 0.1, // Add slight smoothing for better ScrollTrigger compatibility
    // duration: 1, // Adjust duration for minimal smoothing
    smooth: true, // Enable smooth scrolling
    wheelMultiplier: 0.2,
});

// Sync Lenis with GSAP's ticker for better performance
lenis.on('scroll', () => ScrollTrigger.update());

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
gsap.registerPlugin(ScrollTrigger);
export default lenis;