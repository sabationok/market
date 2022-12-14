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
  // let cardListArrayInText = filteredPostCardsDataArr.map(el =>
  //   createPostCardComp(el)
  // );
  let cardsListArrHBS = card(filteredPostCardsDataArr);
  console.log(cardsListArrHBS);
  
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
// ? Функція для створення картки
function createPostCardComp(cardInfoObject) {
  let {
    postId = '000-000000',
    postType = 'posttype',
    postName = 'postName',
    postid = 'postid',
    articul = '000000',
    price = 0,
    cashbackLvl = '00',
    currency = 'UAH',
    mainImgLink = './',
    socialsLinkList = [],
    ...others
  } = cardInfoObject;
  // let lookItemsListComp = createLookItemsListComp(lookItemsList);
  // let ImagesListComp = createSmallImgListComp(imagesList);
  // let lookDetailsTableComp = createDetailsTableComp(cardInfoObject);
  // let cardSocialsComp = createCardSocialsComp(socialsLinkList);

  return `
  <div class="card --3 js-post-card" data-card-id="${postId}">
    <div class="card --main">
      <!-- //* main image -->
      <div class="card-img__container" style="width: 100%; min-height: 320px">
        <img
          class="card__img"
          src="${mainImgLink}"
          width="480"
          alt=""
        />
      </div>

      <!-- //? img overlay -->
      <div class="card --main-overlay">
        <!-- //* деталі карти -->
        <button class="button --pull-img-overlay" type="button" data-action="showDetails" data-card-id="${postId}">Деталі
          <svg class="btn-svg">
            <use href="${sprite_market}#icon-list"></use>
          </svg>
        </button>
        <div class="card__img --overlay --left"></div>

        <!-- //* фотографії  -->
        <button class="button --pull-img-overlay" type="button"  data-action="showFotos" data-card-id="${postId}">Фото
          <svg class="btn-svg">
            <use href="${sprite_market}#icon-images"></use>
          </svg>
        </button>
        <div class="card__img --overlay --top"></div>

        <!-- //* розмірна сітка -->
        <button class="button --pull-img-overlay" type="button" data-action="showSizes" data-card-id="${postId}">Розміри
          <svg class="btn-svg">
            <use href="${sprite_market}#icon-table"></use>
          </svg>
        </button>
        <div class="card__img --overlay --right">Розміри</div>

        <!-- //* look -->
        <div class="card__img --overlay --center" data-markers-list="${postId}">
          <ul class="look__list  js-look-list" data-markers-list="${postId}">
          <!-- //*  -->
          </ul>
        </div>
        
      </div>
    </div>

    <div class="card__info">

      <div class="card__info-top">
        <div class="card__info-name-box">
          <p class="card__info-name">${postName}</p>
          <p class="card__info-sku">art${articul}</p>
        </div>

        <div class="card__actions-box">
          <button class="button --card-action" data-action="comment" data-card-id="${postId}">
            <svg class="btn-svg">
              <use href="${sprite_market}#icon-comment-o"></use>
            </svg>
          </button>
          <button class="button --card-action" data-action="like" data-card-id="${postId}">
            <svg class="btn-svg">
              <use href="${sprite_market}#icon-heart-o"></use>
            </svg>
          </button>
          <!-- data-action-save="${postId}"-->
          <button class="button --card-action" data-action="save" data-card-id="${postId}">
            <svg class="btn-svg">
              <use href="${sprite_market}#icon-bookmark-o"></use>
            </svg>
          </button>
          <button class="button --card-action" data-action="share" data-card-id="${postId}">
            <svg class="btn-svg">
              <use href="${sprite_market}#icon-share"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="card__timeToBuy">
        <!-- //* ціна і рівень кешбеку -->
        <div class="card__price-box">
          <p>
            <span class="card__price">${price}</span>
            <span class="card__currency">${currency}</span>
            <span class="card__cashback">v${cashbackLvl}</span>
          </p>
        </div>

        <!-- //* кнопки "Купити" і "Кошик" -->
        <div class="card__forBuyBtns-box">
          <button class="button --addToCart" type="button" data-action="buyLater" data-card-id="${postId}">
            <svg class="btn-svg">
              <use href="${sprite_market}#icon-shopping-cart"></use>
            </svg>
          </button>
          <button class="button --buyNow" type="button" data-action="buyNow" data-card-id="${postId}">
            Купити
          </button>
        </div>
      </div>

    </div>
  </div>
  `;
}
