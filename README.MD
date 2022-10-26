![banner](⌨️_Typing_Game_⌨️.png)
![GitHub language count](https://img.shields.io/github/languages/count/s-riches/typinggame) ![GitHub repo size](https://img.shields.io/github/repo-size/s-riches/typinggame) ![Website](https://img.shields.io/website?down_color=lightgrey&down_message=Page%20down&up_color=green&up_message=Online&url=https%3A%2F%2Fs-riches.github.io%2FtypingGame%2F)

## A small static website to practice your typing ability.

### How to Play :

To start playing go to my [GitHub pages site](https://s-riches.github.io/typingGame/)

Then you will see a randomly generated collection of 20 words such as this ![](Pasted%20image%2020221026133923.png)

To play you simply have to start typing the words, and every correct character you type the corresponding character will appear on the screen, like this: ![](Pasted%20image%2020221026134051.png)

After finishing a word, press space to go to the next word. ![](Pasted%20image%2020221026134132.png)

When typing a mistake you will see the mistake counter tick up and you will need to re-enter the correct character ![](Pasted%20image%2020221026134305.png)

After finishing the word collection you must press space to reset your mistakes and generate a new set of words ![](resetGame.gif)

Please note that the keyboard on the screen is not interactive, it merely mimics your input to avoid you needing to look at your own keyboard to see what keys you are accidentally hitting.

## How the game works

##### Note: this isn't a comprehensive list of every block of code, but just the notable parts.

To start, the project has a local file called words.txt, a fork from [Dolph's dictionary](<[https://github.com/dolph/dictionary/blob/master/popular.txt](https://github.com/dolph/dictionary/blob/master/popular.txt)>) With which i read via a simple Fetch api call ![](<carbon%20(2).png>)

What this does once it reads the files contents, it chooses 20 random words from the words file, and adds them to an array, and then returns the array asynchronously.

Then after receiving the array, the program then logs this to the screen, saving the `wordsStr` for later use. ![](<carbon%20(3).png>)
After this we then do character checking in an event loop using this function to check if the character the user inputted is equal to the character at the position. This is also where we increment the mistakes in case of invalid input. The char checker is also responsible for reloading the page once the user hits the end of the sentence, which is always a space character. ![](<carbon%20(4).png>)

Then finally to actually capture the users input we use a simple event listener, where it captures what key has been pressed, and feeds the `event.key` to the charChecker function. ![](<carbon%20(5).png>)
