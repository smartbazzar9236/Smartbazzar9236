function getRandomNumber() {
  return Math.floor(Math.random() * 10); // 0-9
}

function getBigSmall(number) {
  return number >= 5 ? "Big" : "Small";
}

function getColor(number) {
  if (number % 2 === 0) return "Red";
  else if (number % 3 === 0) return "Violet";
  else return "Green";
}

function updatePrediction() {
  const number = getRandomNumber();
  const bigSmall = getBigSmall(number);
  const color = getColor(number);

  document.getElementById("number").textContent = number;
  document.getElementById("bigsmall").textContent = bigSmall;
  document.getElementById("color").textContent = color;

  let countdown = 30;
  const timer = setInterval(() => {
    countdown--;
    document.getElementById("timer").textContent = countdown + "s";
    if (countdown <= 0) {
      clearInterval(timer);
      updatePrediction(); // Refresh prediction every 30s
    }
  }, 1000);
}

updatePrediction();
