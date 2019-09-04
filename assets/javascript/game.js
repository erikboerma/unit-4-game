// win and loss variable (classified as ID's on the main page)
var wins = 0;
var loss = 0;

$('#wins').text(wins);
$('#losses').text(loss);

// total score and score to get variables (classified as ID's in the H2 element on the main page)
var currentScore = 0;
var targetNumber;

$("#currentScore").text(currentScore);

targetNumber = Math.floor(Math.random() * 102) + 19;
$('#targetNumber').text(targetNumber);



// create variables for each stone being clicked (classified as ID's on the main page)
var gem1;
var gem2;
var gem3;
var gem4;
