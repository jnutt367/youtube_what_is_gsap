const tl = gsap.timeline().timeScale(2);
tl.to(".test", { fill: "red", scale: 1 });
tl.to(".green", { fill: "green", scale: 1.4 })