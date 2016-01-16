//Objects

var me = {
  name:"Brack",
  height:"6Ft",
  age:30,
  hobbies:["games", "coding", "music", "etc..."],
  shirt:{
    colors:"black and blue",
    size:"M",
    fabric:{
      type:"cotton",
      threadCount:"I really don't thread count of my shirt... But I don;t know why I would..."
    }
  }
}

var car = {};

  car.make = "chevy"
  car.model = "cobalt"

  //alert("Brack's car is a " + car.make + " " + car.model);

  me.car = car;

  // console.log(me);
  me['otherThing'] = "Stuff";

  var prop = 'name';
  me[prop];

  me.name;
  var arry = ["A","B","C","D","E","F","G"];
  for (var i=0;i<arry.length;i++){
    console.log(arry[i]);
  }

  var zoo = {
    lion:{},
    tiger:{},
    bear:{}
  }

  for (var key in me){
    console.log(key + " has a value of " + me[key]);
  }


me.doStuff = function() {
  alert("I am going to alert stuff now");
}

me.doStuff();

var topPos = 80;
var leftPos = 200;

//moveString will be UP, DOWN, LEFT, or RIGHT

function doWhileStuff(){

  var name = prompt("What is your name?");

  while (name.length<5){
    alert("You need to enter a longer name");
    name = prompt("What is your name?");
  }

  do{
      topPos+=10;
      updateMrBox();
  }while(topPos <=500)


}

 //doWhileStuff();


function handleMove(moveString) {

  switch(moveString){
    case "UP":
      topPos -= 10;
    break;
    case "DOWN":
      topPos += 10;
    break;
    case "LEFT":
      leftPos -= 10;
    break;
    case "RIGHT":
      leftPos += 10;
    break;
  }

  // if (moveString === "UP") {
  //   topPos -= 10;
  // } else if (moveString === "DOWN") {
  //   topPos += 10;
  // } else if (moveString === "LEFT") {
  //   leftPos -= 10;
  // } else if (moveString === "RIGHT") {
  //   leftPos += 10;
  // }

  updateMrBox();
}

function updateMrBox() {
  $("#mrBox").css({
    top: topPos + "px",
    left: leftPos + "px"
  });
  $("#mrLeft").css({
    width: leftPos + "px",
    top: topPos + 23 + "px"
  });
  $("#mrTop").css({
    height: topPos + "px",
    left: leftPos + 23 + "px"
  });
}

updateMrBox();

$(document).ready(function() {
  $(document).on('keydown', function(e) {
    processEvent(e.keyCode);
  });
});

function processEvent(keyCode) {
  switch (keyCode) {
    case 38:
      handleMove("UP");
      break;
    case 40:
      handleMove("DOWN");
      break;
    case 37:
      handleMove("LEFT");
      break;
    case 39:
      handleMove("RIGHT");
      break;
  }
}
