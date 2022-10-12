let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".introh2", 3, { y: -200 })
  .to(".introh3", 3, { y: -100 }, "-=3")
  .to(".introimg", 3, { scale: 5 }, "-=3")
  .fromTo(".aboutp", { scale: 0.1 }, { scale: 1.5, duration: 3 }, "-=3")
  .fromTo(".picsp", { y: 50 }, { y: -50, duration: 3 }, "-=3");

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "100%",
  triggerHook: 0,
})

  .setTween(timeline)
  .setPin("section")
  .addTo(controller);

//   .fromTo(".introImg", { y: -50 }, { y: 50, duration: 3 }, "-=3")
