const timerHours = document.getElementById("timerHours");
const timerMinutes = document.getElementById("timerMinutes");
const timerSeconds = document.getElementById("timerSeconds");
const startTimerButton = document.getElementById("startTimer");
const stopTimerButton = document.getElementById("stopTimer");
const resetTimerButton = document.getElementById("resetTimer");

let timerInterval;
let startTime;
let stopTime;
let elapsedTime = 0;
let isRunning = false; 


startTimerButton.addEventListener("click", startTimer);
stopTimerButton.addEventListener("click", stopTimer);
resetTimerButton.addEventListener("click", resetTimer);

function startTimer() {
	if (!isRunning) {
		isRunning = true;
		startTime = Date.now() - elapsedTime;
		timerInterval = setInterval(updateTimer, 1000);
		updateButtons();
	}
}

function stopTimer() {
	if (isRunning) {
		isRunning = false;
		clearInterval(timerInterval);
		updateButtons();
	}
}
function resetTimer() {
	if (!isRunning) {
		elapsedTime = 0;
		updateDisplay();
	}
}

function updateTimer() {
	elapsedTime = Date.now() - startTime;
	updateDisplay();
}
function updateDisplay() {
	
	const totalSeconds = Math.floor(elapsedTime / 1000);
	const hours = Math.floor(totalSeconds / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;

	timerHours.textContent = padNumber(hours)
	timerMinutes.textContent = padNumber(minutes)
	timerSeconds.textContent = padNumber(seconds)
}
function padNumber(number) {
	return number.toString().padStart(2, "0");
}
function updateButtons() {

	startTimerButton.disabled = isRunning;
	stopTimerButton.disabled = !isRunning;
	resetTimerButton.disabled = isRunning;

}

updateDisplay();
updateButtons();