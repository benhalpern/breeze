$(document).ready(function(){

  $("#action").click(function(){
    $("#container").hide();
    $("#pickone,.nav-butt").fadeIn();
  })

  $(".unit").click(function(){
    $("#pickone").hide();
    $("#whentocome").fadeIn();
    $("#basket").prepend($(".price",this));
    $("#basket").prepend($(".info",this));
    $("#basket").prepend($("img",this));
    $("#basket .price").append("<br>+ $5 delivery");

  })

  $("#now").click(function(){
    $("#whentocome").hide();
    $("#giveyourinfo").fadeIn();
  })

  $("form").submit(function(){
    $("#giveyourinfo").hide();
    $("#ontheway").fadeIn();
    return false;
  })




})
