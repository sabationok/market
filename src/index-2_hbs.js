import { authorsListData } from './js-data/autorsList';
import { postsListData } from './js-data/postsList';
import sprite_market from './images/sprite_market.svg';

import autor from './hbs/autor.hbs';
import card from './hbs/card.hbs';
import plugins from './js/plugins';

// console.log(postsListData.length);
// console.log('Список авторів', authorsListData);
// console.log(postsListData);

let refs = {
  authorElmsArr: null,
};
// * Обєкт яккий потрібно вставити у функцію для створення сторінки
let Obj = {
  sectionClass: '.js-postList',
  authorsArr: authorsListData,
  postCardsDataArr: postsListData,
};
// ? Запуск фунції
// creatAautorsZone(Obj);
createAuthorsZone(Obj);
// * ===== створюємо сторінку публікацій
function createAuthorsZone(pageObject) {
  let {
    sectionClass = '',
    authorsArr = [],
    postCardsDataArr = [],
    ...others
  } = pageObject;

  // * Куди саме вставляти
  let pageContainerEl = document.querySelector(sectionClass);
  // * Готова для вставки початкова сторінка, далі тільки доповнювати
  let allAuthorsInText = authorsArr
    .map(el => createAutorEl(el, postCardsDataArr))
    .join('');

  // let allAuthorsInText_HBS = authorsArr.map(el => autor(el)).join('');
  // console.log(allAuthorsInText_HBS);
  // * ===== Вставляю все що створене на сторінку
  pageContainerEl.insertAdjacentHTML('afterbegin', allAuthorsInText);
}
// * ===== створюю одного публікатора
function createAutorEl(autorDataObject, postCardsDataArr) {
  let {
    id = 'authorId',
    name = 'authorName',
    logoLink = 'LOGO',
    type = 'autorType',
    top5Cards = [],
    ...others
  } = autorDataObject;
  // * Змінна у якій зберігаються пости автора відфільтровані із загальної бази
  const filteredPostCardsDataArr = [];
  // * Фільтруємо загальний масив на основі списку постів автора
  filterArrByArr(
    top5Cards,
    postCardsDataArr,
    filteredPostCardsDataArr,
    'postId'
  );

  //* Функція яка фільтрує масив згідно масиву, по ID картки
  function filterArrByArr(
    autorPostCardsArr = [],
    arrayForFinding = [],
    arrayForPushing = [],
    param
  ) {
    // * Проміжний результат зберігається тут
    let foundedPost = {};
    for (let i = 0; i < autorPostCardsArr.length; i += 1) {
      foundedPost = arrayForFinding.find(
        el => el[param] === autorPostCardsArr[i]
      );

      // * Перевірка
      if (foundedPost !== undefined) {
        arrayForPushing.push(foundedPost);
      }
    }
  }

  // * Тут зберігається шаблон усього списку постів готовий для вставки
  let cardsListArrHBS = card(filteredPostCardsDataArr);

  return `
  <div class="section__autorTop js-autor">
    <div class="slick__container">
      <div class="autorZone__header">
        <a class="autorZone__logoBox" href=""> 
          <img class="autorZone__logoImg" src="${logoLink}" alt="${name} logo" >
        </a>
        <div class="autorZone__autorInfo">
          <span  class="autorZone__name">
            ${name}
          </span>
          <ul class="autorZone__autorInfo-list">
            <li>Повна назва: ${name}</li>
            <li>Тип: ${type}</li>
            <li>ID: ${id}</li>
          </ul>
        </div>
        
        <button class="button --open-autorCardList" id="${id}" data-author-id="${id}" data-action="showAuthorsCards">
          <svg class="btn-svg">
            <use href="${sprite_market}#icon-menu-3"></use>
          </svg>
        </button>
      </div>
      <div class="slick__brands-slider" data-autor-id="${id}" data-autor-type="${type}">
        ${cardsListArrHBS}
      </div>
    </div>
  </div>
  `;
}
