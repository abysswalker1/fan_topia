$(function () {
  const buttons = Object.assign([], $('.js-settings-button'));
  const pages = Object.assign([], $('.js-settings-page'));

  const changePage = (target) => {
    let currentPage;

    pages.forEach((item, index) => {
      item.classList.remove('active');
      if (item.classList.contains(target)) {
        currentPage = index;
      }
    });
    pages[currentPage].classList.add('active');
  };

  $('.js-settings-button').click((e) => {
    let target = e.target;

    buttons.forEach((item) => {
      item.classList.remove('settingsPages__button_active');
    });
    target.classList.add('settingsPages__button_active');
    changePage(target.id);
  });
});
