(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.id="react-tw-ai-client",t.appendChild(document.createTextNode('*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:Plus Jakarta Sans,Roboto,Mulish,Exo,Helvetica,Arial,sans-serif;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.tw--fixed{position:fixed}.tw--absolute{position:absolute}.tw--relative{position:relative}.tw---top-1\\/2{top:-50%}.tw--bottom-0{bottom:0}.tw--bottom-1{bottom:.25rem}.tw--bottom-\\[-16px\\]{bottom:-16px}.tw--left-0{left:0}.tw--right-0{right:0}.tw--right-4{right:1rem}.tw--right-\\[-10px\\]{right:-10px}.tw--top-0{top:0}.tw--top-8{top:2rem}.tw--top-\\[-30px\\]{top:-30px}.tw--top-\\[50\\%\\]{top:50%}.tw--z-50{z-index:50}.tw--z-\\[101\\]{z-index:101}.tw--m-0{margin:0}.tw--m-auto{margin:auto}.tw--mx-10{margin-left:2.5rem;margin-right:2.5rem}.tw--mx-\\[30px\\]{margin-left:30px;margin-right:30px}.tw--mx-auto{margin-left:auto;margin-right:auto}.tw--my-4{margin-top:1rem;margin-bottom:1rem}.tw--mb-5{margin-bottom:1.25rem}.tw--mb-6{margin-bottom:1.5rem}.tw--mb-7{margin-bottom:1.75rem}.tw--mb-\\[11px\\]{margin-bottom:11px}.tw--mb-auto{margin-bottom:auto}.tw--ml-7{margin-left:1.75rem}.tw--ml-auto{margin-left:auto}.tw--mr-0{margin-right:0}.tw--mr-5{margin-right:1.25rem}.tw--mr-\\[5px\\]{margin-right:5px}.tw--mt-0{margin-top:0}.tw--mt-24{margin-top:6rem}.tw--mt-\\[11px\\]{margin-top:11px}.tw--mt-\\[30px\\]{margin-top:30px}.tw--box-border{box-sizing:border-box}.tw--box-content{box-sizing:content-box}.tw--block{display:block}.tw--inline-block{display:inline-block}.tw--flex{display:flex}.tw--grid{display:grid}.tw--hidden{display:none}.tw--h-4{height:1rem}.tw--h-6{height:1.5rem}.tw--h-8{height:2rem}.tw--h-80{height:20rem}.tw--h-\\[12px\\]{height:12px}.tw--h-\\[50px\\]{height:50px}.tw--h-\\[60px\\]{height:60px}.tw--h-auto{height:auto}.tw--h-fit{height:-moz-fit-content;height:fit-content}.tw--h-full{height:100%}.tw--h-screen{height:100vh}.tw--max-h-\\[700px\\]{max-height:700px}.tw--max-h-screen{max-height:100vh}.tw--min-h-\\[400px\\]{min-height:400px}.tw--w-16{width:4rem}.tw--w-4{width:1rem}.tw--w-6{width:1.5rem}.tw--w-64{width:16rem}.tw--w-8{width:2rem}.tw--w-\\[12px\\]{width:12px}.tw--w-fit{width:-moz-fit-content;width:fit-content}.tw--w-full{width:100%}.tw--w-screen{width:100vw}.tw--max-w-\\[280px\\]{max-width:280px}.tw--max-w-\\[335px\\]{max-width:335px}.tw--max-w-\\[375px\\]{max-width:375px}.tw--max-w-\\[400px\\]{max-width:400px}.tw--max-w-\\[500px\\]{max-width:500px}.tw--max-w-md{max-width:28rem}.tw--max-w-xs{max-width:20rem}.tw--flex-1{flex:1 1 0%}.tw--shrink{flex-shrink:1}.tw--shrink-0{flex-shrink:0}.tw--grow-0{flex-grow:0}.tw--translate-x-72{--tw-translate-x: 18rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.tw--translate-y-1\\/2{--tw-translate-y: 50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.tw--translate-y-\\[-50\\%\\]{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes tw--dark-shadow-dots{0%,33%{background:rgba(255,255,255,.5);box-shadow:-31px 0 #f53374,31px 0 #ffffff80}66%{background:#f53374;box-shadow:-31px 0 #ffffff80,31px 0 #ffffff80}to,0%{background:rgba(255,255,255,.5);box-shadow:-31px 0 #ffffff80,31px 0 #f53374}}.tw--animate-dark-shadow-dots{animation:tw--dark-shadow-dots 2s linear infinite}@keyframes tw--light-shadow-dots{0%,33%{background:rgba(202,202,219,.6);box-shadow:-31px 0 #21bb5a,31px 0 #cacadb99}66%{background:#21bb5a;box-shadow:-31px 0 #cacadb99,31px 0 #cacadb99}to,0%{background:rgba(202,202,219,.6);box-shadow:-31px 0 #cacadb99,31px 0 #21bb5a}}.tw--animate-light-shadow-dots{animation:tw--light-shadow-dots 2s linear infinite}@keyframes tw--rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.tw--animate-rotate{animation:tw--rotate .5s linear infinite}@keyframes tw--text-spin{0%{transform:translate(18rem)}6.25%,12.5%{transform:translate(-.5rem)}18.75%,25%{transform:translate(-21.5rem)}31.25%,37.5%{transform:translate(-42.5rem)}43.75%,50%{transform:translate(-63.5rem)}56.25%,62.5%{transform:translate(-84.5rem)}68.75%,75%{transform:translate(-105.5rem)}81.25%,87.5%{transform:translate(-126.5rem)}93.75%,to{transform:translate(-147.5em)}}.tw--animate-text-spin{animation:tw--text-spin 30s linear infinite}.tw--animate-wave{animation:tw--wave 1.3s linear infinite}.tw--animate-wave-delay{animation:tw--wave 1.3s linear infinite -1.1s}@keyframes tw--wave{0%{transform:initial}60%{transform:initial}to{transform:initial}30%{transform:translateY(-15px)}}.tw--animate-wave-delay-2{animation:tw--wave 1.3s linear infinite -.9s}.tw--cursor-pointer{cursor:pointer}.tw--select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.tw--flex-row{flex-direction:row}.tw--flex-col{flex-direction:column}.tw--flex-col-reverse{flex-direction:column-reverse}.tw--flex-wrap{flex-wrap:wrap}.tw--items-end{align-items:flex-end}.tw--items-center{align-items:center}.tw--items-stretch{align-items:stretch}.tw--justify-center{justify-content:center}.tw--justify-between{justify-content:space-between}.tw--gap-2{gap:.5rem}.tw--space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.tw--space-x-\\[6px\\]>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(6px * var(--tw-space-x-reverse));margin-left:calc(6px * calc(1 - var(--tw-space-x-reverse)))}.tw--space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.tw--space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.25rem * var(--tw-space-y-reverse))}.tw--space-y-\\[10px\\]>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(10px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(10px * var(--tw-space-y-reverse))}.tw--space-y-\\[11px\\]>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(11px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(11px * var(--tw-space-y-reverse))}.tw--self-stretch{align-self:stretch}.tw--justify-self-start{justify-self:start}.tw--justify-self-end{justify-self:end}.tw--justify-self-stretch{justify-self:stretch}.tw--overflow-hidden{overflow:hidden}.tw--overflow-y-scroll{overflow-y:scroll}.tw--whitespace-pre-wrap{white-space:pre-wrap}.tw--break-words{overflow-wrap:break-word}.tw--rounded-3xl{border-radius:1.5rem}.tw--rounded-\\[20px\\]{border-radius:20px}.tw--rounded-full{border-radius:9999px}.tw--rounded-lg{border-radius:.5rem}.tw--rounded-xl{border-radius:.75rem}.tw--border{border-width:1px}.tw--border-0{border-width:0px}.tw--border-\\[5px\\]{border-width:5px}.tw--border-r{border-right-width:1px}.tw--border-solid{border-style:solid}.tw--border-dark-glaze{--tw-border-opacity: 1;border-color:rgb(179 186 198 / var(--tw-border-opacity))}.tw--border-light-seraph{--tw-border-opacity: 1;border-color:rgb(33 187 90 / var(--tw-border-opacity))}.tw--border-light-zephyr-200{border-color:#2b31391a}.tw--border-l-dark-zephyr-600{border-left-color:#fff9}.tw--border-l-light-zephyr-600{border-left-color:#2b313999}.tw--border-r-\\[\\#cacadb\\]{--tw-border-opacity: 1;border-right-color:rgb(202 202 219 / var(--tw-border-opacity))}.tw--border-t-dark-zephyr-600{border-top-color:#fff9}.tw--border-t-light-zephyr-600{border-top-color:#2b313999}.tw--bg-\\[transparent\\]{background-color:transparent}.tw--bg-dark-glazeBg{--tw-bg-opacity: 1;background-color:rgb(179 186 198 / var(--tw-bg-opacity))}.tw--bg-dark-iota-dots{--tw-bg-opacity: 1;background-color:rgb(33 187 90 / var(--tw-bg-opacity))}.tw--bg-dark-loader,.tw--bg-dark-lumina{--tw-bg-opacity: 1;background-color:rgb(37 34 57 / var(--tw-bg-opacity))}.tw--bg-dark-neon{--tw-bg-opacity: 1;background-color:rgb(1 154 255 / var(--tw-bg-opacity))}.tw--bg-dark-pale-dots{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.tw--bg-dark-seraph{--tw-bg-opacity: 1;background-color:rgb(245 51 115 / var(--tw-bg-opacity))}.tw--bg-dark-sigma{--tw-bg-opacity: 1;background-color:rgb(15 14 30 / var(--tw-bg-opacity))}.tw--bg-dark-whisper{--tw-bg-opacity: 1;background-color:rgb(21 18 38 / var(--tw-bg-opacity))}.tw--bg-dark-zephyr-100{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.tw--bg-light-glaze{--tw-bg-opacity: 1;background-color:rgb(33 187 90 / var(--tw-bg-opacity))}.tw--bg-light-glazeBg{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.tw--bg-light-iota-dots{--tw-bg-opacity: 1;background-color:rgb(33 187 90 / var(--tw-bg-opacity))}.tw--bg-light-loader{--tw-bg-opacity: 1;background-color:rgb(246 248 250 / var(--tw-bg-opacity))}.tw--bg-light-lumina{--tw-bg-opacity: 1;background-color:rgb(240 242 245 / var(--tw-bg-opacity))}.tw--bg-light-pale-dots{--tw-bg-opacity: 1;background-color:rgb(202 202 219 / var(--tw-bg-opacity))}.tw--bg-light-seraph{--tw-bg-opacity: 1;background-color:rgb(33 187 90 / var(--tw-bg-opacity))}.tw--bg-light-whisper{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.tw--bg-light-zephyr-100{--tw-bg-opacity: 1;background-color:rgb(43 49 57 / var(--tw-bg-opacity))}.tw--bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.tw--p-0{padding:0}.tw--p-0\\.5{padding:.125rem}.tw--p-1{padding:.25rem}.tw--p-3{padding:.75rem}.tw--p-5{padding:1.25rem}.tw--p-7{padding:1.75rem}.tw--px-4{padding-left:1rem;padding-right:1rem}.tw--px-5{padding-left:1.25rem;padding-right:1.25rem}.tw--px-\\[15px\\]{padding-left:15px;padding-right:15px}.tw--py-2{padding-top:.5rem;padding-bottom:.5rem}.tw--py-3{padding-top:.75rem;padding-bottom:.75rem}.tw--py-4{padding-top:1rem;padding-bottom:1rem}.tw--py-\\[11px\\]{padding-top:11px;padding-bottom:11px}.tw--pb-1{padding-bottom:.25rem}.tw--pb-10{padding-bottom:2.5rem}.tw--pb-5{padding-bottom:1.25rem}.tw--pb-\\[11px\\]{padding-bottom:11px}.tw--pb-\\[30px\\]{padding-bottom:30px}.tw--pb-\\[5px\\]{padding-bottom:5px}.tw--pl-\\[10px\\]{padding-left:10px}.tw--pl-\\[35px\\]{padding-left:35px}.tw--pr-2{padding-right:.5rem}.tw--pr-\\[5px\\]{padding-right:5px}.tw--pt-10{padding-top:2.5rem}.tw--pt-5{padding-top:1.25rem}.tw--text-left{text-align:left}.tw--text-center{text-align:center}.tw--text-\\[10px\\]{font-size:10px}.tw--text-\\[12\\.8px\\]{font-size:12.8px}.tw--text-\\[16px\\]{font-size:16px}.tw--text-\\[20px\\]{font-size:20px}.tw--text-\\[24px\\]{font-size:24px}.tw--text-lg{font-size:1.125rem;line-height:1.75rem}.tw--text-sm{font-size:.875rem;line-height:1.25rem}.tw--text-xl,.tw--text-xl\\/7{font-size:1.25rem;line-height:1.75rem}.tw--font-bold{font-weight:700}.tw--font-extrabold{font-weight:800}.tw--font-medium{font-weight:500}.tw--font-semibold{font-weight:600}.tw--leading-5{line-height:1.25rem}.tw--leading-\\[1\\.4\\]{line-height:1.4}.tw--leading-\\[1\\.56\\]{line-height:1.56}.tw--leading-\\[1\\.63\\]{line-height:1.63}.tw--leading-\\[1\\]{line-height:1}.tw--leading-\\[2\\]{line-height:2}.tw--leading-\\[30px\\]{line-height:30px}.tw--text-\\[\\#ff0043\\]{--tw-text-opacity: 1;color:rgb(255 0 67 / var(--tw-text-opacity))}.tw--text-\\[inherit\\]{color:inherit}.tw--text-dark-glazeText{--tw-text-opacity: 1;color:rgb(21 18 38 / var(--tw-text-opacity))}.tw--text-dark-seraph{--tw-text-opacity: 1;color:rgb(245 51 115 / var(--tw-text-opacity))}.tw--text-dark-zephyr-100{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.tw--text-dark-zephyr-600{color:#fff9}.tw--text-dark-zephyr-800{color:#fffc}.tw--text-dark-zeta{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.tw--text-light-glazeText{--tw-text-opacity: 1;color:rgb(21 18 38 / var(--tw-text-opacity))}.tw--text-light-seraph,.tw--text-light-status{--tw-text-opacity: 1;color:rgb(33 187 90 / var(--tw-text-opacity))}.tw--text-light-zephyr-100{--tw-text-opacity: 1;color:rgb(43 49 57 / var(--tw-text-opacity))}.tw--text-light-zephyr-600{color:#2b313999}.tw--text-light-zephyr-800{color:#2b3139cc}.tw--text-light-zeta{--tw-text-opacity: 1;color:rgb(15 14 30 / var(--tw-text-opacity))}.tw--text-muted-blue{color:#0f0e1e99}.tw--text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.tw--underline{text-decoration-line:underline}.tw--opacity-40{opacity:.4}.tw--opacity-60{opacity:.6}.tw--shadow-\\[-1px_2px_5px_0\\]{--tw-shadow: -1px 2px 5px 0;--tw-shadow-colored: -1px 2px 5px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-\\[0px_12px_24px_-4px_rgba\\(1\\,154\\,255\\,0\\.2\\)\\]{--tw-shadow: 0px 12px 24px -4px rgba(1,154,255,.2);--tw-shadow-colored: 0px 12px 24px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-dark-card{--tw-shadow: 0 12px 24px 0 rgba(0, 0, 0, .12), 0 4px 8px 0 rgba(0, 0, 0, .1);--tw-shadow-colored: 0 12px 24px 0 var(--tw-shadow-color), 0 4px 8px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-dark-loading-dots{--tw-shadow: -24px 0 rgba(255, 255, 255, .5), 24px 0 rgba(255, 255, 255, .5);--tw-shadow-colored: -24px 0 var(--tw-shadow-color), 24px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-light-card{--tw-shadow: 0 12px 24px 0 rgba(43, 49, 57, .06), 0 4px 8px 0 rgba(43, 55, 70, .04);--tw-shadow-colored: 0 12px 24px 0 var(--tw-shadow-color), 0 4px 8px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-light-loading-dots{--tw-shadow: -24px 0 rgba(201, 201, 201, .5), 24px 0 rgba(201, 201, 201, .5);--tw-shadow-colored: -24px 0 var(--tw-shadow-color), 24px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-dark-zephyr-200{--tw-shadow-color: rgba(255, 255, 255,.1);--tw-shadow: var(--tw-shadow-colored)}.tw--shadow-light-zephyr-200{--tw-shadow-color: rgba(43, 49, 57,.1);--tw-shadow: var(--tw-shadow-colored)}.tw--translate-z-0 *{transform:translateZ(0)}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}#chatbot-container *{font-family:inherit!important}.spaced-letters{letter-spacing:2px}p{display:inline}.after\\:tw--absolute:after{content:var(--tw-content);position:absolute}.after\\:tw--bottom-\\[-2px\\]:after{content:var(--tw-content);bottom:-2px}.after\\:tw--left-\\[37px\\]:after{content:var(--tw-content);left:37px}.after\\:tw--z-10:after{content:var(--tw-content);z-index:10}.after\\:tw--ml-1:after{content:var(--tw-content);margin-left:.25rem}.after\\:tw--inline-block:after{content:var(--tw-content);display:inline-block}.after\\:tw--hidden:after{content:var(--tw-content);display:none}.after\\:tw--h-4:after{content:var(--tw-content);height:1rem}.after\\:tw--h-\\[10px\\]:after{content:var(--tw-content);height:10px}.after\\:tw--w-1:after{content:var(--tw-content);width:.25rem}.after\\:tw--w-\\[10px\\]:after{content:var(--tw-content);width:10px}@keyframes tw--blink{0%{content:var(--tw-content);opacity:1}49%{content:var(--tw-content);opacity:1}50%{content:var(--tw-content);opacity:0}to{content:var(--tw-content);opacity:0}}.after\\:tw--animate-blink:after{content:var(--tw-content);animation:tw--blink .5s infinite}.after\\:tw--rounded-full:after{content:var(--tw-content);border-radius:9999px}.after\\:tw--bg-dark-zephyr-100:after{content:var(--tw-content);--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.after\\:tw--bg-light-iota-dots:after{content:var(--tw-content);--tw-bg-opacity: 1;background-color:rgb(33 187 90 / var(--tw-bg-opacity))}.after\\:tw--bg-light-zephyr-100:after{content:var(--tw-content);--tw-bg-opacity: 1;background-color:rgb(43 49 57 / var(--tw-bg-opacity))}.focus\\:tw--outline-none:focus{outline:2px solid transparent;outline-offset:2px}@media (min-width: 350px){.customXs\\:tw--max-w-xs{max-width:20rem}.customXs\\:tw--text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width: 768px){.md\\:tw--max-w-\\[800px\\]{max-width:800px}}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import On, { PureComponent as Di, useState as Bt, useLayoutEffect as zi, forwardRef as Fn, useRef as Nr, useEffect as er } from "react";
import Vi from "react-dom";
import { useSelector as $i, useDispatch as Gi, Provider as Wi } from "react-redux";
import { createSlice as tr, configureStore as qi, combineReducers as Hi } from "@reduxjs/toolkit";
import Yi from "react-markdown";
import { persistReducer as Ki, persistStore as Ji } from "redux-persist";
import { io as Xi } from "socket.io-client";
var ye = {}, Ln = {}, rr = {};
rr.byteLength = eo;
rr.toByteArray = ro;
rr.fromByteArray = oo;
var Oe = [], Ie = [], Zi = typeof Uint8Array < "u" ? Uint8Array : Array, fr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var pt = 0, Qi = fr.length; pt < Qi; ++pt)
  Oe[pt] = fr[pt], Ie[fr.charCodeAt(pt)] = pt;
Ie["-".charCodeAt(0)] = 62;
Ie["_".charCodeAt(0)] = 63;
function Nn(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var i = e.indexOf("=");
  i === -1 && (i = t);
  var o = i === t ? 0 : 4 - i % 4;
  return [i, o];
}
function eo(e) {
  var t = Nn(e), i = t[0], o = t[1];
  return (i + o) * 3 / 4 - o;
}
function to(e, t, i) {
  return (t + i) * 3 / 4 - i;
}
function ro(e) {
  var t, i = Nn(e), o = i[0], a = i[1], u = new Zi(to(e, o, a)), f = 0, l = a > 0 ? o - 4 : o, h;
  for (h = 0; h < l; h += 4)
    t = Ie[e.charCodeAt(h)] << 18 | Ie[e.charCodeAt(h + 1)] << 12 | Ie[e.charCodeAt(h + 2)] << 6 | Ie[e.charCodeAt(h + 3)], u[f++] = t >> 16 & 255, u[f++] = t >> 8 & 255, u[f++] = t & 255;
  return a === 2 && (t = Ie[e.charCodeAt(h)] << 2 | Ie[e.charCodeAt(h + 1)] >> 4, u[f++] = t & 255), a === 1 && (t = Ie[e.charCodeAt(h)] << 10 | Ie[e.charCodeAt(h + 1)] << 4 | Ie[e.charCodeAt(h + 2)] >> 2, u[f++] = t >> 8 & 255, u[f++] = t & 255), u;
}
function no(e) {
  return Oe[e >> 18 & 63] + Oe[e >> 12 & 63] + Oe[e >> 6 & 63] + Oe[e & 63];
}
function io(e, t, i) {
  for (var o, a = [], u = t; u < i; u += 3)
    o = (e[u] << 16 & 16711680) + (e[u + 1] << 8 & 65280) + (e[u + 2] & 255), a.push(no(o));
  return a.join("");
}
function oo(e) {
  for (var t, i = e.length, o = i % 3, a = [], u = 16383, f = 0, l = i - o; f < l; f += u)
    a.push(io(e, f, f + u > l ? l : f + u));
  return o === 1 ? (t = e[i - 1], a.push(
    Oe[t >> 2] + Oe[t << 4 & 63] + "=="
  )) : o === 2 && (t = (e[i - 2] << 8) + e[i - 1], a.push(
    Oe[t >> 10] + Oe[t >> 4 & 63] + Oe[t << 2 & 63] + "="
  )), a.join("");
}
var Mr = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Mr.read = function(e, t, i, o, a) {
  var u, f, l = a * 8 - o - 1, h = (1 << l) - 1, w = h >> 1, y = -7, x = i ? a - 1 : 0, I = i ? -1 : 1, T = e[t + x];
  for (x += I, u = T & (1 << -y) - 1, T >>= -y, y += l; y > 0; u = u * 256 + e[t + x], x += I, y -= 8)
    ;
  for (f = u & (1 << -y) - 1, u >>= -y, y += o; y > 0; f = f * 256 + e[t + x], x += I, y -= 8)
    ;
  if (u === 0)
    u = 1 - w;
  else {
    if (u === h)
      return f ? NaN : (T ? -1 : 1) * (1 / 0);
    f = f + Math.pow(2, o), u = u - w;
  }
  return (T ? -1 : 1) * f * Math.pow(2, u - o);
};
Mr.write = function(e, t, i, o, a, u) {
  var f, l, h, w = u * 8 - a - 1, y = (1 << w) - 1, x = y >> 1, I = a === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, T = o ? 0 : u - 1, P = o ? 1 : -1, R = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (l = isNaN(t) ? 1 : 0, f = y) : (f = Math.floor(Math.log(t) / Math.LN2), t * (h = Math.pow(2, -f)) < 1 && (f--, h *= 2), f + x >= 1 ? t += I / h : t += I * Math.pow(2, 1 - x), t * h >= 2 && (f++, h /= 2), f + x >= y ? (l = 0, f = y) : f + x >= 1 ? (l = (t * h - 1) * Math.pow(2, a), f = f + x) : (l = t * Math.pow(2, x - 1) * Math.pow(2, a), f = 0)); a >= 8; e[i + T] = l & 255, T += P, l /= 256, a -= 8)
    ;
  for (f = f << a | l, w += a; w > 0; e[i + T] = f & 255, T += P, f /= 256, w -= 8)
    ;
  e[i + T - P] |= R * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  const t = rr, i = Mr, o = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = l, e.SlowBuffer = L, e.INSPECT_MAX_BYTES = 50;
  const a = 2147483647;
  e.kMaxLength = a, l.TYPED_ARRAY_SUPPORT = u(), !l.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function u() {
    try {
      const s = new Uint8Array(1), r = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(r, Uint8Array.prototype), Object.setPrototypeOf(s, r), s.foo() === 42;
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
  function f(s) {
    if (s > a)
      throw new RangeError('The value "' + s + '" is invalid for option "size"');
    const r = new Uint8Array(s);
    return Object.setPrototypeOf(r, l.prototype), r;
  }
  function l(s, r, n) {
    if (typeof s == "number") {
      if (typeof r == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return x(s);
    }
    return h(s, r, n);
  }
  l.poolSize = 8192;
  function h(s, r, n) {
    if (typeof s == "string")
      return I(s, r);
    if (ArrayBuffer.isView(s))
      return P(s);
    if (s == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof s
      );
    if (me(s, ArrayBuffer) || s && me(s.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (me(s, SharedArrayBuffer) || s && me(s.buffer, SharedArrayBuffer)))
      return R(s, r, n);
    if (typeof s == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const c = s.valueOf && s.valueOf();
    if (c != null && c !== s)
      return l.from(c, r, n);
    const p = V(s);
    if (p)
      return p;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof s[Symbol.toPrimitive] == "function")
      return l.from(s[Symbol.toPrimitive]("string"), r, n);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof s
    );
  }
  l.from = function(s, r, n) {
    return h(s, r, n);
  }, Object.setPrototypeOf(l.prototype, Uint8Array.prototype), Object.setPrototypeOf(l, Uint8Array);
  function w(s) {
    if (typeof s != "number")
      throw new TypeError('"size" argument must be of type number');
    if (s < 0)
      throw new RangeError('The value "' + s + '" is invalid for option "size"');
  }
  function y(s, r, n) {
    return w(s), s <= 0 ? f(s) : r !== void 0 ? typeof n == "string" ? f(s).fill(r, n) : f(s).fill(r) : f(s);
  }
  l.alloc = function(s, r, n) {
    return y(s, r, n);
  };
  function x(s) {
    return w(s), f(s < 0 ? 0 : B(s) | 0);
  }
  l.allocUnsafe = function(s) {
    return x(s);
  }, l.allocUnsafeSlow = function(s) {
    return x(s);
  };
  function I(s, r) {
    if ((typeof r != "string" || r === "") && (r = "utf8"), !l.isEncoding(r))
      throw new TypeError("Unknown encoding: " + r);
    const n = de(s, r) | 0;
    let c = f(n);
    const p = c.write(s, r);
    return p !== n && (c = c.slice(0, p)), c;
  }
  function T(s) {
    const r = s.length < 0 ? 0 : B(s.length) | 0, n = f(r);
    for (let c = 0; c < r; c += 1)
      n[c] = s[c] & 255;
    return n;
  }
  function P(s) {
    if (me(s, Uint8Array)) {
      const r = new Uint8Array(s);
      return R(r.buffer, r.byteOffset, r.byteLength);
    }
    return T(s);
  }
  function R(s, r, n) {
    if (r < 0 || s.byteLength < r)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (s.byteLength < r + (n || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let c;
    return r === void 0 && n === void 0 ? c = new Uint8Array(s) : n === void 0 ? c = new Uint8Array(s, r) : c = new Uint8Array(s, r, n), Object.setPrototypeOf(c, l.prototype), c;
  }
  function V(s) {
    if (l.isBuffer(s)) {
      const r = B(s.length) | 0, n = f(r);
      return n.length === 0 || s.copy(n, 0, 0, r), n;
    }
    if (s.length !== void 0)
      return typeof s.length != "number" || Et(s.length) ? f(0) : T(s);
    if (s.type === "Buffer" && Array.isArray(s.data))
      return T(s.data);
  }
  function B(s) {
    if (s >= a)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
    return s | 0;
  }
  function L(s) {
    return +s != s && (s = 0), l.alloc(+s);
  }
  l.isBuffer = function(r) {
    return r != null && r._isBuffer === !0 && r !== l.prototype;
  }, l.compare = function(r, n) {
    if (me(r, Uint8Array) && (r = l.from(r, r.offset, r.byteLength)), me(n, Uint8Array) && (n = l.from(n, n.offset, n.byteLength)), !l.isBuffer(r) || !l.isBuffer(n))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (r === n)
      return 0;
    let c = r.length, p = n.length;
    for (let m = 0, b = Math.min(c, p); m < b; ++m)
      if (r[m] !== n[m]) {
        c = r[m], p = n[m];
        break;
      }
    return c < p ? -1 : p < c ? 1 : 0;
  }, l.isEncoding = function(r) {
    switch (String(r).toLowerCase()) {
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
  }, l.concat = function(r, n) {
    if (!Array.isArray(r))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (r.length === 0)
      return l.alloc(0);
    let c;
    if (n === void 0)
      for (n = 0, c = 0; c < r.length; ++c)
        n += r[c].length;
    const p = l.allocUnsafe(n);
    let m = 0;
    for (c = 0; c < r.length; ++c) {
      let b = r[c];
      if (me(b, Uint8Array))
        m + b.length > p.length ? (l.isBuffer(b) || (b = l.from(b)), b.copy(p, m)) : Uint8Array.prototype.set.call(
          p,
          b,
          m
        );
      else if (l.isBuffer(b))
        b.copy(p, m);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      m += b.length;
    }
    return p;
  };
  function de(s, r) {
    if (l.isBuffer(s))
      return s.length;
    if (ArrayBuffer.isView(s) || me(s, ArrayBuffer))
      return s.byteLength;
    if (typeof s != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof s
      );
    const n = s.length, c = arguments.length > 2 && arguments[2] === !0;
    if (!c && n === 0)
      return 0;
    let p = !1;
    for (; ; )
      switch (r) {
        case "ascii":
        case "latin1":
        case "binary":
          return n;
        case "utf8":
        case "utf-8":
          return lt(s).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return n * 2;
        case "hex":
          return n >>> 1;
        case "base64":
          return Nt(s).length;
        default:
          if (p)
            return c ? -1 : lt(s).length;
          r = ("" + r).toLowerCase(), p = !0;
      }
  }
  l.byteLength = de;
  function we(s, r, n) {
    let c = !1;
    if ((r === void 0 || r < 0) && (r = 0), r > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, r >>>= 0, n <= r))
      return "";
    for (s || (s = "utf8"); ; )
      switch (s) {
        case "hex":
          return q(this, r, n);
        case "utf8":
        case "utf-8":
          return S(this, r, n);
        case "ascii":
          return U(this, r, n);
        case "latin1":
        case "binary":
          return $(this, r, n);
        case "base64":
          return C(this, r, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ee(this, r, n);
        default:
          if (c)
            throw new TypeError("Unknown encoding: " + s);
          s = (s + "").toLowerCase(), c = !0;
      }
  }
  l.prototype._isBuffer = !0;
  function ue(s, r, n) {
    const c = s[r];
    s[r] = s[n], s[n] = c;
  }
  l.prototype.swap16 = function() {
    const r = this.length;
    if (r % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let n = 0; n < r; n += 2)
      ue(this, n, n + 1);
    return this;
  }, l.prototype.swap32 = function() {
    const r = this.length;
    if (r % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let n = 0; n < r; n += 4)
      ue(this, n, n + 3), ue(this, n + 1, n + 2);
    return this;
  }, l.prototype.swap64 = function() {
    const r = this.length;
    if (r % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let n = 0; n < r; n += 8)
      ue(this, n, n + 7), ue(this, n + 1, n + 6), ue(this, n + 2, n + 5), ue(this, n + 3, n + 4);
    return this;
  }, l.prototype.toString = function() {
    const r = this.length;
    return r === 0 ? "" : arguments.length === 0 ? S(this, 0, r) : we.apply(this, arguments);
  }, l.prototype.toLocaleString = l.prototype.toString, l.prototype.equals = function(r) {
    if (!l.isBuffer(r))
      throw new TypeError("Argument must be a Buffer");
    return this === r ? !0 : l.compare(this, r) === 0;
  }, l.prototype.inspect = function() {
    let r = "";
    const n = e.INSPECT_MAX_BYTES;
    return r = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (r += " ... "), "<Buffer " + r + ">";
  }, o && (l.prototype[o] = l.prototype.inspect), l.prototype.compare = function(r, n, c, p, m) {
    if (me(r, Uint8Array) && (r = l.from(r, r.offset, r.byteLength)), !l.isBuffer(r))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof r
      );
    if (n === void 0 && (n = 0), c === void 0 && (c = r ? r.length : 0), p === void 0 && (p = 0), m === void 0 && (m = this.length), n < 0 || c > r.length || p < 0 || m > this.length)
      throw new RangeError("out of range index");
    if (p >= m && n >= c)
      return 0;
    if (p >= m)
      return -1;
    if (n >= c)
      return 1;
    if (n >>>= 0, c >>>= 0, p >>>= 0, m >>>= 0, this === r)
      return 0;
    let b = m - p, A = c - n;
    const Z = Math.min(b, A), J = this.slice(p, m), Q = r.slice(n, c);
    for (let H = 0; H < Z; ++H)
      if (J[H] !== Q[H]) {
        b = J[H], A = Q[H];
        break;
      }
    return b < A ? -1 : A < b ? 1 : 0;
  };
  function je(s, r, n, c, p) {
    if (s.length === 0)
      return -1;
    if (typeof n == "string" ? (c = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, Et(n) && (n = p ? 0 : s.length - 1), n < 0 && (n = s.length + n), n >= s.length) {
      if (p)
        return -1;
      n = s.length - 1;
    } else if (n < 0)
      if (p)
        n = 0;
      else
        return -1;
    if (typeof r == "string" && (r = l.from(r, c)), l.isBuffer(r))
      return r.length === 0 ? -1 : Re(s, r, n, c, p);
    if (typeof r == "number")
      return r = r & 255, typeof Uint8Array.prototype.indexOf == "function" ? p ? Uint8Array.prototype.indexOf.call(s, r, n) : Uint8Array.prototype.lastIndexOf.call(s, r, n) : Re(s, [r], n, c, p);
    throw new TypeError("val must be string, number or Buffer");
  }
  function Re(s, r, n, c, p) {
    let m = 1, b = s.length, A = r.length;
    if (c !== void 0 && (c = String(c).toLowerCase(), c === "ucs2" || c === "ucs-2" || c === "utf16le" || c === "utf-16le")) {
      if (s.length < 2 || r.length < 2)
        return -1;
      m = 2, b /= 2, A /= 2, n /= 2;
    }
    function Z(Q, H) {
      return m === 1 ? Q[H] : Q.readUInt16BE(H * m);
    }
    let J;
    if (p) {
      let Q = -1;
      for (J = n; J < b; J++)
        if (Z(s, J) === Z(r, Q === -1 ? 0 : J - Q)) {
          if (Q === -1 && (Q = J), J - Q + 1 === A)
            return Q * m;
        } else
          Q !== -1 && (J -= J - Q), Q = -1;
    } else
      for (n + A > b && (n = b - A), J = n; J >= 0; J--) {
        let Q = !0;
        for (let H = 0; H < A; H++)
          if (Z(s, J + H) !== Z(r, H)) {
            Q = !1;
            break;
          }
        if (Q)
          return J;
      }
    return -1;
  }
  l.prototype.includes = function(r, n, c) {
    return this.indexOf(r, n, c) !== -1;
  }, l.prototype.indexOf = function(r, n, c) {
    return je(this, r, n, c, !0);
  }, l.prototype.lastIndexOf = function(r, n, c) {
    return je(this, r, n, c, !1);
  };
  function Ne(s, r, n, c) {
    n = Number(n) || 0;
    const p = s.length - n;
    c ? (c = Number(c), c > p && (c = p)) : c = p;
    const m = r.length;
    c > m / 2 && (c = m / 2);
    let b;
    for (b = 0; b < c; ++b) {
      const A = parseInt(r.substr(b * 2, 2), 16);
      if (Et(A))
        return b;
      s[n + b] = A;
    }
    return b;
  }
  function Te(s, r, n, c) {
    return ut(lt(r, s.length - n), s, n, c);
  }
  function Me(s, r, n, c) {
    return ut(Lt(r), s, n, c);
  }
  function Ue(s, r, n, c) {
    return ut(Nt(r), s, n, c);
  }
  function _(s, r, n, c) {
    return ut(ct(r, s.length - n), s, n, c);
  }
  l.prototype.write = function(r, n, c, p) {
    if (n === void 0)
      p = "utf8", c = this.length, n = 0;
    else if (c === void 0 && typeof n == "string")
      p = n, c = this.length, n = 0;
    else if (isFinite(n))
      n = n >>> 0, isFinite(c) ? (c = c >>> 0, p === void 0 && (p = "utf8")) : (p = c, c = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const m = this.length - n;
    if ((c === void 0 || c > m) && (c = m), r.length > 0 && (c < 0 || n < 0) || n > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    p || (p = "utf8");
    let b = !1;
    for (; ; )
      switch (p) {
        case "hex":
          return Ne(this, r, n, c);
        case "utf8":
        case "utf-8":
          return Te(this, r, n, c);
        case "ascii":
        case "latin1":
        case "binary":
          return Me(this, r, n, c);
        case "base64":
          return Ue(this, r, n, c);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return _(this, r, n, c);
        default:
          if (b)
            throw new TypeError("Unknown encoding: " + p);
          p = ("" + p).toLowerCase(), b = !0;
      }
  }, l.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function C(s, r, n) {
    return r === 0 && n === s.length ? t.fromByteArray(s) : t.fromByteArray(s.slice(r, n));
  }
  function S(s, r, n) {
    n = Math.min(s.length, n);
    const c = [];
    let p = r;
    for (; p < n; ) {
      const m = s[p];
      let b = null, A = m > 239 ? 4 : m > 223 ? 3 : m > 191 ? 2 : 1;
      if (p + A <= n) {
        let Z, J, Q, H;
        switch (A) {
          case 1:
            m < 128 && (b = m);
            break;
          case 2:
            Z = s[p + 1], (Z & 192) === 128 && (H = (m & 31) << 6 | Z & 63, H > 127 && (b = H));
            break;
          case 3:
            Z = s[p + 1], J = s[p + 2], (Z & 192) === 128 && (J & 192) === 128 && (H = (m & 15) << 12 | (Z & 63) << 6 | J & 63, H > 2047 && (H < 55296 || H > 57343) && (b = H));
            break;
          case 4:
            Z = s[p + 1], J = s[p + 2], Q = s[p + 3], (Z & 192) === 128 && (J & 192) === 128 && (Q & 192) === 128 && (H = (m & 15) << 18 | (Z & 63) << 12 | (J & 63) << 6 | Q & 63, H > 65535 && H < 1114112 && (b = H));
        }
      }
      b === null ? (b = 65533, A = 1) : b > 65535 && (b -= 65536, c.push(b >>> 10 & 1023 | 55296), b = 56320 | b & 1023), c.push(b), p += A;
    }
    return F(c);
  }
  const O = 4096;
  function F(s) {
    const r = s.length;
    if (r <= O)
      return String.fromCharCode.apply(String, s);
    let n = "", c = 0;
    for (; c < r; )
      n += String.fromCharCode.apply(
        String,
        s.slice(c, c += O)
      );
    return n;
  }
  function U(s, r, n) {
    let c = "";
    n = Math.min(s.length, n);
    for (let p = r; p < n; ++p)
      c += String.fromCharCode(s[p] & 127);
    return c;
  }
  function $(s, r, n) {
    let c = "";
    n = Math.min(s.length, n);
    for (let p = r; p < n; ++p)
      c += String.fromCharCode(s[p]);
    return c;
  }
  function q(s, r, n) {
    const c = s.length;
    (!r || r < 0) && (r = 0), (!n || n < 0 || n > c) && (n = c);
    let p = "";
    for (let m = r; m < n; ++m)
      p += ar[s[m]];
    return p;
  }
  function ee(s, r, n) {
    const c = s.slice(r, n);
    let p = "";
    for (let m = 0; m < c.length - 1; m += 2)
      p += String.fromCharCode(c[m] + c[m + 1] * 256);
    return p;
  }
  l.prototype.slice = function(r, n) {
    const c = this.length;
    r = ~~r, n = n === void 0 ? c : ~~n, r < 0 ? (r += c, r < 0 && (r = 0)) : r > c && (r = c), n < 0 ? (n += c, n < 0 && (n = 0)) : n > c && (n = c), n < r && (n = r);
    const p = this.subarray(r, n);
    return Object.setPrototypeOf(p, l.prototype), p;
  };
  function z(s, r, n) {
    if (s % 1 !== 0 || s < 0)
      throw new RangeError("offset is not uint");
    if (s + r > n)
      throw new RangeError("Trying to access beyond buffer length");
  }
  l.prototype.readUintLE = l.prototype.readUIntLE = function(r, n, c) {
    r = r >>> 0, n = n >>> 0, c || z(r, n, this.length);
    let p = this[r], m = 1, b = 0;
    for (; ++b < n && (m *= 256); )
      p += this[r + b] * m;
    return p;
  }, l.prototype.readUintBE = l.prototype.readUIntBE = function(r, n, c) {
    r = r >>> 0, n = n >>> 0, c || z(r, n, this.length);
    let p = this[r + --n], m = 1;
    for (; n > 0 && (m *= 256); )
      p += this[r + --n] * m;
    return p;
  }, l.prototype.readUint8 = l.prototype.readUInt8 = function(r, n) {
    return r = r >>> 0, n || z(r, 1, this.length), this[r];
  }, l.prototype.readUint16LE = l.prototype.readUInt16LE = function(r, n) {
    return r = r >>> 0, n || z(r, 2, this.length), this[r] | this[r + 1] << 8;
  }, l.prototype.readUint16BE = l.prototype.readUInt16BE = function(r, n) {
    return r = r >>> 0, n || z(r, 2, this.length), this[r] << 8 | this[r + 1];
  }, l.prototype.readUint32LE = l.prototype.readUInt32LE = function(r, n) {
    return r = r >>> 0, n || z(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216;
  }, l.prototype.readUint32BE = l.prototype.readUInt32BE = function(r, n) {
    return r = r >>> 0, n || z(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]);
  }, l.prototype.readBigUInt64LE = Ce(function(r) {
    r = r >>> 0, qe(r, "offset");
    const n = this[r], c = this[r + 7];
    (n === void 0 || c === void 0) && Ze(r, this.length - 8);
    const p = n + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24, m = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + c * 2 ** 24;
    return BigInt(p) + (BigInt(m) << BigInt(32));
  }), l.prototype.readBigUInt64BE = Ce(function(r) {
    r = r >>> 0, qe(r, "offset");
    const n = this[r], c = this[r + 7];
    (n === void 0 || c === void 0) && Ze(r, this.length - 8);
    const p = n * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r], m = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + c;
    return (BigInt(p) << BigInt(32)) + BigInt(m);
  }), l.prototype.readIntLE = function(r, n, c) {
    r = r >>> 0, n = n >>> 0, c || z(r, n, this.length);
    let p = this[r], m = 1, b = 0;
    for (; ++b < n && (m *= 256); )
      p += this[r + b] * m;
    return m *= 128, p >= m && (p -= Math.pow(2, 8 * n)), p;
  }, l.prototype.readIntBE = function(r, n, c) {
    r = r >>> 0, n = n >>> 0, c || z(r, n, this.length);
    let p = n, m = 1, b = this[r + --p];
    for (; p > 0 && (m *= 256); )
      b += this[r + --p] * m;
    return m *= 128, b >= m && (b -= Math.pow(2, 8 * n)), b;
  }, l.prototype.readInt8 = function(r, n) {
    return r = r >>> 0, n || z(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
  }, l.prototype.readInt16LE = function(r, n) {
    r = r >>> 0, n || z(r, 2, this.length);
    const c = this[r] | this[r + 1] << 8;
    return c & 32768 ? c | 4294901760 : c;
  }, l.prototype.readInt16BE = function(r, n) {
    r = r >>> 0, n || z(r, 2, this.length);
    const c = this[r + 1] | this[r] << 8;
    return c & 32768 ? c | 4294901760 : c;
  }, l.prototype.readInt32LE = function(r, n) {
    return r = r >>> 0, n || z(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
  }, l.prototype.readInt32BE = function(r, n) {
    return r = r >>> 0, n || z(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
  }, l.prototype.readBigInt64LE = Ce(function(r) {
    r = r >>> 0, qe(r, "offset");
    const n = this[r], c = this[r + 7];
    (n === void 0 || c === void 0) && Ze(r, this.length - 8);
    const p = this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (c << 24);
    return (BigInt(p) << BigInt(32)) + BigInt(n + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24);
  }), l.prototype.readBigInt64BE = Ce(function(r) {
    r = r >>> 0, qe(r, "offset");
    const n = this[r], c = this[r + 7];
    (n === void 0 || c === void 0) && Ze(r, this.length - 8);
    const p = (n << 24) + // Overflow
    this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r];
    return (BigInt(p) << BigInt(32)) + BigInt(this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + c);
  }), l.prototype.readFloatLE = function(r, n) {
    return r = r >>> 0, n || z(r, 4, this.length), i.read(this, r, !0, 23, 4);
  }, l.prototype.readFloatBE = function(r, n) {
    return r = r >>> 0, n || z(r, 4, this.length), i.read(this, r, !1, 23, 4);
  }, l.prototype.readDoubleLE = function(r, n) {
    return r = r >>> 0, n || z(r, 8, this.length), i.read(this, r, !0, 52, 8);
  }, l.prototype.readDoubleBE = function(r, n) {
    return r = r >>> 0, n || z(r, 8, this.length), i.read(this, r, !1, 52, 8);
  };
  function G(s, r, n, c, p, m) {
    if (!l.isBuffer(s))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (r > p || r < m)
      throw new RangeError('"value" argument is out of bounds');
    if (n + c > s.length)
      throw new RangeError("Index out of range");
  }
  l.prototype.writeUintLE = l.prototype.writeUIntLE = function(r, n, c, p) {
    if (r = +r, n = n >>> 0, c = c >>> 0, !p) {
      const A = Math.pow(2, 8 * c) - 1;
      G(this, r, n, c, A, 0);
    }
    let m = 1, b = 0;
    for (this[n] = r & 255; ++b < c && (m *= 256); )
      this[n + b] = r / m & 255;
    return n + c;
  }, l.prototype.writeUintBE = l.prototype.writeUIntBE = function(r, n, c, p) {
    if (r = +r, n = n >>> 0, c = c >>> 0, !p) {
      const A = Math.pow(2, 8 * c) - 1;
      G(this, r, n, c, A, 0);
    }
    let m = c - 1, b = 1;
    for (this[n + m] = r & 255; --m >= 0 && (b *= 256); )
      this[n + m] = r / b & 255;
    return n + c;
  }, l.prototype.writeUint8 = l.prototype.writeUInt8 = function(r, n, c) {
    return r = +r, n = n >>> 0, c || G(this, r, n, 1, 255, 0), this[n] = r & 255, n + 1;
  }, l.prototype.writeUint16LE = l.prototype.writeUInt16LE = function(r, n, c) {
    return r = +r, n = n >>> 0, c || G(this, r, n, 2, 65535, 0), this[n] = r & 255, this[n + 1] = r >>> 8, n + 2;
  }, l.prototype.writeUint16BE = l.prototype.writeUInt16BE = function(r, n, c) {
    return r = +r, n = n >>> 0, c || G(this, r, n, 2, 65535, 0), this[n] = r >>> 8, this[n + 1] = r & 255, n + 2;
  }, l.prototype.writeUint32LE = l.prototype.writeUInt32LE = function(r, n, c) {
    return r = +r, n = n >>> 0, c || G(this, r, n, 4, 4294967295, 0), this[n + 3] = r >>> 24, this[n + 2] = r >>> 16, this[n + 1] = r >>> 8, this[n] = r & 255, n + 4;
  }, l.prototype.writeUint32BE = l.prototype.writeUInt32BE = function(r, n, c) {
    return r = +r, n = n >>> 0, c || G(this, r, n, 4, 4294967295, 0), this[n] = r >>> 24, this[n + 1] = r >>> 16, this[n + 2] = r >>> 8, this[n + 3] = r & 255, n + 4;
  };
  function te(s, r, n, c, p) {
    vt(r, c, p, s, n, 7);
    let m = Number(r & BigInt(4294967295));
    s[n++] = m, m = m >> 8, s[n++] = m, m = m >> 8, s[n++] = m, m = m >> 8, s[n++] = m;
    let b = Number(r >> BigInt(32) & BigInt(4294967295));
    return s[n++] = b, b = b >> 8, s[n++] = b, b = b >> 8, s[n++] = b, b = b >> 8, s[n++] = b, n;
  }
  function Ge(s, r, n, c, p) {
    vt(r, c, p, s, n, 7);
    let m = Number(r & BigInt(4294967295));
    s[n + 7] = m, m = m >> 8, s[n + 6] = m, m = m >> 8, s[n + 5] = m, m = m >> 8, s[n + 4] = m;
    let b = Number(r >> BigInt(32) & BigInt(4294967295));
    return s[n + 3] = b, b = b >> 8, s[n + 2] = b, b = b >> 8, s[n + 1] = b, b = b >> 8, s[n] = b, n + 8;
  }
  l.prototype.writeBigUInt64LE = Ce(function(r, n = 0) {
    return te(this, r, n, BigInt(0), BigInt("0xffffffffffffffff"));
  }), l.prototype.writeBigUInt64BE = Ce(function(r, n = 0) {
    return Ge(this, r, n, BigInt(0), BigInt("0xffffffffffffffff"));
  }), l.prototype.writeIntLE = function(r, n, c, p) {
    if (r = +r, n = n >>> 0, !p) {
      const Z = Math.pow(2, 8 * c - 1);
      G(this, r, n, c, Z - 1, -Z);
    }
    let m = 0, b = 1, A = 0;
    for (this[n] = r & 255; ++m < c && (b *= 256); )
      r < 0 && A === 0 && this[n + m - 1] !== 0 && (A = 1), this[n + m] = (r / b >> 0) - A & 255;
    return n + c;
  }, l.prototype.writeIntBE = function(r, n, c, p) {
    if (r = +r, n = n >>> 0, !p) {
      const Z = Math.pow(2, 8 * c - 1);
      G(this, r, n, c, Z - 1, -Z);
    }
    let m = c - 1, b = 1, A = 0;
    for (this[n + m] = r & 255; --m >= 0 && (b *= 256); )
      r < 0 && A === 0 && this[n + m + 1] !== 0 && (A = 1), this[n + m] = (r / b >> 0) - A & 255;
    return n + c;
  }, l.prototype.writeInt8 = function(r, n, c) {
    return r = +r, n = n >>> 0, c || G(this, r, n, 1, 127, -128), r < 0 && (r = 255 + r + 1), this[n] = r & 255, n + 1;
  }, l.prototype.writeInt16LE = function(r, n, c) {
    return r = +r, n = n >>> 0, c || G(this, r, n, 2, 32767, -32768), this[n] = r & 255, this[n + 1] = r >>> 8, n + 2;
  }, l.prototype.writeInt16BE = function(r, n, c) {
    return r = +r, n = n >>> 0, c || G(this, r, n, 2, 32767, -32768), this[n] = r >>> 8, this[n + 1] = r & 255, n + 2;
  }, l.prototype.writeInt32LE = function(r, n, c) {
    return r = +r, n = n >>> 0, c || G(this, r, n, 4, 2147483647, -2147483648), this[n] = r & 255, this[n + 1] = r >>> 8, this[n + 2] = r >>> 16, this[n + 3] = r >>> 24, n + 4;
  }, l.prototype.writeInt32BE = function(r, n, c) {
    return r = +r, n = n >>> 0, c || G(this, r, n, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), this[n] = r >>> 24, this[n + 1] = r >>> 16, this[n + 2] = r >>> 8, this[n + 3] = r & 255, n + 4;
  }, l.prototype.writeBigInt64LE = Ce(function(r, n = 0) {
    return te(this, r, n, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), l.prototype.writeBigInt64BE = Ce(function(r, n = 0) {
    return Ge(this, r, n, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function Ke(s, r, n, c, p, m) {
    if (n + c > s.length)
      throw new RangeError("Index out of range");
    if (n < 0)
      throw new RangeError("Index out of range");
  }
  function We(s, r, n, c, p) {
    return r = +r, n = n >>> 0, p || Ke(s, r, n, 4), i.write(s, r, n, c, 23, 4), n + 4;
  }
  l.prototype.writeFloatLE = function(r, n, c) {
    return We(this, r, n, !0, c);
  }, l.prototype.writeFloatBE = function(r, n, c) {
    return We(this, r, n, !1, c);
  };
  function ot(s, r, n, c, p) {
    return r = +r, n = n >>> 0, p || Ke(s, r, n, 8), i.write(s, r, n, c, 52, 8), n + 8;
  }
  l.prototype.writeDoubleLE = function(r, n, c) {
    return ot(this, r, n, !0, c);
  }, l.prototype.writeDoubleBE = function(r, n, c) {
    return ot(this, r, n, !1, c);
  }, l.prototype.copy = function(r, n, c, p) {
    if (!l.isBuffer(r))
      throw new TypeError("argument should be a Buffer");
    if (c || (c = 0), !p && p !== 0 && (p = this.length), n >= r.length && (n = r.length), n || (n = 0), p > 0 && p < c && (p = c), p === c || r.length === 0 || this.length === 0)
      return 0;
    if (n < 0)
      throw new RangeError("targetStart out of bounds");
    if (c < 0 || c >= this.length)
      throw new RangeError("Index out of range");
    if (p < 0)
      throw new RangeError("sourceEnd out of bounds");
    p > this.length && (p = this.length), r.length - n < p - c && (p = r.length - n + c);
    const m = p - c;
    return this === r && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(n, c, p) : Uint8Array.prototype.set.call(
      r,
      this.subarray(c, p),
      n
    ), m;
  }, l.prototype.fill = function(r, n, c, p) {
    if (typeof r == "string") {
      if (typeof n == "string" ? (p = n, n = 0, c = this.length) : typeof c == "string" && (p = c, c = this.length), p !== void 0 && typeof p != "string")
        throw new TypeError("encoding must be a string");
      if (typeof p == "string" && !l.isEncoding(p))
        throw new TypeError("Unknown encoding: " + p);
      if (r.length === 1) {
        const b = r.charCodeAt(0);
        (p === "utf8" && b < 128 || p === "latin1") && (r = b);
      }
    } else
      typeof r == "number" ? r = r & 255 : typeof r == "boolean" && (r = Number(r));
    if (n < 0 || this.length < n || this.length < c)
      throw new RangeError("Out of range index");
    if (c <= n)
      return this;
    n = n >>> 0, c = c === void 0 ? this.length : c >>> 0, r || (r = 0);
    let m;
    if (typeof r == "number")
      for (m = n; m < c; ++m)
        this[m] = r;
    else {
      const b = l.isBuffer(r) ? r : l.from(r, p), A = b.length;
      if (A === 0)
        throw new TypeError('The value "' + r + '" is invalid for argument "value"');
      for (m = 0; m < c - n; ++m)
        this[m + n] = b[m % A];
    }
    return this;
  };
  const Se = {};
  function Je(s, r, n) {
    Se[s] = class extends n {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: r.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${s}]`, this.stack, delete this.name;
      }
      get code() {
        return s;
      }
      set code(p) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: p,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${s}]: ${this.message}`;
      }
    };
  }
  Je(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(s) {
      return s ? `${s} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), Je(
    "ERR_INVALID_ARG_TYPE",
    function(s, r) {
      return `The "${s}" argument must be of type number. Received type ${typeof r}`;
    },
    TypeError
  ), Je(
    "ERR_OUT_OF_RANGE",
    function(s, r, n) {
      let c = `The value of "${s}" is out of range.`, p = n;
      return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? p = Xe(String(n)) : typeof n == "bigint" && (p = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (p = Xe(p)), p += "n"), c += ` It must be ${r}. Received ${p}`, c;
    },
    RangeError
  );
  function Xe(s) {
    let r = "", n = s.length;
    const c = s[0] === "-" ? 1 : 0;
    for (; n >= c + 4; n -= 3)
      r = `_${s.slice(n - 3, n)}${r}`;
    return `${s.slice(0, n)}${r}`;
  }
  function sr(s, r, n) {
    qe(r, "offset"), (s[r] === void 0 || s[r + n] === void 0) && Ze(r, s.length - (n + 1));
  }
  function vt(s, r, n, c, p, m) {
    if (s > n || s < r) {
      const b = typeof r == "bigint" ? "n" : "";
      let A;
      throw m > 3 ? r === 0 || r === BigInt(0) ? A = `>= 0${b} and < 2${b} ** ${(m + 1) * 8}${b}` : A = `>= -(2${b} ** ${(m + 1) * 8 - 1}${b}) and < 2 ** ${(m + 1) * 8 - 1}${b}` : A = `>= ${r}${b} and <= ${n}${b}`, new Se.ERR_OUT_OF_RANGE("value", A, s);
    }
    sr(c, p, m);
  }
  function qe(s, r) {
    if (typeof s != "number")
      throw new Se.ERR_INVALID_ARG_TYPE(r, "number", s);
  }
  function Ze(s, r, n) {
    throw Math.floor(s) !== s ? (qe(s, n), new Se.ERR_OUT_OF_RANGE(n || "offset", "an integer", s)) : r < 0 ? new Se.ERR_BUFFER_OUT_OF_BOUNDS() : new Se.ERR_OUT_OF_RANGE(
      n || "offset",
      `>= ${n ? 1 : 0} and <= ${r}`,
      s
    );
  }
  const st = /[^+/0-9A-Za-z-_]/g;
  function at(s) {
    if (s = s.split("=")[0], s = s.trim().replace(st, ""), s.length < 2)
      return "";
    for (; s.length % 4 !== 0; )
      s = s + "=";
    return s;
  }
  function lt(s, r) {
    r = r || 1 / 0;
    let n;
    const c = s.length;
    let p = null;
    const m = [];
    for (let b = 0; b < c; ++b) {
      if (n = s.charCodeAt(b), n > 55295 && n < 57344) {
        if (!p) {
          if (n > 56319) {
            (r -= 3) > -1 && m.push(239, 191, 189);
            continue;
          } else if (b + 1 === c) {
            (r -= 3) > -1 && m.push(239, 191, 189);
            continue;
          }
          p = n;
          continue;
        }
        if (n < 56320) {
          (r -= 3) > -1 && m.push(239, 191, 189), p = n;
          continue;
        }
        n = (p - 55296 << 10 | n - 56320) + 65536;
      } else
        p && (r -= 3) > -1 && m.push(239, 191, 189);
      if (p = null, n < 128) {
        if ((r -= 1) < 0)
          break;
        m.push(n);
      } else if (n < 2048) {
        if ((r -= 2) < 0)
          break;
        m.push(
          n >> 6 | 192,
          n & 63 | 128
        );
      } else if (n < 65536) {
        if ((r -= 3) < 0)
          break;
        m.push(
          n >> 12 | 224,
          n >> 6 & 63 | 128,
          n & 63 | 128
        );
      } else if (n < 1114112) {
        if ((r -= 4) < 0)
          break;
        m.push(
          n >> 18 | 240,
          n >> 12 & 63 | 128,
          n >> 6 & 63 | 128,
          n & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return m;
  }
  function Lt(s) {
    const r = [];
    for (let n = 0; n < s.length; ++n)
      r.push(s.charCodeAt(n) & 255);
    return r;
  }
  function ct(s, r) {
    let n, c, p;
    const m = [];
    for (let b = 0; b < s.length && !((r -= 2) < 0); ++b)
      n = s.charCodeAt(b), c = n >> 8, p = n % 256, m.push(p), m.push(c);
    return m;
  }
  function Nt(s) {
    return t.toByteArray(at(s));
  }
  function ut(s, r, n, c) {
    let p;
    for (p = 0; p < c && !(p + n >= r.length || p >= s.length); ++p)
      r[p + n] = s[p];
    return p;
  }
  function me(s, r) {
    return s instanceof r || s != null && s.constructor != null && s.constructor.name != null && s.constructor.name === r.name;
  }
  function Et(s) {
    return s !== s;
  }
  const ar = function() {
    const s = "0123456789abcdef", r = new Array(256);
    for (let n = 0; n < 16; ++n) {
      const c = n * 16;
      for (let p = 0; p < 16; ++p)
        r[c + p] = s[n] + s[p];
    }
    return r;
  }();
  function Ce(s) {
    return typeof BigInt > "u" ? Mt : s;
  }
  function Mt() {
    throw new Error("BigInt not supported");
  }
})(Ln);
var Mn = { exports: {} }, oe = Mn.exports = {}, Be, Ae;
function vr() {
  throw new Error("setTimeout has not been defined");
}
function Er() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Be = setTimeout : Be = vr;
  } catch {
    Be = vr;
  }
  try {
    typeof clearTimeout == "function" ? Ae = clearTimeout : Ae = Er;
  } catch {
    Ae = Er;
  }
})();
function Un(e) {
  if (Be === setTimeout)
    return setTimeout(e, 0);
  if ((Be === vr || !Be) && setTimeout)
    return Be = setTimeout, setTimeout(e, 0);
  try {
    return Be(e, 0);
  } catch {
    try {
      return Be.call(null, e, 0);
    } catch {
      return Be.call(this, e, 0);
    }
  }
}
function so(e) {
  if (Ae === clearTimeout)
    return clearTimeout(e);
  if ((Ae === Er || !Ae) && clearTimeout)
    return Ae = clearTimeout, clearTimeout(e);
  try {
    return Ae(e);
  } catch {
    try {
      return Ae.call(null, e);
    } catch {
      return Ae.call(this, e);
    }
  }
}
var Ve = [], wt = !1, tt, $t = -1;
function ao() {
  !wt || !tt || (wt = !1, tt.length ? Ve = tt.concat(Ve) : $t = -1, Ve.length && Dn());
}
function Dn() {
  if (!wt) {
    var e = Un(ao);
    wt = !0;
    for (var t = Ve.length; t; ) {
      for (tt = Ve, Ve = []; ++$t < t; )
        tt && tt[$t].run();
      $t = -1, t = Ve.length;
    }
    tt = null, wt = !1, so(e);
  }
}
oe.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var i = 1; i < arguments.length; i++)
      t[i - 1] = arguments[i];
  Ve.push(new zn(e, t)), Ve.length === 1 && !wt && Un(Dn);
};
function zn(e, t) {
  this.fun = e, this.array = t;
}
zn.prototype.run = function() {
  this.fun.apply(null, this.array);
};
oe.title = "browser";
oe.browser = !0;
oe.env = {};
oe.argv = [];
oe.version = "";
oe.versions = {};
function $e() {
}
oe.on = $e;
oe.addListener = $e;
oe.once = $e;
oe.off = $e;
oe.removeListener = $e;
oe.removeAllListeners = $e;
oe.emit = $e;
oe.prependListener = $e;
oe.prependOnceListener = $e;
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
var lo = Mn.exports;
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Ln, i = lo, o = (f) => f && f.__esModule ? f : { default: f }, a = o(i), u = globalThis || void 0 || self;
  Object.defineProperty(e, "Buffer", { enumerable: !0, get: () => t.Buffer }), Object.defineProperty(e, "process", { enumerable: !0, get: () => a.default }), e.global = u;
})(ye);
var Ir = { exports: {} }, It = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var an;
function co() {
  if (an)
    return It;
  an = 1;
  var e = On, t = Symbol.for("react.element"), i = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(l, h, w) {
    var y, x = {}, I = null, T = null;
    w !== void 0 && (I = "" + w), h.key !== void 0 && (I = "" + h.key), h.ref !== void 0 && (T = h.ref);
    for (y in h)
      o.call(h, y) && !u.hasOwnProperty(y) && (x[y] = h[y]);
    if (l && l.defaultProps)
      for (y in h = l.defaultProps, h)
        x[y] === void 0 && (x[y] = h[y]);
    return { $$typeof: t, type: l, key: I, ref: T, props: x, _owner: a.current };
  }
  return It.Fragment = i, It.jsx = f, It.jsxs = f, It;
}
var _t = {}, ln;
function uo() {
  return ln || (ln = 1, ye.process.env.NODE_ENV !== "production" && function() {
    var e = On, t = Symbol.for("react.element"), i = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), l = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), P = Symbol.iterator, R = "@@iterator";
    function V(d) {
      if (d === null || typeof d != "object")
        return null;
      var v = P && d[P] || d[R];
      return typeof v == "function" ? v : null;
    }
    var B = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function L(d) {
      {
        for (var v = arguments.length, E = new Array(v > 1 ? v - 1 : 0), j = 1; j < v; j++)
          E[j - 1] = arguments[j];
        de("error", d, E);
      }
    }
    function de(d, v, E) {
      {
        var j = B.ReactDebugCurrentFrame, W = j.getStackAddendum();
        W !== "" && (v += "%s", E = E.concat([W]));
        var K = E.map(function(D) {
          return String(D);
        });
        K.unshift("Warning: " + v), Function.prototype.apply.call(console[d], console, K);
      }
    }
    var we = !1, ue = !1, je = !1, Re = !1, Ne = !1, Te;
    Te = Symbol.for("react.module.reference");
    function Me(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === o || d === u || Ne || d === a || d === w || d === y || Re || d === T || we || ue || je || typeof d == "object" && d !== null && (d.$$typeof === I || d.$$typeof === x || d.$$typeof === f || d.$$typeof === l || d.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === Te || d.getModuleId !== void 0));
    }
    function Ue(d, v, E) {
      var j = d.displayName;
      if (j)
        return j;
      var W = v.displayName || v.name || "";
      return W !== "" ? E + "(" + W + ")" : E;
    }
    function _(d) {
      return d.displayName || "Context";
    }
    function C(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && L("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
        case o:
          return "Fragment";
        case i:
          return "Portal";
        case u:
          return "Profiler";
        case a:
          return "StrictMode";
        case w:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case l:
            var v = d;
            return _(v) + ".Consumer";
          case f:
            var E = d;
            return _(E._context) + ".Provider";
          case h:
            return Ue(d, d.render, "ForwardRef");
          case x:
            var j = d.displayName || null;
            return j !== null ? j : C(d.type) || "Memo";
          case I: {
            var W = d, K = W._payload, D = W._init;
            try {
              return C(D(K));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, O = 0, F, U, $, q, ee, z, G;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function Ge() {
      {
        if (O === 0) {
          F = console.log, U = console.info, $ = console.warn, q = console.error, ee = console.group, z = console.groupCollapsed, G = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: te,
            writable: !0
          };
          Object.defineProperties(console, {
            info: d,
            log: d,
            warn: d,
            error: d,
            group: d,
            groupCollapsed: d,
            groupEnd: d
          });
        }
        O++;
      }
    }
    function Ke() {
      {
        if (O--, O === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, d, {
              value: F
            }),
            info: S({}, d, {
              value: U
            }),
            warn: S({}, d, {
              value: $
            }),
            error: S({}, d, {
              value: q
            }),
            group: S({}, d, {
              value: ee
            }),
            groupCollapsed: S({}, d, {
              value: z
            }),
            groupEnd: S({}, d, {
              value: G
            })
          });
        }
        O < 0 && L("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var We = B.ReactCurrentDispatcher, ot;
    function Se(d, v, E) {
      {
        if (ot === void 0)
          try {
            throw Error();
          } catch (W) {
            var j = W.stack.trim().match(/\n( *(at )?)/);
            ot = j && j[1] || "";
          }
        return `
` + ot + d;
      }
    }
    var Je = !1, Xe;
    {
      var sr = typeof WeakMap == "function" ? WeakMap : Map;
      Xe = new sr();
    }
    function vt(d, v) {
      if (!d || Je)
        return "";
      {
        var E = Xe.get(d);
        if (E !== void 0)
          return E;
      }
      var j;
      Je = !0;
      var W = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var K;
      K = We.current, We.current = null, Ge();
      try {
        if (v) {
          var D = function() {
            throw Error();
          };
          if (Object.defineProperty(D.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(D, []);
            } catch (De) {
              j = De;
            }
            Reflect.construct(d, [], D);
          } else {
            try {
              D.call();
            } catch (De) {
              j = De;
            }
            d.call(D.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (De) {
            j = De;
          }
          d();
        }
      } catch (De) {
        if (De && j && typeof De.stack == "string") {
          for (var N = De.stack.split(`
`), pe = j.stack.split(`
`), ne = N.length - 1, se = pe.length - 1; ne >= 1 && se >= 0 && N[ne] !== pe[se]; )
            se--;
          for (; ne >= 1 && se >= 0; ne--, se--)
            if (N[ne] !== pe[se]) {
              if (ne !== 1 || se !== 1)
                do
                  if (ne--, se--, se < 0 || N[ne] !== pe[se]) {
                    var ve = `
` + N[ne].replace(" at new ", " at ");
                    return d.displayName && ve.includes("<anonymous>") && (ve = ve.replace("<anonymous>", d.displayName)), typeof d == "function" && Xe.set(d, ve), ve;
                  }
                while (ne >= 1 && se >= 0);
              break;
            }
        }
      } finally {
        Je = !1, We.current = K, Ke(), Error.prepareStackTrace = W;
      }
      var dt = d ? d.displayName || d.name : "", sn = dt ? Se(dt) : "";
      return typeof d == "function" && Xe.set(d, sn), sn;
    }
    function qe(d, v, E) {
      return vt(d, !1);
    }
    function Ze(d) {
      var v = d.prototype;
      return !!(v && v.isReactComponent);
    }
    function st(d, v, E) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return vt(d, Ze(d));
      if (typeof d == "string")
        return Se(d);
      switch (d) {
        case w:
          return Se("Suspense");
        case y:
          return Se("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case h:
            return qe(d.render);
          case x:
            return st(d.type, v, E);
          case I: {
            var j = d, W = j._payload, K = j._init;
            try {
              return st(K(W), v, E);
            } catch {
            }
          }
        }
      return "";
    }
    var at = Object.prototype.hasOwnProperty, lt = {}, Lt = B.ReactDebugCurrentFrame;
    function ct(d) {
      if (d) {
        var v = d._owner, E = st(d.type, d._source, v ? v.type : null);
        Lt.setExtraStackFrame(E);
      } else
        Lt.setExtraStackFrame(null);
    }
    function Nt(d, v, E, j, W) {
      {
        var K = Function.call.bind(at);
        for (var D in d)
          if (K(d, D)) {
            var N = void 0;
            try {
              if (typeof d[D] != "function") {
                var pe = Error((j || "React class") + ": " + E + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw pe.name = "Invariant Violation", pe;
              }
              N = d[D](v, D, j, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ne) {
              N = ne;
            }
            N && !(N instanceof Error) && (ct(W), L("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", E, D, typeof N), ct(null)), N instanceof Error && !(N.message in lt) && (lt[N.message] = !0, ct(W), L("Failed %s type: %s", E, N.message), ct(null));
          }
      }
    }
    var ut = Array.isArray;
    function me(d) {
      return ut(d);
    }
    function Et(d) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, E = v && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return E;
      }
    }
    function ar(d) {
      try {
        return Ce(d), !1;
      } catch {
        return !0;
      }
    }
    function Ce(d) {
      return "" + d;
    }
    function Mt(d) {
      if (ar(d))
        return L("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Et(d)), Ce(d);
    }
    var s = B.ReactCurrentOwner, r = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, n, c, p;
    p = {};
    function m(d) {
      if (at.call(d, "ref")) {
        var v = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function b(d) {
      if (at.call(d, "key")) {
        var v = Object.getOwnPropertyDescriptor(d, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function A(d, v) {
      if (typeof d.ref == "string" && s.current && v && s.current.stateNode !== v) {
        var E = C(s.current.type);
        p[E] || (L('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(s.current.type), d.ref), p[E] = !0);
      }
    }
    function Z(d, v) {
      {
        var E = function() {
          n || (n = !0, L("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        E.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function J(d, v) {
      {
        var E = function() {
          c || (c = !0, L("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        E.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var Q = function(d, v, E, j, W, K, D) {
      var N = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: d,
        key: v,
        ref: E,
        props: D,
        // Record the component responsible for creating this element.
        _owner: K
      };
      return N._store = {}, Object.defineProperty(N._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(N, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.defineProperty(N, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: W
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    };
    function H(d, v, E, j, W) {
      {
        var K, D = {}, N = null, pe = null;
        E !== void 0 && (Mt(E), N = "" + E), b(v) && (Mt(v.key), N = "" + v.key), m(v) && (pe = v.ref, A(v, W));
        for (K in v)
          at.call(v, K) && !r.hasOwnProperty(K) && (D[K] = v[K]);
        if (d && d.defaultProps) {
          var ne = d.defaultProps;
          for (K in ne)
            D[K] === void 0 && (D[K] = ne[K]);
        }
        if (N || pe) {
          var se = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          N && Z(D, se), pe && J(D, se);
        }
        return Q(d, N, pe, W, j, s.current, D);
      }
    }
    var lr = B.ReactCurrentOwner, Qr = B.ReactDebugCurrentFrame;
    function ft(d) {
      if (d) {
        var v = d._owner, E = st(d.type, d._source, v ? v.type : null);
        Qr.setExtraStackFrame(E);
      } else
        Qr.setExtraStackFrame(null);
    }
    var cr;
    cr = !1;
    function ur(d) {
      return typeof d == "object" && d !== null && d.$$typeof === t;
    }
    function en() {
      {
        if (lr.current) {
          var d = C(lr.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function Bi(d) {
      {
        if (d !== void 0) {
          var v = d.fileName.replace(/^.*[\\\/]/, ""), E = d.lineNumber;
          return `

Check your code at ` + v + ":" + E + ".";
        }
        return "";
      }
    }
    var tn = {};
    function Ai(d) {
      {
        var v = en();
        if (!v) {
          var E = typeof d == "string" ? d : d.displayName || d.name;
          E && (v = `

Check the top-level render call using <` + E + ">.");
        }
        return v;
      }
    }
    function rn(d, v) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var E = Ai(v);
        if (tn[E])
          return;
        tn[E] = !0;
        var j = "";
        d && d._owner && d._owner !== lr.current && (j = " It was passed a child from " + C(d._owner.type) + "."), ft(d), L('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, j), ft(null);
      }
    }
    function nn(d, v) {
      {
        if (typeof d != "object")
          return;
        if (me(d))
          for (var E = 0; E < d.length; E++) {
            var j = d[E];
            ur(j) && rn(j, v);
          }
        else if (ur(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var W = V(d);
          if (typeof W == "function" && W !== d.entries)
            for (var K = W.call(d), D; !(D = K.next()).done; )
              ur(D.value) && rn(D.value, v);
        }
      }
    }
    function Oi(d) {
      {
        var v = d.type;
        if (v == null || typeof v == "string")
          return;
        var E;
        if (typeof v == "function")
          E = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === x))
          E = v.propTypes;
        else
          return;
        if (E) {
          var j = C(v);
          Nt(E, d.props, "prop", j, d);
        } else if (v.PropTypes !== void 0 && !cr) {
          cr = !0;
          var W = C(v);
          L("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", W || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && L("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Fi(d) {
      {
        for (var v = Object.keys(d.props), E = 0; E < v.length; E++) {
          var j = v[E];
          if (j !== "children" && j !== "key") {
            ft(d), L("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), ft(null);
            break;
          }
        }
        d.ref !== null && (ft(d), L("Invalid attribute `ref` supplied to `React.Fragment`."), ft(null));
      }
    }
    function on(d, v, E, j, W, K) {
      {
        var D = Me(d);
        if (!D) {
          var N = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (N += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var pe = Bi(W);
          pe ? N += pe : N += en();
          var ne;
          d === null ? ne = "null" : me(d) ? ne = "array" : d !== void 0 && d.$$typeof === t ? (ne = "<" + (C(d.type) || "Unknown") + " />", N = " Did you accidentally export a JSX literal instead of a component?") : ne = typeof d, L("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ne, N);
        }
        var se = H(d, v, E, W, K);
        if (se == null)
          return se;
        if (D) {
          var ve = v.children;
          if (ve !== void 0)
            if (j)
              if (me(ve)) {
                for (var dt = 0; dt < ve.length; dt++)
                  nn(ve[dt], d);
                Object.freeze && Object.freeze(ve);
              } else
                L("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              nn(ve, d);
        }
        return d === o ? Fi(se) : Oi(se), se;
      }
    }
    function Li(d, v, E) {
      return on(d, v, E, !0);
    }
    function Ni(d, v, E) {
      return on(d, v, E, !1);
    }
    var Mi = Ni, Ui = Li;
    _t.Fragment = o, _t.jsx = Mi, _t.jsxs = Ui;
  }()), _t;
}
ye.process.env.NODE_ENV === "production" ? Ir.exports = co() : Ir.exports = uo();
var g = Ir.exports, Pt = {}, Tt = Vi;
if (ye.process.env.NODE_ENV === "production")
  Pt.createRoot = Tt.createRoot, Pt.hydrateRoot = Tt.hydrateRoot;
else {
  var Ut = Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Pt.createRoot = function(e, t) {
    Ut.usingClientEntryPoint = !0;
    try {
      return Tt.createRoot(e, t);
    } finally {
      Ut.usingClientEntryPoint = !1;
    }
  }, Pt.hydrateRoot = function(e, t, i) {
    Ut.usingClientEntryPoint = !0;
    try {
      return Tt.hydrateRoot(e, t, i);
    } finally {
      Ut.usingClientEntryPoint = !1;
    }
  };
}
function Gt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Gt = function(i) {
    return typeof i;
  } : Gt = function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  }, Gt(e);
}
function fo(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cn(e, t) {
  for (var i = 0; i < t.length; i++) {
    var o = t[i];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
  }
}
function po(e, t, i) {
  return t && cn(e.prototype, t), i && cn(e, i), e;
}
function ho(e, t) {
  return t && (Gt(t) === "object" || typeof t == "function") ? t : Wt(e);
}
function _r(e) {
  return _r = Object.setPrototypeOf ? Object.getPrototypeOf : function(i) {
    return i.__proto__ || Object.getPrototypeOf(i);
  }, _r(e);
}
function Wt(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function mo(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Tr(e, t);
}
function Tr(e, t) {
  return Tr = Object.setPrototypeOf || function(o, a) {
    return o.__proto__ = a, o;
  }, Tr(e, t);
}
function qt(e, t, i) {
  return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e;
}
var Vn = /* @__PURE__ */ function(e) {
  mo(t, e);
  function t() {
    var i, o;
    fo(this, t);
    for (var a = arguments.length, u = new Array(a), f = 0; f < a; f++)
      u[f] = arguments[f];
    return o = ho(this, (i = _r(t)).call.apply(i, [this].concat(u))), qt(Wt(o), "state", {
      bootstrapped: !1
    }), qt(Wt(o), "_unsubscribe", void 0), qt(Wt(o), "handlePersistorState", function() {
      var l = o.props.persistor, h = l.getState(), w = h.bootstrapped;
      w && (o.props.onBeforeLift ? Promise.resolve(o.props.onBeforeLift()).finally(function() {
        return o.setState({
          bootstrapped: !0
        });
      }) : o.setState({
        bootstrapped: !0
      }), o._unsubscribe && o._unsubscribe());
    }), o;
  }
  return po(t, [{
    key: "componentDidMount",
    value: function() {
      this._unsubscribe = this.props.persistor.subscribe(this.handlePersistorState), this.handlePersistorState();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this._unsubscribe && this._unsubscribe();
    }
  }, {
    key: "render",
    value: function() {
      return ye.process.env.NODE_ENV !== "production" && typeof this.props.children == "function" && this.props.loading && console.error("redux-persist: PersistGate expects either a function child or loading prop, but not both. The loading prop will be ignored."), typeof this.props.children == "function" ? this.props.children(this.state.bootstrapped) : this.state.bootstrapped ? this.props.children : this.props.loading;
    }
  }]), t;
}(Di);
qt(Vn, "defaultProps", {
  children: null,
  loading: null
});
const wo = {
  cta: !0,
  close: !0,
  payment: !0,
  response: !0,
  email: !0
}, go = {
  default: wo
}, jt = (e, t) => new URLSearchParams(e).get(t), yo = {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric"
};
function bo(e, t = yo) {
  return `${new Date(e).toLocaleDateString(void 0, t)}`.toUpperCase();
}
function he() {
  const e = new Array(36);
  for (let t = 0; t < 36; t++)
    e[t] = Math.floor(Math.random() * 16);
  return e[14] = 4, e[19] = e[19] &= -5, e[19] = e[19] |= 8, e[8] = e[13] = e[18] = e[23] = "-", e.map((t) => t.toString(16)).join("");
}
var ce = /* @__PURE__ */ ((e) => (e.text = "text", e.buttons = "buttons", e.payment = "payment", e.video = "video", e.image = "image", e.email = "email", e))(ce || {}), Ur = /* @__PURE__ */ ((e) => (e.horizontal = "horizontal", e.vertical = "vertical", e))(Ur || {}), _e = /* @__PURE__ */ ((e) => (e.addToCart = "AddToCart", e.contact = "Contact", e.initiateCheckout = "InitiateCheckout", e.pageView = "PageView", e.viewContent = "ViewContent", e.purchase = "Purchase", e.subscribe = "Subscribe", e.recurringSubscriptionPayment = "RecurringSubscriptionPayment", e.cancelSubscription = "CancelSubscription", e.purchaseFailed = "PurchaseFailed", e.subscribeFailed = "SubscribeFailed", e.recurringSubscriptionPaymentFailed = "RecurringSubscriptionPaymentFailed", e.customerCreated = "CustomerCreated", e.subscriptionChargeback = "SubscriptionChargeback", e.subscriptionRefund = "SubscriptionRefund", e.transactionChargeback = "TransactionChargeback", e.transactionRefund = "TransactionRefund", e.firstMessage = "FirstMessage", e.linkProvided = "LinkProvided", e.linkClicked = "LinkClicked", e.emailField = "EmailField", e.emailEntered = "EmailEntered", e.emailWrong = "EmailWrong", e.emailExist = "EmailExist", e.priceSeen = "PriceSeen", e.buttonClick = "ButtonClick", e.closeClicked = "CloseClicked", e))(_e || {}), $n = /* @__PURE__ */ ((e) => (e.email = "email_intent", e.payment = "payment_intent", e.emailError = "email_validation_error", e.emailSuccess = "email_validation_success", e.destroy = "payment_intent_destroy", e))($n || {}), ae = /* @__PURE__ */ ((e) => (e.user = "user", e.assistant = "assistant", e))(ae || {}), Ee = /* @__PURE__ */ ((e) => (e.chat = "chat", e.chatHistory = "chat-history", e.connect = "connect", e.error = "error", e.disconnect = "disconnect", e.streamStart = "stream-start", e.streamData = "stream-data", e.streamEnd = "stream-end", e.streamError = "stream-error", e))(Ee || {}), Gn = /* @__PURE__ */ ((e) => (e.light = "light", e.dark = "dark", e))(Gn || {});
const ht = {
  pd: "",
  cid: "",
  eid: "",
  region: "",
  systemType: "",
  marketing: {}
}, ze = {
  aiProfile: {
    name: "",
    role: "",
    imgSrc: "",
    welcome: "",
    initialMessage: []
  },
  translations: {},
  themeId: Gn.light,
  chatUrl: "",
  enableDevTools: !1,
  isPluginMode: !1,
  purpose: "default",
  closeVisible: !1
}, mt = {
  outgoing: {
    term: "",
    user_id: "",
    role: ae.user,
    message: ""
  },
  // queue: [],
  historyData: {},
  historyIds: [],
  error: "",
  isLoading: !1,
  typingTimeoutExpired: !1,
  lastGroupId: he(),
  connected: !1,
  closed: !1,
  isStreaming: !1
}, xo = {
  email: {
    current: "",
    success: !1,
    error: !1,
    isFormVisible: !1,
    isLoading: !1
  },
  response: {
    value: "",
    isFormVisible: !1,
    isLoading: !1,
    error: !1
  },
  payment: {
    isButtonVisible: !1,
    isFormVisible: !1,
    isSuccessful: !1,
    error: !1
  },
  messaging: {
    isVisible: !1
  },
  link: {
    isVisible: !1,
    href: "",
    text: ""
  }
}, Wn = tr({
  name: "config",
  initialState: ze,
  reducers: {
    setConfig(e, { payload: t }) {
      e.aiProfile = { ...ze.aiProfile, ...t.aiProfile }, e.translations = { ...ze.translations, ...t.translations }, e.themeId = t.themeId, e.chatUrl = t.chatUrl, e.closeVisible = t.closeVisible, e.purpose = t.purpose;
    },
    resetConfig(e) {
      e.aiProfile = ze.aiProfile, e.themeId = ze.themeId, e.translations = ze.translations, e.chatUrl = ze.chatUrl;
    },
    setTheme(e, { payload: t }) {
      e.themeId = t;
    },
    resetTheme(e) {
      e.themeId = ze.themeId;
    },
    setDevToolsStatus(e, { payload: t }) {
      e.enableDevTools = t;
    },
    resetDevToolsStatus(e) {
      e.enableDevTools = ze.enableDevTools;
    },
    togglePluginMode(e) {
      e.isPluginMode = !e.isPluginMode;
    },
    setTranslations(e, { payload: t }) {
      e.translations = { ...e.translations, ...t };
    }
  }
}), ie = (e) => e.config, {
  setConfig: qn,
  resetConfig: ul,
  setTheme: fl,
  resetTheme: dl,
  setDevToolsStatus: pl,
  resetDevToolsStatus: hl,
  togglePluginMode: ml,
  setTranslations: wl
} = Wn.actions, vo = Wn.reducer;
function fe(e) {
  for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    i[o - 1] = arguments[o];
  if (ye.process.env.NODE_ENV !== "production") {
    var a = Po[e], u = a ? typeof a == "function" ? a.apply(null, i) : a : "unknown error nr: " + e;
    throw Error("[Immer] " + u);
  }
  throw Error("[Immer] minified error nr: " + e + (i.length ? " " + i.map(function(f) {
    return "'" + f + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function yt(e) {
  return !!e && !!e[be];
}
function nt(e) {
  var t;
  return !!e && (function(i) {
    if (!i || typeof i != "object")
      return !1;
    var o = Object.getPrototypeOf(i);
    if (o === null)
      return !0;
    var a = Object.hasOwnProperty.call(o, "constructor") && o.constructor;
    return a === Object || typeof a == "function" && Function.toString.call(a) === jo;
  }(e) || Array.isArray(e) || !!e[gn] || !!(!((t = e.constructor) === null || t === void 0) && t[gn]) || Dr(e) || zr(e));
}
function At(e, t, i) {
  i === void 0 && (i = !1), xt(e) === 0 ? (i ? Object.keys : qr)(e).forEach(function(o) {
    i && typeof o == "symbol" || t(o, e[o], e);
  }) : e.forEach(function(o, a) {
    return t(a, o, e);
  });
}
function xt(e) {
  var t = e[be];
  return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : Dr(e) ? 2 : zr(e) ? 3 : 0;
}
function Sr(e, t) {
  return xt(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Eo(e, t) {
  return xt(e) === 2 ? e.get(t) : e[t];
}
function Hn(e, t, i) {
  var o = xt(e);
  o === 2 ? e.set(t, i) : o === 3 ? e.add(i) : e[t] = i;
}
function Io(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Dr(e) {
  return Co && e instanceof Map;
}
function zr(e) {
  return ko && e instanceof Set;
}
function Qe(e) {
  return e.o || e.t;
}
function Vr(e) {
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  var t = Ro(e);
  delete t[be];
  for (var i = qr(t), o = 0; o < i.length; o++) {
    var a = i[o], u = t[a];
    u.writable === !1 && (u.writable = !0, u.configurable = !0), (u.get || u.set) && (t[a] = { configurable: !0, writable: !0, enumerable: u.enumerable, value: e[a] });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function $r(e, t) {
  return t === void 0 && (t = !1), Gr(e) || yt(e) || !nt(e) || (xt(e) > 1 && (e.set = e.add = e.clear = e.delete = _o), Object.freeze(e), t && At(e, function(i, o) {
    return $r(o, !0);
  }, !0)), e;
}
function _o() {
  fe(2);
}
function Gr(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function Le(e) {
  var t = Bo[e];
  return t || fe(18, e), t;
}
function un() {
  return ye.process.env.NODE_ENV === "production" || bt || fe(0), bt;
}
function dr(e, t) {
  t && (Le("Patches"), e.u = [], e.s = [], e.v = t);
}
function Kt(e) {
  Cr(e), e.p.forEach(To), e.p = null;
}
function Cr(e) {
  e === bt && (bt = e.l);
}
function fn(e) {
  return bt = { p: [], l: bt, h: e, m: !0, _: 0 };
}
function To(e) {
  var t = e[be];
  t.i === 0 || t.i === 1 ? t.j() : t.g = !0;
}
function pr(e, t) {
  t._ = t.p.length;
  var i = t.p[0], o = e !== void 0 && e !== i;
  return t.h.O || Le("ES5").S(t, e, o), o ? (i[be].P && (Kt(t), fe(4)), nt(e) && (e = Jt(t, e), t.l || Xt(t, e)), t.u && Le("Patches").M(i[be].t, e, t.u, t.s)) : e = Jt(t, i, []), Kt(t), t.u && t.v(t.u, t.s), e !== Yn ? e : void 0;
}
function Jt(e, t, i) {
  if (Gr(t))
    return t;
  var o = t[be];
  if (!o)
    return At(t, function(l, h) {
      return dn(e, o, t, l, h, i);
    }, !0), t;
  if (o.A !== e)
    return t;
  if (!o.P)
    return Xt(e, o.t, !0), o.t;
  if (!o.I) {
    o.I = !0, o.A._--;
    var a = o.i === 4 || o.i === 5 ? o.o = Vr(o.k) : o.o, u = a, f = !1;
    o.i === 3 && (u = new Set(a), a.clear(), f = !0), At(u, function(l, h) {
      return dn(e, o, a, l, h, i, f);
    }), Xt(e, a, !1), i && e.u && Le("Patches").N(o, i, e.u, e.s);
  }
  return o.o;
}
function dn(e, t, i, o, a, u, f) {
  if (ye.process.env.NODE_ENV !== "production" && a === i && fe(5), yt(a)) {
    var l = Jt(e, a, u && t && t.i !== 3 && !Sr(t.R, o) ? u.concat(o) : void 0);
    if (Hn(i, o, l), !yt(l))
      return;
    e.m = !1;
  } else
    f && i.add(a);
  if (nt(a) && !Gr(a)) {
    if (!e.h.D && e._ < 1)
      return;
    Jt(e, a), t && t.A.l || Xt(e, a);
  }
}
function Xt(e, t, i) {
  i === void 0 && (i = !1), !e.l && e.h.D && e.m && $r(t, i);
}
function hr(e, t) {
  var i = e[be];
  return (i ? Qe(i) : e)[t];
}
function pn(e, t) {
  if (t in e)
    for (var i = Object.getPrototypeOf(e); i; ) {
      var o = Object.getOwnPropertyDescriptor(i, t);
      if (o)
        return o;
      i = Object.getPrototypeOf(i);
    }
}
function kr(e) {
  e.P || (e.P = !0, e.l && kr(e.l));
}
function mr(e) {
  e.o || (e.o = Vr(e.t));
}
function Pr(e, t, i) {
  var o = Dr(t) ? Le("MapSet").F(t, i) : zr(t) ? Le("MapSet").T(t, i) : e.O ? function(a, u) {
    var f = Array.isArray(a), l = { i: f ? 1 : 0, A: u ? u.A : un(), P: !1, I: !1, R: {}, l: u, t: a, k: null, o: null, j: null, C: !1 }, h = l, w = jr;
    f && (h = [l], w = Rt);
    var y = Proxy.revocable(h, w), x = y.revoke, I = y.proxy;
    return l.k = I, l.j = x, I;
  }(t, i) : Le("ES5").J(t, i);
  return (i ? i.A : un()).p.push(o), o;
}
function So(e) {
  return yt(e) || fe(22, e), function t(i) {
    if (!nt(i))
      return i;
    var o, a = i[be], u = xt(i);
    if (a) {
      if (!a.P && (a.i < 4 || !Le("ES5").K(a)))
        return a.t;
      a.I = !0, o = hn(i, u), a.I = !1;
    } else
      o = hn(i, u);
    return At(o, function(f, l) {
      a && Eo(a.t, f) === l || Hn(o, f, t(l));
    }), u === 3 ? new Set(o) : o;
  }(e);
}
function hn(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return Vr(e);
}
var mn, bt, Wr = typeof Symbol < "u" && typeof Symbol("x") == "symbol", Co = typeof Map < "u", ko = typeof Set < "u", wn = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", Yn = Wr ? Symbol.for("immer-nothing") : ((mn = {})["immer-nothing"] = !0, mn), gn = Wr ? Symbol.for("immer-draftable") : "__$immer_draftable", be = Wr ? Symbol.for("immer-state") : "__$immer_state", Po = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(e) {
  return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
}, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(e) {
  return "Cannot apply patch, path doesn't resolve: " + e;
}, 16: 'Sets cannot have "replace" patches.', 17: function(e) {
  return "Unsupported patch operation: " + e;
}, 18: function(e) {
  return "The plugin for '" + e + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + e + "()` when initializing your application.";
}, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(e) {
  return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + e + "'";
}, 22: function(e) {
  return "'current' expects a draft, got: " + e;
}, 23: function(e) {
  return "'original' expects a draft, got: " + e;
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, jo = "" + Object.prototype.constructor, qr = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Object.getOwnPropertyNames, Ro = Object.getOwnPropertyDescriptors || function(e) {
  var t = {};
  return qr(e).forEach(function(i) {
    t[i] = Object.getOwnPropertyDescriptor(e, i);
  }), t;
}, Bo = {}, jr = { get: function(e, t) {
  if (t === be)
    return e;
  var i = Qe(e);
  if (!Sr(i, t))
    return function(a, u, f) {
      var l, h = pn(u, f);
      return h ? "value" in h ? h.value : (l = h.get) === null || l === void 0 ? void 0 : l.call(a.k) : void 0;
    }(e, i, t);
  var o = i[t];
  return e.I || !nt(o) ? o : o === hr(e.t, t) ? (mr(e), e.o[t] = Pr(e.A.h, o, e)) : o;
}, has: function(e, t) {
  return t in Qe(e);
}, ownKeys: function(e) {
  return Reflect.ownKeys(Qe(e));
}, set: function(e, t, i) {
  var o = pn(Qe(e), t);
  if (o != null && o.set)
    return o.set.call(e.k, i), !0;
  if (!e.P) {
    var a = hr(Qe(e), t), u = a == null ? void 0 : a[be];
    if (u && u.t === i)
      return e.o[t] = i, e.R[t] = !1, !0;
    if (Io(i, a) && (i !== void 0 || Sr(e.t, t)))
      return !0;
    mr(e), kr(e);
  }
  return e.o[t] === i && (i !== void 0 || t in e.o) || Number.isNaN(i) && Number.isNaN(e.o[t]) || (e.o[t] = i, e.R[t] = !0), !0;
}, deleteProperty: function(e, t) {
  return hr(e.t, t) !== void 0 || t in e.t ? (e.R[t] = !1, mr(e), kr(e)) : delete e.R[t], e.o && delete e.o[t], !0;
}, getOwnPropertyDescriptor: function(e, t) {
  var i = Qe(e), o = Reflect.getOwnPropertyDescriptor(i, t);
  return o && { writable: !0, configurable: e.i !== 1 || t !== "length", enumerable: o.enumerable, value: i[t] };
}, defineProperty: function() {
  fe(11);
}, getPrototypeOf: function(e) {
  return Object.getPrototypeOf(e.t);
}, setPrototypeOf: function() {
  fe(12);
} }, Rt = {};
At(jr, function(e, t) {
  Rt[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
}), Rt.deleteProperty = function(e, t) {
  return ye.process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && fe(13), Rt.set.call(this, e, t, void 0);
}, Rt.set = function(e, t, i) {
  return ye.process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && fe(14), jr.set.call(this, e[0], t, i, e[0]);
};
var Ao = function() {
  function e(i) {
    var o = this;
    this.O = wn, this.D = !0, this.produce = function(a, u, f) {
      if (typeof a == "function" && typeof u != "function") {
        var l = u;
        u = a;
        var h = o;
        return function(R) {
          var V = this;
          R === void 0 && (R = l);
          for (var B = arguments.length, L = Array(B > 1 ? B - 1 : 0), de = 1; de < B; de++)
            L[de - 1] = arguments[de];
          return h.produce(R, function(we) {
            var ue;
            return (ue = u).call.apply(ue, [V, we].concat(L));
          });
        };
      }
      var w;
      if (typeof u != "function" && fe(6), f !== void 0 && typeof f != "function" && fe(7), nt(a)) {
        var y = fn(o), x = Pr(o, a, void 0), I = !0;
        try {
          w = u(x), I = !1;
        } finally {
          I ? Kt(y) : Cr(y);
        }
        return typeof Promise < "u" && w instanceof Promise ? w.then(function(R) {
          return dr(y, f), pr(R, y);
        }, function(R) {
          throw Kt(y), R;
        }) : (dr(y, f), pr(w, y));
      }
      if (!a || typeof a != "object") {
        if ((w = u(a)) === void 0 && (w = a), w === Yn && (w = void 0), o.D && $r(w, !0), f) {
          var T = [], P = [];
          Le("Patches").M(a, w, T, P), f(T, P);
        }
        return w;
      }
      fe(21, a);
    }, this.produceWithPatches = function(a, u) {
      if (typeof a == "function")
        return function(w) {
          for (var y = arguments.length, x = Array(y > 1 ? y - 1 : 0), I = 1; I < y; I++)
            x[I - 1] = arguments[I];
          return o.produceWithPatches(w, function(T) {
            return a.apply(void 0, [T].concat(x));
          });
        };
      var f, l, h = o.produce(a, u, function(w, y) {
        f = w, l = y;
      });
      return typeof Promise < "u" && h instanceof Promise ? h.then(function(w) {
        return [w, f, l];
      }) : [h, f, l];
    }, typeof (i == null ? void 0 : i.useProxies) == "boolean" && this.setUseProxies(i.useProxies), typeof (i == null ? void 0 : i.autoFreeze) == "boolean" && this.setAutoFreeze(i.autoFreeze);
  }
  var t = e.prototype;
  return t.createDraft = function(i) {
    nt(i) || fe(8), yt(i) && (i = So(i));
    var o = fn(this), a = Pr(this, i, void 0);
    return a[be].C = !0, Cr(o), a;
  }, t.finishDraft = function(i, o) {
    var a = i && i[be];
    ye.process.env.NODE_ENV !== "production" && (a && a.C || fe(9), a.I && fe(10));
    var u = a.A;
    return dr(u, o), pr(void 0, u);
  }, t.setAutoFreeze = function(i) {
    this.D = i;
  }, t.setUseProxies = function(i) {
    i && !wn && fe(20), this.O = i;
  }, t.applyPatches = function(i, o) {
    var a;
    for (a = o.length - 1; a >= 0; a--) {
      var u = o[a];
      if (u.path.length === 0 && u.op === "replace") {
        i = u.value;
        break;
      }
    }
    a > -1 && (o = o.slice(a + 1));
    var f = Le("Patches").$;
    return yt(i) ? f(i, o) : this.produce(i, function(l) {
      return f(l, o);
    });
  }, e;
}(), xe = new Ao(), Oo = xe.produce;
xe.produceWithPatches.bind(xe);
xe.setAutoFreeze.bind(xe);
xe.setUseProxies.bind(xe);
xe.applyPatches.bind(xe);
xe.createDraft.bind(xe);
xe.finishDraft.bind(xe);
const et = Oo, Kn = tr({
  name: "intentions",
  initialState: xo,
  reducers: {
    setEmail(e, { payload: t }) {
      e.email.current = t;
    },
    setEmailSuccess(e, { payload: t }) {
      e.email.success = t;
    },
    setEmailError(e, { payload: t }) {
      e.email.error = t;
    },
    setIsEmailLoading(e, { payload: t }) {
      e.email.isLoading = t;
    },
    setIsEmailFormVisible(e, { payload: t }) {
      e.email.isFormVisible = t;
    },
    setIsPaymentButtonVisible(e, { payload: t }) {
      e.payment.isButtonVisible = t;
    },
    setPaymentFormVisibility(e, { payload: t }) {
      e.payment.isFormVisible = t;
    },
    setIsPaymentSuccessful(e, { payload: t }) {
      e.payment.isSuccessful = t;
    },
    setPaymentIntentError(e, { payload: t }) {
      e.payment.error = t;
    },
    setLink(e, { payload: t }) {
      e.link = { ...e.link, ...t };
    },
    setResponse(e, { payload: t }) {
      e.response.value = t;
    },
    setResponseFormVisibility(e, { payload: t }) {
      return et(e, (i) => {
        i.response.isFormVisible = !t.some((o) => [ce.buttons, ce.payment, ce.email].includes(o.type)), i.email.isFormVisible = t.some((o) => ce.email in o && o.type === ce.email), i.payment.isButtonVisible = t.some((o) => ce.payment in o && o.type === ce.payment);
      });
    },
    setResponseLoadingStatus(e, { payload: t }) {
      e.response.isLoading = t;
    }
  }
}), Jn = (e) => e.intentions.email, Fo = (e) => e.intentions.payment, Lo = (e) => e.intentions.link, Xn = (e) => e.intentions.response, {
  setEmail: No,
  setEmailSuccess: Mo,
  setIsPaymentSuccessful: Uo,
  setPaymentFormVisibility: Do,
  setEmailError: yn,
  setIsEmailLoading: Rr,
  setIsEmailFormVisible: zo,
  setIsPaymentButtonVisible: Vo,
  setLink: Hr,
  setResponse: gl,
  setResponseFormVisibility: wr,
  setResponseLoadingStatus: yl,
  setPaymentIntentError: $o
} = Kn.actions, Go = Kn.reducer, Zn = tr({
  name: "meta",
  initialState: ht,
  reducers: {
    setMeta(e, { payload: t }) {
      e.cid = t.cid, e.eid = t.eid, e.systemType = t.systemType, e.pd = { ...t.pd, ...e.pd }, e.marketing = { ...t.marketing, ...e.marketing };
    },
    resetMeta(e) {
      e.pd = ht.pd, e.cid = ht.cid, e.eid = ht.eid, e.systemType = ht.systemType, e.marketing = ht.marketing;
    },
    setMarketing(e, { payload: t }) {
      e.marketing = { ...e.marketing, ...t };
    },
    setPd(e, { payload: t }) {
      e.pd = { ...e.pd, ...t };
    },
    setRegion(e, { payload: t }) {
      e.region = t;
    }
  }
}), Ft = (e) => e.meta, { setMeta: Wo, resetMeta: bl, setMarketing: qo, setPd: Ho, setRegion: Yo } = Zn.actions, Ko = Zn.reducer, Ye = Gi, k = $i, Qn = (e) => go[e], Jo = () => {
  const [e, t] = Bt([0, 0]);
  return zi(() => {
    function i() {
      t([window.innerWidth, window.innerHeight]);
    }
    return window.addEventListener("resize", i), i(), () => window.removeEventListener("resize", i);
  }, []), e;
}, Xo = () => {
  const { themeId: e, closeVisible: t, purpose: i } = k(ie), { cid: o, systemType: a, marketing: u } = k(Ft), f = Qn(i);
  return {
    theme: e,
    closeVisible: t && f.close,
    cid: o,
    systemType: a,
    marketing: u
  };
}, Zo = () => {
  const { isFormVisible: e } = k(Xn), { cid: t, systemType: i, marketing: o } = k(Ft), { translations: a, purpose: u } = k(ie), { isVisible: f, text: l, href: h } = k(Lo), { isStreaming: w, error: y, isLoading: x } = k((we) => we.chat), { isFormVisible: I, current: T, error: P } = k(Jn), { isButtonVisible: R, isFormVisible: V, error: B } = k(Fo), L = Qn(u);
  return {
    cid: t,
    ctaHref: h,
    ctaText: l,
    current: T,
    emailError: P,
    error: P || B || y,
    isCtaVisible: f && L.cta,
    isEmailFormVisible: I && L.email,
    isLoading: x,
    isPaymentButtonVisible: R && L.payment,
    isPaymentFormVisible: V && L.payment,
    isResponseFormVisible: e && L.response,
    isStreaming: w,
    marketing: o,
    paymentIntentError: B,
    streamError: y,
    systemType: i,
    translations: a
  };
};
var bn = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ge = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, Qo = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function ei(e, t) {
  e.forEach(function(i) {
    Array.isArray(i) ? ei(i, t) : t.push(i);
  });
}
function ti(e) {
  let t = [];
  return ei(e, t), t;
}
var ri = (...e) => ti(e).filter(Boolean), ni = (e, t) => {
  let i = {}, o = Object.keys(e), a = Object.keys(t);
  for (let u of o)
    if (a.includes(u)) {
      let f = e[u], l = t[u];
      typeof f == "object" && typeof l == "object" ? i[u] = ni(f, l) : Array.isArray(f) || Array.isArray(l) ? i[u] = ri(l, f) : i[u] = l + " " + f;
    } else
      i[u] = e[u];
  for (let u of a)
    o.includes(u) || (i[u] = t[u]);
  return i;
}, xn = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
function es() {
  for (var e = 0, t, i, o = ""; e < arguments.length; )
    (t = arguments[e++]) && (i = ii(t)) && (o && (o += " "), o += i);
  return o;
}
function ii(e) {
  if (typeof e == "string")
    return e;
  for (var t, i = "", o = 0; o < e.length; o++)
    e[o] && (t = ii(e[o])) && (i && (i += " "), i += t);
  return i;
}
var Yr = "-";
function ts(e) {
  var t = ns(e), i = e.conflictingClassGroups, o = e.conflictingClassGroupModifiers, a = o === void 0 ? {} : o;
  function u(l) {
    var h = l.split(Yr);
    return h[0] === "" && h.length !== 1 && h.shift(), oi(h, t) || rs(l);
  }
  function f(l, h) {
    var w = i[l] || [];
    return h && a[l] ? [].concat(w, a[l]) : w;
  }
  return {
    getClassGroupId: u,
    getConflictingClassGroupIds: f
  };
}
function oi(e, t) {
  var f;
  if (e.length === 0)
    return t.classGroupId;
  var i = e[0], o = t.nextPart.get(i), a = o ? oi(e.slice(1), o) : void 0;
  if (a)
    return a;
  if (t.validators.length !== 0) {
    var u = e.join(Yr);
    return (f = t.validators.find(function(l) {
      var h = l.validator;
      return h(u);
    })) == null ? void 0 : f.classGroupId;
  }
}
var vn = /^\[(.+)\]$/;
function rs(e) {
  if (vn.test(e)) {
    var t = vn.exec(e)[1], i = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (i)
      return "arbitrary.." + i;
  }
}
function ns(e) {
  var t = e.theme, i = e.prefix, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, a = os(Object.entries(e.classGroups), i);
  return a.forEach(function(u) {
    var f = u[0], l = u[1];
    Br(l, o, f, t);
  }), o;
}
function Br(e, t, i, o) {
  e.forEach(function(a) {
    if (typeof a == "string") {
      var u = a === "" ? t : En(t, a);
      u.classGroupId = i;
      return;
    }
    if (typeof a == "function") {
      if (is(a)) {
        Br(a(o), t, i, o);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: i
      });
      return;
    }
    Object.entries(a).forEach(function(f) {
      var l = f[0], h = f[1];
      Br(h, En(t, l), i, o);
    });
  });
}
function En(e, t) {
  var i = e;
  return t.split(Yr).forEach(function(o) {
    i.nextPart.has(o) || i.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), i = i.nextPart.get(o);
  }), i;
}
function is(e) {
  return e.isThemeGetter;
}
function os(e, t) {
  return t ? e.map(function(i) {
    var o = i[0], a = i[1], u = a.map(function(f) {
      return typeof f == "string" ? t + f : typeof f == "object" ? Object.fromEntries(Object.entries(f).map(function(l) {
        var h = l[0], w = l[1];
        return [t + h, w];
      })) : f;
    });
    return [o, u];
  }) : e;
}
function ss(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  function a(u, f) {
    i.set(u, f), t++, t > e && (t = 0, o = i, i = /* @__PURE__ */ new Map());
  }
  return {
    get: function(f) {
      var l = i.get(f);
      if (l !== void 0)
        return l;
      if ((l = o.get(f)) !== void 0)
        return a(f, l), l;
    },
    set: function(f, l) {
      i.has(f) ? i.set(f, l) : a(f, l);
    }
  };
}
var si = "!";
function as(e) {
  var t = e.separator || ":", i = t.length === 1, o = t[0], a = t.length;
  return function(f) {
    for (var l = [], h = 0, w = 0, y, x = 0; x < f.length; x++) {
      var I = f[x];
      if (h === 0) {
        if (I === o && (i || f.slice(x, x + a) === t)) {
          l.push(f.slice(w, x)), w = x + a;
          continue;
        }
        if (I === "/") {
          y = x;
          continue;
        }
      }
      I === "[" ? h++ : I === "]" && h--;
    }
    var T = l.length === 0 ? f : f.substring(w), P = T.startsWith(si), R = P ? T.substring(1) : T, V = y && y > w ? y - w : void 0;
    return {
      modifiers: l,
      hasImportantModifier: P,
      baseClassName: R,
      maybePostfixModifierPosition: V
    };
  };
}
function ls(e) {
  if (e.length <= 1)
    return e;
  var t = [], i = [];
  return e.forEach(function(o) {
    var a = o[0] === "[";
    a ? (t.push.apply(t, i.sort().concat([o])), i = []) : i.push(o);
  }), t.push.apply(t, i.sort()), t;
}
function cs(e) {
  return {
    cache: ss(e.cacheSize),
    splitModifiers: as(e),
    ...ts(e)
  };
}
var us = /\s+/;
function fs(e, t) {
  var i = t.splitModifiers, o = t.getClassGroupId, a = t.getConflictingClassGroupIds, u = /* @__PURE__ */ new Set();
  return e.trim().split(us).map(function(f) {
    var l = i(f), h = l.modifiers, w = l.hasImportantModifier, y = l.baseClassName, x = l.maybePostfixModifierPosition, I = o(x ? y.substring(0, x) : y), T = !!x;
    if (!I) {
      if (!x)
        return {
          isTailwindClass: !1,
          originalClassName: f
        };
      if (I = o(y), !I)
        return {
          isTailwindClass: !1,
          originalClassName: f
        };
      T = !1;
    }
    var P = ls(h).join(":"), R = w ? P + si : P;
    return {
      isTailwindClass: !0,
      modifierId: R,
      classGroupId: I,
      originalClassName: f,
      hasPostfixModifier: T
    };
  }).reverse().filter(function(f) {
    if (!f.isTailwindClass)
      return !0;
    var l = f.modifierId, h = f.classGroupId, w = f.hasPostfixModifier, y = l + h;
    return u.has(y) ? !1 : (u.add(y), a(h, w).forEach(function(x) {
      return u.add(l + x);
    }), !0);
  }).reverse().map(function(f) {
    return f.originalClassName;
  }).join(" ");
}
function Ar() {
  for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
    t[i] = arguments[i];
  var o, a, u, f = l;
  function l(w) {
    var y = t[0], x = t.slice(1), I = x.reduce(function(T, P) {
      return P(T);
    }, y());
    return o = cs(I), a = o.cache.get, u = o.cache.set, f = h, h(w);
  }
  function h(w) {
    var y = a(w);
    if (y)
      return y;
    var x = fs(w, o);
    return u(w, x), x;
  }
  return function() {
    return f(es.apply(null, arguments));
  };
}
function X(e) {
  var t = function(o) {
    return o[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var ai = /^\[(?:([a-z-]+):)?(.+)\]$/i, ds = /^\d+\/\d+$/, ps = /* @__PURE__ */ new Set(["px", "full", "screen"]), hs = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ms = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ws = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function ke(e) {
  return rt(e) || ps.has(e) || ds.test(e) || Or(e);
}
function Or(e) {
  return it(e, "length", Es);
}
function gs(e) {
  return it(e, "size", li);
}
function ys(e) {
  return it(e, "position", li);
}
function bs(e) {
  return it(e, "url", Is);
}
function Dt(e) {
  return it(e, "number", rt);
}
function rt(e) {
  return !Number.isNaN(Number(e));
}
function xs(e) {
  return e.endsWith("%") && rt(e.slice(0, -1));
}
function St(e) {
  return In(e) || it(e, "number", In);
}
function M(e) {
  return ai.test(e);
}
function Ct() {
  return !0;
}
function He(e) {
  return hs.test(e);
}
function vs(e) {
  return it(e, "", _s);
}
function it(e, t, i) {
  var o = ai.exec(e);
  return o ? o[1] ? o[1] === t : i(o[2]) : !1;
}
function Es(e) {
  return ms.test(e);
}
function li() {
  return !1;
}
function Is(e) {
  return e.startsWith("url(");
}
function In(e) {
  return Number.isInteger(Number(e));
}
function _s(e) {
  return ws.test(e);
}
function Fr() {
  var e = X("colors"), t = X("spacing"), i = X("blur"), o = X("brightness"), a = X("borderColor"), u = X("borderRadius"), f = X("borderSpacing"), l = X("borderWidth"), h = X("contrast"), w = X("grayscale"), y = X("hueRotate"), x = X("invert"), I = X("gap"), T = X("gradientColorStops"), P = X("gradientColorStopPositions"), R = X("inset"), V = X("margin"), B = X("opacity"), L = X("padding"), de = X("saturate"), we = X("scale"), ue = X("sepia"), je = X("skew"), Re = X("space"), Ne = X("translate"), Te = function() {
    return ["auto", "contain", "none"];
  }, Me = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, Ue = function() {
    return ["auto", M, t];
  }, _ = function() {
    return [M, t];
  }, C = function() {
    return ["", ke];
  }, S = function() {
    return ["auto", rt, M];
  }, O = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, F = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, U = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, $ = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, q = function() {
    return ["", "0", M];
  }, ee = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, z = function() {
    return [rt, Dt];
  }, G = function() {
    return [rt, M];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Ct],
      spacing: [ke],
      blur: ["none", "", He, M],
      brightness: z(),
      borderColor: [e],
      borderRadius: ["none", "", "full", He, M],
      borderSpacing: _(),
      borderWidth: C(),
      contrast: z(),
      grayscale: q(),
      hueRotate: G(),
      invert: q(),
      gap: _(),
      gradientColorStops: [e],
      gradientColorStopPositions: [xs, Or],
      inset: Ue(),
      margin: Ue(),
      opacity: z(),
      padding: _(),
      saturate: z(),
      scale: z(),
      sepia: q(),
      skew: G(),
      space: _(),
      translate: _()
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
        columns: [He]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ee()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ee()
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
        object: [].concat(O(), [M])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Me()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Me()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Me()
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
        inset: [R]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [R]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [R]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [R]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [R]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [R]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [R]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [R]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [R]
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
        z: ["auto", St]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: Ue()
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
        grow: q()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: q()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", St]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Ct]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", St]
        }, M]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": S()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": S()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Ct]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [St]
        }, M]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": S()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": S()
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
        gap: [I]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [I]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [I]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat($())
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
        content: ["normal"].concat($(), ["baseline"])
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
        "place-content": [].concat($(), ["baseline"])
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
        p: [L]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [L]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [L]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [L]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [L]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [L]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [L]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [L]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [L]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [V]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [V]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [V]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [V]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [V]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [V]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [V]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [V]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [V]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [Re]
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
        "space-y": [Re]
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
        w: ["auto", "min", "max", "fit", M, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", M, ke]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [He]
        }, He, M]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [M, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", M, ke]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [M, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", He, Or]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Dt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ct]
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
        "line-clamp": ["none", rt, Dt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", M, ke]
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
        "placeholder-opacity": [B]
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
        "text-opacity": [B]
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
        decoration: ["auto", "from-font", ke]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", M, ke]
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
        indent: _()
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
        "bg-opacity": [B]
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
        bg: [].concat(O(), [ys])
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
        bg: ["auto", "cover", "contain", gs]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, bs]
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
        from: [P]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [P]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [P]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [T]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [T]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [T]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [u]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [u]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [u]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [u]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [u]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [u]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [u]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [u]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [u]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [u]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [u]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [u]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [u]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [u]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [u]
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
        "border-opacity": [B]
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
        "divide-opacity": [B]
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
        border: [a]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [a]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [a]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [a]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [a]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [a]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [a]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [a]
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
        "outline-offset": [M, ke]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ke]
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
        ring: C()
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
        "ring-opacity": [B]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [ke]
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
        shadow: ["", "inner", "none", He, vs]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Ct]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [B]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": U()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": U()
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
        blur: [i]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [o]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [h]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", He, M]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [w]
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
        invert: [x]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [de]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [ue]
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
        "backdrop-blur": [i]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [o]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [h]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [w]
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
        "backdrop-invert": [x]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [B]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [de]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [ue]
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
        "border-spacing": [f]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [f]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [f]
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
        duration: G()
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
        delay: G()
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
        scale: [we]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [we]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [we]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [St, M]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [Ne]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [Ne]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [je]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [je]
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
        "scroll-m": _()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": _()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": _()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": _()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": _()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": _()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": _()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": _()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": _()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": _()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": _()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": _()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": _()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": _()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": _()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": _()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": _()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": _()
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
        stroke: [ke, Dt]
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
function Ts(e, t) {
  for (var i in t)
    ci(e, i, t[i]);
  return e;
}
var Ss = Object.prototype.hasOwnProperty, Cs = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function ci(e, t, i) {
  if (!Ss.call(e, t) || Cs.has(typeof i) || i === null) {
    e[t] = i;
    return;
  }
  if (Array.isArray(i) && Array.isArray(e[t])) {
    e[t] = e[t].concat(i);
    return;
  }
  if (typeof i == "object" && typeof e[t] == "object") {
    if (e[t] === null) {
      e[t] = i;
      return;
    }
    for (var o in i)
      ci(e[t], o, i[o]);
  }
}
function ks(e) {
  for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    i[o - 1] = arguments[o];
  return typeof e == "function" ? Ar.apply(void 0, [Fr, e].concat(i)) : Ar.apply(void 0, [function() {
    return Ts(Fr(), e);
  }].concat(i));
}
var Ps = /* @__PURE__ */ Ar(Fr), js = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, ui = (e) => e || void 0, Ot = (...e) => ui(ti(e).filter(Boolean).join(" ")), gr = null, Zt = {}, Lr = !1, kt = (...e) => (t) => t.twMerge ? ((!gr || Lr) && (Lr = !1, gr = ge(Zt) ? Ps : ks(Zt)), ui(gr(Ot(e)))) : Ot(e), _n = (e, t) => {
  for (let i in t)
    e.hasOwnProperty(i) ? e[i] = Ot(e[i], t[i]) : e[i] = t[i];
  return e;
}, re = (e, t) => {
  let { extend: i = null, slots: o = {}, variants: a = {}, compoundVariants: u = [], compoundSlots: f = [], defaultVariants: l = {} } = e, h = { ...js, ...t }, w = i != null && i.base ? Ot(i.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, y = i != null && i.variants && !ge(i.variants) ? ni(a, i.variants) : a, x = i != null && i.defaultVariants && !ge(i.defaultVariants) ? { ...i.defaultVariants, ...l } : l;
  !ge(h.twMergeConfig) && !Qo(h.twMergeConfig, Zt) && (Lr = !0, Zt = h.twMergeConfig);
  let I = ge(i == null ? void 0 : i.slots), T = ge(o) ? {} : { base: Ot(e == null ? void 0 : e.base, I && (i == null ? void 0 : i.base)), ...o }, P = I ? T : _n({ ...i == null ? void 0 : i.slots }, ge(T) ? { base: e == null ? void 0 : e.base } : T), R = (B) => {
    if (ge(y) && ge(o) && I)
      return kt(w, B == null ? void 0 : B.class, B == null ? void 0 : B.className)(h);
    if (u && !Array.isArray(u))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof u}`);
    if (f && !Array.isArray(f))
      throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof f}`);
    let L = (_, C, S = [], O) => {
      let F = S;
      if (typeof C == "string")
        F = F.concat(xn(C).split(" ").map((U) => `${_}:${U}`));
      else if (Array.isArray(C))
        F = F.concat(C.reduce((U, $) => U.concat(`${_}:${$}`), []));
      else if (typeof C == "object" && typeof O == "string") {
        for (let U in C)
          if (C.hasOwnProperty(U) && U === O) {
            let $ = C[U];
            if ($ && typeof $ == "string") {
              let q = xn($);
              F[O] ? F[O] = F[O].concat(q.split(" ").map((ee) => `${_}:${ee}`)) : F[O] = q.split(" ").map((ee) => `${_}:${ee}`);
            } else
              Array.isArray($) && $.length > 0 && (F[O] = $.reduce((q, ee) => q.concat(`${_}:${ee}`), []));
          }
      }
      return F;
    }, de = (_, C = y, S = null, O = null) => {
      var F;
      let U = C[_];
      if (!U || ge(U))
        return null;
      let $ = (F = O == null ? void 0 : O[_]) != null ? F : B == null ? void 0 : B[_];
      if ($ === null)
        return null;
      let q = bn($), ee = Array.isArray(h.responsiveVariants) && h.responsiveVariants.length > 0 || h.responsiveVariants === !0, z = x == null ? void 0 : x[_], G = [];
      if (typeof q == "object" && ee)
        for (let [Ge, Ke] of Object.entries(q)) {
          let We = U[Ke];
          if (Ge === "initial") {
            z = Ke;
            continue;
          }
          Array.isArray(h.responsiveVariants) && !h.responsiveVariants.includes(Ge) || (G = L(Ge, We, G, S));
        }
      let te = U[q] || U[bn(z)];
      return typeof G == "object" && typeof S == "string" && G[S] ? _n(G, te) : G.length > 0 ? (G.push(te), G) : te;
    }, we = () => y ? Object.keys(y).map((_) => de(_, y)) : null, ue = (_, C) => {
      if (!y || typeof y != "object")
        return null;
      let S = new Array();
      for (let O in y) {
        let F = de(O, y, _, C), U = _ === "base" && typeof F == "string" ? F : F && F[_];
        U && (S[S.length] = U);
      }
      return S;
    }, je = {};
    for (let _ in B)
      B[_] !== void 0 && (je[_] = B[_]);
    let Re = (_, C) => {
      var S;
      let O = typeof (B == null ? void 0 : B[_]) == "object" ? { [_]: (S = B[_]) == null ? void 0 : S.initial } : {};
      return { ...x, ...je, ...O, ...C };
    }, Ne = (_ = [], C) => {
      let S = [];
      for (let { class: O, className: F, ...U } of _) {
        let $ = !0;
        for (let [q, ee] of Object.entries(U)) {
          let z = Re(q, C);
          if (Array.isArray(ee)) {
            if (!ee.includes(z[q])) {
              $ = !1;
              break;
            }
          } else if (z[q] !== ee) {
            $ = !1;
            break;
          }
        }
        $ && (O && S.push(O), F && S.push(F));
      }
      return S;
    }, Te = (_) => {
      let C = Ne(u, _), S = Ne(i == null ? void 0 : i.compoundVariants, _);
      return ri(S, C);
    }, Me = (_) => {
      let C = Te(_);
      if (!Array.isArray(C))
        return C;
      let S = {};
      for (let O of C)
        if (typeof O == "string" && (S.base = kt(S.base, O)(h)), typeof O == "object")
          for (let [F, U] of Object.entries(O))
            S[F] = kt(S[F], U)(h);
      return S;
    }, Ue = (_) => {
      if (f.length < 1)
        return null;
      let C = {};
      for (let { slots: S = [], class: O, className: F, ...U } of f) {
        if (!ge(U)) {
          let $ = !0;
          for (let q of Object.keys(U)) {
            let ee = Re(q, _)[q];
            if (ee === void 0 || (Array.isArray(U[q]) ? !U[q].includes(ee) : U[q] !== ee)) {
              $ = !1;
              break;
            }
          }
          if (!$)
            continue;
        }
        for (let $ of S)
          C[$] = C[$] || [], C[$].push([O, F]);
      }
      return C;
    };
    if (!ge(o) || !I) {
      let _ = {};
      if (typeof P == "object" && !ge(P))
        for (let C of Object.keys(P))
          _[C] = (S) => {
            var O, F;
            return kt(P[C], ue(C, S), ((O = Me(S)) != null ? O : [])[C], ((F = Ue(S)) != null ? F : [])[C], S == null ? void 0 : S.class, S == null ? void 0 : S.className)(h);
          };
      return _;
    }
    return kt(w, we(), Te(), B == null ? void 0 : B.class, B == null ? void 0 : B.className)(h);
  }, V = () => {
    if (!(!y || typeof y != "object"))
      return Object.keys(y);
  };
  return R.variantKeys = V(), R.extend = i, R.base = w, R.slots = P, R.variants = y, R.defaultVariants = x, R.compoundSlots = f, R.compoundVariants = u, R;
};
const Rs = (
  /*tw*/
  re({
    slots: {
      base: "tw--flex tw--self-stretch tw--justify-self-stretch tw--items-stretch tw--justify-center tw--overflow-hidden tw--h-full",
      wrapper: "tw--flex tw--flex-col tw--w-full md:tw--max-w-[800px] tw--max-h-screen tw--h-full"
    },
    variants: {
      theme: {
        light: {
          base: "tw--bg-light-lumina",
          wrapper: "tw--bg-light-whisper tw--text-light-zephyr-100"
        },
        dark: {
          base: "tw--bg-dark-lumina",
          wrapper: "tw--bg-dark-whisper tw--text-white"
        }
      },
      minimized: {
        true: "tw--fixed tw--right-0 tw--bottom-0 tw--max-h-[700px] tw--max-w-md"
      }
    }
  })
), Bs = (
  /*tw*/
  re({
    slots: {
      base: "tw--flex tw--px-5 tw--py-[11px] tw--shadow-[-1px_2px_5px_0] tw--justify-between"
    },
    variants: {
      theme: {
        light: "tw--shadow-light-zephyr-200",
        dark: "tw--shadow-dark-zephyr-200"
      }
    }
  })
), fi = (
  /*tw*/
  re({
    slots: {
      base: "tw--flex tw--items-center tw--flex-wrap tw--px-5 tw--mt-[11px]",
      input: "tw--flex-1 tw--pr-2",
      button: "tw--flex tw--grow-0"
    }
  })
), As = ({ head: e, stream: t, foot: i }) => {
  const { themeId: o, isPluginMode: a } = k(ie), { base: u, wrapper: f } = Rs({ theme: o }), [l, h] = Jo();
  return /* @__PURE__ */ g.jsx(
    "div",
    {
      "data-e2e": "base-container",
      style: { height: `${h}px` },
      className: u({ minimized: a }),
      children: /* @__PURE__ */ g.jsxs("div", { className: f(), children: [
        e,
        t,
        i
      ] })
    }
  );
}, Os = (
  /*tw*/
  re({
    slots: {
      base: "tw--flex tw--items-center tw--select-none",
      avatar: "tw--rounded-full",
      info: "",
      name: "",
      role: "",
      imgWrapper: "",
      minimized: ""
    },
    variants: {
      theme: {
        light: {
          role: ""
        },
        dark: {
          role: ""
        }
      },
      orientation: {
        horizontal: {
          base: "tw--flex-row tw--text-left",
          avatar: "tw--shrink",
          name: "tw--text-xl/7 tw--font-bold tw--leading-[30px]",
          info: "tw--pl-[10px]"
        },
        vertical: {
          base: "tw--flex-col tw--text-center",
          name: "tw--text-[24px] tw--font-semibold"
        }
      },
      minimized: {
        true: "",
        false: ""
      }
    },
    compoundSlots: [
      {
        slots: ["role"],
        orientation: "vertical",
        theme: "light",
        class: "tw--text-light-zephyr-600 tw--font-medium"
      },
      {
        slots: ["role"],
        orientation: "horizontal",
        theme: "light",
        class: "tw--text-light-zephyr-800"
      },
      {
        slots: ["role"],
        orientation: "vertical",
        theme: "dark",
        class: "tw--text-dark-zephyr-600"
      },
      {
        slots: ["role"],
        orientation: "horizontal",
        theme: "dark",
        class: "tw--text-dark-zephyr-800"
      },
      {
        slots: ["imgWrapper"],
        orientation: "horizontal",
        minimized: !1,
        class: "tw--relative tw--h-fit after:tw--absolute after:tw--w-[10px] after:tw--h-[10px] after:tw--bottom-[-2px] after:tw--left-[37px] after:tw--z-10 after:tw--rounded-full after:tw--bg-light-iota-dots"
      },
      {
        slots: ["avatar"],
        orientation: "horizontal",
        minimized: !1,
        class: "tw--h-[50px]"
      },
      {
        slots: ["avatar"],
        orientation: "vertical",
        minimized: !1,
        class: "tw--h-[60px]"
      }
    ]
  })
), di = ({ orientation: e = Ur.horizontal, minimized: t = !1 }) => {
  const { aiProfile: i, themeId: o } = k(ie), { base: a, avatar: u, info: f, name: l, role: h, imgWrapper: w } = Os({ theme: o, orientation: e, minimized: t });
  return /* @__PURE__ */ g.jsxs("div", { className: a(), children: [
    /* @__PURE__ */ g.jsx("span", { className: w(), children: /* @__PURE__ */ g.jsx(
      "img",
      {
        className: u(),
        src: i.imgSrc,
        alt: "img"
      }
    ) }),
    /* @__PURE__ */ g.jsxs("div", { className: f(), children: [
      /* @__PURE__ */ g.jsx("div", { className: l(), children: i.name }),
      /* @__PURE__ */ g.jsx("div", { className: h(), children: i.role })
    ] })
  ] });
}, Fs = (
  /*tw*/
  re({
    slots: {
      base: "tw--flex-1 tw--w-full tw--px-[15px] tw--py-[11px] tw--rounded-[20px] tw--border select-none"
    },
    variants: {
      theme: {
        light: {
          base: "tw--bg-light-glazeBg tw--text-light-glazeText tw--border-light-seraph tw--font-medium"
        },
        dark: {
          base: "tw--bg-dark-glazeBg tw--text-dark-glazeText tw--border-dark-glaze"
        }
      }
    }
  })
), Ls = (
  /*tw*/
  re({
    slots: {
      base: "tw--text-[inherit]"
    },
    variants: {
      theme: {
        light: { base: "tw--text-light-status" },
        dark: { base: "tw--text-dark-seraph" }
      },
      outlined: {
        true: "tw--p-0.5 tw--bg-white tw--rounded-full tw--shadow",
        false: "tw--bg-[transparent]"
      }
    }
  })
), Ns = ({ text: e = "", onClick: t, e2e: i }) => {
  const { themeId: o } = k(ie), { base: a } = Fs({ theme: o });
  return /* @__PURE__ */ g.jsx(
    "button",
    {
      onClick: t,
      className: a(),
      type: "button",
      "data-e2e": i,
      children: e
    }
  );
}, nr = ({ children: e, outlined: t = !1, onClick: i, e2e: o = null, disabled: a = !1 }) => {
  const { themeId: u } = k(ie), { base: f } = Ls({ theme: u, outlined: t });
  return /* @__PURE__ */ g.jsx(
    "button",
    {
      onClick: i,
      className: f(),
      "data-e2e": o,
      disabled: a,
      type: "button",
      children: e
    }
  );
}, Pe = ({ eventType: e, systemType: t, utmParams: i, customerUuid: o, email: a, phone: u }) => {
  if (window.trackEventInGTM && window.tracking) {
    const f = window.tracking.event({
      eventType: e,
      systemType: t,
      uri: window.location.pathname,
      domain: window.location.hostname,
      email: a || null,
      phone: u || null,
      customerUuid: o,
      additionalData: {},
      utmParams: i
    });
    window.tracking.trackClient(f), window.trackEventInGTM && window.trackEventInGTM(f);
  }
};
window.tracking = window.tracking || null;
window.trackEventInGTM = window.trackEventInGTM || null;
const Ms = {
  transports: ["websocket"],
  upgrade: !1,
  pingInterval: 1e3 * 60 * 5,
  pingTimeout: 1e3 * 60 * 3,
  secure: !0,
  reconnect: !0
}, Us = (e, t) => e.map((i) => {
  var a, u;
  const o = i.sequence === t.sequence && i.type === t.type;
  return o && i.type === ce.text && t.text ? { ...i, text: i.text + t.text } : o && i.type === ce.buttons && ((a = t == null ? void 0 : t.buttons) != null && a.length) && ((u = i == null ? void 0 : i.buttons) != null && u.length) ? { ...i, buttons: [...i.buttons, ...t.buttons] } : i;
}), pi = tr({
  name: "chat",
  initialState: mt,
  reducers: {
    setOutgoing(e, { payload: t }) {
      e.outgoing = {
        term: jt(window.location.search, "utm_chat") || "",
        user_id: localStorage.getItem("__cid") || "",
        role: ae.user,
        message: t
      };
    },
    resetOutgoing(e) {
      e.outgoing = mt.outgoing;
    },
    setExistingHistory(e, { payload: t }) {
      return et(e, (i) => {
        if (e.historyIds.length > t.length) {
          e.historyIds.filter((a) => !t.find((u) => u.id === a)).forEach((a) => i.historyData[a].content = i.historyData[a].content.map((u) => ({ ...u, sent: !1, resend: !0 })));
          return;
        }
        i.historyIds = t.map(({ id: o }) => o), i.historyData = t.reduce((o, a) => ({
          ...o,
          [a.id]: Hs(a)
        }), {});
      });
    },
    addPredefinedAssistantMessage(e, { payload: t }) {
      const i = he();
      return et(e, (o) => {
        o.historyIds.push(i), o.historyData[i] = {
          id: i,
          role: ae.assistant,
          content: [
            { type: ce.text, text: t.content, sequence: 1 },
            { type: ce.buttons, buttons: t.buttons || [], sequence: 2 }
          ]
        };
      });
    },
    fillAssistantHistoryData(e, { payload: t }) {
      return et(e, (i) => {
        const o = t.id;
        if (!i.historyData[o]) {
          i.historyData[o] = { id: o, role: ae.assistant, content: [] }, i.historyIds.push(o);
          return;
        }
        if (!t.content)
          return;
        const a = t.content.type, u = { sequence: t.sequence || 1, type: a, [a]: t.content[t.content.type] };
        if (i.historyData[o].content.some((l) => l.sequence === u.sequence && l.type === u.type)) {
          i.historyData[o].content = Us(i.historyData[o].content, u);
          return;
        }
        i.historyData[o].content.push(u);
      });
    },
    fillUserHistoryData(e, { payload: { id: t, content: i } }) {
      return et(e, (o) => {
        let a;
        if (i.groupId && Object.entries(o.historyData).forEach(([u, f]) => {
          f.content.find((l) => l.groupId === i.groupId) && (a = u);
        }), a) {
          o.historyData[a].content.push(i);
          return;
        }
        o.historyData[t] || (o.historyData[t] = { id: t, role: ae.user, content: [i] }, o.historyIds.push(t));
      });
    },
    setIsLoading(e) {
      e.isLoading = !0;
    },
    resetIsLoading(e) {
      e.isLoading = mt.isLoading;
    },
    setTypingTimeoutExpired(e, { payload: t }) {
      e.typingTimeoutExpired = t;
    },
    setConnected(e, { payload: t }) {
      e.connected = t;
    },
    setClosed(e) {
      e.closed = !0;
    },
    hideResendIcon(e, { payload: t }) {
      return et(e, (i) => {
        i.historyData[t.itemId].content = i.historyData[t.itemId].content.map((o) => ({ ...o, sent: !0, resend: !1 }));
      });
    },
    showResendIcon(e, { payload: t }) {
      return et(e, (i) => {
        i.historyData[t.itemId].content = i.historyData[t.itemId].content.map((o) => ({ ...o, sent: !1, resend: !0 }));
      });
    },
    setLastGroupPointer(e, { payload: t }) {
      e.lastGroupId = t;
    },
    resendMessage(e, { payload: t }) {
    },
    setError(e, { payload: t }) {
      e.error = t;
    },
    resetError(e) {
      e.error = mt.error;
    },
    setIsStreaming(e, { payload: t }) {
      e.isStreaming = t;
    },
    resetHistory(e) {
      e.historyIds = mt.historyIds, e.historyData = mt.historyData;
    }
  }
}), hi = (e) => e.chat, Ds = (e) => e.chat.historyIds.find((t) => e.chat.historyData[t].role === ae.user), zs = (e, t) => e.sequence - t.sequence, {
  setOutgoing: Kr,
  resetOutgoing: Vs,
  setExistingHistory: Tn,
  addPredefinedAssistantMessage: mi,
  setIsLoading: yr,
  resetIsLoading: zt,
  setLastGroupPointer: $s,
  setTypingTimeoutExpired: wi,
  setError: Vt,
  resetError: br,
  setConnected: Sn,
  setClosed: ir,
  hideResendIcon: Gs,
  showResendIcon: Cn,
  resendMessage: gi,
  setIsStreaming: kn,
  fillAssistantHistoryData: Pn,
  fillUserHistoryData: Qt,
  resetHistory: Ws
} = pi.actions, qs = pi.reducer, Hs = (e) => {
  if (e.role === ae.assistant)
    return {
      // @ts-ignore;
      ...e,
      content: e.content.map((t) => t.sequence ? t : { ...t, sequence: Math.floor(Math.random() * 11) })
    };
  if (e.role == ae.user)
    return { ...e, content: [{ resend: !1, sent: !0, message: e.content }] };
}, Ys = () => {
  const e = Ye(), t = Xo(), { base: i } = Bs({ theme: t.theme }), o = (a) => {
    a.currentTarget.disabled = !0, Pe({
      eventType: _e.closeClicked,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid
    }), setTimeout(() => {
      e(ir());
    }, 500);
  };
  return /* @__PURE__ */ g.jsxs("div", { className: i(), "data-e2e": "chat-heading", children: [
    /* @__PURE__ */ g.jsx(di, {}),
    t.closeVisible && /* @__PURE__ */ g.jsx(nr, { e2e: "chat-close-btn", onClick: o, children: /* @__PURE__ */ g.jsx(
      "svg",
      {
        height: "24px",
        viewBox: "0 0 24 24",
        width: "24px",
        children: /* @__PURE__ */ g.jsxs(
          "g",
          {
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeWidth: "2",
            children: [
              /* @__PURE__ */ g.jsx(
                "line",
                {
                  x1: "6",
                  x2: "18",
                  y1: "6",
                  y2: "18"
                }
              ),
              /* @__PURE__ */ g.jsx(
                "line",
                {
                  x1: "6",
                  x2: "18",
                  y1: "18",
                  y2: "6"
                }
              )
            ]
          }
        )
      }
    ) })
  ] });
};
var Jr = { exports: {} }, gt = typeof Reflect == "object" ? Reflect : null, jn = gt && typeof gt.apply == "function" ? gt.apply : function(t, i, o) {
  return Function.prototype.apply.call(t, i, o);
}, Ht;
gt && typeof gt.ownKeys == "function" ? Ht = gt.ownKeys : Object.getOwnPropertySymbols ? Ht = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : Ht = function(t) {
  return Object.getOwnPropertyNames(t);
};
function Ks(e) {
  console && console.warn && console.warn(e);
}
var yi = Number.isNaN || function(t) {
  return t !== t;
};
function Y() {
  Y.init.call(this);
}
Jr.exports = Y;
Jr.exports.once = Qs;
Y.EventEmitter = Y;
Y.prototype._events = void 0;
Y.prototype._eventsCount = 0;
Y.prototype._maxListeners = void 0;
var Rn = 10;
function or(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(Y, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Rn;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || yi(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    Rn = e;
  }
});
Y.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Y.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || yi(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function bi(e) {
  return e._maxListeners === void 0 ? Y.defaultMaxListeners : e._maxListeners;
}
Y.prototype.getMaxListeners = function() {
  return bi(this);
};
Y.prototype.emit = function(t) {
  for (var i = [], o = 1; o < arguments.length; o++)
    i.push(arguments[o]);
  var a = t === "error", u = this._events;
  if (u !== void 0)
    a = a && u.error === void 0;
  else if (!a)
    return !1;
  if (a) {
    var f;
    if (i.length > 0 && (f = i[0]), f instanceof Error)
      throw f;
    var l = new Error("Unhandled error." + (f ? " (" + f.message + ")" : ""));
    throw l.context = f, l;
  }
  var h = u[t];
  if (h === void 0)
    return !1;
  if (typeof h == "function")
    jn(h, this, i);
  else
    for (var w = h.length, y = _i(h, w), o = 0; o < w; ++o)
      jn(y[o], this, i);
  return !0;
};
function xi(e, t, i, o) {
  var a, u, f;
  if (or(i), u = e._events, u === void 0 ? (u = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (u.newListener !== void 0 && (e.emit(
    "newListener",
    t,
    i.listener ? i.listener : i
  ), u = e._events), f = u[t]), f === void 0)
    f = u[t] = i, ++e._eventsCount;
  else if (typeof f == "function" ? f = u[t] = o ? [i, f] : [f, i] : o ? f.unshift(i) : f.push(i), a = bi(e), a > 0 && f.length > a && !f.warned) {
    f.warned = !0;
    var l = new Error("Possible EventEmitter memory leak detected. " + f.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    l.name = "MaxListenersExceededWarning", l.emitter = e, l.type = t, l.count = f.length, Ks(l);
  }
  return e;
}
Y.prototype.addListener = function(t, i) {
  return xi(this, t, i, !1);
};
Y.prototype.on = Y.prototype.addListener;
Y.prototype.prependListener = function(t, i) {
  return xi(this, t, i, !0);
};
function Js() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function vi(e, t, i) {
  var o = { fired: !1, wrapFn: void 0, target: e, type: t, listener: i }, a = Js.bind(o);
  return a.listener = i, o.wrapFn = a, a;
}
Y.prototype.once = function(t, i) {
  return or(i), this.on(t, vi(this, t, i)), this;
};
Y.prototype.prependOnceListener = function(t, i) {
  return or(i), this.prependListener(t, vi(this, t, i)), this;
};
Y.prototype.removeListener = function(t, i) {
  var o, a, u, f, l;
  if (or(i), a = this._events, a === void 0)
    return this;
  if (o = a[t], o === void 0)
    return this;
  if (o === i || o.listener === i)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete a[t], a.removeListener && this.emit("removeListener", t, o.listener || i));
  else if (typeof o != "function") {
    for (u = -1, f = o.length - 1; f >= 0; f--)
      if (o[f] === i || o[f].listener === i) {
        l = o[f].listener, u = f;
        break;
      }
    if (u < 0)
      return this;
    u === 0 ? o.shift() : Xs(o, u), o.length === 1 && (a[t] = o[0]), a.removeListener !== void 0 && this.emit("removeListener", t, l || i);
  }
  return this;
};
Y.prototype.off = Y.prototype.removeListener;
Y.prototype.removeAllListeners = function(t) {
  var i, o, a;
  if (o = this._events, o === void 0)
    return this;
  if (o.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : o[t] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete o[t]), this;
  if (arguments.length === 0) {
    var u = Object.keys(o), f;
    for (a = 0; a < u.length; ++a)
      f = u[a], f !== "removeListener" && this.removeAllListeners(f);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (i = o[t], typeof i == "function")
    this.removeListener(t, i);
  else if (i !== void 0)
    for (a = i.length - 1; a >= 0; a--)
      this.removeListener(t, i[a]);
  return this;
};
function Ei(e, t, i) {
  var o = e._events;
  if (o === void 0)
    return [];
  var a = o[t];
  return a === void 0 ? [] : typeof a == "function" ? i ? [a.listener || a] : [a] : i ? Zs(a) : _i(a, a.length);
}
Y.prototype.listeners = function(t) {
  return Ei(this, t, !0);
};
Y.prototype.rawListeners = function(t) {
  return Ei(this, t, !1);
};
Y.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Ii.call(e, t);
};
Y.prototype.listenerCount = Ii;
function Ii(e) {
  var t = this._events;
  if (t !== void 0) {
    var i = t[e];
    if (typeof i == "function")
      return 1;
    if (i !== void 0)
      return i.length;
  }
  return 0;
}
Y.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Ht(this._events) : [];
};
function _i(e, t) {
  for (var i = new Array(t), o = 0; o < t; ++o)
    i[o] = e[o];
  return i;
}
function Xs(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function Zs(e) {
  for (var t = new Array(e.length), i = 0; i < t.length; ++i)
    t[i] = e[i].listener || e[i];
  return t;
}
function Qs(e, t) {
  return new Promise(function(i, o) {
    function a(f) {
      e.removeListener(t, u), o(f);
    }
    function u() {
      typeof e.removeListener == "function" && e.removeListener("error", a), i([].slice.call(arguments));
    }
    Ti(e, t, u, { once: !0 }), t !== "error" && ea(e, a, { once: !0 });
  });
}
function ea(e, t, i) {
  typeof e.on == "function" && Ti(e, "error", t, i);
}
function Ti(e, t, i, o) {
  if (typeof e.on == "function")
    o.once ? e.once(t, i) : e.on(t, i);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function a(u) {
      o.once && e.removeEventListener(t, a), i(u);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var ta = Jr.exports;
const Fe = {
  type: $n,
  core: new ta.EventEmitter()
}, ra = (
  /*tw*/
  re({
    slots: {
      base: "tw--relative tw--flex tw--items-center",
      input: "tw--w-full tw--px-[15px] tw--py-[11px] tw--rounded-[20px] focus:tw--outline-none",
      loader: "tw--absolute tw--right-4 tw--top-[50%] tw--translate-y-[-50%]",
      spin: "tw--block tw--w-6 tw--h-6 tw--border-solid tw--border-[5px] tw--rounded-3xl tw--animate-rotate tw--m-auto"
    },
    variants: {
      theme: {
        light: {
          base: "",
          input: "tw--bg-light-lumina tw--text-light-zephyr-100 tw--font-semibold focus:!tw--bg-light-lumina",
          loader: "",
          spin: "tw--border-light-zephyr-200 tw--border-t-light-zephyr-600 tw--border-l-light-zephyr-600"
        },
        dark: {
          base: "",
          input: "tw--bg-dark-lumina tw--text-dark-zephyr-100 tw--font-bold focus:!tw--bg-dark-lumina",
          loader: "",
          spin: "w--border-dark-zephyr-200 tw--border-t-dark-zephyr-600 tw--border-l-dark-zephyr-600"
        }
      }
    }
  })
), Si = Fn((e, t) => {
  const {
    disabled: i,
    e2e: o,
    isLoading: a,
    onChange: u,
    onKeyUp: f,
    placeholder: l,
    type: h,
    value: w
  } = e, { themeId: y } = k(ie), { base: x, input: I, loader: T, spin: P } = ra({ theme: y });
  return /* @__PURE__ */ g.jsxs("div", { className: x(), children: [
    /* @__PURE__ */ g.jsx(
      "input",
      {
        className: I(),
        "data-e2e": o,
        disabled: a || i,
        onChange: u,
        onKeyUp: f,
        placeholder: l,
        ref: t,
        type: h,
        value: w
      }
    ),
    a && /* @__PURE__ */ g.jsx("span", { className: T(), children: /* @__PURE__ */ g.jsx("span", { className: P() }) })
  ] });
}), na = () => {
  const e = Ye(), { themeId: t } = k(ie), { connected: i } = k(hi), { isLoading: o } = k(Xn), { base: a, input: u, button: f } = fi({ theme: t }), [l, h] = Bt(""), [w, y] = Bt(null), x = k((V) => V.chat.lastGroupId), I = Nr(null);
  er(() => {
    setTimeout(() => {
      var V;
      (V = I.current) == null || V.focus();
    }, 500);
  }, []);
  const T = (V) => {
    h(V.target.value), R();
  }, P = (V) => {
    V.preventDefault(), l.trim() && e(Qt({ role: ae.user, id: he(), sequence: 1, content: { sequence: 1, message: l, groupId: x, resend: !1, sent: !0 } })), h(""), R();
  }, R = () => {
    w && clearTimeout(w);
    const V = setTimeout(() => {
      e(wi(!0)), e($s(he()));
    }, 3e3);
    y(V);
  };
  return /* @__PURE__ */ g.jsxs(
    "form",
    {
      className: a(),
      onSubmit: P,
      "data-e2e": "user-form",
      children: [
        /* @__PURE__ */ g.jsx("div", { className: u(), children: /* @__PURE__ */ g.jsx(
          Si,
          {
            disabled: !i,
            isLoading: o,
            name: "response",
            onChange: T,
            placeholder: "Write your message here...",
            type: "response",
            value: l,
            ref: I
          }
        ) }),
        /* @__PURE__ */ g.jsx("div", { className: f(), children: /* @__PURE__ */ g.jsx(nr, { onClick: P, disabled: !i, children: /* @__PURE__ */ g.jsx(
          "svg",
          {
            fill: "currentColor",
            viewBox: "0 0 24 24",
            width: "20px",
            height: "20px",
            children: /* @__PURE__ */ g.jsx(
              "path",
              {
                d: "M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z"
              }
            )
          }
        ) }) })
      ]
    }
  );
}, ia = () => {
  const e = Ye(), t = k((T) => T.meta), { themeId: i, translations: o } = k(ie), { isLoading: a } = k(Jn), { base: u, input: f, button: l } = fi({ theme: i }), [h, w] = Bt(""), y = Nr(null);
  er(() => {
    Pe({
      eventType: _e.emailField,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid
    }), setTimeout(() => {
      y.current && y.current.focus();
    }, 500);
  }, []);
  const x = (T) => {
    const P = T.target.value.trim();
    w(P);
  }, I = (T) => {
    T.preventDefault(), h !== "" && (e(Rr(!0)), e(No(h)), Fe.core.emit(Fe.type.email, { email: h }), w(""));
  };
  return /* @__PURE__ */ g.jsxs(
    "form",
    {
      className: u(),
      onSubmit: I,
      "data-e2e": "email-form",
      children: [
        /* @__PURE__ */ g.jsx("div", { className: f(), children: /* @__PURE__ */ g.jsx(
          Si,
          {
            e2e: "email-input",
            isLoading: a,
            name: "email",
            onChange: x,
            ref: y,
            placeholder: o.emailPlaceholder,
            type: "email",
            value: h
          }
        ) }),
        /* @__PURE__ */ g.jsx("div", { className: l(), children: /* @__PURE__ */ g.jsx(nr, { onClick: I, e2e: "email-validate-btn", children: /* @__PURE__ */ g.jsx(
          "svg",
          {
            fill: "currentColor",
            viewBox: "0 0 24 24",
            width: "20px",
            height: "20px",
            children: /* @__PURE__ */ g.jsx(
              "path",
              {
                d: "M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z"
              }
            )
          }
        ) }) })
      ]
    }
  );
}, Ci = (
  /*tw*/
  re({
    slots: {
      btn: "tw--flex-1 tw--space-x-2 tw--text-white tw--text-center tw--bg-dark-neon tw--max-w-[280px] tw--mx-auto tw--px-4 tw--py-3 tw--font-bold tw--rounded-[20px] tw--shadow-[0px_12px_24px_-4px_rgba(1,154,255,0.2)] tw--flex tw--justify-center tw--items-center tw--cursor-pointer tw--relative tw--w-full tw--text-xl max-h-[46px] tw--mb-[11px] customXs:max-h-[52px]",
      link: "tw--flex-1 tw--space-x-2 tw--text-white tw--text-center tw--bg-dark-neon tw--max-w-[280px] tw--mx-auto tw--px-4 tw--py-3 tw--font-extrabold tw--rounded-[20px] tw--shadow-[0px_12px_24px_-4px_rgba(1,154,255,0.2)] tw--flex tw--justify-center tw--items-center tw--cursor-pointer tw--relative tw--w-full tw--mb-[11px] spaced-letters max-h-[46px] customXs:max-h-[52px] customXs:tw--max-w-xs customXs:te--text-[20px] customXs:tw--text-xl"
    }
  })
), oa = (
  /*tw*/
  re({
    slots: {
      base: "tw--absolute tw--top-0 tw--left-0 tw--w-full tw--h-screen tw--flex tw--flex-col tw--justify-center tw--items-center tw--px-5 tw--z-50"
    },
    variants: {
      theme: {
        light: "tw--bg-light-lumina",
        dark: "tw--bg-dark-lumina"
      }
    }
  })
), sa = (
  /*tw*/
  re({
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
), aa = (
  /*tw*/
  re({
    slots: {
      base: "tw--absolute tw--top-[-30px] tw--right-[-10px] tw--w-6 tw--h-6 tw--p-1 tw--bg-white tw--rounded-full tw--cursor-pointer tw--text-muted-blue"
    }
  })
), la = re({
  slots: {
    base: "tw--mt-[30px] tw--flex tw--items-center tw--justify-center tw--text-[12.8px] tw--leading-[1.56] tw--text-light-seraph tw--font-bold",
    icon: "tw--mr-[5px]"
  }
}), ca = re({
  slots: {
    wrapper: "loader js-payment-loader tw--max-w-[335px] tw--overflow-hidden tw--relative tw--flex tw--w-full tw--flex-col tw--items-center tw--justify-center tw--rounded-xl tw--p-5",
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
}), ua = ({ config: e = { price: "", period: "" } }) => {
  const { translations: t } = k((x) => x.config), { wrapper: i, left: o, leftTop: a, icon: u, text: f, bottom: l, right: h, price: w, info: y } = sa();
  return /* @__PURE__ */ g.jsx("header", { children: /* @__PURE__ */ g.jsxs("div", { className: i(), children: [
    /* @__PURE__ */ g.jsxs("span", { className: o(), children: [
      /* @__PURE__ */ g.jsxs("div", { className: a(), children: [
        /* @__PURE__ */ g.jsx("span", { className: u(), children: /* @__PURE__ */ g.jsx("svg", { width: "26", height: "26", children: /* @__PURE__ */ g.jsx("use", { xlinkHref: "/img/sprite.svg#secured-check" }) }) }),
        /* @__PURE__ */ g.jsx("span", { className: f(), dangerouslySetInnerHTML: { __html: t.paymentHeaderTxt1 } })
      ] }),
      /* @__PURE__ */ g.jsx("div", { className: l(), children: t.paymentHeaderTxt2 })
    ] }),
    /* @__PURE__ */ g.jsxs("div", { className: h(), children: [
      /* @__PURE__ */ g.jsx("div", { className: w(), children: e.price }),
      /* @__PURE__ */ g.jsx("div", { className: y(), children: e.period })
    ] })
  ] }) });
}, fa = ({ text: e, onClick: t, e2e: i, disabled: o = !1 }) => {
  const { themeId: a } = k(ie), u = k((h) => h.meta), f = k((h) => h.intentions.email.current), { btn: l } = Ci({ theme: a });
  return er(() => {
    const h = {
      eventType: _e.addToCart,
      systemType: u.systemType,
      utmParams: u.marketing.lastUtmParams,
      customerUuid: u.cid,
      email: f
    };
    Pe(h), h.eventType = _e.priceSeen, Pe(h);
  }, []), /* @__PURE__ */ g.jsxs(
    "button",
    {
      onClick: t,
      className: l(),
      disabled: o,
      type: "button",
      "data-e2e": i,
      children: [
        /* @__PURE__ */ g.jsxs(
          "svg",
          {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            children: [
              /* @__PURE__ */ g.jsx(
                "path",
                {
                  opacity: ".3",
                  d: "M4 12h16v6H4v-6zm0-6h16v2H4V6z",
                  fill: "currentColor"
                }
              ),
              /* @__PURE__ */ g.jsx("path", { d: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z", fill: "currentColor" })
            ]
          }
        ),
        /* @__PURE__ */ g.jsx("span", { children: e })
      ]
    }
  );
}, da = ({ onClick: e }) => {
  const { base: t } = aa();
  return /* @__PURE__ */ g.jsx(
    "button",
    {
      type: "button",
      className: t(),
      onClick: e,
      children: /* @__PURE__ */ g.jsx(
        "svg",
        {
          fill: "none",
          viewBox: "0 0 18 18",
          children: /* @__PURE__ */ g.jsx(
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
}, pa = () => {
  const { base: e, icon: t } = la();
  return /* @__PURE__ */ g.jsxs("footer", { className: e(), children: [
    /* @__PURE__ */ g.jsx(
      "svg",
      {
        className: t(),
        fill: "none",
        height: "12",
        width: "12",
        viewBox: "0 0 12 12",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ g.jsx(
          "path",
          {
            d: "M9 4h-.5V3a2.5 2.5 0 0 0-5 0v1H3c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 8.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM7.55 4h-3.1V3c0-.855.695-1.55 1.55-1.55.855 0 1.55.695 1.55 1.55v1z",
            fill: "currentColor"
          }
        )
      }
    ),
    /* @__PURE__ */ g.jsx("span", { children: "SSL Secure Connection" })
  ] });
}, ha = ({ texts: e = [], title: t = "" }) => {
  const { themeId: i } = k(ie), { wrapper: o, inner: a, dots: u, dotsIn: f, icon: l, progressCheckmark: h, panelTitle: w, spinningTexts: y, filmContainer: x, film: I } = ca({ theme: i });
  return /* @__PURE__ */ g.jsxs(
    "div",
    {
      className: o(),
      children: [
        /* @__PURE__ */ g.jsx("div", { className: a(), children: /* @__PURE__ */ g.jsx("div", { className: u(), children: /* @__PURE__ */ g.jsx(
          "span",
          {
            className: f()
          }
        ) }) }),
        /* @__PURE__ */ g.jsxs("div", { className: h(), children: [
          /* @__PURE__ */ g.jsx("span", { className: l(), children: /* @__PURE__ */ g.jsxs(
            "svg",
            {
              width: "24",
              height: "24",
              fill: "none",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                /* @__PURE__ */ g.jsx(
                  "circle",
                  {
                    cx: "12",
                    cy: "12",
                    r: "12"
                  }
                ),
                /* @__PURE__ */ g.jsx(
                  "path",
                  {
                    d: "m9.75 15.127-2.602-2.602a.748.748 0 0 0-1.058 1.057l3.135 3.136a.747.747 0 0 0 1.058 0l7.935-7.935a.748.748 0 0 0-1.058-1.058l-7.41 7.402z",
                    fill: "white"
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ g.jsx("p", { className: w(), children: t })
        ] }),
        /* @__PURE__ */ g.jsx("div", { className: x(), children: /* @__PURE__ */ g.jsx("div", { className: I(), children: e.map((T) => /* @__PURE__ */ g.jsx("div", { className: y(), children: T }, T)) }) })
      ]
    }
  );
}, ma = Fn((e, t) => {
  const { link: i } = Ci(), { href: o, text: a, onClick: u, e2e: f = null } = e;
  return /* @__PURE__ */ g.jsx(
    "a",
    {
      className: i(),
      "data-e2e": f,
      href: o,
      onClick: u,
      ref: t,
      children: a
    }
  );
}), wa = (
  /*tw*/
  re({
    slots: {
      base: "loader js-payment-loader tw--hidden tw--fixed tw--left-0 tw--top-0 tw--z-[101] tw--m-0 tw--flex tw--h-screen tw--w-screen tw--items-center tw--justify-center tw--px-5"
    },
    variants: {
      theme: {
        light: {
          base: "tw--bg-light-whisper"
        },
        dark: {
          base: "tw--bg-dark-whisper"
        }
      }
    }
  })
), ga = ({ children: e }) => {
  const { themeId: t } = k(ie), { base: i } = wa({ theme: t });
  return /* @__PURE__ */ g.jsx("div", { className: i(), children: e });
}, ya = ({ onClose: e }) => {
  const { displayPlanPrice: t, billingFrequencyTmsg: i } = k((f) => f.meta.pd), { translations: o, themeId: a } = k((f) => f.config), { base: u } = oa({ theme: a });
  return /* @__PURE__ */ g.jsx("div", { className: u(), children: /* @__PURE__ */ g.jsxs(
    "div",
    {
      id: "chat-payment-view",
      className: "light-pink-blue tw--max-w-[500px] tw--bg-white tw--w-full tw--min-h-[400px] tw--relative tw--rounded-lg tw--flex tw--flex-col tw--p-7",
      children: [
        /* @__PURE__ */ g.jsx(ga, { children: /* @__PURE__ */ g.jsx(ha, { texts: o.loaderTexts, title: o.tm1224 }) }),
        /* @__PURE__ */ g.jsx(da, { onClick: e }),
        /* @__PURE__ */ g.jsx("div", { id: "primer-form-container", className: "tw--w-full h-full", children: /* @__PURE__ */ g.jsx(ua, { config: { price: t, period: i } }) }),
        /* @__PURE__ */ g.jsx(pa, {})
      ]
    }
  ) });
}, ba = (
  /*tw*/
  re({
    slots: {
      base: "tw--pt-10 tw--w-full tw--h-full tw--pb-5 tw--px-5 tw--overflow-y-scroll tw--flex tw--flex-col-reverse tw--translate-z-0",
      second: "tw--mt-0 tw--mb-auto",
      date: "tw--text-center tw--text-sm tw--pb-[5px] tw--opacity-40"
    },
    variants: {
      theme: {
        light: {
          base: "tw--text-light-zephyr-100 tw--font-medium"
        },
        dark: {
          base: "tw--text-dark-zephyr-100"
        }
      }
    }
  })
), xa = (
  /*tw*/
  re({
    slots: {
      base: "tw--flex tw--flex-col tw--items-center tw--w-full tw--mx-auto tw--pt-5 tw--pb-10",
      title: "tw--pb-[30px] tw--max-w-[400px] tw--text-center tw--mx-[30px] select-none"
    },
    variants: {
      theme: {
        light: { title: "tw--font-medium" },
        dark: { title: "" }
      }
    }
  })
), va = (
  /*tw*/
  re({
    slots: {
      base: "tw--grid tw--break-words"
    }
  })
), Ea = (
  /* tw */
  re({
    slots: {
      base: "after:tw--inline-block after:tw--ml-1 after:tw--h-4 after:tw--w-1 select-none"
    },
    variants: {
      isTyping: {
        true: "after:tw--animate-blink",
        false: "after:tw--hidden"
      },
      theme: {
        light: "after:tw--bg-light-zephyr-100",
        dark: "after:tw--bg-dark-zephyr-100"
      }
    }
  })
), ki = (
  /*tw*/
  re({
    slots: {
      base: "tw--relative tw--max-w-[375px] tw--whitespace-pre-wrap tw--rounded-[20px] tw--mb-5 tw--space-y-5",
      action: "tw--absolute tw--bottom-[-16px] tw--right-[-10px]",
      separator: "tw--px-[15px] tw--py-[11px] tw--rounded-[20px] tw--w-fit tw--ml-auto tw--mr-0"
    },
    variants: {
      theme: {
        light: {
          action: "tw--text-light-seraph",
          base: "tw--font-medium"
        },
        dark: {
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
        class: "tw--bg-light-lumina tw--px-[15px] tw--py-[11px]"
      },
      {
        slots: ["base"],
        theme: "dark",
        type: "assistant",
        class: "tw--bg-dark-lumina tw--px-[15px] tw--py-[11px]"
      },
      {
        slots: ["separator"],
        theme: "dark",
        type: "user",
        class: "tw--bg-dark-seraph"
      },
      {
        slots: ["separator"],
        theme: "light",
        type: "user",
        class: "tw--bg-light-seraph tw--text-white"
      }
    ]
  })
), Ia = re({
  slots: {
    dotFirst: "tw--inline-block tw--h-[12px] tw--w-[12px] tw--rounded-full tw--opacity-40 tw--animate-wave",
    dotSecond: "tw--inline-block tw--h-[12px] tw--w-[12px] tw--rounded-full tw--opacity-40 tw--animate-wave-delay",
    dotThird: "tw--inline-block tw--h-[12px] tw--w-[12px] tw--rounded-full tw--opacity-40 tw--animate-wave-delay-2"
  },
  compoundSlots: [
    {
      slots: ["dotFirst", "dotSecond", "dotThird"],
      theme: "light",
      class: "tw--bg-light-zephyr-100"
    },
    {
      slots: ["dotFirst", "dotSecond", "dotThird"],
      theme: "dark",
      class: "tw--bg-dark-zephyr-100"
    }
  ]
}), _a = () => {
  const { themeId: e } = k(ie), { dotFirst: t, dotSecond: i, dotThird: o } = Ia({ theme: e });
  return /* @__PURE__ */ g.jsxs("div", { className: "tw--ml-7 tw--space-x-[6px]", "data-e2e": "stream-response-loader", children: [
    /* @__PURE__ */ g.jsx("span", { className: t() }),
    /* @__PURE__ */ g.jsx("span", { className: i() }),
    /* @__PURE__ */ g.jsx("span", { className: o() })
  ] });
}, Ta = "chatSeen", Pi = "linkClickedFromChat", Sa = "chatConversationFinishedTimeStamp", Ca = "cid", ka = 1e3, Pa = () => {
  const e = Ye(), t = Zo(), i = Nr(null), [o, a] = Bt(!1), u = (x) => {
    e(Do(x));
  }, f = (x) => {
    x.currentTarget.disabled = !0, Fe.core.emit(Fe.type.destroy), u(!1), a(!1);
  }, l = () => {
    e(mi({ content: t.translations.tm1226 })), e(Uo(!0)), e(Vo(!1)), e(Hr({ href: "/", isVisible: !0, text: t.translations.ctaTextContent })), u(!1), setTimeout(() => {
      i.current && i.current.click();
    }, 7e3);
  }, h = (x) => {
    e($o(x));
  }, w = () => {
    Fe.core.emit(Fe.type.payment, { setIsPaymentContainerVisible: u, onPaymentSuccess: l, onError: h }), a(!0);
  }, y = (x) => {
    localStorage.setItem(Pi, x.currentTarget.href), Pe({
      eventType: _e.linkClicked,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid,
      email: t.current
    }), e(ir());
  };
  return /* @__PURE__ */ g.jsxs("div", { className: "tw--space-y-[11px] tw--pb-[11px]", "data-e2e": "chat-foot", children: [
    t.error && /* @__PURE__ */ g.jsx("div", { className: "tw--pl-[35px] tw--text-[#ff0043] tw--font-medium", children: t.error }),
    t.isPaymentFormVisible && /* @__PURE__ */ g.jsx(ya, { onClose: f }),
    t.isLoading && /* @__PURE__ */ g.jsx(_a, {}),
    t.isCtaVisible && /* @__PURE__ */ g.jsx(
      ma,
      {
        ref: i,
        text: t.ctaText,
        onClick: y,
        href: t.ctaHref,
        e2e: "quiz-trigger-btn"
      }
    ),
    !t.isStreaming && t.isEmailFormVisible && /* @__PURE__ */ g.jsx(ia, {}),
    !t.isStreaming && t.isResponseFormVisible && !t.isCtaVisible && /* @__PURE__ */ g.jsx(na, {}),
    t.isPaymentButtonVisible && /* @__PURE__ */ g.jsx(
      fa,
      {
        text: t.translations.payButton,
        onClick: w,
        disabled: o,
        e2e: "payment-form-trigger-btn"
      }
    )
  ] });
}, ja = ({ titleTxt: e = "" }) => {
  const { themeId: t } = k(ie), { base: i, title: o } = xa({ theme: t });
  return /* @__PURE__ */ g.jsxs("div", { className: i(), children: [
    o && /* @__PURE__ */ g.jsx("div", { className: o(), children: e }),
    /* @__PURE__ */ g.jsx(di, { orientation: Ur.vertical })
  ] });
}, Ra = (
  /*tw*/
  re({
    slots: {
      base: "tw--flex-1 tw--w-full tw--px-[15px] tw--py-[11px] tw--rounded-[20px] tw--border select-none tw--text-center"
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
/*tw*/
re({
  slots: {
    base: "tw--flex-1 tw--px-4 tw--py-2"
  }
});
const Ba = ({ text: e, href: t, onClick: i }) => {
  const { themeId: o } = k(ie), { base: a } = Ra({ theme: o });
  return /* @__PURE__ */ g.jsx(
    "a",
    {
      href: t,
      onClick: i,
      className: a(),
      children: e
    }
  );
}, Aa = ({ options: e = [] }) => {
  const t = Ye(), i = k(Ft), o = !k(Ds), a = (f, l) => {
    t(Qt({ id: he(), sequence: 1, role: ae.user, content: { sequence: 1, message: f, resend: !1, sent: !0, groupId: "" } })), t(Kr(f)), o && Pe({
      eventType: _e.buttonClick + l,
      systemType: i.systemType,
      utmParams: i.marketing.lastUtmParams,
      customerUuid: i.cid
    });
  }, u = (f) => {
    t(Qt({ id: he(), sequence: 1, role: ae.user, content: { sequence: 1, message: f, resend: !1, sent: !0, groupId: "" } }));
  };
  return [...e].sort((f, l) => f.sequence - l.sequence).map(({ id: f, text: l, value: h, link: w, sequence: y, noStream: x }) => w ? /* @__PURE__ */ g.jsx(
    Ba,
    {
      text: h,
      href: w
    },
    he()
  ) : /* @__PURE__ */ g.jsx(
    Ns,
    {
      text: h,
      onClick: x ? () => u(h) : () => a(h, y),
      e2e: "option-button"
    },
    he()
  ));
}, Oa = (e) => {
  const t = (o) => /[?&]([^=#]+)=([^&#]*)/g.test(o);
  let i;
  if (window.location.search) {
    let o = new URLSearchParams(window.location.search);
    o.append(Ta, "true"), o.append(Ca, localStorage.getItem("__cid") || ""), i = "/?" + o;
  } else
    i = "";
  return t(e) ? e : e + i;
}, Fa = { constructLink: Oa }, La = ({ properties: e }) => {
  const { translations: t } = k(ie), { cid: i, marketing: o, systemType: a } = k(Ft), u = Ye(), f = e.href ? Fa.constructLink(e.href) : "#";
  er(() => {
    u(Hr({
      isVisible: !0,
      href: f,
      text: t.mealButton
    }));
  });
  const l = (h) => {
    localStorage.setItem(Pi, h.currentTarget.href), Pe({
      eventType: _e.linkClicked,
      systemType: a,
      utmParams: o.lastUtmParams,
      customerUuid: i
    }), u(ir());
  };
  return /* @__PURE__ */ g.jsx(
    "a",
    {
      href: f,
      onClick: l,
      className: "tw--underline",
      children: e.href
    }
  );
}, Na = ({ message: e, itemId: t }) => {
  const { themeId: i } = k(ie), { isStreaming: o } = k(hi), { pd: a } = k(Ft), u = k((h) => h.chat.historyIds.length - 1 === h.chat.historyIds.indexOf(t)), { base: f } = Ea({ isTyping: o && u, theme: i }), l = [...e.content].sort(zs);
  return /* @__PURE__ */ g.jsx(g.Fragment, { children: l.map((h) => {
    var w, y, x, I;
    if (h.type === ce.text)
      return /* @__PURE__ */ g.jsx(
        "div",
        {
          className: "tw--flex tw--flex-col tw--space-y-[10px]",
          children: /* @__PURE__ */ g.jsx(
            "span",
            {
              className: f(),
              "data-e2e": "stream-assistant-msg",
              children: /* @__PURE__ */ g.jsx(
                Yi,
                {
                  components: {
                    a(T) {
                      return /* @__PURE__ */ g.jsx(La, { properties: T });
                    }
                  },
                  children: h[h.type]
                }
              )
            }
          )
        },
        he()
      );
    if (h.type === ce.buttons && u)
      return /* @__PURE__ */ g.jsx("div", { className: "tw--flex tw--flex-col tw--space-y-[10px]", children: /* @__PURE__ */ g.jsx(Aa, { options: h[h.type] }) }, he());
    if (h.type === ce.video)
      return /* @__PURE__ */ g.jsx(
        "iframe",
        {
          className: "w-full tw--h-80 tw--py-4",
          title: ((w = h[h.type]) == null ? void 0 : w.title) || "Missing title",
          src: ((y = h[h.type]) == null ? void 0 : y.url) + "?enablejsapi=1&rel=0",
          allow: "fullscreen"
        },
        he()
      );
    if (h.type === ce.image)
      return /* @__PURE__ */ g.jsx(
        "img",
        {
          className: "w-full tw--h-auto tw--py-4",
          src: (x = h[h.type]) == null ? void 0 : x.url,
          alt: ((I = h[h.type]) == null ? void 0 : I.alt) || "chat-image"
        },
        he()
      );
    if (h.type === ce.payment)
      return `${h[h.type]} ${a.displayPlanPrice} ${a.billingFrequencyTmsg}`;
    if (h.type === ce.email)
      return h[h.type];
  }) });
}, Ma = ({ itemId: e }) => {
  const { themeId: t } = k(ie), i = k((o) => o.chat.historyData[e]);
  return i && /* @__PURE__ */ g.jsx("div", { className: ki({ theme: t, type: i.role }).base(), children: i.role === ae.assistant ? /* @__PURE__ */ g.jsx(
    Na,
    {
      message: i,
      itemId: e
    }
  ) : i.content.map((o) => /* @__PURE__ */ g.jsx(Da, { record: { ...o, itemId: e } }, he())) });
}, Ua = () => {
  const { themeId: e } = k(ie), { aiProfile: t } = k(ie), i = k((w) => w.chat.historyIds || []), o = k((w) => w.chat.historyData[i[0]]), { base: a, second: u, date: f } = ba({ theme: e }), { base: l } = va({ theme: e }), h = bo((o == null ? void 0 : o.content[0].time) || (/* @__PURE__ */ new Date()).getTime());
  return /* @__PURE__ */ g.jsx("div", { className: a(), children: /* @__PURE__ */ g.jsxs("div", { className: u(), "data-e2e": "history-container", children: [
    /* @__PURE__ */ g.jsx(ja, { titleTxt: t.welcome }),
    /* @__PURE__ */ g.jsx("div", { className: f(), "data-e2e": "stream-assistant-msg-date", children: h }),
    i.map((w) => /* @__PURE__ */ g.jsx(
      "div",
      {
        className: l(),
        "data-e2e": "history-item",
        children: /* @__PURE__ */ g.jsx(Ma, { itemId: w })
      },
      he()
    ))
  ] }) });
}, Da = ({ record: e }) => {
  const t = Ye(), { themeId: i } = k(ie), { action: o, separator: a } = ki({ theme: i, type: ae.user }), u = () => {
    t(gi(e));
  };
  return /* @__PURE__ */ g.jsxs("div", { className: a(), children: [
    /* @__PURE__ */ g.jsx("span", { children: e.message }),
    e.resend && !e.sent && /* @__PURE__ */ g.jsx("div", { className: o(), children: /* @__PURE__ */ g.jsx(nr, { outlined: !0, onClick: () => u(), children: /* @__PURE__ */ g.jsxs(
      "svg",
      {
        fill: "currentColor",
        viewBox: "0 0 24 24",
        width: "20px",
        height: "20px",
        children: [
          /* @__PURE__ */ g.jsx("path", { fill: "none", d: "M0 0h24v24H0V0z" }),
          /* @__PURE__ */ g.jsx("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" })
        ]
      }
    ) }) })
  ] });
}, za = ({ config: e }) => {
  const t = Ye();
  return t(Wo(e.meta)), t(qn(e.app)), /* @__PURE__ */ g.jsx(
    As,
    {
      head: /* @__PURE__ */ g.jsx(Ys, {}),
      stream: /* @__PURE__ */ g.jsx(Ua, {}),
      foot: /* @__PURE__ */ g.jsx(Pa, {})
    }
  );
};
var Xr = {}, Zr = {};
Zr.__esModule = !0;
Zr.default = Ga;
function Yt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Yt = function(i) {
    return typeof i;
  } : Yt = function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  }, Yt(e);
}
function xr() {
}
var Va = {
  getItem: xr,
  setItem: xr,
  removeItem: xr
};
function $a(e) {
  if ((typeof self > "u" ? "undefined" : Yt(self)) !== "object" || !(e in self))
    return !1;
  try {
    var t = self[e], i = "redux-persist ".concat(e, " test");
    t.setItem(i, "test"), t.getItem(i), t.removeItem(i);
  } catch {
    return ye.process.env.NODE_ENV !== "production" && console.warn("redux-persist ".concat(e, " test failed, persistence will be disabled.")), !1;
  }
  return !0;
}
function Ga(e) {
  var t = "".concat(e, "Storage");
  return $a(t) ? self[t] : (ye.process.env.NODE_ENV !== "production" && console.error("redux-persist failed to create sync storage. falling back to noop storage."), Va);
}
Xr.__esModule = !0;
Xr.default = Ha;
var Wa = qa(Zr);
function qa(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ha(e) {
  var t = (0, Wa.default)(e);
  return {
    getItem: function(o) {
      return new Promise(function(a, u) {
        a(t.getItem(o));
      });
    },
    setItem: function(o, a) {
      return new Promise(function(u, f) {
        u(t.setItem(o, a));
      });
    },
    removeItem: function(o) {
      return new Promise(function(a, u) {
        a(t.removeItem(o));
      });
    }
  };
}
var ji = void 0, Ya = Ka(Xr);
function Ka(e) {
  return e && e.__esModule ? e : { default: e };
}
var Ja = (0, Ya.default)("local");
ji = Ja;
let le;
const Xa = (e) => (t) => (i) => {
  const { meta: o, chat: a } = e.getState(), u = () => {
    const { config: w } = e.getState();
    e.dispatch(zt()), e.dispatch(Vt(w.translations.error));
  }, f = () => {
    e.dispatch(Cn({ itemId: a.historyIds.pop() })), u();
  }, l = (w) => {
    if (w.role === ae.user && e.dispatch(yr()), le && le.connected && w.message.trim() !== "") {
      le.emit(Ee.chat, { time: (/* @__PURE__ */ new Date()).getTime(), ...w }, Bn(f)), e.dispatch(br());
      return;
    }
    f();
  }, h = (w) => {
    e.dispatch(Gs(w)), e.dispatch(yr());
    const y = () => {
      const { config: x } = e.getState();
      e.dispatch(Cn(w)), e.dispatch(zt()), e.dispatch(Vt(x.translations.error));
    };
    le && le.connected && w.message.trim() !== "" ? (le.volatile.emit(
      Ee.chat,
      {
        role: ae.user,
        message: w.message,
        term: jt(window.location.search, "utm_chat"),
        user_id: o.cid,
        region: o.region
      },
      Bn(y)
    ), e.dispatch(br())) : y();
  };
  if (Kr.match(i) && l({
    role: ae.user,
    message: i.payload,
    term: jt(window.location.search, "utm_chat") ?? "",
    user_id: o.cid,
    region: o.region,
    messageId: [...a.historyIds].pop()
  }), ir.match(i)) {
    const w = document.querySelector("#chatbot-container");
    document.body && w && (w.innerHTML = "", document.body.classList.remove("scroll-stop"));
    const y = new URL(window.location.href);
    y.search = "", localStorage.setItem(Sa, (/* @__PURE__ */ new Date()).getTime().toString()), window.location.href = y.toString(), le && le.close();
  }
  if (wi.match(i) && i.payload) {
    const w = [...a.historyIds].pop(), y = a.historyData[w].content.map(({ message: x }) => x).join(`
`);
    y.trim() !== "" && l({
      role: ae.user,
      message: y,
      term: jt(window.location.search, "utm_chat") || "",
      user_id: o.cid,
      region: o.region,
      messageId: w
    });
  }
  if (gi.match(i) && h(i.payload), !qn.match(i))
    return t(i);
  e.dispatch(yr()), le = Xi.connect(i.payload.chatUrl, { query: "cid=" + o.cid, ...Ms }), le.on(Ee.connect, () => {
    const { meta: w } = e.getState();
    le.sendBuffer = [], le.emit(Ee.chatHistory, { user_id: w.cid, region: w.region }), e.dispatch(Sn(!0));
  }), le.on(Ee.chatHistory, ({ history: w, errors: y, region: x }) => {
    e.dispatch(zt()), e.dispatch(Yo(x));
    const { config: I, meta: T } = e.getState();
    if (y.length) {
      e.dispatch(Vt(y[0]));
      return;
    }
    if (w.length) {
      e.dispatch(Tn(w));
      const P = [...w].pop();
      P && Array.isArray(P.content) && e.dispatch(wr(P.content));
      return;
    }
    e.dispatch(Ws()), e.dispatch(Tn(I.aiProfile.initialMessage)), e.dispatch(wr([...I.aiProfile.initialMessage].pop().content)), I.aiProfile.initialMessage.forEach((P) => l({
      role: ae.assistant,
      term: jt(window.location.search, "utm_chat") || "",
      user_id: T.cid,
      message: JSON.stringify(P.content),
      messageId: P.id,
      region: T.region
    }));
  }), le.on(Ee.streamStart, (w) => {
    e.dispatch(kn(!0)), e.dispatch(zt()), e.dispatch(Vs()), e.dispatch(br()), e.dispatch(Pn({ id: w.id }));
  }), le.on(Ee.streamData, (w) => {
    var I;
    const y = { id: w.id, sequence: w.sequence, content: { type: w.type, [w.type]: w[w.type], sequence: w.sequence } };
    e.dispatch(Pn(y));
    const { chat: x } = e.getState();
    e.dispatch(wr(x.historyData[w.id].content)), (I = w.errors) != null && I.length && !x.error && e.dispatch(Vt(w.errors[0]));
  }), le.on(Ee.streamEnd, (w) => {
    e.dispatch(kn(!1));
  }), le.on(Ee.streamError, u), le.on(Ee.error, u), le.on(Ee.disconnect, () => {
    e.dispatch(Sn(!1));
  }), t(i);
}, Bn = (e, t = 5e3) => {
  let i = !1;
  const o = setTimeout(() => {
    i || (i = !0, e());
  }, t);
  return () => {
    i || (i = !0, clearTimeout(o));
  };
};
function Za() {
  if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ == "object")
    for (const e in window.__REACT_DEVTOOLS_GLOBAL_HOOK__)
      e === "renderers" ? window.__REACT_DEVTOOLS_GLOBAL_HOOK__[e] = /* @__PURE__ */ new Map() : window.__REACT_DEVTOOLS_GLOBAL_HOOK__[e] = typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__[e] == "function" ? () => {
      } : null;
}
const Qa = (e) => (t) => {
  const i = (o) => {
    const { meta: a } = e.getState();
    return a.pd ? (o.billingFrequencyTmsg = o.billingOptionType === "one-time" ? a.pd.oneTimer : a.pd.subscriberBillingFrequency.replace("{1}", o.frequencyInMonths), o) : {};
  };
  return Fe.core.on(Fe.type.emailSuccess, () => {
    const { meta: o, intentions: a } = e.getState();
    e.dispatch(Rr(!1)), e.dispatch(yn("")), e.dispatch(
      Qt({
        id: he(),
        role: ae.user,
        sequence: 1,
        content: { sequence: 1, message: a.email.current, resend: !1, sent: !0, groupId: "" }
      })
    ), e.dispatch(Kr(a.email.current)), e.dispatch(Mo(!0)), e.dispatch(zo(!1)), Pe({
      eventType: _e.emailEntered,
      systemType: o.systemType,
      utmParams: o.marketing.lastUtmParams,
      customerUuid: o.cid,
      email: a.email.current
    });
  }), Fe.core.on(Fe.type.emailError, (o) => {
    const { meta: a, intentions: u, config: f } = e.getState(), { tm716: l, tm526: h, tm715: w, tm505: y } = f.translations;
    if (e.dispatch(Rr(!1)), o.status === 409) {
      e.dispatch(mi({
        content: l,
        buttons: [
          { sequence: 1, id: "opt-1", text: h, value: "link", link: o.data.buttonLink, noStream: !0 },
          { sequence: 2, id: "opt-2", text: w, value: "button", link: "", noStream: !0 }
        ]
      })), Pe({
        eventType: _e.emailExist,
        systemType: a.systemType,
        utmParams: a.marketing.lastUtmParams,
        customerUuid: a.cid,
        email: u.email.current
      });
      return;
    }
    o.status === 422 && (e.dispatch(yn(o.errors.email[0] || y)), Pe({
      eventType: _e.emailWrong,
      systemType: a.systemType,
      utmParams: a.marketing.lastUtmParams,
      customerUuid: a.cid,
      email: u.email.current
    }));
  }), An("marketing", e, qo), An("__pd", e, Ho, i), (o) => {
    if (Hr.match(o) && o.payload.isVisible) {
      const { meta: a, intentions: u } = e.getState();
      Pe({
        eventType: _e.linkProvided,
        systemType: a.systemType,
        utmParams: a.marketing.lastUtmParams,
        customerUuid: a.cid,
        email: u.email.current
      });
    }
    t(o);
  };
}, An = (e, t, i, o) => {
  const a = setInterval(() => {
    let u = localStorage.getItem(e) || "";
    try {
      u = JSON.parse(u);
    } catch {
      u = localStorage.getItem(e) || "";
    }
    o && u && (u = o(u)), o && u && (t.dispatch(i(u)), clearInterval(a));
  }, ka);
};
Za();
const el = {
  key: "root",
  storage: ji,
  whitelist: ["chat", "meta", "config"]
}, Ri = qi({
  reducer: Ki(el, Hi({
    meta: Ko,
    config: vo,
    chat: qs,
    intentions: Go
  })),
  middleware: (e) => e({ serializableCheck: !1 }).concat(Xa, Qa)
}), tl = Ji(Ri), xl = (e) => {
  Pt.createRoot(e.root).render(
    /* @__PURE__ */ g.jsx(Wi, { store: Ri, children: /* @__PURE__ */ g.jsx(Vn, { persistor: tl, children: /* @__PURE__ */ g.jsx(za, { config: e.initialConfig }) }) })
  );
};
export {
  xl as ReactBotClient,
  xl as default,
  Fe as intent
};
//# sourceMappingURL=index.es.js.map
