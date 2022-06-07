(function() {
  $('#add-post-modal-select').change(function() {
    const $button = $('.js-add-post-buttons.active-option');
    const $value = $(`[data-value=${this.value}]`) 
    $button.removeClass('active-option');
    $value.addClass('active-option');
  })
})();