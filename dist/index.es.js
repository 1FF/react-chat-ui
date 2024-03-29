(function(){"use strict";try{if(typeof document<"u"){const t=document.createElement("style");t.id="react-tw-ai-client",t.appendChild(document.createTextNode('*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:Plus Jakarta Sans,Roboto,Mulish,Exo,Helvetica,Arial,sans-serif;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.tw--pointer-events-none{pointer-events:none}.tw--pointer-events-auto{pointer-events:auto}.tw--fixed{position:fixed}.tw--absolute{position:absolute}.tw--relative{position:relative}.tw---top-1\\/2{top:-50%}.tw--bottom-0{bottom:0}.tw--bottom-1{bottom:.25rem}.tw--bottom-\\[-16px\\]{bottom:-16px}.tw--left-0{left:0}.tw--right-0{right:0}.tw--right-4{right:1rem}.tw--right-\\[-10px\\]{right:-10px}.tw--top-0{top:0}.tw--top-8{top:2rem}.tw--top-\\[-30px\\]{top:-30px}.tw--top-\\[50\\%\\]{top:50%}.tw--z-50{z-index:50}.tw--z-\\[101\\]{z-index:101}.tw--m-0{margin:0}.tw--m-auto{margin:auto}.tw--mx-10{margin-left:2.5rem;margin-right:2.5rem}.tw--mx-\\[30px\\]{margin-left:30px;margin-right:30px}.tw--mx-auto{margin-left:auto;margin-right:auto}.tw--my-4{margin-top:1rem;margin-bottom:1rem}.tw--mb-5{margin-bottom:1.25rem}.tw--mb-6{margin-bottom:1.5rem}.tw--mb-7{margin-bottom:1.75rem}.tw--mb-\\[11px\\]{margin-bottom:11px}.tw--mb-auto{margin-bottom:auto}.tw--ml-7{margin-left:1.75rem}.tw--ml-auto{margin-left:auto}.tw--mr-0{margin-right:0}.tw--mr-5{margin-right:1.25rem}.tw--mr-\\[5px\\]{margin-right:5px}.tw--mt-0{margin-top:0}.tw--mt-24{margin-top:6rem}.tw--mt-\\[11px\\]{margin-top:11px}.tw--mt-\\[30px\\]{margin-top:30px}.tw--box-border{box-sizing:border-box}.tw--box-content{box-sizing:content-box}.tw--block{display:block}.tw--inline-block{display:inline-block}.tw--flex{display:flex}.tw--grid{display:grid}.tw--hidden{display:none}.tw--h-16{height:4rem}.tw--h-4{height:1rem}.tw--h-6{height:1.5rem}.tw--h-8{height:2rem}.tw--h-80{height:20rem}.tw--h-\\[12px\\]{height:12px}.tw--h-\\[50px\\]{height:50px}.tw--h-\\[60px\\]{height:60px}.tw--h-auto{height:auto}.tw--h-fit{height:-moz-fit-content;height:fit-content}.tw--h-full{height:100%}.tw--h-screen{height:100vh}.tw--max-h-\\[700px\\]{max-height:700px}.tw--max-h-screen{max-height:100vh}.tw--min-h-\\[400px\\]{min-height:400px}.tw--w-16{width:4rem}.tw--w-4{width:1rem}.tw--w-6{width:1.5rem}.tw--w-64{width:16rem}.tw--w-8{width:2rem}.tw--w-\\[12px\\]{width:12px}.tw--w-fit{width:-moz-fit-content;width:fit-content}.tw--w-full{width:100%}.tw--w-screen{width:100vw}.tw--max-w-\\[280px\\]{max-width:280px}.tw--max-w-\\[335px\\]{max-width:335px}.tw--max-w-\\[375px\\]{max-width:375px}.tw--max-w-\\[400px\\]{max-width:400px}.tw--max-w-\\[500px\\]{max-width:500px}.tw--max-w-md{max-width:28rem}.tw--max-w-xs{max-width:20rem}.tw--flex-1{flex:1 1 0%}.tw--shrink{flex-shrink:1}.tw--shrink-0{flex-shrink:0}.tw--grow-0{flex-grow:0}.tw--translate-x-72{--tw-translate-x: 18rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.tw--translate-y-1\\/2{--tw-translate-y: 50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.tw--translate-y-\\[-50\\%\\]{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes tw--rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.tw--animate-rotate{animation:tw--rotate .5s linear infinite}@keyframes tw--text-spin{0%{transform:translate(18rem)}6.25%,12.5%{transform:translate(-.5rem)}18.75%,25%{transform:translate(-21.5rem)}31.25%,37.5%{transform:translate(-42.5rem)}43.75%,50%{transform:translate(-63.5rem)}56.25%,62.5%{transform:translate(-84.5rem)}68.75%,75%{transform:translate(-105.5rem)}81.25%,87.5%{transform:translate(-126.5rem)}93.75%,to{transform:translate(-147.5em)}}.tw--animate-text-spin{animation:tw--text-spin 30s linear infinite}.tw--animate-wave{animation:tw--wave 1.3s linear infinite}.tw--animate-wave-delay{animation:tw--wave 1.3s linear infinite -1.1s}@keyframes tw--wave{0%{transform:initial}60%{transform:initial}to{transform:initial}30%{transform:translateY(-15px)}}.tw--animate-wave-delay-2{animation:tw--wave 1.3s linear infinite -.9s}.tw--cursor-pointer{cursor:pointer}.tw--select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.tw--flex-row{flex-direction:row}.tw--flex-col{flex-direction:column}.tw--flex-col-reverse{flex-direction:column-reverse}.tw--flex-wrap{flex-wrap:wrap}.tw--items-end{align-items:flex-end}.tw--items-center{align-items:center}.tw--items-stretch{align-items:stretch}.tw--justify-center{justify-content:center}.tw--justify-between{justify-content:space-between}.tw--gap-2{gap:.5rem}.tw--space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.tw--space-x-\\[6px\\]>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(6px * var(--tw-space-x-reverse));margin-left:calc(6px * calc(1 - var(--tw-space-x-reverse)))}.tw--space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.tw--space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.25rem * var(--tw-space-y-reverse))}.tw--space-y-\\[10px\\]>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(10px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(10px * var(--tw-space-y-reverse))}.tw--space-y-\\[11px\\]>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(11px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(11px * var(--tw-space-y-reverse))}.tw--self-stretch{align-self:stretch}.tw--justify-self-start{justify-self:start}.tw--justify-self-end{justify-self:end}.tw--justify-self-stretch{justify-self:stretch}.tw--overflow-hidden{overflow:hidden}.tw--overflow-y-scroll{overflow-y:scroll}.tw--whitespace-pre-wrap{white-space:pre-wrap}.tw--break-words{overflow-wrap:break-word}.tw--rounded-3xl{border-radius:1.5rem}.tw--rounded-\\[20px\\]{border-radius:20px}.tw--rounded-full{border-radius:9999px}.tw--rounded-lg{border-radius:.5rem}.tw--rounded-xl{border-radius:.75rem}.tw--border{border-width:1px}.tw--border-0{border-width:0px}.tw--border-\\[5px\\]{border-width:5px}.tw--border-r{border-right-width:1px}.tw--border-solid{border-style:solid}.tw--border-glaze{border-color:var(--glaze)}.tw--border-zephyr-200{border-color:var(--zephyr-200)}.tw--border-l-zephyr-600{border-left-color:var(--zephyr-600)}.tw--border-r-\\[\\#cacadb\\]{--tw-border-opacity: 1;border-right-color:rgb(202 202 219 / var(--tw-border-opacity))}.tw--border-t-zephyr-600{border-top-color:var(--zephyr-600)}.tw--bg-\\[\\#0f0e1e\\]{--tw-bg-opacity: 1;background-color:rgb(15 14 30 / var(--tw-bg-opacity))}.tw--bg-\\[transparent\\]{background-color:transparent}.tw--bg-glaze{background-color:var(--glaze)}.tw--bg-glazeBg{background-color:var(--glazeBg)}.tw--bg-iota-dots{background-color:var(--iota-dots)}.tw--bg-loader{background-color:var(--loader)}.tw--bg-lumina{background-color:var(--lumina)}.tw--bg-neon{background-color:var(--neon)}.tw--bg-pale-dots{background-color:var(--pale-dots)}.tw--bg-seraph{background-color:var(--seraph)}.tw--bg-whisper{background-color:var(--whisper)}.tw--bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.tw--bg-zephyr-100{background-color:var(--zephyr-100)}.tw--bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.tw--from-\\[\\#FF0000\\]{--tw-gradient-from: #FF0000 var(--tw-gradient-from-position);--tw-gradient-to: rgb(255 0 0 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.tw--to-\\[\\#F25640\\]{--tw-gradient-to: #F25640 var(--tw-gradient-to-position)}.tw--p-0{padding:0}.tw--p-0\\.5{padding:.125rem}.tw--p-1{padding:.25rem}.tw--p-3{padding:.75rem}.tw--p-5{padding:1.25rem}.tw--p-7{padding:1.75rem}.tw--px-4{padding-left:1rem;padding-right:1rem}.tw--px-5{padding-left:1.25rem;padding-right:1.25rem}.tw--px-\\[15px\\]{padding-left:15px;padding-right:15px}.tw--py-2{padding-top:.5rem;padding-bottom:.5rem}.tw--py-3{padding-top:.75rem;padding-bottom:.75rem}.tw--py-4{padding-top:1rem;padding-bottom:1rem}.tw--py-\\[11px\\]{padding-top:11px;padding-bottom:11px}.tw--pb-1{padding-bottom:.25rem}.tw--pb-10{padding-bottom:2.5rem}.tw--pb-5{padding-bottom:1.25rem}.tw--pb-\\[11px\\]{padding-bottom:11px}.tw--pb-\\[30px\\]{padding-bottom:30px}.tw--pb-\\[5px\\]{padding-bottom:5px}.tw--pl-\\[10px\\]{padding-left:10px}.tw--pl-\\[35px\\]{padding-left:35px}.tw--pr-2{padding-right:.5rem}.tw--pr-\\[5px\\]{padding-right:5px}.tw--pt-10{padding-top:2.5rem}.tw--pt-5{padding-top:1.25rem}.tw--text-left{text-align:left}.tw--text-center{text-align:center}.tw--text-\\[10px\\]{font-size:10px}.tw--text-\\[12\\.8px\\]{font-size:12.8px}.tw--text-\\[16px\\]{font-size:16px}.tw--text-\\[20px\\]{font-size:20px}.tw--text-\\[24px\\]{font-size:24px}.tw--text-lg{font-size:1.125rem;line-height:1.75rem}.tw--text-sm{font-size:.875rem;line-height:1.25rem}.tw--text-xl,.tw--text-xl\\/7{font-size:1.25rem;line-height:1.75rem}.tw--font-bold{font-weight:700}.tw--font-density-different{font-weight:var(--density-different)}.tw--font-extrabold{font-weight:800}.tw--font-medium{font-weight:500}.tw--font-semibold{font-weight:600}.tw--leading-5{line-height:1.25rem}.tw--leading-\\[1\\.4\\]{line-height:1.4}.tw--leading-\\[1\\.56\\]{line-height:1.56}.tw--leading-\\[1\\.63\\]{line-height:1.63}.tw--leading-\\[1\\]{line-height:1}.tw--leading-\\[2\\]{line-height:2}.tw--leading-\\[30px\\]{line-height:30px}.tw--text-\\[\\#21bb5a\\]{--tw-text-opacity: 1;color:rgb(33 187 90 / var(--tw-text-opacity))}.tw--text-\\[\\#ff0043\\]{--tw-text-opacity: 1;color:rgb(255 0 67 / var(--tw-text-opacity))}.tw--text-dots{color:var(--dots)}.tw--text-glazeText{color:var(--glazeText)}.tw--text-muted-blue{color:#0f0e1e99}.tw--text-seraph{color:var(--seraph)}.tw--text-whisper{color:var(--whisper)}.tw--text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.tw--text-zephyr-100{color:var(--zephyr-100)}.tw--text-zephyr-600{color:var(--zephyr-600)}.tw--text-zephyr-800{color:var(--zephyr-800)}.tw--underline{text-decoration-line:underline}.tw--opacity-40{opacity:.4}.tw--opacity-60{opacity:.6}.tw--shadow-\\[-1px_2px_5px_0\\]{--tw-shadow: -1px 2px 5px 0;--tw-shadow-colored: -1px 2px 5px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-\\[0px_12px_24px_-4px_rgba\\(1\\,154\\,255\\,0\\.2\\)\\]{--tw-shadow: 0px 12px 24px -4px rgba(1,154,255,.2);--tw-shadow-colored: 0px 12px 24px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-card{--tw-shadow: 0 12px 24px 0 rgba(43, 49, 57, .06), 0 4px 8px 0 rgba(43, 55, 70, .04);--tw-shadow-colored: 0 12px 24px 0 var(--tw-shadow-color), 0 4px 8px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-loading-dots{--tw-shadow: -24px 0 rgba(201, 201, 201, .5), 24px 0 rgba(201, 201, 201, .5);--tw-shadow-colored: -24px 0 var(--tw-shadow-color), 24px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-zephyr-200{--tw-shadow-color: var(--zephyr-200);--tw-shadow: var(--tw-shadow-colored)}.tw--translate-z-0 *{transform:translateZ(0)}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.\\[key\\:string\\]{key:string}#chatbot-container *{font-family:inherit!important}.spaced-letters{letter-spacing:2px}.mt-8{margin-top:2rem}.mb-6{margin-bottom:1.5rem}.scroll-stop{overflow:hidden;position:fixed;left:0;right:0;top:0}span>p:last-child{display:inline;position:relative}.light{--lumina: #f0f2f5;--whisper: #ffffff;--seraph: #21bb5a;--ember: #cacadb;--enigma: #ffae19;--glaze: #21bb5a;--glazeText: #151226;--glazeBg: #ffffff;--sigma: #0f0e1e;--zeta: #0f0e1e;--status: #21bb5a;--loader: #f6f8fa;--dots: #21bb5a;--neon: #019aff;--pale-dots: #cacadb;--iota-dots: #21bb5a;--overlay: rgba(15, 14, 30, .2);--beta: #f6f8fa;--ze: 43, 49, 57;--zephyr-100: rgb(var(--ze));--zephyr-200: rgba(var(--ze), .1);--zephyr-600: rgba(var(--ze), .6);--zephyr-800: rgba(var(--ze), .8);--card: 0 12px 24px 0 rgba(43, 49, 57, .06), 0 4px 8px 0 rgba(43, 55, 70, .04);--loading-dots: -24px 0 rgba(201, 201, 201, .5), 24px 0 rgba(201, 201, 201, .5);--density-different: 500}.dark{--lumina: #252239;--whisper: #151226;--seraph: #f53373;--ember: #cacadb;--enigma: #ffae19;--glaze: #b3bac6;--glazeText: #151226;--glazeBg: #b3bac6;--sigma: #0f0e1e;--zeta: #ffffff;--status: #21bb5a;--loader: #252239;--dots: #f53374;--neon: #019aff;--pale-dots: #ffffff;--iota-dots: #21bb5a;--overlay: rgba(15, 14, 30, .9);--beta: #25223;--ze: 255, 255, 255;--zephyr-100: rgb(var(--ze));--zephyr-200: rgba(var(--ze), .1);--zephyr-600: rgba(var(--ze), .6);--zephyr-800: rgba(var(--ze), .8);--card: 0 12px 24px 0 rgba(0, 0, 0, .12), 0 4px 8px 0 rgba(0, 0, 0, .1);--loading-dots: -24px 0 rgba(255, 255, 255, .5), 24px 0 rgba(255, 255, 255, .5);--density-different: 400}ul,ol{list-style:auto;list-style-position:inside;display:flex;flex-direction:column}ul{list-style-position:inside;list-style-type:disc}li{padding:0;position:relative}li:last-child{width:-moz-fit-content;width:fit-content}li+li{margin-top:0}span:not(.after\\:tw--hidden) ol:last-child li:last-child:after,span:not(.after\\:tw--hidden) ul:last-child li:last-child:after,span:not(.after\\:tw--hidden) p:last-child:after{content:"";width:.25rem;height:1rem;display:inline-block;background:var(--zephyr-100);position:absolute;left:auto;bottom:4px}@keyframes tw--blink{0%{opacity:1}49%{opacity:1}50%{opacity:0}to{opacity:0}}span:not(.after\\:tw--hidden) ol:last-child li:last-child:after,span:not(.after\\:tw--hidden) ul:last-child li:last-child:after,span:not(.after\\:tw--hidden) p:last-child:after{animation:tw--blink .5s infinite}span:not(.after\\:tw--hidden):has(ol li):after,span:not(.after\\:tw--hidden):has(ul li):after,span:not(.after\\:tw--hidden):has(p:last-child):after{display:none}.after\\:tw--absolute:after{content:var(--tw-content);position:absolute}.after\\:tw--bottom-\\[-2px\\]:after{content:var(--tw-content);bottom:-2px}.after\\:tw--left-\\[37px\\]:after{content:var(--tw-content);left:37px}.after\\:tw--z-10:after{content:var(--tw-content);z-index:10}.after\\:tw--ml-1:after{content:var(--tw-content);margin-left:.25rem}.after\\:tw--inline-block:after{content:var(--tw-content);display:inline-block}.after\\:tw--hidden:after{content:var(--tw-content);display:none}.after\\:tw--h-4:after{content:var(--tw-content);height:1rem}.after\\:tw--h-\\[10px\\]:after{content:var(--tw-content);height:10px}.after\\:tw--w-1:after{content:var(--tw-content);width:.25rem}.after\\:tw--w-\\[10px\\]:after{content:var(--tw-content);width:10px}@keyframes tw--blink{0%{content:var(--tw-content);opacity:1}49%{content:var(--tw-content);opacity:1}50%{content:var(--tw-content);opacity:0}to{content:var(--tw-content);opacity:0}}.after\\:tw--animate-blink:after{content:var(--tw-content);animation:tw--blink .5s infinite}.after\\:tw--rounded-full:after{content:var(--tw-content);border-radius:9999px}.after\\:tw--bg-iota-dots:after{content:var(--tw-content);background-color:var(--iota-dots)}.after\\:tw--bg-zephyr-100:after{content:var(--tw-content);background-color:var(--zephyr-100)}.focus\\:\\!tw--bg-lumina:focus{background-color:var(--lumina)!important}.focus\\:tw--outline-none:focus{outline:2px solid transparent;outline-offset:2px}@media (min-width: 350px){.customXs\\:tw--max-w-xs{max-width:20rem}.customXs\\:tw--text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width: 768px){.md\\:tw--max-w-\\[800px\\]{max-width:800px}}')),document.body.appendChild(t)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import Nt, { PureComponent as zi, useState as xt, useLayoutEffect as $i, useEffect as Mt, forwardRef as Nn, useRef as Dr } from "react";
import Vi from "react-dom";
import { useDispatch as Wi, useSelector as Gi, Provider as qi } from "react-redux";
import { createSlice as or, configureStore as Hi, combineReducers as Yi } from "@reduxjs/toolkit";
import Ji from "react-markdown";
import { persistReducer as Xi, persistStore as Ki } from "redux-persist";
import { io as Zi } from "socket.io-client";
var Ee = {}, Mn = {}, sr = {};
sr.byteLength = to;
sr.toByteArray = no;
sr.fromByteArray = so;
var Ne = [], Pe = [], Qi = typeof Uint8Array < "u" ? Uint8Array : Array, mr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var pt = 0, eo = mr.length; pt < eo; ++pt)
  Ne[pt] = mr[pt], Pe[mr.charCodeAt(pt)] = pt;
Pe["-".charCodeAt(0)] = 62;
Pe["_".charCodeAt(0)] = 63;
function Un(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var i = e.indexOf("=");
  i === -1 && (i = t);
  var o = i === t ? 0 : 4 - i % 4;
  return [i, o];
}
function to(e) {
  var t = Un(e), i = t[0], o = t[1];
  return (i + o) * 3 / 4 - o;
}
function ro(e, t, i) {
  return (t + i) * 3 / 4 - i;
}
function no(e) {
  var t, i = Un(e), o = i[0], c = i[1], u = new Qi(ro(e, o, c)), f = 0, a = c > 0 ? o - 4 : o, h;
  for (h = 0; h < a; h += 4)
    t = Pe[e.charCodeAt(h)] << 18 | Pe[e.charCodeAt(h + 1)] << 12 | Pe[e.charCodeAt(h + 2)] << 6 | Pe[e.charCodeAt(h + 3)], u[f++] = t >> 16 & 255, u[f++] = t >> 8 & 255, u[f++] = t & 255;
  return c === 2 && (t = Pe[e.charCodeAt(h)] << 2 | Pe[e.charCodeAt(h + 1)] >> 4, u[f++] = t & 255), c === 1 && (t = Pe[e.charCodeAt(h)] << 10 | Pe[e.charCodeAt(h + 1)] << 4 | Pe[e.charCodeAt(h + 2)] >> 2, u[f++] = t >> 8 & 255, u[f++] = t & 255), u;
}
function io(e) {
  return Ne[e >> 18 & 63] + Ne[e >> 12 & 63] + Ne[e >> 6 & 63] + Ne[e & 63];
}
function oo(e, t, i) {
  for (var o, c = [], u = t; u < i; u += 3)
    o = (e[u] << 16 & 16711680) + (e[u + 1] << 8 & 65280) + (e[u + 2] & 255), c.push(io(o));
  return c.join("");
}
function so(e) {
  for (var t, i = e.length, o = i % 3, c = [], u = 16383, f = 0, a = i - o; f < a; f += u)
    c.push(oo(e, f, f + u > a ? a : f + u));
  return o === 1 ? (t = e[i - 1], c.push(
    Ne[t >> 2] + Ne[t << 4 & 63] + "=="
  )) : o === 2 && (t = (e[i - 2] << 8) + e[i - 1], c.push(
    Ne[t >> 10] + Ne[t >> 4 & 63] + Ne[t << 2 & 63] + "="
  )), c.join("");
}
var zr = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
zr.read = function(e, t, i, o, c) {
  var u, f, a = c * 8 - o - 1, h = (1 << a) - 1, x = h >> 1, y = -7, b = i ? c - 1 : 0, I = i ? -1 : 1, P = e[t + b];
  for (b += I, u = P & (1 << -y) - 1, P >>= -y, y += a; y > 0; u = u * 256 + e[t + b], b += I, y -= 8)
    ;
  for (f = u & (1 << -y) - 1, u >>= -y, y += o; y > 0; f = f * 256 + e[t + b], b += I, y -= 8)
    ;
  if (u === 0)
    u = 1 - x;
  else {
    if (u === h)
      return f ? NaN : (P ? -1 : 1) * (1 / 0);
    f = f + Math.pow(2, o), u = u - x;
  }
  return (P ? -1 : 1) * f * Math.pow(2, u - o);
};
zr.write = function(e, t, i, o, c, u) {
  var f, a, h, x = u * 8 - c - 1, y = (1 << x) - 1, b = y >> 1, I = c === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, P = o ? 0 : u - 1, O = o ? 1 : -1, S = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, f = y) : (f = Math.floor(Math.log(t) / Math.LN2), t * (h = Math.pow(2, -f)) < 1 && (f--, h *= 2), f + b >= 1 ? t += I / h : t += I * Math.pow(2, 1 - b), t * h >= 2 && (f++, h /= 2), f + b >= y ? (a = 0, f = y) : f + b >= 1 ? (a = (t * h - 1) * Math.pow(2, c), f = f + b) : (a = t * Math.pow(2, b - 1) * Math.pow(2, c), f = 0)); c >= 8; e[i + P] = a & 255, P += O, a /= 256, c -= 8)
    ;
  for (f = f << c | a, x += c; x > 0; e[i + P] = f & 255, P += O, f /= 256, x -= 8)
    ;
  e[i + P - O] |= S * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  const t = sr, i = zr, o = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = a, e.SlowBuffer = L, e.INSPECT_MAX_BYTES = 50;
  const c = 2147483647;
  e.kMaxLength = c, a.TYPED_ARRAY_SUPPORT = u(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
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
  function f(s) {
    if (s > c)
      throw new RangeError('The value "' + s + '" is invalid for option "size"');
    const r = new Uint8Array(s);
    return Object.setPrototypeOf(r, a.prototype), r;
  }
  function a(s, r, n) {
    if (typeof s == "number") {
      if (typeof r == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return b(s);
    }
    return h(s, r, n);
  }
  a.poolSize = 8192;
  function h(s, r, n) {
    if (typeof s == "string")
      return I(s, r);
    if (ArrayBuffer.isView(s))
      return O(s);
    if (s == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof s
      );
    if (ye(s, ArrayBuffer) || s && ye(s.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (ye(s, SharedArrayBuffer) || s && ye(s.buffer, SharedArrayBuffer)))
      return S(s, r, n);
    if (typeof s == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const l = s.valueOf && s.valueOf();
    if (l != null && l !== s)
      return a.from(l, r, n);
    const p = ne(s);
    if (p)
      return p;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof s[Symbol.toPrimitive] == "function")
      return a.from(s[Symbol.toPrimitive]("string"), r, n);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof s
    );
  }
  a.from = function(s, r, n) {
    return h(s, r, n);
  }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array);
  function x(s) {
    if (typeof s != "number")
      throw new TypeError('"size" argument must be of type number');
    if (s < 0)
      throw new RangeError('The value "' + s + '" is invalid for option "size"');
  }
  function y(s, r, n) {
    return x(s), s <= 0 ? f(s) : r !== void 0 ? typeof n == "string" ? f(s).fill(r, n) : f(s).fill(r) : f(s);
  }
  a.alloc = function(s, r, n) {
    return y(s, r, n);
  };
  function b(s) {
    return x(s), f(s < 0 ? 0 : j(s) | 0);
  }
  a.allocUnsafe = function(s) {
    return b(s);
  }, a.allocUnsafeSlow = function(s) {
    return b(s);
  };
  function I(s, r) {
    if ((typeof r != "string" || r === "") && (r = "utf8"), !a.isEncoding(r))
      throw new TypeError("Unknown encoding: " + r);
    const n = ae(s, r) | 0;
    let l = f(n);
    const p = l.write(s, r);
    return p !== n && (l = l.slice(0, p)), l;
  }
  function P(s) {
    const r = s.length < 0 ? 0 : j(s.length) | 0, n = f(r);
    for (let l = 0; l < r; l += 1)
      n[l] = s[l] & 255;
    return n;
  }
  function O(s) {
    if (ye(s, Uint8Array)) {
      const r = new Uint8Array(s);
      return S(r.buffer, r.byteOffset, r.byteLength);
    }
    return P(s);
  }
  function S(s, r, n) {
    if (r < 0 || s.byteLength < r)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (s.byteLength < r + (n || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let l;
    return r === void 0 && n === void 0 ? l = new Uint8Array(s) : n === void 0 ? l = new Uint8Array(s, r) : l = new Uint8Array(s, r, n), Object.setPrototypeOf(l, a.prototype), l;
  }
  function ne(s) {
    if (a.isBuffer(s)) {
      const r = j(s.length) | 0, n = f(r);
      return n.length === 0 || s.copy(n, 0, 0, r), n;
    }
    if (s.length !== void 0)
      return typeof s.length != "number" || Ct(s.length) ? f(0) : P(s);
    if (s.type === "Buffer" && Array.isArray(s.data))
      return P(s.data);
  }
  function j(s) {
    if (s >= c)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + c.toString(16) + " bytes");
    return s | 0;
  }
  function L(s) {
    return +s != s && (s = 0), a.alloc(+s);
  }
  a.isBuffer = function(r) {
    return r != null && r._isBuffer === !0 && r !== a.prototype;
  }, a.compare = function(r, n) {
    if (ye(r, Uint8Array) && (r = a.from(r, r.offset, r.byteLength)), ye(n, Uint8Array) && (n = a.from(n, n.offset, n.byteLength)), !a.isBuffer(r) || !a.isBuffer(n))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (r === n)
      return 0;
    let l = r.length, p = n.length;
    for (let m = 0, g = Math.min(l, p); m < g; ++m)
      if (r[m] !== n[m]) {
        l = r[m], p = n[m];
        break;
      }
    return l < p ? -1 : p < l ? 1 : 0;
  }, a.isEncoding = function(r) {
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
  }, a.concat = function(r, n) {
    if (!Array.isArray(r))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (r.length === 0)
      return a.alloc(0);
    let l;
    if (n === void 0)
      for (n = 0, l = 0; l < r.length; ++l)
        n += r[l].length;
    const p = a.allocUnsafe(n);
    let m = 0;
    for (l = 0; l < r.length; ++l) {
      let g = r[l];
      if (ye(g, Uint8Array))
        m + g.length > p.length ? (a.isBuffer(g) || (g = a.from(g)), g.copy(p, m)) : Uint8Array.prototype.set.call(
          p,
          g,
          m
        );
      else if (a.isBuffer(g))
        g.copy(p, m);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      m += g.length;
    }
    return p;
  };
  function ae(s, r) {
    if (a.isBuffer(s))
      return s.length;
    if (ArrayBuffer.isView(s) || ye(s, ArrayBuffer))
      return s.byteLength;
    if (typeof s != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof s
      );
    const n = s.length, l = arguments.length > 2 && arguments[2] === !0;
    if (!l && n === 0)
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
          return ct(s).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return n * 2;
        case "hex":
          return n >>> 1;
        case "base64":
          return zt(s).length;
        default:
          if (p)
            return l ? -1 : ct(s).length;
          r = ("" + r).toLowerCase(), p = !0;
      }
  }
  a.byteLength = ae;
  function me(s, r, n) {
    let l = !1;
    if ((r === void 0 || r < 0) && (r = 0), r > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, r >>>= 0, n <= r))
      return "";
    for (s || (s = "utf8"); ; )
      switch (s) {
        case "hex":
          return q(this, r, n);
        case "utf8":
        case "utf-8":
          return C(this, r, n);
        case "ascii":
          return U(this, r, n);
        case "latin1":
        case "binary":
          return V(this, r, n);
        case "base64":
          return _(this, r, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return te(this, r, n);
        default:
          if (l)
            throw new TypeError("Unknown encoding: " + s);
          s = (s + "").toLowerCase(), l = !0;
      }
  }
  a.prototype._isBuffer = !0;
  function k(s, r, n) {
    const l = s[r];
    s[r] = s[n], s[n] = l;
  }
  a.prototype.swap16 = function() {
    const r = this.length;
    if (r % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let n = 0; n < r; n += 2)
      k(this, n, n + 1);
    return this;
  }, a.prototype.swap32 = function() {
    const r = this.length;
    if (r % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let n = 0; n < r; n += 4)
      k(this, n, n + 3), k(this, n + 1, n + 2);
    return this;
  }, a.prototype.swap64 = function() {
    const r = this.length;
    if (r % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let n = 0; n < r; n += 8)
      k(this, n, n + 7), k(this, n + 1, n + 6), k(this, n + 2, n + 5), k(this, n + 3, n + 4);
    return this;
  }, a.prototype.toString = function() {
    const r = this.length;
    return r === 0 ? "" : arguments.length === 0 ? C(this, 0, r) : me.apply(this, arguments);
  }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(r) {
    if (!a.isBuffer(r))
      throw new TypeError("Argument must be a Buffer");
    return this === r ? !0 : a.compare(this, r) === 0;
  }, a.prototype.inspect = function() {
    let r = "";
    const n = e.INSPECT_MAX_BYTES;
    return r = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (r += " ... "), "<Buffer " + r + ">";
  }, o && (a.prototype[o] = a.prototype.inspect), a.prototype.compare = function(r, n, l, p, m) {
    if (ye(r, Uint8Array) && (r = a.from(r, r.offset, r.byteLength)), !a.isBuffer(r))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof r
      );
    if (n === void 0 && (n = 0), l === void 0 && (l = r ? r.length : 0), p === void 0 && (p = 0), m === void 0 && (m = this.length), n < 0 || l > r.length || p < 0 || m > this.length)
      throw new RangeError("out of range index");
    if (p >= m && n >= l)
      return 0;
    if (p >= m)
      return -1;
    if (n >= l)
      return 1;
    if (n >>>= 0, l >>>= 0, p >>>= 0, m >>>= 0, this === r)
      return 0;
    let g = m - p, B = l - n;
    const Q = Math.min(g, B), X = this.slice(p, m), ee = r.slice(n, l);
    for (let H = 0; H < Q; ++H)
      if (X[H] !== ee[H]) {
        g = X[H], B = ee[H];
        break;
      }
    return g < B ? -1 : B < g ? 1 : 0;
  };
  function pe(s, r, n, l, p) {
    if (s.length === 0)
      return -1;
    if (typeof n == "string" ? (l = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, Ct(n) && (n = p ? 0 : s.length - 1), n < 0 && (n = s.length + n), n >= s.length) {
      if (p)
        return -1;
      n = s.length - 1;
    } else if (n < 0)
      if (p)
        n = 0;
      else
        return -1;
    if (typeof r == "string" && (r = a.from(r, l)), a.isBuffer(r))
      return r.length === 0 ? -1 : we(s, r, n, l, p);
    if (typeof r == "number")
      return r = r & 255, typeof Uint8Array.prototype.indexOf == "function" ? p ? Uint8Array.prototype.indexOf.call(s, r, n) : Uint8Array.prototype.lastIndexOf.call(s, r, n) : we(s, [r], n, l, p);
    throw new TypeError("val must be string, number or Buffer");
  }
  function we(s, r, n, l, p) {
    let m = 1, g = s.length, B = r.length;
    if (l !== void 0 && (l = String(l).toLowerCase(), l === "ucs2" || l === "ucs-2" || l === "utf16le" || l === "utf-16le")) {
      if (s.length < 2 || r.length < 2)
        return -1;
      m = 2, g /= 2, B /= 2, n /= 2;
    }
    function Q(ee, H) {
      return m === 1 ? ee[H] : ee.readUInt16BE(H * m);
    }
    let X;
    if (p) {
      let ee = -1;
      for (X = n; X < g; X++)
        if (Q(s, X) === Q(r, ee === -1 ? 0 : X - ee)) {
          if (ee === -1 && (ee = X), X - ee + 1 === B)
            return ee * m;
        } else
          ee !== -1 && (X -= X - ee), ee = -1;
    } else
      for (n + B > g && (n = g - B), X = n; X >= 0; X--) {
        let ee = !0;
        for (let H = 0; H < B; H++)
          if (Q(s, X + H) !== Q(r, H)) {
            ee = !1;
            break;
          }
        if (ee)
          return X;
      }
    return -1;
  }
  a.prototype.includes = function(r, n, l) {
    return this.indexOf(r, n, l) !== -1;
  }, a.prototype.indexOf = function(r, n, l) {
    return pe(this, r, n, l, !0);
  }, a.prototype.lastIndexOf = function(r, n, l) {
    return pe(this, r, n, l, !1);
  };
  function _e(s, r, n, l) {
    n = Number(n) || 0;
    const p = s.length - n;
    l ? (l = Number(l), l > p && (l = p)) : l = p;
    const m = r.length;
    l > m / 2 && (l = m / 2);
    let g;
    for (g = 0; g < l; ++g) {
      const B = parseInt(r.substr(g * 2, 2), 16);
      if (Ct(B))
        return g;
      s[n + g] = B;
    }
    return g;
  }
  function be(s, r, n, l) {
    return ut(ct(r, s.length - n), s, n, l);
  }
  function je(s, r, n, l) {
    return ut(Dt(r), s, n, l);
  }
  function de(s, r, n, l) {
    return ut(zt(r), s, n, l);
  }
  function T(s, r, n, l) {
    return ut(lt(r, s.length - n), s, n, l);
  }
  a.prototype.write = function(r, n, l, p) {
    if (n === void 0)
      p = "utf8", l = this.length, n = 0;
    else if (l === void 0 && typeof n == "string")
      p = n, l = this.length, n = 0;
    else if (isFinite(n))
      n = n >>> 0, isFinite(l) ? (l = l >>> 0, p === void 0 && (p = "utf8")) : (p = l, l = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const m = this.length - n;
    if ((l === void 0 || l > m) && (l = m), r.length > 0 && (l < 0 || n < 0) || n > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    p || (p = "utf8");
    let g = !1;
    for (; ; )
      switch (p) {
        case "hex":
          return _e(this, r, n, l);
        case "utf8":
        case "utf-8":
          return be(this, r, n, l);
        case "ascii":
        case "latin1":
        case "binary":
          return je(this, r, n, l);
        case "base64":
          return de(this, r, n, l);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return T(this, r, n, l);
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
  function _(s, r, n) {
    return r === 0 && n === s.length ? t.fromByteArray(s) : t.fromByteArray(s.slice(r, n));
  }
  function C(s, r, n) {
    n = Math.min(s.length, n);
    const l = [];
    let p = r;
    for (; p < n; ) {
      const m = s[p];
      let g = null, B = m > 239 ? 4 : m > 223 ? 3 : m > 191 ? 2 : 1;
      if (p + B <= n) {
        let Q, X, ee, H;
        switch (B) {
          case 1:
            m < 128 && (g = m);
            break;
          case 2:
            Q = s[p + 1], (Q & 192) === 128 && (H = (m & 31) << 6 | Q & 63, H > 127 && (g = H));
            break;
          case 3:
            Q = s[p + 1], X = s[p + 2], (Q & 192) === 128 && (X & 192) === 128 && (H = (m & 15) << 12 | (Q & 63) << 6 | X & 63, H > 2047 && (H < 55296 || H > 57343) && (g = H));
            break;
          case 4:
            Q = s[p + 1], X = s[p + 2], ee = s[p + 3], (Q & 192) === 128 && (X & 192) === 128 && (ee & 192) === 128 && (H = (m & 15) << 18 | (Q & 63) << 12 | (X & 63) << 6 | ee & 63, H > 65535 && H < 1114112 && (g = H));
        }
      }
      g === null ? (g = 65533, B = 1) : g > 65535 && (g -= 65536, l.push(g >>> 10 & 1023 | 55296), g = 56320 | g & 1023), l.push(g), p += B;
    }
    return F(l);
  }
  const A = 4096;
  function F(s) {
    const r = s.length;
    if (r <= A)
      return String.fromCharCode.apply(String, s);
    let n = "", l = 0;
    for (; l < r; )
      n += String.fromCharCode.apply(
        String,
        s.slice(l, l += A)
      );
    return n;
  }
  function U(s, r, n) {
    let l = "";
    n = Math.min(s.length, n);
    for (let p = r; p < n; ++p)
      l += String.fromCharCode(s[p] & 127);
    return l;
  }
  function V(s, r, n) {
    let l = "";
    n = Math.min(s.length, n);
    for (let p = r; p < n; ++p)
      l += String.fromCharCode(s[p]);
    return l;
  }
  function q(s, r, n) {
    const l = s.length;
    (!r || r < 0) && (r = 0), (!n || n < 0 || n > l) && (n = l);
    let p = "";
    for (let m = r; m < n; ++m)
      p += fr[s[m]];
    return p;
  }
  function te(s, r, n) {
    const l = s.slice(r, n);
    let p = "";
    for (let m = 0; m < l.length - 1; m += 2)
      p += String.fromCharCode(l[m] + l[m + 1] * 256);
    return p;
  }
  a.prototype.slice = function(r, n) {
    const l = this.length;
    r = ~~r, n = n === void 0 ? l : ~~n, r < 0 ? (r += l, r < 0 && (r = 0)) : r > l && (r = l), n < 0 ? (n += l, n < 0 && (n = 0)) : n > l && (n = l), n < r && (n = r);
    const p = this.subarray(r, n);
    return Object.setPrototypeOf(p, a.prototype), p;
  };
  function z(s, r, n) {
    if (s % 1 !== 0 || s < 0)
      throw new RangeError("offset is not uint");
    if (s + r > n)
      throw new RangeError("Trying to access beyond buffer length");
  }
  a.prototype.readUintLE = a.prototype.readUIntLE = function(r, n, l) {
    r = r >>> 0, n = n >>> 0, l || z(r, n, this.length);
    let p = this[r], m = 1, g = 0;
    for (; ++g < n && (m *= 256); )
      p += this[r + g] * m;
    return p;
  }, a.prototype.readUintBE = a.prototype.readUIntBE = function(r, n, l) {
    r = r >>> 0, n = n >>> 0, l || z(r, n, this.length);
    let p = this[r + --n], m = 1;
    for (; n > 0 && (m *= 256); )
      p += this[r + --n] * m;
    return p;
  }, a.prototype.readUint8 = a.prototype.readUInt8 = function(r, n) {
    return r = r >>> 0, n || z(r, 1, this.length), this[r];
  }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(r, n) {
    return r = r >>> 0, n || z(r, 2, this.length), this[r] | this[r + 1] << 8;
  }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(r, n) {
    return r = r >>> 0, n || z(r, 2, this.length), this[r] << 8 | this[r + 1];
  }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(r, n) {
    return r = r >>> 0, n || z(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216;
  }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(r, n) {
    return r = r >>> 0, n || z(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]);
  }, a.prototype.readBigUInt64LE = ke(function(r) {
    r = r >>> 0, Ge(r, "offset");
    const n = this[r], l = this[r + 7];
    (n === void 0 || l === void 0) && Ke(r, this.length - 8);
    const p = n + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24, m = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + l * 2 ** 24;
    return BigInt(p) + (BigInt(m) << BigInt(32));
  }), a.prototype.readBigUInt64BE = ke(function(r) {
    r = r >>> 0, Ge(r, "offset");
    const n = this[r], l = this[r + 7];
    (n === void 0 || l === void 0) && Ke(r, this.length - 8);
    const p = n * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r], m = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + l;
    return (BigInt(p) << BigInt(32)) + BigInt(m);
  }), a.prototype.readIntLE = function(r, n, l) {
    r = r >>> 0, n = n >>> 0, l || z(r, n, this.length);
    let p = this[r], m = 1, g = 0;
    for (; ++g < n && (m *= 256); )
      p += this[r + g] * m;
    return m *= 128, p >= m && (p -= Math.pow(2, 8 * n)), p;
  }, a.prototype.readIntBE = function(r, n, l) {
    r = r >>> 0, n = n >>> 0, l || z(r, n, this.length);
    let p = n, m = 1, g = this[r + --p];
    for (; p > 0 && (m *= 256); )
      g += this[r + --p] * m;
    return m *= 128, g >= m && (g -= Math.pow(2, 8 * n)), g;
  }, a.prototype.readInt8 = function(r, n) {
    return r = r >>> 0, n || z(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
  }, a.prototype.readInt16LE = function(r, n) {
    r = r >>> 0, n || z(r, 2, this.length);
    const l = this[r] | this[r + 1] << 8;
    return l & 32768 ? l | 4294901760 : l;
  }, a.prototype.readInt16BE = function(r, n) {
    r = r >>> 0, n || z(r, 2, this.length);
    const l = this[r + 1] | this[r] << 8;
    return l & 32768 ? l | 4294901760 : l;
  }, a.prototype.readInt32LE = function(r, n) {
    return r = r >>> 0, n || z(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
  }, a.prototype.readInt32BE = function(r, n) {
    return r = r >>> 0, n || z(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
  }, a.prototype.readBigInt64LE = ke(function(r) {
    r = r >>> 0, Ge(r, "offset");
    const n = this[r], l = this[r + 7];
    (n === void 0 || l === void 0) && Ke(r, this.length - 8);
    const p = this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (l << 24);
    return (BigInt(p) << BigInt(32)) + BigInt(n + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24);
  }), a.prototype.readBigInt64BE = ke(function(r) {
    r = r >>> 0, Ge(r, "offset");
    const n = this[r], l = this[r + 7];
    (n === void 0 || l === void 0) && Ke(r, this.length - 8);
    const p = (n << 24) + // Overflow
    this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r];
    return (BigInt(p) << BigInt(32)) + BigInt(this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + l);
  }), a.prototype.readFloatLE = function(r, n) {
    return r = r >>> 0, n || z(r, 4, this.length), i.read(this, r, !0, 23, 4);
  }, a.prototype.readFloatBE = function(r, n) {
    return r = r >>> 0, n || z(r, 4, this.length), i.read(this, r, !1, 23, 4);
  }, a.prototype.readDoubleLE = function(r, n) {
    return r = r >>> 0, n || z(r, 8, this.length), i.read(this, r, !0, 52, 8);
  }, a.prototype.readDoubleBE = function(r, n) {
    return r = r >>> 0, n || z(r, 8, this.length), i.read(this, r, !1, 52, 8);
  };
  function W(s, r, n, l, p, m) {
    if (!a.isBuffer(s))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (r > p || r < m)
      throw new RangeError('"value" argument is out of bounds');
    if (n + l > s.length)
      throw new RangeError("Index out of range");
  }
  a.prototype.writeUintLE = a.prototype.writeUIntLE = function(r, n, l, p) {
    if (r = +r, n = n >>> 0, l = l >>> 0, !p) {
      const B = Math.pow(2, 8 * l) - 1;
      W(this, r, n, l, B, 0);
    }
    let m = 1, g = 0;
    for (this[n] = r & 255; ++g < l && (m *= 256); )
      this[n + g] = r / m & 255;
    return n + l;
  }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(r, n, l, p) {
    if (r = +r, n = n >>> 0, l = l >>> 0, !p) {
      const B = Math.pow(2, 8 * l) - 1;
      W(this, r, n, l, B, 0);
    }
    let m = l - 1, g = 1;
    for (this[n + m] = r & 255; --m >= 0 && (g *= 256); )
      this[n + m] = r / g & 255;
    return n + l;
  }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(r, n, l) {
    return r = +r, n = n >>> 0, l || W(this, r, n, 1, 255, 0), this[n] = r & 255, n + 1;
  }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(r, n, l) {
    return r = +r, n = n >>> 0, l || W(this, r, n, 2, 65535, 0), this[n] = r & 255, this[n + 1] = r >>> 8, n + 2;
  }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(r, n, l) {
    return r = +r, n = n >>> 0, l || W(this, r, n, 2, 65535, 0), this[n] = r >>> 8, this[n + 1] = r & 255, n + 2;
  }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(r, n, l) {
    return r = +r, n = n >>> 0, l || W(this, r, n, 4, 4294967295, 0), this[n + 3] = r >>> 24, this[n + 2] = r >>> 16, this[n + 1] = r >>> 8, this[n] = r & 255, n + 4;
  }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(r, n, l) {
    return r = +r, n = n >>> 0, l || W(this, r, n, 4, 4294967295, 0), this[n] = r >>> 24, this[n + 1] = r >>> 16, this[n + 2] = r >>> 8, this[n + 3] = r & 255, n + 4;
  };
  function re(s, r, n, l, p) {
    Tt(r, l, p, s, n, 7);
    let m = Number(r & BigInt(4294967295));
    s[n++] = m, m = m >> 8, s[n++] = m, m = m >> 8, s[n++] = m, m = m >> 8, s[n++] = m;
    let g = Number(r >> BigInt(32) & BigInt(4294967295));
    return s[n++] = g, g = g >> 8, s[n++] = g, g = g >> 8, s[n++] = g, g = g >> 8, s[n++] = g, n;
  }
  function Ve(s, r, n, l, p) {
    Tt(r, l, p, s, n, 7);
    let m = Number(r & BigInt(4294967295));
    s[n + 7] = m, m = m >> 8, s[n + 6] = m, m = m >> 8, s[n + 5] = m, m = m >> 8, s[n + 4] = m;
    let g = Number(r >> BigInt(32) & BigInt(4294967295));
    return s[n + 3] = g, g = g >> 8, s[n + 2] = g, g = g >> 8, s[n + 1] = g, g = g >> 8, s[n] = g, n + 8;
  }
  a.prototype.writeBigUInt64LE = ke(function(r, n = 0) {
    return re(this, r, n, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeBigUInt64BE = ke(function(r, n = 0) {
    return Ve(this, r, n, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeIntLE = function(r, n, l, p) {
    if (r = +r, n = n >>> 0, !p) {
      const Q = Math.pow(2, 8 * l - 1);
      W(this, r, n, l, Q - 1, -Q);
    }
    let m = 0, g = 1, B = 0;
    for (this[n] = r & 255; ++m < l && (g *= 256); )
      r < 0 && B === 0 && this[n + m - 1] !== 0 && (B = 1), this[n + m] = (r / g >> 0) - B & 255;
    return n + l;
  }, a.prototype.writeIntBE = function(r, n, l, p) {
    if (r = +r, n = n >>> 0, !p) {
      const Q = Math.pow(2, 8 * l - 1);
      W(this, r, n, l, Q - 1, -Q);
    }
    let m = l - 1, g = 1, B = 0;
    for (this[n + m] = r & 255; --m >= 0 && (g *= 256); )
      r < 0 && B === 0 && this[n + m + 1] !== 0 && (B = 1), this[n + m] = (r / g >> 0) - B & 255;
    return n + l;
  }, a.prototype.writeInt8 = function(r, n, l) {
    return r = +r, n = n >>> 0, l || W(this, r, n, 1, 127, -128), r < 0 && (r = 255 + r + 1), this[n] = r & 255, n + 1;
  }, a.prototype.writeInt16LE = function(r, n, l) {
    return r = +r, n = n >>> 0, l || W(this, r, n, 2, 32767, -32768), this[n] = r & 255, this[n + 1] = r >>> 8, n + 2;
  }, a.prototype.writeInt16BE = function(r, n, l) {
    return r = +r, n = n >>> 0, l || W(this, r, n, 2, 32767, -32768), this[n] = r >>> 8, this[n + 1] = r & 255, n + 2;
  }, a.prototype.writeInt32LE = function(r, n, l) {
    return r = +r, n = n >>> 0, l || W(this, r, n, 4, 2147483647, -2147483648), this[n] = r & 255, this[n + 1] = r >>> 8, this[n + 2] = r >>> 16, this[n + 3] = r >>> 24, n + 4;
  }, a.prototype.writeInt32BE = function(r, n, l) {
    return r = +r, n = n >>> 0, l || W(this, r, n, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), this[n] = r >>> 24, this[n + 1] = r >>> 16, this[n + 2] = r >>> 8, this[n + 3] = r & 255, n + 4;
  }, a.prototype.writeBigInt64LE = ke(function(r, n = 0) {
    return re(this, r, n, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), a.prototype.writeBigInt64BE = ke(function(r, n = 0) {
    return Ve(this, r, n, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function Ye(s, r, n, l, p, m) {
    if (n + l > s.length)
      throw new RangeError("Index out of range");
    if (n < 0)
      throw new RangeError("Index out of range");
  }
  function We(s, r, n, l, p) {
    return r = +r, n = n >>> 0, p || Ye(s, r, n, 4), i.write(s, r, n, l, 23, 4), n + 4;
  }
  a.prototype.writeFloatLE = function(r, n, l) {
    return We(this, r, n, !0, l);
  }, a.prototype.writeFloatBE = function(r, n, l) {
    return We(this, r, n, !1, l);
  };
  function ot(s, r, n, l, p) {
    return r = +r, n = n >>> 0, p || Ye(s, r, n, 8), i.write(s, r, n, l, 52, 8), n + 8;
  }
  a.prototype.writeDoubleLE = function(r, n, l) {
    return ot(this, r, n, !0, l);
  }, a.prototype.writeDoubleBE = function(r, n, l) {
    return ot(this, r, n, !1, l);
  }, a.prototype.copy = function(r, n, l, p) {
    if (!a.isBuffer(r))
      throw new TypeError("argument should be a Buffer");
    if (l || (l = 0), !p && p !== 0 && (p = this.length), n >= r.length && (n = r.length), n || (n = 0), p > 0 && p < l && (p = l), p === l || r.length === 0 || this.length === 0)
      return 0;
    if (n < 0)
      throw new RangeError("targetStart out of bounds");
    if (l < 0 || l >= this.length)
      throw new RangeError("Index out of range");
    if (p < 0)
      throw new RangeError("sourceEnd out of bounds");
    p > this.length && (p = this.length), r.length - n < p - l && (p = r.length - n + l);
    const m = p - l;
    return this === r && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(n, l, p) : Uint8Array.prototype.set.call(
      r,
      this.subarray(l, p),
      n
    ), m;
  }, a.prototype.fill = function(r, n, l, p) {
    if (typeof r == "string") {
      if (typeof n == "string" ? (p = n, n = 0, l = this.length) : typeof l == "string" && (p = l, l = this.length), p !== void 0 && typeof p != "string")
        throw new TypeError("encoding must be a string");
      if (typeof p == "string" && !a.isEncoding(p))
        throw new TypeError("Unknown encoding: " + p);
      if (r.length === 1) {
        const g = r.charCodeAt(0);
        (p === "utf8" && g < 128 || p === "latin1") && (r = g);
      }
    } else
      typeof r == "number" ? r = r & 255 : typeof r == "boolean" && (r = Number(r));
    if (n < 0 || this.length < n || this.length < l)
      throw new RangeError("Out of range index");
    if (l <= n)
      return this;
    n = n >>> 0, l = l === void 0 ? this.length : l >>> 0, r || (r = 0);
    let m;
    if (typeof r == "number")
      for (m = n; m < l; ++m)
        this[m] = r;
    else {
      const g = a.isBuffer(r) ? r : a.from(r, p), B = g.length;
      if (B === 0)
        throw new TypeError('The value "' + r + '" is invalid for argument "value"');
      for (m = 0; m < l - n; ++m)
        this[m + n] = g[m % B];
    }
    return this;
  };
  const Re = {};
  function Je(s, r, n) {
    Re[s] = class extends n {
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
      let l = `The value of "${s}" is out of range.`, p = n;
      return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? p = Xe(String(n)) : typeof n == "bigint" && (p = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (p = Xe(p)), p += "n"), l += ` It must be ${r}. Received ${p}`, l;
    },
    RangeError
  );
  function Xe(s) {
    let r = "", n = s.length;
    const l = s[0] === "-" ? 1 : 0;
    for (; n >= l + 4; n -= 3)
      r = `_${s.slice(n - 3, n)}${r}`;
    return `${s.slice(0, n)}${r}`;
  }
  function ur(s, r, n) {
    Ge(r, "offset"), (s[r] === void 0 || s[r + n] === void 0) && Ke(r, s.length - (n + 1));
  }
  function Tt(s, r, n, l, p, m) {
    if (s > n || s < r) {
      const g = typeof r == "bigint" ? "n" : "";
      let B;
      throw m > 3 ? r === 0 || r === BigInt(0) ? B = `>= 0${g} and < 2${g} ** ${(m + 1) * 8}${g}` : B = `>= -(2${g} ** ${(m + 1) * 8 - 1}${g}) and < 2 ** ${(m + 1) * 8 - 1}${g}` : B = `>= ${r}${g} and <= ${n}${g}`, new Re.ERR_OUT_OF_RANGE("value", B, s);
    }
    ur(l, p, m);
  }
  function Ge(s, r) {
    if (typeof s != "number")
      throw new Re.ERR_INVALID_ARG_TYPE(r, "number", s);
  }
  function Ke(s, r, n) {
    throw Math.floor(s) !== s ? (Ge(s, n), new Re.ERR_OUT_OF_RANGE(n || "offset", "an integer", s)) : r < 0 ? new Re.ERR_BUFFER_OUT_OF_BOUNDS() : new Re.ERR_OUT_OF_RANGE(
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
  function ct(s, r) {
    r = r || 1 / 0;
    let n;
    const l = s.length;
    let p = null;
    const m = [];
    for (let g = 0; g < l; ++g) {
      if (n = s.charCodeAt(g), n > 55295 && n < 57344) {
        if (!p) {
          if (n > 56319) {
            (r -= 3) > -1 && m.push(239, 191, 189);
            continue;
          } else if (g + 1 === l) {
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
  function Dt(s) {
    const r = [];
    for (let n = 0; n < s.length; ++n)
      r.push(s.charCodeAt(n) & 255);
    return r;
  }
  function lt(s, r) {
    let n, l, p;
    const m = [];
    for (let g = 0; g < s.length && !((r -= 2) < 0); ++g)
      n = s.charCodeAt(g), l = n >> 8, p = n % 256, m.push(p), m.push(l);
    return m;
  }
  function zt(s) {
    return t.toByteArray(at(s));
  }
  function ut(s, r, n, l) {
    let p;
    for (p = 0; p < l && !(p + n >= r.length || p >= s.length); ++p)
      r[p + n] = s[p];
    return p;
  }
  function ye(s, r) {
    return s instanceof r || s != null && s.constructor != null && s.constructor.name != null && s.constructor.name === r.name;
  }
  function Ct(s) {
    return s !== s;
  }
  const fr = function() {
    const s = "0123456789abcdef", r = new Array(256);
    for (let n = 0; n < 16; ++n) {
      const l = n * 16;
      for (let p = 0; p < 16; ++p)
        r[l + p] = s[n] + s[p];
    }
    return r;
  }();
  function ke(s) {
    return typeof BigInt > "u" ? $t : s;
  }
  function $t() {
    throw new Error("BigInt not supported");
  }
})(Mn);
var Dn = { exports: {} }, se = Dn.exports = {}, Oe, Le;
function Tr() {
  throw new Error("setTimeout has not been defined");
}
function Cr() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Oe = setTimeout : Oe = Tr;
  } catch {
    Oe = Tr;
  }
  try {
    typeof clearTimeout == "function" ? Le = clearTimeout : Le = Cr;
  } catch {
    Le = Cr;
  }
})();
function zn(e) {
  if (Oe === setTimeout)
    return setTimeout(e, 0);
  if ((Oe === Tr || !Oe) && setTimeout)
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
function ao(e) {
  if (Le === clearTimeout)
    return clearTimeout(e);
  if ((Le === Cr || !Le) && clearTimeout)
    return Le = clearTimeout, clearTimeout(e);
  try {
    return Le(e);
  } catch {
    try {
      return Le.call(null, e);
    } catch {
      return Le.call(this, e);
    }
  }
}
var ze = [], gt = !1, et, Ht = -1;
function co() {
  !gt || !et || (gt = !1, et.length ? ze = et.concat(ze) : Ht = -1, ze.length && $n());
}
function $n() {
  if (!gt) {
    var e = zn(co);
    gt = !0;
    for (var t = ze.length; t; ) {
      for (et = ze, ze = []; ++Ht < t; )
        et && et[Ht].run();
      Ht = -1, t = ze.length;
    }
    et = null, gt = !1, ao(e);
  }
}
se.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var i = 1; i < arguments.length; i++)
      t[i - 1] = arguments[i];
  ze.push(new Vn(e, t)), ze.length === 1 && !gt && zn($n);
};
function Vn(e, t) {
  this.fun = e, this.array = t;
}
Vn.prototype.run = function() {
  this.fun.apply(null, this.array);
};
se.title = "browser";
se.browser = !0;
se.env = {};
se.argv = [];
se.version = "";
se.versions = {};
function $e() {
}
se.on = $e;
se.addListener = $e;
se.once = $e;
se.off = $e;
se.removeListener = $e;
se.removeAllListeners = $e;
se.emit = $e;
se.prependListener = $e;
se.prependOnceListener = $e;
se.listeners = function(e) {
  return [];
};
se.binding = function(e) {
  throw new Error("process.binding is not supported");
};
se.cwd = function() {
  return "/";
};
se.chdir = function(e) {
  throw new Error("process.chdir is not supported");
};
se.umask = function() {
  return 0;
};
var lo = Dn.exports;
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = Mn, i = lo, o = (f) => f && f.__esModule ? f : { default: f }, c = o(i), u = globalThis || void 0 || self;
  Object.defineProperty(e, "Buffer", { enumerable: !0, get: () => t.Buffer }), Object.defineProperty(e, "process", { enumerable: !0, get: () => c.default }), e.global = u;
})(Ee);
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
  var e = Nt, t = Symbol.for("react.element"), i = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(a, h, x) {
    var y, b = {}, I = null, P = null;
    x !== void 0 && (I = "" + x), h.key !== void 0 && (I = "" + h.key), h.ref !== void 0 && (P = h.ref);
    for (y in h)
      o.call(h, y) && !u.hasOwnProperty(y) && (b[y] = h[y]);
    if (a && a.defaultProps)
      for (y in h = a.defaultProps, h)
        b[y] === void 0 && (b[y] = h[y]);
    return { $$typeof: t, type: a, key: I, ref: P, props: b, _owner: c.current };
  }
  return St.Fragment = i, St.jsx = f, St.jsxs = f, St;
}
var Pt = {}, dn;
function fo() {
  return dn || (dn = 1, Ee.process.env.NODE_ENV !== "production" && function() {
    var e = Nt, t = Symbol.for("react.element"), i = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), a = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), O = Symbol.iterator, S = "@@iterator";
    function ne(d) {
      if (d === null || typeof d != "object")
        return null;
      var v = O && d[O] || d[S];
      return typeof v == "function" ? v : null;
    }
    var j = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function L(d) {
      {
        for (var v = arguments.length, E = new Array(v > 1 ? v - 1 : 0), R = 1; R < v; R++)
          E[R - 1] = arguments[R];
        ae("error", d, E);
      }
    }
    function ae(d, v, E) {
      {
        var R = j.ReactDebugCurrentFrame, G = R.getStackAddendum();
        G !== "" && (v += "%s", E = E.concat([G]));
        var J = E.map(function(D) {
          return String(D);
        });
        J.unshift("Warning: " + v), Function.prototype.apply.call(console[d], console, J);
      }
    }
    var me = !1, k = !1, pe = !1, we = !1, _e = !1, be;
    be = Symbol.for("react.module.reference");
    function je(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === o || d === u || _e || d === c || d === x || d === y || we || d === P || me || k || pe || typeof d == "object" && d !== null && (d.$$typeof === I || d.$$typeof === b || d.$$typeof === f || d.$$typeof === a || d.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === be || d.getModuleId !== void 0));
    }
    function de(d, v, E) {
      var R = d.displayName;
      if (R)
        return R;
      var G = v.displayName || v.name || "";
      return G !== "" ? E + "(" + G + ")" : E;
    }
    function T(d) {
      return d.displayName || "Context";
    }
    function _(d) {
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
        case c:
          return "StrictMode";
        case x:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case a:
            var v = d;
            return T(v) + ".Consumer";
          case f:
            var E = d;
            return T(E._context) + ".Provider";
          case h:
            return de(d, d.render, "ForwardRef");
          case b:
            var R = d.displayName || null;
            return R !== null ? R : _(d.type) || "Memo";
          case I: {
            var G = d, J = G._payload, D = G._init;
            try {
              return _(D(J));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, A = 0, F, U, V, q, te, z, W;
    function re() {
    }
    re.__reactDisabledLog = !0;
    function Ve() {
      {
        if (A === 0) {
          F = console.log, U = console.info, V = console.warn, q = console.error, te = console.group, z = console.groupCollapsed, W = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: re,
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
        A++;
      }
    }
    function Ye() {
      {
        if (A--, A === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, d, {
              value: F
            }),
            info: C({}, d, {
              value: U
            }),
            warn: C({}, d, {
              value: V
            }),
            error: C({}, d, {
              value: q
            }),
            group: C({}, d, {
              value: te
            }),
            groupCollapsed: C({}, d, {
              value: z
            }),
            groupEnd: C({}, d, {
              value: W
            })
          });
        }
        A < 0 && L("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var We = j.ReactCurrentDispatcher, ot;
    function Re(d, v, E) {
      {
        if (ot === void 0)
          try {
            throw Error();
          } catch (G) {
            var R = G.stack.trim().match(/\n( *(at )?)/);
            ot = R && R[1] || "";
          }
        return `
` + ot + d;
      }
    }
    var Je = !1, Xe;
    {
      var ur = typeof WeakMap == "function" ? WeakMap : Map;
      Xe = new ur();
    }
    function Tt(d, v) {
      if (!d || Je)
        return "";
      {
        var E = Xe.get(d);
        if (E !== void 0)
          return E;
      }
      var R;
      Je = !0;
      var G = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var J;
      J = We.current, We.current = null, Ve();
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
              R = De;
            }
            Reflect.construct(d, [], D);
          } else {
            try {
              D.call();
            } catch (De) {
              R = De;
            }
            d.call(D.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (De) {
            R = De;
          }
          d();
        }
      } catch (De) {
        if (De && R && typeof De.stack == "string") {
          for (var N = De.stack.split(`
`), he = R.stack.split(`
`), oe = N.length - 1, ce = he.length - 1; oe >= 1 && ce >= 0 && N[oe] !== he[ce]; )
            ce--;
          for (; oe >= 1 && ce >= 0; oe--, ce--)
            if (N[oe] !== he[ce]) {
              if (oe !== 1 || ce !== 1)
                do
                  if (oe--, ce--, ce < 0 || N[oe] !== he[ce]) {
                    var Ce = `
` + N[oe].replace(" at new ", " at ");
                    return d.displayName && Ce.includes("<anonymous>") && (Ce = Ce.replace("<anonymous>", d.displayName)), typeof d == "function" && Xe.set(d, Ce), Ce;
                  }
                while (oe >= 1 && ce >= 0);
              break;
            }
        }
      } finally {
        Je = !1, We.current = J, Ye(), Error.prepareStackTrace = G;
      }
      var dt = d ? d.displayName || d.name : "", un = dt ? Re(dt) : "";
      return typeof d == "function" && Xe.set(d, un), un;
    }
    function Ge(d, v, E) {
      return Tt(d, !1);
    }
    function Ke(d) {
      var v = d.prototype;
      return !!(v && v.isReactComponent);
    }
    function st(d, v, E) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return Tt(d, Ke(d));
      if (typeof d == "string")
        return Re(d);
      switch (d) {
        case x:
          return Re("Suspense");
        case y:
          return Re("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case h:
            return Ge(d.render);
          case b:
            return st(d.type, v, E);
          case I: {
            var R = d, G = R._payload, J = R._init;
            try {
              return st(J(G), v, E);
            } catch {
            }
          }
        }
      return "";
    }
    var at = Object.prototype.hasOwnProperty, ct = {}, Dt = j.ReactDebugCurrentFrame;
    function lt(d) {
      if (d) {
        var v = d._owner, E = st(d.type, d._source, v ? v.type : null);
        Dt.setExtraStackFrame(E);
      } else
        Dt.setExtraStackFrame(null);
    }
    function zt(d, v, E, R, G) {
      {
        var J = Function.call.bind(at);
        for (var D in d)
          if (J(d, D)) {
            var N = void 0;
            try {
              if (typeof d[D] != "function") {
                var he = Error((R || "React class") + ": " + E + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw he.name = "Invariant Violation", he;
              }
              N = d[D](v, D, R, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (oe) {
              N = oe;
            }
            N && !(N instanceof Error) && (lt(G), L("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", R || "React class", E, D, typeof N), lt(null)), N instanceof Error && !(N.message in ct) && (ct[N.message] = !0, lt(G), L("Failed %s type: %s", E, N.message), lt(null));
          }
      }
    }
    var ut = Array.isArray;
    function ye(d) {
      return ut(d);
    }
    function Ct(d) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, E = v && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return E;
      }
    }
    function fr(d) {
      try {
        return ke(d), !1;
      } catch {
        return !0;
      }
    }
    function ke(d) {
      return "" + d;
    }
    function $t(d) {
      if (fr(d))
        return L("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ct(d)), ke(d);
    }
    var s = j.ReactCurrentOwner, r = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, n, l, p;
    p = {};
    function m(d) {
      if (at.call(d, "ref")) {
        var v = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function g(d) {
      if (at.call(d, "key")) {
        var v = Object.getOwnPropertyDescriptor(d, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function B(d, v) {
      if (typeof d.ref == "string" && s.current && v && s.current.stateNode !== v) {
        var E = _(s.current.type);
        p[E] || (L('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', _(s.current.type), d.ref), p[E] = !0);
      }
    }
    function Q(d, v) {
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
    function X(d, v) {
      {
        var E = function() {
          l || (l = !0, L("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        E.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var ee = function(d, v, E, R, G, J, D) {
      var N = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: d,
        key: v,
        ref: E,
        props: D,
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
        value: R
      }), Object.defineProperty(N, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: G
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    };
    function H(d, v, E, R, G) {
      {
        var J, D = {}, N = null, he = null;
        E !== void 0 && ($t(E), N = "" + E), g(v) && ($t(v.key), N = "" + v.key), m(v) && (he = v.ref, B(v, G));
        for (J in v)
          at.call(v, J) && !r.hasOwnProperty(J) && (D[J] = v[J]);
        if (d && d.defaultProps) {
          var oe = d.defaultProps;
          for (J in oe)
            D[J] === void 0 && (D[J] = oe[J]);
        }
        if (N || he) {
          var ce = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          N && Q(D, ce), he && X(D, ce);
        }
        return ee(d, N, he, G, R, s.current, D);
      }
    }
    var dr = j.ReactCurrentOwner, nn = j.ReactDebugCurrentFrame;
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
          var d = _(dr.current.type);
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
        d && d._owner && d._owner !== dr.current && (R = " It was passed a child from " + _(d._owner.type) + "."), ft(d), L('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, R), ft(null);
      }
    }
    function cn(d, v) {
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
          var G = ne(d);
          if (typeof G == "function" && G !== d.entries)
            for (var J = G.call(d), D; !(D = J.next()).done; )
              hr(D.value) && an(D.value, v);
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
        v.$$typeof === b))
          E = v.propTypes;
        else
          return;
        if (E) {
          var R = _(v);
          zt(E, d.props, "prop", R, d);
        } else if (v.PropTypes !== void 0 && !pr) {
          pr = !0;
          var G = _(v);
          L("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", G || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && L("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Li(d) {
      {
        for (var v = Object.keys(d.props), E = 0; E < v.length; E++) {
          var R = v[E];
          if (R !== "children" && R !== "key") {
            ft(d), L("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", R), ft(null);
            break;
          }
        }
        d.ref !== null && (ft(d), L("Invalid attribute `ref` supplied to `React.Fragment`."), ft(null));
      }
    }
    function ln(d, v, E, R, G, J) {
      {
        var D = je(d);
        if (!D) {
          var N = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (N += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var he = Ai(G);
          he ? N += he : N += on();
          var oe;
          d === null ? oe = "null" : ye(d) ? oe = "array" : d !== void 0 && d.$$typeof === t ? (oe = "<" + (_(d.type) || "Unknown") + " />", N = " Did you accidentally export a JSX literal instead of a component?") : oe = typeof d, L("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", oe, N);
        }
        var ce = H(d, v, E, G, J);
        if (ce == null)
          return ce;
        if (D) {
          var Ce = v.children;
          if (Ce !== void 0)
            if (R)
              if (ye(Ce)) {
                for (var dt = 0; dt < Ce.length; dt++)
                  cn(Ce[dt], d);
                Object.freeze && Object.freeze(Ce);
              } else
                L("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              cn(Ce, d);
        }
        return d === o ? Li(ce) : Oi(ce), ce;
      }
    }
    function Ni(d, v, E) {
      return ln(d, v, E, !0);
    }
    function Mi(d, v, E) {
      return ln(d, v, E, !1);
    }
    var Ui = Mi, Di = Ni;
    Pt.Fragment = o, Pt.jsx = Ui, Pt.jsxs = Di;
  }()), Pt;
}
Ee.process.env.NODE_ENV === "production" ? Sr.exports = uo() : Sr.exports = fo();
var w = Sr.exports;
var At = {}, _t = Vi;
if (Ee.process.env.NODE_ENV === "production")
  At.createRoot = _t.createRoot, At.hydrateRoot = _t.hydrateRoot;
else {
  var Vt = _t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  At.createRoot = function(e, t) {
    Vt.usingClientEntryPoint = !0;
    try {
      return _t.createRoot(e, t);
    } finally {
      Vt.usingClientEntryPoint = !1;
    }
  }, At.hydrateRoot = function(e, t, i) {
    Vt.usingClientEntryPoint = !0;
    try {
      return _t.hydrateRoot(e, t, i);
    } finally {
      Vt.usingClientEntryPoint = !1;
    }
  };
}
function Yt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Yt = function(i) {
    return typeof i;
  } : Yt = function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  }, Yt(e);
}
function po(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pn(e, t) {
  for (var i = 0; i < t.length; i++) {
    var o = t[i];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
  }
}
function ho(e, t, i) {
  return t && pn(e.prototype, t), i && pn(e, i), e;
}
function mo(e, t) {
  return t && (Yt(t) === "object" || typeof t == "function") ? t : Jt(e);
}
function Pr(e) {
  return Pr = Object.setPrototypeOf ? Object.getPrototypeOf : function(i) {
    return i.__proto__ || Object.getPrototypeOf(i);
  }, Pr(e);
}
function Jt(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function wo(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && _r(e, t);
}
function _r(e, t) {
  return _r = Object.setPrototypeOf || function(o, c) {
    return o.__proto__ = c, o;
  }, _r(e, t);
}
function Xt(e, t, i) {
  return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e;
}
var Wn = /* @__PURE__ */ function(e) {
  wo(t, e);
  function t() {
    var i, o;
    po(this, t);
    for (var c = arguments.length, u = new Array(c), f = 0; f < c; f++)
      u[f] = arguments[f];
    return o = mo(this, (i = Pr(t)).call.apply(i, [this].concat(u))), Xt(Jt(o), "state", {
      bootstrapped: !1
    }), Xt(Jt(o), "_unsubscribe", void 0), Xt(Jt(o), "handlePersistorState", function() {
      var a = o.props.persistor, h = a.getState(), x = h.bootstrapped;
      x && (o.props.onBeforeLift ? Promise.resolve(o.props.onBeforeLift()).finally(function() {
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
      return Ee.process.env.NODE_ENV !== "production" && typeof this.props.children == "function" && this.props.loading && console.error("redux-persist: PersistGate expects either a function child or loading prop, but not both. The loading prop will be ignored."), typeof this.props.children == "function" ? this.props.children(this.state.bootstrapped) : this.state.bootstrapped ? this.props.children : this.props.loading;
    }
  }]), t;
}(zi);
Xt(Wn, "defaultProps", {
  children: null,
  loading: null
});
var Ae = /* @__PURE__ */ ((e) => (e.text = "text", e.buttons = "buttons", e.payment = "payment", e.video = "video", e.image = "image", e.email = "email", e))(Ae || {}), $r = /* @__PURE__ */ ((e) => (e.horizontal = "horizontal", e.vertical = "vertical", e))($r || {}), Qe = /* @__PURE__ */ ((e) => (e.chat = "utm_chat", e))(Qe || {}), ge = /* @__PURE__ */ ((e) => (e.addToCart = "AddToCart", e.contact = "Contact", e.initiateCheckout = "InitiateCheckout", e.pageView = "PageView", e.viewContent = "ViewContent", e.purchase = "Purchase", e.subscribe = "Subscribe", e.recurringSubscriptionPayment = "RecurringSubscriptionPayment", e.cancelSubscription = "CancelSubscription", e.purchaseFailed = "PurchaseFailed", e.subscribeFailed = "SubscribeFailed", e.recurringSubscriptionPaymentFailed = "RecurringSubscriptionPaymentFailed", e.customerCreated = "CustomerCreated", e.subscriptionChargeback = "SubscriptionChargeback", e.subscriptionRefund = "SubscriptionRefund", e.transactionChargeback = "TransactionChargeback", e.transactionRefund = "TransactionRefund", e.firstMessage = "FirstMessage", e.linkProvided = "LinkProvided", e.linkClicked = "LinkClicked", e.emailField = "EmailField", e.emailEntered = "EmailEntered", e.emailWrong = "EmailWrong", e.emailExist = "EmailExist", e.priceSeen = "PriceSeen", e.buttonClick = "ButtonClick", e.closeClicked = "CloseClicked", e))(ge || {}), Gn = /* @__PURE__ */ ((e) => (e.email = "email_intent", e.payment = "payment_intent", e.emailError = "email_validation_error", e.emailSuccess = "email_validation_success", e.destroy = "payment_intent_destroy", e))(Gn || {}), Z = /* @__PURE__ */ ((e) => (e.user = "user", e.assistant = "assistant", e))(Z || {}), Se = /* @__PURE__ */ ((e) => (e.chat = "chat", e.chatHistory = "chat-history", e.connect = "connect", e.error = "error", e.disconnect = "disconnect", e.streamStart = "stream-start", e.streamData = "stream-data", e.streamEnd = "stream-end", e.streamError = "stream-error", e))(Se || {}), qn = /* @__PURE__ */ ((e) => (e.light = "light", e.dark = "dark", e))(qn || {});
const yt = (e) => new URLSearchParams(window.location.search).get(e) || "", yo = {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric"
};
function go(e, t = yo) {
  return `${new Date(e).toLocaleDateString([], t)}`.toUpperCase();
}
function ue() {
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
}, Fe = {
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
    role: Z.user,
    message: ""
  },
  historyData: {},
  historyIds: [],
  error: "",
  isLoading: !1,
  typingTimeoutExpired: !1,
  lastGroupId: ue(),
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
  initialState: Fe,
  reducers: {
    setConfig(e, { payload: t }) {
      e.aiProfile = { ...Fe.aiProfile, ...t.aiProfile }, e.translations = { ...Fe.translations, ...t.translations }, e.close = { ...Fe.close, ...t.close }, e.themeId = t.themeId, e.chatUrl = t.chatUrl, e.purpose = t.purpose;
    },
    setSpecialUrls(e, { payload: t }) {
      e.specialUrls = { ...e.specialUrls, ...t };
    },
    setPurpose(e, { payload: t }) {
      e.purpose = t;
    },
    resetConfig(e) {
      e.aiProfile = Fe.aiProfile, e.themeId = Fe.themeId, e.translations = Fe.translations, e.chatUrl = Fe.chatUrl;
    },
    setTheme(e, { payload: t }) {
      e.themeId = t;
    },
    resetTheme(e) {
      e.themeId = Fe.themeId;
    },
    setDevToolsStatus(e, { payload: t }) {
      e.enableDevTools = t;
    },
    resetDevToolsStatus(e) {
      e.enableDevTools = Fe.enableDevTools;
    },
    togglePluginMode(e) {
      e.isPluginMode = !e.isPluginMode;
    },
    setTranslations(e, { payload: t }) {
      e.translations = { ...e.translations, ...t };
    }
  }
}), nt = (e) => e.config, {
  setConfig: Yn,
  resetConfig: mc,
  setTheme: wc,
  resetTheme: yc,
  setDevToolsStatus: gc,
  resetDevToolsStatus: bc,
  togglePluginMode: xc,
  setTranslations: vc,
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
}), Ut = (e) => e.meta, { setMeta: Io, resetMeta: Ec, setMarketing: To, setPd: Co, setRegion: So } = Jn.actions, Po = Jn.reducer, He = Wi, $ = Gi, _o = () => {
  const [e, t] = xt([0, 0]);
  return $i(() => {
    function i() {
      t([window.innerWidth, window.innerHeight]);
    }
    return window.addEventListener("resize", i), i(), () => window.removeEventListener("resize", i);
  }, []), e;
}, jo = () => {
  const { themeId: e, close: t } = $(nt), { cid: i, systemType: o, marketing: c } = $(Ut);
  return {
    theme: e,
    closeVisible: t.visible,
    cid: i,
    systemType: o,
    marketing: c
  };
};
var hn = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, xe = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, Ro = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function Xn(e, t) {
  e.forEach(function(i) {
    Array.isArray(i) ? Xn(i, t) : t.push(i);
  });
}
function Kn(e) {
  let t = [];
  return Xn(e, t), t;
}
var Zn = (...e) => Kn(e).filter(Boolean), Qn = (e, t) => {
  let i = {}, o = Object.keys(e), c = Object.keys(t);
  for (let u of o)
    if (c.includes(u)) {
      let f = e[u], a = t[u];
      typeof f == "object" && typeof a == "object" ? i[u] = Qn(f, a) : Array.isArray(f) || Array.isArray(a) ? i[u] = Zn(a, f) : i[u] = a + " " + f;
    } else
      i[u] = e[u];
  for (let u of c)
    o.includes(u) || (i[u] = t[u]);
  return i;
}, mn = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
function ko() {
  for (var e = 0, t, i, o = ""; e < arguments.length; )
    (t = arguments[e++]) && (i = ei(t)) && (o && (o += " "), o += i);
  return o;
}
function ei(e) {
  if (typeof e == "string")
    return e;
  for (var t, i = "", o = 0; o < e.length; o++)
    e[o] && (t = ei(e[o])) && (i && (i += " "), i += t);
  return i;
}
var Vr = "-";
function Bo(e) {
  var t = Fo(e), i = e.conflictingClassGroups, o = e.conflictingClassGroupModifiers, c = o === void 0 ? {} : o;
  function u(a) {
    var h = a.split(Vr);
    return h[0] === "" && h.length !== 1 && h.shift(), ti(h, t) || Ao(a);
  }
  function f(a, h) {
    var x = i[a] || [];
    return h && c[a] ? [].concat(x, c[a]) : x;
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
  var i = e[0], o = t.nextPart.get(i), c = o ? ti(e.slice(1), o) : void 0;
  if (c)
    return c;
  if (t.validators.length !== 0) {
    var u = e.join(Vr);
    return (f = t.validators.find(function(a) {
      var h = a.validator;
      return h(u);
    })) == null ? void 0 : f.classGroupId;
  }
}
var wn = /^\[(.+)\]$/;
function Ao(e) {
  if (wn.test(e)) {
    var t = wn.exec(e)[1], i = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (i)
      return "arbitrary.." + i;
  }
}
function Fo(e) {
  var t = e.theme, i = e.prefix, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, c = Lo(Object.entries(e.classGroups), i);
  return c.forEach(function(u) {
    var f = u[0], a = u[1];
    jr(a, o, f, t);
  }), o;
}
function jr(e, t, i, o) {
  e.forEach(function(c) {
    if (typeof c == "string") {
      var u = c === "" ? t : yn(t, c);
      u.classGroupId = i;
      return;
    }
    if (typeof c == "function") {
      if (Oo(c)) {
        jr(c(o), t, i, o);
        return;
      }
      t.validators.push({
        validator: c,
        classGroupId: i
      });
      return;
    }
    Object.entries(c).forEach(function(f) {
      var a = f[0], h = f[1];
      jr(h, yn(t, a), i, o);
    });
  });
}
function yn(e, t) {
  var i = e;
  return t.split(Vr).forEach(function(o) {
    i.nextPart.has(o) || i.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), i = i.nextPart.get(o);
  }), i;
}
function Oo(e) {
  return e.isThemeGetter;
}
function Lo(e, t) {
  return t ? e.map(function(i) {
    var o = i[0], c = i[1], u = c.map(function(f) {
      return typeof f == "string" ? t + f : typeof f == "object" ? Object.fromEntries(Object.entries(f).map(function(a) {
        var h = a[0], x = a[1];
        return [t + h, x];
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
  var t = 0, i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  function c(u, f) {
    i.set(u, f), t++, t > e && (t = 0, o = i, i = /* @__PURE__ */ new Map());
  }
  return {
    get: function(f) {
      var a = i.get(f);
      if (a !== void 0)
        return a;
      if ((a = o.get(f)) !== void 0)
        return c(f, a), a;
    },
    set: function(f, a) {
      i.has(f) ? i.set(f, a) : c(f, a);
    }
  };
}
var ri = "!";
function Mo(e) {
  var t = e.separator || ":", i = t.length === 1, o = t[0], c = t.length;
  return function(f) {
    for (var a = [], h = 0, x = 0, y, b = 0; b < f.length; b++) {
      var I = f[b];
      if (h === 0) {
        if (I === o && (i || f.slice(b, b + c) === t)) {
          a.push(f.slice(x, b)), x = b + c;
          continue;
        }
        if (I === "/") {
          y = b;
          continue;
        }
      }
      I === "[" ? h++ : I === "]" && h--;
    }
    var P = a.length === 0 ? f : f.substring(x), O = P.startsWith(ri), S = O ? P.substring(1) : P, ne = y && y > x ? y - x : void 0;
    return {
      modifiers: a,
      hasImportantModifier: O,
      baseClassName: S,
      maybePostfixModifierPosition: ne
    };
  };
}
function Uo(e) {
  if (e.length <= 1)
    return e;
  var t = [], i = [];
  return e.forEach(function(o) {
    var c = o[0] === "[";
    c ? (t.push.apply(t, i.sort().concat([o])), i = []) : i.push(o);
  }), t.push.apply(t, i.sort()), t;
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
  var i = t.splitModifiers, o = t.getClassGroupId, c = t.getConflictingClassGroupIds, u = /* @__PURE__ */ new Set();
  return e.trim().split(zo).map(function(f) {
    var a = i(f), h = a.modifiers, x = a.hasImportantModifier, y = a.baseClassName, b = a.maybePostfixModifierPosition, I = o(b ? y.substring(0, b) : y), P = !!b;
    if (!I) {
      if (!b)
        return {
          isTailwindClass: !1,
          originalClassName: f
        };
      if (I = o(y), !I)
        return {
          isTailwindClass: !1,
          originalClassName: f
        };
      P = !1;
    }
    var O = Uo(h).join(":"), S = x ? O + ri : O;
    return {
      isTailwindClass: !0,
      modifierId: S,
      classGroupId: I,
      originalClassName: f,
      hasPostfixModifier: P
    };
  }).reverse().filter(function(f) {
    if (!f.isTailwindClass)
      return !0;
    var a = f.modifierId, h = f.classGroupId, x = f.hasPostfixModifier, y = a + h;
    return u.has(y) ? !1 : (u.add(y), c(h, x).forEach(function(b) {
      return u.add(a + b);
    }), !0);
  }).reverse().map(function(f) {
    return f.originalClassName;
  }).join(" ");
}
function Rr() {
  for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
    t[i] = arguments[i];
  var o, c, u, f = a;
  function a(x) {
    var y = t[0], b = t.slice(1), I = b.reduce(function(P, O) {
      return O(P);
    }, y());
    return o = Do(I), c = o.cache.get, u = o.cache.set, f = h, h(x);
  }
  function h(x) {
    var y = c(x);
    if (y)
      return y;
    var b = $o(x, o);
    return u(x, b), b;
  }
  return function() {
    return f(ko.apply(null, arguments));
  };
}
function K(e) {
  var t = function(o) {
    return o[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var ni = /^\[(?:([a-z-]+):)?(.+)\]$/i, Vo = /^\d+\/\d+$/, Wo = /* @__PURE__ */ new Set(["px", "full", "screen"]), Go = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, qo = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ho = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Be(e) {
  return tt(e) || Wo.has(e) || Vo.test(e) || kr(e);
}
function kr(e) {
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
  return it(e, "number", tt);
}
function tt(e) {
  return !Number.isNaN(Number(e));
}
function Ko(e) {
  return e.endsWith("%") && tt(e.slice(0, -1));
}
function jt(e) {
  return gn(e) || it(e, "number", gn);
}
function M(e) {
  return ni.test(e);
}
function Rt() {
  return !0;
}
function qe(e) {
  return Go.test(e);
}
function Zo(e) {
  return it(e, "", ts);
}
function it(e, t, i) {
  var o = ni.exec(e);
  return o ? o[1] ? o[1] === t : i(o[2]) : !1;
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
function gn(e) {
  return Number.isInteger(Number(e));
}
function ts(e) {
  return Ho.test(e);
}
function Br() {
  var e = K("colors"), t = K("spacing"), i = K("blur"), o = K("brightness"), c = K("borderColor"), u = K("borderRadius"), f = K("borderSpacing"), a = K("borderWidth"), h = K("contrast"), x = K("grayscale"), y = K("hueRotate"), b = K("invert"), I = K("gap"), P = K("gradientColorStops"), O = K("gradientColorStopPositions"), S = K("inset"), ne = K("margin"), j = K("opacity"), L = K("padding"), ae = K("saturate"), me = K("scale"), k = K("sepia"), pe = K("skew"), we = K("space"), _e = K("translate"), be = function() {
    return ["auto", "contain", "none"];
  }, je = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, de = function() {
    return ["auto", M, t];
  }, T = function() {
    return [M, t];
  }, _ = function() {
    return ["", Be];
  }, C = function() {
    return ["auto", tt, M];
  }, A = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, F = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, U = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, V = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, q = function() {
    return ["", "0", M];
  }, te = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, z = function() {
    return [tt, Wt];
  }, W = function() {
    return [tt, M];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Rt],
      spacing: [Be],
      blur: ["none", "", qe, M],
      brightness: z(),
      borderColor: [e],
      borderRadius: ["none", "", "full", qe, M],
      borderSpacing: T(),
      borderWidth: _(),
      contrast: z(),
      grayscale: q(),
      hueRotate: W(),
      invert: q(),
      gap: T(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Ko, kr],
      inset: de(),
      margin: de(),
      opacity: z(),
      padding: T(),
      saturate: z(),
      scale: z(),
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
        columns: [qe]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": te()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": te()
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
        object: [].concat(A(), [M])
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
        overscroll: be()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": be()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": be()
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
        z: ["auto", jt]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: de()
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
        order: ["first", "last", "none", jt]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Rt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", jt]
        }, M]
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
        "grid-rows": [Rt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [jt]
        }, M]
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
        "space-x": [we]
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
        "space-y": [we]
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
        "min-w": ["min", "max", "fit", M, Be]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [qe]
        }, qe, M]
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
        "min-h": ["min", "max", "fit", M, Be]
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
        text: ["base", qe, kr]
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
        font: [Rt]
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
        "line-clamp": ["none", tt, Wt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", M, Be]
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
        decoration: [].concat(F(), ["wavy"])
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
        "underline-offset": ["auto", M, Be]
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
        bg: [].concat(A(), [Jo])
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
        from: [O]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [O]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [O]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [P]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [P]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [P]
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
        border: [].concat(F(), ["hidden"])
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
        divide: F()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [c]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [c]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [c]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [c]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [c]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [c]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [c]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [c]
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
        "outline-offset": [M, Be]
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
        ring: _()
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
        shadow: ["", "inner", "none", qe, Zo]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Rt]
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
        "drop-shadow": ["", "none", qe, M]
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
        invert: [b]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ae]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [k]
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
        "backdrop-invert": [b]
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
        "backdrop-saturate": [ae]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [k]
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
        scale: [me]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [me]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [me]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [jt, M]
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
        "skew-x": [pe]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [pe]
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
        stroke: [Be, Wt]
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
  for (var i in t)
    oi(e, i, t[i]);
  return e;
}
var ns = Object.prototype.hasOwnProperty, is = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function oi(e, t, i) {
  if (!ns.call(e, t) || is.has(typeof i) || i === null) {
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
      oi(e[t], o, i[o]);
  }
}
function os(e) {
  for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    i[o - 1] = arguments[o];
  return typeof e == "function" ? Rr.apply(void 0, [Br, e].concat(i)) : Rr.apply(void 0, [function() {
    return rs(Br(), e);
  }].concat(i));
}
var ss = /* @__PURE__ */ Rr(Br), as = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, si = (e) => e || void 0, Ot = (...e) => si(Kn(e).filter(Boolean).join(" ")), wr = null, Qt = {}, Ar = !1, kt = (...e) => (t) => t.twMerge ? ((!wr || Ar) && (Ar = !1, wr = xe(Qt) ? ss : os(Qt)), si(wr(Ot(e)))) : Ot(e), bn = (e, t) => {
  for (let i in t)
    e.hasOwnProperty(i) ? e[i] = Ot(e[i], t[i]) : e[i] = t[i];
  return e;
}, ie = (e, t) => {
  let { extend: i = null, slots: o = {}, variants: c = {}, compoundVariants: u = [], compoundSlots: f = [], defaultVariants: a = {} } = e, h = { ...as, ...t }, x = i != null && i.base ? Ot(i.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, y = i != null && i.variants && !xe(i.variants) ? Qn(c, i.variants) : c, b = i != null && i.defaultVariants && !xe(i.defaultVariants) ? { ...i.defaultVariants, ...a } : a;
  !xe(h.twMergeConfig) && !Ro(h.twMergeConfig, Qt) && (Ar = !0, Qt = h.twMergeConfig);
  let I = xe(i == null ? void 0 : i.slots), P = xe(o) ? {} : { base: Ot(e == null ? void 0 : e.base, I && (i == null ? void 0 : i.base)), ...o }, O = I ? P : bn({ ...i == null ? void 0 : i.slots }, xe(P) ? { base: e == null ? void 0 : e.base } : P), S = (j) => {
    if (xe(y) && xe(o) && I)
      return kt(x, j == null ? void 0 : j.class, j == null ? void 0 : j.className)(h);
    if (u && !Array.isArray(u))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof u}`);
    if (f && !Array.isArray(f))
      throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof f}`);
    let L = (T, _, C = [], A) => {
      let F = C;
      if (typeof _ == "string")
        F = F.concat(mn(_).split(" ").map((U) => `${T}:${U}`));
      else if (Array.isArray(_))
        F = F.concat(_.reduce((U, V) => U.concat(`${T}:${V}`), []));
      else if (typeof _ == "object" && typeof A == "string") {
        for (let U in _)
          if (_.hasOwnProperty(U) && U === A) {
            let V = _[U];
            if (V && typeof V == "string") {
              let q = mn(V);
              F[A] ? F[A] = F[A].concat(q.split(" ").map((te) => `${T}:${te}`)) : F[A] = q.split(" ").map((te) => `${T}:${te}`);
            } else
              Array.isArray(V) && V.length > 0 && (F[A] = V.reduce((q, te) => q.concat(`${T}:${te}`), []));
          }
      }
      return F;
    }, ae = (T, _ = y, C = null, A = null) => {
      var F;
      let U = _[T];
      if (!U || xe(U))
        return null;
      let V = (F = A == null ? void 0 : A[T]) != null ? F : j == null ? void 0 : j[T];
      if (V === null)
        return null;
      let q = hn(V), te = Array.isArray(h.responsiveVariants) && h.responsiveVariants.length > 0 || h.responsiveVariants === !0, z = b == null ? void 0 : b[T], W = [];
      if (typeof q == "object" && te)
        for (let [Ve, Ye] of Object.entries(q)) {
          let We = U[Ye];
          if (Ve === "initial") {
            z = Ye;
            continue;
          }
          Array.isArray(h.responsiveVariants) && !h.responsiveVariants.includes(Ve) || (W = L(Ve, We, W, C));
        }
      let re = U[q] || U[hn(z)];
      return typeof W == "object" && typeof C == "string" && W[C] ? bn(W, re) : W.length > 0 ? (W.push(re), W) : re;
    }, me = () => y ? Object.keys(y).map((T) => ae(T, y)) : null, k = (T, _) => {
      if (!y || typeof y != "object")
        return null;
      let C = new Array();
      for (let A in y) {
        let F = ae(A, y, T, _), U = T === "base" && typeof F == "string" ? F : F && F[T];
        U && (C[C.length] = U);
      }
      return C;
    }, pe = {};
    for (let T in j)
      j[T] !== void 0 && (pe[T] = j[T]);
    let we = (T, _) => {
      var C;
      let A = typeof (j == null ? void 0 : j[T]) == "object" ? { [T]: (C = j[T]) == null ? void 0 : C.initial } : {};
      return { ...b, ...pe, ...A, ..._ };
    }, _e = (T = [], _) => {
      let C = [];
      for (let { class: A, className: F, ...U } of T) {
        let V = !0;
        for (let [q, te] of Object.entries(U)) {
          let z = we(q, _);
          if (Array.isArray(te)) {
            if (!te.includes(z[q])) {
              V = !1;
              break;
            }
          } else if (z[q] !== te) {
            V = !1;
            break;
          }
        }
        V && (A && C.push(A), F && C.push(F));
      }
      return C;
    }, be = (T) => {
      let _ = _e(u, T), C = _e(i == null ? void 0 : i.compoundVariants, T);
      return Zn(C, _);
    }, je = (T) => {
      let _ = be(T);
      if (!Array.isArray(_))
        return _;
      let C = {};
      for (let A of _)
        if (typeof A == "string" && (C.base = kt(C.base, A)(h)), typeof A == "object")
          for (let [F, U] of Object.entries(A))
            C[F] = kt(C[F], U)(h);
      return C;
    }, de = (T) => {
      if (f.length < 1)
        return null;
      let _ = {};
      for (let { slots: C = [], class: A, className: F, ...U } of f) {
        if (!xe(U)) {
          let V = !0;
          for (let q of Object.keys(U)) {
            let te = we(q, T)[q];
            if (te === void 0 || (Array.isArray(U[q]) ? !U[q].includes(te) : U[q] !== te)) {
              V = !1;
              break;
            }
          }
          if (!V)
            continue;
        }
        for (let V of C)
          _[V] = _[V] || [], _[V].push([A, F]);
      }
      return _;
    };
    if (!xe(o) || !I) {
      let T = {};
      if (typeof O == "object" && !xe(O))
        for (let _ of Object.keys(O))
          T[_] = (C) => {
            var A, F;
            return kt(O[_], k(_, C), ((A = je(C)) != null ? A : [])[_], ((F = de(C)) != null ? F : [])[_], C == null ? void 0 : C.class, C == null ? void 0 : C.className)(h);
          };
      return T;
    }
    return kt(x, me(), be(), j == null ? void 0 : j.class, j == null ? void 0 : j.className)(h);
  }, ne = () => {
    if (!(!y || typeof y != "object"))
      return Object.keys(y);
  };
  return S.variantKeys = ne(), S.extend = i, S.base = x, S.slots = O, S.variants = y, S.defaultVariants = b, S.compoundSlots = f, S.compoundVariants = u, S;
};
const cs = (
  /*tw*/
  ie({
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
), ls = (
  /*tw*/
  ie({
    slots: {
      base: "tw--flex tw--justify-between tw--px-5 tw--py-[11px] tw--shadow-[-1px_2px_5px_0] tw--shadow-zephyr-200"
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
), us = ({ head: e, stream: t, foot: i }) => {
  const { themeId: o, isPluginMode: c } = $(nt), { base: u, wrapper: f } = cs(), a = _o();
  return /* @__PURE__ */ w.jsx(
    "div",
    {
      "data-e2e": "base-container",
      style: { height: `${a[1]}px` },
      className: u({ minimized: c }) + " " + o,
      children: /* @__PURE__ */ w.jsxs("div", { className: f(), children: [
        e,
        t,
        i
      ] })
    }
  );
}, fs = (
  /*tw*/
  ie({
    slots: {
      base: "loader js-payment-loader tw--hidden tw--fixed tw--left-0 tw--top-0 tw--z-[101] tw--m-0 tw--flex tw--h-screen tw--w-screen tw--items-center tw--justify-center tw--px-5 tw--bg-whisper"
    }
  })
), ds = ({ children: e }) => {
  const { base: t } = fs();
  return /* @__PURE__ */ w.jsx("div", { className: t(), children: e });
}, ve = ({
  eventType: e,
  systemType: t,
  utmParams: i,
  customerUuid: o,
  email: c,
  phone: u
}) => {
  if (window.trackEventInGTM && window.tracking) {
    const f = window.tracking.event({
      eventType: e,
      systemType: t,
      uri: window.location.pathname,
      domain: window.location.hostname,
      customerUuid: o,
      email: c || null,
      phone: u || null,
      additionalData: {},
      utmParams: i
    });
    window.tracking.trackClient(f), window.trackEventInGTM && window.trackEventInGTM(f);
  }
};
window.tracking = window.tracking || null;
window.trackEventInGTM = window.trackEventInGTM || null;
const ci = (
  /*tw*/
  ie({
    slots: {
      btn: "tw--flex-1 tw--space-x-2 tw--text-white tw--text-center tw--bg-neon tw--max-w-[280px] tw--mx-auto tw--px-4 tw--py-3 tw--font-bold tw--rounded-[20px] tw--shadow-[0px_12px_24px_-4px_rgba(1,154,255,0.2)] tw--flex tw--justify-center tw--items-center tw--cursor-pointer tw--relative tw--w-full tw--text-xl max-h-[46px] tw--mb-[11px] customXs:max-h-[52px]",
      link: "tw--flex-1 tw--space-x-2 tw--text-white tw--text-center tw--bg-neon tw--max-w-[280px] tw--mx-auto tw--px-4 tw--py-3 tw--font-extrabold tw--rounded-[20px] tw--shadow-[0px_12px_24px_-4px_rgba(1,154,255,0.2)] tw--flex tw--justify-center tw--items-center tw--cursor-pointer tw--relative tw--w-full tw--mb-[11px] spaced-letters max-h-[46px] customXs:max-h-[52px] customXs:tw--max-w-xs customXs:te--text-[20px] customXs:tw--text-xl"
    }
  })
), ps = (
  /*tw*/
  ie({
    slots: {
      base: "tw--absolute tw--top-0 tw--left-0 tw--w-full tw--h-screen tw--flex tw--flex-col tw--justify-center tw--items-center tw--px-5 tw--z-50 tw--bg-lumina"
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
      price: "tw--text-[#21bb5a] tw--font-bold tw--leading-[1.4] tw--text-[20px]",
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
    base: "tw--mt-[30px] tw--flex tw--items-center tw--justify-center tw--text-[12.8px] tw--leading-[1.56] tw--text-[#21bb5a] tw--font-bold",
    icon: "tw--mr-[5px]"
  }
}), ys = (
  /*tv*/
  ie({
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
), gs = ({ text: e, onClick: t, e2e: i, disabled: o = !1 }) => {
  const c = $((a) => a.meta), u = $((a) => a.intentions.email.current), { btn: f } = ci();
  return Mt(() => {
    const a = {
      eventType: ge.addToCart,
      systemType: c.systemType,
      utmParams: c.marketing.lastUtmParams,
      customerUuid: c.cid,
      email: u
    };
    ve(a), a.eventType = ge.priceSeen, ve(a);
  }, []), /* @__PURE__ */ w.jsxs(
    "button",
    {
      onClick: t,
      className: f(),
      disabled: o,
      type: "button",
      "data-e2e": i,
      children: [
        /* @__PURE__ */ w.jsxs(
          "svg",
          {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            children: [
              /* @__PURE__ */ w.jsx(
                "path",
                {
                  opacity: ".3",
                  d: "M4 12h16v6H4v-6zm0-6h16v2H4V6z",
                  fill: "currentColor"
                }
              ),
              /* @__PURE__ */ w.jsx("path", { d: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z", fill: "currentColor" })
            ]
          }
        ),
        /* @__PURE__ */ w.jsx("span", { children: e })
      ]
    }
  );
}, bs = ({ onClick: e }) => {
  const { base: t } = ms();
  return /* @__PURE__ */ w.jsx(
    "button",
    {
      type: "button",
      className: t(),
      onClick: e,
      children: /* @__PURE__ */ w.jsx(
        "svg",
        {
          fill: "none",
          viewBox: "0 0 18 18",
          children: /* @__PURE__ */ w.jsx(
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
  return /* @__PURE__ */ w.jsxs("footer", { className: e(), children: [
    /* @__PURE__ */ w.jsx(
      "svg",
      {
        className: t(),
        fill: "none",
        height: "12",
        width: "12",
        viewBox: "0 0 12 12",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ w.jsx(
          "path",
          {
            d: "M9 4h-.5V3a2.5 2.5 0 0 0-5 0v1H3c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 8.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM7.55 4h-3.1V3c0-.855.695-1.55 1.55-1.55.855 0 1.55.695 1.55 1.55v1z",
            fill: "currentColor"
          }
        )
      }
    ),
    /* @__PURE__ */ w.jsx("span", { children: "SSL Secure Connection" })
  ] });
}, vs = ({ config: e }) => {
  const { translations: t } = $((b) => b.config), { wrapper: i, left: o, leftTop: c, icon: u, text: f, bottom: a, right: h, price: x, info: y } = hs();
  return /* @__PURE__ */ w.jsx("header", { children: /* @__PURE__ */ w.jsxs("div", { className: i(), children: [
    /* @__PURE__ */ w.jsxs("span", { className: o(), children: [
      /* @__PURE__ */ w.jsxs("div", { className: c(), children: [
        /* @__PURE__ */ w.jsx("span", { className: u(), children: /* @__PURE__ */ w.jsx("svg", { width: "26", height: "26", children: /* @__PURE__ */ w.jsx("use", { xlinkHref: "/img/sprite.svg#secured-check" }) }) }),
        /* @__PURE__ */ w.jsx("span", { className: f(), dangerouslySetInnerHTML: { __html: t.paymentHeaderTxt1 } })
      ] }),
      /* @__PURE__ */ w.jsx("div", { className: a(), children: t.paymentHeaderTxt2 })
    ] }),
    /* @__PURE__ */ w.jsxs("div", { className: h(), children: [
      /* @__PURE__ */ w.jsx("div", { className: x(), children: e.price }),
      /* @__PURE__ */ w.jsx("div", { className: y(), children: e.period })
    ] })
  ] }) });
}, li = Nn((e, t) => {
  const { link: i } = ci(), { href: o, text: c, onClick: u, e2e: f = null } = e;
  return /* @__PURE__ */ w.jsx(
    "a",
    {
      className: i(),
      "data-e2e": f,
      href: o,
      onClick: u,
      ref: t,
      children: c
    }
  );
});
li.displayName = "Link";
const Es = ({ texts: e = [], title: t = "" }) => {
  const {
    wrapper: i,
    inner: o,
    dots: c,
    dotsIn: u,
    icon: f,
    progressCheckmark: a,
    panelTitle: h,
    spinningTexts: x,
    filmContainer: y,
    film: b
  } = ys();
  return /* @__PURE__ */ w.jsxs(
    "div",
    {
      className: i(),
      children: [
        /* @__PURE__ */ w.jsx("div", { className: o(), children: /* @__PURE__ */ w.jsx("div", { className: c(), children: /* @__PURE__ */ w.jsx(
          "span",
          {
            className: u()
          }
        ) }) }),
        /* @__PURE__ */ w.jsxs("div", { className: a(), children: [
          /* @__PURE__ */ w.jsx("span", { className: f(), children: /* @__PURE__ */ w.jsxs(
            "svg",
            {
              width: "24",
              height: "24",
              fill: "none",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                /* @__PURE__ */ w.jsx(
                  "circle",
                  {
                    cx: "12",
                    cy: "12",
                    r: "12"
                  }
                ),
                /* @__PURE__ */ w.jsx(
                  "path",
                  {
                    d: "m9.75 15.127-2.602-2.602a.748.748 0 0 0-1.058 1.057l3.135 3.136a.747.747 0 0 0 1.058 0l7.935-7.935a.748.748 0 0 0-1.058-1.058l-7.41 7.402z",
                    fill: "white"
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ w.jsx("p", { className: h(), children: t })
        ] }),
        /* @__PURE__ */ w.jsx("div", { className: y(), children: /* @__PURE__ */ w.jsx("div", { className: b(), children: e.map((I) => /* @__PURE__ */ w.jsx("div", { className: x(), children: I }, I)) }) })
      ]
    }
  );
}, Is = ({ onClose: e }) => {
  const { displayPlanPrice: t, billingFrequencyTmsg: i } = $((u) => u.meta.pd), { translations: o } = $((u) => u.config), { base: c } = ps();
  return /* @__PURE__ */ w.jsx("div", { className: c(), children: /* @__PURE__ */ w.jsxs(
    "div",
    {
      id: "chat-payment-view",
      className: "light-pink-blue tw--max-w-[500px] tw--bg-white tw--w-full tw--min-h-[400px] tw--relative tw--rounded-lg tw--flex tw--flex-col tw--p-7",
      children: [
        /* @__PURE__ */ w.jsx(ds, { children: /* @__PURE__ */ w.jsx(Es, { texts: o.loaderTexts, title: o.tm1224 }) }),
        /* @__PURE__ */ w.jsx(bs, { onClick: e }),
        /* @__PURE__ */ w.jsx("div", { id: "primer-form-container", className: "h-full primer-theme tw--w-full", children: /* @__PURE__ */ w.jsx(vs, { config: { price: t, period: i } }) }),
        /* @__PURE__ */ w.jsx(xs, {})
      ]
    }
  ) });
}, Ts = (
  /* tw*/
  ie({
    slots: {
      base: "tw--pt-10 tw--w-full tw--h-full tw--pb-5 tw--px-5 tw--overflow-y-scroll tw--flex tw--flex-col-reverse tw--translate-z-0 tw--text-zephyr-100 tw--font-density-different tw--mt-0 tw--mb-auto",
      second: "tw--mt-0 tw--mb-auto",
      date: "tw--text-center tw--text-sm tw--pb-[5px] tw--opacity-40"
    }
  })
), Cs = (
  /* tw*/
  ie({
    slots: {
      base: "tw--flex tw--flex-col tw--items-center tw--w-full tw--mx-auto tw--pt-5 tw--pb-10",
      title: "tw--pb-[30px] tw--max-w-[400px] tw--text-center tw--mx-[30px] select-none  tw--font-density-different"
    }
  })
), Ss = (
  /* tw*/
  ie({
    slots: {
      base: "tw--grid tw--break-words"
    }
  })
), Ps = (
  /* tw */
  ie({
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
), ui = (
  /* tw*/
  ie({
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
), _s = ie({
  slots: {
    dotFirst: "tw--inline-block tw--h-[12px] tw--w-[12px] tw--rounded-full tw--opacity-40 tw--animate-wave tw--bg-zephyr-100",
    dotSecond: "tw--inline-block tw--h-[12px] tw--w-[12px] tw--rounded-full tw--opacity-40 tw--animate-wave-delay tw--bg-zephyr-100",
    dotThird: "tw--inline-block tw--h-[12px] tw--w-[12px] tw--rounded-full tw--opacity-40 tw--animate-wave-delay-2 tw--bg-zephyr-100"
  }
}), js = () => {
  const { dotFirst: e, dotSecond: t, dotThird: i } = _s();
  return /* @__PURE__ */ w.jsxs("div", { className: "tw--ml-7 tw--space-x-[6px]", "data-e2e": "stream-response-loader", children: [
    /* @__PURE__ */ w.jsx("span", { className: e() }),
    /* @__PURE__ */ w.jsx("span", { className: t() }),
    /* @__PURE__ */ w.jsx("span", { className: i() })
  ] });
}, Rs = "chatSeen", fi = "linkClickedFromChat", ks = "chatConversationFinishedTimeStamp", Bs = "cid", As = 1e3, di = "scroll-stop", Wr = "support", Fs = 500, Os = "/", Ls = 3e3, Ns = {
  transports: ["websocket"],
  upgrade: !1,
  pingInterval: 1e3 * 60 * 5,
  pingTimeout: 1e3 * 60 * 3,
  secure: !0,
  reconnect: !0
};
ue(), Z.assistant, (/* @__PURE__ */ new Date()).getTime(), ue(), Z.assistant, (/* @__PURE__ */ new Date()).getTime(), ue(), Z.assistant, (/* @__PURE__ */ new Date()).getTime();
const Ms = (e, t) => e.map((i) => {
  var c, u;
  const o = i.sequence === t.sequence && i.type === t.type;
  return o && i.type === Ae.text && t.text ? { ...i, text: i.text + t.text } : o && i.type === Ae.buttons && ((c = t == null ? void 0 : t.buttons) != null && c.length) && ((u = i == null ? void 0 : i.buttons) != null && u.length) ? { ...i, buttons: [...i.buttons, ...t.buttons] } : i;
});
function fe(e) {
  for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    i[o - 1] = arguments[o];
  if (Ee.process.env.NODE_ENV !== "production") {
    var c = qs[e], u = c ? typeof c == "function" ? c.apply(null, i) : c : "unknown error nr: " + e;
    throw Error("[Immer] " + u);
  }
  throw Error("[Immer] minified error nr: " + e + (i.length ? " " + i.map(function(f) {
    return "'" + f + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function vt(e) {
  return !!e && !!e[Ie];
}
function rt(e) {
  var t;
  return !!e && (function(i) {
    if (!i || typeof i != "object")
      return !1;
    var o = Object.getPrototypeOf(i);
    if (o === null)
      return !0;
    var c = Object.hasOwnProperty.call(o, "constructor") && o.constructor;
    return c === Object || typeof c == "function" && Function.toString.call(c) === Hs;
  }(e) || Array.isArray(e) || !!e[Pn] || !!(!((t = e.constructor) === null || t === void 0) && t[Pn]) || Gr(e) || qr(e));
}
function Lt(e, t, i) {
  i === void 0 && (i = !1), It(e) === 0 ? (i ? Object.keys : Kr)(e).forEach(function(o) {
    i && typeof o == "symbol" || t(o, e[o], e);
  }) : e.forEach(function(o, c) {
    return t(c, o, e);
  });
}
function It(e) {
  var t = e[Ie];
  return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : Gr(e) ? 2 : qr(e) ? 3 : 0;
}
function Fr(e, t) {
  return It(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Us(e, t) {
  return It(e) === 2 ? e.get(t) : e[t];
}
function pi(e, t, i) {
  var o = It(e);
  o === 2 ? e.set(t, i) : o === 3 ? e.add(i) : e[t] = i;
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
function Ze(e) {
  return e.o || e.t;
}
function Hr(e) {
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  var t = Ys(e);
  delete t[Ie];
  for (var i = Kr(t), o = 0; o < i.length; o++) {
    var c = i[o], u = t[c];
    u.writable === !1 && (u.writable = !0, u.configurable = !0), (u.get || u.set) && (t[c] = { configurable: !0, writable: !0, enumerable: u.enumerable, value: e[c] });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function Yr(e, t) {
  return t === void 0 && (t = !1), Jr(e) || vt(e) || !rt(e) || (It(e) > 1 && (e.set = e.add = e.clear = e.delete = zs), Object.freeze(e), t && Lt(e, function(i, o) {
    return Yr(o, !0);
  }, !0)), e;
}
function zs() {
  fe(2);
}
function Jr(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function Ue(e) {
  var t = Js[e];
  return t || fe(18, e), t;
}
function xn() {
  return Ee.process.env.NODE_ENV === "production" || Et || fe(0), Et;
}
function yr(e, t) {
  t && (Ue("Patches"), e.u = [], e.s = [], e.v = t);
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
  var t = e[Ie];
  t.i === 0 || t.i === 1 ? t.j() : t.g = !0;
}
function gr(e, t) {
  t._ = t.p.length;
  var i = t.p[0], o = e !== void 0 && e !== i;
  return t.h.O || Ue("ES5").S(t, e, o), o ? (i[Ie].P && (er(t), fe(4)), rt(e) && (e = tr(t, e), t.l || rr(t, e)), t.u && Ue("Patches").M(i[Ie].t, e, t.u, t.s)) : e = tr(t, i, []), er(t), t.u && t.v(t.u, t.s), e !== hi ? e : void 0;
}
function tr(e, t, i) {
  if (Jr(t))
    return t;
  var o = t[Ie];
  if (!o)
    return Lt(t, function(a, h) {
      return En(e, o, t, a, h, i);
    }, !0), t;
  if (o.A !== e)
    return t;
  if (!o.P)
    return rr(e, o.t, !0), o.t;
  if (!o.I) {
    o.I = !0, o.A._--;
    var c = o.i === 4 || o.i === 5 ? o.o = Hr(o.k) : o.o, u = c, f = !1;
    o.i === 3 && (u = new Set(c), c.clear(), f = !0), Lt(u, function(a, h) {
      return En(e, o, c, a, h, i, f);
    }), rr(e, c, !1), i && e.u && Ue("Patches").N(o, i, e.u, e.s);
  }
  return o.o;
}
function En(e, t, i, o, c, u, f) {
  if (Ee.process.env.NODE_ENV !== "production" && c === i && fe(5), vt(c)) {
    var a = tr(e, c, u && t && t.i !== 3 && !Fr(t.R, o) ? u.concat(o) : void 0);
    if (pi(i, o, a), !vt(a))
      return;
    e.m = !1;
  } else
    f && i.add(c);
  if (rt(c) && !Jr(c)) {
    if (!e.h.D && e._ < 1)
      return;
    tr(e, c), t && t.A.l || rr(e, c);
  }
}
function rr(e, t, i) {
  i === void 0 && (i = !1), !e.l && e.h.D && e.m && Yr(t, i);
}
function br(e, t) {
  var i = e[Ie];
  return (i ? Ze(i) : e)[t];
}
function In(e, t) {
  if (t in e)
    for (var i = Object.getPrototypeOf(e); i; ) {
      var o = Object.getOwnPropertyDescriptor(i, t);
      if (o)
        return o;
      i = Object.getPrototypeOf(i);
    }
}
function Lr(e) {
  e.P || (e.P = !0, e.l && Lr(e.l));
}
function xr(e) {
  e.o || (e.o = Hr(e.t));
}
function Nr(e, t, i) {
  var o = Gr(t) ? Ue("MapSet").F(t, i) : qr(t) ? Ue("MapSet").T(t, i) : e.O ? function(c, u) {
    var f = Array.isArray(c), a = { i: f ? 1 : 0, A: u ? u.A : xn(), P: !1, I: !1, R: {}, l: u, t: c, k: null, o: null, j: null, C: !1 }, h = a, x = Mr;
    f && (h = [a], x = Ft);
    var y = Proxy.revocable(h, x), b = y.revoke, I = y.proxy;
    return a.k = I, a.j = b, I;
  }(t, i) : Ue("ES5").J(t, i);
  return (i ? i.A : xn()).p.push(o), o;
}
function Vs(e) {
  return vt(e) || fe(22, e), function t(i) {
    if (!rt(i))
      return i;
    var o, c = i[Ie], u = It(i);
    if (c) {
      if (!c.P && (c.i < 4 || !Ue("ES5").K(c)))
        return c.t;
      c.I = !0, o = Tn(i, u), c.I = !1;
    } else
      o = Tn(i, u);
    return Lt(o, function(f, a) {
      c && Us(c.t, f) === a || pi(o, f, t(a));
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
var Cn, Et, Xr = typeof Symbol < "u" && typeof Symbol("x") == "symbol", Ws = typeof Map < "u", Gs = typeof Set < "u", Sn = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", hi = Xr ? Symbol.for("immer-nothing") : ((Cn = {})["immer-nothing"] = !0, Cn), Pn = Xr ? Symbol.for("immer-draftable") : "__$immer_draftable", Ie = Xr ? Symbol.for("immer-state") : "__$immer_state", qs = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(e) {
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
  return Kr(e).forEach(function(i) {
    t[i] = Object.getOwnPropertyDescriptor(e, i);
  }), t;
}, Js = {}, Mr = { get: function(e, t) {
  if (t === Ie)
    return e;
  var i = Ze(e);
  if (!Fr(i, t))
    return function(c, u, f) {
      var a, h = In(u, f);
      return h ? "value" in h ? h.value : (a = h.get) === null || a === void 0 ? void 0 : a.call(c.k) : void 0;
    }(e, i, t);
  var o = i[t];
  return e.I || !rt(o) ? o : o === br(e.t, t) ? (xr(e), e.o[t] = Nr(e.A.h, o, e)) : o;
}, has: function(e, t) {
  return t in Ze(e);
}, ownKeys: function(e) {
  return Reflect.ownKeys(Ze(e));
}, set: function(e, t, i) {
  var o = In(Ze(e), t);
  if (o != null && o.set)
    return o.set.call(e.k, i), !0;
  if (!e.P) {
    var c = br(Ze(e), t), u = c == null ? void 0 : c[Ie];
    if (u && u.t === i)
      return e.o[t] = i, e.R[t] = !1, !0;
    if (Ds(i, c) && (i !== void 0 || Fr(e.t, t)))
      return !0;
    xr(e), Lr(e);
  }
  return e.o[t] === i && (i !== void 0 || t in e.o) || Number.isNaN(i) && Number.isNaN(e.o[t]) || (e.o[t] = i, e.R[t] = !0), !0;
}, deleteProperty: function(e, t) {
  return br(e.t, t) !== void 0 || t in e.t ? (e.R[t] = !1, xr(e), Lr(e)) : delete e.R[t], e.o && delete e.o[t], !0;
}, getOwnPropertyDescriptor: function(e, t) {
  var i = Ze(e), o = Reflect.getOwnPropertyDescriptor(i, t);
  return o && { writable: !0, configurable: e.i !== 1 || t !== "length", enumerable: o.enumerable, value: i[t] };
}, defineProperty: function() {
  fe(11);
}, getPrototypeOf: function(e) {
  return Object.getPrototypeOf(e.t);
}, setPrototypeOf: function() {
  fe(12);
} }, Ft = {};
Lt(Mr, function(e, t) {
  Ft[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
}), Ft.deleteProperty = function(e, t) {
  return Ee.process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && fe(13), Ft.set.call(this, e, t, void 0);
}, Ft.set = function(e, t, i) {
  return Ee.process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && fe(14), Mr.set.call(this, e[0], t, i, e[0]);
};
var Xs = function() {
  function e(i) {
    var o = this;
    this.O = Sn, this.D = !0, this.produce = function(c, u, f) {
      if (typeof c == "function" && typeof u != "function") {
        var a = u;
        u = c;
        var h = o;
        return function(S) {
          var ne = this;
          S === void 0 && (S = a);
          for (var j = arguments.length, L = Array(j > 1 ? j - 1 : 0), ae = 1; ae < j; ae++)
            L[ae - 1] = arguments[ae];
          return h.produce(S, function(me) {
            var k;
            return (k = u).call.apply(k, [ne, me].concat(L));
          });
        };
      }
      var x;
      if (typeof u != "function" && fe(6), f !== void 0 && typeof f != "function" && fe(7), rt(c)) {
        var y = vn(o), b = Nr(o, c, void 0), I = !0;
        try {
          x = u(b), I = !1;
        } finally {
          I ? er(y) : Or(y);
        }
        return typeof Promise < "u" && x instanceof Promise ? x.then(function(S) {
          return yr(y, f), gr(S, y);
        }, function(S) {
          throw er(y), S;
        }) : (yr(y, f), gr(x, y));
      }
      if (!c || typeof c != "object") {
        if ((x = u(c)) === void 0 && (x = c), x === hi && (x = void 0), o.D && Yr(x, !0), f) {
          var P = [], O = [];
          Ue("Patches").M(c, x, P, O), f(P, O);
        }
        return x;
      }
      fe(21, c);
    }, this.produceWithPatches = function(c, u) {
      if (typeof c == "function")
        return function(x) {
          for (var y = arguments.length, b = Array(y > 1 ? y - 1 : 0), I = 1; I < y; I++)
            b[I - 1] = arguments[I];
          return o.produceWithPatches(x, function(P) {
            return c.apply(void 0, [P].concat(b));
          });
        };
      var f, a, h = o.produce(c, u, function(x, y) {
        f = x, a = y;
      });
      return typeof Promise < "u" && h instanceof Promise ? h.then(function(x) {
        return [x, f, a];
      }) : [h, f, a];
    }, typeof (i == null ? void 0 : i.useProxies) == "boolean" && this.setUseProxies(i.useProxies), typeof (i == null ? void 0 : i.autoFreeze) == "boolean" && this.setAutoFreeze(i.autoFreeze);
  }
  var t = e.prototype;
  return t.createDraft = function(i) {
    rt(i) || fe(8), vt(i) && (i = Vs(i));
    var o = vn(this), c = Nr(this, i, void 0);
    return c[Ie].C = !0, Or(o), c;
  }, t.finishDraft = function(i, o) {
    var c = i && i[Ie];
    Ee.process.env.NODE_ENV !== "production" && (c && c.C || fe(9), c.I && fe(10));
    var u = c.A;
    return yr(u, o), gr(void 0, u);
  }, t.setAutoFreeze = function(i) {
    this.D = i;
  }, t.setUseProxies = function(i) {
    i && !Sn && fe(20), this.O = i;
  }, t.applyPatches = function(i, o) {
    var c;
    for (c = o.length - 1; c >= 0; c--) {
      var u = o[c];
      if (u.path.length === 0 && u.op === "replace") {
        i = u.value;
        break;
      }
    }
    c > -1 && (o = o.slice(c + 1));
    var f = Ue("Patches").$;
    return vt(i) ? f(i, o) : this.produce(i, function(a) {
      return f(a, o);
    });
  }, e;
}(), Te = new Xs(), Ks = Te.produce;
Te.produceWithPatches.bind(Te);
Te.setAutoFreeze.bind(Te);
Te.setUseProxies.bind(Te);
Te.applyPatches.bind(Te);
Te.createDraft.bind(Te);
Te.finishDraft.bind(Te);
const wt = Ks, mi = or({
  name: "chat",
  initialState: mt,
  reducers: {
    setOutgoing(e, { payload: t }) {
      e.outgoing = {
        term: yt(Qe.chat),
        user_id: localStorage.getItem("__cid") || "",
        role: Z.user,
        message: t
      };
    },
    resetOutgoing(e) {
      e.outgoing = mt.outgoing;
    },
    setExistingHistory(e, { payload: t }) {
      return wt(e, (i) => {
        if (e.historyIds.length >= t.length) {
          e.historyIds.filter((c) => !t.find((u) => u.id === c)).forEach(
            (c) => i.historyData[c].content = i.historyData[c].content.map((u) => ({
              ...u,
              sent: !1,
              resend: !0
            }))
          );
          return;
        }
        i.historyIds = t.map(({ id: o }) => o), i.historyData = t.reduce(
          (o, c) => ({
            ...o,
            [c.id]: c
          }),
          {}
        );
      });
    },
    addPredefinedAssistantMessage(e, { payload: t }) {
      const i = ue();
      return wt(e, (o) => {
        o.historyIds.push(i), o.historyData[i] = {
          id: i,
          role: Z.assistant,
          content: [
            { type: Ae.text, text: t.content, sequence: 1 },
            { type: Ae.buttons, buttons: t.buttons || [], sequence: 2 }
          ]
        };
      });
    },
    fillAssistantHistoryData(e, { payload: t }) {
      return wt(e, (i) => {
        const o = t.id;
        if (!i.historyData[o]) {
          i.historyData[o] = { id: o, role: Z.assistant, content: [] }, i.historyIds.push(o);
          return;
        }
        if (!t.content)
          return;
        const c = t.content.type, u = {
          sequence: t.sequence || 1,
          type: c,
          [c]: t.content[t.content.type]
        };
        if (i.historyData[o].content.some(
          (a) => a.sequence === u.sequence && a.type === u.type
        )) {
          i.historyData[o].content = Ms(
            i.historyData[o].content,
            u
          );
          return;
        }
        i.historyData[o].content.push(u);
      });
    },
    fillUserHistoryData(e, { payload: { id: t, content: i } }) {
      return wt(e, (o) => {
        let c;
        if (i.groupId && Object.entries(o.historyData).forEach(([u, f]) => {
          f.content.find((a) => a.groupId === i.groupId) && (c = u);
        }), c) {
          o.historyData[c].content.push(i);
          return;
        }
        o.historyData[t] || (o.historyData[t] = { id: t, role: Z.user, content: [i] }, o.historyIds.push(t));
      });
    },
    fillInitialMessage(e, { payload: t }) {
      e.historyIds.push(t.id), e.historyData[t.id] = {
        id: t.id,
        role: Z.assistant,
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
      return wt(e, (i) => {
        i.historyData[t.itemId].content = i.historyData[t.itemId].content.map((o) => ({
          ...o,
          sent: !0,
          resend: !1
        }));
      });
    },
    showResendIcon(e, { payload: t }) {
      return wt(e, (i) => {
        i.historyData[t.itemId].content = i.historyData[t.itemId].content.map((o) => ({
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
}), nr = (e) => e.chat, Zs = (e) => e.chat.historyIds.find((t) => e.chat.historyData[t].role === Z.user), Qs = (e, t) => e.sequence - t.sequence, {
  setOutgoing: Zr,
  resetOutgoing: ea,
  setExistingHistory: ta,
  addPredefinedAssistantMessage: wi,
  setIsLoading: Gt,
  resetIsLoading: Bt,
  setLastGroupPointer: ra,
  setTypingTimeoutExpired: yi,
  setError: qt,
  resetError: vr,
  setConnected: _n,
  setClosed: ar,
  hideResendIcon: na,
  showResendIcon: jn,
  resendMessage: gi,
  setIsStreaming: Er,
  fillAssistantHistoryData: Rn,
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
  setEmailSuccess: ca,
  setIsPaymentSuccessful: la,
  setPaymentFormVisibility: ua,
  setEmailError: kn,
  setIsEmailLoading: Ur,
  setIsPaymentButtonVisible: fa,
  setPaymentIntentError: da,
  setEmail: pa,
  setLink: vi
} = bi.actions, ha = bi.reducer, ma = () => {
  var _;
  const { cid: e, systemType: t, marketing: i, pd: o } = $(Ut), { translations: c, purpose: u, specialUrls: f } = $(nt), { isLoading: a, isStreaming: h } = $(nr), { error: x } = $((C) => C.chat), y = $((C) => C.intentions.link), { error: b, current: I } = $(xi), {
    isFormVisible: P,
    error: O,
    isSuccessful: S
  } = $(aa), j = {
    systemType: t,
    marketing: i,
    error: x || b || O,
    cid: e,
    isLoading: a,
    currentEmail: I,
    translations: c,
    pd: o,
    isStreaming: h,
    isPaymentButtonVisible: !1,
    isPaymentFormVisible: !1,
    isEmailFormVisible: !1,
    isResponseFormVisible: !1,
    ctaText: "",
    ctaHref: ""
  }, { historyData: L, historyIds: ae } = $(nr), me = [...ae].pop(), k = me && L[me], pe = k && k.role === Z.assistant, we = pe && y, _e = !(k && (k != null && k.content.find((C) => C.buttons))), be = k && (k == null ? void 0 : k.content.find((C) => C.payment)), je = k && (k == null ? void 0 : k.content.find((C) => C.email));
  if (pe && be)
    return {
      ...j,
      isPaymentButtonVisible: !0
    };
  if (pe && je)
    return {
      ...j,
      isEmailFormVisible: !0,
      isPaymentFormVisible: P
    };
  if (S)
    return {
      ...j,
      ctaText: c.ctaTextContent,
      ctaHref: "/",
      isPaymentFormVisible: P
    };
  const de = k && ((_ = k == null ? void 0 : k.content) == null ? void 0 : _.find((C) => C.special));
  if (pe && de && (de != null && de.special))
    return {
      ...j,
      ctaText: f[de.special].includes("merchant") ? c.merchantButton : c.supportButton,
      ctaHref: f[de.special]
    };
  if (we && u === Wr)
    return {
      ...j,
      isResponseFormVisible: !0
    };
  const T = k && !we && !a && (_e || (k == null ? void 0 : k.role) === Z.user);
  return {
    ...j,
    ctaText: c.mealButton,
    ctaHref: we,
    isResponseFormVisible: T
  };
};
var Qr = { exports: {} }, bt = typeof Reflect == "object" ? Reflect : null, Bn = bt && typeof bt.apply == "function" ? bt.apply : function(t, i, o) {
  return Function.prototype.apply.call(t, i, o);
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
function Y() {
  Y.init.call(this);
}
Qr.exports = Y;
Qr.exports.once = xa;
Y.EventEmitter = Y;
Y.prototype._events = void 0;
Y.prototype._eventsCount = 0;
Y.prototype._maxListeners = void 0;
var An = 10;
function cr(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(Y, "defaultMaxListeners", {
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
Y.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Y.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || Ei(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function Ii(e) {
  return e._maxListeners === void 0 ? Y.defaultMaxListeners : e._maxListeners;
}
Y.prototype.getMaxListeners = function() {
  return Ii(this);
};
Y.prototype.emit = function(t) {
  for (var i = [], o = 1; o < arguments.length; o++)
    i.push(arguments[o]);
  var c = t === "error", u = this._events;
  if (u !== void 0)
    c = c && u.error === void 0;
  else if (!c)
    return !1;
  if (c) {
    var f;
    if (i.length > 0 && (f = i[0]), f instanceof Error)
      throw f;
    var a = new Error("Unhandled error." + (f ? " (" + f.message + ")" : ""));
    throw a.context = f, a;
  }
  var h = u[t];
  if (h === void 0)
    return !1;
  if (typeof h == "function")
    Bn(h, this, i);
  else
    for (var x = h.length, y = _i(h, x), o = 0; o < x; ++o)
      Bn(y[o], this, i);
  return !0;
};
function Ti(e, t, i, o) {
  var c, u, f;
  if (cr(i), u = e._events, u === void 0 ? (u = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (u.newListener !== void 0 && (e.emit(
    "newListener",
    t,
    i.listener ? i.listener : i
  ), u = e._events), f = u[t]), f === void 0)
    f = u[t] = i, ++e._eventsCount;
  else if (typeof f == "function" ? f = u[t] = o ? [i, f] : [f, i] : o ? f.unshift(i) : f.push(i), c = Ii(e), c > 0 && f.length > c && !f.warned) {
    f.warned = !0;
    var a = new Error("Possible EventEmitter memory leak detected. " + f.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    a.name = "MaxListenersExceededWarning", a.emitter = e, a.type = t, a.count = f.length, wa(a);
  }
  return e;
}
Y.prototype.addListener = function(t, i) {
  return Ti(this, t, i, !1);
};
Y.prototype.on = Y.prototype.addListener;
Y.prototype.prependListener = function(t, i) {
  return Ti(this, t, i, !0);
};
function ya() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Ci(e, t, i) {
  var o = { fired: !1, wrapFn: void 0, target: e, type: t, listener: i }, c = ya.bind(o);
  return c.listener = i, o.wrapFn = c, c;
}
Y.prototype.once = function(t, i) {
  return cr(i), this.on(t, Ci(this, t, i)), this;
};
Y.prototype.prependOnceListener = function(t, i) {
  return cr(i), this.prependListener(t, Ci(this, t, i)), this;
};
Y.prototype.removeListener = function(t, i) {
  var o, c, u, f, a;
  if (cr(i), c = this._events, c === void 0)
    return this;
  if (o = c[t], o === void 0)
    return this;
  if (o === i || o.listener === i)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete c[t], c.removeListener && this.emit("removeListener", t, o.listener || i));
  else if (typeof o != "function") {
    for (u = -1, f = o.length - 1; f >= 0; f--)
      if (o[f] === i || o[f].listener === i) {
        a = o[f].listener, u = f;
        break;
      }
    if (u < 0)
      return this;
    u === 0 ? o.shift() : ga(o, u), o.length === 1 && (c[t] = o[0]), c.removeListener !== void 0 && this.emit("removeListener", t, a || i);
  }
  return this;
};
Y.prototype.off = Y.prototype.removeListener;
Y.prototype.removeAllListeners = function(t) {
  var i, o, c;
  if (o = this._events, o === void 0)
    return this;
  if (o.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : o[t] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete o[t]), this;
  if (arguments.length === 0) {
    var u = Object.keys(o), f;
    for (c = 0; c < u.length; ++c)
      f = u[c], f !== "removeListener" && this.removeAllListeners(f);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (i = o[t], typeof i == "function")
    this.removeListener(t, i);
  else if (i !== void 0)
    for (c = i.length - 1; c >= 0; c--)
      this.removeListener(t, i[c]);
  return this;
};
function Si(e, t, i) {
  var o = e._events;
  if (o === void 0)
    return [];
  var c = o[t];
  return c === void 0 ? [] : typeof c == "function" ? i ? [c.listener || c] : [c] : i ? ba(c) : _i(c, c.length);
}
Y.prototype.listeners = function(t) {
  return Si(this, t, !0);
};
Y.prototype.rawListeners = function(t) {
  return Si(this, t, !1);
};
Y.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Pi.call(e, t);
};
Y.prototype.listenerCount = Pi;
function Pi(e) {
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
  return this._eventsCount > 0 ? Kt(this._events) : [];
};
function _i(e, t) {
  for (var i = new Array(t), o = 0; o < t; ++o)
    i[o] = e[o];
  return i;
}
function ga(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function ba(e) {
  for (var t = new Array(e.length), i = 0; i < t.length; ++i)
    t[i] = e[i].listener || e[i];
  return t;
}
function xa(e, t) {
  return new Promise(function(i, o) {
    function c(f) {
      e.removeListener(t, u), o(f);
    }
    function u() {
      typeof e.removeListener == "function" && e.removeListener("error", c), i([].slice.call(arguments));
    }
    ji(e, t, u, { once: !0 }), t !== "error" && va(e, c, { once: !0 });
  });
}
function va(e, t, i) {
  typeof e.on == "function" && ji(e, "error", t, i);
}
function ji(e, t, i, o) {
  if (typeof e.on == "function")
    o.once ? e.once(t, i) : e.on(t, i);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function c(u) {
      o.once && e.removeEventListener(t, c), i(u);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var Ea = Qr.exports;
const Me = {
  type: Gn,
  core: new Ea.EventEmitter()
}, Ia = (
  /*tw*/
  ie({
    slots: {
      base: "tw--flex-1 tw--w-full tw--px-[15px] tw--py-[11px] tw--rounded-[20px] tw--border select-none tw--bg-glazeBg tw--text-glazeText tw--border-glaze  tw--font-density-different"
    }
  })
), Ta = (
  /*tw*/
  ie({
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
), Ca = ({ text: e = "", onClick: t, e2e: i }) => {
  const { base: o } = Ia();
  return /* @__PURE__ */ w.jsx(
    "button",
    {
      onClick: t,
      className: o(),
      type: "button",
      "data-e2e": i,
      children: e
    }
  );
}, lr = ({ children: e, outlined: t = !1, onClick: i, e2e: o = null, disabled: c = !1 }) => {
  const { base: u } = Ta({ outlined: t });
  return /* @__PURE__ */ w.jsx(
    "button",
    {
      onClick: i,
      className: u(),
      "data-e2e": o,
      disabled: c,
      type: "button",
      children: e
    }
  );
}, Sa = (
  /* tw*/
  ie({
    slots: {
      base: "tw--relative tw--flex tw--items-center",
      input: "tw--w-full tw--px-[15px] tw--py-[11px] tw--rounded-[20px] focus:tw--outline-none focus:!tw--bg-lumina tw--bg-lumina tw--text-zephyr-100 tw--font-density-different",
      loader: "tw--absolute tw--right-4 tw--top-[50%] tw--translate-y-[-50%]",
      spin: "tw--block tw--w-6 tw--h-6 tw--border-solid tw--border-[5px] tw--rounded-3xl tw--animate-rotate tw--m-auto tw--border-zephyr-200 tw--border-t-zephyr-600 tw--border-l-zephyr-600"
    }
  })
), en = Nn((e, t) => {
  const {
    disabled: i,
    e2e: o,
    isLoading: c,
    onChange: u,
    onKeyUp: f,
    placeholder: a,
    type: h,
    value: x
  } = e, { base: y, input: b, loader: I, spin: P } = Sa();
  return /* @__PURE__ */ w.jsxs("div", { className: y(), children: [
    /* @__PURE__ */ w.jsx(
      "input",
      {
        className: b(),
        "data-e2e": o,
        disabled: c || i,
        onChange: u,
        onKeyUp: f,
        placeholder: a,
        ref: t,
        type: h,
        value: x
      }
    ),
    c && /* @__PURE__ */ w.jsx("span", { className: I(), children: /* @__PURE__ */ w.jsx("span", { className: P() }) })
  ] });
});
en.displayName = "Input";
const Pa = () => {
  const e = He(), t = $((I) => I.meta), { translations: i } = $(nt), { isLoading: o } = $(xi), { base: c, input: u, button: f } = ai(), [a, h] = xt(""), x = Dr(null);
  Mt(() => {
    ve({
      eventType: ge.emailField,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid
    }), setTimeout(() => {
      x.current && x.current.focus();
    }, 500);
  });
  const y = (I) => {
    const P = I.target.value.trim();
    h(P);
  }, b = (I) => {
    I.preventDefault(), a !== "" && (e(Ur(!0)), e(pa(a)), Me.core.emit(Me.type.email, { email: a }), h(""));
  };
  return /* @__PURE__ */ w.jsxs(
    "form",
    {
      className: c(),
      onSubmit: b,
      "data-e2e": "email-form",
      children: [
        /* @__PURE__ */ w.jsx("div", { className: u(), children: /* @__PURE__ */ w.jsx(
          en,
          {
            e2e: "email-input",
            isLoading: o,
            name: "email",
            onChange: y,
            ref: x,
            placeholder: i.emailPlaceholder,
            type: "email",
            value: a
          }
        ) }),
        /* @__PURE__ */ w.jsx("div", { className: f(), children: /* @__PURE__ */ w.jsx(lr, { onClick: b, e2e: "email-validate-btn", children: /* @__PURE__ */ w.jsx(
          "svg",
          {
            fill: "currentColor",
            viewBox: "0 0 24 24",
            width: "20px",
            height: "20px",
            children: /* @__PURE__ */ w.jsx(
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
  const e = He(), { connected: t, isLoading: i } = $(nr), { base: o, input: c, button: u } = ai(), [f, a] = xt(""), [h, x] = xt(null), y = $((S) => S.chat.lastGroupId), b = Dr(null);
  Mt(() => {
    setTimeout(() => {
      var S;
      (S = b.current) == null || S.focus();
    }, 500);
  }, []);
  const I = (S) => {
    a(S.target.value), O();
  }, P = (S) => {
    S.preventDefault(), f.trim() && e(ir({
      role: Z.user,
      id: ue(),
      sequence: 1,
      content: {
        sequence: 1,
        message: f,
        groupId: y,
        resend: !1,
        sent: !0
      }
    })), a(""), O();
  }, O = () => {
    h && clearTimeout(h);
    const S = setTimeout(() => {
      e(yi(!0)), e(ra(ue()));
    }, Ls);
    x(S);
  };
  return /* @__PURE__ */ w.jsxs(
    "form",
    {
      className: o(),
      onSubmit: P,
      "data-e2e": "user-form",
      children: [
        /* @__PURE__ */ w.jsx("div", { className: c(), children: /* @__PURE__ */ w.jsx(
          en,
          {
            disabled: !t,
            isLoading: i,
            e2e: "message-input",
            name: "response",
            onChange: I,
            placeholder: "Write your message here...",
            type: "response",
            value: f,
            ref: b
          }
        ) }),
        /* @__PURE__ */ w.jsx("div", { className: u(), children: /* @__PURE__ */ w.jsx(lr, { onClick: P, disabled: !t, children: /* @__PURE__ */ w.jsx(
          "svg",
          {
            fill: "currentColor",
            viewBox: "0 0 24 24",
            width: "20px",
            height: "20px",
            children: /* @__PURE__ */ w.jsx(
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
}, ja = () => {
  const e = He(), t = ma(), i = Dr(null), [o, c] = xt(!1), u = (b) => {
    e(ua(b));
  };
  Mt(() => {
    t.isEmailFormVisible && ve({
      eventType: ge.emailField,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid,
      email: t.currentEmail
    });
  }, [t.isEmailFormVisible]);
  const f = (b) => {
    b.currentTarget.disabled = !0, Me.core.emit(Me.type.destroy), u(!1), c(!1);
  }, a = () => {
    e(wi({ content: t.translations.tm1226 })), e(la(!0)), e(fa(!1)), u(!1), ve({
      eventType: ge.linkProvided,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid,
      email: t.currentEmail
    }), setTimeout(() => {
      i.current && i.current.click();
    }, 7e3);
  }, h = (b) => {
    e(da(b));
  }, x = () => {
    Me.core.emit(Me.type.payment, { setIsPaymentContainerVisible: u, onPaymentSuccess: a, onError: h }), c(!0);
  }, y = (b) => {
    localStorage.setItem(fi, b.currentTarget.href), ve({
      eventType: ge.linkClicked,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid,
      email: t.currentEmail
    }), e(ar());
  };
  return /* @__PURE__ */ w.jsxs("div", { className: "tw--space-y-[11px] tw--pb-[11px]", "data-e2e": "chat-foot", children: [
    t.error && /* @__PURE__ */ w.jsx("div", { "data-e2e": "error-message", className: "tw--pl-[35px] tw--text-[#ff0043] tw--font-medium", children: t.error }),
    t.isPaymentFormVisible && /* @__PURE__ */ w.jsx(Is, { onClose: f }),
    t.isLoading && /* @__PURE__ */ w.jsx(js, {}),
    t.ctaHref && /* @__PURE__ */ w.jsx(
      li,
      {
        ref: i,
        text: t.ctaText,
        onClick: y,
        href: t.ctaHref,
        e2e: "quiz-trigger-btn"
      }
    ),
    !t.isStreaming && t.isEmailFormVisible && /* @__PURE__ */ w.jsx(Pa, {}),
    !t.isStreaming && t.isResponseFormVisible && /* @__PURE__ */ w.jsx(_a, {}),
    t.isPaymentButtonVisible && /* @__PURE__ */ w.jsx(
      gs,
      {
        text: t.translations.payButton,
        onClick: x,
        disabled: o,
        e2e: "payment-form-trigger-btn"
      }
    )
  ] });
}, Ra = (
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
), Ri = ({ orientation: e = $r.horizontal, minimized: t = !1 }) => {
  const { aiProfile: i } = $(nt), { base: o, avatar: c, info: u, name: f, role: a, imgWrapper: h } = Ra({ orientation: e, minimized: t });
  return /* @__PURE__ */ w.jsxs("div", { className: o(), children: [
    /* @__PURE__ */ w.jsx("span", { className: h(), children: /* @__PURE__ */ w.jsx(
      "img",
      {
        className: c(),
        src: i.imgSrc,
        alt: "img"
      }
    ) }),
    /* @__PURE__ */ w.jsxs("div", { className: u(), children: [
      /* @__PURE__ */ w.jsx("div", { className: f(), children: i.name }),
      /* @__PURE__ */ w.jsx("div", { className: a(), children: i.role })
    ] })
  ] });
}, ka = () => {
  const e = He(), t = jo(), { base: i } = ls({ theme: t.theme }), o = (c) => {
    c.currentTarget.disabled = !0, ve({
      eventType: ge.closeClicked,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid
    }), setTimeout(() => {
      e(ar());
    }, Fs);
  };
  return /* @__PURE__ */ w.jsxs("div", { className: i(), "data-e2e": "chat-heading", children: [
    /* @__PURE__ */ w.jsx(Ri, {}),
    t.closeVisible && /* @__PURE__ */ w.jsx(lr, { e2e: "chat-close-btn", onClick: o, children: /* @__PURE__ */ w.jsx(
      "svg",
      {
        height: "24px",
        viewBox: "0 0 24 24",
        width: "24px",
        children: /* @__PURE__ */ w.jsxs(
          "g",
          {
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeWidth: "2",
            children: [
              /* @__PURE__ */ w.jsx(
                "line",
                {
                  x1: "6",
                  x2: "18",
                  y1: "6",
                  y2: "18"
                }
              ),
              /* @__PURE__ */ w.jsx(
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
  let i;
  if (window.location.search) {
    const o = new URLSearchParams(window.location.search);
    o.append(Rs, "true"), o.append(Bs, localStorage.getItem("__cid") || ""), i = `/?${o}`;
  } else
    i = "";
  return t(e) ? e : e + i;
}, Aa = (e) => e.replaceAll(/\\r\\n|\\n|\r\n|<br>|<br\/>/g, `
`), Fa = ({ properties: e }) => {
  const { purpose: t } = $(nt), { cid: i, marketing: o, systemType: c } = $(Ut), u = He(), f = e.href ? Ba(e.href) : "#";
  Mt(() => {
    u(vi(f));
  });
  const a = (h) => {
    t !== Wr && localStorage.setItem(fi, h.currentTarget.href), ve({
      eventType: ge.linkClicked,
      systemType: c,
      utmParams: o.lastUtmParams,
      customerUuid: i
    }), u(ar());
  };
  return /* @__PURE__ */ w.jsx(
    "a",
    {
      href: f,
      onClick: a,
      className: "tw--underline",
      children: e.href
    }
  );
}, Oa = (e) => {
  const i = /embed\/(\w+)/.exec(e);
  return i ? i[1] : null;
}, La = Nt.memo(function({ url: t, title: i }) {
  const [o, c] = xt(!1), u = Oa(t), f = () => {
    c(!0);
  };
  return o ? /* @__PURE__ */ w.jsx(
    "iframe",
    {
      className: "w-full tw--h-80 tw--py-4",
      title: i || "Missing title",
      src: `${t}?enablejsapi=1&rel=0&origin=${window.location.origin}`,
      allow: "fullscreen"
    }
  ) : /* @__PURE__ */ w.jsx(
    "div",
    {
      className: "w-full tw--h-80 tw--py-4 tw--justify-center tw--flex tw--items-center tw--pointer-events-auto",
      onClick: f,
      style: { backgroundImage: `url(https://img.youtube.com/vi/${u}/hqdefault.jpg)` },
      children: /* @__PURE__ */ w.jsx("button", { className: "tw--items-center tw--justify-center tw--w-16 tw--h-16 tw--rounded-full tw--cursor-pointer tw--pointer-events-auto tw--flex tw--bg-gradient-to-b tw--from-[#FF0000] tw--to-[#F25640]", children: /* @__PURE__ */ w.jsx("svg", { className: "tw--pointer-events-none", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ w.jsx(
        "path",
        {
          d: "M10.6665 9.09335V22.9067C10.6665 23.96 11.8265 24.6 12.7198 24.0267L23.5732 17.12C23.7632 16.9998 23.9197 16.8334 24.0282 16.6364C24.1366 16.4394 24.1935 16.2182 24.1935 15.9933C24.1935 15.7685 24.1366 15.5473 24.0282 15.3503C23.9197 15.1533 23.7632 14.9869 23.5732 14.8667L12.7198 7.97335C12.5187 7.84327 12.2862 7.76989 12.0469 7.76094C11.8076 7.75199 11.5702 7.8078 11.36 7.92249C11.1497 8.03718 10.9743 8.20649 10.8523 8.41257C10.7302 8.61864 10.666 8.85384 10.6665 9.09335V9.09335Z",
          fill: "white"
        }
      ) }) })
    }
  );
}), Na = (
  /* tw*/
  ie({
    slots: {
      base: "tw--flex-1 tw--w-full tw--px-[15px] tw--py-[11px] tw--rounded-[20px] tw--border select-none tw--text-center tw--bg-glaze tw--text-whisper"
    }
  })
);
/* tw*/
ie({
  slots: {
    base: "tw--flex-1 tw--px-4 tw--py-2"
  }
});
const Ma = ({ text: e, href: t, onClick: i }) => {
  const { base: o } = Na();
  return /* @__PURE__ */ w.jsx(
    "a",
    {
      href: t,
      onClick: i,
      className: o(),
      children: e
    }
  );
}, Ua = ({ options: e = [] }) => {
  const t = He(), i = $(Ut), o = !$(Zs), c = (f, a) => {
    t(ir({
      id: ue(),
      sequence: 1,
      role: Z.user,
      content: {
        sequence: 1,
        message: f,
        resend: !1,
        sent: !0,
        groupId: ""
      }
    })), t(Zr(f)), o && ve({
      eventType: ge.buttonClick + a,
      systemType: i.systemType,
      utmParams: i.marketing.lastUtmParams,
      customerUuid: i.cid
    });
  }, u = (f) => {
    t(ir({
      id: ue(),
      sequence: 1,
      role: Z.user,
      content: {
        sequence: 1,
        message: f,
        resend: !1,
        sent: !0,
        groupId: ""
      }
    }));
  };
  return [...e].sort((f, a) => f.sequence - a.sequence).map(({ value: f, link: a, sequence: h, noStream: x }) => a ? /* @__PURE__ */ w.jsx(
    Ma,
    {
      text: f,
      href: a
    },
    ue()
  ) : /* @__PURE__ */ w.jsx(
    Ca,
    {
      text: f,
      onClick: x ? () => u(f) : () => c(f, h),
      e2e: "option-button"
    },
    ue()
  ));
}, Da = ({ message: e, itemId: t }) => {
  const { isStreaming: i } = $(nr), { pd: o } = $(Ut), c = $((a) => a.chat.historyIds.length - 1 === a.chat.historyIds.indexOf(t)), { base: u } = Ps({ isTyping: i && c }), f = [...e.content].sort(Qs);
  return /* @__PURE__ */ w.jsx(w.Fragment, { children: f.map((a) => {
    var h, x, y, b;
    if (a.type === Ae.text)
      return /* @__PURE__ */ w.jsx(
        "div",
        {
          className: "tw--flex tw--flex-col tw--space-y-[10px]",
          "data-e2e": "assistant-text",
          children: /* @__PURE__ */ w.jsx("span", { className: u(), children: /* @__PURE__ */ w.jsx(
            Ji,
            {
              components: {
                a(I) {
                  return /* @__PURE__ */ w.jsx(Fa, { properties: I });
                }
              },
              children: Aa(a[a.type] || "")
            },
            ue()
          ) })
        },
        ue()
      );
    if (a.type === Ae.buttons && c)
      return /* @__PURE__ */ w.jsx("div", { className: "tw--flex tw--flex-col tw--space-y-[10px]", children: /* @__PURE__ */ w.jsx(Ua, { options: a[a.type] }) }, ue());
    if (a.type === Ae.video)
      return /* @__PURE__ */ w.jsx(
        La,
        {
          "data-e2e": "assistant-iframe",
          title: ((h = a[a.type]) == null ? void 0 : h.title) || "video",
          url: ((x = a[a.type]) == null ? void 0 : x.url) || "https://www.youtube.com/embed/g4B8Dhl4pxY"
        },
        ue()
      );
    if (a.type === Ae.image)
      return /* @__PURE__ */ w.jsx(
        "img",
        {
          "data-e2e": "assistant-img",
          className: "w-full tw--h-auto tw--py-4",
          src: (y = a[a.type]) == null ? void 0 : y.url,
          alt: ((b = a[a.type]) == null ? void 0 : b.alt) || "chat-image"
        },
        ue()
      );
    if (a.type === Ae.payment)
      return `${a[a.type]} ${o.displayPlanPrice} ${o.billingFrequencyTmsg}`;
    if (a.type === Ae.email)
      return a[a.type];
  }) });
}, za = Nt.memo(Da), $a = ({ itemId: e }) => {
  const t = $((i) => i.chat.historyData[e]);
  return t && /* @__PURE__ */ w.jsx(
    "div",
    {
      className: ui({ type: t.role }).base(),
      "data-e2e": t.role === Z.assistant ? "stream-assistant-msg" : "user-msg",
      children: t.role === Z.assistant ? /* @__PURE__ */ w.jsx(
        za,
        {
          message: t,
          itemId: e
        }
      ) : [...t.content].map((i) => /* @__PURE__ */ w.jsx(qa, { record: { ...i, itemId: e } }, ue()))
    }
  );
}, Va = Nt.memo($a), Wa = ({ titleTxt: e }) => {
  const { base: t, title: i } = Cs();
  return /* @__PURE__ */ w.jsxs("div", { className: t(), children: [
    i && /* @__PURE__ */ w.jsx("div", { className: i(), children: e }),
    /* @__PURE__ */ w.jsx(Ri, { orientation: $r.vertical })
  ] });
}, Ga = () => {
  const { aiProfile: e } = $(nt), t = $((h) => h.chat.historyIds || []), i = $((h) => h.chat.historyData[t[0]]), { base: o, second: c, date: u } = Ts(), { base: f } = Ss(), a = go((i == null ? void 0 : i.time) || (/* @__PURE__ */ new Date()).getTime());
  return /* @__PURE__ */ w.jsx("div", { className: o(), children: /* @__PURE__ */ w.jsxs("div", { className: c(), "data-e2e": "history-container", children: [
    /* @__PURE__ */ w.jsx(Wa, { titleTxt: e.welcome }),
    /* @__PURE__ */ w.jsx("div", { className: u(), "data-e2e": "stream-assistant-msg-date", children: a }),
    t.map((h) => /* @__PURE__ */ w.jsx(
      "div",
      {
        className: f(),
        "data-e2e": "history-item",
        children: /* @__PURE__ */ w.jsx(Va, { itemId: h })
      },
      ue()
    ))
  ] }) });
}, qa = ({ record: e }) => {
  const t = He(), { action: i, separator: o } = ui({ type: Z.user }), c = () => {
    t(gi(e));
  };
  return /* @__PURE__ */ w.jsxs("div", { className: o(), children: [
    /* @__PURE__ */ w.jsx("span", { children: e.message }),
    e.resend && !e.sent && /* @__PURE__ */ w.jsx("div", { className: i(), children: /* @__PURE__ */ w.jsx(lr, { outlined: !0, onClick: () => c(), children: /* @__PURE__ */ w.jsxs(
      "svg",
      {
        fill: "currentColor",
        viewBox: "0 0 24 24",
        width: "20px",
        height: "20px",
        children: [
          /* @__PURE__ */ w.jsx("path", { fill: "none", d: "M0 0h24v24H0V0z" }),
          /* @__PURE__ */ w.jsx("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" })
        ]
      }
    ) }) })
  ] });
}, Ha = ({ config: e }) => {
  const t = He();
  return t(Io(e.meta)), t(xo(e.app.purpose)), t(vo(e.specialUrls)), t(Yn(e.app)), /* @__PURE__ */ w.jsx(
    us,
    {
      head: /* @__PURE__ */ w.jsx(ka, {}),
      stream: /* @__PURE__ */ w.jsx(Ga, {}),
      foot: /* @__PURE__ */ w.jsx(ja, {})
    }
  );
};
var tn = {}, rn = {};
rn.__esModule = !0;
rn.default = Xa;
function Zt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Zt = function(i) {
    return typeof i;
  } : Zt = function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  }, Zt(e);
}
function Ir() {
}
var Ya = {
  getItem: Ir,
  setItem: Ir,
  removeItem: Ir
};
function Ja(e) {
  if ((typeof self > "u" ? "undefined" : Zt(self)) !== "object" || !(e in self))
    return !1;
  try {
    var t = self[e], i = "redux-persist ".concat(e, " test");
    t.setItem(i, "test"), t.getItem(i), t.removeItem(i);
  } catch {
    return Ee.process.env.NODE_ENV !== "production" && console.warn("redux-persist ".concat(e, " test failed, persistence will be disabled.")), !1;
  }
  return !0;
}
function Xa(e) {
  var t = "".concat(e, "Storage");
  return Ja(t) ? self[t] : (Ee.process.env.NODE_ENV !== "production" && console.error("redux-persist failed to create sync storage. falling back to noop storage."), Ya);
}
tn.__esModule = !0;
tn.default = Qa;
var Ka = Za(rn);
function Za(e) {
  return e && e.__esModule ? e : { default: e };
}
function Qa(e) {
  var t = (0, Ka.default)(e);
  return {
    getItem: function(o) {
      return new Promise(function(c, u) {
        c(t.getItem(o));
      });
    },
    setItem: function(o, c) {
      return new Promise(function(u, f) {
        u(t.setItem(o, c));
      });
    },
    removeItem: function(o) {
      return new Promise(function(c, u) {
        c(t.removeItem(o));
      });
    }
  };
}
var ki = void 0, ec = tc(tn);
function tc(e) {
  return e && e.__esModule ? e : { default: e };
}
var rc = (0, ec.default)("local");
ki = rc;
const nc = (e) => (t) => {
  const i = (o) => {
    var f;
    const { meta: c } = e.getState(), u = {};
    return c.pd && typeof o == "object" && "billingOptionType" in o ? (o.billingFrequencyTmsg = o.billingOptionType === "one-time" ? c.pd.oneTimer : (f = c.pd.subscriberBillingFrequency) == null ? void 0 : f.replace(
      "{1}",
      o.frequencyInMonths
    ), o = { ...o, ...u }, o) : u;
  };
  return Me.core.on(Me.type.emailSuccess, () => {
    const { meta: o, intentions: c } = e.getState();
    e.dispatch(Ur(!1)), e.dispatch(kn("")), e.dispatch(
      ir({
        id: ue(),
        role: Z.user,
        sequence: 1,
        content: {
          sequence: 1,
          message: c.email.current,
          resend: !1,
          sent: !0,
          groupId: ""
        }
      })
    ), e.dispatch(Zr(c.email.current)), e.dispatch(ca(!0)), ve({
      eventType: ge.emailEntered,
      systemType: o.systemType,
      utmParams: o.marketing.lastUtmParams,
      customerUuid: o.cid,
      email: c.email.current
    });
  }), Me.core.on(Me.type.emailError, (o) => {
    const { meta: c, intentions: u, config: f } = e.getState(), { tm716: a, tm526: h, tm715: x, tm505: y } = f.translations;
    if (e.dispatch(Ur(!1)), o.status === 409) {
      e.dispatch(wi({
        content: a,
        buttons: [
          { sequence: 1, id: "opt-1", text: h, value: h, link: o.data.buttonLink, noStream: !0 },
          { sequence: 2, id: "opt-2", text: x, value: x, link: "", noStream: !0 }
        ]
      })), ve({
        eventType: ge.emailExist,
        systemType: c.systemType,
        utmParams: c.marketing.lastUtmParams,
        customerUuid: c.cid,
        email: u.email.current
      });
      return;
    }
    o.status === 422 && (e.dispatch(kn(o.errors.email[0] || y)), ve({
      eventType: ge.emailWrong,
      systemType: c.systemType,
      utmParams: c.marketing.lastUtmParams,
      customerUuid: c.cid,
      email: u.email.current
    }));
  }), Fn("marketing", e, To), Fn(
    "__pd",
    e,
    Co,
    i
  ), (o) => {
    if (vi.match(o) && o.payload) {
      const { meta: c, intentions: u } = e.getState();
      ve({
        eventType: ge.linkProvided,
        systemType: c.systemType,
        utmParams: c.marketing.lastUtmParams,
        customerUuid: c.cid,
        email: u.email.current
      });
    }
    t(o);
  };
}, Fn = (e, t, i, o) => {
  const c = setInterval(() => {
    let u = localStorage.getItem(e) || "";
    try {
      u = JSON.parse(u);
    } catch {
      u = localStorage.getItem(e) || "";
    }
    o && u && (u = o(u)), o && u && (t.dispatch(i(u)), clearInterval(c));
  }, As);
};
let le;
const ic = (e) => (t) => (i) => {
  const { meta: o, chat: c, config: u } = e.getState(), f = () => {
    const { config: y } = e.getState();
    e.dispatch(Bt()), e.dispatch(qt(y.translations.error));
  }, a = () => {
    e.dispatch(jn({ itemId: c.historyIds.pop() })), f();
  }, h = (y) => {
    if (y.role === Z.user && e.dispatch(Gt()), le && le.connected && y.message.trim() !== "") {
      le.emit(Se.chat, { time: (/* @__PURE__ */ new Date()).getTime(), ...y }, On(a)), e.dispatch(vr());
      return;
    }
    a();
  }, x = (y) => {
    e.dispatch(na(y)), e.dispatch(Gt());
    const b = () => {
      const { config: I } = e.getState();
      e.dispatch(jn(y)), e.dispatch(Bt()), e.dispatch(qt(I.translations.error));
    };
    le != null && le.connected && y.message.trim() !== "" ? (le.volatile.emit(
      Se.chat,
      {
        role: Z.user,
        message: y.message,
        term: yt(Qe.chat),
        user_id: o.cid,
        region: o.region
      },
      On(b)
    ), e.dispatch(vr())) : b();
  };
  if (Zr.match(i) && h({
    role: Z.user,
    message: i.payload,
    term: yt(Qe.chat),
    user_id: o.cid,
    region: o.region,
    messageId: [...c.historyIds].pop()
  }), ar.match(i)) {
    const y = document.querySelector("#chatbot-container");
    document.body && y && u.purpose !== Wr && (y.innerHTML = "", document.body.classList.remove(di)), localStorage.setItem(ks, (/* @__PURE__ */ new Date()).getTime().toString()), le && le.close(), window.location.href = u.close.href || Os;
  }
  if (yi.match(i) && i.payload) {
    const y = [...c.historyIds].pop(), b = c.historyData[y].content.map(({ message: I }) => I).join(`
`);
    b.trim() !== "" && h({
      role: Z.user,
      message: b,
      term: yt(Qe.chat),
      user_id: o.cid,
      region: o.region,
      messageId: y
    });
  }
  if (gi.match(i) && x(i.payload), !Yn.match(i))
    return t(i);
  e.dispatch(Gt()), le = Zi.connect(i.payload.chatUrl, { query: `cid=${o.cid}`, ...Ns }), le.on(Se.connect, () => {
    const { meta: y } = e.getState();
    le.sendBuffer = [], le.emit(Se.chatHistory, { user_id: y.cid, region: y.region, term: yt(Qe.chat) }), e.dispatch(_n(!0));
  }), le.on(Se.chatHistory, ({ history: y, errors: b, region: I }) => {
    e.dispatch(Bt()), e.dispatch(Er(!1)), e.dispatch(So(I));
    const { config: P, meta: O } = e.getState();
    if (b.length) {
      e.dispatch(qt(b[0]));
      return;
    }
    if (y.length) {
      e.dispatch(ta(y));
      return;
    }
    e.dispatch(ia()), e.dispatch(Gt());
    let S = 0;
    P.aiProfile.initialMessage.forEach((ne, j, L) => {
      S += 1e3, setTimeout(() => {
        e.dispatch(oa(ne)), L.length === j + 1 && (P.aiProfile.initialMessage.forEach((ae) => h({
          role: Z.assistant,
          term: yt(Qe.chat),
          user_id: O.cid,
          message: JSON.stringify(ae.content),
          messageId: ae.id,
          region: O.region
        })), e.dispatch(Bt()));
      }, S);
    });
  }), le.on(Se.streamStart, ({ id: y }) => {
    e.dispatch(Er(!0)), e.dispatch(Bt()), e.dispatch(ea()), e.dispatch(vr()), e.dispatch(Rn({ id: y }));
  }), le.on(Se.streamData, (y) => {
    var b;
    e.dispatch(Rn({
      id: y.id,
      sequence: y.sequence,
      content: {
        type: y.type,
        [y.type]: y[y.type],
        sequence: y.sequence
      }
    })), (b = y.errors) != null && b.length && !c.error && e.dispatch(qt(y.errors[0]));
  }), le.on(Se.streamEnd, () => {
    e.dispatch(Er(!1));
  }), le.on(Se.streamError, f), le.on(Se.error, f), le.on(Se.disconnect, () => {
    e.dispatch(_n(!1));
  }), t(i);
}, On = (e, t = 5e3) => {
  let i = !1;
  const o = setTimeout(() => {
    i || (i = !0, e());
  }, t);
  return () => {
    i || (i = !0, clearTimeout(o));
  };
}, oc = {
  key: "root",
  storage: ki,
  whitelist: ["chat", "meta", "config"]
}, Bi = Hi({
  reducer: Xi(oc, Yi({
    meta: Po,
    config: Eo,
    chat: sa,
    intentions: ha
  })),
  middleware: (e) => e({ serializableCheck: !1 }).concat(ic, nc)
}), sc = Ki(Bi);
let Ln = !1;
const Ic = (e) => {
  Ln || (Ln = !0, At.createRoot(e.root).render(
    /* @__PURE__ */ w.jsx(qi, { store: Bi, children: /* @__PURE__ */ w.jsx(Wn, { persistor: sc, children: /* @__PURE__ */ w.jsx(Ha, { config: e.initialConfig }) }) })
  ), document.body.classList.add(di));
};
export {
  Ic as ReactBotClient,
  Ic as default,
  Me as intent
};
//# sourceMappingURL=index.es.js.map
