'use strict';
export let plugins = {
  filterArrByArr: function filterArrByArr(
    arrayWithElements = [],
    arrayForFiltering = [],
    arrayForPushing = [],
    param,
  ) {
    // * Проміжний результат зберігається тут
    let foundedEl = {};
    for (let i = 0; i < arrayWithElements.length; i += 1) {
      foundedEl = arrayForFiltering.find(
        el => el[param] === arrayWithElements[i]
      );
      // * Перевірка
      if (foundedEl !== undefined) {
        arrayForPushing.push(foundedEl);
      }
    }
  },
};
