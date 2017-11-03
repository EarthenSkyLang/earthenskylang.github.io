var inputElement;
var textElement;
var nextElement;

var list;

var currentWord = 0;

function lessonStart() {
  var toDestroy = document.getElementById("startButton");
  toDestroy.parentNode.removeChild(toDestroy);

  /*needed? vvv*/
  nextElement.style.visibility = "hidden";
  inputElement.style.visibility = "hidden";

  currentWord = 0;

  teachWord(currentWord);
}

var wordsList;
function teachWord() {
  textElement.innerHTML = wordsList[currentWord] + " -> " + getHouseWord(wordsList[currentWord]).kana + " -> " + getHouseWord(wordsList[currentWord]).romanji + "</br>" + getHouseWord(wordsList[currentWord]).desc;

  inputElement.style.visibility = "hidden";
  nextElement.style.visibility = "visible";

  nextElement.onclick = repeatWord;
}

//this didnt build for some reason

var pictureWord;
function repeatWord() {
  //load 4 random pictures (make sure no duplicates)
  do {
    wordPic1 = getRandomHouseNumber();
  } while(wordPic1 === currentWord)

  do {
    wordPic2 = getRandomHouseNumber();
  } while(wordPic2 === currentWord)

  do {
    wordPic3 = getRandomHouseNumber();
  } while(wordPic3 === currentWord)

  do {
    wordPic4 = getRandomHouseNumber();
  } while(wordPic4 === currentWord)

  //make one of them correct
  var randomPic = Math.floor((Math.random() * 4));
  if(randomPic == 0) {
    wordPic1 = currentWord;
  } else if(randomPic == 1) {
    wordPic2 = currentWord;
  } else if(randomPic == 2) {
    wordPic3 = currentWord;
  } else if(randomPic == 3) {
    wordPic4 = currentWord;
  }

  inputElement.getElementsByClassName("img1")[0].src = getHouseWord(wordsList[wordPic1]).link;
  inputElement.getElementsByClassName("img1Text")[0].innerHTML = wordsList[wordPic1];

  inputElement.getElementsByClassName("img2")[0].src = getHouseWord(wordsList[wordPic2]).link;
  inputElement.getElementsByClassName("img2Text")[0].innerHTML = wordsList[wordPic2];

  inputElement.getElementsByClassName("img3")[0].src = getHouseWord(wordsList[wordPic3]).link;
  inputElement.getElementsByClassName("img3Text")[0].innerHTML = wordsList[wordPic3];

  inputElement.getElementsByClassName("img4")[0].src = getHouseWord(wordsList[wordPic4]).link;
  inputElement.getElementsByClassName("img4Text")[0].innerHTML = wordsList[wordPic4];

  textElement.innerHTML = "What is " + getHouseWord(wordsList[currentWord]).kana + " (" + getHouseWord(wordsList[currentWord]).romanji + ") in english."

  inputElement.style.visibility = "visible";
  nextElement.style.visibility = "hidden";

  //inputElement.onclick = checkCorrectAnswer;
  nextElement.onclick = null;
}

//gives checkCorrectAnswer() the value each thing is associated with.
var wordPic1 = "";
function onClickPicture1() {
  checkCorrectAnswer(wordPic1);
}

var wordPic2 = "";
function onClickPicture2() {
  checkCorrectAnswer(wordPic2);
}

var wordPic3 = "";
function onClickPicture3() {
  checkCorrectAnswer(wordPic3);
}

var wordPic4 = "";
function onClickPicture4() {
  checkCorrectAnswer(wordPic4);
}

function checkCorrectAnswer(guessWord) {
  if(guessWord === currentWord) {
    currentWord++;
    teachWord();
  }
  else {
    repeatWord();
  }
}
