var pg0 = document.getElementById("page0");
var pg1 = document.getElementById("page1");
var pg2 = document.getElementById("page2");

var lesson1 = document.getElementById("lessonPage1");

var currentLocation = location.hash;

function main() {
  location.hash = "#main";
}

function page1 () {
  location.hash = "#practice";
}

function page2 () {
  location.hash = "#learn";
}

function lessonPage1 () {
  location.hash = "#lessonHouse";
}

window.onhashchange = newPage;

function newPage() {
  if(location.hash === "#main" && location.hash !== currentLocation) {
    currentLocation = location.hash;

    pg0.style.visibility = "visible";
    pg1.style.visibility = "hidden";
    pg2.style.visibility = "hidden";
    lesson1.style.visibility = "hidden";
  }
  else if(location.hash === "#practice" && location.hash !== currentLocation) {
    currentLocation = location.hash;
    pg0.style.visibility = "hidden";
    pg1.style.visibility = "visible";
    pg2.style.visibility = "hidden";
    lesson1.style.visibility = "hidden";
  }
  else if(location.hash === "#learn" && location.hash !== currentLocation) {
    currentLocation = location.hash;
    pg0.style.visibility = "hidden";
    pg1.style.visibility = "hidden";
    pg2.style.visibility = "visible";
    lesson1.style.visibility = "hidden";
  }
  else if(location.hash === "#lessonHouse" && location.hash !== currentLocation) {
    currentLocation = location.hash;
    pg0.style.visibility = "hidden";
    pg1.style.visibility = "hidden";
    pg2.style.visibility = "hidden";
    lesson1.style.visibility = "visible";

    lesson1Init();
  }
}
