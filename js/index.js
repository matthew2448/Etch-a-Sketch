let x = 16;

const buttonInput = document.createElement('button');
var t = document.createTextNode("Change Square Amount");
buttonInput.onclick = function(){
    let x = prompt("Enter number of squares", "");
    if(x >= 100){
        alert("Numbers above 100 are not allowed");
    }else{
        createGrid(x);
    }
    
};
buttonInput.appendChild(t);
document.body.appendChild(buttonInput);


createGrid(x);


function changeColor(){
    //document.getElementById
}

function setSize(){
    
}

function createGrid(squareSize){
    /*
    if (document.body.contains(document.getElementsByClassName("container"))) {
            document.getElementsByClassName("container").remove();
    } 
    */
   var divs = document.querySelectorAll('.container');
   Array.from(divs).forEach((div) => div.remove())

    const cont = document.createElement("div");
    cont.className = "container";
    const square = document.createElement("div");
    square.className = "grid-container";
    let s = "repeat(" + squareSize + ", 10px)";
    square.style.gridTemplateColumns = s;
    square.style.gridTemplateRows = s;

    for (var i = 1; i <= squareSize; i++) {
        for(var j = 1; j <= squareSize; j++) {
            const squareDiv = document.createElement("div");
            squareDiv.className = "grid-item";
            //squareDiv.innerHTML = i;
            squareDiv.style.backgroundColor = "white";
            //squareDiv.addEventListener("mouseover", changeColor());
            squareDiv.onmouseover = function(){
                squareDiv.style.backgroundColor = "black";
            }
            squareDiv.onmouseout = function(){
                squareDiv.style.backgroundColor = "white";
            }
            square.appendChild(squareDiv);
        }
    }
    cont.appendChild(square);
    document.body.appendChild(cont);
}