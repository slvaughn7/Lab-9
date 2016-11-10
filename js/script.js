$(document).ready(function(){

  $("li").mouseenter(function(){
    $(this).fadeTo("fast", 0.25);
    });

  $("li").mouseleave(function(){
    $(this).fadeTo("fast", 1);
    });

    $("li").click(function(){
    $(this).toggleClass(function(){
      $(this).css("background-color", "#DBC6BF");
      });
    });

    $("li").click(function(){
    $(this).text("Clicked!");
    });
});
