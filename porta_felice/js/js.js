var $slide = $(".slide")
  .slick({
    fade: true,    // fedeオン
    speed: 2000,   // 画像切り替えにかかる時間（ミリ秒）
    autoplaySpeed: 1000,   // 自動スライド切り替え速度
    arrows: false,         // 矢印表示・非表示
    autoplay: true,        // 自動再生
    slidesToShow: 1,       // スライド表示数
    slidesToScroll: 1,     // スライドする数
    infinite: true,         // 無限リピート オン・オフ
    pauseOnFocus: false,//フォーカスで一時停止
    pauseOnHover: false,//マウスホバーで一時停止
    pauseOnDotsHover: false//ドットナビをマウスホバーで一時停止
  });



  $('.top_prodact_slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    centerMode: true,//要素を中央ぞろえにする
    dots: true,//下部ドットナビゲーションの表示
    responsive: [
      {
      breakpoint: 810,//モニターの横幅が769px以下の見せ方
      settings: {
        slidesToShow: 2,//スライドを画面に2枚見せる
        slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
      }
    },
    {
      breakpoint: 610,//モニターの横幅が426px以下の見せ方
      settings: {
        slidesToShow: 1,//スライドを画面に1枚見せる
        slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
      }
    }
  ]
  });


//ナビゲーション
  $(".openbtn").click(function () {
    $(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});