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

//BONUS 1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed hendrerit molestie ipsum, et cursus libero.Vivamus dui quam, tincidunt in mauris at, lobortis eleifend ex.Proin varius elementum eros, non scelerisque nisi dapibus vel.Praesent pretium orci lacus, fringilla aliquet odio sagittis pulvinar.Praesent luctus ipsum augue.Nam semper neque a tortor ultrices, non faucibus diam commodo.Nullam eleifend nulla non tellus egestas, id placerat ante luctus.Quisque nec augue ac diam tempor rutrum ac vitae sem.Praesent in condimentum ex, et laoreet nibh.Etiam eu dolor dignissim, pulvinar augue ac, vestibulum odio.Phasellus placerat convallis nulla, sed pellentesque odio posuere pretium.Duis auctor dui faucibus massa gravida varius.Vestibulum blandit condimentum elit eget euismod.Proin ac auctor orci, eleifend dictum enim.Nulla facilisi.Fusce eget erat dui. In hac habitasse platea dictumst.Mauris mi metus, hendrerit id leo vitae, ornare ultrices arcu.Suspendisse potenti.Aenean nec erat vitae magna condimentum maximus.Mauris vestibulum id nibh nec semper.Morbi ornare vitae lectus at gravida.Pellentesque ullamcorper purus ac orci blandit rutrum.Vivamus metus nunc, rhoncus ac ex a, facilisis efficitur diam.Suspendisse pellentesque aliquet consectetur.Praesent lorem magna, lobortis in arcu in, commodo blandit lectus.Suspendisse porttitor ultrices erat egestas rhoncus.Morbi a nisl neque.Nunc convallis leo ut bibendum volutpat.Suspendisse volutpat quam sed arcu varius, dapibus rutrum elit maximus.Vestibulum hendrerit vitae est id tristique.Maecenas luctus lacus euismod est ultrices facilisis."


var words = longText.split(" ");
console.log("Numero de palabras en el texto: " + words.length);

var etCounter = 0;
for (var i = 0; i < longText.length; i++) {
    if (longText.substring(i, i + 2) === "et") {
        etCounter++;
    }
}
console.log(" 'et' aparece: " + etCounter + " en el Lorem Ipsum");


//BONUS 2

let string = " "









