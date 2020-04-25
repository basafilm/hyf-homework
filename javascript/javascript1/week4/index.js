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

const sentimentScoreObject = getSentimentScore('I am mega super awesome happy sick');
console.log(sentimentScoreObject);

//Credit card number formatter

function formatCreditCardNumber(number){
 const creditCardNumber = number.toString().replace(/(\d{4})(?=(\d)+(?!\d))/g, `$1 `)
 return creditCardNumber
};

const formattedCreditCardObject = formatCreditCardNumber(122458789);
console.log(formattedCreditCardObject);



//Character frequencies  
function getCharacterFrequencies(freQuence){
   characters=[];
   for ( letter of freQuence) {
     let creatObject =new Object();
     let letterInString = characters.find(item=>item.character===letter);
      if (letterInString){
       letterInString.count++
        }else {
          creatObject.character =letter
          creatObject.count =1;
       characters.push(creatObject)
     }
    }
    return characters;  
};
console.log(getCharacterFrequencies('happy'));

//Palindromic substring
function palindromicSubstring(str){
  let longStr =[];
  const orderedStr = str.toLowerCase().split('');
  const reOrdered =orderedStr.reverse().join('').split('')
for (let i=0; i<orderedStr.length; i++){
  for (let j=1 ; j<=reOrdered.length ; j++){
    const result = str.substring(i,j);
    if (result ===result.split("").reverse().join("")){
      longStr.push(result);
    }
  }
}
return longStr;
} 
const palindrom =palindromicSubstring('azizakak');
console.log(palindrom);


//Tic Tac Toe 
const position = [
  ['o', 'o', 'x'],
  ['o', 'o', 'o'],
  ['x', 'o', 'o']
];

function getRenderedGame(position){
position.forEach( elem => console.log(`*  ${elem.join(' * ')}  *`));
}
 getRenderedGame(position);

 /*
//winner loser

function getGameinfo(position){
  const winner = 'winner';
  const loser = 'loser' ;
    const countResult =[
    ];
    const intrax1 = position[0]
    const intrax2 = position[1]
    for ( let oL of intrax1){
      //console.log(lx)
  for ( let i=0; i<intrax2.length; i++) {
    const xL = intrax2[i]
    //console.log(xL)
    if(oL[0]=3 ){
      countResult.push('winner : x ')
      countResult.push('Losser : o')
      break
     } else if (oL[0,0]>=3){
       countResult.push(winner)
       countResult.push(loser)
     } else if (oL[1,0]>=3){
     } else {
       countResult.push('hasEnded: true ')
     }
  
  }
  }
  return countResult
  }
  const gameInfo = getGameinfo(position);
  console.log(gameInfo);
  
  //let numX = String.fromCharCode(97 + 23)
  //let numO = String.fromCharCode(97 + 14)
  */


  //Voice assistant

function getReply(command) {
  const todo= [];
  const todoObj= new Object();
    if(command.includes('Hello my name is Benjamin')){
    alert("Nice to meet you Benjamin") 
    
    } else if (command.includes('What is my name?')){
      const person = prompt('Please enter your name', 'malek')
      alert('Hello ' + person + ' what can I do for you?');
    
    } else if(command.includes('Add fishing to my todo')){
    const myList =prompt('What do you want to add?', 'Fishing');
    todo.push(myList)
    alert(myList +' added to your todo')
    } else if(command.includes('Add singing in the shower to my todo')) {
      const songList =prompt('Which SONG will do add ?', 'Singing Song');
      todoObj.shower = songList;
      todo.push(todoObj);
    } else if (command.includes('Remove fishing from my todo')){
      const removeList =prompt('What do you want to remove?', 'Fishing');
     todo.pop(removeList);
     alert('Removed '+removeList + ' from your todo');
    } else if(command.includes('What is on my todo?')){
      console.log('you have' +todo.values() +'and' +todo.shower.values());
    } else if(command.includes('What day is it today?')) {
      const d = new Date()
      const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
      const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d)
      const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
      console.log(`Today is: ${da} of ${mo}, ${ye}`);
    } else if (command.includes('math?')) {
      const math1 = prompt('This is Multiplay Operator, insert first number ', 'number' )
      const math2 = prompt('Multyplay with: ? ', 'number' )
       console.log(math1 * math2);
    } else if(command.includes('set timer')) {
      const timer = prompt('set timer by seconds ', 'number' )
      const timSet =setTimeout(function(event){
        alert('Timer set for '+ timSet+ ' second');}, timer*60 );
    } else {
      console.log('Entry data is not valid!')
    }
    console.log(todo) 
  };
  
onsole.log(getReply('Hello my name is Benjamin')); // "Nice to meet you benjamin"
console.log(getReply('What is my name?')); // "Your name is Benjamin"
console.log(getReply('Add fishing to my todo')); // "fishing added to your todo"
console.log(getReply('What day is it today?'))
console.log(getReply('Add singing in the shower to my todo'))
console.log(getReply('set timer'))
console.log(getReply('Remove fishing from my todo'));