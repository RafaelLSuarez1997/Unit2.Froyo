//User input
const userInput = prompt(
    "Flavors Available: Vanilla | Starwberry | coffee",
    "enter a list of comma-separated froyo flavors"
)

const flavorArray = userInput.split(',');

console.log(flavorArray);

//-------------------------------------

//used the guided help from yesterday to help me with this
//a code that when a certain flavor is enetred the sum goes up that many times
function flavorAmount(flavorArray, targetFlavor) {
    let sum = 0;
    for (const flavor of flavorArray) {
        if (flavor === targetFlavor) { 
            sum += 1;
        }
    }
    return sum;
}
 
//
const vanillaCount = flavorAmount(flavorArray, "vanilla");
const strawberryCount = flavorAmount(flavorArray, "strawberry");
const coffeeCount = flavorAmount(flavorArray, "coffee");

console.log(`Vanilla Count: ${vanillaCount}`);
console.log(`Strawberry Count: ${strawberryCount}`);
console.log(`Coffee Count: ${coffeeCount}`);
console.log(`you have ordered ${vanillaCount} vanilla, ${strawberryCount} coffee, and ${coffeeCount} strawberry froyo.`);