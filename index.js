/*$var btns = document.querySelectorAll('button');

btns.forEach (function (btn){
    btn.addEventListener('click', alertClick);
});

function alertClick () {
    alert ("I got clicked!");
} */


var btns = document.querySelectorAll(".drum");

for (var i = 0; i < btns.length ; i++) {
    btns[i].addEventListener('click', alertClick);
  }
  
 function alertClick () {

  var buttonInnerHTML = this.innerHTML;

  buttonAnimation(buttonInnerHTML);

 switch (buttonInnerHTML) {
  case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play(); 
      break;
 
  case "a":
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play(); 
    break; 
    
  case "s":
    var kick = new Audio('sounds/kick-bass.mp3');
    kick.play(); 
    break;   

  case "d":
    var snare = new Audio('sounds/snare.mp3');
    snare.play(); 
    break;  
    
  case "j":
    var crash = new Audio('sounds/crash.mp3');
    crash.play(); 
    break;  
    
  case "k":
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play(); 
    break; 
    
  case "l":
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play(); 
    break; 

  default: 
    console.log (buttonInnerHTML);
 }

  }


  document.addEventListener("keydown", function (event) {
    console.log (event);

    var keyPressed = event.key;
    buttonAnimation(event.key);
  
    switch (keyPressed) {

      case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play(); 
        break;
   
    case "a":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play(); 
      break; 
      
    case "s":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play(); 
      break;   
  
    case "d":
      var snare = new Audio('sounds/snare.mp3');
      snare.play(); 
      break;  
      
    case "j":
      var crash = new Audio('sounds/crash.mp3');
      crash.play(); 
      break;  
      
    case "k":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play(); 
      break; 
      
    case "l":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play(); 
      break;   
    
      default: 
      console.log (keyPressed);
    }

  });


  function buttonAnimation (currentKey) {

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout (function() {
      activeButton.classList.remove ("pressed");
     }, 100)
  }