let [hours, minutes, seconds] = [0, 0, 0];
let display = document.querySelector(".timer");
let interval = null;
let laps = document.getElementById("laps");

function updateDisplay() {
  let h = String(hours).padStart(2, "0");
  let m = String(minutes).padStart(2, "0");
  let s = String(seconds).padStart(2, "0");
  display.textContent = `${h}:${m}:${s}`;
}

function timerStart() {
  interval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

document.getElementById("start").onclick = () => {
  if (!interval) timerStart();
};

document.getElementById("pause").onclick = () => {
  clearInterval(interval);
  interval = null;
};

document.getElementById("reset").onclick = () => {
  clearInterval(interval);
  interval = null;
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  laps.innerHTML = "";
};

document.getElementById("lap").onclick = () => {
  let lapTime = display.textContent;
  let li = document.createElement("li");
  li.textContent = `Lap: ${lapTime}`;
  laps.appendChild(li);
};

