//#### 1. Color Analyzer
// Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).

//let col = "whiteLight";

function colorType(col) {
    
    switch (true) {
        case col === "red":
            console.log('red is available');
        break
        case col === "yellow":
            console.log('yellow is in range');
        break
        case col === "blue":
            console.log('blue is present ');
        break
        case col === "green":
        console.log('green is involve');
        break;
    
        default:
        console.log('this is out of range');
        break;
    }
}

colorType("yellow")
colorType("blue")
// red is available
// yellow is in range
// blue is present 
// green is involve

// #### 2. Grading
//Create a switch statement that prints different comments depending on a grade.

//let grad = 50 >= 100;

function gradingScore(grad) {
    switch (true) {
        case grad >= 90 && grad <= 100:
            console.log("genius");
            break
        case grad >= 70:
            console.log("excellent");
            break
        case grad >= 55:
            console.log("good");
            break
        case grad >= 45:
            console.log("average");
            break
        case grad < 45:
            console.log("work hard");
            break

        default:
            console.log("check if you sat for the Exam ");
            break;
    }
}

gradingScore(95);  // genius


//#### 3. Fruits
//Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).


function fruitsType(fruit) {
    switch (true) {
        case fruit === "banana":
        console.log("Banana is best after meal");
        break;
        case fruit === "orange":
        console.log("orange the best tropical juice");
        break;
        case fruit === "strawberry":
        console.log(" strawberry best with cakes");
        break;
        case fruit === "apple":
        console.log("sweet apples calm stress");
        break;
    
        default:
            console.log("not a fruit at all");
            break;
    }
}

fruitsType("orange");  // orange the best tropical juice

// #### 4. Percentage Complete. 
//* If percentageComplete is below 30, print "Still a long way to go". 
//* If the percentageComplete is between 30 and 50, print "Slowly getting there". 
//* If percentageComplete is between 51 and 80, print "You can do it!". 
//* If percentageComplete is between 81 and 99, print "This is the last push!".
//* If percentageComplete is 100, print "You're there. Well done!". 

function percentageComplete(perMade) {
    switch (true) {
        case perMade < 30:
            console.log("Still a long way to go");
            break;
        case perMade >= 30 && perMade < 50:
        console.log("Slowly getting there");
        break;
        case perMade >=51 && perMade < 80:
        console.log("You can do it!");
        break;
        case perMade >=81 && perMade < 99:
        console.log("This is the last push!");
        break;
        case perMade === 100:
        console.log("You're there. Well done!");
        break;
        default:
        console.log("out of context");
            break;
    }
}

percentageComplete(83);  // This is the last push!


// #### 5. Differences
//* When should you use a switch statement versus an `if else` statement. Comment your answer in your js file.

// Answer

// 1). In most languages, switch only accepts primitive types as key and constants as cases. This means it can be optimized by the compiler using a jump table which is very fast.making it faster  where as if-else it accepts all data types.


// 2) switch is usually more compact than lots of nested if else and therefore, more readable where as if-else allows complex expressions in the condition while switch wants a constant

// 3) It is difficult to edit if-else statements as it is tedious to trace where the correction is required. On the other hand it is easy to edit switch statements as they are easy to trace.