const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

// clock values in array
var timer = [0,0,0,0]; // pos 0 = min, pos 1 = , pos 2 = hundredth of a second, pos 3 = thousandth of a sec

// Run a standard minute/second/hundredths timer:
function runTimer(){
    let currentTime = timer[0] + ": " + timer[1] + ": " + timer[2];
    theTimer.innerHTML = currentTime;
    timer[3]++;

    // Math to display different values
    timer[0] = Math.floor((timer[3]/100)/60); //[3]/100 gives secs / 60 gives minutes timer
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60)); // subtract by value [0] which is minutes
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Match the text entered with the provided text on the page
function spellCheck() {
    let textEntered = testArea.value;
    console.log(textEntered);
}

// Start the timer:
function start() {
    let textEnteredLength = testArea.value.length;
    // start an interval
    if (textEnteredLength === 0) {
        setInterval(runTimer, 10); // runTimer function every thousandth of a second using setInterval
    }
    console.log(textEnteredLength);
}

// Reset everything
function reset() {
    console.log("reset button has been pressed");
}


// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);