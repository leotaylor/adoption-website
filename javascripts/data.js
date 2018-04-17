const loadPets = require('./Pets');
const printToDom = require('./dom');
const buttons = require('./events');

let petsArray = [];

const whenPetsLoad = function () {
  petsArray = JSON.parse(this.responseText).pets;
  printToDom(petsArray);
  buttons();
};

const badPets = function () {
  console.error('you suck');
};

const initializer = () => {
  loadPets(whenPetsLoad, badPets);
};

const getPets = () => {
  return petsArray;
};

module.exports = {
  initializer,
  getPets,
};
