var items = [];

function addKey() {
    items.push("key");
}

var keyButton = document.getElementById("takeKey");

var keySentence = document.getElementById("benchHeading");

var itemsSentence = document.getElementById("checkItems");

function changeContent() {
    keySentence.innerHTML = '<h1><span>You picked up a key!</span></h1>';
}

keyButton.addEventListener('click', () => {
    changeContent();
    console.log(items.length);;
});

function hasKey() {
    for (var i = 0; i < items.length; i++) {
        if (items[i] === "key") {
            return true;
        }
    }
    return false;
}