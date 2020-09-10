// Switch if...

console.log("")
console.log("QUESTION 1. Color Analyzer")
// Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).

// Color Randomizer
let q1 = Math.floor(Math.random() * 4) + 1;
switch (q1) {
    case 1:
        console.log("Red")
        break;
    case 2:
        console.log("Blue")
        break;
    case 3:
        console.log("Green")
        break;
    case 4:
        console.log("Yellow")
        break;
    default:
        console.log("None")
        break;
};




console.log("")
console.log("QUESTION 2. Grading")
// Create a switch statement that prints different comments depending on a grade.

// grades 1- 7

let q2 = Math.floor(Math.random() * 7) + 1;
switch (q2) {
    case 1:
        console.log("Grade A: +80% High destinction")
        break;
    case 2:
        console.log("Grade B: +70% Destinction")
        break;
    case 3:
        console.log("Grade C: +60% Credit")
        break;
    case 4:
        console.log("Grade D: +50% Pass")
        break;
    case 5:
        console.log("Grade E: +45% Pass with second attempt")
        break;
    case 6:
        console.log("Grade F: +35% Faile the grade")
        break;
    case 7:
        console.log("Grade G: +25% Failed the grade: Underperformed for current grade")
        break;
    default:
        console.log("None")
        break;
};




console.log("")
console.log("QUESTION 3. Fruits")
// Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).

let q3 = Math.floor(Math.random() * 4) + 1;
switch (q3) {
    case 1:
        console.log("banana")
        break;
    case 2:
        console.log("orange")
        break;
    case 3:
        console.log("strawberry")
        break;
    case 4:
        console.log("apple")
        break;
    default:
        console.log("None")
        break;
};



console.log("")
console.log("QUESTION 4. Percentage Complete")
// If percentageComplete is below 30, print "Still a long way to go".
// If the percentageComplete is between 30 and 50, print "Slowly getting there".
// If percentageComplete is between 51 and 80, print "You can do it!".
// If percentageComplete is between 81 and 99, print "This is the last push!".
// If percentageComplete is 100, print "You're there. Well done!".

let q4 = Math.floor(Math.random() * 100) + 1;
switch (q4) {
    case 1: // below 30
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
        console.log("Still a long way to go")
        break;
    case 30: // between 30 and 50
    case 31:
    case 32:
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 48:
    case 49:
    case 50:
        console.log("Slowly getting there")
        break;
    case 50: // between 51 and 80
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 65:
    case 66:
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
    case 80:
        console.log("You can do it!")
        break;
    case 80:
    case 81:
    case 82:
    case 83:
    case 84:
    case 85:
    case 86:
    case 87:
    case 88:
    case 89:
    case 90:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 97:
    case 98:
    case 99:
        console.log("This is the last push!")
        break;
    case 100:
        console.log("You're there. Well done!")
        break;
    default:
        console.log("None")
        break;
};



console.log("")
console.log("5. Differences")
// // When should you use a switch statement versus an if else statement. Comment your answer in your js file.

console.log("An if else statement should be used, when it is passed through more than one conditon i.e. if the variable fits between numbers 1 to 10, etc.")
console.log("A switch statement should be used when there is only only one conditon/comparison to be met, othwerise the program will have to have a case for every potential outcome (as shown in question 4).")
