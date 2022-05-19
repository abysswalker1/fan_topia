$(function(){

  $(".js-upload-photo-button").click(function () {
    const $t = $(this),
      $input  = $t.next();

    $input.click();
    return false;
  });

  function handleFileSelect(evt, $image) {
    const file = evt.target.files[0];

    // Only process image files.
    if (!file.type.match('image.*')) {
      return false;
    }

    const reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = (function() {
      return function(e) {
        $image.attr("style", "background-image: url(" + e.target.result + ")");
      };
    })(file);

    // Read in the image file as a data URL.
    reader.readAsDataURL(file);
  }

  $('.js-popup-upload-input').change(function(e) {
    const $t = $(this),
      $wrap = $t.closest('.js-verify-account-upload-item'),
      $image = $wrap.find('.js-popup-img'),
      $parent = $wrap.find('.js-popup-photo-item'),
      $delete = $parent.find('.js-popup-photo-delete'),
      $uploadButton = $wrap.find('.js-upload-photo-button');

    handleFileSelect(e, $image);
    $parent.removeClass('popup__photo-item_no-photo');
    $parent.addClass('popup__photo-item_upload');
    $uploadButton.hide();

    $delete.click(function() {
      const $input = $parent.find('.js-popup-upload-input');

      $parent.addClass('popup__photo-item_no-photo');
      $parent.removeClass('popup__photo-item_upload');
      $input.val("");
      $image.removeAttr("style");
      $uploadButton.show();

      return false;
    });
  });

});
