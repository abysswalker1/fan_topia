(function() {
  const triggerButton = $('.js-search-modal-toggle');
  const dropdown = $('#search-modal');
  const body = $(document.body);

  triggerButton.click(function() {
    if(dropdown.hasClass('search-modal_open')) {
      dropdown.removeClass('search-modal_open');
      body.removeClass('popup-open');
    } else {
      dropdown.addClass('search-modal_open');
      body.addClass('popup-open');
    }
  });

  $(document).click(function(e) {
    if(!$(e.target).closest(dropdown).length && !$(e.target).closest(triggerButton).length) {
      if(dropdown.hasClass('search-modal_open')) {
        dropdown.removeClass('search-modal_open');
        body.removeClass('popup-open');
      }
    }
  });
})();
