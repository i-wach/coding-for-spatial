// let age = 25
// let height = 5

// console.log(age)
// console.log(height)

// if (age < 8){
//     console.log("Check out the Merry-Go-Round. You'll love it!");
// } else if (age >= 8 && age < 65 && height > 4.5){
//     console.log("Check out the Roller Coaster. It's awesome!");
// } else {
//     console.log("Why not enjoy a float down the Lazy River?");
// }

// let noun = "dog"
// let verb = "bark"
// let adjective = "silly"

// console.log('My ' + noun + ' leaps ' + adjective + ' when I ' + verb + ' a rainbow in the sky');

let nouns = ["dog", "cat", "moose", "bear", "fish"]
let verbs = ["bark", "cry", "catch", "throw", "punch"]
let adjectives = ["silly", "rough", "soft", "ambitious", "rambunctious"]

let noun = nouns[Math.floor(Math.random()*nouns.length)];
let verb = verbs[Math.floor(Math.random()*verbs.length)];
let adjective = adjectives[Math.floor(Math.random()*adjectives.length)];

// let sentence = `My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky`

console.log('My ' + noun + ' leaps ' + adjective + ' when I ' + verb + ' a rainbow in the sky')
