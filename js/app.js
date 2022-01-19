(() => {
  "use strict";
  let e = !1;
  setTimeout(() => {
    if (e) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (o) {
        document.dispatchEvent(e);
      });
    }
  }, 0);
  let o = 1642499664565,
    t = Date.now(),
    n = Math.floor(Math.abs((o - t) / 864e5));
  for (i = 0; i < o; i++) {
    if (n <= 1) {
      console.log("This was posted today");
      break;
    }
    if (n > 7) {
      console.log("This was posted over a week ago");
      break;
    }
    if (n) {
      console.log(`This was posted ${n} days ago`);
      break;
    }
  }
  (window.FLS = !0),
    (function (e) {
      let o = new Image();
      (o.onload = o.onerror =
        function () {
          e(2 == o.height);
        }),
        (o.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let o = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(o);
    });
})();
