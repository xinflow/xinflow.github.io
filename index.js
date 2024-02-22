$(function () {
    $(window).on('click', function (e) {
        $('.action').removeClass('close');
    });
    $('.action').on('click', function (e) {
        $(this).toggleClass('close');
        e.stopPropagation();
    });
});