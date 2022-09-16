'use strict';
export let plugins = {
  filterArrByArr: function filterArrByArr(
    arrayWithElements = [],
    arrayForFiltering = [],
    arrayForPushing = []
  ) {
    // * Проміжний результат зберігається тут
    let foundedEl = {};
    for (let i = 0; i < arrayWithElements.length; i += 1) {
      foundedEl = arrayForFiltering.find(
        post => post.postId === arrayWithElements[i]
      );
      // * Перевірка
      if (foundedEl !== undefined) {
        arrayForPushing.push(foundedEl);
      }
    }
  },
};
