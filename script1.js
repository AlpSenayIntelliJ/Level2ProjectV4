var items = [];
var emptyItems = [];

function addKey() {
    if (items.indexOf("key") === -1) {
        items.push("key");
    }
}

function removeAllItems() {
    items = emptyItems;
}

// buttons
var keyButton = document.getElementById("takeKey");
var restartButton = document.getElementById("restartBtn");
var enterBasementButton = document.getElementById("enterBasement");
var unlockButton = document.getElementById("unlock");
var submitButton = document.getElementById('goButton')

var keySentence = document.getElementById("benchHeading");

function changeTextContent(sentence, text) {
    sentence.innerHTML = '<h1><span>' + text + '</span></h1>';
}

if (keyButton) keyButton.addEventListener('click', () => {
    changeTextContent(keySentence, "You picked up a key!");
    addKey();
});

if (restartButton) restartButton.addEventListener('click', () => {
    removeAllItems();
});

if (enterBasementButton) enterBasementButton.addEventListener('click', () => {
    var conditionMet = hasKey();
    if (!conditionMet) {
        unlockButton.disabled = true;
    }
});

if (unlockButton) unlockButton.addEventListener('click', () => {
    removeAllItems();
});

// Event listener for submit button click
if (submitButton) submitButton.addEventListener('click', checkUserGuess);

function hasKey() {
    return items.includes("key");
}

function checkUserGuess(event) {
    event.preventDefault(); // Prevents the form from submitting and reloading the page
    const userInput = document.getElementById('codeInput').value.trim(); // Gets the user input and trims whitespace
    const expectedCode = "Heaven's Night";

    if (userInput.toLowerCase() === expectedCode.toLowerCase()) {
        window.location.href = "win2.html"; // Redirects to the new HTML page upon correct code entry
    } else {
        // Handles incorrect input
        alert("Incorrect code. Try harder!");
    }
}

// Event listener for submit button click
if (submitButton) submitButton.addEventListener('click', checkUserGuess);