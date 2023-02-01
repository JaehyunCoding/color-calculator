const prompt = require('prompt-sync')({sigint: true})

let user = prompt("Enter a color or 2 colors among these colors. red, blue, yellow, purple, green, orange: ")

if(user === user.includes("red", "blue")) {
    console.log("purple")
}   else if(user === user.includes("red", "yellow")) {
    console.log("orange")
}   else if(user === user.includes("blue", "yellow")) {
    console.log("green")
}   else if(user === "purple") {
    console.log("red, blue")
}   else if(user === "orange") {
    console.log("red, yellow")
}   else if(user === "green") {
    console.log("blue, yellow")
}   else {
    console.log("error")
}