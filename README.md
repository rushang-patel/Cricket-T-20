# Cricket T-20 Game - Readme

Welcome to the Cricket T-20 Game! This is a simple text-based game where you can simulate a T-20 cricket match using a number randomizer. The game allows you to experience the excitement of cricket in a condensed format.

## How to Play

1. Buttons:
   - Begin by pressing the set target. This will randomly set a cpu target between 100 and 250.
   - Press play to get a randomly generated number between 0-9. This will represent the score on each ball.
   - Reset button will appear when the player either wins, loses, or ties. Press reset to restart the game.
     
2. Rules of the Game:
   - Each team will play 20 overs (120 balls) in total.
   - A scorecard will be displayed for your team, showing the current score and the number of wickets lost.
   - The game will simulate the outcomes of each ball based on random numbers.

3. Batting:
   - To simulate batting, roll the randomizer and obtain a number between 0 and 9.
   - If the number is 5, 7, 8, or 9, consider it a dot ball (no runs scored).
   - If the number is 1, 2, or 3, add that number of runs to the team's score.
   - If the number is 4, or 6, consider it a boundary and add runs to the team's score.
   - If the number is 0, consider it as a wicket, and the batting team loses a wicket.
   - Continue rolling the randomizer until all 120 balls are bowled or all wickets are lost.

4. Winning the Game:
   - The team with the highest score at the end of 20 overs wins the game.
   - If both teams have the same score, the match ends in a tie.

Enjoy playing the Cricket T-20 Game and experience the excitement of a thrilling cricket match!

# Gameplay

<img width="672" alt="Base" src="https://github.com/rushang-patel/Cricket-T-20/assets/134887327/1197df9e-674c-4293-bc89-f610de48daee">

<img width="666" alt="Gameplay" src="https://github.com/rushang-patel/Cricket-T-20/assets/134887327/f9be6bf4-b2ab-41f8-a04d-dc3c9d20355e">

<img width="680" alt="Loss" src="https://github.com/rushang-patel/Cricket-T-20/assets/134887327/bb5d7b5d-0e25-4061-8add-078a5835e34b">


# Technologies Used:

This cricket game utilizes a combination of JavaScript, HTML, and CSS to create an interactive and immersive gaming experience. JavaScript is employed for various functionalities, such as simulating batting and bowling, updating the scorecard, managing wicket losses, and determining the winner. DOM manipulation is a key aspect of JavaScript usage, allowing for dynamic updates to the game interface, scorecard, and other game elements.

HTML provides the structure and layout of the game, defining the elements, containers, and displays required. CSS is responsible for the visual styling, including the design of the game board, scorecard, fonts, and other visual elements. By leveraging these technologies, the game achieves seamless interactivity, responsive design, and a captivating user interface, enhancing the overall cricket gaming experience.


# Challenges:

Figuring out the reset structure was hard. I needed the reset button to appear only when the game conditions were met, and I wanted the reset button to reset all elements and make the reset button disappears when pressed.


<img width="590" alt="Reset" src="https://github.com/rushang-patel/Cricket-T-20/assets/134887327/bbc137f4-b964-408a-92e3-8c4e436805c1">


Another challenge was to add probability to the already randomised numbers.

<img width="419" alt="Adding Probability" src="https://github.com/rushang-patel/Cricket-T-20/assets/134887327/518a79e4-cb86-49a6-b986-2362a3e44158">


# Next Steps:

I would like to add more functionality to the game. I want to add live scoreboards for all 11 players. Definitely add fireworks to the win condition and maybe when you roll a 6. Add animations to the rolled numbers as well as add images to show different shots to the rolled numbers.
