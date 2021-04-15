// Your JS goes here

// Create a div with a the respective style and color 
// Use class to make div unique and to give appropriate color/style
// Loop till correct size and boxes are made.
// All will happpen within the body node; body will be the parent element.

// Your JS goes here


const size = "12%";
const defaultProp = `align:center ; float: left; width: ${size}; height: ${size}; padding-bottom: ${size}; display: block; border: 2px solid;`;

var total = 0
const chars = "ABCDEFEGHIJKL".split("")
var board = document.createElement("div")

for(let row=0; row<8; row++){
    total++
    var columnDiv = document.createElement("div");
    for(let column = 1; column<9; column++){
        console.log(column)
        total ++
        var temp = document.createElement("div");
        var text = document.createElement("h2")
        text.textContent = chars[row] + column.toString() ;
        text.style = "float: left; background-color:white ; align:center"; 
        var color = ( (row+column-1)%2 === 0 ) ? "background-color: white; " : "background-color: black; "
        temp.style = color + defaultProp
        temp.appendChild(text)
        columnDiv.appendChild(temp);
    }
    columnDiv.style = "position:center; resize: horizontal; margin: 0px auto;"
    board.appendChild(columnDiv);
} 
console.log(total)


board.style = "overflow:auto; resize:both; border: 5px solid; width: 90%; height: auto; padding-bottom: auto"
document.body.appendChild(board);


/*
var el = document.createElement("div");
el.className = "color-box";
el.style.backgroundColor =  "red"; //"#FF0000";
el.style.float = "left";
el.style.width = "11.1%";
el.style.height = "11.1%";
el.style.paddingBottom = "11.1%";
el.style.display = "block";
document.body.appendChild(el);
//var cb = document.querySelector("color-box")

*/