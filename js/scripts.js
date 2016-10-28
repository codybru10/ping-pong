var pingPong = function(input) {
  return "yo"
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var userInput = $("#input").val();
    var result = pingPong(userInput);
    $("ul").append("<li>" + result + "</li>");

  });
});
