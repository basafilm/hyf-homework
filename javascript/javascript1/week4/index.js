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
for ( let i = 0; i <scoredWords.length; i++){
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
//Character frequencies

  

function getCharacterFrequencies(freQuence){
   characters=[
    {
      character:[],
      count:0,
    },
    {
      character:[],
      count:0,
    },
    {
      character:[],
      count:0,
    },
    {
      character:[],
      count:0,
    },
   ];
    
   const countWords= freQuence.split('');
   for ( let i=0; i< countWords.length; i++){
     const letter = countWords[i];
    if(letter.charAt()==='h'){
        characters[0].character.push(letter)
        characters[0].count++      
    } else if (letter.charAt()==='a'){
      characters[1].character.push(letter)
      characters[1].count++
    }else if (letter.charAt()==='p'){
      characters[2].character.push(letter)
      characters[2].count++
    } else if (letter.charAt()==='y'){
      characters[3].character.push(letter)
      characters[3].count++
    }
   
  };
    return characters;
};
console.log(getCharacterFrequencies('happy'))
