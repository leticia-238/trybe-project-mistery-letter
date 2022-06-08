const buttonCreateCard = document.querySelector('#criar-carta');
const generatedCard = document.querySelector('#carta-gerada');
const countCards = document.querySelector('#carta-contador');
const cardText = document.querySelector('#carta-texto');

const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotate = ['rotateleft', 'rotateright'];
const skew = ['skewleft', 'skewright'];

const randomNumber = (max) => Math.floor(Math.random() * max);

const selectStyles = () => {
  const groupsOfStyles = [style, size, rotate, skew];
  const usedStyles = [];
  groupsOfStyles.forEach((groupOfStyle) => {
    const styleIndex = randomNumber(groupOfStyle.length);
    usedStyles.push(groupOfStyle[styleIndex]);
  });
  return usedStyles.join(' ');
};

const changeCardStyle = (event) => {
  const card = event.target;
  card.className = selectStyles();
};

const createCard = (words) => {
  countCards.innerText = words.length;
  words.forEach((element) => {
    const word = element;
    const wordBox = document.createElement('span');
    wordBox.innerText = word;
    wordBox.className = selectStyles();
    wordBox.addEventListener('click', changeCardStyle);
    generatedCard.appendChild(wordBox);
  });
};

const validateInput = () => {
  const words = cardText.value.trim();
  if (words.length) {
    generatedCard.innerHTML = '';
    createCard(words.split(' '));
  } else {
    generatedCard.innerText = 'Por favor, digite o conteúdo da carta.';
  }
};

buttonCreateCard.addEventListener('click', validateInput);
