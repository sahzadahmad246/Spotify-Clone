var greetingDiv = document.getElementById('greeting1')
var currentDate = new Date();
var hours = currentDate.getHours();
var greeting;
// console.log(hours);
if(hours > 1 && hours < 11){
    greeting = "Good Morning";
}else if(hours > 12 && hours < 17){
    greeting = "Good Afternoon";
}else if (hours > 18 && hours < 20){
    greeting = "Good Evening";
}else{
    greeting = "Good Evening";
  
};
greetingDiv.textContent = greeting;

// Displaying play button on hover


// JavaScript code for the hover effect on play icons
var recentlyPlayedBoxes = document.querySelectorAll(
    ".recently-played .RP-boxes" 
  );
  var otherBoxes = document.querySelectorAll(" .RP-boxes");

  applyHoverEffect(recentlyPlayedBoxes);
  applyHoverEffect(otherBoxes);

  function applyHoverEffect(boxes) {
    boxes.forEach(function (box) {
      box.addEventListener("mouseover", function () {
        var playIcon = this.querySelector(".play");
        
        playIcon.style.display = "block";
       playIcon.style.cursor = "pointer";
       
      });

      box.addEventListener("mouseout", function () {
        var playIcon = this.querySelector(".play");
        playIcon.style.display = "none";
      });
    });
  }


  // JavaScript code for the hover effect on play icons

var recentlyPlayedBoxes = document.querySelectorAll(
    ".recently-played .RP-boxes" 
  );
  var otherBoxes = document.querySelectorAll(" .RP-boxes");

  applyHoverEffect(recentlyPlayedBoxes);
  applyHoverEffect(otherBoxes);

  function applyHoverEffect(boxes) {
    boxes.forEach(function (box) {
      box.addEventListener("mouseover", function () {
        var playIcon = this.querySelector(".play");
        
        playIcon.style.display = "block";
       playIcon.style.cursor = "pointer";
       
      });

      box.addEventListener("mouseout", function () {
        var playIcon = this.querySelector(".play");
        playIcon.style.display = "none";
      });
    });
  }


var recentlyPlayedBoxes = document.querySelectorAll(
    ".recommend-boxes .R-box" 
  );
  // var otherBoxes = document.querySelectorAll(" .RP-boxes");

  applyHoverEffect(recentlyPlayedBoxes);
  // applyHoverEffect(otherBoxes);

  function applyHoverEffect(boxes) {
    boxes.forEach(function (box) {
      box.addEventListener("mouseover", function () {
        var playIcon = this.querySelector(".play");
        
        playIcon.style.display = "block";
       playIcon.style.cursor = "pointer";
       
      });

      box.addEventListener("mouseout", function () {
        var playIcon = this.querySelector(".play");
        playIcon.style.display = "none";
      });
    });
  }



  // var stickyLeft = document.getElementById('stickyLeft');
  //     var stickyTopOffset = stickyLeft.offsetTop;

  //     function handleScroll() {
  //       if (window.pageYOffset >= stickyTopOffset) {
  //         stickyLeft.classList.add('sticky');
  //       } else {
  //         stickyLeft.classList.remove('sticky');
  //       }
  //     }