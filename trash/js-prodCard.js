let jsCreatedBrandProductList = document.querySelectorAll('.js-brand');
// console.log(jsCreatedBrandProductList);

const brandProductList = [
  {
    id: 6451654654,
    name: 'Сукня шовкова, рожева',
    articul: 'v03-g217-art655165',
    price: 1582,
    currency: 'UAH',
    brandName: 'Eleanor',
    section: '',
    mainCategory: '',
    category: '',
    availbility: '',
    stock: '',
    manufacturingTime: '',
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
  {
    id: 6451654654,
    name: 'Сукня шовкова, зелена',
    articul: 'v03-g217-art652165',
    price: 1482,
    currency: 'UAH',
    brandName: 'Eleanor',
    section: '',
    mainCategory: '',
    category: '',
    availbility: '',
    stock: '',
    manufacturingTime: '',
    imageUrl_main:
      'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_zelena__br2.webp',
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
  {
    id: 6451654654,
    name: 'Сукня шовкова, голуба',
    articul: 'v03-g217-art656165',
    price: 1682,
    currency: 'UAH',
    brandName: 'Eleanor',
    section: '',
    mainCategory: '',
    category: '',
    availbility: '',
    stock: '',
    manufacturingTime: '',
    imageUrl_main:
      'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-goluba__br2.webp',
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
  {
    id: 6451654654,
    name: 'Сукня шовкова, синя',
    articul: 'v03-g217-art656165',
    price: 1682,
    currency: 'UAH',
    brandName: 'Eleanor',
    section: '',
    mainCategory: '',
    category: '',
    availbility: '',
    stock: '',
    manufacturingTime: '',
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
      'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-synia__br2.webp',
    imageUrl_5:
      'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-pastel__br2.webp',
    imageUrl_6:
      'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_zelena__br2.webp',
  },
  {
    id: 6451654654,
    name: 'Сукня шовкова, пастель',
    articul: 'v03-g217-art656165',
    price: 1682,
    currency: 'UAH',
    brandName: 'Eleanor',
    section: '',
    mainCategory: '',
    category: '',
    availbility: '',
    stock: '',
    manufacturingTime: '',
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
      'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia-pastel__br2.webp',
    imageUrl_6:
      'https://raw.githubusercontent.com/sabationok/market_pro_test__liveserver/main/images/brand_cards/brand_2/suknia_zelena__br2.webp',
  },
];

const createProductCard = el => {
  let {
    name = 'Yfpdf njdfhe',
    articul = 'v00-g000-art000000',
    price = '000.00',
    currency = 'UAH',
    lvlOfVidkat = '000',
    imageUrl_main,
    imageUrl_1,
    imageUrl_2,
    imageUrl_3,
    imageUrl_4,
    imageUrl_5,
    imageUrl_6,
    ...others
  } = el;
  return `
<div class="product-card --1">
  <div class="product-card__top">
    <div>
      <p class="product-card__name">${name}</p>
      <p class="product-card__sku">${articul}</p>
    </div>
  </div>

  <div class="card --main">

    <!-- main image -->
    <div class="card-img__container" width="480" min-height="640">
      
      <img
        class="card__img"
        src="${imageUrl_main}"
        width="480"
        alt=""
      />
    </div>

    <!-- img overlay -->
    <div class="card --main--overlay">
      <button class="button --pull-img-overlay" type="button">Деталі</button>
      <div class="product-card__img --overlay --left">
      </div>
      <!--  -->
      <button class="button --pull-img-overlay" type="button">Фото</button>
      <div class="product-card__img --overlay --top">
        <div class="card-imgs__wrapper">
          <img
            class="card__img-small"
            src="${imageUrl_1}"
            alt=""
          />
          <img
            class="card__img-small"
            src="${imageUrl_2}"
            alt=""
          />
          <img
            class="card__img-small"
            src="${imageUrl_3}"
            alt=""
          />
          <img
            class="card__img-small"
            src="${imageUrl_4}"
            alt=""
          />
          <img
            class="card__img-small"
            src="${imageUrl_5}"
            alt=""
          />
          <img
            class="card__img-small"
            src="${imageUrl_6}"
            alt=""
          />
        </div>
      </div>
      <!--  -->
      <button class="button --pull-img-overlay" type="button">Розміри</button>
      <div class="product-card__img --overlay --right">Розміри</div>
    </div>
  </div>

  <div class="product-card__bottom">
    <div class="product-card__wrapper">
      <div>
        <p class="product-card__price">${price}${currency}</p>
        <p class="product-card__cashback">v${lvlOfVidkat} * * *</p>
      </div>

      <button class="button --to-cart" type="button">Купити</button>
    </div>
  </div>
</div>
`;
};
const ProductListArr = (brandProductList.map((el, idx, arr) => {
  return createProductCard(el);
})).join('');
// console.log(ProductListArr);

// Вставка елементів на сторінку
jsCreatedBrandProductList.forEach(el => el.insertAdjacentHTML(
  'afterbegin',
  ProductListArr
));
