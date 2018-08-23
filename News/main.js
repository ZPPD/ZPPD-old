// Page Elements

const engadget = document.getElementById('engadget');
const recode = document.getElementById('recode');
const nextWeb = document.getElementById('nextWeb');
const main = document.getElementsByTagName('main')[0];

// News API Data
//get the urls from the newsapi.org news sources
const apiKey = '2860a50f97ec48408dfdd55d159a9e2c';
const engadgetUrl = 'https://newsapi.org/v2/top-headlines?sources=engadget&apiKey=2860a50f97ec48408dfdd55d159a9e2c';
const recodeUrl = 'https://newsapi.org/v2/top-headlines?sources=recode&apiKey=2860a50f97ec48408dfdd55d159a9e2c';
const nextWebUrl = 'https://newsapi.org/v2/top-headlines?sources=the-next-web&apiKey=2860a50f97ec48408dfdd55d159a9e2c';

// Request News Function
async function getNews(url){
  let response = await fetch(url);
  let jsonResponse = await response.json();
  console.log(jsonResponse);
  //saving the first 5 articles from the array
  let articlesArray = jsonResponse.articles.slice(0,5);
  console.log(articlesArray);
  return articlesArray;
}
// Render Function
//This function iterates over articlesArray to create the HTML that will be appended to index.html so that the information we receive from NewsAPI.org can be displayed to our users.
function renderNews(articles) {
  articles.map((article, index) => {
    let articleRow =
      '<div class="articlerow">' +
      ' <div class="article">' +
      '   <h2 class="title">' + article.title+ '</h2>' +
      '   <h3>By ' + article.author + '</h3>' +
      '   <p> ' + article.description + '</p>' +
      '   <a href="' + article.url + '" target="_blank" class="readmore"><p>Read More</p></a>' +
      ' </div>' +
      ' <div class="share">' +
      '   <img class="storyimage" src="' + article.urlToImage + '" />' +
      '   <a href="https://twitter.com/"><button type="button" class="tweet" id="tweet ' + index + '">' +
      '   <i class="fa fa-twitter" aria-hidden="true"></i>Tweet This</button> </a>' +
      ' </div>' +
      '</div>';
//if i want MY tweeter to open after pressing the button, before the <button> should include <a href="tweeter.com/<your name>" target=""_blank> and close it after the </button></a>
    main.innerHTML += articleRow;
  });
  return articles;
}

// Post Tweet Function
/*retrieves the "Tweet This" buttons from the HTML and saves them in an array-like object;
    loops through the array-like object to add event listeners to each of the tweet buttons;
    changes "Tweet This" to say "Tweeted"; posts the tweet
 */
function sendTweets(newsObjects) {
  let tweetButtons = document.getElementsByClassName('tweet');
  for (let i = 0; i < tweetButtons.length; i++) {
    tweetButtons[i].addEventListener('click', function() {
      // Call Post Status function here
      Twitter.postStatus(newsObjects[i].url)
      tweetButtons[i].innerHTML = "Tweeted";
    }, false);
  }
}

// Button Event Listeners

engadget.addEventListener('click', function() {
  main.innerHTML = ' ';
  // Call getNews() here
  getNews(engadgetUrl).then(articleArray => renderNews(articleArray)).then(articles => sendTweets(articles));
}, false);

recode.addEventListener('click', function() {
  main.innerHTML = ' ';
  // Call getNews() here
  getNews(recodeUrl).then(articleArray => renderNews(articleArray)).then(articles => sendTweets(articles));
}, false);

nextWeb.addEventListener('click', function() {
  main.innerHTML = ' ';
  // Call getNews() here
  getNews(nextWebUrl).then(articleArray => renderNews(articleArray)).then(articles => sendTweets(articles));
}, false);
