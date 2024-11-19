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
document.getElementById("guess_game").addEventListener("click" , guess_10)

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

/** LESSON 3.2 **/

function menu() {
    // Setup the menu
let message = `Hi! Please make a selection:
1 - Play
2 - Options
3 - DLC
4 - Check for Updates
5 - Exit
`
// Prompt with the menu
let selection = Number(prompt(message));

if (selection == 1) {
    alert("Let's play!")
    let difficulty = +prompt(`Select difficulty:
        1 - Easy
        2 - Medium
        3 - Hard`)
        if (difficulty == 1) {
            alert("You selected the easy route.")
        } else if (difficulty == 2) {
            alert("Most people select medium.")
        } else if (difficulty == 3) {
            alert("I see you like a challenge!")
        }
} else if (selection == 2) {
    alert("You selected Options.")
} else if (selection == 3) {
    alert("No new DLC at this time.")
} else if (selection == 4) {
    alert("Everything is up to date.")
} else if (selection == 5) {
    alert("Bye!")
}
}

// 3.2 - Part 2 

function greeting(hour) {
    if ((hour >= 0) && (hour <=11)){
        return("Good morning!");
    } else if ((hour >= 12) && (hour <=17)) {
        return("Good afternoon!")
    } else if ((hour >= 18) && (hour <= 23)) {
        return("Good evening")
    }
    return("Invalid hour!")
}

// 3.2 Optional

function two_digit() {
    let digit = randInt(0,10)
    if (digit % 2 == 0) {
        return("Even")
    } else if (digit != 0) {
        return("Odd")
    }
    if (digit == 0) {
        return("0")
    }

}

/** LESSON 3.3 **/

// Part 1

function is_number(num) {
   if (typeof num == "number") {
    return("True")
   } else {
        return("False");
   }
}

// Part 2

function which_day(n) {
    is_number(n)
    if (typeof n != "number") {
        return("Invalid type.")
    }
    if (n == 1) {
        return("Sunday")
    } else if (n == 2) {
        return("Monday")
    } else if (n == 3) {
        return("Tuesday")
    } else if (n == 4) {
        return("Wednsday")
    } else if (n == 5) {
        return("Thursday")
    } else if (n == 6) {
        return("Friday")
    } else if (n == 7) {
        return("Saturday")
    } else {
        return("Invalid value.")
    }
}

// Part 3

function guess_10() {
    let n = randInt(1 , 10)
    let guess = +prompt("I'm thinking of a number between 1-10.. what is it?")
    if (guess == n) {
        alert(`Yes! The number was ${n}`)
    } else if ((guess > 10) || (guess > 1)) {
        alert(`Your number was outside of the correct range (1-10). The correct number was ${n}`)
    } else if (guess > n) {
        alert(`Your guess was too high. The correct number was ${n}`)
    } else if (guess < n) {
        alert(`Your guess was too low. The correct number was ${n}`)
    } else {
        alert(`There was an error.`)
    }
}

/** LESSON 3.4 **/

function countdown (start, stop) {
    let attempts = 0
    if (start < stop) {
        return -1
    } while (start >= stop) {
        console.log(`${start}`)
        start--
        attempts++
    } return (`${attempts}`)
} 

// Random Until Stop

function random_until(min, max, stop) {
    let rnd = randInt(min , max)

    //Error checking
    if (stop < min || stop > max || max <= min) {
        return -1
    } 
    
    //Check value
    while (rnd != stop) {
        console.log(rnd)
        rnd = randInt(min , max)
    } return stop
}

// Average

function average(n) {
    let avg = 0
    let count = 1
    while (count <= n) {
        avg += +prompt(`Please enter value ${count}/${n}`)
        count++
    }
    avg = round(avg/n, 1)
    console.log(`The average is ${avg}`)
}

//** LESSON 3.5 **//

//Print reverse

function print_reverse(str) {
    let output = ""
    let end = str.length - 1
    while (end >= 0) {
        output += str[end]
        end--
    } console.log(output)
}

function dragons_and_goblins(str) {
    let dragons = 0
    let goblins = 0
    let char = 0
    while (char < str.length) {
        if (str[char] == "d") {
            dragons++
        } else if (str[char] == "g") {
            goblins++
        }
        char++
    } console.log(`Dragons: ${dragons} Goblins: ${goblins}`)
}

/** LESSON 3.6 **/

function print_odd(n) {
    let num = 1;
    if (n > 1) {
    do {
        console.log(num)
        num = num + 2
    } while (num <= n)
    } else if (n < 1 || isNaN(n)) {
        return
    }
}

function parrot() {
    let input;
    let response = ("GOODBYE 🦜");
    do {
    input = prompt("Please enter some text or the word 'quit' to exit")
    alert(`${input.toUpperCase()}`)
    } while (input.toLowerCase() != "quit")
        alert(`${response}`)
}

/** LESSON 3.7 **/

function count_up(start, stop) {
    for (let min = start; min <= stop; min++) {
        console.log(min)
    }
}

function count_down(start, stop) {
    for (let max = start; max >= stop; max--) {
        console.log(max)
    }
}

function print_chars(str, step) {
    for (let outcome = 0 ; outcome < str.length; outcome +=step) {
        console.log(str[outcome]) // OH MY GOODNESS IT WORKED..
    }
}

// Part 2

function sum(n) {
    for (let sum = 0 ; sum <= n; sum +=n) {
        return sum
    }
}