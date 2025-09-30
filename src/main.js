import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";
import "./style.css";
import "./custom-colors.css";
import "./header-scroll.js";
import "./mobile-menu.js";
import "./theme-toggle.js";
import "./accordion.js";

AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: false,
  mirror: false,
});

const typed = new Typed("#typed-text", {
  strings: ["Full-Stack Developer", "Tech Enthusiast"],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 1500,
  loop: true,
});
