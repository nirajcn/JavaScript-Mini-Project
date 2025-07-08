// let rect1 = document.querySelector("#rect")

window.addEventListener("mousemove", function (details) {
  // console.log(details);
  let rect = document.querySelector("#rect");
  let xval = gsap.utils.mapRange(
    0,
    window.innerWidth,
    150 + rect.getBoundingClientRect().width/2,
    window.innerWidth - (150 + rect.getBoundingClientRect().width/2),
    details.clientX
  );

  gsap.to("#rect", {
    left: xval,
    ease: Power3,
  });
});
