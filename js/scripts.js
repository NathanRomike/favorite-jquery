$(document).ready(function(){
  $("#blanks form").submit(function(event){
    var movieInput = $("input#movie").val();
    var bookInput = $("input#book").val();
    var colorInput = $("input#color").val();
    var songInput = $("input#song").val();
    var fruitInput = $("input#fruit").val();
    var sportInput = $("input#sport").val();
    var gameInput = $("input#game").val();
    var cityInput = $("input#city").val();
    var quoteInput = $("input#quote").val();
    var seasonInput = $("input#season").val();
    var dogInput = $("input#dog").val();
    var breakfastInput = $("input#breakfast").val();

    $(".movie").text(movieInput);
    $(".book").text(bookInput);
    $(".color").text(colorInput);
    $(".song").text(songInput);
    $(".fruit").text(fruitInput);
    $(".sport").text(sportInput);
    $(".game").text(gameInput);
    $(".city").text(cityInput);
    $(".quote").text(quoteInput);
    $(".season").text(seasonInput);
    $(".dog").text(dogInput);
    $(".breakfast").text(breakfastInput);

    $("#story").show();

    event.preventDefault();

  });
});
