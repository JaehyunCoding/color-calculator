const prompt = require('prompt-sync')({sigint: true})

let user = prompt("Do you want to 'combine' colors or 'deconstruct' a color? ")

let comb = "combine"
let decon = "deconstruct"

if (user === comb){
let color1 = prompt("Which 2 colors do you want to combine: 'red', 'blue', 'yellow'? ")
let color2 = prompt("Which 2 colors do you want to combine: 'red', 'blue', 'yellow'? ")
    if (color1 === "red" && color2 === "blue"){
    console.log("purple");
}   else if (color1 === "blue" && color2 === "red"){
    console.log("purple")
}   else if (color1 === "red" && color2 === "yellow"){
    console.log("orange")
}   else if (color1 === "yellow" && color2 === "red"){
    console.log("orange")
}   else if (color1 === "blue" && color2 === "yellow"){
    console.log("green")
}   else if (color1 === "yellow" && color2 === "blue"){
    console.log("green")
}   else {
    console.log("error")
}
}

if (user === decon){
let color = prompt("Which color do you like to deconstruct: 'purple', 'orange', 'green'? ")
    if (color === "purple"){
        console.log("red + blue")
    }   else if (color === "orange"){
        console.log("red + yellow")
    }   else if (color === "green"){
        console.log("yellow + blue")
    }   else {
        console.log("error")
    }
}

// if (color1 === 'red' && color2 === 'blue'){
//     console.log('purple');
// if (color === 'purple'){
//     console.log('red + blue');

// let user = prompt("Which colors or a color do you want? ")

// if (user ==