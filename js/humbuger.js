$(function () {
  $('.btn-gNav').on("click", function () {
    $('.header-inner').toggleClass('open');  // メニューにopenクラスをつけ外しする
    $('.btn-gNav span').toggleClass('spanopen');
  });
});
