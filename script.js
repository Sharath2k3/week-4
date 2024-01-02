const car = document.getElementById('car');
const locations = document.querySelectorAll('.location');
const speed = 0.02;
let carPosition = { x: 50, y: 50 }; // Initial position of the car

function update() {
  requestAnimationFrame(update);

  document.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'w':
        carPosition.y -= speed;
        break;
      case 'a':
        carPosition.x -= speed;
        break;
      case 's':
        carPosition.y += speed;
        break;
      case 'd':
        carPosition.x += speed;
        break;
    }
  });

  updateCarPosition();
  checkArrival();
}

function updateCarPosition() {
  car.style.transform = `translate(${carPosition.x}%, ${carPosition.y}%)`;
}

function checkArrival() {
  for (const location of locations) {
    const locationRect = location.getBoundingClientRect();
    const carRect = car.getBoundingClientRect();
    if (
      carRect.left < locationRect.right &&
      carRect.right > locationRect.left &&
      carRect.top < locationRect.bottom &&
      carRect.bottom > locationRect.top
    ) {
      window.location.href = 'mainpage.html';
    }
  }
}

function locationClicked() {
  alert('Location Clicked!');
}

update(); // Start the animation loop
