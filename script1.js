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

var keySentence = document.getElementById("benchHeading");

function changeTextContent(sentence, text) {
    sentence.innerHTML = '<h1><span>' + text + '</span></h1>';
}

keyButton.addEventListener('click', () => {
    changeTextContent(keySentence, "You picked up a key!");
    addKey();
});

restartButton.addEventListener('click', () => {
    removeAllItems();
});

enterBasementButton.addEventListener('click', () => {
    var conditionMet = hasKey();
    if (!conditionMet) {
        unlockButton.disabled = true;
    }
});

unlockButton.addEventListener('click', () => {
    removeAllItems();
});

// Event listener for submit button click
submitButton.addEventListener('click', checkUserGuess);

function hasKey() {
    return items.includes("key");
}

function checkUserGuess(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page
    const userInput = document.getElementById('codeInput').value.trim(); // Get user input and trim whitespace
    const expectedCode = "Heaven's Night";

    if (userInput.toLowerCase() === expectedCode.toLowerCase()) {
        window.location.href = "win2.html"; // Redirect to the new HTML page upon correct code entry
    } else {
        // Handle incorrect code input, show a message or perform any other action
        // For example, display an alert:
        alert("Incorrect code. Try again!");
    }
}

// Event listener for submit button click
document.getElementById('goButton').addEventListener('click', checkUserGuess);


