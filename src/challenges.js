// Desafio 1
const compareTrue = (value1, value2) => (value1 && value2 ? true : false);

// Desafio 2

const calcArea = (base, height) => ((base * height) / 2);

// Desafio 3

const splitSentence = (phrase) => (phrase.split(' '));

// Desafio 4
let comma = ', ';
const concatName = (array) =>
  (array[array.length - 1] + comma + array[0]);

// Desafio 5
const footballPoints = (wins, ties) => ((ties + wins * 3));

// Desafio 6
function highestCount(array) {
  let repeatTimes = 0;
  let highestNumber = array[0];

  for (let num = 0; num < array.length; num += 1) {
    if (array[num] >= highestNumber) {
      highestNumber = array[num];
    }
  }
  
  for (let numCont = 0; numCont < array.length; numCont += 1) {
    if (highestNumber === array[numCont]) {
      repeatTimes += 1;
    }
  }
  return repeatTimes;
}

// Desafio 7
function catAndMouse(mousePosition, cat1Position, cat2Position) {
  let cat1Distance = mousePosition - cat1Position;
  let cat2Distance = mousePosition - cat2Position;
  let cat1DistanceABS = Math.abs(cat1Distance);
  let cat2DistanceABS = Math.abs(cat2Distance);

  if (cat1DistanceABS > cat2DistanceABS) {
    return 'cat2';
  }
  if (cat2DistanceABS > cat1DistanceABS) {
    return 'cat1';
  }
  if (cat1DistanceABS === cat2DistanceABS) {
    return 'os gatos trombam e o rato foge';
  }
}

// Referência utilizada para resolução

// 1. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
// 2. https://acervolima.com/metodo-javascript-math-abs/

// Desafio 8
function fizzBuzz(numbers) {
  let array = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      array.push('fizzBuzz');
    } else if (numbers[i] % 3 === 0) {
      array.push('fizz');
    } else if (numbers[i] % 5 === 0) {
      array.push('buzz');
    } else {
      array.push('bug!');
    }
  }
  return array;
}

// Desafio 9
function encode(string) {
  let encodeString = '';

  for (let en = 0; en < string.length; en += 1) {
    if (string[en] === 'a') {
      encodeString += 1;
    } else if (string[en] === 'e') {
      encodeString += 2;
    } else if (string[en] === 'i') {
      encodeString += 3;
    } else if (string[en] === 'o') {
      encodeString += 4;
    } else if (string[en] === 'u') {
      encodeString += 5;
    } else {
      encodeString += string[en];
    }
  }
  return encodeString;
}

function decode(secondString) {
  let decString = '';

  for (let dec = 0; dec < secondString.length; dec += 1) {
    if (secondString[dec] == 1) {
      decString += 'a';
    } else if (secondString[dec] == 2) {
      decString += 'e';
    } else if (secondString[dec] == 3) {
      decString += 'i';
    } else if (secondString[dec] == 4) {
      decString += 'o';
    } else if (secondString[dec] == 5) {
      decString += 'u';
    } else {
      decString += secondString[dec];
    }
  }
  return decString;
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
