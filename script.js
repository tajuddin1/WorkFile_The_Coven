gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".container").offsetWidth
  }
});



const circle = document.querySelector('#circle');
let posX = 0;
let posY = 0;

window.addEventListener('mousemove', function(e){
  console.log(e.clientX);
  posX = e.clientX - 30;
  posY = e.clientY - 25;
  posUpdate(e);
});

function posUpdate() {
  circle.style.transform = 'translateY(' + posY + 'px)' + 'translateX(' + posX + 'px)';
}