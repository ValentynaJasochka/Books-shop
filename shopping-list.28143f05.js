!function(){function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},n.parcelRequired7c6=o),o.register("iE7OH",(function(t,n){var i,r;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var o={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},r=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("aNJCr",(function(t,n){var i;e(t.exports,"getBundleURL",(function(){return i}),(function(e){return i=e}));var r={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(e){var t=r[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),r[e]=t),t}})),o("iE7OH").register(JSON.parse('{"1QMrX":"shopping-list.28143f05.js","34dqz":"mobile.a9653c9a.png","gNz39":"mobile@2x.a472d73e.png","jD4zk":"tablet-desck.fed7a1f9.png","cViWx":"tablet-desck@2x.24f1324d.png","2VEnG":"amazon.b8fa90cb.png","8Y5Mm":"apple-books.5a9f17e3.png","c1l3T":"bookshop.91914384.png","410VS":"icons.d964f32e.svg","1XaNB":"index.2823627f.css","9FMue":"index.6725937f.js"}')),o("i8Q71"),o("18VO4");var a,c=o("bpxeT"),s=o("2TvXO"),l=o("h6c0i"),u=o("46hgj"),p=o("jzQFI");a=o("aNJCr").getBundleURL("1QMrX")+o("iE7OH").resolve("34dqz");var d;d=o("aNJCr").getBundleURL("1QMrX")+o("iE7OH").resolve("gNz39");var g;g=o("aNJCr").getBundleURL("1QMrX")+o("iE7OH").resolve("jD4zk");var f;f=o("aNJCr").getBundleURL("1QMrX")+o("iE7OH").resolve("cViWx");var v;v=o("aNJCr").getBundleURL("1QMrX")+o("iE7OH").resolve("2VEnG");var h;h=o("aNJCr").getBundleURL("1QMrX")+o("iE7OH").resolve("8Y5Mm");var m;m=o("aNJCr").getBundleURL("1QMrX")+o("iE7OH").resolve("c1l3T");var E;E=o("aNJCr").getBundleURL("1QMrX")+o("iE7OH").resolve("410VS");var b=o("kvC6y"),_={listEl:document.querySelector(".js-shopping-list"),prevButton:document.querySelector(".pagination-prev"),nextButton:document.querySelector(".pagination-next"),currentSpan:document.querySelector(".pagination-current")};_.prevButton.addEventListener("click",C),_.nextButton.addEventListener("click",A);var k=1,y=(0,p.load)(p.LOCAL_STORAGE_KEY),S=y||[];function x(e){return H.apply(this,arguments)}function H(){return(H=t(c)(t(s).mark((function e(n){var i,r,o,a,c,p,d,g,f;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,b.default)(),e.prev=1,i=n.map((function(e){return u.default.fetchBookById(e)})),e.next=5,Promise.allSettled(i);case 5:r=e.sent,o=r.filter((function(e){return"fulfilled"===e.status})).map((function(e){return e.value})),a=o.length,c=Math.ceil(a/3),d=(p=3*(k-1))+3,g=o.slice(p,d),f=R(g),_.listEl.innerHTML=f,_.listEl.addEventListener("click",L),q(k,c),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),l.Notify.failure("HTTP request failed");case 21:(0,b.default)();case 22:case"end":return e.stop()}}),e,null,[[1,18]])})))).apply(this,arguments)}function L(e){var t=(0,p.load)(p.LOCAL_STORAGE_KEY);if(e.target.closest(".js-remove")){var n=e.target.closest("[data-id]").dataset.id;_.listEl.querySelector("[data-id='".concat(n,"']")).remove();var i=t.filter((function(e){return e!==n}));if((0,p.save)(p.LOCAL_STORAGE_KEY,i),(0,p.load)(p.LOCAL_STORAGE_KEY).length){var r=i.length,o=Math.ceil(r/3);k>o&&(k=o),x(i),q(k,o),_.listEl.classList.remove("shopping-list-empty"),document.querySelector(".pagination").classList.remove("hidden")}else{_.listEl.innerHTML=w();q(k=1,1),O(),document.querySelector(".pagination").classList.add("hidden")}}}function O(){document.querySelector(".pagination").style.display="none"}function R(e){return e.map((function(e){var n=e._id,i=e.book_image,r=e.list_name,o=e.description,a=e.author,c=e.buy_links,s=e.title,l=c.find((function(e){return e.name.toLowerCase().includes("amazon")})).url,u=c.find((function(e){return e.name.toLowerCase().includes("apple")})).url,p=c.find((function(e){return e.name.toLowerCase().includes("bookshop")})).url;return'\n     <li data-id="'.concat(n,'" class="js-book shopping-list-js-book"><div class="shopping-list-book-image-wrapper"><img src="').concat(i,'" alt="').concat(s,'" class="shopping-list-book-image" width="" height=""/></div><div><h2 class="shopping-list-title-book">').concat(s,'</h2><p class="shopping-list-list-name">').concat(r,'</p><p class="shopping-list-description">').concat(o,'</p><div class="shopping-list-author-links"><p class="shopping-list-book-author">').concat(a,'</p><ul class="shopping-list-links-list"><li><a href="').concat(l,'" class="shopping-list-links-icon-amazon" target="_blank" rel="noreferrer noopener"><img src="').concat(t(v),'" alt="icon of Amazon" width="" height=""/></a></li><li><a href="').concat(u,'" class="shopping-list-links-icon-apple" target="_blank" rel="noreferrer noopener"><img src="').concat(t(h),'" alt="icon of Apple-books" width="" height="" /></a></li><li><a href="').concat(p,'" class="shopping-list-links-icon" target="_blank" rel="noreferrer noopener"><img src="').concat(t(m),'" alt="icon of bookshop" width="" height="" /></a></li></ul></div><button data-id="').concat(n,'" class="js-remove shopping-list-btn-remove" type="button"><svg class="icon-remove shopping-list-icon-remove" width="18px" height="18px"><use href="').concat(t(E),'#icon-dump"></use></svg></button></div></li>')})).join("")}function w(){return'<div class="shopping-list-default"><p class="shopping-list-default-message">This page is empty, add some books and proceed to order.</p><picture><source\n          srcset="'.concat(t(g)," 1x, ").concat(t(f),' 2x"\n          media="(min-width: 768px)"\n        />\n        <source\n          srcset="').concat(t(a)," 1x, ").concat(t(d),' 2x"\n          media="(min-width: 320px)"\n        />\n        <img\n          src="').concat(t(a),'"\n          class="shopping-list-default-picture"\n          alt="stack of books"\n          width="265"\n          height="198"\n        />\n      </picture>\n    </div>')}function q(e,t){var n=document.querySelector(".pagination-prev"),i=document.querySelector(".pagination-next"),r=document.querySelector(".pagination-current"),o=document.querySelector(".pagination-total");r.textContent=e,o.textContent="of ".concat(t),n.disabled=1===e,i.disabled=e===t}function C(){k>1&&(k--,x(S))}function A(){var e=S.length,t=Math.ceil(e/3);k<t&&(k++,x(S))}S.length?(x(S),document.querySelector(".pagination").style.display="flex"):(_.listEl.innerHTML=w(),O()),_.prevButton.addEventListener("click",C),_.nextButton.addEventListener("click",A),o("9VC5X"),o("cRUDO");var M=document.querySelector(".active-page");M&&M.classList.remove("active-page");var B=document.querySelector(".modal-nav-link.active-page");B&&B.classList.remove("active-page"),document.querySelector(".js-shopping-list-page").classList.add("active-page"),document.querySelector(".js-shopping-list-page-mobile").classList.add("active-page")}();
//# sourceMappingURL=shopping-list.28143f05.js.map
