/*
this is the main js file for the text adventure
*/

//document.write("<h1>I cant wait for the <em>world</em></h1>");
//alert("")
//confirm("")
//prompt("")

var pcName = prompt("What is your name?");
while (!confirm("do you want your name " + pcName)) {
    pcName = prompt("change your name from " + pcName + " to?");
}
if (confirm("Hello player.\nThis is a game made by Jeremy Bloom,\nOptions will be shown as follows:\n\t--This is an example of a option--\nTo choose an option type the first letter of the option.\n Would you like to start the game?")) {
    Game();
}
function Game() {
    var mainPath = prompt("You wake in a strange room. Padded walls and flooring. You can't seam to to move your arms. They seem to be bound in a strait jacket.\n--Struggle--\n--Look around--\n--Examine strait Jacket--").toLowerCase();
    switch(mainPath) {
        default

    }
}

Game();