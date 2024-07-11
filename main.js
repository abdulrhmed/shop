// Open and close header
function adjustTextSize() {
  let openname = document.getElementById("open-close");
  let nonename = document.querySelector(".none");

  const screenWidth = window.innerWidth;
  if (screenWidth <= 990) {
    nonename.style.display = "none";
    let closemood = false;
    openname.addEventListener("click", () => {
      if (!closemood) {
        nonename.style.display = "contents";
      } else {
        nonename.style.display = "none";
      }
      closemood = !closemood;
    });
  } else {
    nonename.style.display = "";
  }
}
window.addEventListener("resize", adjustTextSize);
adjustTextSize();



// strat banner left and right
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselIndicators = document.querySelectorAll('.carousel-indicators li');
const rightButton = document.querySelector('.right');
const leftButton = document.querySelector('.left');

let currentIndex = 0;
let intervalId;

function updateCarousel(direction) {
  // Remove the active class from the current item and indicator
  carouselItems[currentIndex].classList.remove('active');
  carouselIndicators[currentIndex].classList.remove('active');

  // Update the current index based on the direction
  if (direction === 'right') {
    currentIndex = (currentIndex + 1) % carouselItems.length;
  } else {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  }

  // Add the active class to the new active item and indicator
  carouselItems[currentIndex].classList.add('active');
  carouselIndicators[currentIndex].classList.add('active');
}

function startAutoScroll() {
  intervalId = setInterval(() => {
    updateCarousel('right');
  }, 8000); // Change this value to adjust the interval
}

function stopAutoScroll() {
  clearInterval(intervalId);
}

rightButton.addEventListener('click', () => {
  stopAutoScroll();
  updateCarousel('right');
  startAutoScroll();
});

leftButton.addEventListener('click', () => {
  stopAutoScroll();
  updateCarousel('left');
  startAutoScroll();
});

carouselIndicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    // Remove the active class from all items and indicators
    carouselItems.forEach(item => item.classList.remove('active'));
    carouselIndicators.forEach(ind => ind.classList.remove('active'));

    // Add the active class to the clicked indicator and its corresponding item
    indicator.classList.add('active');
    carouselItems[index].classList.add('active');
    currentIndex = index;

    // Stop the auto-scroll and start it again
    stopAutoScroll();
    startAutoScroll();
  });
});

// Start the auto-scroll when the page loads
startAutoScroll();
//---------------
function showDropdown() {
  var dropdown = document.getElementById("dropdown");
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}

