let rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (details) {
  let rectangleLocation = rect.getBoundingClientRect();
  let insideRectVal = details.clientX - rectangleLocation.left;

  if (insideRectVal < rectangleLocation.width / 2) {
    // console.log("Left");
    let redColor = gsap.utils.mapRange(
      0,
      rectangleLocation.width / 2,
      255,
      0,
      insideRectVal
    );
    gsap.to(rect, {
      backgroundColor: `rgb(${redColor}, 0, 0)`,
      ease: Power4,
    });
  } else {

let blueColor = gsap.utils.mapRange(
      rectangleLocation.width / 2,
      rectangleLocation.width,
      0,
      255,
      insideRectVal
    );
    gsap.to(rect, {
      backgroundColor: `rgb(0, 0, ${blueColor})`,
      ease: Power4,

});

    // console.log("Right");
  }
});
rect.addEventListener("mouseleave", function(){
  gsap.to(rect,{
    backgroundColor:"white"
  })
})

// console.log(gsap.utils.mapRange(0, 250, 255, 0, 0));
