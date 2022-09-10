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
