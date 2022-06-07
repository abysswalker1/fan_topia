(function(){
  const $modal = $('.js-open-create-post')

  $('.js-schedule-btn').click(function(){
    if ($modal.hasClass('schedule')) {
      $modal.removeClass('schedule')
    } else {
      $modal.addClass('schedule')
    }
  })

  $('.js-schedule-modal-btn').click(function(){
    console.log('schedule')
    $modal.removeClass('schedule')
  })
})();