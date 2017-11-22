var inputElement;
var textElement;
var nextElement;

var list;

var currentWord = 0;

function hideElements() {
  nextElement.style.visibility = "hidden";
  inputElement.style.visibility = "hidden";
}

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
  } while(wordPic2 === currentWord || wordPic2 === wordPic1)

  do {
    wordPic3 = getRandomHouseNumber();
  } while(wordPic3 === currentWord || wordPic3 === wordPic2 || wordPic3 === wordPic1)

  do {
    wordPic4 = getRandomHouseNumber();
  } while(wordPic4 === currentWord || wordPic4 === wordPic3 || wordPic4 === wordPic2 || wordPic4 === wordPic1)

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

  inputElement.getElementsByClassName("img1")[0].src = "resources/pictures/" + wordsList[wordPic1] + ".jpg";
  inputElement.getElementsByClassName("img1Text")[0].innerHTML = wordsList[wordPic1];

  inputElement.getElementsByClassName("img2")[0].src = "resources/pictures/" + wordsList[wordPic2] + ".jpg";
  inputElement.getElementsByClassName("img2Text")[0].innerHTML = wordsList[wordPic2];

  inputElement.getElementsByClassName("img3")[0].src = "resources/pictures/" + wordsList[wordPic3] + ".jpg";
  inputElement.getElementsByClassName("img3Text")[0].innerHTML = wordsList[wordPic3];

  inputElement.getElementsByClassName("img4")[0].src = "resources/pictures/" + wordsList[wordPic4] + ".jpg";
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
  imgNum = 1;
  checkCorrectAnswer(wordPic1);
}

var wordPic2 = "";
function onClickPicture2() {
  imgNum = 2;
  checkCorrectAnswer(wordPic2);
}

var wordPic3 = "";
function onClickPicture3() {
  imgNum = 3;
  checkCorrectAnswer(wordPic3);
}

var wordPic4 = "";
function onClickPicture4() {
  imgNum = 4;
  checkCorrectAnswer(wordPic4);
}

//sets the background colour of all boxes to white.
function resetImgColours() {
  inputElement.getElementsByClassName("img" + 1)[0].style.background = "#fff";
  inputElement.getElementsByClassName("img" + 2)[0].style.background = "#fff";
  inputElement.getElementsByClassName("img" + 3)[0].style.background = "#fff";
  inputElement.getElementsByClassName("img" + 4)[0].style.background = "#fff";
  checkingAnswer = false;
}

var imgNum;
var checkingAnswer = false;
function checkCorrectAnswer(guessWord) {
  if(checkingAnswer === false) {
    checkingAnswer = true;

    if(guessWord === currentWord) {
      inputElement.getElementsByClassName("img" + imgNum)[0].style.background = "springGreen";
      currentWord++;
      setTimeout(teachWord, 1000);
      setTimeout(resetImgColours, 1000);
    }
    else {
      inputElement.getElementsByClassName("img" + imgNum)[0].style.background = "red";
      setTimeout(repeatWord, 500);  //if someone got it wrong they need *fast* feedback. (500 < 1000)
      setTimeout(resetImgColours, 500);
    }
  }
}
