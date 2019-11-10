var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[4];
var colorDisp = document.getElementById("colorDisplay");

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
            alert("You won!");
        } else{
            alert("Wrong!");
        }
    });
}