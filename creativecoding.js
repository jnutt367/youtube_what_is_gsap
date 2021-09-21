let select = e => document.querySelector(e);
let selectAll = e => document.querySelectorAll(e);

let progressSlider = select("#progressSlider");
let time = select("#time");
let pause = select("#pause"); //better than document.querySelector("#pause")

let animation = gsap.to("#herman", {
    duration: 20,
    ease: "elastic",
    motionPath: {
        path: "#motionpath",
        align: "#herman"
    },
    onComplete: () => pause.innerHTML = "play"
});

pause.addEventListener("click", () => {
    animation.paused(!animation.paused());
    if (animation.progress() == 1) {
        animation.restart();
    }
    pause.innerHTML = animation.paused() ? "play" : "pause";
})