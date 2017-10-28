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
function teachWord(index) {
  textElement.innerHTML = wordsList[index] + " -> " + getHouseWord(wordsList[index]).kana + " -> " + getHouseWord(wordsList[index]).romanji + "</br>" + getHouseWord(wordsList[index]).desc;
  nextElement.style.visibility = "visible";
  nextElement.onclick = repeatWord(currentWord);
}

function repeatWord(index) {
  textElement.innerHTML = wordsList[index] + " -> " + getHouseWord(wordsList[index]).kana + " -> " + getHouseWord(wordsList[index]).romanji + "</br>" + getHouseWord(wordsList[index]).desc;
  nextElement.style.visibility = "visible";

  if(checkCorrectAnswer(++currentWord) === true) {
    teachWord(++currentWord);
  }
  else {
    repeatWord(++currentWord);
  }
}

function checkCorrectAnswer() {

}
