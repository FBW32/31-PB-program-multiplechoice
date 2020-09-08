// Switch if...

/* 1. Color Analyzer
    Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).
*/
let color = "blue";
switch(color) {
    case "red": console.log("This is red color");
    break;
    case "blue": console.log("This is blue color");
    break;
    case "green": console.log("This is green color");
    break;
    case "yellow": console.log("This is yellow color");
    break;
    default: console.log("no known color specified");
}
// This is blue color

/* 2. Grading
    Create a switch statement that prints different comments depending on a grade.
*/
let grade = 'A';
switch(grade) {
    case 'A': console.log("You got A Grade");
    break;
    case 'B': console.log("You got B Grade");
    break;
    case 'c': console.log("You got C Grade");
    break;
    default: console.log("No Grade");
}
// You got A Grade

/* 3. Fruits
    Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).
*/
function fruits(fruit){
    switch(fruit) {
        case "Banana": console.log("Banana is good");
        break;
        case "Orange": console.log("I like Oranges");
        break;
        case "Strawberry": console.log("I have Strawberry allergy");
        break;
        case "Apple": console.log("Apples are little sour");
        break;
        default: console.log("No valid fruit");
    }
}
fruits("Orange"); // I like Oranges

/* 4. Percentage Complete.
    If percentageComplete is below 30, print "Still a long way to go".
    If the percentageComplete is between 30 and 50, print "Slowly getting there".
    If percentageComplete is between 51 and 80, print "You can do it!".
    If percentageComplete is between 81 and 99, print "This is the last push!".
    If percentageComplete is 100, print "You're there. Well done!".
*/
function percentageComplete(percent) {
     switch(true) {
        case (percent < 30): console.log("Still a long way to go.");
        break;
        case ((percent >= 30) && (percent <= 50)): console.log("Slowly getting there.");       
        break;
        case ((percent >= 51) && (percent <= 80)): console.log("You can do it!.");
        break;
        case ((percent >= 81) && (percent <= 99)): console.log("This is the last push!.");
        break;
        case (percent === 100): console.log("You're there. Well done!.");
        break;
        default: console.log("None of the above");
    }
}
percentageComplete(75); // You can do it!.
percentageComplete(100); // You're there. Well done!.


/* 5. Differences
    When should you use a switch statement versus an if else statement. Comment your answer in your js file.
*/
// Use switch instead of if when: You are comparing multiple possible conditions of an expression and the expression itself is non-trivial.
// The if statement is used to select among two alternatives. It uses a boolean expression to decide which of the alternative should be executed. The switch statement is used to select among multiple alternatives.

