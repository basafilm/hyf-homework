//Item array removal
const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

for ( let i=0; i<names.length-1; i++){
  if(names[i]===nameToRemove){
    names.splice(i,1)
  }
};
console.log(names);

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
];
function logOutSeriesText(durations) {
  let age = 80* 365 * 24;
  allToGather =0;
  for (let duration of durations){
 const dayToHour = duration.days * 24;
 const hour = duration.hours;
 const minute = duration.minutes ;
 const totaleDuration = dayToHour + hour + minute; 
 let percentage = totaleDuration / age * 100;
 console.log(`${duration.title} tok : ${percentage.toFixed(3)}  % of my life`);
 allToGather +=percentage; 
  };
  console.log(`In total this movies tok : ${allToGather.toFixed(3)} % of mylife`);
  return durations
}
console.log(logOutSeriesText(seriesDurations));


    //Save a note const 
const notes=[];
    function saveNote(content, id){
      do {
        notes.push({content, id})
      }
      while ( typeof content=== "string" && typeof id === Number);
    };    
     saveNote('Pick up groceries', 1);
     saveNote('Do laundry', 2);
     saveNote('wash hands during corona time', 3);

    console.log(notes);


//Get a note
function getNote(id){
  return notes[id];
};
const firstNote = getNote(2); 
console.log(firstNote)

//Log out notes
function logOutNotesFormatted(note){
  for (let i =0; i< notes.length; i++){
    const noteId = note[i]['id']
    const noteText = note[i]['content'];
    console.log(`The note with Id: ${noteId} , has the following note text: ${noteText}`)  
  }
  return note
}
logOutNotesFormatted(notes);


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
  songDatabase.push({
    songId: 5,
    title: 'lost in the decert',
    artist: 'Akram',
});
return songDatabase[song] 
};
addSongToDatabase(songDatabase);
console.log(songDatabase);

// the song added becouse songDatabase is a global varible and can be accesable from everywhere.

// Searching for a song 

function getSongByTitle(title){
songDatabase.forEach(songTitle=> console.log(songTitle.title.valueOf()));
return title
};
const searchedSong = getSongByTitle('When is enough too little?');
console.log(searchedSong);


    // Create our own playlist
 
    function addSongToMyPlaylist(ev){
      songDatabase.forEach(function(song){
      if (ev ===song.title){
        myPlaylist.push(ev)
      }
      })
      };
      addSongToMyPlaylist('lost in the decert')
      addSongToMyPlaylist('Blacker than black')
      console.log(myPlaylist);