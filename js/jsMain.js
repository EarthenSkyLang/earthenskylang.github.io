var levelText = document.getElementById("lvl");
var currentLevel = 0;

function start() {
  console.log("hi, よ!");
  location.hash = "#main";

}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        incLvl(1);
    }
    else if(event.keyCode == 39) {
        incLvl(-1);
    }
});

function incLvl(val) {
  currentLevel += val;
  levelText.innerHTML = "level: " + currentLevel;
}
