(function () {
  const $trigger = $(".js-history-item-trigger");

  $trigger.click(function () {
    const $t = $(this);
    const $parent = $t.closest(".js-history-item");

    if ($parent.hasClass("balance-history__item_open")) {
      $parent.removeClass("balance-history__item_open");
    } else {
      $parent.addClass("balance-history__item_open")
    }
  })
})();
