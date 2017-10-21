//holds words about things in a house

function lesson1Init () {
  //var id = document.getElementById("lessonPage1");
  //inputElement = id.getElementsByTagName("input");
  //textElement = id.getElementsByTagName("text");

  randomizeHouseWordList();

  console.log(engHouseWordsScrambled);
  console.log(engHouseWords);

  for (var i = 0, len = engHouseWordsScrambled.length; i < len; i++) {
    document.getElementById("lessonPage1").getElementsByClassName("text")[0].innerHTML += engHouseWords[i] + " : " + engHouseWordsScrambled[i] + " </br>";
  }
}

function getHouseWord(en) {
  return houseWords[en];
}

var houseWords = {
  "book": {
    kana: "本",
    Romanji:"ho-n",
    desc: "<b>Words 本 is included in:</b> <br/> 本だな -> (ho-n-da-na) -> book. <br/><br/> <b>Other uses:</b> <br/> counting blades of grass or tree trunks, <br/> counting falcons. <br/> <pronounced mo-to> <br/><br/> counting long cylyndrical objects, <br/> counting films. <br/> <pronounced ho-n>",
    understanding: 0
  },
  "floor": {
    kana: "ゆか",
    Romanji:"yu-ka",
    desc: "means floor",
    understanding: 0
  }
}

/*holds all the words to learn this lesson*/
var engHouseWords = [
  "floor", "book", "table", "chair", "cup", "stool", "door", "window", "lamp", "computer", "bookshelf", "pillow", "bed", "couch",
  "towel", "wall", "house", "room", "hallway", "stairs", "railing", "bin", "closet", "basket", "blanket", "shower", "counter", "garbage can"
]

/*holds scrambled order words*/
var engHouseWordsScrambled;

/*randomly swaps 40 words*/
function randomizeHouseWordList() {
  engHouseWordsScrambled = engHouseWords.slice();

  for(var times = 0; times < 40; times++) {
    swapWords(getRandomHouseNumber(), getRandomHouseNumber());
  }
}

/*swaps the position of two words*/
function swapWords(wordNum1, wordNum2) {
  var word1 = engHouseWordsScrambled[wordNum1];
  var word2 = engHouseWordsScrambled[wordNum2];

  engHouseWordsScrambled[wordNum1] = word2;
  engHouseWordsScrambled[wordNum2] = word1;
}

function getRandomHouseNumber () {
  return Math.floor((Math.random() * engHouseWords.length));
}
