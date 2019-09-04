// win and loss variable (classified as ID's on the main page)
var wins = 0;
var loss = 0;

$('#wins').text(wins);
$('#losses').text(loss);

// total score and score to get variables (classified as ID's in the H2 element on the main page)
var currentScore = 0;
var targetNumber;


targetNumber = Math.floor(Math.random() * 102) + 19;
$('#targetNumber').text(targetNumber);

// create variables for each stone being clicked (classified as ID's on the main page)
var gem1;
var gem2;
var gem3;
var gem4;

gem1 = Math.floor(Math.random() * 12) + 1;
$('#gem1').append("crystalValue", gem1);
console.log(gem1);

gem2 = Math.floor(Math.random() * 12) + 1;
$('#gem2').append("crystalValue", gem2);
console.log(gem2);

gem3 = Math.floor(Math.random() * 12) + 1;
$('#gem3').append("crystalValue", gem3);
console.log(gem3);

gem4 = Math.floor(Math.random() * 12) + 1;
$('#gem4').append("crystalValue", gem4);
console.log(gem4);

// function for when an image gets clicked
$(".GemPhoto4").on("click", function() {
    var gemValue = ($(this).attr("crystalValue"));
    // gemValue = parseInt(gemValue)

    currentScore = currentScore + gemValue;

    $('#currentScore').text(currentScore);
    console.log(currentScore);

});
