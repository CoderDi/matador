$(document).ready(function(){

  $(".js-getcall").click(function(){
    $(".popup-block").hide();
    $("#popup-getcall").show();
    $(".popup").addClass("popup--show");
  });
  $(".js-getquest").click(function(){
    $(".popup-block").hide();
    $("#popup-getquest").show();
    $(".popup").addClass("popup--show");
  });
  $(".js-zamer").click(function(){
    $(".popup-block").hide();
    $("#popup-zamer").show();
    $(".popup").addClass("popup--show");
  });
  $(".js-address").click(function(){
    $(".popup-block").hide();
    $("#popup-address").show();
    $(".popup").addClass("popup--show");
  });
  $(".popup-close").click(function(){
    $(".popup").removeClass("popup--show");
  });
  $(".popup-bg").click(function(){
    $(".popup").removeClass("popup--show");
  });

  $(".butter").click(function(){
    $(this).toggleClass("active");
    $(".menu").slideToggle(200);
  });
  $(".menu__item--drop_arrow").click(function(){
    $(this).parents(".menu__item").find(".menu-drop").slideToggle(200);
    $(this).toggleClass("active");
  });

  $(".article-label").click(function(){
    $(".article-label").removeClass("active");
    $(this).addClass("active");
  });

  
  $(".js-slider").slick({
    infinite: false,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false
    
  });
  
  


  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top});
    return false;
  });
  
  
  $(function() {
    $("[type=tel]").mask("+7 (999) 999-99-99");
  });

  
  ymaps.ready(function () {
    if ($("#map").length != 0) {
      var myMap = new ymaps.Map('map', {
          center: [56.630085, 47.834346],
          zoom: 16,
          controls: []
        }),
        myPlacemark = new ymaps.Placemark([56.630085, 47.834346], {
          hintContent: 'ул. Прохорова, д. 39',
          balloonContent: 'ул. Прохорова, д. 39'
        }, {
          iconLayout: 'default#image',
          iconImageHref: 'images/pin.png',
          iconImageSize: [58, 58],
          iconImageOffset: [-29, -58]
        });

        myMap.geoObjects.add(myPlacemark);
    }
    

    if ($("#map-popup").length != 0) {
      var myMapPopup = new ymaps.Map('map-popup', {
        center: [56.630085, 47.834346],
        zoom: 16,
        controls: []
      }),
      myPlacemarkPopup = new ymaps.Placemark([56.630085, 47.834346], {
        hintContent: 'ул. Прохорова, д. 39',
        balloonContent: 'ул. Прохорова, д. 39'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pin.png',
        iconImageSize: [28, 28],
        iconImageOffset: [-14, -28]
      });
      myMapPopup.geoObjects.add(myPlacemarkPopup);
    }
    
  });
});