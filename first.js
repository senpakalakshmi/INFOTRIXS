// You can add your JavaScript code for handling random quote generation here

// Example:
const quotes = [
    { text: "Example quote 1.", author: "Author 1" },
    { text: "Example quote 2.", author: "Author 2" },
    // Add more quotes as needed
];

document.getElementById('randomButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    
    document.querySelector('.quote p').textContent = `"${randomQuote.text}"`;
    document.querySelector('.author').textContent = `— ${randomQuote.author}`;
});
