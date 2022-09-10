// todo ================================ ОЧИСТКА МАРКЕРІВ
// let prevMarker = null;
// clearLookMarkers();
function clearLookMarkers() {
  window.addEventListener('click', onMarkerClick);
  function onMarkerClick(event) {
    let { target, currentTarget } = event;
    if (!target.classList.contains('look__marker')) {
      document.querySelectorAll('.look__marker').forEach(elem => {
        elem.classList.remove('--selected');
      });
      return;
    }
  
    if (target === prevMarker) {
      target.classList.toggle('--selected');
      prevMarker = target;
      return;
    }
    if (prevMarker !== null) {
      prevMarker.classList.remove('--selected');
    }
    target.classList.toggle('--selected');
    prevMarker = target;
  }
};
// let prevBuyNowBtn = null;
// // activateBuyNowBtns()
// function activateBuyNowBtns() {
//   window.addEventListener('click', onBuyNowBtnClick);
//   function onBuyNowBtnClick(event) {
//     let { target, currentTarget } = event;
//     if (!target.classList.contains('look__marker')) {
//       document.querySelectorAll('.look__marker').forEach(elem => {
//         elem.classList.remove('--selected');
//       });
//       return;
//     }
  
//     if (target === prevBuyNowBtn) {
//       target.classList.toggle('--selected');
//       prevBuyNowBtn = target;
//       return;
//     }
//     if (prevBuyNowBtn !== null) {
//       prevBuyNowBtn.classList.remove('--selected');
//     }
//     target.classList.toggle('--selected');
//     prevBuyNowBtn = target;
//   }
// }







