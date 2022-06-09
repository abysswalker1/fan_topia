import { Fancybox } from "@fancyapps/ui";

(function () {
  const closeButton = $(".js-close-modal-button");

  closeButton.click(function () {
    Fancybox.close();
  })
})();
