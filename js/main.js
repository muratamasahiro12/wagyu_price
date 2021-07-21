$(function() {
  $('#page-top').click(function() {
  // topから現在位置までの距離を取得
    var position = $('body').offset().top;
    $('html').animate({scrollTop:position});
  });
});