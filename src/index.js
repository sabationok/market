// todo ================================ ОЧИСТКА МАРКЕРІВ
let prevMarker = null;
clearLookMarkers();
function clearLookMarkers() {
  document.addEventListener('click', onMarkerClick);
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
    // document.removeEventListener('click', onMarkerClick);
  }
}
// clearOverlays();
function clearOverlays() {
  let prevOverlayBtn = null;
  document.addEventListener('click', onOverlayBtnClick);

  function onOverlayBtnClick(event) {
    let { target, currentTarget } = event;
    if(target.classList.contains('--overlay')){
      return
    }
    if (!target.classList.contains('--pull-img-overlay')) {
      document.querySelectorAll('.--pull-img-overlay').forEach(elem => {
        elem.classList.remove('--selected');
      });
      // document.removeEventListener('click', onOverlayBtnClick);

      console.log('Не поцілив!');
      return;
    }

    if (target === prevOverlayBtn) {
      target.classList.toggle('--selected');
      prevOverlayBtn = target;
      console.log(prevOverlayBtn);
      return;
    }
    if (prevOverlayBtn !== null) {
      prevOverlayBtn.classList.remove('--selected');
    }
    target.classList.toggle('--selected');
    prevOverlayBtn = target;
  }
}
// let prevBuyNowBtn = null;
// activateBuyNowBtns()
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
