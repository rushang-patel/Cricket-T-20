// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Enable the "Set Target" button
  var setTargetButton = document.getElementById("setTargetButton");
  setTargetButton.disabled = false;
});

// Flag to track if the target has been set
let targetSet = false;

// CPU score generated when pressing the "Set Target" button.
function setTarget() {
  var min = 100;
  var max = 250;
  var cpuScore = Math.floor(Math.random() * (max - min + 1)) + min;
  var cpuScoreElement = document.getElementById("cpuScore");
  cpuScoreElement.textContent = "CPU Score: " + cpuScore;

  // Disable the "Set Target" button after setting the target
  var setTargetButton = document.getElementById("setTargetButton");
  setTargetButton.disabled = true;
  setTargetButton.style.display = "none";

  // Update the targetSet flag
  targetSet = true;

  // Enable the "Play" button
  var playButton = document.getElementById("playButton");
  playButton.disabled = false;
}

// Initialize game variables
let playerRuns = 0;
let wickets = 0;
let overs = 0;
let balls = 0;
let remainingRuns = 0;
const maxWickets = 11;
const maxOvers = 20;
let rolledNumber = 0;
let rolledNumberList = [];

// Function to handle the play button click event
function play() {
  // Check if the target has been set
  if (!targetSet) {
    return; // Exit the function if the target is not set
  }

  // // Generate a random number between 0 and 9
  // var randomNumber = Math.random();
  // var randomRun;

  // if (randomNumber < 0.1) {
  //   randomRun = 6;
  // } else if (randomNumber < 0.35) {
  //   randomRun = 4;
  // } else if (randomNumber < 0.4) {
  //   randomRun = 3;
  // } else if (randomNumber < 0.65) {
  //   randomRun = 2;
  // } else if (randomNumber < 0.95) {
  //   randomRun = 1;
  // } else if (randomNumber < 0.96) {
  //   randomRun = 0;
  // } else {
  //   randomRun = Math.floor(Math.random() * 6) + 1;
  // }

  // Generate a random number between 0 and 9
  var randomRun = Math.floor(Math.random() * 10);
  var displayNumber = randomRun;
  if (randomRun === 0) {
    displayNumber = "W";
  } else if (
    randomRun === 5 ||
    randomRun === 7 ||
    randomRun === 8 ||
    randomRun === 9
  ) {
    displayNumber = 0;
  }

  // Add comment based on the rolled number
  var comment = "";
  if (randomRun === 6) {
    comment = "That's a mammoth hit!!!";
  } else if (randomRun === 4) {
    comment = "Absolutely smashed to the boundary ropes!!";
  } else if (randomRun === 1) {
    comment = "Hit for a single!";
  } else if (randomRun === 2) {
    comment = "Hit hard, but won't reach the boundary";
  } else if (randomRun === 3) {
    comment = "This is sublime running between the wickets!";
  } else if (randomRun === 0) {
    comment = "That's out!";
  } else if (randomRun === 5) {
    comment = "What a ball!";
  } else if (randomRun === 7) {
    comment = "Nice line and length!";
  } else if (randomRun === 8) {
    comment = "Amazing swinging yorker!";
  } else if (randomRun === 9) {
    comment = "The batsman had no clue!";
  }

  // Check the randomRun value and update the playerRuns or wickets tally.
  if ((randomRun >= 1 && randomRun <= 4) || randomRun === 6) {
    // Add to playerRuns tally
    playerRuns += randomRun;
  } else if (randomRun === 0) {
    // Add to wickets tally
    wickets++;
  }

  // Add a ball to the tally
  balls++;

  // Check if the ball count reaches 6 to increment the overs count
  if (balls === 6) {
    balls = 0;
    overs++;
    var oversRemainingElement = document.getElementById("oversRemaining");
    oversRemainingElement.textContent =
      "Overs Remaining: " + (maxOvers - overs);
  }

  // Calculate remaining runs
  var cpuScoreElement = document.getElementById("cpuScore");
  var cpuScore = parseInt(cpuScoreElement.textContent.split(":")[1].trim());
  remainingRuns = cpuScore - playerRuns;

  // Display the updated tallies
  var playerRunsElement = document.getElementById("playerRuns");
  playerRunsElement.textContent = "Player Runs: " + playerRuns;

  var wicketsElement = document.getElementById("wickets");
  wicketsElement.textContent = "Wickets: " + wickets + " / " + maxWickets;

  var oversElement = document.getElementById("overs");
  oversElement.textContent = "Overs: " + overs + " / " + maxOvers;

  var ballsElement = document.getElementById("balls");
  ballsElement.textContent = "Balls: " + balls;

  var remainingRunsElement = document.getElementById("remainingRuns");
  remainingRunsElement.textContent = "Remaining Runs: " + remainingRuns;

  var wicketsElement = document.getElementById("wicketsRemaining");
  wicketsElement.textContent = "Wickets Remaining: " + (maxWickets - wickets);

  var rolledNumberElement = document.getElementById("rolledNumber");
  rolledNumberElement.innerHTML =
    "<span class='comment'>" +
    comment +
    "</span><br><span class='display-number'>" +
    displayNumber +
    "</span>";

  // Add rolled number to the rolledNumberList array
  rolledNumberList.push(displayNumber);

  var rolledNumberTallyElement = document.getElementById("rolledNumberTally");
  rolledNumberTallyElement.textContent = rolledNumberList.join("");

 // Add the character "." after every 6 balls
var ballsCount = rolledNumberList.length;
if (ballsCount > 0 && ballsCount % 7 === 0) {
  rolledNumberList.push(".");
}

// Update the rolledNumberTally
rolledNumberTallyElement.textContent = rolledNumberList.join("");

// auto scroll to current rolled number
  var rolledNumberTallyElement = document.getElementById("rolledNumberTally");
  rolledNumberTallyElement.scrollLeft = rolledNumberTallyElement.scrollWidth;

  // Check win, lose, and tie conditions
  // Player wins
  if (playerRuns > cpuScore) {
    comment = "Congratulations! You won!";
    disableGameButtons();

    // Player loses
  } else if (
    (overs === maxOvers || wickets === maxWickets) &&
    playerRuns < cpuScore
  ) {
    comment = "Game over! You lost!";
    disableGameButtons();
  
    // Tie
  } else if (
    overs === maxOvers &&
    playerRuns === cpuScore &&
    wickets < maxWickets
  ) {
    comment = "The game is tied!";
    disableGameButtons();
  }
  
  var rolledNumberElement = document.getElementById("rolledNumber");
  rolledNumberElement.innerHTML =
    "<span class='comment'>" +
    comment +
    "</span><br><span class='display-number'>" +
    displayNumber +
    "</span>";
}

// Function to disable game buttons
function disableGameButtons() {
  var playButton = document.getElementById("playButton");
  playButton.disabled = true;
  var setTargetButton = document.getElementById("setTargetButton");
  setTargetButton.disabled = true;
  var restartButton = document.getElementById("restartButton");
  restartButton.style.display = "block";
}

// Function to restart the game
function restart() {
  // Reset game variables
  playerRuns = 0;
  wickets = 0;
  overs = 0;
  balls = 0;
  remainingRuns = 0;
  rolledNumber = 0;

  // Reset UI elements
  var playerRunsElement = document.getElementById("playerRuns");
  playerRunsElement.textContent = "Player Runs: 0";
  var wicketsElement = document.getElementById("wickets");
  wicketsElement.textContent = "Wickets: 0 / " + maxWickets;
  var oversElement = document.getElementById("overs");
  oversElement.textContent = "Overs: 0 / " + maxOvers;
  var ballsElement = document.getElementById("balls");
  ballsElement.textContent = "Balls: 0";
  var remainingRunsElement = document.getElementById("remainingRuns");
  remainingRunsElement.textContent = "Remaining Runs: 0";
  var rolledNumberElement = document.getElementById("rolledNumber");
  rolledNumberElement.innerHTML = "";

  // Reset CPU score
  var cpuScoreElement = document.getElementById("cpuScore");
  cpuScoreElement.textContent = "CPU Score: ";

  // Enable the "Set Target" button
  var setTargetButton = document.getElementById("setTargetButton");
  setTargetButton.disabled = false;
  setTargetButton.style.display = "block";

  // Hide the restart button
  var restartButton = document.getElementById("restartButton");
  restartButton.style.display = "none";

  // Reset the targetSet flag
  targetSet = false;

  // Clear the rolledNumberList
  rolledNumberList = [];

  // Clear the rolledNumberTally
  var rolledNumberTallyElement = document.getElementById("rolledNumberTally");
  rolledNumberTallyElement.textContent = " ";
}

//------EVENT LISTNERS
// Play button click event handler √
// ball added at click √
// Make play button change to next ball after the first click. √

//------FUNCTIONS
// Update scoreboard function √
// Function to display the score for each turn √
// Function to determine the winner √
// New over after 6 balls √
// Add commentary for runs scored. √
// End game at either 20 overs or 11 wickets. √
// Check if the game is over. √
// Add runs, overs, and wickets remaining to scoreboard. √
// Display the score for each turn. √
// Add CSS - match to wireframe.√

// Add a condition so there's a higher chance of getting 1,2,3. Medium chance of getting 0, 5, 7, 8, 9. A very low chance of getting 4 and 6.
// Add a individual run tally for each of the 11 players.
// add animations
