!function(){function t(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},e={},s=n.parcelRequired7c6;null==s&&((s=function(t){if(t in a)return a[t].exports;if(t in e){var n=e[t];delete e[t];var s={id:t,exports:{}};return a[t]=s,n.call(s.exports,s,s.exports),s.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,n){e[t]=n},n.parcelRequired7c6=s),s("iE7OH").register(JSON.parse('{"U0nFS":"index.d5c3c33d.js","CVUpS":"sprite_market.15459aa5.svg","20df4":"logo-social.3d75b350.png"}'));var o;o=s("aNJCr").getBundleURL("U0nFS")+s("iE7OH").resolve("CVUpS"),s("agrVm");var l=s("9OhiC");var c={save:(t,n)=>{try{const a=JSON.stringify(n);localStorage.setItem(t,a)}catch(t){console.error("Set state error: ",t.message)}},load:t=>{try{const n=localStorage.getItem(t);return null===n?void 0:JSON.parse(n)}catch(t){console.error("Get state error: ",t.message)}},remove:t=>{try{localStorage.removeItem(t)}catch(t){console.log("Remove item error: ",t.message)}}};let i={filterArrByArr:function(t=[],n=[],a=[]){let e={};for(let s=0;s<t.length;s+=1)e=n.find((n=>n.postId===t[s])),void 0!==e&&a.push(e)}};s("agrVm"),s("9OhiC");let d={cartInfo:{contentCardsIdArr:["101-2222"],contentCardsObjArr:[{postId:"101-2222",name:"Куртка"}],contentAutorsIdArr:["101"],totalQuantity:null,totalSum:null},addItem:function(t,n,a){alert(`Товар art${t} додано до корзини.`)},removeItem:function(t,n){alert(`Товар art${t} видалено із корзини.`)}};var r=t(s("WMajR")).template({compiler:[8,">= 4.3.0"],main:function(t,n,a,e,s){return"<div class='table --modalCart-grid'>\n  <div class='tbody --tbody-grid'>\n    <div class='row --card' data-card-id=''>\n      <div class='row cardInfo-grid'>\n        <div class='col --cardImg' data-title='img'><img\n            src='https://raw.githubusercontent.com/goodcat46/images/main/brand_cards/looks/look_1__2x.webp'\n            alt=''\n          /></div>\n        <div class='col --cardinfo' data-title='name'>\n          <div class='col --sku' data-title='sku'>art25252525\n          </div>\n          <div class='col --autorId' data-title='autorId'>lookMaker-217\n          </div>\n          <div class='col --name' data-title='name'>Комплект 0245\n          </div>\n\n        </div>\n        <div class='col --cardTotal' data-title='total'>\n          <span class='col-title'>Ціна:</span>\n          <span class='col-text'>6000</span>\n          <span class='col-title'>Знижка:</span>\n          <span class='col-text'>500</span>\n          <span class='col-title'>Сума:</span>\n          <span class='col-text'>5500</span>\n        </div>\n      </div>\n      <div class='row-grid titles'>\n        <span class='col'>Атрибут 1:</span>\n        <span class='col'>Атрибут 2:</span>\n        <span class='col'>Кількість:</span>\n        <span class='col'>Ціна:</span>\n      </div>\n      <div class='row card-items'>\n        <div class='row card-item'>\n          <span class='row item-top'>\n            <span>Елемент № 1,</span>\n            <span class='element-sku'>art356984,</span>\n            <span class='element-name'>\"Назва елементу\"</span>\n          </span>\n          <div class='row-grid item-info'>\n\n            <div class='col' data-title='atribute-1'>\n              <input class='input --selectAtribute' type='text' value='XL' />\n            </div>\n\n            <div class='col' data-title='atribute-2'>\n              <input\n                class='input --selectAtribute'\n                type='text'\n                value='Зелений'\n              />\n            </div>\n\n            <div class='col --setQuantity' data-title='quantity'>\n              <button class='button --btnTableMinus'>-</button>\n              <input\n                class='input --inputQuantity'\n                type='text'\n                name='quantity'\n                value='1'\n              />\n              <button class='button --btnTablePlus'>+</button>\n            </div>\n\n            <div class='col' data-title='price'>\n              <span class='col-text'>3000</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class='row --card' data-card-id=''>\n      <div class='row cardInfo-grid'>\n        <div class='col --cardImg' data-title='img'>\n          <img\n            src='https://raw.githubusercontent.com/goodcat46/images/main/gamanets/AW22-PFD08E_88X_F1.webp'\n            alt=''\n          />\n        </div>\n        <div class='col --cardinfo' data-title='name'>\n          <div class='col --sku' data-title='sku'>art25252525\n\n          </div>\n          <div class='col --autorId' data-title='autorId'>brand-548\n          </div>\n          <div class='col --name' data-title='name'>Назва товару\n\n          </div>\n        </div>\n        <div class='col --cardTotal' data-title='total'>\n          <span class='col-title'>Ціна:</span>\n          <span class='col-text'>6000</span>\n          <span class='col-title'>Знижка:</span>\n          <span class='col-text'>500</span>\n          <span class='col-title'>Сума:</span>\n          <span class='col-text'>5500</span>\n        </div>\n      </div>\n      <div class='row-grid titles'>\n        <span class='col'>Атрибут 1:</span>\n        <span class='col'>Атрибут 2:</span>\n        <span class='col'>Кількість:</span>\n        <span class='col'>Ціна:</span>\n      </div>\n      <div class='row card-items'>\n        <div class='row card-item'>\n          <span class='row item-top'>\n            <span>Елемент № 1,</span>\n            <span class='element-sku'>art356984,</span>\n            <span class='element-name'>\"Назва елементу\"</span>\n          </span>\n          <div class='row-grid item-info'>\n\n            <div class='col' data-title='atribute-1'>\n              <input class='input --selectAtribute' type='text' value='XL' />\n            </div>\n\n            <div class='col' data-title='atribute-2'>\n              <input\n                class='input --selectAtribute'\n                type='text'\n                value='Зелений'\n              />\n            </div>\n\n            <div class='col --setQuantity' data-title='quantity'>\n              <button class='button --btnTableMinus'>-</button>\n              <input\n                class='input --inputQuantity'\n                type='text'\n                name='quantity'\n                value='1'\n              />\n              <button class='button --btnTablePlus'>+</button>\n            </div>\n\n            <div class='col' data-title='price'>\n              <span class='col-text'>3000</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"},useData:!0});let u=[];u.push("102-2222"),c.save("cartContent",u);const p={modalEl:document.querySelector("[data-modal]"),modalNameEl:document.querySelector(".js-modal-name"),modalContentEl:document.querySelector(".js-modal-content"),closeModalBtn:document.querySelector('[data-action="closeModal"]'),openCartBtnEl:document.querySelector('[data-action="openModal"]')};let{modalEl:v,closeModalBtn:g,modalContentEl:m,modalNameEl:b,openCartBtnEl:f,...I}=p;function L(t,n){let{cardId:a,autorId:e,targetEl:s,cardObject:o}=t;
//! postsListData
if(void 0===n)return b.innerHTML="Тут буде назва",m.innerHTML="Тут буде вміст",void console.log("У модалку не передано наповнення");function d(){v.classList.toggle("is-hidden"),v.classList.contains("is-hidden")&&(b.textContent="",m.textContent="",b.innerHTML="",m.innerHTML="")}void 0!==n&&function(n){let a={openCart:function(){let t,n=c.load("cartContent");
//! тут має бути запит на сервер за даними про товари додані у корзину
if(void 0!==n)return console.log("Товари у корзині готові для відмальовки",t),i.filterArrByArr(n,l.postsListData,t),d(),b.textContent="Корзина",void(m.innerHTML=r());d(),b.textContent="Корзина",m.innerHTML="Ви не додали жодного товару у корзину",m.classList.add("--emptyCartContent")},buyNow:function(t){d();let{cardObject:n}=t,{postId:a="000-000000",postType:e="posttype",postName:s="postName",postAutorId:o="postAutorId",articul:l="000000",price:c=0,cashbackLvl:i="00",currency:r="UAH",mainImgLink:u="./",socialsLinkList:p=[],...v}=n;b.textContent=`Купити товар art${l}`,m.innerHTML=`\n        тут буде відображатись інфа про обраний товар\n        <button class="button --buyNow --createSimpleOrder" type="button" data-action="createSimpleOrder" data-card-id="${a}">\n          Оформити замовлення\n        </button>\n        `}};a[`${n}`](t)}(n)}document.addEventListener("click",(n=>{let{target:a}=n,e=null,s=null;if(a.classList.contains("button"))return void 0!==a&&void 0!==e?(e=a.dataset.action,s=a,void function(n,a){let e={cardId:a.dataset.cardId,autorId:a.dataset.autorId,targetEl:a,cardObject:null};e.cardObject=l.postsListData.find((t=>t.postId===e.cardId));let s={toggleModal:function(){v.classList.toggle("is-hidden"),v.classList.contains("is-hidden")&&(b.textContent="",m.textContent="",b.innerHTML="",m.innerHTML="")},closeModal:function(){v.classList.toggle("is-hidden"),v.classList.contains("is-hidden")&&(b.textContent="",m.textContent="",b.innerHTML="",m.innerHTML="",m.classList.remove("--emptyCartContent"))},showAutrorCards:function(t){let{cardId:n,autorId:a,targetEl:e,cardObject:s}=t;function o(t){let{cardId:n,autorId:a,targetEl:e,cardObject:s}=t;b.textContent=`Автор ${a}`,m.insertAdjacentHTML("afterbegin",`Тут будуть пости автора ${a}`)}this.toggleModal(),L(t,o)},showMyCart:function(t){let{cardId:n,autorId:a,targetEl:e,cardObject:s}=t;L(t,"openCart")},buyLater:function(t){let{cardId:n,autorId:a,targetEl:e,cardObject:s}=t;if(e.classList.toggle("--inCart"),e.classList.contains("--inCart"))return e.classList.remove("--deleted"),void d.addItem(n);d.removeItem(n),e.classList.add("--deleted")},buyNow:function(t){let{cardId:n,autorId:a,targetEl:e,cardObject:s}=t;L(t,"buyNow"),console.log(`want to buy card ${n} Now`)},showSizes:function(t){let{cardId:n,autorId:a,targetEl:e,cardObject:s}=t;console.log(`show card ${n} SIZES`)},showFotos:function(t){let{cardId:n,autorId:a,targetEl:e,cardObject:s}=t;console.log(`show card ${n} FOTOS`)},showDetails:function(t){let{cardId:n,autorId:a,targetEl:e,cardObject:s}=t;console.log(`show card ${n} DETAILS`)},share:function(t){let{cardId:n,autorId:a,targetEl:e,cardObject:s}=t;console.log(`want SHARE post ${n}`)},like:function(n){let{cardId:a,autorId:e,targetEl:s,cardObject:l}=n;s.classList.toggle("--liked"),s.classList.contains("--liked")?(s.innerHTML=`<svg class="btn-svg">\n       <use href="${t(o)}#icon-heart"></use>\n     </svg>`,console.log(`post ${a} was LIKED`)):(s.innerHTML=`<svg class="btn-svg">\n       <use href="${t(o)}#icon-heart-o"></use>\n     </svg>`,console.log(`post ${a} was UNLIKED`))},save:function(n){let{cardId:a,autorId:e,targetEl:s,cardObject:l}=n;s.classList.toggle("--saved"),s.classList.contains("--saved")?(s.innerHTML=`<svg class="btn-svg">\n       <use href="${t(o)}#icon-bookmark"></use>\n     </svg>`,console.log(`post ${a} was SAVED`)):(s.innerHTML=`<svg class="btn-svg">\n       <use href="${t(o)}#icon-bookmark-o"></use>\n     </svg>`,console.log(`post ${a} was UNSAVED`))},comment:function(t){let{cardId:n,autorId:a,targetEl:e,cardObject:s}=t;console.log(`want COMMENT post ${n}`)},createSimpleOrder:function(t){let{cardId:n,autorId:a,targetEl:e,cardObject:s}=t;console.log(`Відправляється запит на сервер щодо створення швидкого замовлення на товар ${n}, art${s.articul}, та формується INVOICE на оплату товару`),this.closeModal(),alert(`Замовлення на товар art${s.articul}, "${s.postName}" сформовано. Очікуйте на інформацію у вашому особистому кабінеті. Дякуємо що ви з нами.`)}};s[`${n}`](e)}(e,s)):void 0})),L({},"openCart")}();
//# sourceMappingURL=index.d5c3c33d.js.map