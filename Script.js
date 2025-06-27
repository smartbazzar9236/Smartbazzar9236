function predict() {
  const number = Math.floor(Math.random() * 10);
  const bigSmall = number >= 5 ? "Big" : "Small";
  const color = number % 2 === 0 ? "Green" : "Red";
  return { number, bigSmall, color };
}

function updatePrediction() {
  const { number, bigSmall, color } = predict();
  document.getElementById("number").innerText = number;
  document.getElementById("size").innerText = bigSmall;
  document.getElementById("color").innerText = color;
}

updatePrediction(); // first update
setInterval(updatePrediction, 30000); // every 30 seconds
