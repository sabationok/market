import sprite_market from '../images/sprite_market.svg';
import modal_base from '../hbs/modal_base.hbs';
import { autorsListData } from '../js-data/autorsList';
import { postsListData } from '../js-data/postsList';
import { plugins } from './plugins';
import { cartObj } from './cart';
import localstorage from './localstorage';
import cart from '../hbs/cart.hbs';
import simpleOrderForm from '../hbs/simpleOrderForm.hbs';

let cartContentArr = [];
cartContentArr.push('102-2222');
localstorage.save('cartContent', cartContentArr);

//* Знаходжу усі необхідні елементи для створення і управління модалкою
const refs = {
  mainContainerEl: document.querySelector('.js-postList'),
  modalEl: document.querySelector('[data-modal]'),
  modalNameEl: document.querySelector('.js-modal-name'),
  modalContentEl: document.querySelector('.js-modal-content'),
  closeModalBtn: document.querySelector('[data-action="closeModal"]'),
  openCartBtnEl: document.querySelector('[data-action="openModal"]'),
  bodyEl: document.body,
};
// * Деструктуризація для зручності звернення до змінних
let {
  modalEl,
  closeModalBtn,
  modalContentEl,
  modalNameEl,
  openCartBtnEl,
  mainContainerEl,
  bodyEl,
  ...otherRefs
} = refs;

//* Функція яка віслідковує усі події із кнопками
function actionsBtnClickON() {
  document.addEventListener('click', buttonEvent);
}
function actionsBtnClickOFF() {
  document.removeEventListener('click', buttonEvent);
}
function buttonEvent(event) {
  let { target } = event;
  let btnAction = target.dataset.action;
  let targetEl = null;
  if (!target.classList.contains('button')) {
    return;
  } else if (target !== undefined && btnAction !== undefined) {
    targetEl = target;
    startBtnAction(btnAction, targetEl, event);
    return;
  }
}
actionsBtnClickON();
//* Функції відкритиття і закриття модалки
function onBackdropClick(event) {
  let { target, currentTarget } = event;
  if (target === currentTarget) {
    closeModal();
  }
}
function toggleModal() {
  modalEl.classList.toggle('is-hidden');
  bodyEl.classList.toggle('--notScrolled');
  modalEl.addEventListener('click', onBackdropClick);
}
function closeModal() {
  modalEl.classList.toggle('is-hidden');
  bodyEl.classList.remove('--notScrolled');
  if (modalEl.classList.contains('is-hidden')) {
    modalNameEl.innerHTML = '';
    modalContentEl.innerHTML = '';
    modalContentEl.classList.remove('--emptyCartContent');
    modalEl.removeEventListener('click', onBackdropClick);
  }
}
//* Функція із функціями які відповідають ся кнопкам
function startBtnAction(actionName, targetEl, event) {
  let transferData = {
    cardId: targetEl.dataset.cardId,
    autorId: targetEl.dataset.autorId,
    targetEl: targetEl,
    cardObject: null,
    btnEvent: event,
  };
  transferData.cardObject = postsListData.find(
    el => el.postId === transferData.cardId
  );
  //* обєкт із функціями кнопок
  let btnActions = {
    toggleModal: toggleModal,
    closeModal: closeModal,
    showAutrorCards: function onShowAutorCardsBtnClick(transferData) {
      let { cardId, autorId, targetEl, cardObject } = transferData;

      this.toggleModal();
      createModalContent(transferData, 'showAotorPostsList');
    },
    showMyCart: function onOpenCartBtnClick(transferData) {
      let { cardId, autorId, targetEl, cardObject } = transferData;
      createModalContent(transferData, 'openCart');
    },
    // for to buy
    buyLater: function userWantToBuyLater(transferData) {
      let { cardId, autorId, targetEl, cardObject } = transferData;
      targetEl.classList.toggle('--inCart');

      if (targetEl.classList.contains('--inCart')) {
        targetEl.classList.remove('--deleted');
        cartObj.addItem(cardId);

        return;
      }
      cartObj.removeItem(cardId);
      targetEl.classList.add('--deleted');
    },
    buyNow: function userWantToBuyNow(transferData) {
      let { cardId, autorId, targetEl, cardObject } = transferData;
      this.toggleModal();
      createModalContent(transferData, 'simpleOrder');
      console.log(`want to buy card ${cardId} Now`);
    },
    //* overlay
    showSizes: function onOverlaySizesBtnClick(transferData) {
      let { cardId, autorId, targetEl, cardObject } = transferData;
      console.log(`show card ${cardId} SIZES`);
    },
    showFotos: function onOverlayFotosBtnClick(transferData) {
      let { cardId, autorId, targetEl, cardObject } = transferData;
      console.log(`show card ${cardId} FOTOS`);
    },
    showDetails: function onOverlayDetailsBtnClick(transferData) {
      let { cardId, autorId, targetEl, cardObject } = transferData;
      console.log(`show card ${cardId} DETAILS`);
    },
    //* card actions
    share: function onActionShareBtnClick(transferData) {
      let { cardId, autorId, targetEl, cardObject } = transferData;
      console.log(`want SHARE post ${cardId}`);
    },
    like: function onActionLikeBtnClick(transferData) {
      let { cardId, autorId, targetEl, cardObject } = transferData;
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
    save: function onActionSaveBtnClick(transferData) {
      let { cardId, autorId, targetEl, cardObject } = transferData;
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
    comment: function onActionShareBtnClick(transferData) {
      let { cardId, autorId, targetEl, cardObject } = transferData;
      console.log(`want COMMENT post ${cardId}`);
    },
    createSimpleOrder: function onCreateSimpleOrderBtnClick(transferData) {
      let { cardId, autorId, targetEl, cardObject } = transferData;
      console.log(
        `Відправляється запит на сервер щодо створення швидкого замовлення на товар, та формується INVOICE на оплату товару`
      );
    },
    createOrder: function onCreateOrderBtnClick(transferData) {
      console.log('onCreateOrderBtnClick');
    },
    killOrder: function onKillOrderBtnClick() {
      console.log('kill order click');
    },
  };
  btnActions[`${actionName}`](transferData);
}
// * Функція створення модалки
//! test start createModalContent({}, 'openCart');
function createModalContent(transferData, callback) {
  if (callback === undefined) {
    modalNameEl.innerHTML = `Тут буде назва`;
    modalContentEl.innerHTML = 'Тут буде вміст';
    console.log('У модалку не передано наповнення');
    return;
  } else if (callback !== undefined) {
    modalCallbacks(callback);
  }
  /*function onBackdropClick(event) {
    let { target, currentTarget } = event;
    if (target === currentTarget) {
      closeModal();
    }
  }
  function toggleModal() {
    modalEl.classList.toggle('is-hidden');
    bodyEl.classList.toggle('--notScrolled');
    modalEl.addEventListener('click', onBackdropClick);
  }
  function closeModal() {
    modalEl.classList.toggle('is-hidden');
    bodyEl.classList.remove('--notScrolled');
    if (modalEl.classList.contains('is-hidden')) {
      modalNameEl.innerHTML = '';
      modalContentEl.innerHTML = '';
      modalContentEl.classList.remove('--emptyCartContent');
      modalEl.removeEventListener('click', onBackdropClick);
    }
  }*/
  function modalCallbacks(callback) {
    let cartFormEl = null;
    let modalActions = {
      modalFormSubmit: function onModalFormSubmitBtClick(event) {
        event.preventDefault();

        closeModal();
        // cartFormEl.removeEventListener('submit', modalActions.modalFormSubmit);
        console.log(
          'Відправляється запит POST із інфо про замовлення покупцяю'
        );
        alert(
          `Замовлення сформовано. Очікуйте на інформацію у вашому особистому кабінеті. Дякуємо що ви з нами.`
        );
      },
      modalFormReset: function onModalFormResetBtClick() {
        // cartFormEl.removeEventListener('reset', modalActions.modalFormReset);
        closeModal();
      },
      openCart: function createModalCart() {
        let cartContentArr = localstorage.load('cartContent');
        let cartContentObjArr = [];
        if (cartContentArr !== undefined) {
          plugins.filterArrByArr(
            cartContentArr,
            postsListData,
            cartContentObjArr
          );

          toggleModal();
          modalNameEl.textContent = `Корзина`;
          modalContentEl.innerHTML = cart();

          cartFormEl = modalContentEl.querySelector('.js-modal-form');
          // function addEventListeners() {}
          // addEventListeners();

          cartFormEl.addEventListener('submit', this.modalFormSubmit);
          cartFormEl.addEventListener('reset', this.modalFormReset);

          return;
        } else {
          toggleModal();
          modalNameEl.textContent = `Корзина`;
          modalContentEl.innerHTML = 'Ви не додали жодного товару у корзину';
          modalContentEl.classList.add('--emptyCartContent');
        }
      },
      simpleOrder: function createModalToBuyNow(transferData) {
        let { cardObject } = transferData;
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
        modalContentEl.innerHTML = simpleOrderForm(cardObject);

        let cartForm = modalContentEl.querySelector('.js-modal-form');
        cartForm.addEventListener('submit', this.modalFormSubmit);
        cartForm.addEventListener('reset', this.modalFormReset);
      },
      showAotorPostsList: function createModalAutorList(transferData) {
        let { cardId, autorId, targetEl, cardObject } = transferData;
        modalNameEl.innerHTML = `Автор ${autorId}`;
        modalContentEl.innerHTML =`Тут будуть пости автора ${autorId}`;
      },
    };
    modalActions[`${callback}`](transferData);
  }
}
