console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = "Ivan"
console.log("The driver's name is " + hacker1);

let hacker2 = "Fernando";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else if (hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

//Primero

let upperCaseDriver = "";
for (let i = 0; i < hacker1.length; i++) {
    upperCaseDriver += (hacker1[i].toUpperCase() + " ")
}
console.log(upperCaseDriver)

//Segundo

let reverseDriver = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
    reverseDriver += (hacker1[i])
}
console.log(reverseDriver)


//Tercero

for (i = 0; i < hacker1.length; i++) {

    if (hacker1[i] !== hacker2[i]) {
        if (hacker1[i] < hacker2[i]) {
            console.log("The driver's name goes first.")
            break;

        }
        else if (hacker1[i] > hacker2[i]) {
            console.log("Yo, the navigator goes first definitely.")
            break;
        }
    }
    else if (hacker1 === hacker2) {
        console.log("What?! You both have the same name?")
        break;
    }
}













