// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response) => {
    const bootstrap = response.data.articles.bootstrap;
    const javascript = response.data.articles.javascript;
    const jquery = response.data.articles.jquery;
    const node = response.data.articles.node;
    const technology = response.data.articles.technology;
    bootstrap.forEach((item) => {
        const newCard = createCard(item);
        cardscontainer.appendChild(newCard);
    })
    javascript.forEach((item) => {
        const newCard = createCard(item);
        cardscontainer.appendChild(newCard);
    })
    jquery.forEach((item) => {
        const newCard = createCard(item);
        cardscontainer.appendChild(newCard);
    })
    node.forEach((item) => {
        const newCard = createCard(item);
        cardscontainer.appendChild(newCard);
    })
    technology.forEach((item) => {
        const newCard = createCard(item);
        cardscontainer.appendChild(newCard);
    })
})

const cardscontainer = document.querySelector('.cards-container');

function createCard(data) {
    const card = document.createElement('div');
    card.classList.add('card');
    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = data.headline;
    card.appendChild(headline);
    const author = document.createElement('div');
    author.classList.add('author');
    card.appendChild(author);
    const imgContainer = document.createElement('img-container');
    imgContainer.classList.add('img-container');
    author.appendChild(imgContainer);
    const myImg = document.createElement('img');
    myImg.src = data.authorPhoto;
    imgContainer.appendChild(myImg);
    const authorsName = document.createElement('span');
    authorsName.textContent = `By ${data.authorName}`;
    author.appendChild(authorsName);
    return card;
}