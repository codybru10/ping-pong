
var counter = 0
var emptyArray = []
var ping = "ping";

var pingPong = function(input) {
debugger;
  for ( var index = 0; index < input; index++) {
    counter += 1;
    emptyArray.push(counter);

  if (emptyArray[index] % 3 === 0) {
      emptyArray.pop();
      emptyArray.push(ping);
    }

  }
  return emptyArray
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
debugger;
    var userInput = parseInt($("#input").val());
    var result = pingPong(userInput);
    $("ul").append("<li>" + result + "</li>");

  });
});
