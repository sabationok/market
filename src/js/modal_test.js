// ! Тестові кнопки відкриття модалки тут
const navMenuEl = document.querySelector('.js-modal-menu');
// * Навішую слухача подій на меню і делегую КЛІК на кнопки
navMenuEl.addEventListener('click', event => {
  event.preventDefault();
  let { target } = event;
  if (target.classList.contains('js-modal-open-1')) {
    createModalContent(target, testModal_1, modalContentEl);
    toggleModal();
    return;
  }
  if (target.classList.contains('js-modal-open-2')) {
    toggleModal();
    createModalContent(target, testModal_2, modalContentEl);
    return;
  }
});

// ? Колбеки із наповення модалки
function testModal_1(target, contentEl) {
  console.log('Ви натиснули на посилання: 1 ');
  contentEl.innerHTML = target.textContent;
}
// ? Колбеки із наповення модалки
function testModal_2(target, contentEl) {
  console.log('Ви натиснули на посилання: 2');
  contentEl.innerHTML = target.textContent;
}
// ? Колбеки із наповення модалки
function openModalCart(target, contentEl) {
  console.log('Ви натиснули кнопуку "Купити"');

  // contentEl.insertAdjacentHTML('afterbegin', `Тут буде кошик)))`);
}
