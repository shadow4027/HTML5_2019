//white room define
const whiteroomPrompt = "Your in a white room. the walls are padded and your locked in a straitjacket. You see 3 buttons. A red one, green one, and a blue one";


const whiteroomOptions = {
    "look around": {
        "prompt": "You look around and you see a bed and a sign.",
        "look at sign": function () {alert("the sign reads your trapped")},
        "examine bed": function () {alert("its just a bed")},
    },

    "struggle": function () { alert("You struggle but you are not able to escape.")},
    "red button": function () {alert("you die in a fiery heck-scape.")},
    "green button": function () {alert("you see a wall open and you head inside"); currentPlace =  greenroom},
    "blue button": function () {alert("Floor opens up and you jump in."); currentPlace = blueroom},
}
                        
const whiteroom = new Place(whiteroomPrompt, whiteroomOptions);

//green room 

const greenroomPrompt = "You find yourself in a green colored room. With plants all around. You see a mysterious looking giant flower. You turn your head and see a glowing vine."

const greenroomOptions = {
    "flower": function () {alert("you go up to the flower. It looks very beautiful. While entranced by its beauty the flower suddenly swallows you."); currentPlace = insideFlower},
    "glowing vine": function () {alert("vine looks as if its pumping something through it.");}
}

const greenroom = new Place(greenroomPrompt, greenroomOptions);

const insideFlowerPrompt = "your inside the flower. It seems like it has closed all around you.";

const insideFlowerOptions = {
    "Look for a way out": function () {alert("the flower is closed on all sides you see no way out.")},
    "Try to pry pedals": function () {alert("You would try to pry the pedals but your still inside a straitjacket.")},
    "Give up": function () {alert("you realize that there is no escape and that your going to die in this flower. Maybe it was a bad decision to push the green button. you think to yourself."); currentPlace = whiteroom}
}

const insideFlower = new Place(insideFlowerPrompt, insideFlowerOptions);

const blueroomPrompt = "you find yourself in a  room with all stars except for a 2 doors. One of them is a  grey door and the other is a white glowing door.";

const blueroomOptions = {
    "Grey door": function () {alert("Tt will not budge.")},
    "White Glowing door": function () {alert("You open the door and head inside."); currentPlace = glowingroom},
}

const blueroom = new Place(blueroomPrompt, blueroomOptions);

const glowingroomPrompt = " you look around and you see your in another white room. You notice that your straitjacket gets loose and your able to slip out of it. You see a door marked with the word Freedom.";

const glowingroomOptions = {
    "Open door": function () {alert("You open the door. Your in a brilliant meadow filled with all manor of wonderful things. You finally escaped."); currentPlace = whiteroom},
    "dont open door": function () {alert("due to your stubborness you hear the door lock shut forever and you eventually die lonely."); currentPlace = whiteroom},
}

const glowingroom = new Place(glowingroomPrompt, glowingroomOptions);
