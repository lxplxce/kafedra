const close__pp = document.getElementById("pp__close");

const pp = document.getElementById("pp");
const btn_event = document.getElementById("make_event");

close__pp.addEventListener("click", () => {
  pp.classList.remove("active");
});

btn_event.addEventListener("click", () => {
  pp.classList.add("active");
});
