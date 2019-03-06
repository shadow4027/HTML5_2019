/*
this is the main js file for the text adventure
*/

//document.write("<h1>I cant wait for the <em>world</em></h1>");
//alert("")
//confirm("")
//prompt("")
function shop(){
    var items = {arrows: 0,
                food:0,
                pikachu: "15",
                power: "over 9000",
                };
    debugger;
    keyarr = Object.keys(items);
    tempst = "you have:\n";
    for (i in keyarr ){
        tempst += `${keyarr[i]}: ${items[keyarr[i]]}\n`;
    }
    alert(tempst);
}

shop();
var pcName = prompt("What is your name?");
while (!confirm("do you want your name " + pcName)) {
    pcName = prompt("change your name from " + pcName + " to?");
}
pcObj = {
    name: pcName,
    inventory: {}
}

if (confirm("Hello player.\nThis is a game made by Jeremy Bloom,\nOptions will be shown as follows:\n\t--This is an example of a option--\nTo choose an option type the first letter of the option.\n Would you like to start the game?")) {
    Game();
}

//main pathway loop
function Game() {
    var mainPath = prompt("You wake in a strange room. Padded walls and flooring. You can't seam to to move your arms. They seem to be bound in a strait jacket.\n--Struggle--\n--Look around--\n--Examine strait Jacket--").toLowerCase();
    switch(mainPath[0]){
        
        case "s":
                alert("You struggle but nothing happens");
                Game();
                break;
            case "l":
                switch(prompt("You look around you find:\n--Red Button--\n--Green Button--\n--Blue Button--\n Which one would you like to press?").toLocaleLowerCase()[0]) {
                    case "r":
                        alert("Red smoke filles the room and you passout.");
                        Red();
                        alert("your ran me");
                        break;
                    case "g":
                        Green;
                        break;
                    case "b":
                        Blue();
                        break
                    default:
                    alert("Non Valid option");
                }
            default:
                Game();
    }
    }
function Red(){
    
    switch(prompt("")){
           
           }
}

Game();
