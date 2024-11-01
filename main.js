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
document.getElementById("sillygame").addEventListener("click" , startGame)


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
    first_choice()
}

function first_choice() {
    let decision = +prompt("You were in Mr. Brash's room when the power went out. Do you (1) flip the light switch, (2) search the cabinets, (3) use your phone's flashlight?")

    if (decision == 1) {
        alert("The power is out..")
        alert("Try again")
        first_choice()
    }

    if (decision == 2) {
        open_cabinet()
    }

    if (decision == 3) {
        alert("You're on 5% (Darn you social media apps!!!)")
        alert("Try again")
        first_choice()
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
        alert("You get hit with several books and get paper cuts (YEEEOUCH!) You die to the paper cuts..")
        gameOver()
    }
    if (choice == 2) {
        hallway()
    }
}


// Hallway

function hallway() {
    alert("You enter the hallways of the second floor. It's dark but thankfully, you have a flashlight! Now where to go from here?")
    let choice = +prompt("You could (1)go downstairs, or (2)check the greenhouse.")

    if(choice == 1) {
        alert("You walk down the stairs. For some reason the stairs are stained with grapes???")
        first_floor()
    }
    if(choice == 2) {
        greenhouse()
    }
}


// Greenhouse
function greenhouse() {
    alert("You enter the greenhouse.. and unfortunately, there's nothing but vines everywhere. It smells horrible in here!")
    let choice = +prompt("Do you (1)shine your flashlight into the room and search around, (2)Leave and go downstairs, or (3)toss a half eaten sandwhich inside to see what happens?")

    if(choice == 1) {
        alert("You shine your flashlight onto the source of the vines on the ceiling. Before you know it, several vines full of sharp thornes rip off your arm that holds the flashlight as you are dragged into the greenhouse and the door closes..")
        alert("...")
        alert("You are dead...")
        gameOver()
    }
    if(choice == 2) {
        alert("You simply head downstairs.")
        first_floor()
    }
    if(choice == 3) {
        alert("You throw a half eaten sandwhich into the room... The vines give you a small flower and let you live. You should probably just head downstairs..")
        first_floor()
    }
}

// Downstairs
function first_floor() {
    alert("From here, you can exit from the student foyer, or go to the office and exit through the front door.")
    let choice = +prompt("(1) Exit from student foyer doors, or (2) exit from the office doors.")
    if(choice == 1) {
        alert("You head towards the student foyer exit, but then you slip on spilt soda from the vending machines and hit your head.. leaving you vulnerable to any monsters nearby..")
        alert("...")
        alert("You are dead...")
        gameOver()
    }
    if(choice == 2) {
        alert("You manage to dodge any trip hazards and hide from lurking monsters which you will never be able to describe due to their strange and terrifying forms (not because I'm too lazy.)")
        gameEnd()
    }

}


/** GAME OVER **/

function gameOver() {
   let now_what = +prompt("GAME OVER... Would you like to try again? (1)Yes or (2)No? (You will be sent back to the beginning)")

   if(now_what == 1) {
    startGame()
   }

   if(now_what == 2) {
    alert("Thanks for playing!")
    return
   }
}

function gameEnd() {
    alert("You reach the office doors and step outside.. you know no one will ever believe you if you told them about this.. THE END.")
    alert("Thanks for playing. Perhaps in the future, I'll make a better game :)")
    return
}