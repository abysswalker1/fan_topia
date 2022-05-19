import Swiper, { Pagination } from 'swiper';

(function(){
  const swiper = new Swiper('.js-swiper', {
    // configure Swiper to use modules
    modules: [Pagination],
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 24,
    loop: false,

    // If we need pagination
    pagination: {
      el: '.promoted-creators-sidebar__list-pagination',
    },
  });
})();
