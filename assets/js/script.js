!function backToTop() {
    let button = $( .back-to-top);

    $(window).on('scroll',() => {
        if ($(this).scrollTop() >= 50) {
            buttop.fadeOut();
        }
    })
}
backToTop();
