import { autorsListData } from './js-data/autorsList';
import { postsListData } from './js-data/postsList';
import sprite_market from './images/sprite_market.svg';

// console.log('Список авторів', autorsListData);
// console.log(postsListData);

// todo Обєкт яккий потрібно вставити у функцію для створення сторінки
let Obj = {
  sectionClass: '.js-postList',
  autorsArr: autorsListData,
  postCardsDataArr: postsListData,
};

// ? Запуск фунції
createautorsZone(Obj);
// * ===== створюємо сторінку публікацій
function createautorsZone(pageObject) {
  let {
    sectionClass = '',
    autorsArr = [],
    postCardsDataArr = [],
    ...others
  } = pageObject;

  // * Куди саме вставляти
  let pageContainerEl = document.querySelector(sectionClass);
  // * Готова для вставки початкова сторінка, далі тільки доповнювати
  let allInText = autorsArr
    .map(el => createAutorEl(el, postCardsDataArr))
    .join('');

  // * ===== Вставляю все що створене на сторінку
  pageContainerEl.insertAdjacentHTML('afterbegin', allInText);
}

// * ===== створюю одного публікатора
function createAutorEl(autorDataObject, postCardsDataArr) {
  let {
    autorId = 'autorId',
    autorName = 'autorName',
    autorlogoLink = 'LOGO',
    autorType = 'autorType',
    autorPostCardsIdList = [],
    ...others
  } = autorDataObject;
  // * Змінна у якій зберігаються пости автора відфільтровані із загальної бази
  const filteredPostCardsDataArr = [];

  // * Фільтруємо загальний масив на основі списку постів автора
  filterArrByArr(autorPostCardsIdList, postCardsDataArr);
  function filterArrByArr(postsArray, arrayForFinding) {
    // * Проміжний результат зберігається тут
    let foundedPost = {};
    for (let i = 0; i < postsArray.length; i += 1) {
      foundedPost = arrayForFinding.find(post => post.postId === postsArray[i]);

      // todo Перевірка
      if (foundedPost !== undefined) {
        filteredPostCardsDataArr.push(foundedPost);
      }
    }
  }

  // todo ===== Тут зберігається шаблон усього списку постів готовий для вставки
  let cardListArrayInText = filteredPostCardsDataArr.map(el =>
    createPostCardComp(el)
  );

  return `
  <div class="section__autorTop">
    <div class="slick__container">
      <div class="autorZone__header">
        <a class="autorZone__logoBox" href=""> 
          <img class="autorZone__logoImg" src="${autorlogoLink}" alt="${autorName} logo" >
        </a>
        <div class="autorZone__autorInfo">
          <span  class="autorZone__autorName">
            ${autorName}
          </span>
          <ul class="autorZone__autorInfo-list">
            <li>Повна назва: ${autorName}</li>
            <li>Тип: ${autorType}</li>
            <li>ID: ${autorId}</li>
          </ul>
        </div>
        
        <button class="button --open-autorCardList" data-show-all-cards="${autorId}">
          <svg class="btn-svg">
            <use href="${sprite_market}#icon-menu-3"></use>
          </svg>
        </button>
      </div>
      <div class="slick__brands-slider" data-autor-id="${autorId}" data-autor-type="${autorType}">
        ${cardListArrayInText}
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
    postAutorId = 'postAutorId',
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
  <div class="card --3 js-post-card" data-post-id="${postId}">
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
      <div class="card --main--overlay">
        <!-- //* деталі карти -->
        <button class="button --pull-img-overlay" type="button" data-show-details="${postId}">Деталі
          <svg class="btn-svg">
            <use href="${sprite_market}#icon-list"></use>
          </svg>
        </button>
        <div class="card__img --overlay --left">
          ${'lookDetailsTableComp'}
          
          <ul class="card__social-list">
            ${'cardSocialsComp'}
          </ul>
        </div>

        <!-- //* фотографії  -->
        <button class="button --pull-img-overlay" type="button"  data-show-fotos="${postId}">Фото
          <svg class="btn-svg">
            <use href="${sprite_market}#icon-images"></use>
          </svg>
        </button>
        <div class="card__img --overlay --top">
          <ul class="card__imgslist">
            ${'ImagesListComp'}
          </ul>
        </div>

        <!-- //* розмірна сітка -->
        <button class="button --pull-img-overlay" type="button" data-show-sizes="${postId}">Розміри
          <svg class="btn-svg">
            <use href="${sprite_market}#icon-table"></use>
          </svg>
        </button>
        <div class="card__img --overlay --right">
          Розміри
        </div>

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
          <button class="button --card-action" data-action-comment="${postId}">
            <svg class="btn-svg">
              <use href="${sprite_market}#icon-comment-o"></use>
            </svg>
          </button>
          <button class="button --card-action" data-action-like="${postId}">
            <svg class="btn-svg">
              <use href="${sprite_market}#icon-heart-o"></use>
            </svg>
          </button>
          <button class="button --card-action" data-action-save="${postId}">
            <svg class="btn-svg">
              <use href="${sprite_market}#icon-bookmark-o"></use>
            </svg>
          </button>
          <button class="button --card-action" data-action-share="${postId}">
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
          <button class="button --addToCart" type="button" data-buy-later="${postId}">
            <svg class="btn-svg">
              <use href="${sprite_market}#icon-shopping-cart"></use>
            </svg>
          </button>
          <button class="button --buyNow" type="button" data-buy-now="${postId}">
            Купити
          </button>
        </div>
      </div>

    </div>
  </div>
  `;
}

// ? Функція для створення соціальних лінків
function createCardSocialsComp(socialsLinkList) {
  let {
    instagramLink = '',
    pinterestLink = '',
    youTubeLink = '',
    tikTokLink = '',
    ...otherLinks
  } = socialsLinkList;
  return `
  <li class="card__social-item">
    <a class="card__social-link" href="${instagramLink}">
      <svg class="link-svg">
        <use href="${sprite_market}#icon-instagram-1"></use>
      </svg>
    </a>
  </li>
  <li class="card__social-item">
    <a class="card__social-link" href="${pinterestLink}">
      <svg class="link-svg">
        <use href="${sprite_market}#icon-pinterest2"></use>
      </svg>
    </a>
  </li>
  <li class="card__social-item">
    <a class="card__social-link" href="${tikTokLink}">
      <svg class="link-svg">
        <use href="${sprite_market}#icon-tiktok"></use>
      </svg>
    </a>
  </li>
  <li class="card__social-item">
    <a class="card__social-link" href="${youTubeLink}">
      <svg class="link-svg">
        <use href="${sprite_market}#icon-youtube-play"></use>
      </svg>
    </a>
  </li>
  `;
};
