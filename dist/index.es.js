(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.id="react-tw-ai-client",t.appendChild(document.createTextNode('@import"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap";*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:Roboto,Helvetica,Arial,sans-serif;font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.tw--fixed{position:fixed}.tw--absolute{position:absolute}.tw--relative{position:relative}.tw---top-1\\/2{top:-50%}.tw--bottom-0{bottom:0}.tw--bottom-1{bottom:.25rem}.tw--bottom-\\[-16px\\]{bottom:-16px}.tw--left-0{left:0}.tw--right-0{right:0}.tw--right-4{right:1rem}.tw--right-\\[-10px\\]{right:-10px}.tw--top-0{top:0}.tw--top-8{top:2rem}.tw--top-\\[-30px\\]{top:-30px}.tw--top-\\[50\\%\\]{top:50%}.tw--z-50{z-index:50}.tw--z-\\[101\\]{z-index:101}.tw--m-0{margin:0}.tw--m-auto{margin:auto}.tw--mx-1{margin-left:.25rem;margin-right:.25rem}.tw--mx-10{margin-left:2.5rem;margin-right:2.5rem}.tw--mx-auto{margin-left:auto;margin-right:auto}.tw--my-1{margin-top:.25rem;margin-bottom:.25rem}.tw--my-2{margin-top:.5rem;margin-bottom:.5rem}.tw--my-4{margin-top:1rem;margin-bottom:1rem}.tw--mb-6{margin-bottom:1.5rem}.tw--mb-7{margin-bottom:1.75rem}.tw--mr-5{margin-right:1.25rem}.tw--mr-\\[5px\\]{margin-right:5px}.tw--mt-24{margin-top:6rem}.tw--mt-\\[30px\\]{margin-top:30px}.tw--box-border{box-sizing:border-box}.tw--box-content{box-sizing:content-box}.tw--block{display:block}.tw--inline-block{display:inline-block}.tw--flex{display:flex}.tw--grid{display:grid}.tw--hidden{display:none}.tw--h-14{height:3.5rem}.tw--h-16{height:4rem}.tw--h-4{height:1rem}.tw--h-6{height:1.5rem}.tw--h-8{height:2rem}.tw--h-\\[12px\\]{height:12px}.tw--h-screen{height:100vh}.tw--max-h-14{max-height:3.5rem}.tw--max-h-\\[700px\\]{max-height:700px}.tw--max-h-full{max-height:100%}.tw--max-h-screen{max-height:100vh}.tw--min-h-\\[400px\\]{min-height:400px}.tw--w-10{width:2.5rem}.tw--w-16{width:4rem}.tw--w-4{width:1rem}.tw--w-6{width:1.5rem}.tw--w-64{width:16rem}.tw--w-8{width:2rem}.tw--w-\\[12px\\]{width:12px}.tw--w-full{width:100%}.tw--w-screen{width:100vw}.tw--max-w-\\[280px\\]{max-width:280px}.tw--max-w-\\[335px\\]{max-width:335px}.tw--max-w-\\[500px\\]{max-width:500px}.tw--max-w-md{max-width:28rem}.tw--max-w-xs{max-width:20rem}.tw--flex-1{flex:1 1 0%}.tw--shrink{flex-shrink:1}.tw--shrink-0{flex-shrink:0}.tw--grow-0{flex-grow:0}.tw--translate-x-72{--tw-translate-x: 18rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.tw--translate-y-1\\/2{--tw-translate-y: 50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.tw--translate-y-\\[-50\\%\\]{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes tw--dark-shadow-dots{0%,33%{background:rgba(255,255,255,.5);box-shadow:-31px 0 #f53374,31px 0 #ffffff80}66%{background:#f53374;box-shadow:-31px 0 #ffffff80,31px 0 #ffffff80}to,0%{background:rgba(255,255,255,.5);box-shadow:-31px 0 #ffffff80,31px 0 #f53374}}.tw--animate-dark-shadow-dots{animation:tw--dark-shadow-dots 2s linear infinite}@keyframes tw--light-shadow-dots{0%,33%{background:rgba(202,202,219,.6);box-shadow:-31px 0 #21bb5a,31px 0 #cacadb99}66%{background:#21bb5a;box-shadow:-31px 0 #cacadb99,31px 0 #cacadb99}to,0%{background:rgba(202,202,219,.6);box-shadow:-31px 0 #cacadb99,31px 0 #21bb5a}}.tw--animate-light-shadow-dots{animation:tw--light-shadow-dots 2s linear infinite}@keyframes tw--rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.tw--animate-rotate{animation:tw--rotate .5s linear infinite}@keyframes tw--text-spin{0%{transform:translate(18rem)}6.25%,12.5%{transform:translate(-.5rem)}18.75%,25%{transform:translate(-21.5rem)}31.25%,37.5%{transform:translate(-42.5rem)}43.75%,50%{transform:translate(-63.5rem)}56.25%,62.5%{transform:translate(-84.5rem)}68.75%,75%{transform:translate(-105.5rem)}81.25%,87.5%{transform:translate(-126.5rem)}93.75%,to{transform:translate(-147.5em)}}.tw--animate-text-spin{animation:tw--text-spin 30s linear infinite}.tw--animate-wave{animation:tw--wave 1.3s linear infinite}.tw--animate-wave-delay{animation:tw--wave 1.3s linear infinite -1.1s}@keyframes tw--wave{0%{transform:initial}60%{transform:initial}to{transform:initial}30%{transform:translateY(-15px)}}.tw--animate-wave-delay-2{animation:tw--wave 1.3s linear infinite -.9s}.tw--cursor-pointer{cursor:pointer}.tw--flex-row{flex-direction:row}.tw--flex-col{flex-direction:column}.tw--flex-wrap{flex-wrap:wrap}.tw--items-end{align-items:flex-end}.tw--items-center{align-items:center}.tw--items-stretch{align-items:stretch}.tw--justify-center{justify-content:center}.tw--justify-between{justify-content:space-between}.tw--gap-2{gap:.5rem}.tw--space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.tw--space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.tw--self-stretch{align-self:stretch}.tw--justify-self-start{justify-self:start}.tw--justify-self-end{justify-self:end}.tw--justify-self-stretch{justify-self:stretch}.tw--overflow-hidden{overflow:hidden}.tw--overflow-y-scroll{overflow-y:scroll}.tw--rounded-3xl{border-radius:1.5rem}.tw--rounded-\\[20px\\]{border-radius:20px}.tw--rounded-full{border-radius:9999px}.tw--rounded-lg{border-radius:.5rem}.tw--rounded-xl{border-radius:.75rem}.tw--border-0{border-width:0px}.tw--border-\\[5px\\]{border-width:5px}.tw--border-x{border-left-width:1px;border-right-width:1px}.tw--border-r{border-right-width:1px}.tw--border-solid{border-style:solid}.tw--border-black{--tw-border-opacity: 1;border-color:rgb(0 0 0 / var(--tw-border-opacity))}.tw--border-light-ember{--tw-border-opacity: 1;border-color:rgb(202 202 219 / var(--tw-border-opacity))}.tw--border-light-zephyr\\/\\[0\\.1\\]{border-color:#2b31391a}.tw--border-l-dark-zephyr\\/\\[0\\.6\\]{border-left-color:#fff9}.tw--border-l-light-zephyr\\/\\[0\\.6\\]{border-left-color:#2b313999}.tw--border-r-\\[\\#cacadb\\]{--tw-border-opacity: 1;border-right-color:rgb(202 202 219 / var(--tw-border-opacity))}.tw--border-t-dark-zephyr\\/\\[0\\.6\\]{border-top-color:#fff9}.tw--border-t-light-zephyr\\/\\[0\\.6\\]{border-top-color:#2b313999}.tw--border-opacity-30{--tw-border-opacity: .3}.tw--bg-\\[transparent\\]{background-color:transparent}.tw--bg-dark-glazeBg{--tw-bg-opacity: 1;background-color:rgb(179 186 198 / var(--tw-bg-opacity))}.tw--bg-dark-iota-dots{--tw-bg-opacity: 1;background-color:rgb(33 187 90 / var(--tw-bg-opacity))}.tw--bg-dark-loader,.tw--bg-dark-lumina{--tw-bg-opacity: 1;background-color:rgb(37 34 57 / var(--tw-bg-opacity))}.tw--bg-dark-neon{--tw-bg-opacity: 1;background-color:rgb(1 154 255 / var(--tw-bg-opacity))}.tw--bg-dark-pale-dots{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.tw--bg-dark-seraph{--tw-bg-opacity: 1;background-color:rgb(245 51 115 / var(--tw-bg-opacity))}.tw--bg-dark-sigma{--tw-bg-opacity: 1;background-color:rgb(15 14 30 / var(--tw-bg-opacity))}.tw--bg-dark-whisper{--tw-bg-opacity: 1;background-color:rgb(21 18 38 / var(--tw-bg-opacity))}.tw--bg-dark-zephyr{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.tw--bg-light-glaze,.tw--bg-light-iota-dots{--tw-bg-opacity: 1;background-color:rgb(33 187 90 / var(--tw-bg-opacity))}.tw--bg-light-loader{--tw-bg-opacity: 1;background-color:rgb(246 248 250 / var(--tw-bg-opacity))}.tw--bg-light-lumina{--tw-bg-opacity: 1;background-color:rgb(240 242 245 / var(--tw-bg-opacity))}.tw--bg-light-overlay{background-color:#0f0e1e33}.tw--bg-light-pale-dots{--tw-bg-opacity: 1;background-color:rgb(202 202 219 / var(--tw-bg-opacity))}.tw--bg-light-seraph{--tw-bg-opacity: 1;background-color:rgb(33 187 90 / var(--tw-bg-opacity))}.tw--bg-light-whisper{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.tw--bg-light-zephyr{--tw-bg-opacity: 1;background-color:rgb(43 49 57 / var(--tw-bg-opacity))}.tw--bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.tw--p-0{padding:0}.tw--p-0\\.5{padding:.125rem}.tw--p-1{padding:.25rem}.tw--p-3{padding:.75rem}.tw--p-5{padding:1.25rem}.tw--p-7{padding:1.75rem}.tw--px-4{padding-left:1rem;padding-right:1rem}.tw--px-5{padding-left:1.25rem;padding-right:1.25rem}.tw--py-2{padding-top:.5rem;padding-bottom:.5rem}.tw--py-3{padding-top:.75rem;padding-bottom:.75rem}.tw--py-5{padding-top:1.25rem;padding-bottom:1.25rem}.tw--pb-1{padding-bottom:.25rem}.tw--pb-6{padding-bottom:1.5rem}.tw--pl-3{padding-left:.75rem}.tw--pl-\\[35px\\]{padding-left:35px}.tw--pr-2{padding-right:.5rem}.tw--pr-\\[5px\\]{padding-right:5px}.tw--pt-12{padding-top:3rem}.tw--text-left{text-align:left}.tw--text-center{text-align:center}.tw--text-2xl\\/8{font-size:1.5rem;line-height:2rem}.tw--text-\\[10px\\]{font-size:10px}.tw--text-\\[12\\.8px\\]{font-size:12.8px}.tw--text-\\[16px\\]{font-size:16px}.tw--text-\\[20px\\]{font-size:20px}.tw--text-base{font-size:1rem;line-height:1.5rem}.tw--text-lg{font-size:1.125rem;line-height:1.75rem}.tw--text-lg\\/6{font-size:1.125rem;line-height:1.5rem}.tw--text-lg\\/8{font-size:1.125rem;line-height:2rem}.tw--text-sm\\/5{font-size:.875rem;line-height:1.25rem}.tw--text-xl\\/7{font-size:1.25rem;line-height:1.75rem}.tw--text-xs\\/3{font-size:.75rem;line-height:.75rem}.tw--font-bold{font-weight:700}.tw--font-medium{font-weight:500}.tw--font-normal{font-weight:400}.tw--font-semibold{font-weight:600}.tw--leading-5{line-height:1.25rem}.tw--leading-\\[1\\.4\\]{line-height:1.4}.tw--leading-\\[1\\.56\\]{line-height:1.56}.tw--leading-\\[1\\.63\\]{line-height:1.63}.tw--leading-\\[1\\]{line-height:1}.tw--leading-\\[2\\]{line-height:2}.tw--text-\\[\\#ff0043\\]{--tw-text-opacity: 1;color:rgb(255 0 67 / var(--tw-text-opacity))}.tw--text-\\[inherit\\]{color:inherit}.tw--text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.tw--text-dark-glazeText{--tw-text-opacity: 1;color:rgb(21 18 38 / var(--tw-text-opacity))}.tw--text-dark-seraph{--tw-text-opacity: 1;color:rgb(245 51 115 / var(--tw-text-opacity))}.tw--text-dark-zephyr,.tw--text-dark-zeta{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.tw--text-light-seraph{--tw-text-opacity: 1;color:rgb(33 187 90 / var(--tw-text-opacity))}.tw--text-light-zephyr{--tw-text-opacity: 1;color:rgb(43 49 57 / var(--tw-text-opacity))}.tw--text-light-zeta{--tw-text-opacity: 1;color:rgb(15 14 30 / var(--tw-text-opacity))}.tw--text-muted-blue{color:#0f0e1e99}.tw--text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.tw--text-opacity-60{--tw-text-opacity: .6}.tw--text-opacity-80{--tw-text-opacity: .8}.tw--opacity-40{opacity:.4}.tw--opacity-60{opacity:.6}.tw--shadow-\\[0_2px_7px_-6px\\]{--tw-shadow: 0 2px 7px -6px;--tw-shadow-colored: 0 2px 7px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-\\[0px_12px_24px_-4px_rgba\\(1\\,154\\,255\\,0\\.2\\)\\]{--tw-shadow: 0px 12px 24px -4px rgba(1,154,255,.2);--tw-shadow-colored: 0px 12px 24px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-dark-card{--tw-shadow: 0 12px 24px 0 rgba(0, 0, 0, .12), 0 4px 8px 0 rgba(0, 0, 0, .1);--tw-shadow-colored: 0 12px 24px 0 var(--tw-shadow-color), 0 4px 8px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-dark-loading-dots{--tw-shadow: -24px 0 rgba(255, 255, 255, .5), 24px 0 rgba(255, 255, 255, .5);--tw-shadow-colored: -24px 0 var(--tw-shadow-color), 24px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-light-card{--tw-shadow: 0 12px 24px 0 rgba(43, 49, 57, .06), 0 4px 8px 0 rgba(43, 55, 70, .04);--tw-shadow-colored: 0 12px 24px 0 var(--tw-shadow-color), 0 4px 8px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-light-loading-dots{--tw-shadow: -24px 0 rgba(201, 201, 201, .5), 24px 0 rgba(201, 201, 201, .5);--tw-shadow-colored: -24px 0 var(--tw-shadow-color), 24px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-dark-zephyr{--tw-shadow-color: #ffffff;--tw-shadow: var(--tw-shadow-colored)}.tw--shadow-light-zephyr{--tw-shadow-color: #2b3139;--tw-shadow: var(--tw-shadow-colored)}.after\\:tw--ml-1:after{content:var(--tw-content);margin-left:.25rem}.after\\:tw--inline-block:after{content:var(--tw-content);display:inline-block}.after\\:tw--hidden:after{content:var(--tw-content);display:none}.after\\:tw--h-4:after{content:var(--tw-content);height:1rem}.after\\:tw--w-1:after{content:var(--tw-content);width:.25rem}@keyframes tw--blink{0%{content:var(--tw-content);opacity:1}49%{content:var(--tw-content);opacity:1}50%{content:var(--tw-content);opacity:0}to{content:var(--tw-content);opacity:0}}.after\\:tw--animate-blink:after{content:var(--tw-content);animation:tw--blink .5s infinite}.after\\:tw--bg-dark-zephyr:after{content:var(--tw-content);--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.after\\:tw--bg-light-zephyr:after{content:var(--tw-content);--tw-bg-opacity: 1;background-color:rgb(43 49 57 / var(--tw-bg-opacity))}.focus\\:tw--outline-none:focus{outline:2px solid transparent;outline-offset:2px}@media (min-width: 768px){.md\\:tw--max-w-3xl{max-width:48rem}}')),document.head.appendChild(t)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import zr, { useState as vt, useRef as Yn } from "react";
import Qn from "react-dom";
import { useDispatch as Jn, useSelector as Xn, Provider as Zn } from "react-redux";
import { createSlice as Et, configureStore as Kn } from "@reduxjs/toolkit";
import { io as ei } from "socket.io-client";
import { node as Pt, string as fe, bool as Ot, func as je, element as ti, object as Tt, array as ri } from "prop-types";
var It = {}, Dr = {}, zt = {};
zt.byteLength = oi;
zt.toByteArray = ai;
zt.fromByteArray = ui;
var ke = [], me = [], ni = typeof Uint8Array < "u" ? Uint8Array : Array, Ht = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var ot = 0, ii = Ht.length; ot < ii; ++ot)
  ke[ot] = Ht[ot], me[Ht.charCodeAt(ot)] = ot;
me["-".charCodeAt(0)] = 62;
me["_".charCodeAt(0)] = 63;
function Vr(e) {
  var n = e.length;
  if (n % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var o = e.indexOf("=");
  o === -1 && (o = n);
  var a = o === n ? 0 : 4 - o % 4;
  return [o, a];
}
function oi(e) {
  var n = Vr(e), o = n[0], a = n[1];
  return (o + a) * 3 / 4 - a;
}
function si(e, n, o) {
  return (n + o) * 3 / 4 - o;
}
function ai(e) {
  var n, o = Vr(e), a = o[0], f = o[1], p = new ni(si(e, a, f)), d = 0, l = f > 0 ? a - 4 : a, g;
  for (g = 0; g < l; g += 4)
    n = me[e.charCodeAt(g)] << 18 | me[e.charCodeAt(g + 1)] << 12 | me[e.charCodeAt(g + 2)] << 6 | me[e.charCodeAt(g + 3)], p[d++] = n >> 16 & 255, p[d++] = n >> 8 & 255, p[d++] = n & 255;
  return f === 2 && (n = me[e.charCodeAt(g)] << 2 | me[e.charCodeAt(g + 1)] >> 4, p[d++] = n & 255), f === 1 && (n = me[e.charCodeAt(g)] << 10 | me[e.charCodeAt(g + 1)] << 4 | me[e.charCodeAt(g + 2)] >> 2, p[d++] = n >> 8 & 255, p[d++] = n & 255), p;
}
function li(e) {
  return ke[e >> 18 & 63] + ke[e >> 12 & 63] + ke[e >> 6 & 63] + ke[e & 63];
}
function ci(e, n, o) {
  for (var a, f = [], p = n; p < o; p += 3)
    a = (e[p] << 16 & 16711680) + (e[p + 1] << 8 & 65280) + (e[p + 2] & 255), f.push(li(a));
  return f.join("");
}
function ui(e) {
  for (var n, o = e.length, a = o % 3, f = [], p = 16383, d = 0, l = o - a; d < l; d += p)
    f.push(ci(e, d, d + p > l ? l : d + p));
  return a === 1 ? (n = e[o - 1], f.push(
    ke[n >> 2] + ke[n << 4 & 63] + "=="
  )) : a === 2 && (n = (e[o - 2] << 8) + e[o - 1], f.push(
    ke[n >> 10] + ke[n >> 4 & 63] + ke[n << 2 & 63] + "="
  )), f.join("");
}
var cr = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
cr.read = function(e, n, o, a, f) {
  var p, d, l = f * 8 - a - 1, g = (1 << l) - 1, x = g >> 1, y = -7, v = o ? f - 1 : 0, C = o ? -1 : 1, I = e[n + v];
  for (v += C, p = I & (1 << -y) - 1, I >>= -y, y += l; y > 0; p = p * 256 + e[n + v], v += C, y -= 8)
    ;
  for (d = p & (1 << -y) - 1, p >>= -y, y += a; y > 0; d = d * 256 + e[n + v], v += C, y -= 8)
    ;
  if (p === 0)
    p = 1 - x;
  else {
    if (p === g)
      return d ? NaN : (I ? -1 : 1) * (1 / 0);
    d = d + Math.pow(2, a), p = p - x;
  }
  return (I ? -1 : 1) * d * Math.pow(2, p - a);
};
cr.write = function(e, n, o, a, f, p) {
  var d, l, g, x = p * 8 - f - 1, y = (1 << x) - 1, v = y >> 1, C = f === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, I = a ? 0 : p - 1, j = a ? 1 : -1, D = n < 0 || n === 0 && 1 / n < 0 ? 1 : 0;
  for (n = Math.abs(n), isNaN(n) || n === 1 / 0 ? (l = isNaN(n) ? 1 : 0, d = y) : (d = Math.floor(Math.log(n) / Math.LN2), n * (g = Math.pow(2, -d)) < 1 && (d--, g *= 2), d + v >= 1 ? n += C / g : n += C * Math.pow(2, 1 - v), n * g >= 2 && (d++, g /= 2), d + v >= y ? (l = 0, d = y) : d + v >= 1 ? (l = (n * g - 1) * Math.pow(2, f), d = d + v) : (l = n * Math.pow(2, v - 1) * Math.pow(2, f), d = 0)); f >= 8; e[o + I] = l & 255, I += j, l /= 256, f -= 8)
    ;
  for (d = d << f | l, x += f; x > 0; e[o + I] = d & 255, I += j, d /= 256, x -= 8)
    ;
  e[o + I - j] |= D * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  const n = zt, o = cr, a = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = l, e.SlowBuffer = N, e.INSPECT_MAX_BYTES = 50;
  const f = 2147483647;
  e.kMaxLength = f, l.TYPED_ARRAY_SUPPORT = p(), !l.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function p() {
    try {
      const i = new Uint8Array(1), t = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(i, t), i.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(l.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (l.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(l.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (l.isBuffer(this))
        return this.byteOffset;
    }
  });
  function d(i) {
    if (i > f)
      throw new RangeError('The value "' + i + '" is invalid for option "size"');
    const t = new Uint8Array(i);
    return Object.setPrototypeOf(t, l.prototype), t;
  }
  function l(i, t, r) {
    if (typeof i == "number") {
      if (typeof t == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return v(i);
    }
    return g(i, t, r);
  }
  l.poolSize = 8192;
  function g(i, t, r) {
    if (typeof i == "string")
      return C(i, t);
    if (ArrayBuffer.isView(i))
      return j(i);
    if (i == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof i
      );
    if (de(i, ArrayBuffer) || i && de(i.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (de(i, SharedArrayBuffer) || i && de(i.buffer, SharedArrayBuffer)))
      return D(i, t, r);
    if (typeof i == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const s = i.valueOf && i.valueOf();
    if (s != null && s !== i)
      return l.from(s, t, r);
    const u = A(i);
    if (u)
      return u;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof i[Symbol.toPrimitive] == "function")
      return l.from(i[Symbol.toPrimitive]("string"), t, r);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof i
    );
  }
  l.from = function(i, t, r) {
    return g(i, t, r);
  }, Object.setPrototypeOf(l.prototype, Uint8Array.prototype), Object.setPrototypeOf(l, Uint8Array);
  function x(i) {
    if (typeof i != "number")
      throw new TypeError('"size" argument must be of type number');
    if (i < 0)
      throw new RangeError('The value "' + i + '" is invalid for option "size"');
  }
  function y(i, t, r) {
    return x(i), i <= 0 ? d(i) : t !== void 0 ? typeof r == "string" ? d(i).fill(t, r) : d(i).fill(t) : d(i);
  }
  l.alloc = function(i, t, r) {
    return y(i, t, r);
  };
  function v(i) {
    return x(i), d(i < 0 ? 0 : Y(i) | 0);
  }
  l.allocUnsafe = function(i) {
    return v(i);
  }, l.allocUnsafeSlow = function(i) {
    return v(i);
  };
  function C(i, t) {
    if ((typeof t != "string" || t === "") && (t = "utf8"), !l.isEncoding(t))
      throw new TypeError("Unknown encoding: " + t);
    const r = we(i, t) | 0;
    let s = d(r);
    const u = s.write(i, t);
    return u !== r && (s = s.slice(0, u)), s;
  }
  function I(i) {
    const t = i.length < 0 ? 0 : Y(i.length) | 0, r = d(t);
    for (let s = 0; s < t; s += 1)
      r[s] = i[s] & 255;
    return r;
  }
  function j(i) {
    if (de(i, Uint8Array)) {
      const t = new Uint8Array(i);
      return D(t.buffer, t.byteOffset, t.byteLength);
    }
    return I(i);
  }
  function D(i, t, r) {
    if (t < 0 || i.byteLength < t)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (i.byteLength < t + (r || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let s;
    return t === void 0 && r === void 0 ? s = new Uint8Array(i) : r === void 0 ? s = new Uint8Array(i, t) : s = new Uint8Array(i, t, r), Object.setPrototypeOf(s, l.prototype), s;
  }
  function A(i) {
    if (l.isBuffer(i)) {
      const t = Y(i.length) | 0, r = d(t);
      return r.length === 0 || i.copy(r, 0, 0, t), r;
    }
    if (i.length !== void 0)
      return typeof i.length != "number" || pt(i.length) ? d(0) : I(i);
    if (i.type === "Buffer" && Array.isArray(i.data))
      return I(i.data);
  }
  function Y(i) {
    if (i >= f)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + f.toString(16) + " bytes");
    return i | 0;
  }
  function N(i) {
    return +i != i && (i = 0), l.alloc(+i);
  }
  l.isBuffer = function(t) {
    return t != null && t._isBuffer === !0 && t !== l.prototype;
  }, l.compare = function(t, r) {
    if (de(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)), de(r, Uint8Array) && (r = l.from(r, r.offset, r.byteLength)), !l.isBuffer(t) || !l.isBuffer(r))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (t === r)
      return 0;
    let s = t.length, u = r.length;
    for (let h = 0, w = Math.min(s, u); h < w; ++h)
      if (t[h] !== r[h]) {
        s = t[h], u = r[h];
        break;
      }
    return s < u ? -1 : u < s ? 1 : 0;
  }, l.isEncoding = function(t) {
    switch (String(t).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, l.concat = function(t, r) {
    if (!Array.isArray(t))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (t.length === 0)
      return l.alloc(0);
    let s;
    if (r === void 0)
      for (r = 0, s = 0; s < t.length; ++s)
        r += t[s].length;
    const u = l.allocUnsafe(r);
    let h = 0;
    for (s = 0; s < t.length; ++s) {
      let w = t[s];
      if (de(w, Uint8Array))
        h + w.length > u.length ? (l.isBuffer(w) || (w = l.from(w)), w.copy(u, h)) : Uint8Array.prototype.set.call(
          u,
          w,
          h
        );
      else if (l.isBuffer(w))
        w.copy(u, h);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      h += w.length;
    }
    return u;
  };
  function we(i, t) {
    if (l.isBuffer(i))
      return i.length;
    if (ArrayBuffer.isView(i) || de(i, ArrayBuffer))
      return i.byteLength;
    if (typeof i != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof i
      );
    const r = i.length, s = arguments.length > 2 && arguments[2] === !0;
    if (!s && r === 0)
      return 0;
    let u = !1;
    for (; ; )
      switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
          return r;
        case "utf8":
        case "utf-8":
          return et(i).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return r * 2;
        case "hex":
          return r >>> 1;
        case "base64":
          return Rt(i).length;
        default:
          if (u)
            return s ? -1 : et(i).length;
          t = ("" + t).toLowerCase(), u = !0;
      }
  }
  l.byteLength = we;
  function ge(i, t, r) {
    let s = !1;
    if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((r === void 0 || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0, t >>>= 0, r <= t))
      return "";
    for (i || (i = "utf8"); ; )
      switch (i) {
        case "hex":
          return Q(this, t, r);
        case "utf8":
        case "utf-8":
          return B(this, t, r);
        case "ascii":
          return $(this, t, r);
        case "latin1":
        case "binary":
          return G(this, t, r);
        case "base64":
          return R(this, t, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return pe(this, t, r);
        default:
          if (s)
            throw new TypeError("Unknown encoding: " + i);
          i = (i + "").toLowerCase(), s = !0;
      }
  }
  l.prototype._isBuffer = !0;
  function re(i, t, r) {
    const s = i[t];
    i[t] = i[r], i[r] = s;
  }
  l.prototype.swap16 = function() {
    const t = this.length;
    if (t % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let r = 0; r < t; r += 2)
      re(this, r, r + 1);
    return this;
  }, l.prototype.swap32 = function() {
    const t = this.length;
    if (t % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let r = 0; r < t; r += 4)
      re(this, r, r + 3), re(this, r + 1, r + 2);
    return this;
  }, l.prototype.swap64 = function() {
    const t = this.length;
    if (t % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let r = 0; r < t; r += 8)
      re(this, r, r + 7), re(this, r + 1, r + 6), re(this, r + 2, r + 5), re(this, r + 3, r + 4);
    return this;
  }, l.prototype.toString = function() {
    const t = this.length;
    return t === 0 ? "" : arguments.length === 0 ? B(this, 0, t) : ge.apply(this, arguments);
  }, l.prototype.toLocaleString = l.prototype.toString, l.prototype.equals = function(t) {
    if (!l.isBuffer(t))
      throw new TypeError("Argument must be a Buffer");
    return this === t ? !0 : l.compare(this, t) === 0;
  }, l.prototype.inspect = function() {
    let t = "";
    const r = e.INSPECT_MAX_BYTES;
    return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">";
  }, a && (l.prototype[a] = l.prototype.inspect), l.prototype.compare = function(t, r, s, u, h) {
    if (de(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)), !l.isBuffer(t))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t
      );
    if (r === void 0 && (r = 0), s === void 0 && (s = t ? t.length : 0), u === void 0 && (u = 0), h === void 0 && (h = this.length), r < 0 || s > t.length || u < 0 || h > this.length)
      throw new RangeError("out of range index");
    if (u >= h && r >= s)
      return 0;
    if (u >= h)
      return -1;
    if (r >= s)
      return 1;
    if (r >>>= 0, s >>>= 0, u >>>= 0, h >>>= 0, this === t)
      return 0;
    let w = h - u, _ = s - r;
    const K = Math.min(w, _), X = this.slice(u, h), ee = t.slice(r, s);
    for (let q = 0; q < K; ++q)
      if (X[q] !== ee[q]) {
        w = X[q], _ = ee[q];
        break;
      }
    return w < _ ? -1 : _ < w ? 1 : 0;
  };
  function ve(i, t, r, s, u) {
    if (i.length === 0)
      return -1;
    if (typeof r == "string" ? (s = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, pt(r) && (r = u ? 0 : i.length - 1), r < 0 && (r = i.length + r), r >= i.length) {
      if (u)
        return -1;
      r = i.length - 1;
    } else if (r < 0)
      if (u)
        r = 0;
      else
        return -1;
    if (typeof t == "string" && (t = l.from(t, s)), l.isBuffer(t))
      return t.length === 0 ? -1 : Ee(i, t, r, s, u);
    if (typeof t == "number")
      return t = t & 255, typeof Uint8Array.prototype.indexOf == "function" ? u ? Uint8Array.prototype.indexOf.call(i, t, r) : Uint8Array.prototype.lastIndexOf.call(i, t, r) : Ee(i, [t], r, s, u);
    throw new TypeError("val must be string, number or Buffer");
  }
  function Ee(i, t, r, s, u) {
    let h = 1, w = i.length, _ = t.length;
    if (s !== void 0 && (s = String(s).toLowerCase(), s === "ucs2" || s === "ucs-2" || s === "utf16le" || s === "utf-16le")) {
      if (i.length < 2 || t.length < 2)
        return -1;
      h = 2, w /= 2, _ /= 2, r /= 2;
    }
    function K(ee, q) {
      return h === 1 ? ee[q] : ee.readUInt16BE(q * h);
    }
    let X;
    if (u) {
      let ee = -1;
      for (X = r; X < w; X++)
        if (K(i, X) === K(t, ee === -1 ? 0 : X - ee)) {
          if (ee === -1 && (ee = X), X - ee + 1 === _)
            return ee * h;
        } else
          ee !== -1 && (X -= X - ee), ee = -1;
    } else
      for (r + _ > w && (r = w - _), X = r; X >= 0; X--) {
        let ee = !0;
        for (let q = 0; q < _; q++)
          if (K(i, X + q) !== K(t, q)) {
            ee = !1;
            break;
          }
        if (ee)
          return X;
      }
    return -1;
  }
  l.prototype.includes = function(t, r, s) {
    return this.indexOf(t, r, s) !== -1;
  }, l.prototype.indexOf = function(t, r, s) {
    return ve(this, t, r, s, !0);
  }, l.prototype.lastIndexOf = function(t, r, s) {
    return ve(this, t, r, s, !1);
  };
  function Pe(i, t, r, s) {
    r = Number(r) || 0;
    const u = i.length - r;
    s ? (s = Number(s), s > u && (s = u)) : s = u;
    const h = t.length;
    s > h / 2 && (s = h / 2);
    let w;
    for (w = 0; w < s; ++w) {
      const _ = parseInt(t.substr(w * 2, 2), 16);
      if (pt(_))
        return w;
      i[r + w] = _;
    }
    return w;
  }
  function Te(i, t, r, s) {
    return rt(et(t, i.length - r), i, r, s);
  }
  function _e(i, t, r, s) {
    return rt(Ct(t), i, r, s);
  }
  function S(i, t, r, s) {
    return rt(Rt(t), i, r, s);
  }
  function T(i, t, r, s) {
    return rt(tt(t, i.length - r), i, r, s);
  }
  l.prototype.write = function(t, r, s, u) {
    if (r === void 0)
      u = "utf8", s = this.length, r = 0;
    else if (s === void 0 && typeof r == "string")
      u = r, s = this.length, r = 0;
    else if (isFinite(r))
      r = r >>> 0, isFinite(s) ? (s = s >>> 0, u === void 0 && (u = "utf8")) : (u = s, s = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const h = this.length - r;
    if ((s === void 0 || s > h) && (s = h), t.length > 0 && (s < 0 || r < 0) || r > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    u || (u = "utf8");
    let w = !1;
    for (; ; )
      switch (u) {
        case "hex":
          return Pe(this, t, r, s);
        case "utf8":
        case "utf-8":
          return Te(this, t, r, s);
        case "ascii":
        case "latin1":
        case "binary":
          return _e(this, t, r, s);
        case "base64":
          return S(this, t, r, s);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return T(this, t, r, s);
        default:
          if (w)
            throw new TypeError("Unknown encoding: " + u);
          u = ("" + u).toLowerCase(), w = !0;
      }
  }, l.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function R(i, t, r) {
    return t === 0 && r === i.length ? n.fromByteArray(i) : n.fromByteArray(i.slice(t, r));
  }
  function B(i, t, r) {
    r = Math.min(i.length, r);
    const s = [];
    let u = t;
    for (; u < r; ) {
      const h = i[u];
      let w = null, _ = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
      if (u + _ <= r) {
        let K, X, ee, q;
        switch (_) {
          case 1:
            h < 128 && (w = h);
            break;
          case 2:
            K = i[u + 1], (K & 192) === 128 && (q = (h & 31) << 6 | K & 63, q > 127 && (w = q));
            break;
          case 3:
            K = i[u + 1], X = i[u + 2], (K & 192) === 128 && (X & 192) === 128 && (q = (h & 15) << 12 | (K & 63) << 6 | X & 63, q > 2047 && (q < 55296 || q > 57343) && (w = q));
            break;
          case 4:
            K = i[u + 1], X = i[u + 2], ee = i[u + 3], (K & 192) === 128 && (X & 192) === 128 && (ee & 192) === 128 && (q = (h & 15) << 18 | (K & 63) << 12 | (X & 63) << 6 | ee & 63, q > 65535 && q < 1114112 && (w = q));
        }
      }
      w === null ? (w = 65533, _ = 1) : w > 65535 && (w -= 65536, s.push(w >>> 10 & 1023 | 55296), w = 56320 | w & 1023), s.push(w), u += _;
    }
    return F(s);
  }
  const P = 4096;
  function F(i) {
    const t = i.length;
    if (t <= P)
      return String.fromCharCode.apply(String, i);
    let r = "", s = 0;
    for (; s < t; )
      r += String.fromCharCode.apply(
        String,
        i.slice(s, s += P)
      );
    return r;
  }
  function $(i, t, r) {
    let s = "";
    r = Math.min(i.length, r);
    for (let u = t; u < r; ++u)
      s += String.fromCharCode(i[u] & 127);
    return s;
  }
  function G(i, t, r) {
    let s = "";
    r = Math.min(i.length, r);
    for (let u = t; u < r; ++u)
      s += String.fromCharCode(i[u]);
    return s;
  }
  function Q(i, t, r) {
    const s = i.length;
    (!t || t < 0) && (t = 0), (!r || r < 0 || r > s) && (r = s);
    let u = "";
    for (let h = t; h < r; ++h)
      u += $t[i[h]];
    return u;
  }
  function pe(i, t, r) {
    const s = i.slice(t, r);
    let u = "";
    for (let h = 0; h < s.length - 1; h += 2)
      u += String.fromCharCode(s[h] + s[h + 1] * 256);
    return u;
  }
  l.prototype.slice = function(t, r) {
    const s = this.length;
    t = ~~t, r = r === void 0 ? s : ~~r, t < 0 ? (t += s, t < 0 && (t = 0)) : t > s && (t = s), r < 0 ? (r += s, r < 0 && (r = 0)) : r > s && (r = s), r < t && (r = t);
    const u = this.subarray(t, r);
    return Object.setPrototypeOf(u, l.prototype), u;
  };
  function L(i, t, r) {
    if (i % 1 !== 0 || i < 0)
      throw new RangeError("offset is not uint");
    if (i + t > r)
      throw new RangeError("Trying to access beyond buffer length");
  }
  l.prototype.readUintLE = l.prototype.readUIntLE = function(t, r, s) {
    t = t >>> 0, r = r >>> 0, s || L(t, r, this.length);
    let u = this[t], h = 1, w = 0;
    for (; ++w < r && (h *= 256); )
      u += this[t + w] * h;
    return u;
  }, l.prototype.readUintBE = l.prototype.readUIntBE = function(t, r, s) {
    t = t >>> 0, r = r >>> 0, s || L(t, r, this.length);
    let u = this[t + --r], h = 1;
    for (; r > 0 && (h *= 256); )
      u += this[t + --r] * h;
    return u;
  }, l.prototype.readUint8 = l.prototype.readUInt8 = function(t, r) {
    return t = t >>> 0, r || L(t, 1, this.length), this[t];
  }, l.prototype.readUint16LE = l.prototype.readUInt16LE = function(t, r) {
    return t = t >>> 0, r || L(t, 2, this.length), this[t] | this[t + 1] << 8;
  }, l.prototype.readUint16BE = l.prototype.readUInt16BE = function(t, r) {
    return t = t >>> 0, r || L(t, 2, this.length), this[t] << 8 | this[t + 1];
  }, l.prototype.readUint32LE = l.prototype.readUInt32LE = function(t, r) {
    return t = t >>> 0, r || L(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216;
  }, l.prototype.readUint32BE = l.prototype.readUInt32BE = function(t, r) {
    return t = t >>> 0, r || L(t, 4, this.length), this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
  }, l.prototype.readBigUInt64LE = be(function(t) {
    t = t >>> 0, Me(t, "offset");
    const r = this[t], s = this[t + 7];
    (r === void 0 || s === void 0) && $e(t, this.length - 8);
    const u = r + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24, h = this[++t] + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + s * 2 ** 24;
    return BigInt(u) + (BigInt(h) << BigInt(32));
  }), l.prototype.readBigUInt64BE = be(function(t) {
    t = t >>> 0, Me(t, "offset");
    const r = this[t], s = this[t + 7];
    (r === void 0 || s === void 0) && $e(t, this.length - 8);
    const u = r * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t], h = this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + s;
    return (BigInt(u) << BigInt(32)) + BigInt(h);
  }), l.prototype.readIntLE = function(t, r, s) {
    t = t >>> 0, r = r >>> 0, s || L(t, r, this.length);
    let u = this[t], h = 1, w = 0;
    for (; ++w < r && (h *= 256); )
      u += this[t + w] * h;
    return h *= 128, u >= h && (u -= Math.pow(2, 8 * r)), u;
  }, l.prototype.readIntBE = function(t, r, s) {
    t = t >>> 0, r = r >>> 0, s || L(t, r, this.length);
    let u = r, h = 1, w = this[t + --u];
    for (; u > 0 && (h *= 256); )
      w += this[t + --u] * h;
    return h *= 128, w >= h && (w -= Math.pow(2, 8 * r)), w;
  }, l.prototype.readInt8 = function(t, r) {
    return t = t >>> 0, r || L(t, 1, this.length), this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t];
  }, l.prototype.readInt16LE = function(t, r) {
    t = t >>> 0, r || L(t, 2, this.length);
    const s = this[t] | this[t + 1] << 8;
    return s & 32768 ? s | 4294901760 : s;
  }, l.prototype.readInt16BE = function(t, r) {
    t = t >>> 0, r || L(t, 2, this.length);
    const s = this[t + 1] | this[t] << 8;
    return s & 32768 ? s | 4294901760 : s;
  }, l.prototype.readInt32LE = function(t, r) {
    return t = t >>> 0, r || L(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
  }, l.prototype.readInt32BE = function(t, r) {
    return t = t >>> 0, r || L(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
  }, l.prototype.readBigInt64LE = be(function(t) {
    t = t >>> 0, Me(t, "offset");
    const r = this[t], s = this[t + 7];
    (r === void 0 || s === void 0) && $e(t, this.length - 8);
    const u = this[t + 4] + this[t + 5] * 2 ** 8 + this[t + 6] * 2 ** 16 + (s << 24);
    return (BigInt(u) << BigInt(32)) + BigInt(r + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24);
  }), l.prototype.readBigInt64BE = be(function(t) {
    t = t >>> 0, Me(t, "offset");
    const r = this[t], s = this[t + 7];
    (r === void 0 || s === void 0) && $e(t, this.length - 8);
    const u = (r << 24) + // Overflow
    this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t];
    return (BigInt(u) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + s);
  }), l.prototype.readFloatLE = function(t, r) {
    return t = t >>> 0, r || L(t, 4, this.length), o.read(this, t, !0, 23, 4);
  }, l.prototype.readFloatBE = function(t, r) {
    return t = t >>> 0, r || L(t, 4, this.length), o.read(this, t, !1, 23, 4);
  }, l.prototype.readDoubleLE = function(t, r) {
    return t = t >>> 0, r || L(t, 8, this.length), o.read(this, t, !0, 52, 8);
  }, l.prototype.readDoubleBE = function(t, r) {
    return t = t >>> 0, r || L(t, 8, this.length), o.read(this, t, !1, 52, 8);
  };
  function J(i, t, r, s, u, h) {
    if (!l.isBuffer(i))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (t > u || t < h)
      throw new RangeError('"value" argument is out of bounds');
    if (r + s > i.length)
      throw new RangeError("Index out of range");
  }
  l.prototype.writeUintLE = l.prototype.writeUIntLE = function(t, r, s, u) {
    if (t = +t, r = r >>> 0, s = s >>> 0, !u) {
      const _ = Math.pow(2, 8 * s) - 1;
      J(this, t, r, s, _, 0);
    }
    let h = 1, w = 0;
    for (this[r] = t & 255; ++w < s && (h *= 256); )
      this[r + w] = t / h & 255;
    return r + s;
  }, l.prototype.writeUintBE = l.prototype.writeUIntBE = function(t, r, s, u) {
    if (t = +t, r = r >>> 0, s = s >>> 0, !u) {
      const _ = Math.pow(2, 8 * s) - 1;
      J(this, t, r, s, _, 0);
    }
    let h = s - 1, w = 1;
    for (this[r + h] = t & 255; --h >= 0 && (w *= 256); )
      this[r + h] = t / w & 255;
    return r + s;
  }, l.prototype.writeUint8 = l.prototype.writeUInt8 = function(t, r, s) {
    return t = +t, r = r >>> 0, s || J(this, t, r, 1, 255, 0), this[r] = t & 255, r + 1;
  }, l.prototype.writeUint16LE = l.prototype.writeUInt16LE = function(t, r, s) {
    return t = +t, r = r >>> 0, s || J(this, t, r, 2, 65535, 0), this[r] = t & 255, this[r + 1] = t >>> 8, r + 2;
  }, l.prototype.writeUint16BE = l.prototype.writeUInt16BE = function(t, r, s) {
    return t = +t, r = r >>> 0, s || J(this, t, r, 2, 65535, 0), this[r] = t >>> 8, this[r + 1] = t & 255, r + 2;
  }, l.prototype.writeUint32LE = l.prototype.writeUInt32LE = function(t, r, s) {
    return t = +t, r = r >>> 0, s || J(this, t, r, 4, 4294967295, 0), this[r + 3] = t >>> 24, this[r + 2] = t >>> 16, this[r + 1] = t >>> 8, this[r] = t & 255, r + 4;
  }, l.prototype.writeUint32BE = l.prototype.writeUInt32BE = function(t, r, s) {
    return t = +t, r = r >>> 0, s || J(this, t, r, 4, 4294967295, 0), this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = t & 255, r + 4;
  };
  function ne(i, t, r, s, u) {
    ft(t, s, u, i, r, 7);
    let h = Number(t & BigInt(4294967295));
    i[r++] = h, h = h >> 8, i[r++] = h, h = h >> 8, i[r++] = h, h = h >> 8, i[r++] = h;
    let w = Number(t >> BigInt(32) & BigInt(4294967295));
    return i[r++] = w, w = w >> 8, i[r++] = w, w = w >> 8, i[r++] = w, w = w >> 8, i[r++] = w, r;
  }
  function ze(i, t, r, s, u) {
    ft(t, s, u, i, r, 7);
    let h = Number(t & BigInt(4294967295));
    i[r + 7] = h, h = h >> 8, i[r + 6] = h, h = h >> 8, i[r + 5] = h, h = h >> 8, i[r + 4] = h;
    let w = Number(t >> BigInt(32) & BigInt(4294967295));
    return i[r + 3] = w, w = w >> 8, i[r + 2] = w, w = w >> 8, i[r + 1] = w, w = w >> 8, i[r] = w, r + 8;
  }
  l.prototype.writeBigUInt64LE = be(function(t, r = 0) {
    return ne(this, t, r, BigInt(0), BigInt("0xffffffffffffffff"));
  }), l.prototype.writeBigUInt64BE = be(function(t, r = 0) {
    return ze(this, t, r, BigInt(0), BigInt("0xffffffffffffffff"));
  }), l.prototype.writeIntLE = function(t, r, s, u) {
    if (t = +t, r = r >>> 0, !u) {
      const K = Math.pow(2, 8 * s - 1);
      J(this, t, r, s, K - 1, -K);
    }
    let h = 0, w = 1, _ = 0;
    for (this[r] = t & 255; ++h < s && (w *= 256); )
      t < 0 && _ === 0 && this[r + h - 1] !== 0 && (_ = 1), this[r + h] = (t / w >> 0) - _ & 255;
    return r + s;
  }, l.prototype.writeIntBE = function(t, r, s, u) {
    if (t = +t, r = r >>> 0, !u) {
      const K = Math.pow(2, 8 * s - 1);
      J(this, t, r, s, K - 1, -K);
    }
    let h = s - 1, w = 1, _ = 0;
    for (this[r + h] = t & 255; --h >= 0 && (w *= 256); )
      t < 0 && _ === 0 && this[r + h + 1] !== 0 && (_ = 1), this[r + h] = (t / w >> 0) - _ & 255;
    return r + s;
  }, l.prototype.writeInt8 = function(t, r, s) {
    return t = +t, r = r >>> 0, s || J(this, t, r, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[r] = t & 255, r + 1;
  }, l.prototype.writeInt16LE = function(t, r, s) {
    return t = +t, r = r >>> 0, s || J(this, t, r, 2, 32767, -32768), this[r] = t & 255, this[r + 1] = t >>> 8, r + 2;
  }, l.prototype.writeInt16BE = function(t, r, s) {
    return t = +t, r = r >>> 0, s || J(this, t, r, 2, 32767, -32768), this[r] = t >>> 8, this[r + 1] = t & 255, r + 2;
  }, l.prototype.writeInt32LE = function(t, r, s) {
    return t = +t, r = r >>> 0, s || J(this, t, r, 4, 2147483647, -2147483648), this[r] = t & 255, this[r + 1] = t >>> 8, this[r + 2] = t >>> 16, this[r + 3] = t >>> 24, r + 4;
  }, l.prototype.writeInt32BE = function(t, r, s) {
    return t = +t, r = r >>> 0, s || J(this, t, r, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = t & 255, r + 4;
  }, l.prototype.writeBigInt64LE = be(function(t, r = 0) {
    return ne(this, t, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), l.prototype.writeBigInt64BE = be(function(t, r = 0) {
    return ze(this, t, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function Qe(i, t, r, s, u, h) {
    if (r + s > i.length)
      throw new RangeError("Index out of range");
    if (r < 0)
      throw new RangeError("Index out of range");
  }
  function Je(i, t, r, s, u) {
    return t = +t, r = r >>> 0, u || Qe(i, t, r, 4), o.write(i, t, r, s, 23, 4), r + 4;
  }
  l.prototype.writeFloatLE = function(t, r, s) {
    return Je(this, t, r, !0, s);
  }, l.prototype.writeFloatBE = function(t, r, s) {
    return Je(this, t, r, !1, s);
  };
  function Xe(i, t, r, s, u) {
    return t = +t, r = r >>> 0, u || Qe(i, t, r, 8), o.write(i, t, r, s, 52, 8), r + 8;
  }
  l.prototype.writeDoubleLE = function(t, r, s) {
    return Xe(this, t, r, !0, s);
  }, l.prototype.writeDoubleBE = function(t, r, s) {
    return Xe(this, t, r, !1, s);
  }, l.prototype.copy = function(t, r, s, u) {
    if (!l.isBuffer(t))
      throw new TypeError("argument should be a Buffer");
    if (s || (s = 0), !u && u !== 0 && (u = this.length), r >= t.length && (r = t.length), r || (r = 0), u > 0 && u < s && (u = s), u === s || t.length === 0 || this.length === 0)
      return 0;
    if (r < 0)
      throw new RangeError("targetStart out of bounds");
    if (s < 0 || s >= this.length)
      throw new RangeError("Index out of range");
    if (u < 0)
      throw new RangeError("sourceEnd out of bounds");
    u > this.length && (u = this.length), t.length - r < u - s && (u = t.length - r + s);
    const h = u - s;
    return this === t && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(r, s, u) : Uint8Array.prototype.set.call(
      t,
      this.subarray(s, u),
      r
    ), h;
  }, l.prototype.fill = function(t, r, s, u) {
    if (typeof t == "string") {
      if (typeof r == "string" ? (u = r, r = 0, s = this.length) : typeof s == "string" && (u = s, s = this.length), u !== void 0 && typeof u != "string")
        throw new TypeError("encoding must be a string");
      if (typeof u == "string" && !l.isEncoding(u))
        throw new TypeError("Unknown encoding: " + u);
      if (t.length === 1) {
        const w = t.charCodeAt(0);
        (u === "utf8" && w < 128 || u === "latin1") && (t = w);
      }
    } else
      typeof t == "number" ? t = t & 255 : typeof t == "boolean" && (t = Number(t));
    if (r < 0 || this.length < r || this.length < s)
      throw new RangeError("Out of range index");
    if (s <= r)
      return this;
    r = r >>> 0, s = s === void 0 ? this.length : s >>> 0, t || (t = 0);
    let h;
    if (typeof t == "number")
      for (h = r; h < s; ++h)
        this[h] = t;
    else {
      const w = l.isBuffer(t) ? t : l.from(t, u), _ = w.length;
      if (_ === 0)
        throw new TypeError('The value "' + t + '" is invalid for argument "value"');
      for (h = 0; h < s - r; ++h)
        this[h + r] = w[h % _];
    }
    return this;
  };
  const ye = {};
  function De(i, t, r) {
    ye[i] = class extends r {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: t.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${i}]`, this.stack, delete this.name;
      }
      get code() {
        return i;
      }
      set code(u) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: u,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${i}]: ${this.message}`;
      }
    };
  }
  De(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(i) {
      return i ? `${i} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), De(
    "ERR_INVALID_ARG_TYPE",
    function(i, t) {
      return `The "${i}" argument must be of type number. Received type ${typeof t}`;
    },
    TypeError
  ), De(
    "ERR_OUT_OF_RANGE",
    function(i, t, r) {
      let s = `The value of "${i}" is out of range.`, u = r;
      return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? u = Ve(String(r)) : typeof r == "bigint" && (u = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (u = Ve(u)), u += "n"), s += ` It must be ${t}. Received ${u}`, s;
    },
    RangeError
  );
  function Ve(i) {
    let t = "", r = i.length;
    const s = i[0] === "-" ? 1 : 0;
    for (; r >= s + 4; r -= 3)
      t = `_${i.slice(r - 3, r)}${t}`;
    return `${i.slice(0, r)}${t}`;
  }
  function Vt(i, t, r) {
    Me(t, "offset"), (i[t] === void 0 || i[t + r] === void 0) && $e(t, i.length - (r + 1));
  }
  function ft(i, t, r, s, u, h) {
    if (i > r || i < t) {
      const w = typeof t == "bigint" ? "n" : "";
      let _;
      throw h > 3 ? t === 0 || t === BigInt(0) ? _ = `>= 0${w} and < 2${w} ** ${(h + 1) * 8}${w}` : _ = `>= -(2${w} ** ${(h + 1) * 8 - 1}${w}) and < 2 ** ${(h + 1) * 8 - 1}${w}` : _ = `>= ${t}${w} and <= ${r}${w}`, new ye.ERR_OUT_OF_RANGE("value", _, i);
    }
    Vt(s, u, h);
  }
  function Me(i, t) {
    if (typeof i != "number")
      throw new ye.ERR_INVALID_ARG_TYPE(t, "number", i);
  }
  function $e(i, t, r) {
    throw Math.floor(i) !== i ? (Me(i, r), new ye.ERR_OUT_OF_RANGE(r || "offset", "an integer", i)) : t < 0 ? new ye.ERR_BUFFER_OUT_OF_BOUNDS() : new ye.ERR_OUT_OF_RANGE(
      r || "offset",
      `>= ${r ? 1 : 0} and <= ${t}`,
      i
    );
  }
  const Ze = /[^+/0-9A-Za-z-_]/g;
  function Ke(i) {
    if (i = i.split("=")[0], i = i.trim().replace(Ze, ""), i.length < 2)
      return "";
    for (; i.length % 4 !== 0; )
      i = i + "=";
    return i;
  }
  function et(i, t) {
    t = t || 1 / 0;
    let r;
    const s = i.length;
    let u = null;
    const h = [];
    for (let w = 0; w < s; ++w) {
      if (r = i.charCodeAt(w), r > 55295 && r < 57344) {
        if (!u) {
          if (r > 56319) {
            (t -= 3) > -1 && h.push(239, 191, 189);
            continue;
          } else if (w + 1 === s) {
            (t -= 3) > -1 && h.push(239, 191, 189);
            continue;
          }
          u = r;
          continue;
        }
        if (r < 56320) {
          (t -= 3) > -1 && h.push(239, 191, 189), u = r;
          continue;
        }
        r = (u - 55296 << 10 | r - 56320) + 65536;
      } else
        u && (t -= 3) > -1 && h.push(239, 191, 189);
      if (u = null, r < 128) {
        if ((t -= 1) < 0)
          break;
        h.push(r);
      } else if (r < 2048) {
        if ((t -= 2) < 0)
          break;
        h.push(
          r >> 6 | 192,
          r & 63 | 128
        );
      } else if (r < 65536) {
        if ((t -= 3) < 0)
          break;
        h.push(
          r >> 12 | 224,
          r >> 6 & 63 | 128,
          r & 63 | 128
        );
      } else if (r < 1114112) {
        if ((t -= 4) < 0)
          break;
        h.push(
          r >> 18 | 240,
          r >> 12 & 63 | 128,
          r >> 6 & 63 | 128,
          r & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return h;
  }
  function Ct(i) {
    const t = [];
    for (let r = 0; r < i.length; ++r)
      t.push(i.charCodeAt(r) & 255);
    return t;
  }
  function tt(i, t) {
    let r, s, u;
    const h = [];
    for (let w = 0; w < i.length && !((t -= 2) < 0); ++w)
      r = i.charCodeAt(w), s = r >> 8, u = r % 256, h.push(u), h.push(s);
    return h;
  }
  function Rt(i) {
    return n.toByteArray(Ke(i));
  }
  function rt(i, t, r, s) {
    let u;
    for (u = 0; u < s && !(u + r >= t.length || u >= i.length); ++u)
      t[u + r] = i[u];
    return u;
  }
  function de(i, t) {
    return i instanceof t || i != null && i.constructor != null && i.constructor.name != null && i.constructor.name === t.name;
  }
  function pt(i) {
    return i !== i;
  }
  const $t = function() {
    const i = "0123456789abcdef", t = new Array(256);
    for (let r = 0; r < 16; ++r) {
      const s = r * 16;
      for (let u = 0; u < 16; ++u)
        t[s + u] = i[r] + i[u];
    }
    return t;
  }();
  function be(i) {
    return typeof BigInt > "u" ? kt : i;
  }
  function kt() {
    throw new Error("BigInt not supported");
  }
})(Dr);
var $r = { exports: {} }, oe = $r.exports = {}, Ce, Re;
function Xt() {
  throw new Error("setTimeout has not been defined");
}
function Zt() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Ce = setTimeout : Ce = Xt;
  } catch {
    Ce = Xt;
  }
  try {
    typeof clearTimeout == "function" ? Re = clearTimeout : Re = Zt;
  } catch {
    Re = Zt;
  }
})();
function qr(e) {
  if (Ce === setTimeout)
    return setTimeout(e, 0);
  if ((Ce === Xt || !Ce) && setTimeout)
    return Ce = setTimeout, setTimeout(e, 0);
  try {
    return Ce(e, 0);
  } catch {
    try {
      return Ce.call(null, e, 0);
    } catch {
      return Ce.call(this, e, 0);
    }
  }
}
function di(e) {
  if (Re === clearTimeout)
    return clearTimeout(e);
  if ((Re === Zt || !Re) && clearTimeout)
    return Re = clearTimeout, clearTimeout(e);
  try {
    return Re(e);
  } catch {
    try {
      return Re.call(null, e);
    } catch {
      return Re.call(this, e);
    }
  }
}
var Le = [], lt = !1, We, _t = -1;
function fi() {
  !lt || !We || (lt = !1, We.length ? Le = We.concat(Le) : _t = -1, Le.length && Wr());
}
function Wr() {
  if (!lt) {
    var e = qr(fi);
    lt = !0;
    for (var n = Le.length; n; ) {
      for (We = Le, Le = []; ++_t < n; )
        We && We[_t].run();
      _t = -1, n = Le.length;
    }
    We = null, lt = !1, di(e);
  }
}
oe.nextTick = function(e) {
  var n = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var o = 1; o < arguments.length; o++)
      n[o - 1] = arguments[o];
  Le.push(new Gr(e, n)), Le.length === 1 && !lt && qr(Wr);
};
function Gr(e, n) {
  this.fun = e, this.array = n;
}
Gr.prototype.run = function() {
  this.fun.apply(null, this.array);
};
oe.title = "browser";
oe.browser = !0;
oe.env = {};
oe.argv = [];
oe.version = "";
oe.versions = {};
function Ue() {
}
oe.on = Ue;
oe.addListener = Ue;
oe.once = Ue;
oe.off = Ue;
oe.removeListener = Ue;
oe.removeAllListeners = Ue;
oe.emit = Ue;
oe.prependListener = Ue;
oe.prependOnceListener = Ue;
oe.listeners = function(e) {
  return [];
};
oe.binding = function(e) {
  throw new Error("process.binding is not supported");
};
oe.cwd = function() {
  return "/";
};
oe.chdir = function(e) {
  throw new Error("process.chdir is not supported");
};
oe.umask = function() {
  return 0;
};
var pi = $r.exports;
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const n = Dr, o = pi, a = (d) => d && d.__esModule ? d : { default: d }, f = a(o), p = globalThis || void 0 || self;
  Object.defineProperty(e, "Buffer", { enumerable: !0, get: () => n.Buffer }), Object.defineProperty(e, "process", { enumerable: !0, get: () => f.default }), e.global = p;
})(It);
var Kt = { exports: {} }, ht = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tr;
function hi() {
  if (Tr)
    return ht;
  Tr = 1;
  var e = zr, n = Symbol.for("react.element"), o = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, f = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(l, g, x) {
    var y, v = {}, C = null, I = null;
    x !== void 0 && (C = "" + x), g.key !== void 0 && (C = "" + g.key), g.ref !== void 0 && (I = g.ref);
    for (y in g)
      a.call(g, y) && !p.hasOwnProperty(y) && (v[y] = g[y]);
    if (l && l.defaultProps)
      for (y in g = l.defaultProps, g)
        v[y] === void 0 && (v[y] = g[y]);
    return { $$typeof: n, type: l, key: C, ref: I, props: v, _owner: f.current };
  }
  return ht.Fragment = o, ht.jsx = d, ht.jsxs = d, ht;
}
var mt = {}, Ir;
function mi() {
  return Ir || (Ir = 1, It.process.env.NODE_ENV !== "production" && function() {
    var e = zr, n = Symbol.for("react.element"), o = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), l = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), j = Symbol.iterator, D = "@@iterator";
    function A(c) {
      if (c === null || typeof c != "object")
        return null;
      var b = j && c[j] || c[D];
      return typeof b == "function" ? b : null;
    }
    var Y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function N(c) {
      {
        for (var b = arguments.length, E = new Array(b > 1 ? b - 1 : 0), k = 1; k < b; k++)
          E[k - 1] = arguments[k];
        we("error", c, E);
      }
    }
    function we(c, b, E) {
      {
        var k = Y.ReactDebugCurrentFrame, V = k.getStackAddendum();
        V !== "" && (b += "%s", E = E.concat([V]));
        var H = E.map(function(O) {
          return String(O);
        });
        H.unshift("Warning: " + b), Function.prototype.apply.call(console[c], console, H);
      }
    }
    var ge = !1, re = !1, ve = !1, Ee = !1, Pe = !1, Te;
    Te = Symbol.for("react.module.reference");
    function _e(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === a || c === p || Pe || c === f || c === x || c === y || Ee || c === I || ge || re || ve || typeof c == "object" && c !== null && (c.$$typeof === C || c.$$typeof === v || c.$$typeof === d || c.$$typeof === l || c.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      c.$$typeof === Te || c.getModuleId !== void 0));
    }
    function S(c, b, E) {
      var k = c.displayName;
      if (k)
        return k;
      var V = b.displayName || b.name || "";
      return V !== "" ? E + "(" + V + ")" : E;
    }
    function T(c) {
      return c.displayName || "Context";
    }
    function R(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && N("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
        return c.displayName || c.name || null;
      if (typeof c == "string")
        return c;
      switch (c) {
        case a:
          return "Fragment";
        case o:
          return "Portal";
        case p:
          return "Profiler";
        case f:
          return "StrictMode";
        case x:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case l:
            var b = c;
            return T(b) + ".Consumer";
          case d:
            var E = c;
            return T(E._context) + ".Provider";
          case g:
            return S(c, c.render, "ForwardRef");
          case v:
            var k = c.displayName || null;
            return k !== null ? k : R(c.type) || "Memo";
          case C: {
            var V = c, H = V._payload, O = V._init;
            try {
              return R(O(H));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, P = 0, F, $, G, Q, pe, L, J;
    function ne() {
    }
    ne.__reactDisabledLog = !0;
    function ze() {
      {
        if (P === 0) {
          F = console.log, $ = console.info, G = console.warn, Q = console.error, pe = console.group, L = console.groupCollapsed, J = console.groupEnd;
          var c = {
            configurable: !0,
            enumerable: !0,
            value: ne,
            writable: !0
          };
          Object.defineProperties(console, {
            info: c,
            log: c,
            warn: c,
            error: c,
            group: c,
            groupCollapsed: c,
            groupEnd: c
          });
        }
        P++;
      }
    }
    function Qe() {
      {
        if (P--, P === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, c, {
              value: F
            }),
            info: B({}, c, {
              value: $
            }),
            warn: B({}, c, {
              value: G
            }),
            error: B({}, c, {
              value: Q
            }),
            group: B({}, c, {
              value: pe
            }),
            groupCollapsed: B({}, c, {
              value: L
            }),
            groupEnd: B({}, c, {
              value: J
            })
          });
        }
        P < 0 && N("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Je = Y.ReactCurrentDispatcher, Xe;
    function ye(c, b, E) {
      {
        if (Xe === void 0)
          try {
            throw Error();
          } catch (V) {
            var k = V.stack.trim().match(/\n( *(at )?)/);
            Xe = k && k[1] || "";
          }
        return `
` + Xe + c;
      }
    }
    var De = !1, Ve;
    {
      var Vt = typeof WeakMap == "function" ? WeakMap : Map;
      Ve = new Vt();
    }
    function ft(c, b) {
      if (!c || De)
        return "";
      {
        var E = Ve.get(c);
        if (E !== void 0)
          return E;
      }
      var k;
      De = !0;
      var V = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var H;
      H = Je.current, Je.current = null, ze();
      try {
        if (b) {
          var O = function() {
            throw Error();
          };
          if (Object.defineProperty(O.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(O, []);
            } catch (Ae) {
              k = Ae;
            }
            Reflect.construct(c, [], O);
          } else {
            try {
              O.call();
            } catch (Ae) {
              k = Ae;
            }
            c.call(O.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ae) {
            k = Ae;
          }
          c();
        }
      } catch (Ae) {
        if (Ae && k && typeof Ae.stack == "string") {
          for (var U = Ae.stack.split(`
`), ce = k.stack.split(`
`), ie = U.length - 1, se = ce.length - 1; ie >= 1 && se >= 0 && U[ie] !== ce[se]; )
            se--;
          for (; ie >= 1 && se >= 0; ie--, se--)
            if (U[ie] !== ce[se]) {
              if (ie !== 1 || se !== 1)
                do
                  if (ie--, se--, se < 0 || U[ie] !== ce[se]) {
                    var he = `
` + U[ie].replace(" at new ", " at ");
                    return c.displayName && he.includes("<anonymous>") && (he = he.replace("<anonymous>", c.displayName)), typeof c == "function" && Ve.set(c, he), he;
                  }
                while (ie >= 1 && se >= 0);
              break;
            }
        }
      } finally {
        De = !1, Je.current = H, Qe(), Error.prepareStackTrace = V;
      }
      var it = c ? c.displayName || c.name : "", Er = it ? ye(it) : "";
      return typeof c == "function" && Ve.set(c, Er), Er;
    }
    function Me(c, b, E) {
      return ft(c, !1);
    }
    function $e(c) {
      var b = c.prototype;
      return !!(b && b.isReactComponent);
    }
    function Ze(c, b, E) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return ft(c, $e(c));
      if (typeof c == "string")
        return ye(c);
      switch (c) {
        case x:
          return ye("Suspense");
        case y:
          return ye("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case g:
            return Me(c.render);
          case v:
            return Ze(c.type, b, E);
          case C: {
            var k = c, V = k._payload, H = k._init;
            try {
              return Ze(H(V), b, E);
            } catch {
            }
          }
        }
      return "";
    }
    var Ke = Object.prototype.hasOwnProperty, et = {}, Ct = Y.ReactDebugCurrentFrame;
    function tt(c) {
      if (c) {
        var b = c._owner, E = Ze(c.type, c._source, b ? b.type : null);
        Ct.setExtraStackFrame(E);
      } else
        Ct.setExtraStackFrame(null);
    }
    function Rt(c, b, E, k, V) {
      {
        var H = Function.call.bind(Ke);
        for (var O in c)
          if (H(c, O)) {
            var U = void 0;
            try {
              if (typeof c[O] != "function") {
                var ce = Error((k || "React class") + ": " + E + " type `" + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[O] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ce.name = "Invariant Violation", ce;
              }
              U = c[O](b, O, k, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ie) {
              U = ie;
            }
            U && !(U instanceof Error) && (tt(V), N("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", E, O, typeof U), tt(null)), U instanceof Error && !(U.message in et) && (et[U.message] = !0, tt(V), N("Failed %s type: %s", E, U.message), tt(null));
          }
      }
    }
    var rt = Array.isArray;
    function de(c) {
      return rt(c);
    }
    function pt(c) {
      {
        var b = typeof Symbol == "function" && Symbol.toStringTag, E = b && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return E;
      }
    }
    function $t(c) {
      try {
        return be(c), !1;
      } catch {
        return !0;
      }
    }
    function be(c) {
      return "" + c;
    }
    function kt(c) {
      if ($t(c))
        return N("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pt(c)), be(c);
    }
    var i = Y.ReactCurrentOwner, t = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, r, s, u;
    u = {};
    function h(c) {
      if (Ke.call(c, "ref")) {
        var b = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function w(c) {
      if (Ke.call(c, "key")) {
        var b = Object.getOwnPropertyDescriptor(c, "key").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function _(c, b) {
      if (typeof c.ref == "string" && i.current && b && i.current.stateNode !== b) {
        var E = R(i.current.type);
        u[E] || (N('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(i.current.type), c.ref), u[E] = !0);
      }
    }
    function K(c, b) {
      {
        var E = function() {
          r || (r = !0, N("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        E.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function X(c, b) {
      {
        var E = function() {
          s || (s = !0, N("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        E.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var ee = function(c, b, E, k, V, H, O) {
      var U = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: c,
        key: b,
        ref: E,
        props: O,
        // Record the component responsible for creating this element.
        _owner: H
      };
      return U._store = {}, Object.defineProperty(U._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(U, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.defineProperty(U, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: V
      }), Object.freeze && (Object.freeze(U.props), Object.freeze(U)), U;
    };
    function q(c, b, E, k, V) {
      {
        var H, O = {}, U = null, ce = null;
        E !== void 0 && (kt(E), U = "" + E), w(b) && (kt(b.key), U = "" + b.key), h(b) && (ce = b.ref, _(b, V));
        for (H in b)
          Ke.call(b, H) && !t.hasOwnProperty(H) && (O[H] = b[H]);
        if (c && c.defaultProps) {
          var ie = c.defaultProps;
          for (H in ie)
            O[H] === void 0 && (O[H] = ie[H]);
        }
        if (U || ce) {
          var se = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          U && K(O, se), ce && X(O, se);
        }
        return ee(c, U, ce, V, k, i.current, O);
      }
    }
    var qt = Y.ReactCurrentOwner, wr = Y.ReactDebugCurrentFrame;
    function nt(c) {
      if (c) {
        var b = c._owner, E = Ze(c.type, c._source, b ? b.type : null);
        wr.setExtraStackFrame(E);
      } else
        wr.setExtraStackFrame(null);
    }
    var Wt;
    Wt = !1;
    function Gt(c) {
      return typeof c == "object" && c !== null && c.$$typeof === n;
    }
    function gr() {
      {
        if (qt.current) {
          var c = R(qt.current.type);
          if (c)
            return `

Check the render method of \`` + c + "`.";
        }
        return "";
      }
    }
    function zn(c) {
      {
        if (c !== void 0) {
          var b = c.fileName.replace(/^.*[\\\/]/, ""), E = c.lineNumber;
          return `

Check your code at ` + b + ":" + E + ".";
        }
        return "";
      }
    }
    var yr = {};
    function Dn(c) {
      {
        var b = gr();
        if (!b) {
          var E = typeof c == "string" ? c : c.displayName || c.name;
          E && (b = `

Check the top-level render call using <` + E + ">.");
        }
        return b;
      }
    }
    function br(c, b) {
      {
        if (!c._store || c._store.validated || c.key != null)
          return;
        c._store.validated = !0;
        var E = Dn(b);
        if (yr[E])
          return;
        yr[E] = !0;
        var k = "";
        c && c._owner && c._owner !== qt.current && (k = " It was passed a child from " + R(c._owner.type) + "."), nt(c), N('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, k), nt(null);
      }
    }
    function xr(c, b) {
      {
        if (typeof c != "object")
          return;
        if (de(c))
          for (var E = 0; E < c.length; E++) {
            var k = c[E];
            Gt(k) && br(k, b);
          }
        else if (Gt(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var V = A(c);
          if (typeof V == "function" && V !== c.entries)
            for (var H = V.call(c), O; !(O = H.next()).done; )
              Gt(O.value) && br(O.value, b);
        }
      }
    }
    function Vn(c) {
      {
        var b = c.type;
        if (b == null || typeof b == "string")
          return;
        var E;
        if (typeof b == "function")
          E = b.propTypes;
        else if (typeof b == "object" && (b.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        b.$$typeof === v))
          E = b.propTypes;
        else
          return;
        if (E) {
          var k = R(b);
          Rt(E, c.props, "prop", k, c);
        } else if (b.PropTypes !== void 0 && !Wt) {
          Wt = !0;
          var V = R(b);
          N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", V || "Unknown");
        }
        typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $n(c) {
      {
        for (var b = Object.keys(c.props), E = 0; E < b.length; E++) {
          var k = b[E];
          if (k !== "children" && k !== "key") {
            nt(c), N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), nt(null);
            break;
          }
        }
        c.ref !== null && (nt(c), N("Invalid attribute `ref` supplied to `React.Fragment`."), nt(null));
      }
    }
    function vr(c, b, E, k, V, H) {
      {
        var O = _e(c);
        if (!O) {
          var U = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (U += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ce = zn(V);
          ce ? U += ce : U += gr();
          var ie;
          c === null ? ie = "null" : de(c) ? ie = "array" : c !== void 0 && c.$$typeof === n ? (ie = "<" + (R(c.type) || "Unknown") + " />", U = " Did you accidentally export a JSX literal instead of a component?") : ie = typeof c, N("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ie, U);
        }
        var se = q(c, b, E, V, H);
        if (se == null)
          return se;
        if (O) {
          var he = b.children;
          if (he !== void 0)
            if (k)
              if (de(he)) {
                for (var it = 0; it < he.length; it++)
                  xr(he[it], c);
                Object.freeze && Object.freeze(he);
              } else
                N("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xr(he, c);
        }
        return c === a ? $n(se) : Vn(se), se;
      }
    }
    function qn(c, b, E) {
      return vr(c, b, E, !0);
    }
    function Wn(c, b, E) {
      return vr(c, b, E, !1);
    }
    var Gn = Wn, Hn = qn;
    mt.Fragment = a, mt.jsx = Gn, mt.jsxs = Hn;
  }()), mt;
}
It.process.env.NODE_ENV === "production" ? Kt.exports = hi() : Kt.exports = mi();
var m = Kt.exports, xt = {}, wt = Qn;
if (It.process.env.NODE_ENV === "production")
  xt.createRoot = wt.createRoot, xt.hydrateRoot = wt.hydrateRoot;
else {
  var St = wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  xt.createRoot = function(e, n) {
    St.usingClientEntryPoint = !0;
    try {
      return wt.createRoot(e, n);
    } finally {
      St.usingClientEntryPoint = !1;
    }
  }, xt.hydrateRoot = function(e, n, o) {
    St.usingClientEntryPoint = !0;
    try {
      return wt.hydrateRoot(e, n, o);
    } finally {
      St.usingClientEntryPoint = !1;
    }
  };
}
const wi = (e) => Array.isArray(e), gi = (e) => typeof e == "string", Hr = (e) => gi(e) && e !== "", yi = (e) => wi(e) && e.length > 0, Yr = (e) => Object.keys(e), Ut = (e, n) => new URLSearchParams(e).get(n), Qr = {
  addToCart: "AddToCart",
  contact: "Contact",
  initiateCheckout: "InitiateCheckout",
  pageView: "PageView",
  viewContent: "ViewContent",
  purchase: "Purchase",
  subscribe: "Subscribe",
  recurringSubscriptionPayment: "RecurringSubscriptionPayment",
  cancelSubscription: "CancelSubscription",
  purchaseFailed: "PurchaseFailed",
  subscribeFailed: "SubscribeFailed",
  recurringSubscriptionPaymentFailed: "RecurringSubscriptionPaymentFailed",
  customerCreated: "CustomerCreated",
  subscriptionChargeback: "SubscriptionChargeback",
  subscriptionRefund: "SubscriptionRefund",
  transactionChargeback: "TransactionChargeback",
  transactionRefund: "TransactionRefund"
}, Be = {
  firstMessage: "FirstMessage",
  linkProvided: "LinkProvided",
  linkClicked: "LinkClicked",
  emailField: "EmailField",
  emailEntered: "EmailEntered",
  emailWrong: "EmailWrong",
  emailExist: "EmailExist",
  priceSeen: "PriceSeen",
  buttonClick: "ButtonClick"
}, bi = Yr(Qr), xi = Yr(Be), vi = bi.reduce((e, n) => (e[n] = { executed: !1 }, e), {}), Ei = xi.reduce((e, n) => (e[n] = { executed: !1 }, e), {}), st = {
  pd: null,
  cid: null,
  eid: null,
  systemType: null,
  marketing: {}
}, Fe = {
  aiProfile: {
    name: null,
    role: null,
    imgSrc: null,
    initialMessage: "",
    displayInStream: !1
  },
  translations: {
    emailPlaceholder: "",
    tm526: "",
    tm715: "",
    tm716: ""
  },
  themeId: null,
  chatUrl: null,
  enableDevTools: !1,
  isPluginMode: !1,
  connectedToSocket: !1
}, at = {
  upstreamQueue: null,
  downstreamQueue: null,
  textToParse: "",
  history: [],
  status: null,
  error: null,
  isLoading: !1
}, Ti = {
  email: {
    success: !1,
    error: !1,
    isEmailFieldVisible: !1,
    currentEmail: "",
    isLoading: !1
  },
  response: {
    value: "",
    isFormVisible: !1,
    isLoading: !1,
    error: !1
  },
  payment: {
    isPaymentButtonVisible: !1,
    isPaymentFormVisible: !1,
    isPaymentSuccessful: !1
  },
  messaging: {
    isVisible: !1
  },
  link: {
    isVisible: !1,
    href: null,
    text: ""
  }
}, Ii = {
  events: {
    ...vi,
    ...Ei
  }
}, Jr = Et({
  name: "meta",
  initialState: st,
  reducers: {
    setMeta(e, { payload: n }) {
      e.cid = n.cid, e.eid = n.eid, e.systemType = n.systemType, e.pd = { ...n.pd, ...e.pd }, e.marketing = { ...n.marketing, ...e.marketing };
    },
    resetMeta(e) {
      e.pd = st.pd, e.cid = st.cid, e.eid = st.eid, e.systemType = st.systemType, e.marketing = st.marketing;
    },
    setMarketing(e, { payload: n }) {
      e.marketing = { ...e.marketing, ...n };
    },
    setPd(e, { payload: n }) {
      e.pd = { ...e.pd, ...n };
    }
  }
}), Ci = (e) => e.meta, { setMeta: Ri, resetMeta: _s, setMarketing: ki, setPd: Si } = Jr.actions, Bi = Jr.reducer, Xr = Et({
  name: "config",
  initialState: Fe,
  reducers: {
    // DEV NOTE: note that immer makes these immutable under the hood
    setConfig(e, { payload: n }) {
      e.aiProfile = { ...Fe.aiProfile, ...n.aiProfile }, e.translations = { ...Fe.translations, ...n.translations }, e.themeId = n.themeId, e.chatUrl = n.chatUrl;
    },
    resetConfig(e) {
      e.aiProfile = Fe.aiProfile, e.themeId = Fe.themeId, e.translations = Fe.translations, e.chatUrl = Fe.chatUrl;
    },
    setTheme(e, { payload: n }) {
      e.themeId = n;
    },
    resetTheme(e) {
      e.themeId = Fe.themeId;
    },
    setDevToolsStatus(e, { payload: n }) {
      e.enableDevTools = n;
    },
    resetDevToolsStatus(e) {
      e.enableDevTools = Fe.enableDevTools;
    },
    togglePluginMode(e) {
      e.isPluginMode = !e.isPluginMode;
    },
    setTranslations(e, { payload: n }) {
      e.translations = { ...e.translations, ...n };
    },
    setConnectedToSocket(e) {
      e.connectedToSocket = !0;
    }
  }
}), ae = ({ config: e }) => e, {
  setConfig: Zr,
  resetConfig: As,
  setTheme: ji,
  resetTheme: Fs,
  setDevToolsStatus: Pi,
  resetDevToolsStatus: Ls,
  togglePluginMode: _i,
  setTranslations: Ai,
  setConnectedToSocket: Fi
} = Xr.actions, Li = Xr.reducer;
var Ge = 256, Kr = [], Cr = 256, Bt;
for (; Ge--; )
  Kr[Ge] = (Ge + 256).toString(16).substring(1);
function Rr(e) {
  var n = 0, o = e || 11;
  if (!Bt || Ge + o > Cr * 2)
    for (Bt = "", Ge = 0; n < Cr; n++)
      Bt += Kr[Math.random() * 256 | 0];
  return Bt.substring(Ge, Ge++ + o);
}
const Ui = {
  transports: ["websocket"],
  upgrade: !1,
  pingInterval: 1e3 * 60 * 5,
  pingTimeout: 1e3 * 60 * 3,
  secure: !0,
  reconnect: !0
}, Ne = {
  chat: "chat",
  chatHistory: "chat-history",
  connect: "connect",
  disconnect: "disconnect",
  streamStart: "stream-start",
  streamData: "stream-data",
  streamEnd: "stream-end",
  streamError: "stream-error"
}, qe = {
  user: "user",
  assistant: "assistant"
}, Mi = {
  email: "email_intent",
  payment: "payment_intent",
  emailError: "email_validation_error",
  emailSuccess: "email_validation_success",
  destroy: "payment_intent_destroy"
}, er = (e) => {
  const n = /\[(.*?)\]/.exec(e);
  return !n || n.length <= 1 ? { message: e, options: [] } : {
    message: e.replace(n[0], ""),
    options: n[1].split("|").map((o, a) => ({ id: `opt-${a}`, label: o, value: o }))
  };
}, en = Et({
  name: "stream",
  initialState: at,
  reducers: {
    // for SENDING messages
    setUpstreamItem(e, { payload: n }) {
      const o = {
        term: Ut(window.location.search, "utm_chat"),
        user_id: localStorage.getItem("__cid"),
        role: "user",
        message: n
      };
      e.upstreamQueue = o;
    },
    resetUpstreamItem(e) {
      e.upstreamQueue = at.upstreamQueue;
    },
    // for RECEIVING messages
    setDownstreamItem(e, { payload: n }) {
      const o = {
        term: Ut(window.location.search, "utm_chat"),
        user_id: localStorage.getItem("__cid"),
        role: "assistant",
        message: n
      };
      e.downstreamQueue = o;
    },
    resetDownstreamItem(e) {
      e.downstreamQueue = at.downstreamQueue;
    },
    setDownstreamMessage(e, { payload: n }) {
      e.downstreamQueue = {
        ...e.downstreamQueue,
        message: e.downstreamQueue.message + n.chunk
      };
    },
    setHistory(e, { payload: n }) {
      const o = n.map((a) => ({ ...a, id: Rr(), role: a.role, ...er(a.content) }));
      e.history = o;
    },
    appendHistory(e, { payload: n }) {
      e.history.push({ id: Rr(), ...er(n.message), ...n });
    },
    resetHistory(e) {
      e.history = at.history;
    },
    setTextToParse(e, { payload: n }) {
      e.textToParse += n;
    },
    resetTextToParse(e) {
      e.textToParse = at.textToParse;
    },
    setIsLoading(e) {
      e.isLoading = !0;
    },
    resetIsLoading(e) {
      e.isLoading = at.isLoading;
    }
  }
}), Ni = (e) => e.stream.history[e.stream.history.length - 1].id, tn = (e) => e.stream, {
  setUpstreamItem: ur,
  setDownstreamItem: kr,
  resetDownstreamItem: Oi,
  setDownstreamMessage: zi,
  resetUpstreamItem: Di,
  setHistory: Sr,
  resetHistory: Us,
  appendHistory: ct,
  setTextToParse: Br,
  resetTextToParse: Yt,
  setIsLoading: jr,
  resetIsLoading: Qt
} = en.actions, Vi = en.reducer, rn = Et({
  name: "intentions",
  initialState: Ti,
  reducers: {
    setEmail(e, { payload: n }) {
      e.email.currentEmail = n;
    },
    setEmailSuccess(e, { payload: n }) {
      e.email.success = n;
    },
    setEmailError(e, { payload: n }) {
      e.email.error = n;
    },
    setIsEmailLoading(e, { payload: n }) {
      e.email.isLoading = n;
    },
    setIsEmailFieldVisible(e, { payload: n }) {
      e.email.isEmailFieldVisible = n;
    },
    setIsPaymentButtonVisible(e, { payload: n }) {
      e.payment.isPaymentButtonVisible = n;
    },
    setPaymentFormVisibility(e, { payload: n }) {
      e.payment.isPaymentFormVisible = n;
    },
    setIsPaymentSuccessful(e, { payload: n }) {
      e.payment.isPaymentSuccessful = n;
    },
    setLink(e, { payload: n }) {
      e.link = { ...e.link, ...n };
    },
    // Response Form reducers
    setResponse(e, { payload: n }) {
      e.response.value = n;
    },
    setResponseFormVisibility(e, { payload: n }) {
      e.response.isFormVisible = n;
    },
    setResponseLoadingStatus(e, { payload: n }) {
      e.response.isLoading = n;
    }
  }
}), nn = (e) => e.intentions.email, $i = (e) => e.intentions.payment, qi = (e) => e.intentions.link, Wi = (e) => e.intentions.response, {
  setEmail: Gi,
  setEmailSuccess: Hi,
  setIsPaymentSuccessful: Yi,
  setPaymentFormVisibility: Qi,
  setEmailError: Ji,
  setIsEmailLoading: tr,
  setIsEmailFieldVisible: At,
  setIsPaymentButtonVisible: Ft,
  setLink: on,
  setResponse: Xi,
  setResponseFormVisibility: Ms,
  setResponseLoadingStatus: Zi
} = rn.actions, Ki = rn.reducer;
var dr = { exports: {} }, ut = typeof Reflect == "object" ? Reflect : null, Pr = ut && typeof ut.apply == "function" ? ut.apply : function(n, o, a) {
  return Function.prototype.apply.call(n, o, a);
}, Lt;
ut && typeof ut.ownKeys == "function" ? Lt = ut.ownKeys : Object.getOwnPropertySymbols ? Lt = function(n) {
  return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n));
} : Lt = function(n) {
  return Object.getOwnPropertyNames(n);
};
function eo(e) {
  console && console.warn && console.warn(e);
}
var sn = Number.isNaN || function(n) {
  return n !== n;
};
function W() {
  W.init.call(this);
}
dr.exports = W;
dr.exports.once = io;
W.EventEmitter = W;
W.prototype._events = void 0;
W.prototype._eventsCount = 0;
W.prototype._maxListeners = void 0;
var _r = 10;
function Dt(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(W, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return _r;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || sn(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    _r = e;
  }
});
W.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
W.prototype.setMaxListeners = function(n) {
  if (typeof n != "number" || n < 0 || sn(n))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
  return this._maxListeners = n, this;
};
function an(e) {
  return e._maxListeners === void 0 ? W.defaultMaxListeners : e._maxListeners;
}
W.prototype.getMaxListeners = function() {
  return an(this);
};
W.prototype.emit = function(n) {
  for (var o = [], a = 1; a < arguments.length; a++)
    o.push(arguments[a]);
  var f = n === "error", p = this._events;
  if (p !== void 0)
    f = f && p.error === void 0;
  else if (!f)
    return !1;
  if (f) {
    var d;
    if (o.length > 0 && (d = o[0]), d instanceof Error)
      throw d;
    var l = new Error("Unhandled error." + (d ? " (" + d.message + ")" : ""));
    throw l.context = d, l;
  }
  var g = p[n];
  if (g === void 0)
    return !1;
  if (typeof g == "function")
    Pr(g, this, o);
  else
    for (var x = g.length, y = fn(g, x), a = 0; a < x; ++a)
      Pr(y[a], this, o);
  return !0;
};
function ln(e, n, o, a) {
  var f, p, d;
  if (Dt(o), p = e._events, p === void 0 ? (p = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (p.newListener !== void 0 && (e.emit(
    "newListener",
    n,
    o.listener ? o.listener : o
  ), p = e._events), d = p[n]), d === void 0)
    d = p[n] = o, ++e._eventsCount;
  else if (typeof d == "function" ? d = p[n] = a ? [o, d] : [d, o] : a ? d.unshift(o) : d.push(o), f = an(e), f > 0 && d.length > f && !d.warned) {
    d.warned = !0;
    var l = new Error("Possible EventEmitter memory leak detected. " + d.length + " " + String(n) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    l.name = "MaxListenersExceededWarning", l.emitter = e, l.type = n, l.count = d.length, eo(l);
  }
  return e;
}
W.prototype.addListener = function(n, o) {
  return ln(this, n, o, !1);
};
W.prototype.on = W.prototype.addListener;
W.prototype.prependListener = function(n, o) {
  return ln(this, n, o, !0);
};
function to() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function cn(e, n, o) {
  var a = { fired: !1, wrapFn: void 0, target: e, type: n, listener: o }, f = to.bind(a);
  return f.listener = o, a.wrapFn = f, f;
}
W.prototype.once = function(n, o) {
  return Dt(o), this.on(n, cn(this, n, o)), this;
};
W.prototype.prependOnceListener = function(n, o) {
  return Dt(o), this.prependListener(n, cn(this, n, o)), this;
};
W.prototype.removeListener = function(n, o) {
  var a, f, p, d, l;
  if (Dt(o), f = this._events, f === void 0)
    return this;
  if (a = f[n], a === void 0)
    return this;
  if (a === o || a.listener === o)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete f[n], f.removeListener && this.emit("removeListener", n, a.listener || o));
  else if (typeof a != "function") {
    for (p = -1, d = a.length - 1; d >= 0; d--)
      if (a[d] === o || a[d].listener === o) {
        l = a[d].listener, p = d;
        break;
      }
    if (p < 0)
      return this;
    p === 0 ? a.shift() : ro(a, p), a.length === 1 && (f[n] = a[0]), f.removeListener !== void 0 && this.emit("removeListener", n, l || o);
  }
  return this;
};
W.prototype.off = W.prototype.removeListener;
W.prototype.removeAllListeners = function(n) {
  var o, a, f;
  if (a = this._events, a === void 0)
    return this;
  if (a.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : a[n] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete a[n]), this;
  if (arguments.length === 0) {
    var p = Object.keys(a), d;
    for (f = 0; f < p.length; ++f)
      d = p[f], d !== "removeListener" && this.removeAllListeners(d);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (o = a[n], typeof o == "function")
    this.removeListener(n, o);
  else if (o !== void 0)
    for (f = o.length - 1; f >= 0; f--)
      this.removeListener(n, o[f]);
  return this;
};
function un(e, n, o) {
  var a = e._events;
  if (a === void 0)
    return [];
  var f = a[n];
  return f === void 0 ? [] : typeof f == "function" ? o ? [f.listener || f] : [f] : o ? no(f) : fn(f, f.length);
}
W.prototype.listeners = function(n) {
  return un(this, n, !0);
};
W.prototype.rawListeners = function(n) {
  return un(this, n, !1);
};
W.listenerCount = function(e, n) {
  return typeof e.listenerCount == "function" ? e.listenerCount(n) : dn.call(e, n);
};
W.prototype.listenerCount = dn;
function dn(e) {
  var n = this._events;
  if (n !== void 0) {
    var o = n[e];
    if (typeof o == "function")
      return 1;
    if (o !== void 0)
      return o.length;
  }
  return 0;
}
W.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Lt(this._events) : [];
};
function fn(e, n) {
  for (var o = new Array(n), a = 0; a < n; ++a)
    o[a] = e[a];
  return o;
}
function ro(e, n) {
  for (; n + 1 < e.length; n++)
    e[n] = e[n + 1];
  e.pop();
}
function no(e) {
  for (var n = new Array(e.length), o = 0; o < n.length; ++o)
    n[o] = e[o].listener || e[o];
  return n;
}
function io(e, n) {
  return new Promise(function(o, a) {
    function f(d) {
      e.removeListener(n, p), a(d);
    }
    function p() {
      typeof e.removeListener == "function" && e.removeListener("error", f), o([].slice.call(arguments));
    }
    pn(e, n, p, { once: !0 }), n !== "error" && oo(e, f, { once: !0 });
  });
}
function oo(e, n, o) {
  typeof e.on == "function" && pn(e, "error", n, o);
}
function pn(e, n, o, a) {
  if (typeof e.on == "function")
    a.once ? e.once(n, o) : e.on(n, o);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(n, function f(p) {
      a.once && e.removeEventListener(n, f), o(p);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var so = dr.exports;
const le = {
  type: Mi,
  core: new so.EventEmitter()
}, ao = (e = {}) => {
  const n = Date.now();
  return {
    id: e.customerUuid + "_" + e.eventType + "_" + n,
    type: e.eventType,
    system: e.systemType,
    uri: e.uri,
    domain: e.domain,
    email: e.email,
    phone: e.phone,
    customerUuid: e.customerUuid,
    data: e.additionalData,
    utmParams: e.utmParams,
    createdAt: n
  };
}, Se = ({ eventType: e, systemType: n, utmParams: o, customerUuid: a, email: f, phone: p }) => {
  const d = ao({
    eventType: e,
    systemType: n,
    uri: window.location.pathname,
    domain: window.location.hostname,
    email: f || null,
    phone: p || null,
    customerUuid: a,
    additionalData: {},
    utmParams: o
  });
  window.trackEventInGTM && window.trackEventInGTM(d);
};
let Ie;
const lo = (e) => (n) => (o) => {
  const { meta: a, config: f, stream: p, intentions: d } = e.getState();
  if (ur.match(o)) {
    const x = {
      term: Ut(window.location.search, "utm_chat"),
      user_id: a.cid,
      role: qe.user,
      message: o.payload
    };
    e.dispatch(ct(x)), e.dispatch(jr()), Ie.emit(Ne.chat, x), uo(p.history) && Se({
      eventType: Be.firstMessage,
      systemType: a.systemType,
      utmParams: a.marketing.lastUtmParams,
      customerUuid: a.cid
    });
  }
  const l = !p.history.some((x) => x.role === qe.user), g = p.history[p.history.length - 1];
  if (l && ct.match(o) && o.payload.role === qe.user && g.options.length) {
    const x = g.options.findIndex((y) => y.value === o.payload.message) + 1;
    Se({
      eventType: Be.buttonClick + x,
      systemType: a.systemType,
      utmParams: a.marketing.lastUtmParams,
      customerUuid: a.cid
    });
  }
  if (Ft.match(o)) {
    const x = {
      billingFrequencyTmsg: a.pd.billingOptionType === "one-time" ? f.translations.oneTimer : f.translations.subscriberBillingFrequency.replace("{1}", a.pd.frequencyInMonths)
    };
    if (e.dispatch(Ai(x)), o.payload === !0) {
      const y = {
        eventType: null,
        systemType: a.systemType,
        utmParams: a.marketing.lastUtmParams,
        customerUuid: a.cid,
        email: d.email.currentEmail
      };
      y.eventType = Qr.addToCart, Se(y), y.eventType = Be.priceSeen, Se(y);
    }
  }
  if (At.match(o) && o.payload && Se({
    eventType: Be.emailField,
    systemType: a.systemType,
    utmParams: a.marketing.lastUtmParams,
    customerUuid: a.cid,
    email: d.email.currentEmail
  }), !Zr.match(o))
    return n(o);
  Ie = ei.connect(o.payload.chatUrl, Ui), Ie.on("connect", () => {
    const { meta: x } = e.getState();
    Ie.emit(Ne.chatHistory, { user_id: x.cid }), e.dispatch(jr()), e.dispatch(Fi());
  }), Ie.on(Ne.chatHistory, (x) => {
    e.dispatch(Qt());
    const { config: y, meta: v } = e.getState();
    if (x.history.length) {
      const C = x.history.length - 1;
      if (x.history[C].isSpecial = co(x.history[C].content), x.history[C].content.includes(le.type.email) && e.dispatch(At(!0)), x.history[C].content.includes(le.type.payment)) {
        e.dispatch(Ft(!0));
        const { config: I } = e.getState();
        x.history[C].content += v.pd.displayPlanPrice + " " + I.translations.billingFrequencyTmsg;
      }
      e.dispatch(Sr(x.history));
    } else
      Ie.emit(Ne.chat, {
        role: qe.assistant,
        term: Ut(window.location.search, "utm_chat"),
        user_id: v.cid,
        message: y.aiProfile.initialMessage
      }), e.dispatch(Sr([{ role: qe.assistant, content: y.aiProfile.initialMessage }]));
  }), Ie.on(Ne.streamStart, () => {
    e.dispatch(Qt()), e.dispatch(Di()), e.dispatch(kr(""));
  }), Ie.on(Ne.streamData, ({ chunk: x }) => {
    const { stream: y, meta: v } = e.getState(), { textToParse: C, downstreamQueue: I } = y;
    if (C.includes(le.type.email) && (e.dispatch(Yt()), e.dispatch(At(!0))), C.includes(le.type.payment)) {
      e.dispatch(Yt()), e.dispatch(Ft(!0));
      const { config: j } = e.getState();
      e.dispatch(kr(I.message + v.pd.displayPlanPrice + " " + j.translations.billingFrequencyTmsg));
    }
    if (x.includes("[")) {
      e.dispatch(Br(x));
      return;
    }
    if (x.includes("]") || C) {
      e.dispatch(Br(x));
      return;
    }
    e.dispatch(zi({ chunk: x }));
  }), Ie.on(Ne.streamEnd, () => {
    const { options: x } = er(e.getState().stream.textToParse), y = {
      ...e.getState().stream.downstreamQueue,
      options: x
    };
    e.dispatch(ct(y)), e.dispatch(Oi()), e.dispatch(Yt());
  }), Ie.on(Ne.streamError, () => {
    e.dispatch(Qt()), console.log("streamError");
  }), n(o);
}, co = (e) => [le.type.email, le.type.payment].map((a) => new RegExp(`\\[?${a}\\]?`)).some((a) => e.match(a)), uo = (e) => e.filter((n) => n.role === qe.user).length === 1, fo = (e) => (n) => (le.core.on(le.type.emailSuccess, () => {
  const { meta: o, intentions: a } = e.getState();
  e.dispatch(tr(!1)), e.dispatch(ur(a.email.currentEmail)), e.dispatch(Hi(!0)), e.dispatch(At(!1)), Se({
    eventType: Be.emailEntered,
    systemType: o.systemType,
    utmParams: o.marketing.lastUtmParams,
    customerUuid: o.cid,
    email: a.email.currentEmail
  });
}), le.core.on(le.type.emailError, (o) => {
  const { meta: a, intentions: f, config: p } = e.getState(), { tm716: d, tm526: l, tm715: g } = p.translations;
  if (e.dispatch(tr(!1)), o.status === 409) {
    e.dispatch(ct({
      role: "assistant",
      message: d,
      options: [
        { id: "opt-1", label: l, value: "link", link: o.data.buttonLink },
        { id: "opt-2", label: g, value: "button", noStream: !0 }
      ]
    })), Se({
      eventType: Be.emailExist,
      systemType: a.systemType,
      utmParams: a.marketing.lastUtmParams,
      customerUuid: a.cid,
      email: f.email.currentEmail
    });
    return;
  }
  o.status === 422 && (e.dispatch(Ji(o.errors.email[0])), Se({
    eventType: Be.emailWrong,
    systemType: a.systemType,
    utmParams: a.marketing.lastUtmParams,
    customerUuid: a.cid,
    email: f.email.currentEmail
  }));
}), Ar("marketing", e, ki), Ar("__pd", e, Si), (o) => {
  if (on.match(o) && o.payload.isVisible) {
    const { meta: a, intentions: f } = e.getState();
    Se({
      eventType: Be.linkProvided,
      systemType: a.systemType,
      utmParams: a.marketing.lastUtmParams,
      customerUuid: a.cid,
      email: f.email.currentEmail
    });
  }
  n(o);
}), Ar = (e, n, o) => {
  const a = setInterval(() => {
    const f = JSON.parse(localStorage.getItem(e));
    f && (n.dispatch(o(f)), clearInterval(a));
  }, 1e3);
}, hn = Et({
  name: "analytics",
  initialState: Ii,
  reducers: {
    setEvent(e, { payload: n }) {
      e.events[n.event] = { executed: !0 };
    }
  }
});
hn.actions;
const po = hn.reducer, ho = Kn({
  reducer: {
    meta: Bi,
    config: Li,
    stream: Vi,
    intentions: Ki,
    analytics: po
  },
  middleware: (e) => e().concat(lo, fo)
});
const dt = () => Jn(), z = Xn;
var Fr = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ue = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, mo = (e, n) => JSON.stringify(e) === JSON.stringify(n);
function mn(e, n) {
  e.forEach(function(o) {
    Array.isArray(o) ? mn(o, n) : n.push(o);
  });
}
function wn(e) {
  let n = [];
  return mn(e, n), n;
}
var wo = (...e) => wn(e).filter(Boolean), gn = (e, n) => {
  let o = {}, a = Object.keys(e), f = Object.keys(n);
  for (let p of a)
    if (f.includes(p)) {
      let d = e[p], l = n[p];
      typeof d == "object" && typeof l == "object" ? o[p] = gn(d, l) : o[p] = l + " " + d;
    } else
      o[p] = e[p];
  for (let p of f)
    a.includes(p) || (o[p] = n[p]);
  return o;
}, Lr = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
function go() {
  for (var e = 0, n, o, a = ""; e < arguments.length; )
    (n = arguments[e++]) && (o = yn(n)) && (a && (a += " "), a += o);
  return a;
}
function yn(e) {
  if (typeof e == "string")
    return e;
  for (var n, o = "", a = 0; a < e.length; a++)
    e[a] && (n = yn(e[a])) && (o && (o += " "), o += n);
  return o;
}
var fr = "-";
function yo(e) {
  var n = xo(e), o = e.conflictingClassGroups, a = e.conflictingClassGroupModifiers, f = a === void 0 ? {} : a;
  function p(l) {
    var g = l.split(fr);
    return g[0] === "" && g.length !== 1 && g.shift(), bn(g, n) || bo(l);
  }
  function d(l, g) {
    var x = o[l] || [];
    return g && f[l] ? [].concat(x, f[l]) : x;
  }
  return {
    getClassGroupId: p,
    getConflictingClassGroupIds: d
  };
}
function bn(e, n) {
  var d;
  if (e.length === 0)
    return n.classGroupId;
  var o = e[0], a = n.nextPart.get(o), f = a ? bn(e.slice(1), a) : void 0;
  if (f)
    return f;
  if (n.validators.length !== 0) {
    var p = e.join(fr);
    return (d = n.validators.find(function(l) {
      var g = l.validator;
      return g(p);
    })) == null ? void 0 : d.classGroupId;
  }
}
var Ur = /^\[(.+)\]$/;
function bo(e) {
  if (Ur.test(e)) {
    var n = Ur.exec(e)[1], o = n == null ? void 0 : n.substring(0, n.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}
function xo(e) {
  var n = e.theme, o = e.prefix, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, f = Eo(Object.entries(e.classGroups), o);
  return f.forEach(function(p) {
    var d = p[0], l = p[1];
    rr(l, a, d, n);
  }), a;
}
function rr(e, n, o, a) {
  e.forEach(function(f) {
    if (typeof f == "string") {
      var p = f === "" ? n : Mr(n, f);
      p.classGroupId = o;
      return;
    }
    if (typeof f == "function") {
      if (vo(f)) {
        rr(f(a), n, o, a);
        return;
      }
      n.validators.push({
        validator: f,
        classGroupId: o
      });
      return;
    }
    Object.entries(f).forEach(function(d) {
      var l = d[0], g = d[1];
      rr(g, Mr(n, l), o, a);
    });
  });
}
function Mr(e, n) {
  var o = e;
  return n.split(fr).forEach(function(a) {
    o.nextPart.has(a) || o.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(a);
  }), o;
}
function vo(e) {
  return e.isThemeGetter;
}
function Eo(e, n) {
  return n ? e.map(function(o) {
    var a = o[0], f = o[1], p = f.map(function(d) {
      return typeof d == "string" ? n + d : typeof d == "object" ? Object.fromEntries(Object.entries(d).map(function(l) {
        var g = l[0], x = l[1];
        return [n + g, x];
      })) : d;
    });
    return [a, p];
  }) : e;
}
function To(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var n = 0, o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  function f(p, d) {
    o.set(p, d), n++, n > e && (n = 0, a = o, o = /* @__PURE__ */ new Map());
  }
  return {
    get: function(d) {
      var l = o.get(d);
      if (l !== void 0)
        return l;
      if ((l = a.get(d)) !== void 0)
        return f(d, l), l;
    },
    set: function(d, l) {
      o.has(d) ? o.set(d, l) : f(d, l);
    }
  };
}
var xn = "!";
function Io(e) {
  var n = e.separator || ":", o = n.length === 1, a = n[0], f = n.length;
  return function(d) {
    for (var l = [], g = 0, x = 0, y, v = 0; v < d.length; v++) {
      var C = d[v];
      if (g === 0) {
        if (C === a && (o || d.slice(v, v + f) === n)) {
          l.push(d.slice(x, v)), x = v + f;
          continue;
        }
        if (C === "/") {
          y = v;
          continue;
        }
      }
      C === "[" ? g++ : C === "]" && g--;
    }
    var I = l.length === 0 ? d : d.substring(x), j = I.startsWith(xn), D = j ? I.substring(1) : I, A = y && y > x ? y - x : void 0;
    return {
      modifiers: l,
      hasImportantModifier: j,
      baseClassName: D,
      maybePostfixModifierPosition: A
    };
  };
}
function Co(e) {
  if (e.length <= 1)
    return e;
  var n = [], o = [];
  return e.forEach(function(a) {
    var f = a[0] === "[";
    f ? (n.push.apply(n, o.sort().concat([a])), o = []) : o.push(a);
  }), n.push.apply(n, o.sort()), n;
}
function Ro(e) {
  return {
    cache: To(e.cacheSize),
    splitModifiers: Io(e),
    ...yo(e)
  };
}
var ko = /\s+/;
function So(e, n) {
  var o = n.splitModifiers, a = n.getClassGroupId, f = n.getConflictingClassGroupIds, p = /* @__PURE__ */ new Set();
  return e.trim().split(ko).map(function(d) {
    var l = o(d), g = l.modifiers, x = l.hasImportantModifier, y = l.baseClassName, v = l.maybePostfixModifierPosition, C = a(v ? y.substring(0, v) : y), I = !!v;
    if (!C) {
      if (!v)
        return {
          isTailwindClass: !1,
          originalClassName: d
        };
      if (C = a(y), !C)
        return {
          isTailwindClass: !1,
          originalClassName: d
        };
      I = !1;
    }
    var j = Co(g).join(":"), D = x ? j + xn : j;
    return {
      isTailwindClass: !0,
      modifierId: D,
      classGroupId: C,
      originalClassName: d,
      hasPostfixModifier: I
    };
  }).reverse().filter(function(d) {
    if (!d.isTailwindClass)
      return !0;
    var l = d.modifierId, g = d.classGroupId, x = d.hasPostfixModifier, y = l + g;
    return p.has(y) ? !1 : (p.add(y), f(g, x).forEach(function(v) {
      return p.add(l + v);
    }), !0);
  }).reverse().map(function(d) {
    return d.originalClassName;
  }).join(" ");
}
function nr() {
  for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
    n[o] = arguments[o];
  var a, f, p, d = l;
  function l(x) {
    var y = n[0], v = n.slice(1), C = v.reduce(function(I, j) {
      return j(I);
    }, y());
    return a = Ro(C), f = a.cache.get, p = a.cache.set, d = g, g(x);
  }
  function g(x) {
    var y = f(x);
    if (y)
      return y;
    var v = So(x, a);
    return p(x, v), v;
  }
  return function() {
    return d(go.apply(null, arguments));
  };
}
function Z(e) {
  var n = function(a) {
    return a[e] || [];
  };
  return n.isThemeGetter = !0, n;
}
var vn = /^\[(?:([a-z-]+):)?(.+)\]$/i, Bo = /^\d+\/\d+$/, jo = /* @__PURE__ */ new Set(["px", "full", "screen"]), Po = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, _o = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ao = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function xe(e) {
  return He(e) || jo.has(e) || Bo.test(e) || ir(e);
}
function ir(e) {
  return Ye(e, "length", Oo);
}
function Fo(e) {
  return Ye(e, "size", En);
}
function Lo(e) {
  return Ye(e, "position", En);
}
function Uo(e) {
  return Ye(e, "url", zo);
}
function jt(e) {
  return Ye(e, "number", He);
}
function He(e) {
  return !Number.isNaN(Number(e));
}
function Mo(e) {
  return e.endsWith("%") && He(e.slice(0, -1));
}
function gt(e) {
  return Nr(e) || Ye(e, "number", Nr);
}
function M(e) {
  return vn.test(e);
}
function yt() {
  return !0;
}
function Oe(e) {
  return Po.test(e);
}
function No(e) {
  return Ye(e, "", Do);
}
function Ye(e, n, o) {
  var a = vn.exec(e);
  return a ? a[1] ? a[1] === n : o(a[2]) : !1;
}
function Oo(e) {
  return _o.test(e);
}
function En() {
  return !1;
}
function zo(e) {
  return e.startsWith("url(");
}
function Nr(e) {
  return Number.isInteger(Number(e));
}
function Do(e) {
  return Ao.test(e);
}
function or() {
  var e = Z("colors"), n = Z("spacing"), o = Z("blur"), a = Z("brightness"), f = Z("borderColor"), p = Z("borderRadius"), d = Z("borderSpacing"), l = Z("borderWidth"), g = Z("contrast"), x = Z("grayscale"), y = Z("hueRotate"), v = Z("invert"), C = Z("gap"), I = Z("gradientColorStops"), j = Z("gradientColorStopPositions"), D = Z("inset"), A = Z("margin"), Y = Z("opacity"), N = Z("padding"), we = Z("saturate"), ge = Z("scale"), re = Z("sepia"), ve = Z("skew"), Ee = Z("space"), Pe = Z("translate"), Te = function() {
    return ["auto", "contain", "none"];
  }, _e = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, S = function() {
    return ["auto", M, n];
  }, T = function() {
    return [M, n];
  }, R = function() {
    return ["", xe];
  }, B = function() {
    return ["auto", He, M];
  }, P = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, F = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, $ = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, G = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, Q = function() {
    return ["", "0", M];
  }, pe = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, L = function() {
    return [He, jt];
  }, J = function() {
    return [He, M];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [yt],
      spacing: [xe],
      blur: ["none", "", Oe, M],
      brightness: L(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Oe, M],
      borderSpacing: T(),
      borderWidth: R(),
      contrast: L(),
      grayscale: Q(),
      hueRotate: J(),
      invert: Q(),
      gap: T(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Mo, ir],
      inset: S(),
      margin: S(),
      opacity: L(),
      padding: T(),
      saturate: L(),
      scale: L(),
      sepia: Q(),
      skew: J(),
      space: T(),
      translate: T()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", M]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Oe]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": pe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": pe()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(P(), [M])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: _e()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": _e()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": _e()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Te()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Te()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Te()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [D]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [D]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [D]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [D]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [D]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [D]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [D]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [D]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [D]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", gt]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: S()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", M]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Q()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Q()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", gt]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [yt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", gt]
        }, M]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": B()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": B()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [yt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [gt]
        }, M]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": B()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": B()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", M]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", M]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [C]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [C]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [C]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(G())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal"].concat(G(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(G(), ["baseline"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [N]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [N]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [N]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [N]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [N]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [N]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [N]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [N]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [N]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [A]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [A]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [A]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [A]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [A]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [A]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [A]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [A]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [A]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [Ee]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [Ee]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", M, n]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", M, xe]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [Oe]
        }, Oe, M]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [M, n, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", M, xe]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [M, n, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Oe, ir]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", jt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [yt]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", M]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", He, jt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", M, xe]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", M]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", M]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [Y]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [Y]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(F(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", xe]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", M, xe]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: T()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", M]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", M]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [Y]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(P(), [Lo])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Fo]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Uo]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [j]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [j]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [j]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [I]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [I]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [I]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [p]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [p]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [p]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [p]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [p]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [p]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [p]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [p]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [p]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [p]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [p]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [p]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [p]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [p]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [p]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [Y]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(F(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [l]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [Y]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: F()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [f]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [f]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [f]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [f]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [f]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [f]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [f]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [f]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(F())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [M, xe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [xe]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: R()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [Y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [xe]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Oe, No]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [yt]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": $()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": $()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [o]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [a]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [g]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Oe, M]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [x]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [y]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [v]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [we]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [re]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [o]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [a]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [g]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [x]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [y]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [v]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [we]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [re]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [d]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [d]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [d]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", M]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: J()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", M]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: J()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", M]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [ge]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [ge]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [ge]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [gt, M]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [Pe]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [Pe]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [ve]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [ve]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", M]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", M]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": T()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": T()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": T()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": T()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": T()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": T()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": T()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": T()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": T()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": T()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": T()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": T()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": T()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": T()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": T()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": T()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": T()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": T()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", M]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [xe, jt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
function Vo(e, n) {
  for (var o in n)
    Tn(e, o, n[o]);
  return e;
}
var $o = Object.prototype.hasOwnProperty, qo = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function Tn(e, n, o) {
  if (!$o.call(e, n) || qo.has(typeof o) || o === null) {
    e[n] = o;
    return;
  }
  if (Array.isArray(o) && Array.isArray(e[n])) {
    e[n] = e[n].concat(o);
    return;
  }
  if (typeof o == "object" && typeof e[n] == "object") {
    if (e[n] === null) {
      e[n] = o;
      return;
    }
    for (var a in o)
      Tn(e[n], a, o[a]);
  }
}
function Wo(e) {
  for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    o[a - 1] = arguments[a];
  return typeof e == "function" ? nr.apply(void 0, [or, e].concat(o)) : nr.apply(void 0, [function() {
    return Vo(or(), e);
  }].concat(o));
}
var Go = /* @__PURE__ */ nr(or), Ho = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, In = (e) => e || void 0, Mt = (...e) => In(wn(e).filter(Boolean).join(" ")), Jt = null, Nt = {}, sr = !1, bt = (...e) => (n) => n.twMerge ? ((!Jt || sr) && (sr = !1, Jt = ue(Nt) ? Go : Wo(Nt)), In(Jt(Mt(e)))) : Mt(e), Or = (e, n) => {
  for (let o in n)
    e.hasOwnProperty(o) ? e[o] = Mt(e[o], n[o]) : e[o] = n[o];
  return e;
}, te = (e, n) => {
  let { extend: o = null, slots: a = {}, variants: f = {}, compoundVariants: p = [], compoundSlots: d = [], defaultVariants: l = {} } = e, g = { ...Ho, ...n }, x = o != null && o.base ? Mt(o.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, y = o != null && o.variants && !ue(o.variants) ? gn(f, o.variants) : f, v = o != null && o.defaultVariants && !ue(o.defaultVariants) ? { ...o.defaultVariants, ...l } : l;
  !ue(g.twMergeConfig) && !mo(g.twMergeConfig, Nt) && (sr = !0, Nt = g.twMergeConfig);
  let C = ue(a) ? {} : { base: e == null ? void 0 : e.base, ...a }, I = ue(o == null ? void 0 : o.slots) ? C : Or({ ...o == null ? void 0 : o.slots }, ue(C) ? { base: e == null ? void 0 : e.base } : C), j = (A) => {
    if (ue(y) && ue(a) && ue(o == null ? void 0 : o.slots))
      return bt(x, A == null ? void 0 : A.class, A == null ? void 0 : A.className)(g);
    if (p && !Array.isArray(p))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof p}`);
    if (d && !Array.isArray(d))
      throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof d}`);
    let Y = (S, T, R = [], B) => {
      let P = R;
      if (typeof T == "string")
        P = P.concat(Lr(T).split(" ").map((F) => `${S}:${F}`));
      else if (Array.isArray(T))
        P = P.concat(T.reduce((F, $) => F.concat(`${S}:${$}`), []));
      else if (typeof T == "object" && typeof B == "string") {
        for (let F in T)
          if (T.hasOwnProperty(F) && F === B) {
            let $ = T[F];
            if ($ && typeof $ == "string") {
              let G = Lr($);
              P[B] ? P[B] = P[B].concat(G.split(" ").map((Q) => `${S}:${Q}`)) : P[B] = G.split(" ").map((Q) => `${S}:${Q}`);
            } else
              Array.isArray($) && $.length > 0 && (P[B] = $.reduce((G, Q) => G.concat(`${S}:${Q}`), []));
          }
      }
      return P;
    }, N = (S, T = y, R = null, B = null) => {
      var P;
      let F = T[S];
      if (!F || ue(F))
        return null;
      let $ = (P = B == null ? void 0 : B[S]) != null ? P : A == null ? void 0 : A[S];
      if ($ === null)
        return null;
      let G = Fr($), Q = Array.isArray(g.responsiveVariants) && g.responsiveVariants.length > 0 || g.responsiveVariants === !0, pe = v == null ? void 0 : v[S], L = [];
      if (typeof G == "object" && Q)
        for (let [ne, ze] of Object.entries(G)) {
          let Qe = F[ze];
          if (ne === "initial") {
            pe = ze;
            continue;
          }
          Array.isArray(g.responsiveVariants) && !g.responsiveVariants.includes(ne) || (L = Y(ne, Qe, L, R));
        }
      let J = F[G] || F[Fr(pe)];
      return typeof L == "object" && typeof R == "string" && L[R] ? Or(L, J) : L.length > 0 ? (L.push(J), L) : J;
    }, we = () => y ? Object.keys(y).map((S) => N(S, y)) : null, ge = (S, T) => {
      if (!y || typeof y != "object")
        return null;
      let R = new Array();
      for (let B in y) {
        let P = N(B, y, S, T), F = S === "base" && typeof P == "string" ? P : P && P[S];
        F && (R[R.length] = F);
      }
      return R;
    }, re = {};
    for (let S in A)
      A[S] !== void 0 && (re[S] = A[S]);
    let ve = (S, T) => {
      var R;
      let B = typeof (A == null ? void 0 : A[S]) == "object" ? { [S]: (R = A[S]) == null ? void 0 : R.initial } : {};
      return { ...v, ...re, ...B, ...T };
    }, Ee = (S = [], T) => {
      let R = [];
      for (let { class: B, className: P, ...F } of S) {
        let $ = !0;
        for (let [G, Q] of Object.entries(F)) {
          let pe = ve(G, T);
          if (Array.isArray(Q)) {
            if (!Q.includes(pe[G])) {
              $ = !1;
              break;
            }
          } else if (pe[G] !== Q) {
            $ = !1;
            break;
          }
        }
        $ && (B && R.push(B), P && R.push(P));
      }
      return R;
    }, Pe = (S) => {
      let T = Ee(p, S), R = Ee(o == null ? void 0 : o.compoundVariants, S);
      return wo(R, T);
    }, Te = (S) => {
      let T = Pe(S);
      if (!Array.isArray(T))
        return T;
      let R = {};
      for (let B of T)
        if (typeof B == "string" && (R.base = bt(R.base, B)(g)), typeof B == "object")
          for (let [P, F] of Object.entries(B))
            R[P] = bt(R[P], F)(g);
      return R;
    }, _e = (S) => {
      if (d.length < 1)
        return null;
      let T = {};
      for (let { slots: R = [], class: B, className: P, ...F } of d) {
        if (!ue(F)) {
          let $ = !0;
          for (let G of Object.keys(F)) {
            let Q = ve(G, S)[G];
            if (Q === void 0 || (Array.isArray(F[G]) ? !F[G].includes(Q) : F[G] !== Q)) {
              $ = !1;
              break;
            }
          }
          if (!$)
            continue;
        }
        for (let $ of R)
          T[$] = T[$] || [], T[$].push([B, P]);
      }
      return T;
    };
    if (!ue(a) || !ue(o == null ? void 0 : o.slots)) {
      let S = {};
      if (typeof I == "object" && !ue(I))
        for (let T of Object.keys(I))
          S[T] = (R) => {
            var B, P;
            return bt(I[T], ge(T, R), ((B = Te(R)) != null ? B : [])[T], ((P = _e(R)) != null ? P : [])[T], R == null ? void 0 : R.class, R == null ? void 0 : R.className)(g);
          };
      return S;
    }
    return bt(x, we(), Pe(), A == null ? void 0 : A.class, A == null ? void 0 : A.className)(g);
  }, D = () => {
    if (!(!y || typeof y != "object"))
      return Object.keys(y);
  };
  return j.variantKeys = D(), j.extend = o, j.base = x, j.slots = I, j.variants = y, j.defaultVariants = v, j.compoundSlots = d, j.compoundVariants = p, j;
};
const Yo = (
  /*tw*/
  te({
    slots: {
      base: "tw--flex tw--self-stretch tw--justify-self-stretch tw--items-stretch tw--justify-center tw--max-h-full tw--overflow-hidden",
      wrapper: "tw--flex tw--flex-col tw--w-full md:tw--max-w-3xl tw--max-h-screen tw--border-x"
    },
    variants: {
      theme: {
        light: {
          base: "tw--bg-light-lumina",
          wrapper: "tw--bg-light-whisper tw--text-light-zephyr tw--border-light-ember tw--border-opacity-30"
        },
        dark: {
          base: "tw--bg-dark-lumina",
          wrapper: "tw--bg-dark-whisper tw--text-white tw--border-black"
        }
      },
      minimized: {
        true: "tw--fixed tw--right-0 tw--bottom-0 tw--max-h-[700px] tw--max-w-md"
      }
    },
    responsiveVariants: !0
    // ['sm', 'md']
  })
), Qo = (
  /*tw*/
  te({
    slots: {
      base: "tw--flex tw--px-4 tw--py-2 tw--shadow-[0_2px_7px_-6px]"
    },
    variants: {
      theme: {
        light: "tw--shadow-light-zephyr",
        dark: "tw--shadow-dark-zephyr"
      }
    }
  })
), Cn = (
  /*tw*/
  te({
    slots: {
      base: "tw--flex tw--items-center tw--flex-wrap tw--px-4 tw--py-2",
      input: "tw--flex-1 tw--pr-2",
      button: "tw--flex tw--grow-0"
    },
    variants: {
      theme: {
        light: "tw--text-light-seraph",
        dark: ""
      }
    }
  })
), Rn = ({ head: e, stream: n, foot: o }) => {
  const { themeId: a, isPluginMode: f } = z(ae), { base: p, wrapper: d } = Yo({ theme: a });
  return /* @__PURE__ */ m.jsx("div", { className: p({ minimized: f }), children: /* @__PURE__ */ m.jsxs("div", { className: d(), children: [
    e,
    n,
    o
  ] }) });
};
Rn.propTypes = {
  head: Pt.isRequired,
  stream: Pt.isRequired,
  foot: Pt.isRequired
};
const Jo = (
  /*tw*/
  te({
    slots: {
      base: "tw--flex tw--items-center",
      avatar: "tw--rounded-full",
      info: "tw--pl-3",
      name: "tw--font-semibold",
      role: "tw--text-opacity-80"
    },
    variants: {
      theme: {
        light: {
          role: "tw--text-light-zephyr"
        },
        dark: {
          role: "tw--text-dark-zephyr"
        }
      },
      orientation: {
        horizontal: {
          base: "tw--flex-row",
          avatar: "tw--shrink"
        },
        vertical: {
          base: "tw--flex-col tw--text-center",
          role: "tw--text-opacity-60"
        }
      },
      minimized: {
        false: {
          avatar: "tw--h-14",
          name: "tw--text-xl/7",
          role: "tw--text-lg/6"
        },
        true: {
          avatar: "tw--w-10",
          name: "tw--text-sm/5",
          role: "tw--text-xs/3"
        }
      }
    },
    compoundSlots: [
      {
        slots: ["avatar"],
        orientation: "vertical",
        minimized: !1,
        class: "tw--h-16"
      },
      {
        slots: ["name"],
        orientation: "vertical",
        minimized: !1,
        class: "tw--font-medium tw--text-2xl/8"
      },
      {
        slots: ["role"],
        orientation: "vertical",
        minimized: !1,
        class: "tw--text-lg/8"
      }
    ]
  })
), pr = ({ orientation: e = "horizontal", minimized: n = !1 }) => {
  const { aiProfile: o, themeId: a } = z(ae), { base: f, avatar: p, info: d, name: l, role: g } = Jo({ theme: a, orientation: e, minimized: n });
  return /* @__PURE__ */ m.jsxs("div", { className: f(), children: [
    /* @__PURE__ */ m.jsx(
      "img",
      {
        className: p(),
        src: o.imgSrc,
        alt: "img"
      }
    ),
    /* @__PURE__ */ m.jsxs("div", { className: d(), children: [
      /* @__PURE__ */ m.jsx("div", { className: l(), children: o.name }),
      /* @__PURE__ */ m.jsx("div", { className: g(), children: o.role })
    ] })
  ] });
};
pr.propTypes = {
  orientation: fe,
  minimized: Ot
};
const Xo = () => {
  const { themeId: e } = z(ae), { base: n } = Qo({ theme: e });
  return /* @__PURE__ */ m.jsx("div", { className: n(), children: /* @__PURE__ */ m.jsx(pr, {}) });
}, Zo = (
  /*tw*/
  te({
    slots: {
      base: "tw--relative tw--flex tw--items-center",
      input: "tw--w-full tw--px-4 tw--py-3 tw--rounded-full focus:tw--outline-none",
      loader: "tw--absolute tw--right-4 tw--top-[50%] tw--translate-y-[-50%]",
      spin: "tw--block tw--w-6 tw--h-6 tw--border-solid tw--border-[5px] tw--rounded-3xl tw--animate-rotate tw--m-auto"
    },
    variants: {
      theme: {
        light: {
          base: "",
          input: "tw--bg-light-lumina tw--text-black",
          loader: "",
          spin: "tw--border-light-zephyr/[0.1] tw--border-t-light-zephyr/[0.6] tw--border-l-light-zephyr/[0.6]"
        },
        dark: {
          base: "",
          input: "tw--bg-dark-lumina tw--text-white",
          loader: "",
          spin: "w--border-dark-zephyr/[0.1] tw--border-t-dark-zephyr/[0.6] tw--border-l-dark-zephyr/[0.6]"
        }
      }
    }
  })
), hr = ({ type: e, ref: n = null, placeholder: o = "", onChange: a = null, onKeyUp: f = null, isLoading: p = !1, value: d = null }) => {
  const { themeId: l } = z(ae), { base: g, input: x, loader: y, spin: v } = Zo({ theme: l });
  return /* @__PURE__ */ m.jsxs("div", { className: g(), children: [
    /* @__PURE__ */ m.jsx(
      "input",
      {
        className: x(),
        type: e,
        disabled: p,
        ref: n,
        placeholder: o,
        onChange: a,
        onKeyUp: f,
        value: d
      }
    ),
    p && /* @__PURE__ */ m.jsx("span", { className: y(), children: /* @__PURE__ */ m.jsx("span", { className: v() }) })
  ] });
};
hr.propTypes = {
  type: fe.isRequired,
  ref: fe,
  value: fe,
  placeholder: fe,
  onChange: je,
  onKeyUp: je,
  isLoading: Ot
};
const Ko = (
  /*tw*/
  te({
    slots: {
      base: "tw--flex-1 tw--w-full tw--px-4 tw--py-3 tw--rounded-full"
    },
    variants: {
      theme: {
        light: {
          base: "tw--bg-light-glaze tw--text-white"
        },
        dark: {
          base: "tw--bg-dark-glazeBg tw--text-dark-glazeText"
        }
      }
    }
  })
), es = (
  /*tw*/
  te({
    slots: {
      base: "tw--flex-1 tw--text-[inherit]"
    },
    variants: {
      theme: {
        light: null,
        dark: null
      },
      outlined: {
        true: "tw--p-0.5 tw--bg-white tw--rounded-full tw--shadow",
        false: "tw--bg-[transparent]"
      }
    }
  })
), kn = ({ text: e = null, onClick: n = null }) => {
  const { themeId: o } = z(ae), { base: a } = Ko({ theme: o });
  return /* @__PURE__ */ m.jsx(
    "button",
    {
      onClick: n,
      className: a(),
      type: "button",
      children: e
    }
  );
};
kn.propTypes = {
  text: fe.isRequired,
  onClick: je
};
const mr = ({ children: e, outlined: n = !1, onClick: o = null }) => {
  const { themeId: a } = z(ae), { base: f } = es({ theme: a, outlined: n });
  return /* @__PURE__ */ m.jsx(
    "button",
    {
      onClick: o,
      className: f(),
      type: "button",
      children: e
    }
  );
};
mr.propTypes = {
  children: ti.isRequired,
  // DEV NOTE: this explicitly validates for a single child to be passed
  outlined: Ot,
  onClick: je
};
const ts = () => {
  const e = dt(), { themeId: n } = z(ae), { isLoading: o, error: a } = z(Wi), { base: f, input: p, button: d } = Cn({ theme: n }), [l, g] = vt(""), [x, y] = vt(!0), v = (I) => {
    const j = I.target.value.trim();
    g(j), y(!0);
  }, C = (I) => {
    if (I.preventDefault(), Hr(l)) {
      y(!1);
      return;
    }
    e(Zi(!0)), e(Xi(l)), g(""), y(!0);
  };
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    (!x || a) && /* @__PURE__ */ m.jsx("div", { className: "tw--pl-[35px] tw--text-[#ff0043] tw--font-medium", children: a || "Invalid response" }),
    /* @__PURE__ */ m.jsxs("form", { className: f(), onSubmit: C, children: [
      /* @__PURE__ */ m.jsx("div", { className: p(), children: /* @__PURE__ */ m.jsx(
        hr,
        {
          type: "response",
          name: "response",
          value: l,
          placeholder: "Type your answer ...",
          onChange: v,
          isLoading: o
        }
      ) }),
      /* @__PURE__ */ m.jsx("div", { className: d(), children: /* @__PURE__ */ m.jsx(mr, { onClick: C, children: /* @__PURE__ */ m.jsx(
        "svg",
        {
          fill: "currentColor",
          viewBox: "0 0 24 24",
          width: "20px",
          height: "20px",
          children: /* @__PURE__ */ m.jsx(
            "path",
            {
              d: "M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z"
            }
          )
        }
      ) }) })
    ] })
  ] });
}, rs = () => {
  const e = dt(), { themeId: n, translations: o } = z(ae), { isLoading: a, error: f } = z(nn), { base: p, input: d, button: l } = Cn({ theme: n }), [g, x] = vt(""), [y, v] = vt(!0), C = (j) => {
    const D = j.target.value.trim();
    x(D), v(!0);
  }, I = (j) => {
    if (j.preventDefault(), g === "") {
      v(!1);
      return;
    }
    e(tr(!0)), e(Gi(g)), le.core.emit(le.type.email, { email: g }), x(""), v(!0);
  };
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    (!y || f) && /* @__PURE__ */ m.jsx("div", { className: "tw--pl-[35px] tw--text-[#ff0043] tw--font-medium", children: f || "Invalid email" }),
    /* @__PURE__ */ m.jsxs("form", { className: p(), onSubmit: I, children: [
      /* @__PURE__ */ m.jsx("div", { className: d(), children: /* @__PURE__ */ m.jsx(
        hr,
        {
          type: "email",
          name: "email",
          value: g,
          placeholder: o.emailPlaceholder,
          onChange: C,
          isLoading: a
        }
      ) }),
      /* @__PURE__ */ m.jsx("div", { className: l(), children: /* @__PURE__ */ m.jsx(mr, { onClick: I, children: /* @__PURE__ */ m.jsx(
        "svg",
        {
          fill: "currentColor",
          viewBox: "0 0 24 24",
          width: "20px",
          height: "20px",
          children: /* @__PURE__ */ m.jsx(
            "path",
            {
              d: "M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z"
            }
          )
        }
      ) }) })
    ] })
  ] });
}, Sn = (
  /*tw*/
  te({
    slots: {
      btn: "tw--flex-1 tw--space-x-2 tw--max-h-14 tw--text-white tw--bg-dark-neon tw--max-w-[280px] tw--mx-auto tw--px-4 tw--py-3 tw--font-bold tw--rounded-[20px] tw--shadow-[0px_12px_24px_-4px_rgba(1,154,255,0.2)] tw--flex tw--justify-center tw--items-center tw--cursor-pointer tw--relative tw--w-full tw--text-base"
    }
  })
), ns = (
  /*tw*/
  te({
    slots: {
      wrapper: "tw--flex tw--justify-between tw--w-full tw--mb-7",
      left: "tw--flex tw--flex-col",
      leftTop: "tw--flex tw--flex-row",
      icon: "tw--pr-[5px] tw--mr-[5px] tw--flex tw--items-center tw--border-r tw--border-r-[#cacadb]",
      text: "tw--flex tw--flex-col tw--justify-center tw--text-left tw--text-[10px] tw--leading-[1] tw--text-muted-blue",
      bottom: "tw--opacity-60 tw--text-[10px] tw--leading-[2] tw--text-muted-blue",
      right: "tw--flex tw--flex-col tw--items-end",
      price: "tw--text-light-seraph tw--font-bold tw--leading-[1.4] tw--text-[20px]",
      info: "tw--leading-[2] tw--text-[10px] tw--text-muted-blue"
    }
  })
), is = (
  /*tw*/
  te({
    slots: {
      base: "tw--absolute tw--top-[-30px] tw--right-[-10px] tw--w-6 tw--h-6 tw--p-1 tw--bg-white tw--rounded-full tw--cursor-pointer tw--text-muted-blue"
    }
  })
), os = te({
  slots: {
    base: "tw--mt-[30px] tw--flex tw--items-center tw--justify-center tw--text-[12.8px] tw--leading-[1.56] tw--text-light-seraph tw--font-bold",
    icon: "tw--mr-[5px]"
  }
}), ss = te({
  slots: {
    wrapper: "loader js-payment-loader tw--max-w-[335px] tw--relative tw--flex tw--w-full tw--flex-col tw--items-center tw--justify-center tw--rounded-xl tw--p-5",
    inner: "tw--absolute tw--left-0 tw--top-8 tw--flex tw--h-8 tw--w-full tw--items-center tw--justify-center",
    dots: "tw--relative tw--flex tw--items-center tw--justify-center tw--p-3",
    dotsIn: "tw--relative tw--mx-auto tw--my-4 tw--box-content tw--block tw--h-4 tw--w-4 tw--rounded-full",
    progressCheckmark: "tw--mb-6 tw--mt-24 tw--box-border tw--flex tw--w-full tw--items-center tw--justify-center tw--text-center",
    panelTitle: "js-payment-message tw--text-lg tw--font-bold tw--leading-5",
    icon: "tw--mr-5 tw--h-6 tw--w-6 tw--rounded-full",
    spinningTexts: "tw--mx-10 tw--w-64 tw--shrink-0 tw--text-[16px] tw--leading-[1.63]",
    filmContainer: "js-msg-spin tw--flex tw--justify-center tw--overflow-hidden tw--text-center",
    film: "tw--animate-text-spin tw--flex tw--w-full tw--max-w-xs tw--translate-x-72"
  },
  variants: {
    theme: {
      light: {
        wrapper: "tw--shadow-light-card tw--bg-light-loader",
        dotsIn: "tw--bg-light-pale-dots tw--shadow-light-loading-dots tw--animate-light-shadow-dots",
        icon: "tw--bg-light-iota-dots",
        spinningTexts: "tw--text-light-zeta tw--opacity-60"
      },
      dark: {
        wrapper: "tw--shadow-dark-card tw--bg-dark-loader",
        dotsIn: "tw--bg-dark-pale-dots tw--shadow-dark-loading-dots tw--animate-dark-shadow-dots",
        icon: "tw--bg-dark-iota-dots",
        spinningTexts: "tw--text-dark-zeta tw--opacity-60"
      }
    }
  }
}), Bn = ({ config: e = { price: "", period: "" } }) => {
  const { translations: n } = z((v) => v.config), { wrapper: o, left: a, leftTop: f, icon: p, text: d, bottom: l, right: g, price: x, info: y } = ns();
  return /* @__PURE__ */ m.jsx("header", { children: /* @__PURE__ */ m.jsxs("div", { className: o(), children: [
    /* @__PURE__ */ m.jsxs("span", { className: a(), children: [
      /* @__PURE__ */ m.jsxs("div", { className: f(), children: [
        /* @__PURE__ */ m.jsx("span", { className: p(), children: /* @__PURE__ */ m.jsx("svg", { width: "26", height: "26", children: /* @__PURE__ */ m.jsx("use", { xlinkHref: "/img/sprite.svg#secured-check" }) }) }),
        /* @__PURE__ */ m.jsx("span", { className: d(), dangerouslySetInnerHTML: { __html: n.paymentHeaderTxt1 } })
      ] }),
      /* @__PURE__ */ m.jsx("div", { className: l(), children: n.paymentHeaderTxt2 })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: g(), children: [
      /* @__PURE__ */ m.jsx("div", { className: x(), children: e.price }),
      /* @__PURE__ */ m.jsx("div", { className: y(), children: e.period })
    ] })
  ] }) });
};
Bn.propTypes = {
  config: Tt
};
const jn = ({ text: e = null, onClick: n = null }) => {
  const { themeId: o } = z(ae), { btn: a } = Sn({ theme: o });
  return /* @__PURE__ */ m.jsxs(
    "button",
    {
      onClick: n,
      className: a(),
      type: "button",
      children: [
        /* @__PURE__ */ m.jsxs(
          "svg",
          {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            children: [
              /* @__PURE__ */ m.jsx(
                "path",
                {
                  opacity: ".3",
                  d: "M4 12h16v6H4v-6zm0-6h16v2H4V6z",
                  fill: "currentColor"
                }
              ),
              /* @__PURE__ */ m.jsx("path", { d: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z", fill: "currentColor" })
            ]
          }
        ),
        /* @__PURE__ */ m.jsx("span", { children: e })
      ]
    }
  );
};
jn.propTypes = {
  text: fe.isRequired,
  onClick: je.isRequired
};
const Pn = ({ onClick: e }) => {
  const { base: n } = is();
  return /* @__PURE__ */ m.jsx(
    "button",
    {
      type: "button",
      className: n(),
      onClick: e,
      children: /* @__PURE__ */ m.jsx(
        "svg",
        {
          fill: "none",
          viewBox: "0 0 18 18",
          children: /* @__PURE__ */ m.jsx(
            "path",
            {
              d: "M13.725 4.282a.747.747 0 0 0-1.058 0L9 7.942 5.332 4.276a.748.748 0 1 0-1.057 1.057L7.942 9l-3.667 3.668a.748.748 0 1 0 1.057 1.057L9 10.057l3.667 3.668a.748.748 0 1 0 1.058-1.057L10.057 9l3.668-3.668a.752.752 0 0 0 0-1.05z",
              fill: "currentColor"
            }
          )
        }
      )
    }
  );
};
Pn.propTypes = {
  onClick: je.isRequired
};
const as = () => {
  const { base: e, icon: n } = os();
  return /* @__PURE__ */ m.jsxs("footer", { className: e(), children: [
    /* @__PURE__ */ m.jsx(
      "svg",
      {
        className: n(),
        fill: "none",
        height: "12",
        width: "12",
        viewBox: "0 0 12 12",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ m.jsx(
          "path",
          {
            d: "M9 4h-.5V3a2.5 2.5 0 0 0-5 0v1H3c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 8.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM7.55 4h-3.1V3c0-.855.695-1.55 1.55-1.55.855 0 1.55.695 1.55 1.55v1z",
            fill: "currentColor"
          }
        )
      }
    ),
    /* @__PURE__ */ m.jsx("span", { children: "SSL Secure Connection" })
  ] });
}, _n = ({ texts: e = [], title: n = "" }) => {
  const { themeId: o } = z(ae), { wrapper: a, inner: f, dots: p, dotsIn: d, icon: l, progressCheckmark: g, panelTitle: x, spinningTexts: y, filmContainer: v, film: C } = ss({ theme: o });
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      className: a(),
      children: [
        /* @__PURE__ */ m.jsx("div", { className: f(), children: /* @__PURE__ */ m.jsx("div", { className: p(), children: /* @__PURE__ */ m.jsx(
          "span",
          {
            className: d()
          }
        ) }) }),
        /* @__PURE__ */ m.jsxs("div", { className: g(), children: [
          /* @__PURE__ */ m.jsx("span", { className: l(), children: /* @__PURE__ */ m.jsxs(
            "svg",
            {
              width: "24",
              height: "24",
              fill: "none",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                /* @__PURE__ */ m.jsx(
                  "circle",
                  {
                    cx: "12",
                    cy: "12",
                    r: "12"
                  }
                ),
                /* @__PURE__ */ m.jsx(
                  "path",
                  {
                    d: "m9.75 15.127-2.602-2.602a.748.748 0 0 0-1.058 1.057l3.135 3.136a.747.747 0 0 0 1.058 0l7.935-7.935a.748.748 0 0 0-1.058-1.058l-7.41 7.402z",
                    fill: "white"
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ m.jsx("p", { className: x(), children: n })
        ] }),
        /* @__PURE__ */ m.jsx("div", { className: v(), children: /* @__PURE__ */ m.jsx("div", { className: C(), children: e.map((I) => /* @__PURE__ */ m.jsx("div", { className: y(), children: I }, I)) }) })
      ]
    }
  );
};
_n.propTypes = {
  texts: ri.isRequired,
  title: fe.isRequired
};
const An = ({ href: e, text: n, onClick: o, forwardedRef: a }) => {
  const { btn: f } = Sn();
  return /* @__PURE__ */ m.jsx(
    "a",
    {
      href: e,
      ref: a,
      onClick: o,
      className: f(),
      children: n
    }
  );
};
An.propTypes = {
  onClick: je.isRequired,
  text: fe.isRequired,
  forwardedRef: Tt.isRequired,
  href: fe.isRequired
};
const ls = te({
  slots: {
    base: "loader js-payment-loader tw--hidden tw--fixed tw--left-0 tw--top-0 tw--z-[101] tw--m-0 tw--flex tw--h-screen tw--w-screen tw--items-center tw--justify-center tw--px-5"
  },
  variants: {
    theme: {
      light: {
        base: "tw--bg-light-overlay"
      },
      dark: {
        base: "tw--bg-light-overlay"
      }
    }
  }
}), Fn = ({ children: e }) => {
  const { themeId: n } = z(ae), { base: o } = ls({ theme: n });
  return /* @__PURE__ */ m.jsx("div", { className: o(), children: e });
};
Fn.propTypes = { children: Pt.isRequired };
const Ln = ({ onClose: e }) => {
  const { displayPlanPrice: n } = z((a) => a.meta.pd), { translations: o } = z((a) => a.config);
  return /* @__PURE__ */ m.jsx("div", { className: "tw--absolute tw--bg-dark-whisper tw--top-0 tw--left-0 tw--w-full tw--h-screen tw--flex tw--flex-col tw--justify-center tw--items-center tw--px-5 tw--z-50", children: /* @__PURE__ */ m.jsxs(
    "div",
    {
      id: "chat-payment-view",
      className: "light-pink-blue tw--max-w-[500px] tw--bg-white tw--w-full tw--min-h-[400px] tw--relative tw--rounded-lg tw--flex tw--flex-col tw--p-7",
      children: [
        /* @__PURE__ */ m.jsx(Fn, { children: /* @__PURE__ */ m.jsx(_n, { texts: o.loaderTexts, title: o.tm1224 }) }),
        /* @__PURE__ */ m.jsx(Pn, { onClick: e }),
        /* @__PURE__ */ m.jsx("div", { id: "primer-form-container", className: "tw--w-full h-full", children: /* @__PURE__ */ m.jsx(Bn, { config: { price: n, period: o.billingFrequencyTmsg } }) }),
        /* @__PURE__ */ m.jsx(as, {})
      ]
    }
  ) });
};
Ln.propTypes = {
  onClose: je.isRequired
};
const cs = () => {
  const e = dt(), { isEmailFieldVisible: n, currentEmail: o } = z(nn), { isFormVisible: a } = z((re) => re.intentions.response), { cid: f, systemType: p, marketing: d } = z(Ci), { translations: l } = z(ae), { isPaymentButtonVisible: g, isPaymentFormVisible: x } = z($i), { isVisible: y, text: v, href: C } = z(qi), I = Yn(null), [j, D] = vt(!1), A = (re) => {
    e(Qi(re));
  }, Y = (re) => {
    re.currentTarget.disabled = !0, le.core.emit(le.type.destroy), A(!1), D(!1);
  }, N = () => {
    e(ct({ role: qe.assistant, message: l.tm1226 })), e(Yi(!0)), e(Ft(!1)), e(on({ href: "/", isVisible: !0, text: l.tm530 })), A(!1), setTimeout(() => {
      I.current.click();
    }, 7e3);
  }, we = () => {
    le.core.emit(le.type.payment, { setIsPaymentContainerVisible: A, onPaymentSuccess: N }), D(!0);
  }, ge = (re) => {
    console.log("clicked redirect", re.currentTarget), Se({
      eventType: Be.linkClicked,
      systemType: p,
      utmParams: d.lastUtmParams,
      customerUuid: f,
      email: o
    });
  };
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    x && /* @__PURE__ */ m.jsx(Ln, { onClose: Y }),
    y && /* @__PURE__ */ m.jsx(
      An,
      {
        forwardedRef: I,
        text: v,
        onClick: ge,
        href: C
      }
    ),
    n && /* @__PURE__ */ m.jsx(rs, {}),
    a && /* @__PURE__ */ m.jsx(ts, {}),
    g && /* @__PURE__ */ m.jsx(
      jn,
      {
        text: l.payButton,
        onClick: we,
        disabled: j
      }
    )
  ] });
}, us = (
  /*tw*/
  te({
    slots: {
      base: "tw--flex-1 tw--px-4 tw--py-2 tw--overflow-y-scroll"
    }
  })
), ds = (
  /*tw*/
  te({
    slots: {
      base: "tw--flex tw--flex-col tw--items-center tw--w-full",
      title: "tw--pt-12 tw--pb-6 tw--text-lg"
    }
  })
), fs = (
  /*tw*/
  te({
    slots: {
      base: "tw--grid tw--py-5"
    }
  })
), ps = (
  /* tw */
  te({
    slots: {
      base: "after:tw--inline-block after:tw--ml-1 after:tw--h-4 after:tw--w-1"
    },
    variants: {
      isTyping: {
        true: "after:tw--animate-blink",
        false: "after:tw--hidden"
      },
      theme: {
        light: "after:tw--bg-light-zephyr",
        dark: "after:tw--bg-dark-zephyr"
      }
    }
  })
), hs = (
  /*tw*/
  te({
    slots: {
      base: "tw--relative tw--max-w-xs tw--px-4 tw--py-3",
      action: "tw--absolute tw--bottom-[-16px] tw--right-[-10px]"
    },
    variants: {
      theme: {
        light: {
          base: "tw--rounded-3xl",
          action: "tw--text-light-seraph"
        },
        dark: {
          base: "tw--rounded-3xl",
          action: "tw--text-dark-seraph"
        }
      },
      type: {
        assistant: {
          base: "tw--justify-self-start"
        },
        user: {
          base: "tw--justify-self-end"
        }
      }
    },
    compoundSlots: [
      {
        slots: ["base"],
        theme: "light",
        type: "assistant",
        class: "tw--bg-light-lumina"
      },
      {
        slots: ["base"],
        theme: "light",
        type: "user",
        class: "tw--bg-light-seraph tw--text-white"
      },
      {
        slots: ["base"],
        theme: "dark",
        type: "assistant",
        class: "tw--bg-dark-lumina"
      },
      {
        slots: ["base"],
        theme: "dark",
        type: "user",
        class: "tw--bg-dark-seraph"
      }
    ]
  })
), ms = te({
  slots: {
    dotFirst: "tw--inline-block tw--h-[12px] tw--w-[12px] tw--rounded-full tw--mx-1 tw--my-1 tw--opacity-40 tw--animate-wave",
    dotSecond: "tw--inline-block tw--h-[12px] tw--w-[12px] tw--rounded-full tw--mx-1 tw--my-1 tw--opacity-40 tw--animate-wave-delay",
    dotThird: "tw--inline-block tw--h-[12px] tw--w-[12px] tw--rounded-full tw--mx-1 tw--my-1 tw--opacity-40 tw--animate-wave-delay-2"
  },
  compoundSlots: [
    {
      slots: ["dotFirst", "dotSecond", "dotThird"],
      theme: "light",
      class: "tw--bg-light-zephyr"
    },
    {
      slots: ["dotFirst", "dotSecond", "dotThird"],
      theme: "dark",
      class: "tw--bg-dark-zephyr"
    }
  ]
}), ws = () => {
  const { themeId: e } = z(ae), { dotFirst: n, dotSecond: o, dotThird: a } = ms({ theme: e });
  return /* @__PURE__ */ m.jsxs("div", { children: [
    /* @__PURE__ */ m.jsx("span", { className: n() }),
    /* @__PURE__ */ m.jsx("span", { className: o() }),
    /* @__PURE__ */ m.jsx("span", { className: a() })
  ] });
}, Un = ({ titleTxt: e = "" }) => {
  const { themeId: n } = z(ae), { base: o, title: a } = ds({ theme: n }), f = Hr(e);
  return /* @__PURE__ */ m.jsxs("div", { className: o(), children: [
    f && /* @__PURE__ */ m.jsx("div", { className: a(), children: e }),
    /* @__PURE__ */ m.jsx(pr, { orientation: "vertical" })
  ] });
};
Un.propTypes = {
  titleTxt: fe
};
const gs = (
  /*tw*/
  te({
    slots: {
      base: "tw--flex-1 tw--px-4 tw--py-3 tw--rounded-full"
    },
    variants: {
      theme: {
        light: {
          base: "tw--bg-light-glaze tw--text-white"
        },
        dark: {
          base: "tw--bg-dark-glazeBg tw--text-dark-glazeText"
        }
      }
    }
  })
);
te({
  slots: {
    base: "tw--flex-1 tw--px-4 tw--py-2"
  }
});
const Mn = ({ text: e = null, href: n = null, onClick: o = null }) => {
  const { themeId: a } = z(ae), { base: f } = gs({ theme: a });
  return /* @__PURE__ */ m.jsx(
    "a",
    {
      href: n,
      onClick: o,
      className: f(),
      children: e
    }
  );
};
Mn.propTypes = {
  href: fe.isRequired,
  text: fe.isRequired,
  onClick: je
};
const ys = (e) => e.split(/\{([^}]+)\}/g).map((o, a) => a % 2 === 0 ? o : /* @__PURE__ */ m.jsx("strong", { children: o }, `strong-${Math.random()}`)), Nn = ({ item: e = {} }) => {
  const n = dt(), { themeId: o } = z(ae), a = z(Ni), { downstreamQueue: f } = z(tn), p = yi(e.options) && e.id === a && !e.isSpecial, { base: d, action: l } = hs({ theme: o, type: e.role }), { base: g } = ps({ isTyping: !!f && !e.id, theme: o }), x = !1, y = (I) => {
    n(ur(I));
  }, v = (I) => {
    n(ct({ role: "user", message: I }));
  }, C = ({ items: I = [] }) => I.map(({ id: j, label: D, value: A, link: Y, noStream: N }) => /* @__PURE__ */ m.jsx("div", { className: "tw--my-2", children: Y ? /* @__PURE__ */ m.jsx(Mn, { text: D, href: Y }) : /* @__PURE__ */ m.jsx(kn, { text: D, onClick: N ? () => v(A) : () => y(A) }) }, j));
  return /* @__PURE__ */ m.jsxs("div", { className: d(), children: [
    /* @__PURE__ */ m.jsx("span", { className: g(), children: ys(e.message) }),
    p && /* @__PURE__ */ m.jsx("div", { className: "tw--flex tw--flex-col", children: /* @__PURE__ */ m.jsx(C, { items: e.options }) }),
    x
  ] });
};
Nn.propTypes = {
  item: Tt.isRequired
};
const ar = ({ item: e = {} }) => {
  const { themeId: n } = z(ae), { base: o } = fs({ theme: n });
  return /* @__PURE__ */ m.jsx("div", { className: o(), children: /* @__PURE__ */ m.jsx(Nn, { item: e }) });
};
ar.propTypes = {
  item: Tt.isRequired
};
const bs = () => {
  const { themeId: e } = z(ae), { history: n, downstreamQueue: o, isLoading: a } = z(tn), { base: f } = us({ theme: e });
  return /* @__PURE__ */ m.jsxs("div", { className: f(), children: [
    /* @__PURE__ */ m.jsx(Un, { titleTxt: "Chat for 1 min, and get diet advise for free!" }),
    n.map(
      (p) => /* @__PURE__ */ m.jsx(ar, { item: p }, p.id)
    ),
    o && /* @__PURE__ */ m.jsx(ar, { item: o }),
    a && /* @__PURE__ */ m.jsx(ws, {})
  ] });
}, xs = (
  /*tw*/
  te({
    slots: {
      base: "tw--cursor-pointer tw--h-8 tw--relative tw--w-16 tw--rounded-3xl tw--border-0"
    },
    variants: {
      color: {
        enabled: "tw--bg-light-seraph",
        disabled: "tw--bg-light-zephyr"
      }
    }
  })
), vs = (
  /*tw*/
  te({
    slots: {
      base: "tw--h-8 tw--w-8 tw--absolute tw---top-1/2 tw--translate-y-1/2 tw--bottom-1 tw--bg-white tw--rounded-full"
    },
    variants: {
      position: {
        enabled: "tw--left-0",
        disabled: "tw--right-0"
      }
    }
  })
), lr = ({ onToggle: e, on: n = !1, title: o = "" }) => {
  const { base: a } = xs({ color: n ? "enabled" : "disabled" }), { base: f } = vs({ position: n ? "enabled" : "disabled" });
  return /* @__PURE__ */ m.jsxs("div", { className: "tw--flex tw--flex-col tw--text-white", children: [
    /* @__PURE__ */ m.jsx("span", { className: "tw--pb-1", children: o }),
    /* @__PURE__ */ m.jsx(
      "button",
      {
        type: "button",
        className: a(),
        onClick: e,
        children: /* @__PURE__ */ m.jsx("span", { className: f() })
      }
    )
  ] });
};
lr.propTypes = {
  onToggle: je.isRequired,
  title: fe.isRequired,
  on: Ot
};
const Es = (
  /* tw */
  te({
    slots: {
      base: "tw--fixed tw--flex tw--gap-2 tw--flex-col tw--p-3 tw--space-y-4 tw--bg-dark-sigma tw--rounded-lg"
    },
    variants: {
      hidden: {
        true: "tw--hidden"
      }
    }
  })
), Ts = () => {
  const e = dt(), { enableDevTools: n, themeId: o, isPluginMode: a } = z(ae), f = () => e(ji(o === "light" ? "dark" : "light")), { base: p } = Es({ hidden: !n });
  return /* @__PURE__ */ m.jsxs("div", { className: p(), children: [
    /* @__PURE__ */ m.jsx(
      lr,
      {
        title: "Theme",
        on: o === "light",
        onToggle: f
      }
    ),
    /* @__PURE__ */ m.jsx(
      lr,
      {
        title: "Plugin mode",
        on: a,
        onToggle: () => e(_i())
      }
    )
  ] });
}, On = ({ config: e = {} }) => {
  const n = dt();
  return n(Ri(e.meta)), n(Zr(e.app)), n(Pi(It.process.env.NODE_ENV === "development")), /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsx(Ts, {}),
    /* @__PURE__ */ m.jsx(
      Rn,
      {
        head: /* @__PURE__ */ m.jsx(Xo, {}),
        stream: /* @__PURE__ */ m.jsx(bs, {}),
        foot: /* @__PURE__ */ m.jsx(cs, {})
      }
    )
  ] });
};
On.propTypes = {
  config: Tt.isRequired
};
const Is = {
  meta: {
    pd: {
      amount: "29.90",
      amountInUSD: 29.9,
      upfrontAmount: null,
      currency: "USD",
      trial_in_days: 0,
      period: "M",
      frequency: 1,
      frequencyInMonths: 1,
      billingOptionType: "subscription",
      planId: "59c45291-1e02-43ce-820d-1576b4eb96d3",
      provider: "primer",
      isDisplayPricePlan: !0,
      displayPlanPrice: "$29.90"
    },
    cid: "23c7cdcf-4d90-4ea1-aab0-c73f8426dc1d",
    systemType: "test",
    marketing: {
      utmParams: { utm_chat: "db-sales-nopresetquestions" },
      lastUtmParams: { utm_chat: "db-sales-nopresetquestions" },
      screen: {
        width: 2084,
        height: 1608
      }
    },
    eid: "23c7cdcf-4d90-4ea1-aab0-c73f8426dc1d_PageView_1694521420366"
  },
  app: {
    aiProfile: {
      name: "Meal Mentor",
      role: "AI-powered nutritionist",
      imgSrc: "https://storage.1forfit.com/4oZrkOwbOQcSIGJopBG5qsf0CmBbVDKDqflzEkXq.jpg",
      displayInStream: !0,
      initialMessage: "Hi, {I am Meal Mentor}. I will help you to find the right meal plan for you. [yes|no|continue]"
    },
    chatUrl: "https://yourketo.ngrok.io",
    themeId: "light",
    translations: {
      emailPlaceholder: "Please enter your email",
      tm526: "Continue to my plan",
      tm715: "Enter new email",
      tm716: "Entered email already exists, choose below to proceed",
      tm530: "Take the quiz",
      tm1224: "Payment in progress...",
      // tm566 -> removing backEndVars undefined variable
      subscriberBillingFrequency: "Billed every {1} month(s)",
      // tm241 -> removing backEndVars undefined variable
      oneTimer: "Total price to be charged",
      billingFrequencyTmsg: "",
      paymentHeaderTxt1: '<span class="font-bold block text-tau">SECURITY</span> verified',
      paymentHeaderTxt2: "secured payments",
      loaderTexts: [
        "We securely lock up your payment details.",
        "Details zoom to the payment center.",
        "Payment center requests our bank to process.",
        "Our bank contacts your card network.",
        "Card network asks your bank for approval.",
        "Your bank reviews funds or credit.",
        "Decision travels back to us.",
        "Waiting your payment to be verified and complete."
      ],
      payButton: "Secure payment"
    }
  }
}, Ns = (e) => {
  xt.createRoot(e.root).render(
    /* @__PURE__ */ m.jsx(Zn, { store: ho, children: /* @__PURE__ */ m.jsx(On, { config: e.initialConfig || Is }) })
  );
};
export {
  Ns as ReactBotClient,
  Ns as default,
  le as intent
};
//# sourceMappingURL=index.es.js.map
