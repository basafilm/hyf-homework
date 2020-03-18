//Item array removal

const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';
// Write some code here
for ( i=0; i<names.length; i++){
  if(names[i]===nameToRemove){
    names.splice(i,1);
  }
  console.log(names[i]);
};
//When will we be there??
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  function travelLenght(){
    const speedPrHuoer = travelInformation.speed;
    const distance = travelInformation.destinationDistance;
    const length = distance/ speedPrHuoer;
    let houers= Math.floor(length);
    let minutes = (length-houers) *60;
    return `Travel duration is : ${houers} houers and ${minutes.toFixed(0)} minutes `
  };
  
  const travelTime = travelLenght(travelInformation);
  console.log(travelTime); 


//Series duration of my life
const seriesDurations = [
  {
    title: 'Game of thrones',
    days: 3,
    hours: 1,
    minutes: 0,  
  },
  {
    title: 'Sopranos',
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: 'The Wire',
    days: 2,
    hours: 12,
    minutes: 0,
  }
]
let gameOfThrones= seriesDurations[0].days *24 + seriesDurations[0].hours + seriesDurations[0].minutes;
var age = 80* Math.floor( 365 * 24);
const gameOfPercen = gameOfThrones/ age * 100;
const lemitDeceimil1 = gameOfPercen.toFixed(3);
console.log(`${seriesDurations[0].title} took ${lemitDeceimil1} % of my life`);

let sopranos= seriesDurations[1].days *24 + seriesDurations[1].hours + seriesDurations[1].minutes;
const sopranosOfPercen = sopranos/ age * 100;
const lemitDeceimil2 = sopranosOfPercen.toFixed(3);

console.log(`${seriesDurations[1].title} took ${lemitDeceimil2} % of my life `);

let theWire= seriesDurations[2].days *24 + seriesDurations[2].hours + seriesDurations[2].minutes;
const wireOfPercen = theWire/ age * 100;
const lemitDeceimil3 = wireOfPercen.toFixed(3);

console.log(`${seriesDurations[2].title} took ${lemitDeceimil3} % of my life `);


//My favorite songs

const songDatabase = [{
  songId: 1,
  title: 'My baby',
  artist: 'Soggy socks',
},
{
  songId: 2,
  title: '3 nails in wood',
  artist: 'The carpenters',
},
{
  songId: 3,
  title: 'Blacker than black',
  artist: 'Instant coffee',
},
{
  songId: 4,
  title: 'When is enough too little?',
  artist: 'The spies girls',
},
];
const myPlaylist = [];

function addSongToDatabase(song){
  song= songDatabase.push({
    songId: 5,
    title: 'lost in the decert',
    artist: 'Akram',
  } );
};
addSongToDatabase(songDatabase);
console.log(songDatabase);

// the song added becouse songDatabase is a global varible and can be accesable from everywhere.

// Searching for a song 

function getSongByTitle(title){
songDatabase.forEach(songTitle=> console.log(songTitle.title.valueOf()));
 let songTitle = songDatabase[3];
return songTitle

};

const searchedSong = getSongByTitle('When is enough too little?');
console.log(searchedSong);

const searchedSong2 = getSongByTitle('When is enough too');
console.log(searchedSong); 


    // Create our own playlist
 
    function addSongToMyPlaylist(title){
      let playlist= songDatabase.findIndex(addSongToDatabase);
      console.log(playlist);
      myPlaylist.push(playlist);
      return myPlaylist + title
      };
      console.log(myPlaylist);

    //Save a note const 
const notes=[];
    function addNote(content, id){
     if ( typeof content === 'string' && typeof id === Number){
       notes.push({ content, id})
     } 
    };    

function getNoteFromId(id){

  for( let i=0; i <notes.length; i++){
    if (notes[id] === id ) {
      return notes[i];
    }
  }
return getNoteFromId(id);

};

console.log(notes);

function logOutNotesFormatted(){
  for (let i=0; i <notes.length; i++){
    console.log("The note with id: 1, has the following note text: " +notes[i]+".")
  }
}
logOutNotesFormatted();