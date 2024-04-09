(function(){"use strict";try{if(typeof document<"u"){const t=document.createElement("style");t.id="react-tw-ai-client",t.appendChild(document.createTextNode('*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:Plus Jakarta Sans,Roboto,Mulish,Exo,Helvetica,Arial,sans-serif;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.tw--pointer-events-none{pointer-events:none}.tw--pointer-events-auto{pointer-events:auto}.tw--fixed{position:fixed}.tw--absolute{position:absolute}.tw--relative{position:relative}.tw---top-1\\/2{top:-50%}.tw--bottom-0{bottom:0}.tw--bottom-1{bottom:.25rem}.tw--bottom-\\[-16px\\]{bottom:-16px}.tw--left-0{left:0}.tw--right-0{right:0}.tw--right-4{right:1rem}.tw--right-\\[-10px\\]{right:-10px}.tw--top-0{top:0}.tw--top-8{top:2rem}.tw--top-\\[-30px\\]{top:-30px}.tw--top-\\[50\\%\\]{top:50%}.tw--z-50{z-index:50}.tw--z-\\[101\\]{z-index:101}.tw--m-0{margin:0}.tw--m-auto{margin:auto}.tw--mx-10{margin-left:2.5rem;margin-right:2.5rem}.tw--mx-\\[30px\\]{margin-left:30px;margin-right:30px}.tw--mx-auto{margin-left:auto;margin-right:auto}.tw--my-4{margin-top:1rem;margin-bottom:1rem}.tw--mb-5{margin-bottom:1.25rem}.tw--mb-6{margin-bottom:1.5rem}.tw--mb-7{margin-bottom:1.75rem}.tw--mb-\\[11px\\]{margin-bottom:11px}.tw--mb-auto{margin-bottom:auto}.tw--ml-7{margin-left:1.75rem}.tw--ml-auto{margin-left:auto}.tw--mr-0{margin-right:0}.tw--mr-5{margin-right:1.25rem}.tw--mr-\\[5px\\]{margin-right:5px}.tw--mt-0{margin-top:0}.tw--mt-24{margin-top:6rem}.tw--mt-\\[11px\\]{margin-top:11px}.tw--mt-\\[30px\\]{margin-top:30px}.tw--box-border{box-sizing:border-box}.tw--box-content{box-sizing:content-box}.tw--block{display:block}.tw--inline-block{display:inline-block}.tw--flex{display:flex}.tw--grid{display:grid}.tw--hidden{display:none}.tw--h-16{height:4rem}.tw--h-4{height:1rem}.tw--h-6{height:1.5rem}.tw--h-8{height:2rem}.tw--h-80{height:20rem}.tw--h-\\[12px\\]{height:12px}.tw--h-\\[50px\\]{height:50px}.tw--h-\\[60px\\]{height:60px}.tw--h-auto{height:auto}.tw--h-fit{height:-moz-fit-content;height:fit-content}.tw--h-full{height:100%}.tw--h-screen{height:100vh}.tw--max-h-\\[700px\\]{max-height:700px}.tw--max-h-screen{max-height:100vh}.tw--min-h-\\[400px\\]{min-height:400px}.tw--w-16{width:4rem}.tw--w-4{width:1rem}.tw--w-6{width:1.5rem}.tw--w-64{width:16rem}.tw--w-8{width:2rem}.tw--w-\\[12px\\]{width:12px}.tw--w-fit{width:-moz-fit-content;width:fit-content}.tw--w-full{width:100%}.tw--w-screen{width:100vw}.tw--max-w-\\[280px\\]{max-width:280px}.tw--max-w-\\[335px\\]{max-width:335px}.tw--max-w-\\[375px\\]{max-width:375px}.tw--max-w-\\[400px\\]{max-width:400px}.tw--max-w-\\[500px\\]{max-width:500px}.tw--max-w-md{max-width:28rem}.tw--max-w-xs{max-width:20rem}.tw--flex-1{flex:1 1 0%}.tw--shrink{flex-shrink:1}.tw--shrink-0{flex-shrink:0}.tw--grow-0{flex-grow:0}.tw--translate-x-72{--tw-translate-x: 18rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.tw--translate-y-1\\/2{--tw-translate-y: 50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.tw--translate-y-\\[-50\\%\\]{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes tw--rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.tw--animate-rotate{animation:tw--rotate .5s linear infinite}@keyframes tw--text-spin{0%{transform:translate(18rem)}6.25%,12.5%{transform:translate(-.5rem)}18.75%,25%{transform:translate(-21.5rem)}31.25%,37.5%{transform:translate(-42.5rem)}43.75%,50%{transform:translate(-63.5rem)}56.25%,62.5%{transform:translate(-84.5rem)}68.75%,75%{transform:translate(-105.5rem)}81.25%,87.5%{transform:translate(-126.5rem)}93.75%,to{transform:translate(-147.5em)}}.tw--animate-text-spin{animation:tw--text-spin 30s linear infinite}.tw--animate-wave{animation:tw--wave 1.3s linear infinite}.tw--animate-wave-delay{animation:tw--wave 1.3s linear infinite -1.1s}@keyframes tw--wave{0%{transform:initial}60%{transform:initial}to{transform:initial}30%{transform:translateY(-15px)}}.tw--animate-wave-delay-2{animation:tw--wave 1.3s linear infinite -.9s}.tw--cursor-pointer{cursor:pointer}.tw--select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.tw--flex-row{flex-direction:row}.tw--flex-col{flex-direction:column}.tw--flex-col-reverse{flex-direction:column-reverse}.tw--flex-wrap{flex-wrap:wrap}.tw--items-end{align-items:flex-end}.tw--items-center{align-items:center}.tw--items-stretch{align-items:stretch}.tw--justify-center{justify-content:center}.tw--justify-between{justify-content:space-between}.tw--gap-2{gap:.5rem}.tw--space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.tw--space-x-\\[6px\\]>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(6px * var(--tw-space-x-reverse));margin-left:calc(6px * calc(1 - var(--tw-space-x-reverse)))}.tw--space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.tw--space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.25rem * var(--tw-space-y-reverse))}.tw--space-y-\\[10px\\]>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(10px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(10px * var(--tw-space-y-reverse))}.tw--space-y-\\[11px\\]>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(11px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(11px * var(--tw-space-y-reverse))}.tw--self-stretch{align-self:stretch}.tw--justify-self-start{justify-self:start}.tw--justify-self-end{justify-self:end}.tw--justify-self-stretch{justify-self:stretch}.tw--overflow-hidden{overflow:hidden}.tw--overflow-y-scroll{overflow-y:scroll}.tw--whitespace-pre-wrap{white-space:pre-wrap}.tw--break-words{overflow-wrap:break-word}.tw--rounded-3xl{border-radius:1.5rem}.tw--rounded-\\[20px\\]{border-radius:20px}.tw--rounded-full{border-radius:9999px}.tw--rounded-lg{border-radius:.5rem}.tw--rounded-xl{border-radius:.75rem}.tw--border{border-width:1px}.tw--border-0{border-width:0px}.tw--border-\\[5px\\]{border-width:5px}.tw--border-r{border-right-width:1px}.tw--border-solid{border-style:solid}.tw--border-glaze{border-color:var(--glaze)}.tw--border-zephyr-200{border-color:var(--zephyr-200)}.tw--border-l-zephyr-600{border-left-color:var(--zephyr-600)}.tw--border-r-\\[\\#cacadb\\]{--tw-border-opacity: 1;border-right-color:rgb(202 202 219 / var(--tw-border-opacity))}.tw--border-t-zephyr-600{border-top-color:var(--zephyr-600)}.tw--bg-\\[\\#0f0e1e\\]{--tw-bg-opacity: 1;background-color:rgb(15 14 30 / var(--tw-bg-opacity))}.tw--bg-\\[transparent\\]{background-color:transparent}.tw--bg-glaze{background-color:var(--glaze)}.tw--bg-glazeBg{background-color:var(--glazeBg)}.tw--bg-iota-dots{background-color:var(--iota-dots)}.tw--bg-loader{background-color:var(--loader)}.tw--bg-lumina{background-color:var(--lumina)}.tw--bg-neon{background-color:var(--neon)}.tw--bg-pale-dots{background-color:var(--pale-dots)}.tw--bg-seraph{background-color:var(--seraph)}.tw--bg-whisper{background-color:var(--whisper)}.tw--bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.tw--bg-zephyr-100{background-color:var(--zephyr-100)}.tw--bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.tw--from-\\[\\#FF0000\\]{--tw-gradient-from: #FF0000 var(--tw-gradient-from-position);--tw-gradient-to: rgb(255 0 0 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.tw--to-\\[\\#F25640\\]{--tw-gradient-to: #F25640 var(--tw-gradient-to-position)}.tw--p-0{padding:0}.tw--p-0\\.5{padding:.125rem}.tw--p-1{padding:.25rem}.tw--p-3{padding:.75rem}.tw--p-5{padding:1.25rem}.tw--p-7{padding:1.75rem}.tw--px-4{padding-left:1rem;padding-right:1rem}.tw--px-5{padding-left:1.25rem;padding-right:1.25rem}.tw--px-\\[15px\\]{padding-left:15px;padding-right:15px}.tw--py-2{padding-top:.5rem;padding-bottom:.5rem}.tw--py-3{padding-top:.75rem;padding-bottom:.75rem}.tw--py-4{padding-top:1rem;padding-bottom:1rem}.tw--py-\\[11px\\]{padding-top:11px;padding-bottom:11px}.tw--pb-1{padding-bottom:.25rem}.tw--pb-10{padding-bottom:2.5rem}.tw--pb-5{padding-bottom:1.25rem}.tw--pb-\\[11px\\]{padding-bottom:11px}.tw--pb-\\[30px\\]{padding-bottom:30px}.tw--pb-\\[5px\\]{padding-bottom:5px}.tw--pl-\\[10px\\]{padding-left:10px}.tw--pl-\\[35px\\]{padding-left:35px}.tw--pr-2{padding-right:.5rem}.tw--pr-\\[5px\\]{padding-right:5px}.tw--pt-10{padding-top:2.5rem}.tw--pt-5{padding-top:1.25rem}.tw--text-left{text-align:left}.tw--text-center{text-align:center}.tw--text-\\[10px\\]{font-size:10px}.tw--text-\\[12\\.8px\\]{font-size:12.8px}.tw--text-\\[16px\\]{font-size:16px}.tw--text-\\[20px\\]{font-size:20px}.tw--text-\\[24px\\]{font-size:24px}.tw--text-lg{font-size:1.125rem;line-height:1.75rem}.tw--text-sm{font-size:.875rem;line-height:1.25rem}.tw--text-xl,.tw--text-xl\\/7{font-size:1.25rem;line-height:1.75rem}.tw--font-bold{font-weight:700}.tw--font-density-different{font-weight:var(--density-different)}.tw--font-extrabold{font-weight:800}.tw--font-medium{font-weight:500}.tw--font-semibold{font-weight:600}.tw--leading-5{line-height:1.25rem}.tw--leading-\\[1\\.4\\]{line-height:1.4}.tw--leading-\\[1\\.56\\]{line-height:1.56}.tw--leading-\\[1\\.63\\]{line-height:1.63}.tw--leading-\\[1\\]{line-height:1}.tw--leading-\\[2\\]{line-height:2}.tw--leading-\\[30px\\]{line-height:30px}.tw--text-\\[\\#21bb5a\\]{--tw-text-opacity: 1;color:rgb(33 187 90 / var(--tw-text-opacity))}.tw--text-\\[\\#ff0043\\]{--tw-text-opacity: 1;color:rgb(255 0 67 / var(--tw-text-opacity))}.tw--text-dots{color:var(--dots)}.tw--text-glazeText{color:var(--glazeText)}.tw--text-muted-blue{color:#0f0e1e99}.tw--text-seraph{color:var(--seraph)}.tw--text-whisper{color:var(--whisper)}.tw--text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.tw--text-zephyr-100{color:var(--zephyr-100)}.tw--text-zephyr-600{color:var(--zephyr-600)}.tw--text-zephyr-800{color:var(--zephyr-800)}.tw--underline{text-decoration-line:underline}.tw--opacity-40{opacity:.4}.tw--opacity-60{opacity:.6}.tw--shadow-\\[-1px_2px_5px_0\\]{--tw-shadow: -1px 2px 5px 0;--tw-shadow-colored: -1px 2px 5px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-\\[0px_12px_24px_-4px_rgba\\(1\\,154\\,255\\,0\\.2\\)\\]{--tw-shadow: 0px 12px 24px -4px rgba(1,154,255,.2);--tw-shadow-colored: 0px 12px 24px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-card{--tw-shadow: 0 12px 24px 0 rgba(43, 49, 57, .06), 0 4px 8px 0 rgba(43, 55, 70, .04);--tw-shadow-colored: 0 12px 24px 0 var(--tw-shadow-color), 0 4px 8px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-loading-dots{--tw-shadow: -24px 0 rgba(201, 201, 201, .5), 24px 0 rgba(201, 201, 201, .5);--tw-shadow-colored: -24px 0 var(--tw-shadow-color), 24px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-zephyr-200{--tw-shadow-color: var(--zephyr-200);--tw-shadow: var(--tw-shadow-colored)}.tw--translate-z-0 *{transform:translateZ(0)}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.\\[key\\:string\\]{key:string}#chatbot-container *{font-family:inherit!important}.spaced-letters{letter-spacing:2px}.mt-8{margin-top:2rem}.mb-6{margin-bottom:1.5rem}.scroll-stop{overflow:hidden;position:fixed;left:0;right:0;top:0}span>p:last-child{display:inline;position:relative}.light{--lumina: #f0f2f5;--whisper: #ffffff;--seraph: #21bb5a;--ember: #cacadb;--enigma: #ffae19;--glaze: #21bb5a;--glazeText: #151226;--glazeBg: #ffffff;--sigma: #0f0e1e;--zeta: #0f0e1e;--status: #21bb5a;--loader: #f6f8fa;--dots: #21bb5a;--neon: #019aff;--pale-dots: #cacadb;--iota-dots: #21bb5a;--overlay: rgba(15, 14, 30, .2);--beta: #f6f8fa;--ze: 43, 49, 57;--zephyr-100: rgb(var(--ze));--zephyr-200: rgba(var(--ze), .1);--zephyr-600: rgba(var(--ze), .6);--zephyr-800: rgba(var(--ze), .8);--card: 0 12px 24px 0 rgba(43, 49, 57, .06), 0 4px 8px 0 rgba(43, 55, 70, .04);--loading-dots: -24px 0 rgba(201, 201, 201, .5), 24px 0 rgba(201, 201, 201, .5);--density-different: 500}.dark{--lumina: #252239;--whisper: #151226;--seraph: #f53373;--ember: #cacadb;--enigma: #ffae19;--glaze: #b3bac6;--glazeText: #151226;--glazeBg: #b3bac6;--sigma: #0f0e1e;--zeta: #ffffff;--status: #21bb5a;--loader: #252239;--dots: #f53374;--neon: #019aff;--pale-dots: #ffffff;--iota-dots: #21bb5a;--overlay: rgba(15, 14, 30, .9);--beta: #25223;--ze: 255, 255, 255;--zephyr-100: rgb(var(--ze));--zephyr-200: rgba(var(--ze), .1);--zephyr-600: rgba(var(--ze), .6);--zephyr-800: rgba(var(--ze), .8);--card: 0 12px 24px 0 rgba(0, 0, 0, .12), 0 4px 8px 0 rgba(0, 0, 0, .1);--loading-dots: -24px 0 rgba(255, 255, 255, .5), 24px 0 rgba(255, 255, 255, .5);--density-different: 400}ul,ol{list-style:auto;list-style-position:inside;display:flex;flex-direction:column}ul{list-style-position:inside;list-style-type:disc}li{padding:0;position:relative}li:last-child{width:-moz-fit-content;width:fit-content}li+li{margin-top:0}span:not(.after\\:tw--hidden) ol:last-child li:last-child:after,span:not(.after\\:tw--hidden) ul:last-child li:last-child:after,span:not(.after\\:tw--hidden) p:last-child:after{content:"";width:.25rem;height:1rem;display:inline-block;background:var(--zephyr-100);position:absolute;left:auto;bottom:4px}@keyframes tw--blink{0%{opacity:1}49%{opacity:1}50%{opacity:0}to{opacity:0}}span:not(.after\\:tw--hidden) ol:last-child li:last-child:after,span:not(.after\\:tw--hidden) ul:last-child li:last-child:after,span:not(.after\\:tw--hidden) p:last-child:after{animation:tw--blink .5s infinite}span:not(.after\\:tw--hidden):has(ol li):after,span:not(.after\\:tw--hidden):has(ul li):after,span:not(.after\\:tw--hidden):has(p:last-child):after{display:none}.after\\:tw--absolute:after{content:var(--tw-content);position:absolute}.after\\:tw--bottom-\\[-2px\\]:after{content:var(--tw-content);bottom:-2px}.after\\:tw--left-\\[37px\\]:after{content:var(--tw-content);left:37px}.after\\:tw--z-10:after{content:var(--tw-content);z-index:10}.after\\:tw--ml-1:after{content:var(--tw-content);margin-left:.25rem}.after\\:tw--inline-block:after{content:var(--tw-content);display:inline-block}.after\\:tw--hidden:after{content:var(--tw-content);display:none}.after\\:tw--h-4:after{content:var(--tw-content);height:1rem}.after\\:tw--h-\\[10px\\]:after{content:var(--tw-content);height:10px}.after\\:tw--w-1:after{content:var(--tw-content);width:.25rem}.after\\:tw--w-\\[10px\\]:after{content:var(--tw-content);width:10px}@keyframes tw--blink{0%{content:var(--tw-content);opacity:1}49%{content:var(--tw-content);opacity:1}50%{content:var(--tw-content);opacity:0}to{content:var(--tw-content);opacity:0}}.after\\:tw--animate-blink:after{content:var(--tw-content);animation:tw--blink .5s infinite}.after\\:tw--rounded-full:after{content:var(--tw-content);border-radius:9999px}.after\\:tw--bg-iota-dots:after{content:var(--tw-content);background-color:var(--iota-dots)}.after\\:tw--bg-zephyr-100:after{content:var(--tw-content);background-color:var(--zephyr-100)}.focus\\:\\!tw--bg-lumina:focus{background-color:var(--lumina)!important}.focus\\:tw--outline-none:focus{outline:2px solid transparent;outline-offset:2px}@media (min-width: 350px){.customXs\\:tw--max-w-xs{max-width:20rem}.customXs\\:tw--text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width: 768px){.md\\:tw--max-w-\\[800px\\]{max-width:800px}}')),document.body.appendChild(t)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import zt, { PureComponent as No, useState as It, useLayoutEffect as Fo, useEffect as Vt, forwardRef as fi, useRef as en } from "react";
import Do from "react-dom";
import { useDispatch as Uo, useSelector as $o, Provider as zo } from "react-redux";
import { createSlice as fr, configureStore as Vo, combineReducers as Wo } from "@reduxjs/toolkit";
import Go from "react-markdown";
import { persistReducer as qo, persistStore as Ho } from "redux-persist";
import { io as Yo } from "socket.io-client";
function Jo(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function o() {
      return this instanceof o ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(o) {
    var s = Object.getOwnPropertyDescriptor(e, o);
    Object.defineProperty(r, o, s.get ? s : {
      enumerable: !0,
      get: function() {
        return e[o];
      }
    });
  }), r;
}
var pe = {}, di = {}, dr = {};
dr.byteLength = Zo;
dr.toByteArray = es;
dr.fromByteArray = ns;
var Fe = [], ke = [], Ko = typeof Uint8Array < "u" ? Uint8Array : Array, Sr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var gt = 0, Xo = Sr.length; gt < Xo; ++gt)
  Fe[gt] = Sr[gt], ke[Sr.charCodeAt(gt)] = gt;
ke["-".charCodeAt(0)] = 62;
ke["_".charCodeAt(0)] = 63;
function pi(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = e.indexOf("=");
  r === -1 && (r = t);
  var o = r === t ? 0 : 4 - r % 4;
  return [r, o];
}
function Zo(e) {
  var t = pi(e), r = t[0], o = t[1];
  return (r + o) * 3 / 4 - o;
}
function Qo(e, t, r) {
  return (t + r) * 3 / 4 - r;
}
function es(e) {
  var t, r = pi(e), o = r[0], s = r[1], c = new Ko(Qo(e, o, s)), l = 0, a = s > 0 ? o - 4 : o, h;
  for (h = 0; h < a; h += 4)
    t = ke[e.charCodeAt(h)] << 18 | ke[e.charCodeAt(h + 1)] << 12 | ke[e.charCodeAt(h + 2)] << 6 | ke[e.charCodeAt(h + 3)], c[l++] = t >> 16 & 255, c[l++] = t >> 8 & 255, c[l++] = t & 255;
  return s === 2 && (t = ke[e.charCodeAt(h)] << 2 | ke[e.charCodeAt(h + 1)] >> 4, c[l++] = t & 255), s === 1 && (t = ke[e.charCodeAt(h)] << 10 | ke[e.charCodeAt(h + 1)] << 4 | ke[e.charCodeAt(h + 2)] >> 2, c[l++] = t >> 8 & 255, c[l++] = t & 255), c;
}
function ts(e) {
  return Fe[e >> 18 & 63] + Fe[e >> 12 & 63] + Fe[e >> 6 & 63] + Fe[e & 63];
}
function rs(e, t, r) {
  for (var o, s = [], c = t; c < r; c += 3)
    o = (e[c] << 16 & 16711680) + (e[c + 1] << 8 & 65280) + (e[c + 2] & 255), s.push(ts(o));
  return s.join("");
}
function ns(e) {
  for (var t, r = e.length, o = r % 3, s = [], c = 16383, l = 0, a = r - o; l < a; l += c)
    s.push(rs(e, l, l + c > a ? a : l + c));
  return o === 1 ? (t = e[r - 1], s.push(
    Fe[t >> 2] + Fe[t << 4 & 63] + "=="
  )) : o === 2 && (t = (e[r - 2] << 8) + e[r - 1], s.push(
    Fe[t >> 10] + Fe[t >> 4 & 63] + Fe[t << 2 & 63] + "="
  )), s.join("");
}
var tn = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
tn.read = function(e, t, r, o, s) {
  var c, l, a = s * 8 - o - 1, h = (1 << a) - 1, b = h >> 1, m = -7, v = r ? s - 1 : 0, E = r ? -1 : 1, T = e[t + v];
  for (v += E, c = T & (1 << -m) - 1, T >>= -m, m += a; m > 0; c = c * 256 + e[t + v], v += E, m -= 8)
    ;
  for (l = c & (1 << -m) - 1, c >>= -m, m += o; m > 0; l = l * 256 + e[t + v], v += E, m -= 8)
    ;
  if (c === 0)
    c = 1 - b;
  else {
    if (c === h)
      return l ? NaN : (T ? -1 : 1) * (1 / 0);
    l = l + Math.pow(2, o), c = c - b;
  }
  return (T ? -1 : 1) * l * Math.pow(2, c - o);
};
tn.write = function(e, t, r, o, s, c) {
  var l, a, h, b = c * 8 - s - 1, m = (1 << b) - 1, v = m >> 1, E = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, T = o ? 0 : c - 1, A = o ? 1 : -1, P = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, l = m) : (l = Math.floor(Math.log(t) / Math.LN2), t * (h = Math.pow(2, -l)) < 1 && (l--, h *= 2), l + v >= 1 ? t += E / h : t += E * Math.pow(2, 1 - v), t * h >= 2 && (l++, h /= 2), l + v >= m ? (a = 0, l = m) : l + v >= 1 ? (a = (t * h - 1) * Math.pow(2, s), l = l + v) : (a = t * Math.pow(2, v - 1) * Math.pow(2, s), l = 0)); s >= 8; e[r + T] = a & 255, T += A, a /= 256, s -= 8)
    ;
  for (l = l << s | a, b += s; b > 0; e[r + T] = l & 255, T += A, l /= 256, b -= 8)
    ;
  e[r + T - A] |= P * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  const t = dr, r = tn, o = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = a, e.SlowBuffer = F, e.INSPECT_MAX_BYTES = 50;
  const s = 2147483647;
  e.kMaxLength = s, a.TYPED_ARRAY_SUPPORT = c(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function c() {
    try {
      const u = new Uint8Array(1), n = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(n, Uint8Array.prototype), Object.setPrototypeOf(u, n), u.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(a.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (a.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(a.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (a.isBuffer(this))
        return this.byteOffset;
    }
  });
  function l(u) {
    if (u > s)
      throw new RangeError('The value "' + u + '" is invalid for option "size"');
    const n = new Uint8Array(u);
    return Object.setPrototypeOf(n, a.prototype), n;
  }
  function a(u, n, i) {
    if (typeof u == "number") {
      if (typeof n == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return v(u);
    }
    return h(u, n, i);
  }
  a.poolSize = 8192;
  function h(u, n, i) {
    if (typeof u == "string")
      return E(u, n);
    if (ArrayBuffer.isView(u))
      return A(u);
    if (u == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof u
      );
    if (ve(u, ArrayBuffer) || u && ve(u.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (ve(u, SharedArrayBuffer) || u && ve(u.buffer, SharedArrayBuffer)))
      return P(u, n, i);
    if (typeof u == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const f = u.valueOf && u.valueOf();
    if (f != null && f !== u)
      return a.from(f, n, i);
    const p = ne(u);
    if (p)
      return p;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof u[Symbol.toPrimitive] == "function")
      return a.from(u[Symbol.toPrimitive]("string"), n, i);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof u
    );
  }
  a.from = function(u, n, i) {
    return h(u, n, i);
  }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array);
  function b(u) {
    if (typeof u != "number")
      throw new TypeError('"size" argument must be of type number');
    if (u < 0)
      throw new RangeError('The value "' + u + '" is invalid for option "size"');
  }
  function m(u, n, i) {
    return b(u), u <= 0 ? l(u) : n !== void 0 ? typeof i == "string" ? l(u).fill(n, i) : l(u).fill(n) : l(u);
  }
  a.alloc = function(u, n, i) {
    return m(u, n, i);
  };
  function v(u) {
    return b(u), l(u < 0 ? 0 : j(u) | 0);
  }
  a.allocUnsafe = function(u) {
    return v(u);
  }, a.allocUnsafeSlow = function(u) {
    return v(u);
  };
  function E(u, n) {
    if ((typeof n != "string" || n === "") && (n = "utf8"), !a.isEncoding(n))
      throw new TypeError("Unknown encoding: " + n);
    const i = Z(u, n) | 0;
    let f = l(i);
    const p = f.write(u, n);
    return p !== i && (f = f.slice(0, p)), f;
  }
  function T(u) {
    const n = u.length < 0 ? 0 : j(u.length) | 0, i = l(n);
    for (let f = 0; f < n; f += 1)
      i[f] = u[f] & 255;
    return i;
  }
  function A(u) {
    if (ve(u, Uint8Array)) {
      const n = new Uint8Array(u);
      return P(n.buffer, n.byteOffset, n.byteLength);
    }
    return T(u);
  }
  function P(u, n, i) {
    if (n < 0 || u.byteLength < n)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (u.byteLength < n + (i || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let f;
    return n === void 0 && i === void 0 ? f = new Uint8Array(u) : i === void 0 ? f = new Uint8Array(u, n) : f = new Uint8Array(u, n, i), Object.setPrototypeOf(f, a.prototype), f;
  }
  function ne(u) {
    if (a.isBuffer(u)) {
      const n = j(u.length) | 0, i = l(n);
      return i.length === 0 || u.copy(i, 0, 0, n), i;
    }
    if (u.length !== void 0)
      return typeof u.length != "number" || jt(u.length) ? l(0) : T(u);
    if (u.type === "Buffer" && Array.isArray(u.data))
      return T(u.data);
  }
  function j(u) {
    if (u >= s)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
    return u | 0;
  }
  function F(u) {
    return +u != u && (u = 0), a.alloc(+u);
  }
  a.isBuffer = function(n) {
    return n != null && n._isBuffer === !0 && n !== a.prototype;
  }, a.compare = function(n, i) {
    if (ve(n, Uint8Array) && (n = a.from(n, n.offset, n.byteLength)), ve(i, Uint8Array) && (i = a.from(i, i.offset, i.byteLength)), !a.isBuffer(n) || !a.isBuffer(i))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (n === i)
      return 0;
    let f = n.length, p = i.length;
    for (let w = 0, g = Math.min(f, p); w < g; ++w)
      if (n[w] !== i[w]) {
        f = n[w], p = i[w];
        break;
      }
    return f < p ? -1 : p < f ? 1 : 0;
  }, a.isEncoding = function(n) {
    switch (String(n).toLowerCase()) {
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
  }, a.concat = function(n, i) {
    if (!Array.isArray(n))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (n.length === 0)
      return a.alloc(0);
    let f;
    if (i === void 0)
      for (i = 0, f = 0; f < n.length; ++f)
        i += n[f].length;
    const p = a.allocUnsafe(i);
    let w = 0;
    for (f = 0; f < n.length; ++f) {
      let g = n[f];
      if (ve(g, Uint8Array))
        w + g.length > p.length ? (a.isBuffer(g) || (g = a.from(g)), g.copy(p, w)) : Uint8Array.prototype.set.call(
          p,
          g,
          w
        );
      else if (a.isBuffer(g))
        g.copy(p, w);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      w += g.length;
    }
    return p;
  };
  function Z(u, n) {
    if (a.isBuffer(u))
      return u.length;
    if (ArrayBuffer.isView(u) || ve(u, ArrayBuffer))
      return u.byteLength;
    if (typeof u != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof u
      );
    const i = u.length, f = arguments.length > 2 && arguments[2] === !0;
    if (!f && i === 0)
      return 0;
    let p = !1;
    for (; ; )
      switch (n) {
        case "ascii":
        case "latin1":
        case "binary":
          return i;
        case "utf8":
        case "utf-8":
          return pt(u).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return i * 2;
        case "hex":
          return i >>> 1;
        case "base64":
          return Ht(u).length;
        default:
          if (p)
            return f ? -1 : pt(u).length;
          n = ("" + n).toLowerCase(), p = !0;
      }
  }
  a.byteLength = Z;
  function ye(u, n, i) {
    let f = !1;
    if ((n === void 0 || n < 0) && (n = 0), n > this.length || ((i === void 0 || i > this.length) && (i = this.length), i <= 0) || (i >>>= 0, n >>>= 0, i <= n))
      return "";
    for (u || (u = "utf8"); ; )
      switch (u) {
        case "hex":
          return q(this, n, i);
        case "utf8":
        case "utf-8":
          return I(this, n, i);
        case "ascii":
          return D(this, n, i);
        case "latin1":
        case "binary":
          return V(this, n, i);
        case "base64":
          return C(this, n, i);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ie(this, n, i);
        default:
          if (f)
            throw new TypeError("Unknown encoding: " + u);
          u = (u + "").toLowerCase(), f = !0;
      }
  }
  a.prototype._isBuffer = !0;
  function R(u, n, i) {
    const f = u[n];
    u[n] = u[i], u[i] = f;
  }
  a.prototype.swap16 = function() {
    const n = this.length;
    if (n % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let i = 0; i < n; i += 2)
      R(this, i, i + 1);
    return this;
  }, a.prototype.swap32 = function() {
    const n = this.length;
    if (n % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let i = 0; i < n; i += 4)
      R(this, i, i + 3), R(this, i + 1, i + 2);
    return this;
  }, a.prototype.swap64 = function() {
    const n = this.length;
    if (n % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let i = 0; i < n; i += 8)
      R(this, i, i + 7), R(this, i + 1, i + 6), R(this, i + 2, i + 5), R(this, i + 3, i + 4);
    return this;
  }, a.prototype.toString = function() {
    const n = this.length;
    return n === 0 ? "" : arguments.length === 0 ? I(this, 0, n) : ye.apply(this, arguments);
  }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(n) {
    if (!a.isBuffer(n))
      throw new TypeError("Argument must be a Buffer");
    return this === n ? !0 : a.compare(this, n) === 0;
  }, a.prototype.inspect = function() {
    let n = "";
    const i = e.INSPECT_MAX_BYTES;
    return n = this.toString("hex", 0, i).replace(/(.{2})/g, "$1 ").trim(), this.length > i && (n += " ... "), "<Buffer " + n + ">";
  }, o && (a.prototype[o] = a.prototype.inspect), a.prototype.compare = function(n, i, f, p, w) {
    if (ve(n, Uint8Array) && (n = a.from(n, n.offset, n.byteLength)), !a.isBuffer(n))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof n
      );
    if (i === void 0 && (i = 0), f === void 0 && (f = n ? n.length : 0), p === void 0 && (p = 0), w === void 0 && (w = this.length), i < 0 || f > n.length || p < 0 || w > this.length)
      throw new RangeError("out of range index");
    if (p >= w && i >= f)
      return 0;
    if (p >= w)
      return -1;
    if (i >= f)
      return 1;
    if (i >>>= 0, f >>>= 0, p >>>= 0, w >>>= 0, this === n)
      return 0;
    let g = w - p, L = f - i;
    const te = Math.min(g, L), K = this.slice(p, w), re = n.slice(i, f);
    for (let H = 0; H < te; ++H)
      if (K[H] !== re[H]) {
        g = K[H], L = re[H];
        break;
      }
    return g < L ? -1 : L < g ? 1 : 0;
  };
  function me(u, n, i, f, p) {
    if (u.length === 0)
      return -1;
    if (typeof i == "string" ? (f = i, i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648), i = +i, jt(i) && (i = p ? 0 : u.length - 1), i < 0 && (i = u.length + i), i >= u.length) {
      if (p)
        return -1;
      i = u.length - 1;
    } else if (i < 0)
      if (p)
        i = 0;
      else
        return -1;
    if (typeof n == "string" && (n = a.from(n, f)), a.isBuffer(n))
      return n.length === 0 ? -1 : ge(u, n, i, f, p);
    if (typeof n == "number")
      return n = n & 255, typeof Uint8Array.prototype.indexOf == "function" ? p ? Uint8Array.prototype.indexOf.call(u, n, i) : Uint8Array.prototype.lastIndexOf.call(u, n, i) : ge(u, [n], i, f, p);
    throw new TypeError("val must be string, number or Buffer");
  }
  function ge(u, n, i, f, p) {
    let w = 1, g = u.length, L = n.length;
    if (f !== void 0 && (f = String(f).toLowerCase(), f === "ucs2" || f === "ucs-2" || f === "utf16le" || f === "utf-16le")) {
      if (u.length < 2 || n.length < 2)
        return -1;
      w = 2, g /= 2, L /= 2, i /= 2;
    }
    function te(re, H) {
      return w === 1 ? re[H] : re.readUInt16BE(H * w);
    }
    let K;
    if (p) {
      let re = -1;
      for (K = i; K < g; K++)
        if (te(u, K) === te(n, re === -1 ? 0 : K - re)) {
          if (re === -1 && (re = K), K - re + 1 === L)
            return re * w;
        } else
          re !== -1 && (K -= K - re), re = -1;
    } else
      for (i + L > g && (i = g - L), K = i; K >= 0; K--) {
        let re = !0;
        for (let H = 0; H < L; H++)
          if (te(u, K + H) !== te(n, H)) {
            re = !1;
            break;
          }
        if (re)
          return K;
      }
    return -1;
  }
  a.prototype.includes = function(n, i, f) {
    return this.indexOf(n, i, f) !== -1;
  }, a.prototype.indexOf = function(n, i, f) {
    return me(this, n, i, f, !0);
  }, a.prototype.lastIndexOf = function(n, i, f) {
    return me(this, n, i, f, !1);
  };
  function Te(u, n, i, f) {
    i = Number(i) || 0;
    const p = u.length - i;
    f ? (f = Number(f), f > p && (f = p)) : f = p;
    const w = n.length;
    f > w / 2 && (f = w / 2);
    let g;
    for (g = 0; g < f; ++g) {
      const L = parseInt(n.substr(g * 2, 2), 16);
      if (jt(L))
        return g;
      u[i + g] = L;
    }
    return g;
  }
  function xe(u, n, i, f) {
    return mt(pt(n, u.length - i), u, i, f);
  }
  function je(u, n, i, f) {
    return mt(qt(n), u, i, f);
  }
  function he(u, n, i, f) {
    return mt(Ht(n), u, i, f);
  }
  function S(u, n, i, f) {
    return mt(ht(n, u.length - i), u, i, f);
  }
  a.prototype.write = function(n, i, f, p) {
    if (i === void 0)
      p = "utf8", f = this.length, i = 0;
    else if (f === void 0 && typeof i == "string")
      p = i, f = this.length, i = 0;
    else if (isFinite(i))
      i = i >>> 0, isFinite(f) ? (f = f >>> 0, p === void 0 && (p = "utf8")) : (p = f, f = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const w = this.length - i;
    if ((f === void 0 || f > w) && (f = w), n.length > 0 && (f < 0 || i < 0) || i > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    p || (p = "utf8");
    let g = !1;
    for (; ; )
      switch (p) {
        case "hex":
          return Te(this, n, i, f);
        case "utf8":
        case "utf-8":
          return xe(this, n, i, f);
        case "ascii":
        case "latin1":
        case "binary":
          return je(this, n, i, f);
        case "base64":
          return he(this, n, i, f);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return S(this, n, i, f);
        default:
          if (g)
            throw new TypeError("Unknown encoding: " + p);
          p = ("" + p).toLowerCase(), g = !0;
      }
  }, a.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function C(u, n, i) {
    return n === 0 && i === u.length ? t.fromByteArray(u) : t.fromByteArray(u.slice(n, i));
  }
  function I(u, n, i) {
    i = Math.min(u.length, i);
    const f = [];
    let p = n;
    for (; p < i; ) {
      const w = u[p];
      let g = null, L = w > 239 ? 4 : w > 223 ? 3 : w > 191 ? 2 : 1;
      if (p + L <= i) {
        let te, K, re, H;
        switch (L) {
          case 1:
            w < 128 && (g = w);
            break;
          case 2:
            te = u[p + 1], (te & 192) === 128 && (H = (w & 31) << 6 | te & 63, H > 127 && (g = H));
            break;
          case 3:
            te = u[p + 1], K = u[p + 2], (te & 192) === 128 && (K & 192) === 128 && (H = (w & 15) << 12 | (te & 63) << 6 | K & 63, H > 2047 && (H < 55296 || H > 57343) && (g = H));
            break;
          case 4:
            te = u[p + 1], K = u[p + 2], re = u[p + 3], (te & 192) === 128 && (K & 192) === 128 && (re & 192) === 128 && (H = (w & 15) << 18 | (te & 63) << 12 | (K & 63) << 6 | re & 63, H > 65535 && H < 1114112 && (g = H));
        }
      }
      g === null ? (g = 65533, L = 1) : g > 65535 && (g -= 65536, f.push(g >>> 10 & 1023 | 55296), g = 56320 | g & 1023), f.push(g), p += L;
    }
    return M(f);
  }
  const B = 4096;
  function M(u) {
    const n = u.length;
    if (n <= B)
      return String.fromCharCode.apply(String, u);
    let i = "", f = 0;
    for (; f < n; )
      i += String.fromCharCode.apply(
        String,
        u.slice(f, f += B)
      );
    return i;
  }
  function D(u, n, i) {
    let f = "";
    i = Math.min(u.length, i);
    for (let p = n; p < i; ++p)
      f += String.fromCharCode(u[p] & 127);
    return f;
  }
  function V(u, n, i) {
    let f = "";
    i = Math.min(u.length, i);
    for (let p = n; p < i; ++p)
      f += String.fromCharCode(u[p]);
    return f;
  }
  function q(u, n, i) {
    const f = u.length;
    (!n || n < 0) && (n = 0), (!i || i < 0 || i > f) && (i = f);
    let p = "";
    for (let w = n; w < i; ++w)
      p += br[u[w]];
    return p;
  }
  function ie(u, n, i) {
    const f = u.slice(n, i);
    let p = "";
    for (let w = 0; w < f.length - 1; w += 2)
      p += String.fromCharCode(f[w] + f[w + 1] * 256);
    return p;
  }
  a.prototype.slice = function(n, i) {
    const f = this.length;
    n = ~~n, i = i === void 0 ? f : ~~i, n < 0 ? (n += f, n < 0 && (n = 0)) : n > f && (n = f), i < 0 ? (i += f, i < 0 && (i = 0)) : i > f && (i = f), i < n && (i = n);
    const p = this.subarray(n, i);
    return Object.setPrototypeOf(p, a.prototype), p;
  };
  function $(u, n, i) {
    if (u % 1 !== 0 || u < 0)
      throw new RangeError("offset is not uint");
    if (u + n > i)
      throw new RangeError("Trying to access beyond buffer length");
  }
  a.prototype.readUintLE = a.prototype.readUIntLE = function(n, i, f) {
    n = n >>> 0, i = i >>> 0, f || $(n, i, this.length);
    let p = this[n], w = 1, g = 0;
    for (; ++g < i && (w *= 256); )
      p += this[n + g] * w;
    return p;
  }, a.prototype.readUintBE = a.prototype.readUIntBE = function(n, i, f) {
    n = n >>> 0, i = i >>> 0, f || $(n, i, this.length);
    let p = this[n + --i], w = 1;
    for (; i > 0 && (w *= 256); )
      p += this[n + --i] * w;
    return p;
  }, a.prototype.readUint8 = a.prototype.readUInt8 = function(n, i) {
    return n = n >>> 0, i || $(n, 1, this.length), this[n];
  }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(n, i) {
    return n = n >>> 0, i || $(n, 2, this.length), this[n] | this[n + 1] << 8;
  }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(n, i) {
    return n = n >>> 0, i || $(n, 2, this.length), this[n] << 8 | this[n + 1];
  }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(n, i) {
    return n = n >>> 0, i || $(n, 4, this.length), (this[n] | this[n + 1] << 8 | this[n + 2] << 16) + this[n + 3] * 16777216;
  }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(n, i) {
    return n = n >>> 0, i || $(n, 4, this.length), this[n] * 16777216 + (this[n + 1] << 16 | this[n + 2] << 8 | this[n + 3]);
  }, a.prototype.readBigUInt64LE = Le(function(n) {
    n = n >>> 0, He(n, "offset");
    const i = this[n], f = this[n + 7];
    (i === void 0 || f === void 0) && et(n, this.length - 8);
    const p = i + this[++n] * 2 ** 8 + this[++n] * 2 ** 16 + this[++n] * 2 ** 24, w = this[++n] + this[++n] * 2 ** 8 + this[++n] * 2 ** 16 + f * 2 ** 24;
    return BigInt(p) + (BigInt(w) << BigInt(32));
  }), a.prototype.readBigUInt64BE = Le(function(n) {
    n = n >>> 0, He(n, "offset");
    const i = this[n], f = this[n + 7];
    (i === void 0 || f === void 0) && et(n, this.length - 8);
    const p = i * 2 ** 24 + this[++n] * 2 ** 16 + this[++n] * 2 ** 8 + this[++n], w = this[++n] * 2 ** 24 + this[++n] * 2 ** 16 + this[++n] * 2 ** 8 + f;
    return (BigInt(p) << BigInt(32)) + BigInt(w);
  }), a.prototype.readIntLE = function(n, i, f) {
    n = n >>> 0, i = i >>> 0, f || $(n, i, this.length);
    let p = this[n], w = 1, g = 0;
    for (; ++g < i && (w *= 256); )
      p += this[n + g] * w;
    return w *= 128, p >= w && (p -= Math.pow(2, 8 * i)), p;
  }, a.prototype.readIntBE = function(n, i, f) {
    n = n >>> 0, i = i >>> 0, f || $(n, i, this.length);
    let p = i, w = 1, g = this[n + --p];
    for (; p > 0 && (w *= 256); )
      g += this[n + --p] * w;
    return w *= 128, g >= w && (g -= Math.pow(2, 8 * i)), g;
  }, a.prototype.readInt8 = function(n, i) {
    return n = n >>> 0, i || $(n, 1, this.length), this[n] & 128 ? (255 - this[n] + 1) * -1 : this[n];
  }, a.prototype.readInt16LE = function(n, i) {
    n = n >>> 0, i || $(n, 2, this.length);
    const f = this[n] | this[n + 1] << 8;
    return f & 32768 ? f | 4294901760 : f;
  }, a.prototype.readInt16BE = function(n, i) {
    n = n >>> 0, i || $(n, 2, this.length);
    const f = this[n + 1] | this[n] << 8;
    return f & 32768 ? f | 4294901760 : f;
  }, a.prototype.readInt32LE = function(n, i) {
    return n = n >>> 0, i || $(n, 4, this.length), this[n] | this[n + 1] << 8 | this[n + 2] << 16 | this[n + 3] << 24;
  }, a.prototype.readInt32BE = function(n, i) {
    return n = n >>> 0, i || $(n, 4, this.length), this[n] << 24 | this[n + 1] << 16 | this[n + 2] << 8 | this[n + 3];
  }, a.prototype.readBigInt64LE = Le(function(n) {
    n = n >>> 0, He(n, "offset");
    const i = this[n], f = this[n + 7];
    (i === void 0 || f === void 0) && et(n, this.length - 8);
    const p = this[n + 4] + this[n + 5] * 2 ** 8 + this[n + 6] * 2 ** 16 + (f << 24);
    return (BigInt(p) << BigInt(32)) + BigInt(i + this[++n] * 2 ** 8 + this[++n] * 2 ** 16 + this[++n] * 2 ** 24);
  }), a.prototype.readBigInt64BE = Le(function(n) {
    n = n >>> 0, He(n, "offset");
    const i = this[n], f = this[n + 7];
    (i === void 0 || f === void 0) && et(n, this.length - 8);
    const p = (i << 24) + // Overflow
    this[++n] * 2 ** 16 + this[++n] * 2 ** 8 + this[++n];
    return (BigInt(p) << BigInt(32)) + BigInt(this[++n] * 2 ** 24 + this[++n] * 2 ** 16 + this[++n] * 2 ** 8 + f);
  }), a.prototype.readFloatLE = function(n, i) {
    return n = n >>> 0, i || $(n, 4, this.length), r.read(this, n, !0, 23, 4);
  }, a.prototype.readFloatBE = function(n, i) {
    return n = n >>> 0, i || $(n, 4, this.length), r.read(this, n, !1, 23, 4);
  }, a.prototype.readDoubleLE = function(n, i) {
    return n = n >>> 0, i || $(n, 8, this.length), r.read(this, n, !0, 52, 8);
  }, a.prototype.readDoubleBE = function(n, i) {
    return n = n >>> 0, i || $(n, 8, this.length), r.read(this, n, !1, 52, 8);
  };
  function W(u, n, i, f, p, w) {
    if (!a.isBuffer(u))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (n > p || n < w)
      throw new RangeError('"value" argument is out of bounds');
    if (i + f > u.length)
      throw new RangeError("Index out of range");
  }
  a.prototype.writeUintLE = a.prototype.writeUIntLE = function(n, i, f, p) {
    if (n = +n, i = i >>> 0, f = f >>> 0, !p) {
      const L = Math.pow(2, 8 * f) - 1;
      W(this, n, i, f, L, 0);
    }
    let w = 1, g = 0;
    for (this[i] = n & 255; ++g < f && (w *= 256); )
      this[i + g] = n / w & 255;
    return i + f;
  }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(n, i, f, p) {
    if (n = +n, i = i >>> 0, f = f >>> 0, !p) {
      const L = Math.pow(2, 8 * f) - 1;
      W(this, n, i, f, L, 0);
    }
    let w = f - 1, g = 1;
    for (this[i + w] = n & 255; --w >= 0 && (g *= 256); )
      this[i + w] = n / g & 255;
    return i + f;
  }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(n, i, f) {
    return n = +n, i = i >>> 0, f || W(this, n, i, 1, 255, 0), this[i] = n & 255, i + 1;
  }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(n, i, f) {
    return n = +n, i = i >>> 0, f || W(this, n, i, 2, 65535, 0), this[i] = n & 255, this[i + 1] = n >>> 8, i + 2;
  }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(n, i, f) {
    return n = +n, i = i >>> 0, f || W(this, n, i, 2, 65535, 0), this[i] = n >>> 8, this[i + 1] = n & 255, i + 2;
  }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(n, i, f) {
    return n = +n, i = i >>> 0, f || W(this, n, i, 4, 4294967295, 0), this[i + 3] = n >>> 24, this[i + 2] = n >>> 16, this[i + 1] = n >>> 8, this[i] = n & 255, i + 4;
  }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(n, i, f) {
    return n = +n, i = i >>> 0, f || W(this, n, i, 4, 4294967295, 0), this[i] = n >>> 24, this[i + 1] = n >>> 16, this[i + 2] = n >>> 8, this[i + 3] = n & 255, i + 4;
  };
  function oe(u, n, i, f, p) {
    kt(n, f, p, u, i, 7);
    let w = Number(n & BigInt(4294967295));
    u[i++] = w, w = w >> 8, u[i++] = w, w = w >> 8, u[i++] = w, w = w >> 8, u[i++] = w;
    let g = Number(n >> BigInt(32) & BigInt(4294967295));
    return u[i++] = g, g = g >> 8, u[i++] = g, g = g >> 8, u[i++] = g, g = g >> 8, u[i++] = g, i;
  }
  function Ge(u, n, i, f, p) {
    kt(n, f, p, u, i, 7);
    let w = Number(n & BigInt(4294967295));
    u[i + 7] = w, w = w >> 8, u[i + 6] = w, w = w >> 8, u[i + 5] = w, w = w >> 8, u[i + 4] = w;
    let g = Number(n >> BigInt(32) & BigInt(4294967295));
    return u[i + 3] = g, g = g >> 8, u[i + 2] = g, g = g >> 8, u[i + 1] = g, g = g >> 8, u[i] = g, i + 8;
  }
  a.prototype.writeBigUInt64LE = Le(function(n, i = 0) {
    return oe(this, n, i, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeBigUInt64BE = Le(function(n, i = 0) {
    return Ge(this, n, i, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeIntLE = function(n, i, f, p) {
    if (n = +n, i = i >>> 0, !p) {
      const te = Math.pow(2, 8 * f - 1);
      W(this, n, i, f, te - 1, -te);
    }
    let w = 0, g = 1, L = 0;
    for (this[i] = n & 255; ++w < f && (g *= 256); )
      n < 0 && L === 0 && this[i + w - 1] !== 0 && (L = 1), this[i + w] = (n / g >> 0) - L & 255;
    return i + f;
  }, a.prototype.writeIntBE = function(n, i, f, p) {
    if (n = +n, i = i >>> 0, !p) {
      const te = Math.pow(2, 8 * f - 1);
      W(this, n, i, f, te - 1, -te);
    }
    let w = f - 1, g = 1, L = 0;
    for (this[i + w] = n & 255; --w >= 0 && (g *= 256); )
      n < 0 && L === 0 && this[i + w + 1] !== 0 && (L = 1), this[i + w] = (n / g >> 0) - L & 255;
    return i + f;
  }, a.prototype.writeInt8 = function(n, i, f) {
    return n = +n, i = i >>> 0, f || W(this, n, i, 1, 127, -128), n < 0 && (n = 255 + n + 1), this[i] = n & 255, i + 1;
  }, a.prototype.writeInt16LE = function(n, i, f) {
    return n = +n, i = i >>> 0, f || W(this, n, i, 2, 32767, -32768), this[i] = n & 255, this[i + 1] = n >>> 8, i + 2;
  }, a.prototype.writeInt16BE = function(n, i, f) {
    return n = +n, i = i >>> 0, f || W(this, n, i, 2, 32767, -32768), this[i] = n >>> 8, this[i + 1] = n & 255, i + 2;
  }, a.prototype.writeInt32LE = function(n, i, f) {
    return n = +n, i = i >>> 0, f || W(this, n, i, 4, 2147483647, -2147483648), this[i] = n & 255, this[i + 1] = n >>> 8, this[i + 2] = n >>> 16, this[i + 3] = n >>> 24, i + 4;
  }, a.prototype.writeInt32BE = function(n, i, f) {
    return n = +n, i = i >>> 0, f || W(this, n, i, 4, 2147483647, -2147483648), n < 0 && (n = 4294967295 + n + 1), this[i] = n >>> 24, this[i + 1] = n >>> 16, this[i + 2] = n >>> 8, this[i + 3] = n & 255, i + 4;
  }, a.prototype.writeBigInt64LE = Le(function(n, i = 0) {
    return oe(this, n, i, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), a.prototype.writeBigInt64BE = Le(function(n, i = 0) {
    return Ge(this, n, i, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function Xe(u, n, i, f, p, w) {
    if (i + f > u.length)
      throw new RangeError("Index out of range");
    if (i < 0)
      throw new RangeError("Index out of range");
  }
  function qe(u, n, i, f, p) {
    return n = +n, i = i >>> 0, p || Xe(u, n, i, 4), r.write(u, n, i, f, 23, 4), i + 4;
  }
  a.prototype.writeFloatLE = function(n, i, f) {
    return qe(this, n, i, !0, f);
  }, a.prototype.writeFloatBE = function(n, i, f) {
    return qe(this, n, i, !1, f);
  };
  function lt(u, n, i, f, p) {
    return n = +n, i = i >>> 0, p || Xe(u, n, i, 8), r.write(u, n, i, f, 52, 8), i + 8;
  }
  a.prototype.writeDoubleLE = function(n, i, f) {
    return lt(this, n, i, !0, f);
  }, a.prototype.writeDoubleBE = function(n, i, f) {
    return lt(this, n, i, !1, f);
  }, a.prototype.copy = function(n, i, f, p) {
    if (!a.isBuffer(n))
      throw new TypeError("argument should be a Buffer");
    if (f || (f = 0), !p && p !== 0 && (p = this.length), i >= n.length && (i = n.length), i || (i = 0), p > 0 && p < f && (p = f), p === f || n.length === 0 || this.length === 0)
      return 0;
    if (i < 0)
      throw new RangeError("targetStart out of bounds");
    if (f < 0 || f >= this.length)
      throw new RangeError("Index out of range");
    if (p < 0)
      throw new RangeError("sourceEnd out of bounds");
    p > this.length && (p = this.length), n.length - i < p - f && (p = n.length - i + f);
    const w = p - f;
    return this === n && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(i, f, p) : Uint8Array.prototype.set.call(
      n,
      this.subarray(f, p),
      i
    ), w;
  }, a.prototype.fill = function(n, i, f, p) {
    if (typeof n == "string") {
      if (typeof i == "string" ? (p = i, i = 0, f = this.length) : typeof f == "string" && (p = f, f = this.length), p !== void 0 && typeof p != "string")
        throw new TypeError("encoding must be a string");
      if (typeof p == "string" && !a.isEncoding(p))
        throw new TypeError("Unknown encoding: " + p);
      if (n.length === 1) {
        const g = n.charCodeAt(0);
        (p === "utf8" && g < 128 || p === "latin1") && (n = g);
      }
    } else
      typeof n == "number" ? n = n & 255 : typeof n == "boolean" && (n = Number(n));
    if (i < 0 || this.length < i || this.length < f)
      throw new RangeError("Out of range index");
    if (f <= i)
      return this;
    i = i >>> 0, f = f === void 0 ? this.length : f >>> 0, n || (n = 0);
    let w;
    if (typeof n == "number")
      for (w = i; w < f; ++w)
        this[w] = n;
    else {
      const g = a.isBuffer(n) ? n : a.from(n, p), L = g.length;
      if (L === 0)
        throw new TypeError('The value "' + n + '" is invalid for argument "value"');
      for (w = 0; w < f - i; ++w)
        this[w + i] = g[w % L];
    }
    return this;
  };
  const Re = {};
  function Ze(u, n, i) {
    Re[u] = class extends i {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: n.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${u}]`, this.stack, delete this.name;
      }
      get code() {
        return u;
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
        return `${this.name} [${u}]: ${this.message}`;
      }
    };
  }
  Ze(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(u) {
      return u ? `${u} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), Ze(
    "ERR_INVALID_ARG_TYPE",
    function(u, n) {
      return `The "${u}" argument must be of type number. Received type ${typeof n}`;
    },
    TypeError
  ), Ze(
    "ERR_OUT_OF_RANGE",
    function(u, n, i) {
      let f = `The value of "${u}" is out of range.`, p = i;
      return Number.isInteger(i) && Math.abs(i) > 2 ** 32 ? p = Qe(String(i)) : typeof i == "bigint" && (p = String(i), (i > BigInt(2) ** BigInt(32) || i < -(BigInt(2) ** BigInt(32))) && (p = Qe(p)), p += "n"), f += ` It must be ${n}. Received ${p}`, f;
    },
    RangeError
  );
  function Qe(u) {
    let n = "", i = u.length;
    const f = u[0] === "-" ? 1 : 0;
    for (; i >= f + 4; i -= 3)
      n = `_${u.slice(i - 3, i)}${n}`;
    return `${u.slice(0, i)}${n}`;
  }
  function vr(u, n, i) {
    He(n, "offset"), (u[n] === void 0 || u[n + i] === void 0) && et(n, u.length - (i + 1));
  }
  function kt(u, n, i, f, p, w) {
    if (u > i || u < n) {
      const g = typeof n == "bigint" ? "n" : "";
      let L;
      throw w > 3 ? n === 0 || n === BigInt(0) ? L = `>= 0${g} and < 2${g} ** ${(w + 1) * 8}${g}` : L = `>= -(2${g} ** ${(w + 1) * 8 - 1}${g}) and < 2 ** ${(w + 1) * 8 - 1}${g}` : L = `>= ${n}${g} and <= ${i}${g}`, new Re.ERR_OUT_OF_RANGE("value", L, u);
    }
    vr(f, p, w);
  }
  function He(u, n) {
    if (typeof u != "number")
      throw new Re.ERR_INVALID_ARG_TYPE(n, "number", u);
  }
  function et(u, n, i) {
    throw Math.floor(u) !== u ? (He(u, i), new Re.ERR_OUT_OF_RANGE(i || "offset", "an integer", u)) : n < 0 ? new Re.ERR_BUFFER_OUT_OF_BOUNDS() : new Re.ERR_OUT_OF_RANGE(
      i || "offset",
      `>= ${i ? 1 : 0} and <= ${n}`,
      u
    );
  }
  const ft = /[^+/0-9A-Za-z-_]/g;
  function dt(u) {
    if (u = u.split("=")[0], u = u.trim().replace(ft, ""), u.length < 2)
      return "";
    for (; u.length % 4 !== 0; )
      u = u + "=";
    return u;
  }
  function pt(u, n) {
    n = n || 1 / 0;
    let i;
    const f = u.length;
    let p = null;
    const w = [];
    for (let g = 0; g < f; ++g) {
      if (i = u.charCodeAt(g), i > 55295 && i < 57344) {
        if (!p) {
          if (i > 56319) {
            (n -= 3) > -1 && w.push(239, 191, 189);
            continue;
          } else if (g + 1 === f) {
            (n -= 3) > -1 && w.push(239, 191, 189);
            continue;
          }
          p = i;
          continue;
        }
        if (i < 56320) {
          (n -= 3) > -1 && w.push(239, 191, 189), p = i;
          continue;
        }
        i = (p - 55296 << 10 | i - 56320) + 65536;
      } else
        p && (n -= 3) > -1 && w.push(239, 191, 189);
      if (p = null, i < 128) {
        if ((n -= 1) < 0)
          break;
        w.push(i);
      } else if (i < 2048) {
        if ((n -= 2) < 0)
          break;
        w.push(
          i >> 6 | 192,
          i & 63 | 128
        );
      } else if (i < 65536) {
        if ((n -= 3) < 0)
          break;
        w.push(
          i >> 12 | 224,
          i >> 6 & 63 | 128,
          i & 63 | 128
        );
      } else if (i < 1114112) {
        if ((n -= 4) < 0)
          break;
        w.push(
          i >> 18 | 240,
          i >> 12 & 63 | 128,
          i >> 6 & 63 | 128,
          i & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return w;
  }
  function qt(u) {
    const n = [];
    for (let i = 0; i < u.length; ++i)
      n.push(u.charCodeAt(i) & 255);
    return n;
  }
  function ht(u, n) {
    let i, f, p;
    const w = [];
    for (let g = 0; g < u.length && !((n -= 2) < 0); ++g)
      i = u.charCodeAt(g), f = i >> 8, p = i % 256, w.push(p), w.push(f);
    return w;
  }
  function Ht(u) {
    return t.toByteArray(dt(u));
  }
  function mt(u, n, i, f) {
    let p;
    for (p = 0; p < f && !(p + i >= n.length || p >= u.length); ++p)
      n[p + i] = u[p];
    return p;
  }
  function ve(u, n) {
    return u instanceof n || u != null && u.constructor != null && u.constructor.name != null && u.constructor.name === n.name;
  }
  function jt(u) {
    return u !== u;
  }
  const br = function() {
    const u = "0123456789abcdef", n = new Array(256);
    for (let i = 0; i < 16; ++i) {
      const f = i * 16;
      for (let p = 0; p < 16; ++p)
        n[f + p] = u[i] + u[p];
    }
    return n;
  }();
  function Le(u) {
    return typeof BigInt > "u" ? Yt : u;
  }
  function Yt() {
    throw new Error("BigInt not supported");
  }
})(di);
var hi = { exports: {} }, ue = hi.exports = {}, Oe, Ne;
function Mr() {
  throw new Error("setTimeout has not been defined");
}
function Ar() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Oe = setTimeout : Oe = Mr;
  } catch {
    Oe = Mr;
  }
  try {
    typeof clearTimeout == "function" ? Ne = clearTimeout : Ne = Ar;
  } catch {
    Ne = Ar;
  }
})();
function mi(e) {
  if (Oe === setTimeout)
    return setTimeout(e, 0);
  if ((Oe === Mr || !Oe) && setTimeout)
    return Oe = setTimeout, setTimeout(e, 0);
  try {
    return Oe(e, 0);
  } catch {
    try {
      return Oe.call(null, e, 0);
    } catch {
      return Oe.call(this, e, 0);
    }
  }
}
function is(e) {
  if (Ne === clearTimeout)
    return clearTimeout(e);
  if ((Ne === Ar || !Ne) && clearTimeout)
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
var ze = [], _t = !1, nt, Qt = -1;
function os() {
  !_t || !nt || (_t = !1, nt.length ? ze = nt.concat(ze) : Qt = -1, ze.length && wi());
}
function wi() {
  if (!_t) {
    var e = mi(os);
    _t = !0;
    for (var t = ze.length; t; ) {
      for (nt = ze, ze = []; ++Qt < t; )
        nt && nt[Qt].run();
      Qt = -1, t = ze.length;
    }
    nt = null, _t = !1, is(e);
  }
}
ue.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      t[r - 1] = arguments[r];
  ze.push(new yi(e, t)), ze.length === 1 && !_t && mi(wi);
};
function yi(e, t) {
  this.fun = e, this.array = t;
}
yi.prototype.run = function() {
  this.fun.apply(null, this.array);
};
ue.title = "browser";
ue.browser = !0;
ue.env = {};
ue.argv = [];
ue.version = "";
ue.versions = {};
function We() {
}
ue.on = We;
ue.addListener = We;
ue.once = We;
ue.off = We;
ue.removeListener = We;
ue.removeAllListeners = We;
ue.emit = We;
ue.prependListener = We;
ue.prependOnceListener = We;
ue.listeners = function(e) {
  return [];
};
ue.binding = function(e) {
  throw new Error("process.binding is not supported");
};
ue.cwd = function() {
  return "/";
};
ue.chdir = function(e) {
  throw new Error("process.chdir is not supported");
};
ue.umask = function() {
  return 0;
};
var ss = hi.exports;
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = di, r = ss, o = (l) => l && l.__esModule ? l : { default: l }, s = o(r), c = globalThis || void 0 || self;
  Object.defineProperty(e, "Buffer", { enumerable: !0, get: () => t.Buffer }), Object.defineProperty(e, "process", { enumerable: !0, get: () => s.default }), e.global = c;
})(pe);
var Or = { exports: {} }, Rt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bn;
function as() {
  if (Bn)
    return Rt;
  Bn = 1;
  var e = zt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(a, h, b) {
    var m, v = {}, E = null, T = null;
    b !== void 0 && (E = "" + b), h.key !== void 0 && (E = "" + h.key), h.ref !== void 0 && (T = h.ref);
    for (m in h)
      o.call(h, m) && !c.hasOwnProperty(m) && (v[m] = h[m]);
    if (a && a.defaultProps)
      for (m in h = a.defaultProps, h)
        v[m] === void 0 && (v[m] = h[m]);
    return { $$typeof: t, type: a, key: E, ref: T, props: v, _owner: s.current };
  }
  return Rt.Fragment = r, Rt.jsx = l, Rt.jsxs = l, Rt;
}
var Lt = {}, Mn;
function us() {
  return Mn || (Mn = 1, pe.process.env.NODE_ENV !== "production" && function() {
    var e = zt, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), a = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), A = Symbol.iterator, P = "@@iterator";
    function ne(d) {
      if (d === null || typeof d != "object")
        return null;
      var x = A && d[A] || d[P];
      return typeof x == "function" ? x : null;
    }
    var j = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function F(d) {
      {
        for (var x = arguments.length, _ = new Array(x > 1 ? x - 1 : 0), k = 1; k < x; k++)
          _[k - 1] = arguments[k];
        Z("error", d, _);
      }
    }
    function Z(d, x, _) {
      {
        var k = j.ReactDebugCurrentFrame, G = k.getStackAddendum();
        G !== "" && (x += "%s", _ = _.concat([G]));
        var J = _.map(function(U) {
          return String(U);
        });
        J.unshift("Warning: " + x), Function.prototype.apply.call(console[d], console, J);
      }
    }
    var ye = !1, R = !1, me = !1, ge = !1, Te = !1, xe;
    xe = Symbol.for("react.module.reference");
    function je(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === o || d === c || Te || d === s || d === b || d === m || ge || d === T || ye || R || me || typeof d == "object" && d !== null && (d.$$typeof === E || d.$$typeof === v || d.$$typeof === l || d.$$typeof === a || d.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === xe || d.getModuleId !== void 0));
    }
    function he(d, x, _) {
      var k = d.displayName;
      if (k)
        return k;
      var G = x.displayName || x.name || "";
      return G !== "" ? _ + "(" + G + ")" : _;
    }
    function S(d) {
      return d.displayName || "Context";
    }
    function C(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && F("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
        case o:
          return "Fragment";
        case r:
          return "Portal";
        case c:
          return "Profiler";
        case s:
          return "StrictMode";
        case b:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case a:
            var x = d;
            return S(x) + ".Consumer";
          case l:
            var _ = d;
            return S(_._context) + ".Provider";
          case h:
            return he(d, d.render, "ForwardRef");
          case v:
            var k = d.displayName || null;
            return k !== null ? k : C(d.type) || "Memo";
          case E: {
            var G = d, J = G._payload, U = G._init;
            try {
              return C(U(J));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, B = 0, M, D, V, q, ie, $, W;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function Ge() {
      {
        if (B === 0) {
          M = console.log, D = console.info, V = console.warn, q = console.error, ie = console.group, $ = console.groupCollapsed, W = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: oe,
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
        B++;
      }
    }
    function Xe() {
      {
        if (B--, B === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, d, {
              value: M
            }),
            info: I({}, d, {
              value: D
            }),
            warn: I({}, d, {
              value: V
            }),
            error: I({}, d, {
              value: q
            }),
            group: I({}, d, {
              value: ie
            }),
            groupCollapsed: I({}, d, {
              value: $
            }),
            groupEnd: I({}, d, {
              value: W
            })
          });
        }
        B < 0 && F("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var qe = j.ReactCurrentDispatcher, lt;
    function Re(d, x, _) {
      {
        if (lt === void 0)
          try {
            throw Error();
          } catch (G) {
            var k = G.stack.trim().match(/\n( *(at )?)/);
            lt = k && k[1] || "";
          }
        return `
` + lt + d;
      }
    }
    var Ze = !1, Qe;
    {
      var vr = typeof WeakMap == "function" ? WeakMap : Map;
      Qe = new vr();
    }
    function kt(d, x) {
      if (!d || Ze)
        return "";
      {
        var _ = Qe.get(d);
        if (_ !== void 0)
          return _;
      }
      var k;
      Ze = !0;
      var G = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var J;
      J = qe.current, qe.current = null, Ge();
      try {
        if (x) {
          var U = function() {
            throw Error();
          };
          if (Object.defineProperty(U.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(U, []);
            } catch ($e) {
              k = $e;
            }
            Reflect.construct(d, [], U);
          } else {
            try {
              U.call();
            } catch ($e) {
              k = $e;
            }
            d.call(U.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($e) {
            k = $e;
          }
          d();
        }
      } catch ($e) {
        if ($e && k && typeof $e.stack == "string") {
          for (var O = $e.stack.split(`
`), we = k.stack.split(`
`), ae = O.length - 1, ce = we.length - 1; ae >= 1 && ce >= 0 && O[ae] !== we[ce]; )
            ce--;
          for (; ae >= 1 && ce >= 0; ae--, ce--)
            if (O[ae] !== we[ce]) {
              if (ae !== 1 || ce !== 1)
                do
                  if (ae--, ce--, ce < 0 || O[ae] !== we[ce]) {
                    var Pe = `
` + O[ae].replace(" at new ", " at ");
                    return d.displayName && Pe.includes("<anonymous>") && (Pe = Pe.replace("<anonymous>", d.displayName)), typeof d == "function" && Qe.set(d, Pe), Pe;
                  }
                while (ae >= 1 && ce >= 0);
              break;
            }
        }
      } finally {
        Ze = !1, qe.current = J, Xe(), Error.prepareStackTrace = G;
      }
      var yt = d ? d.displayName || d.name : "", Ln = yt ? Re(yt) : "";
      return typeof d == "function" && Qe.set(d, Ln), Ln;
    }
    function He(d, x, _) {
      return kt(d, !1);
    }
    function et(d) {
      var x = d.prototype;
      return !!(x && x.isReactComponent);
    }
    function ft(d, x, _) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return kt(d, et(d));
      if (typeof d == "string")
        return Re(d);
      switch (d) {
        case b:
          return Re("Suspense");
        case m:
          return Re("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case h:
            return He(d.render);
          case v:
            return ft(d.type, x, _);
          case E: {
            var k = d, G = k._payload, J = k._init;
            try {
              return ft(J(G), x, _);
            } catch {
            }
          }
        }
      return "";
    }
    var dt = Object.prototype.hasOwnProperty, pt = {}, qt = j.ReactDebugCurrentFrame;
    function ht(d) {
      if (d) {
        var x = d._owner, _ = ft(d.type, d._source, x ? x.type : null);
        qt.setExtraStackFrame(_);
      } else
        qt.setExtraStackFrame(null);
    }
    function Ht(d, x, _, k, G) {
      {
        var J = Function.call.bind(dt);
        for (var U in d)
          if (J(d, U)) {
            var O = void 0;
            try {
              if (typeof d[U] != "function") {
                var we = Error((k || "React class") + ": " + _ + " type `" + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[U] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw we.name = "Invariant Violation", we;
              }
              O = d[U](x, U, k, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ae) {
              O = ae;
            }
            O && !(O instanceof Error) && (ht(G), F("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", _, U, typeof O), ht(null)), O instanceof Error && !(O.message in pt) && (pt[O.message] = !0, ht(G), F("Failed %s type: %s", _, O.message), ht(null));
          }
      }
    }
    var mt = Array.isArray;
    function ve(d) {
      return mt(d);
    }
    function jt(d) {
      {
        var x = typeof Symbol == "function" && Symbol.toStringTag, _ = x && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return _;
      }
    }
    function br(d) {
      try {
        return Le(d), !1;
      } catch {
        return !0;
      }
    }
    function Le(d) {
      return "" + d;
    }
    function Yt(d) {
      if (br(d))
        return F("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", jt(d)), Le(d);
    }
    var u = j.ReactCurrentOwner, n = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, i, f, p;
    p = {};
    function w(d) {
      if (dt.call(d, "ref")) {
        var x = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function g(d) {
      if (dt.call(d, "key")) {
        var x = Object.getOwnPropertyDescriptor(d, "key").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function L(d, x) {
      if (typeof d.ref == "string" && u.current && x && u.current.stateNode !== x) {
        var _ = C(u.current.type);
        p[_] || (F('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(u.current.type), d.ref), p[_] = !0);
      }
    }
    function te(d, x) {
      {
        var _ = function() {
          i || (i = !0, F("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        _.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: _,
          configurable: !0
        });
      }
    }
    function K(d, x) {
      {
        var _ = function() {
          f || (f = !0, F("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        _.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: _,
          configurable: !0
        });
      }
    }
    var re = function(d, x, _, k, G, J, U) {
      var O = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: d,
        key: x,
        ref: _,
        props: U,
        // Record the component responsible for creating this element.
        _owner: J
      };
      return O._store = {}, Object.defineProperty(O._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(O, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.defineProperty(O, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: G
      }), Object.freeze && (Object.freeze(O.props), Object.freeze(O)), O;
    };
    function H(d, x, _, k, G) {
      {
        var J, U = {}, O = null, we = null;
        _ !== void 0 && (Yt(_), O = "" + _), g(x) && (Yt(x.key), O = "" + x.key), w(x) && (we = x.ref, L(x, G));
        for (J in x)
          dt.call(x, J) && !n.hasOwnProperty(J) && (U[J] = x[J]);
        if (d && d.defaultProps) {
          var ae = d.defaultProps;
          for (J in ae)
            U[J] === void 0 && (U[J] = ae[J]);
        }
        if (O || we) {
          var ce = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          O && te(U, ce), we && K(U, ce);
        }
        return re(d, O, we, G, k, u.current, U);
      }
    }
    var xr = j.ReactCurrentOwner, Tn = j.ReactDebugCurrentFrame;
    function wt(d) {
      if (d) {
        var x = d._owner, _ = ft(d.type, d._source, x ? x.type : null);
        Tn.setExtraStackFrame(_);
      } else
        Tn.setExtraStackFrame(null);
    }
    var Er;
    Er = !1;
    function _r(d) {
      return typeof d == "object" && d !== null && d.$$typeof === t;
    }
    function Pn() {
      {
        if (xr.current) {
          var d = C(xr.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function ko(d) {
      {
        if (d !== void 0) {
          var x = d.fileName.replace(/^.*[\\\/]/, ""), _ = d.lineNumber;
          return `

Check your code at ` + x + ":" + _ + ".";
        }
        return "";
      }
    }
    var Cn = {};
    function jo(d) {
      {
        var x = Pn();
        if (!x) {
          var _ = typeof d == "string" ? d : d.displayName || d.name;
          _ && (x = `

Check the top-level render call using <` + _ + ">.");
        }
        return x;
      }
    }
    function kn(d, x) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var _ = jo(x);
        if (Cn[_])
          return;
        Cn[_] = !0;
        var k = "";
        d && d._owner && d._owner !== xr.current && (k = " It was passed a child from " + C(d._owner.type) + "."), wt(d), F('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, k), wt(null);
      }
    }
    function jn(d, x) {
      {
        if (typeof d != "object")
          return;
        if (ve(d))
          for (var _ = 0; _ < d.length; _++) {
            var k = d[_];
            _r(k) && kn(k, x);
          }
        else if (_r(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var G = ne(d);
          if (typeof G == "function" && G !== d.entries)
            for (var J = G.call(d), U; !(U = J.next()).done; )
              _r(U.value) && kn(U.value, x);
        }
      }
    }
    function Ro(d) {
      {
        var x = d.type;
        if (x == null || typeof x == "string")
          return;
        var _;
        if (typeof x == "function")
          _ = x.propTypes;
        else if (typeof x == "object" && (x.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        x.$$typeof === v))
          _ = x.propTypes;
        else
          return;
        if (_) {
          var k = C(x);
          Ht(_, d.props, "prop", k, d);
        } else if (x.PropTypes !== void 0 && !Er) {
          Er = !0;
          var G = C(x);
          F("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", G || "Unknown");
        }
        typeof x.getDefaultProps == "function" && !x.getDefaultProps.isReactClassApproved && F("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Lo(d) {
      {
        for (var x = Object.keys(d.props), _ = 0; _ < x.length; _++) {
          var k = x[_];
          if (k !== "children" && k !== "key") {
            wt(d), F("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), wt(null);
            break;
          }
        }
        d.ref !== null && (wt(d), F("Invalid attribute `ref` supplied to `React.Fragment`."), wt(null));
      }
    }
    function Rn(d, x, _, k, G, J) {
      {
        var U = je(d);
        if (!U) {
          var O = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (O += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var we = ko(G);
          we ? O += we : O += Pn();
          var ae;
          d === null ? ae = "null" : ve(d) ? ae = "array" : d !== void 0 && d.$$typeof === t ? (ae = "<" + (C(d.type) || "Unknown") + " />", O = " Did you accidentally export a JSX literal instead of a component?") : ae = typeof d, F("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ae, O);
        }
        var ce = H(d, x, _, G, J);
        if (ce == null)
          return ce;
        if (U) {
          var Pe = x.children;
          if (Pe !== void 0)
            if (k)
              if (ve(Pe)) {
                for (var yt = 0; yt < Pe.length; yt++)
                  jn(Pe[yt], d);
                Object.freeze && Object.freeze(Pe);
              } else
                F("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              jn(Pe, d);
        }
        return d === o ? Lo(ce) : Ro(ce), ce;
      }
    }
    function Bo(d, x, _) {
      return Rn(d, x, _, !0);
    }
    function Mo(d, x, _) {
      return Rn(d, x, _, !1);
    }
    var Ao = Mo, Oo = Bo;
    Lt.Fragment = o, Lt.jsx = Ao, Lt.jsxs = Oo;
  }()), Lt;
}
pe.process.env.NODE_ENV === "production" ? Or.exports = as() : Or.exports = us();
var y = Or.exports;
var Ft = {}, Bt = Do;
if (pe.process.env.NODE_ENV === "production")
  Ft.createRoot = Bt.createRoot, Ft.hydrateRoot = Bt.hydrateRoot;
else {
  var Jt = Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Ft.createRoot = function(e, t) {
    Jt.usingClientEntryPoint = !0;
    try {
      return Bt.createRoot(e, t);
    } finally {
      Jt.usingClientEntryPoint = !1;
    }
  }, Ft.hydrateRoot = function(e, t, r) {
    Jt.usingClientEntryPoint = !0;
    try {
      return Bt.hydrateRoot(e, t, r);
    } finally {
      Jt.usingClientEntryPoint = !1;
    }
  };
}
function er(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? er = function(r) {
    return typeof r;
  } : er = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, er(e);
}
function cs(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function An(e, t) {
  for (var r = 0; r < t.length; r++) {
    var o = t[r];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
  }
}
function ls(e, t, r) {
  return t && An(e.prototype, t), r && An(e, r), e;
}
function fs(e, t) {
  return t && (er(t) === "object" || typeof t == "function") ? t : tr(e);
}
function Nr(e) {
  return Nr = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Nr(e);
}
function tr(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ds(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Fr(e, t);
}
function Fr(e, t) {
  return Fr = Object.setPrototypeOf || function(o, s) {
    return o.__proto__ = s, o;
  }, Fr(e, t);
}
function rr(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var gi = /* @__PURE__ */ function(e) {
  ds(t, e);
  function t() {
    var r, o;
    cs(this, t);
    for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++)
      c[l] = arguments[l];
    return o = fs(this, (r = Nr(t)).call.apply(r, [this].concat(c))), rr(tr(o), "state", {
      bootstrapped: !1
    }), rr(tr(o), "_unsubscribe", void 0), rr(tr(o), "handlePersistorState", function() {
      var a = o.props.persistor, h = a.getState(), b = h.bootstrapped;
      b && (o.props.onBeforeLift ? Promise.resolve(o.props.onBeforeLift()).finally(function() {
        return o.setState({
          bootstrapped: !0
        });
      }) : o.setState({
        bootstrapped: !0
      }), o._unsubscribe && o._unsubscribe());
    }), o;
  }
  return ls(t, [{
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
      return pe.process.env.NODE_ENV !== "production" && typeof this.props.children == "function" && this.props.loading && console.error("redux-persist: PersistGate expects either a function child or loading prop, but not both. The loading prop will be ignored."), typeof this.props.children == "function" ? this.props.children(this.state.bootstrapped) : this.state.bootstrapped ? this.props.children : this.props.loading;
    }
  }]), t;
}(No);
rr(gi, "defaultProps", {
  children: null,
  loading: null
});
var Me = /* @__PURE__ */ ((e) => (e.text = "text", e.buttons = "buttons", e.payment = "payment", e.video = "video", e.image = "image", e.email = "email", e))(Me || {}), rn = /* @__PURE__ */ ((e) => (e.horizontal = "horizontal", e.vertical = "vertical", e))(rn || {}), rt = /* @__PURE__ */ ((e) => (e.chat = "utm_chat", e))(rt || {}), be = /* @__PURE__ */ ((e) => (e.addToCart = "AddToCart", e.contact = "Contact", e.initiateCheckout = "InitiateCheckout", e.pageView = "PageView", e.viewContent = "ViewContent", e.purchase = "Purchase", e.subscribe = "Subscribe", e.recurringSubscriptionPayment = "RecurringSubscriptionPayment", e.cancelSubscription = "CancelSubscription", e.purchaseFailed = "PurchaseFailed", e.subscribeFailed = "SubscribeFailed", e.recurringSubscriptionPaymentFailed = "RecurringSubscriptionPaymentFailed", e.customerCreated = "CustomerCreated", e.subscriptionChargeback = "SubscriptionChargeback", e.subscriptionRefund = "SubscriptionRefund", e.transactionChargeback = "TransactionChargeback", e.transactionRefund = "TransactionRefund", e.firstMessage = "FirstMessage", e.linkProvided = "LinkProvided", e.linkClicked = "LinkClicked", e.emailField = "EmailField", e.emailEntered = "EmailEntered", e.emailWrong = "EmailWrong", e.emailExist = "EmailExist", e.priceSeen = "PriceSeen", e.buttonClick = "ButtonClick", e.closeClicked = "CloseClicked", e))(be || {}), vi = /* @__PURE__ */ ((e) => (e.email = "email_intent", e.payment = "payment_intent", e.emailError = "email_validation_error", e.emailSuccess = "email_validation_success", e.destroy = "payment_intent_destroy", e))(vi || {}), X = /* @__PURE__ */ ((e) => (e.user = "user", e.assistant = "assistant", e))(X || {}), Ce = /* @__PURE__ */ ((e) => (e.chat = "chat", e.chatHistory = "chat-history", e.connect = "connect", e.error = "error", e.disconnect = "disconnect", e.streamStart = "stream-start", e.streamData = "stream-data", e.streamEnd = "stream-end", e.streamError = "stream-error", e))(Ce || {}), bi = /* @__PURE__ */ ((e) => (e.light = "light", e.dark = "dark", e))(bi || {});
const Et = (e) => new URLSearchParams(window.location.search).get(e) || "", ps = {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric"
};
function hs(e, t = ps) {
  return `${new Date(e).toLocaleDateString([], t)}`.toUpperCase();
}
function fe() {
  const e = new Array(36);
  for (let t = 0; t < 36; t++)
    e[t] = Math.floor(Math.random() * 16);
  return e[14] = 4, e[19] = e[19] &= -5, e[19] = e[19] |= 8, e[8] = e[13] = e[18] = e[23] = "-", e.map((t) => t.toString(16)).join("");
}
const vt = {
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
}, Ae = {
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
  themeId: bi.light,
  chatUrl: "",
  enableDevTools: !1,
  isPluginMode: !1,
  purpose: "default",
  specialUrls: {}
}, bt = {
  outgoing: {
    term: "",
    user_id: "",
    role: X.user,
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
}, ms = {
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
}, xi = fr({
  name: "config",
  initialState: Ae,
  reducers: {
    setConfig(e, { payload: t }) {
      e.aiProfile = { ...Ae.aiProfile, ...t.aiProfile }, e.translations = { ...Ae.translations, ...t.translations }, e.close = { ...Ae.close, ...t.close }, e.themeId = t.themeId, e.chatUrl = t.chatUrl, e.purpose = t.purpose;
    },
    setSpecialUrls(e, { payload: t }) {
      e.specialUrls = { ...e.specialUrls, ...t };
    },
    setPurpose(e, { payload: t }) {
      e.purpose = t;
    },
    resetConfig(e) {
      e.aiProfile = Ae.aiProfile, e.themeId = Ae.themeId, e.translations = Ae.translations, e.chatUrl = Ae.chatUrl;
    },
    setTheme(e, { payload: t }) {
      e.themeId = t;
    },
    resetTheme(e) {
      e.themeId = Ae.themeId;
    },
    setDevToolsStatus(e, { payload: t }) {
      e.enableDevTools = t;
    },
    resetDevToolsStatus(e) {
      e.enableDevTools = Ae.enableDevTools;
    },
    togglePluginMode(e) {
      e.isPluginMode = !e.isPluginMode;
    },
    setTranslations(e, { payload: t }) {
      e.translations = { ...e.translations, ...t };
    }
  }
}), ut = (e) => e.config, {
  setConfig: Ei,
  resetConfig: Al,
  setTheme: Ol,
  resetTheme: Nl,
  setDevToolsStatus: Fl,
  resetDevToolsStatus: Dl,
  togglePluginMode: Ul,
  setTranslations: $l,
  setPurpose: ws,
  setSpecialUrls: ys
} = xi.actions, gs = xi.reducer, _i = fr({
  name: "meta",
  initialState: vt,
  reducers: {
    setMeta(e, { payload: t }) {
      e.cid = t.cid, e.eid = t.eid, e.systemType = t.systemType, e.pd = { ...e.pd, ...t.pd }, e.marketing = { ...e.marketing, ...t.marketing };
    },
    resetMeta(e) {
      e.pd = vt.pd, e.cid = vt.cid, e.eid = vt.eid, e.systemType = vt.systemType, e.marketing = vt.marketing;
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
}), Wt = (e) => e.meta, { setMeta: vs, resetMeta: zl, setMarketing: bs, setPd: xs, setRegion: Es } = _i.actions, _s = _i.reducer, Ke = Uo, z = $o, Ss = () => {
  const [e, t] = It([0, 0]);
  return Fo(() => {
    function r() {
      t([window.innerWidth, window.innerHeight]);
    }
    return window.addEventListener("resize", r), r(), () => window.removeEventListener("resize", r);
  }, []), e;
}, Is = () => {
  const { themeId: e, close: t } = z(ut), { cid: r, systemType: o, marketing: s } = z(Wt);
  return {
    theme: e,
    closeVisible: t.visible,
    cid: r,
    systemType: o,
    marketing: s
  };
};
var On = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ee = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, Ts = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function Si(e, t) {
  e.forEach(function(r) {
    Array.isArray(r) ? Si(r, t) : t.push(r);
  });
}
function Ii(e) {
  let t = [];
  return Si(e, t), t;
}
var Ti = (...e) => Ii(e).filter(Boolean), Pi = (e, t) => {
  let r = {}, o = Object.keys(e), s = Object.keys(t);
  for (let c of o)
    if (s.includes(c)) {
      let l = e[c], a = t[c];
      typeof l == "object" && typeof a == "object" ? r[c] = Pi(l, a) : Array.isArray(l) || Array.isArray(a) ? r[c] = Ti(a, l) : r[c] = a + " " + l;
    } else
      r[c] = e[c];
  for (let c of s)
    o.includes(c) || (r[c] = t[c]);
  return r;
}, Nn = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
function Ps() {
  for (var e = 0, t, r, o = ""; e < arguments.length; )
    (t = arguments[e++]) && (r = Ci(t)) && (o && (o += " "), o += r);
  return o;
}
function Ci(e) {
  if (typeof e == "string")
    return e;
  for (var t, r = "", o = 0; o < e.length; o++)
    e[o] && (t = Ci(e[o])) && (r && (r += " "), r += t);
  return r;
}
var nn = "-";
function Cs(e) {
  var t = js(e), r = e.conflictingClassGroups, o = e.conflictingClassGroupModifiers, s = o === void 0 ? {} : o;
  function c(a) {
    var h = a.split(nn);
    return h[0] === "" && h.length !== 1 && h.shift(), ki(h, t) || ks(a);
  }
  function l(a, h) {
    var b = r[a] || [];
    return h && s[a] ? [].concat(b, s[a]) : b;
  }
  return {
    getClassGroupId: c,
    getConflictingClassGroupIds: l
  };
}
function ki(e, t) {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  var r = e[0], o = t.nextPart.get(r), s = o ? ki(e.slice(1), o) : void 0;
  if (s)
    return s;
  if (t.validators.length !== 0) {
    var c = e.join(nn);
    return (l = t.validators.find(function(a) {
      var h = a.validator;
      return h(c);
    })) == null ? void 0 : l.classGroupId;
  }
}
var Fn = /^\[(.+)\]$/;
function ks(e) {
  if (Fn.test(e)) {
    var t = Fn.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function js(e) {
  var t = e.theme, r = e.prefix, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, s = Ls(Object.entries(e.classGroups), r);
  return s.forEach(function(c) {
    var l = c[0], a = c[1];
    Dr(a, o, l, t);
  }), o;
}
function Dr(e, t, r, o) {
  e.forEach(function(s) {
    if (typeof s == "string") {
      var c = s === "" ? t : Dn(t, s);
      c.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (Rs(s)) {
        Dr(s(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: r
      });
      return;
    }
    Object.entries(s).forEach(function(l) {
      var a = l[0], h = l[1];
      Dr(h, Dn(t, a), r, o);
    });
  });
}
function Dn(e, t) {
  var r = e;
  return t.split(nn).forEach(function(o) {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}
function Rs(e) {
  return e.isThemeGetter;
}
function Ls(e, t) {
  return t ? e.map(function(r) {
    var o = r[0], s = r[1], c = s.map(function(l) {
      return typeof l == "string" ? t + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(function(a) {
        var h = a[0], b = a[1];
        return [t + h, b];
      })) : l;
    });
    return [o, c];
  }) : e;
}
function Bs(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  function s(c, l) {
    r.set(c, l), t++, t > e && (t = 0, o = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get: function(l) {
      var a = r.get(l);
      if (a !== void 0)
        return a;
      if ((a = o.get(l)) !== void 0)
        return s(l, a), a;
    },
    set: function(l, a) {
      r.has(l) ? r.set(l, a) : s(l, a);
    }
  };
}
var ji = "!";
function Ms(e) {
  var t = e.separator || ":", r = t.length === 1, o = t[0], s = t.length;
  return function(l) {
    for (var a = [], h = 0, b = 0, m, v = 0; v < l.length; v++) {
      var E = l[v];
      if (h === 0) {
        if (E === o && (r || l.slice(v, v + s) === t)) {
          a.push(l.slice(b, v)), b = v + s;
          continue;
        }
        if (E === "/") {
          m = v;
          continue;
        }
      }
      E === "[" ? h++ : E === "]" && h--;
    }
    var T = a.length === 0 ? l : l.substring(b), A = T.startsWith(ji), P = A ? T.substring(1) : T, ne = m && m > b ? m - b : void 0;
    return {
      modifiers: a,
      hasImportantModifier: A,
      baseClassName: P,
      maybePostfixModifierPosition: ne
    };
  };
}
function As(e) {
  if (e.length <= 1)
    return e;
  var t = [], r = [];
  return e.forEach(function(o) {
    var s = o[0] === "[";
    s ? (t.push.apply(t, r.sort().concat([o])), r = []) : r.push(o);
  }), t.push.apply(t, r.sort()), t;
}
function Os(e) {
  return {
    cache: Bs(e.cacheSize),
    splitModifiers: Ms(e),
    ...Cs(e)
  };
}
var Ns = /\s+/;
function Fs(e, t) {
  var r = t.splitModifiers, o = t.getClassGroupId, s = t.getConflictingClassGroupIds, c = /* @__PURE__ */ new Set();
  return e.trim().split(Ns).map(function(l) {
    var a = r(l), h = a.modifiers, b = a.hasImportantModifier, m = a.baseClassName, v = a.maybePostfixModifierPosition, E = o(v ? m.substring(0, v) : m), T = !!v;
    if (!E) {
      if (!v)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      if (E = o(m), !E)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      T = !1;
    }
    var A = As(h).join(":"), P = b ? A + ji : A;
    return {
      isTailwindClass: !0,
      modifierId: P,
      classGroupId: E,
      originalClassName: l,
      hasPostfixModifier: T
    };
  }).reverse().filter(function(l) {
    if (!l.isTailwindClass)
      return !0;
    var a = l.modifierId, h = l.classGroupId, b = l.hasPostfixModifier, m = a + h;
    return c.has(m) ? !1 : (c.add(m), s(h, b).forEach(function(v) {
      return c.add(a + v);
    }), !0);
  }).reverse().map(function(l) {
    return l.originalClassName;
  }).join(" ");
}
function Ur() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var o, s, c, l = a;
  function a(b) {
    var m = t[0], v = t.slice(1), E = v.reduce(function(T, A) {
      return A(T);
    }, m());
    return o = Os(E), s = o.cache.get, c = o.cache.set, l = h, h(b);
  }
  function h(b) {
    var m = s(b);
    if (m)
      return m;
    var v = Fs(b, o);
    return c(b, v), v;
  }
  return function() {
    return l(Ps.apply(null, arguments));
  };
}
function Q(e) {
  var t = function(o) {
    return o[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var Ri = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ds = /^\d+\/\d+$/, Us = /* @__PURE__ */ new Set(["px", "full", "screen"]), $s = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, zs = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Vs = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Be(e) {
  return it(e) || Us.has(e) || Ds.test(e) || $r(e);
}
function $r(e) {
  return ct(e, "length", Js);
}
function Ws(e) {
  return ct(e, "size", Li);
}
function Gs(e) {
  return ct(e, "position", Li);
}
function qs(e) {
  return ct(e, "url", Ks);
}
function Kt(e) {
  return ct(e, "number", it);
}
function it(e) {
  return !Number.isNaN(Number(e));
}
function Hs(e) {
  return e.endsWith("%") && it(e.slice(0, -1));
}
function Mt(e) {
  return Un(e) || ct(e, "number", Un);
}
function N(e) {
  return Ri.test(e);
}
function At() {
  return !0;
}
function Ye(e) {
  return $s.test(e);
}
function Ys(e) {
  return ct(e, "", Xs);
}
function ct(e, t, r) {
  var o = Ri.exec(e);
  return o ? o[1] ? o[1] === t : r(o[2]) : !1;
}
function Js(e) {
  return zs.test(e);
}
function Li() {
  return !1;
}
function Ks(e) {
  return e.startsWith("url(");
}
function Un(e) {
  return Number.isInteger(Number(e));
}
function Xs(e) {
  return Vs.test(e);
}
function zr() {
  var e = Q("colors"), t = Q("spacing"), r = Q("blur"), o = Q("brightness"), s = Q("borderColor"), c = Q("borderRadius"), l = Q("borderSpacing"), a = Q("borderWidth"), h = Q("contrast"), b = Q("grayscale"), m = Q("hueRotate"), v = Q("invert"), E = Q("gap"), T = Q("gradientColorStops"), A = Q("gradientColorStopPositions"), P = Q("inset"), ne = Q("margin"), j = Q("opacity"), F = Q("padding"), Z = Q("saturate"), ye = Q("scale"), R = Q("sepia"), me = Q("skew"), ge = Q("space"), Te = Q("translate"), xe = function() {
    return ["auto", "contain", "none"];
  }, je = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, he = function() {
    return ["auto", N, t];
  }, S = function() {
    return [N, t];
  }, C = function() {
    return ["", Be];
  }, I = function() {
    return ["auto", it, N];
  }, B = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, M = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, D = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, V = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, q = function() {
    return ["", "0", N];
  }, ie = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, $ = function() {
    return [it, Kt];
  }, W = function() {
    return [it, N];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [At],
      spacing: [Be],
      blur: ["none", "", Ye, N],
      brightness: $(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Ye, N],
      borderSpacing: S(),
      borderWidth: C(),
      contrast: $(),
      grayscale: q(),
      hueRotate: W(),
      invert: q(),
      gap: S(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Hs, $r],
      inset: he(),
      margin: he(),
      opacity: $(),
      padding: S(),
      saturate: $(),
      scale: $(),
      sepia: q(),
      skew: W(),
      space: S(),
      translate: S()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", N]
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
        columns: [Ye]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ie()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ie()
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
        object: [].concat(B(), [N])
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
        inset: [P]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [P]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [P]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [P]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [P]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [P]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [P]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [P]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [P]
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
        z: ["auto", Mt]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: he()
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
        flex: ["1", "auto", "initial", "none", N]
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
        order: ["first", "last", "none", Mt]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [At]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Mt]
        }, N]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": I()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": I()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [At]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Mt]
        }, N]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": I()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": I()
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
        "auto-cols": ["auto", "min", "max", "fr", N]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", N]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [E]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [E]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [E]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(V())
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
        content: ["normal"].concat(V(), ["baseline"])
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
        "place-content": [].concat(V(), ["baseline"])
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
        m: [ne]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [ne]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [ne]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [ne]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [ne]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [ne]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [ne]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [ne]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [ne]
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
        w: ["auto", "min", "max", "fit", N, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", N, Be]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [Ye]
        }, Ye, N]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [N, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", N, Be]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [N, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Ye, $r]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Kt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [At]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", N]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", it, Kt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", N, Be]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", N]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", N]
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
        "placeholder-opacity": [j]
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
        "text-opacity": [j]
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
        decoration: [].concat(M(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Be]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", N, Be]
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
        indent: S()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", N]
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
        content: ["none", N]
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
        "bg-opacity": [j]
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
        bg: [].concat(B(), [Gs])
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
        bg: ["auto", "cover", "contain", Ws]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, qs]
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
        from: [A]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [A]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [A]
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
        rounded: [c]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [c]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [c]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [c]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [c]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [c]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [c]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [c]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [c]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [c]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [c]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [c]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [c]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [c]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [c]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [a]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [j]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(M(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [a]
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
        "divide-y": [a]
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
        "divide-opacity": [j]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: M()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [s]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [s]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [s]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [s]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [s]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [s]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [s]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [s]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(M())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [N, Be]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Be]
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
        "ring-opacity": [j]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Be]
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
        shadow: ["", "inner", "none", Ye, Ys]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [At]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [j]
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
        blur: [r]
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
        "drop-shadow": ["", "none", Ye, N]
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
        "hue-rotate": [m]
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
        saturate: [Z]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [R]
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
        "backdrop-blur": [r]
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
        "backdrop-hue-rotate": [m]
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
        "backdrop-opacity": [j]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Z]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [R]
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
        "border-spacing": [l]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [l]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [l]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", N]
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
        ease: ["linear", "in", "out", "in-out", N]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", N]
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
        scale: [ye]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [ye]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [ye]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Mt, N]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [Te]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [Te]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [me]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [me]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", N]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", N]
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
        "scroll-m": S()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": S()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": S()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": S()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": S()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": S()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": S()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": S()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": S()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": S()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": S()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": S()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": S()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": S()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": S()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": S()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": S()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": S()
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
        "will-change": ["auto", "scroll", "contents", "transform", N]
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
        stroke: [Be, Kt]
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
function Zs(e, t) {
  for (var r in t)
    Bi(e, r, t[r]);
  return e;
}
var Qs = Object.prototype.hasOwnProperty, ea = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function Bi(e, t, r) {
  if (!Qs.call(e, t) || ea.has(typeof r) || r === null) {
    e[t] = r;
    return;
  }
  if (Array.isArray(r) && Array.isArray(e[t])) {
    e[t] = e[t].concat(r);
    return;
  }
  if (typeof r == "object" && typeof e[t] == "object") {
    if (e[t] === null) {
      e[t] = r;
      return;
    }
    for (var o in r)
      Bi(e[t], o, r[o]);
  }
}
function ta(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    r[o - 1] = arguments[o];
  return typeof e == "function" ? Ur.apply(void 0, [zr, e].concat(r)) : Ur.apply(void 0, [function() {
    return Zs(zr(), e);
  }].concat(r));
}
var ra = /* @__PURE__ */ Ur(zr), na = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, Mi = (e) => e || void 0, Ut = (...e) => Mi(Ii(e).filter(Boolean).join(" ")), Ir = null, or = {}, Vr = !1, Ot = (...e) => (t) => t.twMerge ? ((!Ir || Vr) && (Vr = !1, Ir = Ee(or) ? ra : ta(or)), Mi(Ir(Ut(e)))) : Ut(e), $n = (e, t) => {
  for (let r in t)
    e.hasOwnProperty(r) ? e[r] = Ut(e[r], t[r]) : e[r] = t[r];
  return e;
}, se = (e, t) => {
  let { extend: r = null, slots: o = {}, variants: s = {}, compoundVariants: c = [], compoundSlots: l = [], defaultVariants: a = {} } = e, h = { ...na, ...t }, b = r != null && r.base ? Ut(r.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, m = r != null && r.variants && !Ee(r.variants) ? Pi(s, r.variants) : s, v = r != null && r.defaultVariants && !Ee(r.defaultVariants) ? { ...r.defaultVariants, ...a } : a;
  !Ee(h.twMergeConfig) && !Ts(h.twMergeConfig, or) && (Vr = !0, or = h.twMergeConfig);
  let E = Ee(r == null ? void 0 : r.slots), T = Ee(o) ? {} : { base: Ut(e == null ? void 0 : e.base, E && (r == null ? void 0 : r.base)), ...o }, A = E ? T : $n({ ...r == null ? void 0 : r.slots }, Ee(T) ? { base: e == null ? void 0 : e.base } : T), P = (j) => {
    if (Ee(m) && Ee(o) && E)
      return Ot(b, j == null ? void 0 : j.class, j == null ? void 0 : j.className)(h);
    if (c && !Array.isArray(c))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof c}`);
    if (l && !Array.isArray(l))
      throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof l}`);
    let F = (S, C, I = [], B) => {
      let M = I;
      if (typeof C == "string")
        M = M.concat(Nn(C).split(" ").map((D) => `${S}:${D}`));
      else if (Array.isArray(C))
        M = M.concat(C.reduce((D, V) => D.concat(`${S}:${V}`), []));
      else if (typeof C == "object" && typeof B == "string") {
        for (let D in C)
          if (C.hasOwnProperty(D) && D === B) {
            let V = C[D];
            if (V && typeof V == "string") {
              let q = Nn(V);
              M[B] ? M[B] = M[B].concat(q.split(" ").map((ie) => `${S}:${ie}`)) : M[B] = q.split(" ").map((ie) => `${S}:${ie}`);
            } else
              Array.isArray(V) && V.length > 0 && (M[B] = V.reduce((q, ie) => q.concat(`${S}:${ie}`), []));
          }
      }
      return M;
    }, Z = (S, C = m, I = null, B = null) => {
      var M;
      let D = C[S];
      if (!D || Ee(D))
        return null;
      let V = (M = B == null ? void 0 : B[S]) != null ? M : j == null ? void 0 : j[S];
      if (V === null)
        return null;
      let q = On(V), ie = Array.isArray(h.responsiveVariants) && h.responsiveVariants.length > 0 || h.responsiveVariants === !0, $ = v == null ? void 0 : v[S], W = [];
      if (typeof q == "object" && ie)
        for (let [Ge, Xe] of Object.entries(q)) {
          let qe = D[Xe];
          if (Ge === "initial") {
            $ = Xe;
            continue;
          }
          Array.isArray(h.responsiveVariants) && !h.responsiveVariants.includes(Ge) || (W = F(Ge, qe, W, I));
        }
      let oe = D[q] || D[On($)];
      return typeof W == "object" && typeof I == "string" && W[I] ? $n(W, oe) : W.length > 0 ? (W.push(oe), W) : oe;
    }, ye = () => m ? Object.keys(m).map((S) => Z(S, m)) : null, R = (S, C) => {
      if (!m || typeof m != "object")
        return null;
      let I = new Array();
      for (let B in m) {
        let M = Z(B, m, S, C), D = S === "base" && typeof M == "string" ? M : M && M[S];
        D && (I[I.length] = D);
      }
      return I;
    }, me = {};
    for (let S in j)
      j[S] !== void 0 && (me[S] = j[S]);
    let ge = (S, C) => {
      var I;
      let B = typeof (j == null ? void 0 : j[S]) == "object" ? { [S]: (I = j[S]) == null ? void 0 : I.initial } : {};
      return { ...v, ...me, ...B, ...C };
    }, Te = (S = [], C) => {
      let I = [];
      for (let { class: B, className: M, ...D } of S) {
        let V = !0;
        for (let [q, ie] of Object.entries(D)) {
          let $ = ge(q, C);
          if (Array.isArray(ie)) {
            if (!ie.includes($[q])) {
              V = !1;
              break;
            }
          } else if ($[q] !== ie) {
            V = !1;
            break;
          }
        }
        V && (B && I.push(B), M && I.push(M));
      }
      return I;
    }, xe = (S) => {
      let C = Te(c, S), I = Te(r == null ? void 0 : r.compoundVariants, S);
      return Ti(I, C);
    }, je = (S) => {
      let C = xe(S);
      if (!Array.isArray(C))
        return C;
      let I = {};
      for (let B of C)
        if (typeof B == "string" && (I.base = Ot(I.base, B)(h)), typeof B == "object")
          for (let [M, D] of Object.entries(B))
            I[M] = Ot(I[M], D)(h);
      return I;
    }, he = (S) => {
      if (l.length < 1)
        return null;
      let C = {};
      for (let { slots: I = [], class: B, className: M, ...D } of l) {
        if (!Ee(D)) {
          let V = !0;
          for (let q of Object.keys(D)) {
            let ie = ge(q, S)[q];
            if (ie === void 0 || (Array.isArray(D[q]) ? !D[q].includes(ie) : D[q] !== ie)) {
              V = !1;
              break;
            }
          }
          if (!V)
            continue;
        }
        for (let V of I)
          C[V] = C[V] || [], C[V].push([B, M]);
      }
      return C;
    };
    if (!Ee(o) || !E) {
      let S = {};
      if (typeof A == "object" && !Ee(A))
        for (let C of Object.keys(A))
          S[C] = (I) => {
            var B, M;
            return Ot(A[C], R(C, I), ((B = je(I)) != null ? B : [])[C], ((M = he(I)) != null ? M : [])[C], I == null ? void 0 : I.class, I == null ? void 0 : I.className)(h);
          };
      return S;
    }
    return Ot(b, ye(), xe(), j == null ? void 0 : j.class, j == null ? void 0 : j.className)(h);
  }, ne = () => {
    if (!(!m || typeof m != "object"))
      return Object.keys(m);
  };
  return P.variantKeys = ne(), P.extend = r, P.base = b, P.slots = A, P.variants = m, P.defaultVariants = v, P.compoundSlots = l, P.compoundVariants = c, P;
};
const ia = (
  /*tw*/
  se({
    slots: {
      base: "tw--flex tw--self-stretch tw--justify-self-stretch tw--items-stretch tw--justify-center tw--overflow-hidden tw--h-full tw--bg-lumina",
      wrapper: "tw--flex tw--flex-col tw--w-full md:tw--max-w-[800px] tw--max-h-screen tw--h-full tw--bg-whisper tw--text-zephyr-100"
    },
    variants: {
      minimized: {
        true: "tw--fixed tw--right-0 tw--bottom-0 tw--max-h-[700px] tw--max-w-md"
      }
    }
  })
), oa = (
  /*tw*/
  se({
    slots: {
      base: "tw--flex tw--justify-between tw--px-5 tw--py-[11px] tw--shadow-[-1px_2px_5px_0] tw--shadow-zephyr-200"
    }
  })
), Ai = (
  /*tw*/
  se({
    slots: {
      base: "tw--flex tw--items-center tw--flex-wrap tw--px-5 tw--mt-[11px]",
      input: "tw--flex-1 tw--pr-2",
      button: "tw--flex tw--grow-0"
    }
  })
), sa = ({ head: e, stream: t, foot: r }) => {
  const { themeId: o, isPluginMode: s } = z(ut), { base: c, wrapper: l } = ia(), a = Ss();
  return /* @__PURE__ */ y.jsx(
    "div",
    {
      "data-e2e": "base-container",
      style: { height: `${a[1]}px` },
      className: c({ minimized: s }) + " " + o,
      children: /* @__PURE__ */ y.jsxs("div", { className: l(), children: [
        e,
        t,
        r
      ] })
    }
  );
}, aa = (
  /*tw*/
  se({
    slots: {
      base: "loader js-payment-loader tw--hidden tw--fixed tw--left-0 tw--top-0 tw--z-[101] tw--m-0 tw--flex tw--h-screen tw--w-screen tw--items-center tw--justify-center tw--px-5 tw--bg-whisper"
    }
  })
), ua = ({ children: e }) => {
  const { base: t } = aa();
  return /* @__PURE__ */ y.jsx("div", { className: t(), children: e });
}, _e = ({
  eventType: e,
  systemType: t,
  utmParams: r,
  customerUuid: o,
  email: s,
  phone: c
}) => {
  if (window.trackEventInGTM && window.tracking) {
    const l = window.tracking.event({
      eventType: e,
      systemType: t,
      uri: window.location.pathname,
      domain: window.location.hostname,
      customerUuid: o,
      email: s || null,
      phone: c || null,
      additionalData: {},
      utmParams: r
    });
    window.tracking.trackClient(l), window.trackEventInGTM && window.trackEventInGTM(l);
  }
};
window.tracking = window.tracking || null;
window.trackEventInGTM = window.trackEventInGTM || null;
const Oi = (
  /*tw*/
  se({
    slots: {
      btn: "tw--flex-1 tw--space-x-2 tw--text-white tw--text-center tw--bg-neon tw--max-w-[280px] tw--mx-auto tw--px-4 tw--py-3 tw--font-bold tw--rounded-[20px] tw--shadow-[0px_12px_24px_-4px_rgba(1,154,255,0.2)] tw--flex tw--justify-center tw--items-center tw--cursor-pointer tw--relative tw--w-full tw--text-xl max-h-[46px] tw--mb-[11px] customXs:max-h-[52px]",
      link: "tw--flex-1 tw--space-x-2 tw--text-white tw--text-center tw--bg-neon tw--max-w-[280px] tw--mx-auto tw--px-4 tw--py-3 tw--font-extrabold tw--rounded-[20px] tw--shadow-[0px_12px_24px_-4px_rgba(1,154,255,0.2)] tw--flex tw--justify-center tw--items-center tw--cursor-pointer tw--relative tw--w-full tw--mb-[11px] spaced-letters max-h-[46px] customXs:max-h-[52px] customXs:tw--max-w-xs customXs:te--text-[20px] customXs:tw--text-xl"
    }
  })
), ca = (
  /*tw*/
  se({
    slots: {
      base: "tw--absolute tw--top-0 tw--left-0 tw--w-full tw--h-screen tw--flex tw--flex-col tw--justify-center tw--items-center tw--px-5 tw--z-50 tw--bg-lumina"
    }
  })
), la = (
  /*tw*/
  se({
    slots: {
      wrapper: "tw--flex tw--justify-between tw--w-full tw--mb-7",
      left: "tw--flex tw--flex-col",
      leftTop: "tw--flex tw--flex-row",
      icon: "tw--pr-[5px] tw--mr-[5px] tw--flex tw--items-center tw--border-r tw--border-r-[#cacadb]",
      text: "tw--flex tw--flex-col tw--justify-center tw--text-left tw--text-[10px] tw--leading-[1] tw--text-muted-blue",
      bottom: "tw--opacity-60 tw--text-[10px] tw--leading-[2] tw--text-muted-blue",
      right: "tw--flex tw--flex-col tw--items-end",
      price: "tw--text-[#21bb5a] tw--font-bold tw--leading-[1.4] tw--text-[20px]",
      info: "tw--leading-[2] tw--text-[10px] tw--text-muted-blue"
    }
  })
), fa = (
  /*tw*/
  se({
    slots: {
      base: "tw--absolute tw--top-[-30px] tw--right-[-10px] tw--w-6 tw--h-6 tw--p-1 tw--bg-white tw--rounded-full tw--cursor-pointer tw--text-muted-blue"
    }
  })
), da = se({
  slots: {
    base: "tw--mt-[30px] tw--flex tw--items-center tw--justify-center tw--text-[12.8px] tw--leading-[1.56] tw--text-[#21bb5a] tw--font-bold",
    icon: "tw--mr-[5px]"
  }
}), pa = (
  /*tv*/
  se({
    slots: {
      wrapper: "loader js-payment-loader tw--max-w-[335px] tw--overflow-hidden tw--relative tw--flex tw--w-full tw--flex-col tw--items-center tw--justify-center tw--rounded-xl tw--p-5 tw--shadow-card tw--bg-loader",
      inner: "tw--absolute tw--left-0 tw--top-8 tw--flex tw--h-8 tw--w-full tw--items-center tw--justify-center",
      dots: "tw--relative tw--flex tw--items-center tw--justify-center tw--p-3",
      dotsIn: "tw--relative tw--mx-auto tw--my-4 tw--box-content tw--block tw--h-4 tw--w-4 tw--rounded-full tw--bg-pale-dots tw--shadow-loading-dots tw--animate-shadow-dots",
      progressCheckmark: "tw--mb-6 tw--mt-24 tw--box-border tw--flex tw--w-full tw--items-center tw--justify-center tw--text-center",
      panelTitle: "js-payment-message tw--text-lg tw--font-bold tw--leading-5",
      icon: "tw--mr-5 tw--h-6 tw--w-6 tw--rounded-full tw--bg-iota-dots",
      spinningTexts: "tw--mx-10 tw--w-64 tw--shrink-0 tw--text-[16px] tw--leading-[1.63] tw--opacity-60",
      filmContainer: "js-msg-spin tw--flex tw--justify-center tw--overflow-hidden tw--text-center",
      film: "tw--animate-text-spin tw--flex tw--w-full tw--max-w-xs tw--translate-x-72"
    }
  })
), ha = ({ text: e, onClick: t, e2e: r, disabled: o = !1 }) => {
  const s = z((a) => a.meta), c = z((a) => a.intentions.email.current), { btn: l } = Oi();
  return Vt(() => {
    const a = {
      eventType: be.addToCart,
      systemType: s.systemType,
      utmParams: s.marketing.lastUtmParams,
      customerUuid: s.cid,
      email: c
    };
    _e(a), a.eventType = be.priceSeen, _e(a);
  }, []), /* @__PURE__ */ y.jsxs(
    "button",
    {
      onClick: t,
      className: l(),
      disabled: o,
      type: "button",
      "data-e2e": r,
      children: [
        /* @__PURE__ */ y.jsxs(
          "svg",
          {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            children: [
              /* @__PURE__ */ y.jsx(
                "path",
                {
                  opacity: ".3",
                  d: "M4 12h16v6H4v-6zm0-6h16v2H4V6z",
                  fill: "currentColor"
                }
              ),
              /* @__PURE__ */ y.jsx("path", { d: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z", fill: "currentColor" })
            ]
          }
        ),
        /* @__PURE__ */ y.jsx("span", { children: e })
      ]
    }
  );
}, ma = ({ onClick: e }) => {
  const { base: t } = fa();
  return /* @__PURE__ */ y.jsx(
    "button",
    {
      type: "button",
      className: t(),
      onClick: e,
      children: /* @__PURE__ */ y.jsx(
        "svg",
        {
          fill: "none",
          viewBox: "0 0 18 18",
          children: /* @__PURE__ */ y.jsx(
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
}, wa = () => {
  const { base: e, icon: t } = da();
  return /* @__PURE__ */ y.jsxs("footer", { className: e(), children: [
    /* @__PURE__ */ y.jsx(
      "svg",
      {
        className: t(),
        fill: "none",
        height: "12",
        width: "12",
        viewBox: "0 0 12 12",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ y.jsx(
          "path",
          {
            d: "M9 4h-.5V3a2.5 2.5 0 0 0-5 0v1H3c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 8.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM7.55 4h-3.1V3c0-.855.695-1.55 1.55-1.55.855 0 1.55.695 1.55 1.55v1z",
            fill: "currentColor"
          }
        )
      }
    ),
    /* @__PURE__ */ y.jsx("span", { children: "SSL Secure Connection" })
  ] });
}, ya = ({ config: e }) => {
  const { translations: t } = z((v) => v.config), { wrapper: r, left: o, leftTop: s, icon: c, text: l, bottom: a, right: h, price: b, info: m } = la();
  return /* @__PURE__ */ y.jsx("header", { children: /* @__PURE__ */ y.jsxs("div", { className: r(), children: [
    /* @__PURE__ */ y.jsxs("span", { className: o(), children: [
      /* @__PURE__ */ y.jsxs("div", { className: s(), children: [
        /* @__PURE__ */ y.jsx("span", { className: c(), children: /* @__PURE__ */ y.jsx("svg", { width: "26", height: "26", children: /* @__PURE__ */ y.jsx("use", { xlinkHref: "/img/sprite.svg#secured-check" }) }) }),
        /* @__PURE__ */ y.jsx("span", { className: l(), dangerouslySetInnerHTML: { __html: t.paymentHeaderTxt1 } })
      ] }),
      /* @__PURE__ */ y.jsx("div", { className: a(), children: t.paymentHeaderTxt2 })
    ] }),
    /* @__PURE__ */ y.jsxs("div", { className: h(), children: [
      /* @__PURE__ */ y.jsx("div", { className: b(), children: e.price }),
      /* @__PURE__ */ y.jsx("div", { className: m(), children: e.period })
    ] })
  ] }) });
}, Ni = fi((e, t) => {
  const { link: r } = Oi(), { href: o, text: s, onClick: c, e2e: l = null } = e;
  return /* @__PURE__ */ y.jsx(
    "a",
    {
      className: r(),
      "data-e2e": l,
      href: o,
      onClick: c,
      ref: t,
      children: s
    }
  );
});
Ni.displayName = "Link";
const ga = ({ texts: e = [], title: t = "" }) => {
  const {
    wrapper: r,
    inner: o,
    dots: s,
    dotsIn: c,
    icon: l,
    progressCheckmark: a,
    panelTitle: h,
    spinningTexts: b,
    filmContainer: m,
    film: v
  } = pa();
  return /* @__PURE__ */ y.jsxs(
    "div",
    {
      className: r(),
      children: [
        /* @__PURE__ */ y.jsx("div", { className: o(), children: /* @__PURE__ */ y.jsx("div", { className: s(), children: /* @__PURE__ */ y.jsx(
          "span",
          {
            className: c()
          }
        ) }) }),
        /* @__PURE__ */ y.jsxs("div", { className: a(), children: [
          /* @__PURE__ */ y.jsx("span", { className: l(), children: /* @__PURE__ */ y.jsxs(
            "svg",
            {
              width: "24",
              height: "24",
              fill: "none",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                /* @__PURE__ */ y.jsx(
                  "circle",
                  {
                    cx: "12",
                    cy: "12",
                    r: "12"
                  }
                ),
                /* @__PURE__ */ y.jsx(
                  "path",
                  {
                    d: "m9.75 15.127-2.602-2.602a.748.748 0 0 0-1.058 1.057l3.135 3.136a.747.747 0 0 0 1.058 0l7.935-7.935a.748.748 0 0 0-1.058-1.058l-7.41 7.402z",
                    fill: "white"
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ y.jsx("p", { className: h(), children: t })
        ] }),
        /* @__PURE__ */ y.jsx("div", { className: m(), children: /* @__PURE__ */ y.jsx("div", { className: v(), children: e.map((E) => /* @__PURE__ */ y.jsx("div", { className: b(), children: E }, E)) }) })
      ]
    }
  );
}, va = ({ onClose: e }) => {
  const { displayPlanPrice: t, billingFrequencyTmsg: r } = z((c) => c.meta.pd), { translations: o } = z((c) => c.config), { base: s } = ca();
  return /* @__PURE__ */ y.jsx("div", { className: s(), children: /* @__PURE__ */ y.jsxs(
    "div",
    {
      id: "chat-payment-view",
      className: "light-pink-blue tw--max-w-[500px] tw--bg-white tw--w-full tw--min-h-[400px] tw--relative tw--rounded-lg tw--flex tw--flex-col tw--p-7",
      children: [
        /* @__PURE__ */ y.jsx(ua, { children: /* @__PURE__ */ y.jsx(ga, { texts: o.loaderTexts, title: o.tm1224 }) }),
        /* @__PURE__ */ y.jsx(ma, { onClick: e }),
        /* @__PURE__ */ y.jsx("div", { id: "primer-form-container", className: "h-full primer-theme tw--w-full", children: /* @__PURE__ */ y.jsx(ya, { config: { price: t, period: r } }) }),
        /* @__PURE__ */ y.jsx(wa, {})
      ]
    }
  ) });
}, ba = (
  /* tw*/
  se({
    slots: {
      base: "tw--pt-10 tw--w-full tw--h-full tw--pb-5 tw--px-5 tw--overflow-y-scroll tw--flex tw--flex-col-reverse tw--translate-z-0 tw--text-zephyr-100 tw--font-density-different tw--mt-0 tw--mb-auto",
      second: "tw--mt-0 tw--mb-auto",
      date: "tw--text-center tw--text-sm tw--pb-[5px] tw--opacity-40"
    }
  })
), xa = (
  /* tw*/
  se({
    slots: {
      base: "tw--flex tw--flex-col tw--items-center tw--w-full tw--mx-auto tw--pt-5 tw--pb-10",
      title: "tw--pb-[30px] tw--max-w-[400px] tw--text-center tw--mx-[30px] select-none  tw--font-density-different"
    }
  })
), Ea = (
  /* tw*/
  se({
    slots: {
      base: "tw--grid tw--break-words"
    }
  })
), _a = (
  /* tw */
  se({
    slots: {
      base: "after:tw--inline-block after:tw--ml-1 after:tw--h-4 after:tw--w-1 select-none after:tw--bg-zephyr-100"
    },
    variants: {
      isTyping: {
        true: "after:tw--animate-blink",
        false: "after:tw--hidden"
      }
    }
  })
), Fi = (
  /* tw*/
  se({
    slots: {
      base: "tw--relative tw--max-w-[375px] tw--justify-self-start tw--whitespace-pre-wrap tw--rounded-[20px] tw--mb-5 tw--space-y-5 tw--font-density-different",
      action: "tw--absolute tw--bottom-[-16px] tw--right-[-10px] tw--text-seraph",
      separator: "tw--px-[15px] tw--py-[11px] tw--rounded-[20px] tw--w-fit tw--ml-auto tw--mr-0"
    },
    compoundSlots: [
      {
        slots: ["base"],
        type: "assistant",
        class: "tw--bg-lumina tw--px-[15px] tw--py-[11px]"
      },
      {
        slots: ["base"],
        type: "user",
        class: "tw--justify-self-end"
      },
      {
        slots: ["separator"],
        type: "user",
        class: "tw--bg-seraph tw--text-white"
      }
    ]
  })
), Sa = se({
  slots: {
    dotFirst: "tw--inline-block tw--h-[12px] tw--w-[12px] tw--rounded-full tw--opacity-40 tw--animate-wave tw--bg-zephyr-100",
    dotSecond: "tw--inline-block tw--h-[12px] tw--w-[12px] tw--rounded-full tw--opacity-40 tw--animate-wave-delay tw--bg-zephyr-100",
    dotThird: "tw--inline-block tw--h-[12px] tw--w-[12px] tw--rounded-full tw--opacity-40 tw--animate-wave-delay-2 tw--bg-zephyr-100"
  }
}), Ia = () => {
  const { dotFirst: e, dotSecond: t, dotThird: r } = Sa();
  return /* @__PURE__ */ y.jsxs("div", { className: "tw--ml-7 tw--space-x-[6px]", "data-e2e": "stream-response-loader", children: [
    /* @__PURE__ */ y.jsx("span", { className: e() }),
    /* @__PURE__ */ y.jsx("span", { className: t() }),
    /* @__PURE__ */ y.jsx("span", { className: r() })
  ] });
}, Ta = "chatSeen", Di = "linkClickedFromChat", Pa = "chatConversationFinishedTimeStamp", Ca = "cid", ka = 1e3, Ui = "scroll-stop", on = "support", ja = 500, Ra = "/", La = 3e3, Ba = {
  transports: ["websocket"],
  upgrade: !1,
  pingInterval: 1e3 * 60 * 5,
  pingTimeout: 1e3 * 60 * 3,
  secure: !0,
  reconnect: !0
};
fe(), X.assistant, (/* @__PURE__ */ new Date()).getTime(), fe(), X.assistant, (/* @__PURE__ */ new Date()).getTime(), fe(), X.assistant, (/* @__PURE__ */ new Date()).getTime();
const Ma = (e, t) => e.map((r) => {
  var s, c;
  const o = r.sequence === t.sequence && r.type === t.type;
  return o && r.type === Me.text && t.text ? { ...r, text: r.text + t.text } : o && r.type === Me.buttons && ((s = t == null ? void 0 : t.buttons) != null && s.length) && ((c = r == null ? void 0 : r.buttons) != null && c.length) ? { ...r, buttons: [...r.buttons, ...t.buttons] } : r;
});
function de(e) {
  for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    r[o - 1] = arguments[o];
  if (pe.process.env.NODE_ENV !== "production") {
    var s = za[e], c = s ? typeof s == "function" ? s.apply(null, r) : s : "unknown error nr: " + e;
    throw Error("[Immer] " + c);
  }
  throw Error("[Immer] minified error nr: " + e + (r.length ? " " + r.map(function(l) {
    return "'" + l + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function Tt(e) {
  return !!e && !!e[Se];
}
function at(e) {
  var t;
  return !!e && (function(r) {
    if (!r || typeof r != "object")
      return !1;
    var o = Object.getPrototypeOf(r);
    if (o === null)
      return !0;
    var s = Object.hasOwnProperty.call(o, "constructor") && o.constructor;
    return s === Object || typeof s == "function" && Function.toString.call(s) === Va;
  }(e) || Array.isArray(e) || !!e[Jn] || !!(!((t = e.constructor) === null || t === void 0) && t[Jn]) || sn(e) || an(e));
}
function $t(e, t, r) {
  r === void 0 && (r = !1), Ct(e) === 0 ? (r ? Object.keys : dn)(e).forEach(function(o) {
    r && typeof o == "symbol" || t(o, e[o], e);
  }) : e.forEach(function(o, s) {
    return t(s, o, e);
  });
}
function Ct(e) {
  var t = e[Se];
  return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : sn(e) ? 2 : an(e) ? 3 : 0;
}
function Wr(e, t) {
  return Ct(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Aa(e, t) {
  return Ct(e) === 2 ? e.get(t) : e[t];
}
function $i(e, t, r) {
  var o = Ct(e);
  o === 2 ? e.set(t, r) : o === 3 ? e.add(r) : e[t] = r;
}
function Oa(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function sn(e) {
  return Ua && e instanceof Map;
}
function an(e) {
  return $a && e instanceof Set;
}
function tt(e) {
  return e.o || e.t;
}
function un(e) {
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  var t = Wa(e);
  delete t[Se];
  for (var r = dn(t), o = 0; o < r.length; o++) {
    var s = r[o], c = t[s];
    c.writable === !1 && (c.writable = !0, c.configurable = !0), (c.get || c.set) && (t[s] = { configurable: !0, writable: !0, enumerable: c.enumerable, value: e[s] });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function cn(e, t) {
  return t === void 0 && (t = !1), ln(e) || Tt(e) || !at(e) || (Ct(e) > 1 && (e.set = e.add = e.clear = e.delete = Na), Object.freeze(e), t && $t(e, function(r, o) {
    return cn(o, !0);
  }, !0)), e;
}
function Na() {
  de(2);
}
function ln(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function Ue(e) {
  var t = Ga[e];
  return t || de(18, e), t;
}
function zn() {
  return pe.process.env.NODE_ENV === "production" || Pt || de(0), Pt;
}
function Tr(e, t) {
  t && (Ue("Patches"), e.u = [], e.s = [], e.v = t);
}
function sr(e) {
  Gr(e), e.p.forEach(Fa), e.p = null;
}
function Gr(e) {
  e === Pt && (Pt = e.l);
}
function Vn(e) {
  return Pt = { p: [], l: Pt, h: e, m: !0, _: 0 };
}
function Fa(e) {
  var t = e[Se];
  t.i === 0 || t.i === 1 ? t.j() : t.g = !0;
}
function Pr(e, t) {
  t._ = t.p.length;
  var r = t.p[0], o = e !== void 0 && e !== r;
  return t.h.O || Ue("ES5").S(t, e, o), o ? (r[Se].P && (sr(t), de(4)), at(e) && (e = ar(t, e), t.l || ur(t, e)), t.u && Ue("Patches").M(r[Se].t, e, t.u, t.s)) : e = ar(t, r, []), sr(t), t.u && t.v(t.u, t.s), e !== zi ? e : void 0;
}
function ar(e, t, r) {
  if (ln(t))
    return t;
  var o = t[Se];
  if (!o)
    return $t(t, function(a, h) {
      return Wn(e, o, t, a, h, r);
    }, !0), t;
  if (o.A !== e)
    return t;
  if (!o.P)
    return ur(e, o.t, !0), o.t;
  if (!o.I) {
    o.I = !0, o.A._--;
    var s = o.i === 4 || o.i === 5 ? o.o = un(o.k) : o.o, c = s, l = !1;
    o.i === 3 && (c = new Set(s), s.clear(), l = !0), $t(c, function(a, h) {
      return Wn(e, o, s, a, h, r, l);
    }), ur(e, s, !1), r && e.u && Ue("Patches").N(o, r, e.u, e.s);
  }
  return o.o;
}
function Wn(e, t, r, o, s, c, l) {
  if (pe.process.env.NODE_ENV !== "production" && s === r && de(5), Tt(s)) {
    var a = ar(e, s, c && t && t.i !== 3 && !Wr(t.R, o) ? c.concat(o) : void 0);
    if ($i(r, o, a), !Tt(a))
      return;
    e.m = !1;
  } else
    l && r.add(s);
  if (at(s) && !ln(s)) {
    if (!e.h.D && e._ < 1)
      return;
    ar(e, s), t && t.A.l || ur(e, s);
  }
}
function ur(e, t, r) {
  r === void 0 && (r = !1), !e.l && e.h.D && e.m && cn(t, r);
}
function Cr(e, t) {
  var r = e[Se];
  return (r ? tt(r) : e)[t];
}
function Gn(e, t) {
  if (t in e)
    for (var r = Object.getPrototypeOf(e); r; ) {
      var o = Object.getOwnPropertyDescriptor(r, t);
      if (o)
        return o;
      r = Object.getPrototypeOf(r);
    }
}
function qr(e) {
  e.P || (e.P = !0, e.l && qr(e.l));
}
function kr(e) {
  e.o || (e.o = un(e.t));
}
function Hr(e, t, r) {
  var o = sn(t) ? Ue("MapSet").F(t, r) : an(t) ? Ue("MapSet").T(t, r) : e.O ? function(s, c) {
    var l = Array.isArray(s), a = { i: l ? 1 : 0, A: c ? c.A : zn(), P: !1, I: !1, R: {}, l: c, t: s, k: null, o: null, j: null, C: !1 }, h = a, b = Yr;
    l && (h = [a], b = Dt);
    var m = Proxy.revocable(h, b), v = m.revoke, E = m.proxy;
    return a.k = E, a.j = v, E;
  }(t, r) : Ue("ES5").J(t, r);
  return (r ? r.A : zn()).p.push(o), o;
}
function Da(e) {
  return Tt(e) || de(22, e), function t(r) {
    if (!at(r))
      return r;
    var o, s = r[Se], c = Ct(r);
    if (s) {
      if (!s.P && (s.i < 4 || !Ue("ES5").K(s)))
        return s.t;
      s.I = !0, o = qn(r, c), s.I = !1;
    } else
      o = qn(r, c);
    return $t(o, function(l, a) {
      s && Aa(s.t, l) === a || $i(o, l, t(a));
    }), c === 3 ? new Set(o) : o;
  }(e);
}
function qn(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return un(e);
}
var Hn, Pt, fn = typeof Symbol < "u" && typeof Symbol("x") == "symbol", Ua = typeof Map < "u", $a = typeof Set < "u", Yn = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", zi = fn ? Symbol.for("immer-nothing") : ((Hn = {})["immer-nothing"] = !0, Hn), Jn = fn ? Symbol.for("immer-draftable") : "__$immer_draftable", Se = fn ? Symbol.for("immer-state") : "__$immer_state", za = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(e) {
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
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, Va = "" + Object.prototype.constructor, dn = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Object.getOwnPropertyNames, Wa = Object.getOwnPropertyDescriptors || function(e) {
  var t = {};
  return dn(e).forEach(function(r) {
    t[r] = Object.getOwnPropertyDescriptor(e, r);
  }), t;
}, Ga = {}, Yr = { get: function(e, t) {
  if (t === Se)
    return e;
  var r = tt(e);
  if (!Wr(r, t))
    return function(s, c, l) {
      var a, h = Gn(c, l);
      return h ? "value" in h ? h.value : (a = h.get) === null || a === void 0 ? void 0 : a.call(s.k) : void 0;
    }(e, r, t);
  var o = r[t];
  return e.I || !at(o) ? o : o === Cr(e.t, t) ? (kr(e), e.o[t] = Hr(e.A.h, o, e)) : o;
}, has: function(e, t) {
  return t in tt(e);
}, ownKeys: function(e) {
  return Reflect.ownKeys(tt(e));
}, set: function(e, t, r) {
  var o = Gn(tt(e), t);
  if (o != null && o.set)
    return o.set.call(e.k, r), !0;
  if (!e.P) {
    var s = Cr(tt(e), t), c = s == null ? void 0 : s[Se];
    if (c && c.t === r)
      return e.o[t] = r, e.R[t] = !1, !0;
    if (Oa(r, s) && (r !== void 0 || Wr(e.t, t)))
      return !0;
    kr(e), qr(e);
  }
  return e.o[t] === r && (r !== void 0 || t in e.o) || Number.isNaN(r) && Number.isNaN(e.o[t]) || (e.o[t] = r, e.R[t] = !0), !0;
}, deleteProperty: function(e, t) {
  return Cr(e.t, t) !== void 0 || t in e.t ? (e.R[t] = !1, kr(e), qr(e)) : delete e.R[t], e.o && delete e.o[t], !0;
}, getOwnPropertyDescriptor: function(e, t) {
  var r = tt(e), o = Reflect.getOwnPropertyDescriptor(r, t);
  return o && { writable: !0, configurable: e.i !== 1 || t !== "length", enumerable: o.enumerable, value: r[t] };
}, defineProperty: function() {
  de(11);
}, getPrototypeOf: function(e) {
  return Object.getPrototypeOf(e.t);
}, setPrototypeOf: function() {
  de(12);
} }, Dt = {};
$t(Yr, function(e, t) {
  Dt[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
}), Dt.deleteProperty = function(e, t) {
  return pe.process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && de(13), Dt.set.call(this, e, t, void 0);
}, Dt.set = function(e, t, r) {
  return pe.process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && de(14), Yr.set.call(this, e[0], t, r, e[0]);
};
var qa = function() {
  function e(r) {
    var o = this;
    this.O = Yn, this.D = !0, this.produce = function(s, c, l) {
      if (typeof s == "function" && typeof c != "function") {
        var a = c;
        c = s;
        var h = o;
        return function(P) {
          var ne = this;
          P === void 0 && (P = a);
          for (var j = arguments.length, F = Array(j > 1 ? j - 1 : 0), Z = 1; Z < j; Z++)
            F[Z - 1] = arguments[Z];
          return h.produce(P, function(ye) {
            var R;
            return (R = c).call.apply(R, [ne, ye].concat(F));
          });
        };
      }
      var b;
      if (typeof c != "function" && de(6), l !== void 0 && typeof l != "function" && de(7), at(s)) {
        var m = Vn(o), v = Hr(o, s, void 0), E = !0;
        try {
          b = c(v), E = !1;
        } finally {
          E ? sr(m) : Gr(m);
        }
        return typeof Promise < "u" && b instanceof Promise ? b.then(function(P) {
          return Tr(m, l), Pr(P, m);
        }, function(P) {
          throw sr(m), P;
        }) : (Tr(m, l), Pr(b, m));
      }
      if (!s || typeof s != "object") {
        if ((b = c(s)) === void 0 && (b = s), b === zi && (b = void 0), o.D && cn(b, !0), l) {
          var T = [], A = [];
          Ue("Patches").M(s, b, T, A), l(T, A);
        }
        return b;
      }
      de(21, s);
    }, this.produceWithPatches = function(s, c) {
      if (typeof s == "function")
        return function(b) {
          for (var m = arguments.length, v = Array(m > 1 ? m - 1 : 0), E = 1; E < m; E++)
            v[E - 1] = arguments[E];
          return o.produceWithPatches(b, function(T) {
            return s.apply(void 0, [T].concat(v));
          });
        };
      var l, a, h = o.produce(s, c, function(b, m) {
        l = b, a = m;
      });
      return typeof Promise < "u" && h instanceof Promise ? h.then(function(b) {
        return [b, l, a];
      }) : [h, l, a];
    }, typeof (r == null ? void 0 : r.useProxies) == "boolean" && this.setUseProxies(r.useProxies), typeof (r == null ? void 0 : r.autoFreeze) == "boolean" && this.setAutoFreeze(r.autoFreeze);
  }
  var t = e.prototype;
  return t.createDraft = function(r) {
    at(r) || de(8), Tt(r) && (r = Da(r));
    var o = Vn(this), s = Hr(this, r, void 0);
    return s[Se].C = !0, Gr(o), s;
  }, t.finishDraft = function(r, o) {
    var s = r && r[Se];
    pe.process.env.NODE_ENV !== "production" && (s && s.C || de(9), s.I && de(10));
    var c = s.A;
    return Tr(c, o), Pr(void 0, c);
  }, t.setAutoFreeze = function(r) {
    this.D = r;
  }, t.setUseProxies = function(r) {
    r && !Yn && de(20), this.O = r;
  }, t.applyPatches = function(r, o) {
    var s;
    for (s = o.length - 1; s >= 0; s--) {
      var c = o[s];
      if (c.path.length === 0 && c.op === "replace") {
        r = c.value;
        break;
      }
    }
    s > -1 && (o = o.slice(s + 1));
    var l = Ue("Patches").$;
    return Tt(r) ? l(r, o) : this.produce(r, function(a) {
      return l(a, o);
    });
  }, e;
}(), Ie = new qa(), Ha = Ie.produce;
Ie.produceWithPatches.bind(Ie);
Ie.setAutoFreeze.bind(Ie);
Ie.setUseProxies.bind(Ie);
Ie.applyPatches.bind(Ie);
Ie.createDraft.bind(Ie);
Ie.finishDraft.bind(Ie);
const xt = Ha, Vi = fr({
  name: "chat",
  initialState: bt,
  reducers: {
    setOutgoing(e, { payload: t }) {
      e.outgoing = {
        term: Et(rt.chat),
        user_id: localStorage.getItem("__cid") || "",
        role: X.user,
        message: t
      };
    },
    resetOutgoing(e) {
      e.outgoing = bt.outgoing;
    },
    setExistingHistory(e, { payload: t }) {
      return xt(e, (r) => {
        if (e.historyIds.length >= t.length) {
          e.historyIds.filter((s) => !t.find((c) => c.id === s)).forEach(
            (s) => r.historyData[s].content = r.historyData[s].content.map((c) => ({
              ...c,
              sent: !1,
              resend: !0
            }))
          );
          return;
        }
        r.historyIds = t.map(({ id: o }) => o), r.historyData = t.reduce(
          (o, s) => ({
            ...o,
            [s.id]: s
          }),
          {}
        );
      });
    },
    addPredefinedAssistantMessage(e, { payload: t }) {
      const r = fe();
      return xt(e, (o) => {
        o.historyIds.push(r), o.historyData[r] = {
          id: r,
          role: X.assistant,
          content: [
            { type: Me.text, text: t.content, sequence: 1 },
            { type: Me.buttons, buttons: t.buttons || [], sequence: 2 }
          ]
        };
      });
    },
    fillAssistantHistoryData(e, { payload: t }) {
      return xt(e, (r) => {
        const o = t.id;
        if (!r.historyData[o]) {
          r.historyData[o] = { id: o, role: X.assistant, content: [] }, r.historyIds.push(o);
          return;
        }
        if (!t.content)
          return;
        const s = t.content.type, c = {
          sequence: t.sequence || 1,
          type: s,
          [s]: t.content[t.content.type]
        };
        if (r.historyData[o].content.some(
          (a) => a.sequence === c.sequence && a.type === c.type
        )) {
          r.historyData[o].content = Ma(
            r.historyData[o].content,
            c
          );
          return;
        }
        r.historyData[o].content.push(c);
      });
    },
    fillUserHistoryData(e, { payload: { id: t, content: r } }) {
      return xt(e, (o) => {
        let s;
        if (r.groupId && Object.entries(o.historyData).forEach(([c, l]) => {
          l.content.find((a) => a.groupId === r.groupId) && (s = c);
        }), s) {
          o.historyData[s].content.push(r);
          return;
        }
        o.historyData[t] || (o.historyData[t] = { id: t, role: X.user, content: [r] }, o.historyIds.push(t));
      });
    },
    fillInitialMessage(e, { payload: t }) {
      e.historyIds.push(t.id), e.historyData[t.id] = {
        id: t.id,
        role: X.assistant,
        time: (/* @__PURE__ */ new Date()).getTime(),
        content: t.content
      };
    },
    setIsLoading(e) {
      e.isLoading = !0;
    },
    resetIsLoading(e) {
      e.isLoading = bt.isLoading;
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
      return xt(e, (r) => {
        r.historyData[t.itemId].content = r.historyData[t.itemId].content.map((o) => ({
          ...o,
          sent: !0,
          resend: !1
        }));
      });
    },
    showResendIcon(e, { payload: t }) {
      return xt(e, (r) => {
        r.historyData[t.itemId].content = r.historyData[t.itemId].content.map((o) => ({
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
      e.error = bt.error;
    },
    setIsStreaming(e, { payload: t }) {
      e.isStreaming = t;
    },
    resetHistory(e) {
      e.historyIds = bt.historyIds, e.historyData = bt.historyData;
    }
  }
}), pn = (e) => e.chat, Ya = (e) => e.chat.historyIds.find((t) => e.chat.historyData[t].role === X.user), Ja = (e, t) => e.sequence - t.sequence, {
  setOutgoing: hn,
  resetOutgoing: Ka,
  setExistingHistory: Xa,
  addPredefinedAssistantMessage: Wi,
  setIsLoading: Xt,
  resetIsLoading: Nt,
  setLastGroupPointer: Gi,
  setTypingTimeoutExpired: qi,
  setError: Zt,
  resetError: jr,
  setConnected: Kn,
  setClosed: pr,
  hideResendIcon: Za,
  showResendIcon: Xn,
  resendMessage: Hi,
  setIsStreaming: Rr,
  fillAssistantHistoryData: Zn,
  fillUserHistoryData: cr,
  resetHistory: Qa,
  fillInitialMessage: eu
} = Vi.actions, tu = Vi.reducer, Yi = fr({
  name: "intentions",
  initialState: ms,
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
}), Ji = (e) => e.intentions.email, ru = (e) => e.intentions.payment, {
  setEmailSuccess: nu,
  setIsPaymentSuccessful: iu,
  setPaymentFormVisibility: ou,
  setEmailError: Qn,
  setIsEmailLoading: Jr,
  setIsPaymentButtonVisible: su,
  setPaymentIntentError: au,
  setEmail: uu,
  setLink: Ki
} = Yi.actions, cu = Yi.reducer, lu = () => {
  var C;
  const { cid: e, systemType: t, marketing: r, pd: o } = z(Wt), { translations: s, purpose: c, specialUrls: l } = z(ut), { isLoading: a, isStreaming: h, historyData: b, historyIds: m } = z(pn), { error: v } = z((I) => I.chat), E = z((I) => I.intentions.link), { error: T, current: A } = z(Ji), {
    isFormVisible: P,
    error: ne,
    isSuccessful: j
  } = z(ru), Z = {
    systemType: t,
    marketing: r,
    error: v || T || ne,
    cid: e,
    isLoading: a,
    currentEmail: A,
    translations: s,
    pd: o,
    isStreaming: h,
    isPaymentButtonVisible: !1,
    isPaymentFormVisible: !1,
    isEmailFormVisible: !1,
    isResponseFormVisible: !1,
    ctaText: "",
    ctaHref: ""
  }, ye = [...m].pop(), R = ye && b[ye], me = R && R.role === X.assistant, ge = me && E, Te = !(R && (R != null && R.content.find((I) => I.buttons))), xe = R && (R == null ? void 0 : R.content.find((I) => I.payment)), je = R && (R == null ? void 0 : R.content.find((I) => I.email));
  if (me && xe)
    return {
      ...Z,
      isPaymentButtonVisible: !0
    };
  if (me && je)
    return {
      ...Z,
      isEmailFormVisible: !0,
      isPaymentFormVisible: P
    };
  if (j)
    return {
      ...Z,
      ctaText: s.ctaTextContent,
      ctaHref: "/",
      isPaymentFormVisible: P
    };
  const he = R && ((C = R == null ? void 0 : R.content) == null ? void 0 : C.find((I) => I.special));
  if (me && he && (he != null && he.special))
    return {
      ...Z,
      ctaText: l[he.special].includes("merchant") ? s.merchantButton : s.supportButton,
      ctaHref: l[he.special]
    };
  if (ge && c === on && Te)
    return {
      ...Z,
      isResponseFormVisible: !0
    };
  const S = R && !ge && !a && (Te || (R == null ? void 0 : R.role) === X.user);
  return {
    ...Z,
    ctaText: s.mealButton,
    ctaHref: ge,
    isResponseFormVisible: S
  };
};
var mn = { exports: {} }, St = typeof Reflect == "object" ? Reflect : null, ei = St && typeof St.apply == "function" ? St.apply : function(t, r, o) {
  return Function.prototype.apply.call(t, r, o);
}, nr;
St && typeof St.ownKeys == "function" ? nr = St.ownKeys : Object.getOwnPropertySymbols ? nr = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : nr = function(t) {
  return Object.getOwnPropertyNames(t);
};
function fu(e) {
  console && console.warn && console.warn(e);
}
var Xi = Number.isNaN || function(t) {
  return t !== t;
};
function Y() {
  Y.init.call(this);
}
mn.exports = Y;
mn.exports.once = mu;
Y.EventEmitter = Y;
Y.prototype._events = void 0;
Y.prototype._eventsCount = 0;
Y.prototype._maxListeners = void 0;
var ti = 10;
function hr(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(Y, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return ti;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || Xi(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    ti = e;
  }
});
Y.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Y.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || Xi(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function Zi(e) {
  return e._maxListeners === void 0 ? Y.defaultMaxListeners : e._maxListeners;
}
Y.prototype.getMaxListeners = function() {
  return Zi(this);
};
Y.prototype.emit = function(t) {
  for (var r = [], o = 1; o < arguments.length; o++)
    r.push(arguments[o]);
  var s = t === "error", c = this._events;
  if (c !== void 0)
    s = s && c.error === void 0;
  else if (!s)
    return !1;
  if (s) {
    var l;
    if (r.length > 0 && (l = r[0]), l instanceof Error)
      throw l;
    var a = new Error("Unhandled error." + (l ? " (" + l.message + ")" : ""));
    throw a.context = l, a;
  }
  var h = c[t];
  if (h === void 0)
    return !1;
  if (typeof h == "function")
    ei(h, this, r);
  else
    for (var b = h.length, m = no(h, b), o = 0; o < b; ++o)
      ei(m[o], this, r);
  return !0;
};
function Qi(e, t, r, o) {
  var s, c, l;
  if (hr(r), c = e._events, c === void 0 ? (c = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (c.newListener !== void 0 && (e.emit(
    "newListener",
    t,
    r.listener ? r.listener : r
  ), c = e._events), l = c[t]), l === void 0)
    l = c[t] = r, ++e._eventsCount;
  else if (typeof l == "function" ? l = c[t] = o ? [r, l] : [l, r] : o ? l.unshift(r) : l.push(r), s = Zi(e), s > 0 && l.length > s && !l.warned) {
    l.warned = !0;
    var a = new Error("Possible EventEmitter memory leak detected. " + l.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    a.name = "MaxListenersExceededWarning", a.emitter = e, a.type = t, a.count = l.length, fu(a);
  }
  return e;
}
Y.prototype.addListener = function(t, r) {
  return Qi(this, t, r, !1);
};
Y.prototype.on = Y.prototype.addListener;
Y.prototype.prependListener = function(t, r) {
  return Qi(this, t, r, !0);
};
function du() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function eo(e, t, r) {
  var o = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r }, s = du.bind(o);
  return s.listener = r, o.wrapFn = s, s;
}
Y.prototype.once = function(t, r) {
  return hr(r), this.on(t, eo(this, t, r)), this;
};
Y.prototype.prependOnceListener = function(t, r) {
  return hr(r), this.prependListener(t, eo(this, t, r)), this;
};
Y.prototype.removeListener = function(t, r) {
  var o, s, c, l, a;
  if (hr(r), s = this._events, s === void 0)
    return this;
  if (o = s[t], o === void 0)
    return this;
  if (o === r || o.listener === r)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete s[t], s.removeListener && this.emit("removeListener", t, o.listener || r));
  else if (typeof o != "function") {
    for (c = -1, l = o.length - 1; l >= 0; l--)
      if (o[l] === r || o[l].listener === r) {
        a = o[l].listener, c = l;
        break;
      }
    if (c < 0)
      return this;
    c === 0 ? o.shift() : pu(o, c), o.length === 1 && (s[t] = o[0]), s.removeListener !== void 0 && this.emit("removeListener", t, a || r);
  }
  return this;
};
Y.prototype.off = Y.prototype.removeListener;
Y.prototype.removeAllListeners = function(t) {
  var r, o, s;
  if (o = this._events, o === void 0)
    return this;
  if (o.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : o[t] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete o[t]), this;
  if (arguments.length === 0) {
    var c = Object.keys(o), l;
    for (s = 0; s < c.length; ++s)
      l = c[s], l !== "removeListener" && this.removeAllListeners(l);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (r = o[t], typeof r == "function")
    this.removeListener(t, r);
  else if (r !== void 0)
    for (s = r.length - 1; s >= 0; s--)
      this.removeListener(t, r[s]);
  return this;
};
function to(e, t, r) {
  var o = e._events;
  if (o === void 0)
    return [];
  var s = o[t];
  return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? hu(s) : no(s, s.length);
}
Y.prototype.listeners = function(t) {
  return to(this, t, !0);
};
Y.prototype.rawListeners = function(t) {
  return to(this, t, !1);
};
Y.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : ro.call(e, t);
};
Y.prototype.listenerCount = ro;
function ro(e) {
  var t = this._events;
  if (t !== void 0) {
    var r = t[e];
    if (typeof r == "function")
      return 1;
    if (r !== void 0)
      return r.length;
  }
  return 0;
}
Y.prototype.eventNames = function() {
  return this._eventsCount > 0 ? nr(this._events) : [];
};
function no(e, t) {
  for (var r = new Array(t), o = 0; o < t; ++o)
    r[o] = e[o];
  return r;
}
function pu(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function hu(e) {
  for (var t = new Array(e.length), r = 0; r < t.length; ++r)
    t[r] = e[r].listener || e[r];
  return t;
}
function mu(e, t) {
  return new Promise(function(r, o) {
    function s(l) {
      e.removeListener(t, c), o(l);
    }
    function c() {
      typeof e.removeListener == "function" && e.removeListener("error", s), r([].slice.call(arguments));
    }
    io(e, t, c, { once: !0 }), t !== "error" && wu(e, s, { once: !0 });
  });
}
function wu(e, t, r) {
  typeof e.on == "function" && io(e, "error", t, r);
}
function io(e, t, r, o) {
  if (typeof e.on == "function")
    o.once ? e.once(t, r) : e.on(t, r);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function s(c) {
      o.once && e.removeEventListener(t, s), r(c);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var yu = mn.exports;
const De = {
  type: vi,
  core: new yu.EventEmitter()
}, gu = (
  /*tw*/
  se({
    slots: {
      base: "tw--flex-1 tw--w-full tw--px-[15px] tw--py-[11px] tw--rounded-[20px] tw--border select-none tw--bg-glazeBg tw--text-glazeText tw--border-glaze  tw--font-density-different"
    }
  })
), vu = (
  /*tw*/
  se({
    slots: {
      base: "tw--text-dots"
    },
    variants: {
      outlined: {
        true: "tw--p-0.5 tw--bg-white tw--rounded-full tw--shadow",
        false: "tw--bg-[transparent]"
      }
    }
  })
), bu = ({ text: e = "", onClick: t, e2e: r }) => {
  const { base: o } = gu();
  return /* @__PURE__ */ y.jsx(
    "button",
    {
      onClick: t,
      className: o(),
      type: "button",
      "data-e2e": r,
      children: e
    }
  );
}, mr = ({ children: e, outlined: t = !1, onClick: r, e2e: o = null, disabled: s = !1 }) => {
  const { base: c } = vu({ outlined: t });
  return /* @__PURE__ */ y.jsx(
    "button",
    {
      onClick: r,
      className: c(),
      "data-e2e": o,
      disabled: s,
      type: "button",
      children: e
    }
  );
}, xu = (
  /* tw*/
  se({
    slots: {
      base: "tw--relative tw--flex tw--items-center",
      input: "tw--w-full tw--px-[15px] tw--py-[11px] tw--rounded-[20px] focus:tw--outline-none focus:!tw--bg-lumina tw--bg-lumina tw--text-zephyr-100 tw--font-density-different",
      loader: "tw--absolute tw--right-4 tw--top-[50%] tw--translate-y-[-50%]",
      spin: "tw--block tw--w-6 tw--h-6 tw--border-solid tw--border-[5px] tw--rounded-3xl tw--animate-rotate tw--m-auto tw--border-zephyr-200 tw--border-t-zephyr-600 tw--border-l-zephyr-600"
    }
  })
), wn = fi((e, t) => {
  const {
    disabled: r,
    e2e: o,
    isLoading: s,
    onChange: c,
    onKeyUp: l,
    placeholder: a,
    type: h,
    value: b
  } = e, { base: m, input: v, loader: E, spin: T } = xu();
  return /* @__PURE__ */ y.jsxs("div", { className: m(), children: [
    /* @__PURE__ */ y.jsx(
      "input",
      {
        className: v(),
        "data-e2e": o,
        disabled: s || r,
        onChange: c,
        onKeyUp: l,
        placeholder: a,
        ref: t,
        type: h,
        value: b
      }
    ),
    s && /* @__PURE__ */ y.jsx("span", { className: E(), children: /* @__PURE__ */ y.jsx("span", { className: T() }) })
  ] });
});
wn.displayName = "Input";
const Eu = () => {
  const e = Ke(), t = z((E) => E.meta), { translations: r } = z(ut), { isLoading: o } = z(Ji), { base: s, input: c, button: l } = Ai(), [a, h] = It(""), b = en(null);
  Vt(() => {
    _e({
      eventType: be.emailField,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid
    }), setTimeout(() => {
      b.current && b.current.focus();
    }, 500);
  });
  const m = (E) => {
    const T = E.target.value.trim();
    h(T);
  }, v = (E) => {
    E.preventDefault(), a !== "" && (e(Jr(!0)), e(uu(a)), De.core.emit(De.type.email, { email: a }), h(""));
  };
  return /* @__PURE__ */ y.jsxs(
    "form",
    {
      className: s(),
      onSubmit: v,
      "data-e2e": "email-form",
      children: [
        /* @__PURE__ */ y.jsx("div", { className: c(), children: /* @__PURE__ */ y.jsx(
          wn,
          {
            e2e: "email-input",
            isLoading: o,
            name: "email",
            onChange: m,
            ref: b,
            placeholder: r.emailPlaceholder,
            type: "email",
            value: a
          }
        ) }),
        /* @__PURE__ */ y.jsx("div", { className: l(), children: /* @__PURE__ */ y.jsx(mr, { onClick: v, e2e: "email-validate-btn", children: /* @__PURE__ */ y.jsx(
          "svg",
          {
            fill: "currentColor",
            viewBox: "0 0 24 24",
            width: "20px",
            height: "20px",
            children: /* @__PURE__ */ y.jsx(
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
}, _u = () => {
  const e = Ke(), { connected: t, isLoading: r } = z(pn), { base: o, input: s, button: c } = Ai(), [l, a] = It(""), [h, b] = It(null), m = z((P) => P.chat.lastGroupId), v = en(null);
  Vt(() => {
    setTimeout(() => {
      var P;
      (P = v.current) == null || P.focus();
    }, 500);
  }, []);
  const E = (P) => {
    a(P.target.value), A();
  }, T = (P) => {
    P.preventDefault(), l.trim() && e(cr({
      role: X.user,
      id: fe(),
      sequence: 1,
      content: {
        sequence: 1,
        text: l,
        groupId: m,
        resend: !1,
        sent: !0
      }
    })), a(""), A();
  }, A = () => {
    h && clearTimeout(h);
    const P = setTimeout(() => {
      e(qi(!0)), e(Gi(fe()));
    }, La);
    b(P);
  };
  return /* @__PURE__ */ y.jsxs(
    "form",
    {
      className: o(),
      onSubmit: T,
      "data-e2e": "user-form",
      children: [
        /* @__PURE__ */ y.jsx("div", { className: s(), children: /* @__PURE__ */ y.jsx(
          wn,
          {
            disabled: !t,
            isLoading: r,
            e2e: "message-input",
            name: "response",
            onChange: E,
            placeholder: "Write your message here...",
            type: "response",
            value: l,
            ref: v
          }
        ) }),
        /* @__PURE__ */ y.jsx("div", { className: c(), children: /* @__PURE__ */ y.jsx(mr, { onClick: T, disabled: !t, children: /* @__PURE__ */ y.jsx(
          "svg",
          {
            fill: "currentColor",
            viewBox: "0 0 24 24",
            width: "20px",
            height: "20px",
            children: /* @__PURE__ */ y.jsx(
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
}, Su = () => {
  const e = Ke(), t = lu(), r = en(null), [o, s] = It(!1), c = (v) => {
    e(ou(v));
  };
  Vt(() => {
    t.isEmailFormVisible && _e({
      eventType: be.emailField,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid,
      email: t.currentEmail
    });
  }, [t.isEmailFormVisible]);
  const l = (v) => {
    v.currentTarget.disabled = !0, De.core.emit(De.type.destroy), c(!1), s(!1);
  }, a = () => {
    e(Wi({ content: t.translations.tm1226 })), e(iu(!0)), e(su(!1)), c(!1), _e({
      eventType: be.linkProvided,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid,
      email: t.currentEmail
    }), setTimeout(() => {
      r.current && r.current.click();
    }, 7e3);
  }, h = (v) => {
    e(au(v));
  }, b = () => {
    De.core.emit(De.type.payment, { setIsPaymentContainerVisible: c, onPaymentSuccess: a, onError: h }), s(!0);
  }, m = (v) => {
    localStorage.setItem(Di, v.currentTarget.href), _e({
      eventType: be.linkClicked,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid,
      email: t.currentEmail
    }), e(pr());
  };
  return /* @__PURE__ */ y.jsxs("div", { className: "tw--space-y-[11px] tw--pb-[11px]", "data-e2e": "chat-foot", children: [
    t.error && /* @__PURE__ */ y.jsx("div", { "data-e2e": "error-message", className: "tw--pl-[35px] tw--text-[#ff0043] tw--font-medium", children: t.error }),
    t.isPaymentFormVisible && /* @__PURE__ */ y.jsx(va, { onClose: l }),
    t.isLoading && /* @__PURE__ */ y.jsx(Ia, {}),
    t.ctaHref && /* @__PURE__ */ y.jsx(
      Ni,
      {
        ref: r,
        text: t.ctaText,
        onClick: m,
        href: t.ctaHref,
        e2e: "quiz-trigger-btn"
      }
    ),
    !t.isStreaming && t.isEmailFormVisible && /* @__PURE__ */ y.jsx(Eu, {}),
    !t.isStreaming && t.isResponseFormVisible && /* @__PURE__ */ y.jsx(_u, {}),
    t.isPaymentButtonVisible && /* @__PURE__ */ y.jsx(
      ha,
      {
        text: t.translations.payButton,
        onClick: b,
        disabled: o,
        e2e: "payment-form-trigger-btn"
      }
    )
  ] });
}, Iu = (
  /*tw*/
  se({
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
      orientation: {
        horizontal: {
          base: "tw--flex-row tw--text-left",
          avatar: "tw--shrink",
          name: "tw--text-xl/7 tw--font-bold tw--leading-[30px]",
          info: "tw--pl-[10px]",
          role: "tw--text-zephyr-800",
          imgWrapper: "after:tw--absolute after:tw--w-[10px] after:tw--h-[10px] after:tw--bottom-[-2px] after:tw--left-[37px] after:tw--z-10 after:tw--rounded-full after:tw--bg-iota-dots"
        },
        vertical: {
          base: "tw--flex-col tw--text-center",
          name: "tw--text-[24px] tw--font-semibold",
          role: "tw--font-density-different tw--text-zephyr-600"
        }
      },
      minimized: {
        true: "",
        false: ""
      }
    },
    compoundSlots: [
      {
        slots: ["imgWrapper"],
        orientation: "horizontal",
        minimized: !1,
        class: "tw--relative tw--h-fit"
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
), oo = ({ orientation: e = rn.horizontal, minimized: t = !1 }) => {
  const { aiProfile: r } = z(ut), { base: o, avatar: s, info: c, name: l, role: a, imgWrapper: h } = Iu({ orientation: e, minimized: t });
  return /* @__PURE__ */ y.jsxs("div", { className: o(), children: [
    /* @__PURE__ */ y.jsx("span", { className: h(), children: /* @__PURE__ */ y.jsx(
      "img",
      {
        className: s(),
        src: r.imgSrc,
        alt: "img"
      }
    ) }),
    /* @__PURE__ */ y.jsxs("div", { className: c(), children: [
      /* @__PURE__ */ y.jsx("div", { className: l(), children: r.name }),
      /* @__PURE__ */ y.jsx("div", { className: a(), children: r.role })
    ] })
  ] });
}, Tu = () => {
  const e = Ke(), t = Is(), { base: r } = oa({ theme: t.theme }), o = (s) => {
    s.currentTarget.disabled = !0, _e({
      eventType: be.closeClicked,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid
    }), setTimeout(() => {
      e(pr());
    }, ja);
  };
  return /* @__PURE__ */ y.jsxs("div", { className: r(), "data-e2e": "chat-heading", children: [
    /* @__PURE__ */ y.jsx(oo, {}),
    t.closeVisible && /* @__PURE__ */ y.jsx(mr, { e2e: "chat-close-btn", onClick: o, children: /* @__PURE__ */ y.jsx(
      "svg",
      {
        height: "24px",
        viewBox: "0 0 24 24",
        width: "24px",
        children: /* @__PURE__ */ y.jsxs(
          "g",
          {
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeWidth: "2",
            children: [
              /* @__PURE__ */ y.jsx(
                "line",
                {
                  x1: "6",
                  x2: "18",
                  y1: "6",
                  y2: "18"
                }
              ),
              /* @__PURE__ */ y.jsx(
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
}, Pu = (e) => {
  const t = (o) => /[?&]([^=#]+)=([^&#]*)/g.test(o);
  let r;
  if (window.location.search) {
    const o = new URLSearchParams(window.location.search);
    o.append(Ta, "true"), o.append(Ca, localStorage.getItem("__cid") || ""), r = `/?${o}`;
  } else
    r = "";
  return t(e) ? e : e + r;
}, Cu = (e) => e.replaceAll(/\\r\\n|\\n|\r\n|<br>|<br\/>/g, `
`), ku = ({ properties: e }) => {
  const { purpose: t } = z(ut), { cid: r, marketing: o, systemType: s } = z(Wt), c = Ke(), l = e.href ? Pu(e.href) : "#";
  Vt(() => {
    c(Ki(l));
  });
  const a = (h) => {
    t !== on && localStorage.setItem(Di, h.currentTarget.href), _e({
      eventType: be.linkClicked,
      systemType: s,
      utmParams: o.lastUtmParams,
      customerUuid: r
    }), c(pr());
  };
  return /* @__PURE__ */ y.jsx(
    "a",
    {
      href: l,
      onClick: a,
      className: "tw--underline",
      children: e.href
    }
  );
}, ju = (e) => {
  const r = /embed\/(\w+)/.exec(e);
  return r ? r[1] : null;
}, Ru = zt.memo(function({ url: t, title: r }) {
  const [o, s] = It(!1), c = ju(t), l = () => {
    s(!0);
  };
  return o ? /* @__PURE__ */ y.jsx(
    "iframe",
    {
      className: "w-full tw--h-80 tw--py-4",
      title: r || "Missing title",
      src: `${t}?enablejsapi=1&rel=0&origin=${window.location.origin}`,
      allow: "fullscreen"
    }
  ) : /* @__PURE__ */ y.jsx(
    "div",
    {
      className: "w-full tw--h-80 tw--py-4 tw--justify-center tw--flex tw--items-center tw--pointer-events-auto",
      onClick: l,
      style: { backgroundImage: `url(https://img.youtube.com/vi/${c}/hqdefault.jpg)` },
      children: /* @__PURE__ */ y.jsx("button", { className: "tw--items-center tw--justify-center tw--w-16 tw--h-16 tw--rounded-full tw--cursor-pointer tw--pointer-events-auto tw--flex tw--bg-gradient-to-b tw--from-[#FF0000] tw--to-[#F25640]", children: /* @__PURE__ */ y.jsx("svg", { className: "tw--pointer-events-none", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ y.jsx(
        "path",
        {
          d: "M10.6665 9.09335V22.9067C10.6665 23.96 11.8265 24.6 12.7198 24.0267L23.5732 17.12C23.7632 16.9998 23.9197 16.8334 24.0282 16.6364C24.1366 16.4394 24.1935 16.2182 24.1935 15.9933C24.1935 15.7685 24.1366 15.5473 24.0282 15.3503C23.9197 15.1533 23.7632 14.9869 23.5732 14.8667L12.7198 7.97335C12.5187 7.84327 12.2862 7.76989 12.0469 7.76094C11.8076 7.75199 11.5702 7.8078 11.36 7.92249C11.1497 8.03718 10.9743 8.20649 10.8523 8.41257C10.7302 8.61864 10.666 8.85384 10.6665 9.09335V9.09335Z",
          fill: "white"
        }
      ) }) })
    }
  );
}), Lu = (
  /* tw*/
  se({
    slots: {
      base: "tw--flex-1 tw--w-full tw--px-[15px] tw--py-[11px] tw--rounded-[20px] tw--border select-none tw--text-center tw--bg-glaze tw--text-whisper"
    }
  })
);
/* tw*/
se({
  slots: {
    base: "tw--flex-1 tw--px-4 tw--py-2"
  }
});
const Bu = ({ text: e, href: t, onClick: r }) => {
  const { base: o } = Lu();
  return /* @__PURE__ */ y.jsx(
    "a",
    {
      href: t,
      onClick: r,
      className: o(),
      children: e
    }
  );
}, Mu = ({ options: e = [] }) => {
  const t = Ke(), r = z(Wt), o = !z(Ya), s = (l, a) => {
    t(cr({
      id: fe(),
      sequence: 1,
      role: X.user,
      content: {
        sequence: 1,
        text: l,
        resend: !1,
        sent: !0,
        groupId: ""
      }
    })), t(hn(l)), o && _e({
      eventType: be.buttonClick + a,
      systemType: r.systemType,
      utmParams: r.marketing.lastUtmParams,
      customerUuid: r.cid
    });
  }, c = (l) => {
    t(cr({
      id: fe(),
      sequence: 1,
      role: X.user,
      content: {
        sequence: 1,
        text: l,
        resend: !1,
        sent: !0,
        groupId: ""
      }
    }));
  };
  return [...e].sort((l, a) => l.sequence - a.sequence).map(({ value: l, link: a, sequence: h, noStream: b }) => a ? /* @__PURE__ */ y.jsx(
    Bu,
    {
      text: l,
      href: a
    },
    fe()
  ) : /* @__PURE__ */ y.jsx(
    bu,
    {
      text: l,
      onClick: b ? () => c(l) : () => s(l, h),
      e2e: "option-button"
    },
    fe()
  ));
}, Au = ({ message: e, itemId: t }) => {
  const { isStreaming: r } = z(pn), { pd: o } = z(Wt), s = z((a) => a.chat.historyIds.length - 1 === a.chat.historyIds.indexOf(t)), { base: c } = _a({ isTyping: r && s }), l = [...e.content].sort(Ja);
  return /* @__PURE__ */ y.jsx(y.Fragment, { children: l.map((a) => {
    var h, b, m, v;
    if (a.type === Me.text)
      return /* @__PURE__ */ y.jsx(
        "div",
        {
          className: "tw--flex tw--flex-col tw--space-y-[10px]",
          "data-e2e": "assistant-text",
          children: /* @__PURE__ */ y.jsx("span", { className: c(), children: /* @__PURE__ */ y.jsx(
            Go,
            {
              components: {
                a(E) {
                  return /* @__PURE__ */ y.jsx(ku, { properties: E });
                }
              },
              children: Cu(a[a.type] || "")
            },
            fe()
          ) })
        },
        fe()
      );
    if (a.type === Me.buttons && s)
      return /* @__PURE__ */ y.jsx("div", { className: "tw--flex tw--flex-col tw--space-y-[10px]", children: /* @__PURE__ */ y.jsx(Mu, { options: a[a.type] }) }, fe());
    if (a.type === Me.video)
      return /* @__PURE__ */ y.jsx(
        Ru,
        {
          "data-e2e": "assistant-iframe",
          title: ((h = a[a.type]) == null ? void 0 : h.title) || "video",
          url: ((b = a[a.type]) == null ? void 0 : b.url) || "https://www.youtube.com/embed/g4B8Dhl4pxY"
        },
        fe()
      );
    if (a.type === Me.image)
      return /* @__PURE__ */ y.jsx(
        "img",
        {
          "data-e2e": "assistant-img",
          className: "w-full tw--h-auto tw--py-4",
          src: (m = a[a.type]) == null ? void 0 : m.url,
          alt: ((v = a[a.type]) == null ? void 0 : v.alt) || "chat-image"
        },
        fe()
      );
    if (a.type === Me.payment)
      return `${a[a.type]} ${o.displayPlanPrice} ${o.billingFrequencyTmsg}`;
    if (a.type === Me.email)
      return a[a.type];
  }) });
}, Ou = zt.memo(Au), Nu = ({ itemId: e }) => {
  const t = z((r) => r.chat.historyData[e]);
  return t && /* @__PURE__ */ y.jsx(
    "div",
    {
      className: Fi({ type: t.role }).base(),
      "data-e2e": t.role === X.assistant ? "stream-assistant-msg" : "user-msg",
      children: t.role === X.assistant ? /* @__PURE__ */ y.jsx(
        Ou,
        {
          message: t,
          itemId: e
        }
      ) : [...t.content].map((r) => /* @__PURE__ */ y.jsx($u, { record: { ...r, itemId: e } }, fe()))
    }
  );
}, Fu = zt.memo(Nu), Du = ({ titleTxt: e }) => {
  const { base: t, title: r } = xa();
  return /* @__PURE__ */ y.jsxs("div", { className: t(), children: [
    r && /* @__PURE__ */ y.jsx("div", { className: r(), children: e }),
    /* @__PURE__ */ y.jsx(oo, { orientation: rn.vertical })
  ] });
}, Uu = () => {
  const { aiProfile: e } = z(ut), t = z((h) => h.chat.historyIds || []), r = z((h) => h.chat.historyData[t[0]]), { base: o, second: s, date: c } = ba(), { base: l } = Ea(), a = hs((r == null ? void 0 : r.time) || (/* @__PURE__ */ new Date()).getTime());
  return /* @__PURE__ */ y.jsx("div", { className: o(), children: /* @__PURE__ */ y.jsxs("div", { className: s(), "data-e2e": "history-container", children: [
    /* @__PURE__ */ y.jsx(Du, { titleTxt: e.welcome }),
    /* @__PURE__ */ y.jsx("div", { className: c(), "data-e2e": "stream-assistant-msg-date", children: a }),
    t.map((h) => /* @__PURE__ */ y.jsx(
      "div",
      {
        className: l(),
        "data-e2e": "history-item",
        children: /* @__PURE__ */ y.jsx(Fu, { itemId: h })
      },
      fe()
    ))
  ] }) });
}, $u = ({ record: e }) => {
  const t = Ke(), { action: r, separator: o } = Fi({ type: X.user }), s = () => {
    t(Hi(e));
  };
  return /* @__PURE__ */ y.jsxs("div", { className: o(), children: [
    /* @__PURE__ */ y.jsx("span", { children: e.text }),
    e.resend && !e.sent && /* @__PURE__ */ y.jsx("div", { className: r(), children: /* @__PURE__ */ y.jsx(mr, { outlined: !0, onClick: () => s(), children: /* @__PURE__ */ y.jsxs(
      "svg",
      {
        fill: "currentColor",
        viewBox: "0 0 24 24",
        width: "20px",
        height: "20px",
        children: [
          /* @__PURE__ */ y.jsx("path", { fill: "none", d: "M0 0h24v24H0V0z" }),
          /* @__PURE__ */ y.jsx("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" })
        ]
      }
    ) }) })
  ] });
}, zu = ({ config: e }) => {
  const t = Ke();
  return t(vs(e.meta)), t(ws(e.app.purpose)), t(ys(e.specialUrls)), t(Ei(e.app)), /* @__PURE__ */ y.jsx(
    sa,
    {
      head: /* @__PURE__ */ y.jsx(Tu, {}),
      stream: /* @__PURE__ */ y.jsx(Uu, {}),
      foot: /* @__PURE__ */ y.jsx(Su, {})
    }
  );
};
var ee = {};
function Vu(e) {
  return !!(e && typeof e.then == "function");
}
function lr(e) {
  return e || (e = 0), new Promise(function(t) {
    return setTimeout(t, e);
  });
}
function Wu(e, t) {
  return Math.floor(Math.random() * (t - e + 1) + e);
}
function wr() {
  return Math.random().toString(36).substring(2);
}
var ri = 0, Lr = 0;
function yr() {
  var e = (/* @__PURE__ */ new Date()).getTime();
  return e === ri ? (Lr++, e * 1e3 + Lr) : (ri = e, Lr = 0, e * 1e3);
}
var Gt = Object.prototype.toString.call(typeof pe.process < "u" ? pe.process : 0) === "[object process]", Gu = yr, qu = "native";
function Hu(e) {
  var t = {
    messagesCallback: null,
    bc: new BroadcastChannel(e),
    subFns: []
    // subscriberFunctions
  };
  return t.bc.onmessage = function(r) {
    t.messagesCallback && t.messagesCallback(r.data);
  }, t;
}
function Yu(e) {
  e.bc.close(), e.subFns = [];
}
function Ju(e, t) {
  try {
    return e.bc.postMessage(t, !1), Promise.resolve();
  } catch (r) {
    return Promise.reject(r);
  }
}
function Ku(e, t) {
  e.messagesCallback = t;
}
function Xu() {
  if (Gt && typeof window > "u")
    return !1;
  if (typeof BroadcastChannel == "function") {
    if (BroadcastChannel._pubkey)
      throw new Error("BroadcastChannel: Do not overwrite window.BroadcastChannel with this module, this is not a polyfill");
    return !0;
  } else
    return !1;
}
function Zu() {
  return 150;
}
const Qu = {
  create: Hu,
  close: Yu,
  onMessage: Ku,
  postMessage: Ju,
  canBeUsed: Xu,
  type: qu,
  averageResponseTime: Zu,
  microSeconds: Gu
};
var so = (
  /** @class */
  function() {
    function e(t) {
      this.ttl = t, this.set = /* @__PURE__ */ new Set(), this.timeMap = /* @__PURE__ */ new Map();
    }
    return e.prototype.has = function(t) {
      return this.set.has(t);
    }, e.prototype.add = function(t) {
      var r = this;
      this.timeMap.set(t, ao()), this.set.add(t), setTimeout(function() {
        ec(r);
      }, 0);
    }, e.prototype.clear = function() {
      this.set.clear(), this.timeMap.clear();
    }, e;
  }()
);
function ec(e) {
  for (var t = ao() - e.ttl, r = e.set[Symbol.iterator](); ; ) {
    var o = r.next().value;
    if (!o)
      return;
    var s = e.timeMap.get(o);
    if (s < t)
      e.timeMap.delete(o), e.set.delete(o);
    else
      return;
  }
}
function ao() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function gr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = JSON.parse(JSON.stringify(e));
  return typeof t.webWorkerSupport > "u" && (t.webWorkerSupport = !0), t.idb || (t.idb = {}), t.idb.ttl || (t.idb.ttl = 1e3 * 45), t.idb.fallbackInterval || (t.idb.fallbackInterval = 150), e.idb && typeof e.idb.onclose == "function" && (t.idb.onclose = e.idb.onclose), t.localstorage || (t.localstorage = {}), t.localstorage.removeTimeout || (t.localstorage.removeTimeout = 1e3 * 60), e.methods && (t.methods = e.methods), t.node || (t.node = {}), t.node.ttl || (t.node.ttl = 1e3 * 60 * 2), typeof t.node.useFastPath > "u" && (t.node.useFastPath = !0), t;
}
var tc = yr, rc = "pubkey.broadcast-channel-0-", Ve = "messages", nc = "idb";
function uo() {
  if (typeof indexedDB < "u")
    return indexedDB;
  if (typeof window < "u") {
    if (typeof window.mozIndexedDB < "u")
      return window.mozIndexedDB;
    if (typeof window.webkitIndexedDB < "u")
      return window.webkitIndexedDB;
    if (typeof window.msIndexedDB < "u")
      return window.msIndexedDB;
  }
  return !1;
}
function ic(e) {
  var t = uo(), r = rc + e, o = t.open(r, 1);
  o.onupgradeneeded = function(c) {
    var l = c.target.result;
    l.createObjectStore(Ve, {
      keyPath: "id",
      autoIncrement: !0
    });
  };
  var s = new Promise(function(c, l) {
    o.onerror = function(a) {
      return l(a);
    }, o.onsuccess = function() {
      c(o.result);
    };
  });
  return s;
}
function oc(e, t, r) {
  var o = (/* @__PURE__ */ new Date()).getTime(), s = {
    uuid: t,
    time: o,
    data: r
  }, c = e.transaction([Ve], "readwrite");
  return new Promise(function(l, a) {
    c.oncomplete = function() {
      return l();
    }, c.onerror = function(b) {
      return a(b);
    };
    var h = c.objectStore(Ve);
    h.add(s);
  });
}
function sc(e, t) {
  var r = e.transaction(Ve).objectStore(Ve), o = [];
  function s() {
    try {
      var c = IDBKeyRange.bound(t + 1, 1 / 0);
      return r.openCursor(c);
    } catch {
      return r.openCursor();
    }
  }
  return new Promise(function(c) {
    s().onsuccess = function(l) {
      var a = l.target.result;
      a ? a.value.id < t + 1 ? a.continue(t + 1) : (o.push(a.value), a.continue()) : c(o);
    };
  });
}
function ac(e, t) {
  var r = e.transaction([Ve], "readwrite").objectStore(Ve).delete(t);
  return new Promise(function(o) {
    r.onsuccess = function() {
      return o();
    };
  });
}
function uc(e, t) {
  var r = (/* @__PURE__ */ new Date()).getTime() - t, o = e.transaction(Ve).objectStore(Ve), s = [];
  return new Promise(function(c) {
    o.openCursor().onsuccess = function(l) {
      var a = l.target.result;
      if (a) {
        var h = a.value;
        if (h.time < r)
          s.push(h), a.continue();
        else {
          c(s);
          return;
        }
      } else
        c(s);
    };
  });
}
function cc(e, t) {
  return uc(e, t).then(function(r) {
    return Promise.all(r.map(function(o) {
      return ac(e, o.id);
    }));
  });
}
function lc(e, t) {
  return t = gr(t), ic(e).then(function(r) {
    var o = {
      closed: !1,
      lastCursorId: 0,
      channelName: e,
      options: t,
      uuid: wr(),
      /**
       * emittedMessagesIds
       * contains all messages that have been emitted before
       * @type {ObliviousSet}
       */
      eMIs: new so(t.idb.ttl * 2),
      // ensures we do not read messages in parrallel
      writeBlockPromise: Promise.resolve(),
      messagesCallback: null,
      readQueuePromises: [],
      db: r
    };
    return r.onclose = function() {
      o.closed = !0, t.idb.onclose && t.idb.onclose();
    }, co(o), o;
  });
}
function co(e) {
  e.closed || lo(e).then(function() {
    return lr(e.options.idb.fallbackInterval);
  }).then(function() {
    return co(e);
  });
}
function fc(e, t) {
  return !(e.uuid === t.uuid || t.eMIs.has(e.id) || e.data.time < t.messagesCallbackTime);
}
function lo(e) {
  return e.closed || !e.messagesCallback ? Promise.resolve() : sc(e.db, e.lastCursorId).then(function(t) {
    var r = t.filter(function(o) {
      return !!o;
    }).map(function(o) {
      return o.id > e.lastCursorId && (e.lastCursorId = o.id), o;
    }).filter(function(o) {
      return fc(o, e);
    }).sort(function(o, s) {
      return o.time - s.time;
    });
    return r.forEach(function(o) {
      e.messagesCallback && (e.eMIs.add(o.id), e.messagesCallback(o.data));
    }), Promise.resolve();
  });
}
function dc(e) {
  e.closed = !0, e.db.close();
}
function pc(e, t) {
  return e.writeBlockPromise = e.writeBlockPromise.then(function() {
    return oc(e.db, e.uuid, t);
  }).then(function() {
    Wu(0, 10) === 0 && cc(e.db, e.options.idb.ttl);
  }), e.writeBlockPromise;
}
function hc(e, t, r) {
  e.messagesCallbackTime = r, e.messagesCallback = t, lo(e);
}
function mc() {
  if (Gt)
    return !1;
  var e = uo();
  return !!e;
}
function wc(e) {
  return e.idb.fallbackInterval * 2;
}
const yc = {
  create: lc,
  close: dc,
  onMessage: hc,
  postMessage: pc,
  canBeUsed: mc,
  type: nc,
  averageResponseTime: wc,
  microSeconds: tc
};
var gc = yr, vc = "pubkey.broadcastChannel-", bc = "localstorage";
function fo() {
  var e;
  if (typeof window > "u")
    return null;
  try {
    e = window.localStorage, e = window["ie8-eventlistener/storage"] || window.localStorage;
  } catch {
  }
  return e;
}
function po(e) {
  return vc + e;
}
function xc(e, t) {
  return new Promise(function(r) {
    lr().then(function() {
      var o = po(e.channelName), s = {
        token: wr(),
        time: (/* @__PURE__ */ new Date()).getTime(),
        data: t,
        uuid: e.uuid
      }, c = JSON.stringify(s);
      fo().setItem(o, c);
      var l = document.createEvent("Event");
      l.initEvent("storage", !0, !0), l.key = o, l.newValue = c, window.dispatchEvent(l), r();
    });
  });
}
function Ec(e, t) {
  var r = po(e), o = function(c) {
    c.key === r && t(JSON.parse(c.newValue));
  };
  return window.addEventListener("storage", o), o;
}
function _c(e) {
  window.removeEventListener("storage", e);
}
function Sc(e, t) {
  if (t = gr(t), !ho())
    throw new Error("BroadcastChannel: localstorage cannot be used");
  var r = wr(), o = new so(t.localstorage.removeTimeout), s = {
    channelName: e,
    uuid: r,
    eMIs: o
    // emittedMessagesIds
  };
  return s.listener = Ec(e, function(c) {
    s.messagesCallback && c.uuid !== r && (!c.token || o.has(c.token) || c.data.time && c.data.time < s.messagesCallbackTime || (o.add(c.token), s.messagesCallback(c.data)));
  }), s;
}
function Ic(e) {
  _c(e.listener);
}
function Tc(e, t, r) {
  e.messagesCallbackTime = r, e.messagesCallback = t;
}
function ho() {
  if (Gt)
    return !1;
  var e = fo();
  if (!e)
    return !1;
  try {
    var t = "__broadcastchannel_check";
    e.setItem(t, "works"), e.removeItem(t);
  } catch {
    return !1;
  }
  return !0;
}
function Pc() {
  var e = 120, t = navigator.userAgent.toLowerCase();
  return t.includes("safari") && !t.includes("chrome") ? e * 2 : e;
}
const Cc = {
  create: Sc,
  close: Ic,
  onMessage: Tc,
  postMessage: xc,
  canBeUsed: ho,
  type: bc,
  averageResponseTime: Pc,
  microSeconds: gc
};
var kc = yr, jc = "simulate", yn = /* @__PURE__ */ new Set();
function Rc(e) {
  var t = {
    name: e,
    messagesCallback: null
  };
  return yn.add(t), t;
}
function Lc(e) {
  yn.delete(e);
}
function Bc(e, t) {
  return new Promise(function(r) {
    return setTimeout(function() {
      var o = Array.from(yn);
      o.filter(function(s) {
        return s.name === e.name;
      }).filter(function(s) {
        return s !== e;
      }).filter(function(s) {
        return !!s.messagesCallback;
      }).forEach(function(s) {
        return s.messagesCallback(t);
      }), r();
    }, 5);
  });
}
function Mc(e, t) {
  e.messagesCallback = t;
}
function Ac() {
  return !0;
}
function Oc() {
  return 5;
}
const Nc = {
  create: Rc,
  close: Lc,
  onMessage: Mc,
  postMessage: Bc,
  canBeUsed: Ac,
  type: jc,
  averageResponseTime: Oc,
  microSeconds: kc
};
var Kr = [
  Qu,
  // fastest
  yc,
  Cc
];
if (Gt) {
  var ni = require("../../src/methods/node.js");
  typeof ni.canBeUsed == "function" && Kr.push(ni);
}
function mo(e) {
  var t = [].concat(e.methods, Kr).filter(Boolean);
  if (e.type) {
    if (e.type === "simulate")
      return Nc;
    var r = t.find(function(s) {
      return s.type === e.type;
    });
    if (r)
      return r;
    throw new Error("method-type " + e.type + " not found");
  }
  !e.webWorkerSupport && !Gt && (t = t.filter(function(s) {
    return s.type !== "idb";
  }));
  var o = t.find(function(s) {
    return s.canBeUsed();
  });
  if (o)
    return o;
  throw new Error("No useable methode found:" + JSON.stringify(Kr.map(function(s) {
    return s.type;
  })));
}
var gn = function(t, r) {
  this.name = t, Xr && (r = Xr), this.options = gr(r), this.method = mo(this.options), this._iL = !1, this._onML = null, this._addEL = {
    message: [],
    internal: []
  }, this._uMP = /* @__PURE__ */ new Set(), this._befC = [], this._prepP = null, Uc(this);
};
gn._pubkey = !0;
function Fc(e) {
  e = gr(e);
  var t = mo(e);
  return t.type === "node" ? t.clearNodeFolder().then(function() {
    return !0;
  }) : Promise.resolve(!1);
}
var Xr;
function Dc(e) {
  Xr = e;
}
gn.prototype = {
  postMessage: function(t) {
    if (this.closed)
      throw new Error("BroadcastChannel.postMessage(): Cannot post message after channel has closed");
    return ii(this, "message", t);
  },
  postInternal: function(t) {
    return ii(this, "internal", t);
  },
  set onmessage(e) {
    var t = this.method.microSeconds(), r = {
      time: t,
      fn: e
    };
    si(this, "message", this._onML), e && typeof e == "function" ? (this._onML = r, oi(this, "message", r)) : this._onML = null;
  },
  addEventListener: function(t, r) {
    var o = this.method.microSeconds(), s = {
      time: o,
      fn: r
    };
    oi(this, t, s);
  },
  removeEventListener: function(t, r) {
    var o = this._addEL[t].find(function(s) {
      return s.fn === r;
    });
    si(this, t, o);
  },
  close: function() {
    var t = this;
    if (!this.closed) {
      this.closed = !0;
      var r = this._prepP ? this._prepP : Promise.resolve();
      return this._onML = null, this._addEL.message = [], r.then(function() {
        return Promise.all(Array.from(t._uMP));
      }).then(function() {
        return Promise.all(t._befC.map(function(o) {
          return o();
        }));
      }).then(function() {
        return t.method.close(t._state);
      });
    }
  },
  get type() {
    return this.method.type;
  },
  get isClosed() {
    return this.closed;
  }
};
function ii(e, t, r) {
  var o = e.method.microSeconds(), s = {
    time: o,
    type: t,
    data: r
  }, c = e._prepP ? e._prepP : Promise.resolve();
  return c.then(function() {
    var l = e.method.postMessage(e._state, s);
    return e._uMP.add(l), l.catch().then(function() {
      return e._uMP.delete(l);
    }), l;
  });
}
function Uc(e) {
  var t = e.method.create(e.name, e.options);
  Vu(t) ? (e._prepP = t, t.then(function(r) {
    e._state = r;
  })) : e._state = t;
}
function wo(e) {
  return e._addEL.message.length > 0 || e._addEL.internal.length > 0;
}
function oi(e, t, r) {
  e._addEL[t].push(r), $c(e);
}
function si(e, t, r) {
  e._addEL[t] = e._addEL[t].filter(function(o) {
    return o !== r;
  }), zc(e);
}
function $c(e) {
  if (!e._iL && wo(e)) {
    var t = function(s) {
      e._addEL[s.type].forEach(function(c) {
        s.time >= c.time && c.fn(s.data);
      });
    }, r = e.method.microSeconds();
    e._prepP ? e._prepP.then(function() {
      e._iL = !0, e.method.onMessage(e._state, t, r);
    }) : (e._iL = !0, e.method.onMessage(e._state, t, r));
  }
}
function zc(e) {
  if (e._iL && !wo(e)) {
    e._iL = !1;
    var t = e.method.microSeconds();
    e.method.onMessage(e._state, null, t);
  }
}
const Vc = Object.prototype.toString.call(typeof pe.process < "u" ? pe.process : 0) === "[object process]";
function Wc(e) {
  if (!(typeof WorkerGlobalScope == "function" && self instanceof WorkerGlobalScope)) {
    if (typeof window.addEventListener != "function")
      return;
    window.addEventListener("beforeunload", function() {
      e();
    }, !0), window.addEventListener("unload", function() {
      e();
    }, !0);
  }
}
const Gc = {
  add: Wc
}, qc = {};
var Hc = Vc ? qc : Gc, st = /* @__PURE__ */ new Set(), ai = !1;
function Yc() {
  ai || (ai = !0, Hc.add(yo));
}
function Jc(e) {
  if (Yc(), typeof e != "function")
    throw new Error("Listener is no function");
  st.add(e);
  var t = {
    remove: function() {
      return st.delete(e);
    },
    run: function() {
      return st.delete(e), e();
    }
  };
  return t;
}
function yo() {
  var e = [];
  return st.forEach(function(t) {
    e.push(t()), st.delete(t);
  }), Promise.all(e);
}
function Kc() {
  st.clear();
}
function Xc() {
  return st.size;
}
const Zc = {
  add: Jc,
  runAll: yo,
  removeAll: Kc,
  getSize: Xc
};
var go = function(t, r) {
  this._channel = t, this._options = r, this.isLeader = !1, this.isDead = !1, this.token = wr(), this._isApl = !1, this._reApply = !1, this._unl = [], this._lstns = [], this._invs = [], this._dpL = function() {
  }, this._dpLC = !1;
};
go.prototype = {
  applyOnce: function() {
    var t = this;
    if (this.isLeader || this.isDead)
      return Promise.resolve(!1);
    if (this._isApl)
      return this._reApply = !0, Promise.resolve(!1);
    this._isApl = !0;
    var r = !1, o = function(l) {
      l.context === "leader" && l.token != t.token && (l.action === "apply" && l.token > t.token && (r = !0), l.action === "tell" && (r = !0));
    };
    this._channel.addEventListener("internal", o);
    var s = ot(this, "apply").then(function() {
      return lr(t._options.responseTime);
    }).then(function() {
      return r ? Promise.reject(new Error()) : ot(t, "apply");
    }).then(function() {
      return lr(t._options.responseTime);
    }).then(function() {
      return r ? Promise.reject(new Error()) : ot(t);
    }).then(function() {
      return vo(t);
    }).then(function() {
      return !0;
    }).catch(function() {
      return !1;
    }).then(function(c) {
      return t._channel.removeEventListener("internal", o), t._isApl = !1, !c && t._reApply ? (t._reApply = !1, t.applyOnce()) : c;
    });
    return s;
  },
  awaitLeadership: function() {
    return this._aLP || (this._aLP = Qc(this)), this._aLP;
  },
  set onduplicate(e) {
    this._dpL = e;
  },
  die: function() {
    var t = this;
    if (!this.isDead)
      return this.isDead = !0, this._lstns.forEach(function(r) {
        return t._channel.removeEventListener("internal", r);
      }), this._invs.forEach(function(r) {
        return clearInterval(r);
      }), this._unl.forEach(function(r) {
        r.remove();
      }), ot(this, "death");
  }
};
function Qc(e) {
  return e.isLeader ? Promise.resolve() : new Promise(function(t) {
    var r = !1;
    function o() {
      r || (r = !0, clearInterval(s), e._channel.removeEventListener("internal", c), t(!0));
    }
    e.applyOnce().then(function() {
      e.isLeader && o();
    });
    var s = setInterval(function() {
      e.applyOnce().then(function() {
        e.isLeader && o();
      });
    }, e._options.fallbackInterval);
    e._invs.push(s);
    var c = function(a) {
      a.context === "leader" && a.action === "death" && e.applyOnce().then(function() {
        e.isLeader && o();
      });
    };
    e._channel.addEventListener("internal", c), e._lstns.push(c);
  });
}
function ot(e, t) {
  var r = {
    context: "leader",
    action: t,
    token: e.token
  };
  return e._channel.postInternal(r);
}
function vo(e) {
  e.isLeader = !0;
  var t = Zc.add(function() {
    return e.die();
  });
  e._unl.push(t);
  var r = function(s) {
    s.context === "leader" && s.action === "apply" && ot(e, "tell"), s.context === "leader" && s.action === "tell" && !e._dpLC && (e._dpLC = !0, e._dpL(), ot(e, "tell"));
  };
  return e._channel.addEventListener("internal", r), e._lstns.push(r), ot(e, "tell");
}
function el(e, t) {
  return e || (e = {}), e = JSON.parse(JSON.stringify(e)), e.fallbackInterval || (e.fallbackInterval = 3e3), e.responseTime || (e.responseTime = t.method.averageResponseTime(t.options)), e;
}
function tl(e, t) {
  if (e._leaderElector)
    throw new Error("BroadcastChannel already has a leader-elector");
  t = el(t, e);
  var r = new go(e, t);
  return e._befC.push(function() {
    return r.die();
  }), e._leaderElector = r, r;
}
const rl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BroadcastChannel: gn,
  beLeader: vo,
  clearNodeFolder: Fc,
  createLeaderElection: tl,
  enforceOptions: Dc
}, Symbol.toStringTag, { value: "Module" })), nl = /* @__PURE__ */ Jo(rl);
var vn;
Object.defineProperty(ee, "__esModule", {
  value: !0
});
var bo = ee.initMessageListener = ee.initStateWithPrevTab = ee.withReduxStateSync = ee.createReduxStateSync = vn = ee.createStateSyncMiddleware = ee.WINDOW_STATE_SYNC_ID = ee.INIT_MESSAGE_LISTENER = ee.RECEIVE_INIT_STATE = ee.SEND_INIT_STATE = ee.GET_INIT_STATE = void 0;
ee.generateUuidForAction = _o;
ee.isActionAllowed = So;
ee.isActionSynced = ll;
ee.MessageListener = Io;
var il = nl, Zr = 0, bn = ee.GET_INIT_STATE = "&_GET_INIT_STATE", xn = ee.SEND_INIT_STATE = "&_SEND_INIT_STATE", En = ee.RECEIVE_INIT_STATE = "&_RECEIVE_INIT_STATE", ol = ee.INIT_MESSAGE_LISTENER = "&_INIT_MESSAGE_LISTENER", Qr = {
  channel: "redux_state_sync",
  predicate: null,
  blacklist: [],
  whitelist: [],
  broadcastChannelOption: void 0,
  prepareState: function(t) {
    return t;
  },
  receiveState: function(t, r) {
    return r;
  }
}, sl = function() {
  return { type: bn };
}, al = function() {
  return { type: xn };
}, ul = function(t) {
  return { type: En, payload: t };
}, cl = function() {
  return { type: ol };
};
function Je() {
  return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
}
function xo() {
  return "" + Je() + Je() + "-" + Je() + "-" + Je() + "-" + Je() + "-" + Je() + Je() + Je();
}
var Eo = ee.WINDOW_STATE_SYNC_ID = xo();
function _o(e) {
  var t = e;
  return t.$uuid = xo(), t.$wuid = Eo, t;
}
function So(e) {
  var t = e.predicate, r = e.blacklist, o = e.whitelist, s = function() {
    return !0;
  };
  return t && typeof t == "function" ? s = t : Array.isArray(r) ? s = function(l) {
    return r.indexOf(l.type) < 0;
  } : Array.isArray(o) && (s = function(l) {
    return o.indexOf(l.type) >= 0;
  }), s;
}
function ll(e) {
  return !!e.$isSync;
}
function Io(e) {
  var t = e.channel, r = e.dispatch, o = e.allowed, s = !1, c = {};
  this.handleOnMessage = function(l) {
    l.$wuid !== Eo && l.type !== En && l.$uuid && l.$uuid !== Zr && (l.type === bn && !c[l.$wuid] ? (c[l.$wuid] = !0, r(al())) : l.type === xn && !c[l.$wuid] ? s || (s = !0, r(ul(l.payload))) : o(l) && (Zr = l.$uuid, r(Object.assign(l, {
      $isSync: !0
    }))));
  }, this.messageChannel = t, this.messageChannel.onmessage = this.handleOnMessage;
}
vn = ee.createStateSyncMiddleware = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Qr, r = So(t), o = new il.BroadcastChannel(t.channel, t.broadcastChannelOption), s = t.prepareState || Qr.prepareState, c = null;
  return function(l) {
    var a = l.getState, h = l.dispatch;
    return function(b) {
      return function(m) {
        if (c || (c = new Io({ channel: o, dispatch: h, allowed: r })), m && !m.$uuid) {
          var v = _o(m);
          Zr = v.$uuid;
          try {
            if (m.type === xn)
              return a() && (v.payload = s(a()), o.postMessage(v)), b(m);
            (r(v) || m.type === bn) && o.postMessage(v);
          } catch {
            console.error("Your browser doesn't support cross tab communication");
          }
        }
        return b(Object.assign(m, {
          $isSync: typeof m.$isSync > "u" ? !1 : m.$isSync
        }));
      };
    };
  };
};
var fl = ee.createReduxStateSync = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qr.receiveState;
  return function(o, s) {
    var c = o;
    return s.type === En && (c = r(o, s.payload)), t(c, s);
  };
};
ee.withReduxStateSync = fl;
ee.initStateWithPrevTab = function(t) {
  var r = t.dispatch;
  r(sl());
};
bo = ee.initMessageListener = function(t) {
  var r = t.dispatch;
  r(cl());
};
Po = To = void 0;
var dl = "persist/PERSIST", To = dl, pl = "persist/PURGE", Po = pl, _n = {}, Sn = {};
Sn.__esModule = !0;
Sn.default = wl;
function ir(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ir = function(r) {
    return typeof r;
  } : ir = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, ir(e);
}
function Br() {
}
var hl = {
  getItem: Br,
  setItem: Br,
  removeItem: Br
};
function ml(e) {
  if ((typeof self > "u" ? "undefined" : ir(self)) !== "object" || !(e in self))
    return !1;
  try {
    var t = self[e], r = "redux-persist ".concat(e, " test");
    t.setItem(r, "test"), t.getItem(r), t.removeItem(r);
  } catch {
    return pe.process.env.NODE_ENV !== "production" && console.warn("redux-persist ".concat(e, " test failed, persistence will be disabled.")), !1;
  }
  return !0;
}
function wl(e) {
  var t = "".concat(e, "Storage");
  return ml(t) ? self[t] : (pe.process.env.NODE_ENV !== "production" && console.error("redux-persist failed to create sync storage. falling back to noop storage."), hl);
}
_n.__esModule = !0;
_n.default = vl;
var yl = gl(Sn);
function gl(e) {
  return e && e.__esModule ? e : { default: e };
}
function vl(e) {
  var t = (0, yl.default)(e);
  return {
    getItem: function(o) {
      return new Promise(function(s, c) {
        s(t.getItem(o));
      });
    },
    setItem: function(o, s) {
      return new Promise(function(c, l) {
        c(t.setItem(o, s));
      });
    },
    removeItem: function(o) {
      return new Promise(function(s, c) {
        s(t.removeItem(o));
      });
    }
  };
}
var Co = void 0, bl = xl(_n);
function xl(e) {
  return e && e.__esModule ? e : { default: e };
}
var El = (0, bl.default)("local");
Co = El;
const _l = (e) => (t) => {
  const r = (o) => {
    var l;
    const { meta: s } = e.getState(), c = {};
    return s.pd && typeof o == "object" && "billingOptionType" in o ? (o.billingFrequencyTmsg = o.billingOptionType === "one-time" ? s.pd.oneTimer : (l = s.pd.subscriberBillingFrequency) == null ? void 0 : l.replace(
      "{1}",
      o.frequencyInMonths
    ), o = { ...o, ...c }, o) : c;
  };
  return De.core.on(De.type.emailSuccess, () => {
    const { meta: o, intentions: s } = e.getState();
    e.dispatch(Jr(!1)), e.dispatch(Qn("")), e.dispatch(
      cr({
        id: fe(),
        role: X.user,
        sequence: 1,
        content: {
          sequence: 1,
          text: s.email.current,
          resend: !1,
          sent: !0,
          groupId: ""
        }
      })
    ), e.dispatch(hn(s.email.current)), e.dispatch(nu(!0)), _e({
      eventType: be.emailEntered,
      systemType: o.systemType,
      utmParams: o.marketing.lastUtmParams,
      customerUuid: o.cid,
      email: s.email.current
    });
  }), De.core.on(De.type.emailError, (o) => {
    const { meta: s, intentions: c, config: l } = e.getState(), { tm716: a, tm526: h, tm715: b, tm505: m } = l.translations;
    if (e.dispatch(Jr(!1)), o.status === 409) {
      e.dispatch(Wi({
        content: a,
        buttons: [
          { sequence: 1, id: "opt-1", text: h, value: h, link: o.data.buttonLink, noStream: !0 },
          { sequence: 2, id: "opt-2", text: b, value: b, link: "", noStream: !0 }
        ]
      })), _e({
        eventType: be.emailExist,
        systemType: s.systemType,
        utmParams: s.marketing.lastUtmParams,
        customerUuid: s.cid,
        email: c.email.current
      });
      return;
    }
    o.status === 422 && (e.dispatch(Qn(o.errors.email[0] || m)), _e({
      eventType: be.emailWrong,
      systemType: s.systemType,
      utmParams: s.marketing.lastUtmParams,
      customerUuid: s.cid,
      email: c.email.current
    }));
  }), ui("marketing", e, bs), ui(
    "__pd",
    e,
    xs,
    r
  ), (o) => {
    if (Ki.match(o) && o.payload) {
      const { meta: s, intentions: c } = e.getState();
      _e({
        eventType: be.linkProvided,
        systemType: s.systemType,
        utmParams: s.marketing.lastUtmParams,
        customerUuid: s.cid,
        email: c.email.current
      });
    }
    t(o);
  };
}, ui = (e, t, r, o) => {
  const s = setInterval(() => {
    let c = localStorage.getItem(e) || "";
    try {
      c = JSON.parse(c);
    } catch {
      c = localStorage.getItem(e) || "";
    }
    o && c && (c = o(c)), o && c && (t.dispatch(r(c)), clearInterval(s));
  }, ka);
};
let le;
const Sl = (e) => (t) => (r) => {
  const { meta: o, chat: s, config: c } = e.getState(), l = () => {
    const { config: m } = e.getState();
    e.dispatch(Nt()), e.dispatch(Zt(m.translations.error));
  }, a = () => {
    e.dispatch(Xn({ itemId: s.historyIds.pop() })), l();
  }, h = (m) => {
    if (m.role === X.user && e.dispatch(Xt()), le && le.connected && m.message.trim() !== "") {
      le.emit(Ce.chat, { time: (/* @__PURE__ */ new Date()).getTime(), ...m }, ci(a)), e.dispatch(jr());
      return;
    }
    a();
  }, b = ({ itemId: m }) => {
    e.dispatch(Za({ itemId: m })), e.dispatch(Xt());
    const v = () => {
      const { config: T } = e.getState();
      e.dispatch(Xn({ itemId: m })), e.dispatch(Nt()), e.dispatch(Zt(T.translations.error));
    }, E = s.historyData[m].content.map((T) => T.text).join([`
`]);
    le != null && le.connected && E.trim() !== "" ? (le.volatile.emit(
      Ce.chat,
      {
        role: X.user,
        message: E,
        term: Et(rt.chat),
        user_id: o.cid,
        messageId: m,
        region: o.region
      },
      ci(v)
    ), e.dispatch(jr())) : v();
  };
  if (hn.match(r) && !("$isSync" in r) && h({
    role: X.user,
    message: r.payload,
    term: Et(rt.chat),
    user_id: o.cid,
    region: o.region,
    messageId: [...s.historyIds].pop()
  }), pr.match(r)) {
    const m = document.querySelector("#chatbot-container");
    document.body && m && c.purpose !== on && (m.innerHTML = "", document.body.classList.remove(Ui)), localStorage.setItem(Pa, (/* @__PURE__ */ new Date()).getTime().toString()), le && le.close(), window.location.href = c.close.href || Ra;
  }
  if (qi.match(r) && r.payload && !("$isSync" in r)) {
    const m = [...s.historyIds].pop(), v = s.historyData[m], E = s.historyData[m].content.map(({ text: T }) => T).join(`
`);
    v.role === X.user && E.trim() !== "" && h({
      role: X.user,
      message: E,
      term: Et(rt.chat),
      user_id: o.cid,
      region: o.region,
      messageId: m
    });
  }
  if (Hi.match(r) && !("$isSync" in r) && b(r.payload), !Ei.match(r))
    return t(r);
  e.dispatch(Xt()), le = Yo.connect(r.payload.chatUrl, { query: `cid=${o.cid}`, ...Ba }), le.on(Ce.connect, () => {
    const { meta: m } = e.getState();
    le.sendBuffer = [], le.emit(Ce.chatHistory, { user_id: m.cid, region: m.region, term: Et(rt.chat) }), e.dispatch(Kn(!0)), e.dispatch(Gi(fe()));
  }), le.on(Ce.chatHistory, ({ history: m, errors: v, region: E }) => {
    e.dispatch(Nt()), e.dispatch(Rr(!1)), e.dispatch(Es(E));
    const { config: T, meta: A } = e.getState();
    if (v.length) {
      e.dispatch(Zt(v[0]));
      return;
    }
    if (m.length) {
      e.dispatch(Xa(m));
      return;
    }
    e.dispatch(Qa()), e.dispatch(Xt());
    let P = 0;
    T.aiProfile.initialMessage.forEach((ne, j, F) => {
      P += 1e3, setTimeout(() => {
        e.dispatch(eu(ne)), F.length === j + 1 && (T.aiProfile.initialMessage.forEach((Z) => h({
          role: X.assistant,
          term: Et(rt.chat),
          user_id: A.cid,
          message: JSON.stringify(Z.content),
          messageId: Z.id,
          region: A.region
        })), e.dispatch(Nt()));
      }, P);
    });
  }), le.on(Ce.streamStart, ({ id: m }) => {
    e.dispatch(Rr(!0)), e.dispatch(Nt()), e.dispatch(Ka()), e.dispatch(jr()), e.dispatch(Zn({ id: m }));
  }), le.on(Ce.streamData, (m) => {
    var v;
    e.dispatch(Zn({
      id: m.id,
      sequence: m.sequence,
      content: {
        type: m.type,
        [m.type]: m[m.type],
        sequence: m.sequence
      }
    })), (v = m.errors) != null && v.length && !s.error && e.dispatch(Zt(m.errors[0]));
  }), le.on(Ce.streamEnd, () => {
    e.dispatch(Rr(!1));
  }), le.on(Ce.streamError, l), le.on(Ce.error, l), le.on(Ce.disconnect, () => {
    e.dispatch(Kn(!1));
  }), t(r);
}, ci = (e, t = 5e3) => {
  let r = !1;
  const o = setTimeout(() => {
    r || (r = !0, e());
  }, t);
  return () => {
    r || (r = !0, clearTimeout(o));
  };
}, Il = {
  key: "root",
  storage: Co,
  whitelist: ["chat", "meta", "config"]
}, In = Vo({
  reducer: qo(Il, Wo({
    meta: _s,
    config: gs,
    chat: tu,
    intentions: cu
  })),
  middleware: (e) => e({ serializableCheck: !1 }).concat(Sl, _l, vn({ blacklist: [To, Po] }))
});
bo(In);
const Tl = Ho(In);
let li = !1;
const Vl = (e) => {
  li || (li = !0, Ft.createRoot(e.root).render(
    /* @__PURE__ */ y.jsx(zo, { store: In, children: /* @__PURE__ */ y.jsx(gi, { persistor: Tl, children: /* @__PURE__ */ y.jsx(zu, { config: e.initialConfig }) }) })
  ), document.body.classList.add(Ui));
};
export {
  Vl as ReactBotClient,
  Vl as default,
  De as intent
};
//# sourceMappingURL=index.es.js.map
