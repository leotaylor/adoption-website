const outputDiv = document.getElementById('pets');
// const events = require('./events');

const domString = (pets) => {
  let strang = '';
  pets.forEach((pet) => {
    strang +=   `<div id='petcard' class='col-md-3 ${pet.type}'>`;
    strang +=     `<h2>${pet.name}</h2>`;
    strang +=    `<img src="${pet.imageUrl}">`;
    strang +=     `<h3>${pet.color}</h3>`;
    strang +=     `<p>${pet.specialSkill}</p>`;
    strang +=     `<h2 class='type'>${pet.type}</h2>`;
    strang +=   `</div>`;
  });
  return strang;
};

const printToDom = (petParameter) => {
  outputDiv.innerHTML = domString(petParameter);
};

module.exports = printToDom;
