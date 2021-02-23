//Class Exercise Part I

let age = 25
let height = 5

console.log(age)
console.log(height)

//Class Exercise Part II
if (age < 8){
    console.log("Check out the Merry-Go-Round. You'll love it!");
} else if (age >= 8 && age < 65 && height > 4.5){
    console.log("Check out the Roller Coaster. It's awesome!");
} else {
    console.log("Why not enjoy a float down the Lazy River?");
}


//Function to randomize array entries and output sentence
function addText() {
   //Sentence Generator, setup arrays
    let nouns = ["dog", "cat", "moose", "bear", "fish"]
    let verbs = ["bark", "cry", "catch", "throw", "punch"]
    let adjectives = ["sillily", "roughly", "softly", "ambitiously", "rambunctiously"]
    // Randomize array output
    let noun = nouns[Math.floor(Math.random()*nouns.length)];
    let verb = verbs[Math.floor(Math.random()*verbs.length)];
    let adjective = adjectives[Math.floor(Math.random()*adjectives.length)];

    let response = 'My ' + noun + ' leaps ' + adjective + ' when I ' + verb + ' a rainbow in the sky';
    document.getElementById("response").innerHTML = response
}


