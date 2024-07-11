const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    const overlay = card.querySelector('.overlay');
    overlay.style.display = 'flex';
  });

  card.addEventListener('mouseout', () => {
    const overlay = card.querySelector('.overlay');
    overlay.style.display = 'none';
  });
});


///
// Get the main image and the thumbnail images
const mainImg = document.getElementById('mainImg');
const thumbImgs = document.querySelectorAll('.thumb-img');

// Get the previous and next buttons
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Keep track of the current index
let currentIndex = 0;

// Function to update the main image
function updateMainImage(index) {
  mainImg.src = thumbImgs[index].src;
}

// Add click event listeners to the thumbnail images
thumbImgs.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    updateMainImage(currentIndex);
  });
});

// Add click event listeners to the previous and next buttons
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + thumbImgs.length) % thumbImgs.length;
  updateMainImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % thumbImgs.length;
  updateMainImage(currentIndex);
});



//-------------------------sum
const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const quantityDisplay = document.getElementById('sum');

let quantity = 1;

decrementButton.addEventListener('click', () => {
  if (quantity > 1) {
    quantity--;
    quantityDisplay.textContent = quantity;
  }
});

incrementButton.addEventListener('click', () => {
  quantity++;
  quantityDisplay.textContent = quantity;
});

//-------------------------size
const sizeOptions = document.querySelectorAll('.size-option');

sizeOptions.forEach(option => {
  option.addEventListener('click', () => {
    // Remove the 'active' class from all size options
    sizeOptions.forEach(opt => opt.classList.remove('active'));

    // Add the 'active' class to the clicked size option
    option.classList.add('active');
  });
});


//---------------------------------------main.js-----------------
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

let currentIndey = 0;
let intervalId;

function updateCarousel(direction) {
  // Remove the active class from the current item and indicator
  carouselItems[currentIndey].classList.remove('active');
  carouselIndicators[currentIndey].classList.remove('active');

  // Update the current index based on the direction
  if (direction === 'right') {
      currentIndey = (currentIndey + 1) % carouselItems.length;
  } else {
      currentIndey = (currentIndey - 1 + carouselItems.length) % carouselItems.length;
  }

  // Add the active class to the new active item and indicator
  carouselItems[currentIndey].classList.add('active');
  carouselIndicators[currentIndey].classList.add('active');
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

