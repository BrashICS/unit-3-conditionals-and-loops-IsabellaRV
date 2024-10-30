/**
 * Unit 3 - Conditionals and Loops
 * ICS3 - Mr. Brash 🐿️
 * 
 * For this unit, Mr. Brash is trying something different. Each lesson will
 * be in this one repository, separated in the Lessons folder.
 * 
 * If you run into Git or Github issues, call Mr. Brash over.
 **/ 


'use strict';

/*** Event Listeners ***/



/*** Functions ***/

// A very accurate rounding function
function round(value, decimals) {
    let multiplier = 10**decimals;
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

// Get a random number from min to max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function user() {
    let age = Number(prompt("What is your age?"));
    if (age >= 60) {
        console.log("You qualify for the senior discount!");
    }
    if (age < 16) {
        console.log("You're not old enough to drive yet.");
    }
    if (age == 44) {
        console.log("So is Mr. Squirrel!");
    }
    let user_name = prompt("What is your name?")
    let length = user_name.length
    if (user_name ==  "Mr. Squirrel") {
        console.log("🐿️")
    }
    if (length >= 7) {
        console.log("You have a long name...")
    }
}