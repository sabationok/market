import sprite_market from '../images/sprite_market.svg';
import { autorsListData } from '../js-data/autorsList';
import { postsListData } from '../js-data/postsList';
import localstorage from './localstorage';
import { cartObj } from './cart';

//* Знаходжу усі необхідні елементи для створення і управління модалкою
const refs = {
  modalEl: document.querySelector('[data-modal]'),
  modalNameEl: document.querySelector('.js-modal-name'),
  modalContentEl: document.querySelector('.js-modal-content'),
  closeModalBtn: document.querySelector('[data-action="closeModal"]'),
  openCartBtnEl: document.querySelector('[data-action="openModal"]'),
};
// * Деструктуризація для зручності звернення до змінних
let {
  modalEl,
  closeModalBtn,
  modalContentEl,
  modalNameEl,
  openCartBtnEl,
  ...otherRefs
} = refs;
onActionsBtnClick();
function onActionsBtnClick() {
  document.addEventListener('click', event => {
    let { target } = event;
    let btnAction = null;
    let targetEl = null;
    if (!target.classList.contains('button')) {
      return;
    } else if (target !== undefined && btnAction !== undefined) {
      btnAction = target.dataset.action;
      targetEl = target;
      startBtnAction(btnAction, targetEl);
      return;
    }
  });
}
// * Функція створення модалки
function createModalContent(objectData, callback) {
  let { cardId, autorId, targetEl, cardObject } = objectData;
  // console.log(targetEl);

  if (callback === undefined) {
    modalNameEl.innerHTML = `Тут буде назва`;
    modalContentEl.innerHTML = 'Тут буде вміст';
    console.log('У модалку не передано наповнення');
    return;
  } else if (callback !== undefined) {
    callback(objectData);
  }
}
// Функція із функціями які відповідаються кнопкам
function startBtnAction(actionName, targetEl) {
  let objectData = {
    cardId: targetEl.dataset.cardId,
    autorId: targetEl.dataset.autorId,
    targetEl: targetEl,
    cardObject: null,
  };
  objectData.cardObject = postsListData.find(
    el => el.postId === objectData.cardId
  );

  let btnActions = {
    toggleModal: function onAnyModalOpenBtnClick() {
      modalEl.classList.toggle('is-hidden');
      // closeModalBtn.addEventListener('click', toggleModal);
      if (modalEl.classList.contains('is-hidden')) {
        modalNameEl.textContent = '';
        modalContentEl.textContent = '';
        modalNameEl.innerHTML = '';
        modalContentEl.innerHTML = '';
        // closeModalBtn.removeEventListener('click', toggleModal);
      }
    },
    closeModal: function onCloseModalBtnClick() {
      modalEl.classList.toggle('is-hidden');
      // closeModalBtn.addEventListener('click', toggleModal);
      if (modalEl.classList.contains('is-hidden')) {
        modalNameEl.textContent = '';
        modalContentEl.textContent = '';
        modalNameEl.innerHTML = '';
        modalContentEl.innerHTML = '';
        // closeModalBtn.removeEventListener('click', toggleModal);
      }
    },
    showAutrorCards: function onShowAutorCardsBtnClick(objectData) {
      let { cardId, autorId, targetEl, cardObject } = objectData;

      this.toggleModal();
      createModalContent(objectData, createAutorListModal);

      function createAutorListModal(objectData) {
        let { cardId, autorId, targetEl, cardObject } = objectData;
        modalNameEl.textContent = `Автор ${autorId}`;
        modalContentEl.insertAdjacentHTML(
          'afterbegin',
          `Тут будуть пости автора ${autorId}`
        );
      }
    },
    showMyCart: function onOpenCartBtnClick(objectData) {
      let { cardId, autorId, targetEl, cardObject } = objectData;
      this.toggleModal();
      createModalContent(targetEl, createModalCart);
      function createModalCart() {
        let cartContent = localstorage.load('cartContent');

        modalNameEl.textContent = `Корзина`;
        modalContentEl.innerHTML = `Шаблон корзини ${cartContent}`;
      }
    },
    // for to buy
    buyLater: function userWantToBuyLater(objectData) {
      let { cardId, autorId, targetEl, cardObject } = objectData;
      targetEl.classList.toggle('--inCart');

      if (targetEl.classList.contains('--inCart')) {
        targetEl.classList.remove('--deleted');
        cartObj.addItem(cardId);

        return;
      }
      cartObj.removeItem(cardId);
      targetEl.classList.add('--deleted');
    },
    buyNow: function userWantToBuyNow(objectData) {
      let { cardId, autorId, targetEl, cardObject } = objectData;
      this.toggleModal();
      createModalContent(objectData, createModalToBuyNow);
      console.log(`want to buy card ${cardId} Now`);
      function createModalToBuyNow({ cardObject, ...rest }) {
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
        } = cardObject;
        modalNameEl.textContent = `Купити товар art${articul}`;
        modalContentEl.innerHTML = `
        тут буде відображатись інфа про обраний товар
        <button class="button --buyNow --createSimpleOrder" type="button" data-action="createSimpleOrder" data-card-id="${postId}">
          Купити
        </button>
        `;
      }
    },
    //* overlay
    showSizes: function onOverlaySizesBtnClick(objectData) {
      let { cardId, autorId, targetEl, cardObject } = objectData;
      console.log(`show card ${cardId} SIZES`);
    },
    showFotos: function onOverlayFotosBtnClick(objectData) {
      let { cardId, autorId, targetEl, cardObject } = objectData;
      console.log(`show card ${cardId} FOTOS`);
    },
    showDetails: function onOverlayDetailsBtnClick(objectData) {
      let { cardId, autorId, targetEl, cardObject } = objectData;
      console.log(`show card ${cardId} DETAILS`);
    },
    //* card actions
    share: function onActionShareBtnClick(objectData) {
      let { cardId, autorId, targetEl, cardObject } = objectData;
      console.log(`want SHARE post ${cardId}`);
    },
    like: function onActionLikeBtnClick(objectData) {
      let { cardId, autorId, targetEl, cardObject } = objectData;
      targetEl.classList.toggle('--liked');

      if (targetEl.classList.contains('--liked')) {
        targetEl.innerHTML = `<svg class="btn-svg">
       <use href="${sprite_market}#icon-heart"></use>
     </svg>`;
        console.log(`post ${cardId} was LIKED`);
      } else {
        targetEl.innerHTML = `<svg class="btn-svg">
       <use href="${sprite_market}#icon-heart-o"></use>
     </svg>`;
        console.log(`post ${cardId} was UNLIKED`);
      }
    },
    save: function onActionSaveBtnClick(objectData) {
      let { cardId, autorId, targetEl, cardObject } = objectData;
      targetEl.classList.toggle('--saved');
      if (targetEl.classList.contains('--saved')) {
        targetEl.innerHTML = `<svg class="btn-svg">
       <use href="${sprite_market}#icon-bookmark"></use>
     </svg>`;
        console.log(`post ${cardId} was SAVED`);
      } else {
        targetEl.innerHTML = `<svg class="btn-svg">
       <use href="${sprite_market}#icon-bookmark-o"></use>
     </svg>`;
        console.log(`post ${cardId} was UNSAVED`);
      }
    },
    comment: function onActionShareBtnClick(objectData) {
      let { cardId, autorId, targetEl, cardObject } = objectData;
      console.log(`want COMMENT post ${cardId}`);
    },
  };
  btnActions[`${actionName}`](objectData);
}
