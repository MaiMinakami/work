$(document).ready(function(){
  $(".product-card__button").click(function(){
      	$(".popup-order").removeClass('active');
      	$(".popup-order").addClass('active-position');
       	$('.background-transparent').addClass('active-transparent');
      	$('.popup-order__title-container').addClass('close-popup');
    });

  $(".popup-order__title-container,.background-transparent").click(function(){

      	$(".popup-order").addClass('active');
		$(".popup-order").removeClass('active-position');
        $('.background-transparent').removeClass('active-transparent');
           
    });

});
