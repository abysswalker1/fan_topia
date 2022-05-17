import $ from'jquery';
window.jQuery = window.$ = $;

$(document).ready(function() {
    $('.standart-select').select2({
        minimumResultsForSearch: -1,
        closeOnSelect: false
    });

});