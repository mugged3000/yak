const btn = document.getElementById("btn")
var names = document.getElementById("name")


// btn.addEventListener("click", function() {
//     names.innerHTML = "Something Else"
//     // names.innerText = "Something Else"
//     // names.innerContent = "Something Else"
//     // alert("hello world")
// } )



function testFunction(){
    var myName = "Spider"
    names.innerHTML = myName
    window.alert(5 + 6)
    // alert("wow")
} 


var year = 2024 // variable name that will change
var year = 2025

const age = 10 // variable name that cannot be declare again

let student; // declare a variable without a value

var person = "Hege"; // more readable
var person="Hege"; // not readable


var names = document.getElementById("name")
var myName = "spider"
var work = "Dev"

names.innerHTML = `${myName} is a ${work}`

//true and false are called BOOLEAN

// if(20 == 20){
//     console.log("true")
// }else{
//     console.log("false")
// }

20 == 30 ? console.log("true") : console.log("false") // ternary operatir



var count = 20
function Increment(){
    count -= 1
    names.innerHTML = count
}