// You can add strings together, and add numbers into strings.
// Sing along, using string concatenation:
// X potions of health on the wall!
// X potions of health!
// Take Y down, pass it around!
// X-Y potions of health on the wall.

var potionsOnTheWall = 10;
var numToTakeDown = 1;
while(true) {
    hero.say(potionsOnTheWall + " potions of health on the wall!");
    // Sing the next line:
    hero.say(potionsOnTheWall + " potions of health!");
    // Sing the next line:
    hero.say("Take " + numToTakeDown + " down, pass it around!");
    potionsOnTheWall -= numToTakeDown;
    // Sing the last line:
    hero.say(potionsOnTheWall + " potions of health on the wall.");
}
