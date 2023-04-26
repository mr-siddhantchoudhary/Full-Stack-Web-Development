// Change Text on Button Click
//Create a simple HTML page with a heading and a button. The initial text must be "The most affordable learning platform", use JavaScript to change the heading text to "PW SKills" when the button is clicked. The button must toggle the text of a heading between " the most affordable learning platform" and PW Skills" each click. 



function toggleText() {
    
    if (heading.innerText == "PW Skills") {
        document.getElementById('heading').innerText = "The most affordable learning platform";
    }
    else if (heading.innerText == "The most affordable learning platform") {
        document.getElementById('heading').innerText = "PW Skills";
    }
}
