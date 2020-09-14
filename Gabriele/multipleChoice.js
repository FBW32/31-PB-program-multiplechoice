// 1. Color Analyzer
// Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).

let iris = "multicolor";
switch(iris) {
    case "red":
        console.log("The iris is red");
    break;
    case "blue":
        console.log("The iris is blue");
    break;
    case "green":
        console.log("The iris is green");  
    break;
    case "yellow":
        console.log("The iris is yellow");
    default:
        console.log("The iris has all the above color");    
}
 // The iris has all the above color

// 2. Grading
// Create a switch statement that prints different comments depending on a grade.

let grade = 9;
switch(grade) {
    case 5:
        console.log("This is not sufficient");
    break;
    case 6:
        console.log("This is just sufficient");  
    break;
    case 7:
        console.log("Your result is more than sufficient"); 
    break;       
    case 8:
        console.log("Well done, you got a nice grade");   
    break;    
    case 9:
       console.log("This is a stunning grade");   
    break;   
    case 10:
        console.log("This is perfection");      
    break;    
    default:
       console.log("You probably didn't finish the exam");        
}  

//  This is a stunning grade


// 3. Fruits
// Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).

let favFruit = "banana";
switch(favFruit) {
    case "avocado":
        console.log("Avocado is your favorite fruit");
    break;    
    case "orange":
        console.log("Orange is your favorite fruit");   
    break;
    case "apple":
        console.log("Apple is your favorite fruit"); 
    break;    
    case "banana":
       console.log("Banana is your favorite fruit");     
    break;
    default:
        console.log("You don't like any of the fruit");        
}
// Banana is your favorite fruit



// 4. Percentage Complete.
// If percentageComplete is below 30, print "Still a long way to go".
// If the percentageComplete is between 30 and 50, print "Slowly getting there".
// If percentageComplete is between 51 and 80, print "You can do it!".
// If percentageComplete is between 81 and 99, print "This is the last push!".
// If percentageComplete is 100, print "You're there. Well done!".

let percentageComplete = 67;
switch(percentageComplete) {
    case 28:
        console.log("Still a long way to go");
    break;
    case 33:
        console.log("Slowly getting there");    
    break;    
    case 67:
        console.log("You can do it"); 
    break;
    case 82:
        console.log("This is the last push");     
    break;
    case 100:
        console.log("You are there. Well done.");      
    default:
        console.log("No percentage provided");    
}

// You can do it


// 5. Differences
// When should you use a switch statement versus an if else statement. Comment your answer in your js file.

// // It first depends on the number of conditions: if-else statement is usually much easier to read than the switch when we have few conditions; but increasing the number of conditions usually reverses that opinion, and switch is faster and easier to read. 
// Generally speaking, if-else is best used when there are two discrete values or a few different ranges of values for which to test. When there are more than two discrete values for which to test, the switch statement is the most optimal choice.