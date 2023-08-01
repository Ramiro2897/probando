const roulette = document.querySelector('.roulette');
const spinButton = document.getElementById('spinButton');
let spinning = false;
let rotationInterval;

spinButton.addEventListener('click', () => {
  if (!spinning) {
    spinning = true;
    const randomDegrees = 3600 + Math.floor(Math.random() * 3600); // Ajusta la cantidad de grados para ajustar la rotación
    let currentRotation = 0;

    function rotate() {
      if (currentRotation >= randomDegrees) {
        clearInterval(rotationInterval);

        const finalRotation = currentRotation % 360;
        roulette.style.transition = 'transform 1s ease-in-out';
        roulette.style.transform = `rotate(${finalRotation}deg)`;

        setTimeout(() => {
          roulette.style.transition = 'none';
          spinning = false;
        }, 1000);
      } else {
        currentRotation += 10; // Ajusta la velocidad de rotación aquí
        roulette.style.transform = `rotate(${currentRotation}deg)`;
      }
    }

    roulette.style.transition = 'none';
    rotationInterval = setInterval(rotate, 10);
  }
});