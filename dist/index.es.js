(function(){"use strict";try{if(typeof document<"u"){const t=document.createElement("style");t.id="react-tw-ai-client",t.appendChild(document.createTextNode('*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:Plus Jakarta Sans,Roboto,Mulish,Exo,Helvetica,Arial,sans-serif;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.tw--pointer-events-none{pointer-events:none}.tw--pointer-events-auto{pointer-events:auto}.tw--fixed{position:fixed}.tw--absolute{position:absolute}.tw--relative{position:relative}.tw---top-1\\/2{top:-50%}.tw--bottom-0{bottom:0}.tw--bottom-1{bottom:.25rem}.tw--bottom-\\[-16px\\]{bottom:-16px}.tw--left-0{left:0}.tw--right-0{right:0}.tw--right-4{right:1rem}.tw--right-\\[-10px\\]{right:-10px}.tw--top-0{top:0}.tw--top-8{top:2rem}.tw--top-\\[-30px\\]{top:-30px}.tw--top-\\[50\\%\\]{top:50%}.tw--z-50{z-index:50}.tw--z-\\[101\\]{z-index:101}.tw--m-0{margin:0}.tw--m-auto{margin:auto}.tw--mx-10{margin-left:2.5rem;margin-right:2.5rem}.tw--mx-\\[30px\\]{margin-left:30px;margin-right:30px}.tw--mx-auto{margin-left:auto;margin-right:auto}.tw--my-4{margin-top:1rem;margin-bottom:1rem}.tw--mb-5{margin-bottom:1.25rem}.tw--mb-6{margin-bottom:1.5rem}.tw--mb-7{margin-bottom:1.75rem}.tw--mb-\\[11px\\]{margin-bottom:11px}.tw--mb-auto{margin-bottom:auto}.tw--ml-7{margin-left:1.75rem}.tw--ml-auto{margin-left:auto}.tw--mr-0{margin-right:0}.tw--mr-5{margin-right:1.25rem}.tw--mr-\\[5px\\]{margin-right:5px}.tw--mt-0{margin-top:0}.tw--mt-24{margin-top:6rem}.tw--mt-\\[11px\\]{margin-top:11px}.tw--mt-\\[30px\\]{margin-top:30px}.tw--box-border{box-sizing:border-box}.tw--box-content{box-sizing:content-box}.tw--block{display:block}.tw--inline-block{display:inline-block}.tw--flex{display:flex}.tw--grid{display:grid}.tw--hidden{display:none}.tw--h-16{height:4rem}.tw--h-4{height:1rem}.tw--h-6{height:1.5rem}.tw--h-8{height:2rem}.tw--h-80{height:20rem}.tw--h-\\[12px\\]{height:12px}.tw--h-\\[50px\\]{height:50px}.tw--h-\\[60px\\]{height:60px}.tw--h-auto{height:auto}.tw--h-fit{height:-moz-fit-content;height:fit-content}.tw--h-full{height:100%}.tw--h-screen{height:100vh}.tw--max-h-\\[700px\\]{max-height:700px}.tw--max-h-screen{max-height:100vh}.tw--min-h-\\[400px\\]{min-height:400px}.tw--w-16{width:4rem}.tw--w-4{width:1rem}.tw--w-6{width:1.5rem}.tw--w-64{width:16rem}.tw--w-8{width:2rem}.tw--w-\\[12px\\]{width:12px}.tw--w-fit{width:-moz-fit-content;width:fit-content}.tw--w-full{width:100%}.tw--w-screen{width:100vw}.tw--max-w-\\[280px\\]{max-width:280px}.tw--max-w-\\[335px\\]{max-width:335px}.tw--max-w-\\[375px\\]{max-width:375px}.tw--max-w-\\[400px\\]{max-width:400px}.tw--max-w-\\[500px\\]{max-width:500px}.tw--max-w-md{max-width:28rem}.tw--max-w-xs{max-width:20rem}.tw--flex-1{flex:1 1 0%}.tw--shrink{flex-shrink:1}.tw--shrink-0{flex-shrink:0}.tw--grow-0{flex-grow:0}.tw--translate-x-72{--tw-translate-x: 18rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.tw--translate-y-1\\/2{--tw-translate-y: 50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.tw--translate-y-\\[-50\\%\\]{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes tw--dark-shadow-dots{0%,33%{background:rgba(255,255,255,.5);box-shadow:-31px 0 #f53374,31px 0 #ffffff80}66%{background:#f53374;box-shadow:-31px 0 #ffffff80,31px 0 #ffffff80}to,0%{background:rgba(255,255,255,.5);box-shadow:-31px 0 #ffffff80,31px 0 #f53374}}.tw--animate-dark-shadow-dots{animation:tw--dark-shadow-dots 2s linear infinite}@keyframes tw--light-shadow-dots{0%,33%{background:rgba(202,202,219,.6);box-shadow:-31px 0 #21bb5a,31px 0 #cacadb99}66%{background:#21bb5a;box-shadow:-31px 0 #cacadb99,31px 0 #cacadb99}to,0%{background:rgba(202,202,219,.6);box-shadow:-31px 0 #cacadb99,31px 0 #21bb5a}}.tw--animate-light-shadow-dots{animation:tw--light-shadow-dots 2s linear infinite}@keyframes tw--rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.tw--animate-rotate{animation:tw--rotate .5s linear infinite}@keyframes tw--text-spin{0%{transform:translate(18rem)}6.25%,12.5%{transform:translate(-.5rem)}18.75%,25%{transform:translate(-21.5rem)}31.25%,37.5%{transform:translate(-42.5rem)}43.75%,50%{transform:translate(-63.5rem)}56.25%,62.5%{transform:translate(-84.5rem)}68.75%,75%{transform:translate(-105.5rem)}81.25%,87.5%{transform:translate(-126.5rem)}93.75%,to{transform:translate(-147.5em)}}.tw--animate-text-spin{animation:tw--text-spin 30s linear infinite}.tw--animate-wave{animation:tw--wave 1.3s linear infinite}.tw--animate-wave-delay{animation:tw--wave 1.3s linear infinite -1.1s}@keyframes tw--wave{0%{transform:initial}60%{transform:initial}to{transform:initial}30%{transform:translateY(-15px)}}.tw--animate-wave-delay-2{animation:tw--wave 1.3s linear infinite -.9s}.tw--cursor-pointer{cursor:pointer}.tw--select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.tw--flex-row{flex-direction:row}.tw--flex-col{flex-direction:column}.tw--flex-col-reverse{flex-direction:column-reverse}.tw--flex-wrap{flex-wrap:wrap}.tw--items-end{align-items:flex-end}.tw--items-center{align-items:center}.tw--items-stretch{align-items:stretch}.tw--justify-center{justify-content:center}.tw--justify-between{justify-content:space-between}.tw--gap-2{gap:.5rem}.tw--space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.tw--space-x-\\[6px\\]>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(6px * var(--tw-space-x-reverse));margin-left:calc(6px * calc(1 - var(--tw-space-x-reverse)))}.tw--space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.tw--space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.25rem * var(--tw-space-y-reverse))}.tw--space-y-\\[10px\\]>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(10px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(10px * var(--tw-space-y-reverse))}.tw--space-y-\\[11px\\]>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(11px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(11px * var(--tw-space-y-reverse))}.tw--self-stretch{align-self:stretch}.tw--justify-self-start{justify-self:start}.tw--justify-self-end{justify-self:end}.tw--justify-self-stretch{justify-self:stretch}.tw--overflow-hidden{overflow:hidden}.tw--overflow-y-scroll{overflow-y:scroll}.tw--whitespace-pre-wrap{white-space:pre-wrap}.tw--break-words{overflow-wrap:break-word}.tw--rounded-3xl{border-radius:1.5rem}.tw--rounded-\\[20px\\]{border-radius:20px}.tw--rounded-full{border-radius:9999px}.tw--rounded-lg{border-radius:.5rem}.tw--rounded-xl{border-radius:.75rem}.tw--border{border-width:1px}.tw--border-0{border-width:0px}.tw--border-\\[5px\\]{border-width:5px}.tw--border-r{border-right-width:1px}.tw--border-solid{border-style:solid}.tw--border-dark-glaze{--tw-border-opacity: 1;border-color:rgb(179 186 198 / var(--tw-border-opacity))}.tw--border-light-seraph{--tw-border-opacity: 1;border-color:rgb(33 187 90 / var(--tw-border-opacity))}.tw--border-light-zephyr-200{border-color:#2b31391a}.tw--border-l-dark-zephyr-600{border-left-color:#fff9}.tw--border-l-light-zephyr-600{border-left-color:#2b313999}.tw--border-r-\\[\\#cacadb\\]{--tw-border-opacity: 1;border-right-color:rgb(202 202 219 / var(--tw-border-opacity))}.tw--border-t-dark-zephyr-600{border-top-color:#fff9}.tw--border-t-light-zephyr-600{border-top-color:#2b313999}.tw--bg-\\[transparent\\]{background-color:transparent}.tw--bg-dark-glazeBg{--tw-bg-opacity: 1;background-color:rgb(179 186 198 / var(--tw-bg-opacity))}.tw--bg-dark-iota-dots{--tw-bg-opacity: 1;background-color:rgb(33 187 90 / var(--tw-bg-opacity))}.tw--bg-dark-loader,.tw--bg-dark-lumina{--tw-bg-opacity: 1;background-color:rgb(37 34 57 / var(--tw-bg-opacity))}.tw--bg-dark-neon{--tw-bg-opacity: 1;background-color:rgb(1 154 255 / var(--tw-bg-opacity))}.tw--bg-dark-pale-dots{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.tw--bg-dark-seraph{--tw-bg-opacity: 1;background-color:rgb(245 51 115 / var(--tw-bg-opacity))}.tw--bg-dark-sigma{--tw-bg-opacity: 1;background-color:rgb(15 14 30 / var(--tw-bg-opacity))}.tw--bg-dark-whisper{--tw-bg-opacity: 1;background-color:rgb(21 18 38 / var(--tw-bg-opacity))}.tw--bg-dark-zephyr-100{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.tw--bg-light-glaze{--tw-bg-opacity: 1;background-color:rgb(33 187 90 / var(--tw-bg-opacity))}.tw--bg-light-glazeBg{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.tw--bg-light-iota-dots{--tw-bg-opacity: 1;background-color:rgb(33 187 90 / var(--tw-bg-opacity))}.tw--bg-light-loader{--tw-bg-opacity: 1;background-color:rgb(246 248 250 / var(--tw-bg-opacity))}.tw--bg-light-lumina{--tw-bg-opacity: 1;background-color:rgb(240 242 245 / var(--tw-bg-opacity))}.tw--bg-light-pale-dots{--tw-bg-opacity: 1;background-color:rgb(202 202 219 / var(--tw-bg-opacity))}.tw--bg-light-seraph{--tw-bg-opacity: 1;background-color:rgb(33 187 90 / var(--tw-bg-opacity))}.tw--bg-light-whisper{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.tw--bg-light-zephyr-100{--tw-bg-opacity: 1;background-color:rgb(43 49 57 / var(--tw-bg-opacity))}.tw--bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.tw--bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.tw--from-\\[\\#FF0000\\]{--tw-gradient-from: #FF0000 var(--tw-gradient-from-position);--tw-gradient-to: rgb(255 0 0 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.tw--to-\\[\\#F25640\\]{--tw-gradient-to: #F25640 var(--tw-gradient-to-position)}.tw--p-0{padding:0}.tw--p-0\\.5{padding:.125rem}.tw--p-1{padding:.25rem}.tw--p-3{padding:.75rem}.tw--p-5{padding:1.25rem}.tw--p-7{padding:1.75rem}.tw--px-4{padding-left:1rem;padding-right:1rem}.tw--px-5{padding-left:1.25rem;padding-right:1.25rem}.tw--px-\\[15px\\]{padding-left:15px;padding-right:15px}.tw--py-2{padding-top:.5rem;padding-bottom:.5rem}.tw--py-3{padding-top:.75rem;padding-bottom:.75rem}.tw--py-4{padding-top:1rem;padding-bottom:1rem}.tw--py-\\[11px\\]{padding-top:11px;padding-bottom:11px}.tw--pb-1{padding-bottom:.25rem}.tw--pb-10{padding-bottom:2.5rem}.tw--pb-5{padding-bottom:1.25rem}.tw--pb-\\[11px\\]{padding-bottom:11px}.tw--pb-\\[30px\\]{padding-bottom:30px}.tw--pb-\\[5px\\]{padding-bottom:5px}.tw--pl-\\[10px\\]{padding-left:10px}.tw--pl-\\[35px\\]{padding-left:35px}.tw--pr-2{padding-right:.5rem}.tw--pr-\\[5px\\]{padding-right:5px}.tw--pt-10{padding-top:2.5rem}.tw--pt-5{padding-top:1.25rem}.tw--text-left{text-align:left}.tw--text-center{text-align:center}.tw--text-\\[10px\\]{font-size:10px}.tw--text-\\[12\\.8px\\]{font-size:12.8px}.tw--text-\\[16px\\]{font-size:16px}.tw--text-\\[20px\\]{font-size:20px}.tw--text-\\[24px\\]{font-size:24px}.tw--text-lg{font-size:1.125rem;line-height:1.75rem}.tw--text-sm{font-size:.875rem;line-height:1.25rem}.tw--text-xl,.tw--text-xl\\/7{font-size:1.25rem;line-height:1.75rem}.tw--font-bold{font-weight:700}.tw--font-extrabold{font-weight:800}.tw--font-medium{font-weight:500}.tw--font-semibold{font-weight:600}.tw--leading-5{line-height:1.25rem}.tw--leading-\\[1\\.4\\]{line-height:1.4}.tw--leading-\\[1\\.56\\]{line-height:1.56}.tw--leading-\\[1\\.63\\]{line-height:1.63}.tw--leading-\\[1\\]{line-height:1}.tw--leading-\\[2\\]{line-height:2}.tw--leading-\\[30px\\]{line-height:30px}.tw--text-\\[\\#ff0043\\]{--tw-text-opacity: 1;color:rgb(255 0 67 / var(--tw-text-opacity))}.tw--text-\\[inherit\\]{color:inherit}.tw--text-dark-glazeText{--tw-text-opacity: 1;color:rgb(21 18 38 / var(--tw-text-opacity))}.tw--text-dark-seraph{--tw-text-opacity: 1;color:rgb(245 51 115 / var(--tw-text-opacity))}.tw--text-dark-zephyr-100{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.tw--text-dark-zephyr-600{color:#fff9}.tw--text-dark-zephyr-800{color:#fffc}.tw--text-dark-zeta{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.tw--text-light-glazeText{--tw-text-opacity: 1;color:rgb(21 18 38 / var(--tw-text-opacity))}.tw--text-light-seraph,.tw--text-light-status{--tw-text-opacity: 1;color:rgb(33 187 90 / var(--tw-text-opacity))}.tw--text-light-zephyr-100{--tw-text-opacity: 1;color:rgb(43 49 57 / var(--tw-text-opacity))}.tw--text-light-zephyr-600{color:#2b313999}.tw--text-light-zephyr-800{color:#2b3139cc}.tw--text-light-zeta{--tw-text-opacity: 1;color:rgb(15 14 30 / var(--tw-text-opacity))}.tw--text-muted-blue{color:#0f0e1e99}.tw--text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.tw--underline{text-decoration-line:underline}.tw--opacity-40{opacity:.4}.tw--opacity-60{opacity:.6}.tw--shadow-\\[-1px_2px_5px_0\\]{--tw-shadow: -1px 2px 5px 0;--tw-shadow-colored: -1px 2px 5px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-\\[0px_12px_24px_-4px_rgba\\(1\\,154\\,255\\,0\\.2\\)\\]{--tw-shadow: 0px 12px 24px -4px rgba(1,154,255,.2);--tw-shadow-colored: 0px 12px 24px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-dark-card{--tw-shadow: 0 12px 24px 0 rgba(0, 0, 0, .12), 0 4px 8px 0 rgba(0, 0, 0, .1);--tw-shadow-colored: 0 12px 24px 0 var(--tw-shadow-color), 0 4px 8px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-dark-loading-dots{--tw-shadow: -24px 0 rgba(255, 255, 255, .5), 24px 0 rgba(255, 255, 255, .5);--tw-shadow-colored: -24px 0 var(--tw-shadow-color), 24px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-light-card{--tw-shadow: 0 12px 24px 0 rgba(43, 49, 57, .06), 0 4px 8px 0 rgba(43, 55, 70, .04);--tw-shadow-colored: 0 12px 24px 0 var(--tw-shadow-color), 0 4px 8px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-light-loading-dots{--tw-shadow: -24px 0 rgba(201, 201, 201, .5), 24px 0 rgba(201, 201, 201, .5);--tw-shadow-colored: -24px 0 var(--tw-shadow-color), 24px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-dark-zephyr-200{--tw-shadow-color: rgba(255, 255, 255,.1);--tw-shadow: var(--tw-shadow-colored)}.tw--shadow-light-zephyr-200{--tw-shadow-color: rgba(43, 49, 57,.1);--tw-shadow: var(--tw-shadow-colored)}.tw--translate-z-0 *{transform:translateZ(0)}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.\\[key\\:string\\]{key:string}#chatbot-container *{font-family:inherit!important}.spaced-letters{letter-spacing:2px}p{display:inline}.mt-8{margin-top:2rem}.mb-6{margin-bottom:1.5rem}.after\\:tw--absolute:after{content:var(--tw-content);position:absolute}.after\\:tw--bottom-\\[-2px\\]:after{content:var(--tw-content);bottom:-2px}.after\\:tw--left-\\[37px\\]:after{content:var(--tw-content);left:37px}.after\\:tw--z-10:after{content:var(--tw-content);z-index:10}.after\\:tw--ml-1:after{content:var(--tw-content);margin-left:.25rem}.after\\:tw--inline-block:after{content:var(--tw-content);display:inline-block}.after\\:tw--hidden:after{content:var(--tw-content);display:none}.after\\:tw--h-4:after{content:var(--tw-content);height:1rem}.after\\:tw--h-\\[10px\\]:after{content:var(--tw-content);height:10px}.after\\:tw--w-1:after{content:var(--tw-content);width:.25rem}.after\\:tw--w-\\[10px\\]:after{content:var(--tw-content);width:10px}@keyframes tw--blink{0%{content:var(--tw-content);opacity:1}49%{content:var(--tw-content);opacity:1}50%{content:var(--tw-content);opacity:0}to{content:var(--tw-content);opacity:0}}.after\\:tw--animate-blink:after{content:var(--tw-content);animation:tw--blink .5s infinite}.after\\:tw--rounded-full:after{content:var(--tw-content);border-radius:9999px}.after\\:tw--bg-dark-zephyr-100:after{content:var(--tw-content);--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.after\\:tw--bg-light-iota-dots:after{content:var(--tw-content);--tw-bg-opacity: 1;background-color:rgb(33 187 90 / var(--tw-bg-opacity))}.after\\:tw--bg-light-zephyr-100:after{content:var(--tw-content);--tw-bg-opacity: 1;background-color:rgb(43 49 57 / var(--tw-bg-opacity))}.focus\\:\\!tw--bg-dark-lumina:focus{--tw-bg-opacity: 1 !important;background-color:rgb(37 34 57 / var(--tw-bg-opacity))!important}.focus\\:\\!tw--bg-light-lumina:focus{--tw-bg-opacity: 1 !important;background-color:rgb(240 242 245 / var(--tw-bg-opacity))!important}.focus\\:tw--outline-none:focus{outline:2px solid transparent;outline-offset:2px}@media (min-width: 350px){.customXs\\:tw--max-w-xs{max-width:20rem}.customXs\\:tw--text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width: 768px){.md\\:tw--max-w-\\[800px\\]{max-width:800px}}')),document.body.appendChild(t)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import Nt, { PureComponent as zi, useState as xt, useLayoutEffect as Vi, useEffect as nr, forwardRef as Ln, useRef as Dr } from "react";
import $i from "react-dom";
import { useSelector as Wi, useDispatch as Gi, Provider as qi } from "react-redux";
import { createSlice as ir, configureStore as Hi, combineReducers as Yi } from "@reduxjs/toolkit";
import Ji from "react-markdown";
import { persistReducer as Xi, persistStore as Ki } from "redux-persist";
import { io as Zi } from "socket.io-client";
var ye = {}, Nn = {}, or = {};
or.byteLength = to;
or.toByteArray = no;
or.fromByteArray = so;
var Ae = [], Ie = [], Qi = typeof Uint8Array < "u" ? Uint8Array : Array, hr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var ht = 0, eo = hr.length; ht < eo; ++ht)
  Ae[ht] = hr[ht], Ie[hr.charCodeAt(ht)] = ht;
Ie["-".charCodeAt(0)] = 62;
Ie["_".charCodeAt(0)] = 63;
function Mn(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = e.indexOf("=");
  n === -1 && (n = t);
  var o = n === t ? 0 : 4 - n % 4;
  return [n, o];
}
function to(e) {
  var t = Mn(e), n = t[0], o = t[1];
  return (n + o) * 3 / 4 - o;
}
function ro(e, t, n) {
  return (t + n) * 3 / 4 - n;
}
function no(e) {
  var t, n = Mn(e), o = n[0], a = n[1], u = new Qi(ro(e, o, a)), f = 0, l = a > 0 ? o - 4 : o, h;
  for (h = 0; h < l; h += 4)
    t = Ie[e.charCodeAt(h)] << 18 | Ie[e.charCodeAt(h + 1)] << 12 | Ie[e.charCodeAt(h + 2)] << 6 | Ie[e.charCodeAt(h + 3)], u[f++] = t >> 16 & 255, u[f++] = t >> 8 & 255, u[f++] = t & 255;
  return a === 2 && (t = Ie[e.charCodeAt(h)] << 2 | Ie[e.charCodeAt(h + 1)] >> 4, u[f++] = t & 255), a === 1 && (t = Ie[e.charCodeAt(h)] << 10 | Ie[e.charCodeAt(h + 1)] << 4 | Ie[e.charCodeAt(h + 2)] >> 2, u[f++] = t >> 8 & 255, u[f++] = t & 255), u;
}
function io(e) {
  return Ae[e >> 18 & 63] + Ae[e >> 12 & 63] + Ae[e >> 6 & 63] + Ae[e & 63];
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
    Ae[t >> 2] + Ae[t << 4 & 63] + "=="
  )) : o === 2 && (t = (e[n - 2] << 8) + e[n - 1], a.push(
    Ae[t >> 10] + Ae[t >> 4 & 63] + Ae[t << 2 & 63] + "="
  )), a.join("");
}
var zr = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
zr.read = function(e, t, n, o, a) {
  var u, f, l = a * 8 - o - 1, h = (1 << l) - 1, w = h >> 1, y = -7, v = n ? a - 1 : 0, I = n ? -1 : 1, C = e[t + v];
  for (v += I, u = C & (1 << -y) - 1, C >>= -y, y += l; y > 0; u = u * 256 + e[t + v], v += I, y -= 8)
    ;
  for (f = u & (1 << -y) - 1, u >>= -y, y += o; y > 0; f = f * 256 + e[t + v], v += I, y -= 8)
    ;
  if (u === 0)
    u = 1 - w;
  else {
    if (u === h)
      return f ? NaN : (C ? -1 : 1) * (1 / 0);
    f = f + Math.pow(2, o), u = u - w;
  }
  return (C ? -1 : 1) * f * Math.pow(2, u - o);
};
zr.write = function(e, t, n, o, a, u) {
  var f, l, h, w = u * 8 - a - 1, y = (1 << w) - 1, v = y >> 1, I = a === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, C = o ? 0 : u - 1, B = o ? 1 : -1, S = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (l = isNaN(t) ? 1 : 0, f = y) : (f = Math.floor(Math.log(t) / Math.LN2), t * (h = Math.pow(2, -f)) < 1 && (f--, h *= 2), f + v >= 1 ? t += I / h : t += I * Math.pow(2, 1 - v), t * h >= 2 && (f++, h /= 2), f + v >= y ? (l = 0, f = y) : f + v >= 1 ? (l = (t * h - 1) * Math.pow(2, a), f = f + v) : (l = t * Math.pow(2, v - 1) * Math.pow(2, a), f = 0)); a >= 8; e[n + C] = l & 255, C += B, l /= 256, a -= 8)
    ;
  for (f = f << a | l, w += a; w > 0; e[n + C] = f & 255, C += B, f /= 256, w -= 8)
    ;
  e[n + C - B] |= S * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  const t = or, n = zr, o = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = l, e.SlowBuffer = F, e.INSPECT_MAX_BYTES = 50;
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
      return v(s);
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
    if (me(s, ArrayBuffer) || s && me(s.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (me(s, SharedArrayBuffer) || s && me(s.buffer, SharedArrayBuffer)))
      return S(s, r, i);
    if (typeof s == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const c = s.valueOf && s.valueOf();
    if (c != null && c !== s)
      return l.from(c, r, i);
    const p = U(s);
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
  function w(s) {
    if (typeof s != "number")
      throw new TypeError('"size" argument must be of type number');
    if (s < 0)
      throw new RangeError('The value "' + s + '" is invalid for option "size"');
  }
  function y(s, r, i) {
    return w(s), s <= 0 ? f(s) : r !== void 0 ? typeof i == "string" ? f(s).fill(r, i) : f(s).fill(r) : f(s);
  }
  l.alloc = function(s, r, i) {
    return y(s, r, i);
  };
  function v(s) {
    return w(s), f(s < 0 ? 0 : R(s) | 0);
  }
  l.allocUnsafe = function(s) {
    return v(s);
  }, l.allocUnsafeSlow = function(s) {
    return v(s);
  };
  function I(s, r) {
    if ((typeof r != "string" || r === "") && (r = "utf8"), !l.isEncoding(r))
      throw new TypeError("Unknown encoding: " + r);
    const i = de(s, r) | 0;
    let c = f(i);
    const p = c.write(s, r);
    return p !== i && (c = c.slice(0, p)), c;
  }
  function C(s) {
    const r = s.length < 0 ? 0 : R(s.length) | 0, i = f(r);
    for (let c = 0; c < r; c += 1)
      i[c] = s[c] & 255;
    return i;
  }
  function B(s) {
    if (me(s, Uint8Array)) {
      const r = new Uint8Array(s);
      return S(r.buffer, r.byteOffset, r.byteLength);
    }
    return C(s);
  }
  function S(s, r, i) {
    if (r < 0 || s.byteLength < r)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (s.byteLength < r + (i || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let c;
    return r === void 0 && i === void 0 ? c = new Uint8Array(s) : i === void 0 ? c = new Uint8Array(s, r) : c = new Uint8Array(s, r, i), Object.setPrototypeOf(c, l.prototype), c;
  }
  function U(s) {
    if (l.isBuffer(s)) {
      const r = R(s.length) | 0, i = f(r);
      return i.length === 0 || s.copy(i, 0, 0, r), i;
    }
    if (s.length !== void 0)
      return typeof s.length != "number" || Ct(s.length) ? f(0) : C(s);
    if (s.type === "Buffer" && Array.isArray(s.data))
      return C(s.data);
  }
  function R(s) {
    if (s >= a)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
    return s | 0;
  }
  function F(s) {
    return +s != s && (s = 0), l.alloc(+s);
  }
  l.isBuffer = function(r) {
    return r != null && r._isBuffer === !0 && r !== l.prototype;
  }, l.compare = function(r, i) {
    if (me(r, Uint8Array) && (r = l.from(r, r.offset, r.byteLength)), me(i, Uint8Array) && (i = l.from(i, i.offset, i.byteLength)), !l.isBuffer(r) || !l.isBuffer(i))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (r === i)
      return 0;
    let c = r.length, p = i.length;
    for (let m = 0, b = Math.min(c, p); m < b; ++m)
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
          return ct(s).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return i * 2;
        case "hex":
          return i >>> 1;
        case "base64":
          return Dt(s).length;
        default:
          if (p)
            return c ? -1 : ct(s).length;
          r = ("" + r).toLowerCase(), p = !0;
      }
  }
  l.byteLength = de;
  function we(s, r, i) {
    let c = !1;
    if ((r === void 0 || r < 0) && (r = 0), r > this.length || ((i === void 0 || i > this.length) && (i = this.length), i <= 0) || (i >>>= 0, r >>>= 0, i <= r))
      return "";
    for (s || (s = "utf8"); ; )
      switch (s) {
        case "hex":
          return q(this, r, i);
        case "utf8":
        case "utf-8":
          return k(this, r, i);
        case "ascii":
          return D(this, r, i);
        case "latin1":
        case "binary":
          return $(this, r, i);
        case "base64":
          return P(this, r, i);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ee(this, r, i);
        default:
          if (c)
            throw new TypeError("Unknown encoding: " + s);
          s = (s + "").toLowerCase(), c = !0;
      }
  }
  l.prototype._isBuffer = !0;
  function ue(s, r, i) {
    const c = s[r];
    s[r] = s[i], s[i] = c;
  }
  l.prototype.swap16 = function() {
    const r = this.length;
    if (r % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let i = 0; i < r; i += 2)
      ue(this, i, i + 1);
    return this;
  }, l.prototype.swap32 = function() {
    const r = this.length;
    if (r % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let i = 0; i < r; i += 4)
      ue(this, i, i + 3), ue(this, i + 1, i + 2);
    return this;
  }, l.prototype.swap64 = function() {
    const r = this.length;
    if (r % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let i = 0; i < r; i += 8)
      ue(this, i, i + 7), ue(this, i + 1, i + 6), ue(this, i + 2, i + 5), ue(this, i + 3, i + 4);
    return this;
  }, l.prototype.toString = function() {
    const r = this.length;
    return r === 0 ? "" : arguments.length === 0 ? k(this, 0, r) : we.apply(this, arguments);
  }, l.prototype.toLocaleString = l.prototype.toString, l.prototype.equals = function(r) {
    if (!l.isBuffer(r))
      throw new TypeError("Argument must be a Buffer");
    return this === r ? !0 : l.compare(this, r) === 0;
  }, l.prototype.inspect = function() {
    let r = "";
    const i = e.INSPECT_MAX_BYTES;
    return r = this.toString("hex", 0, i).replace(/(.{2})/g, "$1 ").trim(), this.length > i && (r += " ... "), "<Buffer " + r + ">";
  }, o && (l.prototype[o] = l.prototype.inspect), l.prototype.compare = function(r, i, c, p, m) {
    if (me(r, Uint8Array) && (r = l.from(r, r.offset, r.byteLength)), !l.isBuffer(r))
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
    let b = m - p, A = c - i;
    const Z = Math.min(b, A), X = this.slice(p, m), Q = r.slice(i, c);
    for (let H = 0; H < Z; ++H)
      if (X[H] !== Q[H]) {
        b = X[H], A = Q[H];
        break;
      }
    return b < A ? -1 : A < b ? 1 : 0;
  };
  function je(s, r, i, c, p) {
    if (s.length === 0)
      return -1;
    if (typeof i == "string" ? (c = i, i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648), i = +i, Ct(i) && (i = p ? 0 : s.length - 1), i < 0 && (i = s.length + i), i >= s.length) {
      if (p)
        return -1;
      i = s.length - 1;
    } else if (i < 0)
      if (p)
        i = 0;
      else
        return -1;
    if (typeof r == "string" && (r = l.from(r, c)), l.isBuffer(r))
      return r.length === 0 ? -1 : Re(s, r, i, c, p);
    if (typeof r == "number")
      return r = r & 255, typeof Uint8Array.prototype.indexOf == "function" ? p ? Uint8Array.prototype.indexOf.call(s, r, i) : Uint8Array.prototype.lastIndexOf.call(s, r, i) : Re(s, [r], i, c, p);
    throw new TypeError("val must be string, number or Buffer");
  }
  function Re(s, r, i, c, p) {
    let m = 1, b = s.length, A = r.length;
    if (c !== void 0 && (c = String(c).toLowerCase(), c === "ucs2" || c === "ucs-2" || c === "utf16le" || c === "utf-16le")) {
      if (s.length < 2 || r.length < 2)
        return -1;
      m = 2, b /= 2, A /= 2, i /= 2;
    }
    function Z(Q, H) {
      return m === 1 ? Q[H] : Q.readUInt16BE(H * m);
    }
    let X;
    if (p) {
      let Q = -1;
      for (X = i; X < b; X++)
        if (Z(s, X) === Z(r, Q === -1 ? 0 : X - Q)) {
          if (Q === -1 && (Q = X), X - Q + 1 === A)
            return Q * m;
        } else
          Q !== -1 && (X -= X - Q), Q = -1;
    } else
      for (i + A > b && (i = b - A), X = i; X >= 0; X--) {
        let Q = !0;
        for (let H = 0; H < A; H++)
          if (Z(s, X + H) !== Z(r, H)) {
            Q = !1;
            break;
          }
        if (Q)
          return X;
      }
    return -1;
  }
  l.prototype.includes = function(r, i, c) {
    return this.indexOf(r, i, c) !== -1;
  }, l.prototype.indexOf = function(r, i, c) {
    return je(this, r, i, c, !0);
  }, l.prototype.lastIndexOf = function(r, i, c) {
    return je(this, r, i, c, !1);
  };
  function Ne(s, r, i, c) {
    i = Number(i) || 0;
    const p = s.length - i;
    c ? (c = Number(c), c > p && (c = p)) : c = p;
    const m = r.length;
    c > m / 2 && (c = m / 2);
    let b;
    for (b = 0; b < c; ++b) {
      const A = parseInt(r.substr(b * 2, 2), 16);
      if (Ct(A))
        return b;
      s[i + b] = A;
    }
    return b;
  }
  function Ce(s, r, i, c) {
    return ft(ct(r, s.length - i), s, i, c);
  }
  function Me(s, r, i, c) {
    return ft(Ut(r), s, i, c);
  }
  function Ue(s, r, i, c) {
    return ft(Dt(r), s, i, c);
  }
  function T(s, r, i, c) {
    return ft(ut(r, s.length - i), s, i, c);
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
    let b = !1;
    for (; ; )
      switch (p) {
        case "hex":
          return Ne(this, r, i, c);
        case "utf8":
        case "utf-8":
          return Ce(this, r, i, c);
        case "ascii":
        case "latin1":
        case "binary":
          return Me(this, r, i, c);
        case "base64":
          return Ue(this, r, i, c);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return T(this, r, i, c);
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
  function P(s, r, i) {
    return r === 0 && i === s.length ? t.fromByteArray(s) : t.fromByteArray(s.slice(r, i));
  }
  function k(s, r, i) {
    i = Math.min(s.length, i);
    const c = [];
    let p = r;
    for (; p < i; ) {
      const m = s[p];
      let b = null, A = m > 239 ? 4 : m > 223 ? 3 : m > 191 ? 2 : 1;
      if (p + A <= i) {
        let Z, X, Q, H;
        switch (A) {
          case 1:
            m < 128 && (b = m);
            break;
          case 2:
            Z = s[p + 1], (Z & 192) === 128 && (H = (m & 31) << 6 | Z & 63, H > 127 && (b = H));
            break;
          case 3:
            Z = s[p + 1], X = s[p + 2], (Z & 192) === 128 && (X & 192) === 128 && (H = (m & 15) << 12 | (Z & 63) << 6 | X & 63, H > 2047 && (H < 55296 || H > 57343) && (b = H));
            break;
          case 4:
            Z = s[p + 1], X = s[p + 2], Q = s[p + 3], (Z & 192) === 128 && (X & 192) === 128 && (Q & 192) === 128 && (H = (m & 15) << 18 | (Z & 63) << 12 | (X & 63) << 6 | Q & 63, H > 65535 && H < 1114112 && (b = H));
        }
      }
      b === null ? (b = 65533, A = 1) : b > 65535 && (b -= 65536, c.push(b >>> 10 & 1023 | 55296), b = 56320 | b & 1023), c.push(b), p += A;
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
  function $(s, r, i) {
    let c = "";
    i = Math.min(s.length, i);
    for (let p = r; p < i; ++p)
      c += String.fromCharCode(s[p]);
    return c;
  }
  function q(s, r, i) {
    const c = s.length;
    (!r || r < 0) && (r = 0), (!i || i < 0 || i > c) && (i = c);
    let p = "";
    for (let m = r; m < i; ++m)
      p += ur[s[m]];
    return p;
  }
  function ee(s, r, i) {
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
    let p = this[r], m = 1, b = 0;
    for (; ++b < i && (m *= 256); )
      p += this[r + b] * m;
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
  }, l.prototype.readBigUInt64LE = ke(function(r) {
    r = r >>> 0, qe(r, "offset");
    const i = this[r], c = this[r + 7];
    (i === void 0 || c === void 0) && Ze(r, this.length - 8);
    const p = i + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24, m = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + c * 2 ** 24;
    return BigInt(p) + (BigInt(m) << BigInt(32));
  }), l.prototype.readBigUInt64BE = ke(function(r) {
    r = r >>> 0, qe(r, "offset");
    const i = this[r], c = this[r + 7];
    (i === void 0 || c === void 0) && Ze(r, this.length - 8);
    const p = i * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r], m = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + c;
    return (BigInt(p) << BigInt(32)) + BigInt(m);
  }), l.prototype.readIntLE = function(r, i, c) {
    r = r >>> 0, i = i >>> 0, c || V(r, i, this.length);
    let p = this[r], m = 1, b = 0;
    for (; ++b < i && (m *= 256); )
      p += this[r + b] * m;
    return m *= 128, p >= m && (p -= Math.pow(2, 8 * i)), p;
  }, l.prototype.readIntBE = function(r, i, c) {
    r = r >>> 0, i = i >>> 0, c || V(r, i, this.length);
    let p = i, m = 1, b = this[r + --p];
    for (; p > 0 && (m *= 256); )
      b += this[r + --p] * m;
    return m *= 128, b >= m && (b -= Math.pow(2, 8 * i)), b;
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
  }, l.prototype.readBigInt64LE = ke(function(r) {
    r = r >>> 0, qe(r, "offset");
    const i = this[r], c = this[r + 7];
    (i === void 0 || c === void 0) && Ze(r, this.length - 8);
    const p = this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (c << 24);
    return (BigInt(p) << BigInt(32)) + BigInt(i + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24);
  }), l.prototype.readBigInt64BE = ke(function(r) {
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
  function W(s, r, i, c, p, m) {
    if (!l.isBuffer(s))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (r > p || r < m)
      throw new RangeError('"value" argument is out of bounds');
    if (i + c > s.length)
      throw new RangeError("Index out of range");
  }
  l.prototype.writeUintLE = l.prototype.writeUIntLE = function(r, i, c, p) {
    if (r = +r, i = i >>> 0, c = c >>> 0, !p) {
      const A = Math.pow(2, 8 * c) - 1;
      W(this, r, i, c, A, 0);
    }
    let m = 1, b = 0;
    for (this[i] = r & 255; ++b < c && (m *= 256); )
      this[i + b] = r / m & 255;
    return i + c;
  }, l.prototype.writeUintBE = l.prototype.writeUIntBE = function(r, i, c, p) {
    if (r = +r, i = i >>> 0, c = c >>> 0, !p) {
      const A = Math.pow(2, 8 * c) - 1;
      W(this, r, i, c, A, 0);
    }
    let m = c - 1, b = 1;
    for (this[i + m] = r & 255; --m >= 0 && (b *= 256); )
      this[i + m] = r / b & 255;
    return i + c;
  }, l.prototype.writeUint8 = l.prototype.writeUInt8 = function(r, i, c) {
    return r = +r, i = i >>> 0, c || W(this, r, i, 1, 255, 0), this[i] = r & 255, i + 1;
  }, l.prototype.writeUint16LE = l.prototype.writeUInt16LE = function(r, i, c) {
    return r = +r, i = i >>> 0, c || W(this, r, i, 2, 65535, 0), this[i] = r & 255, this[i + 1] = r >>> 8, i + 2;
  }, l.prototype.writeUint16BE = l.prototype.writeUInt16BE = function(r, i, c) {
    return r = +r, i = i >>> 0, c || W(this, r, i, 2, 65535, 0), this[i] = r >>> 8, this[i + 1] = r & 255, i + 2;
  }, l.prototype.writeUint32LE = l.prototype.writeUInt32LE = function(r, i, c) {
    return r = +r, i = i >>> 0, c || W(this, r, i, 4, 4294967295, 0), this[i + 3] = r >>> 24, this[i + 2] = r >>> 16, this[i + 1] = r >>> 8, this[i] = r & 255, i + 4;
  }, l.prototype.writeUint32BE = l.prototype.writeUInt32BE = function(r, i, c) {
    return r = +r, i = i >>> 0, c || W(this, r, i, 4, 4294967295, 0), this[i] = r >>> 24, this[i + 1] = r >>> 16, this[i + 2] = r >>> 8, this[i + 3] = r & 255, i + 4;
  };
  function te(s, r, i, c, p) {
    Tt(r, c, p, s, i, 7);
    let m = Number(r & BigInt(4294967295));
    s[i++] = m, m = m >> 8, s[i++] = m, m = m >> 8, s[i++] = m, m = m >> 8, s[i++] = m;
    let b = Number(r >> BigInt(32) & BigInt(4294967295));
    return s[i++] = b, b = b >> 8, s[i++] = b, b = b >> 8, s[i++] = b, b = b >> 8, s[i++] = b, i;
  }
  function We(s, r, i, c, p) {
    Tt(r, c, p, s, i, 7);
    let m = Number(r & BigInt(4294967295));
    s[i + 7] = m, m = m >> 8, s[i + 6] = m, m = m >> 8, s[i + 5] = m, m = m >> 8, s[i + 4] = m;
    let b = Number(r >> BigInt(32) & BigInt(4294967295));
    return s[i + 3] = b, b = b >> 8, s[i + 2] = b, b = b >> 8, s[i + 1] = b, b = b >> 8, s[i] = b, i + 8;
  }
  l.prototype.writeBigUInt64LE = ke(function(r, i = 0) {
    return te(this, r, i, BigInt(0), BigInt("0xffffffffffffffff"));
  }), l.prototype.writeBigUInt64BE = ke(function(r, i = 0) {
    return We(this, r, i, BigInt(0), BigInt("0xffffffffffffffff"));
  }), l.prototype.writeIntLE = function(r, i, c, p) {
    if (r = +r, i = i >>> 0, !p) {
      const Z = Math.pow(2, 8 * c - 1);
      W(this, r, i, c, Z - 1, -Z);
    }
    let m = 0, b = 1, A = 0;
    for (this[i] = r & 255; ++m < c && (b *= 256); )
      r < 0 && A === 0 && this[i + m - 1] !== 0 && (A = 1), this[i + m] = (r / b >> 0) - A & 255;
    return i + c;
  }, l.prototype.writeIntBE = function(r, i, c, p) {
    if (r = +r, i = i >>> 0, !p) {
      const Z = Math.pow(2, 8 * c - 1);
      W(this, r, i, c, Z - 1, -Z);
    }
    let m = c - 1, b = 1, A = 0;
    for (this[i + m] = r & 255; --m >= 0 && (b *= 256); )
      r < 0 && A === 0 && this[i + m + 1] !== 0 && (A = 1), this[i + m] = (r / b >> 0) - A & 255;
    return i + c;
  }, l.prototype.writeInt8 = function(r, i, c) {
    return r = +r, i = i >>> 0, c || W(this, r, i, 1, 127, -128), r < 0 && (r = 255 + r + 1), this[i] = r & 255, i + 1;
  }, l.prototype.writeInt16LE = function(r, i, c) {
    return r = +r, i = i >>> 0, c || W(this, r, i, 2, 32767, -32768), this[i] = r & 255, this[i + 1] = r >>> 8, i + 2;
  }, l.prototype.writeInt16BE = function(r, i, c) {
    return r = +r, i = i >>> 0, c || W(this, r, i, 2, 32767, -32768), this[i] = r >>> 8, this[i + 1] = r & 255, i + 2;
  }, l.prototype.writeInt32LE = function(r, i, c) {
    return r = +r, i = i >>> 0, c || W(this, r, i, 4, 2147483647, -2147483648), this[i] = r & 255, this[i + 1] = r >>> 8, this[i + 2] = r >>> 16, this[i + 3] = r >>> 24, i + 4;
  }, l.prototype.writeInt32BE = function(r, i, c) {
    return r = +r, i = i >>> 0, c || W(this, r, i, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), this[i] = r >>> 24, this[i + 1] = r >>> 16, this[i + 2] = r >>> 8, this[i + 3] = r & 255, i + 4;
  }, l.prototype.writeBigInt64LE = ke(function(r, i = 0) {
    return te(this, r, i, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), l.prototype.writeBigInt64BE = ke(function(r, i = 0) {
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
  function st(s, r, i, c, p) {
    return r = +r, i = i >>> 0, p || Je(s, r, i, 8), n.write(s, r, i, c, 52, 8), i + 8;
  }
  l.prototype.writeDoubleLE = function(r, i, c) {
    return st(this, r, i, !0, c);
  }, l.prototype.writeDoubleBE = function(r, i, c) {
    return st(this, r, i, !1, c);
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
        const b = r.charCodeAt(0);
        (p === "utf8" && b < 128 || p === "latin1") && (r = b);
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
      const b = l.isBuffer(r) ? r : l.from(r, p), A = b.length;
      if (A === 0)
        throw new TypeError('The value "' + r + '" is invalid for argument "value"');
      for (m = 0; m < c - i; ++m)
        this[m + i] = b[m % A];
    }
    return this;
  };
  const Se = {};
  function Xe(s, r, i) {
    Se[s] = class extends i {
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
  function cr(s, r, i) {
    qe(r, "offset"), (s[r] === void 0 || s[r + i] === void 0) && Ze(r, s.length - (i + 1));
  }
  function Tt(s, r, i, c, p, m) {
    if (s > i || s < r) {
      const b = typeof r == "bigint" ? "n" : "";
      let A;
      throw m > 3 ? r === 0 || r === BigInt(0) ? A = `>= 0${b} and < 2${b} ** ${(m + 1) * 8}${b}` : A = `>= -(2${b} ** ${(m + 1) * 8 - 1}${b}) and < 2 ** ${(m + 1) * 8 - 1}${b}` : A = `>= ${r}${b} and <= ${i}${b}`, new Se.ERR_OUT_OF_RANGE("value", A, s);
    }
    cr(c, p, m);
  }
  function qe(s, r) {
    if (typeof s != "number")
      throw new Se.ERR_INVALID_ARG_TYPE(r, "number", s);
  }
  function Ze(s, r, i) {
    throw Math.floor(s) !== s ? (qe(s, i), new Se.ERR_OUT_OF_RANGE(i || "offset", "an integer", s)) : r < 0 ? new Se.ERR_BUFFER_OUT_OF_BOUNDS() : new Se.ERR_OUT_OF_RANGE(
      i || "offset",
      `>= ${i ? 1 : 0} and <= ${r}`,
      s
    );
  }
  const at = /[^+/0-9A-Za-z-_]/g;
  function lt(s) {
    if (s = s.split("=")[0], s = s.trim().replace(at, ""), s.length < 2)
      return "";
    for (; s.length % 4 !== 0; )
      s = s + "=";
    return s;
  }
  function ct(s, r) {
    r = r || 1 / 0;
    let i;
    const c = s.length;
    let p = null;
    const m = [];
    for (let b = 0; b < c; ++b) {
      if (i = s.charCodeAt(b), i > 55295 && i < 57344) {
        if (!p) {
          if (i > 56319) {
            (r -= 3) > -1 && m.push(239, 191, 189);
            continue;
          } else if (b + 1 === c) {
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
  function Ut(s) {
    const r = [];
    for (let i = 0; i < s.length; ++i)
      r.push(s.charCodeAt(i) & 255);
    return r;
  }
  function ut(s, r) {
    let i, c, p;
    const m = [];
    for (let b = 0; b < s.length && !((r -= 2) < 0); ++b)
      i = s.charCodeAt(b), c = i >> 8, p = i % 256, m.push(p), m.push(c);
    return m;
  }
  function Dt(s) {
    return t.toByteArray(lt(s));
  }
  function ft(s, r, i, c) {
    let p;
    for (p = 0; p < c && !(p + i >= r.length || p >= s.length); ++p)
      r[p + i] = s[p];
    return p;
  }
  function me(s, r) {
    return s instanceof r || s != null && s.constructor != null && s.constructor.name != null && s.constructor.name === r.name;
  }
  function Ct(s) {
    return s !== s;
  }
  const ur = function() {
    const s = "0123456789abcdef", r = new Array(256);
    for (let i = 0; i < 16; ++i) {
      const c = i * 16;
      for (let p = 0; p < 16; ++p)
        r[c + p] = s[i] + s[p];
    }
    return r;
  }();
  function ke(s) {
    return typeof BigInt > "u" ? zt : s;
  }
  function zt() {
    throw new Error("BigInt not supported");
  }
})(Nn);
var Un = { exports: {} }, oe = Un.exports = {}, Be, Fe;
function Tr() {
  throw new Error("setTimeout has not been defined");
}
function Cr() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Be = setTimeout : Be = Tr;
  } catch {
    Be = Tr;
  }
  try {
    typeof clearTimeout == "function" ? Fe = clearTimeout : Fe = Cr;
  } catch {
    Fe = Cr;
  }
})();
function Dn(e) {
  if (Be === setTimeout)
    return setTimeout(e, 0);
  if ((Be === Tr || !Be) && setTimeout)
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
function ao(e) {
  if (Fe === clearTimeout)
    return clearTimeout(e);
  if ((Fe === Cr || !Fe) && clearTimeout)
    return Fe = clearTimeout, clearTimeout(e);
  try {
    return Fe(e);
  } catch {
    try {
      return Fe.call(null, e);
    } catch {
      return Fe.call(this, e);
    }
  }
}
var Ve = [], yt = !1, rt, qt = -1;
function lo() {
  !yt || !rt || (yt = !1, rt.length ? Ve = rt.concat(Ve) : qt = -1, Ve.length && zn());
}
function zn() {
  if (!yt) {
    var e = Dn(lo);
    yt = !0;
    for (var t = Ve.length; t; ) {
      for (rt = Ve, Ve = []; ++qt < t; )
        rt && rt[qt].run();
      qt = -1, t = Ve.length;
    }
    rt = null, yt = !1, ao(e);
  }
}
oe.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var n = 1; n < arguments.length; n++)
      t[n - 1] = arguments[n];
  Ve.push(new Vn(e, t)), Ve.length === 1 && !yt && Dn(zn);
};
function Vn(e, t) {
  this.fun = e, this.array = t;
}
Vn.prototype.run = function() {
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
var co = Un.exports;
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Nn, n = co, o = (f) => f && f.__esModule ? f : { default: f }, a = o(n), u = globalThis || void 0 || self;
  Object.defineProperty(e, "Buffer", { enumerable: !0, get: () => t.Buffer }), Object.defineProperty(e, "process", { enumerable: !0, get: () => a.default }), e.global = u;
})(ye);
var Sr = { exports: {} }, St = {};
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
    return St;
  fn = 1;
  var e = Nt, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(l, h, w) {
    var y, v = {}, I = null, C = null;
    w !== void 0 && (I = "" + w), h.key !== void 0 && (I = "" + h.key), h.ref !== void 0 && (C = h.ref);
    for (y in h)
      o.call(h, y) && !u.hasOwnProperty(y) && (v[y] = h[y]);
    if (l && l.defaultProps)
      for (y in h = l.defaultProps, h)
        v[y] === void 0 && (v[y] = h[y]);
    return { $$typeof: t, type: l, key: I, ref: C, props: v, _owner: a.current };
  }
  return St.Fragment = n, St.jsx = f, St.jsxs = f, St;
}
var kt = {}, dn;
function fo() {
  return dn || (dn = 1, ye.process.env.NODE_ENV !== "production" && function() {
    var e = Nt, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), l = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), B = Symbol.iterator, S = "@@iterator";
    function U(d) {
      if (d === null || typeof d != "object")
        return null;
      var x = B && d[B] || d[S];
      return typeof x == "function" ? x : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function F(d) {
      {
        for (var x = arguments.length, E = new Array(x > 1 ? x - 1 : 0), j = 1; j < x; j++)
          E[j - 1] = arguments[j];
        de("error", d, E);
      }
    }
    function de(d, x, E) {
      {
        var j = R.ReactDebugCurrentFrame, G = j.getStackAddendum();
        G !== "" && (x += "%s", E = E.concat([G]));
        var J = E.map(function(z) {
          return String(z);
        });
        J.unshift("Warning: " + x), Function.prototype.apply.call(console[d], console, J);
      }
    }
    var we = !1, ue = !1, je = !1, Re = !1, Ne = !1, Ce;
    Ce = Symbol.for("react.module.reference");
    function Me(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === o || d === u || Ne || d === a || d === w || d === y || Re || d === C || we || ue || je || typeof d == "object" && d !== null && (d.$$typeof === I || d.$$typeof === v || d.$$typeof === f || d.$$typeof === l || d.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === Ce || d.getModuleId !== void 0));
    }
    function Ue(d, x, E) {
      var j = d.displayName;
      if (j)
        return j;
      var G = x.displayName || x.name || "";
      return G !== "" ? E + "(" + G + ")" : E;
    }
    function T(d) {
      return d.displayName || "Context";
    }
    function P(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && F("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
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
        case w:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case l:
            var x = d;
            return T(x) + ".Consumer";
          case f:
            var E = d;
            return T(E._context) + ".Provider";
          case h:
            return Ue(d, d.render, "ForwardRef");
          case v:
            var j = d.displayName || null;
            return j !== null ? j : P(d.type) || "Memo";
          case I: {
            var G = d, J = G._payload, z = G._init;
            try {
              return P(z(J));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, O = 0, L, D, $, q, ee, V, W;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function We() {
      {
        if (O === 0) {
          L = console.log, D = console.info, $ = console.warn, q = console.error, ee = console.group, V = console.groupCollapsed, W = console.groupEnd;
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
    function Je() {
      {
        if (O--, O === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, d, {
              value: L
            }),
            info: k({}, d, {
              value: D
            }),
            warn: k({}, d, {
              value: $
            }),
            error: k({}, d, {
              value: q
            }),
            group: k({}, d, {
              value: ee
            }),
            groupCollapsed: k({}, d, {
              value: V
            }),
            groupEnd: k({}, d, {
              value: W
            })
          });
        }
        O < 0 && F("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ge = R.ReactCurrentDispatcher, st;
    function Se(d, x, E) {
      {
        if (st === void 0)
          try {
            throw Error();
          } catch (G) {
            var j = G.stack.trim().match(/\n( *(at )?)/);
            st = j && j[1] || "";
          }
        return `
` + st + d;
      }
    }
    var Xe = !1, Ke;
    {
      var cr = typeof WeakMap == "function" ? WeakMap : Map;
      Ke = new cr();
    }
    function Tt(d, x) {
      if (!d || Xe)
        return "";
      {
        var E = Ke.get(d);
        if (E !== void 0)
          return E;
      }
      var j;
      Xe = !0;
      var G = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var J;
      J = Ge.current, Ge.current = null, We();
      try {
        if (x) {
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
            } catch (De) {
              j = De;
            }
            Reflect.construct(d, [], z);
          } else {
            try {
              z.call();
            } catch (De) {
              j = De;
            }
            d.call(z.prototype);
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
                    return d.displayName && ve.includes("<anonymous>") && (ve = ve.replace("<anonymous>", d.displayName)), typeof d == "function" && Ke.set(d, ve), ve;
                  }
                while (ne >= 1 && se >= 0);
              break;
            }
        }
      } finally {
        Xe = !1, Ge.current = J, Je(), Error.prepareStackTrace = G;
      }
      var pt = d ? d.displayName || d.name : "", un = pt ? Se(pt) : "";
      return typeof d == "function" && Ke.set(d, un), un;
    }
    function qe(d, x, E) {
      return Tt(d, !1);
    }
    function Ze(d) {
      var x = d.prototype;
      return !!(x && x.isReactComponent);
    }
    function at(d, x, E) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return Tt(d, Ze(d));
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
          case v:
            return at(d.type, x, E);
          case I: {
            var j = d, G = j._payload, J = j._init;
            try {
              return at(J(G), x, E);
            } catch {
            }
          }
        }
      return "";
    }
    var lt = Object.prototype.hasOwnProperty, ct = {}, Ut = R.ReactDebugCurrentFrame;
    function ut(d) {
      if (d) {
        var x = d._owner, E = at(d.type, d._source, x ? x.type : null);
        Ut.setExtraStackFrame(E);
      } else
        Ut.setExtraStackFrame(null);
    }
    function Dt(d, x, E, j, G) {
      {
        var J = Function.call.bind(lt);
        for (var z in d)
          if (J(d, z)) {
            var N = void 0;
            try {
              if (typeof d[z] != "function") {
                var pe = Error((j || "React class") + ": " + E + " type `" + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw pe.name = "Invariant Violation", pe;
              }
              N = d[z](x, z, j, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ne) {
              N = ne;
            }
            N && !(N instanceof Error) && (ut(G), F("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", E, z, typeof N), ut(null)), N instanceof Error && !(N.message in ct) && (ct[N.message] = !0, ut(G), F("Failed %s type: %s", E, N.message), ut(null));
          }
      }
    }
    var ft = Array.isArray;
    function me(d) {
      return ft(d);
    }
    function Ct(d) {
      {
        var x = typeof Symbol == "function" && Symbol.toStringTag, E = x && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return E;
      }
    }
    function ur(d) {
      try {
        return ke(d), !1;
      } catch {
        return !0;
      }
    }
    function ke(d) {
      return "" + d;
    }
    function zt(d) {
      if (ur(d))
        return F("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ct(d)), ke(d);
    }
    var s = R.ReactCurrentOwner, r = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, i, c, p;
    p = {};
    function m(d) {
      if (lt.call(d, "ref")) {
        var x = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function b(d) {
      if (lt.call(d, "key")) {
        var x = Object.getOwnPropertyDescriptor(d, "key").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function A(d, x) {
      if (typeof d.ref == "string" && s.current && x && s.current.stateNode !== x) {
        var E = P(s.current.type);
        p[E] || (F('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(s.current.type), d.ref), p[E] = !0);
      }
    }
    function Z(d, x) {
      {
        var E = function() {
          i || (i = !0, F("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        E.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function X(d, x) {
      {
        var E = function() {
          c || (c = !0, F("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        E.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var Q = function(d, x, E, j, G, J, z) {
      var N = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: d,
        key: x,
        ref: E,
        props: z,
        // Record the component responsible for creating this element.
        _owner: J
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
        value: G
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    };
    function H(d, x, E, j, G) {
      {
        var J, z = {}, N = null, pe = null;
        E !== void 0 && (zt(E), N = "" + E), b(x) && (zt(x.key), N = "" + x.key), m(x) && (pe = x.ref, A(x, G));
        for (J in x)
          lt.call(x, J) && !r.hasOwnProperty(J) && (z[J] = x[J]);
        if (d && d.defaultProps) {
          var ne = d.defaultProps;
          for (J in ne)
            z[J] === void 0 && (z[J] = ne[J]);
        }
        if (N || pe) {
          var se = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          N && Z(z, se), pe && X(z, se);
        }
        return Q(d, N, pe, G, j, s.current, z);
      }
    }
    var fr = R.ReactCurrentOwner, nn = R.ReactDebugCurrentFrame;
    function dt(d) {
      if (d) {
        var x = d._owner, E = at(d.type, d._source, x ? x.type : null);
        nn.setExtraStackFrame(E);
      } else
        nn.setExtraStackFrame(null);
    }
    var dr;
    dr = !1;
    function pr(d) {
      return typeof d == "object" && d !== null && d.$$typeof === t;
    }
    function on() {
      {
        if (fr.current) {
          var d = P(fr.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function Fi(d) {
      {
        if (d !== void 0) {
          var x = d.fileName.replace(/^.*[\\\/]/, ""), E = d.lineNumber;
          return `

Check your code at ` + x + ":" + E + ".";
        }
        return "";
      }
    }
    var sn = {};
    function Ai(d) {
      {
        var x = on();
        if (!x) {
          var E = typeof d == "string" ? d : d.displayName || d.name;
          E && (x = `

Check the top-level render call using <` + E + ">.");
        }
        return x;
      }
    }
    function an(d, x) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var E = Ai(x);
        if (sn[E])
          return;
        sn[E] = !0;
        var j = "";
        d && d._owner && d._owner !== fr.current && (j = " It was passed a child from " + P(d._owner.type) + "."), dt(d), F('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, j), dt(null);
      }
    }
    function ln(d, x) {
      {
        if (typeof d != "object")
          return;
        if (me(d))
          for (var E = 0; E < d.length; E++) {
            var j = d[E];
            pr(j) && an(j, x);
          }
        else if (pr(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var G = U(d);
          if (typeof G == "function" && G !== d.entries)
            for (var J = G.call(d), z; !(z = J.next()).done; )
              pr(z.value) && an(z.value, x);
        }
      }
    }
    function Oi(d) {
      {
        var x = d.type;
        if (x == null || typeof x == "string")
          return;
        var E;
        if (typeof x == "function")
          E = x.propTypes;
        else if (typeof x == "object" && (x.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        x.$$typeof === v))
          E = x.propTypes;
        else
          return;
        if (E) {
          var j = P(x);
          Dt(E, d.props, "prop", j, d);
        } else if (x.PropTypes !== void 0 && !dr) {
          dr = !0;
          var G = P(x);
          F("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", G || "Unknown");
        }
        typeof x.getDefaultProps == "function" && !x.getDefaultProps.isReactClassApproved && F("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Li(d) {
      {
        for (var x = Object.keys(d.props), E = 0; E < x.length; E++) {
          var j = x[E];
          if (j !== "children" && j !== "key") {
            dt(d), F("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), dt(null);
            break;
          }
        }
        d.ref !== null && (dt(d), F("Invalid attribute `ref` supplied to `React.Fragment`."), dt(null));
      }
    }
    function cn(d, x, E, j, G, J) {
      {
        var z = Me(d);
        if (!z) {
          var N = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (N += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var pe = Fi(G);
          pe ? N += pe : N += on();
          var ne;
          d === null ? ne = "null" : me(d) ? ne = "array" : d !== void 0 && d.$$typeof === t ? (ne = "<" + (P(d.type) || "Unknown") + " />", N = " Did you accidentally export a JSX literal instead of a component?") : ne = typeof d, F("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ne, N);
        }
        var se = H(d, x, E, G, J);
        if (se == null)
          return se;
        if (z) {
          var ve = x.children;
          if (ve !== void 0)
            if (j)
              if (me(ve)) {
                for (var pt = 0; pt < ve.length; pt++)
                  ln(ve[pt], d);
                Object.freeze && Object.freeze(ve);
              } else
                F("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ln(ve, d);
        }
        return d === o ? Li(se) : Oi(se), se;
      }
    }
    function Ni(d, x, E) {
      return cn(d, x, E, !0);
    }
    function Mi(d, x, E) {
      return cn(d, x, E, !1);
    }
    var Ui = Mi, Di = Ni;
    kt.Fragment = o, kt.jsx = Ui, kt.jsxs = Di;
  }()), kt;
}
ye.process.env.NODE_ENV === "production" ? Sr.exports = uo() : Sr.exports = fo();
var g = Sr.exports;
var Ft = {}, Pt = $i;
if (ye.process.env.NODE_ENV === "production")
  Ft.createRoot = Pt.createRoot, Ft.hydrateRoot = Pt.hydrateRoot;
else {
  var Vt = Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Ft.createRoot = function(e, t) {
    Vt.usingClientEntryPoint = !0;
    try {
      return Pt.createRoot(e, t);
    } finally {
      Vt.usingClientEntryPoint = !1;
    }
  }, Ft.hydrateRoot = function(e, t, n) {
    Vt.usingClientEntryPoint = !0;
    try {
      return Pt.hydrateRoot(e, t, n);
    } finally {
      Vt.usingClientEntryPoint = !1;
    }
  };
}
function Ht(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ht = function(n) {
    return typeof n;
  } : Ht = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Ht(e);
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
  return t && (Ht(t) === "object" || typeof t == "function") ? t : Yt(e);
}
function kr(e) {
  return kr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, kr(e);
}
function Yt(e) {
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
function Jt(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var $n = /* @__PURE__ */ function(e) {
  wo(t, e);
  function t() {
    var n, o;
    po(this, t);
    for (var a = arguments.length, u = new Array(a), f = 0; f < a; f++)
      u[f] = arguments[f];
    return o = mo(this, (n = kr(t)).call.apply(n, [this].concat(u))), Jt(Yt(o), "state", {
      bootstrapped: !1
    }), Jt(Yt(o), "_unsubscribe", void 0), Jt(Yt(o), "handlePersistorState", function() {
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
      return ye.process.env.NODE_ENV !== "production" && typeof this.props.children == "function" && this.props.loading && console.error("redux-persist: PersistGate expects either a function child or loading prop, but not both. The loading prop will be ignored."), typeof this.props.children == "function" ? this.props.children(this.state.bootstrapped) : this.state.bootstrapped ? this.props.children : this.props.loading;
    }
  }]), t;
}(zi);
Jt($n, "defaultProps", {
  children: null,
  loading: null
});
const go = {
  cta: !0,
  close: !0,
  payment: !0,
  response: !0,
  email: !0
}, yo = {
  default: go
};
var ce = /* @__PURE__ */ ((e) => (e.text = "text", e.buttons = "buttons", e.payment = "payment", e.video = "video", e.image = "image", e.email = "email", e))(ce || {}), Vr = /* @__PURE__ */ ((e) => (e.horizontal = "horizontal", e.vertical = "vertical", e))(Vr || {}), tt = /* @__PURE__ */ ((e) => (e.chat = "utm_chat", e))(tt || {}), Te = /* @__PURE__ */ ((e) => (e.addToCart = "AddToCart", e.contact = "Contact", e.initiateCheckout = "InitiateCheckout", e.pageView = "PageView", e.viewContent = "ViewContent", e.purchase = "Purchase", e.subscribe = "Subscribe", e.recurringSubscriptionPayment = "RecurringSubscriptionPayment", e.cancelSubscription = "CancelSubscription", e.purchaseFailed = "PurchaseFailed", e.subscribeFailed = "SubscribeFailed", e.recurringSubscriptionPaymentFailed = "RecurringSubscriptionPaymentFailed", e.customerCreated = "CustomerCreated", e.subscriptionChargeback = "SubscriptionChargeback", e.subscriptionRefund = "SubscriptionRefund", e.transactionChargeback = "TransactionChargeback", e.transactionRefund = "TransactionRefund", e.firstMessage = "FirstMessage", e.linkProvided = "LinkProvided", e.linkClicked = "LinkClicked", e.emailField = "EmailField", e.emailEntered = "EmailEntered", e.emailWrong = "EmailWrong", e.emailExist = "EmailExist", e.priceSeen = "PriceSeen", e.buttonClick = "ButtonClick", e.closeClicked = "CloseClicked", e))(Te || {}), Wn = /* @__PURE__ */ ((e) => (e.email = "email_intent", e.payment = "payment_intent", e.emailError = "email_validation_error", e.emailSuccess = "email_validation_success", e.destroy = "payment_intent_destroy", e))(Wn || {}), le = /* @__PURE__ */ ((e) => (e.user = "user", e.assistant = "assistant", e))(le || {}), Ee = /* @__PURE__ */ ((e) => (e.chat = "chat", e.chatHistory = "chat-history", e.connect = "connect", e.error = "error", e.disconnect = "disconnect", e.streamStart = "stream-start", e.streamData = "stream-data", e.streamEnd = "stream-end", e.streamError = "stream-error", e))(Ee || {}), Gn = /* @__PURE__ */ ((e) => (e.light = "light", e.dark = "dark", e))(Gn || {});
const gt = (e) => new URLSearchParams(window.location.search).get(e) || "", bo = {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric"
};
function xo(e, t = bo) {
  return `${new Date(e).toLocaleDateString([], t)}`.toUpperCase();
}
function he() {
  const e = new Array(36);
  for (let t = 0; t < 36; t++)
    e[t] = Math.floor(Math.random() * 16);
  return e[14] = 4, e[19] = e[19] &= -5, e[19] = e[19] |= 8, e[8] = e[13] = e[18] = e[23] = "-", e.map((t) => t.toString(16)).join("");
}
const mt = {
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
}, wt = {
  outgoing: {
    term: "",
    user_id: "",
    role: le.user,
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
}, vo = {
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
}, qn = ir({
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
  setConfig: Hn,
  resetConfig: hl,
  setTheme: ml,
  resetTheme: wl,
  setDevToolsStatus: gl,
  resetDevToolsStatus: yl,
  togglePluginMode: bl,
  setTranslations: xl
} = qn.actions, Eo = qn.reducer;
function fe(e) {
  for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    n[o - 1] = arguments[o];
  if (ye.process.env.NODE_ENV !== "production") {
    var a = jo[e], u = a ? typeof a == "function" ? a.apply(null, n) : a : "unknown error nr: " + e;
    throw Error("[Immer] " + u);
  }
  throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map(function(f) {
    return "'" + f + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function vt(e) {
  return !!e && !!e[be];
}
function it(e) {
  var t;
  return !!e && (function(n) {
    if (!n || typeof n != "object")
      return !1;
    var o = Object.getPrototypeOf(n);
    if (o === null)
      return !0;
    var a = Object.hasOwnProperty.call(o, "constructor") && o.constructor;
    return a === Object || typeof a == "function" && Function.toString.call(a) === Ro;
  }(e) || Array.isArray(e) || !!e[vn] || !!(!((t = e.constructor) === null || t === void 0) && t[vn]) || $r(e) || Wr(e));
}
function Ot(e, t, n) {
  n === void 0 && (n = !1), It(e) === 0 ? (n ? Object.keys : Jr)(e).forEach(function(o) {
    n && typeof o == "symbol" || t(o, e[o], e);
  }) : e.forEach(function(o, a) {
    return t(a, o, e);
  });
}
function It(e) {
  var t = e[be];
  return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : $r(e) ? 2 : Wr(e) ? 3 : 0;
}
function _r(e, t) {
  return It(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Io(e, t) {
  return It(e) === 2 ? e.get(t) : e[t];
}
function Yn(e, t, n) {
  var o = It(e);
  o === 2 ? e.set(t, n) : o === 3 ? e.add(n) : e[t] = n;
}
function To(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function $r(e) {
  return Po && e instanceof Map;
}
function Wr(e) {
  return _o && e instanceof Set;
}
function Qe(e) {
  return e.o || e.t;
}
function Gr(e) {
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  var t = Bo(e);
  delete t[be];
  for (var n = Jr(t), o = 0; o < n.length; o++) {
    var a = n[o], u = t[a];
    u.writable === !1 && (u.writable = !0, u.configurable = !0), (u.get || u.set) && (t[a] = { configurable: !0, writable: !0, enumerable: u.enumerable, value: e[a] });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function qr(e, t) {
  return t === void 0 && (t = !1), Hr(e) || vt(e) || !it(e) || (It(e) > 1 && (e.set = e.add = e.clear = e.delete = Co), Object.freeze(e), t && Ot(e, function(n, o) {
    return qr(o, !0);
  }, !0)), e;
}
function Co() {
  fe(2);
}
function Hr(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function Le(e) {
  var t = Fo[e];
  return t || fe(18, e), t;
}
function hn() {
  return ye.process.env.NODE_ENV === "production" || Et || fe(0), Et;
}
function mr(e, t) {
  t && (Le("Patches"), e.u = [], e.s = [], e.v = t);
}
function Zt(e) {
  jr(e), e.p.forEach(So), e.p = null;
}
function jr(e) {
  e === Et && (Et = e.l);
}
function mn(e) {
  return Et = { p: [], l: Et, h: e, m: !0, _: 0 };
}
function So(e) {
  var t = e[be];
  t.i === 0 || t.i === 1 ? t.j() : t.g = !0;
}
function wr(e, t) {
  t._ = t.p.length;
  var n = t.p[0], o = e !== void 0 && e !== n;
  return t.h.O || Le("ES5").S(t, e, o), o ? (n[be].P && (Zt(t), fe(4)), it(e) && (e = Qt(t, e), t.l || er(t, e)), t.u && Le("Patches").M(n[be].t, e, t.u, t.s)) : e = Qt(t, n, []), Zt(t), t.u && t.v(t.u, t.s), e !== Jn ? e : void 0;
}
function Qt(e, t, n) {
  if (Hr(t))
    return t;
  var o = t[be];
  if (!o)
    return Ot(t, function(l, h) {
      return wn(e, o, t, l, h, n);
    }, !0), t;
  if (o.A !== e)
    return t;
  if (!o.P)
    return er(e, o.t, !0), o.t;
  if (!o.I) {
    o.I = !0, o.A._--;
    var a = o.i === 4 || o.i === 5 ? o.o = Gr(o.k) : o.o, u = a, f = !1;
    o.i === 3 && (u = new Set(a), a.clear(), f = !0), Ot(u, function(l, h) {
      return wn(e, o, a, l, h, n, f);
    }), er(e, a, !1), n && e.u && Le("Patches").N(o, n, e.u, e.s);
  }
  return o.o;
}
function wn(e, t, n, o, a, u, f) {
  if (ye.process.env.NODE_ENV !== "production" && a === n && fe(5), vt(a)) {
    var l = Qt(e, a, u && t && t.i !== 3 && !_r(t.R, o) ? u.concat(o) : void 0);
    if (Yn(n, o, l), !vt(l))
      return;
    e.m = !1;
  } else
    f && n.add(a);
  if (it(a) && !Hr(a)) {
    if (!e.h.D && e._ < 1)
      return;
    Qt(e, a), t && t.A.l || er(e, a);
  }
}
function er(e, t, n) {
  n === void 0 && (n = !1), !e.l && e.h.D && e.m && qr(t, n);
}
function gr(e, t) {
  var n = e[be];
  return (n ? Qe(n) : e)[t];
}
function gn(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var o = Object.getOwnPropertyDescriptor(n, t);
      if (o)
        return o;
      n = Object.getPrototypeOf(n);
    }
}
function Rr(e) {
  e.P || (e.P = !0, e.l && Rr(e.l));
}
function yr(e) {
  e.o || (e.o = Gr(e.t));
}
function Br(e, t, n) {
  var o = $r(t) ? Le("MapSet").F(t, n) : Wr(t) ? Le("MapSet").T(t, n) : e.O ? function(a, u) {
    var f = Array.isArray(a), l = { i: f ? 1 : 0, A: u ? u.A : hn(), P: !1, I: !1, R: {}, l: u, t: a, k: null, o: null, j: null, C: !1 }, h = l, w = Fr;
    f && (h = [l], w = At);
    var y = Proxy.revocable(h, w), v = y.revoke, I = y.proxy;
    return l.k = I, l.j = v, I;
  }(t, n) : Le("ES5").J(t, n);
  return (n ? n.A : hn()).p.push(o), o;
}
function ko(e) {
  return vt(e) || fe(22, e), function t(n) {
    if (!it(n))
      return n;
    var o, a = n[be], u = It(n);
    if (a) {
      if (!a.P && (a.i < 4 || !Le("ES5").K(a)))
        return a.t;
      a.I = !0, o = yn(n, u), a.I = !1;
    } else
      o = yn(n, u);
    return Ot(o, function(f, l) {
      a && Io(a.t, f) === l || Yn(o, f, t(l));
    }), u === 3 ? new Set(o) : o;
  }(e);
}
function yn(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return Gr(e);
}
var bn, Et, Yr = typeof Symbol < "u" && typeof Symbol("x") == "symbol", Po = typeof Map < "u", _o = typeof Set < "u", xn = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", Jn = Yr ? Symbol.for("immer-nothing") : ((bn = {})["immer-nothing"] = !0, bn), vn = Yr ? Symbol.for("immer-draftable") : "__$immer_draftable", be = Yr ? Symbol.for("immer-state") : "__$immer_state", jo = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(e) {
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
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, Ro = "" + Object.prototype.constructor, Jr = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Object.getOwnPropertyNames, Bo = Object.getOwnPropertyDescriptors || function(e) {
  var t = {};
  return Jr(e).forEach(function(n) {
    t[n] = Object.getOwnPropertyDescriptor(e, n);
  }), t;
}, Fo = {}, Fr = { get: function(e, t) {
  if (t === be)
    return e;
  var n = Qe(e);
  if (!_r(n, t))
    return function(a, u, f) {
      var l, h = gn(u, f);
      return h ? "value" in h ? h.value : (l = h.get) === null || l === void 0 ? void 0 : l.call(a.k) : void 0;
    }(e, n, t);
  var o = n[t];
  return e.I || !it(o) ? o : o === gr(e.t, t) ? (yr(e), e.o[t] = Br(e.A.h, o, e)) : o;
}, has: function(e, t) {
  return t in Qe(e);
}, ownKeys: function(e) {
  return Reflect.ownKeys(Qe(e));
}, set: function(e, t, n) {
  var o = gn(Qe(e), t);
  if (o != null && o.set)
    return o.set.call(e.k, n), !0;
  if (!e.P) {
    var a = gr(Qe(e), t), u = a == null ? void 0 : a[be];
    if (u && u.t === n)
      return e.o[t] = n, e.R[t] = !1, !0;
    if (To(n, a) && (n !== void 0 || _r(e.t, t)))
      return !0;
    yr(e), Rr(e);
  }
  return e.o[t] === n && (n !== void 0 || t in e.o) || Number.isNaN(n) && Number.isNaN(e.o[t]) || (e.o[t] = n, e.R[t] = !0), !0;
}, deleteProperty: function(e, t) {
  return gr(e.t, t) !== void 0 || t in e.t ? (e.R[t] = !1, yr(e), Rr(e)) : delete e.R[t], e.o && delete e.o[t], !0;
}, getOwnPropertyDescriptor: function(e, t) {
  var n = Qe(e), o = Reflect.getOwnPropertyDescriptor(n, t);
  return o && { writable: !0, configurable: e.i !== 1 || t !== "length", enumerable: o.enumerable, value: n[t] };
}, defineProperty: function() {
  fe(11);
}, getPrototypeOf: function(e) {
  return Object.getPrototypeOf(e.t);
}, setPrototypeOf: function() {
  fe(12);
} }, At = {};
Ot(Fr, function(e, t) {
  At[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
}), At.deleteProperty = function(e, t) {
  return ye.process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && fe(13), At.set.call(this, e, t, void 0);
}, At.set = function(e, t, n) {
  return ye.process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && fe(14), Fr.set.call(this, e[0], t, n, e[0]);
};
var Ao = function() {
  function e(n) {
    var o = this;
    this.O = xn, this.D = !0, this.produce = function(a, u, f) {
      if (typeof a == "function" && typeof u != "function") {
        var l = u;
        u = a;
        var h = o;
        return function(S) {
          var U = this;
          S === void 0 && (S = l);
          for (var R = arguments.length, F = Array(R > 1 ? R - 1 : 0), de = 1; de < R; de++)
            F[de - 1] = arguments[de];
          return h.produce(S, function(we) {
            var ue;
            return (ue = u).call.apply(ue, [U, we].concat(F));
          });
        };
      }
      var w;
      if (typeof u != "function" && fe(6), f !== void 0 && typeof f != "function" && fe(7), it(a)) {
        var y = mn(o), v = Br(o, a, void 0), I = !0;
        try {
          w = u(v), I = !1;
        } finally {
          I ? Zt(y) : jr(y);
        }
        return typeof Promise < "u" && w instanceof Promise ? w.then(function(S) {
          return mr(y, f), wr(S, y);
        }, function(S) {
          throw Zt(y), S;
        }) : (mr(y, f), wr(w, y));
      }
      if (!a || typeof a != "object") {
        if ((w = u(a)) === void 0 && (w = a), w === Jn && (w = void 0), o.D && qr(w, !0), f) {
          var C = [], B = [];
          Le("Patches").M(a, w, C, B), f(C, B);
        }
        return w;
      }
      fe(21, a);
    }, this.produceWithPatches = function(a, u) {
      if (typeof a == "function")
        return function(w) {
          for (var y = arguments.length, v = Array(y > 1 ? y - 1 : 0), I = 1; I < y; I++)
            v[I - 1] = arguments[I];
          return o.produceWithPatches(w, function(C) {
            return a.apply(void 0, [C].concat(v));
          });
        };
      var f, l, h = o.produce(a, u, function(w, y) {
        f = w, l = y;
      });
      return typeof Promise < "u" && h instanceof Promise ? h.then(function(w) {
        return [w, f, l];
      }) : [h, f, l];
    }, typeof (n == null ? void 0 : n.useProxies) == "boolean" && this.setUseProxies(n.useProxies), typeof (n == null ? void 0 : n.autoFreeze) == "boolean" && this.setAutoFreeze(n.autoFreeze);
  }
  var t = e.prototype;
  return t.createDraft = function(n) {
    it(n) || fe(8), vt(n) && (n = ko(n));
    var o = mn(this), a = Br(this, n, void 0);
    return a[be].C = !0, jr(o), a;
  }, t.finishDraft = function(n, o) {
    var a = n && n[be];
    ye.process.env.NODE_ENV !== "production" && (a && a.C || fe(9), a.I && fe(10));
    var u = a.A;
    return mr(u, o), wr(void 0, u);
  }, t.setAutoFreeze = function(n) {
    this.D = n;
  }, t.setUseProxies = function(n) {
    n && !xn && fe(20), this.O = n;
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
    var f = Le("Patches").$;
    return vt(n) ? f(n, o) : this.produce(n, function(l) {
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
const et = Oo, Xn = ir({
  name: "intentions",
  initialState: vo,
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
      return et(e, (n) => {
        n.response.isFormVisible = !t.some(
          (o) => [ce.buttons, ce.payment, ce.email].includes(
            o.type
          )
        ), n.email.isFormVisible = t.some(
          (o) => ce.email in o && o.type === ce.email
        ), n.payment.isButtonVisible = t.some(
          (o) => ce.payment in o && o.type === ce.payment
        );
      });
    },
    setResponseLoadingStatus(e, { payload: t }) {
      e.response.isLoading = t;
    }
  }
}), Kn = (e) => e.intentions.email, Lo = (e) => e.intentions.payment, No = (e) => e.intentions.link, Zn = (e) => e.intentions.response, {
  setEmail: Mo,
  setEmailSuccess: Uo,
  setIsPaymentSuccessful: Do,
  setPaymentFormVisibility: zo,
  setEmailError: En,
  setIsEmailLoading: Ar,
  setIsEmailFormVisible: Vo,
  setIsPaymentButtonVisible: $o,
  setLink: Xr,
  setResponse: vl,
  setResponseFormVisibility: br,
  setResponseLoadingStatus: El,
  setPaymentIntentError: Wo
} = Xn.actions, Go = Xn.reducer, Qn = ir({
  name: "meta",
  initialState: mt,
  reducers: {
    setMeta(e, { payload: t }) {
      e.cid = t.cid, e.eid = t.eid, e.systemType = t.systemType, e.pd = { ...e.pd, ...t.pd }, e.marketing = { ...e.marketing, ...t.marketing };
    },
    resetMeta(e) {
      e.pd = mt.pd, e.cid = mt.cid, e.eid = mt.eid, e.systemType = mt.systemType, e.marketing = mt.marketing;
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
}), Mt = (e) => e.meta, { setMeta: qo, resetMeta: Il, setMarketing: Ho, setPd: Yo, setRegion: Jo } = Qn.actions, Xo = Qn.reducer, Ye = Gi, _ = Wi, ei = (e) => yo[e], Ko = () => {
  const [e, t] = xt([0, 0]);
  return Vi(() => {
    function n() {
      t([window.innerWidth, window.innerHeight]);
    }
    return window.addEventListener("resize", n), n(), () => window.removeEventListener("resize", n);
  }, []), e;
}, Zo = () => {
  const { themeId: e, closeVisible: t, purpose: n } = _(ie), { cid: o, systemType: a, marketing: u } = _(Mt), f = ei(n);
  return {
    theme: e,
    closeVisible: t && f.close,
    cid: o,
    systemType: a,
    marketing: u
  };
}, Qo = () => {
  const { isFormVisible: e } = _(Zn), { cid: t, systemType: n, marketing: o } = _(Mt), { translations: a, purpose: u } = _(ie), { isVisible: f, text: l, href: h } = _(No), { isStreaming: w, error: y, isLoading: v } = _((we) => we.chat), { isFormVisible: I, current: C, error: B } = _(Kn), {
    isButtonVisible: S,
    isFormVisible: U,
    error: R
  } = _(Lo), F = ei(u);
  return {
    cid: t,
    ctaHref: h,
    ctaText: l,
    current: C,
    emailError: B,
    error: B || R || y,
    isCtaVisible: f && F.cta,
    isEmailFormVisible: I && F.email,
    isLoading: v,
    isPaymentButtonVisible: S && F.payment,
    isPaymentFormVisible: U && F.payment,
    isResponseFormVisible: e && F.response,
    isStreaming: w,
    marketing: o,
    paymentIntentError: R,
    streamError: y,
    systemType: n,
    translations: a
  };
};
var In = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ge = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, es = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function ti(e, t) {
  e.forEach(function(n) {
    Array.isArray(n) ? ti(n, t) : t.push(n);
  });
}
function ri(e) {
  let t = [];
  return ti(e, t), t;
}
var ni = (...e) => ri(e).filter(Boolean), ii = (e, t) => {
  let n = {}, o = Object.keys(e), a = Object.keys(t);
  for (let u of o)
    if (a.includes(u)) {
      let f = e[u], l = t[u];
      typeof f == "object" && typeof l == "object" ? n[u] = ii(f, l) : Array.isArray(f) || Array.isArray(l) ? n[u] = ni(l, f) : n[u] = l + " " + f;
    } else
      n[u] = e[u];
  for (let u of a)
    o.includes(u) || (n[u] = t[u]);
  return n;
}, Tn = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
function ts() {
  for (var e = 0, t, n, o = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = oi(t)) && (o && (o += " "), o += n);
  return o;
}
function oi(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", o = 0; o < e.length; o++)
    e[o] && (t = oi(e[o])) && (n && (n += " "), n += t);
  return n;
}
var Kr = "-";
function rs(e) {
  var t = is(e), n = e.conflictingClassGroups, o = e.conflictingClassGroupModifiers, a = o === void 0 ? {} : o;
  function u(l) {
    var h = l.split(Kr);
    return h[0] === "" && h.length !== 1 && h.shift(), si(h, t) || ns(l);
  }
  function f(l, h) {
    var w = n[l] || [];
    return h && a[l] ? [].concat(w, a[l]) : w;
  }
  return {
    getClassGroupId: u,
    getConflictingClassGroupIds: f
  };
}
function si(e, t) {
  var f;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], o = t.nextPart.get(n), a = o ? si(e.slice(1), o) : void 0;
  if (a)
    return a;
  if (t.validators.length !== 0) {
    var u = e.join(Kr);
    return (f = t.validators.find(function(l) {
      var h = l.validator;
      return h(u);
    })) == null ? void 0 : f.classGroupId;
  }
}
var Cn = /^\[(.+)\]$/;
function ns(e) {
  if (Cn.test(e)) {
    var t = Cn.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function is(e) {
  var t = e.theme, n = e.prefix, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, a = ss(Object.entries(e.classGroups), n);
  return a.forEach(function(u) {
    var f = u[0], l = u[1];
    Or(l, o, f, t);
  }), o;
}
function Or(e, t, n, o) {
  e.forEach(function(a) {
    if (typeof a == "string") {
      var u = a === "" ? t : Sn(t, a);
      u.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (os(a)) {
        Or(a(o), t, n, o);
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
      Or(h, Sn(t, l), n, o);
    });
  });
}
function Sn(e, t) {
  var n = e;
  return t.split(Kr).forEach(function(o) {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}
function os(e) {
  return e.isThemeGetter;
}
function ss(e, t) {
  return t ? e.map(function(n) {
    var o = n[0], a = n[1], u = a.map(function(f) {
      return typeof f == "string" ? t + f : typeof f == "object" ? Object.fromEntries(Object.entries(f).map(function(l) {
        var h = l[0], w = l[1];
        return [t + h, w];
      })) : f;
    });
    return [o, u];
  }) : e;
}
function as(e) {
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
var ai = "!";
function ls(e) {
  var t = e.separator || ":", n = t.length === 1, o = t[0], a = t.length;
  return function(f) {
    for (var l = [], h = 0, w = 0, y, v = 0; v < f.length; v++) {
      var I = f[v];
      if (h === 0) {
        if (I === o && (n || f.slice(v, v + a) === t)) {
          l.push(f.slice(w, v)), w = v + a;
          continue;
        }
        if (I === "/") {
          y = v;
          continue;
        }
      }
      I === "[" ? h++ : I === "]" && h--;
    }
    var C = l.length === 0 ? f : f.substring(w), B = C.startsWith(ai), S = B ? C.substring(1) : C, U = y && y > w ? y - w : void 0;
    return {
      modifiers: l,
      hasImportantModifier: B,
      baseClassName: S,
      maybePostfixModifierPosition: U
    };
  };
}
function cs(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(o) {
    var a = o[0] === "[";
    a ? (t.push.apply(t, n.sort().concat([o])), n = []) : n.push(o);
  }), t.push.apply(t, n.sort()), t;
}
function us(e) {
  return {
    cache: as(e.cacheSize),
    splitModifiers: ls(e),
    ...rs(e)
  };
}
var fs = /\s+/;
function ds(e, t) {
  var n = t.splitModifiers, o = t.getClassGroupId, a = t.getConflictingClassGroupIds, u = /* @__PURE__ */ new Set();
  return e.trim().split(fs).map(function(f) {
    var l = n(f), h = l.modifiers, w = l.hasImportantModifier, y = l.baseClassName, v = l.maybePostfixModifierPosition, I = o(v ? y.substring(0, v) : y), C = !!v;
    if (!I) {
      if (!v)
        return {
          isTailwindClass: !1,
          originalClassName: f
        };
      if (I = o(y), !I)
        return {
          isTailwindClass: !1,
          originalClassName: f
        };
      C = !1;
    }
    var B = cs(h).join(":"), S = w ? B + ai : B;
    return {
      isTailwindClass: !0,
      modifierId: S,
      classGroupId: I,
      originalClassName: f,
      hasPostfixModifier: C
    };
  }).reverse().filter(function(f) {
    if (!f.isTailwindClass)
      return !0;
    var l = f.modifierId, h = f.classGroupId, w = f.hasPostfixModifier, y = l + h;
    return u.has(y) ? !1 : (u.add(y), a(h, w).forEach(function(v) {
      return u.add(l + v);
    }), !0);
  }).reverse().map(function(f) {
    return f.originalClassName;
  }).join(" ");
}
function Lr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var o, a, u, f = l;
  function l(w) {
    var y = t[0], v = t.slice(1), I = v.reduce(function(C, B) {
      return B(C);
    }, y());
    return o = us(I), a = o.cache.get, u = o.cache.set, f = h, h(w);
  }
  function h(w) {
    var y = a(w);
    if (y)
      return y;
    var v = ds(w, o);
    return u(w, v), v;
  }
  return function() {
    return f(ts.apply(null, arguments));
  };
}
function K(e) {
  var t = function(o) {
    return o[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var li = /^\[(?:([a-z-]+):)?(.+)\]$/i, ps = /^\d+\/\d+$/, hs = /* @__PURE__ */ new Set(["px", "full", "screen"]), ms = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ws = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, gs = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Pe(e) {
  return nt(e) || hs.has(e) || ps.test(e) || Nr(e);
}
function Nr(e) {
  return ot(e, "length", Is);
}
function ys(e) {
  return ot(e, "size", ci);
}
function bs(e) {
  return ot(e, "position", ci);
}
function xs(e) {
  return ot(e, "url", Ts);
}
function $t(e) {
  return ot(e, "number", nt);
}
function nt(e) {
  return !Number.isNaN(Number(e));
}
function vs(e) {
  return e.endsWith("%") && nt(e.slice(0, -1));
}
function _t(e) {
  return kn(e) || ot(e, "number", kn);
}
function M(e) {
  return li.test(e);
}
function jt() {
  return !0;
}
function He(e) {
  return ms.test(e);
}
function Es(e) {
  return ot(e, "", Cs);
}
function ot(e, t, n) {
  var o = li.exec(e);
  return o ? o[1] ? o[1] === t : n(o[2]) : !1;
}
function Is(e) {
  return ws.test(e);
}
function ci() {
  return !1;
}
function Ts(e) {
  return e.startsWith("url(");
}
function kn(e) {
  return Number.isInteger(Number(e));
}
function Cs(e) {
  return gs.test(e);
}
function Mr() {
  var e = K("colors"), t = K("spacing"), n = K("blur"), o = K("brightness"), a = K("borderColor"), u = K("borderRadius"), f = K("borderSpacing"), l = K("borderWidth"), h = K("contrast"), w = K("grayscale"), y = K("hueRotate"), v = K("invert"), I = K("gap"), C = K("gradientColorStops"), B = K("gradientColorStopPositions"), S = K("inset"), U = K("margin"), R = K("opacity"), F = K("padding"), de = K("saturate"), we = K("scale"), ue = K("sepia"), je = K("skew"), Re = K("space"), Ne = K("translate"), Ce = function() {
    return ["auto", "contain", "none"];
  }, Me = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, Ue = function() {
    return ["auto", M, t];
  }, T = function() {
    return [M, t];
  }, P = function() {
    return ["", Pe];
  }, k = function() {
    return ["auto", nt, M];
  }, O = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, L = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, D = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, $ = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, q = function() {
    return ["", "0", M];
  }, ee = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, V = function() {
    return [nt, $t];
  }, W = function() {
    return [nt, M];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [jt],
      spacing: [Pe],
      blur: ["none", "", He, M],
      brightness: V(),
      borderColor: [e],
      borderRadius: ["none", "", "full", He, M],
      borderSpacing: T(),
      borderWidth: P(),
      contrast: V(),
      grayscale: q(),
      hueRotate: W(),
      invert: q(),
      gap: T(),
      gradientColorStops: [e],
      gradientColorStopPositions: [vs, Nr],
      inset: Ue(),
      margin: Ue(),
      opacity: V(),
      padding: T(),
      saturate: V(),
      scale: V(),
      sepia: q(),
      skew: W(),
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
        overscroll: Ce()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Ce()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Ce()
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
        inset: [S]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [S]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [S]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [S]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [S]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [S]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [S]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [S]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [S]
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
        }, M]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": k()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": k()
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
        }, M]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": k()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": k()
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
        p: [F]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [F]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [F]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [F]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [F]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [F]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [F]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [F]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [F]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [U]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [U]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [U]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [U]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [U]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [U]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [U]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [U]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [U]
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
        "min-w": ["min", "max", "fit", M, Pe]
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
        "min-h": ["min", "max", "fit", M, Pe]
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
        text: ["base", He, Nr]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", $t]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", M]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", nt, $t]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", M, Pe]
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
        "placeholder-opacity": [R]
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
        "text-opacity": [R]
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
        decoration: ["auto", "from-font", Pe]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", M, Pe]
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
        "bg-opacity": [R]
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
        bg: [].concat(O(), [bs])
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
        bg: ["auto", "cover", "contain", ys]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, xs]
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
        from: [C]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [C]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [C]
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
        "border-opacity": [R]
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
        "divide-opacity": [R]
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
        "outline-offset": [M, Pe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Pe]
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
        ring: P()
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
        "ring-opacity": [R]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Pe]
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
        shadow: ["", "inner", "none", He, Es]
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
        opacity: [R]
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
        invert: [v]
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
        "backdrop-invert": [v]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [R]
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
        duration: W()
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
        delay: W()
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
        rotate: [_t, M]
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
        stroke: [Pe, $t]
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
function Ss(e, t) {
  for (var n in t)
    ui(e, n, t[n]);
  return e;
}
var ks = Object.prototype.hasOwnProperty, Ps = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function ui(e, t, n) {
  if (!ks.call(e, t) || Ps.has(typeof n) || n === null) {
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
      ui(e[t], o, n[o]);
  }
}
function _s(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    n[o - 1] = arguments[o];
  return typeof e == "function" ? Lr.apply(void 0, [Mr, e].concat(n)) : Lr.apply(void 0, [function() {
    return Ss(Mr(), e);
  }].concat(n));
}
var js = /* @__PURE__ */ Lr(Mr), Rs = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, fi = (e) => e || void 0, Lt = (...e) => fi(ri(e).filter(Boolean).join(" ")), xr = null, tr = {}, Ur = !1, Rt = (...e) => (t) => t.twMerge ? ((!xr || Ur) && (Ur = !1, xr = ge(tr) ? js : _s(tr)), fi(xr(Lt(e)))) : Lt(e), Pn = (e, t) => {
  for (let n in t)
    e.hasOwnProperty(n) ? e[n] = Lt(e[n], t[n]) : e[n] = t[n];
  return e;
}, re = (e, t) => {
  let { extend: n = null, slots: o = {}, variants: a = {}, compoundVariants: u = [], compoundSlots: f = [], defaultVariants: l = {} } = e, h = { ...Rs, ...t }, w = n != null && n.base ? Lt(n.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, y = n != null && n.variants && !ge(n.variants) ? ii(a, n.variants) : a, v = n != null && n.defaultVariants && !ge(n.defaultVariants) ? { ...n.defaultVariants, ...l } : l;
  !ge(h.twMergeConfig) && !es(h.twMergeConfig, tr) && (Ur = !0, tr = h.twMergeConfig);
  let I = ge(n == null ? void 0 : n.slots), C = ge(o) ? {} : { base: Lt(e == null ? void 0 : e.base, I && (n == null ? void 0 : n.base)), ...o }, B = I ? C : Pn({ ...n == null ? void 0 : n.slots }, ge(C) ? { base: e == null ? void 0 : e.base } : C), S = (R) => {
    if (ge(y) && ge(o) && I)
      return Rt(w, R == null ? void 0 : R.class, R == null ? void 0 : R.className)(h);
    if (u && !Array.isArray(u))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof u}`);
    if (f && !Array.isArray(f))
      throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof f}`);
    let F = (T, P, k = [], O) => {
      let L = k;
      if (typeof P == "string")
        L = L.concat(Tn(P).split(" ").map((D) => `${T}:${D}`));
      else if (Array.isArray(P))
        L = L.concat(P.reduce((D, $) => D.concat(`${T}:${$}`), []));
      else if (typeof P == "object" && typeof O == "string") {
        for (let D in P)
          if (P.hasOwnProperty(D) && D === O) {
            let $ = P[D];
            if ($ && typeof $ == "string") {
              let q = Tn($);
              L[O] ? L[O] = L[O].concat(q.split(" ").map((ee) => `${T}:${ee}`)) : L[O] = q.split(" ").map((ee) => `${T}:${ee}`);
            } else
              Array.isArray($) && $.length > 0 && (L[O] = $.reduce((q, ee) => q.concat(`${T}:${ee}`), []));
          }
      }
      return L;
    }, de = (T, P = y, k = null, O = null) => {
      var L;
      let D = P[T];
      if (!D || ge(D))
        return null;
      let $ = (L = O == null ? void 0 : O[T]) != null ? L : R == null ? void 0 : R[T];
      if ($ === null)
        return null;
      let q = In($), ee = Array.isArray(h.responsiveVariants) && h.responsiveVariants.length > 0 || h.responsiveVariants === !0, V = v == null ? void 0 : v[T], W = [];
      if (typeof q == "object" && ee)
        for (let [We, Je] of Object.entries(q)) {
          let Ge = D[Je];
          if (We === "initial") {
            V = Je;
            continue;
          }
          Array.isArray(h.responsiveVariants) && !h.responsiveVariants.includes(We) || (W = F(We, Ge, W, k));
        }
      let te = D[q] || D[In(V)];
      return typeof W == "object" && typeof k == "string" && W[k] ? Pn(W, te) : W.length > 0 ? (W.push(te), W) : te;
    }, we = () => y ? Object.keys(y).map((T) => de(T, y)) : null, ue = (T, P) => {
      if (!y || typeof y != "object")
        return null;
      let k = new Array();
      for (let O in y) {
        let L = de(O, y, T, P), D = T === "base" && typeof L == "string" ? L : L && L[T];
        D && (k[k.length] = D);
      }
      return k;
    }, je = {};
    for (let T in R)
      R[T] !== void 0 && (je[T] = R[T]);
    let Re = (T, P) => {
      var k;
      let O = typeof (R == null ? void 0 : R[T]) == "object" ? { [T]: (k = R[T]) == null ? void 0 : k.initial } : {};
      return { ...v, ...je, ...O, ...P };
    }, Ne = (T = [], P) => {
      let k = [];
      for (let { class: O, className: L, ...D } of T) {
        let $ = !0;
        for (let [q, ee] of Object.entries(D)) {
          let V = Re(q, P);
          if (Array.isArray(ee)) {
            if (!ee.includes(V[q])) {
              $ = !1;
              break;
            }
          } else if (V[q] !== ee) {
            $ = !1;
            break;
          }
        }
        $ && (O && k.push(O), L && k.push(L));
      }
      return k;
    }, Ce = (T) => {
      let P = Ne(u, T), k = Ne(n == null ? void 0 : n.compoundVariants, T);
      return ni(k, P);
    }, Me = (T) => {
      let P = Ce(T);
      if (!Array.isArray(P))
        return P;
      let k = {};
      for (let O of P)
        if (typeof O == "string" && (k.base = Rt(k.base, O)(h)), typeof O == "object")
          for (let [L, D] of Object.entries(O))
            k[L] = Rt(k[L], D)(h);
      return k;
    }, Ue = (T) => {
      if (f.length < 1)
        return null;
      let P = {};
      for (let { slots: k = [], class: O, className: L, ...D } of f) {
        if (!ge(D)) {
          let $ = !0;
          for (let q of Object.keys(D)) {
            let ee = Re(q, T)[q];
            if (ee === void 0 || (Array.isArray(D[q]) ? !D[q].includes(ee) : D[q] !== ee)) {
              $ = !1;
              break;
            }
          }
          if (!$)
            continue;
        }
        for (let $ of k)
          P[$] = P[$] || [], P[$].push([O, L]);
      }
      return P;
    };
    if (!ge(o) || !I) {
      let T = {};
      if (typeof B == "object" && !ge(B))
        for (let P of Object.keys(B))
          T[P] = (k) => {
            var O, L;
            return Rt(B[P], ue(P, k), ((O = Me(k)) != null ? O : [])[P], ((L = Ue(k)) != null ? L : [])[P], k == null ? void 0 : k.class, k == null ? void 0 : k.className)(h);
          };
      return T;
    }
    return Rt(w, we(), Ce(), R == null ? void 0 : R.class, R == null ? void 0 : R.className)(h);
  }, U = () => {
    if (!(!y || typeof y != "object"))
      return Object.keys(y);
  };
  return S.variantKeys = U(), S.extend = n, S.base = w, S.slots = B, S.variants = y, S.defaultVariants = v, S.compoundSlots = f, S.compoundVariants = u, S;
};
const Bs = (
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
), Fs = (
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
), di = (
  /*tw*/
  re({
    slots: {
      base: "tw--flex tw--items-center tw--flex-wrap tw--px-5 tw--mt-[11px]",
      input: "tw--flex-1 tw--pr-2",
      button: "tw--flex tw--grow-0"
    }
  })
), As = ({ head: e, stream: t, foot: n }) => {
  const { themeId: o, isPluginMode: a } = _(ie), { base: u, wrapper: f } = Bs({ theme: o }), l = Ko();
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
}, Os = (
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
), Ls = ({ children: e }) => {
  const { themeId: t } = _(ie), { base: n } = Os({ theme: t });
  return /* @__PURE__ */ g.jsx("div", { className: n(), children: e });
}, _e = ({
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
const pi = (
  /*tw*/
  re({
    slots: {
      btn: "tw--flex-1 tw--space-x-2 tw--text-white tw--text-center tw--bg-dark-neon tw--max-w-[280px] tw--mx-auto tw--px-4 tw--py-3 tw--font-bold tw--rounded-[20px] tw--shadow-[0px_12px_24px_-4px_rgba(1,154,255,0.2)] tw--flex tw--justify-center tw--items-center tw--cursor-pointer tw--relative tw--w-full tw--text-xl max-h-[46px] tw--mb-[11px] customXs:max-h-[52px]",
      link: "tw--flex-1 tw--space-x-2 tw--text-white tw--text-center tw--bg-dark-neon tw--max-w-[280px] tw--mx-auto tw--px-4 tw--py-3 tw--font-extrabold tw--rounded-[20px] tw--shadow-[0px_12px_24px_-4px_rgba(1,154,255,0.2)] tw--flex tw--justify-center tw--items-center tw--cursor-pointer tw--relative tw--w-full tw--mb-[11px] spaced-letters max-h-[46px] customXs:max-h-[52px] customXs:tw--max-w-xs customXs:te--text-[20px] customXs:tw--text-xl"
    }
  })
), Ns = (
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
), Ms = (
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
), Us = (
  /*tw*/
  re({
    slots: {
      base: "tw--absolute tw--top-[-30px] tw--right-[-10px] tw--w-6 tw--h-6 tw--p-1 tw--bg-white tw--rounded-full tw--cursor-pointer tw--text-muted-blue"
    }
  })
), Ds = re({
  slots: {
    base: "tw--mt-[30px] tw--flex tw--items-center tw--justify-center tw--text-[12.8px] tw--leading-[1.56] tw--text-light-seraph tw--font-bold",
    icon: "tw--mr-[5px]"
  }
}), zs = re({
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
}), Vs = ({ text: e, onClick: t, e2e: n, disabled: o = !1 }) => {
  const { themeId: a } = _(ie), u = _((h) => h.meta), f = _((h) => h.intentions.email.current), { btn: l } = pi({ theme: a });
  return nr(() => {
    const h = {
      eventType: Te.addToCart,
      systemType: u.systemType,
      utmParams: u.marketing.lastUtmParams,
      customerUuid: u.cid,
      email: f
    };
    _e(h), h.eventType = Te.priceSeen, _e(h);
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
}, $s = ({ onClick: e }) => {
  const { base: t } = Us();
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
}, Ws = () => {
  const { base: e, icon: t } = Ds();
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
}, Gs = ({ config: e }) => {
  const { translations: t } = _((v) => v.config), { wrapper: n, left: o, leftTop: a, icon: u, text: f, bottom: l, right: h, price: w, info: y } = Ms();
  return /* @__PURE__ */ g.jsx("header", { children: /* @__PURE__ */ g.jsxs("div", { className: n(), children: [
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
}, hi = Ln((e, t) => {
  const { link: n } = pi(), { href: o, text: a, onClick: u, e2e: f = null } = e;
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
hi.displayName = "Link";
const qs = ({ texts: e = [], title: t = "" }) => {
  const { themeId: n } = _(ie), {
    wrapper: o,
    inner: a,
    dots: u,
    dotsIn: f,
    icon: l,
    progressCheckmark: h,
    panelTitle: w,
    spinningTexts: y,
    filmContainer: v,
    film: I
  } = zs({ theme: n });
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
        /* @__PURE__ */ g.jsx("div", { className: v(), children: /* @__PURE__ */ g.jsx("div", { className: I(), children: e.map((C) => /* @__PURE__ */ g.jsx("div", { className: y(), children: C }, C)) }) })
      ]
    }
  );
}, Hs = ({ onClose: e }) => {
  const { displayPlanPrice: t, billingFrequencyTmsg: n } = _((f) => f.meta.pd), { translations: o, themeId: a } = _((f) => f.config), { base: u } = Ns({ theme: a });
  return /* @__PURE__ */ g.jsx("div", { className: u(), children: /* @__PURE__ */ g.jsxs(
    "div",
    {
      id: "chat-payment-view",
      className: "light-pink-blue tw--max-w-[500px] tw--bg-white tw--w-full tw--min-h-[400px] tw--relative tw--rounded-lg tw--flex tw--flex-col tw--p-7",
      children: [
        /* @__PURE__ */ g.jsx(Ls, { children: /* @__PURE__ */ g.jsx(qs, { texts: o.loaderTexts, title: o.tm1224 }) }),
        /* @__PURE__ */ g.jsx($s, { onClick: e }),
        /* @__PURE__ */ g.jsx("div", { id: "primer-form-container", className: "primer-theme tw--w-full h-full", children: /* @__PURE__ */ g.jsx(Gs, { config: { price: t, period: n } }) }),
        /* @__PURE__ */ g.jsx(Ws, {})
      ]
    }
  ) });
}, Ys = (
  /* tw*/
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
), Js = (
  /* tw*/
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
), Xs = (
  /* tw*/
  re({
    slots: {
      base: "tw--grid tw--break-words"
    }
  })
), Ks = (
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
), mi = (
  /* tw*/
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
), Zs = re({
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
}), Qs = () => {
  const { themeId: e } = _(ie), { dotFirst: t, dotSecond: n, dotThird: o } = Zs({ theme: e });
  return /* @__PURE__ */ g.jsxs("div", { className: "tw--ml-7 tw--space-x-[6px]", "data-e2e": "stream-response-loader", children: [
    /* @__PURE__ */ g.jsx("span", { className: t() }),
    /* @__PURE__ */ g.jsx("span", { className: n() }),
    /* @__PURE__ */ g.jsx("span", { className: o() })
  ] });
}, ea = "chatSeen", wi = "linkClickedFromChat", ta = "chatConversationFinishedTimeStamp", ra = "cid", na = 1e3;
var Zr = { exports: {} }, bt = typeof Reflect == "object" ? Reflect : null, _n = bt && typeof bt.apply == "function" ? bt.apply : function(t, n, o) {
  return Function.prototype.apply.call(t, n, o);
}, Xt;
bt && typeof bt.ownKeys == "function" ? Xt = bt.ownKeys : Object.getOwnPropertySymbols ? Xt = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : Xt = function(t) {
  return Object.getOwnPropertyNames(t);
};
function ia(e) {
  console && console.warn && console.warn(e);
}
var gi = Number.isNaN || function(t) {
  return t !== t;
};
function Y() {
  Y.init.call(this);
}
Zr.exports = Y;
Zr.exports.once = la;
Y.EventEmitter = Y;
Y.prototype._events = void 0;
Y.prototype._eventsCount = 0;
Y.prototype._maxListeners = void 0;
var jn = 10;
function sr(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(Y, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return jn;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || gi(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    jn = e;
  }
});
Y.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Y.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || gi(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function yi(e) {
  return e._maxListeners === void 0 ? Y.defaultMaxListeners : e._maxListeners;
}
Y.prototype.getMaxListeners = function() {
  return yi(this);
};
Y.prototype.emit = function(t) {
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
    _n(h, this, n);
  else
    for (var w = h.length, y = Ii(h, w), o = 0; o < w; ++o)
      _n(y[o], this, n);
  return !0;
};
function bi(e, t, n, o) {
  var a, u, f;
  if (sr(n), u = e._events, u === void 0 ? (u = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (u.newListener !== void 0 && (e.emit(
    "newListener",
    t,
    n.listener ? n.listener : n
  ), u = e._events), f = u[t]), f === void 0)
    f = u[t] = n, ++e._eventsCount;
  else if (typeof f == "function" ? f = u[t] = o ? [n, f] : [f, n] : o ? f.unshift(n) : f.push(n), a = yi(e), a > 0 && f.length > a && !f.warned) {
    f.warned = !0;
    var l = new Error("Possible EventEmitter memory leak detected. " + f.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    l.name = "MaxListenersExceededWarning", l.emitter = e, l.type = t, l.count = f.length, ia(l);
  }
  return e;
}
Y.prototype.addListener = function(t, n) {
  return bi(this, t, n, !1);
};
Y.prototype.on = Y.prototype.addListener;
Y.prototype.prependListener = function(t, n) {
  return bi(this, t, n, !0);
};
function oa() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function xi(e, t, n) {
  var o = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n }, a = oa.bind(o);
  return a.listener = n, o.wrapFn = a, a;
}
Y.prototype.once = function(t, n) {
  return sr(n), this.on(t, xi(this, t, n)), this;
};
Y.prototype.prependOnceListener = function(t, n) {
  return sr(n), this.prependListener(t, xi(this, t, n)), this;
};
Y.prototype.removeListener = function(t, n) {
  var o, a, u, f, l;
  if (sr(n), a = this._events, a === void 0)
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
    u === 0 ? o.shift() : sa(o, u), o.length === 1 && (a[t] = o[0]), a.removeListener !== void 0 && this.emit("removeListener", t, l || n);
  }
  return this;
};
Y.prototype.off = Y.prototype.removeListener;
Y.prototype.removeAllListeners = function(t) {
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
function vi(e, t, n) {
  var o = e._events;
  if (o === void 0)
    return [];
  var a = o[t];
  return a === void 0 ? [] : typeof a == "function" ? n ? [a.listener || a] : [a] : n ? aa(a) : Ii(a, a.length);
}
Y.prototype.listeners = function(t) {
  return vi(this, t, !0);
};
Y.prototype.rawListeners = function(t) {
  return vi(this, t, !1);
};
Y.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Ei.call(e, t);
};
Y.prototype.listenerCount = Ei;
function Ei(e) {
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
Y.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Xt(this._events) : [];
};
function Ii(e, t) {
  for (var n = new Array(t), o = 0; o < t; ++o)
    n[o] = e[o];
  return n;
}
function sa(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function aa(e) {
  for (var t = new Array(e.length), n = 0; n < t.length; ++n)
    t[n] = e[n].listener || e[n];
  return t;
}
function la(e, t) {
  return new Promise(function(n, o) {
    function a(f) {
      e.removeListener(t, u), o(f);
    }
    function u() {
      typeof e.removeListener == "function" && e.removeListener("error", a), n([].slice.call(arguments));
    }
    Ti(e, t, u, { once: !0 }), t !== "error" && ca(e, a, { once: !0 });
  });
}
function ca(e, t, n) {
  typeof e.on == "function" && Ti(e, "error", t, n);
}
function Ti(e, t, n, o) {
  if (typeof e.on == "function")
    o.once ? e.once(t, n) : e.on(t, n);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function a(u) {
      o.once && e.removeEventListener(t, a), n(u);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var ua = Zr.exports;
const Oe = {
  type: Wn,
  core: new ua.EventEmitter()
}, fa = {
  transports: ["websocket"],
  upgrade: !1,
  pingInterval: 1e3 * 60 * 5,
  pingTimeout: 1e3 * 60 * 3,
  secure: !0,
  reconnect: !0
}, da = (e, t) => e.map((n) => {
  var a, u;
  const o = n.sequence === t.sequence && n.type === t.type;
  return o && n.type === ce.text && t.text ? { ...n, text: n.text + t.text } : o && n.type === ce.buttons && ((a = t == null ? void 0 : t.buttons) != null && a.length) && ((u = n == null ? void 0 : n.buttons) != null && u.length) ? { ...n, buttons: [...n.buttons, ...t.buttons] } : n;
}), Ci = ir({
  name: "chat",
  initialState: wt,
  reducers: {
    setOutgoing(e, { payload: t }) {
      e.outgoing = {
        term: gt(tt.chat),
        user_id: localStorage.getItem("__cid") || "",
        role: le.user,
        message: t
      };
    },
    resetOutgoing(e) {
      e.outgoing = wt.outgoing;
    },
    setExistingHistory(e, { payload: t }) {
      return et(e, (n) => {
        if (e.historyIds.length >= t.length) {
          e.historyIds.filter(
            (a) => !t.find((u) => u.id === a)
          ).forEach(
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
      const n = he();
      return et(e, (o) => {
        o.historyIds.push(n), o.historyData[n] = {
          id: n,
          role: le.assistant,
          content: [
            { type: ce.text, text: t.content, sequence: 1 },
            {
              type: ce.buttons,
              buttons: t.buttons || [],
              sequence: 2
            }
          ]
        };
      });
    },
    fillAssistantHistoryData(e, { payload: t }) {
      return et(e, (n) => {
        const o = t.id;
        if (!n.historyData[o]) {
          n.historyData[o] = { id: o, role: le.assistant, content: [] }, n.historyIds.push(o);
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
          n.historyData[o].content = da(
            n.historyData[o].content,
            u
          );
          return;
        }
        n.historyData[o].content.push(u);
      });
    },
    fillUserHistoryData(e, { payload: { id: t, content: n } }) {
      return et(e, (o) => {
        let a;
        if (n.groupId && Object.entries(o.historyData).forEach(([u, f]) => {
          f.content.find((l) => l.groupId === n.groupId) && (a = u);
        }), a) {
          o.historyData[a].content.push(n);
          return;
        }
        o.historyData[t] || (o.historyData[t] = { id: t, role: le.user, content: [n] }, o.historyIds.push(t));
      });
    },
    fillInitialMessage(e, { payload: t }) {
      e.historyIds.push(t.id), e.historyData[t.id] = {
        id: t.id,
        role: le.assistant,
        time: (/* @__PURE__ */ new Date()).getTime(),
        content: t.content
      };
    },
    setIsLoading(e) {
      e.isLoading = !0;
    },
    resetIsLoading(e) {
      e.isLoading = wt.isLoading;
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
      return et(e, (n) => {
        n.historyData[t.itemId].content = n.historyData[t.itemId].content.map((o) => ({ ...o, sent: !0, resend: !1 }));
      });
    },
    showResendIcon(e, { payload: t }) {
      return et(e, (n) => {
        n.historyData[t.itemId].content = n.historyData[t.itemId].content.map((o) => ({ ...o, sent: !1, resend: !0 }));
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
      e.error = wt.error;
    },
    setIsStreaming(e, { payload: t }) {
      e.isStreaming = t;
    },
    resetHistory(e) {
      e.historyIds = wt.historyIds, e.historyData = wt.historyData;
    }
  }
}), Si = (e) => e.chat, pa = (e) => e.chat.historyIds.find(
  (t) => e.chat.historyData[t].role === le.user
), ha = (e, t) => e.sequence - t.sequence, {
  setOutgoing: Qr,
  resetOutgoing: ma,
  setExistingHistory: wa,
  addPredefinedAssistantMessage: ki,
  setIsLoading: Wt,
  resetIsLoading: Bt,
  setLastGroupPointer: ga,
  setTypingTimeoutExpired: Pi,
  setError: Gt,
  resetError: vr,
  setConnected: Rn,
  setClosed: ar,
  hideResendIcon: ya,
  showResendIcon: Bn,
  resendMessage: _i,
  setIsStreaming: Er,
  fillAssistantHistoryData: Fn,
  fillUserHistoryData: rr,
  resetHistory: ba,
  fillInitialMessage: xa
} = Ci.actions, va = Ci.reducer, Ea = (
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
), Ia = (
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
), Ta = ({ text: e = "", onClick: t, e2e: n }) => {
  const { themeId: o } = _(ie), { base: a } = Ea({ theme: o });
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
}, lr = ({ children: e, outlined: t = !1, onClick: n, e2e: o = null, disabled: a = !1 }) => {
  const { themeId: u } = _(ie), { base: f } = Ia({ theme: u, outlined: t });
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
), en = Ln((e, t) => {
  const {
    disabled: n,
    e2e: o,
    isLoading: a,
    onChange: u,
    onKeyUp: f,
    placeholder: l,
    type: h,
    value: w
  } = e, { themeId: y } = _(ie), { base: v, input: I, loader: C, spin: B } = Ca({ theme: y });
  return /* @__PURE__ */ g.jsxs("div", { className: v(), children: [
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
        value: w
      }
    ),
    a && /* @__PURE__ */ g.jsx("span", { className: C(), children: /* @__PURE__ */ g.jsx("span", { className: B() }) })
  ] });
});
en.displayName = "Input";
const Sa = () => {
  const e = Ye(), t = _((C) => C.meta), { themeId: n, translations: o } = _(ie), { isLoading: a } = _(Kn), { base: u, input: f, button: l } = di({ theme: n }), [h, w] = xt(""), y = Dr(null);
  nr(() => {
    _e({
      eventType: Te.emailField,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid
    }), setTimeout(() => {
      y.current && y.current.focus();
    }, 500);
  }, []);
  const v = (C) => {
    const B = C.target.value.trim();
    w(B);
  }, I = (C) => {
    C.preventDefault(), h !== "" && (e(Ar(!0)), e(Mo(h)), Oe.core.emit(Oe.type.email, { email: h }), w(""));
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
            onChange: v,
            ref: y,
            placeholder: o.emailPlaceholder,
            type: "email",
            value: h
          }
        ) }),
        /* @__PURE__ */ g.jsx("div", { className: l(), children: /* @__PURE__ */ g.jsx(lr, { onClick: I, e2e: "email-validate-btn", children: /* @__PURE__ */ g.jsx(
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
}, ka = () => {
  const e = Ye(), { themeId: t } = _(ie), { connected: n } = _(Si), { isLoading: o } = _(Zn), { base: a, input: u, button: f } = di({ theme: t }), [l, h] = xt(""), [w, y] = xt(null), v = _((U) => U.chat.lastGroupId), I = Dr(null);
  nr(() => {
    setTimeout(() => {
      var U;
      (U = I.current) == null || U.focus();
    }, 500);
  }, []);
  const C = (U) => {
    h(U.target.value), S();
  }, B = (U) => {
    U.preventDefault(), l.trim() && e(rr({
      role: le.user,
      id: he(),
      sequence: 1,
      content: {
        sequence: 1,
        message: l,
        groupId: v,
        resend: !1,
        sent: !0
      }
    })), h(""), S();
  }, S = () => {
    w && clearTimeout(w);
    const U = setTimeout(() => {
      e(Pi(!0)), e(ga(he()));
    }, 3e3);
    y(U);
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
            name: "response",
            onChange: C,
            placeholder: "Write your message here...",
            type: "response",
            value: l,
            ref: I
          }
        ) }),
        /* @__PURE__ */ g.jsx("div", { className: f(), children: /* @__PURE__ */ g.jsx(lr, { onClick: B, disabled: !n, children: /* @__PURE__ */ g.jsx(
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
  const e = Ye(), t = Qo(), n = Dr(null), [o, a] = xt(!1), u = (v) => {
    e(zo(v));
  }, f = (v) => {
    v.currentTarget.disabled = !0, Oe.core.emit(Oe.type.destroy), u(!1), a(!1);
  }, l = () => {
    e(ki({ content: t.translations.tm1226 })), e(Do(!0)), e($o(!1)), e(Xr({ href: "/", isVisible: !0, text: t.translations.ctaTextContent })), u(!1), setTimeout(() => {
      n.current && n.current.click();
    }, 7e3);
  }, h = (v) => {
    e(Wo(v));
  }, w = () => {
    Oe.core.emit(Oe.type.payment, { setIsPaymentContainerVisible: u, onPaymentSuccess: l, onError: h }), a(!0);
  }, y = (v) => {
    localStorage.setItem(wi, v.currentTarget.href), _e({
      eventType: Te.linkClicked,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid,
      email: t.current
    }), e(ar());
  };
  return /* @__PURE__ */ g.jsxs("div", { className: "tw--space-y-[11px] tw--pb-[11px]", "data-e2e": "chat-foot", children: [
    t.error && /* @__PURE__ */ g.jsx("div", { className: "tw--pl-[35px] tw--text-[#ff0043] tw--font-medium", children: t.error }),
    t.isPaymentFormVisible && /* @__PURE__ */ g.jsx(Hs, { onClose: f }),
    t.isLoading && /* @__PURE__ */ g.jsx(Qs, {}),
    t.isCtaVisible && /* @__PURE__ */ g.jsx(
      hi,
      {
        ref: n,
        text: t.ctaText,
        onClick: y,
        href: t.ctaHref,
        e2e: "quiz-trigger-btn"
      }
    ),
    !t.isStreaming && t.isEmailFormVisible && /* @__PURE__ */ g.jsx(Sa, {}),
    !t.isStreaming && t.isResponseFormVisible && !t.isCtaVisible && /* @__PURE__ */ g.jsx(ka, {}),
    t.isPaymentButtonVisible && /* @__PURE__ */ g.jsx(
      Vs,
      {
        text: t.translations.payButton,
        onClick: w,
        disabled: o,
        e2e: "payment-form-trigger-btn"
      }
    )
  ] });
}, _a = (
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
), ji = ({ orientation: e = Vr.horizontal, minimized: t = !1 }) => {
  const { aiProfile: n, themeId: o } = _(ie), { base: a, avatar: u, info: f, name: l, role: h, imgWrapper: w } = _a({ theme: o, orientation: e, minimized: t });
  return /* @__PURE__ */ g.jsxs("div", { className: a(), children: [
    /* @__PURE__ */ g.jsx("span", { className: w(), children: /* @__PURE__ */ g.jsx(
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
}, ja = () => {
  const e = Ye(), t = Zo(), { base: n } = Fs({ theme: t.theme }), o = (a) => {
    a.currentTarget.disabled = !0, _e({
      eventType: Te.closeClicked,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid
    }), setTimeout(() => {
      e(ar());
    }, 500);
  };
  return /* @__PURE__ */ g.jsxs("div", { className: n(), "data-e2e": "chat-heading", children: [
    /* @__PURE__ */ g.jsx(ji, {}),
    t.closeVisible && /* @__PURE__ */ g.jsx(lr, { e2e: "chat-close-btn", onClick: o, children: /* @__PURE__ */ g.jsx(
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
}, Ra = (e) => {
  const t = (o) => /[?&]([^=#]+)=([^&#]*)/g.test(o);
  let n;
  if (window.location.search) {
    const o = new URLSearchParams(window.location.search);
    o.append(ea, "true"), o.append(ra, localStorage.getItem("__cid") || ""), n = `/?${o}`;
  } else
    n = "";
  return t(e) ? e : e + n;
}, Ba = { constructLink: Ra }, Fa = ({ properties: e }) => {
  const { translations: t } = _(ie), { cid: n, marketing: o, systemType: a } = _(Mt), u = Ye(), f = e.href ? Ba.constructLink(e.href) : "#";
  nr(() => {
    u(Xr({
      isVisible: !0,
      href: f,
      text: t.mealButton
    }));
  });
  const l = (h) => {
    localStorage.setItem(wi, h.currentTarget.href), _e({
      eventType: Te.linkClicked,
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
}, Aa = (e) => {
  const n = /embed\/(\w+)/.exec(e);
  return n ? n[1] : null;
}, Oa = Nt.memo(function({ url: t, title: n }) {
  const [o, a] = xt(!1), u = Aa(t), f = () => {
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
  re({
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
re({
  slots: {
    base: "tw--flex-1 tw--px-4 tw--py-2"
  }
});
const Na = ({ text: e, href: t, onClick: n }) => {
  const { themeId: o } = _(ie), { base: a } = La({ theme: o });
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
  const t = Ye(), n = _(Mt), o = !_(pa), a = (f, l) => {
    t(rr({ id: he(), sequence: 1, role: le.user, content: { sequence: 1, message: f, resend: !1, sent: !0, groupId: "" } })), t(Qr(f)), o && _e({
      eventType: Te.buttonClick + l,
      systemType: n.systemType,
      utmParams: n.marketing.lastUtmParams,
      customerUuid: n.cid
    });
  }, u = (f) => {
    t(rr({
      id: he(),
      sequence: 1,
      role: le.user,
      content: {
        sequence: 1,
        message: f,
        resend: !1,
        sent: !0,
        groupId: ""
      }
    }));
  };
  return [...e].sort((f, l) => f.sequence - l.sequence).map(({ value: f, link: l, sequence: h, noStream: w }) => l ? /* @__PURE__ */ g.jsx(
    Na,
    {
      text: f,
      href: l
    },
    he()
  ) : /* @__PURE__ */ g.jsx(
    Ta,
    {
      text: f,
      onClick: w ? () => u(f) : () => a(f, h),
      e2e: "option-button"
    },
    he()
  ));
}, Ua = ({ message: e, itemId: t }) => {
  const { themeId: n } = _(ie), { isStreaming: o } = _(Si), { pd: a } = _(Mt), u = _((h) => h.chat.historyIds.length - 1 === h.chat.historyIds.indexOf(t)), { base: f } = Ks({ isTyping: o && u, theme: n }), l = [...e.content].sort(ha);
  return /* @__PURE__ */ g.jsx(g.Fragment, { children: l.map((h) => {
    var w, y, v, I;
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
                Ji,
                {
                  components: {
                    a(C) {
                      return /* @__PURE__ */ g.jsx(Fa, { properties: C });
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
      return /* @__PURE__ */ g.jsx("div", { className: "tw--flex tw--flex-col tw--space-y-[10px]", children: /* @__PURE__ */ g.jsx(Ma, { options: h[h.type] }) }, he());
    if (h.type === ce.video)
      return /* @__PURE__ */ g.jsx(
        Oa,
        {
          title: ((w = h[h.type]) == null ? void 0 : w.title) || "video",
          url: ((y = h[h.type]) == null ? void 0 : y.url) || "https://www.youtube.com/embed/g4B8Dhl4pxY"
        },
        he()
      );
    if (h.type === ce.image)
      return /* @__PURE__ */ g.jsx(
        "img",
        {
          className: "w-full tw--h-auto tw--py-4",
          src: (v = h[h.type]) == null ? void 0 : v.url,
          alt: ((I = h[h.type]) == null ? void 0 : I.alt) || "chat-image"
        },
        he()
      );
    if (h.type === ce.payment)
      return `${h[h.type]} ${a.displayPlanPrice} ${a.billingFrequencyTmsg}`;
    if (h.type === ce.email)
      return h[h.type];
  }) });
}, Da = Nt.memo(Ua), za = ({ itemId: e }) => {
  const { themeId: t } = _(ie), n = _((o) => o.chat.historyData[e]);
  return n && /* @__PURE__ */ g.jsx("div", { className: mi({ theme: t, type: n.role }).base(), children: n.role === le.assistant ? /* @__PURE__ */ g.jsx(
    Da,
    {
      message: n,
      itemId: e
    }
  ) : [...n.content].map((o) => /* @__PURE__ */ g.jsx(Ga, { record: { ...o, itemId: e } }, he())) });
}, Va = Nt.memo(za), $a = ({ titleTxt: e }) => {
  const { themeId: t } = _(ie), { base: n, title: o } = Js({ theme: t });
  return /* @__PURE__ */ g.jsxs("div", { className: n(), children: [
    o && /* @__PURE__ */ g.jsx("div", { className: o(), children: e }),
    /* @__PURE__ */ g.jsx(ji, { orientation: Vr.vertical })
  ] });
}, Wa = () => {
  const { themeId: e } = _(ie), { aiProfile: t } = _(ie), n = _((w) => w.chat.historyIds || []), o = _((w) => w.chat.historyData[n[0]]), { base: a, second: u, date: f } = Ys({ theme: e }), { base: l } = Xs({ theme: e }), h = xo((o == null ? void 0 : o.time) || (/* @__PURE__ */ new Date()).getTime());
  return /* @__PURE__ */ g.jsx("div", { className: a(), children: /* @__PURE__ */ g.jsxs("div", { className: u(), "data-e2e": "history-container", children: [
    /* @__PURE__ */ g.jsx($a, { titleTxt: t.welcome }),
    /* @__PURE__ */ g.jsx("div", { className: f(), "data-e2e": "stream-assistant-msg-date", children: h }),
    n.map((w) => /* @__PURE__ */ g.jsx(
      "div",
      {
        className: l(),
        "data-e2e": "history-item",
        children: /* @__PURE__ */ g.jsx(Va, { itemId: w })
      },
      he()
    ))
  ] }) });
}, Ga = ({ record: e }) => {
  const t = Ye(), { themeId: n } = _(ie), { action: o, separator: a } = mi({ theme: n, type: le.user }), u = () => {
    t(_i(e));
  };
  return /* @__PURE__ */ g.jsxs("div", { className: a(), children: [
    /* @__PURE__ */ g.jsx("span", { children: e.message }),
    e.resend && !e.sent && /* @__PURE__ */ g.jsx("div", { className: o(), children: /* @__PURE__ */ g.jsx(lr, { outlined: !0, onClick: () => u(), children: /* @__PURE__ */ g.jsxs(
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
  return t(qo(e.meta)), t(Hn(e.app)), /* @__PURE__ */ g.jsx(
    As,
    {
      head: /* @__PURE__ */ g.jsx(ja, {}),
      stream: /* @__PURE__ */ g.jsx(Wa, {}),
      foot: /* @__PURE__ */ g.jsx(Pa, {})
    }
  );
};
var tn = {}, rn = {};
rn.__esModule = !0;
rn.default = Ja;
function Kt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Kt = function(n) {
    return typeof n;
  } : Kt = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Kt(e);
}
function Ir() {
}
var Ha = {
  getItem: Ir,
  setItem: Ir,
  removeItem: Ir
};
function Ya(e) {
  if ((typeof self > "u" ? "undefined" : Kt(self)) !== "object" || !(e in self))
    return !1;
  try {
    var t = self[e], n = "redux-persist ".concat(e, " test");
    t.setItem(n, "test"), t.getItem(n), t.removeItem(n);
  } catch {
    return ye.process.env.NODE_ENV !== "production" && console.warn("redux-persist ".concat(e, " test failed, persistence will be disabled.")), !1;
  }
  return !0;
}
function Ja(e) {
  var t = "".concat(e, "Storage");
  return Ya(t) ? self[t] : (ye.process.env.NODE_ENV !== "production" && console.error("redux-persist failed to create sync storage. falling back to noop storage."), Ha);
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
    const { meta: a } = e.getState(), u = {};
    return a.pd && typeof o == "object" && "billingOptionType" in o ? (o.billingFrequencyTmsg = o.billingOptionType === "one-time" ? a.pd.oneTimer : a.pd.subscriberBillingFrequency.replace(
      "{1}",
      o.frequencyInMonths
    ), o = { ...o, ...u }, o) : u;
  };
  return Oe.core.on(Oe.type.emailSuccess, () => {
    const { meta: o, intentions: a } = e.getState();
    e.dispatch(Ar(!1)), e.dispatch(En("")), e.dispatch(
      rr({
        id: he(),
        role: le.user,
        sequence: 1,
        content: {
          sequence: 1,
          message: a.email.current,
          resend: !1,
          sent: !0,
          groupId: ""
        }
      })
    ), e.dispatch(Qr(a.email.current)), e.dispatch(Uo(!0)), e.dispatch(Vo(!1)), _e({
      eventType: Te.emailEntered,
      systemType: o.systemType,
      utmParams: o.marketing.lastUtmParams,
      customerUuid: o.cid,
      email: a.email.current
    });
  }), Oe.core.on(Oe.type.emailError, (o) => {
    const { meta: a, intentions: u, config: f } = e.getState(), { tm716: l, tm526: h, tm715: w, tm505: y } = f.translations;
    if (e.dispatch(Ar(!1)), o.status === 409) {
      e.dispatch(ki({
        content: l,
        buttons: [
          { sequence: 1, id: "opt-1", text: h, value: h, link: o.data.buttonLink, noStream: !0 },
          { sequence: 2, id: "opt-2", text: w, value: w, link: "", noStream: !0 }
        ]
      })), _e({
        eventType: Te.emailExist,
        systemType: a.systemType,
        utmParams: a.marketing.lastUtmParams,
        customerUuid: a.cid,
        email: u.email.current
      });
      return;
    }
    o.status === 422 && (e.dispatch(En(o.errors.email[0] || y)), _e({
      eventType: Te.emailWrong,
      systemType: a.systemType,
      utmParams: a.marketing.lastUtmParams,
      customerUuid: a.cid,
      email: u.email.current
    }));
  }), An("marketing", e, Ho), An(
    "__pd",
    e,
    Yo,
    n
  ), (o) => {
    if (Xr.match(o) && o.payload.isVisible) {
      const { meta: a, intentions: u } = e.getState();
      _e({
        eventType: Te.linkProvided,
        systemType: a.systemType,
        utmParams: a.marketing.lastUtmParams,
        customerUuid: a.cid,
        email: u.email.current
      });
    }
    t(o);
  };
}, An = (e, t, n, o) => {
  const a = setInterval(() => {
    let u = localStorage.getItem(e) || "";
    try {
      u = JSON.parse(u);
    } catch {
      u = localStorage.getItem(e) || "";
    }
    o && u && (u = o(u)), o && u && (t.dispatch(n(u)), clearInterval(a));
  }, na);
};
let ae;
const nl = (e) => (t) => (n) => {
  const { meta: o, chat: a } = e.getState(), u = () => {
    const { config: w } = e.getState();
    e.dispatch(Bt()), e.dispatch(Gt(w.translations.error));
  }, f = () => {
    e.dispatch(Bn({ itemId: a.historyIds.pop() })), u();
  }, l = (w) => {
    if (w.role === le.user && e.dispatch(Wt()), ae && ae.connected && w.message.trim() !== "") {
      ae.emit(Ee.chat, { time: (/* @__PURE__ */ new Date()).getTime(), ...w }, On(f)), e.dispatch(vr());
      return;
    }
    f();
  }, h = (w) => {
    e.dispatch(ya(w)), e.dispatch(Wt());
    const y = () => {
      const { config: v } = e.getState();
      e.dispatch(Bn(w)), e.dispatch(Bt()), e.dispatch(Gt(v.translations.error));
    };
    ae && ae.connected && w.message.trim() !== "" ? (ae.volatile.emit(
      Ee.chat,
      {
        role: le.user,
        message: w.message,
        term: gt(tt.chat),
        user_id: o.cid,
        region: o.region
      },
      On(y)
    ), e.dispatch(vr())) : y();
  };
  if (Qr.match(n) && l({
    role: le.user,
    message: n.payload,
    term: gt(tt.chat),
    user_id: o.cid,
    region: o.region,
    messageId: [...a.historyIds].pop()
  }), ar.match(n)) {
    const w = document.querySelector("#chatbot-container");
    document.body && w && (w.innerHTML = "", document.body.classList.remove("scroll-stop"));
    const y = new URL(window.location.href);
    y.search = "", localStorage.setItem(ta, (/* @__PURE__ */ new Date()).getTime().toString()), window.location.href = y.toString(), ae && ae.close();
  }
  if (Pi.match(n) && n.payload) {
    const w = [...a.historyIds].pop(), y = a.historyData[w].content.map(({ message: v }) => v).join(`
`);
    y.trim() !== "" && l({
      role: le.user,
      message: y,
      term: gt(tt.chat),
      user_id: o.cid,
      region: o.region,
      messageId: w
    });
  }
  if (_i.match(n) && h(n.payload), !Hn.match(n))
    return t(n);
  e.dispatch(Wt()), ae = Zi.connect(n.payload.chatUrl, { query: `cid=${o.cid}`, ...fa }), ae.on(Ee.connect, () => {
    const { meta: w } = e.getState();
    ae.sendBuffer = [], ae.emit(Ee.chatHistory, { user_id: w.cid, region: w.region, term: gt(tt.chat) }), e.dispatch(Rn(!0));
  }), ae.on(Ee.chatHistory, ({ history: w, errors: y, region: v }) => {
    e.dispatch(Bt()), e.dispatch(Er(!1)), e.dispatch(Jo(v));
    const { config: I, meta: C } = e.getState();
    if (y.length) {
      e.dispatch(Gt(y[0]));
      return;
    }
    if (w.length) {
      e.dispatch(wa(w));
      const S = [...w].pop();
      S && Array.isArray(S.content) && e.dispatch(br(S.content));
      return;
    }
    e.dispatch(ba()), e.dispatch(Wt());
    let B = 0;
    I.aiProfile.initialMessage.forEach((S, U, R) => {
      B += 1e3, setTimeout(() => {
        e.dispatch(xa(S)), R.length === U + 1 && (e.dispatch(br([...I.aiProfile.initialMessage].pop().content)), I.aiProfile.initialMessage.forEach((F) => l({
          role: le.assistant,
          term: gt(tt.chat),
          user_id: C.cid,
          message: JSON.stringify(F.content),
          messageId: F.id,
          region: C.region
        })), e.dispatch(Bt()));
      }, B);
    });
  }), ae.on(Ee.streamStart, (w) => {
    e.dispatch(Er(!0)), e.dispatch(Bt()), e.dispatch(ma()), e.dispatch(vr()), e.dispatch(Fn({ id: w.id }));
  }), ae.on(Ee.streamData, (w) => {
    var I;
    const y = {
      id: w.id,
      sequence: w.sequence,
      content: {
        type: w.type,
        [w.type]: w[w.type],
        sequence: w.sequence
      }
    };
    e.dispatch(Fn(y));
    const { chat: v } = e.getState();
    e.dispatch(br(v.historyData[w.id].content)), (I = w.errors) != null && I.length && !v.error && e.dispatch(Gt(w.errors[0]));
  }), ae.on(Ee.streamEnd, () => {
    e.dispatch(Er(!1));
  }), ae.on(Ee.streamError, u), ae.on(Ee.error, u), ae.on(Ee.disconnect, () => {
    e.dispatch(Rn(!1));
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
    meta: Xo,
    config: Eo,
    chat: va,
    intentions: Go
  })),
  middleware: (e) => e({ serializableCheck: !1 }).concat(nl, rl)
}), ol = Ki(Bi), Tl = (e) => {
  Ft.createRoot(e.root).render(
    /* @__PURE__ */ g.jsx(qi, { store: Bi, children: /* @__PURE__ */ g.jsx($n, { persistor: ol, children: /* @__PURE__ */ g.jsx(qa, { config: e.initialConfig }) }) })
  );
};
export {
  Tl as ReactBotClient,
  Tl as default,
  Oe as intent
};
//# sourceMappingURL=index.es.js.map
