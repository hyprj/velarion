var d=Object.defineProperty;var u=(s,t,o)=>t in s?d(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o;var i=(s,t,o)=>u(s,typeof t!="symbol"?t+"":t,o);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();class l{constructor(t){i(this,"isLoaded",!1);i(this,"img");this.img=new Image,this.img.src=t,this.img.onload=()=>{this.isLoaded=!0,console.log(this)}}}const f={sky:"/velarion/sprites/sky.png",ground:"/sprites/ground.png",hero:"/sprites/hero-sheet.png",shadow:"/sprites/shadow.png",rod:"/sprites/rod.png"},p=new l(f.sky),m=document.querySelector("#game-canvas"),a=m.getContext("2d");class g{constructor(){i(this,"rafId",null);i(this,"update",()=>{console.log("twuj stary"),this.rafId=requestAnimationFrame(this.update),a==null||a.drawImage(p.img,0,0)})}start(){this.rafId=requestAnimationFrame(this.update)}stop(){this.rafId&&cancelAnimationFrame(this.rafId)}}const h=new g;h.start();