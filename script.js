const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const newQuoteBtn = document.querySelector("#new_quote");

const api_url = " https://api.quotable.io/random";

async function getQuote(api_url) {
  const response = await fetch(api_url);
  var data = await response.json();
  console.log(data);

  quote.innerHTML = ` "${data.content}" `;
  author.innerHTML = `-- ${data.author}`;
}

getQuote(api_url);
