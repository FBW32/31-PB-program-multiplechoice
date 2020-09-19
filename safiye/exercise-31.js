//# Switch if...

//#### 1. Color Analyzer
let color = "yellow";
switch (color) {
  case "red":
    console.log("This color is red");
    break;
  case "blue":
    console.log("This color is blue");
    break;
  case "green":
    console.log("This color is green");
    break;
  case "yellow":
    console.log("This color is yellow");
    break;
  default:
    console.log("This color is not one of red,blue,yellow or green colors");
    break;
}

//#### 2. Grading
let grade = 10;
switch (true) {
  case grade >= 25:
    console.log("This is a hot day, dont forget your suncream");
    break;
  case grade >= 18 && grade < 25:
    console.log("Please pick your coat.");
    break;
  case grade >= 10 && grade < 18:
    console.log("It is a cold day, put your jacket on");
    break;
  default:
    console.log("Please enter a valid number of grade");
}

//#### 3. Fruits
let fruit = "orange";
switch (fruit) {
  case "banana":
    console.log("Bananas are yellow.");
    break;
  case "orange":
    console.log("Oranges are orange.");
    break;
  case "strawberry":
    console.log("Strawberries are pink.");
    break;
  case "apple":
    console.log("Apples are red.");
    break;
}

//#### 4. Percentage Complete
let percentageComplete = 40;
switch (true) {
  case percentageComplete < 30:
    console.log("Still a long way to go");
    break;
  case percentageComplete >= 30 && percentageComplete <= 50:
    console.log("Slowly getting there");
    break;
  case percentageComplete >= 51 && percentageComplete <= 80:
    console.log("You can do it!");
    break;
  case percentageComplete >= 81 && percentageComplete <= 99:
    console.log("This is the last push!");
    break;
  case percentageComplete < 30:
    console.log("You`re there. Well done!");
    break;
}

//#### 5. Differences
//An if-then-else statement can test expressions based on ranges of values or conditions, whereas a switch statement tests expressions based only on a single integer, enumerated value, or String object.

//i have passed true into switch as its key, to make it work with a comparison
