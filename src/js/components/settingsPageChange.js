$(function () {

  const changePage = (target) => {
    let currentPage = document.querySelector('.js-active-page');
    let newPage = document.getElementById(target)
    
    currentPage.classList.remove('js-active-page');
    newPage.classList.add('js-active-page');
  };

  $('.js-settings-button').click(function(e) {
    let activeButton = document.querySelector('.js-active-button')

    if (!this.classList.contains("js-active-button")) {
      activeButton.classList.remove('js-active-button');
      this.classList.add('js-active-button');

      changePage($(this).data('id'));
    }
  });
});
