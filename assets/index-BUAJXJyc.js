var d=Object.defineProperty;var u=(r,t,o)=>t in r?d(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o;var i=(r,t,o)=>u(r,typeof t!="symbol"?t+"":t,o);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();class l{constructor(t){i(this,"isLoaded",!1);i(this,"img");this.img=new Image,this.img.src=t,this.img.onload=()=>{this.isLoaded=!0,console.log(this)}}}const f={sky:"/sprites/sky.png",ground:"/sprites/ground.png",hero:"/sprites/hero-sheet.png",shadow:"/sprites/shadow.png",rod:"/sprites/rod.png"},p=new l(f.sky),m=document.querySelector("#game-canvas"),c=m.getContext("2d");class g{constructor(){i(this,"rafId",null);i(this,"update",()=>{console.log("twuj stary"),this.rafId=requestAnimationFrame(this.update),c==null||c.drawImage(p.img,0,0)})}start(){this.rafId=requestAnimationFrame(this.update)}stop(){this.rafId&&cancelAnimationFrame(this.rafId)}}const h=new g;h.start();
