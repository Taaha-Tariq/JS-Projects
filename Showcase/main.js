// Importing the normal distribution module from the stdlib library
var Normal = require( '@stdlib/stats/base/dists/normal' ).Normal;
// Importing the prompt-sync module for synchronous user input
const prompt = require("prompt-sync")({ sigint: true });

// Program description
console.log( "Welcome to the probablity calculator that guesses the probability of you having the specified height based on data." );
console.log( "This program is based on the normal distribution of height." );
console.log("*************************************************************************************************\n");

// Creating two normal distributions, one for males and the other for females
// The mean and standard deviation values are based on the normal distribution of height in cm
// Based on the data from https://ourworldindata.org/human-height
var normal_male = new Normal( 178.4, 7.89 );
var normal_female = new Normal( 164.7, 7.07 );

// The program will run in a loop until the user enters 'exit'
while ( true ) {
    // Prompting the user to enter any key to continue or 'exit' to quit or 'help' for help
    var msg = prompt( "Enter any key to continue (or 'exit' to quit or 'help' for help): " );
    
    // If the user enters 'exit', the program will quit
    if ( msg.toLowerCase().trim() === 'exit' ) {
        break;
    }
    // If the user enters 'help', the program will display the help message
    else if ( msg.toLowerCase().trim() === 'help' ) {
        // Displaying the help message
        console.log( "\nFirst, you will be prompted to enter your gender based on which the program will guess the probability." );
        console.log( "Then, you will be prompted to enter your height." );
        console.log( "Finally, the program will guess the probability of you having the specified height based on data relative to the specified gender." );
        console.log( "You can enter 'exit' to quit or 'help' for help.\n" );
        continue;
    }
    else {
        // Prompting the user for gender
        var gender = prompt("\nEnter your gender: (m/f): ");

        // For males 
        // If the user enters 'm' or 'M'
        if (gender.charAt(0).toLowerCase() === 'm') {
            // Prompting the user for height
            // The height will be in cm
            var height = prompt("Enter your height in cm: ");

            // Checking if the height is a number
            // If the height is not a number, the program will prompt the user to enter a valid number
            if (isNaN(height)) {
                console.log("Please enter a valid number. \n");
                continue;
            }
            // Parsing the height to a float
            height = parseFloat(height);

            // Checking if the height is in the valid range
            if (height < 0 || height > 300) {
                console.log("Please enter a valid height. \n");
                continue;
            }
            // If the height is in the valid range, the program will calculate the probability
            else {
                // Calculating the probability
                var probability = normal_male.pdf(height);
                // Displaying the probability to four decimal places
                console.log("The probability of you having the specified height is: " + probability.toFixed(4));
                // Displaying the probability in percent
                console.log("The percent probability of you having the specified height is: " + (probability * 100).toFixed(2) + "%.\n");
            }
        }
        // For females
        // If the user enters 'f' or 'F'
        else if (gender.charAt(0).toLowerCase() === 'f') {
            // Prompting the user for height
            // The height will be in cm
            var height = prompt("Enter your height in cm: ");

            // Checking if the height is a number
            // If the height is not a number, the program will prompt the user to enter a valid number
            if (isNaN(height)) {
                console.log("Please enter a valid number.\n ");
                continue;
            }

            // Parsing the height to a float
            height = parseFloat(height);

            // Checking if the height is in the valid range
            if (height < 0 || height > 300) {
                console.log("Please enter a valid height.\n ");
                continue;
            }

            // If the height is in the valid range, the program will calculate the probability
            else {
                // Calculating the probability
                var probability = normal_female.pdf(height);
                // Displaying the probability to four decimal places
                console.log("The probability of you having the specified height is: " + probability.toFixed(4));
                // Displaying the probability in percent
                console.log("The percent probability of you having the specified height is: " + (probability * 100).toFixed(2) + "%.\n");
            }
        }
        // If the user enters anything other than 'm' or 'f'
        else {
            console.log("\nWe dont have data for it. Please enter 'm' or 'f'. \n");
            continue;
        }
    }
}

// Displaying the exit message
console.log( "\nThanks for using the probability guessor!" );
