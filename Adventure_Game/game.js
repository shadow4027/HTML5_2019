/*
this is the main js file for the text adventure
*/

//document.write("<h1>I cant wait for the <em>world</em></h1>");
//alert("")
//confirm("")
//prompt("")

var pc = prompt("What is your name?");
while(!confirm("do you want your name " + pc)) {
    pc = prompt("change your name from " + pc + " to?");
}