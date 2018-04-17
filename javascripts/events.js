const theButtons = () => {
  const catButton = document.getElementById('cat-button');
  catButton.addEventListener('click', filterIt);
  const dogButton = document.getElementById('dog-button');
  dogButton.addEventListener('click', filterIt);
  const dinoButton = document.getElementById('dino-button');
  dinoButton.addEventListener('click', filterIt);
  const resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', resetFunction);
};

const filterIt = (e) => {
  const petTarget = e.target.parentNode.children[4].children;
  for (let i = 0; i < petTarget.length; i++) {
    if (e.target.id === 'cat-button' && petTarget[i].lastChild.innerHTML !== 'cat') {
      petTarget[i].classList.add('hide');
    } else {
      if (e.target.id === 'dog-button' && petTarget[i].lastChild.innerHTML !== 'dog') {
        petTarget[i].classList.add('hide');
      } else {
        if (e.target.id === 'dino-button' && petTarget[i].lastChild.innerHTML !== 'dino') {
          petTarget[i].classList.add('hide');
        }
      }
    }
  }
};

const resetFunction = (e) => {
  const petTarget = e.target.parentNode.children[4].children;
  for (let i = 0; i < petTarget.length; i++) {
    if (e.target.id === 'reset') {
      petTarget[i].classList.remove('hide');
    }
  }
};

module.exports = theButtons;
