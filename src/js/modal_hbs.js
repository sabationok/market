import sprite_market from '../images/sprite_market.svg';
import modal_base from '../hbs/modal_base.hbs';
import { authorsListData } from '../js-data/autorsList';
import { postsListData } from '../js-data/postsList';
import { plugins } from './plugins';
import { cartObj } from './cart';
import localstorage from './localstorage';
import cart from '../hbs/cart.hbs';
import simpleOrderForm from '../hbs/simpleOrderForm.hbs';
import card from '../hbs/card.hbs';
import card_2 from '../hbs/card_2.hbs';
import ovrl_foto from '../hbs/ovrl_foto.hbs';

let cartContentArr = [];
cartContentArr.push('102-2222');
cartContentArr.push('101-2222', '101-8888');

localstorage.save('cartContent', cartContentArr);
//* Проміжна змінна (попередня ціль, кнопка)
let prevOverlayBtn = null;

//* Знаходжу усі необхідні елементи для створення і управління модалкою
const refs = {
  mainContainerEl: document.querySelector('.js-postList'),
  bodyEl: document.body,
  modalEl: document.querySelector('.js-modal'),
  modalNameEl: document.querySelector('.js-modal-name'),
  modalContentEl: document.querySelector('.js-modal-content'),
  closeModalBtn: document.querySelector('[data-action="closeModal"]'),
  modal2El: document.querySelector('.js-modal2'),
  modal2NameEl: document.querySelector('.js-modal2-name'),
  modal2ContentEl: document.querySelector('.js-modal2-content'),
  closeModal2Btn: document.querySelector('[data-action="closeModal2"]'),
};
// * Деструктуризація для зручності звернення до змінних
let {
  bodyEl,
  modalEl,
  closeModalBtn,
  modalContentEl,
  modalNameEl,
  mainContainerEl,
  modal2El,
  modal2NameEl,
  modal2ContentEl,
  closeModal2Btn,
  ...otherRefs
} = refs;

//* Функція яка віслідковує усі події із кнопками
function actionsBtnClickON() {
  document.addEventListener('click', buttonEvent);
}
function actionsBtnClickOFF() {
  document.removeEventListener('click', buttonEvent);
  // document.removeEventListener('click', toClearImgOverlay);
}
function buttonEvent(event) {
  let { target } = event;
  let btnAction = target.dataset.action;
  let targetEl = null;
  if (!target.classList.contains('button')) {
    return;
  } else if (target !== undefined && btnAction !== undefined) {
    targetEl = target;
    onOverlayBtnClick(event);
    startBtnAction(btnAction, targetEl, event);
    return;
  }
}
function onOverlayBtnClick(event) {
  let { target } = event;

  // if (target.classList.contains('--overlay')) {
  //   return;
  // }
  if (!target.classList.contains('--pull-img-overlay')) {
    document.querySelectorAll('.--pull-img-overlay').forEach(elem => {
      elem.classList.remove('--selected');
    });
    return;
  }
  if (target === prevOverlayBtn) {
    target.classList.toggle('--selected');
    prevOverlayBtn = target;
    return;
  }
  if (prevOverlayBtn !== null) {
    prevOverlayBtn.classList.remove('--selected');
  }
  target.classList.toggle('--selected');
  prevOverlayBtn = target;
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
// toggleModal()

function onBackdrop2Click(event) {
  let { target, currentTarget } = event;
  if (target === currentTarget) {
    closeModal2();
  }
}
// toggleModal2()
function toggleModal2() {
  modal2El.classList.toggle('is-hidden');
  // bodyEl.classList.toggle('--notScrolled');
  modal2El.addEventListener('click', onBackdrop2Click);
  modal2NameEl.innerHTML = 'Modal 2';
  modal2ContentEl.innerHTML = 'Modal 2';
}
function closeModal2() {
  modal2El.classList.toggle('is-hidden');
  // bodyEl.classList.remove('--notScrolled');
  if (modalEl.classList.contains('is-hidden')) {
    modal2NameEl.innerHTML = '';
    modal2ContentEl.innerHTML = '';
    console.log(modal2NameEl.innerHTML);
    console.log(modal2ContentEl.innerHTML);
    modal2ContentEl.classList.remove('--emptyCartContent');
    modal2El.removeEventListener('click', onBackdrop2Click);
  }
}

//* Функція із функціями які відповідають ся кнопкам
function startBtnAction(actionName, targetEl, event) {
  let transferData = {
    cardId: targetEl.dataset.cardId,
    authorId: targetEl.dataset.authorId,
    targetEl: targetEl,
    cardObject: null,
    btnEvent: event,
  };
  // transferData.cardObject = postsListData.find(
  //   el => el.postId === transferData.cardId
  // );

  //* обєкт із функціями кнопок
  let btnActions = {
    toggleModal: toggleModal,
    closeModal: closeModal,
    toggleModal2: toggleModal2,
    closeModal2: closeModal2,
    showAuthorsCards: function onShowAutorCardsBtnClick(transferData) {
      let { cardId, authorId, targetEl } = transferData;

      this.toggleModal();
      createModalContent(transferData, 'showAuthorPostsList');
    },
    showMyCart: function onOpenCartBtnClick(transferData) {
      let { cardId, authorId, targetEl } = transferData;
      createModalContent(transferData, 'openCart');
    },
    // for to buy
    buyLater: function userWantToBuyLater(transferData) {
      let { cardId, authorId, targetEl } = transferData;
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
      let { cardId, authorId, targetEl } = transferData;

      this.toggleModal();

      createModalContent(transferData, 'simpleOrder');
      console.log(`want to buy card ${cardId} Now`);
    },
    buyNow2: function userWantToBuyNow(transferData) {
      let { cardId, authorId, targetEl } = transferData;

      this.toggleModal2();

      createModal2Content(transferData, 'simpleOrder');
      console.log(`want to buy card ${cardId} Now`);
    },
    //* overlay
    showFotos: function onOverlayFotosBtnClick(transferData) {
      let { cardId, targetEl } = transferData;
      createOverlayContent(transferData, 'openOvrlFoto');

      console.log(`show card ${cardId} FOTOS`);
    },
    showDetails: function onOverlayDetailsBtnClick(transferData) {
      let { cardId, targetEl } = transferData;
      createOverlayContent(transferData, 'openOvrlDetails');
      console.log(`show card ${cardId} DETAILS`);
    },
    showSizes: function onOverlaySizesBtnClick(transferData) {
      let { cardId, targetEl } = transferData;
      createOverlayContent(transferData, 'openOvrlSizes');
      console.log(`show card ${cardId} SIZES`);
    },
    //* card actions
    share: function onActionShareBtnClick(transferData) {
      let { cardId, authorId, targetEl, cardObject } = transferData;
      console.log(`want SHARE post ${cardId}`);
    },
    like: function onActionLikeBtnClick(transferData) {
      let { cardId, authorId, targetEl, cardObject } = transferData;
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
      let { cardId, authorId, targetEl, cardObject } = transferData;
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
      let { cardId, authorId, targetEl, cardObject } = transferData;
      console.log(`want COMMENT post ${cardId}`);
    },
    //*Підтвердження та відміна замовлення
    createSimpleOrder: function onCreateSimpleOrderBtnClick(transferData) {
      let { cardId, authorId, targetEl, cardObject } = transferData;

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
  btnActions[actionName](transferData);
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
    return;
  }
  function modalCallbacks(callback) {
    let cartFormEl = null;
    let modalActions = {
      modalFormSubmit: function onModalFormSubmitBtClick(event) {
        event.preventDefault();

        closeModal();
        cartFormEl.removeEventListener('submit', modalActions.modalFormSubmit);
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
        let { cardId } = transferData;
        let lastSeenCardObj = {};

        //! Тут має бути запит до локал стореджу (де зберігається попередній обєкт) або на сервер якщо вони не збігаються
        lastSeenCardObj = postsListData.find(el => el.postId === cardId);

        let {
          postId = '000-000000',
          postType = 'postType',
          postName = 'postName',
          postAuthorId = 'postAuthorId',
          articul = '000000',
          price = 0,
          cashbackLvl = '00',
          currency = 'UAH',
          mainImgLink = './',
          socialsLinkList = [],
          ...others
        } = lastSeenCardObj;

        modalNameEl.textContent = `Купити товар art${articul}`;
        modalContentEl.innerHTML = simpleOrderForm(lastSeenCardObj);

        let cartForm = modalContentEl.querySelector('.js-modal-form');
        cartForm.addEventListener('submit', this.modalFormSubmit);
        cartForm.addEventListener('reset', this.modalFormReset);
      },
      showAuthorPostsList: function createModalAutorList(transferData) {
        let { cardId, authorId, targetEl } = transferData;
        let authorsListData = card_2(
          postsListData.filter(el => el.postAuthorId === authorId)
        );
        modalNameEl.innerHTML = `Автор ${authorId}`;
        modalContentEl.innerHTML = `<div class="authorPostsList">${authorsListData}</div>`;
      },
    };
    modalActions[callback](transferData);
  }
}
function createModal2Content(transferData, callback) {
  if (callback === undefined) {
    modal2NameEl.innerHTML = `Тут буде назва`;
    modal2ContentEl.innerHTML = 'Тут буде вміст';
    console.log('У модалку 2 не передано наповнення');
    return;
  } else if (callback !== undefined) {
    modalCallbacks(callback);
    return;
  }
  function modalCallbacks(callback) {
    let cartFormEl = null;
    let modalActions = {
      modalFormSubmit: function onModal2FormSubmitBtClick(event) {
        event.preventDefault();

        closeModal2();
        cartFormEl.removeEventListener('submit', modalActions.modalFormSubmit);
        console.log(
          'Відправляється запит POST із інфо про замовлення покупцяю'
        );
        alert(
          `Замовлення сформовано. Очікуйте на інформацію у вашому особистому кабінеті. Дякуємо що ви з нами.`
        );
      },
      modalFormReset: function onModal2FormResetBtClick() {
        cartFormEl.removeEventListener('reset', modalActions.modalFormReset);
        closeModal2();
      },
      simpleOrder: function createModal2ToBuyNow(transferData) {
        let { cardId } = transferData;
        let lastSeenCardObj = {};

        //! Тут має бути запит до локал стореджу (де зберігається попередній обєкт) або на сервер якщо вони не збігаються
        lastSeenCardObj = postsListData.find(el => el.postId === cardId);

        let {
          postId = '000-000000',
          postType = 'postType',
          postName = 'postName',
          postAuthorId = 'postAuthorId',
          articul = '000000',
          price = 0,
          cashbackLvl = '00',
          currency = 'UAH',
          mainImgLink = './',
          socialsLinkList = [],
          ...others
        } = lastSeenCardObj;

        modal2NameEl.textContent = `Купити товар art${articul}`;
        modal2ContentEl.innerHTML = simpleOrderForm(lastSeenCardObj);

        cartFormEl = modal2ContentEl.querySelector('.js-modal-form');
        cartFormEl.addEventListener('submit', this.modalFormSubmit);
        cartFormEl.addEventListener('reset', this.modalFormReset);
      },
    };
    modalActions[callback](transferData);
  }
}

//* Створення оверлею
function createOverlayContent(transferData, callback) {
  let { cardId } = transferData;
  //! Тут має бути запит до локал стореджу (де зберігається попередній обєкт) або на сервер якщо вони не збігаються
  let lastSeenCardObj = postsListData.find(el => el.postId === cardId);

  let overlays = {
    openOvrlDetails: function openOvrlDetails(transferData, lastSeenCardObj) {
      let { targetEl } = transferData;
      let ovrlEl = targetEl.nextElementSibling;
    },
    openOvrlFoto: function openOvrlFoto(transferData, lastSeenCardObj) {
      let { targetEl } = transferData;
      let { imagesList } = lastSeenCardObj;
      let ovrlEl = targetEl.nextElementSibling;
      ovrlEl.innerHTML = ovrl_foto(imagesList);
    },
    openOvrlSizes: function openOvrlSizes(transferData, lastSeenCardObj) {
      let { targetEl } = transferData;
      let ovrlEl = targetEl.nextElementSibling;
    },
  };

  overlays[callback](transferData, lastSeenCardObj);
}
