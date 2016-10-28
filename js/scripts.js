//Business Logic
var ping = "ping";
var pong = "pong";
var pingPong = "ping-pong";


var pingPongFnc = function(input) {
debugger;

var counter = 0
var emptyArray = []
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


//Userinterface Logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
debugger;
    var userInput = parseInt($("#input").val());
    var result = pingPongFnc(userInput);

    result.forEach(function(element){
      $("ul").append("<li>" + element + "</li>")
    });

  });
});
