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


/*** Intro ***/
// Spooky activity
function startGame() {
     let player_name = prompt("Name?");
    alert("Welcome, "+ player_name +", to St. Matthew HS")
    alert("Our relatively normal high school has undergone a scary transformation on the night of Halloween! Unfortunatly, you were in the building when this happened.")
    let decision = +prompt("You were in Mr. Brash's room when the power went out. Do you (1) flip the light switch, (2) search the cabinets, (3) use your phone's flashlight?")

    if (decision == 1) {
        alert("The power is out..")
        alert("Try again")
        return
    }

    if (decision == 2) {
        open_cabinet()
    }

    if (decision == 3) {
        alert("You're on 5% (Darn you social media apps!!!)")
        alert("Try again")
        return
    }

}

function open_cabinet() {
    alert("You find a flashlight and two extra batteries! Now it's time to search for a way out of the school.")
    let choice = +prompt("Do you go to the (1) Learning Comms or (2) the greenhouse?")

    if (choice == 1) {
        learning_comms()
    }

    if (choice == 2) {
        greenhouse()
    }

}

// LC
function learning_comms() {
    alert("You go to the LC. There are no afterschool clubs tonight.. because it's Halloween. You find a portable phone charger to charge your phone while you find a way out.")
    alert("There is a medical kit across the room near the photocopier. It could come in handy later, so you walk towards the table...")
    alert("!!!")
    alert("THE BOOKS ARE FLYING!?")
    let choice = +prompt("Quick! Do you (1) take the medkit or (2) run to the halls?")

    if (choice == 1) {
        alert("You get hit with several books and get paper cuts (YEEEOUCH!) Now you have to use the band-aids in the medkit. That was a waste..")
        hallway()
    }
    if (choice == 2) {
        hallway()
    }
}


// Hallway

function hallway () {
    alert("Test lol")
}



// Greenhouse
function greenhouse() {
}