function admin() {
  $('.type-item').click(function () {
    var now = $(this).parent().parent().next().find('.box');
    $(this).addClass('act');
    $(this).siblings('li').removeClass('act');
    now.hide();
    now.eq($(this).index()).show();
  });
}

module.exports = exports = {admin};
