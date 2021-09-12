"use strict";
let navs = document.querySelector(".nav-icon");
let navbar = document.querySelector(".my-navbar");

navs.addEventListener("click", function () {
  if (!navs.classList.contains("rotate")) {
    navs.classList.add("rotate");
    navbar.classList.add("show-navbar");
    return;
  }

  navs.classList.remove("rotate");
  navbar.classList.remove("show-navbar");
});
