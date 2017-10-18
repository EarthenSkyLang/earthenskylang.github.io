//Word/Translation/Romanji
//i.e. car/車/kuruma
//becomes:
//
// "Word": "Translation"
// "Word*": "Romanji"

function getJpWord(en) {
  return words[en];
}

function getRomanji(en) {
  return words[en + "*"];
}

var words = {
  "book": "本",
  "book*": "hon",
}
