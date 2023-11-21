loadItemsFromSessionStorage();

// Save items to sessionStorage
function saveItemsToSessionStorage() {
    sessionStorage.setItem('savedItems', JSON.stringify(items));
}

// Load items from sessionStorage
function loadItemsFromSessionStorage() {
    const savedItems = sessionStorage.getItem('savedItems');
    if (savedItems) {
        items = JSON.parse(savedItems);
    }
}

var items = [];
var emptyItems = [];

function addKey() {
    if (items.indexOf("key") === -1) {
        items.push("key");
    }
    saveItemsToSessionStorage();
}

function removeAllItems() {
    items = emptyItems;
    saveItemsToSessionStorage();
}

// buttons
var keyButton = document.getElementById("takeKey");
var restartButton = document.getElementById("restartBtn");
var enterBasementButton = document.getElementById("enterBasement");
var unlockButton = document.getElementById("unlock");
var submitButton = document.getElementById("goButton");

var keySentence = document.getElementById("benchHeading");

function changeTextContent(sentence, text) {
    sentence.innerHTML = '<h1><span>' + text + '</span></h1>';
}

function checkUserGuess() {
    const userInput = document.getElementById('codeInput').value.trim(); // Get user input and trim whitespace
    const expectedCode = "Heaven's Night";

    if (userInput.toLowerCase() === expectedCode.toLowerCase()) {
        window.location.href = "win2.html";
    }
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

