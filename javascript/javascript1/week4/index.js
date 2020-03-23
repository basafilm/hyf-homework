const goodWords=['super','awesome', 'happy', 'wonderful', 'excited'];
const badWords= ['ugly', 'hate', 'bad', 'horrible', 'sick'];

function getSentimentScore(words){
    const result = {
        score:0,
        positiveWords:[],
        negativeWords: [],
        nutralWords :[],

    };
    const scoredWords= words.split(' ');
for ( let i = 0; i <scoredWords.lenght; i++){
    const myWord = scoredWords[i];
    if (goodWords.includes(myWord)) {
        result.score++;
        result.positiveWords.push(myWord);
    } else if (badWords.includes(myWord)) {
             result.score--;
            result.negativeWords.push(myWord);
    } else {
          result.nutralWords.push(myWord);
    }
}
return result;
};

const sentimentScoreObject = getSentimentScore('I am mega super awesome happy');
console.log(sentimentScoreObject);
(sentimentScoreObject); 

//Credit card number formatter

function formatCreditCardNumber(number){
 const creditCardNumber = number.toString().replace(/(\d{4})(?=(\d)+(?!\d))/g, `$1 `)
 return creditCardNumber
};

const formattedCreditCardObject = formatCreditCardNumber(123456789);
console.log(formattedCreditCardObject);


