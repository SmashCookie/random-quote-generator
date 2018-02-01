const btn = document.querySelector("button");
btn.addEventListener("click", printQuote);


function printQuote() {
    const quote = getRandomQuote();
    const output = document.querySelectorAll(".quote");
    output[0].textContent = quote.quote;
    output[1].textContent = quote.author;
}

function getRandomQuote() {
    const quotes = [
        {
            quote: "It is better to be feared than loved, if you cannot do both.",
            author: "Nicollo Machiavelli"
        },
        {
            quote: "",
            author: ""
        }
    ];
    const quoteNumber = Math.floor(Math.random() * quotes.length);
    return quotes[quoteNumber];
}
