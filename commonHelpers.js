import{S as l,i as c}from"./assets/vendor-9310f15c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u=document.querySelector(".form"),d=document.querySelector(".gallery"),f=document.querySelector(".text-input"),i=document.querySelector(".loader"),m=new l(".gallery a",{captionsData:"alt",overlayOpacity:.5});function p(){c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight",close:!1,closeOnClick:!0})}u.addEventListener("submit",g);function g(o){o.preventDefault(),i.style.display="block";const s=new URLSearchParams({key:"41488002-513c6a9a4c115eae6a99045d3",q:f.value,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`https://pixabay.com/api/?${s}`).then(r=>{if(i.style.display="none",!r.ok)throw new Error(r.status);return r.json()}).then(r=>{if(r.hits.length===0)return p();const n=r.hits.reduce((e,t)=>e+h(t),"");d.innerHTML=n,m.refresh()}).catch(r=>{showAlert(r.toString())})}function h(o){return`<li>
    <a href="${o.largeImageURL}">
        <img src="${o.webformatURL}" alt="${o.tags}">
    </a>
    <div class="info">
        <div class="image-info">
            <span>Likes</span>
            <span class="image-value">${o.likes}</span>
        </div>
        <div class="image-info">
            <span>Views</span>
            <span class="image-value">${o.views}</span>
        </div>
        <div class="image-info">
            <span>Comments</span>
            <span class="image-value">${o.comments}</span>
        </div>
        <div class="image-info">
            <span>Downloads</span>
            <span class="image-value">${o.downloads}</span>
        </div>
    </div>
    </li>`}
//# sourceMappingURL=commonHelpers.js.map
