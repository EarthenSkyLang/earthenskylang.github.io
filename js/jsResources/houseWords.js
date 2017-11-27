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

/*holds all the words to learn this lesson*/
var engHouseWords = [
  "floor", "book", "table", "chair", "cup", "door", "window", "lamp", "computer", "bookshelf", "pillow", "bed", "couch",
  "towel", "wall", "house", "room", "hallway", "stairs", "railing", "bin", "closet", "basket", "blanket", "shower", "counter", "garbage can"
]

//holds word translations and word info.
var houseWords = {
  "book": {
    kana: "ほん",
    romanji: "ho-n",
    desc: "ほん is 本 in kanji. <br/> 本 is part of grade 1 kanji which is the most commonly used kind. <br/> <br/>  本 is included in: <br/> 本だな -> (ho-n-da-na) -> book. <br/><br/>",
    link: "resources/pictures/book.jpg",
    understanding: 0
  },
  "floor": {
    kana: "ゆか",
    romanji:"yu-ka",
    desc: "*you ca*n see the floor.",
    link: "resources/pictures/floor.jpg",
    understanding: 0
  },
  "table": {
    kana: "テーブル",
    romanji:"te-e-bu-ru",
    desc: "it sounds like table. <br/> this is a word in Katakana, which is usually used for english sounding words or materials/ingredients.",
    link: "resources/pictures/table.jpg",
    understanding: 0
  },
  "chair": {
    kana: "いす",
    romanji:"i-su",
    desc: "チェア(che-a) is fine too.",
    link: "resources/pictures/chair.jpg",
    understanding: 0
  },
  "cup": {
    kana: "カッパ",
    romanji:"ka-p-pu",
    desc: "it sounds like cup.",
    link: "https://cdn.pixabay.com/photo/2017/08/06/03/56/book-2588514_1280.jpg",
    understanding: 0
  },
  "door": {
    kana: "と",
    romanji:"to",
    desc: "ドア(do-a) is also ok. <br/> とびら(to-bi-ra) is ok too.",
    link: "https://cdn.pixabay.com/photo/2017/08/06/03/56/book-2588514_1280.jpg",
    understanding: 0
  },
  "window": {
    kana: "まど",
    romanji: "ma-do",
    desc: "ウィンドウ(wi-n-do-u) is fine too.",
    link: "https://cdn.pixabay.com/photo/2017/08/06/03/56/book-2588514_1280.jpg",
    understanding: 0
  },
  "lamp": {
    kana: "ランプ",
    romanji:"ra-n-pu",
    desc: "あかり(a-ka-ri) and ひかり(hi-ka-ri) both mean *light* but are mostly still fine. <br/> ひかり is a more bright or brilliant light than あかり.",
    link: "https://cdn.pixabay.com/photo/2017/08/06/03/56/book-2588514_1280.jpg",
    understanding: 0
  },
  "computer": {
    kana: "パソコン",
    romanji: "pa-so-ko-n",
    desc: "(pa-so-ko-n) sounds like *personal computer*",
    link: "https://cdn.pixabay.com/photo/2017/08/06/03/56/book-2588514_1280.jpg",
    understanding: 0
  },
  "bookshelf": {
    kana: "ほんだな",
    romanji:"ho-n-da-na",
    desc: "has ほん(ho-n) in it which means book.",
    understanding: 0
  },
  "pillow": {
    kana: "まくら",
    romanji: "ma-ku-ra",
    desc: "kanji: <pop2>まくら</pop2> is <pop2>枕</pop2>.",
    link: "https://cdn.pixabay.com/photo/2017/08/06/03/56/book-2588514_1280.jpg",
    understanding: 0
  },
  "bed": {
    kana: "ベッド",
    romanji: "be-d-do",
    desc: "寝台(shi-n-da-i) is another way to say bed.",
    understanding: 0
  },
  "couch": {
    kana: "ソファー",
    romanji: "so-fa-a",
    desc: "sofa == couch <br><br> ^^",
    link: "https://cdn.pixabay.com/photo/2017/08/06/03/56/book-2588514_1280.jpg",
    understanding: 0
  },
  "towel": {
    kana: "タオル",
    romanji:"ta-o-ru",
    desc: "タオル(ta-o-ru) sounds like towel.",
    link: "https://cdn.pixabay.com/photo/2017/08/06/03/56/book-2588514_1280.jpg",
    understanding: 0
  },
  "wall": {
    kana: "かべ",
    romanji: "ka-be",
    desc: "kanji: <pop2>かべ</pop2> is <pop2>壁</pop2>.",
    link: "https://cdn.pixabay.com/photo/2017/08/06/03/56/book-2588514_1280.jpg",
    understanding: 0
  },
  "house": {
    kana: "",
    romanji: "",
    desc: "",
    link: "https://cdn.pixabay.com/photo/2017/08/06/03/56/book-2588514_1280.jpg",
    understanding: 0
  },
  "room": {
    kana: "",
    romanji: "",
    desc: "",
    link: "https://cdn.pixabay.com/photo/2017/08/06/03/56/book-2588514_1280.jpg",
    understanding: 0
  },
  "hallway": {
    kana: "",
    romanji:"",
    desc: "",
    link: "https://cdn.pixabay.com/photo/2017/08/06/03/56/book-2588514_1280.jpg",
    understanding: 0
  },
  "stairs": {
    kana: "",
    romanji:"",
    desc: "",
    link: "https://cdn.pixabay.com/photo/2017/08/06/03/56/book-2588514_1280.jpg",
    understanding: 0
  },
  "railing": {
    kana: "",
    romanji:"",
    desc: "",
    link: "https://cdn.pixabay.com/photo/2017/08/06/03/56/book-2588514_1280.jpg",
    understanding: 0
  },
  "bin": {
    kana: "",
    romanji:"",
    desc: "",
    link: "https://cdn.pixabay.com/photo/2017/08/06/03/56/book-2588514_1280.jpg",
    understanding: 0
  },
  "closet": {
    kana: "",
    romanji:"",
    desc: "",
    link: "https://cdn.pixabay.com/photo/2017/08/06/03/56/book-2588514_1280.jpg",
    understanding: 0
  },
  "basket": {
    kana: "",
    romanji:"",
    desc: "",
    link: "https://cdn.pixabay.com/photo/2017/08/06/03/56/book-2588514_1280.jpg",
    understanding: 0
  },
  "blanket": {
    kana: "",
    romanji:"",
    desc: "",
    understanding: 0
  },
  "shower": {
    kana: "",
    romanji:"",
    desc: "",
    understanding: 0
  },
  "counter": {
    kana: "",
    romanji:"",
    desc: "",
    understanding: 0
  },
  "garbage can": {
    kana: "",
    romanji:"",
    desc: "",
    understanding: 0
  }
}
