(function() {
  const triggerButton = $('#profile-dropdown-trigger');
  const dropdown = $('#profile-dropdown');

  triggerButton.click(function() {
    if(dropdown.hasClass('header__profile-dropdown_open')) {
      dropdown.removeClass('header__profile-dropdown_open');
    } else {
      dropdown.addClass('header__profile-dropdown_open');
    }
  });

  $(document).click(function(e) {
    if(!$(e.target).closest(dropdown).length && !$(e.target).closest(triggerButton).length) {
      if(dropdown.hasClass('header__profile-dropdown_open')) {
        dropdown.removeClass('header__profile-dropdown_open');
      }
    }
  });

})();
