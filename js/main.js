$(function(){
    $(".by_top").hide();

      $("button.bp").on("click", function(){
         $(".by_pub").show();
         $(".by_top").hide();
      });

      $("button.bt").on("click", function(){
         $(".by_pub").hide();
         $(".by_top").show();
      });
    });
