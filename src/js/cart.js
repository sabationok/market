import sprite_market from '../images/sprite_market.svg';
import { autorsListData } from '../js-data/autorsList';
import { postsListData } from '../js-data/postsList';
import localstorage from './localstorage';

export let cartObj = {
  cartInfo: {
    contentCardsIdArr: ['101-2222'],
    contentCardsObjArr: [{postId:'101-2222', name:'Куртка'}],
    contentAutorsIdArr: ['101'],
    totalQuantity: null,
    totalSum: null,
  },

  addItem: function onAddItemToCart(itemId, itemObject, target) {
    // this.cartInfo = localstorage.load('cartInfo');
    // this.cartInfo.contentCardsIdArr.push(itemId);
    // this.cartInfo.contentCardsObjArr.push(itemObject);
    // this.cartInfo.contentAutorsIdArr.push(itemObject.autorId);
    // this.cartInfo = localstorage.save('cartInfo', cartInfo);
    // if (cartInfo !== undefined) {
    // }
    alert(`Товар art${itemId} додано до корзини.`);
  },
  removeItem: function onRemoveItemFromCart(itemId, target) {
    alert(`Товар art${itemId} видалено із корзини.`);
  },
};
