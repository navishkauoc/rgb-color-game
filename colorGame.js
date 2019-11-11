var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisp = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numOfSquares = 3;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisp.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numOfSquares = 6;
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisp.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    //Generate all new colors
    colors = generateRandomColors(numOfSquares);
    //Pick a new random color from array
    pickedColor = pickColor();
    //Change colorDisp to match picked color
    colorDisp.textContent = pickedColor;
    //Change colors of squares
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor ="steelblue";
});

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
            resetButton.textContent = "PLAY AGAIN?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
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