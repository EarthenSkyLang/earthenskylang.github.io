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

function repeatWord() {
  inputElement.getElementsByClassName("img1")[0].src = getHouseWord(wordsList[currentWord]).link;
  inputElement.getElementsByClassName("img1Text")[0].innerHTML = wordsList[currentWord];

  textElement.innerHTML = "What is " + getHouseWord(wordsList[currentWord]).kana + " (" + getHouseWord(wordsList[currentWord]).romanji + ") in english."

  inputElement.style.visibility = "visible";
  nextElement.style.visibility = "hidden";

  inputElement.onclick = checkCorrectAnswer;
}

function checkCorrectAnswer() {
  var answerCorrect = false;

  if(answerCorrect === true) {
    currentWord++;
    teachWord();
  }
  else {
    repeatWord();
  }
}
