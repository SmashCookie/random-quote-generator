const btn = document.querySelector("button");
btn.addEventListener("click", printQuote);

//Prints the quote & author to the screen everytime the user clicks the button
function printQuote() {
    // Gets a quote from the getRandomQuote function
    const quote = getRandomQuote();
    const output = document.querySelectorAll(".quote");
    output[0].textContent = quote.quote;
    output[1].textContent = "-" + quote.author;
    changeBackgroundColor();
}

function getRandomQuote() {
    const quotes = [
        {quote: "It is better to be feared than loved, if you cannot do both.",author: "Nicollo Machiavelli"},
        {quote: "But man is not made for defeat. A man can be destroyed but not defeated.",author: "Ernest Hemingway"},
        {quote: "We know what we are, but know not what we may be.",author: "William Shakespeare"},
        {quote: "No legacy is so rich as honesty",author: "William Shakespeare"}
    ];
    // Generates a random number based on how many objects are in the quotes array
    const i = Math.floor(Math.random() * quotes.length);
    return quotes[i];
}

// Changes the style of the body to a random RGB color every time a user clicks the button
function changeBackgroundColor() {
    // * 155 + 50 shows mostly colors where the black text is easly seen.
    const R = Math.floor(Math.random() * 155) + 50;
    const G = Math.floor(Math.random() * 155) + 50;
    const B = Math.floor(Math.random() * 155) + 50;
    document.body.style.backgroundColor = "rgb(" + R + "," + G + "," + B + ")";
}

//Prints the quote once when the user loads the page
printQuote();
