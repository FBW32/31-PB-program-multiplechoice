/* 1. 
Color Analyzer
Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow). */
let colors = 'red';
switch (colors) {
 case 'blue':
        console.log('blueish is pretty');
        break;
 case 'red':
        console.log('reddish is pretty'); // reddish is pretty
        break;
case 'green':
        console.log('greenish is pretty');
        break;
 case 'yellow':
        console.log('yellowish is pretty');
        break;        
    default:
    console.log('no color');
        break;
}   

/* 2. 
Grading
Create a switch statement that prints different comments depending on a grade. */

let grade = "B";
let msg;
switch (grade) {
    case "A":
        msg = "Excellent";
        break;
    case "B":
        msg = "Very good";
        break;
    case "C":
        msg = "Excellent";
        break;
    case "D":
        msg = "Excellent";
        break;
    default:
        msg = "No Grade";
        break;
}
console.log(msg);

/* 3. 
Fruits
Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple). */

let fruit = "kiwi";
let msg2;
switch (fruit) {
    case "banana": 
        msg2 = "yellow and long"
        break;
    case "apple": 
        msg2 = "round and red"
        break;
    case "kiwi": 
        msg2 = "round and green"
        break;
    default:
        msg2 = "there are no fruits";
        break;
}
console.log(msg2);


/* 4. 
Percentage Complete.
If percentageComplete is below 30, print "Still a long way to go".
If the percentageComplete is between 30 and 50, print "Slowly getting there".
If percentageComplete is between 51 and 80, print "You can do it!".
If percentageComplete is between 81 and 99, print "This is the last push!".
If percentageComplete is 100, print "You're there. Well done!". */


let percentageComplete = 100;
let msg3;
switch (true) {
    case percentageComplete < 30:
        msg3 = "Still a long way to go";
        break;
    case percentageComplete > 30 && percentageComplete < 50:
        msg3 = "Slowly getting there";
        break;
    case percentageComplete > 51 && percentageComplete < 80:
        msg3 = "You can do it!";
        break;
    case percentageComplete > 81 && percentageComplete < 99:
        msg3 = "This is the last push!";
        break;
    case percentageComplete === 100:
        msg3 = "You're there. Well done!";
        break;
    default:
        break;
}
console.log(msg3);

/* 5. 
Differences
When should you use a switch statement versus an if else statement. Comment your answer in your js file. */

/* I use if-else statement when I want to test expression based on range of values or conditions. 
While I use switch statement when I want to tests expressions based only on a single integer, enumerated value or string object. */

