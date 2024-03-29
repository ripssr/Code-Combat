// We are field testing a new battle unit: the decoy.
// Build 4 decoys, then report the total to Naria.

var decoysBuilt = 0;
while(true) {
    var coin = hero.findNearestItem();
    if(coin) {
        // Collect the coin!
        hero.moveXY(coin.pos.x, coin.pos.y);
    }
    // Each decoy costs 25 gold.
    // If hero.gold is greater than or equal to 25:
    if (hero.gold >= 25) {
        // buildXY a "decoy"
        hero.buildXY("decoy", hero.pos.x, hero.pos.y);
        // Add 1 to the decoysBuilt count.
        decoysBuilt++;
    }
    
    if(decoysBuilt == 4) {
        // Break out of the loop when you have built 4.
        break;
    }
}

hero.say("Done building decoys!");
hero.moveXY(14, 36);
// Say how many decoys you built.
hero.say(decoysBuilt);
