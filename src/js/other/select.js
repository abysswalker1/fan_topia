import 'select2';

(function () {
  $('.js-standard-select').select2({
    minimumResultsForSearch: -1,
    closeOnSelect: false,
    width: '100%'
  });

  $('#add-post-modal-select').select2({
    minimumResultsForSearch: -1,
    closeOnSelect: false,
    width: '100%'
  });

})();
