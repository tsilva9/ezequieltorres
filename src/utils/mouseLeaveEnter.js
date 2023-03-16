export const mouseEnter = () => {
  var el = document.getElementById("cursor");
  if (el) {
    el.classList.add("custom-cursor--active");
  }
};

export const mouseLeave = () => {
  var el = document.getElementById("cursor");
  if (el) {
    el.classList.remove("custom-cursor--active");
  }
};
