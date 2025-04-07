
function triggerGlowImage(id) {
  $('.glow-image').hide();
  $(`.island[data-id="${id}"] .glow-image`).fadeIn(150);
}

// Desktop hover: show glow on mouseenter/leave
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

// Mobile + click (and also desktop click now)
$(document).on('click', '.nav-link', function (e) {
  const id = $(this).data('id');
  triggerGlowImage(id);
  
  // If on mobile, close the offcanvas menu.
  if ($(window).width() < 992) {
    const offcanvasEl = document.getElementById('mobileSidebar');
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
    if (offcanvas) {
      offcanvas.hide();
    }
  }
  
  // Get the href attribute of the clicked link.
  const href = $(this).attr('href');
  
  // If the href is not "#" (i.e. a real URL), delay navigation slightly.
  if (href && href !== "#") {
    e.preventDefault();  // Prevent immediate navigation.
    setTimeout(function () {
      window.location.href = href;
    }, 200); // Delay 200ms to allow the glow effect to show.
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