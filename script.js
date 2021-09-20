"use strict";
window.addEventListener("load", () => {
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");
  const nextb = document.getElementById("nextb");
  const backb = document.getElementById("backb");
  const cards = document.querySelectorAll("[data-shop]");
  const menu = document.querySelector(".nav_menu");
  const close = document.getElementById("close");
  const hamburger = document.getElementById("burger");
  let list = document.querySelectorAll(".nav-links li a");
  const header = document.getElementById("header");

  list.forEach((e) => {
    e.addEventListener("click", () => {
      menu.style.display = "none";
    });
  });

  let i = 0;
  function ahead() {
    if (i < 2) {
      i++;
      cards[i].style.display = "block";
      changeHeader(i);
      allDisplay(i);
    }
  }
  function behind() {
    if (i > 0) {
      i--;
      cards[i].style.display = "block";
      changeHeader(i);
      allDisplay(i);
    }
  }
  next.addEventListener("click", ahead);
  nextb.addEventListener("click", ahead);
  prev.addEventListener("click", behind);
  backb.addEventListener("click", behind);
  function allDisplay(i) {
    cards.forEach((e, index) => {
      if (index !== i) {
        e.style.display = "none";
      }
    });
  }
  close.addEventListener("click", () => {
    menu.style.display = "none";
  });
  hamburger.addEventListener("click", () => {
    menu.style.display = "block";
  });

  function changeHeader(i) {
    if (document.body.scrollWidth <= 375) {
      header.style.backgroundImage = `url("images/mobile-image-hero-${
        i + 1
      }.jpg")`;
    } else {
      header.style.backgroundImage = `url("images/desktop-image-hero-${
        i + 1
      }.jpg")`;
    }
  }
});
