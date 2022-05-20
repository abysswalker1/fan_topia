(function() {
  const popup = $("#verify-account-modal");
  if (popup) {
    const currentStepEl = $("#current-step");
    const prevButton = $("#verify-account-prev");
    const nextButton = $("#verify-account-next");
    const textFrom1Step = $("#verify-account-text-step-1");
    const mainText = $("#verify-account-text-all-steps");
    const progressbar = $("#verify-account-progress-bar");
    const stepsForm = $("#verify-account-steps");
    const resultForm = $("#verify-account-results");
    const select = $("#verify-account-select");
    const allUploadSections = $(".js-verify-account-upload-item");
    const uploadBlock = $("#verify-account-upload");

    const changeStep = (action, currentStep) => {
      if (action === "NEXT") {
        return currentStep + 1;
      }
      if (action === "PREV") {
        return currentStep - 1;
      }
    };

    prevButton.click(function() {
      currentStepEl.text(changeStep("PREV", +currentStepEl.text()));
    });

    nextButton.click(function() {
      currentStepEl.text(changeStep("NEXT", +currentStepEl.text()));
    });

    // initially hide elements
    prevButton.hide();
    mainText.hide();
    resultForm.hide();
    uploadBlock.hide();

    // Select the target node.
    const target = document.getElementById("current-step");

    if (target) {
      // Create an observer instance.
      const observer = new MutationObserver(function() {
        const step = +target.innerText;
        progressbar.css('width', `${100 / 5 * step}%`);

        if (step === 1) {
          prevButton.hide();
          textFrom1Step.show();
          mainText.hide();
          select.show();
          uploadBlock.hide();
        } else {
          prevButton.show();
          textFrom1Step.hide();
          mainText.show();
          select.hide();
          uploadBlock.show();
          allUploadSections.hide();
          $(`#verify-account-upload-file-id-${step}`).show();
        }

        if (step === 4) {
          nextButton.text("Upload photos");
        }

        if (step === 5) {
          stepsForm.hide();
          resultForm.show();
        }
      });

      // Pass in the target node, as well as the observer options.
      observer.observe(target, {
        attributes:    true,
        childList:     true,
        characterData: true
      });
    }

  }
})();
