new Swiper(".card-wrapper", {
  loop: true,
  spaceBetween: 30,

  //   pagination bullest
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //  Response breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.onclick = () => {
  navLinks.classList.toggle("active");
};

// JavaScript
document.querySelectorAll(".a-nav").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // إلغاء السلوك الافتراضي

    // الحصول على الـ ID من الخاصية href
    const targetId = link.getAttribute("href");

    // البحث عن العنصر الهدف
    const targetSection = document.querySelector(targetId);

    // التمرير السلس إلى العنصر
    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});
