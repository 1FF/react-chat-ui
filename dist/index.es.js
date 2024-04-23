(function(){"use strict";try{if(typeof document<"u"){const t=document.createElement("style");t.id="react-tw-ai-client",t.appendChild(document.createTextNode('*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:Plus Jakarta Sans,Roboto,Mulish,Exo,Helvetica,Arial,sans-serif;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.tw--pointer-events-none{pointer-events:none}.tw--pointer-events-auto{pointer-events:auto}.tw--fixed{position:fixed}.tw--absolute{position:absolute}.tw--relative{position:relative}.tw---top-1\\/2{top:-50%}.tw--bottom-0{bottom:0}.tw--bottom-1{bottom:.25rem}.tw--bottom-\\[-16px\\]{bottom:-16px}.tw--left-0{left:0}.tw--right-0{right:0}.tw--right-4{right:1rem}.tw--right-\\[-10px\\]{right:-10px}.tw--top-0{top:0}.tw--top-8{top:2rem}.tw--top-\\[-30px\\]{top:-30px}.tw--top-\\[50\\%\\]{top:50%}.tw--z-50{z-index:50}.tw--z-\\[101\\]{z-index:101}.tw--z-\\[9999\\]{z-index:9999}.tw--m-0{margin:0}.tw--m-auto{margin:auto}.tw--mx-10{margin-left:2.5rem;margin-right:2.5rem}.tw--mx-\\[30px\\]{margin-left:30px;margin-right:30px}.tw--mx-auto{margin-left:auto;margin-right:auto}.tw--my-4{margin-top:1rem;margin-bottom:1rem}.tw--mb-5{margin-bottom:1.25rem}.tw--mb-6{margin-bottom:1.5rem}.tw--mb-7{margin-bottom:1.75rem}.tw--mb-\\[11px\\]{margin-bottom:11px}.tw--mb-auto{margin-bottom:auto}.tw--ml-7{margin-left:1.75rem}.tw--ml-auto{margin-left:auto}.tw--mr-0{margin-right:0}.tw--mr-5{margin-right:1.25rem}.tw--mr-\\[5px\\]{margin-right:5px}.tw--mt-0{margin-top:0}.tw--mt-20{margin-top:5rem}.tw--mt-24{margin-top:6rem}.tw--mt-\\[11px\\]{margin-top:11px}.tw--mt-\\[30px\\]{margin-top:30px}.tw--box-border{box-sizing:border-box}.tw--box-content{box-sizing:content-box}.tw--block{display:block}.tw--inline-block{display:inline-block}.tw--flex{display:flex}.tw--grid{display:grid}.tw--hidden{display:none}.tw--h-16{height:4rem}.tw--h-4{height:1rem}.tw--h-6{height:1.5rem}.tw--h-8{height:2rem}.tw--h-\\[12px\\]{height:12px}.tw--h-\\[200px\\]{height:200px}.tw--h-\\[50px\\]{height:50px}.tw--h-\\[60px\\]{height:60px}.tw--h-fit{height:-moz-fit-content;height:fit-content}.tw--h-full{height:100%}.tw--h-screen{height:100vh}.tw--max-h-\\[700px\\]{max-height:700px}.tw--max-h-screen{max-height:100vh}.tw--min-h-\\[315px\\]{min-height:315px}.tw--min-h-\\[400px\\]{min-height:400px}.tw--w-16{width:4rem}.tw--w-4{width:1rem}.tw--w-6{width:1.5rem}.tw--w-64{width:16rem}.tw--w-8{width:2rem}.tw--w-\\[12px\\]{width:12px}.tw--w-\\[300px\\]{width:300px}.tw--w-fit{width:-moz-fit-content;width:fit-content}.tw--w-full{width:100%}.tw--w-screen{width:100vw}.tw--max-w-\\[280px\\]{max-width:280px}.tw--max-w-\\[335px\\]{max-width:335px}.tw--max-w-\\[375px\\]{max-width:375px}.tw--max-w-\\[400px\\]{max-width:400px}.tw--max-w-\\[500px\\]{max-width:500px}.tw--max-w-md{max-width:28rem}.tw--max-w-xs{max-width:20rem}.tw--flex-1{flex:1 1 0%}.tw--shrink{flex-shrink:1}.tw--shrink-0{flex-shrink:0}.tw--grow-0{flex-grow:0}.tw--translate-x-72{--tw-translate-x: 18rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.tw--translate-y-1\\/2{--tw-translate-y: 50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.tw--translate-y-\\[-50\\%\\]{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes tw--rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.tw--animate-rotate{animation:tw--rotate .5s linear infinite}@keyframes tw--text-spin{0%{transform:translate(18rem)}6.25%,12.5%{transform:translate(-.5rem)}18.75%,25%{transform:translate(-21.5rem)}31.25%,37.5%{transform:translate(-42.5rem)}43.75%,50%{transform:translate(-63.5rem)}56.25%,62.5%{transform:translate(-84.5rem)}68.75%,75%{transform:translate(-105.5rem)}81.25%,87.5%{transform:translate(-126.5rem)}93.75%,to{transform:translate(-147.5em)}}.tw--animate-text-spin{animation:tw--text-spin 30s linear infinite}.tw--animate-wave{animation:tw--wave 1.3s linear infinite}.tw--animate-wave-delay{animation:tw--wave 1.3s linear infinite -1.1s}@keyframes tw--wave{0%{transform:initial}60%{transform:initial}to{transform:initial}30%{transform:translateY(-15px)}}.tw--animate-wave-delay-2{animation:tw--wave 1.3s linear infinite -.9s}.tw--cursor-pointer{cursor:pointer}.tw--select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.tw--flex-row{flex-direction:row}.tw--flex-col{flex-direction:column}.tw--flex-col-reverse{flex-direction:column-reverse}.tw--flex-wrap{flex-wrap:wrap}.tw--items-end{align-items:flex-end}.tw--items-center{align-items:center}.tw--items-stretch{align-items:stretch}.tw--justify-center{justify-content:center}.tw--justify-between{justify-content:space-between}.tw--gap-2{gap:.5rem}.tw--space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.tw--space-x-\\[6px\\]>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(6px * var(--tw-space-x-reverse));margin-left:calc(6px * calc(1 - var(--tw-space-x-reverse)))}.tw--space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.tw--space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.25rem * var(--tw-space-y-reverse))}.tw--space-y-\\[10px\\]>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(10px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(10px * var(--tw-space-y-reverse))}.tw--space-y-\\[11px\\]>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(11px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(11px * var(--tw-space-y-reverse))}.tw--self-start{align-self:flex-start}.tw--self-stretch{align-self:stretch}.tw--justify-self-start{justify-self:start}.tw--justify-self-end{justify-self:end}.tw--justify-self-stretch{justify-self:stretch}.tw--overflow-hidden{overflow:hidden}.tw--overflow-y-scroll{overflow-y:scroll}.tw--whitespace-pre-wrap{white-space:pre-wrap}.tw--break-words{overflow-wrap:break-word}.tw--rounded-3xl{border-radius:1.5rem}.tw--rounded-\\[20px\\]{border-radius:20px}.tw--rounded-full{border-radius:9999px}.tw--rounded-lg{border-radius:.5rem}.tw--rounded-xl{border-radius:.75rem}.tw--border{border-width:1px}.tw--border-0{border-width:0px}.tw--border-\\[5px\\]{border-width:5px}.tw--border-r{border-right-width:1px}.tw--border-solid{border-style:solid}.tw--border-glaze{border-color:var(--glaze)}.tw--border-zephyr-200{border-color:var(--zephyr-200)}.tw--border-l-zephyr-600{border-left-color:var(--zephyr-600)}.tw--border-r-\\[\\#cacadb\\]{--tw-border-opacity: 1;border-right-color:rgb(202 202 219 / var(--tw-border-opacity))}.tw--border-t-zephyr-600{border-top-color:var(--zephyr-600)}.tw--bg-\\[\\#0f0e1e\\]{--tw-bg-opacity: 1;background-color:rgb(15 14 30 / var(--tw-bg-opacity))}.tw--bg-\\[transparent\\]{background-color:transparent}.tw--bg-glaze{background-color:var(--glaze)}.tw--bg-glazeBg{background-color:var(--glazeBg)}.tw--bg-iota-dots{background-color:var(--iota-dots)}.tw--bg-loader{background-color:var(--loader)}.tw--bg-lumina{background-color:var(--lumina)}.tw--bg-neon{background-color:var(--neon)}.tw--bg-overlay{background-color:var(--overlay)}.tw--bg-pale-dots{background-color:var(--pale-dots)}.tw--bg-seraph{background-color:var(--seraph)}.tw--bg-whisper{background-color:var(--whisper)}.tw--bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.tw--bg-zephyr-100{background-color:var(--zephyr-100)}.tw--bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.tw--from-\\[\\#FF0000\\]{--tw-gradient-from: #FF0000 var(--tw-gradient-from-position);--tw-gradient-to: rgb(255 0 0 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.tw--to-\\[\\#F25640\\]{--tw-gradient-to: #F25640 var(--tw-gradient-to-position)}.tw--p-0{padding:0}.tw--p-0\\.5{padding:.125rem}.tw--p-1{padding:.25rem}.tw--p-3{padding:.75rem}.tw--p-5{padding:1.25rem}.tw--p-7{padding:1.75rem}.tw--px-1{padding-left:.25rem;padding-right:.25rem}.tw--px-4{padding-left:1rem;padding-right:1rem}.tw--px-5{padding-left:1.25rem;padding-right:1.25rem}.tw--px-\\[15px\\]{padding-left:15px;padding-right:15px}.tw--py-2{padding-top:.5rem;padding-bottom:.5rem}.tw--py-3{padding-top:.75rem;padding-bottom:.75rem}.tw--py-\\[11px\\]{padding-top:11px;padding-bottom:11px}.tw--pb-1{padding-bottom:.25rem}.tw--pb-10{padding-bottom:2.5rem}.tw--pb-5{padding-bottom:1.25rem}.tw--pb-6{padding-bottom:1.5rem}.tw--pb-\\[11px\\]{padding-bottom:11px}.tw--pb-\\[30px\\]{padding-bottom:30px}.tw--pb-\\[5px\\]{padding-bottom:5px}.tw--pl-\\[10px\\]{padding-left:10px}.tw--pl-\\[35px\\]{padding-left:35px}.tw--pr-2{padding-right:.5rem}.tw--pr-\\[5px\\]{padding-right:5px}.tw--pt-10{padding-top:2.5rem}.tw--pt-5{padding-top:1.25rem}.tw--text-left{text-align:left}.tw--text-center{text-align:center}.tw--text-2xl{font-size:1.5rem;line-height:2rem}.tw--text-\\[10px\\]{font-size:10px}.tw--text-\\[12\\.8px\\]{font-size:12.8px}.tw--text-\\[16px\\]{font-size:16px}.tw--text-\\[20px\\]{font-size:20px}.tw--text-\\[24px\\]{font-size:24px}.tw--text-lg{font-size:1.125rem;line-height:1.75rem}.tw--text-sm{font-size:.875rem;line-height:1.25rem}.tw--text-xl,.tw--text-xl\\/7{font-size:1.25rem;line-height:1.75rem}.tw--font-bold{font-weight:700}.tw--font-density-different{font-weight:var(--density-different)}.tw--font-extrabold{font-weight:800}.tw--font-medium{font-weight:500}.tw--font-semibold{font-weight:600}.tw--leading-5{line-height:1.25rem}.tw--leading-\\[1\\.4\\]{line-height:1.4}.tw--leading-\\[1\\.56\\]{line-height:1.56}.tw--leading-\\[1\\.63\\]{line-height:1.63}.tw--leading-\\[1\\]{line-height:1}.tw--leading-\\[2\\]{line-height:2}.tw--leading-\\[30px\\]{line-height:30px}.tw--text-\\[\\#21bb5a\\]{--tw-text-opacity: 1;color:rgb(33 187 90 / var(--tw-text-opacity))}.tw--text-\\[\\#ff0043\\]{--tw-text-opacity: 1;color:rgb(255 0 67 / var(--tw-text-opacity))}.tw--text-dots{color:var(--dots)}.tw--text-glazeText{color:var(--glazeText)}.tw--text-muted-blue{color:#0f0e1e99}.tw--text-seraph{color:var(--seraph)}.tw--text-whisper{color:var(--whisper)}.tw--text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.tw--text-zephyr-100{color:var(--zephyr-100)}.tw--text-zephyr-600{color:var(--zephyr-600)}.tw--text-zephyr-800{color:var(--zephyr-800)}.tw--text-zeta{color:var(--zeta)}.tw--underline{text-decoration-line:underline}.tw--opacity-40{opacity:.4}.tw--opacity-60{opacity:.6}.tw--shadow-\\[-1px_2px_5px_0\\]{--tw-shadow: -1px 2px 5px 0;--tw-shadow-colored: -1px 2px 5px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-\\[0px_12px_24px_-4px_rgba\\(1\\,154\\,255\\,0\\.2\\)\\]{--tw-shadow: 0px 12px 24px -4px rgba(1,154,255,.2);--tw-shadow-colored: 0px 12px 24px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-card{--tw-shadow: 0 12px 24px 0 rgba(var(--ze) .06), 0 4px 8px 0 rgba(var(--ze), .04);--tw-shadow-colored: 0 12px 24px 0 var(--tw-shadow-color), 0 4px 8px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-loading-dots{--tw-shadow: -24px 0 rgba(201, 201, 201, .5), 24px 0 rgba(201, 201, 201, .5);--tw-shadow-colored: -24px 0 var(--tw-shadow-color), 24px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-zephyr-200{--tw-shadow-color: var(--zephyr-200);--tw-shadow: var(--tw-shadow-colored)}.tw--translate-z-0 *{transform:translateZ(0)}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.\\[key\\:string\\]{key:string}#chatbot-container *{font-family:inherit!important}.spaced-letters{letter-spacing:2px}.mt-8{margin-top:2rem}.mb-6{margin-bottom:1.5rem}.scroll-stop{overflow:hidden;position:fixed;left:0;right:0;top:0}span>p:last-child{display:inline;position:relative}.light{--lumina: #f0f2f5;--whisper: #ffffff;--seraph: #21bb5a;--ember: #cacadb;--enigma: #ffae19;--glaze: #21bb5a;--glazeText: #151226;--glazeBg: #ffffff;--sigma: #0f0e1e;--zeta: #0f0e1e;--status: #21bb5a;--loader: #f6f8fa;--dots: #21bb5a;--neon: #019aff;--pale-dots: #cacadb;--iota-dots: #21bb5a;--overlay: rgba(255, 255, 255, .6);--ze: 43, 49, 57;--zephyr-100: rgb(var(--ze));--zephyr-200: rgba(var(--ze), .1);--zephyr-600: rgba(var(--ze), .6);--zephyr-800: rgba(var(--ze), .8);--card: 0 12px 24px 0 rgba(43, 49, 57, .06), 0 4px 8px 0 rgba(43, 55, 70, .04);--loading-dots: -24px 0 rgba(201, 201, 201, .5), 24px 0 rgba(201, 201, 201, .5);--density-different: 500}.dark{--lumina: #252239;--whisper: #151226;--seraph: #f53373;--ember: #cacadb;--enigma: #ffae19;--glaze: #b3bac6;--glazeText: #151226;--glazeBg: #b3bac6;--sigma: #0f0e1e;--zeta: #ffffff;--status: #21bb5a;--loader: #252239;--dots: #f53374;--neon: #019aff;--pale-dots: #ffffff;--iota-dots: #21bb5a;--overlay: rgba(15, 14, 30, .9);--ze: 255, 255, 255;--zephyr-100: rgb(var(--ze));--zephyr-200: rgba(var(--ze), .1);--zephyr-600: rgba(var(--ze), .6);--zephyr-800: rgba(var(--ze), .8);--card: 0 12px 24px 0 rgba(0, 0, 0, .12), 0 4px 8px 0 rgba(0, 0, 0, .1);--loading-dots: -24px 0 rgba(255, 255, 255, .5), 24px 0 rgba(255, 255, 255, .5);--density-different: 400}ul,ol{list-style:auto;list-style-position:inside;display:flex;flex-direction:column}ul{list-style-position:inside;list-style-type:disc}li{padding:0;position:relative}li:last-child{width:-moz-fit-content;width:fit-content}li+li{margin-top:0}span:not(.after\\:tw--hidden) ol:last-child li:last-child:after,span:not(.after\\:tw--hidden) ul:last-child li:last-child:after,span:not(.after\\:tw--hidden) p:last-child:after{content:"";width:.25rem;height:1rem;display:inline-block;background:var(--zephyr-100);position:absolute;left:auto;bottom:4px}@keyframes tw--blink{0%{opacity:1}49%{opacity:1}50%{opacity:0}to{opacity:0}}span:not(.after\\:tw--hidden) ol:last-child li:last-child:after,span:not(.after\\:tw--hidden) ul:last-child li:last-child:after,span:not(.after\\:tw--hidden) p:last-child:after{animation:tw--blink .5s infinite}span:not(.after\\:tw--hidden):has(ol li):after,span:not(.after\\:tw--hidden):has(ul li):after,span:not(.after\\:tw--hidden):has(p:last-child):after{display:none}.after\\:tw--absolute:after{content:var(--tw-content);position:absolute}.after\\:tw--bottom-\\[-2px\\]:after{content:var(--tw-content);bottom:-2px}.after\\:tw--left-\\[37px\\]:after{content:var(--tw-content);left:37px}.after\\:tw--z-10:after{content:var(--tw-content);z-index:10}.after\\:tw--ml-1:after{content:var(--tw-content);margin-left:.25rem}.after\\:tw--inline-block:after{content:var(--tw-content);display:inline-block}.after\\:tw--hidden:after{content:var(--tw-content);display:none}.after\\:tw--h-4:after{content:var(--tw-content);height:1rem}.after\\:tw--h-\\[10px\\]:after{content:var(--tw-content);height:10px}.after\\:tw--w-1:after{content:var(--tw-content);width:.25rem}.after\\:tw--w-\\[10px\\]:after{content:var(--tw-content);width:10px}@keyframes tw--blink{0%{content:var(--tw-content);opacity:1}49%{content:var(--tw-content);opacity:1}50%{content:var(--tw-content);opacity:0}to{content:var(--tw-content);opacity:0}}.after\\:tw--animate-blink:after{content:var(--tw-content);animation:tw--blink .5s infinite}.after\\:tw--rounded-full:after{content:var(--tw-content);border-radius:9999px}.after\\:tw--bg-iota-dots:after{content:var(--tw-content);background-color:var(--iota-dots)}.after\\:tw--bg-zephyr-100:after{content:var(--tw-content);background-color:var(--zephyr-100)}.focus\\:\\!tw--bg-lumina:focus{background-color:var(--lumina)!important}.focus\\:tw--outline-none:focus{outline:2px solid transparent;outline-offset:2px}@media (min-width: 350px){.customXs\\:tw--max-w-xs{max-width:20rem}.customXs\\:tw--text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width: 768px){.md\\:tw--w-\\[350px\\]{width:350px}.md\\:tw--max-w-\\[570px\\]{max-width:570px}.md\\:tw--max-w-\\[800px\\]{max-width:800px}}')),document.body.appendChild(t)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import fr, { PureComponent as zo, useState as Nt, useLayoutEffect as Vo, useEffect as Ut, forwardRef as hi, useRef as en, memo as Wo } from "react";
import Go from "react-dom";
import { useDispatch as qo, useSelector as Ho, Provider as Yo } from "react-redux";
import { createSlice as dr, configureStore as Jo, combineReducers as Ko } from "@reduxjs/toolkit";
import Xo from "react-markdown";
import { persistReducer as Zo, persistStore as Qo } from "redux-persist";
import { io as es } from "socket.io-client";
function ts(e) {
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
var we = {}, mi = {}, pr = {};
pr.byteLength = is;
pr.toByteArray = ss;
pr.fromByteArray = us;
var De = [], Re = [], rs = typeof Uint8Array < "u" ? Uint8Array : Array, _r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var vt = 0, ns = _r.length; vt < ns; ++vt)
  De[vt] = _r[vt], Re[_r.charCodeAt(vt)] = vt;
Re["-".charCodeAt(0)] = 62;
Re["_".charCodeAt(0)] = 63;
function wi(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = e.indexOf("=");
  r === -1 && (r = t);
  var o = r === t ? 0 : 4 - r % 4;
  return [r, o];
}
function is(e) {
  var t = wi(e), r = t[0], o = t[1];
  return (r + o) * 3 / 4 - o;
}
function os(e, t, r) {
  return (t + r) * 3 / 4 - r;
}
function ss(e) {
  var t, r = wi(e), o = r[0], s = r[1], l = new rs(os(e, o, s)), u = 0, a = s > 0 ? o - 4 : o, h;
  for (h = 0; h < a; h += 4)
    t = Re[e.charCodeAt(h)] << 18 | Re[e.charCodeAt(h + 1)] << 12 | Re[e.charCodeAt(h + 2)] << 6 | Re[e.charCodeAt(h + 3)], l[u++] = t >> 16 & 255, l[u++] = t >> 8 & 255, l[u++] = t & 255;
  return s === 2 && (t = Re[e.charCodeAt(h)] << 2 | Re[e.charCodeAt(h + 1)] >> 4, l[u++] = t & 255), s === 1 && (t = Re[e.charCodeAt(h)] << 10 | Re[e.charCodeAt(h + 1)] << 4 | Re[e.charCodeAt(h + 2)] >> 2, l[u++] = t >> 8 & 255, l[u++] = t & 255), l;
}
function as(e) {
  return De[e >> 18 & 63] + De[e >> 12 & 63] + De[e >> 6 & 63] + De[e & 63];
}
function cs(e, t, r) {
  for (var o, s = [], l = t; l < r; l += 3)
    o = (e[l] << 16 & 16711680) + (e[l + 1] << 8 & 65280) + (e[l + 2] & 255), s.push(as(o));
  return s.join("");
}
function us(e) {
  for (var t, r = e.length, o = r % 3, s = [], l = 16383, u = 0, a = r - o; u < a; u += l)
    s.push(cs(e, u, u + l > a ? a : u + l));
  return o === 1 ? (t = e[r - 1], s.push(
    De[t >> 2] + De[t << 4 & 63] + "=="
  )) : o === 2 && (t = (e[r - 2] << 8) + e[r - 1], s.push(
    De[t >> 10] + De[t >> 4 & 63] + De[t << 2 & 63] + "="
  )), s.join("");
}
var tn = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
tn.read = function(e, t, r, o, s) {
  var l, u, a = s * 8 - o - 1, h = (1 << a) - 1, b = h >> 1, g = -7, y = r ? s - 1 : 0, E = r ? -1 : 1, I = e[t + y];
  for (y += E, l = I & (1 << -g) - 1, I >>= -g, g += a; g > 0; l = l * 256 + e[t + y], y += E, g -= 8)
    ;
  for (u = l & (1 << -g) - 1, l >>= -g, g += o; g > 0; u = u * 256 + e[t + y], y += E, g -= 8)
    ;
  if (l === 0)
    l = 1 - b;
  else {
    if (l === h)
      return u ? NaN : (I ? -1 : 1) * (1 / 0);
    u = u + Math.pow(2, o), l = l - b;
  }
  return (I ? -1 : 1) * u * Math.pow(2, l - o);
};
tn.write = function(e, t, r, o, s, l) {
  var u, a, h, b = l * 8 - s - 1, g = (1 << b) - 1, y = g >> 1, E = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, I = o ? 0 : l - 1, R = o ? 1 : -1, P = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, u = g) : (u = Math.floor(Math.log(t) / Math.LN2), t * (h = Math.pow(2, -u)) < 1 && (u--, h *= 2), u + y >= 1 ? t += E / h : t += E * Math.pow(2, 1 - y), t * h >= 2 && (u++, h /= 2), u + y >= g ? (a = 0, u = g) : u + y >= 1 ? (a = (t * h - 1) * Math.pow(2, s), u = u + y) : (a = t * Math.pow(2, y - 1) * Math.pow(2, s), u = 0)); s >= 8; e[r + I] = a & 255, I += R, a /= 256, s -= 8)
    ;
  for (u = u << s | a, b += s; b > 0; e[r + I] = u & 255, I += R, u /= 256, b -= 8)
    ;
  e[r + I - R] |= P * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  const t = pr, r = tn, o = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = a, e.SlowBuffer = A, e.INSPECT_MAX_BYTES = 50;
  const s = 2147483647;
  e.kMaxLength = s, a.TYPED_ARRAY_SUPPORT = l(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function l() {
    try {
      const c = new Uint8Array(1), n = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(n, Uint8Array.prototype), Object.setPrototypeOf(c, n), c.foo() === 42;
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
  function u(c) {
    if (c > s)
      throw new RangeError('The value "' + c + '" is invalid for option "size"');
    const n = new Uint8Array(c);
    return Object.setPrototypeOf(n, a.prototype), n;
  }
  function a(c, n, i) {
    if (typeof c == "number") {
      if (typeof n == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return y(c);
    }
    return h(c, n, i);
  }
  a.poolSize = 8192;
  function h(c, n, i) {
    if (typeof c == "string")
      return E(c, n);
    if (ArrayBuffer.isView(c))
      return R(c);
    if (c == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof c
      );
    if (Ee(c, ArrayBuffer) || c && Ee(c.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Ee(c, SharedArrayBuffer) || c && Ee(c.buffer, SharedArrayBuffer)))
      return P(c, n, i);
    if (typeof c == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const f = c.valueOf && c.valueOf();
    if (f != null && f !== c)
      return a.from(f, n, i);
    const p = Z(c);
    if (p)
      return p;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof c[Symbol.toPrimitive] == "function")
      return a.from(c[Symbol.toPrimitive]("string"), n, i);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof c
    );
  }
  a.from = function(c, n, i) {
    return h(c, n, i);
  }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array);
  function b(c) {
    if (typeof c != "number")
      throw new TypeError('"size" argument must be of type number');
    if (c < 0)
      throw new RangeError('The value "' + c + '" is invalid for option "size"');
  }
  function g(c, n, i) {
    return b(c), c <= 0 ? u(c) : n !== void 0 ? typeof i == "string" ? u(c).fill(n, i) : u(c).fill(n) : u(c);
  }
  a.alloc = function(c, n, i) {
    return g(c, n, i);
  };
  function y(c) {
    return b(c), u(c < 0 ? 0 : L(c) | 0);
  }
  a.allocUnsafe = function(c) {
    return y(c);
  }, a.allocUnsafeSlow = function(c) {
    return y(c);
  };
  function E(c, n) {
    if ((typeof n != "string" || n === "") && (n = "utf8"), !a.isEncoding(n))
      throw new TypeError("Unknown encoding: " + n);
    const i = he(c, n) | 0;
    let f = u(i);
    const p = f.write(c, n);
    return p !== i && (f = f.slice(0, p)), f;
  }
  function I(c) {
    const n = c.length < 0 ? 0 : L(c.length) | 0, i = u(n);
    for (let f = 0; f < n; f += 1)
      i[f] = c[f] & 255;
    return i;
  }
  function R(c) {
    if (Ee(c, Uint8Array)) {
      const n = new Uint8Array(c);
      return P(n.buffer, n.byteOffset, n.byteLength);
    }
    return I(c);
  }
  function P(c, n, i) {
    if (n < 0 || c.byteLength < n)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (c.byteLength < n + (i || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let f;
    return n === void 0 && i === void 0 ? f = new Uint8Array(c) : i === void 0 ? f = new Uint8Array(c, n) : f = new Uint8Array(c, n, i), Object.setPrototypeOf(f, a.prototype), f;
  }
  function Z(c) {
    if (a.isBuffer(c)) {
      const n = L(c.length) | 0, i = u(n);
      return i.length === 0 || c.copy(i, 0, 0, n), i;
    }
    if (c.length !== void 0)
      return typeof c.length != "number" || Pt(c.length) ? u(0) : I(c);
    if (c.type === "Buffer" && Array.isArray(c.data))
      return I(c.data);
  }
  function L(c) {
    if (c >= s)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
    return c | 0;
  }
  function A(c) {
    return +c != c && (c = 0), a.alloc(+c);
  }
  a.isBuffer = function(n) {
    return n != null && n._isBuffer === !0 && n !== a.prototype;
  }, a.compare = function(n, i) {
    if (Ee(n, Uint8Array) && (n = a.from(n, n.offset, n.byteLength)), Ee(i, Uint8Array) && (i = a.from(i, i.offset, i.byteLength)), !a.isBuffer(n) || !a.isBuffer(i))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (n === i)
      return 0;
    let f = n.length, p = i.length;
    for (let w = 0, v = Math.min(f, p); w < v; ++w)
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
      let v = n[f];
      if (Ee(v, Uint8Array))
        w + v.length > p.length ? (a.isBuffer(v) || (v = a.from(v)), v.copy(p, w)) : Uint8Array.prototype.set.call(
          p,
          v,
          w
        );
      else if (a.isBuffer(v))
        v.copy(p, w);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      w += v.length;
    }
    return p;
  };
  function he(c, n) {
    if (a.isBuffer(c))
      return c.length;
    if (ArrayBuffer.isView(c) || Ee(c, ArrayBuffer))
      return c.byteLength;
    if (typeof c != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof c
      );
    const i = c.length, f = arguments.length > 2 && arguments[2] === !0;
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
          return ht(c).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return i * 2;
        case "hex":
          return i >>> 1;
        case "base64":
          return qt(c).length;
        default:
          if (p)
            return f ? -1 : ht(c).length;
          n = ("" + n).toLowerCase(), p = !0;
      }
  }
  a.byteLength = he;
  function ce(c, n, i) {
    let f = !1;
    if ((n === void 0 || n < 0) && (n = 0), n > this.length || ((i === void 0 || i > this.length) && (i = this.length), i <= 0) || (i >>>= 0, n >>>= 0, i <= n))
      return "";
    for (c || (c = "utf8"); ; )
      switch (c) {
        case "hex":
          return q(this, n, i);
        case "utf8":
        case "utf-8":
          return C(this, n, i);
        case "ascii":
          return F(this, n, i);
        case "latin1":
        case "binary":
          return V(this, n, i);
        case "base64":
          return T(this, n, i);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return oe(this, n, i);
        default:
          if (f)
            throw new TypeError("Unknown encoding: " + c);
          c = (c + "").toLowerCase(), f = !0;
      }
  }
  a.prototype._isBuffer = !0;
  function ie(c, n, i) {
    const f = c[n];
    c[n] = c[i], c[i] = f;
  }
  a.prototype.swap16 = function() {
    const n = this.length;
    if (n % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let i = 0; i < n; i += 2)
      ie(this, i, i + 1);
    return this;
  }, a.prototype.swap32 = function() {
    const n = this.length;
    if (n % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let i = 0; i < n; i += 4)
      ie(this, i, i + 3), ie(this, i + 1, i + 2);
    return this;
  }, a.prototype.swap64 = function() {
    const n = this.length;
    if (n % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let i = 0; i < n; i += 8)
      ie(this, i, i + 7), ie(this, i + 1, i + 6), ie(this, i + 2, i + 5), ie(this, i + 3, i + 4);
    return this;
  }, a.prototype.toString = function() {
    const n = this.length;
    return n === 0 ? "" : arguments.length === 0 ? C(this, 0, n) : ce.apply(this, arguments);
  }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(n) {
    if (!a.isBuffer(n))
      throw new TypeError("Argument must be a Buffer");
    return this === n ? !0 : a.compare(this, n) === 0;
  }, a.prototype.inspect = function() {
    let n = "";
    const i = e.INSPECT_MAX_BYTES;
    return n = this.toString("hex", 0, i).replace(/(.{2})/g, "$1 ").trim(), this.length > i && (n += " ... "), "<Buffer " + n + ">";
  }, o && (a.prototype[o] = a.prototype.inspect), a.prototype.compare = function(n, i, f, p, w) {
    if (Ee(n, Uint8Array) && (n = a.from(n, n.offset, n.byteLength)), !a.isBuffer(n))
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
    let v = w - p, B = f - i;
    const re = Math.min(v, B), K = this.slice(p, w), ne = n.slice(i, f);
    for (let H = 0; H < re; ++H)
      if (K[H] !== ne[H]) {
        v = K[H], B = ne[H];
        break;
      }
    return v < B ? -1 : B < v ? 1 : 0;
  };
  function ye(c, n, i, f, p) {
    if (c.length === 0)
      return -1;
    if (typeof i == "string" ? (f = i, i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648), i = +i, Pt(i) && (i = p ? 0 : c.length - 1), i < 0 && (i = c.length + i), i >= c.length) {
      if (p)
        return -1;
      i = c.length - 1;
    } else if (i < 0)
      if (p)
        i = 0;
      else
        return -1;
    if (typeof n == "string" && (n = a.from(n, f)), a.isBuffer(n))
      return n.length === 0 ? -1 : U(c, n, i, f, p);
    if (typeof n == "number")
      return n = n & 255, typeof Uint8Array.prototype.indexOf == "function" ? p ? Uint8Array.prototype.indexOf.call(c, n, i) : Uint8Array.prototype.lastIndexOf.call(c, n, i) : U(c, [n], i, f, p);
    throw new TypeError("val must be string, number or Buffer");
  }
  function U(c, n, i, f, p) {
    let w = 1, v = c.length, B = n.length;
    if (f !== void 0 && (f = String(f).toLowerCase(), f === "ucs2" || f === "ucs-2" || f === "utf16le" || f === "utf-16le")) {
      if (c.length < 2 || n.length < 2)
        return -1;
      w = 2, v /= 2, B /= 2, i /= 2;
    }
    function re(ne, H) {
      return w === 1 ? ne[H] : ne.readUInt16BE(H * w);
    }
    let K;
    if (p) {
      let ne = -1;
      for (K = i; K < v; K++)
        if (re(c, K) === re(n, ne === -1 ? 0 : K - ne)) {
          if (ne === -1 && (ne = K), K - ne + 1 === B)
            return ne * w;
        } else
          ne !== -1 && (K -= K - ne), ne = -1;
    } else
      for (i + B > v && (i = v - B), K = i; K >= 0; K--) {
        let ne = !0;
        for (let H = 0; H < B; H++)
          if (re(c, K + H) !== re(n, H)) {
            ne = !1;
            break;
          }
        if (ne)
          return K;
      }
    return -1;
  }
  a.prototype.includes = function(n, i, f) {
    return this.indexOf(n, i, f) !== -1;
  }, a.prototype.indexOf = function(n, i, f) {
    return ye(this, n, i, f, !0);
  }, a.prototype.lastIndexOf = function(n, i, f) {
    return ye(this, n, i, f, !1);
  };
  function xe(c, n, i, f) {
    i = Number(i) || 0;
    const p = c.length - i;
    f ? (f = Number(f), f > p && (f = p)) : f = p;
    const w = n.length;
    f > w / 2 && (f = w / 2);
    let v;
    for (v = 0; v < f; ++v) {
      const B = parseInt(n.substr(v * 2, 2), 16);
      if (Pt(B))
        return v;
      c[i + v] = B;
    }
    return v;
  }
  function ve(c, n, i, f) {
    return wt(ht(n, c.length - i), c, i, f);
  }
  function Ce(c, n, i, f) {
    return wt(Gt(n), c, i, f);
  }
  function Le(c, n, i, f) {
    return wt(qt(n), c, i, f);
  }
  function _(c, n, i, f) {
    return wt(mt(n, c.length - i), c, i, f);
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
    let v = !1;
    for (; ; )
      switch (p) {
        case "hex":
          return xe(this, n, i, f);
        case "utf8":
        case "utf-8":
          return ve(this, n, i, f);
        case "ascii":
        case "latin1":
        case "binary":
          return Ce(this, n, i, f);
        case "base64":
          return Le(this, n, i, f);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return _(this, n, i, f);
        default:
          if (v)
            throw new TypeError("Unknown encoding: " + p);
          p = ("" + p).toLowerCase(), v = !0;
      }
  }, a.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function T(c, n, i) {
    return n === 0 && i === c.length ? t.fromByteArray(c) : t.fromByteArray(c.slice(n, i));
  }
  function C(c, n, i) {
    i = Math.min(c.length, i);
    const f = [];
    let p = n;
    for (; p < i; ) {
      const w = c[p];
      let v = null, B = w > 239 ? 4 : w > 223 ? 3 : w > 191 ? 2 : 1;
      if (p + B <= i) {
        let re, K, ne, H;
        switch (B) {
          case 1:
            w < 128 && (v = w);
            break;
          case 2:
            re = c[p + 1], (re & 192) === 128 && (H = (w & 31) << 6 | re & 63, H > 127 && (v = H));
            break;
          case 3:
            re = c[p + 1], K = c[p + 2], (re & 192) === 128 && (K & 192) === 128 && (H = (w & 15) << 12 | (re & 63) << 6 | K & 63, H > 2047 && (H < 55296 || H > 57343) && (v = H));
            break;
          case 4:
            re = c[p + 1], K = c[p + 2], ne = c[p + 3], (re & 192) === 128 && (K & 192) === 128 && (ne & 192) === 128 && (H = (w & 15) << 18 | (re & 63) << 12 | (K & 63) << 6 | ne & 63, H > 65535 && H < 1114112 && (v = H));
        }
      }
      v === null ? (v = 65533, B = 1) : v > 65535 && (v -= 65536, f.push(v >>> 10 & 1023 | 55296), v = 56320 | v & 1023), f.push(v), p += B;
    }
    return k(f);
  }
  const M = 4096;
  function k(c) {
    const n = c.length;
    if (n <= M)
      return String.fromCharCode.apply(String, c);
    let i = "", f = 0;
    for (; f < n; )
      i += String.fromCharCode.apply(
        String,
        c.slice(f, f += M)
      );
    return i;
  }
  function F(c, n, i) {
    let f = "";
    i = Math.min(c.length, i);
    for (let p = n; p < i; ++p)
      f += String.fromCharCode(c[p] & 127);
    return f;
  }
  function V(c, n, i) {
    let f = "";
    i = Math.min(c.length, i);
    for (let p = n; p < i; ++p)
      f += String.fromCharCode(c[p]);
    return f;
  }
  function q(c, n, i) {
    const f = c.length;
    (!n || n < 0) && (n = 0), (!i || i < 0 || i > f) && (i = f);
    let p = "";
    for (let w = n; w < i; ++w)
      p += br[c[w]];
    return p;
  }
  function oe(c, n, i) {
    const f = c.slice(n, i);
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
  function $(c, n, i) {
    if (c % 1 !== 0 || c < 0)
      throw new RangeError("offset is not uint");
    if (c + n > i)
      throw new RangeError("Trying to access beyond buffer length");
  }
  a.prototype.readUintLE = a.prototype.readUIntLE = function(n, i, f) {
    n = n >>> 0, i = i >>> 0, f || $(n, i, this.length);
    let p = this[n], w = 1, v = 0;
    for (; ++v < i && (w *= 256); )
      p += this[n + v] * w;
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
  }, a.prototype.readBigUInt64LE = Be(function(n) {
    n = n >>> 0, Je(n, "offset");
    const i = this[n], f = this[n + 7];
    (i === void 0 || f === void 0) && rt(n, this.length - 8);
    const p = i + this[++n] * 2 ** 8 + this[++n] * 2 ** 16 + this[++n] * 2 ** 24, w = this[++n] + this[++n] * 2 ** 8 + this[++n] * 2 ** 16 + f * 2 ** 24;
    return BigInt(p) + (BigInt(w) << BigInt(32));
  }), a.prototype.readBigUInt64BE = Be(function(n) {
    n = n >>> 0, Je(n, "offset");
    const i = this[n], f = this[n + 7];
    (i === void 0 || f === void 0) && rt(n, this.length - 8);
    const p = i * 2 ** 24 + this[++n] * 2 ** 16 + this[++n] * 2 ** 8 + this[++n], w = this[++n] * 2 ** 24 + this[++n] * 2 ** 16 + this[++n] * 2 ** 8 + f;
    return (BigInt(p) << BigInt(32)) + BigInt(w);
  }), a.prototype.readIntLE = function(n, i, f) {
    n = n >>> 0, i = i >>> 0, f || $(n, i, this.length);
    let p = this[n], w = 1, v = 0;
    for (; ++v < i && (w *= 256); )
      p += this[n + v] * w;
    return w *= 128, p >= w && (p -= Math.pow(2, 8 * i)), p;
  }, a.prototype.readIntBE = function(n, i, f) {
    n = n >>> 0, i = i >>> 0, f || $(n, i, this.length);
    let p = i, w = 1, v = this[n + --p];
    for (; p > 0 && (w *= 256); )
      v += this[n + --p] * w;
    return w *= 128, v >= w && (v -= Math.pow(2, 8 * i)), v;
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
  }, a.prototype.readBigInt64LE = Be(function(n) {
    n = n >>> 0, Je(n, "offset");
    const i = this[n], f = this[n + 7];
    (i === void 0 || f === void 0) && rt(n, this.length - 8);
    const p = this[n + 4] + this[n + 5] * 2 ** 8 + this[n + 6] * 2 ** 16 + (f << 24);
    return (BigInt(p) << BigInt(32)) + BigInt(i + this[++n] * 2 ** 8 + this[++n] * 2 ** 16 + this[++n] * 2 ** 24);
  }), a.prototype.readBigInt64BE = Be(function(n) {
    n = n >>> 0, Je(n, "offset");
    const i = this[n], f = this[n + 7];
    (i === void 0 || f === void 0) && rt(n, this.length - 8);
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
  function W(c, n, i, f, p, w) {
    if (!a.isBuffer(c))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (n > p || n < w)
      throw new RangeError('"value" argument is out of bounds');
    if (i + f > c.length)
      throw new RangeError("Index out of range");
  }
  a.prototype.writeUintLE = a.prototype.writeUIntLE = function(n, i, f, p) {
    if (n = +n, i = i >>> 0, f = f >>> 0, !p) {
      const B = Math.pow(2, 8 * f) - 1;
      W(this, n, i, f, B, 0);
    }
    let w = 1, v = 0;
    for (this[i] = n & 255; ++v < f && (w *= 256); )
      this[i + v] = n / w & 255;
    return i + f;
  }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(n, i, f, p) {
    if (n = +n, i = i >>> 0, f = f >>> 0, !p) {
      const B = Math.pow(2, 8 * f) - 1;
      W(this, n, i, f, B, 0);
    }
    let w = f - 1, v = 1;
    for (this[i + w] = n & 255; --w >= 0 && (v *= 256); )
      this[i + w] = n / v & 255;
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
  function se(c, n, i, f, p) {
    Tt(n, f, p, c, i, 7);
    let w = Number(n & BigInt(4294967295));
    c[i++] = w, w = w >> 8, c[i++] = w, w = w >> 8, c[i++] = w, w = w >> 8, c[i++] = w;
    let v = Number(n >> BigInt(32) & BigInt(4294967295));
    return c[i++] = v, v = v >> 8, c[i++] = v, v = v >> 8, c[i++] = v, v = v >> 8, c[i++] = v, i;
  }
  function He(c, n, i, f, p) {
    Tt(n, f, p, c, i, 7);
    let w = Number(n & BigInt(4294967295));
    c[i + 7] = w, w = w >> 8, c[i + 6] = w, w = w >> 8, c[i + 5] = w, w = w >> 8, c[i + 4] = w;
    let v = Number(n >> BigInt(32) & BigInt(4294967295));
    return c[i + 3] = v, v = v >> 8, c[i + 2] = v, v = v >> 8, c[i + 1] = v, v = v >> 8, c[i] = v, i + 8;
  }
  a.prototype.writeBigUInt64LE = Be(function(n, i = 0) {
    return se(this, n, i, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeBigUInt64BE = Be(function(n, i = 0) {
    return He(this, n, i, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeIntLE = function(n, i, f, p) {
    if (n = +n, i = i >>> 0, !p) {
      const re = Math.pow(2, 8 * f - 1);
      W(this, n, i, f, re - 1, -re);
    }
    let w = 0, v = 1, B = 0;
    for (this[i] = n & 255; ++w < f && (v *= 256); )
      n < 0 && B === 0 && this[i + w - 1] !== 0 && (B = 1), this[i + w] = (n / v >> 0) - B & 255;
    return i + f;
  }, a.prototype.writeIntBE = function(n, i, f, p) {
    if (n = +n, i = i >>> 0, !p) {
      const re = Math.pow(2, 8 * f - 1);
      W(this, n, i, f, re - 1, -re);
    }
    let w = f - 1, v = 1, B = 0;
    for (this[i + w] = n & 255; --w >= 0 && (v *= 256); )
      n < 0 && B === 0 && this[i + w + 1] !== 0 && (B = 1), this[i + w] = (n / v >> 0) - B & 255;
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
  }, a.prototype.writeBigInt64LE = Be(function(n, i = 0) {
    return se(this, n, i, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), a.prototype.writeBigInt64BE = Be(function(n, i = 0) {
    return He(this, n, i, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function Qe(c, n, i, f, p, w) {
    if (i + f > c.length)
      throw new RangeError("Index out of range");
    if (i < 0)
      throw new RangeError("Index out of range");
  }
  function Ye(c, n, i, f, p) {
    return n = +n, i = i >>> 0, p || Qe(c, n, i, 4), r.write(c, n, i, f, 23, 4), i + 4;
  }
  a.prototype.writeFloatLE = function(n, i, f) {
    return Ye(this, n, i, !0, f);
  }, a.prototype.writeFloatBE = function(n, i, f) {
    return Ye(this, n, i, !1, f);
  };
  function ft(c, n, i, f, p) {
    return n = +n, i = i >>> 0, p || Qe(c, n, i, 8), r.write(c, n, i, f, 52, 8), i + 8;
  }
  a.prototype.writeDoubleLE = function(n, i, f) {
    return ft(this, n, i, !0, f);
  }, a.prototype.writeDoubleBE = function(n, i, f) {
    return ft(this, n, i, !1, f);
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
        const v = n.charCodeAt(0);
        (p === "utf8" && v < 128 || p === "latin1") && (n = v);
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
      const v = a.isBuffer(n) ? n : a.from(n, p), B = v.length;
      if (B === 0)
        throw new TypeError('The value "' + n + '" is invalid for argument "value"');
      for (w = 0; w < f - i; ++w)
        this[w + i] = v[w % B];
    }
    return this;
  };
  const Me = {};
  function et(c, n, i) {
    Me[c] = class extends i {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: n.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${c}]`, this.stack, delete this.name;
      }
      get code() {
        return c;
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
        return `${this.name} [${c}]: ${this.message}`;
      }
    };
  }
  et(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(c) {
      return c ? `${c} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), et(
    "ERR_INVALID_ARG_TYPE",
    function(c, n) {
      return `The "${c}" argument must be of type number. Received type ${typeof n}`;
    },
    TypeError
  ), et(
    "ERR_OUT_OF_RANGE",
    function(c, n, i) {
      let f = `The value of "${c}" is out of range.`, p = i;
      return Number.isInteger(i) && Math.abs(i) > 2 ** 32 ? p = tt(String(i)) : typeof i == "bigint" && (p = String(i), (i > BigInt(2) ** BigInt(32) || i < -(BigInt(2) ** BigInt(32))) && (p = tt(p)), p += "n"), f += ` It must be ${n}. Received ${p}`, f;
    },
    RangeError
  );
  function tt(c) {
    let n = "", i = c.length;
    const f = c[0] === "-" ? 1 : 0;
    for (; i >= f + 4; i -= 3)
      n = `_${c.slice(i - 3, i)}${n}`;
    return `${c.slice(0, i)}${n}`;
  }
  function vr(c, n, i) {
    Je(n, "offset"), (c[n] === void 0 || c[n + i] === void 0) && rt(n, c.length - (i + 1));
  }
  function Tt(c, n, i, f, p, w) {
    if (c > i || c < n) {
      const v = typeof n == "bigint" ? "n" : "";
      let B;
      throw w > 3 ? n === 0 || n === BigInt(0) ? B = `>= 0${v} and < 2${v} ** ${(w + 1) * 8}${v}` : B = `>= -(2${v} ** ${(w + 1) * 8 - 1}${v}) and < 2 ** ${(w + 1) * 8 - 1}${v}` : B = `>= ${n}${v} and <= ${i}${v}`, new Me.ERR_OUT_OF_RANGE("value", B, c);
    }
    vr(f, p, w);
  }
  function Je(c, n) {
    if (typeof c != "number")
      throw new Me.ERR_INVALID_ARG_TYPE(n, "number", c);
  }
  function rt(c, n, i) {
    throw Math.floor(c) !== c ? (Je(c, i), new Me.ERR_OUT_OF_RANGE(i || "offset", "an integer", c)) : n < 0 ? new Me.ERR_BUFFER_OUT_OF_BOUNDS() : new Me.ERR_OUT_OF_RANGE(
      i || "offset",
      `>= ${i ? 1 : 0} and <= ${n}`,
      c
    );
  }
  const dt = /[^+/0-9A-Za-z-_]/g;
  function pt(c) {
    if (c = c.split("=")[0], c = c.trim().replace(dt, ""), c.length < 2)
      return "";
    for (; c.length % 4 !== 0; )
      c = c + "=";
    return c;
  }
  function ht(c, n) {
    n = n || 1 / 0;
    let i;
    const f = c.length;
    let p = null;
    const w = [];
    for (let v = 0; v < f; ++v) {
      if (i = c.charCodeAt(v), i > 55295 && i < 57344) {
        if (!p) {
          if (i > 56319) {
            (n -= 3) > -1 && w.push(239, 191, 189);
            continue;
          } else if (v + 1 === f) {
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
  function Gt(c) {
    const n = [];
    for (let i = 0; i < c.length; ++i)
      n.push(c.charCodeAt(i) & 255);
    return n;
  }
  function mt(c, n) {
    let i, f, p;
    const w = [];
    for (let v = 0; v < c.length && !((n -= 2) < 0); ++v)
      i = c.charCodeAt(v), f = i >> 8, p = i % 256, w.push(p), w.push(f);
    return w;
  }
  function qt(c) {
    return t.toByteArray(pt(c));
  }
  function wt(c, n, i, f) {
    let p;
    for (p = 0; p < f && !(p + i >= n.length || p >= c.length); ++p)
      n[p + i] = c[p];
    return p;
  }
  function Ee(c, n) {
    return c instanceof n || c != null && c.constructor != null && c.constructor.name != null && c.constructor.name === n.name;
  }
  function Pt(c) {
    return c !== c;
  }
  const br = function() {
    const c = "0123456789abcdef", n = new Array(256);
    for (let i = 0; i < 16; ++i) {
      const f = i * 16;
      for (let p = 0; p < 16; ++p)
        n[f + p] = c[i] + c[p];
    }
    return n;
  }();
  function Be(c) {
    return typeof BigInt > "u" ? Ht : c;
  }
  function Ht() {
    throw new Error("BigInt not supported");
  }
})(mi);
var yi = { exports: {} }, le = yi.exports = {}, Ne, Fe;
function Br() {
  throw new Error("setTimeout has not been defined");
}
function Ar() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Ne = setTimeout : Ne = Br;
  } catch {
    Ne = Br;
  }
  try {
    typeof clearTimeout == "function" ? Fe = clearTimeout : Fe = Ar;
  } catch {
    Fe = Ar;
  }
})();
function gi(e) {
  if (Ne === setTimeout)
    return setTimeout(e, 0);
  if ((Ne === Br || !Ne) && setTimeout)
    return Ne = setTimeout, setTimeout(e, 0);
  try {
    return Ne(e, 0);
  } catch {
    try {
      return Ne.call(null, e, 0);
    } catch {
      return Ne.call(this, e, 0);
    }
  }
}
function ls(e) {
  if (Fe === clearTimeout)
    return clearTimeout(e);
  if ((Fe === Ar || !Fe) && clearTimeout)
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
var We = [], xt = !1, it, Qt = -1;
function fs() {
  !xt || !it || (xt = !1, it.length ? We = it.concat(We) : Qt = -1, We.length && vi());
}
function vi() {
  if (!xt) {
    var e = gi(fs);
    xt = !0;
    for (var t = We.length; t; ) {
      for (it = We, We = []; ++Qt < t; )
        it && it[Qt].run();
      Qt = -1, t = We.length;
    }
    it = null, xt = !1, ls(e);
  }
}
le.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      t[r - 1] = arguments[r];
  We.push(new bi(e, t)), We.length === 1 && !xt && gi(vi);
};
function bi(e, t) {
  this.fun = e, this.array = t;
}
bi.prototype.run = function() {
  this.fun.apply(null, this.array);
};
le.title = "browser";
le.browser = !0;
le.env = {};
le.argv = [];
le.version = "";
le.versions = {};
function qe() {
}
le.on = qe;
le.addListener = qe;
le.once = qe;
le.off = qe;
le.removeListener = qe;
le.removeAllListeners = qe;
le.emit = qe;
le.prependListener = qe;
le.prependOnceListener = qe;
le.listeners = function(e) {
  return [];
};
le.binding = function(e) {
  throw new Error("process.binding is not supported");
};
le.cwd = function() {
  return "/";
};
le.chdir = function(e) {
  throw new Error("process.chdir is not supported");
};
le.umask = function() {
  return 0;
};
var ds = yi.exports;
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = mi, r = ds, o = (u) => u && u.__esModule ? u : { default: u }, s = o(r), l = globalThis || void 0 || self;
  Object.defineProperty(e, "Buffer", { enumerable: !0, get: () => t.Buffer }), Object.defineProperty(e, "process", { enumerable: !0, get: () => s.default }), e.global = l;
})(we);
var Or = { exports: {} }, Ct = {};
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
function ps() {
  if (Bn)
    return Ct;
  Bn = 1;
  var e = fr, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(a, h, b) {
    var g, y = {}, E = null, I = null;
    b !== void 0 && (E = "" + b), h.key !== void 0 && (E = "" + h.key), h.ref !== void 0 && (I = h.ref);
    for (g in h)
      o.call(h, g) && !l.hasOwnProperty(g) && (y[g] = h[g]);
    if (a && a.defaultProps)
      for (g in h = a.defaultProps, h)
        y[g] === void 0 && (y[g] = h[g]);
    return { $$typeof: t, type: a, key: E, ref: I, props: y, _owner: s.current };
  }
  return Ct.Fragment = r, Ct.jsx = u, Ct.jsxs = u, Ct;
}
var kt = {}, An;
function hs() {
  return An || (An = 1, we.process.env.NODE_ENV !== "production" && function() {
    var e = fr, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), a = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), R = Symbol.iterator, P = "@@iterator";
    function Z(d) {
      if (d === null || typeof d != "object")
        return null;
      var x = R && d[R] || d[P];
      return typeof x == "function" ? x : null;
    }
    var L = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(d) {
      {
        for (var x = arguments.length, S = new Array(x > 1 ? x - 1 : 0), j = 1; j < x; j++)
          S[j - 1] = arguments[j];
        he("error", d, S);
      }
    }
    function he(d, x, S) {
      {
        var j = L.ReactDebugCurrentFrame, G = j.getStackAddendum();
        G !== "" && (x += "%s", S = S.concat([G]));
        var J = S.map(function(D) {
          return String(D);
        });
        J.unshift("Warning: " + x), Function.prototype.apply.call(console[d], console, J);
      }
    }
    var ce = !1, ie = !1, ye = !1, U = !1, xe = !1, ve;
    ve = Symbol.for("react.module.reference");
    function Ce(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === o || d === l || xe || d === s || d === b || d === g || U || d === I || ce || ie || ye || typeof d == "object" && d !== null && (d.$$typeof === E || d.$$typeof === y || d.$$typeof === u || d.$$typeof === a || d.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === ve || d.getModuleId !== void 0));
    }
    function Le(d, x, S) {
      var j = d.displayName;
      if (j)
        return j;
      var G = x.displayName || x.name || "";
      return G !== "" ? S + "(" + G + ")" : S;
    }
    function _(d) {
      return d.displayName || "Context";
    }
    function T(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
        case o:
          return "Fragment";
        case r:
          return "Portal";
        case l:
          return "Profiler";
        case s:
          return "StrictMode";
        case b:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case a:
            var x = d;
            return _(x) + ".Consumer";
          case u:
            var S = d;
            return _(S._context) + ".Provider";
          case h:
            return Le(d, d.render, "ForwardRef");
          case y:
            var j = d.displayName || null;
            return j !== null ? j : T(d.type) || "Memo";
          case E: {
            var G = d, J = G._payload, D = G._init;
            try {
              return T(D(J));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, M = 0, k, F, V, q, oe, $, W;
    function se() {
    }
    se.__reactDisabledLog = !0;
    function He() {
      {
        if (M === 0) {
          k = console.log, F = console.info, V = console.warn, q = console.error, oe = console.group, $ = console.groupCollapsed, W = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: se,
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
        M++;
      }
    }
    function Qe() {
      {
        if (M--, M === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, d, {
              value: k
            }),
            info: C({}, d, {
              value: F
            }),
            warn: C({}, d, {
              value: V
            }),
            error: C({}, d, {
              value: q
            }),
            group: C({}, d, {
              value: oe
            }),
            groupCollapsed: C({}, d, {
              value: $
            }),
            groupEnd: C({}, d, {
              value: W
            })
          });
        }
        M < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ye = L.ReactCurrentDispatcher, ft;
    function Me(d, x, S) {
      {
        if (ft === void 0)
          try {
            throw Error();
          } catch (G) {
            var j = G.stack.trim().match(/\n( *(at )?)/);
            ft = j && j[1] || "";
          }
        return `
` + ft + d;
      }
    }
    var et = !1, tt;
    {
      var vr = typeof WeakMap == "function" ? WeakMap : Map;
      tt = new vr();
    }
    function Tt(d, x) {
      if (!d || et)
        return "";
      {
        var S = tt.get(d);
        if (S !== void 0)
          return S;
      }
      var j;
      et = !0;
      var G = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var J;
      J = Ye.current, Ye.current = null, He();
      try {
        if (x) {
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
            } catch (Ve) {
              j = Ve;
            }
            Reflect.construct(d, [], D);
          } else {
            try {
              D.call();
            } catch (Ve) {
              j = Ve;
            }
            d.call(D.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ve) {
            j = Ve;
          }
          d();
        }
      } catch (Ve) {
        if (Ve && j && typeof Ve.stack == "string") {
          for (var O = Ve.stack.split(`
`), be = j.stack.split(`
`), ue = O.length - 1, fe = be.length - 1; ue >= 1 && fe >= 0 && O[ue] !== be[fe]; )
            fe--;
          for (; ue >= 1 && fe >= 0; ue--, fe--)
            if (O[ue] !== be[fe]) {
              if (ue !== 1 || fe !== 1)
                do
                  if (ue--, fe--, fe < 0 || O[ue] !== be[fe]) {
                    var ke = `
` + O[ue].replace(" at new ", " at ");
                    return d.displayName && ke.includes("<anonymous>") && (ke = ke.replace("<anonymous>", d.displayName)), typeof d == "function" && tt.set(d, ke), ke;
                  }
                while (ue >= 1 && fe >= 0);
              break;
            }
        }
      } finally {
        et = !1, Ye.current = J, Qe(), Error.prepareStackTrace = G;
      }
      var gt = d ? d.displayName || d.name : "", Mn = gt ? Me(gt) : "";
      return typeof d == "function" && tt.set(d, Mn), Mn;
    }
    function Je(d, x, S) {
      return Tt(d, !1);
    }
    function rt(d) {
      var x = d.prototype;
      return !!(x && x.isReactComponent);
    }
    function dt(d, x, S) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return Tt(d, rt(d));
      if (typeof d == "string")
        return Me(d);
      switch (d) {
        case b:
          return Me("Suspense");
        case g:
          return Me("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case h:
            return Je(d.render);
          case y:
            return dt(d.type, x, S);
          case E: {
            var j = d, G = j._payload, J = j._init;
            try {
              return dt(J(G), x, S);
            } catch {
            }
          }
        }
      return "";
    }
    var pt = Object.prototype.hasOwnProperty, ht = {}, Gt = L.ReactDebugCurrentFrame;
    function mt(d) {
      if (d) {
        var x = d._owner, S = dt(d.type, d._source, x ? x.type : null);
        Gt.setExtraStackFrame(S);
      } else
        Gt.setExtraStackFrame(null);
    }
    function qt(d, x, S, j, G) {
      {
        var J = Function.call.bind(pt);
        for (var D in d)
          if (J(d, D)) {
            var O = void 0;
            try {
              if (typeof d[D] != "function") {
                var be = Error((j || "React class") + ": " + S + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw be.name = "Invariant Violation", be;
              }
              O = d[D](x, D, j, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ue) {
              O = ue;
            }
            O && !(O instanceof Error) && (mt(G), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", S, D, typeof O), mt(null)), O instanceof Error && !(O.message in ht) && (ht[O.message] = !0, mt(G), A("Failed %s type: %s", S, O.message), mt(null));
          }
      }
    }
    var wt = Array.isArray;
    function Ee(d) {
      return wt(d);
    }
    function Pt(d) {
      {
        var x = typeof Symbol == "function" && Symbol.toStringTag, S = x && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return S;
      }
    }
    function br(d) {
      try {
        return Be(d), !1;
      } catch {
        return !0;
      }
    }
    function Be(d) {
      return "" + d;
    }
    function Ht(d) {
      if (br(d))
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pt(d)), Be(d);
    }
    var c = L.ReactCurrentOwner, n = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, i, f, p;
    p = {};
    function w(d) {
      if (pt.call(d, "ref")) {
        var x = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function v(d) {
      if (pt.call(d, "key")) {
        var x = Object.getOwnPropertyDescriptor(d, "key").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function B(d, x) {
      if (typeof d.ref == "string" && c.current && x && c.current.stateNode !== x) {
        var S = T(c.current.type);
        p[S] || (A('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(c.current.type), d.ref), p[S] = !0);
      }
    }
    function re(d, x) {
      {
        var S = function() {
          i || (i = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        S.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: S,
          configurable: !0
        });
      }
    }
    function K(d, x) {
      {
        var S = function() {
          f || (f = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        S.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: S,
          configurable: !0
        });
      }
    }
    var ne = function(d, x, S, j, G, J, D) {
      var O = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: d,
        key: x,
        ref: S,
        props: D,
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
        value: j
      }), Object.defineProperty(O, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: G
      }), Object.freeze && (Object.freeze(O.props), Object.freeze(O)), O;
    };
    function H(d, x, S, j, G) {
      {
        var J, D = {}, O = null, be = null;
        S !== void 0 && (Ht(S), O = "" + S), v(x) && (Ht(x.key), O = "" + x.key), w(x) && (be = x.ref, B(x, G));
        for (J in x)
          pt.call(x, J) && !n.hasOwnProperty(J) && (D[J] = x[J]);
        if (d && d.defaultProps) {
          var ue = d.defaultProps;
          for (J in ue)
            D[J] === void 0 && (D[J] = ue[J]);
        }
        if (O || be) {
          var fe = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          O && re(D, fe), be && K(D, fe);
        }
        return ne(d, O, be, G, j, c.current, D);
      }
    }
    var xr = L.ReactCurrentOwner, Pn = L.ReactDebugCurrentFrame;
    function yt(d) {
      if (d) {
        var x = d._owner, S = dt(d.type, d._source, x ? x.type : null);
        Pn.setExtraStackFrame(S);
      } else
        Pn.setExtraStackFrame(null);
    }
    var Er;
    Er = !1;
    function Sr(d) {
      return typeof d == "object" && d !== null && d.$$typeof === t;
    }
    function Cn() {
      {
        if (xr.current) {
          var d = T(xr.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function Bo(d) {
      {
        if (d !== void 0) {
          var x = d.fileName.replace(/^.*[\\\/]/, ""), S = d.lineNumber;
          return `

Check your code at ` + x + ":" + S + ".";
        }
        return "";
      }
    }
    var kn = {};
    function Ao(d) {
      {
        var x = Cn();
        if (!x) {
          var S = typeof d == "string" ? d : d.displayName || d.name;
          S && (x = `

Check the top-level render call using <` + S + ">.");
        }
        return x;
      }
    }
    function jn(d, x) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var S = Ao(x);
        if (kn[S])
          return;
        kn[S] = !0;
        var j = "";
        d && d._owner && d._owner !== xr.current && (j = " It was passed a child from " + T(d._owner.type) + "."), yt(d), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', S, j), yt(null);
      }
    }
    function Rn(d, x) {
      {
        if (typeof d != "object")
          return;
        if (Ee(d))
          for (var S = 0; S < d.length; S++) {
            var j = d[S];
            Sr(j) && jn(j, x);
          }
        else if (Sr(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var G = Z(d);
          if (typeof G == "function" && G !== d.entries)
            for (var J = G.call(d), D; !(D = J.next()).done; )
              Sr(D.value) && jn(D.value, x);
        }
      }
    }
    function Oo(d) {
      {
        var x = d.type;
        if (x == null || typeof x == "string")
          return;
        var S;
        if (typeof x == "function")
          S = x.propTypes;
        else if (typeof x == "object" && (x.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        x.$$typeof === y))
          S = x.propTypes;
        else
          return;
        if (S) {
          var j = T(x);
          qt(S, d.props, "prop", j, d);
        } else if (x.PropTypes !== void 0 && !Er) {
          Er = !0;
          var G = T(x);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", G || "Unknown");
        }
        typeof x.getDefaultProps == "function" && !x.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function No(d) {
      {
        for (var x = Object.keys(d.props), S = 0; S < x.length; S++) {
          var j = x[S];
          if (j !== "children" && j !== "key") {
            yt(d), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), yt(null);
            break;
          }
        }
        d.ref !== null && (yt(d), A("Invalid attribute `ref` supplied to `React.Fragment`."), yt(null));
      }
    }
    function Ln(d, x, S, j, G, J) {
      {
        var D = Ce(d);
        if (!D) {
          var O = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (O += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var be = Bo(G);
          be ? O += be : O += Cn();
          var ue;
          d === null ? ue = "null" : Ee(d) ? ue = "array" : d !== void 0 && d.$$typeof === t ? (ue = "<" + (T(d.type) || "Unknown") + " />", O = " Did you accidentally export a JSX literal instead of a component?") : ue = typeof d, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ue, O);
        }
        var fe = H(d, x, S, G, J);
        if (fe == null)
          return fe;
        if (D) {
          var ke = x.children;
          if (ke !== void 0)
            if (j)
              if (Ee(ke)) {
                for (var gt = 0; gt < ke.length; gt++)
                  Rn(ke[gt], d);
                Object.freeze && Object.freeze(ke);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Rn(ke, d);
        }
        return d === o ? No(fe) : Oo(fe), fe;
      }
    }
    function Fo(d, x, S) {
      return Ln(d, x, S, !0);
    }
    function Do(d, x, S) {
      return Ln(d, x, S, !1);
    }
    var Uo = Do, $o = Fo;
    kt.Fragment = o, kt.jsx = Uo, kt.jsxs = $o;
  }()), kt;
}
we.process.env.NODE_ENV === "production" ? Or.exports = ps() : Or.exports = hs();
var m = Or.exports;
var At = {}, jt = Go;
if (we.process.env.NODE_ENV === "production")
  At.createRoot = jt.createRoot, At.hydrateRoot = jt.hydrateRoot;
else {
  var Yt = jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  At.createRoot = function(e, t) {
    Yt.usingClientEntryPoint = !0;
    try {
      return jt.createRoot(e, t);
    } finally {
      Yt.usingClientEntryPoint = !1;
    }
  }, At.hydrateRoot = function(e, t, r) {
    Yt.usingClientEntryPoint = !0;
    try {
      return jt.hydrateRoot(e, t, r);
    } finally {
      Yt.usingClientEntryPoint = !1;
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
function ms(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function On(e, t) {
  for (var r = 0; r < t.length; r++) {
    var o = t[r];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
  }
}
function ws(e, t, r) {
  return t && On(e.prototype, t), r && On(e, r), e;
}
function ys(e, t) {
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
function gs(e, t) {
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
var xi = /* @__PURE__ */ function(e) {
  gs(t, e);
  function t() {
    var r, o;
    ms(this, t);
    for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++)
      l[u] = arguments[u];
    return o = ys(this, (r = Nr(t)).call.apply(r, [this].concat(l))), rr(tr(o), "state", {
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
  return ws(t, [{
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
      return we.process.env.NODE_ENV !== "production" && typeof this.props.children == "function" && this.props.loading && console.error("redux-persist: PersistGate expects either a function child or loading prop, but not both. The loading prop will be ignored."), typeof this.props.children == "function" ? this.props.children(this.state.bootstrapped) : this.state.bootstrapped ? this.props.children : this.props.loading;
    }
  }]), t;
}(zo);
rr(xi, "defaultProps", {
  children: null,
  loading: null
});
var ge = /* @__PURE__ */ ((e) => (e.text = "text", e.buttons = "buttons", e.payment = "payment", e.video = "video", e.image = "image", e.email = "email", e))(ge || {}), rn = /* @__PURE__ */ ((e) => (e.horizontal = "horizontal", e.vertical = "vertical", e))(rn || {}), Ei = /* @__PURE__ */ ((e) => (e.chat = "utm_chat", e))(Ei || {}), Se = /* @__PURE__ */ ((e) => (e.addToCart = "AddToCart", e.contact = "Contact", e.initiateCheckout = "InitiateCheckout", e.pageView = "PageView", e.viewContent = "ViewContent", e.purchase = "Purchase", e.subscribe = "Subscribe", e.recurringSubscriptionPayment = "RecurringSubscriptionPayment", e.cancelSubscription = "CancelSubscription", e.purchaseFailed = "PurchaseFailed", e.subscribeFailed = "SubscribeFailed", e.recurringSubscriptionPaymentFailed = "RecurringSubscriptionPaymentFailed", e.customerCreated = "CustomerCreated", e.subscriptionChargeback = "SubscriptionChargeback", e.subscriptionRefund = "SubscriptionRefund", e.transactionChargeback = "TransactionChargeback", e.transactionRefund = "TransactionRefund", e.firstMessage = "FirstMessage", e.linkProvided = "LinkProvided", e.linkClicked = "LinkClicked", e.emailField = "EmailField", e.emailEntered = "EmailEntered", e.emailWrong = "EmailWrong", e.emailExist = "EmailExist", e.priceSeen = "PriceSeen", e.buttonClick = "ButtonClick", e.closeClicked = "CloseClicked", e))(Se || {}), Si = /* @__PURE__ */ ((e) => (e.email = "email_intent", e.payment = "payment_intent", e.emailError = "email_validation_error", e.emailSuccess = "email_validation_success", e.destroy = "payment_intent_destroy", e))(Si || {}), X = /* @__PURE__ */ ((e) => (e.user = "user", e.assistant = "assistant", e))(X || {}), je = /* @__PURE__ */ ((e) => (e.chat = "chat", e.chatHistory = "chat-history", e.connect = "connect", e.error = "error", e.disconnect = "disconnect", e.streamStart = "stream-start", e.streamData = "stream-data", e.streamEnd = "stream-end", e.streamError = "stream-error", e))(je || {}), _i = /* @__PURE__ */ ((e) => (e.light = "light", e.dark = "dark", e))(_i || {});
const ee = (e = Ei.chat) => new URLSearchParams(window.location.search).get(e) || "", vs = {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric"
};
function bs(e, t = vs) {
  return `${new Date(e).toLocaleDateString([], t)}`.toUpperCase();
}
function pe() {
  const e = new Array(36);
  for (let t = 0; t < 36; t++)
    e[t] = Math.floor(Math.random() * 16);
  return e[14] = 4, e[19] = e[19] &= -5, e[19] = e[19] |= 8, e[8] = e[13] = e[18] = e[23] = "-", e.map((t) => t.toString(16)).join("");
}
const Nn = (e) => {
  const r = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))((\w|-){11})(?:\S+)?$/gm.exec(e);
  let o;
  return r && (o = r[1]), o || "";
}, bt = {
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
  themeId: _i.light,
  chatUrl: "",
  enableDevTools: !1,
  isPluginMode: !1,
  purpose: "default",
  specialUrls: {},
  mediaModal: {
    isVisible: !1,
    code: "",
    image: "",
    title: ""
  }
}, Jt = {
  outgoing: {
    term: "",
    user_id: "",
    role: X.user,
    message: ""
  },
  error: "",
  isLoading: !1,
  typingTimeoutExpired: !1,
  lastGroupId: pe(),
  connected: !1,
  closed: !1,
  isStreaming: !1,
  record: {},
  thread: {}
}, xs = {
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
}, Ii = dr({
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
    },
    setMediaModal(e, { payload: { isVisible: t, code: r, title: o, image: s } }) {
      e.mediaModal = { isVisible: t, code: r, title: o, image: s };
    },
    resetMediaModal(e) {
      e.mediaModal = Ae.mediaModal;
    }
  }
}), ut = (e) => e.config, {
  setConfig: Ti,
  resetConfig: Yl,
  setTheme: Jl,
  resetTheme: Kl,
  setDevToolsStatus: Xl,
  resetDevToolsStatus: Zl,
  togglePluginMode: Ql,
  setTranslations: ef,
  setPurpose: Es,
  setSpecialUrls: Ss,
  setMediaModal: _s,
  resetMediaModal: Is
} = Ii.actions, Ts = Ii.reducer, Pi = dr({
  name: "meta",
  initialState: bt,
  reducers: {
    setMeta(e, { payload: t }) {
      e.cid = t.cid, e.eid = t.eid, e.systemType = t.systemType, e.pd = { ...e.pd, ...t.pd }, e.marketing = { ...e.marketing, ...t.marketing };
    },
    resetMeta(e) {
      e.pd = bt.pd, e.cid = bt.cid, e.eid = bt.eid, e.systemType = bt.systemType, e.marketing = bt.marketing;
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
}), $t = (e) => e.meta, { setMeta: Ps, resetMeta: tf, setMarketing: Cs, setPd: ks, setRegion: js } = Pi.actions, Rs = Pi.reducer, ze = qo, z = Ho, Ls = () => {
  const [e, t] = Nt([0, 0]);
  return Vo(() => {
    function r() {
      t([window.innerWidth, window.innerHeight]);
    }
    return window.addEventListener("resize", r), r(), () => window.removeEventListener("resize", r);
  }, []), e;
}, Ms = () => {
  const { themeId: e, close: t } = z(ut), { cid: r, systemType: o, marketing: s } = z($t);
  return {
    theme: e,
    closeVisible: t.visible,
    cid: r,
    systemType: o,
    marketing: s
  };
}, Bs = ({ children: e, onClose: t }) => /* @__PURE__ */ m.jsx("div", { onClick: t, className: "tw--fixed tw--top-0 tw--left-0 tw--w-screen tw--h-screen tw--z-[9999] tw--bg-overlay", children: e });
var Fn = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, _e = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, As = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function Ci(e, t) {
  e.forEach(function(r) {
    Array.isArray(r) ? Ci(r, t) : t.push(r);
  });
}
function ki(e) {
  let t = [];
  return Ci(e, t), t;
}
var ji = (...e) => ki(e).filter(Boolean), Ri = (e, t) => {
  let r = {}, o = Object.keys(e), s = Object.keys(t);
  for (let l of o)
    if (s.includes(l)) {
      let u = e[l], a = t[l];
      typeof u == "object" && typeof a == "object" ? r[l] = Ri(u, a) : Array.isArray(u) || Array.isArray(a) ? r[l] = ji(a, u) : r[l] = a + " " + u;
    } else
      r[l] = e[l];
  for (let l of s)
    o.includes(l) || (r[l] = t[l]);
  return r;
}, Dn = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
function Os() {
  for (var e = 0, t, r, o = ""; e < arguments.length; )
    (t = arguments[e++]) && (r = Li(t)) && (o && (o += " "), o += r);
  return o;
}
function Li(e) {
  if (typeof e == "string")
    return e;
  for (var t, r = "", o = 0; o < e.length; o++)
    e[o] && (t = Li(e[o])) && (r && (r += " "), r += t);
  return r;
}
var nn = "-";
function Ns(e) {
  var t = Ds(e), r = e.conflictingClassGroups, o = e.conflictingClassGroupModifiers, s = o === void 0 ? {} : o;
  function l(a) {
    var h = a.split(nn);
    return h[0] === "" && h.length !== 1 && h.shift(), Mi(h, t) || Fs(a);
  }
  function u(a, h) {
    var b = r[a] || [];
    return h && s[a] ? [].concat(b, s[a]) : b;
  }
  return {
    getClassGroupId: l,
    getConflictingClassGroupIds: u
  };
}
function Mi(e, t) {
  var u;
  if (e.length === 0)
    return t.classGroupId;
  var r = e[0], o = t.nextPart.get(r), s = o ? Mi(e.slice(1), o) : void 0;
  if (s)
    return s;
  if (t.validators.length !== 0) {
    var l = e.join(nn);
    return (u = t.validators.find(function(a) {
      var h = a.validator;
      return h(l);
    })) == null ? void 0 : u.classGroupId;
  }
}
var Un = /^\[(.+)\]$/;
function Fs(e) {
  if (Un.test(e)) {
    var t = Un.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function Ds(e) {
  var t = e.theme, r = e.prefix, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, s = $s(Object.entries(e.classGroups), r);
  return s.forEach(function(l) {
    var u = l[0], a = l[1];
    Dr(a, o, u, t);
  }), o;
}
function Dr(e, t, r, o) {
  e.forEach(function(s) {
    if (typeof s == "string") {
      var l = s === "" ? t : $n(t, s);
      l.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (Us(s)) {
        Dr(s(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: r
      });
      return;
    }
    Object.entries(s).forEach(function(u) {
      var a = u[0], h = u[1];
      Dr(h, $n(t, a), r, o);
    });
  });
}
function $n(e, t) {
  var r = e;
  return t.split(nn).forEach(function(o) {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}
function Us(e) {
  return e.isThemeGetter;
}
function $s(e, t) {
  return t ? e.map(function(r) {
    var o = r[0], s = r[1], l = s.map(function(u) {
      return typeof u == "string" ? t + u : typeof u == "object" ? Object.fromEntries(Object.entries(u).map(function(a) {
        var h = a[0], b = a[1];
        return [t + h, b];
      })) : u;
    });
    return [o, l];
  }) : e;
}
function zs(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  function s(l, u) {
    r.set(l, u), t++, t > e && (t = 0, o = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get: function(u) {
      var a = r.get(u);
      if (a !== void 0)
        return a;
      if ((a = o.get(u)) !== void 0)
        return s(u, a), a;
    },
    set: function(u, a) {
      r.has(u) ? r.set(u, a) : s(u, a);
    }
  };
}
var Bi = "!";
function Vs(e) {
  var t = e.separator || ":", r = t.length === 1, o = t[0], s = t.length;
  return function(u) {
    for (var a = [], h = 0, b = 0, g, y = 0; y < u.length; y++) {
      var E = u[y];
      if (h === 0) {
        if (E === o && (r || u.slice(y, y + s) === t)) {
          a.push(u.slice(b, y)), b = y + s;
          continue;
        }
        if (E === "/") {
          g = y;
          continue;
        }
      }
      E === "[" ? h++ : E === "]" && h--;
    }
    var I = a.length === 0 ? u : u.substring(b), R = I.startsWith(Bi), P = R ? I.substring(1) : I, Z = g && g > b ? g - b : void 0;
    return {
      modifiers: a,
      hasImportantModifier: R,
      baseClassName: P,
      maybePostfixModifierPosition: Z
    };
  };
}
function Ws(e) {
  if (e.length <= 1)
    return e;
  var t = [], r = [];
  return e.forEach(function(o) {
    var s = o[0] === "[";
    s ? (t.push.apply(t, r.sort().concat([o])), r = []) : r.push(o);
  }), t.push.apply(t, r.sort()), t;
}
function Gs(e) {
  return {
    cache: zs(e.cacheSize),
    splitModifiers: Vs(e),
    ...Ns(e)
  };
}
var qs = /\s+/;
function Hs(e, t) {
  var r = t.splitModifiers, o = t.getClassGroupId, s = t.getConflictingClassGroupIds, l = /* @__PURE__ */ new Set();
  return e.trim().split(qs).map(function(u) {
    var a = r(u), h = a.modifiers, b = a.hasImportantModifier, g = a.baseClassName, y = a.maybePostfixModifierPosition, E = o(y ? g.substring(0, y) : g), I = !!y;
    if (!E) {
      if (!y)
        return {
          isTailwindClass: !1,
          originalClassName: u
        };
      if (E = o(g), !E)
        return {
          isTailwindClass: !1,
          originalClassName: u
        };
      I = !1;
    }
    var R = Ws(h).join(":"), P = b ? R + Bi : R;
    return {
      isTailwindClass: !0,
      modifierId: P,
      classGroupId: E,
      originalClassName: u,
      hasPostfixModifier: I
    };
  }).reverse().filter(function(u) {
    if (!u.isTailwindClass)
      return !0;
    var a = u.modifierId, h = u.classGroupId, b = u.hasPostfixModifier, g = a + h;
    return l.has(g) ? !1 : (l.add(g), s(h, b).forEach(function(y) {
      return l.add(a + y);
    }), !0);
  }).reverse().map(function(u) {
    return u.originalClassName;
  }).join(" ");
}
function Ur() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var o, s, l, u = a;
  function a(b) {
    var g = t[0], y = t.slice(1), E = y.reduce(function(I, R) {
      return R(I);
    }, g());
    return o = Gs(E), s = o.cache.get, l = o.cache.set, u = h, h(b);
  }
  function h(b) {
    var g = s(b);
    if (g)
      return g;
    var y = Hs(b, o);
    return l(b, y), y;
  }
  return function() {
    return u(Os.apply(null, arguments));
  };
}
function Q(e) {
  var t = function(o) {
    return o[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var Ai = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ys = /^\d+\/\d+$/, Js = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ks = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Xs = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Zs = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Oe(e) {
  return ot(e) || Js.has(e) || Ys.test(e) || $r(e);
}
function $r(e) {
  return lt(e, "length", ia);
}
function Qs(e) {
  return lt(e, "size", Oi);
}
function ea(e) {
  return lt(e, "position", Oi);
}
function ta(e) {
  return lt(e, "url", oa);
}
function Kt(e) {
  return lt(e, "number", ot);
}
function ot(e) {
  return !Number.isNaN(Number(e));
}
function ra(e) {
  return e.endsWith("%") && ot(e.slice(0, -1));
}
function Rt(e) {
  return zn(e) || lt(e, "number", zn);
}
function N(e) {
  return Ai.test(e);
}
function Lt() {
  return !0;
}
function Ke(e) {
  return Ks.test(e);
}
function na(e) {
  return lt(e, "", sa);
}
function lt(e, t, r) {
  var o = Ai.exec(e);
  return o ? o[1] ? o[1] === t : r(o[2]) : !1;
}
function ia(e) {
  return Xs.test(e);
}
function Oi() {
  return !1;
}
function oa(e) {
  return e.startsWith("url(");
}
function zn(e) {
  return Number.isInteger(Number(e));
}
function sa(e) {
  return Zs.test(e);
}
function zr() {
  var e = Q("colors"), t = Q("spacing"), r = Q("blur"), o = Q("brightness"), s = Q("borderColor"), l = Q("borderRadius"), u = Q("borderSpacing"), a = Q("borderWidth"), h = Q("contrast"), b = Q("grayscale"), g = Q("hueRotate"), y = Q("invert"), E = Q("gap"), I = Q("gradientColorStops"), R = Q("gradientColorStopPositions"), P = Q("inset"), Z = Q("margin"), L = Q("opacity"), A = Q("padding"), he = Q("saturate"), ce = Q("scale"), ie = Q("sepia"), ye = Q("skew"), U = Q("space"), xe = Q("translate"), ve = function() {
    return ["auto", "contain", "none"];
  }, Ce = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, Le = function() {
    return ["auto", N, t];
  }, _ = function() {
    return [N, t];
  }, T = function() {
    return ["", Oe];
  }, C = function() {
    return ["auto", ot, N];
  }, M = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, k = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, F = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, V = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, q = function() {
    return ["", "0", N];
  }, oe = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, $ = function() {
    return [ot, Kt];
  }, W = function() {
    return [ot, N];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Lt],
      spacing: [Oe],
      blur: ["none", "", Ke, N],
      brightness: $(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Ke, N],
      borderSpacing: _(),
      borderWidth: T(),
      contrast: $(),
      grayscale: q(),
      hueRotate: W(),
      invert: q(),
      gap: _(),
      gradientColorStops: [e],
      gradientColorStopPositions: [ra, $r],
      inset: Le(),
      margin: Le(),
      opacity: $(),
      padding: _(),
      saturate: $(),
      scale: $(),
      sepia: q(),
      skew: W(),
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
        columns: [Ke]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": oe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": oe()
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
        object: [].concat(M(), [N])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Ce()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Ce()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Ce()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: ve()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": ve()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": ve()
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
        z: ["auto", Rt]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: Le()
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
        order: ["first", "last", "none", Rt]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Lt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Rt]
        }, N]
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
        "grid-rows": [Lt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Rt]
        }, N]
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
        p: [A]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [A]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [A]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [A]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [A]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [A]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [A]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [A]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [A]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [Z]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [Z]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [Z]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [Z]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [Z]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [Z]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [Z]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [Z]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [Z]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [U]
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
        "space-y": [U]
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
        "min-w": ["min", "max", "fit", N, Oe]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [Ke]
        }, Ke, N]
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
        "min-h": ["min", "max", "fit", N, Oe]
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
        text: ["base", Ke, $r]
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
        font: [Lt]
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
        "line-clamp": ["none", ot, Kt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", N, Oe]
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
        "placeholder-opacity": [L]
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
        "text-opacity": [L]
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
        decoration: [].concat(k(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Oe]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", N, Oe]
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
        "bg-opacity": [L]
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
        bg: [].concat(M(), [ea])
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
        bg: ["auto", "cover", "contain", Qs]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ta]
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
        from: [R]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [R]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [R]
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
        rounded: [l]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [l]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [l]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [l]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [l]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [l]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [l]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [l]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [l]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [l]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [l]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [l]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [l]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [l]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [l]
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
        "border-opacity": [L]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(k(), ["hidden"])
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
        "divide-opacity": [L]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: k()
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
        outline: [""].concat(k())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [N, Oe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Oe]
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
        ring: T()
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
        "ring-opacity": [L]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Oe]
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
        shadow: ["", "inner", "none", Ke, na]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Lt]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [L]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": F()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": F()
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
        "drop-shadow": ["", "none", Ke, N]
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
        "hue-rotate": [g]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [y]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [he]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [ie]
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
        "backdrop-hue-rotate": [g]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [y]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [L]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [he]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [ie]
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
        "border-spacing": [u]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [u]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [u]
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
        scale: [ce]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [ce]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [ce]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Rt, N]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [xe]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [xe]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [ye]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [ye]
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
        stroke: [Oe, Kt]
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
function aa(e, t) {
  for (var r in t)
    Ni(e, r, t[r]);
  return e;
}
var ca = Object.prototype.hasOwnProperty, ua = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function Ni(e, t, r) {
  if (!ca.call(e, t) || ua.has(typeof r) || r === null) {
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
      Ni(e[t], o, r[o]);
  }
}
function la(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    r[o - 1] = arguments[o];
  return typeof e == "function" ? Ur.apply(void 0, [zr, e].concat(r)) : Ur.apply(void 0, [function() {
    return aa(zr(), e);
  }].concat(r));
}
var fa = /* @__PURE__ */ Ur(zr), da = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, Fi = (e) => e || void 0, Ft = (...e) => Fi(ki(e).filter(Boolean).join(" ")), Ir = null, or = {}, Vr = !1, Mt = (...e) => (t) => t.twMerge ? ((!Ir || Vr) && (Vr = !1, Ir = _e(or) ? fa : la(or)), Fi(Ir(Ft(e)))) : Ft(e), Vn = (e, t) => {
  for (let r in t)
    e.hasOwnProperty(r) ? e[r] = Ft(e[r], t[r]) : e[r] = t[r];
  return e;
}, ae = (e, t) => {
  let { extend: r = null, slots: o = {}, variants: s = {}, compoundVariants: l = [], compoundSlots: u = [], defaultVariants: a = {} } = e, h = { ...da, ...t }, b = r != null && r.base ? Ft(r.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, g = r != null && r.variants && !_e(r.variants) ? Ri(s, r.variants) : s, y = r != null && r.defaultVariants && !_e(r.defaultVariants) ? { ...r.defaultVariants, ...a } : a;
  !_e(h.twMergeConfig) && !As(h.twMergeConfig, or) && (Vr = !0, or = h.twMergeConfig);
  let E = _e(r == null ? void 0 : r.slots), I = _e(o) ? {} : { base: Ft(e == null ? void 0 : e.base, E && (r == null ? void 0 : r.base)), ...o }, R = E ? I : Vn({ ...r == null ? void 0 : r.slots }, _e(I) ? { base: e == null ? void 0 : e.base } : I), P = (L) => {
    if (_e(g) && _e(o) && E)
      return Mt(b, L == null ? void 0 : L.class, L == null ? void 0 : L.className)(h);
    if (l && !Array.isArray(l))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof l}`);
    if (u && !Array.isArray(u))
      throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof u}`);
    let A = (_, T, C = [], M) => {
      let k = C;
      if (typeof T == "string")
        k = k.concat(Dn(T).split(" ").map((F) => `${_}:${F}`));
      else if (Array.isArray(T))
        k = k.concat(T.reduce((F, V) => F.concat(`${_}:${V}`), []));
      else if (typeof T == "object" && typeof M == "string") {
        for (let F in T)
          if (T.hasOwnProperty(F) && F === M) {
            let V = T[F];
            if (V && typeof V == "string") {
              let q = Dn(V);
              k[M] ? k[M] = k[M].concat(q.split(" ").map((oe) => `${_}:${oe}`)) : k[M] = q.split(" ").map((oe) => `${_}:${oe}`);
            } else
              Array.isArray(V) && V.length > 0 && (k[M] = V.reduce((q, oe) => q.concat(`${_}:${oe}`), []));
          }
      }
      return k;
    }, he = (_, T = g, C = null, M = null) => {
      var k;
      let F = T[_];
      if (!F || _e(F))
        return null;
      let V = (k = M == null ? void 0 : M[_]) != null ? k : L == null ? void 0 : L[_];
      if (V === null)
        return null;
      let q = Fn(V), oe = Array.isArray(h.responsiveVariants) && h.responsiveVariants.length > 0 || h.responsiveVariants === !0, $ = y == null ? void 0 : y[_], W = [];
      if (typeof q == "object" && oe)
        for (let [He, Qe] of Object.entries(q)) {
          let Ye = F[Qe];
          if (He === "initial") {
            $ = Qe;
            continue;
          }
          Array.isArray(h.responsiveVariants) && !h.responsiveVariants.includes(He) || (W = A(He, Ye, W, C));
        }
      let se = F[q] || F[Fn($)];
      return typeof W == "object" && typeof C == "string" && W[C] ? Vn(W, se) : W.length > 0 ? (W.push(se), W) : se;
    }, ce = () => g ? Object.keys(g).map((_) => he(_, g)) : null, ie = (_, T) => {
      if (!g || typeof g != "object")
        return null;
      let C = new Array();
      for (let M in g) {
        let k = he(M, g, _, T), F = _ === "base" && typeof k == "string" ? k : k && k[_];
        F && (C[C.length] = F);
      }
      return C;
    }, ye = {};
    for (let _ in L)
      L[_] !== void 0 && (ye[_] = L[_]);
    let U = (_, T) => {
      var C;
      let M = typeof (L == null ? void 0 : L[_]) == "object" ? { [_]: (C = L[_]) == null ? void 0 : C.initial } : {};
      return { ...y, ...ye, ...M, ...T };
    }, xe = (_ = [], T) => {
      let C = [];
      for (let { class: M, className: k, ...F } of _) {
        let V = !0;
        for (let [q, oe] of Object.entries(F)) {
          let $ = U(q, T);
          if (Array.isArray(oe)) {
            if (!oe.includes($[q])) {
              V = !1;
              break;
            }
          } else if ($[q] !== oe) {
            V = !1;
            break;
          }
        }
        V && (M && C.push(M), k && C.push(k));
      }
      return C;
    }, ve = (_) => {
      let T = xe(l, _), C = xe(r == null ? void 0 : r.compoundVariants, _);
      return ji(C, T);
    }, Ce = (_) => {
      let T = ve(_);
      if (!Array.isArray(T))
        return T;
      let C = {};
      for (let M of T)
        if (typeof M == "string" && (C.base = Mt(C.base, M)(h)), typeof M == "object")
          for (let [k, F] of Object.entries(M))
            C[k] = Mt(C[k], F)(h);
      return C;
    }, Le = (_) => {
      if (u.length < 1)
        return null;
      let T = {};
      for (let { slots: C = [], class: M, className: k, ...F } of u) {
        if (!_e(F)) {
          let V = !0;
          for (let q of Object.keys(F)) {
            let oe = U(q, _)[q];
            if (oe === void 0 || (Array.isArray(F[q]) ? !F[q].includes(oe) : F[q] !== oe)) {
              V = !1;
              break;
            }
          }
          if (!V)
            continue;
        }
        for (let V of C)
          T[V] = T[V] || [], T[V].push([M, k]);
      }
      return T;
    };
    if (!_e(o) || !E) {
      let _ = {};
      if (typeof R == "object" && !_e(R))
        for (let T of Object.keys(R))
          _[T] = (C) => {
            var M, k;
            return Mt(R[T], ie(T, C), ((M = Ce(C)) != null ? M : [])[T], ((k = Le(C)) != null ? k : [])[T], C == null ? void 0 : C.class, C == null ? void 0 : C.className)(h);
          };
      return _;
    }
    return Mt(b, ce(), ve(), L == null ? void 0 : L.class, L == null ? void 0 : L.className)(h);
  }, Z = () => {
    if (!(!g || typeof g != "object"))
      return Object.keys(g);
  };
  return P.variantKeys = Z(), P.extend = r, P.base = b, P.slots = R, P.variants = g, P.defaultVariants = y, P.compoundSlots = u, P.compoundVariants = l, P;
};
const pa = (
  /*tw*/
  ae({
    slots: {
      base: "tw--flex-1 tw--w-full tw--px-[15px] tw--py-[11px] tw--rounded-[20px] tw--border select-none tw--bg-glazeBg tw--text-glazeText tw--border-glaze  tw--font-density-different"
    }
  })
), ha = (
  /*tw*/
  ae({
    slots: {
      base: ""
    },
    variants: {
      outlined: {
        true: "tw--p-0.5 tw--bg-white tw--rounded-full tw--shadow",
        false: "tw--bg-[transparent]"
      },
      color: {
        main: "tw--text-dots",
        secondary: "tw--text-zeta tw--self-start"
      }
    }
  })
), ma = ({ text: e = "", onClick: t, e2e: r }) => {
  const { base: o } = pa();
  return /* @__PURE__ */ m.jsx(
    "button",
    {
      onClick: t,
      className: o(),
      type: "button",
      "data-e2e": r,
      children: e
    }
  );
}, zt = ({ children: e, color: t = "main", outlined: r = !1, onClick: o, e2e: s = null, disabled: l = !1 }) => {
  const { base: u } = ha({ outlined: r, color: t });
  return /* @__PURE__ */ m.jsx(
    "button",
    {
      onClick: o,
      className: u(),
      "data-e2e": s,
      disabled: l,
      type: "button",
      children: e
    }
  );
}, Di = () => /* @__PURE__ */ m.jsx(
  "svg",
  {
    height: "24px",
    viewBox: "0 0 24 24",
    width: "24px",
    children: /* @__PURE__ */ m.jsxs(
      "g",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "2",
        children: [
          /* @__PURE__ */ m.jsx(
            "line",
            {
              x1: "6",
              x2: "18",
              y1: "6",
              y2: "18"
            }
          ),
          /* @__PURE__ */ m.jsx(
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
), wa = ({ code: e }) => /* @__PURE__ */ m.jsx(
  "iframe",
  {
    "data-e2e": "video-in-modal",
    className: "tw--min-h-[315px] tw--w-full",
    src: `https://www.youtube.com/embed/${e}?enablejsapi=1&rel=0&origin=${window.location.origin}&autoplay=1`,
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; modestbranding; showinfo=0; fullscreen",
    frameBorder: "0"
  }
), ya = ({ props: { title: e, code: t, isVisible: r, image: o } }) => {
  const s = ze(), l = (u) => {
    s(Is());
  };
  return /* @__PURE__ */ m.jsx(Bs, { onClose: l, children: /* @__PURE__ */ m.jsxs("div", { className: "tw--bg-loader tw--mx-auto tw--max-w-[335px] md:tw--max-w-[570px] tw--mt-20 tw--rounded-lg tw--p-3 tw--shadow-card", onClick: (u) => u.stopPropagation(), children: [
    /* @__PURE__ */ m.jsxs("div", { className: "tw--pb-6 tw--px-1 tw--w-full tw--flex tw--justify-between tw--items-center tw--text-zeta", children: [
      /* @__PURE__ */ m.jsx("h3", { className: "tw--text-2xl", children: e }),
      /* @__PURE__ */ m.jsx(zt, { e2e: "media-modal-close-btn", color: "secondary", onClick: l, children: /* @__PURE__ */ m.jsx(Di, {}) })
    ] }),
    /* @__PURE__ */ m.jsx("div", { className: "tw--w-full tw--h-full tw--flex tw--justify-center tw--items-end tw--bg-whisper", children: o ? /* @__PURE__ */ m.jsx(
      "img",
      {
        "data-e2e": "image-in-modal",
        src: o,
        alt: e
      }
    ) : /* @__PURE__ */ m.jsx(wa, { code: t }) })
  ] }) });
}, ga = (
  /*tw*/
  ae({
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
), va = (
  /*tw*/
  ae({
    slots: {
      base: "tw--flex tw--justify-between tw--px-5 tw--py-[11px] tw--shadow-[-1px_2px_5px_0] tw--shadow-zephyr-200"
    }
  })
), Ui = (
  /*tw*/
  ae({
    slots: {
      base: "tw--flex tw--items-center tw--flex-wrap tw--px-5 tw--mt-[11px]",
      input: "tw--flex-1 tw--pr-2",
      button: "tw--flex tw--grow-0"
    }
  })
), ba = ({ head: e, stream: t, foot: r }) => {
  const { themeId: o, isPluginMode: s, mediaModal: l } = z(ut), { base: u, wrapper: a } = ga(), [h, b] = Ls();
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      "data-e2e": "base-container",
      style: { height: `${b}px` },
      className: u({ minimized: s }) + " " + o,
      children: [
        l.isVisible && /* @__PURE__ */ m.jsx(ya, { props: l }),
        /* @__PURE__ */ m.jsxs("div", { className: a(), children: [
          e,
          t,
          r
        ] })
      ]
    }
  );
}, xa = (
  /*tw*/
  ae({
    slots: {
      base: "loader js-payment-loader tw--hidden tw--fixed tw--left-0 tw--top-0 tw--z-[101] tw--m-0 tw--flex tw--h-screen tw--w-screen tw--items-center tw--justify-center tw--px-5 tw--bg-whisper"
    }
  })
), Ea = ({ children: e }) => {
  const { base: t } = xa();
  return /* @__PURE__ */ m.jsx("div", { className: t(), children: e });
}, Ie = ({
  eventType: e,
  systemType: t,
  utmParams: r,
  customerUuid: o,
  email: s,
  phone: l
}) => {
  if (window.trackEventInGTM && window.tracking) {
    const u = window.tracking.event({
      eventType: e,
      systemType: t,
      uri: window.location.pathname,
      domain: window.location.hostname,
      customerUuid: o,
      email: s || null,
      phone: l || null,
      additionalData: {},
      utmParams: r
    });
    window.tracking.trackClient(u), window.trackEventInGTM && window.trackEventInGTM(u);
  }
};
window.tracking = window.tracking || null;
window.trackEventInGTM = window.trackEventInGTM || null;
const $i = (
  /*tw*/
  ae({
    slots: {
      btn: "tw--flex-1 tw--space-x-2 tw--text-white tw--text-center tw--bg-neon tw--max-w-[280px] tw--mx-auto tw--px-4 tw--py-3 tw--font-bold tw--rounded-[20px] tw--shadow-[0px_12px_24px_-4px_rgba(1,154,255,0.2)] tw--flex tw--justify-center tw--items-center tw--cursor-pointer tw--relative tw--w-full tw--text-xl max-h-[46px] tw--mb-[11px] customXs:max-h-[52px]",
      link: "tw--flex-1 tw--space-x-2 tw--text-white tw--text-center tw--bg-neon tw--max-w-[280px] tw--mx-auto tw--px-4 tw--py-3 tw--font-extrabold tw--rounded-[20px] tw--shadow-[0px_12px_24px_-4px_rgba(1,154,255,0.2)] tw--flex tw--justify-center tw--items-center tw--cursor-pointer tw--relative tw--w-full tw--mb-[11px] spaced-letters max-h-[46px] customXs:max-h-[52px] customXs:tw--max-w-xs customXs:te--text-[20px] customXs:tw--text-xl"
    }
  })
), Sa = (
  /*tw*/
  ae({
    slots: {
      base: "tw--absolute tw--top-0 tw--left-0 tw--w-full tw--h-screen tw--flex tw--flex-col tw--justify-center tw--items-center tw--px-5 tw--z-50 tw--bg-lumina"
    }
  })
), _a = (
  /*tw*/
  ae({
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
), Ia = (
  /*tw*/
  ae({
    slots: {
      base: "tw--absolute tw--top-[-30px] tw--right-[-10px] tw--w-6 tw--h-6 tw--p-1 tw--bg-white tw--rounded-full tw--cursor-pointer tw--text-muted-blue"
    }
  })
), Ta = ae({
  slots: {
    base: "tw--mt-[30px] tw--flex tw--items-center tw--justify-center tw--text-[12.8px] tw--leading-[1.56] tw--text-[#21bb5a] tw--font-bold",
    icon: "tw--mr-[5px]"
  }
}), Pa = (
  /*tv*/
  ae({
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
), Ca = ({ text: e, onClick: t, e2e: r, disabled: o = !1 }) => {
  const s = z((a) => a.meta), l = z((a) => a.intentions.email.current), { btn: u } = $i();
  return Ut(() => {
    const a = {
      eventType: Se.addToCart,
      systemType: s.systemType,
      utmParams: s.marketing.lastUtmParams,
      customerUuid: s.cid,
      email: l
    };
    Ie(a), a.eventType = Se.priceSeen, Ie(a);
  }, []), /* @__PURE__ */ m.jsxs(
    "button",
    {
      onClick: t,
      className: u(),
      disabled: o,
      type: "button",
      "data-e2e": r,
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
}, ka = ({ onClick: e }) => {
  const { base: t } = Ia();
  return /* @__PURE__ */ m.jsx(
    "button",
    {
      type: "button",
      className: t(),
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
}, ja = () => {
  const { base: e, icon: t } = Ta();
  return /* @__PURE__ */ m.jsxs("footer", { className: e(), children: [
    /* @__PURE__ */ m.jsx(
      "svg",
      {
        className: t(),
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
}, Ra = ({ config: e }) => {
  const { translations: t } = z((y) => y.config), { wrapper: r, left: o, leftTop: s, icon: l, text: u, bottom: a, right: h, price: b, info: g } = _a();
  return /* @__PURE__ */ m.jsx("header", { children: /* @__PURE__ */ m.jsxs("div", { className: r(), children: [
    /* @__PURE__ */ m.jsxs("span", { className: o(), children: [
      /* @__PURE__ */ m.jsxs("div", { className: s(), children: [
        /* @__PURE__ */ m.jsx("span", { className: l(), children: /* @__PURE__ */ m.jsx("svg", { width: "26", height: "26", children: /* @__PURE__ */ m.jsx("use", { xlinkHref: "/img/sprite.svg#secured-check" }) }) }),
        /* @__PURE__ */ m.jsx("span", { className: u(), dangerouslySetInnerHTML: { __html: t.paymentHeaderTxt1 } })
      ] }),
      /* @__PURE__ */ m.jsx("div", { className: a(), children: t.paymentHeaderTxt2 })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: h(), children: [
      /* @__PURE__ */ m.jsx("div", { className: b(), children: e.price }),
      /* @__PURE__ */ m.jsx("div", { className: g(), children: e.period })
    ] })
  ] }) });
}, zi = hi((e, t) => {
  const { link: r } = $i(), { href: o, text: s, onClick: l, e2e: u = null } = e;
  return /* @__PURE__ */ m.jsx(
    "a",
    {
      className: r(),
      "data-e2e": u,
      href: o,
      onClick: l,
      ref: t,
      children: s
    }
  );
});
zi.displayName = "Link";
const La = ({ texts: e = [], title: t = "" }) => {
  const {
    wrapper: r,
    inner: o,
    dots: s,
    dotsIn: l,
    icon: u,
    progressCheckmark: a,
    panelTitle: h,
    spinningTexts: b,
    filmContainer: g,
    film: y
  } = Pa();
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      className: r(),
      children: [
        /* @__PURE__ */ m.jsx("div", { className: o(), children: /* @__PURE__ */ m.jsx("div", { className: s(), children: /* @__PURE__ */ m.jsx(
          "span",
          {
            className: l()
          }
        ) }) }),
        /* @__PURE__ */ m.jsxs("div", { className: a(), children: [
          /* @__PURE__ */ m.jsx("span", { className: u(), children: /* @__PURE__ */ m.jsxs(
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
          /* @__PURE__ */ m.jsx("p", { className: h(), children: t })
        ] }),
        /* @__PURE__ */ m.jsx("div", { className: g(), children: /* @__PURE__ */ m.jsx("div", { className: y(), children: e.map((E) => /* @__PURE__ */ m.jsx("div", { className: b(), children: E }, E)) }) })
      ]
    }
  );
}, Ma = ({ onClose: e }) => {
  const { displayPlanPrice: t, billingFrequencyTmsg: r } = z((l) => l.meta.pd), { translations: o } = z((l) => l.config), { base: s } = Sa();
  return /* @__PURE__ */ m.jsx("div", { className: s(), children: /* @__PURE__ */ m.jsxs(
    "div",
    {
      id: "chat-payment-view",
      className: "light-pink-blue tw--max-w-[500px] tw--bg-white tw--w-full tw--min-h-[400px] tw--relative tw--rounded-lg tw--flex tw--flex-col tw--p-7",
      children: [
        /* @__PURE__ */ m.jsx(Ea, { children: /* @__PURE__ */ m.jsx(La, { texts: o.loaderTexts, title: o.tm1224 }) }),
        /* @__PURE__ */ m.jsx(ka, { onClick: e }),
        /* @__PURE__ */ m.jsx("div", { id: "primer-form-container", className: "h-full primer-theme tw--w-full", children: /* @__PURE__ */ m.jsx(Ra, { config: { price: t, period: r } }) }),
        /* @__PURE__ */ m.jsx(ja, {})
      ]
    }
  ) });
}, Ba = (
  /* tw*/
  ae({
    slots: {
      base: "tw--pt-10 tw--w-full tw--h-full tw--pb-5 tw--px-5 tw--overflow-y-scroll tw--flex tw--flex-col-reverse tw--translate-z-0 tw--text-zephyr-100 tw--font-density-different tw--mt-0 tw--mb-auto",
      second: "tw--mt-0 tw--mb-auto",
      date: "tw--text-center tw--text-sm tw--pb-[5px] tw--opacity-40"
    }
  })
), Aa = (
  /* tw*/
  ae({
    slots: {
      base: "tw--flex tw--flex-col tw--items-center tw--w-full tw--mx-auto tw--pt-5 tw--pb-10",
      title: "tw--pb-[30px] tw--max-w-[400px] tw--text-center tw--mx-[30px] select-none  tw--font-density-different"
    }
  })
), Oa = (
  /* tw*/
  ae({
    slots: {
      base: "tw--grid tw--break-words"
    }
  })
), Na = (
  /* tw */
  ae({
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
), Vi = (
  /* tw*/
  ae({
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
), Fa = ae({
  slots: {
    dotFirst: "tw--inline-block tw--h-[12px] tw--w-[12px] tw--rounded-full tw--opacity-40 tw--animate-wave tw--bg-zephyr-100",
    dotSecond: "tw--inline-block tw--h-[12px] tw--w-[12px] tw--rounded-full tw--opacity-40 tw--animate-wave-delay tw--bg-zephyr-100",
    dotThird: "tw--inline-block tw--h-[12px] tw--w-[12px] tw--rounded-full tw--opacity-40 tw--animate-wave-delay-2 tw--bg-zephyr-100"
  }
}), Da = () => {
  const { dotFirst: e, dotSecond: t, dotThird: r } = Fa();
  return /* @__PURE__ */ m.jsxs("div", { className: "tw--ml-7 tw--space-x-[6px]", "data-e2e": "stream-response-loader", children: [
    /* @__PURE__ */ m.jsx("span", { className: e() }),
    /* @__PURE__ */ m.jsx("span", { className: t() }),
    /* @__PURE__ */ m.jsx("span", { className: r() })
  ] });
}, Ua = "chatSeen", Wi = "linkClickedFromChat", $a = "chatConversationFinishedTimeStamp", za = "cid", Va = 1e3, Gi = "scroll-stop", on = "support", Wa = 500, Ga = "/", qa = 3e3, Ha = {
  transports: ["websocket"],
  upgrade: !1,
  pingInterval: 1e3 * 60 * 5,
  pingTimeout: 1e3 * 60 * 3,
  secure: !0,
  reconnect: !0
};
pe(), X.assistant, (/* @__PURE__ */ new Date()).getTime();
pe(), X.assistant, (/* @__PURE__ */ new Date()).getTime(), pe(), X.assistant, (/* @__PURE__ */ new Date()).getTime();
const Ya = (e, t) => e.map((r) => {
  var s, l;
  const o = r.sequence === t.sequence && r.type === t.type;
  return o && r.type === ge.text && t.text ? { ...r, text: r.text + t.text } : o && r.type === ge.buttons && ((s = t == null ? void 0 : t.buttons) != null && s.length) && ((l = r == null ? void 0 : r.buttons) != null && l.length) ? { ...r, buttons: [...r.buttons, ...t.buttons] } : r;
});
function me(e) {
  for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    r[o - 1] = arguments[o];
  if (we.process.env.NODE_ENV !== "production") {
    var s = rc[e], l = s ? typeof s == "function" ? s.apply(null, r) : s : "unknown error nr: " + e;
    throw Error("[Immer] " + l);
  }
  throw Error("[Immer] minified error nr: " + e + (r.length ? " " + r.map(function(u) {
    return "'" + u + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function St(e) {
  return !!e && !!e[Te];
}
function ct(e) {
  var t;
  return !!e && (function(r) {
    if (!r || typeof r != "object")
      return !1;
    var o = Object.getPrototypeOf(r);
    if (o === null)
      return !0;
    var s = Object.hasOwnProperty.call(o, "constructor") && o.constructor;
    return s === Object || typeof s == "function" && Function.toString.call(s) === nc;
  }(e) || Array.isArray(e) || !!e[Xn] || !!(!((t = e.constructor) === null || t === void 0) && t[Xn]) || sn(e) || an(e));
}
function Dt(e, t, r) {
  r === void 0 && (r = !1), It(e) === 0 ? (r ? Object.keys : dn)(e).forEach(function(o) {
    r && typeof o == "symbol" || t(o, e[o], e);
  }) : e.forEach(function(o, s) {
    return t(s, o, e);
  });
}
function It(e) {
  var t = e[Te];
  return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : sn(e) ? 2 : an(e) ? 3 : 0;
}
function Wr(e, t) {
  return It(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Ja(e, t) {
  return It(e) === 2 ? e.get(t) : e[t];
}
function qi(e, t, r) {
  var o = It(e);
  o === 2 ? e.set(t, r) : o === 3 ? e.add(r) : e[t] = r;
}
function Ka(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function sn(e) {
  return ec && e instanceof Map;
}
function an(e) {
  return tc && e instanceof Set;
}
function nt(e) {
  return e.o || e.t;
}
function cn(e) {
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  var t = ic(e);
  delete t[Te];
  for (var r = dn(t), o = 0; o < r.length; o++) {
    var s = r[o], l = t[s];
    l.writable === !1 && (l.writable = !0, l.configurable = !0), (l.get || l.set) && (t[s] = { configurable: !0, writable: !0, enumerable: l.enumerable, value: e[s] });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function un(e, t) {
  return t === void 0 && (t = !1), ln(e) || St(e) || !ct(e) || (It(e) > 1 && (e.set = e.add = e.clear = e.delete = Xa), Object.freeze(e), t && Dt(e, function(r, o) {
    return un(o, !0);
  }, !0)), e;
}
function Xa() {
  me(2);
}
function ln(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function $e(e) {
  var t = oc[e];
  return t || me(18, e), t;
}
function Wn() {
  return we.process.env.NODE_ENV === "production" || _t || me(0), _t;
}
function Tr(e, t) {
  t && ($e("Patches"), e.u = [], e.s = [], e.v = t);
}
function sr(e) {
  Gr(e), e.p.forEach(Za), e.p = null;
}
function Gr(e) {
  e === _t && (_t = e.l);
}
function Gn(e) {
  return _t = { p: [], l: _t, h: e, m: !0, _: 0 };
}
function Za(e) {
  var t = e[Te];
  t.i === 0 || t.i === 1 ? t.j() : t.g = !0;
}
function Pr(e, t) {
  t._ = t.p.length;
  var r = t.p[0], o = e !== void 0 && e !== r;
  return t.h.O || $e("ES5").S(t, e, o), o ? (r[Te].P && (sr(t), me(4)), ct(e) && (e = ar(t, e), t.l || cr(t, e)), t.u && $e("Patches").M(r[Te].t, e, t.u, t.s)) : e = ar(t, r, []), sr(t), t.u && t.v(t.u, t.s), e !== Hi ? e : void 0;
}
function ar(e, t, r) {
  if (ln(t))
    return t;
  var o = t[Te];
  if (!o)
    return Dt(t, function(a, h) {
      return qn(e, o, t, a, h, r);
    }, !0), t;
  if (o.A !== e)
    return t;
  if (!o.P)
    return cr(e, o.t, !0), o.t;
  if (!o.I) {
    o.I = !0, o.A._--;
    var s = o.i === 4 || o.i === 5 ? o.o = cn(o.k) : o.o, l = s, u = !1;
    o.i === 3 && (l = new Set(s), s.clear(), u = !0), Dt(l, function(a, h) {
      return qn(e, o, s, a, h, r, u);
    }), cr(e, s, !1), r && e.u && $e("Patches").N(o, r, e.u, e.s);
  }
  return o.o;
}
function qn(e, t, r, o, s, l, u) {
  if (we.process.env.NODE_ENV !== "production" && s === r && me(5), St(s)) {
    var a = ar(e, s, l && t && t.i !== 3 && !Wr(t.R, o) ? l.concat(o) : void 0);
    if (qi(r, o, a), !St(a))
      return;
    e.m = !1;
  } else
    u && r.add(s);
  if (ct(s) && !ln(s)) {
    if (!e.h.D && e._ < 1)
      return;
    ar(e, s), t && t.A.l || cr(e, s);
  }
}
function cr(e, t, r) {
  r === void 0 && (r = !1), !e.l && e.h.D && e.m && un(t, r);
}
function Cr(e, t) {
  var r = e[Te];
  return (r ? nt(r) : e)[t];
}
function Hn(e, t) {
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
  e.o || (e.o = cn(e.t));
}
function Hr(e, t, r) {
  var o = sn(t) ? $e("MapSet").F(t, r) : an(t) ? $e("MapSet").T(t, r) : e.O ? function(s, l) {
    var u = Array.isArray(s), a = { i: u ? 1 : 0, A: l ? l.A : Wn(), P: !1, I: !1, R: {}, l, t: s, k: null, o: null, j: null, C: !1 }, h = a, b = Yr;
    u && (h = [a], b = Ot);
    var g = Proxy.revocable(h, b), y = g.revoke, E = g.proxy;
    return a.k = E, a.j = y, E;
  }(t, r) : $e("ES5").J(t, r);
  return (r ? r.A : Wn()).p.push(o), o;
}
function Qa(e) {
  return St(e) || me(22, e), function t(r) {
    if (!ct(r))
      return r;
    var o, s = r[Te], l = It(r);
    if (s) {
      if (!s.P && (s.i < 4 || !$e("ES5").K(s)))
        return s.t;
      s.I = !0, o = Yn(r, l), s.I = !1;
    } else
      o = Yn(r, l);
    return Dt(o, function(u, a) {
      s && Ja(s.t, u) === a || qi(o, u, t(a));
    }), l === 3 ? new Set(o) : o;
  }(e);
}
function Yn(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return cn(e);
}
var Jn, _t, fn = typeof Symbol < "u" && typeof Symbol("x") == "symbol", ec = typeof Map < "u", tc = typeof Set < "u", Kn = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", Hi = fn ? Symbol.for("immer-nothing") : ((Jn = {})["immer-nothing"] = !0, Jn), Xn = fn ? Symbol.for("immer-draftable") : "__$immer_draftable", Te = fn ? Symbol.for("immer-state") : "__$immer_state", rc = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(e) {
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
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, nc = "" + Object.prototype.constructor, dn = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Object.getOwnPropertyNames, ic = Object.getOwnPropertyDescriptors || function(e) {
  var t = {};
  return dn(e).forEach(function(r) {
    t[r] = Object.getOwnPropertyDescriptor(e, r);
  }), t;
}, oc = {}, Yr = { get: function(e, t) {
  if (t === Te)
    return e;
  var r = nt(e);
  if (!Wr(r, t))
    return function(s, l, u) {
      var a, h = Hn(l, u);
      return h ? "value" in h ? h.value : (a = h.get) === null || a === void 0 ? void 0 : a.call(s.k) : void 0;
    }(e, r, t);
  var o = r[t];
  return e.I || !ct(o) ? o : o === Cr(e.t, t) ? (kr(e), e.o[t] = Hr(e.A.h, o, e)) : o;
}, has: function(e, t) {
  return t in nt(e);
}, ownKeys: function(e) {
  return Reflect.ownKeys(nt(e));
}, set: function(e, t, r) {
  var o = Hn(nt(e), t);
  if (o != null && o.set)
    return o.set.call(e.k, r), !0;
  if (!e.P) {
    var s = Cr(nt(e), t), l = s == null ? void 0 : s[Te];
    if (l && l.t === r)
      return e.o[t] = r, e.R[t] = !1, !0;
    if (Ka(r, s) && (r !== void 0 || Wr(e.t, t)))
      return !0;
    kr(e), qr(e);
  }
  return e.o[t] === r && (r !== void 0 || t in e.o) || Number.isNaN(r) && Number.isNaN(e.o[t]) || (e.o[t] = r, e.R[t] = !0), !0;
}, deleteProperty: function(e, t) {
  return Cr(e.t, t) !== void 0 || t in e.t ? (e.R[t] = !1, kr(e), qr(e)) : delete e.R[t], e.o && delete e.o[t], !0;
}, getOwnPropertyDescriptor: function(e, t) {
  var r = nt(e), o = Reflect.getOwnPropertyDescriptor(r, t);
  return o && { writable: !0, configurable: e.i !== 1 || t !== "length", enumerable: o.enumerable, value: r[t] };
}, defineProperty: function() {
  me(11);
}, getPrototypeOf: function(e) {
  return Object.getPrototypeOf(e.t);
}, setPrototypeOf: function() {
  me(12);
} }, Ot = {};
Dt(Yr, function(e, t) {
  Ot[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
}), Ot.deleteProperty = function(e, t) {
  return we.process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && me(13), Ot.set.call(this, e, t, void 0);
}, Ot.set = function(e, t, r) {
  return we.process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && me(14), Yr.set.call(this, e[0], t, r, e[0]);
};
var sc = function() {
  function e(r) {
    var o = this;
    this.O = Kn, this.D = !0, this.produce = function(s, l, u) {
      if (typeof s == "function" && typeof l != "function") {
        var a = l;
        l = s;
        var h = o;
        return function(P) {
          var Z = this;
          P === void 0 && (P = a);
          for (var L = arguments.length, A = Array(L > 1 ? L - 1 : 0), he = 1; he < L; he++)
            A[he - 1] = arguments[he];
          return h.produce(P, function(ce) {
            var ie;
            return (ie = l).call.apply(ie, [Z, ce].concat(A));
          });
        };
      }
      var b;
      if (typeof l != "function" && me(6), u !== void 0 && typeof u != "function" && me(7), ct(s)) {
        var g = Gn(o), y = Hr(o, s, void 0), E = !0;
        try {
          b = l(y), E = !1;
        } finally {
          E ? sr(g) : Gr(g);
        }
        return typeof Promise < "u" && b instanceof Promise ? b.then(function(P) {
          return Tr(g, u), Pr(P, g);
        }, function(P) {
          throw sr(g), P;
        }) : (Tr(g, u), Pr(b, g));
      }
      if (!s || typeof s != "object") {
        if ((b = l(s)) === void 0 && (b = s), b === Hi && (b = void 0), o.D && un(b, !0), u) {
          var I = [], R = [];
          $e("Patches").M(s, b, I, R), u(I, R);
        }
        return b;
      }
      me(21, s);
    }, this.produceWithPatches = function(s, l) {
      if (typeof s == "function")
        return function(b) {
          for (var g = arguments.length, y = Array(g > 1 ? g - 1 : 0), E = 1; E < g; E++)
            y[E - 1] = arguments[E];
          return o.produceWithPatches(b, function(I) {
            return s.apply(void 0, [I].concat(y));
          });
        };
      var u, a, h = o.produce(s, l, function(b, g) {
        u = b, a = g;
      });
      return typeof Promise < "u" && h instanceof Promise ? h.then(function(b) {
        return [b, u, a];
      }) : [h, u, a];
    }, typeof (r == null ? void 0 : r.useProxies) == "boolean" && this.setUseProxies(r.useProxies), typeof (r == null ? void 0 : r.autoFreeze) == "boolean" && this.setAutoFreeze(r.autoFreeze);
  }
  var t = e.prototype;
  return t.createDraft = function(r) {
    ct(r) || me(8), St(r) && (r = Qa(r));
    var o = Gn(this), s = Hr(this, r, void 0);
    return s[Te].C = !0, Gr(o), s;
  }, t.finishDraft = function(r, o) {
    var s = r && r[Te];
    we.process.env.NODE_ENV !== "production" && (s && s.C || me(9), s.I && me(10));
    var l = s.A;
    return Tr(l, o), Pr(void 0, l);
  }, t.setAutoFreeze = function(r) {
    this.D = r;
  }, t.setUseProxies = function(r) {
    r && !Kn && me(20), this.O = r;
  }, t.applyPatches = function(r, o) {
    var s;
    for (s = o.length - 1; s >= 0; s--) {
      var l = o[s];
      if (l.path.length === 0 && l.op === "replace") {
        r = l.value;
        break;
      }
    }
    s > -1 && (o = o.slice(s + 1));
    var u = $e("Patches").$;
    return St(r) ? u(r, o) : this.produce(r, function(a) {
      return u(a, o);
    });
  }, e;
}(), Pe = new sc(), ac = Pe.produce;
Pe.produceWithPatches.bind(Pe);
Pe.setAutoFreeze.bind(Pe);
Pe.setUseProxies.bind(Pe);
Pe.applyPatches.bind(Pe);
Pe.createDraft.bind(Pe);
Pe.finishDraft.bind(Pe);
const Xe = ac, Yi = dr({
  name: "chat",
  initialState: Jt,
  reducers: {
    setOutgoing(e, { payload: t }) {
      e.outgoing = {
        term: ee(),
        user_id: localStorage.getItem("__cid") || "",
        role: X.user,
        message: t
      };
    },
    resetOutgoing(e) {
      e.outgoing = Jt.outgoing;
    },
    initiateThread(e, { payload: { threadId: t } }) {
      return Xe(e, (r) => {
        r.record[t] || (r.record[t] = {
          historyIds: [],
          historyData: {}
        }, r.thread[ee()] = t);
      });
    },
    syncMessageStatus(e, { payload: { term: t, history: r } }) {
      if (t !== ee())
        return;
      const o = e.thread[t];
      return Xe(e, (s) => {
        s.record[o].historyIds.filter(
          (u) => !r.find((a) => a.id === u)
        ).forEach(
          (u) => s.record[o].historyData[u].content = s.record[o].historyData[u].content.map(
            (a) => ({
              ...a,
              sent: !1,
              resend: !0
            })
          )
        );
      });
    },
    updateHistoryByThread(e, { payload: { history: t, term: r } }) {
      if (r === ee())
        return Xe(e, (o) => {
          const s = t.map(({ id: a }) => a), l = o.thread[r], u = o.record[l].historyIds;
          for (let a = 0; a < s.length; a++) {
            const h = s[a];
            u.includes(h) || (u.splice(a, 0, h), o.record[l].historyData[h] = t[a]);
          }
          o.record[l].historyIds = u;
        });
    },
    addPredefinedAssistantMessage(e, { payload: t }) {
      return Xe(e, (r) => {
        const o = pe(), s = r.thread[ee()];
        r.record[s].historyIds.push(o), r.record[s].historyData[o] = {
          id: o,
          role: X.assistant,
          content: [
            { type: ge.text, text: t.content, sequence: 1 },
            { type: ge.buttons, buttons: t.buttons || [], sequence: 2 }
          ]
        };
      });
    },
    fillAssistantHistoryData(e, { payload: { id: t, content: r, sequence: o, term: s } }) {
      return Xe(e, (l) => {
        const u = e.thread[s];
        if (l.record[u] && !l.record[u].historyData[t]) {
          l.record[u].historyData[t] = { id: t, role: X.assistant, content: [] }, l.record[u].historyIds.push(t);
          return;
        }
        if (!r)
          return;
        const a = {
          sequence: o || 1,
          type: r.type,
          [r.type]: r[r.type]
        };
        if (l.record[u].historyData[t].content.some(
          (h) => h.sequence === a.sequence && h.type === a.type
        )) {
          l.record[u].historyData[t].content = Ya(
            l.record[u].historyData[t].content,
            a
          );
          return;
        }
        l.record[u].historyData[t].content.push(a);
      });
    },
    fillUserHistoryData(e, { payload: { id: t, content: r, term: o } }) {
      return Xe(e, (s) => {
        var a;
        let l;
        const u = e.thread[o];
        if (r.groupId && ((a = s.record[u]) != null && a.historyData) && Object.entries(s.record[u].historyData).forEach(([h, b]) => {
          [...b.content].find((g) => g.groupId === r.groupId) && (l = h);
        }), l) {
          s.record[u].historyData[l].content.push(r);
          return;
        }
        s.record[u].historyData[t] || (s.record[u].historyData[t] = { id: t, role: X.user, content: [r] }, s.record[u].historyIds.push(t));
      });
    },
    fillInitialMessage(e, { payload: { message: t, term: r } }) {
      const o = ee();
      if (r !== o)
        return;
      const s = e.thread[r];
      e.record[s].historyIds.push(t.id), e.record[s].historyData[t.id] = {
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
      e.isLoading = Jt.isLoading;
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
    showResendIcon(e, { payload: t }) {
      const r = ee();
      return Xe(e, (o) => {
        const s = e.thread[r];
        o.record[s].historyData[t.itemId].content = o.record[s].historyData[t.itemId].content.map((l) => ({
          ...l,
          sent: !1,
          resend: !0
        }));
      });
    },
    setLastGroupPointer(e, { payload: t }) {
      e.lastGroupId = t;
    },
    resendMessage(e, { payload: t }) {
      const r = ee();
      return Xe(e, (o) => {
        const s = e.thread[r];
        o.record[s].historyData[t.itemId].content = o.record[s].historyData[t.itemId].content.map((l) => ({
          ...l,
          sent: !0,
          resend: !1
        }));
      });
    },
    setError(e, { payload: t }) {
      e.error = t;
    },
    resetError(e) {
      e.error = Jt.error;
    },
    setIsStreaming(e, { payload: t }) {
      e.isStreaming = t;
    },
    resetHistory(e, { payload: { term: t, thread: r } }) {
      ee() === t && (e.record[r] = { historyData: {}, historyIds: [] });
    }
  }
}), Vt = (e) => e.chat.thread[ee()], pn = (e) => e.chat, hn = (e) => {
  var t;
  return (t = e.chat.record[Vt(e)]) == null ? void 0 : t.historyIds;
}, cc = (e) => {
  const t = Vt(e);
  return (hn(e) || []).find((o) => e.chat.record[t].historyData[o].role === X.user);
}, uc = (e) => {
  var o, s;
  const t = Vt(e), r = hn(e) || [];
  return bs(((s = (o = e.chat.record[t]) == null ? void 0 : o.historyData[r[0]]) == null ? void 0 : s.time) || (/* @__PURE__ */ new Date()).getTime());
}, lc = (e) => [...e.chat.record[Vt(e)].historyIds].pop(), fc = (e) => (t) => t.chat.record[Vt(t)].historyData[e], dc = (e, t) => e.sequence && t.sequence ? e.sequence - t.sequence : 0, {
  setOutgoing: mn,
  resetOutgoing: pc,
  updateHistoryByThread: hc,
  addPredefinedAssistantMessage: Ji,
  setIsLoading: Xt,
  resetIsLoading: Bt,
  setLastGroupPointer: Ki,
  setTypingTimeoutExpired: Xi,
  setError: Zt,
  resetError: jr,
  setConnected: Zn,
  setClosed: hr,
  showResendIcon: Qn,
  resendMessage: Zi,
  setIsStreaming: Rr,
  fillAssistantHistoryData: ei,
  fillUserHistoryData: ur,
  resetHistory: mc,
  fillInitialMessage: wc,
  initiateThread: yc,
  syncMessageStatus: gc
} = Yi.actions, vc = Yi.reducer, Qi = dr({
  name: "intentions",
  initialState: xs,
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
}), eo = (e) => e.intentions.email, bc = (e) => e.intentions.payment, {
  setEmailSuccess: xc,
  setIsPaymentSuccessful: Ec,
  setPaymentFormVisibility: Sc,
  setEmailError: ti,
  setIsEmailLoading: Jr,
  setIsPaymentButtonVisible: _c,
  setPaymentIntentError: Ic,
  setEmail: Tc,
  setLink: to
} = Qi.actions, Pc = Qi.reducer, Cc = () => {
  var M;
  const e = ee(), { cid: t, systemType: r, marketing: o, pd: s } = z($t), { translations: l, purpose: u, specialUrls: a } = z(ut), { isLoading: h, isStreaming: b, record: g, thread: y } = z(pn), { error: E } = z((k) => k.chat), I = z((k) => k.intentions.link), { error: R, current: P } = z(eo), {
    isFormVisible: Z,
    error: L,
    isSuccessful: A
  } = z(bc), ce = {
    systemType: r,
    marketing: o,
    error: E || R || L,
    cid: t,
    isLoading: h,
    currentEmail: P,
    translations: l,
    pd: s,
    isStreaming: b,
    isPaymentButtonVisible: !1,
    isPaymentFormVisible: !1,
    isEmailFormVisible: !1,
    isResponseFormVisible: !1,
    ctaText: "",
    ctaHref: ""
  }, ie = y[e];
  if (!ie)
    return ce;
  const ye = [...g[ie].historyIds].pop(), U = ye && g[ie].historyData[ye], xe = U && U.role === X.assistant, ve = xe && I, Ce = !(U && (U != null && U.content.find((k) => k.buttons))), Le = U && (U == null ? void 0 : U.content.find((k) => k.payment)), _ = U && (U == null ? void 0 : U.content.find((k) => k.email));
  if (xe && Le)
    return {
      ...ce,
      isPaymentButtonVisible: !0
    };
  if (xe && _)
    return {
      ...ce,
      isEmailFormVisible: !0,
      isPaymentFormVisible: Z
    };
  if (A)
    return {
      ...ce,
      ctaText: l.ctaTextContent,
      ctaHref: "/",
      isPaymentFormVisible: Z
    };
  const T = U && ((M = U == null ? void 0 : U.content) == null ? void 0 : M.find((k) => k.special));
  if (xe && T && (T != null && T.special) && a[T.special])
    return {
      ...ce,
      ctaText: a[T.special].includes("merchant") ? l.merchantButton : l.supportButton,
      ctaHref: a[T.special]
    };
  if (ve && u === on && Ce)
    return {
      ...ce,
      isResponseFormVisible: !0
    };
  const C = U && !ve && !h && (Ce || (U == null ? void 0 : U.role) === X.user);
  return {
    ...ce,
    ctaText: l.mealButton,
    ctaHref: ve,
    isResponseFormVisible: C
  };
};
var wn = { exports: {} }, Et = typeof Reflect == "object" ? Reflect : null, ri = Et && typeof Et.apply == "function" ? Et.apply : function(t, r, o) {
  return Function.prototype.apply.call(t, r, o);
}, nr;
Et && typeof Et.ownKeys == "function" ? nr = Et.ownKeys : Object.getOwnPropertySymbols ? nr = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : nr = function(t) {
  return Object.getOwnPropertyNames(t);
};
function kc(e) {
  console && console.warn && console.warn(e);
}
var ro = Number.isNaN || function(t) {
  return t !== t;
};
function Y() {
  Y.init.call(this);
}
wn.exports = Y;
wn.exports.once = Mc;
Y.EventEmitter = Y;
Y.prototype._events = void 0;
Y.prototype._eventsCount = 0;
Y.prototype._maxListeners = void 0;
var ni = 10;
function mr(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(Y, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return ni;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || ro(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    ni = e;
  }
});
Y.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
Y.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || ro(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function no(e) {
  return e._maxListeners === void 0 ? Y.defaultMaxListeners : e._maxListeners;
}
Y.prototype.getMaxListeners = function() {
  return no(this);
};
Y.prototype.emit = function(t) {
  for (var r = [], o = 1; o < arguments.length; o++)
    r.push(arguments[o]);
  var s = t === "error", l = this._events;
  if (l !== void 0)
    s = s && l.error === void 0;
  else if (!s)
    return !1;
  if (s) {
    var u;
    if (r.length > 0 && (u = r[0]), u instanceof Error)
      throw u;
    var a = new Error("Unhandled error." + (u ? " (" + u.message + ")" : ""));
    throw a.context = u, a;
  }
  var h = l[t];
  if (h === void 0)
    return !1;
  if (typeof h == "function")
    ri(h, this, r);
  else
    for (var b = h.length, g = co(h, b), o = 0; o < b; ++o)
      ri(g[o], this, r);
  return !0;
};
function io(e, t, r, o) {
  var s, l, u;
  if (mr(r), l = e._events, l === void 0 ? (l = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (l.newListener !== void 0 && (e.emit(
    "newListener",
    t,
    r.listener ? r.listener : r
  ), l = e._events), u = l[t]), u === void 0)
    u = l[t] = r, ++e._eventsCount;
  else if (typeof u == "function" ? u = l[t] = o ? [r, u] : [u, r] : o ? u.unshift(r) : u.push(r), s = no(e), s > 0 && u.length > s && !u.warned) {
    u.warned = !0;
    var a = new Error("Possible EventEmitter memory leak detected. " + u.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    a.name = "MaxListenersExceededWarning", a.emitter = e, a.type = t, a.count = u.length, kc(a);
  }
  return e;
}
Y.prototype.addListener = function(t, r) {
  return io(this, t, r, !1);
};
Y.prototype.on = Y.prototype.addListener;
Y.prototype.prependListener = function(t, r) {
  return io(this, t, r, !0);
};
function jc() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function oo(e, t, r) {
  var o = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r }, s = jc.bind(o);
  return s.listener = r, o.wrapFn = s, s;
}
Y.prototype.once = function(t, r) {
  return mr(r), this.on(t, oo(this, t, r)), this;
};
Y.prototype.prependOnceListener = function(t, r) {
  return mr(r), this.prependListener(t, oo(this, t, r)), this;
};
Y.prototype.removeListener = function(t, r) {
  var o, s, l, u, a;
  if (mr(r), s = this._events, s === void 0)
    return this;
  if (o = s[t], o === void 0)
    return this;
  if (o === r || o.listener === r)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete s[t], s.removeListener && this.emit("removeListener", t, o.listener || r));
  else if (typeof o != "function") {
    for (l = -1, u = o.length - 1; u >= 0; u--)
      if (o[u] === r || o[u].listener === r) {
        a = o[u].listener, l = u;
        break;
      }
    if (l < 0)
      return this;
    l === 0 ? o.shift() : Rc(o, l), o.length === 1 && (s[t] = o[0]), s.removeListener !== void 0 && this.emit("removeListener", t, a || r);
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
    var l = Object.keys(o), u;
    for (s = 0; s < l.length; ++s)
      u = l[s], u !== "removeListener" && this.removeAllListeners(u);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (r = o[t], typeof r == "function")
    this.removeListener(t, r);
  else if (r !== void 0)
    for (s = r.length - 1; s >= 0; s--)
      this.removeListener(t, r[s]);
  return this;
};
function so(e, t, r) {
  var o = e._events;
  if (o === void 0)
    return [];
  var s = o[t];
  return s === void 0 ? [] : typeof s == "function" ? r ? [s.listener || s] : [s] : r ? Lc(s) : co(s, s.length);
}
Y.prototype.listeners = function(t) {
  return so(this, t, !0);
};
Y.prototype.rawListeners = function(t) {
  return so(this, t, !1);
};
Y.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : ao.call(e, t);
};
Y.prototype.listenerCount = ao;
function ao(e) {
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
function co(e, t) {
  for (var r = new Array(t), o = 0; o < t; ++o)
    r[o] = e[o];
  return r;
}
function Rc(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function Lc(e) {
  for (var t = new Array(e.length), r = 0; r < t.length; ++r)
    t[r] = e[r].listener || e[r];
  return t;
}
function Mc(e, t) {
  return new Promise(function(r, o) {
    function s(u) {
      e.removeListener(t, l), o(u);
    }
    function l() {
      typeof e.removeListener == "function" && e.removeListener("error", s), r([].slice.call(arguments));
    }
    uo(e, t, l, { once: !0 }), t !== "error" && Bc(e, s, { once: !0 });
  });
}
function Bc(e, t, r) {
  typeof e.on == "function" && uo(e, "error", t, r);
}
function uo(e, t, r, o) {
  if (typeof e.on == "function")
    o.once ? e.once(t, r) : e.on(t, r);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function s(l) {
      o.once && e.removeEventListener(t, s), r(l);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var Ac = wn.exports;
const Ue = {
  type: Si,
  core: new Ac.EventEmitter()
}, Oc = (
  /* tw*/
  ae({
    slots: {
      base: "tw--relative tw--flex tw--items-center",
      input: "tw--w-full tw--px-[15px] tw--py-[11px] tw--rounded-[20px] focus:tw--outline-none focus:!tw--bg-lumina tw--bg-lumina tw--text-zephyr-100 tw--font-density-different",
      loader: "tw--absolute tw--right-4 tw--top-[50%] tw--translate-y-[-50%]",
      spin: "tw--block tw--w-6 tw--h-6 tw--border-solid tw--border-[5px] tw--rounded-3xl tw--animate-rotate tw--m-auto tw--border-zephyr-200 tw--border-t-zephyr-600 tw--border-l-zephyr-600"
    }
  })
), yn = hi((e, t) => {
  const {
    disabled: r,
    e2e: o,
    isLoading: s,
    onChange: l,
    onKeyUp: u,
    placeholder: a,
    type: h,
    value: b
  } = e, { base: g, input: y, loader: E, spin: I } = Oc();
  return /* @__PURE__ */ m.jsxs("div", { className: g(), children: [
    /* @__PURE__ */ m.jsx(
      "input",
      {
        className: y(),
        "data-e2e": o,
        disabled: s || r,
        onChange: l,
        onKeyUp: u,
        placeholder: a,
        ref: t,
        type: h,
        value: b
      }
    ),
    s && /* @__PURE__ */ m.jsx("span", { className: E(), children: /* @__PURE__ */ m.jsx("span", { className: I() }) })
  ] });
});
yn.displayName = "Input";
const Nc = () => {
  const e = ze(), t = z((E) => E.meta), { translations: r } = z(ut), { isLoading: o } = z(eo), { base: s, input: l, button: u } = Ui(), [a, h] = Nt(""), b = en(null);
  Ut(() => {
    Ie({
      eventType: Se.emailField,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid
    }), setTimeout(() => {
      b.current && b.current.focus();
    }, 500);
  });
  const g = (E) => {
    const I = E.target.value.trim();
    h(I);
  }, y = (E) => {
    E.preventDefault(), a !== "" && (e(Jr(!0)), e(Tc(a)), Ue.core.emit(Ue.type.email, { email: a }), h(""));
  };
  return /* @__PURE__ */ m.jsxs(
    "form",
    {
      className: s(),
      onSubmit: y,
      "data-e2e": "email-form",
      children: [
        /* @__PURE__ */ m.jsx("div", { className: l(), children: /* @__PURE__ */ m.jsx(
          yn,
          {
            e2e: "email-input",
            isLoading: o,
            name: "email",
            onChange: g,
            ref: b,
            placeholder: r.emailPlaceholder,
            type: "email",
            value: a
          }
        ) }),
        /* @__PURE__ */ m.jsx("div", { className: u(), children: /* @__PURE__ */ m.jsx(zt, { onClick: y, e2e: "email-validate-btn", children: /* @__PURE__ */ m.jsx(
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
      ]
    }
  );
}, Fc = () => {
  const e = ze(), { connected: t, isLoading: r } = z(pn), { base: o, input: s, button: l } = Ui(), [u, a] = Nt(""), [h, b] = Nt(null), g = z((P) => P.chat.lastGroupId), y = en(null);
  Ut(() => {
    setTimeout(() => {
      var P;
      (P = y.current) == null || P.focus();
    }, 500);
  }, []);
  const E = (P) => {
    a(P.target.value), R();
  }, I = (P) => {
    P.preventDefault(), u.trim() && e(ur({
      role: X.user,
      id: pe(),
      sequence: 1,
      term: ee(),
      content: {
        sequence: 1,
        text: u,
        groupId: g,
        resend: !1,
        sent: !0
      }
    })), a(""), R();
  }, R = () => {
    h && clearTimeout(h);
    const P = setTimeout(() => {
      e(Xi(!0)), e(Ki(pe()));
    }, qa);
    b(P);
  };
  return /* @__PURE__ */ m.jsxs(
    "form",
    {
      className: o(),
      onSubmit: I,
      "data-e2e": "user-form",
      children: [
        /* @__PURE__ */ m.jsx("div", { className: s(), children: /* @__PURE__ */ m.jsx(
          yn,
          {
            disabled: !t,
            isLoading: r,
            e2e: "message-input",
            name: "response",
            onChange: E,
            placeholder: "Write your message here...",
            type: "response",
            value: u,
            ref: y
          }
        ) }),
        /* @__PURE__ */ m.jsx("div", { className: l(), children: /* @__PURE__ */ m.jsx(zt, { onClick: I, disabled: !t, children: /* @__PURE__ */ m.jsx(
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
      ]
    }
  );
}, Dc = () => {
  const e = ze(), t = Cc(), r = en(null), [o, s] = Nt(!1), l = (y) => {
    e(Sc(y));
  };
  Ut(() => {
    t.isEmailFormVisible && Ie({
      eventType: Se.emailField,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid,
      email: t.currentEmail
    });
  }, [t.isEmailFormVisible]);
  const u = (y) => {
    y.currentTarget.disabled = !0, Ue.core.emit(Ue.type.destroy), l(!1), s(!1);
  }, a = () => {
    e(Ji({ content: t.translations.tm1226 })), e(Ec(!0)), e(_c(!1)), l(!1), Ie({
      eventType: Se.linkProvided,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid,
      email: t.currentEmail
    }), setTimeout(() => {
      r.current && r.current.click();
    }, 7e3);
  }, h = (y) => {
    e(Ic(y));
  }, b = () => {
    Ue.core.emit(Ue.type.payment, { setIsPaymentContainerVisible: l, onPaymentSuccess: a, onError: h }), s(!0);
  }, g = (y) => {
    localStorage.setItem(Wi, y.currentTarget.href), Ie({
      eventType: Se.linkClicked,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid,
      email: t.currentEmail
    }), e(hr());
  };
  return /* @__PURE__ */ m.jsxs("div", { className: "tw--space-y-[11px] tw--pb-[11px]", "data-e2e": "chat-foot", children: [
    t.error && /* @__PURE__ */ m.jsx("div", { "data-e2e": "error-message", className: "tw--pl-[35px] tw--text-[#ff0043] tw--font-medium", children: t.error }),
    t.isPaymentFormVisible && /* @__PURE__ */ m.jsx(Ma, { onClose: u }),
    t.isLoading && /* @__PURE__ */ m.jsx(Da, {}),
    t.ctaHref && /* @__PURE__ */ m.jsx(
      zi,
      {
        ref: r,
        text: t.ctaText,
        onClick: g,
        href: t.ctaHref,
        e2e: "quiz-trigger-btn"
      }
    ),
    !t.isStreaming && t.isEmailFormVisible && /* @__PURE__ */ m.jsx(Nc, {}),
    !t.isStreaming && t.isResponseFormVisible && /* @__PURE__ */ m.jsx(Fc, {}),
    t.isPaymentButtonVisible && /* @__PURE__ */ m.jsx(
      Ca,
      {
        text: t.translations.payButton,
        onClick: b,
        disabled: o,
        e2e: "payment-form-trigger-btn"
      }
    )
  ] });
}, Uc = (
  /*tw*/
  ae({
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
), lo = ({ orientation: e = rn.horizontal, minimized: t = !1 }) => {
  const { aiProfile: r } = z(ut), { base: o, avatar: s, info: l, name: u, role: a, imgWrapper: h } = Uc({ orientation: e, minimized: t });
  return /* @__PURE__ */ m.jsxs("div", { className: o(), children: [
    /* @__PURE__ */ m.jsx("span", { className: h(), children: /* @__PURE__ */ m.jsx(
      "img",
      {
        className: s(),
        src: r.imgSrc,
        alt: "img"
      }
    ) }),
    /* @__PURE__ */ m.jsxs("div", { className: l(), children: [
      /* @__PURE__ */ m.jsx("div", { className: u(), children: r.name }),
      /* @__PURE__ */ m.jsx("div", { className: a(), children: r.role })
    ] })
  ] });
}, $c = () => {
  const e = ze(), t = Ms(), { base: r } = va({ theme: t.theme }), o = (s) => {
    s.currentTarget.disabled = !0, Ie({
      eventType: Se.closeClicked,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid
    }), setTimeout(() => {
      e(hr());
    }, Wa);
  };
  return /* @__PURE__ */ m.jsxs("div", { className: r(), "data-e2e": "chat-heading", children: [
    /* @__PURE__ */ m.jsx(lo, {}),
    t.closeVisible && /* @__PURE__ */ m.jsx(zt, { e2e: "chat-close-btn", onClick: o, children: /* @__PURE__ */ m.jsx(Di, {}) })
  ] });
}, zc = (e) => {
  const t = (o) => /[?&]([^=#]+)=([^&#]*)/g.test(o);
  let r;
  if (window.location.search) {
    const o = new URLSearchParams(window.location.search);
    o.append(Ua, "true"), o.append(za, localStorage.getItem("__cid") || ""), r = `/?${o}`;
  } else
    r = "";
  return t(e) ? e : e + r;
}, Vc = (e) => e.replaceAll(/\\r\\n|\\n|\r\n|<br>|<br\/>/g, `
`), Wc = ({ properties: e }) => {
  const { purpose: t } = z(ut), { cid: r, marketing: o, systemType: s } = z($t), l = ze(), u = e.href ? zc(e.href) : "#";
  Ut(() => {
    l(to(u));
  });
  const a = (h) => {
    t !== on && localStorage.setItem(Wi, h.currentTarget.href), Ie({
      eventType: Se.linkClicked,
      systemType: s,
      utmParams: o.lastUtmParams,
      customerUuid: r
    }), l(hr());
  };
  return /* @__PURE__ */ m.jsx(
    "a",
    {
      href: u,
      onClick: a,
      className: "tw--underline",
      children: e.href
    }
  );
}, ii = Wo(function({ url: t, background: r, title: o = "", type: s, image: l, e2e: u }) {
  const a = ze(), h = () => {
    const b = { code: "", image: "", isVisible: !0, title: o };
    s === ge.video && t && (b.code = t), s === ge.image && l && (b.image = l), a(_s(b));
  };
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      className: "w-full tw--h-[200px] tw--justify-center tw--flex tw--items-center tw--pointer-events-auto tw--w-[300px] md:tw--w-[350px]",
      "data-e2e": u,
      onClick: h,
      style: {
        backgroundImage: r,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
      },
      children: s === ge.video && /* @__PURE__ */ m.jsx("button", { className: "tw--items-center tw--justify-center tw--w-16 tw--h-16 tw--rounded-full tw--cursor-pointer tw--pointer-events-auto tw--flex tw--bg-gradient-to-b tw--from-[#FF0000] tw--to-[#F25640]", children: /* @__PURE__ */ m.jsx("svg", { className: "tw--pointer-events-none", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ m.jsx(
        "path",
        {
          d: "M10.6665 9.09335V22.9067C10.6665 23.96 11.8265 24.6 12.7198 24.0267L23.5732 17.12C23.7632 16.9998 23.9197 16.8334 24.0282 16.6364C24.1366 16.4394 24.1935 16.2182 24.1935 15.9933C24.1935 15.7685 24.1366 15.5473 24.0282 15.3503C23.9197 15.1533 23.7632 14.9869 23.5732 14.8667L12.7198 7.97335C12.5187 7.84327 12.2862 7.76989 12.0469 7.76094C11.8076 7.75199 11.5702 7.8078 11.36 7.92249C11.1497 8.03718 10.9743 8.20649 10.8523 8.41257C10.7302 8.61864 10.666 8.85384 10.6665 9.09335V9.09335Z",
          fill: "white"
        }
      ) }) })
    }
  );
}), Gc = (
  /* tw*/
  ae({
    slots: {
      base: "tw--flex-1 tw--w-full tw--px-[15px] tw--py-[11px] tw--rounded-[20px] tw--border select-none tw--text-center tw--bg-glaze tw--text-whisper"
    }
  })
);
/* tw*/
ae({
  slots: {
    base: "tw--flex-1 tw--px-4 tw--py-2"
  }
});
const qc = ({ text: e, href: t, onClick: r }) => {
  const { base: o } = Gc();
  return /* @__PURE__ */ m.jsx(
    "a",
    {
      href: t,
      onClick: r,
      className: o(),
      children: e
    }
  );
}, Hc = ({ options: e = [] }) => {
  const t = ze(), r = z($t), o = !z(cc), s = (u, a) => {
    t(ur({
      id: pe(),
      sequence: a,
      role: X.user,
      term: ee(),
      content: {
        sequence: 1,
        text: u,
        resend: !1,
        sent: !0,
        groupId: ""
      }
    })), t(mn(u)), o && Ie({
      eventType: Se.buttonClick + a,
      systemType: r.systemType,
      utmParams: r.marketing.lastUtmParams,
      customerUuid: r.cid
    });
  }, l = (u) => {
    t(ur({
      id: pe(),
      sequence: 1,
      term: ee(),
      role: X.user,
      content: {
        sequence: 1,
        text: u,
        resend: !1,
        sent: !0,
        groupId: ""
      }
    }));
  };
  return [...e].sort((u, a) => u.sequence - a.sequence).map(({ value: u, link: a, sequence: h, noStream: b }) => a ? /* @__PURE__ */ m.jsx(
    qc,
    {
      text: u,
      href: a
    },
    pe()
  ) : /* @__PURE__ */ m.jsx(
    ma,
    {
      text: u,
      onClick: b ? () => l(u) : () => s(u, h),
      e2e: "option-button"
    },
    pe()
  ));
}, Yc = ({ message: e, itemId: t }) => {
  const { isStreaming: r } = z(pn), { pd: o } = z($t), s = z(lc) === t, { base: l } = Na({ isTyping: r && s }), u = [...e.content].sort(dc);
  return /* @__PURE__ */ m.jsx(m.Fragment, { children: u.map((a) => {
    var h, b, g, y, E, I;
    if (a.type === ge.text)
      return /* @__PURE__ */ m.jsx(
        "div",
        {
          className: "tw--flex tw--flex-col tw--space-y-[10px]",
          "data-e2e": "assistant-text",
          children: /* @__PURE__ */ m.jsx("span", { className: l(), children: /* @__PURE__ */ m.jsx(
            Xo,
            {
              components: {
                a(R) {
                  return /* @__PURE__ */ m.jsx(Wc, { properties: R });
                }
              },
              children: Vc(a[a.type] || "")
            },
            pe()
          ) })
        },
        pe()
      );
    if (a.type === ge.buttons && s)
      return /* @__PURE__ */ m.jsx("div", { className: "tw--flex tw--flex-col tw--space-y-[10px]", children: /* @__PURE__ */ m.jsx(Hc, { options: a[a.type] }) }, pe());
    if (a.type === ge.video)
      return /* @__PURE__ */ m.jsx(
        ii,
        {
          e2e: "assistant-iframe",
          title: ((h = a[a.type]) == null ? void 0 : h.title) || "",
          background: `url(https://img.youtube.com/vi/${Nn((b = a[a.type]) == null ? void 0 : b.url)}/hqdefault.jpg)`,
          url: Nn(((g = a[a.type]) == null ? void 0 : g.url) || "https://www.youtube.com/embed/g4B8Dhl4pxY"),
          type: ge.video
        },
        pe()
      );
    if (a.type === ge.image)
      return /* @__PURE__ */ m.jsx(
        ii,
        {
          e2e: "assistant-img",
          image: ((y = a[a.type]) == null ? void 0 : y.url) || "",
          background: `url("${(E = a[a.type]) == null ? void 0 : E.url}")`,
          type: ge.image,
          title: (I = a[a.type]) == null ? void 0 : I.title
        },
        pe()
      );
    if (a.type === ge.payment)
      return `${a[a.type]} ${o.displayPlanPrice} ${o.billingFrequencyTmsg}`;
    if (a.type === ge.email)
      return a[a.type];
  }) });
}, Jc = fr.memo(Yc), Kc = ({ itemId: e }) => {
  const t = z(fc(e));
  return t && /* @__PURE__ */ m.jsx(
    "div",
    {
      className: Vi({ type: t.role }).base(),
      "data-e2e": t.role === X.assistant ? "stream-assistant-msg" : "user-msg",
      children: t.role === X.assistant ? /* @__PURE__ */ m.jsx(
        Jc,
        {
          message: t,
          itemId: e
        }
      ) : [...t.content].map((r) => /* @__PURE__ */ m.jsx(
        eu,
        {
          record: {
            text: r.text || "",
            sequence: r.sequence || 0,
            resend: r.resend || !1,
            sent: r.sent || !0,
            groupId: r.groupId || "",
            itemId: e
          }
        },
        pe()
      ))
    }
  );
}, Xc = fr.memo(Kc), Zc = ({ titleTxt: e }) => {
  const { base: t, title: r } = Aa();
  return /* @__PURE__ */ m.jsxs("div", { className: t(), children: [
    r && /* @__PURE__ */ m.jsx("div", { className: r(), children: e }),
    /* @__PURE__ */ m.jsx(lo, { orientation: rn.vertical })
  ] });
}, Qc = () => {
  const { aiProfile: e } = z(ut), t = z(hn) || [], r = z(uc), { base: o, second: s, date: l } = Ba(), { base: u } = Oa();
  return /* @__PURE__ */ m.jsx("div", { className: o(), children: /* @__PURE__ */ m.jsxs("div", { className: s(), "data-e2e": "history-container", children: [
    /* @__PURE__ */ m.jsx(Zc, { titleTxt: e.welcome }),
    /* @__PURE__ */ m.jsx("div", { className: l(), "data-e2e": "stream-assistant-msg-date", children: r }),
    t.map((a) => /* @__PURE__ */ m.jsx(
      "div",
      {
        className: u(),
        "data-e2e": "history-item",
        children: /* @__PURE__ */ m.jsx(Xc, { itemId: a })
      },
      pe()
    ))
  ] }) });
}, eu = ({ record: e }) => {
  const t = ze(), { action: r, separator: o } = Vi({ type: X.user }), s = () => {
    t(Zi({ ...e }));
  };
  return /* @__PURE__ */ m.jsxs("div", { className: o(), children: [
    /* @__PURE__ */ m.jsx("span", { children: e.text }),
    e.resend && !e.sent && /* @__PURE__ */ m.jsx("div", { className: r(), children: /* @__PURE__ */ m.jsx(zt, { outlined: !0, onClick: () => s(), children: /* @__PURE__ */ m.jsxs(
      "svg",
      {
        fill: "currentColor",
        viewBox: "0 0 24 24",
        width: "20px",
        height: "20px",
        children: [
          /* @__PURE__ */ m.jsx("path", { fill: "none", d: "M0 0h24v24H0V0z" }),
          /* @__PURE__ */ m.jsx("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" })
        ]
      }
    ) }) })
  ] });
}, tu = ({ config: e }) => {
  const t = ze();
  return t(Ps(e.meta)), t(Es(e.app.purpose)), t(Ss(e.specialUrls)), t(Ti(e.app)), /* @__PURE__ */ m.jsx(
    ba,
    {
      head: /* @__PURE__ */ m.jsx($c, {}),
      stream: /* @__PURE__ */ m.jsx(Qc, {}),
      foot: /* @__PURE__ */ m.jsx(Dc, {})
    }
  );
};
var te = {};
function ru(e) {
  return !!(e && typeof e.then == "function");
}
function lr(e) {
  return e || (e = 0), new Promise(function(t) {
    return setTimeout(t, e);
  });
}
function nu(e, t) {
  return Math.floor(Math.random() * (t - e + 1) + e);
}
function wr() {
  return Math.random().toString(36).substring(2);
}
var oi = 0, Lr = 0;
function yr() {
  var e = (/* @__PURE__ */ new Date()).getTime();
  return e === oi ? (Lr++, e * 1e3 + Lr) : (oi = e, Lr = 0, e * 1e3);
}
var Wt = Object.prototype.toString.call(typeof we.process < "u" ? we.process : 0) === "[object process]", iu = yr, ou = "native";
function su(e) {
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
function au(e) {
  e.bc.close(), e.subFns = [];
}
function cu(e, t) {
  try {
    return e.bc.postMessage(t, !1), Promise.resolve();
  } catch (r) {
    return Promise.reject(r);
  }
}
function uu(e, t) {
  e.messagesCallback = t;
}
function lu() {
  if (Wt && typeof window > "u")
    return !1;
  if (typeof BroadcastChannel == "function") {
    if (BroadcastChannel._pubkey)
      throw new Error("BroadcastChannel: Do not overwrite window.BroadcastChannel with this module, this is not a polyfill");
    return !0;
  } else
    return !1;
}
function fu() {
  return 150;
}
const du = {
  create: su,
  close: au,
  onMessage: uu,
  postMessage: cu,
  canBeUsed: lu,
  type: ou,
  averageResponseTime: fu,
  microSeconds: iu
};
var fo = (
  /** @class */
  function() {
    function e(t) {
      this.ttl = t, this.set = /* @__PURE__ */ new Set(), this.timeMap = /* @__PURE__ */ new Map();
    }
    return e.prototype.has = function(t) {
      return this.set.has(t);
    }, e.prototype.add = function(t) {
      var r = this;
      this.timeMap.set(t, po()), this.set.add(t), setTimeout(function() {
        pu(r);
      }, 0);
    }, e.prototype.clear = function() {
      this.set.clear(), this.timeMap.clear();
    }, e;
  }()
);
function pu(e) {
  for (var t = po() - e.ttl, r = e.set[Symbol.iterator](); ; ) {
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
function po() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function gr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = JSON.parse(JSON.stringify(e));
  return typeof t.webWorkerSupport > "u" && (t.webWorkerSupport = !0), t.idb || (t.idb = {}), t.idb.ttl || (t.idb.ttl = 1e3 * 45), t.idb.fallbackInterval || (t.idb.fallbackInterval = 150), e.idb && typeof e.idb.onclose == "function" && (t.idb.onclose = e.idb.onclose), t.localstorage || (t.localstorage = {}), t.localstorage.removeTimeout || (t.localstorage.removeTimeout = 1e3 * 60), e.methods && (t.methods = e.methods), t.node || (t.node = {}), t.node.ttl || (t.node.ttl = 1e3 * 60 * 2), typeof t.node.useFastPath > "u" && (t.node.useFastPath = !0), t;
}
var hu = yr, mu = "pubkey.broadcast-channel-0-", Ge = "messages", wu = "idb";
function ho() {
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
function yu(e) {
  var t = ho(), r = mu + e, o = t.open(r, 1);
  o.onupgradeneeded = function(l) {
    var u = l.target.result;
    u.createObjectStore(Ge, {
      keyPath: "id",
      autoIncrement: !0
    });
  };
  var s = new Promise(function(l, u) {
    o.onerror = function(a) {
      return u(a);
    }, o.onsuccess = function() {
      l(o.result);
    };
  });
  return s;
}
function gu(e, t, r) {
  var o = (/* @__PURE__ */ new Date()).getTime(), s = {
    uuid: t,
    time: o,
    data: r
  }, l = e.transaction([Ge], "readwrite");
  return new Promise(function(u, a) {
    l.oncomplete = function() {
      return u();
    }, l.onerror = function(b) {
      return a(b);
    };
    var h = l.objectStore(Ge);
    h.add(s);
  });
}
function vu(e, t) {
  var r = e.transaction(Ge).objectStore(Ge), o = [];
  function s() {
    try {
      var l = IDBKeyRange.bound(t + 1, 1 / 0);
      return r.openCursor(l);
    } catch {
      return r.openCursor();
    }
  }
  return new Promise(function(l) {
    s().onsuccess = function(u) {
      var a = u.target.result;
      a ? a.value.id < t + 1 ? a.continue(t + 1) : (o.push(a.value), a.continue()) : l(o);
    };
  });
}
function bu(e, t) {
  var r = e.transaction([Ge], "readwrite").objectStore(Ge).delete(t);
  return new Promise(function(o) {
    r.onsuccess = function() {
      return o();
    };
  });
}
function xu(e, t) {
  var r = (/* @__PURE__ */ new Date()).getTime() - t, o = e.transaction(Ge).objectStore(Ge), s = [];
  return new Promise(function(l) {
    o.openCursor().onsuccess = function(u) {
      var a = u.target.result;
      if (a) {
        var h = a.value;
        if (h.time < r)
          s.push(h), a.continue();
        else {
          l(s);
          return;
        }
      } else
        l(s);
    };
  });
}
function Eu(e, t) {
  return xu(e, t).then(function(r) {
    return Promise.all(r.map(function(o) {
      return bu(e, o.id);
    }));
  });
}
function Su(e, t) {
  return t = gr(t), yu(e).then(function(r) {
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
      eMIs: new fo(t.idb.ttl * 2),
      // ensures we do not read messages in parrallel
      writeBlockPromise: Promise.resolve(),
      messagesCallback: null,
      readQueuePromises: [],
      db: r
    };
    return r.onclose = function() {
      o.closed = !0, t.idb.onclose && t.idb.onclose();
    }, mo(o), o;
  });
}
function mo(e) {
  e.closed || wo(e).then(function() {
    return lr(e.options.idb.fallbackInterval);
  }).then(function() {
    return mo(e);
  });
}
function _u(e, t) {
  return !(e.uuid === t.uuid || t.eMIs.has(e.id) || e.data.time < t.messagesCallbackTime);
}
function wo(e) {
  return e.closed || !e.messagesCallback ? Promise.resolve() : vu(e.db, e.lastCursorId).then(function(t) {
    var r = t.filter(function(o) {
      return !!o;
    }).map(function(o) {
      return o.id > e.lastCursorId && (e.lastCursorId = o.id), o;
    }).filter(function(o) {
      return _u(o, e);
    }).sort(function(o, s) {
      return o.time - s.time;
    });
    return r.forEach(function(o) {
      e.messagesCallback && (e.eMIs.add(o.id), e.messagesCallback(o.data));
    }), Promise.resolve();
  });
}
function Iu(e) {
  e.closed = !0, e.db.close();
}
function Tu(e, t) {
  return e.writeBlockPromise = e.writeBlockPromise.then(function() {
    return gu(e.db, e.uuid, t);
  }).then(function() {
    nu(0, 10) === 0 && Eu(e.db, e.options.idb.ttl);
  }), e.writeBlockPromise;
}
function Pu(e, t, r) {
  e.messagesCallbackTime = r, e.messagesCallback = t, wo(e);
}
function Cu() {
  if (Wt)
    return !1;
  var e = ho();
  return !!e;
}
function ku(e) {
  return e.idb.fallbackInterval * 2;
}
const ju = {
  create: Su,
  close: Iu,
  onMessage: Pu,
  postMessage: Tu,
  canBeUsed: Cu,
  type: wu,
  averageResponseTime: ku,
  microSeconds: hu
};
var Ru = yr, Lu = "pubkey.broadcastChannel-", Mu = "localstorage";
function yo() {
  var e;
  if (typeof window > "u")
    return null;
  try {
    e = window.localStorage, e = window["ie8-eventlistener/storage"] || window.localStorage;
  } catch {
  }
  return e;
}
function go(e) {
  return Lu + e;
}
function Bu(e, t) {
  return new Promise(function(r) {
    lr().then(function() {
      var o = go(e.channelName), s = {
        token: wr(),
        time: (/* @__PURE__ */ new Date()).getTime(),
        data: t,
        uuid: e.uuid
      }, l = JSON.stringify(s);
      yo().setItem(o, l);
      var u = document.createEvent("Event");
      u.initEvent("storage", !0, !0), u.key = o, u.newValue = l, window.dispatchEvent(u), r();
    });
  });
}
function Au(e, t) {
  var r = go(e), o = function(l) {
    l.key === r && t(JSON.parse(l.newValue));
  };
  return window.addEventListener("storage", o), o;
}
function Ou(e) {
  window.removeEventListener("storage", e);
}
function Nu(e, t) {
  if (t = gr(t), !vo())
    throw new Error("BroadcastChannel: localstorage cannot be used");
  var r = wr(), o = new fo(t.localstorage.removeTimeout), s = {
    channelName: e,
    uuid: r,
    eMIs: o
    // emittedMessagesIds
  };
  return s.listener = Au(e, function(l) {
    s.messagesCallback && l.uuid !== r && (!l.token || o.has(l.token) || l.data.time && l.data.time < s.messagesCallbackTime || (o.add(l.token), s.messagesCallback(l.data)));
  }), s;
}
function Fu(e) {
  Ou(e.listener);
}
function Du(e, t, r) {
  e.messagesCallbackTime = r, e.messagesCallback = t;
}
function vo() {
  if (Wt)
    return !1;
  var e = yo();
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
function Uu() {
  var e = 120, t = navigator.userAgent.toLowerCase();
  return t.includes("safari") && !t.includes("chrome") ? e * 2 : e;
}
const $u = {
  create: Nu,
  close: Fu,
  onMessage: Du,
  postMessage: Bu,
  canBeUsed: vo,
  type: Mu,
  averageResponseTime: Uu,
  microSeconds: Ru
};
var zu = yr, Vu = "simulate", gn = /* @__PURE__ */ new Set();
function Wu(e) {
  var t = {
    name: e,
    messagesCallback: null
  };
  return gn.add(t), t;
}
function Gu(e) {
  gn.delete(e);
}
function qu(e, t) {
  return new Promise(function(r) {
    return setTimeout(function() {
      var o = Array.from(gn);
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
function Hu(e, t) {
  e.messagesCallback = t;
}
function Yu() {
  return !0;
}
function Ju() {
  return 5;
}
const Ku = {
  create: Wu,
  close: Gu,
  onMessage: Hu,
  postMessage: qu,
  canBeUsed: Yu,
  type: Vu,
  averageResponseTime: Ju,
  microSeconds: zu
};
var Kr = [
  du,
  // fastest
  ju,
  $u
];
if (Wt) {
  var si = require("../../src/methods/node.js");
  typeof si.canBeUsed == "function" && Kr.push(si);
}
function bo(e) {
  var t = [].concat(e.methods, Kr).filter(Boolean);
  if (e.type) {
    if (e.type === "simulate")
      return Ku;
    var r = t.find(function(s) {
      return s.type === e.type;
    });
    if (r)
      return r;
    throw new Error("method-type " + e.type + " not found");
  }
  !e.webWorkerSupport && !Wt && (t = t.filter(function(s) {
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
var vn = function(t, r) {
  this.name = t, Xr && (r = Xr), this.options = gr(r), this.method = bo(this.options), this._iL = !1, this._onML = null, this._addEL = {
    message: [],
    internal: []
  }, this._uMP = /* @__PURE__ */ new Set(), this._befC = [], this._prepP = null, Qu(this);
};
vn._pubkey = !0;
function Xu(e) {
  e = gr(e);
  var t = bo(e);
  return t.type === "node" ? t.clearNodeFolder().then(function() {
    return !0;
  }) : Promise.resolve(!1);
}
var Xr;
function Zu(e) {
  Xr = e;
}
vn.prototype = {
  postMessage: function(t) {
    if (this.closed)
      throw new Error("BroadcastChannel.postMessage(): Cannot post message after channel has closed");
    return ai(this, "message", t);
  },
  postInternal: function(t) {
    return ai(this, "internal", t);
  },
  set onmessage(e) {
    var t = this.method.microSeconds(), r = {
      time: t,
      fn: e
    };
    ui(this, "message", this._onML), e && typeof e == "function" ? (this._onML = r, ci(this, "message", r)) : this._onML = null;
  },
  addEventListener: function(t, r) {
    var o = this.method.microSeconds(), s = {
      time: o,
      fn: r
    };
    ci(this, t, s);
  },
  removeEventListener: function(t, r) {
    var o = this._addEL[t].find(function(s) {
      return s.fn === r;
    });
    ui(this, t, o);
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
function ai(e, t, r) {
  var o = e.method.microSeconds(), s = {
    time: o,
    type: t,
    data: r
  }, l = e._prepP ? e._prepP : Promise.resolve();
  return l.then(function() {
    var u = e.method.postMessage(e._state, s);
    return e._uMP.add(u), u.catch().then(function() {
      return e._uMP.delete(u);
    }), u;
  });
}
function Qu(e) {
  var t = e.method.create(e.name, e.options);
  ru(t) ? (e._prepP = t, t.then(function(r) {
    e._state = r;
  })) : e._state = t;
}
function xo(e) {
  return e._addEL.message.length > 0 || e._addEL.internal.length > 0;
}
function ci(e, t, r) {
  e._addEL[t].push(r), el(e);
}
function ui(e, t, r) {
  e._addEL[t] = e._addEL[t].filter(function(o) {
    return o !== r;
  }), tl(e);
}
function el(e) {
  if (!e._iL && xo(e)) {
    var t = function(s) {
      e._addEL[s.type].forEach(function(l) {
        s.time >= l.time && l.fn(s.data);
      });
    }, r = e.method.microSeconds();
    e._prepP ? e._prepP.then(function() {
      e._iL = !0, e.method.onMessage(e._state, t, r);
    }) : (e._iL = !0, e.method.onMessage(e._state, t, r));
  }
}
function tl(e) {
  if (e._iL && !xo(e)) {
    e._iL = !1;
    var t = e.method.microSeconds();
    e.method.onMessage(e._state, null, t);
  }
}
const rl = Object.prototype.toString.call(typeof we.process < "u" ? we.process : 0) === "[object process]";
function nl(e) {
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
const il = {
  add: nl
}, ol = {};
var sl = rl ? ol : il, at = /* @__PURE__ */ new Set(), li = !1;
function al() {
  li || (li = !0, sl.add(Eo));
}
function cl(e) {
  if (al(), typeof e != "function")
    throw new Error("Listener is no function");
  at.add(e);
  var t = {
    remove: function() {
      return at.delete(e);
    },
    run: function() {
      return at.delete(e), e();
    }
  };
  return t;
}
function Eo() {
  var e = [];
  return at.forEach(function(t) {
    e.push(t()), at.delete(t);
  }), Promise.all(e);
}
function ul() {
  at.clear();
}
function ll() {
  return at.size;
}
const fl = {
  add: cl,
  runAll: Eo,
  removeAll: ul,
  getSize: ll
};
var So = function(t, r) {
  this._channel = t, this._options = r, this.isLeader = !1, this.isDead = !1, this.token = wr(), this._isApl = !1, this._reApply = !1, this._unl = [], this._lstns = [], this._invs = [], this._dpL = function() {
  }, this._dpLC = !1;
};
So.prototype = {
  applyOnce: function() {
    var t = this;
    if (this.isLeader || this.isDead)
      return Promise.resolve(!1);
    if (this._isApl)
      return this._reApply = !0, Promise.resolve(!1);
    this._isApl = !0;
    var r = !1, o = function(u) {
      u.context === "leader" && u.token != t.token && (u.action === "apply" && u.token > t.token && (r = !0), u.action === "tell" && (r = !0));
    };
    this._channel.addEventListener("internal", o);
    var s = st(this, "apply").then(function() {
      return lr(t._options.responseTime);
    }).then(function() {
      return r ? Promise.reject(new Error()) : st(t, "apply");
    }).then(function() {
      return lr(t._options.responseTime);
    }).then(function() {
      return r ? Promise.reject(new Error()) : st(t);
    }).then(function() {
      return _o(t);
    }).then(function() {
      return !0;
    }).catch(function() {
      return !1;
    }).then(function(l) {
      return t._channel.removeEventListener("internal", o), t._isApl = !1, !l && t._reApply ? (t._reApply = !1, t.applyOnce()) : l;
    });
    return s;
  },
  awaitLeadership: function() {
    return this._aLP || (this._aLP = dl(this)), this._aLP;
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
      }), st(this, "death");
  }
};
function dl(e) {
  return e.isLeader ? Promise.resolve() : new Promise(function(t) {
    var r = !1;
    function o() {
      r || (r = !0, clearInterval(s), e._channel.removeEventListener("internal", l), t(!0));
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
    var l = function(a) {
      a.context === "leader" && a.action === "death" && e.applyOnce().then(function() {
        e.isLeader && o();
      });
    };
    e._channel.addEventListener("internal", l), e._lstns.push(l);
  });
}
function st(e, t) {
  var r = {
    context: "leader",
    action: t,
    token: e.token
  };
  return e._channel.postInternal(r);
}
function _o(e) {
  e.isLeader = !0;
  var t = fl.add(function() {
    return e.die();
  });
  e._unl.push(t);
  var r = function(s) {
    s.context === "leader" && s.action === "apply" && st(e, "tell"), s.context === "leader" && s.action === "tell" && !e._dpLC && (e._dpLC = !0, e._dpL(), st(e, "tell"));
  };
  return e._channel.addEventListener("internal", r), e._lstns.push(r), st(e, "tell");
}
function pl(e, t) {
  return e || (e = {}), e = JSON.parse(JSON.stringify(e)), e.fallbackInterval || (e.fallbackInterval = 3e3), e.responseTime || (e.responseTime = t.method.averageResponseTime(t.options)), e;
}
function hl(e, t) {
  if (e._leaderElector)
    throw new Error("BroadcastChannel already has a leader-elector");
  t = pl(t, e);
  var r = new So(e, t);
  return e._befC.push(function() {
    return r.die();
  }), e._leaderElector = r, r;
}
const ml = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BroadcastChannel: vn,
  beLeader: _o,
  clearNodeFolder: Xu,
  createLeaderElection: hl,
  enforceOptions: Zu
}, Symbol.toStringTag, { value: "Module" })), wl = /* @__PURE__ */ ts(ml);
var bn;
Object.defineProperty(te, "__esModule", {
  value: !0
});
var Io = te.initMessageListener = te.initStateWithPrevTab = te.withReduxStateSync = te.createReduxStateSync = bn = te.createStateSyncMiddleware = te.WINDOW_STATE_SYNC_ID = te.INIT_MESSAGE_LISTENER = te.RECEIVE_INIT_STATE = te.SEND_INIT_STATE = te.GET_INIT_STATE = void 0;
te.generateUuidForAction = Co;
te.isActionAllowed = ko;
te.isActionSynced = Sl;
te.MessageListener = jo;
var yl = wl, Zr = 0, xn = te.GET_INIT_STATE = "&_GET_INIT_STATE", En = te.SEND_INIT_STATE = "&_SEND_INIT_STATE", Sn = te.RECEIVE_INIT_STATE = "&_RECEIVE_INIT_STATE", gl = te.INIT_MESSAGE_LISTENER = "&_INIT_MESSAGE_LISTENER", Qr = {
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
}, vl = function() {
  return { type: xn };
}, bl = function() {
  return { type: En };
}, xl = function(t) {
  return { type: Sn, payload: t };
}, El = function() {
  return { type: gl };
};
function Ze() {
  return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
}
function To() {
  return "" + Ze() + Ze() + "-" + Ze() + "-" + Ze() + "-" + Ze() + "-" + Ze() + Ze() + Ze();
}
var Po = te.WINDOW_STATE_SYNC_ID = To();
function Co(e) {
  var t = e;
  return t.$uuid = To(), t.$wuid = Po, t;
}
function ko(e) {
  var t = e.predicate, r = e.blacklist, o = e.whitelist, s = function() {
    return !0;
  };
  return t && typeof t == "function" ? s = t : Array.isArray(r) ? s = function(u) {
    return r.indexOf(u.type) < 0;
  } : Array.isArray(o) && (s = function(u) {
    return o.indexOf(u.type) >= 0;
  }), s;
}
function Sl(e) {
  return !!e.$isSync;
}
function jo(e) {
  var t = e.channel, r = e.dispatch, o = e.allowed, s = !1, l = {};
  this.handleOnMessage = function(u) {
    u.$wuid !== Po && u.type !== Sn && u.$uuid && u.$uuid !== Zr && (u.type === xn && !l[u.$wuid] ? (l[u.$wuid] = !0, r(bl())) : u.type === En && !l[u.$wuid] ? s || (s = !0, r(xl(u.payload))) : o(u) && (Zr = u.$uuid, r(Object.assign(u, {
      $isSync: !0
    }))));
  }, this.messageChannel = t, this.messageChannel.onmessage = this.handleOnMessage;
}
bn = te.createStateSyncMiddleware = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Qr, r = ko(t), o = new yl.BroadcastChannel(t.channel, t.broadcastChannelOption), s = t.prepareState || Qr.prepareState, l = null;
  return function(u) {
    var a = u.getState, h = u.dispatch;
    return function(b) {
      return function(g) {
        if (l || (l = new jo({ channel: o, dispatch: h, allowed: r })), g && !g.$uuid) {
          var y = Co(g);
          Zr = y.$uuid;
          try {
            if (g.type === En)
              return a() && (y.payload = s(a()), o.postMessage(y)), b(g);
            (r(y) || g.type === xn) && o.postMessage(y);
          } catch {
            console.error("Your browser doesn't support cross tab communication");
          }
        }
        return b(Object.assign(g, {
          $isSync: typeof g.$isSync > "u" ? !1 : g.$isSync
        }));
      };
    };
  };
};
var _l = te.createReduxStateSync = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qr.receiveState;
  return function(o, s) {
    var l = o;
    return s.type === Sn && (l = r(o, s.payload)), t(l, s);
  };
};
te.withReduxStateSync = _l;
te.initStateWithPrevTab = function(t) {
  var r = t.dispatch;
  r(vl());
};
Io = te.initMessageListener = function(t) {
  var r = t.dispatch;
  r(El());
};
Lo = Ro = void 0;
var Il = "persist/PERSIST", Ro = Il, Tl = "persist/PURGE", Lo = Tl, _n = {}, In = {};
In.__esModule = !0;
In.default = kl;
function ir(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ir = function(r) {
    return typeof r;
  } : ir = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, ir(e);
}
function Mr() {
}
var Pl = {
  getItem: Mr,
  setItem: Mr,
  removeItem: Mr
};
function Cl(e) {
  if ((typeof self > "u" ? "undefined" : ir(self)) !== "object" || !(e in self))
    return !1;
  try {
    var t = self[e], r = "redux-persist ".concat(e, " test");
    t.setItem(r, "test"), t.getItem(r), t.removeItem(r);
  } catch {
    return we.process.env.NODE_ENV !== "production" && console.warn("redux-persist ".concat(e, " test failed, persistence will be disabled.")), !1;
  }
  return !0;
}
function kl(e) {
  var t = "".concat(e, "Storage");
  return Cl(t) ? self[t] : (we.process.env.NODE_ENV !== "production" && console.error("redux-persist failed to create sync storage. falling back to noop storage."), Pl);
}
_n.__esModule = !0;
_n.default = Ll;
var jl = Rl(In);
function Rl(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ll(e) {
  var t = (0, jl.default)(e);
  return {
    getItem: function(o) {
      return new Promise(function(s, l) {
        s(t.getItem(o));
      });
    },
    setItem: function(o, s) {
      return new Promise(function(l, u) {
        l(t.setItem(o, s));
      });
    },
    removeItem: function(o) {
      return new Promise(function(s, l) {
        s(t.removeItem(o));
      });
    }
  };
}
var Mo = void 0, Ml = Bl(_n);
function Bl(e) {
  return e && e.__esModule ? e : { default: e };
}
var Al = (0, Ml.default)("local");
Mo = Al;
const Ol = (e) => (t) => {
  const r = (o) => {
    var u;
    const { meta: s } = e.getState(), l = {};
    return s.pd && typeof o == "object" && "billingOptionType" in o ? (o.billingFrequencyTmsg = o.billingOptionType === "one-time" ? s.pd.oneTimer : (u = s.pd.subscriberBillingFrequency) == null ? void 0 : u.replace(
      "{1}",
      o.frequencyInMonths
    ), o = { ...o, ...l }, o) : l;
  };
  return Ue.core.on(Ue.type.emailSuccess, () => {
    const { meta: o, intentions: s } = e.getState();
    e.dispatch(Jr(!1)), e.dispatch(ti("")), e.dispatch(
      ur({
        id: pe(),
        role: X.user,
        sequence: 1,
        term: ee(),
        content: {
          sequence: 1,
          text: s.email.current,
          resend: !1,
          sent: !0,
          groupId: ""
        }
      })
    ), e.dispatch(mn(s.email.current)), e.dispatch(xc(!0)), Ie({
      eventType: Se.emailEntered,
      systemType: o.systemType,
      utmParams: o.marketing.lastUtmParams,
      customerUuid: o.cid,
      email: s.email.current
    });
  }), Ue.core.on(Ue.type.emailError, (o) => {
    const { meta: s, intentions: l, config: u } = e.getState(), { tm716: a, tm526: h, tm715: b, tm505: g } = u.translations;
    if (e.dispatch(Jr(!1)), o.status === 409) {
      e.dispatch(Ji({
        content: a,
        buttons: [
          { sequence: 1, id: "opt-1", text: h, value: h, link: o.data.buttonLink, noStream: !0 },
          { sequence: 2, id: "opt-2", text: b, value: b, link: "", noStream: !0 }
        ]
      })), Ie({
        eventType: Se.emailExist,
        systemType: s.systemType,
        utmParams: s.marketing.lastUtmParams,
        customerUuid: s.cid,
        email: l.email.current
      });
      return;
    }
    o.status === 422 && (e.dispatch(ti(o.errors.email[0] || g)), Ie({
      eventType: Se.emailWrong,
      systemType: s.systemType,
      utmParams: s.marketing.lastUtmParams,
      customerUuid: s.cid,
      email: l.email.current
    }));
  }), fi("marketing", e, Cs), fi(
    "__pd",
    e,
    ks,
    r
  ), (o) => {
    if (to.match(o) && o.payload) {
      const { meta: s, intentions: l } = e.getState();
      Ie({
        eventType: Se.linkProvided,
        systemType: s.systemType,
        utmParams: s.marketing.lastUtmParams,
        customerUuid: s.cid,
        email: l.email.current
      });
    }
    t(o);
  };
}, fi = (e, t, r, o) => {
  const s = setInterval(() => {
    let l = localStorage.getItem(e) || "";
    try {
      l = JSON.parse(l);
    } catch {
      l = localStorage.getItem(e) || "";
    }
    o && l && (l = o(l)), o && l && (t.dispatch(r(l)), clearInterval(s));
  }, Va);
};
let de;
const Nl = (e) => (t) => (r) => {
  const { meta: o, chat: s, config: l } = e.getState(), u = s.thread[ee()], a = () => {
    const { config: y } = e.getState();
    e.dispatch(Bt()), e.dispatch(Zt(y.translations.error));
  }, h = () => {
    e.dispatch(Qn({ itemId: [...s.record[u].historyIds].pop() })), a();
  }, b = (y) => {
    if (y.role === X.user && e.dispatch(Xt()), de && de.connected && y.message.trim() !== "") {
      de.emit(
        je.chat,
        {
          time: (/* @__PURE__ */ new Date()).getTime(),
          threadId: s.thread[ee()],
          ...y
        },
        di(h)
      ), e.dispatch(jr());
      return;
    }
    h();
  }, g = ({ itemId: y }) => {
    e.dispatch(Xt());
    const E = () => {
      const { config: R } = e.getState();
      e.dispatch(Qn({ itemId: y })), e.dispatch(Bt()), e.dispatch(Zt(R.translations.error));
    }, I = s.record[u].historyData[y].content.map((R) => R.text).join([`
`]);
    de != null && de.connected && I.trim() !== "" ? (de.volatile.emit(
      je.chat,
      {
        role: X.user,
        message: I,
        term: ee(),
        threadId: s.thread[ee()],
        region: o.region,
        messageId: y,
        userId: o.cid
      },
      di(E)
    ), e.dispatch(jr())) : E();
  };
  if (mn.match(r) && !r.$isSync && b({
    role: X.user,
    message: r.payload,
    term: ee(),
    region: o.region,
    userId: o.cid,
    messageId: [...s.record[u].historyIds].pop()
  }), hr.match(r)) {
    const y = document.querySelector("#chatbot-container");
    document.body && y && l.purpose !== on && (y.innerHTML = "", document.body.classList.remove(Gi)), localStorage.setItem($a, (/* @__PURE__ */ new Date()).getTime().toString()), de && de.close(), window.location.href = l.close.href || Ga;
  }
  if (Xi.match(r) && r.payload && !("$isSync" in r)) {
    const y = [...s.record[u].historyIds].pop(), E = s.record[u].historyData[y], I = s.record[u].historyData[y].content.map(({ text: R }) => R).join(`
`);
    E.role === X.user && I.trim() !== "" && b({
      role: X.user,
      message: I,
      term: ee(),
      region: o.region,
      messageId: y,
      userId: o.cid
    });
  }
  if (Zi.match(r) && !("$isSync" in r) && g(r.payload), !Ti.match(r))
    return t(r);
  e.dispatch(Xt()), de = es.connect(r.payload.chatUrl, { query: `cid=${o.cid}`, ...Ha }), de.on(je.connect, () => {
    const { meta: y } = e.getState();
    de.sendBuffer = [], de.emit(je.chatHistory, { userId: y.cid, region: y.region, term: ee() }), e.dispatch(Zn(!0)), e.dispatch(Ki(pe()));
  }), de.on(
    je.chatHistory,
    ({
      history: y,
      errors: E,
      region: I,
      term: R,
      threadId: P
    }) => {
      e.dispatch(Bt()), e.dispatch(Rr(!1)), e.dispatch(js(I)), e.dispatch(yc({ threadId: P }));
      const { config: Z, meta: L } = e.getState();
      if (E.length) {
        e.dispatch(Zt(E[0]));
        return;
      }
      if (y.length) {
        e.dispatch(gc({ history: y, term: R })), e.dispatch(hc({ history: y, term: R }));
        return;
      }
      !r.$isSync && e.dispatch(mc({ term: ee(), thread: u })), !r.$isSync && e.dispatch(Xt());
      let A = 0;
      Z.aiProfile.initialMessage.forEach(
        (he, ce, ie) => {
          A += 1e3, setTimeout(() => {
            !r.$isSync && e.dispatch(wc({ message: he, term: ee() })), ie.length === ce + 1 && (!r.$isSync && Z.aiProfile.initialMessage.forEach(
              (ye) => b({
                role: X.assistant,
                term: ee(),
                message: JSON.stringify(ye.content),
                region: L.region,
                userId: L.cid,
                messageId: ye.id
              })
            ), e.dispatch(Bt()));
          }, A);
        }
      );
    }
  ), de.on(je.streamStart, ({ id: y, term: E }) => {
    e.dispatch(Rr(!0)), e.dispatch(Bt()), e.dispatch(pc()), e.dispatch(jr()), e.dispatch(
      ei({
        id: y,
        term: E
      })
    );
  }), de.on(
    je.streamData,
    (y) => {
      var E;
      e.dispatch(
        ei({
          id: y.id,
          sequence: y.sequence,
          term: y.term,
          content: {
            type: y.type,
            [y.type]: y[y.type],
            sequence: y.sequence
          }
        })
      ), (E = y.errors) != null && E.length && !s.error && e.dispatch(Zt(y.errors[0]));
    }
  ), de.on(je.streamEnd, () => {
    e.dispatch(Rr(!1));
  }), de.on(je.streamError, a), de.on(je.error, a), de.on(je.disconnect, () => {
    e.dispatch(Zn(!1));
  }), t(r);
}, di = (e, t = 5e3) => {
  let r = !1;
  const o = setTimeout(() => {
    r || (r = !0, e());
  }, t);
  return () => {
    r || (r = !0, clearTimeout(o));
  };
}, Fl = {
  key: "root",
  storage: Mo,
  whitelist: ["chat", "meta", "config"]
}, Tn = Jo({
  reducer: Zo(Fl, Ko({
    meta: Rs,
    config: Ts,
    chat: vc,
    intentions: Pc
  })),
  middleware: (e) => e({ serializableCheck: !1 }).concat(Nl, Ol, bn({ blacklist: [Ro, Lo] }))
});
Io(Tn);
const Dl = Qo(Tn);
let pi = !1;
const rf = (e) => {
  pi || (pi = !0, At.createRoot(e.root).render(
    /* @__PURE__ */ m.jsx(Yo, { store: Tn, children: /* @__PURE__ */ m.jsx(xi, { persistor: Dl, children: /* @__PURE__ */ m.jsx(tu, { config: e.initialConfig }) }) })
  ), document.body.classList.add(Gi));
};
export {
  rf as ReactBotClient,
  rf as default,
  Ue as intent
};
//# sourceMappingURL=index.es.js.map
