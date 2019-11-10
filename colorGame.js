var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisp = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisp.textContent = pickedColor;

for(var i=0; i<squares.length; i++){
    //Adding initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //Adding an event listener to each square
    squares[i].addEventListener("click", function(){
        //Grab the color of the clicked square
        var clickedColor = this.style.backgroundColor;

        //Compare the grabbed color with the pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
        } else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color){
    //Loop through all the squares
    for(var i=0; i<squares.length; i++){
        //Change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}