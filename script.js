// Page 1: Start Button
document.getElementById('startButton').addEventListener('click', () => {
  document.getElementById('page1').classList.add('hidden');
  document.getElementById('page2').classList.remove('hidden');
});

// Page 2: Surprise Button
document.getElementById('surpriseButton').addEventListener('click', () => {
  document.getElementById('page2').classList.add('hidden');
  document.getElementById('page3').classList.remove('hidden');
});

// Page 3: Valentine Button
document.getElementById('valentineButton').addEventListener('click', () => {
  document.getElementById('options').classList.remove('hidden');
});

// No Button Fun
document.getElementById('noButton').addEventListener('click', () => {
  const yesButton = document.getElementById('yesButton');
  const newYesButton = yesButton.cloneNode(true);
  document.getElementById('options').appendChild(newYesButton);
});

// Yes Button
document.getElementById('yesButton').addEventListener('click', () => {
  alert('Yay! You made me the happiest person! ❤️');
});