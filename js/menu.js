$(function() {
  // 変数にクラスを入れる
  var btn = $('.menu');

  //スクロールしてページトップから100に達したらボタンを表示
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 900) {
      btn.addClass('menuactive');
    }else{
      btn.removeClass('menuactive');
    }
  });

  //スクロールしてトップへ戻る
  btn.on('click',function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });
});
