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

var keySentence = document.getElementById("benchHeading");

function changeTextContent(text) {
    keySentence.innerHTML = '<h1><span>' + text + '</span></h1>';
}

keyButton.addEventListener('click', () => {
    changeTextContent("You picked up a key!");
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

function hasKey() {
    return items.includes("key");
}

