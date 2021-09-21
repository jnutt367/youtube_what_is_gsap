const tl = gsap.timeline().timeScale(2);
tl.to(".words", { duration: 1, scale: 1, opacity: 1, fill: "green" });
tl.to("#circs", { fill: "green", opcaity: 0, stagger: 0.2 })