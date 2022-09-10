const styleMakersList = [
  {logoImgLink: 'https://picsum.photos/64/36/?random=1', styleMakerName: "Галя Черепиця Стайл", styleMakerCode: '324' },
  {logoImgLink: 'https://picsum.photos/64/36/?random=2', styleMakerName: "Елеонора Шухля", styleMakerCode: '415' },
  {logoImgLink: 'https://picsum.photos/64/36/?random=3', styleMakerName: "Іван Солярка", styleMakerCode: '014' },
];

const looksSectionEl = document.querySelector('.js-looks-section');
// console.log(looksSectionEl);

const createBrandsSection = ({logoImgLink, styleMakerName, styleMakerCode, ...others } = {}) => {
  return `
<div class="container__market">
  <div class="slick__container">
    <div class="vendor-zone__header">
      <div class="vendor-zone__logo">
      <img src="${logoImgLink}" alt="${styleMakerName} logo" width="64px" height="36px">
      </div>
      <span class="vendor-zone__brand-name">${styleMakerName} (stl${styleMakerCode})</span>
    </div>
    <div class="slick__brands-slider js-styleMaker" data-stylemaker="${styleMakerCode}">

    </div>
  </div>
</div>
`;
};

const styleMakersListArray = styleMakersList.map((el, idx, arr) => {
  return createBrandsSection(el);
});

// console.log(styleMakersListArray);
// console.log(styleMakersListArray.join(''));

// Вставка елементів на сторінку
looksSectionEl.insertAdjacentHTML('afterbegin', styleMakersListArray.join(''));


// ! Аля база даних із масивом обєктів у яких вся інформація про луки стилістів
const styleMakersArray = [
  {
    stylemenName: 'Галя Черепиця Стайл',
    stylemenCode: '324',
    productList: [
      {
        id: 10000019,
        name: 'Сукня, синя',
        articul: '945919',
        price: 2582,
        cashbackLvl: '03',
        currency: 'UAH',
        publicatorType: 'Стиліст',
        publicatorName: 'Галя Черепиця Стайл',
        publicatorCode: '324',
        section: 'Одяг жіночий',
        mainCategory: 'Сукні',
        category: 'Вечірні сукні',
        availbility: 'у наявності',
        stock: '15',
        manufacturingTime: '2',
        socialLinksList :{},
        imagesList: {
          imageUrl_main:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-synia__br2.webp',
          imageUrl_main_2x: '',
          imageUrl_1:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_rozeva_br2.webp',
          imageUrl_2:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_zelena__br2.webp',
          imageUrl_3:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-goluba__br2.webp',
          imageUrl_4:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_rozeva_br2.webp',
          imageUrl_5:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-pastel__br2.webp',
          imageUrl_6:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_zelena__br2.webp',
        },
        lookItemsList: [
          {
            itemId: 1,
            itemName: 'Сукня вечірня, шовкова, рожева',
            itemLink: './',
            itemPrice: '3282',
            itemCurrency: 'UAH',
            itemPosTop: '50%',
            itemPosLeft: '40%',
          },
          {
            itemId: 2,
            itemName: 'Туфлі жіночі, "Мон-бланк',
            itemLink: './',
            itemPrice: '2382',
            itemCurrency: 'UAH',
            itemPosTop: '88%',
            itemPosLeft: '42%',
          },
        ],
      },
      {
        id: 10000018,
        name: 'Сукня, рожева',
        articul: '945918',
        price: 2582,
        cashbackLvl: '03',
        currency: 'UAH',
        publicatorType: 'Стиліст',
        publicatorName: 'Галя Черепиця Стайл',
        publicatorCode: '324',
        section: 'Одяг жіночий',
        mainCategory: 'Сукні',
        category: 'Вечірні сукні',
        availbility: 'у наявності',
        stock: '15',
        manufacturingTime: '2',
        imagesList: {
          imageUrl_main:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_rozeva_br2.webp',
          imageUrl_main_2x: '',
          imageUrl_1:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_rozeva_br2.webp',
          imageUrl_2:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_zelena__br2.webp',
          imageUrl_3:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-goluba__br2.webp',
          imageUrl_4:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-synia__br2.webp',
          imageUrl_5:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-pastel__br2.webp',
          imageUrl_6:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_zelena__br2.webp',
        },
        lookItemsList: [
          {
            itemsId: 1,
            itemsName: 'Сукня вечірня, шовкова, рожева',
            itemsLink: './',
            itemsPrice: '3282',
            itemsCurrency: 'UAH',
            itemsPosTop: '50%',
            itemsPosLeft: '40%',
          },
          {
            itemsId: 2,
            itemsName: 'Туфлі жіночі, "Мон-бланк',
            itemsLink: './',
            itemsPrice: '2382',
            itemsCurrency: 'UAH',
            itemsPosTop: '88%',
            itemsPosLeft: '42%',
          },
        ],
      },
    ],
  },
  {
    stylemenName: 'Елеонора шухля',
    stylemenCode: '415',
    productList: [
      {
        id: 10000015,
        name: 'Сукня, пастель',
        articul: '945915',
        price: 2582,
        cashbackLvl: '03',
        currency: 'UAH',
        publicatorType: 'Стиліст',
        publicatorName: 'Елеонора шухля',
        publicatorCode: '415',
        section: 'Одяг жіночий',
        mainCategory: 'Сукні',
        category: 'Вечірні сукні',
        availbility: 'у наявності',
        stock: '15',
        manufacturingTime: '2',
        imagesList: {
          imageUrl_main:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-pastel__br2.webp',
          imageUrl_main_2x: '',
          imageUrl_1:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_rozeva_br2.webp',
          imageUrl_2:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_zelena__br2.webp',
          imageUrl_3:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-goluba__br2.webp',
          imageUrl_4:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-synia__br2.webp',
          imageUrl_5:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_rozeva_br2.webp',
          imageUrl_6:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_zelena__br2.webp',
        },
        lookItemsList: [
          {
            itemsId: 1,
            itemsName: 'Сукня вечірня, шовкова, рожева',
            itemsLink: './',
            itemsPrice: '3282',
            itemsCurrency: 'UAH',
            itemsPosTop: '50%',
            itemsPosLeft: '40%',
          },
          {
            itemsId: 2,
            itemsName: 'Туфлі жіночі, "Мон-бланк',
            itemsLink: './',
            itemsPrice: '2382',
            itemsCurrency: 'UAH',
            itemsPosTop: '88%',
            itemsPosLeft: '42%',
          },
        ],
      },
      {
        id: 10000014,
        name: 'Сукня, синя',
        articul: '945914',
        price: 2582,
        cashbackLvl: '03',
        currency: 'UAH',
        publicatorType: 'Стиліст',
        publicatorName: 'Елеонора шухля',
        publicatorCode: '415',
        section: 'Одяг жіночий',
        mainCategory: 'Сукні',
        category: 'Вечірні сукні',
        availbility: 'у наявності',
        stock: '15',
        manufacturingTime: '2',
        imagesList: {
          imageUrl_main:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-synia__br2.webp',
          imageUrl_main_2x: '',
          imageUrl_1:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_rozeva_br2.webp',
          imageUrl_2:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_zelena__br2.webp',
          imageUrl_3:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-goluba__br2.webp',
          imageUrl_4:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_rozeva_br2.webp',
          imageUrl_5:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-pastel__br2.webp',
          imageUrl_6:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_zelena__br2.webp',
        },
        lookItemsList: [
          {
            itemsId: 1,
            itemsName: 'Сукня вечірня, шовкова, рожева',
            itemsLink: './',
            itemsPrice: '3282',
            itemsCurrency: 'UAH',
            itemsPosTop: '50%',
            itemsPosLeft: '40%',
          },
          {
            itemsId: 2,
            itemsName: 'Туфлі жіночі, "Мон-бланк',
            itemsLink: './',
            itemsPrice: '2382',
            itemsCurrency: 'UAH',
            itemsPosTop: '88%',
            itemsPosLeft: '42%',
          },
        ],
      },
    ],
  },
  {
    stylemenName: 'Іван Солярка',
    stylemenCode: '014',
    productList: [
      {
        id: 10000010,
        name: 'Сукня зелена',
        articul: '945916',
        price: 2582,
        cashbackLvl: '03',
        currency: 'UAH',
        publicatorType: 'Стиліст',
        publicatorName: 'Іван Солярка',
        publicatorCode: '415',
        section: 'Одяг жіночий',
        mainCategory: 'Сукні',
        category: 'Вечірні сукні',
        availbility: 'у наявності',
        stock: '15',
        manufacturingTime: '2',
        imagesList: {
          imageUrl_main:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_zelena__br2.webp',
          imageUrl_main_2x: '',
          imageUrl_1:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_rozeva_br2.webp',
          imageUrl_2:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_rozeva_br2.webp',
          imageUrl_3:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-goluba__br2.webp',
          imageUrl_4:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-synia__br2.webp',
          imageUrl_5:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-pastel__br2.webp',
          imageUrl_6:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_zelena__br2.webp',
        },
        lookItemsList: [
          {
            itemId: 1,
            itemName: 'Сукня вечірня, шовкова, рожева',
            itemLink: './',
            itemPrice: '3282',
            itemCurrency: 'UAH',
            itemPosTop: '50%',
            itemPosLeft: '40%',
          },
          {
            itemId: 2,
            itemName: 'Туфлі жіночі, "Мон-бланк',
            itemLink: './',
            itemPrice: '2382',
            itemCurrency: 'UAH',
            itemPosTop: '88%',
            itemPosLeft: '42%',
          },
        ],
      },
      {
        id: 10000011,
        name: 'Сукня голуба',
        articul: '945917',
        price: 2582,
        cashbackLvl: '03',
        currency: 'UAH',
        publicatorType: 'Стиліст',
        publicatorName: 'Іван Солярка',
        publicatorCode: '415',
        section: 'Одяг жіночий',
        mainCategory: 'Сукні',
        category: 'Вечірні сукні',
        availbility: 'у наявності',
        stock: '15',
        manufacturingTime: '2',
        imagesList: {
          imageUrl_main:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-goluba__br2.webp',
          imageUrl_main_2x: '',
          imageUrl_1:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_rozeva_br2.webp',
          imageUrl_2:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_zelena__br2.webp',
          imageUrl_3:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_rozeva_br2.webp',
          imageUrl_4:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-synia__br2.webp',
          imageUrl_5:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-pastel__br2.webp',
          imageUrl_6:
            'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_zelena__br2.webp',
        },
        lookItemsList: [
          {
            itemId: 1,
            itemName: 'Сукня вечірня, шовкова, рожева',
            itemLink: './',
            itemPrice: '3282',
            itemCurrency: 'UAH',
            itemPosTop: '50%',
            itemPosLeft: '40%',
          },
          {
            itemId: 2,
            itemName: 'Туфлі жіночі, "Мон-бланк',
            itemLink: './',
            itemPrice: '2382',
            itemCurrency: 'UAH',
            itemPosTop: '88%',
            itemPosLeft: '42%',
          },
        ],
      },
    ],
  },
];

// ! рефакторинг
// ? Обєкт яккий потрібно вставити у функцію для створення сторінки
let refactoredLookPageObj = {
  classForMakeList: '.js-styleMaker',
  lookMakersData: styleMakersArray,
};
createLooksPage(refactoredLookPageObj);
function createLooksPage({ classForMakeList, lookMakersData, ...others }) {
  let stlyleMakerListEl = document.querySelectorAll(classForMakeList);

  stlyleMakerListEl.forEach(styleMaker => {
    let publicatorCodeToCompare = styleMaker.dataset.stylemaker;
    let foundedLookList = founderOfLooksList(
      lookMakersData,
      publicatorCodeToCompare
    );
    styleMaker.insertAdjacentHTML(
      'afterbegin',
      foundedLookList.map(el => {
        return createProductCard(el);
      })
    );
  });
}
// ? Функція для пошуку списку луків/товарів
function founderOfLooksList(array, paramToCompare) {
  for (const el of array) {
    if (el.stylemenCode === paramToCompare) {
      return el.productList;
    }
  }
  return;
}
// ? Функція для створення картки товару
function createProductCard(cardInfoObject) {
  let {
    id = '---------',
    name = '---------',
    articul = '---------',
    price = '------.--',
    currency = '---',
    cashbackLvl = '--',
    publicatorType = '---',
    publicatorName = '---',
    publicatorCode = '----',
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
// ? функція для створення списку маркерів.
function createLookItemsListComp(lookItemsList) {
  return lookItemsList
    .map(el => {
      return createLookItemComp(el);
    })
    .join('');
}
// ? Функція для створення  одного маркера із обєкта який містить інфу про нього
function createLookItemComp(marker) {
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
}
// ? Функція для створення вкладки "ФОТО". список додадкових зображень (список на 6 зображень)
// ! підлягає рефакторингу і вдосконаленню для розміщення зображень для різних типів екранів. По аналогії до створення списку маркерів луків
function createSmallImgListComp(imagesList) {
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
}
// ? Функція для створення вкладки "ДЕТАЛІ"
function createDetailsTableComp(object) {
  let {
    id = '99999999',
    name = '---------',
    articul = '00000000',
    price = '00000.00',
    currency = 'UAH',
    cashbackLvl = '00',
    publicatorType = 'Стиліст',
    publicatorName = '---',
    publicatorCode = '0000',
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
      <td class="col --2">${publicatorCode}</td>
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
}
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
  
};

// ! Створення сторінки
/* let stlyleMakerListEl = document.querySelectorAll('.js-styleMen');
stlyleMakerListEl.forEach(styleMan => {
  let styleMenCodeToCompare = styleMan.dataset.stylemen;
  let foundedLookList = founderOfLooksList(
    styleMakersArray,
    styleMenCodeToCompare
  );

  function founderOfLooksList(array, param2) {
    for (const el of array) {
      if (el.stylemenCode === param2) {
        return el.productList;
      }
    }
    return;
  }

  styleMan.insertAdjacentHTML(
    'afterbegin',
    foundedLookList.map(el => createProductCard(el.prodInfo))
  );
});*/


// ! Тут масив іх маркерами до кожного товару
const looksMarkerList = [
  {
    lookId: '134651684',
    markersList: [
      {
        makerId: 1,
        markerName: 'name',
        markerLink: './',
        markerPrice: '1582',
        markerCurrency: 'UAH',
        markerPosTop: '50%',
        markerPosLeft: '30%',
      },
      {
        makerId: 2,
        markerName: 'name',
        markerLink: './',
        markerPrice: '4682',
        markerCurrency: 'UAH',
        markerPosTop: '40%',
        markerPosLeft: '30%',
      },
    ],
  },
  {
    lookId: '1356151684',
    markersList: [
      {
        makerId: 1,
        markerName: 'name',
        markerLink: './',
        markerPrice: '3282',
        markerCurrency: 'UAH',
        markerPosTop: '40%',
        markerPosLeft: '30%',
      },
      {
        makerId: 2,
        markerName: 'name',
        markerLink: './',
        markerPrice: '2382',
        markerCurrency: 'UAH',
        markerPosTop: '30%',
        markerPosLeft: '40%',
      },
    ],
  },
];
// ? Знаходжу список Стилістів (styleMen)
let styleMensList = document.querySelectorAll('.js-styleMen');
// console.log(styleMensList);
// * Знаходжу (Знаходжу список усіх товарів у середині секції стиліста)
// function find
// ? Знаходжу тестовий лук
let testLook = document.querySelector('.js-look-list');
// console.log(testLook);

// ? Створюю шаблон одного маркера, а потім методом перебору масиву із маркерами створюю список маркерів одного товару.
let testMarkersArray = [
  {
    makerId: 1,
    markerName: 'Спідниця',
    markerLink: './',
    markerPrice: '2382',
    markerCurrency: 'UAH',
    markerPosTop: '30%',
    markerPosLeft: '40%',
  },
  {
    makerId: 2,
    markerName: 'Штани',
    markerLink: './',
    markerPrice: '2382',
    markerCurrency: 'UAH',
    markerPosTop: '40%',
    markerPosLeft: '30%',
  },
];

// ?Тестова вставка маркерів на перший же лук все пройшло успішно
// testLook.insertAdjacentHTML('afterbegin', makeJoinedMarkersList(testMarkersArray));

// ? функція для створення списку маркерівю Готова для вставки методом .insertAdjacentHTML()
function makeJoinedMarkersList(markersArrayForJoining) {
  return (markersArrayForJoining.map(el => {
    return createLookMarker(el);
  })).join('');
}
// ? Функція для створення  одного маркера із обєкта який містить інфу про нього
/*
 * Перевіряв чи працює створення маркерів за допомогою .map()
 * let fffff = testMarkersArray.map((marker) => {
 *   // console.log(createLookMarker(marker))
 *   return createLookMarker(marker)
 * }).join('');
 *   console.log(fffff);
 *
 * console.log(createLookMarker({
 *   makerId: 2,
 *   markerName: 'Спідниця в клітинку',
 *   markerLink: './',
 *   markerPrice: '2382',
 *   markerCurrency: 'UAH',
 *   markerPosTop: '40%',
 *   markerPosLeft: '30%',
 * }));
 */
function createLookMarker(marker) {
  let {
    makerId = '1',
    markerLink = './',
    markerName = 'name',
    markerPrice = '0',
    markerCurrency = 'UAH',
    markerPosTop = '25%',
    markerPosLeft = '50%',
    ...others
  } = marker;
  return `
<li class="look__marker" style="top:${markerPosTop}; left:${markerPosLeft}">
  <div class="look__link-box">
    <a class="look__link" href="${markerLink}"
      >${markerName}
      <span class="look__item-price">${markerPrice}${markerCurrency}</span>
    </a>
  </div>
</li>
`;
}
// const markersList = (markersArray.map((el, idx, arr) => {
//   return createLookMarker(el);
// })).join('');
// console.log(markersList);

// Вставка елементів на сторінку
// styleMensList.forEach(el => el.insertAdjacentHTML(
//   'afterbegin',
//   ProductListArr
// ));







