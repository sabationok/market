import sprite_market from '../images/sprite_market.svg';
import { autorsListData } from '../js-data/autorsList';
import { postsListData } from '../js-data/postsList';

//* Знаходжу усі необхідні елементи для створення і управління модалкою
const refs = {
  modalEl: document.querySelector('[data-modal]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modalNameEl: document.querySelector('.js-modal-name'),
  modalContentEl: document.querySelector('.js-modal-content'),
};
// * Деструктурищзація для зручності звернення до змінних
let { modalEl, closeModalBtn, modalContentEl, modalNameEl, ...otherRefs } =
  refs;
// * Функція зміни класу БЕКДРОП
function toggleModal() {
  modalEl.classList.toggle('is-hidden');
  closeModalBtn.addEventListener('click', toggleModal);
  if (modalEl.classList.contains('is-hidden')) {
    modalNameEl.textContent = '';
    modalContentEl.textContent = '';
    closeModalBtn.removeEventListener('click', toggleModal);
  }
}

// * Функція створення модалки
function createModalContent(callback, target) {
  // console.log(target);

  // * Навішується слухач подій на кнопку закриття модалки
  closeModalBtn.addEventListener('click', toggleModal);

  //! тестове наповнення модалки
  if (callback === undefined) {
    modalNameEl.textContent = `Тут буде назва`;
    modalContentEl.insertAdjacentHTML(
      'afterbegin',
      `
      <p>*</p>
      <p>*</p>
      <p>*</p>
      <p>*</p>
      <p>*</p>
      Доброго вечора ми з України!
      <p>*</p>
      <p>*</p>
      <p>*</p>
      <p>*</p>
      <p>*</p>
      `
    );
    console.log('У модалку не передано кнаповнення');
    return;
  } else if (callback !== undefined) {
    callback();
  }
}
//todo Функція роботи із корзиною
onOpenCArtBtnClick();
function onOpenCArtBtnClick() {
  let openCartBtnEl = document.querySelector('.--showMyCart');
  openCartBtnEl.addEventListener('click', () => {
    toggleModal();
    createModalContent(createModalCart);
    function createModalCart() {
      modalNameEl.textContent = `Корзина`;
      modalContentEl.insertAdjacentHTML(
        'afterbegin',
        `
      <p>*</p>
      <p>*</p>
      <p>*</p>
      <p>*</p>
      <p>*</p>
      Тут буде вміст корзини
      <p>*</p>
      <p>*</p>
      <p>*</p>
      <p>*</p>
      <p>*</p>
      `
      );
    }
  });
}

//todo Навішую слухача подій на кнопку на document для делегування події "CLICK" на кнопки карток
onShowAutorCardsBtnClick(autorsListData);
function onShowAutorCardsBtnClick(arrayForFinding) {
  const refs = {
    autorId: null,
    autorCardsList: null,
    targetEl: null,
  };

  document.addEventListener('click', buttonEvent => {
    let { target } = buttonEvent;
    if (!target.classList.contains('--open-autorCardList')) {
      return;
    } else if (target !== undefined) {
      refs.autorId = target.dataset.autorId;
      refs.targetEl = target;

      refs.autorCardsList = arrayForFinding.filter(
        el => el.postId === refs.idForFind
      );
      // console.log(refs.idForFind);
      toggleModal();
      createModalContent(createAutorListModal, target);
      return;
    }
  });
  function createAutorListModal(autorId) {
    modalNameEl.textContent = `Автор ${autorId}`;
    modalContentEl.insertAdjacentHTML(
      'afterbegin',
      `
    <p>*</p>
    <p>*</p>
    <p>*</p>
    <p>*</p>
    <p>*</p>
    Тут будуть пости автора ${autorId}
    <p>*</p>
    <p>*</p>
    <p>*</p>
    <p>*</p>
    <p>*</p>
    `
    );
  }
}
let actions = {
  share: 'foo share',
  like:'foo like',
  save: 'foo save',
  comment: 'foo comment',
};
//todo Навішую слухача подій на кнопку на document для делегування події "CLICK" на кнопки карток
onAllCardButtonsClick(postsListData);
function onAllCardButtonsClick(arrayForFinding) {
  const refs = {
    buttonActionType: null,
    idForFind: null,
    foundedCardDataObj: null,
    targetEl: null,
  };

  document.addEventListener('click', buttonEvent => {
    let { target } = buttonEvent;
    if (!target.classList.contains('button')) {
      return;
    } else if (target !== undefined) {
      refs.buttonActionType = Object.keys(target.dataset).join('');
      refs.idForFind = Object.values(target.dataset).join('');
      refs.targetEl = target;
let keyName = target.dataset.action


      // console.log(target.dataset.action);
      console.log(target.dataset.cardId);
      // console.log(target.id);

      // console.log(refs.buttonActionType);
      console.log("=====",actions[`${keyName}`]);
      // console.log(refs.idForFind);

      refs.foundedCardDataObj = arrayForFinding.find(
        el => el.postId === refs.idForFind
      );
      toFindBtnAction(refs);
      return;
    }
  });
}

//* Функція яка шукає відповідну функцію до кнопки і запускає її
function toFindBtnAction(refsObj) {
  let {
    targetEl,
    buttonActionType,
    idForFind: cardId,
    foundedCardDataObj: cardDataObj,
    ...otherRefs
  } = refsObj;
  let foundedBtnActionObj = null;

  for (const el of btnActionsArr) {
    if (el.actionName === buttonActionType) {
      foundedBtnActionObj = el.actionFoo;
      //* Запускаю найдену функцію кнопки
      foundedBtnActionObj(cardId, cardDataObj, targetEl);
      return;
    }
  }
}

//todo масив для перебору функцією .toFindBtnAction,  із функціями кнопок
const btnActionsArr = [
  {
    actionName: 'buyLater',
    actionFoo: function userWantToBuyLater(cardId, cardDataObj, targetEl) {
      targetEl.classList.toggle('--inCart');
      if (targetEl.classList.contains('--inCart')) {
        targetEl.classList.remove('--deleted');
        alert(`Товар ar${cardId} додано до корзини.`);
        return;
      }
      targetEl.classList.add('--deleted');
      alert(`Товар ar${cardId} видалено із корзини.`);
    },
  },
  {
    actionName: 'buyNow',
    actionFoo: function userWantToBuyNow(cardId, cardDataObj, targetEl) {
      toggleModal();
      createModalContent();
      console.log(`want to buy card ${cardId} Now`);
    },
  },
  {
    actionName: 'showFotos',
    actionFoo: function onOverlayFotosBtnClick(cardId, cardDataObj, targetEl) {
      console.log(`show card ${cardId} FOTOS`);
    },
  },
  {
    actionName: 'showSizes',
    actionFoo: function onOverlaySizesBtnClick(cardId, cardDataObj, targetEl) {
      console.log(`show card ${cardId} SIZES`);
    },
  },
  {
    actionName: 'showDetails',
    actionFoo: function onOverlayDetailsBtnClick(
      cardId,
      cardDataObj,
      targetEl
    ) {
      console.log(`show card ${cardId} DETAILS`);
    },
  },
  {
    actionName: 'actionShare',
    actionFoo: function onActionShareBtnClick(cardId, cardDataObj, targetEl) {
      console.log(`want SHARE post ${cardId}`);
    },
  },
  {
    actionName: 'actionLike',
    actionFoo: function onActionLikeBtnClick(cardId, cardDataObj, targetEl) {
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
  },
  {
    actionName: 'actionSave',
    actionFoo: function onActionSaveBtnClick(cardId, cardDataObj, targetEl) {
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
  },
  // {
  //   actionName: 'showAllCards',
  //   actionFoo: function onOpenAllCardsBtnClick(cardId, cardDataObj) {
  //     toggleModal(),
  //       // createModalContent()
  //       console.log(
  //         `Відкриває модалку із списокм всіх постів автора  та фільтром`
  //       );
  //   },
  // },
];
