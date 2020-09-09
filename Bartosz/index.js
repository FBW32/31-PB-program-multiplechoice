// #### 1. Color Analyzer
// Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).

let color = 'green';
switch(color){
    case 'red': console.log('This color is red');
    break;
    case 'blue': console.log('This color is blue');
    break;
    case 'green': console.log('This color is green');
    break;
    case 'yellow': console.log('This color is yellow');
    break;
} // This color is green

// #### 2. Grading
// Create a switch statement that prints different comments depending on a grade.

let grade = 'A';
switch(grade){
    case 'A': console.log("You got A Grade");
    break;
    case 'B': console.log("You got B Grade");
    break;
    case 'c': console.log("You got C Grade");
    break;
}

// #### 3. Fruits
// Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).

let fruit = "Banana";
switch(fruit) {
    case "Banana": console.log("Banana is yellow");
    break;
    case "Orange": console.log("Orange is orange");
    break;
    case "Strawberry": console.log("Strawberry is red");
    break;
    case "Apple": console.log("Apples are round");
    break;
} // Banana is yellow

// #### 4. Percentage Complete. 
// * If percentageComplete is below 30, print "Still a long way to go". 
// * If the percentageComplete is between 30 and 50, print "Slowly getting there". 
// * If percentageComplete is between 51 and 80, print "You can do it!". 
// * If percentageComplete is between 81 and 99, print "This is the last push!".
// * If percentageComplete is 100, print "You're there. Well done!". 

let percent = 99;
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
} // This is the last push!.

// #### 5. Differences
// * When should you use a switch statement versus an `if else` statement. Comment your answer in your js file.

// A switch statement might prove to be faster than ifs provided number of cases are good. If there are only few cases, it might not effect the speed in any case. Prefer switch if the number of cases are more than 5 otherwise, you may use if-else too.
