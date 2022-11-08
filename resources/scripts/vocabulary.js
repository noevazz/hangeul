const okButton = document.getElementById('ok');
const blackBack = document.getElementById('blackBack');
const dialogElement = document.getElementById('dialogElement');


let index = 0;
vocabularyKor = [
  "아이",
  "오이",
  "여우",
  "우유",
  "요요",
  "이"
];
vocabularyEn = [
  "child",
  "cucumber",
  "fox",
  "milk",
  "yoyo",
  "tooth or two"
]
let answer = vocabularyKor[index].ko;

function returnDifferentValue(arrayOptions) {
  let differentValue = vocabularyKor[Math.floor(Math.random()*vocabularyKor.length)];
  for(let i=0; i<arrayOptions.length; i++){
    if (differentValue===arrayOptions[i]){
      differentValue = vocabularyKor[Math.floor(Math.random()*vocabularyKor.length)];
      i = 0;
    }
  }
  return differentValue;
}

function setOptions() {
  let options = [-1,-1,-1]
  answer = vocabularyKor[index];
  options[0] = answer;
  options[1] = returnDifferentValue(options);
  options[2] = returnDifferentValue(options);
  options = options.sort((a, b) => 0.5 - Math.random());
  console.log(options);
  for (let i=0; i<3; i++){
    document.getElementById(`img${i+1}`).src = `./resources/media/${vocabularyEn[options.findIndex((element) => element  === options[i])]}.png`
  }
}



function checkAnswer(obj) {
  console.log(obj.id);
  console.log(obj.children[0].id);
}

okButton.addEventListener('click', ()=>{
    blackBack.style.display = 'none';
    dialogElement.style.display = 'none';
});