// Get the image element and set its initial position
const myImage = document.getElementById("myImage");
let leftPos = 0;
let topPos = 0;

// Set up the event listener for keydown events
document.addEventListener("keydown", function(event) {
  // Move the image based on the arrow key pressed
  switch(event.keyCode) {
    case 37: // Left arrow
      leftPos -= 10;
      break;
    case 38: // Up arrow
      topPos -= 10;
      break;
    case 39: // Right arrow
      leftPos += 10;
      break;
    case 40: // Down arrow
      topPos += 10;
      break;
    default:
      return; // Do nothing for other keys
  }
  
  // Update the position of the image
  myImage.style.left = leftPos + "px";
  myImage.style.top = topPos + "px";
  
  // Prevent the default action of arrow keys scrolling the page
    event.preventDefault();
});
