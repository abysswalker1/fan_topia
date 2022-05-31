$(function () {  

    const historyExpand = (elem) => {
        if (elem.classList.contains('opened')){
            elem.classList.remove('opened');
        } else {
            elem.classList.add('opened');
        }
    }   

    $('.js-history-item').click(function (e) {

        if (e.target.classList.contains('js-history-item-head') ||
            e.target.classList.contains('js-history-item-button')) {
            historyExpand(this)
        }
    })
});