import "./scss/styles.scss";

window.onload = function () {
  const images = document.querySelectorAll(".img");
  let expanded = document.querySelector(".img:first-child");
  console.log(images);
  images.forEach((el) => {
    el.addEventListener("mouseover", (ev) => {
      if (ev.target != expanded) {
        ev.target.classList.add("expand");
        expanded.classList.remove("expand")
        expanded = ev.target;
      }
    });
  });
};
