const brandsList = [
  {logoImgLink: 'https://picsum.photos/64/36/?random=1', brandName: "Eleanor clo", brandCode: '0217' },
  {logoImgLink: 'https://picsum.photos/64/36/?random=2', brandName: "Trinity shoes", brandCode: '0257' },
  {logoImgLink: 'https://picsum.photos/64/36/?random=3', brandName: "Laconic accesories", brandCode: '0514' },
];

const brandsSectionEl = document.querySelector('.js-brands-section');
// console.log(brandsSectionEl);
// const productsOverflow = document.querySelector('.--products .block__overflow');
// console.log(productsOverflow);
// const productsTable = document.querySelector('.table.--products .tbody');
// console.log(productsTable);

const createBrandsSection = ({logoImgLink, brandName, brandCode, ...others } = {}) => {
  return `
<div class="container__market">
  <div class="slick__container">
    <div class="vendor-zone__header">
      <div class="vendor-zone__logo">
      <img src="${logoImgLink}" alt="${brandName} logo" width="64px" height="36px">
      </div>
      <span class="vendor-zone__brand-name">${brandName} (g${brandCode})</span>
    </div>
    <div class="slick__brands-slider js-brand brand-code-${brandCode}">

    </div>
  </div>
</div>
`;
};

const brandListArray = brandsList.map((el, idx, arr) => {
  return createBrandsSection(el);
});

// console.log(brandListArray);
// console.log(brandListArray.join(''));

// Вставка елементів на сторінку
brandsSectionEl.insertAdjacentHTML('afterbegin', brandListArray.join(''));



