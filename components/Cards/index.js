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

const container = document.querySelector('.carousel-container');

function carouselcreator() {
    const carousel = document.createElement('div');
    carousel.classList.add('carousel');
    const left = document.createElement('div');
    left.classList.add('left-button');
    left.textContent = "<";
    carousel.appendChild(left);
    const mountains = document.createElement('img');
    const computer = document.createElement('img');
    const trees = document.createElement('img');
    const turntable = document.createElement('img');
    mountains.src = './assets/carousel/mountains.jpeg';
    computer.src = './assets/carousel/computer.jpeg';
    trees.src = './assets/carousel/trees.jpeg';
    turntable.src = './assets/carousel/turntable.jpeg';
    carousel.appendChild(mountains);
    carousel.appendChild(computer);
    carousel.appendChild(trees);
    carousel.appendChild(turntable);
    const right = document.createElement('div');
    right.classList.add('right-button');
    right.textContent = ">";
    carousel.appendChild(right);
    let index = 0;
    mountains.style.display = "block";
    function reset() {
        computer.style.display = "none";
        trees.style.display = "none";
        turntable.style.display = "none";
        mountains.style.display = "none";
    }
    right.addEventListener("click", () => {
        index++;
        console.log(index);
        mountains.style.display = "none";
        if (index === 0) {
            computer.style.display = "none";
            trees.style.display = "none";
            turntable.style.display = "none";
            mountains.style.display = "block";
        } else if (index === 1) {
            computer.style.display = "block";
            trees.style.display = "none";
            turntable.style.display = "none";
            mountain.style.display = "none";
        } else if (index === 2) {
            computer.style.display = "none";
            trees.style.display = "block";
            turntable.style.display = "none";
            mountain.style.display = "none";
        } else if (index === 3) {
            computer.style.display = "none";
            trees.style.display = "none";
            turntable.style.display = "block";
            mountain.style.display = "none";
        } else if (index > 3) {
            index = 0;
        }
        computer.style.display = "none";
        trees.style.display = "none";
        turntable.style.display = "none";
        mountains.style.display = "block";
    })
    left.addEventListener("click", () => {
        index--;
        console.log(index);
        if (index === 0) {
            reset();
            computer.style.display = "none";
            trees.style.display = "none";
            turntable.style.display = "none";
            mountains.style.display = "block";
        } else if (index === 1) {
            reset();
            computer.style.display = "block";
            trees.style.display = "none";
            turntable.style.display = "none";
            mountain.style.display = "none";
        } else if (index === 2) {
            reset();
            computer.style.display = "none";
            trees.style.display = "block";
            turntable.style.display = "none";
            mountain.style.display = "none";
        } else if (index === 3) {
            reset();
            computer.style.display = "none";
            trees.style.display = "none";
            turntable.style.display = "block";
            mountain.style.display = "none";
        } else if (index < 0) {
            reset();
            index = 3;
            computer.style.display = "none";
            trees.style.display = "none";
            turntable.style.display = "block";
            mountain.style.display = "none";
        }
    })
    
    return carousel;
}

container.appendChild(carouselcreator());