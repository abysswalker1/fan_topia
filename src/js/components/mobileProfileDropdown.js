(function() {
  const $mobileProfileDropdown = $('#mobile-profile-dropdown');
  const $trigger = $('#trigger-mobile-dropdown');
  const $body = $(document.body);
  const $wrap = $('.js-page-wrap');

  $trigger.click(function() {
    if($mobileProfileDropdown.hasClass('mobile-profile-dropdown_open')) {
      $mobileProfileDropdown.removeClass('mobile-profile-dropdown_open');
      $body.removeClass('popup-open');
      $wrap.removeClass('profile-dropdown-open');
    } else {
      $mobileProfileDropdown.addClass('mobile-profile-dropdown_open');
      $body.addClass('popup-open');
      $wrap.addClass('profile-dropdown-open');
    }
  });

  $(document).click(function(e) {
    if(!$(e.target).closest($mobileProfileDropdown).length && !$(e.target).closest($trigger).length) {
      if($mobileProfileDropdown.hasClass('mobile-profile-dropdown_open')) {
        $mobileProfileDropdown.removeClass('mobile-profile-dropdown_open');
        $body.removeClass('popup-open');
        $wrap.removeClass('profile-dropdown-open');
      }
    }
  });
})();
