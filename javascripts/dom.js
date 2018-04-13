const outputDiv = document.getElementById('pets');

const domString = (pets) => {
  let strang = '';
  pets.forEach((pet) => {
    strang += `<h2>${pet.name}</h2>`;
  });
  return strang;
};

const printToDom = (petsArray) => {
  outputDiv.innerHTML = domString(petsArray);
};

module.exports = printToDom;
