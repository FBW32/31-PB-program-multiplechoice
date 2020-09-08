//1
function color(color) {
  switch (color) {
    case "red":
      console.log("red color");
      break;
    case "blue":
      console.log("blue color");
      break;
    case "green":
      console.log("green color");
      break;
    case "yellow":
      console.log("yellow color");
      break;
    default:
      console.log("all coolors is beautiful");
  }
}
color();
color("blue");

//2

function grading(grading) {
  switch (grading) {
    case "A":
      console.log("supe!");
      break;
    case "B":
      console.log("good job");
      break;
    case "C":
      console.log("work more");
      break;
    case "D":
      console.log("try more, work hard");
      break;
    default:
      console.log("you are a good student.");
  }
}
grading();
grading("D");

//3

function fruit(fruit) {
  switch (fruit) {
    case "banana":
      console.log("a yellow fruit");
      break;
    case "strawberry":
      console.log("lecker!");
      break;
    case "orange":
      console.log("do you want vitamin c?");
      break;
    case "apple":
      console.log("a apple a day, keep a doctor away!");
      break;
    default:
      console.log("enjoy it.");
  }
}
fruit("apple");
fruit();

//4
function percentageComplete(percent) {
  switch (true) {
    case percent < 30:
      console.log("Still a long way to go.");
      break;
    case percent >= 30 && percent <= 50:
      console.log("Slowly getting there.");
      break;
    case percent >= 51 && percent <= 80:
      console.log("You can do it!.");
      break;
    case percent >= 81 && percent <= 99:
      console.log("This is the last push!.");
      break;
    case percent === 100:
      console.log("You're there. Well done!.");
      break;
    default:
      console.log("None of the above");
  }
}
percentageComplete(30);
percentageComplete();
percentageComplete(44);
percentageComplete(100);

//5
// Switch statements are a more efficient way to code when testing multiple conditions.
// Use the switch statement to execute one of many code blocks based on a variable or expression's value. The switch expression is evaluated once. The comparison value will match either a statement value or trigger a default code block.
