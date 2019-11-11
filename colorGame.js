var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisp = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons(){
    for(var i=0; i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            //Figure out how many squares to show
            //Pick new color
            //Pick a new picked color
            //Update page to reflct changes
            this.textContent === "EASY" ? numOfSquares = 3: numOfSquares = 6;
            reset();
        });
    }
}

function setUpSquares(){
    for(var i=0; i<squares.length; i++){
        //Adding an event listener to each square
        squares[i].addEventListener("click", function(){
            //Grab the color of the clicked square
            var clickedColor = this.style.backgroundColor;
    
            //Compare the grabbed color with the pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "PLAY AGAIN?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset(){
    colors = generateRandomColors(numOfSquares);
    //Pick a new random color from array
    pickedColor = pickColor();
    //Change colorDisp to match picked color
    colorDisp.textContent = pickedColor;
    //Hide "Correct" keyword
    messageDisplay.textContent = "";
    //Change "PLAY AGAIN?" to "NEW COLORS"
    resetButton.textContent = "NEW COLORS";
    //Change colors of squares
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor ="steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
});

function changeColors(color){
    //Loop through all the squares
    for(var i=0; i<squares.length; i++){
        //Change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //Make an array
    var arr = [];

    //Repeat num times
    for(var i=0; i<num; i++){
        //Get Randomcolor and push into arr
        arr.push(randomColor());
    }

    //Return that array
    return arr;
}

function randomColor(){
    //Pick a "red" from  0 - 255
    var r = Math.floor(Math.random() * 256);
    //Pick a "green" from  0 - 255
    var g = Math.floor(Math.random() * 256);
    //Pick a "blue" from  0 - 255
    var b = Math.floor(Math.random() * 256);

    //rgb(r, g, b)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}