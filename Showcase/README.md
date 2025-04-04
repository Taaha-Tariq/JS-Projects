# Height Probability Guesser
It is a program that calculates the probability of a person having the given height based on the normally distributed height of the people around the world. The data is available online and the link can be found in the main.js file. It uses the normal distribution API implemented in the stdlib.

## How to Download it?
The project can be cloned on the local machine using the url provided in the remote repo using the command

>  git clone <url\>

After which the dependencies must be installed and to do that, run the following command in the project folder

>  node install

Now, you can run the program on your local machine.

## How to use it?
The program first prompts the user for his gender based on which it uses the appropriate normal distribution since males and females have different height distributions.

Then, the user is prompted for their height in cm since the distribtution uses cm as its measurement unit. And using the appropriate distribution (diff for males/females), it returns the probability of having that height.

## Error handling
+ The height must be in the range (100 - 300), else an error message will be displayed.
+ The inputs are case-insensitive (M/m) both work.
+ Data is only available for males/females. Displayes an error message for any other input.
