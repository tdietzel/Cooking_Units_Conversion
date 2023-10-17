let americanWeightConversion = document.querySelector("h3.weight");
americanWeightConversion.onclick = function gramConversion() {
    let lbs = parseInt(prompt("Enter the amount in lbs: "));
    let oz = parseInt(prompt("Enter the amount in oz:"));
    gramPrompt(lbs, oz);
}

function gramPrompt(lbs, oz) {
    let grams = 0;
    grams = lbs * 453.592;
    grams = grams + (oz * 28.3495);
    window.alert(lbs + "lbs " + "+ " + oz + "oz " + "= " + Math.floor(grams) + " grams");
}

let milliliterConversion = document.querySelector("h3.cooking");
milliliterConversion.onclick = function mlConversion() {
    let tsp = parseInt(prompt("Enter the amount in tsp: "));
    let tbsp = parseInt(prompt("Enter the amount in tbsp:"));
    let cups = parseInt(prompt("Enter the amount in cups:"));
    mlPrompt(tsp, tbsp, cups);
}

function mlPrompt(tsp, tbsp, cups) {
    let ml = 0;
    ml = tsp * 4.92892;
    ml += (tbsp * 14.7868)
    ml += (cups * 236.588)
    window.alert(tsp + " tsp + " + tbsp + " tbsp + " + cups + " cups = " + ml + "ml");
}

let gallonConversion = document.querySelector("h3.liquid");
gallonConversion.onclick = function galConversion() {
    let gal = parseInt(prompt("Enter the amount in gallons: "));
    galPrompt(gal);
}

function galPrompt(gal) {
    let liters = 0;
    liters = gal * 3.785;
    window.alert(gal + " gallons = " + liters + " liters");
}