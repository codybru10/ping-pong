
var counter = 0
var emptyArray = []
var ping = "ping";
var pong = "pong";
var pingPong = "ping-pong";


var pingPongFnc = function(input) {
debugger;
  emptyArray = [];
  for ( var index = 0; index < input; index++) {
    counter += 1;
    emptyArray.push(counter);

  if (emptyArray[index] % 15 === 0) {
      emptyArray.pop();
      emptyArray.push(pingPong);
    }
    else if (emptyArray[index] % 3 === 0) {
      emptyArray.pop();
      emptyArray.push(ping);
    }
    else if (emptyArray[index] % 5 === 0) {
      emptyArray.pop();
      emptyArray.push(pong);
    }
  }
  return emptyArray
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
debugger;
    var userInput = parseInt($("#input").val());
    var result = pingPongFnc(userInput);
    $("ul").append("<li>" + result + "</li>");

  });
});
