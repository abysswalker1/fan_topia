(function() {
  const tab = $(".js-tabs-button");
  const contents = $(".js-tab-content");

  tab.click(function() {
    const $t = $(this);
    const currentDataId = $t.data("id");

    tab.removeClass("active");
    $t.addClass("active");

    contents.hide();
    $(`#tab-content-${currentDataId}`).show();
  });
})();
