// Switch

/*
The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case.
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
} */


// 1. Color Analyzer
// Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).

let color = "green";

switch (color) {
	case "yellow":
		console.log("sun");
		break;
	case "red":
		console.log("flower");
		break;
	case "blue":
		console.log("sky");
		break;
	case "green":
		console.log("plants");
		break;
	default:
		console.log("I don't know this color");
		break;
} //plants

// 2. Grading
// Create a switch statement that prints different comments depending on a grade.
// é usado Boolean, porque se a operação for verdadeira irá imprimir o resultado esperado.
const grade = 95;
switch (true) {
    case grade >= 90:
        console.log("A");
        break;
    case grade >= 80:
        console.log("B");
        break;
    case grade >= 70:
        console.log("C");
        break;
    case grade >= 60:
        console.log("D");
        break;
    default:
        console.log("F");
} //A

// 3. Fruits
// Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).
const fruit = 'Apple';
switch (fruit) {
  case 'Oranges':
    console.log(`${fruit} is not a Orange`);
    break;
  case 'Mangoes':
    console.log(`${fruit} is not a Mangoe`);
    break;
  case 'Banana':
    console.log('Banana');
    break;
    case 'Strawberry':
        console.log(`${fruit} is not a Strawberry`);
        break;
  default:
    console.log(`Sorry, we are out of ${fruit}.`);
} 
//Sorry, we are out of Apple.

// 4. Percentage Complete.
// If percentageComplete is below 30, print "Still a long way to go".
// If the percentageComplete is between 30 and 50, print "Slowly getting there".
// If percentageComplete is between 51 and 80, print "You can do it!".
// If percentageComplete is between 81 and 99, print "This is the last push!".
// If percentageComplete is 100, print "You're there. Well done!".
const percentageComplete = 100;
switch (true) {
    case percentageComplete < 30:
        console.log("Still a long way to go");
        break;
        case percentageComplete > 30 && percentageComplete < 50:
        console.log("Slowly getting there");
        break;
        case percentageComplete > 51 && percentageComplete < 80:
        console.log("You can do it!");
        break;
        case percentageComplete > 81 && percentageComplete < 99:
        console.log("This is the last push!");
        break;
        case percentageComplete === 100:
        console.log("You're there. Well done!");
        break;
        default:
} //You're there. Well done!


// 5. Differences
// When should you use a switch statement versus an if else statement. Comment your answer in your js file.
// Switch statement is a type of conditional statement that is used to evaluate an expression against multiple possible cases. It executes block of codes while if..else executes only a block of code. 

/*Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed
*/
