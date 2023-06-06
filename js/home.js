/*
 JS to toggle scroll axis styles
*/
const control = document.getElementById("direction-toggle");
const marquees = document.querySelectorAll(".marquee");
const wrapper = document.querySelector(".wrapper");

control.addEventListener("click", () => {
  control.classList.toggle("toggle--vertical");
  wrapper.classList.toggle("wrapper--vertical");
  [...marquees].forEach((marquee) =>
    marquee.classList.toggle("marquee--vertical")
  );
});

//add a function that change a class when window shrink

/*var width= (window.innerWidth>0)? window.innerWidth: screen.width;
if(width<600){
    control.classList.toggle("toggle--vertical");
  wrapper.classList.toggle("wrapper--vertical");
  [...marquees].forEach((marquee) =>
    marquee.classList.toggle("marquee--vertical")
  );
};*/

/*window.addEventListener("resize", () => {
    if(window.innerWidth<600){
      control.classList.toggle("toggle--vertical");
      wrapper.classList.toggle("wrapper--vertical");
      [...marquees].forEach((marquee) =>
        marquee.classList.toggle("marquee--vertical")
      );
    }
  });*/