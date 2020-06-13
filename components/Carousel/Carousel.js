/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const images = ['./assets/carousel/mountains.jpeg',
                './assets/carousel/computer.jpeg',
                './assets/carousel/trees.jpeg',
                './assets/carousel/turntable.jpeg'];

const carouselCardMaker = image => {
  let newImage = document.createElement('img');
  newImage.src = image;

  return newImage;
};

const carouselContainer = document.querySelector('div.carousel-container');

const carousel = document.createElement('div');
carousel.classList.add('carousel');
carouselContainer.appendChild(carousel);

const leftButton = document.createElement('div');
leftButton.classList.add('left-button');
carousel.appendChild(leftButton);

images.forEach( image => {
  carousel.appendChild(carouselCardMaker(image));
});

const rightButton = document.createElement('div');
rightButton.classList.add('right-button');
carousel.appendChild(rightButton);





// const mountain = document.createElement('img');
// mountain.src = './assets/carousel/mountains.jpeg';
// carouselContainer.appendChild(mountain);