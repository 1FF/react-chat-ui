(function(){"use strict";try{if(typeof document<"u"){const t=document.createElement("style");t.id="react-tw-ai-client",t.appendChild(document.createTextNode('*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:Plus Jakarta Sans,Roboto,Mulish,Exo,Helvetica,Arial,sans-serif;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.tw--pointer-events-none{pointer-events:none}.tw--pointer-events-auto{pointer-events:auto}.tw--fixed{position:fixed}.tw--absolute{position:absolute}.tw--relative{position:relative}.tw---top-1\\/2{top:-50%}.tw--bottom-0{bottom:0}.tw--bottom-1{bottom:.25rem}.tw--bottom-\\[-16px\\]{bottom:-16px}.tw--left-0{left:0}.tw--right-0{right:0}.tw--right-4{right:1rem}.tw--right-\\[-10px\\]{right:-10px}.tw--top-0{top:0}.tw--top-8{top:2rem}.tw--top-\\[-30px\\]{top:-30px}.tw--top-\\[50\\%\\]{top:50%}.tw--z-50{z-index:50}.tw--z-\\[101\\]{z-index:101}.tw--m-0{margin:0}.tw--m-auto{margin:auto}.tw--mx-10{margin-left:2.5rem;margin-right:2.5rem}.tw--mx-\\[30px\\]{margin-left:30px;margin-right:30px}.tw--mx-auto{margin-left:auto;margin-right:auto}.tw--my-4{margin-top:1rem;margin-bottom:1rem}.tw--mb-5{margin-bottom:1.25rem}.tw--mb-6{margin-bottom:1.5rem}.tw--mb-7{margin-bottom:1.75rem}.tw--mb-\\[11px\\]{margin-bottom:11px}.tw--mb-auto{margin-bottom:auto}.tw--ml-7{margin-left:1.75rem}.tw--ml-auto{margin-left:auto}.tw--mr-0{margin-right:0}.tw--mr-5{margin-right:1.25rem}.tw--mr-\\[5px\\]{margin-right:5px}.tw--mt-0{margin-top:0}.tw--mt-24{margin-top:6rem}.tw--mt-\\[11px\\]{margin-top:11px}.tw--mt-\\[30px\\]{margin-top:30px}.tw--box-border{box-sizing:border-box}.tw--box-content{box-sizing:content-box}.tw--block{display:block}.tw--inline-block{display:inline-block}.tw--flex{display:flex}.tw--grid{display:grid}.tw--hidden{display:none}.tw--h-16{height:4rem}.tw--h-4{height:1rem}.tw--h-6{height:1.5rem}.tw--h-8{height:2rem}.tw--h-80{height:20rem}.tw--h-\\[12px\\]{height:12px}.tw--h-\\[50px\\]{height:50px}.tw--h-\\[60px\\]{height:60px}.tw--h-auto{height:auto}.tw--h-fit{height:-moz-fit-content;height:fit-content}.tw--h-full{height:100%}.tw--h-screen{height:100vh}.tw--max-h-\\[700px\\]{max-height:700px}.tw--max-h-screen{max-height:100vh}.tw--min-h-\\[400px\\]{min-height:400px}.tw--w-16{width:4rem}.tw--w-4{width:1rem}.tw--w-6{width:1.5rem}.tw--w-64{width:16rem}.tw--w-8{width:2rem}.tw--w-\\[12px\\]{width:12px}.tw--w-fit{width:-moz-fit-content;width:fit-content}.tw--w-full{width:100%}.tw--w-screen{width:100vw}.tw--max-w-\\[280px\\]{max-width:280px}.tw--max-w-\\[335px\\]{max-width:335px}.tw--max-w-\\[375px\\]{max-width:375px}.tw--max-w-\\[400px\\]{max-width:400px}.tw--max-w-\\[500px\\]{max-width:500px}.tw--max-w-md{max-width:28rem}.tw--max-w-xs{max-width:20rem}.tw--flex-1{flex:1 1 0%}.tw--shrink{flex-shrink:1}.tw--shrink-0{flex-shrink:0}.tw--grow-0{flex-grow:0}.tw--translate-x-72{--tw-translate-x: 18rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.tw--translate-y-1\\/2{--tw-translate-y: 50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.tw--translate-y-\\[-50\\%\\]{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes tw--dark-shadow-dots{0%,33%{background:rgba(255,255,255,.5);box-shadow:-31px 0 #f53374,31px 0 #ffffff80}66%{background:#f53374;box-shadow:-31px 0 #ffffff80,31px 0 #ffffff80}to,0%{background:rgba(255,255,255,.5);box-shadow:-31px 0 #ffffff80,31px 0 #f53374}}.tw--animate-dark-shadow-dots{animation:tw--dark-shadow-dots 2s linear infinite}@keyframes tw--light-shadow-dots{0%,33%{background:rgba(202,202,219,.6);box-shadow:-31px 0 #21bb5a,31px 0 #cacadb99}66%{background:#21bb5a;box-shadow:-31px 0 #cacadb99,31px 0 #cacadb99}to,0%{background:rgba(202,202,219,.6);box-shadow:-31px 0 #cacadb99,31px 0 #21bb5a}}.tw--animate-light-shadow-dots{animation:tw--light-shadow-dots 2s linear infinite}@keyframes tw--rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.tw--animate-rotate{animation:tw--rotate .5s linear infinite}@keyframes tw--text-spin{0%{transform:translate(18rem)}6.25%,12.5%{transform:translate(-.5rem)}18.75%,25%{transform:translate(-21.5rem)}31.25%,37.5%{transform:translate(-42.5rem)}43.75%,50%{transform:translate(-63.5rem)}56.25%,62.5%{transform:translate(-84.5rem)}68.75%,75%{transform:translate(-105.5rem)}81.25%,87.5%{transform:translate(-126.5rem)}93.75%,to{transform:translate(-147.5em)}}.tw--animate-text-spin{animation:tw--text-spin 30s linear infinite}.tw--animate-wave{animation:tw--wave 1.3s linear infinite}.tw--animate-wave-delay{animation:tw--wave 1.3s linear infinite -1.1s}@keyframes tw--wave{0%{transform:initial}60%{transform:initial}to{transform:initial}30%{transform:translateY(-15px)}}.tw--animate-wave-delay-2{animation:tw--wave 1.3s linear infinite -.9s}.tw--cursor-pointer{cursor:pointer}.tw--select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.tw--flex-row{flex-direction:row}.tw--flex-col{flex-direction:column}.tw--flex-col-reverse{flex-direction:column-reverse}.tw--flex-wrap{flex-wrap:wrap}.tw--items-end{align-items:flex-end}.tw--items-center{align-items:center}.tw--items-stretch{align-items:stretch}.tw--justify-center{justify-content:center}.tw--justify-between{justify-content:space-between}.tw--gap-2{gap:.5rem}.tw--space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.tw--space-x-\\[6px\\]>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(6px * var(--tw-space-x-reverse));margin-left:calc(6px * calc(1 - var(--tw-space-x-reverse)))}.tw--space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.tw--space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.25rem * var(--tw-space-y-reverse))}.tw--space-y-\\[10px\\]>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(10px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(10px * var(--tw-space-y-reverse))}.tw--space-y-\\[11px\\]>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(11px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(11px * var(--tw-space-y-reverse))}.tw--self-stretch{align-self:stretch}.tw--justify-self-start{justify-self:start}.tw--justify-self-end{justify-self:end}.tw--justify-self-stretch{justify-self:stretch}.tw--overflow-hidden{overflow:hidden}.tw--overflow-y-scroll{overflow-y:scroll}.tw--whitespace-pre-wrap{white-space:pre-wrap}.tw--break-words{overflow-wrap:break-word}.tw--rounded-3xl{border-radius:1.5rem}.tw--rounded-\\[20px\\]{border-radius:20px}.tw--rounded-full{border-radius:9999px}.tw--rounded-lg{border-radius:.5rem}.tw--rounded-xl{border-radius:.75rem}.tw--border{border-width:1px}.tw--border-0{border-width:0px}.tw--border-\\[5px\\]{border-width:5px}.tw--border-r{border-right-width:1px}.tw--border-solid{border-style:solid}.tw--border-dark-glaze{--tw-border-opacity: 1;border-color:rgb(179 186 198 / var(--tw-border-opacity))}.tw--border-light-seraph{--tw-border-opacity: 1;border-color:rgb(33 187 90 / var(--tw-border-opacity))}.tw--border-light-zephyr-200{border-color:#2b31391a}.tw--border-l-dark-zephyr-600{border-left-color:#fff9}.tw--border-l-light-zephyr-600{border-left-color:#2b313999}.tw--border-r-\\[\\#cacadb\\]{--tw-border-opacity: 1;border-right-color:rgb(202 202 219 / var(--tw-border-opacity))}.tw--border-t-dark-zephyr-600{border-top-color:#fff9}.tw--border-t-light-zephyr-600{border-top-color:#2b313999}.tw--bg-\\[transparent\\]{background-color:transparent}.tw--bg-dark-glazeBg{--tw-bg-opacity: 1;background-color:rgb(179 186 198 / var(--tw-bg-opacity))}.tw--bg-dark-iota-dots{--tw-bg-opacity: 1;background-color:rgb(33 187 90 / var(--tw-bg-opacity))}.tw--bg-dark-loader,.tw--bg-dark-lumina{--tw-bg-opacity: 1;background-color:rgb(37 34 57 / var(--tw-bg-opacity))}.tw--bg-dark-neon{--tw-bg-opacity: 1;background-color:rgb(1 154 255 / var(--tw-bg-opacity))}.tw--bg-dark-pale-dots{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.tw--bg-dark-seraph{--tw-bg-opacity: 1;background-color:rgb(245 51 115 / var(--tw-bg-opacity))}.tw--bg-dark-sigma{--tw-bg-opacity: 1;background-color:rgb(15 14 30 / var(--tw-bg-opacity))}.tw--bg-dark-whisper{--tw-bg-opacity: 1;background-color:rgb(21 18 38 / var(--tw-bg-opacity))}.tw--bg-dark-zephyr-100{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.tw--bg-light-glaze{--tw-bg-opacity: 1;background-color:rgb(33 187 90 / var(--tw-bg-opacity))}.tw--bg-light-glazeBg{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.tw--bg-light-iota-dots{--tw-bg-opacity: 1;background-color:rgb(33 187 90 / var(--tw-bg-opacity))}.tw--bg-light-loader{--tw-bg-opacity: 1;background-color:rgb(246 248 250 / var(--tw-bg-opacity))}.tw--bg-light-lumina{--tw-bg-opacity: 1;background-color:rgb(240 242 245 / var(--tw-bg-opacity))}.tw--bg-light-pale-dots{--tw-bg-opacity: 1;background-color:rgb(202 202 219 / var(--tw-bg-opacity))}.tw--bg-light-seraph{--tw-bg-opacity: 1;background-color:rgb(33 187 90 / var(--tw-bg-opacity))}.tw--bg-light-whisper{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.tw--bg-light-zephyr-100{--tw-bg-opacity: 1;background-color:rgb(43 49 57 / var(--tw-bg-opacity))}.tw--bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.tw--bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.tw--from-\\[\\#FF0000\\]{--tw-gradient-from: #FF0000 var(--tw-gradient-from-position);--tw-gradient-to: rgb(255 0 0 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.tw--to-\\[\\#F25640\\]{--tw-gradient-to: #F25640 var(--tw-gradient-to-position)}.tw--p-0{padding:0}.tw--p-0\\.5{padding:.125rem}.tw--p-1{padding:.25rem}.tw--p-3{padding:.75rem}.tw--p-5{padding:1.25rem}.tw--p-7{padding:1.75rem}.tw--px-4{padding-left:1rem;padding-right:1rem}.tw--px-5{padding-left:1.25rem;padding-right:1.25rem}.tw--px-\\[15px\\]{padding-left:15px;padding-right:15px}.tw--py-2{padding-top:.5rem;padding-bottom:.5rem}.tw--py-3{padding-top:.75rem;padding-bottom:.75rem}.tw--py-4{padding-top:1rem;padding-bottom:1rem}.tw--py-\\[11px\\]{padding-top:11px;padding-bottom:11px}.tw--pb-1{padding-bottom:.25rem}.tw--pb-10{padding-bottom:2.5rem}.tw--pb-5{padding-bottom:1.25rem}.tw--pb-\\[11px\\]{padding-bottom:11px}.tw--pb-\\[30px\\]{padding-bottom:30px}.tw--pb-\\[5px\\]{padding-bottom:5px}.tw--pl-\\[10px\\]{padding-left:10px}.tw--pl-\\[35px\\]{padding-left:35px}.tw--pr-2{padding-right:.5rem}.tw--pr-\\[5px\\]{padding-right:5px}.tw--pt-10{padding-top:2.5rem}.tw--pt-5{padding-top:1.25rem}.tw--text-left{text-align:left}.tw--text-center{text-align:center}.tw--text-\\[10px\\]{font-size:10px}.tw--text-\\[12\\.8px\\]{font-size:12.8px}.tw--text-\\[16px\\]{font-size:16px}.tw--text-\\[20px\\]{font-size:20px}.tw--text-\\[24px\\]{font-size:24px}.tw--text-lg{font-size:1.125rem;line-height:1.75rem}.tw--text-sm{font-size:.875rem;line-height:1.25rem}.tw--text-xl,.tw--text-xl\\/7{font-size:1.25rem;line-height:1.75rem}.tw--font-bold{font-weight:700}.tw--font-extrabold{font-weight:800}.tw--font-medium{font-weight:500}.tw--font-semibold{font-weight:600}.tw--leading-5{line-height:1.25rem}.tw--leading-\\[1\\.4\\]{line-height:1.4}.tw--leading-\\[1\\.56\\]{line-height:1.56}.tw--leading-\\[1\\.63\\]{line-height:1.63}.tw--leading-\\[1\\]{line-height:1}.tw--leading-\\[2\\]{line-height:2}.tw--leading-\\[30px\\]{line-height:30px}.tw--text-\\[\\#ff0043\\]{--tw-text-opacity: 1;color:rgb(255 0 67 / var(--tw-text-opacity))}.tw--text-\\[inherit\\]{color:inherit}.tw--text-dark-glazeText{--tw-text-opacity: 1;color:rgb(21 18 38 / var(--tw-text-opacity))}.tw--text-dark-seraph{--tw-text-opacity: 1;color:rgb(245 51 115 / var(--tw-text-opacity))}.tw--text-dark-zephyr-100{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.tw--text-dark-zephyr-600{color:#fff9}.tw--text-dark-zephyr-800{color:#fffc}.tw--text-dark-zeta{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.tw--text-light-glazeText{--tw-text-opacity: 1;color:rgb(21 18 38 / var(--tw-text-opacity))}.tw--text-light-seraph,.tw--text-light-status{--tw-text-opacity: 1;color:rgb(33 187 90 / var(--tw-text-opacity))}.tw--text-light-zephyr-100{--tw-text-opacity: 1;color:rgb(43 49 57 / var(--tw-text-opacity))}.tw--text-light-zephyr-600{color:#2b313999}.tw--text-light-zephyr-800{color:#2b3139cc}.tw--text-light-zeta{--tw-text-opacity: 1;color:rgb(15 14 30 / var(--tw-text-opacity))}.tw--text-muted-blue{color:#0f0e1e99}.tw--text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.tw--underline{text-decoration-line:underline}.tw--opacity-40{opacity:.4}.tw--opacity-60{opacity:.6}.tw--shadow-\\[-1px_2px_5px_0\\]{--tw-shadow: -1px 2px 5px 0;--tw-shadow-colored: -1px 2px 5px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-\\[0px_12px_24px_-4px_rgba\\(1\\,154\\,255\\,0\\.2\\)\\]{--tw-shadow: 0px 12px 24px -4px rgba(1,154,255,.2);--tw-shadow-colored: 0px 12px 24px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-dark-card{--tw-shadow: 0 12px 24px 0 rgba(0, 0, 0, .12), 0 4px 8px 0 rgba(0, 0, 0, .1);--tw-shadow-colored: 0 12px 24px 0 var(--tw-shadow-color), 0 4px 8px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-dark-loading-dots{--tw-shadow: -24px 0 rgba(255, 255, 255, .5), 24px 0 rgba(255, 255, 255, .5);--tw-shadow-colored: -24px 0 var(--tw-shadow-color), 24px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-light-card{--tw-shadow: 0 12px 24px 0 rgba(43, 49, 57, .06), 0 4px 8px 0 rgba(43, 55, 70, .04);--tw-shadow-colored: 0 12px 24px 0 var(--tw-shadow-color), 0 4px 8px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-light-loading-dots{--tw-shadow: -24px 0 rgba(201, 201, 201, .5), 24px 0 rgba(201, 201, 201, .5);--tw-shadow-colored: -24px 0 var(--tw-shadow-color), 24px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-dark-zephyr-200{--tw-shadow-color: rgba(255, 255, 255,.1);--tw-shadow: var(--tw-shadow-colored)}.tw--shadow-light-zephyr-200{--tw-shadow-color: rgba(43, 49, 57,.1);--tw-shadow: var(--tw-shadow-colored)}.tw--translate-z-0 *{transform:translateZ(0)}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.\\[key\\:string\\]{key:string}#chatbot-container *{font-family:inherit!important}.spaced-letters{letter-spacing:2px}p{display:inline}.mt-8{margin-top:2rem}.mb-6{margin-bottom:1.5rem}.scroll-stop{overflow:hidden;position:fixed;left:0;right:0;top:0}.after\\:tw--absolute:after{content:var(--tw-content);position:absolute}.after\\:tw--bottom-\\[-2px\\]:after{content:var(--tw-content);bottom:-2px}.after\\:tw--left-\\[37px\\]:after{content:var(--tw-content);left:37px}.after\\:tw--z-10:after{content:var(--tw-content);z-index:10}.after\\:tw--ml-1:after{content:var(--tw-content);margin-left:.25rem}.after\\:tw--inline-block:after{content:var(--tw-content);display:inline-block}.after\\:tw--hidden:after{content:var(--tw-content);display:none}.after\\:tw--h-4:after{content:var(--tw-content);height:1rem}.after\\:tw--h-\\[10px\\]:after{content:var(--tw-content);height:10px}.after\\:tw--w-1:after{content:var(--tw-content);width:.25rem}.after\\:tw--w-\\[10px\\]:after{content:var(--tw-content);width:10px}@keyframes tw--blink{0%{content:var(--tw-content);opacity:1}49%{content:var(--tw-content);opacity:1}50%{content:var(--tw-content);opacity:0}to{content:var(--tw-content);opacity:0}}.after\\:tw--animate-blink:after{content:var(--tw-content);animation:tw--blink .5s infinite}.after\\:tw--rounded-full:after{content:var(--tw-content);border-radius:9999px}.after\\:tw--bg-dark-zephyr-100:after{content:var(--tw-content);--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.after\\:tw--bg-light-iota-dots:after{content:var(--tw-content);--tw-bg-opacity: 1;background-color:rgb(33 187 90 / var(--tw-bg-opacity))}.after\\:tw--bg-light-zephyr-100:after{content:var(--tw-content);--tw-bg-opacity: 1;background-color:rgb(43 49 57 / var(--tw-bg-opacity))}.focus\\:\\!tw--bg-dark-lumina:focus{--tw-bg-opacity: 1 !important;background-color:rgb(37 34 57 / var(--tw-bg-opacity))!important}.focus\\:\\!tw--bg-light-lumina:focus{--tw-bg-opacity: 1 !important;background-color:rgb(240 242 245 / var(--tw-bg-opacity))!important}.focus\\:tw--outline-none:focus{outline:2px solid transparent;outline-offset:2px}@media (min-width: 350px){.customXs\\:tw--max-w-xs{max-width:20rem}.customXs\\:tw--text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width: 768px){.md\\:tw--max-w-\\[800px\\]{max-width:800px}}')),document.body.appendChild(t)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import Nt, { PureComponent as zi, useState as xt, useLayoutEffect as $i, useEffect as Mt, forwardRef as Nn, useRef as Dr } from "react";
import Vi from "react-dom";
import { useSelector as Wi, useDispatch as Gi, Provider as qi } from "react-redux";
import { createSlice as or, configureStore as Hi, combineReducers as Yi } from "@reduxjs/toolkit";
import Ji from "react-markdown";
import { persistReducer as Xi, persistStore as Ki } from "redux-persist";
import { io as Zi } from "socket.io-client";
var Ie = {}, Mn = {}, sr = {};
sr.byteLength = to;
sr.toByteArray = no;
sr.fromByteArray = so;
var Me = [], Pe = [], Qi = typeof Uint8Array < "u" ? Uint8Array : Array, mr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var pt = 0, eo = mr.length; pt < eo; ++pt)
  Me[pt] = mr[pt], Pe[mr.charCodeAt(pt)] = pt;
Pe["-".charCodeAt(0)] = 62;
Pe["_".charCodeAt(0)] = 63;
function Un(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = e.indexOf("=");
  n === -1 && (n = t);
  var o = n === t ? 0 : 4 - n % 4;
  return [n, o];
}
function to(e) {
  var t = Un(e), n = t[0], o = t[1];
  return (n + o) * 3 / 4 - o;
}
function ro(e, t, n) {
  return (t + n) * 3 / 4 - n;
}
function no(e) {
  var t, n = Un(e), o = n[0], a = n[1], u = new Qi(ro(e, o, a)), f = 0, l = a > 0 ? o - 4 : o, h;
  for (h = 0; h < l; h += 4)
    t = Pe[e.charCodeAt(h)] << 18 | Pe[e.charCodeAt(h + 1)] << 12 | Pe[e.charCodeAt(h + 2)] << 6 | Pe[e.charCodeAt(h + 3)], u[f++] = t >> 16 & 255, u[f++] = t >> 8 & 255, u[f++] = t & 255;
  return a === 2 && (t = Pe[e.charCodeAt(h)] << 2 | Pe[e.charCodeAt(h + 1)] >> 4, u[f++] = t & 255), a === 1 && (t = Pe[e.charCodeAt(h)] << 10 | Pe[e.charCodeAt(h + 1)] << 4 | Pe[e.charCodeAt(h + 2)] >> 2, u[f++] = t >> 8 & 255, u[f++] = t & 255), u;
}
function io(e) {
  return Me[e >> 18 & 63] + Me[e >> 12 & 63] + Me[e >> 6 & 63] + Me[e & 63];
}
function oo(e, t, n) {
  for (var o, a = [], u = t; u < n; u += 3)
    o = (e[u] << 16 & 16711680) + (e[u + 1] << 8 & 65280) + (e[u + 2] & 255), a.push(io(o));
  return a.join("");
}
function so(e) {
  for (var t, n = e.length, o = n % 3, a = [], u = 16383, f = 0, l = n - o; f < l; f += u)
    a.push(oo(e, f, f + u > l ? l : f + u));
  return o === 1 ? (t = e[n - 1], a.push(
    Me[t >> 2] + Me[t << 4 & 63] + "=="
  )) : o === 2 && (t = (e[n - 2] << 8) + e[n - 1], a.push(
    Me[t >> 10] + Me[t >> 4 & 63] + Me[t << 2 & 63] + "="
  )), a.join("");
}
var zr = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
zr.read = function(e, t, n, o, a) {
  var u, f, l = a * 8 - o - 1, h = (1 << l) - 1, b = h >> 1, w = -7, x = n ? a - 1 : 0, I = n ? -1 : 1, S = e[t + x];
  for (x += I, u = S & (1 << -w) - 1, S >>= -w, w += l; w > 0; u = u * 256 + e[t + x], x += I, w -= 8)
    ;
  for (f = u & (1 << -w) - 1, u >>= -w, w += o; w > 0; f = f * 256 + e[t + x], x += I, w -= 8)
    ;
  if (u === 0)
    u = 1 - b;
  else {
    if (u === h)
      return f ? NaN : (S ? -1 : 1) * (1 / 0);
    f = f + Math.pow(2, o), u = u - b;
  }
  return (S ? -1 : 1) * f * Math.pow(2, u - o);
};
zr.write = function(e, t, n, o, a, u) {
  var f, l, h, b = u * 8 - a - 1, w = (1 << b) - 1, x = w >> 1, I = a === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, S = o ? 0 : u - 1, B = o ? 1 : -1, _ = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (l = isNaN(t) ? 1 : 0, f = w) : (f = Math.floor(Math.log(t) / Math.LN2), t * (h = Math.pow(2, -f)) < 1 && (f--, h *= 2), f + x >= 1 ? t += I / h : t += I * Math.pow(2, 1 - x), t * h >= 2 && (f++, h /= 2), f + x >= w ? (l = 0, f = w) : f + x >= 1 ? (l = (t * h - 1) * Math.pow(2, a), f = f + x) : (l = t * Math.pow(2, x - 1) * Math.pow(2, a), f = 0)); a >= 8; e[n + S] = l & 255, S += B, l /= 256, a -= 8)
    ;
  for (f = f << a | l, b += a; b > 0; e[n + S] = f & 255, S += B, f /= 256, b -= 8)
    ;
  e[n + S - B] |= _ * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  const t = sr, n = zr, o = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = l, e.SlowBuffer = N, e.INSPECT_MAX_BYTES = 50;
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
  function l(s, r, i) {
    if (typeof s == "number") {
      if (typeof r == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return x(s);
    }
    return h(s, r, i);
  }
  l.poolSize = 8192;
  function h(s, r, i) {
    if (typeof s == "string")
      return I(s, r);
    if (ArrayBuffer.isView(s))
      return B(s);
    if (s == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof s
      );
    if (ye(s, ArrayBuffer) || s && ye(s.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (ye(s, SharedArrayBuffer) || s && ye(s.buffer, SharedArrayBuffer)))
      return _(s, r, i);
    if (typeof s == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const c = s.valueOf && s.valueOf();
    if (c != null && c !== s)
      return l.from(c, r, i);
    const p = $(s);
    if (p)
      return p;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof s[Symbol.toPrimitive] == "function")
      return l.from(s[Symbol.toPrimitive]("string"), r, i);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof s
    );
  }
  l.from = function(s, r, i) {
    return h(s, r, i);
  }, Object.setPrototypeOf(l.prototype, Uint8Array.prototype), Object.setPrototypeOf(l, Uint8Array);
  function b(s) {
    if (typeof s != "number")
      throw new TypeError('"size" argument must be of type number');
    if (s < 0)
      throw new RangeError('The value "' + s + '" is invalid for option "size"');
  }
  function w(s, r, i) {
    return b(s), s <= 0 ? f(s) : r !== void 0 ? typeof i == "string" ? f(s).fill(r, i) : f(s).fill(r) : f(s);
  }
  l.alloc = function(s, r, i) {
    return w(s, r, i);
  };
  function x(s) {
    return b(s), f(s < 0 ? 0 : P(s) | 0);
  }
  l.allocUnsafe = function(s) {
    return x(s);
  }, l.allocUnsafeSlow = function(s) {
    return x(s);
  };
  function I(s, r) {
    if ((typeof r != "string" || r === "") && (r = "utf8"), !l.isEncoding(r))
      throw new TypeError("Unknown encoding: " + r);
    const i = le(s, r) | 0;
    let c = f(i);
    const p = c.write(s, r);
    return p !== i && (c = c.slice(0, p)), c;
  }
  function S(s) {
    const r = s.length < 0 ? 0 : P(s.length) | 0, i = f(r);
    for (let c = 0; c < r; c += 1)
      i[c] = s[c] & 255;
    return i;
  }
  function B(s) {
    if (ye(s, Uint8Array)) {
      const r = new Uint8Array(s);
      return _(r.buffer, r.byteOffset, r.byteLength);
    }
    return S(s);
  }
  function _(s, r, i) {
    if (r < 0 || s.byteLength < r)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (s.byteLength < r + (i || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let c;
    return r === void 0 && i === void 0 ? c = new Uint8Array(s) : i === void 0 ? c = new Uint8Array(s, r) : c = new Uint8Array(s, r, i), Object.setPrototypeOf(c, l.prototype), c;
  }
  function $(s) {
    if (l.isBuffer(s)) {
      const r = P(s.length) | 0, i = f(r);
      return i.length === 0 || s.copy(i, 0, 0, r), i;
    }
    if (s.length !== void 0)
      return typeof s.length != "number" || St(s.length) ? f(0) : S(s);
    if (s.type === "Buffer" && Array.isArray(s.data))
      return S(s.data);
  }
  function P(s) {
    if (s >= a)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
    return s | 0;
  }
  function N(s) {
    return +s != s && (s = 0), l.alloc(+s);
  }
  l.isBuffer = function(r) {
    return r != null && r._isBuffer === !0 && r !== l.prototype;
  }, l.compare = function(r, i) {
    if (ye(r, Uint8Array) && (r = l.from(r, r.offset, r.byteLength)), ye(i, Uint8Array) && (i = l.from(i, i.offset, i.byteLength)), !l.isBuffer(r) || !l.isBuffer(i))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (r === i)
      return 0;
    let c = r.length, p = i.length;
    for (let m = 0, y = Math.min(c, p); m < y; ++m)
      if (r[m] !== i[m]) {
        c = r[m], p = i[m];
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
  }, l.concat = function(r, i) {
    if (!Array.isArray(r))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (r.length === 0)
      return l.alloc(0);
    let c;
    if (i === void 0)
      for (i = 0, c = 0; c < r.length; ++c)
        i += r[c].length;
    const p = l.allocUnsafe(i);
    let m = 0;
    for (c = 0; c < r.length; ++c) {
      let y = r[c];
      if (ye(y, Uint8Array))
        m + y.length > p.length ? (l.isBuffer(y) || (y = l.from(y)), y.copy(p, m)) : Uint8Array.prototype.set.call(
          p,
          y,
          m
        );
      else if (l.isBuffer(y))
        y.copy(p, m);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      m += y.length;
    }
    return p;
  };
  function le(s, r) {
    if (l.isBuffer(s))
      return s.length;
    if (ArrayBuffer.isView(s) || ye(s, ArrayBuffer))
      return s.byteLength;
    if (typeof s != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof s
      );
    const i = s.length, c = arguments.length > 2 && arguments[2] === !0;
    if (!c && i === 0)
      return 0;
    let p = !1;
    for (; ; )
      switch (r) {
        case "ascii":
        case "latin1":
        case "binary":
          return i;
        case "utf8":
        case "utf-8":
          return lt(s).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return i * 2;
        case "hex":
          return i >>> 1;
        case "base64":
          return zt(s).length;
        default:
          if (p)
            return c ? -1 : lt(s).length;
          r = ("" + r).toLowerCase(), p = !0;
      }
  }
  l.byteLength = le;
  function we(s, r, i) {
    let c = !1;
    if ((r === void 0 || r < 0) && (r = 0), r > this.length || ((i === void 0 || i > this.length) && (i = this.length), i <= 0) || (i >>>= 0, r >>>= 0, i <= r))
      return "";
    for (s || (s = "utf8"); ; )
      switch (s) {
        case "hex":
          return H(this, r, i);
        case "utf8":
        case "utf-8":
          return C(this, r, i);
        case "ascii":
          return D(this, r, i);
        case "latin1":
        case "binary":
          return W(this, r, i);
        case "base64":
          return k(this, r, i);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return re(this, r, i);
        default:
          if (c)
            throw new TypeError("Unknown encoding: " + s);
          s = (s + "").toLowerCase(), c = !0;
      }
  }
  l.prototype._isBuffer = !0;
  function A(s, r, i) {
    const c = s[r];
    s[r] = s[i], s[i] = c;
  }
  l.prototype.swap16 = function() {
    const r = this.length;
    if (r % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let i = 0; i < r; i += 2)
      A(this, i, i + 1);
    return this;
  }, l.prototype.swap32 = function() {
    const r = this.length;
    if (r % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let i = 0; i < r; i += 4)
      A(this, i, i + 3), A(this, i + 1, i + 2);
    return this;
  }, l.prototype.swap64 = function() {
    const r = this.length;
    if (r % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let i = 0; i < r; i += 8)
      A(this, i, i + 7), A(this, i + 1, i + 6), A(this, i + 2, i + 5), A(this, i + 3, i + 4);
    return this;
  }, l.prototype.toString = function() {
    const r = this.length;
    return r === 0 ? "" : arguments.length === 0 ? C(this, 0, r) : we.apply(this, arguments);
  }, l.prototype.toLocaleString = l.prototype.toString, l.prototype.equals = function(r) {
    if (!l.isBuffer(r))
      throw new TypeError("Argument must be a Buffer");
    return this === r ? !0 : l.compare(this, r) === 0;
  }, l.prototype.inspect = function() {
    let r = "";
    const i = e.INSPECT_MAX_BYTES;
    return r = this.toString("hex", 0, i).replace(/(.{2})/g, "$1 ").trim(), this.length > i && (r += " ... "), "<Buffer " + r + ">";
  }, o && (l.prototype[o] = l.prototype.inspect), l.prototype.compare = function(r, i, c, p, m) {
    if (ye(r, Uint8Array) && (r = l.from(r, r.offset, r.byteLength)), !l.isBuffer(r))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof r
      );
    if (i === void 0 && (i = 0), c === void 0 && (c = r ? r.length : 0), p === void 0 && (p = 0), m === void 0 && (m = this.length), i < 0 || c > r.length || p < 0 || m > this.length)
      throw new RangeError("out of range index");
    if (p >= m && i >= c)
      return 0;
    if (p >= m)
      return -1;
    if (i >= c)
      return 1;
    if (i >>>= 0, c >>>= 0, p >>>= 0, m >>>= 0, this === r)
      return 0;
    let y = m - p, F = c - i;
    const ee = Math.min(y, F), K = this.slice(p, m), te = r.slice(i, c);
    for (let Y = 0; Y < ee; ++Y)
      if (K[Y] !== te[Y]) {
        y = K[Y], F = te[Y];
        break;
      }
    return y < F ? -1 : F < y ? 1 : 0;
  };
  function he(s, r, i, c, p) {
    if (s.length === 0)
      return -1;
    if (typeof i == "string" ? (c = i, i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648), i = +i, St(i) && (i = p ? 0 : s.length - 1), i < 0 && (i = s.length + i), i >= s.length) {
      if (p)
        return -1;
      i = s.length - 1;
    } else if (i < 0)
      if (p)
        i = 0;
      else
        return -1;
    if (typeof r == "string" && (r = l.from(r, c)), l.isBuffer(r))
      return r.length === 0 ? -1 : ge(s, r, i, c, p);
    if (typeof r == "number")
      return r = r & 255, typeof Uint8Array.prototype.indexOf == "function" ? p ? Uint8Array.prototype.indexOf.call(s, r, i) : Uint8Array.prototype.lastIndexOf.call(s, r, i) : ge(s, [r], i, c, p);
    throw new TypeError("val must be string, number or Buffer");
  }
  function ge(s, r, i, c, p) {
    let m = 1, y = s.length, F = r.length;
    if (c !== void 0 && (c = String(c).toLowerCase(), c === "ucs2" || c === "ucs-2" || c === "utf16le" || c === "utf-16le")) {
      if (s.length < 2 || r.length < 2)
        return -1;
      m = 2, y /= 2, F /= 2, i /= 2;
    }
    function ee(te, Y) {
      return m === 1 ? te[Y] : te.readUInt16BE(Y * m);
    }
    let K;
    if (p) {
      let te = -1;
      for (K = i; K < y; K++)
        if (ee(s, K) === ee(r, te === -1 ? 0 : K - te)) {
          if (te === -1 && (te = K), K - te + 1 === F)
            return te * m;
        } else
          te !== -1 && (K -= K - te), te = -1;
    } else
      for (i + F > y && (i = y - F), K = i; K >= 0; K--) {
        let te = !0;
        for (let Y = 0; Y < F; Y++)
          if (ee(s, K + Y) !== ee(r, Y)) {
            te = !1;
            break;
          }
        if (te)
          return K;
      }
    return -1;
  }
  l.prototype.includes = function(r, i, c) {
    return this.indexOf(r, i, c) !== -1;
  }, l.prototype.indexOf = function(r, i, c) {
    return he(this, r, i, c, !0);
  }, l.prototype.lastIndexOf = function(r, i, c) {
    return he(this, r, i, c, !1);
  };
  function _e(s, r, i, c) {
    i = Number(i) || 0;
    const p = s.length - i;
    c ? (c = Number(c), c > p && (c = p)) : c = p;
    const m = r.length;
    c > m / 2 && (c = m / 2);
    let y;
    for (y = 0; y < c; ++y) {
      const F = parseInt(r.substr(y * 2, 2), 16);
      if (St(F))
        return y;
      s[i + y] = F;
    }
    return y;
  }
  function xe(s, r, i, c) {
    return ut(lt(r, s.length - i), s, i, c);
  }
  function je(s, r, i, c) {
    return ut(Dt(r), s, i, c);
  }
  function pe(s, r, i, c) {
    return ut(zt(r), s, i, c);
  }
  function T(s, r, i, c) {
    return ut(ct(r, s.length - i), s, i, c);
  }
  l.prototype.write = function(r, i, c, p) {
    if (i === void 0)
      p = "utf8", c = this.length, i = 0;
    else if (c === void 0 && typeof i == "string")
      p = i, c = this.length, i = 0;
    else if (isFinite(i))
      i = i >>> 0, isFinite(c) ? (c = c >>> 0, p === void 0 && (p = "utf8")) : (p = c, c = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const m = this.length - i;
    if ((c === void 0 || c > m) && (c = m), r.length > 0 && (c < 0 || i < 0) || i > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    p || (p = "utf8");
    let y = !1;
    for (; ; )
      switch (p) {
        case "hex":
          return _e(this, r, i, c);
        case "utf8":
        case "utf-8":
          return xe(this, r, i, c);
        case "ascii":
        case "latin1":
        case "binary":
          return je(this, r, i, c);
        case "base64":
          return pe(this, r, i, c);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return T(this, r, i, c);
        default:
          if (y)
            throw new TypeError("Unknown encoding: " + p);
          p = ("" + p).toLowerCase(), y = !0;
      }
  }, l.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function k(s, r, i) {
    return r === 0 && i === s.length ? t.fromByteArray(s) : t.fromByteArray(s.slice(r, i));
  }
  function C(s, r, i) {
    i = Math.min(s.length, i);
    const c = [];
    let p = r;
    for (; p < i; ) {
      const m = s[p];
      let y = null, F = m > 239 ? 4 : m > 223 ? 3 : m > 191 ? 2 : 1;
      if (p + F <= i) {
        let ee, K, te, Y;
        switch (F) {
          case 1:
            m < 128 && (y = m);
            break;
          case 2:
            ee = s[p + 1], (ee & 192) === 128 && (Y = (m & 31) << 6 | ee & 63, Y > 127 && (y = Y));
            break;
          case 3:
            ee = s[p + 1], K = s[p + 2], (ee & 192) === 128 && (K & 192) === 128 && (Y = (m & 15) << 12 | (ee & 63) << 6 | K & 63, Y > 2047 && (Y < 55296 || Y > 57343) && (y = Y));
            break;
          case 4:
            ee = s[p + 1], K = s[p + 2], te = s[p + 3], (ee & 192) === 128 && (K & 192) === 128 && (te & 192) === 128 && (Y = (m & 15) << 18 | (ee & 63) << 12 | (K & 63) << 6 | te & 63, Y > 65535 && Y < 1114112 && (y = Y));
        }
      }
      y === null ? (y = 65533, F = 1) : y > 65535 && (y -= 65536, c.push(y >>> 10 & 1023 | 55296), y = 56320 | y & 1023), c.push(y), p += F;
    }
    return L(c);
  }
  const O = 4096;
  function L(s) {
    const r = s.length;
    if (r <= O)
      return String.fromCharCode.apply(String, s);
    let i = "", c = 0;
    for (; c < r; )
      i += String.fromCharCode.apply(
        String,
        s.slice(c, c += O)
      );
    return i;
  }
  function D(s, r, i) {
    let c = "";
    i = Math.min(s.length, i);
    for (let p = r; p < i; ++p)
      c += String.fromCharCode(s[p] & 127);
    return c;
  }
  function W(s, r, i) {
    let c = "";
    i = Math.min(s.length, i);
    for (let p = r; p < i; ++p)
      c += String.fromCharCode(s[p]);
    return c;
  }
  function H(s, r, i) {
    const c = s.length;
    (!r || r < 0) && (r = 0), (!i || i < 0 || i > c) && (i = c);
    let p = "";
    for (let m = r; m < i; ++m)
      p += fr[s[m]];
    return p;
  }
  function re(s, r, i) {
    const c = s.slice(r, i);
    let p = "";
    for (let m = 0; m < c.length - 1; m += 2)
      p += String.fromCharCode(c[m] + c[m + 1] * 256);
    return p;
  }
  l.prototype.slice = function(r, i) {
    const c = this.length;
    r = ~~r, i = i === void 0 ? c : ~~i, r < 0 ? (r += c, r < 0 && (r = 0)) : r > c && (r = c), i < 0 ? (i += c, i < 0 && (i = 0)) : i > c && (i = c), i < r && (i = r);
    const p = this.subarray(r, i);
    return Object.setPrototypeOf(p, l.prototype), p;
  };
  function V(s, r, i) {
    if (s % 1 !== 0 || s < 0)
      throw new RangeError("offset is not uint");
    if (s + r > i)
      throw new RangeError("Trying to access beyond buffer length");
  }
  l.prototype.readUintLE = l.prototype.readUIntLE = function(r, i, c) {
    r = r >>> 0, i = i >>> 0, c || V(r, i, this.length);
    let p = this[r], m = 1, y = 0;
    for (; ++y < i && (m *= 256); )
      p += this[r + y] * m;
    return p;
  }, l.prototype.readUintBE = l.prototype.readUIntBE = function(r, i, c) {
    r = r >>> 0, i = i >>> 0, c || V(r, i, this.length);
    let p = this[r + --i], m = 1;
    for (; i > 0 && (m *= 256); )
      p += this[r + --i] * m;
    return p;
  }, l.prototype.readUint8 = l.prototype.readUInt8 = function(r, i) {
    return r = r >>> 0, i || V(r, 1, this.length), this[r];
  }, l.prototype.readUint16LE = l.prototype.readUInt16LE = function(r, i) {
    return r = r >>> 0, i || V(r, 2, this.length), this[r] | this[r + 1] << 8;
  }, l.prototype.readUint16BE = l.prototype.readUInt16BE = function(r, i) {
    return r = r >>> 0, i || V(r, 2, this.length), this[r] << 8 | this[r + 1];
  }, l.prototype.readUint32LE = l.prototype.readUInt32LE = function(r, i) {
    return r = r >>> 0, i || V(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216;
  }, l.prototype.readUint32BE = l.prototype.readUInt32BE = function(r, i) {
    return r = r >>> 0, i || V(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]);
  }, l.prototype.readBigUInt64LE = Be(function(r) {
    r = r >>> 0, qe(r, "offset");
    const i = this[r], c = this[r + 7];
    (i === void 0 || c === void 0) && Ze(r, this.length - 8);
    const p = i + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24, m = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + c * 2 ** 24;
    return BigInt(p) + (BigInt(m) << BigInt(32));
  }), l.prototype.readBigUInt64BE = Be(function(r) {
    r = r >>> 0, qe(r, "offset");
    const i = this[r], c = this[r + 7];
    (i === void 0 || c === void 0) && Ze(r, this.length - 8);
    const p = i * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r], m = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + c;
    return (BigInt(p) << BigInt(32)) + BigInt(m);
  }), l.prototype.readIntLE = function(r, i, c) {
    r = r >>> 0, i = i >>> 0, c || V(r, i, this.length);
    let p = this[r], m = 1, y = 0;
    for (; ++y < i && (m *= 256); )
      p += this[r + y] * m;
    return m *= 128, p >= m && (p -= Math.pow(2, 8 * i)), p;
  }, l.prototype.readIntBE = function(r, i, c) {
    r = r >>> 0, i = i >>> 0, c || V(r, i, this.length);
    let p = i, m = 1, y = this[r + --p];
    for (; p > 0 && (m *= 256); )
      y += this[r + --p] * m;
    return m *= 128, y >= m && (y -= Math.pow(2, 8 * i)), y;
  }, l.prototype.readInt8 = function(r, i) {
    return r = r >>> 0, i || V(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
  }, l.prototype.readInt16LE = function(r, i) {
    r = r >>> 0, i || V(r, 2, this.length);
    const c = this[r] | this[r + 1] << 8;
    return c & 32768 ? c | 4294901760 : c;
  }, l.prototype.readInt16BE = function(r, i) {
    r = r >>> 0, i || V(r, 2, this.length);
    const c = this[r + 1] | this[r] << 8;
    return c & 32768 ? c | 4294901760 : c;
  }, l.prototype.readInt32LE = function(r, i) {
    return r = r >>> 0, i || V(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
  }, l.prototype.readInt32BE = function(r, i) {
    return r = r >>> 0, i || V(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
  }, l.prototype.readBigInt64LE = Be(function(r) {
    r = r >>> 0, qe(r, "offset");
    const i = this[r], c = this[r + 7];
    (i === void 0 || c === void 0) && Ze(r, this.length - 8);
    const p = this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (c << 24);
    return (BigInt(p) << BigInt(32)) + BigInt(i + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24);
  }), l.prototype.readBigInt64BE = Be(function(r) {
    r = r >>> 0, qe(r, "offset");
    const i = this[r], c = this[r + 7];
    (i === void 0 || c === void 0) && Ze(r, this.length - 8);
    const p = (i << 24) + // Overflow
    this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r];
    return (BigInt(p) << BigInt(32)) + BigInt(this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + c);
  }), l.prototype.readFloatLE = function(r, i) {
    return r = r >>> 0, i || V(r, 4, this.length), n.read(this, r, !0, 23, 4);
  }, l.prototype.readFloatBE = function(r, i) {
    return r = r >>> 0, i || V(r, 4, this.length), n.read(this, r, !1, 23, 4);
  }, l.prototype.readDoubleLE = function(r, i) {
    return r = r >>> 0, i || V(r, 8, this.length), n.read(this, r, !0, 52, 8);
  }, l.prototype.readDoubleBE = function(r, i) {
    return r = r >>> 0, i || V(r, 8, this.length), n.read(this, r, !1, 52, 8);
  };
  function G(s, r, i, c, p, m) {
    if (!l.isBuffer(s))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (r > p || r < m)
      throw new RangeError('"value" argument is out of bounds');
    if (i + c > s.length)
      throw new RangeError("Index out of range");
  }
  l.prototype.writeUintLE = l.prototype.writeUIntLE = function(r, i, c, p) {
    if (r = +r, i = i >>> 0, c = c >>> 0, !p) {
      const F = Math.pow(2, 8 * c) - 1;
      G(this, r, i, c, F, 0);
    }
    let m = 1, y = 0;
    for (this[i] = r & 255; ++y < c && (m *= 256); )
      this[i + y] = r / m & 255;
    return i + c;
  }, l.prototype.writeUintBE = l.prototype.writeUIntBE = function(r, i, c, p) {
    if (r = +r, i = i >>> 0, c = c >>> 0, !p) {
      const F = Math.pow(2, 8 * c) - 1;
      G(this, r, i, c, F, 0);
    }
    let m = c - 1, y = 1;
    for (this[i + m] = r & 255; --m >= 0 && (y *= 256); )
      this[i + m] = r / y & 255;
    return i + c;
  }, l.prototype.writeUint8 = l.prototype.writeUInt8 = function(r, i, c) {
    return r = +r, i = i >>> 0, c || G(this, r, i, 1, 255, 0), this[i] = r & 255, i + 1;
  }, l.prototype.writeUint16LE = l.prototype.writeUInt16LE = function(r, i, c) {
    return r = +r, i = i >>> 0, c || G(this, r, i, 2, 65535, 0), this[i] = r & 255, this[i + 1] = r >>> 8, i + 2;
  }, l.prototype.writeUint16BE = l.prototype.writeUInt16BE = function(r, i, c) {
    return r = +r, i = i >>> 0, c || G(this, r, i, 2, 65535, 0), this[i] = r >>> 8, this[i + 1] = r & 255, i + 2;
  }, l.prototype.writeUint32LE = l.prototype.writeUInt32LE = function(r, i, c) {
    return r = +r, i = i >>> 0, c || G(this, r, i, 4, 4294967295, 0), this[i + 3] = r >>> 24, this[i + 2] = r >>> 16, this[i + 1] = r >>> 8, this[i] = r & 255, i + 4;
  }, l.prototype.writeUint32BE = l.prototype.writeUInt32BE = function(r, i, c) {
    return r = +r, i = i >>> 0, c || G(this, r, i, 4, 4294967295, 0), this[i] = r >>> 24, this[i + 1] = r >>> 16, this[i + 2] = r >>> 8, this[i + 3] = r & 255, i + 4;
  };
  function ne(s, r, i, c, p) {
    Tt(r, c, p, s, i, 7);
    let m = Number(r & BigInt(4294967295));
    s[i++] = m, m = m >> 8, s[i++] = m, m = m >> 8, s[i++] = m, m = m >> 8, s[i++] = m;
    let y = Number(r >> BigInt(32) & BigInt(4294967295));
    return s[i++] = y, y = y >> 8, s[i++] = y, y = y >> 8, s[i++] = y, y = y >> 8, s[i++] = y, i;
  }
  function We(s, r, i, c, p) {
    Tt(r, c, p, s, i, 7);
    let m = Number(r & BigInt(4294967295));
    s[i + 7] = m, m = m >> 8, s[i + 6] = m, m = m >> 8, s[i + 5] = m, m = m >> 8, s[i + 4] = m;
    let y = Number(r >> BigInt(32) & BigInt(4294967295));
    return s[i + 3] = y, y = y >> 8, s[i + 2] = y, y = y >> 8, s[i + 1] = y, y = y >> 8, s[i] = y, i + 8;
  }
  l.prototype.writeBigUInt64LE = Be(function(r, i = 0) {
    return ne(this, r, i, BigInt(0), BigInt("0xffffffffffffffff"));
  }), l.prototype.writeBigUInt64BE = Be(function(r, i = 0) {
    return We(this, r, i, BigInt(0), BigInt("0xffffffffffffffff"));
  }), l.prototype.writeIntLE = function(r, i, c, p) {
    if (r = +r, i = i >>> 0, !p) {
      const ee = Math.pow(2, 8 * c - 1);
      G(this, r, i, c, ee - 1, -ee);
    }
    let m = 0, y = 1, F = 0;
    for (this[i] = r & 255; ++m < c && (y *= 256); )
      r < 0 && F === 0 && this[i + m - 1] !== 0 && (F = 1), this[i + m] = (r / y >> 0) - F & 255;
    return i + c;
  }, l.prototype.writeIntBE = function(r, i, c, p) {
    if (r = +r, i = i >>> 0, !p) {
      const ee = Math.pow(2, 8 * c - 1);
      G(this, r, i, c, ee - 1, -ee);
    }
    let m = c - 1, y = 1, F = 0;
    for (this[i + m] = r & 255; --m >= 0 && (y *= 256); )
      r < 0 && F === 0 && this[i + m + 1] !== 0 && (F = 1), this[i + m] = (r / y >> 0) - F & 255;
    return i + c;
  }, l.prototype.writeInt8 = function(r, i, c) {
    return r = +r, i = i >>> 0, c || G(this, r, i, 1, 127, -128), r < 0 && (r = 255 + r + 1), this[i] = r & 255, i + 1;
  }, l.prototype.writeInt16LE = function(r, i, c) {
    return r = +r, i = i >>> 0, c || G(this, r, i, 2, 32767, -32768), this[i] = r & 255, this[i + 1] = r >>> 8, i + 2;
  }, l.prototype.writeInt16BE = function(r, i, c) {
    return r = +r, i = i >>> 0, c || G(this, r, i, 2, 32767, -32768), this[i] = r >>> 8, this[i + 1] = r & 255, i + 2;
  }, l.prototype.writeInt32LE = function(r, i, c) {
    return r = +r, i = i >>> 0, c || G(this, r, i, 4, 2147483647, -2147483648), this[i] = r & 255, this[i + 1] = r >>> 8, this[i + 2] = r >>> 16, this[i + 3] = r >>> 24, i + 4;
  }, l.prototype.writeInt32BE = function(r, i, c) {
    return r = +r, i = i >>> 0, c || G(this, r, i, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), this[i] = r >>> 24, this[i + 1] = r >>> 16, this[i + 2] = r >>> 8, this[i + 3] = r & 255, i + 4;
  }, l.prototype.writeBigInt64LE = Be(function(r, i = 0) {
    return ne(this, r, i, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), l.prototype.writeBigInt64BE = Be(function(r, i = 0) {
    return We(this, r, i, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function Je(s, r, i, c, p, m) {
    if (i + c > s.length)
      throw new RangeError("Index out of range");
    if (i < 0)
      throw new RangeError("Index out of range");
  }
  function Ge(s, r, i, c, p) {
    return r = +r, i = i >>> 0, p || Je(s, r, i, 4), n.write(s, r, i, c, 23, 4), i + 4;
  }
  l.prototype.writeFloatLE = function(r, i, c) {
    return Ge(this, r, i, !0, c);
  }, l.prototype.writeFloatBE = function(r, i, c) {
    return Ge(this, r, i, !1, c);
  };
  function ot(s, r, i, c, p) {
    return r = +r, i = i >>> 0, p || Je(s, r, i, 8), n.write(s, r, i, c, 52, 8), i + 8;
  }
  l.prototype.writeDoubleLE = function(r, i, c) {
    return ot(this, r, i, !0, c);
  }, l.prototype.writeDoubleBE = function(r, i, c) {
    return ot(this, r, i, !1, c);
  }, l.prototype.copy = function(r, i, c, p) {
    if (!l.isBuffer(r))
      throw new TypeError("argument should be a Buffer");
    if (c || (c = 0), !p && p !== 0 && (p = this.length), i >= r.length && (i = r.length), i || (i = 0), p > 0 && p < c && (p = c), p === c || r.length === 0 || this.length === 0)
      return 0;
    if (i < 0)
      throw new RangeError("targetStart out of bounds");
    if (c < 0 || c >= this.length)
      throw new RangeError("Index out of range");
    if (p < 0)
      throw new RangeError("sourceEnd out of bounds");
    p > this.length && (p = this.length), r.length - i < p - c && (p = r.length - i + c);
    const m = p - c;
    return this === r && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(i, c, p) : Uint8Array.prototype.set.call(
      r,
      this.subarray(c, p),
      i
    ), m;
  }, l.prototype.fill = function(r, i, c, p) {
    if (typeof r == "string") {
      if (typeof i == "string" ? (p = i, i = 0, c = this.length) : typeof c == "string" && (p = c, c = this.length), p !== void 0 && typeof p != "string")
        throw new TypeError("encoding must be a string");
      if (typeof p == "string" && !l.isEncoding(p))
        throw new TypeError("Unknown encoding: " + p);
      if (r.length === 1) {
        const y = r.charCodeAt(0);
        (p === "utf8" && y < 128 || p === "latin1") && (r = y);
      }
    } else
      typeof r == "number" ? r = r & 255 : typeof r == "boolean" && (r = Number(r));
    if (i < 0 || this.length < i || this.length < c)
      throw new RangeError("Out of range index");
    if (c <= i)
      return this;
    i = i >>> 0, c = c === void 0 ? this.length : c >>> 0, r || (r = 0);
    let m;
    if (typeof r == "number")
      for (m = i; m < c; ++m)
        this[m] = r;
    else {
      const y = l.isBuffer(r) ? r : l.from(r, p), F = y.length;
      if (F === 0)
        throw new TypeError('The value "' + r + '" is invalid for argument "value"');
      for (m = 0; m < c - i; ++m)
        this[m + i] = y[m % F];
    }
    return this;
  };
  const Re = {};
  function Xe(s, r, i) {
    Re[s] = class extends i {
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
  Xe(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(s) {
      return s ? `${s} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), Xe(
    "ERR_INVALID_ARG_TYPE",
    function(s, r) {
      return `The "${s}" argument must be of type number. Received type ${typeof r}`;
    },
    TypeError
  ), Xe(
    "ERR_OUT_OF_RANGE",
    function(s, r, i) {
      let c = `The value of "${s}" is out of range.`, p = i;
      return Number.isInteger(i) && Math.abs(i) > 2 ** 32 ? p = Ke(String(i)) : typeof i == "bigint" && (p = String(i), (i > BigInt(2) ** BigInt(32) || i < -(BigInt(2) ** BigInt(32))) && (p = Ke(p)), p += "n"), c += ` It must be ${r}. Received ${p}`, c;
    },
    RangeError
  );
  function Ke(s) {
    let r = "", i = s.length;
    const c = s[0] === "-" ? 1 : 0;
    for (; i >= c + 4; i -= 3)
      r = `_${s.slice(i - 3, i)}${r}`;
    return `${s.slice(0, i)}${r}`;
  }
  function ur(s, r, i) {
    qe(r, "offset"), (s[r] === void 0 || s[r + i] === void 0) && Ze(r, s.length - (i + 1));
  }
  function Tt(s, r, i, c, p, m) {
    if (s > i || s < r) {
      const y = typeof r == "bigint" ? "n" : "";
      let F;
      throw m > 3 ? r === 0 || r === BigInt(0) ? F = `>= 0${y} and < 2${y} ** ${(m + 1) * 8}${y}` : F = `>= -(2${y} ** ${(m + 1) * 8 - 1}${y}) and < 2 ** ${(m + 1) * 8 - 1}${y}` : F = `>= ${r}${y} and <= ${i}${y}`, new Re.ERR_OUT_OF_RANGE("value", F, s);
    }
    ur(c, p, m);
  }
  function qe(s, r) {
    if (typeof s != "number")
      throw new Re.ERR_INVALID_ARG_TYPE(r, "number", s);
  }
  function Ze(s, r, i) {
    throw Math.floor(s) !== s ? (qe(s, i), new Re.ERR_OUT_OF_RANGE(i || "offset", "an integer", s)) : r < 0 ? new Re.ERR_BUFFER_OUT_OF_BOUNDS() : new Re.ERR_OUT_OF_RANGE(
      i || "offset",
      `>= ${i ? 1 : 0} and <= ${r}`,
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
    let i;
    const c = s.length;
    let p = null;
    const m = [];
    for (let y = 0; y < c; ++y) {
      if (i = s.charCodeAt(y), i > 55295 && i < 57344) {
        if (!p) {
          if (i > 56319) {
            (r -= 3) > -1 && m.push(239, 191, 189);
            continue;
          } else if (y + 1 === c) {
            (r -= 3) > -1 && m.push(239, 191, 189);
            continue;
          }
          p = i;
          continue;
        }
        if (i < 56320) {
          (r -= 3) > -1 && m.push(239, 191, 189), p = i;
          continue;
        }
        i = (p - 55296 << 10 | i - 56320) + 65536;
      } else
        p && (r -= 3) > -1 && m.push(239, 191, 189);
      if (p = null, i < 128) {
        if ((r -= 1) < 0)
          break;
        m.push(i);
      } else if (i < 2048) {
        if ((r -= 2) < 0)
          break;
        m.push(
          i >> 6 | 192,
          i & 63 | 128
        );
      } else if (i < 65536) {
        if ((r -= 3) < 0)
          break;
        m.push(
          i >> 12 | 224,
          i >> 6 & 63 | 128,
          i & 63 | 128
        );
      } else if (i < 1114112) {
        if ((r -= 4) < 0)
          break;
        m.push(
          i >> 18 | 240,
          i >> 12 & 63 | 128,
          i >> 6 & 63 | 128,
          i & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return m;
  }
  function Dt(s) {
    const r = [];
    for (let i = 0; i < s.length; ++i)
      r.push(s.charCodeAt(i) & 255);
    return r;
  }
  function ct(s, r) {
    let i, c, p;
    const m = [];
    for (let y = 0; y < s.length && !((r -= 2) < 0); ++y)
      i = s.charCodeAt(y), c = i >> 8, p = i % 256, m.push(p), m.push(c);
    return m;
  }
  function zt(s) {
    return t.toByteArray(at(s));
  }
  function ut(s, r, i, c) {
    let p;
    for (p = 0; p < c && !(p + i >= r.length || p >= s.length); ++p)
      r[p + i] = s[p];
    return p;
  }
  function ye(s, r) {
    return s instanceof r || s != null && s.constructor != null && s.constructor.name != null && s.constructor.name === r.name;
  }
  function St(s) {
    return s !== s;
  }
  const fr = function() {
    const s = "0123456789abcdef", r = new Array(256);
    for (let i = 0; i < 16; ++i) {
      const c = i * 16;
      for (let p = 0; p < 16; ++p)
        r[c + p] = s[i] + s[p];
    }
    return r;
  }();
  function Be(s) {
    return typeof BigInt > "u" ? $t : s;
  }
  function $t() {
    throw new Error("BigInt not supported");
  }
})(Mn);
var Dn = { exports: {} }, ae = Dn.exports = {}, Le, Ne;
function Tr() {
  throw new Error("setTimeout has not been defined");
}
function Sr() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Le = setTimeout : Le = Tr;
  } catch {
    Le = Tr;
  }
  try {
    typeof clearTimeout == "function" ? Ne = clearTimeout : Ne = Sr;
  } catch {
    Ne = Sr;
  }
})();
function zn(e) {
  if (Le === setTimeout)
    return setTimeout(e, 0);
  if ((Le === Tr || !Le) && setTimeout)
    return Le = setTimeout, setTimeout(e, 0);
  try {
    return Le(e, 0);
  } catch {
    try {
      return Le.call(null, e, 0);
    } catch {
      return Le.call(this, e, 0);
    }
  }
}
function ao(e) {
  if (Ne === clearTimeout)
    return clearTimeout(e);
  if ((Ne === Sr || !Ne) && clearTimeout)
    return Ne = clearTimeout, clearTimeout(e);
  try {
    return Ne(e);
  } catch {
    try {
      return Ne.call(null, e);
    } catch {
      return Ne.call(this, e);
    }
  }
}
var $e = [], yt = !1, tt, Ht = -1;
function lo() {
  !yt || !tt || (yt = !1, tt.length ? $e = tt.concat($e) : Ht = -1, $e.length && $n());
}
function $n() {
  if (!yt) {
    var e = zn(lo);
    yt = !0;
    for (var t = $e.length; t; ) {
      for (tt = $e, $e = []; ++Ht < t; )
        tt && tt[Ht].run();
      Ht = -1, t = $e.length;
    }
    tt = null, yt = !1, ao(e);
  }
}
ae.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var n = 1; n < arguments.length; n++)
      t[n - 1] = arguments[n];
  $e.push(new Vn(e, t)), $e.length === 1 && !yt && zn($n);
};
function Vn(e, t) {
  this.fun = e, this.array = t;
}
Vn.prototype.run = function() {
  this.fun.apply(null, this.array);
};
ae.title = "browser";
ae.browser = !0;
ae.env = {};
ae.argv = [];
ae.version = "";
ae.versions = {};
function Ve() {
}
ae.on = Ve;
ae.addListener = Ve;
ae.once = Ve;
ae.off = Ve;
ae.removeListener = Ve;
ae.removeAllListeners = Ve;
ae.emit = Ve;
ae.prependListener = Ve;
ae.prependOnceListener = Ve;
ae.listeners = function(e) {
  return [];
};
ae.binding = function(e) {
  throw new Error("process.binding is not supported");
};
ae.cwd = function() {
  return "/";
};
ae.chdir = function(e) {
  throw new Error("process.chdir is not supported");
};
ae.umask = function() {
  return 0;
};
var co = Dn.exports;
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Mn, n = co, o = (f) => f && f.__esModule ? f : { default: f }, a = o(n), u = globalThis || void 0 || self;
  Object.defineProperty(e, "Buffer", { enumerable: !0, get: () => t.Buffer }), Object.defineProperty(e, "process", { enumerable: !0, get: () => a.default }), e.global = u;
})(Ie);
var Cr = { exports: {} }, Ct = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fn;
function uo() {
  if (fn)
    return Ct;
  fn = 1;
  var e = Nt, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(l, h, b) {
    var w, x = {}, I = null, S = null;
    b !== void 0 && (I = "" + b), h.key !== void 0 && (I = "" + h.key), h.ref !== void 0 && (S = h.ref);
    for (w in h)
      o.call(h, w) && !u.hasOwnProperty(w) && (x[w] = h[w]);
    if (l && l.defaultProps)
      for (w in h = l.defaultProps, h)
        x[w] === void 0 && (x[w] = h[w]);
    return { $$typeof: t, type: l, key: I, ref: S, props: x, _owner: a.current };
  }
  return Ct.Fragment = n, Ct.jsx = f, Ct.jsxs = f, Ct;
}
var kt = {}, dn;
function fo() {
  return dn || (dn = 1, Ie.process.env.NODE_ENV !== "production" && function() {
    var e = Nt, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), l = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), B = Symbol.iterator, _ = "@@iterator";
    function $(d) {
      if (d === null || typeof d != "object")
        return null;
      var v = B && d[B] || d[_];
      return typeof v == "function" ? v : null;
    }
    var P = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function N(d) {
      {
        for (var v = arguments.length, E = new Array(v > 1 ? v - 1 : 0), R = 1; R < v; R++)
          E[R - 1] = arguments[R];
        le("error", d, E);
      }
    }
    function le(d, v, E) {
      {
        var R = P.ReactDebugCurrentFrame, q = R.getStackAddendum();
        q !== "" && (v += "%s", E = E.concat([q]));
        var X = E.map(function(z) {
          return String(z);
        });
        X.unshift("Warning: " + v), Function.prototype.apply.call(console[d], console, X);
      }
    }
    var we = !1, A = !1, he = !1, ge = !1, _e = !1, xe;
    xe = Symbol.for("react.module.reference");
    function je(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === o || d === u || _e || d === a || d === b || d === w || ge || d === S || we || A || he || typeof d == "object" && d !== null && (d.$$typeof === I || d.$$typeof === x || d.$$typeof === f || d.$$typeof === l || d.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === xe || d.getModuleId !== void 0));
    }
    function pe(d, v, E) {
      var R = d.displayName;
      if (R)
        return R;
      var q = v.displayName || v.name || "";
      return q !== "" ? E + "(" + q + ")" : E;
    }
    function T(d) {
      return d.displayName || "Context";
    }
    function k(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && N("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case u:
          return "Profiler";
        case a:
          return "StrictMode";
        case b:
          return "Suspense";
        case w:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case l:
            var v = d;
            return T(v) + ".Consumer";
          case f:
            var E = d;
            return T(E._context) + ".Provider";
          case h:
            return pe(d, d.render, "ForwardRef");
          case x:
            var R = d.displayName || null;
            return R !== null ? R : k(d.type) || "Memo";
          case I: {
            var q = d, X = q._payload, z = q._init;
            try {
              return k(z(X));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, O = 0, L, D, W, H, re, V, G;
    function ne() {
    }
    ne.__reactDisabledLog = !0;
    function We() {
      {
        if (O === 0) {
          L = console.log, D = console.info, W = console.warn, H = console.error, re = console.group, V = console.groupCollapsed, G = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: ne,
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
    function Je() {
      {
        if (O--, O === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, d, {
              value: L
            }),
            info: C({}, d, {
              value: D
            }),
            warn: C({}, d, {
              value: W
            }),
            error: C({}, d, {
              value: H
            }),
            group: C({}, d, {
              value: re
            }),
            groupCollapsed: C({}, d, {
              value: V
            }),
            groupEnd: C({}, d, {
              value: G
            })
          });
        }
        O < 0 && N("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ge = P.ReactCurrentDispatcher, ot;
    function Re(d, v, E) {
      {
        if (ot === void 0)
          try {
            throw Error();
          } catch (q) {
            var R = q.stack.trim().match(/\n( *(at )?)/);
            ot = R && R[1] || "";
          }
        return `
` + ot + d;
      }
    }
    var Xe = !1, Ke;
    {
      var ur = typeof WeakMap == "function" ? WeakMap : Map;
      Ke = new ur();
    }
    function Tt(d, v) {
      if (!d || Xe)
        return "";
      {
        var E = Ke.get(d);
        if (E !== void 0)
          return E;
      }
      var R;
      Xe = !0;
      var q = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var X;
      X = Ge.current, Ge.current = null, We();
      try {
        if (v) {
          var z = function() {
            throw Error();
          };
          if (Object.defineProperty(z.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(z, []);
            } catch (ze) {
              R = ze;
            }
            Reflect.construct(d, [], z);
          } else {
            try {
              z.call();
            } catch (ze) {
              R = ze;
            }
            d.call(z.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ze) {
            R = ze;
          }
          d();
        }
      } catch (ze) {
        if (ze && R && typeof ze.stack == "string") {
          for (var M = ze.stack.split(`
`), me = R.stack.split(`
`), oe = M.length - 1, ce = me.length - 1; oe >= 1 && ce >= 0 && M[oe] !== me[ce]; )
            ce--;
          for (; oe >= 1 && ce >= 0; oe--, ce--)
            if (M[oe] !== me[ce]) {
              if (oe !== 1 || ce !== 1)
                do
                  if (oe--, ce--, ce < 0 || M[oe] !== me[ce]) {
                    var Ce = `
` + M[oe].replace(" at new ", " at ");
                    return d.displayName && Ce.includes("<anonymous>") && (Ce = Ce.replace("<anonymous>", d.displayName)), typeof d == "function" && Ke.set(d, Ce), Ce;
                  }
                while (oe >= 1 && ce >= 0);
              break;
            }
        }
      } finally {
        Xe = !1, Ge.current = X, Je(), Error.prepareStackTrace = q;
      }
      var dt = d ? d.displayName || d.name : "", un = dt ? Re(dt) : "";
      return typeof d == "function" && Ke.set(d, un), un;
    }
    function qe(d, v, E) {
      return Tt(d, !1);
    }
    function Ze(d) {
      var v = d.prototype;
      return !!(v && v.isReactComponent);
    }
    function st(d, v, E) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return Tt(d, Ze(d));
      if (typeof d == "string")
        return Re(d);
      switch (d) {
        case b:
          return Re("Suspense");
        case w:
          return Re("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case h:
            return qe(d.render);
          case x:
            return st(d.type, v, E);
          case I: {
            var R = d, q = R._payload, X = R._init;
            try {
              return st(X(q), v, E);
            } catch {
            }
          }
        }
      return "";
    }
    var at = Object.prototype.hasOwnProperty, lt = {}, Dt = P.ReactDebugCurrentFrame;
    function ct(d) {
      if (d) {
        var v = d._owner, E = st(d.type, d._source, v ? v.type : null);
        Dt.setExtraStackFrame(E);
      } else
        Dt.setExtraStackFrame(null);
    }
    function zt(d, v, E, R, q) {
      {
        var X = Function.call.bind(at);
        for (var z in d)
          if (X(d, z)) {
            var M = void 0;
            try {
              if (typeof d[z] != "function") {
                var me = Error((R || "React class") + ": " + E + " type `" + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw me.name = "Invariant Violation", me;
              }
              M = d[z](v, z, R, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (oe) {
              M = oe;
            }
            M && !(M instanceof Error) && (ct(q), N("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", R || "React class", E, z, typeof M), ct(null)), M instanceof Error && !(M.message in lt) && (lt[M.message] = !0, ct(q), N("Failed %s type: %s", E, M.message), ct(null));
          }
      }
    }
    var ut = Array.isArray;
    function ye(d) {
      return ut(d);
    }
    function St(d) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, E = v && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return E;
      }
    }
    function fr(d) {
      try {
        return Be(d), !1;
      } catch {
        return !0;
      }
    }
    function Be(d) {
      return "" + d;
    }
    function $t(d) {
      if (fr(d))
        return N("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", St(d)), Be(d);
    }
    var s = P.ReactCurrentOwner, r = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, i, c, p;
    p = {};
    function m(d) {
      if (at.call(d, "ref")) {
        var v = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function y(d) {
      if (at.call(d, "key")) {
        var v = Object.getOwnPropertyDescriptor(d, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function F(d, v) {
      if (typeof d.ref == "string" && s.current && v && s.current.stateNode !== v) {
        var E = k(s.current.type);
        p[E] || (N('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(s.current.type), d.ref), p[E] = !0);
      }
    }
    function ee(d, v) {
      {
        var E = function() {
          i || (i = !0, N("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        E.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function K(d, v) {
      {
        var E = function() {
          c || (c = !0, N("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        E.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var te = function(d, v, E, R, q, X, z) {
      var M = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: d,
        key: v,
        ref: E,
        props: z,
        // Record the component responsible for creating this element.
        _owner: X
      };
      return M._store = {}, Object.defineProperty(M._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(M, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.defineProperty(M, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: q
      }), Object.freeze && (Object.freeze(M.props), Object.freeze(M)), M;
    };
    function Y(d, v, E, R, q) {
      {
        var X, z = {}, M = null, me = null;
        E !== void 0 && ($t(E), M = "" + E), y(v) && ($t(v.key), M = "" + v.key), m(v) && (me = v.ref, F(v, q));
        for (X in v)
          at.call(v, X) && !r.hasOwnProperty(X) && (z[X] = v[X]);
        if (d && d.defaultProps) {
          var oe = d.defaultProps;
          for (X in oe)
            z[X] === void 0 && (z[X] = oe[X]);
        }
        if (M || me) {
          var ce = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          M && ee(z, ce), me && K(z, ce);
        }
        return te(d, M, me, q, R, s.current, z);
      }
    }
    var dr = P.ReactCurrentOwner, nn = P.ReactDebugCurrentFrame;
    function ft(d) {
      if (d) {
        var v = d._owner, E = st(d.type, d._source, v ? v.type : null);
        nn.setExtraStackFrame(E);
      } else
        nn.setExtraStackFrame(null);
    }
    var pr;
    pr = !1;
    function hr(d) {
      return typeof d == "object" && d !== null && d.$$typeof === t;
    }
    function on() {
      {
        if (dr.current) {
          var d = k(dr.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function Ai(d) {
      {
        if (d !== void 0) {
          var v = d.fileName.replace(/^.*[\\\/]/, ""), E = d.lineNumber;
          return `

Check your code at ` + v + ":" + E + ".";
        }
        return "";
      }
    }
    var sn = {};
    function Fi(d) {
      {
        var v = on();
        if (!v) {
          var E = typeof d == "string" ? d : d.displayName || d.name;
          E && (v = `

Check the top-level render call using <` + E + ">.");
        }
        return v;
      }
    }
    function an(d, v) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var E = Fi(v);
        if (sn[E])
          return;
        sn[E] = !0;
        var R = "";
        d && d._owner && d._owner !== dr.current && (R = " It was passed a child from " + k(d._owner.type) + "."), ft(d), N('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, R), ft(null);
      }
    }
    function ln(d, v) {
      {
        if (typeof d != "object")
          return;
        if (ye(d))
          for (var E = 0; E < d.length; E++) {
            var R = d[E];
            hr(R) && an(R, v);
          }
        else if (hr(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var q = $(d);
          if (typeof q == "function" && q !== d.entries)
            for (var X = q.call(d), z; !(z = X.next()).done; )
              hr(z.value) && an(z.value, v);
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
          var R = k(v);
          zt(E, d.props, "prop", R, d);
        } else if (v.PropTypes !== void 0 && !pr) {
          pr = !0;
          var q = k(v);
          N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", q || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Li(d) {
      {
        for (var v = Object.keys(d.props), E = 0; E < v.length; E++) {
          var R = v[E];
          if (R !== "children" && R !== "key") {
            ft(d), N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", R), ft(null);
            break;
          }
        }
        d.ref !== null && (ft(d), N("Invalid attribute `ref` supplied to `React.Fragment`."), ft(null));
      }
    }
    function cn(d, v, E, R, q, X) {
      {
        var z = je(d);
        if (!z) {
          var M = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (M += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var me = Ai(q);
          me ? M += me : M += on();
          var oe;
          d === null ? oe = "null" : ye(d) ? oe = "array" : d !== void 0 && d.$$typeof === t ? (oe = "<" + (k(d.type) || "Unknown") + " />", M = " Did you accidentally export a JSX literal instead of a component?") : oe = typeof d, N("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", oe, M);
        }
        var ce = Y(d, v, E, q, X);
        if (ce == null)
          return ce;
        if (z) {
          var Ce = v.children;
          if (Ce !== void 0)
            if (R)
              if (ye(Ce)) {
                for (var dt = 0; dt < Ce.length; dt++)
                  ln(Ce[dt], d);
                Object.freeze && Object.freeze(Ce);
              } else
                N("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ln(Ce, d);
        }
        return d === o ? Li(ce) : Oi(ce), ce;
      }
    }
    function Ni(d, v, E) {
      return cn(d, v, E, !0);
    }
    function Mi(d, v, E) {
      return cn(d, v, E, !1);
    }
    var Ui = Mi, Di = Ni;
    kt.Fragment = o, kt.jsx = Ui, kt.jsxs = Di;
  }()), kt;
}
Ie.process.env.NODE_ENV === "production" ? Cr.exports = uo() : Cr.exports = fo();
var g = Cr.exports;
var At = {}, Pt = Vi;
if (Ie.process.env.NODE_ENV === "production")
  At.createRoot = Pt.createRoot, At.hydrateRoot = Pt.hydrateRoot;
else {
  var Vt = Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  At.createRoot = function(e, t) {
    Vt.usingClientEntryPoint = !0;
    try {
      return Pt.createRoot(e, t);
    } finally {
      Vt.usingClientEntryPoint = !1;
    }
  }, At.hydrateRoot = function(e, t, n) {
    Vt.usingClientEntryPoint = !0;
    try {
      return Pt.hydrateRoot(e, t, n);
    } finally {
      Vt.usingClientEntryPoint = !1;
    }
  };
}
function Yt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Yt = function(n) {
    return typeof n;
  } : Yt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Yt(e);
}
function po(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var o = t[n];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
  }
}
function ho(e, t, n) {
  return t && pn(e.prototype, t), n && pn(e, n), e;
}
function mo(e, t) {
  return t && (Yt(t) === "object" || typeof t == "function") ? t : Jt(e);
}
function kr(e) {
  return kr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, kr(e);
}
function Jt(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function wo(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Pr(e, t);
}
function Pr(e, t) {
  return Pr = Object.setPrototypeOf || function(o, a) {
    return o.__proto__ = a, o;
  }, Pr(e, t);
}
function Xt(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Wn = /* @__PURE__ */ function(e) {
  wo(t, e);
  function t() {
    var n, o;
    po(this, t);
    for (var a = arguments.length, u = new Array(a), f = 0; f < a; f++)
      u[f] = arguments[f];
    return o = mo(this, (n = kr(t)).call.apply(n, [this].concat(u))), Xt(Jt(o), "state", {
      bootstrapped: !1
    }), Xt(Jt(o), "_unsubscribe", void 0), Xt(Jt(o), "handlePersistorState", function() {
      var l = o.props.persistor, h = l.getState(), b = h.bootstrapped;
      b && (o.props.onBeforeLift ? Promise.resolve(o.props.onBeforeLift()).finally(function() {
        return o.setState({
          bootstrapped: !0
        });
      }) : o.setState({
        bootstrapped: !0
      }), o._unsubscribe && o._unsubscribe());
    }), o;
  }
  return ho(t, [{
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
      return Ie.process.env.NODE_ENV !== "production" && typeof this.props.children == "function" && this.props.loading && console.error("redux-persist: PersistGate expects either a function child or loading prop, but not both. The loading prop will be ignored."), typeof this.props.children == "function" ? this.props.children(this.state.bootstrapped) : this.state.bootstrapped ? this.props.children : this.props.loading;
    }
  }]), t;
}(zi);
Xt(Wn, "defaultProps", {
  children: null,
  loading: null
});
var Fe = /* @__PURE__ */ ((e) => (e.text = "text", e.buttons = "buttons", e.payment = "payment", e.video = "video", e.image = "image", e.email = "email", e))(Fe || {}), $r = /* @__PURE__ */ ((e) => (e.horizontal = "horizontal", e.vertical = "vertical", e))($r || {}), et = /* @__PURE__ */ ((e) => (e.chat = "utm_chat", e))(et || {}), be = /* @__PURE__ */ ((e) => (e.addToCart = "AddToCart", e.contact = "Contact", e.initiateCheckout = "InitiateCheckout", e.pageView = "PageView", e.viewContent = "ViewContent", e.purchase = "Purchase", e.subscribe = "Subscribe", e.recurringSubscriptionPayment = "RecurringSubscriptionPayment", e.cancelSubscription = "CancelSubscription", e.purchaseFailed = "PurchaseFailed", e.subscribeFailed = "SubscribeFailed", e.recurringSubscriptionPaymentFailed = "RecurringSubscriptionPaymentFailed", e.customerCreated = "CustomerCreated", e.subscriptionChargeback = "SubscriptionChargeback", e.subscriptionRefund = "SubscriptionRefund", e.transactionChargeback = "TransactionChargeback", e.transactionRefund = "TransactionRefund", e.firstMessage = "FirstMessage", e.linkProvided = "LinkProvided", e.linkClicked = "LinkClicked", e.emailField = "EmailField", e.emailEntered = "EmailEntered", e.emailWrong = "EmailWrong", e.emailExist = "EmailExist", e.priceSeen = "PriceSeen", e.buttonClick = "ButtonClick", e.closeClicked = "CloseClicked", e))(be || {}), Gn = /* @__PURE__ */ ((e) => (e.email = "email_intent", e.payment = "payment_intent", e.emailError = "email_validation_error", e.emailSuccess = "email_validation_success", e.destroy = "payment_intent_destroy", e))(Gn || {}), Q = /* @__PURE__ */ ((e) => (e.user = "user", e.assistant = "assistant", e))(Q || {}), ke = /* @__PURE__ */ ((e) => (e.chat = "chat", e.chatHistory = "chat-history", e.connect = "connect", e.error = "error", e.disconnect = "disconnect", e.streamStart = "stream-start", e.streamData = "stream-data", e.streamEnd = "stream-end", e.streamError = "stream-error", e))(ke || {}), qn = /* @__PURE__ */ ((e) => (e.light = "light", e.dark = "dark", e))(qn || {});
const gt = (e) => new URLSearchParams(window.location.search).get(e) || "", go = {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric"
};
function yo(e, t = go) {
  return `${new Date(e).toLocaleDateString([], t)}`.toUpperCase();
}
function fe() {
  const e = new Array(36);
  for (let t = 0; t < 36; t++)
    e[t] = Math.floor(Math.random() * 16);
  return e[14] = 4, e[19] = e[19] &= -5, e[19] = e[19] |= 8, e[8] = e[13] = e[18] = e[23] = "-", e.map((t) => t.toString(16)).join("");
}
const ht = {
  cid: "",
  eid: "",
  region: "",
  systemType: "",
  pd: {},
  marketing: {
    screen: {},
    lastUtmParams: {},
    utmParams: {}
  }
}, Oe = {
  aiProfile: {
    name: "",
    role: "",
    imgSrc: "",
    welcome: "",
    initialMessage: []
  },
  close: {
    href: null,
    visible: !1
  },
  translations: {},
  themeId: qn.light,
  chatUrl: "",
  enableDevTools: !1,
  isPluginMode: !1,
  purpose: "default",
  specialUrls: {}
}, mt = {
  outgoing: {
    term: "",
    user_id: "",
    role: Q.user,
    message: ""
  },
  historyData: {},
  historyIds: [],
  error: "",
  isLoading: !1,
  typingTimeoutExpired: !1,
  lastGroupId: fe(),
  connected: !1,
  closed: !1,
  isStreaming: !1
}, bo = {
  email: {
    current: "",
    success: !1,
    error: !1,
    isLoading: !1
  },
  response: {
    isFormVisible: !1,
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
  link: ""
}, Hn = or({
  name: "config",
  initialState: Oe,
  reducers: {
    setConfig(e, { payload: t }) {
      e.aiProfile = { ...Oe.aiProfile, ...t.aiProfile }, e.translations = { ...Oe.translations, ...t.translations }, e.close = { ...Oe.close, ...t.close }, e.themeId = t.themeId, e.chatUrl = t.chatUrl, e.purpose = t.purpose;
    },
    setSpecialUrls(e, { payload: t }) {
      e.specialUrls = { ...e.specialUrls, ...t };
    },
    setPurpose(e, { payload: t }) {
      e.purpose = t;
    },
    resetConfig(e) {
      e.aiProfile = Oe.aiProfile, e.themeId = Oe.themeId, e.translations = Oe.translations, e.chatUrl = Oe.chatUrl;
    },
    setTheme(e, { payload: t }) {
      e.themeId = t;
    },
    resetTheme(e) {
      e.themeId = Oe.themeId;
    },
    setDevToolsStatus(e, { payload: t }) {
      e.enableDevTools = t;
    },
    resetDevToolsStatus(e) {
      e.enableDevTools = Oe.enableDevTools;
    },
    togglePluginMode(e) {
      e.isPluginMode = !e.isPluginMode;
    },
    setTranslations(e, { payload: t }) {
      e.translations = { ...e.translations, ...t };
    }
  }
}), se = (e) => e.config, {
  setConfig: Yn,
  resetConfig: hl,
  setTheme: ml,
  resetTheme: wl,
  setDevToolsStatus: gl,
  resetDevToolsStatus: yl,
  togglePluginMode: bl,
  setTranslations: xl,
  setPurpose: xo,
  setSpecialUrls: vo
} = Hn.actions, Eo = Hn.reducer, Jn = or({
  name: "meta",
  initialState: ht,
  reducers: {
    setMeta(e, { payload: t }) {
      e.cid = t.cid, e.eid = t.eid, e.systemType = t.systemType, e.pd = { ...e.pd, ...t.pd }, e.marketing = { ...e.marketing, ...t.marketing };
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
}), Ut = (e) => e.meta, { setMeta: Io, resetMeta: vl, setMarketing: To, setPd: So, setRegion: Co } = Jn.actions, ko = Jn.reducer, Ye = Gi, j = Wi, Po = () => {
  const [e, t] = xt([0, 0]);
  return $i(() => {
    function n() {
      t([window.innerWidth, window.innerHeight]);
    }
    return window.addEventListener("resize", n), n(), () => window.removeEventListener("resize", n);
  }, []), e;
}, _o = () => {
  const { themeId: e, close: t } = j(se), { cid: n, systemType: o, marketing: a } = j(Ut);
  return {
    theme: e,
    closeVisible: t.visible,
    cid: n,
    systemType: o,
    marketing: a
  };
};
var hn = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ve = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, jo = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function Xn(e, t) {
  e.forEach(function(n) {
    Array.isArray(n) ? Xn(n, t) : t.push(n);
  });
}
function Kn(e) {
  let t = [];
  return Xn(e, t), t;
}
var Zn = (...e) => Kn(e).filter(Boolean), Qn = (e, t) => {
  let n = {}, o = Object.keys(e), a = Object.keys(t);
  for (let u of o)
    if (a.includes(u)) {
      let f = e[u], l = t[u];
      typeof f == "object" && typeof l == "object" ? n[u] = Qn(f, l) : Array.isArray(f) || Array.isArray(l) ? n[u] = Zn(l, f) : n[u] = l + " " + f;
    } else
      n[u] = e[u];
  for (let u of a)
    o.includes(u) || (n[u] = t[u]);
  return n;
}, mn = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
function Ro() {
  for (var e = 0, t, n, o = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = ei(t)) && (o && (o += " "), o += n);
  return o;
}
function ei(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", o = 0; o < e.length; o++)
    e[o] && (t = ei(e[o])) && (n && (n += " "), n += t);
  return n;
}
var Vr = "-";
function Bo(e) {
  var t = Fo(e), n = e.conflictingClassGroups, o = e.conflictingClassGroupModifiers, a = o === void 0 ? {} : o;
  function u(l) {
    var h = l.split(Vr);
    return h[0] === "" && h.length !== 1 && h.shift(), ti(h, t) || Ao(l);
  }
  function f(l, h) {
    var b = n[l] || [];
    return h && a[l] ? [].concat(b, a[l]) : b;
  }
  return {
    getClassGroupId: u,
    getConflictingClassGroupIds: f
  };
}
function ti(e, t) {
  var f;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], o = t.nextPart.get(n), a = o ? ti(e.slice(1), o) : void 0;
  if (a)
    return a;
  if (t.validators.length !== 0) {
    var u = e.join(Vr);
    return (f = t.validators.find(function(l) {
      var h = l.validator;
      return h(u);
    })) == null ? void 0 : f.classGroupId;
  }
}
var wn = /^\[(.+)\]$/;
function Ao(e) {
  if (wn.test(e)) {
    var t = wn.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function Fo(e) {
  var t = e.theme, n = e.prefix, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, a = Lo(Object.entries(e.classGroups), n);
  return a.forEach(function(u) {
    var f = u[0], l = u[1];
    _r(l, o, f, t);
  }), o;
}
function _r(e, t, n, o) {
  e.forEach(function(a) {
    if (typeof a == "string") {
      var u = a === "" ? t : gn(t, a);
      u.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (Oo(a)) {
        _r(a(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: n
      });
      return;
    }
    Object.entries(a).forEach(function(f) {
      var l = f[0], h = f[1];
      _r(h, gn(t, l), n, o);
    });
  });
}
function gn(e, t) {
  var n = e;
  return t.split(Vr).forEach(function(o) {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}
function Oo(e) {
  return e.isThemeGetter;
}
function Lo(e, t) {
  return t ? e.map(function(n) {
    var o = n[0], a = n[1], u = a.map(function(f) {
      return typeof f == "string" ? t + f : typeof f == "object" ? Object.fromEntries(Object.entries(f).map(function(l) {
        var h = l[0], b = l[1];
        return [t + h, b];
      })) : f;
    });
    return [o, u];
  }) : e;
}
function No(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  function a(u, f) {
    n.set(u, f), t++, t > e && (t = 0, o = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get: function(f) {
      var l = n.get(f);
      if (l !== void 0)
        return l;
      if ((l = o.get(f)) !== void 0)
        return a(f, l), l;
    },
    set: function(f, l) {
      n.has(f) ? n.set(f, l) : a(f, l);
    }
  };
}
var ri = "!";
function Mo(e) {
  var t = e.separator || ":", n = t.length === 1, o = t[0], a = t.length;
  return function(f) {
    for (var l = [], h = 0, b = 0, w, x = 0; x < f.length; x++) {
      var I = f[x];
      if (h === 0) {
        if (I === o && (n || f.slice(x, x + a) === t)) {
          l.push(f.slice(b, x)), b = x + a;
          continue;
        }
        if (I === "/") {
          w = x;
          continue;
        }
      }
      I === "[" ? h++ : I === "]" && h--;
    }
    var S = l.length === 0 ? f : f.substring(b), B = S.startsWith(ri), _ = B ? S.substring(1) : S, $ = w && w > b ? w - b : void 0;
    return {
      modifiers: l,
      hasImportantModifier: B,
      baseClassName: _,
      maybePostfixModifierPosition: $
    };
  };
}
function Uo(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(o) {
    var a = o[0] === "[";
    a ? (t.push.apply(t, n.sort().concat([o])), n = []) : n.push(o);
  }), t.push.apply(t, n.sort()), t;
}
function Do(e) {
  return {
    cache: No(e.cacheSize),
    splitModifiers: Mo(e),
    ...Bo(e)
  };
}
var zo = /\s+/;
function $o(e, t) {
  var n = t.splitModifiers, o = t.getClassGroupId, a = t.getConflictingClassGroupIds, u = /* @__PURE__ */ new Set();
  return e.trim().split(zo).map(function(f) {
    var l = n(f), h = l.modifiers, b = l.hasImportantModifier, w = l.baseClassName, x = l.maybePostfixModifierPosition, I = o(x ? w.substring(0, x) : w), S = !!x;
    if (!I) {
      if (!x)
        return {
          isTailwindClass: !1,
          originalClassName: f
        };
      if (I = o(w), !I)
        return {
          isTailwindClass: !1,
          originalClassName: f
        };
      S = !1;
    }
    var B = Uo(h).join(":"), _ = b ? B + ri : B;
    return {
      isTailwindClass: !0,
      modifierId: _,
      classGroupId: I,
      originalClassName: f,
      hasPostfixModifier: S
    };
  }).reverse().filter(function(f) {
    if (!f.isTailwindClass)
      return !0;
    var l = f.modifierId, h = f.classGroupId, b = f.hasPostfixModifier, w = l + h;
    return u.has(w) ? !1 : (u.add(w), a(h, b).forEach(function(x) {
      return u.add(l + x);
    }), !0);
  }).reverse().map(function(f) {
    return f.originalClassName;
  }).join(" ");
}
function jr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var o, a, u, f = l;
  function l(b) {
    var w = t[0], x = t.slice(1), I = x.reduce(function(S, B) {
      return B(S);
    }, w());
    return o = Do(I), a = o.cache.get, u = o.cache.set, f = h, h(b);
  }
  function h(b) {
    var w = a(b);
    if (w)
      return w;
    var x = $o(b, o);
    return u(b, x), x;
  }
  return function() {
    return f(Ro.apply(null, arguments));
  };
}
function Z(e) {
  var t = function(o) {
    return o[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var ni = /^\[(?:([a-z-]+):)?(.+)\]$/i, Vo = /^\d+\/\d+$/, Wo = /* @__PURE__ */ new Set(["px", "full", "screen"]), Go = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, qo = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ho = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Ae(e) {
  return rt(e) || Wo.has(e) || Vo.test(e) || Rr(e);
}
function Rr(e) {
  return it(e, "length", Qo);
}
function Yo(e) {
  return it(e, "size", ii);
}
function Jo(e) {
  return it(e, "position", ii);
}
function Xo(e) {
  return it(e, "url", es);
}
function Wt(e) {
  return it(e, "number", rt);
}
function rt(e) {
  return !Number.isNaN(Number(e));
}
function Ko(e) {
  return e.endsWith("%") && rt(e.slice(0, -1));
}
function _t(e) {
  return yn(e) || it(e, "number", yn);
}
function U(e) {
  return ni.test(e);
}
function jt() {
  return !0;
}
function He(e) {
  return Go.test(e);
}
function Zo(e) {
  return it(e, "", ts);
}
function it(e, t, n) {
  var o = ni.exec(e);
  return o ? o[1] ? o[1] === t : n(o[2]) : !1;
}
function Qo(e) {
  return qo.test(e);
}
function ii() {
  return !1;
}
function es(e) {
  return e.startsWith("url(");
}
function yn(e) {
  return Number.isInteger(Number(e));
}
function ts(e) {
  return Ho.test(e);
}
function Br() {
  var e = Z("colors"), t = Z("spacing"), n = Z("blur"), o = Z("brightness"), a = Z("borderColor"), u = Z("borderRadius"), f = Z("borderSpacing"), l = Z("borderWidth"), h = Z("contrast"), b = Z("grayscale"), w = Z("hueRotate"), x = Z("invert"), I = Z("gap"), S = Z("gradientColorStops"), B = Z("gradientColorStopPositions"), _ = Z("inset"), $ = Z("margin"), P = Z("opacity"), N = Z("padding"), le = Z("saturate"), we = Z("scale"), A = Z("sepia"), he = Z("skew"), ge = Z("space"), _e = Z("translate"), xe = function() {
    return ["auto", "contain", "none"];
  }, je = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, pe = function() {
    return ["auto", U, t];
  }, T = function() {
    return [U, t];
  }, k = function() {
    return ["", Ae];
  }, C = function() {
    return ["auto", rt, U];
  }, O = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, L = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, D = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, W = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, H = function() {
    return ["", "0", U];
  }, re = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, V = function() {
    return [rt, Wt];
  }, G = function() {
    return [rt, U];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [jt],
      spacing: [Ae],
      blur: ["none", "", He, U],
      brightness: V(),
      borderColor: [e],
      borderRadius: ["none", "", "full", He, U],
      borderSpacing: T(),
      borderWidth: k(),
      contrast: V(),
      grayscale: H(),
      hueRotate: G(),
      invert: H(),
      gap: T(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Ko, Rr],
      inset: pe(),
      margin: pe(),
      opacity: V(),
      padding: T(),
      saturate: V(),
      scale: V(),
      sepia: H(),
      skew: G(),
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
        aspect: ["auto", "square", "video", U]
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
        "break-after": re()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": re()
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
        object: [].concat(O(), [U])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: je()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": je()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": je()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: xe()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": xe()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": xe()
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
        inset: [_]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [_]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [_]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [_]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [_]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [_]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [_]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [_]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [_]
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
        z: ["auto", _t]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: pe()
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
        flex: ["1", "auto", "initial", "none", U]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: H()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: H()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", _t]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [jt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", _t]
        }, U]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": C()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": C()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [jt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [_t]
        }, U]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": C()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": C()
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
        "auto-cols": ["auto", "min", "max", "fr", U]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", U]
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
        justify: ["normal"].concat(W())
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
        content: ["normal"].concat(W(), ["baseline"])
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
        "place-content": [].concat(W(), ["baseline"])
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
        m: [$]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [$]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [$]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [$]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [$]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [$]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [$]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [$]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [$]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [ge]
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
        "space-y": [ge]
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
        w: ["auto", "min", "max", "fit", U, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", U, Ae]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [He]
        }, He, U]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [U, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", U, Ae]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [U, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", He, Rr]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Wt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [jt]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", U]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", rt, Wt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", U, Ae]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", U]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", U]
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
        "placeholder-opacity": [P]
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
        "text-opacity": [P]
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
        decoration: [].concat(L(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ae]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", U, Ae]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", U]
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
        content: ["none", U]
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
        "bg-opacity": [P]
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
        bg: [].concat(O(), [Jo])
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
        bg: ["auto", "cover", "contain", Yo]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Xo]
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
        from: [B]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [B]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [B]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [S]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [S]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [S]
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
        "border-opacity": [P]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(L(), ["hidden"])
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
        "divide-opacity": [P]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: L()
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
        outline: [""].concat(L())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [U, Ae]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ae]
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
        ring: k()
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
        "ring-opacity": [P]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Ae]
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
        shadow: ["", "inner", "none", He, Zo]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [jt]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [P]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": D()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": D()
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
        blur: [n]
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
        "drop-shadow": ["", "none", He, U]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [b]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [w]
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
        saturate: [le]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [A]
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
        "backdrop-blur": [n]
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
        "backdrop-grayscale": [b]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [w]
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
        "backdrop-opacity": [P]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [le]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [A]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", U]
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
        ease: ["linear", "in", "out", "in-out", U]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", U]
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
        rotate: [_t, U]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [_e]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [_e]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [he]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [he]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", U]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", U]
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
        "will-change": ["auto", "scroll", "contents", "transform", U]
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
        stroke: [Ae, Wt]
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
function rs(e, t) {
  for (var n in t)
    oi(e, n, t[n]);
  return e;
}
var ns = Object.prototype.hasOwnProperty, is = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function oi(e, t, n) {
  if (!ns.call(e, t) || is.has(typeof n) || n === null) {
    e[t] = n;
    return;
  }
  if (Array.isArray(n) && Array.isArray(e[t])) {
    e[t] = e[t].concat(n);
    return;
  }
  if (typeof n == "object" && typeof e[t] == "object") {
    if (e[t] === null) {
      e[t] = n;
      return;
    }
    for (var o in n)
      oi(e[t], o, n[o]);
  }
}
function os(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    n[o - 1] = arguments[o];
  return typeof e == "function" ? jr.apply(void 0, [Br, e].concat(n)) : jr.apply(void 0, [function() {
    return rs(Br(), e);
  }].concat(n));
}
var ss = /* @__PURE__ */ jr(Br), as = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, si = (e) => e || void 0, Ot = (...e) => si(Kn(e).filter(Boolean).join(" ")), wr = null, Qt = {}, Ar = !1, Rt = (...e) => (t) => t.twMerge ? ((!wr || Ar) && (Ar = !1, wr = ve(Qt) ? ss : os(Qt)), si(wr(Ot(e)))) : Ot(e), bn = (e, t) => {
  for (let n in t)
    e.hasOwnProperty(n) ? e[n] = Ot(e[n], t[n]) : e[n] = t[n];
  return e;
}, ie = (e, t) => {
  let { extend: n = null, slots: o = {}, variants: a = {}, compoundVariants: u = [], compoundSlots: f = [], defaultVariants: l = {} } = e, h = { ...as, ...t }, b = n != null && n.base ? Ot(n.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, w = n != null && n.variants && !ve(n.variants) ? Qn(a, n.variants) : a, x = n != null && n.defaultVariants && !ve(n.defaultVariants) ? { ...n.defaultVariants, ...l } : l;
  !ve(h.twMergeConfig) && !jo(h.twMergeConfig, Qt) && (Ar = !0, Qt = h.twMergeConfig);
  let I = ve(n == null ? void 0 : n.slots), S = ve(o) ? {} : { base: Ot(e == null ? void 0 : e.base, I && (n == null ? void 0 : n.base)), ...o }, B = I ? S : bn({ ...n == null ? void 0 : n.slots }, ve(S) ? { base: e == null ? void 0 : e.base } : S), _ = (P) => {
    if (ve(w) && ve(o) && I)
      return Rt(b, P == null ? void 0 : P.class, P == null ? void 0 : P.className)(h);
    if (u && !Array.isArray(u))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof u}`);
    if (f && !Array.isArray(f))
      throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof f}`);
    let N = (T, k, C = [], O) => {
      let L = C;
      if (typeof k == "string")
        L = L.concat(mn(k).split(" ").map((D) => `${T}:${D}`));
      else if (Array.isArray(k))
        L = L.concat(k.reduce((D, W) => D.concat(`${T}:${W}`), []));
      else if (typeof k == "object" && typeof O == "string") {
        for (let D in k)
          if (k.hasOwnProperty(D) && D === O) {
            let W = k[D];
            if (W && typeof W == "string") {
              let H = mn(W);
              L[O] ? L[O] = L[O].concat(H.split(" ").map((re) => `${T}:${re}`)) : L[O] = H.split(" ").map((re) => `${T}:${re}`);
            } else
              Array.isArray(W) && W.length > 0 && (L[O] = W.reduce((H, re) => H.concat(`${T}:${re}`), []));
          }
      }
      return L;
    }, le = (T, k = w, C = null, O = null) => {
      var L;
      let D = k[T];
      if (!D || ve(D))
        return null;
      let W = (L = O == null ? void 0 : O[T]) != null ? L : P == null ? void 0 : P[T];
      if (W === null)
        return null;
      let H = hn(W), re = Array.isArray(h.responsiveVariants) && h.responsiveVariants.length > 0 || h.responsiveVariants === !0, V = x == null ? void 0 : x[T], G = [];
      if (typeof H == "object" && re)
        for (let [We, Je] of Object.entries(H)) {
          let Ge = D[Je];
          if (We === "initial") {
            V = Je;
            continue;
          }
          Array.isArray(h.responsiveVariants) && !h.responsiveVariants.includes(We) || (G = N(We, Ge, G, C));
        }
      let ne = D[H] || D[hn(V)];
      return typeof G == "object" && typeof C == "string" && G[C] ? bn(G, ne) : G.length > 0 ? (G.push(ne), G) : ne;
    }, we = () => w ? Object.keys(w).map((T) => le(T, w)) : null, A = (T, k) => {
      if (!w || typeof w != "object")
        return null;
      let C = new Array();
      for (let O in w) {
        let L = le(O, w, T, k), D = T === "base" && typeof L == "string" ? L : L && L[T];
        D && (C[C.length] = D);
      }
      return C;
    }, he = {};
    for (let T in P)
      P[T] !== void 0 && (he[T] = P[T]);
    let ge = (T, k) => {
      var C;
      let O = typeof (P == null ? void 0 : P[T]) == "object" ? { [T]: (C = P[T]) == null ? void 0 : C.initial } : {};
      return { ...x, ...he, ...O, ...k };
    }, _e = (T = [], k) => {
      let C = [];
      for (let { class: O, className: L, ...D } of T) {
        let W = !0;
        for (let [H, re] of Object.entries(D)) {
          let V = ge(H, k);
          if (Array.isArray(re)) {
            if (!re.includes(V[H])) {
              W = !1;
              break;
            }
          } else if (V[H] !== re) {
            W = !1;
            break;
          }
        }
        W && (O && C.push(O), L && C.push(L));
      }
      return C;
    }, xe = (T) => {
      let k = _e(u, T), C = _e(n == null ? void 0 : n.compoundVariants, T);
      return Zn(C, k);
    }, je = (T) => {
      let k = xe(T);
      if (!Array.isArray(k))
        return k;
      let C = {};
      for (let O of k)
        if (typeof O == "string" && (C.base = Rt(C.base, O)(h)), typeof O == "object")
          for (let [L, D] of Object.entries(O))
            C[L] = Rt(C[L], D)(h);
      return C;
    }, pe = (T) => {
      if (f.length < 1)
        return null;
      let k = {};
      for (let { slots: C = [], class: O, className: L, ...D } of f) {
        if (!ve(D)) {
          let W = !0;
          for (let H of Object.keys(D)) {
            let re = ge(H, T)[H];
            if (re === void 0 || (Array.isArray(D[H]) ? !D[H].includes(re) : D[H] !== re)) {
              W = !1;
              break;
            }
          }
          if (!W)
            continue;
        }
        for (let W of C)
          k[W] = k[W] || [], k[W].push([O, L]);
      }
      return k;
    };
    if (!ve(o) || !I) {
      let T = {};
      if (typeof B == "object" && !ve(B))
        for (let k of Object.keys(B))
          T[k] = (C) => {
            var O, L;
            return Rt(B[k], A(k, C), ((O = je(C)) != null ? O : [])[k], ((L = pe(C)) != null ? L : [])[k], C == null ? void 0 : C.class, C == null ? void 0 : C.className)(h);
          };
      return T;
    }
    return Rt(b, we(), xe(), P == null ? void 0 : P.class, P == null ? void 0 : P.className)(h);
  }, $ = () => {
    if (!(!w || typeof w != "object"))
      return Object.keys(w);
  };
  return _.variantKeys = $(), _.extend = n, _.base = b, _.slots = B, _.variants = w, _.defaultVariants = x, _.compoundSlots = f, _.compoundVariants = u, _;
};
const ls = (
  /*tw*/
  ie({
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
), cs = (
  /*tw*/
  ie({
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
), ai = (
  /*tw*/
  ie({
    slots: {
      base: "tw--flex tw--items-center tw--flex-wrap tw--px-5 tw--mt-[11px]",
      input: "tw--flex-1 tw--pr-2",
      button: "tw--flex tw--grow-0"
    }
  })
), us = ({ head: e, stream: t, foot: n }) => {
  const { themeId: o, isPluginMode: a } = j(se), { base: u, wrapper: f } = ls({ theme: o }), l = Po();
  return /* @__PURE__ */ g.jsx(
    "div",
    {
      "data-e2e": "base-container",
      style: { height: `${l[1]}px` },
      className: u({ minimized: a }),
      children: /* @__PURE__ */ g.jsxs("div", { className: f(), children: [
        e,
        t,
        n
      ] })
    }
  );
}, fs = (
  /*tw*/
  ie({
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
), ds = ({ children: e }) => {
  const { themeId: t } = j(se), { base: n } = fs({ theme: t });
  return /* @__PURE__ */ g.jsx("div", { className: n(), children: e });
}, Ee = ({
  eventType: e,
  systemType: t,
  utmParams: n,
  customerUuid: o,
  email: a,
  phone: u
}) => {
  if (window.trackEventInGTM && window.tracking) {
    const f = window.tracking.event({
      eventType: e,
      systemType: t,
      uri: window.location.pathname,
      domain: window.location.hostname,
      customerUuid: o,
      email: a || null,
      phone: u || null,
      additionalData: {},
      utmParams: n
    });
    window.tracking.trackClient(f), window.trackEventInGTM && window.trackEventInGTM(f);
  }
};
window.tracking = window.tracking || null;
window.trackEventInGTM = window.trackEventInGTM || null;
const li = (
  /*tw*/
  ie({
    slots: {
      btn: "tw--flex-1 tw--space-x-2 tw--text-white tw--text-center tw--bg-dark-neon tw--max-w-[280px] tw--mx-auto tw--px-4 tw--py-3 tw--font-bold tw--rounded-[20px] tw--shadow-[0px_12px_24px_-4px_rgba(1,154,255,0.2)] tw--flex tw--justify-center tw--items-center tw--cursor-pointer tw--relative tw--w-full tw--text-xl max-h-[46px] tw--mb-[11px] customXs:max-h-[52px]",
      link: "tw--flex-1 tw--space-x-2 tw--text-white tw--text-center tw--bg-dark-neon tw--max-w-[280px] tw--mx-auto tw--px-4 tw--py-3 tw--font-extrabold tw--rounded-[20px] tw--shadow-[0px_12px_24px_-4px_rgba(1,154,255,0.2)] tw--flex tw--justify-center tw--items-center tw--cursor-pointer tw--relative tw--w-full tw--mb-[11px] spaced-letters max-h-[46px] customXs:max-h-[52px] customXs:tw--max-w-xs customXs:te--text-[20px] customXs:tw--text-xl"
    }
  })
), ps = (
  /*tw*/
  ie({
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
), hs = (
  /*tw*/
  ie({
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
), ms = (
  /*tw*/
  ie({
    slots: {
      base: "tw--absolute tw--top-[-30px] tw--right-[-10px] tw--w-6 tw--h-6 tw--p-1 tw--bg-white tw--rounded-full tw--cursor-pointer tw--text-muted-blue"
    }
  })
), ws = ie({
  slots: {
    base: "tw--mt-[30px] tw--flex tw--items-center tw--justify-center tw--text-[12.8px] tw--leading-[1.56] tw--text-light-seraph tw--font-bold",
    icon: "tw--mr-[5px]"
  }
}), gs = ie({
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
}), ys = ({ text: e, onClick: t, e2e: n, disabled: o = !1 }) => {
  const { themeId: a } = j(se), u = j((h) => h.meta), f = j((h) => h.intentions.email.current), { btn: l } = li({ theme: a });
  return Mt(() => {
    const h = {
      eventType: be.addToCart,
      systemType: u.systemType,
      utmParams: u.marketing.lastUtmParams,
      customerUuid: u.cid,
      email: f
    };
    Ee(h), h.eventType = be.priceSeen, Ee(h);
  }, []), /* @__PURE__ */ g.jsxs(
    "button",
    {
      onClick: t,
      className: l(),
      disabled: o,
      type: "button",
      "data-e2e": n,
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
}, bs = ({ onClick: e }) => {
  const { base: t } = ms();
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
}, xs = () => {
  const { base: e, icon: t } = ws();
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
}, vs = ({ config: e }) => {
  const { translations: t } = j((x) => x.config), { wrapper: n, left: o, leftTop: a, icon: u, text: f, bottom: l, right: h, price: b, info: w } = hs();
  return /* @__PURE__ */ g.jsx("header", { children: /* @__PURE__ */ g.jsxs("div", { className: n(), children: [
    /* @__PURE__ */ g.jsxs("span", { className: o(), children: [
      /* @__PURE__ */ g.jsxs("div", { className: a(), children: [
        /* @__PURE__ */ g.jsx("span", { className: u(), children: /* @__PURE__ */ g.jsx("svg", { width: "26", height: "26", children: /* @__PURE__ */ g.jsx("use", { xlinkHref: "/img/sprite.svg#secured-check" }) }) }),
        /* @__PURE__ */ g.jsx("span", { className: f(), dangerouslySetInnerHTML: { __html: t.paymentHeaderTxt1 } })
      ] }),
      /* @__PURE__ */ g.jsx("div", { className: l(), children: t.paymentHeaderTxt2 })
    ] }),
    /* @__PURE__ */ g.jsxs("div", { className: h(), children: [
      /* @__PURE__ */ g.jsx("div", { className: b(), children: e.price }),
      /* @__PURE__ */ g.jsx("div", { className: w(), children: e.period })
    ] })
  ] }) });
}, ci = Nn((e, t) => {
  const { link: n } = li(), { href: o, text: a, onClick: u, e2e: f = null } = e;
  return /* @__PURE__ */ g.jsx(
    "a",
    {
      className: n(),
      "data-e2e": f,
      href: o,
      onClick: u,
      ref: t,
      children: a
    }
  );
});
ci.displayName = "Link";
const Es = ({ texts: e = [], title: t = "" }) => {
  const { themeId: n } = j(se), {
    wrapper: o,
    inner: a,
    dots: u,
    dotsIn: f,
    icon: l,
    progressCheckmark: h,
    panelTitle: b,
    spinningTexts: w,
    filmContainer: x,
    film: I
  } = gs({ theme: n });
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
          /* @__PURE__ */ g.jsx("p", { className: b(), children: t })
        ] }),
        /* @__PURE__ */ g.jsx("div", { className: x(), children: /* @__PURE__ */ g.jsx("div", { className: I(), children: e.map((S) => /* @__PURE__ */ g.jsx("div", { className: w(), children: S }, S)) }) })
      ]
    }
  );
}, Is = ({ onClose: e }) => {
  const { displayPlanPrice: t, billingFrequencyTmsg: n } = j((f) => f.meta.pd), { translations: o, themeId: a } = j((f) => f.config), { base: u } = ps({ theme: a });
  return /* @__PURE__ */ g.jsx("div", { className: u(), children: /* @__PURE__ */ g.jsxs(
    "div",
    {
      id: "chat-payment-view",
      className: "light-pink-blue tw--max-w-[500px] tw--bg-white tw--w-full tw--min-h-[400px] tw--relative tw--rounded-lg tw--flex tw--flex-col tw--p-7",
      children: [
        /* @__PURE__ */ g.jsx(ds, { children: /* @__PURE__ */ g.jsx(Es, { texts: o.loaderTexts, title: o.tm1224 }) }),
        /* @__PURE__ */ g.jsx(bs, { onClick: e }),
        /* @__PURE__ */ g.jsx("div", { id: "primer-form-container", className: "primer-theme tw--w-full h-full", children: /* @__PURE__ */ g.jsx(vs, { config: { price: t, period: n } }) }),
        /* @__PURE__ */ g.jsx(xs, {})
      ]
    }
  ) });
}, Ts = (
  /* tw*/
  ie({
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
), Ss = (
  /* tw*/
  ie({
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
), Cs = (
  /* tw*/
  ie({
    slots: {
      base: "tw--grid tw--break-words"
    }
  })
), ks = (
  /* tw */
  ie({
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
), ui = (
  /* tw*/
  ie({
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
), Ps = ie({
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
}), _s = () => {
  const { themeId: e } = j(se), { dotFirst: t, dotSecond: n, dotThird: o } = Ps({ theme: e });
  return /* @__PURE__ */ g.jsxs("div", { className: "tw--ml-7 tw--space-x-[6px]", "data-e2e": "stream-response-loader", children: [
    /* @__PURE__ */ g.jsx("span", { className: t() }),
    /* @__PURE__ */ g.jsx("span", { className: n() }),
    /* @__PURE__ */ g.jsx("span", { className: o() })
  ] });
}, js = "chatSeen", fi = "linkClickedFromChat", Rs = "chatConversationFinishedTimeStamp", Bs = "cid", As = 1e3, di = "scroll-stop", Wr = "support", Fs = 500, Os = "/", Ls = 3e3, Ns = {
  transports: ["websocket"],
  upgrade: !1,
  pingInterval: 1e3 * 60 * 5,
  pingTimeout: 1e3 * 60 * 3,
  secure: !0,
  reconnect: !0
};
fe(), Q.assistant, (/* @__PURE__ */ new Date()).getTime(), fe(), Q.assistant, (/* @__PURE__ */ new Date()).getTime(), fe(), Q.assistant, (/* @__PURE__ */ new Date()).getTime();
const Ms = (e, t) => e.map((n) => {
  var a, u;
  const o = n.sequence === t.sequence && n.type === t.type;
  return o && n.type === Fe.text && t.text ? { ...n, text: n.text + t.text } : o && n.type === Fe.buttons && ((a = t == null ? void 0 : t.buttons) != null && a.length) && ((u = n == null ? void 0 : n.buttons) != null && u.length) ? { ...n, buttons: [...n.buttons, ...t.buttons] } : n;
});
function de(e) {
  for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    n[o - 1] = arguments[o];
  if (Ie.process.env.NODE_ENV !== "production") {
    var a = qs[e], u = a ? typeof a == "function" ? a.apply(null, n) : a : "unknown error nr: " + e;
    throw Error("[Immer] " + u);
  }
  throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map(function(f) {
    return "'" + f + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function vt(e) {
  return !!e && !!e[Te];
}
function nt(e) {
  var t;
  return !!e && (function(n) {
    if (!n || typeof n != "object")
      return !1;
    var o = Object.getPrototypeOf(n);
    if (o === null)
      return !0;
    var a = Object.hasOwnProperty.call(o, "constructor") && o.constructor;
    return a === Object || typeof a == "function" && Function.toString.call(a) === Hs;
  }(e) || Array.isArray(e) || !!e[kn] || !!(!((t = e.constructor) === null || t === void 0) && t[kn]) || Gr(e) || qr(e));
}
function Lt(e, t, n) {
  n === void 0 && (n = !1), It(e) === 0 ? (n ? Object.keys : Kr)(e).forEach(function(o) {
    n && typeof o == "symbol" || t(o, e[o], e);
  }) : e.forEach(function(o, a) {
    return t(a, o, e);
  });
}
function It(e) {
  var t = e[Te];
  return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : Gr(e) ? 2 : qr(e) ? 3 : 0;
}
function Fr(e, t) {
  return It(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Us(e, t) {
  return It(e) === 2 ? e.get(t) : e[t];
}
function pi(e, t, n) {
  var o = It(e);
  o === 2 ? e.set(t, n) : o === 3 ? e.add(n) : e[t] = n;
}
function Ds(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Gr(e) {
  return Ws && e instanceof Map;
}
function qr(e) {
  return Gs && e instanceof Set;
}
function Qe(e) {
  return e.o || e.t;
}
function Hr(e) {
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  var t = Ys(e);
  delete t[Te];
  for (var n = Kr(t), o = 0; o < n.length; o++) {
    var a = n[o], u = t[a];
    u.writable === !1 && (u.writable = !0, u.configurable = !0), (u.get || u.set) && (t[a] = { configurable: !0, writable: !0, enumerable: u.enumerable, value: e[a] });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function Yr(e, t) {
  return t === void 0 && (t = !1), Jr(e) || vt(e) || !nt(e) || (It(e) > 1 && (e.set = e.add = e.clear = e.delete = zs), Object.freeze(e), t && Lt(e, function(n, o) {
    return Yr(o, !0);
  }, !0)), e;
}
function zs() {
  de(2);
}
function Jr(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function De(e) {
  var t = Js[e];
  return t || de(18, e), t;
}
function xn() {
  return Ie.process.env.NODE_ENV === "production" || Et || de(0), Et;
}
function gr(e, t) {
  t && (De("Patches"), e.u = [], e.s = [], e.v = t);
}
function er(e) {
  Or(e), e.p.forEach($s), e.p = null;
}
function Or(e) {
  e === Et && (Et = e.l);
}
function vn(e) {
  return Et = { p: [], l: Et, h: e, m: !0, _: 0 };
}
function $s(e) {
  var t = e[Te];
  t.i === 0 || t.i === 1 ? t.j() : t.g = !0;
}
function yr(e, t) {
  t._ = t.p.length;
  var n = t.p[0], o = e !== void 0 && e !== n;
  return t.h.O || De("ES5").S(t, e, o), o ? (n[Te].P && (er(t), de(4)), nt(e) && (e = tr(t, e), t.l || rr(t, e)), t.u && De("Patches").M(n[Te].t, e, t.u, t.s)) : e = tr(t, n, []), er(t), t.u && t.v(t.u, t.s), e !== hi ? e : void 0;
}
function tr(e, t, n) {
  if (Jr(t))
    return t;
  var o = t[Te];
  if (!o)
    return Lt(t, function(l, h) {
      return En(e, o, t, l, h, n);
    }, !0), t;
  if (o.A !== e)
    return t;
  if (!o.P)
    return rr(e, o.t, !0), o.t;
  if (!o.I) {
    o.I = !0, o.A._--;
    var a = o.i === 4 || o.i === 5 ? o.o = Hr(o.k) : o.o, u = a, f = !1;
    o.i === 3 && (u = new Set(a), a.clear(), f = !0), Lt(u, function(l, h) {
      return En(e, o, a, l, h, n, f);
    }), rr(e, a, !1), n && e.u && De("Patches").N(o, n, e.u, e.s);
  }
  return o.o;
}
function En(e, t, n, o, a, u, f) {
  if (Ie.process.env.NODE_ENV !== "production" && a === n && de(5), vt(a)) {
    var l = tr(e, a, u && t && t.i !== 3 && !Fr(t.R, o) ? u.concat(o) : void 0);
    if (pi(n, o, l), !vt(l))
      return;
    e.m = !1;
  } else
    f && n.add(a);
  if (nt(a) && !Jr(a)) {
    if (!e.h.D && e._ < 1)
      return;
    tr(e, a), t && t.A.l || rr(e, a);
  }
}
function rr(e, t, n) {
  n === void 0 && (n = !1), !e.l && e.h.D && e.m && Yr(t, n);
}
function br(e, t) {
  var n = e[Te];
  return (n ? Qe(n) : e)[t];
}
function In(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var o = Object.getOwnPropertyDescriptor(n, t);
      if (o)
        return o;
      n = Object.getPrototypeOf(n);
    }
}
function Lr(e) {
  e.P || (e.P = !0, e.l && Lr(e.l));
}
function xr(e) {
  e.o || (e.o = Hr(e.t));
}
function Nr(e, t, n) {
  var o = Gr(t) ? De("MapSet").F(t, n) : qr(t) ? De("MapSet").T(t, n) : e.O ? function(a, u) {
    var f = Array.isArray(a), l = { i: f ? 1 : 0, A: u ? u.A : xn(), P: !1, I: !1, R: {}, l: u, t: a, k: null, o: null, j: null, C: !1 }, h = l, b = Mr;
    f && (h = [l], b = Ft);
    var w = Proxy.revocable(h, b), x = w.revoke, I = w.proxy;
    return l.k = I, l.j = x, I;
  }(t, n) : De("ES5").J(t, n);
  return (n ? n.A : xn()).p.push(o), o;
}
function Vs(e) {
  return vt(e) || de(22, e), function t(n) {
    if (!nt(n))
      return n;
    var o, a = n[Te], u = It(n);
    if (a) {
      if (!a.P && (a.i < 4 || !De("ES5").K(a)))
        return a.t;
      a.I = !0, o = Tn(n, u), a.I = !1;
    } else
      o = Tn(n, u);
    return Lt(o, function(f, l) {
      a && Us(a.t, f) === l || pi(o, f, t(l));
    }), u === 3 ? new Set(o) : o;
  }(e);
}
function Tn(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return Hr(e);
}
var Sn, Et, Xr = typeof Symbol < "u" && typeof Symbol("x") == "symbol", Ws = typeof Map < "u", Gs = typeof Set < "u", Cn = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", hi = Xr ? Symbol.for("immer-nothing") : ((Sn = {})["immer-nothing"] = !0, Sn), kn = Xr ? Symbol.for("immer-draftable") : "__$immer_draftable", Te = Xr ? Symbol.for("immer-state") : "__$immer_state", qs = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(e) {
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
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, Hs = "" + Object.prototype.constructor, Kr = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Object.getOwnPropertyNames, Ys = Object.getOwnPropertyDescriptors || function(e) {
  var t = {};
  return Kr(e).forEach(function(n) {
    t[n] = Object.getOwnPropertyDescriptor(e, n);
  }), t;
}, Js = {}, Mr = { get: function(e, t) {
  if (t === Te)
    return e;
  var n = Qe(e);
  if (!Fr(n, t))
    return function(a, u, f) {
      var l, h = In(u, f);
      return h ? "value" in h ? h.value : (l = h.get) === null || l === void 0 ? void 0 : l.call(a.k) : void 0;
    }(e, n, t);
  var o = n[t];
  return e.I || !nt(o) ? o : o === br(e.t, t) ? (xr(e), e.o[t] = Nr(e.A.h, o, e)) : o;
}, has: function(e, t) {
  return t in Qe(e);
}, ownKeys: function(e) {
  return Reflect.ownKeys(Qe(e));
}, set: function(e, t, n) {
  var o = In(Qe(e), t);
  if (o != null && o.set)
    return o.set.call(e.k, n), !0;
  if (!e.P) {
    var a = br(Qe(e), t), u = a == null ? void 0 : a[Te];
    if (u && u.t === n)
      return e.o[t] = n, e.R[t] = !1, !0;
    if (Ds(n, a) && (n !== void 0 || Fr(e.t, t)))
      return !0;
    xr(e), Lr(e);
  }
  return e.o[t] === n && (n !== void 0 || t in e.o) || Number.isNaN(n) && Number.isNaN(e.o[t]) || (e.o[t] = n, e.R[t] = !0), !0;
}, deleteProperty: function(e, t) {
  return br(e.t, t) !== void 0 || t in e.t ? (e.R[t] = !1, xr(e), Lr(e)) : delete e.R[t], e.o && delete e.o[t], !0;
}, getOwnPropertyDescriptor: function(e, t) {
  var n = Qe(e), o = Reflect.getOwnPropertyDescriptor(n, t);
  return o && { writable: !0, configurable: e.i !== 1 || t !== "length", enumerable: o.enumerable, value: n[t] };
}, defineProperty: function() {
  de(11);
}, getPrototypeOf: function(e) {
  return Object.getPrototypeOf(e.t);
}, setPrototypeOf: function() {
  de(12);
} }, Ft = {};
Lt(Mr, function(e, t) {
  Ft[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
}), Ft.deleteProperty = function(e, t) {
  return Ie.process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && de(13), Ft.set.call(this, e, t, void 0);
}, Ft.set = function(e, t, n) {
  return Ie.process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && de(14), Mr.set.call(this, e[0], t, n, e[0]);
};
var Xs = function() {
  function e(n) {
    var o = this;
    this.O = Cn, this.D = !0, this.produce = function(a, u, f) {
      if (typeof a == "function" && typeof u != "function") {
        var l = u;
        u = a;
        var h = o;
        return function(_) {
          var $ = this;
          _ === void 0 && (_ = l);
          for (var P = arguments.length, N = Array(P > 1 ? P - 1 : 0), le = 1; le < P; le++)
            N[le - 1] = arguments[le];
          return h.produce(_, function(we) {
            var A;
            return (A = u).call.apply(A, [$, we].concat(N));
          });
        };
      }
      var b;
      if (typeof u != "function" && de(6), f !== void 0 && typeof f != "function" && de(7), nt(a)) {
        var w = vn(o), x = Nr(o, a, void 0), I = !0;
        try {
          b = u(x), I = !1;
        } finally {
          I ? er(w) : Or(w);
        }
        return typeof Promise < "u" && b instanceof Promise ? b.then(function(_) {
          return gr(w, f), yr(_, w);
        }, function(_) {
          throw er(w), _;
        }) : (gr(w, f), yr(b, w));
      }
      if (!a || typeof a != "object") {
        if ((b = u(a)) === void 0 && (b = a), b === hi && (b = void 0), o.D && Yr(b, !0), f) {
          var S = [], B = [];
          De("Patches").M(a, b, S, B), f(S, B);
        }
        return b;
      }
      de(21, a);
    }, this.produceWithPatches = function(a, u) {
      if (typeof a == "function")
        return function(b) {
          for (var w = arguments.length, x = Array(w > 1 ? w - 1 : 0), I = 1; I < w; I++)
            x[I - 1] = arguments[I];
          return o.produceWithPatches(b, function(S) {
            return a.apply(void 0, [S].concat(x));
          });
        };
      var f, l, h = o.produce(a, u, function(b, w) {
        f = b, l = w;
      });
      return typeof Promise < "u" && h instanceof Promise ? h.then(function(b) {
        return [b, f, l];
      }) : [h, f, l];
    }, typeof (n == null ? void 0 : n.useProxies) == "boolean" && this.setUseProxies(n.useProxies), typeof (n == null ? void 0 : n.autoFreeze) == "boolean" && this.setAutoFreeze(n.autoFreeze);
  }
  var t = e.prototype;
  return t.createDraft = function(n) {
    nt(n) || de(8), vt(n) && (n = Vs(n));
    var o = vn(this), a = Nr(this, n, void 0);
    return a[Te].C = !0, Or(o), a;
  }, t.finishDraft = function(n, o) {
    var a = n && n[Te];
    Ie.process.env.NODE_ENV !== "production" && (a && a.C || de(9), a.I && de(10));
    var u = a.A;
    return gr(u, o), yr(void 0, u);
  }, t.setAutoFreeze = function(n) {
    this.D = n;
  }, t.setUseProxies = function(n) {
    n && !Cn && de(20), this.O = n;
  }, t.applyPatches = function(n, o) {
    var a;
    for (a = o.length - 1; a >= 0; a--) {
      var u = o[a];
      if (u.path.length === 0 && u.op === "replace") {
        n = u.value;
        break;
      }
    }
    a > -1 && (o = o.slice(a + 1));
    var f = De("Patches").$;
    return vt(n) ? f(n, o) : this.produce(n, function(l) {
      return f(l, o);
    });
  }, e;
}(), Se = new Xs(), Ks = Se.produce;
Se.produceWithPatches.bind(Se);
Se.setAutoFreeze.bind(Se);
Se.setUseProxies.bind(Se);
Se.applyPatches.bind(Se);
Se.createDraft.bind(Se);
Se.finishDraft.bind(Se);
const wt = Ks, mi = or({
  name: "chat",
  initialState: mt,
  reducers: {
    setOutgoing(e, { payload: t }) {
      e.outgoing = {
        term: gt(et.chat),
        user_id: localStorage.getItem("__cid") || "",
        role: Q.user,
        message: t
      };
    },
    resetOutgoing(e) {
      e.outgoing = mt.outgoing;
    },
    setExistingHistory(e, { payload: t }) {
      return wt(e, (n) => {
        if (e.historyIds.length >= t.length) {
          e.historyIds.filter((a) => !t.find((u) => u.id === a)).forEach(
            (a) => n.historyData[a].content = n.historyData[a].content.map((u) => ({
              ...u,
              sent: !1,
              resend: !0
            }))
          );
          return;
        }
        n.historyIds = t.map(({ id: o }) => o), n.historyData = t.reduce(
          (o, a) => ({
            ...o,
            [a.id]: a
          }),
          {}
        );
      });
    },
    addPredefinedAssistantMessage(e, { payload: t }) {
      const n = fe();
      return wt(e, (o) => {
        o.historyIds.push(n), o.historyData[n] = {
          id: n,
          role: Q.assistant,
          content: [
            { type: Fe.text, text: t.content, sequence: 1 },
            { type: Fe.buttons, buttons: t.buttons || [], sequence: 2 }
          ]
        };
      });
    },
    fillAssistantHistoryData(e, { payload: t }) {
      return wt(e, (n) => {
        const o = t.id;
        if (!n.historyData[o]) {
          n.historyData[o] = { id: o, role: Q.assistant, content: [] }, n.historyIds.push(o);
          return;
        }
        if (!t.content)
          return;
        const a = t.content.type, u = {
          sequence: t.sequence || 1,
          type: a,
          [a]: t.content[t.content.type]
        };
        if (n.historyData[o].content.some(
          (l) => l.sequence === u.sequence && l.type === u.type
        )) {
          n.historyData[o].content = Ms(
            n.historyData[o].content,
            u
          );
          return;
        }
        n.historyData[o].content.push(u);
      });
    },
    fillUserHistoryData(e, { payload: { id: t, content: n } }) {
      return wt(e, (o) => {
        let a;
        if (n.groupId && Object.entries(o.historyData).forEach(([u, f]) => {
          f.content.find((l) => l.groupId === n.groupId) && (a = u);
        }), a) {
          o.historyData[a].content.push(n);
          return;
        }
        o.historyData[t] || (o.historyData[t] = { id: t, role: Q.user, content: [n] }, o.historyIds.push(t));
      });
    },
    fillInitialMessage(e, { payload: t }) {
      e.historyIds.push(t.id), e.historyData[t.id] = {
        id: t.id,
        role: Q.assistant,
        time: (/* @__PURE__ */ new Date()).getTime(),
        content: t.content
      };
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
      return wt(e, (n) => {
        n.historyData[t.itemId].content = n.historyData[t.itemId].content.map((o) => ({
          ...o,
          sent: !0,
          resend: !1
        }));
      });
    },
    showResendIcon(e, { payload: t }) {
      return wt(e, (n) => {
        n.historyData[t.itemId].content = n.historyData[t.itemId].content.map((o) => ({
          ...o,
          sent: !1,
          resend: !0
        }));
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
}), nr = (e) => e.chat, Zs = (e) => e.chat.historyIds.find((t) => e.chat.historyData[t].role === Q.user), Qs = (e, t) => e.sequence - t.sequence, {
  setOutgoing: Zr,
  resetOutgoing: ea,
  setExistingHistory: ta,
  addPredefinedAssistantMessage: wi,
  setIsLoading: Gt,
  resetIsLoading: Bt,
  setLastGroupPointer: ra,
  setTypingTimeoutExpired: gi,
  setError: qt,
  resetError: vr,
  setConnected: Pn,
  setClosed: ar,
  hideResendIcon: na,
  showResendIcon: _n,
  resendMessage: yi,
  setIsStreaming: Er,
  fillAssistantHistoryData: jn,
  fillUserHistoryData: ir,
  resetHistory: ia,
  fillInitialMessage: oa
} = mi.actions, sa = mi.reducer, bi = or({
  name: "intentions",
  initialState: bo,
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
      e.link = t;
    }
  }
}), xi = (e) => e.intentions.email, aa = (e) => e.intentions.payment, {
  setEmailSuccess: la,
  setIsPaymentSuccessful: ca,
  setPaymentFormVisibility: ua,
  setEmailError: Rn,
  setIsEmailLoading: Ur,
  setIsPaymentButtonVisible: fa,
  setPaymentIntentError: da,
  setEmail: pa,
  setLink: vi
} = bi.actions, ha = bi.reducer, ma = () => {
  var k;
  const { cid: e, systemType: t, marketing: n, pd: o } = j(Ut), { translations: a, purpose: u, specialUrls: f } = j(se), { isLoading: l, isStreaming: h } = j(nr), { error: b } = j((C) => C.chat), w = j((C) => C.intentions.link), { error: x, current: I } = j(xi), {
    isFormVisible: S,
    error: B,
    isSuccessful: _
  } = j(aa), P = {
    systemType: t,
    marketing: n,
    error: b || x || B,
    cid: e,
    isLoading: l,
    currentEmail: I,
    translations: a,
    pd: o,
    isStreaming: h,
    isPaymentButtonVisible: !1,
    isPaymentFormVisible: !1,
    isEmailFormVisible: !1,
    isResponseFormVisible: !1,
    ctaText: "",
    ctaHref: ""
  }, { historyData: N, historyIds: le } = j(nr), we = [...le].pop(), A = we && N[we], he = A && A.role === Q.assistant, ge = he && w, _e = !(A && (A != null && A.content.find((C) => C.buttons))), xe = A && (A == null ? void 0 : A.content.find((C) => C.payment)), je = A && (A == null ? void 0 : A.content.find((C) => C.email));
  if (he && xe)
    return {
      ...P,
      isPaymentButtonVisible: !0
    };
  if (he && je)
    return {
      ...P,
      isEmailFormVisible: !0,
      isPaymentFormVisible: S
    };
  if (_)
    return {
      ...P,
      ctaText: a.ctaTextContent,
      ctaHref: "/",
      isPaymentFormVisible: S
    };
  const pe = A && ((k = A == null ? void 0 : A.content) == null ? void 0 : k.find((C) => C.special));
  if (he && pe && (pe != null && pe.special))
    return {
      ...P,
      ctaText: f[pe.special].includes("merchant") ? a.merchantButton : a.supportButton,
      ctaHref: f[pe.special]
    };
  if (ge && u === Wr)
    return {
      ...P,
      isResponseFormVisible: !0
    };
  const T = A && !ge && !l && (_e || (A == null ? void 0 : A.role) === Q.user);
  return {
    ...P,
    ctaText: a.mealButton,
    ctaHref: ge,
    isResponseFormVisible: T
  };
};
var Qr = { exports: {} }, bt = typeof Reflect == "object" ? Reflect : null, Bn = bt && typeof bt.apply == "function" ? bt.apply : function(t, n, o) {
  return Function.prototype.apply.call(t, n, o);
}, Kt;
bt && typeof bt.ownKeys == "function" ? Kt = bt.ownKeys : Object.getOwnPropertySymbols ? Kt = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : Kt = function(t) {
  return Object.getOwnPropertyNames(t);
};
function wa(e) {
  console && console.warn && console.warn(e);
}
var Ei = Number.isNaN || function(t) {
  return t !== t;
};
function J() {
  J.init.call(this);
}
Qr.exports = J;
Qr.exports.once = xa;
J.EventEmitter = J;
J.prototype._events = void 0;
J.prototype._eventsCount = 0;
J.prototype._maxListeners = void 0;
var An = 10;
function lr(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(J, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return An;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || Ei(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    An = e;
  }
});
J.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
J.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || Ei(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function Ii(e) {
  return e._maxListeners === void 0 ? J.defaultMaxListeners : e._maxListeners;
}
J.prototype.getMaxListeners = function() {
  return Ii(this);
};
J.prototype.emit = function(t) {
  for (var n = [], o = 1; o < arguments.length; o++)
    n.push(arguments[o]);
  var a = t === "error", u = this._events;
  if (u !== void 0)
    a = a && u.error === void 0;
  else if (!a)
    return !1;
  if (a) {
    var f;
    if (n.length > 0 && (f = n[0]), f instanceof Error)
      throw f;
    var l = new Error("Unhandled error." + (f ? " (" + f.message + ")" : ""));
    throw l.context = f, l;
  }
  var h = u[t];
  if (h === void 0)
    return !1;
  if (typeof h == "function")
    Bn(h, this, n);
  else
    for (var b = h.length, w = Pi(h, b), o = 0; o < b; ++o)
      Bn(w[o], this, n);
  return !0;
};
function Ti(e, t, n, o) {
  var a, u, f;
  if (lr(n), u = e._events, u === void 0 ? (u = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (u.newListener !== void 0 && (e.emit(
    "newListener",
    t,
    n.listener ? n.listener : n
  ), u = e._events), f = u[t]), f === void 0)
    f = u[t] = n, ++e._eventsCount;
  else if (typeof f == "function" ? f = u[t] = o ? [n, f] : [f, n] : o ? f.unshift(n) : f.push(n), a = Ii(e), a > 0 && f.length > a && !f.warned) {
    f.warned = !0;
    var l = new Error("Possible EventEmitter memory leak detected. " + f.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    l.name = "MaxListenersExceededWarning", l.emitter = e, l.type = t, l.count = f.length, wa(l);
  }
  return e;
}
J.prototype.addListener = function(t, n) {
  return Ti(this, t, n, !1);
};
J.prototype.on = J.prototype.addListener;
J.prototype.prependListener = function(t, n) {
  return Ti(this, t, n, !0);
};
function ga() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Si(e, t, n) {
  var o = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n }, a = ga.bind(o);
  return a.listener = n, o.wrapFn = a, a;
}
J.prototype.once = function(t, n) {
  return lr(n), this.on(t, Si(this, t, n)), this;
};
J.prototype.prependOnceListener = function(t, n) {
  return lr(n), this.prependListener(t, Si(this, t, n)), this;
};
J.prototype.removeListener = function(t, n) {
  var o, a, u, f, l;
  if (lr(n), a = this._events, a === void 0)
    return this;
  if (o = a[t], o === void 0)
    return this;
  if (o === n || o.listener === n)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete a[t], a.removeListener && this.emit("removeListener", t, o.listener || n));
  else if (typeof o != "function") {
    for (u = -1, f = o.length - 1; f >= 0; f--)
      if (o[f] === n || o[f].listener === n) {
        l = o[f].listener, u = f;
        break;
      }
    if (u < 0)
      return this;
    u === 0 ? o.shift() : ya(o, u), o.length === 1 && (a[t] = o[0]), a.removeListener !== void 0 && this.emit("removeListener", t, l || n);
  }
  return this;
};
J.prototype.off = J.prototype.removeListener;
J.prototype.removeAllListeners = function(t) {
  var n, o, a;
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
  if (n = o[t], typeof n == "function")
    this.removeListener(t, n);
  else if (n !== void 0)
    for (a = n.length - 1; a >= 0; a--)
      this.removeListener(t, n[a]);
  return this;
};
function Ci(e, t, n) {
  var o = e._events;
  if (o === void 0)
    return [];
  var a = o[t];
  return a === void 0 ? [] : typeof a == "function" ? n ? [a.listener || a] : [a] : n ? ba(a) : Pi(a, a.length);
}
J.prototype.listeners = function(t) {
  return Ci(this, t, !0);
};
J.prototype.rawListeners = function(t) {
  return Ci(this, t, !1);
};
J.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : ki.call(e, t);
};
J.prototype.listenerCount = ki;
function ki(e) {
  var t = this._events;
  if (t !== void 0) {
    var n = t[e];
    if (typeof n == "function")
      return 1;
    if (n !== void 0)
      return n.length;
  }
  return 0;
}
J.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Kt(this._events) : [];
};
function Pi(e, t) {
  for (var n = new Array(t), o = 0; o < t; ++o)
    n[o] = e[o];
  return n;
}
function ya(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function ba(e) {
  for (var t = new Array(e.length), n = 0; n < t.length; ++n)
    t[n] = e[n].listener || e[n];
  return t;
}
function xa(e, t) {
  return new Promise(function(n, o) {
    function a(f) {
      e.removeListener(t, u), o(f);
    }
    function u() {
      typeof e.removeListener == "function" && e.removeListener("error", a), n([].slice.call(arguments));
    }
    _i(e, t, u, { once: !0 }), t !== "error" && va(e, a, { once: !0 });
  });
}
function va(e, t, n) {
  typeof e.on == "function" && _i(e, "error", t, n);
}
function _i(e, t, n, o) {
  if (typeof e.on == "function")
    o.once ? e.once(t, n) : e.on(t, n);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function a(u) {
      o.once && e.removeEventListener(t, a), n(u);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var Ea = Qr.exports;
const Ue = {
  type: Gn,
  core: new Ea.EventEmitter()
}, Ia = (
  /*tw*/
  ie({
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
), Ta = (
  /*tw*/
  ie({
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
), Sa = ({ text: e = "", onClick: t, e2e: n }) => {
  const { themeId: o } = j(se), { base: a } = Ia({ theme: o });
  return /* @__PURE__ */ g.jsx(
    "button",
    {
      onClick: t,
      className: a(),
      type: "button",
      "data-e2e": n,
      children: e
    }
  );
}, cr = ({ children: e, outlined: t = !1, onClick: n, e2e: o = null, disabled: a = !1 }) => {
  const { themeId: u } = j(se), { base: f } = Ta({ theme: u, outlined: t });
  return /* @__PURE__ */ g.jsx(
    "button",
    {
      onClick: n,
      className: f(),
      "data-e2e": o,
      disabled: a,
      type: "button",
      children: e
    }
  );
}, Ca = (
  /* tw*/
  ie({
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
), en = Nn((e, t) => {
  const {
    disabled: n,
    e2e: o,
    isLoading: a,
    onChange: u,
    onKeyUp: f,
    placeholder: l,
    type: h,
    value: b
  } = e, { themeId: w } = j(se), { base: x, input: I, loader: S, spin: B } = Ca({ theme: w });
  return /* @__PURE__ */ g.jsxs("div", { className: x(), children: [
    /* @__PURE__ */ g.jsx(
      "input",
      {
        className: I(),
        "data-e2e": o,
        disabled: a || n,
        onChange: u,
        onKeyUp: f,
        placeholder: l,
        ref: t,
        type: h,
        value: b
      }
    ),
    a && /* @__PURE__ */ g.jsx("span", { className: S(), children: /* @__PURE__ */ g.jsx("span", { className: B() }) })
  ] });
});
en.displayName = "Input";
const ka = () => {
  const e = Ye(), t = j((S) => S.meta), { themeId: n, translations: o } = j(se), { isLoading: a } = j(xi), { base: u, input: f, button: l } = ai({ theme: n }), [h, b] = xt(""), w = Dr(null);
  Mt(() => {
    Ee({
      eventType: be.emailField,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid
    }), setTimeout(() => {
      w.current && w.current.focus();
    }, 500);
  });
  const x = (S) => {
    const B = S.target.value.trim();
    b(B);
  }, I = (S) => {
    S.preventDefault(), h !== "" && (e(Ur(!0)), e(pa(h)), Ue.core.emit(Ue.type.email, { email: h }), b(""));
  };
  return /* @__PURE__ */ g.jsxs(
    "form",
    {
      className: u(),
      onSubmit: I,
      "data-e2e": "email-form",
      children: [
        /* @__PURE__ */ g.jsx("div", { className: f(), children: /* @__PURE__ */ g.jsx(
          en,
          {
            e2e: "email-input",
            isLoading: a,
            name: "email",
            onChange: x,
            ref: w,
            placeholder: o.emailPlaceholder,
            type: "email",
            value: h
          }
        ) }),
        /* @__PURE__ */ g.jsx("div", { className: l(), children: /* @__PURE__ */ g.jsx(cr, { onClick: I, e2e: "email-validate-btn", children: /* @__PURE__ */ g.jsx(
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
}, Pa = () => {
  const e = Ye(), { themeId: t } = j(se), { connected: n, isLoading: o } = j(nr), { base: a, input: u, button: f } = ai({ theme: t }), [l, h] = xt(""), [b, w] = xt(null), x = j(($) => $.chat.lastGroupId), I = Dr(null);
  Mt(() => {
    setTimeout(() => {
      var $;
      ($ = I.current) == null || $.focus();
    }, 500);
  }, []);
  const S = ($) => {
    h($.target.value), _();
  }, B = ($) => {
    $.preventDefault(), l.trim() && e(ir({
      role: Q.user,
      id: fe(),
      sequence: 1,
      content: {
        sequence: 1,
        message: l,
        groupId: x,
        resend: !1,
        sent: !0
      }
    })), h(""), _();
  }, _ = () => {
    b && clearTimeout(b);
    const $ = setTimeout(() => {
      e(gi(!0)), e(ra(fe()));
    }, Ls);
    w($);
  };
  return /* @__PURE__ */ g.jsxs(
    "form",
    {
      className: a(),
      onSubmit: B,
      "data-e2e": "user-form",
      children: [
        /* @__PURE__ */ g.jsx("div", { className: u(), children: /* @__PURE__ */ g.jsx(
          en,
          {
            disabled: !n,
            isLoading: o,
            e2e: "message-input",
            name: "response",
            onChange: S,
            placeholder: "Write your message here...",
            type: "response",
            value: l,
            ref: I
          }
        ) }),
        /* @__PURE__ */ g.jsx("div", { className: f(), children: /* @__PURE__ */ g.jsx(cr, { onClick: B, disabled: !n, children: /* @__PURE__ */ g.jsx(
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
}, _a = () => {
  const e = Ye(), t = ma(), n = Dr(null), [o, a] = xt(!1), u = (x) => {
    e(ua(x));
  };
  Mt(() => {
    t.isEmailFormVisible && Ee({
      eventType: be.emailField,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid,
      email: t.currentEmail
    });
  }, [t.isEmailFormVisible]);
  const f = (x) => {
    x.currentTarget.disabled = !0, Ue.core.emit(Ue.type.destroy), u(!1), a(!1);
  }, l = () => {
    e(wi({ content: t.translations.tm1226 })), e(ca(!0)), e(fa(!1)), u(!1), Ee({
      eventType: be.linkProvided,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid,
      email: t.currentEmail
    }), setTimeout(() => {
      n.current && n.current.click();
    }, 7e3);
  }, h = (x) => {
    e(da(x));
  }, b = () => {
    Ue.core.emit(Ue.type.payment, { setIsPaymentContainerVisible: u, onPaymentSuccess: l, onError: h }), a(!0);
  }, w = (x) => {
    localStorage.setItem(fi, x.currentTarget.href), Ee({
      eventType: be.linkClicked,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid,
      email: t.currentEmail
    }), e(ar());
  };
  return /* @__PURE__ */ g.jsxs("div", { className: "tw--space-y-[11px] tw--pb-[11px]", "data-e2e": "chat-foot", children: [
    t.error && /* @__PURE__ */ g.jsx("div", { "data-e2e": "error-message", className: "tw--pl-[35px] tw--text-[#ff0043] tw--font-medium", children: t.error }),
    t.isPaymentFormVisible && /* @__PURE__ */ g.jsx(Is, { onClose: f }),
    t.isLoading && /* @__PURE__ */ g.jsx(_s, {}),
    t.ctaHref && /* @__PURE__ */ g.jsx(
      ci,
      {
        ref: n,
        text: t.ctaText,
        onClick: w,
        href: t.ctaHref,
        e2e: "quiz-trigger-btn"
      }
    ),
    !t.isStreaming && t.isEmailFormVisible && /* @__PURE__ */ g.jsx(ka, {}),
    !t.isStreaming && t.isResponseFormVisible && /* @__PURE__ */ g.jsx(Pa, {}),
    t.isPaymentButtonVisible && /* @__PURE__ */ g.jsx(
      ys,
      {
        text: t.translations.payButton,
        onClick: b,
        disabled: o,
        e2e: "payment-form-trigger-btn"
      }
    )
  ] });
}, ja = (
  /*tw*/
  ie({
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
), ji = ({ orientation: e = $r.horizontal, minimized: t = !1 }) => {
  const { aiProfile: n, themeId: o } = j(se), { base: a, avatar: u, info: f, name: l, role: h, imgWrapper: b } = ja({ theme: o, orientation: e, minimized: t });
  return /* @__PURE__ */ g.jsxs("div", { className: a(), children: [
    /* @__PURE__ */ g.jsx("span", { className: b(), children: /* @__PURE__ */ g.jsx(
      "img",
      {
        className: u(),
        src: n.imgSrc,
        alt: "img"
      }
    ) }),
    /* @__PURE__ */ g.jsxs("div", { className: f(), children: [
      /* @__PURE__ */ g.jsx("div", { className: l(), children: n.name }),
      /* @__PURE__ */ g.jsx("div", { className: h(), children: n.role })
    ] })
  ] });
}, Ra = () => {
  const e = Ye(), t = _o(), { base: n } = cs({ theme: t.theme }), o = (a) => {
    a.currentTarget.disabled = !0, Ee({
      eventType: be.closeClicked,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid
    }), setTimeout(() => {
      e(ar());
    }, Fs);
  };
  return /* @__PURE__ */ g.jsxs("div", { className: n(), "data-e2e": "chat-heading", children: [
    /* @__PURE__ */ g.jsx(ji, {}),
    t.closeVisible && /* @__PURE__ */ g.jsx(cr, { e2e: "chat-close-btn", onClick: o, children: /* @__PURE__ */ g.jsx(
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
}, Ba = (e) => {
  const t = (o) => /[?&]([^=#]+)=([^&#]*)/g.test(o);
  let n;
  if (window.location.search) {
    const o = new URLSearchParams(window.location.search);
    o.append(js, "true"), o.append(Bs, localStorage.getItem("__cid") || ""), n = `/?${o}`;
  } else
    n = "";
  return t(e) ? e : e + n;
}, Aa = ({ properties: e }) => {
  const { purpose: t } = j(se), { cid: n, marketing: o, systemType: a } = j(Ut), u = Ye(), f = e.href ? Ba(e.href) : "#";
  Mt(() => {
    u(vi(f));
  });
  const l = (h) => {
    t !== Wr && localStorage.setItem(fi, h.currentTarget.href), Ee({
      eventType: be.linkClicked,
      systemType: a,
      utmParams: o.lastUtmParams,
      customerUuid: n
    }), u(ar());
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
}, Fa = (e) => {
  const n = /embed\/(\w+)/.exec(e);
  return n ? n[1] : null;
}, Oa = Nt.memo(function({ url: t, title: n }) {
  const [o, a] = xt(!1), u = Fa(t), f = () => {
    a(!0);
  };
  return o ? /* @__PURE__ */ g.jsx(
    "iframe",
    {
      className: "w-full tw--h-80 tw--py-4",
      title: n || "Missing title",
      src: `${t}?enablejsapi=1&rel=0&origin=${window.location.origin}`,
      allow: "fullscreen"
    }
  ) : /* @__PURE__ */ g.jsx(
    "div",
    {
      className: "w-full tw--h-80 tw--py-4 tw--justify-center tw--flex tw--items-center tw--pointer-events-auto",
      onClick: f,
      style: { backgroundImage: `url(https://img.youtube.com/vi/${u}/hqdefault.jpg)` },
      children: /* @__PURE__ */ g.jsx("button", { className: "tw--items-center tw--justify-center tw--w-16 tw--h-16 tw--rounded-full tw--cursor-pointer tw--pointer-events-auto tw--flex tw--bg-gradient-to-b tw--from-[#FF0000] tw--to-[#F25640]", children: /* @__PURE__ */ g.jsx("svg", { className: "tw--pointer-events-none", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ g.jsx(
        "path",
        {
          d: "M10.6665 9.09335V22.9067C10.6665 23.96 11.8265 24.6 12.7198 24.0267L23.5732 17.12C23.7632 16.9998 23.9197 16.8334 24.0282 16.6364C24.1366 16.4394 24.1935 16.2182 24.1935 15.9933C24.1935 15.7685 24.1366 15.5473 24.0282 15.3503C23.9197 15.1533 23.7632 14.9869 23.5732 14.8667L12.7198 7.97335C12.5187 7.84327 12.2862 7.76989 12.0469 7.76094C11.8076 7.75199 11.5702 7.8078 11.36 7.92249C11.1497 8.03718 10.9743 8.20649 10.8523 8.41257C10.7302 8.61864 10.666 8.85384 10.6665 9.09335V9.09335Z",
          fill: "white"
        }
      ) }) })
    }
  );
}), La = (
  /* tw*/
  ie({
    slots: {
      base: "tw--flex-1 tw--w-full tw--px-[15px] tw--py-[11px] tw--rounded-[20px] tw--border select-none tw--text-center"
    },
    variants: {
      theme: {
        light: {
          base: "tw--inline-block tw--bg-light-glaze tw--text-white"
        },
        dark: {
          base: "tw--inline-block tw--bg-dark-glazeBg tw--text-dark-glazeText"
        }
      }
    }
  })
);
/* tw*/
ie({
  slots: {
    base: "tw--flex-1 tw--px-4 tw--py-2"
  }
});
const Na = ({ text: e, href: t, onClick: n }) => {
  const { themeId: o } = j(se), { base: a } = La({ theme: o });
  return /* @__PURE__ */ g.jsx(
    "a",
    {
      href: t,
      onClick: n,
      className: a(),
      children: e
    }
  );
}, Ma = ({ options: e = [] }) => {
  const t = Ye(), n = j(Ut), o = !j(Zs), a = (f, l) => {
    t(ir({ id: fe(), sequence: 1, role: Q.user, content: { sequence: 1, message: f, resend: !1, sent: !0, groupId: "" } })), t(Zr(f)), o && Ee({
      eventType: be.buttonClick + l,
      systemType: n.systemType,
      utmParams: n.marketing.lastUtmParams,
      customerUuid: n.cid
    });
  }, u = (f) => {
    t(ir({
      id: fe(),
      sequence: 1,
      role: Q.user,
      content: {
        sequence: 1,
        message: f,
        resend: !1,
        sent: !0,
        groupId: ""
      }
    }));
  };
  return [...e].sort((f, l) => f.sequence - l.sequence).map(({ value: f, link: l, sequence: h, noStream: b }) => l ? /* @__PURE__ */ g.jsx(
    Na,
    {
      text: f,
      href: l
    },
    fe()
  ) : /* @__PURE__ */ g.jsx(
    Sa,
    {
      text: f,
      onClick: b ? () => u(f) : () => a(f, h),
      e2e: "option-button"
    },
    fe()
  ));
}, Ua = ({ message: e, itemId: t }) => {
  const { themeId: n } = j(se), { isStreaming: o } = j(nr), { pd: a } = j(Ut), u = j((h) => h.chat.historyIds.length - 1 === h.chat.historyIds.indexOf(t)), { base: f } = ks({ isTyping: o && u, theme: n }), l = [...e.content].sort(Qs);
  return /* @__PURE__ */ g.jsx(g.Fragment, { children: l.map((h) => {
    var b, w, x, I;
    if (h.type === Fe.text)
      return /* @__PURE__ */ g.jsx(
        "div",
        {
          className: "tw--flex tw--flex-col tw--space-y-[10px]",
          children: /* @__PURE__ */ g.jsx("span", { className: f(), children: /* @__PURE__ */ g.jsx(
            Ji,
            {
              components: {
                a(S) {
                  return /* @__PURE__ */ g.jsx(Aa, { properties: S });
                }
              },
              children: h[h.type]
            }
          ) })
        },
        fe()
      );
    if (h.type === Fe.buttons && u)
      return /* @__PURE__ */ g.jsx("div", { className: "tw--flex tw--flex-col tw--space-y-[10px]", children: /* @__PURE__ */ g.jsx(Ma, { options: h[h.type] }) }, fe());
    if (h.type === Fe.video)
      return /* @__PURE__ */ g.jsx(
        Oa,
        {
          title: ((b = h[h.type]) == null ? void 0 : b.title) || "video",
          url: ((w = h[h.type]) == null ? void 0 : w.url) || "https://www.youtube.com/embed/g4B8Dhl4pxY"
        },
        fe()
      );
    if (h.type === Fe.image)
      return /* @__PURE__ */ g.jsx(
        "img",
        {
          className: "w-full tw--h-auto tw--py-4",
          src: (x = h[h.type]) == null ? void 0 : x.url,
          alt: ((I = h[h.type]) == null ? void 0 : I.alt) || "chat-image"
        },
        fe()
      );
    if (h.type === Fe.payment)
      return `${h[h.type]} ${a.displayPlanPrice} ${a.billingFrequencyTmsg}`;
    if (h.type === Fe.email)
      return h[h.type];
  }) });
}, Da = Nt.memo(Ua), za = ({ itemId: e }) => {
  const { themeId: t } = j(se), n = j((o) => o.chat.historyData[e]);
  return n && /* @__PURE__ */ g.jsx(
    "div",
    {
      className: ui({ theme: t, type: n.role }).base(),
      "data-e2e": n.role === Q.assistant ? "stream-assistant-msg" : "user-msg",
      children: n.role === Q.assistant ? /* @__PURE__ */ g.jsx(
        Da,
        {
          message: n,
          itemId: e
        }
      ) : [...n.content].map((o) => /* @__PURE__ */ g.jsx(Ga, { record: { ...o, itemId: e } }, fe()))
    }
  );
}, $a = Nt.memo(za), Va = ({ titleTxt: e }) => {
  const { themeId: t } = j(se), { base: n, title: o } = Ss({ theme: t });
  return /* @__PURE__ */ g.jsxs("div", { className: n(), children: [
    o && /* @__PURE__ */ g.jsx("div", { className: o(), children: e }),
    /* @__PURE__ */ g.jsx(ji, { orientation: $r.vertical })
  ] });
}, Wa = () => {
  const { themeId: e } = j(se), { aiProfile: t } = j(se), n = j((b) => b.chat.historyIds || []), o = j((b) => b.chat.historyData[n[0]]), { base: a, second: u, date: f } = Ts({ theme: e }), { base: l } = Cs({ theme: e }), h = yo((o == null ? void 0 : o.time) || (/* @__PURE__ */ new Date()).getTime());
  return /* @__PURE__ */ g.jsx("div", { className: a(), children: /* @__PURE__ */ g.jsxs("div", { className: u(), "data-e2e": "history-container", children: [
    /* @__PURE__ */ g.jsx(Va, { titleTxt: t.welcome }),
    /* @__PURE__ */ g.jsx("div", { className: f(), "data-e2e": "stream-assistant-msg-date", children: h }),
    n.map((b) => /* @__PURE__ */ g.jsx(
      "div",
      {
        className: l(),
        "data-e2e": "history-item",
        children: /* @__PURE__ */ g.jsx($a, { itemId: b })
      },
      fe()
    ))
  ] }) });
}, Ga = ({ record: e }) => {
  const t = Ye(), { themeId: n } = j(se), { action: o, separator: a } = ui({ theme: n, type: Q.user }), u = () => {
    t(yi(e));
  };
  return /* @__PURE__ */ g.jsxs("div", { className: a(), children: [
    /* @__PURE__ */ g.jsx("span", { children: e.message }),
    e.resend && !e.sent && /* @__PURE__ */ g.jsx("div", { className: o(), children: /* @__PURE__ */ g.jsx(cr, { outlined: !0, onClick: () => u(), children: /* @__PURE__ */ g.jsxs(
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
}, qa = ({ config: e }) => {
  const t = Ye();
  return t(Io(e.meta)), t(xo(e.app.purpose)), t(vo(e.specialUrls)), t(Yn(e.app)), /* @__PURE__ */ g.jsx(
    us,
    {
      head: /* @__PURE__ */ g.jsx(Ra, {}),
      stream: /* @__PURE__ */ g.jsx(Wa, {}),
      foot: /* @__PURE__ */ g.jsx(_a, {})
    }
  );
};
var tn = {}, rn = {};
rn.__esModule = !0;
rn.default = Ja;
function Zt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Zt = function(n) {
    return typeof n;
  } : Zt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Zt(e);
}
function Ir() {
}
var Ha = {
  getItem: Ir,
  setItem: Ir,
  removeItem: Ir
};
function Ya(e) {
  if ((typeof self > "u" ? "undefined" : Zt(self)) !== "object" || !(e in self))
    return !1;
  try {
    var t = self[e], n = "redux-persist ".concat(e, " test");
    t.setItem(n, "test"), t.getItem(n), t.removeItem(n);
  } catch {
    return Ie.process.env.NODE_ENV !== "production" && console.warn("redux-persist ".concat(e, " test failed, persistence will be disabled.")), !1;
  }
  return !0;
}
function Ja(e) {
  var t = "".concat(e, "Storage");
  return Ya(t) ? self[t] : (Ie.process.env.NODE_ENV !== "production" && console.error("redux-persist failed to create sync storage. falling back to noop storage."), Ha);
}
tn.__esModule = !0;
tn.default = Za;
var Xa = Ka(rn);
function Ka(e) {
  return e && e.__esModule ? e : { default: e };
}
function Za(e) {
  var t = (0, Xa.default)(e);
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
var Ri = void 0, Qa = el(tn);
function el(e) {
  return e && e.__esModule ? e : { default: e };
}
var tl = (0, Qa.default)("local");
Ri = tl;
const rl = (e) => (t) => {
  const n = (o) => {
    var f;
    const { meta: a } = e.getState(), u = {};
    return a.pd && typeof o == "object" && "billingOptionType" in o ? (o.billingFrequencyTmsg = o.billingOptionType === "one-time" ? a.pd.oneTimer : (f = a.pd.subscriberBillingFrequency) == null ? void 0 : f.replace(
      "{1}",
      o.frequencyInMonths
    ), o = { ...o, ...u }, o) : u;
  };
  return Ue.core.on(Ue.type.emailSuccess, () => {
    const { meta: o, intentions: a } = e.getState();
    e.dispatch(Ur(!1)), e.dispatch(Rn("")), e.dispatch(
      ir({
        id: fe(),
        role: Q.user,
        sequence: 1,
        content: {
          sequence: 1,
          message: a.email.current,
          resend: !1,
          sent: !0,
          groupId: ""
        }
      })
    ), e.dispatch(Zr(a.email.current)), e.dispatch(la(!0)), Ee({
      eventType: be.emailEntered,
      systemType: o.systemType,
      utmParams: o.marketing.lastUtmParams,
      customerUuid: o.cid,
      email: a.email.current
    });
  }), Ue.core.on(Ue.type.emailError, (o) => {
    const { meta: a, intentions: u, config: f } = e.getState(), { tm716: l, tm526: h, tm715: b, tm505: w } = f.translations;
    if (e.dispatch(Ur(!1)), o.status === 409) {
      e.dispatch(wi({
        content: l,
        buttons: [
          { sequence: 1, id: "opt-1", text: h, value: h, link: o.data.buttonLink, noStream: !0 },
          { sequence: 2, id: "opt-2", text: b, value: b, link: "", noStream: !0 }
        ]
      })), Ee({
        eventType: be.emailExist,
        systemType: a.systemType,
        utmParams: a.marketing.lastUtmParams,
        customerUuid: a.cid,
        email: u.email.current
      });
      return;
    }
    o.status === 422 && (e.dispatch(Rn(o.errors.email[0] || w)), Ee({
      eventType: be.emailWrong,
      systemType: a.systemType,
      utmParams: a.marketing.lastUtmParams,
      customerUuid: a.cid,
      email: u.email.current
    }));
  }), Fn("marketing", e, To), Fn(
    "__pd",
    e,
    So,
    n
  ), (o) => {
    if (vi.match(o) && o.payload) {
      const { meta: a, intentions: u } = e.getState();
      Ee({
        eventType: be.linkProvided,
        systemType: a.systemType,
        utmParams: a.marketing.lastUtmParams,
        customerUuid: a.cid,
        email: u.email.current
      });
    }
    t(o);
  };
}, Fn = (e, t, n, o) => {
  const a = setInterval(() => {
    let u = localStorage.getItem(e) || "";
    try {
      u = JSON.parse(u);
    } catch {
      u = localStorage.getItem(e) || "";
    }
    o && u && (u = o(u)), o && u && (t.dispatch(n(u)), clearInterval(a));
  }, As);
};
let ue;
const nl = (e) => (t) => (n) => {
  const { meta: o, chat: a, config: u } = e.getState(), f = () => {
    const { config: w } = e.getState();
    e.dispatch(Bt()), e.dispatch(qt(w.translations.error));
  }, l = () => {
    e.dispatch(_n({ itemId: a.historyIds.pop() })), f();
  }, h = (w) => {
    if (w.role === Q.user && e.dispatch(Gt()), ue && ue.connected && w.message.trim() !== "") {
      ue.emit(ke.chat, { time: (/* @__PURE__ */ new Date()).getTime(), ...w }, On(l)), e.dispatch(vr());
      return;
    }
    l();
  }, b = (w) => {
    e.dispatch(na(w)), e.dispatch(Gt());
    const x = () => {
      const { config: I } = e.getState();
      e.dispatch(_n(w)), e.dispatch(Bt()), e.dispatch(qt(I.translations.error));
    };
    ue != null && ue.connected && w.message.trim() !== "" ? (ue.volatile.emit(
      ke.chat,
      {
        role: Q.user,
        message: w.message,
        term: gt(et.chat),
        user_id: o.cid,
        region: o.region
      },
      On(x)
    ), e.dispatch(vr())) : x();
  };
  if (Zr.match(n) && h({
    role: Q.user,
    message: n.payload,
    term: gt(et.chat),
    user_id: o.cid,
    region: o.region,
    messageId: [...a.historyIds].pop()
  }), ar.match(n)) {
    const w = document.querySelector("#chatbot-container");
    document.body && w && u.purpose !== Wr && (w.innerHTML = "", document.body.classList.remove(di)), localStorage.setItem(Rs, (/* @__PURE__ */ new Date()).getTime().toString()), ue && ue.close(), window.location.href = u.close.href || Os;
  }
  if (gi.match(n) && n.payload) {
    const w = [...a.historyIds].pop(), x = a.historyData[w].content.map(({ message: I }) => I).join(`
`);
    x.trim() !== "" && h({
      role: Q.user,
      message: x,
      term: gt(et.chat),
      user_id: o.cid,
      region: o.region,
      messageId: w
    });
  }
  if (yi.match(n) && b(n.payload), !Yn.match(n))
    return t(n);
  e.dispatch(Gt()), ue = Zi.connect(n.payload.chatUrl, { query: `cid=${o.cid}`, ...Ns }), ue.on(ke.connect, () => {
    const { meta: w } = e.getState();
    ue.sendBuffer = [], ue.emit(ke.chatHistory, { user_id: w.cid, region: w.region, term: gt(et.chat) }), e.dispatch(Pn(!0));
  }), ue.on(ke.chatHistory, ({ history: w, errors: x, region: I }) => {
    e.dispatch(Bt()), e.dispatch(Er(!1)), e.dispatch(Co(I));
    const { config: S, meta: B } = e.getState();
    if (x.length) {
      e.dispatch(qt(x[0]));
      return;
    }
    if (w.length) {
      e.dispatch(ta(w));
      return;
    }
    e.dispatch(ia()), e.dispatch(Gt());
    let _ = 0;
    S.aiProfile.initialMessage.forEach(($, P, N) => {
      _ += 1e3, setTimeout(() => {
        e.dispatch(oa($)), N.length === P + 1 && (S.aiProfile.initialMessage.forEach((le) => h({
          role: Q.assistant,
          term: gt(et.chat),
          user_id: B.cid,
          message: JSON.stringify(le.content),
          messageId: le.id,
          region: B.region
        })), e.dispatch(Bt()));
      }, _);
    });
  }), ue.on(ke.streamStart, ({ id: w }) => {
    e.dispatch(Er(!0)), e.dispatch(Bt()), e.dispatch(ea()), e.dispatch(vr()), e.dispatch(jn({ id: w }));
  }), ue.on(ke.streamData, (w) => {
    var x;
    e.dispatch(jn({
      id: w.id,
      sequence: w.sequence,
      content: {
        type: w.type,
        [w.type]: w[w.type],
        sequence: w.sequence
      }
    })), (x = w.errors) != null && x.length && !a.error && e.dispatch(qt(w.errors[0]));
  }), ue.on(ke.streamEnd, () => {
    e.dispatch(Er(!1));
  }), ue.on(ke.streamError, f), ue.on(ke.error, f), ue.on(ke.disconnect, () => {
    e.dispatch(Pn(!1));
  }), t(n);
}, On = (e, t = 5e3) => {
  let n = !1;
  const o = setTimeout(() => {
    n || (n = !0, e());
  }, t);
  return () => {
    n || (n = !0, clearTimeout(o));
  };
}, il = {
  key: "root",
  storage: Ri,
  whitelist: ["chat", "meta", "config"]
}, Bi = Hi({
  reducer: Xi(il, Yi({
    meta: ko,
    config: Eo,
    chat: sa,
    intentions: ha
  })),
  middleware: (e) => e({ serializableCheck: !1 }).concat(nl, rl)
}), ol = Ki(Bi);
let Ln = !1;
const El = (e) => {
  Ln || (Ln = !0, At.createRoot(e.root).render(
    /* @__PURE__ */ g.jsx(qi, { store: Bi, children: /* @__PURE__ */ g.jsx(Wn, { persistor: ol, children: /* @__PURE__ */ g.jsx(qa, { config: e.initialConfig }) }) })
  ), document.body.classList.add(di));
};
export {
  El as ReactBotClient,
  El as default,
  Ue as intent
};
//# sourceMappingURL=index.es.js.map
