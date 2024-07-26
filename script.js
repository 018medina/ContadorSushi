let sushiCounter = localStorage.getItem("sushiCount")
  ? parseInt(localStorage.getItem("sushiCount"))
  : 0;
const sushiImage = document.getElementById("sushiImage");
const sushiCounterDisplay = document.getElementById("sushiCounter");
sushiCounterDisplay.textContent = sushiCounter;
updateSushiImage();

function incrementCounter() {
  sushiCounter++;
  sushiCounterDisplay.textContent = sushiCounter;
  updateSushiImage();
}

function decrementCounter() {
  if (sushiCounter !== 0) {
    sushiCounter--;
    sushiCounterDisplay.textContent = sushiCounter;
    updateSushiImage();
  }
}

function updateSushiImage() {
  if (sushiCounter < 10) {
    sushiImage.src = "sushi1.png";
  } else if (sushiCounter < 20) {
    sushiImage.src = "sushi2.png";
  } else if (sushiCounter < 30) {
    sushiImage.src = "sushi3.png";
  } else {
    sushiImage.src = "sushi4.png";
  }

  localStorage.setItem("sushiCount", sushiCounter);
}

function zeroCounter() {
  sushiCounter = 0;
  sushiCounterDisplay.textContent = sushiCounter;
  updateSushiImage();
}
