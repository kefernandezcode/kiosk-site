/*---------- Amenities Swiper JS ----------*/

const swiperAmenities = new Swiper('.amenities__swiper', {
   loop: true,
   slidesPerView: 'auto',
   centeredSlides: true,
   spaceBetween: 16,
   grabCursor: true,
   speed: 1000,
   
   effect: 'coverflow',
   coverflowEffect:{
      rotate: -90, 
      depth: 650,   
      modifier: .25, 
      //  rotate: 0, 
      //  depth: 100, 
      //  modifier: 2.5,
      slideShadows: false,
   },

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   autoplay: {
      delay: 3000,
      disableOnInteraction: true,
   },
})

/*---------- Video Modal JS ----------*/

document.addEventListener("DOMContentLoaded", function () {
    const video_cards = document.querySelectorAll(".card-body");
    const modal_closeBtns = document.querySelectorAll(".vid-modal-close-btn");

    video_cards.forEach((card) => {
        card.addEventListener("click", () => {
            const name = card.getAttribute("data-name");
            const modal = document.querySelector(`.video-modal-screen[data-name="${name}"]`);
            if (modal) {
                modal.classList.add("active");
                document.body.style.overflow = 'hidden';
                swiperAmenities.autoplay.stop();
            } else {
                console.error(`🔴 Modal for "${name}" not found`);
            }
        });
    });

    modal_closeBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const modal = btn.closest(".video-modal-screen");
            if (modal) {
                modal.classList.remove("active");
                document.body.style.overflow = '';
                swiperAmenities.autoplay.start();
            }
        });
    });
});