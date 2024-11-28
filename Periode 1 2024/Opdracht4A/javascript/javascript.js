document.querySelectorAll("nav div.menu > ul > li").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector("li.active").classList.remove("active");
      el.classList.toggle("active");
    });
  });