// sleep function to make the function wait before going back to original colour
const sleep = async (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
};

// method to light the keyboard up on the screen
const lightUpKeyboard = async (key) => {
    try {
        // edge case for the space button as it will be used to go to the next word
        if (key == " ") {
            let selectedKey = document.getElementById("SPACE");
            selectedKey.style.backgroundColor = "darkgray";
            console.log(selectedKey);
            selectedKey.style.backgroundColor = "darkgray";
            await sleep(500);
            selectedKey.style.backgroundColor = "#252323";
        } else {
            let selectedKey = document.getElementById(key);
            console.log(selectedKey);
            selectedKey.style.backgroundColor = "darkgray";
            await sleep(500);
            selectedKey.style.backgroundColor = "#252323";
        }
    } catch (error) {
        console.log(error);
    }
};

// generate sentences.
const generateWords = async () => {
    // use the fetch api to get the words from the words.txt file
    let wordCollection = fetch("words.txt")
        .then((response) => response.text())
        .then((text) => {
            let words = text.split("\n");
            let wordCollection = [];
            for (let i = 0; i < 15; i++) {
                wordCollection.push(
                    words[Math.floor(Math.random() * words.length)]
                );
            }
            return wordCollection;
        });
    // await the result of the fetch
    return await wordCollection;
};

// log words to the screen
const logToScreen = async () => {
    let wordsArr = await generateWords();
    let wordsStr = wordsArr.join("_");
    const textBox = document.getElementById("textBox");
    textBox.innerText = wordsStr;
};

const charChecker = (keyPress, wordsStr) => {
    for (let i = 0; i < wordsStr.length; i++) {}
};

logToScreen();

// logToScreen(generateWords());

// register the key clicks
window.addEventListener("keypress", (e) => {
    // light up the keyboard on the screen
    lightUpKeyboard(e.key.toUpperCase());
});

// check that against the current character

// if its a mistake increase mistakes

// if its a sucess move onto the next character
