# PIG DICE GAME.
#### This project is a website that contains details about a six sided dice game called "pig Dice". It contains details about the game , how to play it and it also enables two players to play the game and get the winner from the two.
#### By [Sheila Fana](https://github.com/Wambita)
## Description
This project is about pig dice: a dice game that is played by two players. The players take turns in rolling dice and the scores are added to the player's current score . If the player decides to hold the scores then the score for that round is added to his/her total and the next player plays his /her round. If a player rolls die number one then his/her scores for that round are discarded and zero is added to his/ her total and the other player gets to play the next round. This continues till one of the players scores 100 or above and is declared the winner and the other is declared loser.

## Setup/Installation Requirements 
* Open "pig-dice" directory on terminal 
* initialize the project on git
* Go to github and create a new repository
* create a remote repository on your computer using terminal
* Push the directory on github
* create a branch gh-pages and push the directory once more using gh-pages as the branch.
* Go to github click environment and click to view the website.
* open your web-browser
* copy the following URL into your search :wambita.github.io/pig-dice
### BDD
In order for the program to run well and to give the correct output, the code had to meet certain criteria
1. The players had to enter their names
2. The players had to roll dice in turns.
3. If a player rolls a die, the number of the die is displayed and the value is displayed on the screen and added to his/her current score. 
4. If  a player clicks the hold button, his/her  current score is added to his /her total score.
5. if a player clicks the roll button and happens to roll die number one , then his/her current score falls to zero and his total score does not change.
6. The first player to score 100+ before the other player emerges the winner. 
Below are tables to describe this:
##### Table one
Behavior                  | Input Example|  Output Example
------------------------  | -------------|  --------------
Players names entered     | Jane, John   | Jane (player1), John (player2)
no names /1 name entered  | null         | please enter all names

##### Table Two
Behavior                |Die Rolled   |Current score | total score(hold)| total score (no hold)
------------------------|-------------|--------------| -----------------|---------------------
roll 4 times no 1 rolled|4, 5,3,2     | 19           |19                |0/(previous score if hold)
roll 4 times 1 rolled   | 4,5,3,1     | 0            |19(prev round ttl)| 0
player's ttl>=100       |             |              |101 (WINNER!)     |101 (WINNER!)
 
## Known Bugs
There are no known Bugs
## Technologies Used
* HTML
* CSS
* JAVASCRIPT
* BOOTSTRAP
* JQUERY
* MARK DOWN
## Support and contact details
contact this number if you have any issues: 0722846189
email: wambitafana@gmail.com
### License
MIT License

Copyright (c) 2019 Wambita

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

