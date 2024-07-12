const quotes = [];//An array to store quotes along with who said them as objects.

//A function that takes a quote and a person's name as argument and return an object with the quote and the person's name as properties and getter methods for both.
function quoteObjectFactory (_quote, _nameOfPerson) {
    return {
        _quote,
        _nameOfPerson,
        get quote () {
            if(typeof this._quote === 'string') {
                return this._quote;
            }
            else {
                return 'Error!';
            }
        },
        get nameofPerson () {
            if(typeof this._nameOfPerson === 'string') {
                return this._nameOfPerson;
            }
            else {
                return 'Error!';
            }
        }
    }
}

//A function to push the generated objects into the array for storage.
function pushingTheQuoteInArray (quote, nameofPerson) {
    quotes.push(quoteObjectFactory(quote, nameofPerson))
}

//A concise name for pushingTheQuoteInArray function
const quoteGen = pushingTheQuoteInArray;

//Quotes can be pushed into the array by calling the quoteGen function with its two arguments here.Feel free to add more quotes.

quoteGen("If people knew how hard I worked to get my mastery, it wouldn't seem so wonderful after all.", 'Michelangelo');
quoteGen("Before you start some work, always ask yourself three questions - Why am I doing it, What the results might be and Will I be successful. Only when you think deeply and find satisfactory answers to these questions, go ahead.", 'Chanakya');
quoteGen("Do the best you can until you know better. Then when you know better, do better.", 'Maya Angelou');
quoteGen("Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.", 'Pele');

//A function for generating a random number between 0 and 9.
const luckyNumberGenerator = () => {
    return Math.floor(Math.random() * 10);
}

//A function for printing a random quote along with who said it from the array
const randomQuotesGenerator = () => {
    let randomNum = Math.floor(Math.random() * quotes.length);
    
    console.log(`>  "${quotes[randomNum].quote}"  : by "${quotes[randomNum].nameofPerson}"`);
}

//A function which predicts the lucky year from the present year 2024 based on the luckyNumberGenerator.
const luckyYear = () => {
    let luckyNum = luckyNumberGenerator();
    let luckyYear1 = 2024 + luckyNum;

    if(luckyNum != 0){
        console.log(`Your Lucky Number is ${luckyNum}, and based on it, Your lucky Year will be ${luckyYear1}. Don't Give Up, It'll be tough but you'll make it.`);
    }
    else {
        console.log(`Your Lucky Number is ${luckyNum}, and based on it, The ongoing year is your lucky Year.`);
    }
}

//A function which organizes everything and prints it.
const printingEverything = () => {
    console.log('');
    luckyYear();
    console.log('');
    console.log(`Here's a Random Quote for success that can help you through difficult times:`);
    console.log('');
    randomQuotesGenerator();
    console.log('');
}

printingEverything();

