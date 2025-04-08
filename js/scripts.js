
function triggerGlowImage(id) {
  // Hide all glow images first
  $('.glow-image').hide();

  // Show the one that matches the selected island
  $(`.island[data-id="${id}"] .glow-image`).fadeIn(150);
}

// Hover on nav-link (desktop)
$(document).on('mouseenter', '.nav-link', function () {
  if ($(window).width() >= 992) {
    const id = $(this).data('id');
    triggerGlowImage(id);
  }
});

$(document).on('mouseleave', '.nav-link', function () {
  if ($(window).width() >= 992) {
    $('.glow-image').fadeOut(100);
  }
});

// Click on nav-link (mobile + desktop)
$(document).on('click', '.nav-link', function (e) {
  const id = $(this).data('id');
  triggerGlowImage(id);

  // Close offcanvas if open (mobile)
  if ($(window).width() < 992) {
    const offcanvasEl = document.getElementById('mobileSidebar');
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
    if (offcanvas) offcanvas.hide();
  }

  // Handle href navigation
  const href = $(this).attr('href');
  if (href && href !== "#") {
    e.preventDefault();
    setTimeout(() => {
      window.location.href = href;
    }, 200);
  }
});

// Hover on map island (desktop)
$(document).on('mouseenter', '.island', function () {
  if ($(window).width() >= 992) {
    const id = $(this).data('id');
    triggerGlowImage(id);
  }
});

$(document).on('mouseleave', '.island', function () {
  if ($(window).width() >= 992) {
    $('.glow-image').fadeOut(100);
  }
});

// Click on island (all devices)
$(document).on('click', '.island', function () {
  const id = $(this).data('id');
  triggerGlowImage(id);

  // Optional redirect based on matching nav-link
  const link = $(`.nav-link[data-id="${id}"]`);
  const href = link.attr('href');

  if (href && href !== "#") {
    setTimeout(() => {
      window.location.href = href;
    }, 200);
  }
});

//swiper js
var swiper = new Swiper(".gaele-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});