const root = document.documentElement;

const eventPP = document.querySelector("#js-eventPP");

if (eventPP) {
  const eventOpenBtn = document.querySelector("#js-eventOpenBtn");

  const closeEventPP = function (event) {
    function close() {
      document.removeEventListener("keyup", closeEventPP);
      eventPP.removeEventListener("click", closeEventPP);

      root.classList.remove("show-event-popup");
    }

    switch (event.type) {
      case "keyup":
        if (event.key === "Escape" || event.keyCode === 27) close();
        break;
      case "click":
        if (
          event.target === this ||
          event.target.classList.contains("js-ppCloseBtn")
        )
          close();
        break;
    }
  };

  eventOpenBtn.addEventListener("click", function () {
    root.classList.add("show-event-popup");

    document.addEventListener("keyup", closeEventPP);
    eventPP.addEventListener("click", closeEventPP);
  });
}
