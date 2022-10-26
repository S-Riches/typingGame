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
            await sleep(300);
            selectedKey.style.backgroundColor = "#252323";
            return await " ";
        } else {
            let selectedKey = document.getElementById(key);
            selectedKey.style.backgroundColor = "darkgray";
            await sleep(300);
            selectedKey.style.backgroundColor = "#252323";
            return await selectedKey.innerText.toLowerCase();
        }
    } catch (error) {
        console.log(error);
    }
};

// generate sentences.
const generateWords = async () => {
    // use the fetch api to get the words from the words.txt file
    let wordCollection = await fetch("words.txt")
        .then((response) => response.text())
        .then((text) => {
            let words = text.split("\n");
            let wordCollection = [];
            for (let i = 0; i < 20; i++) {
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
const logToScreen = async (wordsArr) => {
    let wordsStr = wordsArr.join(" ");
    const textBox = document.getElementById("textBox");
    textBox.innerText = wordsStr;
    return wordsStr;
};

// this function moves the mark tag that is responsible for highlighting the individual characters.
const moveMarkTag = async (wordsStr, count) => {
    // firstly insert a mark tag with the green colour at the first character
    wordsStr = `<span class="highlight" style="color: #069e2d;"> ${String(
        wordsStr
    ).substring(0, count + 1)} </span>`;
    const inputBox = document.getElementById("inputBox");
    inputBox.innerHTML = wordsStr;
};
let count = 0;
let mistakes = 0;
// main function to run
const mainLoop = async () => {
    let wordsArr = await generateWords();
    let wordsStr = await logToScreen(wordsArr);
    const mistakesElement = document.getElementById("mistakes");
    const charChecker = (keyPress) => {
        if (count < wordsStr.length) {
            if (keyPress == wordsStr[count]) {
                console.log(keyPress, wordsStr[count]);
                moveMarkTag(wordsStr, count);
                count++;
            } else {
                mistakes++;
                mistakesElement.innerText = `Mistakes : ${mistakes}`;
            }
        } else {
            window.location.reload();
        }
    };
    // register the key clicks
    window.addEventListener("keypress", (e) => {
        // light up the keyboard on the screen
        lightUpKeyboard(e.key.toUpperCase()).then((key) => {
            charChecker(key);
        });
    });
};

mainLoop();
