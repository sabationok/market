// ! Аля база даних із масивом обєктів у яких вся інформація про луки стилістів або брендів
let postDataArray = [
  {
    publicatorInfo: {
      publicatorLogoImgLink: '',
      publicatorType: 'styleMaker',
      publicatorName: 'Галя Черепиця Стайл',
      publicatorId: '324',
      publicatorLink: '',
    },
    postInfo: {
      postId: 10000045,
      postType: 'look',
      name: '"Брутал"',
      articul: '945918',
      price: 5582,
      cashbackLvl: '03',
      currency: 'UAH',

      section: 'Луки',
      mainCategory: '',
      category: '',
      availbility: '',
      stock: 0,
      style: 'Casual',
      manufacturingTime: '',
    },
    imagesList: {
      imageUrl_main:
        'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_rozeva_br2.webp',
      imageUrl_main_2x: '',
    },
    sizesTable: {},
    lookItemsList: [
      {
        publicatorInfo: {
          publicatorLogoImgLink: '',
          publicatorType: 'Бренд',
          publicatorName: 'Wanted by Men',
          publicatorId: '217',
        },
        itemInfo: {
          postId: 10000079,
          postType: 'look',
          name: '"Куртка"',
          articul: '9459458',
          price: 2582,
          cashbackLvl: '02',
          currency: 'UAH',

          section: 'Одяг',
          mainCategory: 'Куртки',
          category: 'Куртки із хутром',
          availbility: 'У наявностя',
          stock: 5,
          style: 'Casual',
          manufacturingTime: '',
        },
        imagesList: {
          imageUrl_main: '',
          imageUrl_main_2x: '',
        },
        lookItemsList: {},
        sizesTable: {},
      },
      {
        publicatorInfo: {
          publicatorLogoImgLink: '',
          publicatorType: 'Бренд',
          publicatorName: 'Wanted by Men',
          publicatorId: '217',
        },
        itemInfo: {
          postId: 10000045,
          postType: 'look',
          name: '"Куртка"',
          articul: '9459458',
          price: 2582,
          cashbackLvl: '02',
          currency: 'UAH',
          section: 'Одяг',
          mainCategory: 'Куртки',
          category: 'Джинси чорні',
          availbility: 'У наявностя',
          stock: 2,
          style: 'Casual',
          manufacturingTime: '',
        },
        imagesList: {
          imageUrl_main: '',
          imageUrl_main_2x: '',
        },
        lookItemsList: {},
        sizesTable: {},
      },
    ],
  },
  {
    publicatorInfo: {
      publicatorLogoImgLink: '',
      publicatorType: 'brand',
      publicatorName: 'Celebrity',
      publicatorId: '842',
      publicatorLink: '',
    },
    postInfo: {
      postId: 10000065,
      postType: 'look',
      name: '"Брутал"',
      articul: '945918',
      price: 2582,
      cashbackLvl: '03',
      currency: 'UAH',

      section: 'Луки',
      mainCategory: '',
      category: '',
      availbility: '',
      stock: 0,
      style: 'Casual',
      manufacturingTime: '',
    },
    imagesList: {
      imageUrl_main:
        'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_rozeva_br2.webp',
      imageUrl_main_2x: '',
    },
    sizesTable: {},
    lookItemsList: [
      {
        publicatorInfo: {
          publicatorLogoImgLink: '',
          publicatorType: 'Бренд',
          publicatorName: 'Wanted by Men',
          publicatorId: '217',
        },
        itemInfo: {
          postId: 10000015,
          postType: 'look',
          name: '"Куртка"',
          articul: '9459458',
          price: 2582,
          cashbackLvl: '02',
          currency: 'UAH',

          section: 'Одяг',
          mainCategory: 'Куртки',
          category: 'Куртки із хутром',
          availbility: 'У наявностя',
          stock: 5,
          style: 'Casual',
          manufacturingTime: '',
        },
        imagesList: {
          imageUrl_main: '',
          imageUrl_main_2x: '',
        },
        lookItemsList: {},
        sizesTable: {},
      },
      {
        publicatorInfo: {
          publicatorLogoImgLink: '',
          publicatorType: 'Бренд',
          publicatorName: 'Wanted by Men',
          publicatorId: '217',
        },
        itemInfo: {
          postId: 10000025,
          postType: 'look',
          name: '"Куртка"',
          articul: '9459458',
          price: 2582,
          cashbackLvl: '02',
          currency: 'UAH',
          section: 'Одяг',
          mainCategory: 'Куртки',
          category: 'Джинси чорні',
          availbility: 'У наявностя',
          stock: 2,
          style: 'Casual',
          manufacturingTime: '',
        },
        imagesList: {
          imageUrl_main: '',
          imageUrl_main_2x: '',
        },
        lookItemsList: {},
        sizesTable: {},
      },
    ],
  },
];
// ? Обєкт яккий потрібно вставити у функцію для створення сторінки
let Obj = {
  classForMakeList: '.js-postList',
  pageData: postDataArray,
};
createPublicatorsZone(Obj);
function createPublicatorsZone(pageObject) {
  let { classForMakeList, pageData } = pageObject;
  let pageContainerEl = document.querySelector(classForMakeList);
  console.log(pageContainerEl);

  // todo ===== Створю зону для публікатора
//   let {
//     publicatorInfo: { publicatorType, publicatorName, publicatorId },
//   } = pageData;

  pageContainerEl.insertAdjacentHTML(
    'afterbegin',
    pageData.map(el => createPublicatorZoneEl(el))
  );
}
function createPublicatorZoneEl(publicatorObject) {
  let {
    publicatorInfo: {
      publicatorId = 0,
      publicatorName = 'publicatorName',
      publicatorLogoImgLink = '',
      publicatorType = null,
      publicatorLink = '',
    },
    ...others
  } = publicatorObject;
  return `
  <div class="container__market">
    <div class="slick__container">
      <div class="vendor-zone__header">
        <div class="vendor-zone__logo">
        <img src="${publicatorLogoImgLink}" alt="${publicatorName} logo" width="64px" height="36px">
        </div>
        <span class="vendor-zone__brand-name">${publicatorName} <span class="">(stl${publicatorId})</span></span>
      </div>
      <div class="slick__brands-slider js-styleMaker" data-publicatorId="${publicatorId}" data-publicatorType="${publicatorType}">
  
      </div>
    </div>
  </div>
  `;
}

const styleMakersListArray = styleMakersList.map((el, idx, arr) => {
  return createBrandsSection(el);
});

// ? Функція для створення картки товару
function creatPostCard(cardInfoObject) {
  let {
    id = '---------',
    name = '---------',
    articul = '---------',
    price = '------.--',
    currency = '---',
    cashbackLvl = '--',
    publicatorType = '---',
    publicatorName = '---',
    publicatorId = '----',
    brandName = '-----',
    brandCode = '----',
    section = '---',
    mainCategory = '---',
    category = '---',
    availbility = '---',
    stock = '-----',
    manufacturingTime = '---',
    imagesList,
    socialLinksList = {},
    imagesList: { imageUrl_main = './', ...othersImg },
    lookItemsList,
    ...otherInfo
  } = cardInfoObject;
  // *
  let lookItemsListComp = createLookItemsListComp(lookItemsList);
  let ImagesListComp = createSmallImgListComp(imagesList);
  let lookDetailsTableComp = createDetailsTableComp(cardInfoObject);
  let cardSocialsComp = createCardSocialsComp(socialLinksList);
  return `
  <div class="product-card --1" data-internalId="${id}">
    <div class="product-card__top">
      <div>
        <p class="product-card__name">${name}</p>
        <p class="product-card__sku">art${articul}</p>
      </div>
    </div>
  
    <div class="card --main">
  
      <!-- //* main image -->
      <div class="card-img__container" width="480" height="640">
        
        <img
          class="card__img"
          src="${imageUrl_main}"
          width="480"
          alt=""
        />
      </div>
  
      <!-- //? img overlay --> 
      <!-- //* деталі карти --> 
      <div class="card --main--overlay">
        <button class="button --pull-img-overlay" type="button">Деталі
        <svg class="svg">
          <use href="/https://github.com/sabationok/market__test/blob/gh-pages/sprite_market.a3358b13.svg#icon-list"></use>
        </svg>
        </button>
        <div class="product-card__img --overlay --left">
          ${lookDetailsTableComp}
        </div>
  
        <!-- //* фотографії  --> 
        <button class="button --pull-img-overlay" type="button">Фото
          <svg class="svg">
            <use href="/https://github.com/sabationok/market__test/blob/gh-pages/sprite_market.a3358b13.svg#icon-images"></use>
          </svg>
        </button>
        <div class="product-card__img --overlay --top">
          <ul class="card__imgslist">
            ${ImagesListComp}
          </ul>
        </div>
  
        <!-- //* розмірна сітка -->
        <button class="button --pull-img-overlay" type="button">Розміри
          <svg class="svg">
            <use href="/https://github.com/sabationok/market__test/blob/gh-pages/sprite_market.a3358b13.svg#icon-table"></use>
          </svg>
        </button>
        <div class="product-card__img --overlay --right">
          Розміри
        </div>
        
        <!-- //* look -->
        <div class="product-card__img --overlay --center">
          <ul class="look__list  js-look-list">
          ${lookItemsListComp}
          </ul>
        </div>
  
      </div>
    </div>
  
    <div class="product-card__bottom">
  
      <div class="product-card__wrapper">
        <div>
          <p class="product-card__price">${price}${currency}</p>
          <p class="product-card__cashback">v${cashbackLvl} * * *</p>
        </div>
  
        <!-- //* кнопки "Купити" і "Кошик" -->
        <div class="card__buttons-box">
          <button class="button --to-cart" type="button" data-cardId="${id}">
            <svg class="btn-svg">
              <use href="/https://github.com/sabationok/market__test/blob/gh-pages/sprite_market.a3358b13.svg#icon-shopping-cart"></use>
            </svg>
          </button>
          <button class="button --buy-now" type="button" data-cardId="${id}">
            Купити
          </button>
        </div>
      </div>
  
      <!-- //* Соціальні посилання та дії -->
      <ul class="card__social-list">
        ${cardSocialsComp}
      </ul>
  
    </div>
  </div>
  `;
}
// ? функція для ств орення списку маркерів.
/*function createLookItemsListComp(lookItemsList) {
  return lookItemsList
    .map(el => {
      return createLookItemComp(el);
    })
    .join('');
}*/
// ? Функція для створення  одного маркера із обєкта який містить інфу про нього
/*function createLookItemComp(marker) {
  let {
    itemId = '1',
    itemLink = './',
    itemName = 'name',
    itemPrice = '0',
    itemCurrency = 'UAH',
    itemPosTop = '25%',
    itemPosLeft = '50%',
    ...others
  } = marker;
  return `
  <li class="look__marker" style="top:${itemPosTop}; left:${itemPosLeft}">
    <div class="look__link-box">
      <a class="look__link" href="${itemLink}"
        >${itemName}
        <span class="look__item-price">${itemPrice}${itemCurrency}</span>
      </a>
    </div>
  </li>
  `;
}*/
// ? Функція для створення вкладки "ФОТО". список додадкових зображень (список на 6 зображень)
// ! підлягає рефакторингу і вдосконаленню для розміщення зображень для різних типів екранів. По аналогії до створення списку маркерів луків
/*function createSmallImgListComp(imagesList) {
  let {
    imageUrl_1 = './',
    imageUrl_2 = './',
    imageUrl_3 = './',
    imageUrl_4 = './',
    imageUrl_5 = './',
    imageUrl_6 = './',
    ...othersImg
  } = imagesList;
  return `
  <li class="card__imgsList-Item">
    <img
        class="card__img-small"
        src="${imageUrl_1}"
        alt=""
      />
  </li>
  <li class="card__imgsList-Item">
    <img
        class="card__img-small"
        src="${imageUrl_2}"
        alt=""
      />
  </li>
  <li class="card__imgsList-Item">
    <img
        class="card__img-small"
        src="${imageUrl_3}"
        alt=""
      />
  </li>
  <li class="card__imgsList-Item">
    <img
        class="card__img-small"
        src="${imageUrl_4}"
        alt=""
      />
  </li>
  <li class="card__imgsList-Item">
    <img
        class="card__img-small"
        src="${imageUrl_5}"
        alt=""
      />
  </li>
  <li class="card__imgsList-Item">
    <img
        class="card__img-small"
        src="${imageUrl_6}"
        alt=""
      />
  </li>
  `;
}*/
// ? Функція для створення вкладки "ДЕТАЛІ"
/*function createDetailsTableComp(object) {
  let {
    id = '99999999',
    name = '---------',
    articul = '00000000',
    price = '00000.00',
    currency = 'UAH',
    cashbackLvl = '00',
    publicatorType = 'Стиліст',
    publicatorName = '---',
    publicatorId = '0000',
    publicatorLink = './',
    style = '---',
    desription = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora animi sit voluptatem libero molestiae adipisci, explicabo est nostrum et vitae magni nobis voluptatibus iure eum ab repellat, praesentium cupiditate.`,
    lookItemsList,
    ...otherInfo
  } = object;
  return `
  <table class="table --card-details">
    <tbody class="tbody">
      <tr class="row --1">
        <td class="col --1">Назва</td>
        <td class="col --2">${name}</td>
      </tr>
      <tr class="row --2">
        <td class="col --1">Артикул</td>
        <td class="col --2">art${articul}</td>
      </tr>
      <tr class="row --3">
        <td class="col --1">${publicatorType}</td>
        <td class="col --2"><a href="${publicatorLink}">${publicatorName}</a></td>
      </tr>
      <tr class="row --4">
        <td class="col --1">Код стиліста</td>
        <td class="col --2">${publicatorId}</td>
      </tr>
      <tr class="row --5">
        <td class="col --1">Стиль</td>
        <td class="col --2">${style}</td>
      </tr>
      <tr class="row --6">
        <td class="col --1">Ціна</td>
        <td class="col --2">${price}</td>
      </tr>
      <tr class="row --7">
        <td class="col --1">Валюта</td>
        <td class="col --2">${currency}</td>
      </tr>
      <tr class="row --8">
        <td class="col --1">Рівень кешбеку</td>
        <td class="col --2">${cashbackLvl}</td>
      </tr>
      <tr class="row --9">
        <td class="col --1">Опис</td>
        <td class="col --2">${desription}</td>
      </tr>
    </tbody>
  </table>
  `;
}*/
// ? Створення соціальних кнопок
/*function createCardSocialsComp(socialsLinkList) {
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
          <svg class="svg">
            <use href="/https://github.com/sabationok/market__test/blob/gh-pages/sprite_market.a3358b13.svg#icon-instagram-1"></use>
          </svg>
        </a>
      </li>
      <li class="card__social-item">
        <a class="card__social-link" href="${pinterestLink}">
          <svg class="svg">
            <use href="/https://github.com/sabationok/market__test/blob/gh-pages/sprite_market.a3358b13.svg#icon-pinterest2"></use>
          </svg>
        </a>
      </li>
      <li class="card__social-item">
        <a class="card__social-link" href="${tikTokLink}">
          <svg class="svg">
            <use href="/https://github.com/sabationok/market__test/blob/gh-pages/sprite_market.a3358b13.svg#icon-tiktok"></use>
          </svg>
        </a>
      </li>
      <li class="card__social-item">
        <a class="card__social-link" href="${youTubeLink}">
          <svg class="svg">
            <use href="/https://github.com/sabationok/market__test/blob/gh-pages/sprite_market.a3358b13.svg#icon-youtube-play"></use>
          </svg>
        </a>
      </li>
      <li class="card__social-item">
        <a class="card__social-link" href="">
          <svg class="svg">
            <use href="/https://github.com/sabationok/market__test/blob/gh-pages/sprite_market.a3358b13.svg#icon-share"></use>
          </svg>
        </a>
      </li>
        
    
    `;
}*/
