//holds words about things in a house.

var percentComplete = 0;
var houseIntroText = "This lesson teaches you some of the objects you can find in your house.";

function lesson1Init () {
  //add page variables to lesson script.
  var id = document.getElementById("lessonPage1");
  inputElement = id.getElementsByClassName("inputFinish")[0];
  nextElement = id.getElementsByClassName("acceptFinish")[0];
  textElement = id.getElementsByClassName("text")[0];

  //add word list to lesson script.
  randomizeHouseWordList();
  wordsList = engHouseWordsScrambled;

  textElement.innerHTML = houseIntroText + '<button id="startButton" style="display: block; width: 100px; position: absolute; left: 50%; margin-right: -50%; transform: translate(-50%, 25%)" onclick="lessonStart()">start lesson</button>';
}

function getHouseWord(en) {
  return houseWords[en];
}

//holds word translations and word info.
var houseWords = {
  "book": {
    kana: "本",
    romanji:"ho-n",
    desc: "<b>Words 本 is included in:</b> <br/> 本だな -> (ho-n-da-na) -> book. <br/><br/> <b>Other uses:</b> <br/> counting blades of grass or tree trunks, <br/> counting falcons. <br/> <pronounced mo-to> <br/><br/> counting long cylyndrical objects, <br/> counting films. <br/> <pronounced ho-n>",
    understanding: 0
  },
  "floor": {
    kana: "ゆか",
    romanji:"yu-ka",
    desc: "means floor",
    understanding: 0
  },
  "table": {
    kana: "",
    romanji:"",
    desc: "",
    understanding: 0
  },
  "chair": {
    kana: "",
    romanji:"",
    desc: "",
    understanding: 0
  },
  "cup": {
    kana: "",
    romanji:"",
    desc: "",
    understanding: 0
  },
  "stool": {
    kana: "",
    romanji:"",
    desc: "",
    understanding: 0
  },
  "door": {
    kana: "",
    romanji:"",
    desc: "",
    understanding: 0
  },
  "window": {
    kana: "",
    romanji:"ma-do",
    desc: "means window",
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
