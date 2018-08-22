var adArr = ["https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/ad-1.png","https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/ad-2.png","https://hexschool.github.io/THE_F2E_Design/week5-comic%20viewer/assets/ad-3.png"];
var index1 =parseInt(Math.random()*(adArr.length)); 
var currentAd1 = adArr[index1];
var index2 =parseInt(Math.random()*(adArr.length)); 
var currentAd2 = adArr[index2];
var index3 =parseInt(Math.random()*(adArr.length)); 
var currentAd3 = adArr[index3];
$(".ad01").css('background-image', 'url(' + currentAd1 + ')');
$(".ad02").css('background-image', 'url(' + currentAd2 + ')');
$(".ad03").css('background-image', 'url(' + currentAd3 + ')');

$(".chapter").hover(function(){
  $(this).css("background-color","#000");
  $(this).css("color","#fff");
},function(){
  $(this).css("background-color","#fff");
  $(this).css("color","#000");
})

$("#switch").click(function(){
  $(this).toggleClass('fa-toggle-off');
  $(this).toggleClass('fa-toggle-on');
  $(i).css('color','#fff');
  $(".comic-reader").css('background-color','#000');
});