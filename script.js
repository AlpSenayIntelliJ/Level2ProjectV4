document.addEventListener('DOMContentLoaded', function() {
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
    var unlockButton = document.querySelector(".unlock");

    var keySentence = document.getElementById("benchHeading");

    function changeTextContent(text) {
        keySentence.innerHTML = '<h1><span>' + text + '</span></h1>';
    }

    keyButton.addEventListener('click', () => {
        changeTextContent("You picked up a key!");
        addKey();
        // for checking items (DELETE LATER)
        console.log(items);
    });

    restartButton.addEventListener('click', () => {
        removeAllItems();
    });
    
    console.log(unlockButton);
    unlockButton.addEventListener('click', () => {
        var conditionMet = hasKey();
        if (!conditionMet) {
            console.log("You need a key to unlock the door.");
        } else {
            removeAllItems();
            console.log("Door unlocked!");
            // Add logic to proceed with unlocking, e.g., navigating to another page
        }
    });

    function hasKey() {
        return items.includes("key");
    }
});