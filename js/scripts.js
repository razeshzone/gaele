
function triggerGlowImage(id) {
  $('.glow-image').hide();
  $(`.island[data-id="${id}"] .glow-image`).fadeIn(150);
}

// Desktop hover
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

// Mobile + click
$(document).on('click', '.nav-link', function (e) {
  e.preventDefault();
  const id = $(this).data('id');
  triggerGlowImage(id);

  if ($(window).width() < 992) {
    const offcanvasEl = document.getElementById('mobileSidebar');
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
    offcanvas?.hide();
  }
});


//swiper js
var swiper = new Swiper(".gaele-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: false,
  autoplay: {
    delay: 2500,
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