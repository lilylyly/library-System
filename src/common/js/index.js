function index() {
  var height = $('.box').eq(0).height();
  var oRight = $('.book-wrapper').eq(0);
  var aLLi = $('.film_focus_nav').eq(0).find('li');
  var index = 0;

  aLLi.click(function(){
    index=$(this).index();
    $(this).addClass('cur').siblings().removeClass();
    oRight.stop().animate({
      "marginTop":-1*height*index+"px"
    });
  });
}

module.exports = exports = {index};
