// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    let headerParent = document.createElement('div');
    headerParent.classList.add('header');

    let date = document.createElement('span');
    date.classList.add('date');
    date.textContent = 'March 28, 2019';
    headerParent.appendChild(date);

    let title = document.createElement('h1');
    title.textContent = 'Lambda Times';
    headerParent.appendChild(title);

    let temperature = document.createElement('span');
    temperature.classList.add('temp');
    temperature.textContent = '98°';
    headerParent.appendChild(temperature);

    return headerParent;
}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());

