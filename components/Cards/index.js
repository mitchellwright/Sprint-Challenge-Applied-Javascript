// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('div.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then( response => {
        const articleTopics = Object.keys(response.data.articles);
        articleTopics.forEach( topic => {
            response.data.articles[topic].forEach( article => {
                cardsContainer.appendChild(cardMaker(article));
            });
        });
    })
    .catch( error => {
        console.error(error);
    });


const cardMaker = cardData => {
    let cardParent = document.createElement('div');
    cardParent.classList.add('card');

    let headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = cardData.headline;
    cardParent.appendChild(headline);

    let authorParent = document.createElement('div');
    authorParent.classList.add('author');
    cardParent.appendChild(authorParent);

    let imageContainer = document.createElement('img');
    imageContainer.src = cardData.authorPhoto;
    authorParent.appendChild(imageContainer);

    let authorName = document.createElement('span');
    authorName.textContent = `By ${cardData.authorName}`;
    authorParent.appendChild(authorName);

    return cardParent;
};