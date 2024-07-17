(function(){"use strict";try{if(typeof document<"u"){const t=document.createElement("style");t.id="react-tw-ai-client",t.appendChild(document.createTextNode('*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:Plus Jakarta Sans,Roboto,Mulish,Exo,Helvetica,Arial,sans-serif;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.tw--pointer-events-none{pointer-events:none}.tw--pointer-events-auto{pointer-events:auto}.tw--fixed{position:fixed}.tw--absolute{position:absolute}.tw--relative{position:relative}.tw---top-1\\/2{top:-50%}.tw--bottom-0{bottom:0}.tw--bottom-1{bottom:.25rem}.tw--bottom-\\[-16px\\]{bottom:-16px}.tw--left-0{left:0}.tw--right-0{right:0}.tw--right-4{right:1rem}.tw--right-\\[-10px\\]{right:-10px}.tw--top-0{top:0}.tw--top-8{top:2rem}.tw--top-\\[-30px\\]{top:-30px}.tw--top-\\[50\\%\\]{top:50%}.tw--z-50{z-index:50}.tw--z-\\[101\\]{z-index:101}.tw--z-\\[9999\\]{z-index:9999}.tw--m-0{margin:0}.tw--m-auto{margin:auto}.tw--mx-10{margin-left:2.5rem;margin-right:2.5rem}.tw--mx-\\[30px\\]{margin-left:30px;margin-right:30px}.tw--mx-auto{margin-left:auto;margin-right:auto}.tw--my-4{margin-top:1rem;margin-bottom:1rem}.tw--mb-5{margin-bottom:1.25rem}.tw--mb-6{margin-bottom:1.5rem}.tw--mb-7{margin-bottom:1.75rem}.tw--mb-\\[11px\\]{margin-bottom:11px}.tw--mb-auto{margin-bottom:auto}.tw--ml-7{margin-left:1.75rem}.tw--ml-auto{margin-left:auto}.tw--mr-0{margin-right:0}.tw--mr-5{margin-right:1.25rem}.tw--mr-\\[5px\\]{margin-right:5px}.tw--mt-0{margin-top:0}.tw--mt-20{margin-top:5rem}.tw--mt-24{margin-top:6rem}.tw--mt-\\[11px\\]{margin-top:11px}.tw--mt-\\[30px\\]{margin-top:30px}.tw--box-border{box-sizing:border-box}.tw--box-content{box-sizing:content-box}.tw--block{display:block}.tw--inline-block{display:inline-block}.tw--flex{display:flex}.tw--grid{display:grid}.tw--hidden{display:none}.tw--h-16{height:4rem}.tw--h-4{height:1rem}.tw--h-6{height:1.5rem}.tw--h-8{height:2rem}.tw--h-\\[12px\\]{height:12px}.tw--h-\\[200px\\]{height:200px}.tw--h-\\[50px\\]{height:50px}.tw--h-\\[60px\\]{height:60px}.tw--h-fit{height:-moz-fit-content;height:fit-content}.tw--h-full{height:100%}.tw--h-screen{height:100vh}.tw--max-h-\\[700px\\]{max-height:700px}.tw--max-h-screen{max-height:100vh}.tw--min-h-\\[315px\\]{min-height:315px}.tw--min-h-\\[400px\\]{min-height:400px}.tw--w-16{width:4rem}.tw--w-4{width:1rem}.tw--w-6{width:1.5rem}.tw--w-64{width:16rem}.tw--w-8{width:2rem}.tw--w-\\[12px\\]{width:12px}.tw--w-\\[300px\\]{width:300px}.tw--w-fit{width:-moz-fit-content;width:fit-content}.tw--w-full{width:100%}.tw--w-screen{width:100vw}.tw--max-w-\\[280px\\]{max-width:280px}.tw--max-w-\\[335px\\]{max-width:335px}.tw--max-w-\\[375px\\]{max-width:375px}.tw--max-w-\\[400px\\]{max-width:400px}.tw--max-w-\\[500px\\]{max-width:500px}.tw--max-w-md{max-width:28rem}.tw--max-w-xs{max-width:20rem}.tw--flex-1{flex:1 1 0%}.tw--shrink{flex-shrink:1}.tw--shrink-0{flex-shrink:0}.tw--grow-0{flex-grow:0}.tw--translate-x-72{--tw-translate-x: 18rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.tw--translate-y-1\\/2{--tw-translate-y: 50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.tw--translate-y-\\[-50\\%\\]{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes tw--rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.tw--animate-rotate{animation:tw--rotate .5s linear infinite}@keyframes tw--text-spin{0%{transform:translate(18rem)}6.25%,12.5%{transform:translate(-.5rem)}18.75%,25%{transform:translate(-21.5rem)}31.25%,37.5%{transform:translate(-42.5rem)}43.75%,50%{transform:translate(-63.5rem)}56.25%,62.5%{transform:translate(-84.5rem)}68.75%,75%{transform:translate(-105.5rem)}81.25%,87.5%{transform:translate(-126.5rem)}93.75%,to{transform:translate(-147.5em)}}.tw--animate-text-spin{animation:tw--text-spin 30s linear infinite}.tw--animate-wave{animation:tw--wave 1.3s linear infinite}.tw--animate-wave-delay{animation:tw--wave 1.3s linear infinite -1.1s}@keyframes tw--wave{0%{transform:initial}60%{transform:initial}to{transform:initial}30%{transform:translateY(-15px)}}.tw--animate-wave-delay-2{animation:tw--wave 1.3s linear infinite -.9s}.tw--cursor-pointer{cursor:pointer}.tw--select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.tw--flex-row{flex-direction:row}.tw--flex-col{flex-direction:column}.tw--flex-col-reverse{flex-direction:column-reverse}.tw--flex-wrap{flex-wrap:wrap}.tw--items-end{align-items:flex-end}.tw--items-center{align-items:center}.tw--items-stretch{align-items:stretch}.tw--justify-center{justify-content:center}.tw--justify-between{justify-content:space-between}.tw--gap-2{gap:.5rem}.tw--space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.tw--space-x-\\[6px\\]>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(6px * var(--tw-space-x-reverse));margin-left:calc(6px * calc(1 - var(--tw-space-x-reverse)))}.tw--space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.tw--space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.25rem * var(--tw-space-y-reverse))}.tw--space-y-\\[10px\\]>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(10px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(10px * var(--tw-space-y-reverse))}.tw--space-y-\\[11px\\]>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(11px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(11px * var(--tw-space-y-reverse))}.tw--self-start{align-self:flex-start}.tw--self-stretch{align-self:stretch}.tw--justify-self-start{justify-self:start}.tw--justify-self-end{justify-self:end}.tw--justify-self-stretch{justify-self:stretch}.tw--overflow-hidden{overflow:hidden}.tw--overflow-y-scroll{overflow-y:scroll}.tw--whitespace-pre-wrap{white-space:pre-wrap}.tw--break-words{overflow-wrap:break-word}.tw--rounded-3xl{border-radius:1.5rem}.tw--rounded-\\[20px\\]{border-radius:20px}.tw--rounded-full{border-radius:9999px}.tw--rounded-lg{border-radius:.5rem}.tw--rounded-xl{border-radius:.75rem}.tw--border{border-width:1px}.tw--border-0{border-width:0px}.tw--border-\\[5px\\]{border-width:5px}.tw--border-r{border-right-width:1px}.tw--border-solid{border-style:solid}.tw--border-glaze{border-color:var(--glaze)}.tw--border-zephyr-200{border-color:var(--zephyr-200)}.tw--border-l-zephyr-600{border-left-color:var(--zephyr-600)}.tw--border-r-\\[\\#cacadb\\]{--tw-border-opacity: 1;border-right-color:rgb(202 202 219 / var(--tw-border-opacity))}.tw--border-t-zephyr-600{border-top-color:var(--zephyr-600)}.tw--bg-\\[\\#0f0e1e\\]{--tw-bg-opacity: 1;background-color:rgb(15 14 30 / var(--tw-bg-opacity))}.tw--bg-\\[transparent\\]{background-color:transparent}.tw--bg-glaze{background-color:var(--glaze)}.tw--bg-glazeBg{background-color:var(--glazeBg)}.tw--bg-iota-dots{background-color:var(--iota-dots)}.tw--bg-loader{background-color:var(--loader)}.tw--bg-lumina{background-color:var(--lumina)}.tw--bg-neon{background-color:var(--neon)}.tw--bg-overlay{background-color:var(--overlay)}.tw--bg-pale-dots{background-color:var(--pale-dots)}.tw--bg-seraph{background-color:var(--seraph)}.tw--bg-whisper{background-color:var(--whisper)}.tw--bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.tw--bg-zephyr-100{background-color:var(--zephyr-100)}.tw--bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.tw--from-\\[\\#FF0000\\]{--tw-gradient-from: #FF0000 var(--tw-gradient-from-position);--tw-gradient-to: rgb(255 0 0 / 0) var(--tw-gradient-to-position);--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)}.tw--to-\\[\\#F25640\\]{--tw-gradient-to: #F25640 var(--tw-gradient-to-position)}.tw--p-0{padding:0}.tw--p-0\\.5{padding:.125rem}.tw--p-1{padding:.25rem}.tw--p-3{padding:.75rem}.tw--p-5{padding:1.25rem}.tw--p-7{padding:1.75rem}.tw--px-1{padding-left:.25rem;padding-right:.25rem}.tw--px-4{padding-left:1rem;padding-right:1rem}.tw--px-5{padding-left:1.25rem;padding-right:1.25rem}.tw--px-\\[15px\\]{padding-left:15px;padding-right:15px}.tw--py-2{padding-top:.5rem;padding-bottom:.5rem}.tw--py-3{padding-top:.75rem;padding-bottom:.75rem}.tw--py-\\[11px\\]{padding-top:11px;padding-bottom:11px}.tw--pb-1{padding-bottom:.25rem}.tw--pb-10{padding-bottom:2.5rem}.tw--pb-5{padding-bottom:1.25rem}.tw--pb-6{padding-bottom:1.5rem}.tw--pb-\\[11px\\]{padding-bottom:11px}.tw--pb-\\[30px\\]{padding-bottom:30px}.tw--pb-\\[5px\\]{padding-bottom:5px}.tw--pl-\\[10px\\]{padding-left:10px}.tw--pl-\\[35px\\]{padding-left:35px}.tw--pr-2{padding-right:.5rem}.tw--pr-\\[5px\\]{padding-right:5px}.tw--pt-10{padding-top:2.5rem}.tw--pt-5{padding-top:1.25rem}.tw--text-left{text-align:left}.tw--text-center{text-align:center}.tw--text-2xl{font-size:1.5rem;line-height:2rem}.tw--text-\\[10px\\]{font-size:10px}.tw--text-\\[12\\.8px\\]{font-size:12.8px}.tw--text-\\[16px\\]{font-size:16px}.tw--text-\\[20px\\]{font-size:20px}.tw--text-\\[24px\\]{font-size:24px}.tw--text-lg{font-size:1.125rem;line-height:1.75rem}.tw--text-sm{font-size:.875rem;line-height:1.25rem}.tw--text-xl,.tw--text-xl\\/7{font-size:1.25rem;line-height:1.75rem}.tw--font-bold{font-weight:700}.tw--font-density-different{font-weight:var(--density-different)}.tw--font-extrabold{font-weight:800}.tw--font-medium{font-weight:500}.tw--font-semibold{font-weight:600}.tw--leading-5{line-height:1.25rem}.tw--leading-\\[1\\.4\\]{line-height:1.4}.tw--leading-\\[1\\.56\\]{line-height:1.56}.tw--leading-\\[1\\.63\\]{line-height:1.63}.tw--leading-\\[1\\]{line-height:1}.tw--leading-\\[2\\]{line-height:2}.tw--leading-\\[30px\\]{line-height:30px}.tw--text-\\[\\#21bb5a\\]{--tw-text-opacity: 1;color:rgb(33 187 90 / var(--tw-text-opacity))}.tw--text-\\[\\#ff0043\\]{--tw-text-opacity: 1;color:rgb(255 0 67 / var(--tw-text-opacity))}.tw--text-dots{color:var(--dots)}.tw--text-glazeText{color:var(--glazeText)}.tw--text-muted-blue{color:#0f0e1e99}.tw--text-seraph{color:var(--seraph)}.tw--text-whisper{color:var(--whisper)}.tw--text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.tw--text-zephyr-100{color:var(--zephyr-100)}.tw--text-zephyr-600{color:var(--zephyr-600)}.tw--text-zephyr-800{color:var(--zephyr-800)}.tw--text-zeta{color:var(--zeta)}.tw--underline{text-decoration-line:underline}.tw--opacity-40{opacity:.4}.tw--opacity-60{opacity:.6}.tw--shadow-\\[-1px_2px_5px_0\\]{--tw-shadow: -1px 2px 5px 0;--tw-shadow-colored: -1px 2px 5px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-\\[0px_12px_24px_-4px_rgba\\(1\\,154\\,255\\,0\\.2\\)\\]{--tw-shadow: 0px 12px 24px -4px rgba(1,154,255,.2);--tw-shadow-colored: 0px 12px 24px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-card{--tw-shadow: 0 12px 24px 0 rgba(var(--ze) .06), 0 4px 8px 0 rgba(var(--ze), .04);--tw-shadow-colored: 0 12px 24px 0 var(--tw-shadow-color), 0 4px 8px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-loading-dots{--tw-shadow: -24px 0 rgba(201, 201, 201, .5), 24px 0 rgba(201, 201, 201, .5);--tw-shadow-colored: -24px 0 var(--tw-shadow-color), 24px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.tw--shadow-zephyr-200{--tw-shadow-color: var(--zephyr-200);--tw-shadow: var(--tw-shadow-colored)}.tw--translate-z-0 *{transform:translateZ(0)}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.\\[key\\:string\\]{key:string}#chatbot-container *{font-family:inherit!important}.spaced-letters{letter-spacing:2px}.mt-8{margin-top:2rem}.mb-6{margin-bottom:1.5rem}.scroll-stop{overflow:hidden;position:fixed;left:0;right:0;top:0}span>p:last-child{display:inline;position:relative}.light{--lumina: #f0f2f5;--whisper: #ffffff;--seraph: #21bb5a;--ember: #cacadb;--enigma: #ffae19;--glaze: #21bb5a;--glazeText: #151226;--glazeBg: #ffffff;--sigma: #0f0e1e;--zeta: #0f0e1e;--status: #21bb5a;--loader: #f6f8fa;--dots: #21bb5a;--neon: #019aff;--pale-dots: #cacadb;--iota-dots: #21bb5a;--overlay: rgba(255, 255, 255, .6);--ze: 43, 49, 57;--zephyr-100: rgb(var(--ze));--zephyr-200: rgba(var(--ze), .1);--zephyr-600: rgba(var(--ze), .6);--zephyr-800: rgba(var(--ze), .8);--card: 0 12px 24px 0 rgba(43, 49, 57, .06), 0 4px 8px 0 rgba(43, 55, 70, .04);--loading-dots: -24px 0 rgba(201, 201, 201, .5), 24px 0 rgba(201, 201, 201, .5);--density-different: 500}.dark{--lumina: #252239;--whisper: #151226;--seraph: #f53373;--ember: #cacadb;--enigma: #ffae19;--glaze: #b3bac6;--glazeText: #151226;--glazeBg: #b3bac6;--sigma: #0f0e1e;--zeta: #ffffff;--status: #21bb5a;--loader: #252239;--dots: #f53374;--neon: #019aff;--pale-dots: #ffffff;--iota-dots: #21bb5a;--overlay: rgba(15, 14, 30, .9);--ze: 255, 255, 255;--zephyr-100: rgb(var(--ze));--zephyr-200: rgba(var(--ze), .1);--zephyr-600: rgba(var(--ze), .6);--zephyr-800: rgba(var(--ze), .8);--card: 0 12px 24px 0 rgba(0, 0, 0, .12), 0 4px 8px 0 rgba(0, 0, 0, .1);--loading-dots: -24px 0 rgba(255, 255, 255, .5), 24px 0 rgba(255, 255, 255, .5);--density-different: 400}ul,ol{list-style:auto;list-style-position:inside;display:flex;flex-direction:column}ul{list-style-position:inside;list-style-type:disc}li{padding:0;position:relative}li:last-child{width:-moz-fit-content;width:fit-content}li+li{margin-top:0}span:not(.after\\:tw--hidden) ol:last-child li:last-child:after,span:not(.after\\:tw--hidden) ul:last-child li:last-child:after,span:not(.after\\:tw--hidden) p:last-child:after{content:"";width:.25rem;height:1rem;display:inline-block;background:var(--zephyr-100);position:absolute;left:auto;bottom:4px}@keyframes tw--blink{0%{opacity:1}49%{opacity:1}50%{opacity:0}to{opacity:0}}span:not(.after\\:tw--hidden) ol:last-child li:last-child:after,span:not(.after\\:tw--hidden) ul:last-child li:last-child:after,span:not(.after\\:tw--hidden) p:last-child:after{animation:tw--blink .5s infinite}span:not(.after\\:tw--hidden):has(ol li):after,span:not(.after\\:tw--hidden):has(ul li):after,span:not(.after\\:tw--hidden):has(p:last-child):after{display:none}.after\\:tw--absolute:after{content:var(--tw-content);position:absolute}.after\\:tw--bottom-\\[-2px\\]:after{content:var(--tw-content);bottom:-2px}.after\\:tw--left-\\[37px\\]:after{content:var(--tw-content);left:37px}.after\\:tw--z-10:after{content:var(--tw-content);z-index:10}.after\\:tw--ml-1:after{content:var(--tw-content);margin-left:.25rem}.after\\:tw--inline-block:after{content:var(--tw-content);display:inline-block}.after\\:tw--hidden:after{content:var(--tw-content);display:none}.after\\:tw--h-4:after{content:var(--tw-content);height:1rem}.after\\:tw--h-\\[10px\\]:after{content:var(--tw-content);height:10px}.after\\:tw--w-1:after{content:var(--tw-content);width:.25rem}.after\\:tw--w-\\[10px\\]:after{content:var(--tw-content);width:10px}@keyframes tw--blink{0%{content:var(--tw-content);opacity:1}49%{content:var(--tw-content);opacity:1}50%{content:var(--tw-content);opacity:0}to{content:var(--tw-content);opacity:0}}.after\\:tw--animate-blink:after{content:var(--tw-content);animation:tw--blink .5s infinite}.after\\:tw--rounded-full:after{content:var(--tw-content);border-radius:9999px}.after\\:tw--bg-iota-dots:after{content:var(--tw-content);background-color:var(--iota-dots)}.after\\:tw--bg-zephyr-100:after{content:var(--tw-content);background-color:var(--zephyr-100)}.focus\\:\\!tw--bg-lumina:focus{background-color:var(--lumina)!important}.focus\\:tw--outline-none:focus{outline:2px solid transparent;outline-offset:2px}@media (min-width: 350px){.customXs\\:tw--max-w-xs{max-width:20rem}.customXs\\:tw--text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width: 768px){.md\\:tw--w-\\[350px\\]{width:350px}.md\\:tw--max-w-\\[570px\\]{max-width:570px}.md\\:tw--max-w-\\[800px\\]{max-width:800px}}')),document.body.appendChild(t)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import $t, { PureComponent as ki, useState as ct, useLayoutEffect as Li, useEffect as dt, forwardRef as Gn, useRef as Cr, memo as Mi } from "react";
import Oi from "react-dom";
import { useDispatch as Ri, useSelector as Ni, Provider as Di } from "react-redux";
import { createSlice as Ft, configureStore as Ai, combineReducers as $i } from "@reduxjs/toolkit";
import Fi from "react-markdown";
import { persistReducer as zi, persistStore as Bi } from "redux-persist";
import { io as Ui } from "socket.io-client";
function Vi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qn = { exports: {} }, H = qn.exports = {}, be, xe;
function ar() {
  throw new Error("setTimeout has not been defined");
}
function cr() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? be = setTimeout : be = ar;
  } catch {
    be = ar;
  }
  try {
    typeof clearTimeout == "function" ? xe = clearTimeout : xe = cr;
  } catch {
    xe = cr;
  }
})();
function Hn(e) {
  if (be === setTimeout)
    return setTimeout(e, 0);
  if ((be === ar || !be) && setTimeout)
    return be = setTimeout, setTimeout(e, 0);
  try {
    return be(e, 0);
  } catch {
    try {
      return be.call(null, e, 0);
    } catch {
      return be.call(this, e, 0);
    }
  }
}
function Wi(e) {
  if (xe === clearTimeout)
    return clearTimeout(e);
  if ((xe === cr || !xe) && clearTimeout)
    return xe = clearTimeout, clearTimeout(e);
  try {
    return xe(e);
  } catch {
    try {
      return xe.call(null, e);
    } catch {
      return xe.call(this, e);
    }
  }
}
var Ce = [], Ge = !1, Re, Et = -1;
function Gi() {
  !Ge || !Re || (Ge = !1, Re.length ? Ce = Re.concat(Ce) : Et = -1, Ce.length && Yn());
}
function Yn() {
  if (!Ge) {
    var e = Hn(Gi);
    Ge = !0;
    for (var t = Ce.length; t; ) {
      for (Re = Ce, Ce = []; ++Et < t; )
        Re && Re[Et].run();
      Et = -1, t = Ce.length;
    }
    Re = null, Ge = !1, Wi(e);
  }
}
H.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      t[r - 1] = arguments[r];
  Ce.push(new Jn(e, t)), Ce.length === 1 && !Ge && Hn(Yn);
};
function Jn(e, t) {
  this.fun = e, this.array = t;
}
Jn.prototype.run = function() {
  this.fun.apply(null, this.array);
};
H.title = "browser";
H.browser = !0;
H.env = {};
H.argv = [];
H.version = "";
H.versions = {};
function Ie() {
}
H.on = Ie;
H.addListener = Ie;
H.once = Ie;
H.off = Ie;
H.removeListener = Ie;
H.removeAllListeners = Ie;
H.emit = Ie;
H.prependListener = Ie;
H.prependOnceListener = Ie;
H.listeners = function(e) {
  return [];
};
H.binding = function(e) {
  throw new Error("process.binding is not supported");
};
H.cwd = function() {
  return "/";
};
H.chdir = function(e) {
  throw new Error("process.chdir is not supported");
};
H.umask = function() {
  return 0;
};
var qi = qn.exports;
const re = /* @__PURE__ */ Vi(qi);
function Hi(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var lr = { exports: {} }, Qe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pn;
function Yi() {
  if (pn) return Qe;
  pn = 1;
  var e = $t, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(c, d, u) {
    var f, m = {}, v = null, y = null;
    u !== void 0 && (v = "" + u), d.key !== void 0 && (v = "" + d.key), d.ref !== void 0 && (y = d.ref);
    for (f in d) n.call(d, f) && !s.hasOwnProperty(f) && (m[f] = d[f]);
    if (c && c.defaultProps) for (f in d = c.defaultProps, d) m[f] === void 0 && (m[f] = d[f]);
    return { $$typeof: t, type: c, key: v, ref: y, props: m, _owner: o.current };
  }
  return Qe.Fragment = r, Qe.jsx = i, Qe.jsxs = i, Qe;
}
var et = {}, mn;
function Ji() {
  return mn || (mn = 1, re.env.NODE_ENV !== "production" && function() {
    var e = $t, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), c = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), _ = Symbol.iterator, T = "@@iterator";
    function W(a) {
      if (a === null || typeof a != "object")
        return null;
      var p = _ && a[_] || a[T];
      return typeof p == "function" ? p : null;
    }
    var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function L(a) {
      {
        for (var p = arguments.length, h = new Array(p > 1 ? p - 1 : 0), x = 1; x < p; x++)
          h[x - 1] = arguments[x];
        B("error", a, h);
      }
    }
    function B(a, p, h) {
      {
        var x = S.ReactDebugCurrentFrame, R = x.getStackAddendum();
        R !== "" && (p += "%s", h = h.concat([R]));
        var $ = h.map(function(k) {
          return String(k);
        });
        $.unshift("Warning: " + p), Function.prototype.apply.call(console[a], console, $);
      }
    }
    var de = !1, I = !1, fe = !1, he = !1, ye = !1, ve;
    ve = Symbol.for("react.module.reference");
    function Pe(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === s || ye || a === o || a === u || a === f || he || a === y || de || I || fe || typeof a == "object" && a !== null && (a.$$typeof === v || a.$$typeof === m || a.$$typeof === i || a.$$typeof === c || a.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === ve || a.getModuleId !== void 0));
    }
    function ne(a, p, h) {
      var x = a.displayName;
      if (x)
        return x;
      var R = p.displayName || p.name || "";
      return R !== "" ? h + "(" + R + ")" : h;
    }
    function g(a) {
      return a.displayName || "Context";
    }
    function b(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && L("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case c:
            var p = a;
            return g(p) + ".Consumer";
          case i:
            var h = a;
            return g(h._context) + ".Provider";
          case d:
            return ne(a, a.render, "ForwardRef");
          case m:
            var x = a.displayName || null;
            return x !== null ? x : b(a.type) || "Memo";
          case v: {
            var R = a, $ = R._payload, k = R._init;
            try {
              return b(k($));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, E = 0, P, M, N, A, G, ie, ee;
    function Y() {
    }
    Y.__reactDisabledLog = !0;
    function Ke() {
      {
        if (E === 0) {
          P = console.log, M = console.info, N = console.warn, A = console.error, G = console.group, ie = console.groupCollapsed, ee = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: Y,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        E++;
      }
    }
    function ht() {
      {
        if (E--, E === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, a, {
              value: P
            }),
            info: w({}, a, {
              value: M
            }),
            warn: w({}, a, {
              value: N
            }),
            error: w({}, a, {
              value: A
            }),
            group: w({}, a, {
              value: G
            }),
            groupCollapsed: w({}, a, {
              value: ie
            }),
            groupEnd: w({}, a, {
              value: ee
            })
          });
        }
        E < 0 && L("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Xe = S.ReactCurrentDispatcher, Gt;
    function vt(a, p, h) {
      {
        if (Gt === void 0)
          try {
            throw Error();
          } catch (R) {
            var x = R.stack.trim().match(/\n( *(at )?)/);
            Gt = x && x[1] || "";
          }
        return `
` + Gt + a;
      }
    }
    var qt = !1, gt;
    {
      var ai = typeof WeakMap == "function" ? WeakMap : Map;
      gt = new ai();
    }
    function Zr(a, p) {
      if (!a || qt)
        return "";
      {
        var h = gt.get(a);
        if (h !== void 0)
          return h;
      }
      var x;
      qt = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $;
      $ = Xe.current, Xe.current = null, Ke();
      try {
        if (p) {
          var k = function() {
            throw Error();
          };
          if (Object.defineProperty(k.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(k, []);
            } catch (Ee) {
              x = Ee;
            }
            Reflect.construct(a, [], k);
          } else {
            try {
              k.call();
            } catch (Ee) {
              x = Ee;
            }
            a.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ee) {
            x = Ee;
          }
          a();
        }
      } catch (Ee) {
        if (Ee && x && typeof Ee.stack == "string") {
          for (var C = Ee.stack.split(`
`), oe = x.stack.split(`
`), q = C.length - 1, J = oe.length - 1; q >= 1 && J >= 0 && C[q] !== oe[J]; )
            J--;
          for (; q >= 1 && J >= 0; q--, J--)
            if (C[q] !== oe[J]) {
              if (q !== 1 || J !== 1)
                do
                  if (q--, J--, J < 0 || C[q] !== oe[J]) {
                    var pe = `
` + C[q].replace(" at new ", " at ");
                    return a.displayName && pe.includes("<anonymous>") && (pe = pe.replace("<anonymous>", a.displayName)), typeof a == "function" && gt.set(a, pe), pe;
                  }
                while (q >= 1 && J >= 0);
              break;
            }
        }
      } finally {
        qt = !1, Xe.current = $, ht(), Error.prepareStackTrace = R;
      }
      var Ue = a ? a.displayName || a.name : "", fn = Ue ? vt(Ue) : "";
      return typeof a == "function" && gt.set(a, fn), fn;
    }
    function ci(a, p, h) {
      return Zr(a, !1);
    }
    function li(a) {
      var p = a.prototype;
      return !!(p && p.isReactComponent);
    }
    function wt(a, p, h) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return Zr(a, li(a));
      if (typeof a == "string")
        return vt(a);
      switch (a) {
        case u:
          return vt("Suspense");
        case f:
          return vt("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case d:
            return ci(a.render);
          case m:
            return wt(a.type, p, h);
          case v: {
            var x = a, R = x._payload, $ = x._init;
            try {
              return wt($(R), p, h);
            } catch {
            }
          }
        }
      return "";
    }
    var yt = Object.prototype.hasOwnProperty, Qr = {}, en = S.ReactDebugCurrentFrame;
    function bt(a) {
      if (a) {
        var p = a._owner, h = wt(a.type, a._source, p ? p.type : null);
        en.setExtraStackFrame(h);
      } else
        en.setExtraStackFrame(null);
    }
    function ui(a, p, h, x, R) {
      {
        var $ = Function.call.bind(yt);
        for (var k in a)
          if ($(a, k)) {
            var C = void 0;
            try {
              if (typeof a[k] != "function") {
                var oe = Error((x || "React class") + ": " + h + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw oe.name = "Invariant Violation", oe;
              }
              C = a[k](p, k, x, h, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (q) {
              C = q;
            }
            C && !(C instanceof Error) && (bt(R), L("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", x || "React class", h, k, typeof C), bt(null)), C instanceof Error && !(C.message in Qr) && (Qr[C.message] = !0, bt(R), L("Failed %s type: %s", h, C.message), bt(null));
          }
      }
    }
    var di = Array.isArray;
    function Ht(a) {
      return di(a);
    }
    function fi(a) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, h = p && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return h;
      }
    }
    function pi(a) {
      try {
        return tn(a), !1;
      } catch {
        return !0;
      }
    }
    function tn(a) {
      return "" + a;
    }
    function rn(a) {
      if (pi(a))
        return L("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", fi(a)), tn(a);
    }
    var Ze = S.ReactCurrentOwner, mi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, nn, on, Yt;
    Yt = {};
    function hi(a) {
      if (yt.call(a, "ref")) {
        var p = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function vi(a) {
      if (yt.call(a, "key")) {
        var p = Object.getOwnPropertyDescriptor(a, "key").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function gi(a, p) {
      if (typeof a.ref == "string" && Ze.current && p && Ze.current.stateNode !== p) {
        var h = b(Ze.current.type);
        Yt[h] || (L('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b(Ze.current.type), a.ref), Yt[h] = !0);
      }
    }
    function wi(a, p) {
      {
        var h = function() {
          nn || (nn = !0, L("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        h.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: h,
          configurable: !0
        });
      }
    }
    function yi(a, p) {
      {
        var h = function() {
          on || (on = !0, L("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        h.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: h,
          configurable: !0
        });
      }
    }
    var bi = function(a, p, h, x, R, $, k) {
      var C = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: a,
        key: p,
        ref: h,
        props: k,
        // Record the component responsible for creating this element.
        _owner: $
      };
      return C._store = {}, Object.defineProperty(C._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(C, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.defineProperty(C, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(C.props), Object.freeze(C)), C;
    };
    function xi(a, p, h, x, R) {
      {
        var $, k = {}, C = null, oe = null;
        h !== void 0 && (rn(h), C = "" + h), vi(p) && (rn(p.key), C = "" + p.key), hi(p) && (oe = p.ref, gi(p, R));
        for ($ in p)
          yt.call(p, $) && !mi.hasOwnProperty($) && (k[$] = p[$]);
        if (a && a.defaultProps) {
          var q = a.defaultProps;
          for ($ in q)
            k[$] === void 0 && (k[$] = q[$]);
        }
        if (C || oe) {
          var J = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          C && wi(k, J), oe && yi(k, J);
        }
        return bi(a, C, oe, R, x, Ze.current, k);
      }
    }
    var Jt = S.ReactCurrentOwner, sn = S.ReactDebugCurrentFrame;
    function Be(a) {
      if (a) {
        var p = a._owner, h = wt(a.type, a._source, p ? p.type : null);
        sn.setExtraStackFrame(h);
      } else
        sn.setExtraStackFrame(null);
    }
    var Kt;
    Kt = !1;
    function Xt(a) {
      return typeof a == "object" && a !== null && a.$$typeof === t;
    }
    function an() {
      {
        if (Jt.current) {
          var a = b(Jt.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function _i(a) {
      return "";
    }
    var cn = {};
    function Si(a) {
      {
        var p = an();
        if (!p) {
          var h = typeof a == "string" ? a : a.displayName || a.name;
          h && (p = `

Check the top-level render call using <` + h + ">.");
        }
        return p;
      }
    }
    function ln(a, p) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var h = Si(p);
        if (cn[h])
          return;
        cn[h] = !0;
        var x = "";
        a && a._owner && a._owner !== Jt.current && (x = " It was passed a child from " + b(a._owner.type) + "."), Be(a), L('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', h, x), Be(null);
      }
    }
    function un(a, p) {
      {
        if (typeof a != "object")
          return;
        if (Ht(a))
          for (var h = 0; h < a.length; h++) {
            var x = a[h];
            Xt(x) && ln(x, p);
          }
        else if (Xt(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var R = W(a);
          if (typeof R == "function" && R !== a.entries)
            for (var $ = R.call(a), k; !(k = $.next()).done; )
              Xt(k.value) && ln(k.value, p);
        }
      }
    }
    function Ti(a) {
      {
        var p = a.type;
        if (p == null || typeof p == "string")
          return;
        var h;
        if (typeof p == "function")
          h = p.propTypes;
        else if (typeof p == "object" && (p.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        p.$$typeof === m))
          h = p.propTypes;
        else
          return;
        if (h) {
          var x = b(p);
          ui(h, a.props, "prop", x, a);
        } else if (p.PropTypes !== void 0 && !Kt) {
          Kt = !0;
          var R = b(p);
          L("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof p.getDefaultProps == "function" && !p.getDefaultProps.isReactClassApproved && L("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Pi(a) {
      {
        for (var p = Object.keys(a.props), h = 0; h < p.length; h++) {
          var x = p[h];
          if (x !== "children" && x !== "key") {
            Be(a), L("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", x), Be(null);
            break;
          }
        }
        a.ref !== null && (Be(a), L("Invalid attribute `ref` supplied to `React.Fragment`."), Be(null));
      }
    }
    function dn(a, p, h, x, R, $) {
      {
        var k = Pe(a);
        if (!k) {
          var C = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (C += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var oe = _i();
          oe ? C += oe : C += an();
          var q;
          a === null ? q = "null" : Ht(a) ? q = "array" : a !== void 0 && a.$$typeof === t ? (q = "<" + (b(a.type) || "Unknown") + " />", C = " Did you accidentally export a JSX literal instead of a component?") : q = typeof a, L("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", q, C);
        }
        var J = xi(a, p, h, R, $);
        if (J == null)
          return J;
        if (k) {
          var pe = p.children;
          if (pe !== void 0)
            if (x)
              if (Ht(pe)) {
                for (var Ue = 0; Ue < pe.length; Ue++)
                  un(pe[Ue], a);
                Object.freeze && Object.freeze(pe);
              } else
                L("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              un(pe, a);
        }
        return a === n ? Pi(J) : Ti(J), J;
      }
    }
    function Ei(a, p, h) {
      return dn(a, p, h, !0);
    }
    function Ci(a, p, h) {
      return dn(a, p, h, !1);
    }
    var ji = Ci, Ii = Ei;
    et.Fragment = n, et.jsx = ji, et.jsxs = Ii;
  }()), et;
}
re.env.NODE_ENV === "production" ? lr.exports = Yi() : lr.exports = Ji();
var l = lr.exports, st = {}, tt = Oi;
if (re.env.NODE_ENV === "production")
  st.createRoot = tt.createRoot, st.hydrateRoot = tt.hydrateRoot;
else {
  var xt = tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  st.createRoot = function(e, t) {
    xt.usingClientEntryPoint = !0;
    try {
      return tt.createRoot(e, t);
    } finally {
      xt.usingClientEntryPoint = !1;
    }
  }, st.hydrateRoot = function(e, t, r) {
    xt.usingClientEntryPoint = !0;
    try {
      return tt.hydrateRoot(e, t, r);
    } finally {
      xt.usingClientEntryPoint = !1;
    }
  };
}
function Ct(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ct = function(r) {
    return typeof r;
  } : Ct = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Ct(e);
}
function Ki(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Xi(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Zi(e, t, r) {
  return t && Xi(e.prototype, t), e;
}
function Qi(e, t) {
  return t && (Ct(t) === "object" || typeof t == "function") ? t : jt(e);
}
function ur(e) {
  return ur = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ur(e);
}
function jt(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function es(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && dr(e, t);
}
function dr(e, t) {
  return dr = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, dr(e, t);
}
function It(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Kn = /* @__PURE__ */ function(e) {
  es(t, e);
  function t() {
    var r, n;
    Ki(this, t);
    for (var o = arguments.length, s = new Array(o), i = 0; i < o; i++)
      s[i] = arguments[i];
    return n = Qi(this, (r = ur(t)).call.apply(r, [this].concat(s))), It(jt(n), "state", {
      bootstrapped: !1
    }), It(jt(n), "_unsubscribe", void 0), It(jt(n), "handlePersistorState", function() {
      var c = n.props.persistor, d = c.getState(), u = d.bootstrapped;
      u && (n.props.onBeforeLift ? Promise.resolve(n.props.onBeforeLift()).finally(function() {
        return n.setState({
          bootstrapped: !0
        });
      }) : n.setState({
        bootstrapped: !0
      }), n._unsubscribe && n._unsubscribe());
    }), n;
  }
  return Zi(t, [{
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
      return re.env.NODE_ENV !== "production" && typeof this.props.children == "function" && this.props.loading && console.error("redux-persist: PersistGate expects either a function child or loading prop, but not both. The loading prop will be ignored."), typeof this.props.children == "function" ? this.props.children(this.state.bootstrapped) : this.state.bootstrapped ? this.props.children : this.props.loading;
    }
  }]), t;
}(ki);
It(Kn, "defaultProps", {
  children: null,
  loading: null
});
var te = /* @__PURE__ */ ((e) => (e.text = "text", e.buttons = "buttons", e.payment = "payment", e.video = "video", e.image = "image", e.email = "email", e.special = "special", e))(te || {}), jr = /* @__PURE__ */ ((e) => (e.horizontal = "horizontal", e.vertical = "vertical", e))(jr || {}), Xn = /* @__PURE__ */ ((e) => (e.chat = "utm_chat", e))(Xn || {}), se = /* @__PURE__ */ ((e) => (e.addToCart = "AddToCart", e.contact = "Contact", e.initiateCheckout = "InitiateCheckout", e.pageView = "PageView", e.viewContent = "ViewContent", e.purchase = "Purchase", e.subscribe = "Subscribe", e.recurringSubscriptionPayment = "RecurringSubscriptionPayment", e.cancelSubscription = "CancelSubscription", e.purchaseFailed = "PurchaseFailed", e.subscribeFailed = "SubscribeFailed", e.recurringSubscriptionPaymentFailed = "RecurringSubscriptionPaymentFailed", e.customerCreated = "CustomerCreated", e.subscriptionChargeback = "SubscriptionChargeback", e.subscriptionRefund = "SubscriptionRefund", e.transactionChargeback = "TransactionChargeback", e.transactionRefund = "TransactionRefund", e.firstMessage = "FirstMessage", e.linkProvided = "LinkProvided", e.linkClicked = "LinkClicked", e.emailField = "EmailField", e.emailEntered = "EmailEntered", e.emailWrong = "EmailWrong", e.emailExist = "EmailExist", e.priceSeen = "PriceSeen", e.buttonClick = "ButtonClick", e.closeClicked = "CloseClicked", e))(se || {}), Zn = /* @__PURE__ */ ((e) => (e.email = "email_intent", e.payment = "payment_intent", e.emailError = "email_validation_error", e.emailSuccess = "email_validation_success", e.destroy = "payment_intent_destroy", e))(Zn || {}), U = /* @__PURE__ */ ((e) => (e.user = "user", e.assistant = "assistant", e))(U || {}), me = /* @__PURE__ */ ((e) => (e.chat = "chat", e.chatHistory = "chat-history", e.connect = "connect", e.error = "error", e.disconnect = "disconnect", e.streamStart = "stream-start", e.streamData = "stream-data", e.streamEnd = "stream-end", e.streamError = "stream-error", e))(me || {}), Qn = /* @__PURE__ */ ((e) => (e.light = "light", e.dark = "dark", e))(Qn || {});
const We = (e = Xn.chat) => new URLSearchParams(window.location.search).get(e) || "", ts = {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric"
};
function rs(e, t = ts) {
  return `${new Date(e).toLocaleDateString([], t)}`.toUpperCase();
}
function X() {
  const e = new Array(36);
  for (let t = 0; t < 36; t++)
    e[t] = Math.floor(Math.random() * 16);
  return e[14] = 4, e[19] = e[19] &= -5, e[19] = e[19] |= 8, e[8] = e[13] = e[18] = e[23] = "-", e.map((t) => t.toString(16)).join("");
}
const hn = (e) => {
  const r = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))((\w|-){11})(?:\S+)?$/gm.exec(e);
  let n;
  return r && (n = r[1]), n || "";
}, Ve = {
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
}, ge = {
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
  themeId: Qn.light,
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
}, _t = {
  outgoing: {
    term: "",
    user_id: "",
    role: U.user,
    message: ""
  },
  error: "",
  isLoading: !1,
  typingTimeoutExpired: !1,
  lastGroupId: X(),
  connected: !1,
  closed: !1,
  record: {},
  thread: {}
}, ns = {
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
}, eo = Ft({
  name: "config",
  initialState: ge,
  reducers: {
    setConfig(e, { payload: t }) {
      e.aiProfile = { ...ge.aiProfile, ...t.aiProfile }, e.translations = { ...ge.translations, ...t.translations }, e.close = { ...ge.close, ...t.close }, e.themeId = t.themeId, e.chatUrl = t.chatUrl, e.purpose = t.purpose;
    },
    setSpecialUrls(e, { payload: t }) {
      e.specialUrls = { ...e.specialUrls, ...t };
    },
    setPurpose(e, { payload: t }) {
      e.purpose = t;
    },
    resetConfig(e) {
      e.aiProfile = ge.aiProfile, e.themeId = ge.themeId, e.translations = ge.translations, e.chatUrl = ge.chatUrl;
    },
    setTheme(e, { payload: t }) {
      e.themeId = t;
    },
    resetTheme(e) {
      e.themeId = ge.themeId;
    },
    setDevToolsStatus(e, { payload: t }) {
      e.enableDevTools = t;
    },
    resetDevToolsStatus(e) {
      e.enableDevTools = ge.enableDevTools;
    },
    togglePluginMode(e) {
      e.isPluginMode = !e.isPluginMode;
    },
    setTranslations(e, { payload: t }) {
      e.translations = { ...e.translations, ...t };
    },
    setMediaModal(e, { payload: { isVisible: t, code: r, title: n, image: o } }) {
      e.mediaModal = { isVisible: t, code: r, title: n, image: o };
    },
    resetMediaModal(e) {
      e.mediaModal = ge.mediaModal;
    }
  }
}), Fe = (e) => e.config, {
  setConfig: to,
  resetConfig: Eu,
  setTheme: Cu,
  resetTheme: ju,
  setDevToolsStatus: Iu,
  resetDevToolsStatus: ku,
  togglePluginMode: Lu,
  setTranslations: Mu,
  setPurpose: os,
  setSpecialUrls: is,
  setMediaModal: ss,
  resetMediaModal: as
} = eo.actions, cs = eo.reducer, ro = Ft({
  name: "meta",
  initialState: Ve,
  reducers: {
    setMeta(e, { payload: t }) {
      e.cid = t.cid, e.eid = t.eid, e.systemType = t.systemType, e.pd = { ...e.pd, ...t.pd }, e.marketing = { ...e.marketing, ...t.marketing };
    },
    resetMeta(e) {
      e.pd = Ve.pd, e.cid = Ve.cid, e.eid = Ve.eid, e.systemType = Ve.systemType, e.marketing = Ve.marketing;
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
}), ft = (e) => e.meta, { setMeta: ls, resetMeta: Ou, setMarketing: us, setPd: ds, setRegion: fs } = ro.actions, ps = ro.reducer, Te = Ri, O = Ni, ms = () => {
  const [e, t] = ct([0, 0]);
  return Li(() => {
    function r() {
      t([window.innerWidth, window.innerHeight]);
    }
    return window.addEventListener("resize", r), r(), () => window.removeEventListener("resize", r);
  }, []), e;
}, hs = () => {
  const { themeId: e, close: t } = O(Fe), { cid: r, systemType: n, marketing: o } = O(ft);
  return {
    theme: e,
    closeVisible: t.visible,
    cid: r,
    systemType: n,
    marketing: o
  };
}, vs = ({ children: e, onClose: t }) => /* @__PURE__ */ l.jsx("div", { onClick: t, className: "tw--fixed tw--top-0 tw--left-0 tw--w-screen tw--h-screen tw--z-[9999] tw--bg-overlay", children: e });
var vn = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ae = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, gs = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function no(e, t) {
  e.forEach(function(r) {
    Array.isArray(r) ? no(r, t) : t.push(r);
  });
}
function oo(e) {
  let t = [];
  return no(e, t), t;
}
var io = (...e) => oo(e).filter(Boolean), so = (e, t) => {
  let r = {}, n = Object.keys(e), o = Object.keys(t);
  for (let s of n) if (o.includes(s)) {
    let i = e[s], c = t[s];
    typeof i == "object" && typeof c == "object" ? r[s] = so(i, c) : Array.isArray(i) || Array.isArray(c) ? r[s] = io(c, i) : r[s] = c + " " + i;
  } else r[s] = e[s];
  for (let s of o) n.includes(s) || (r[s] = t[s]);
  return r;
}, gn = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
function ws() {
  for (var e = 0, t, r, n = ""; e < arguments.length; )
    (t = arguments[e++]) && (r = ao(t)) && (n && (n += " "), n += r);
  return n;
}
function ao(e) {
  if (typeof e == "string")
    return e;
  for (var t, r = "", n = 0; n < e.length; n++)
    e[n] && (t = ao(e[n])) && (r && (r += " "), r += t);
  return r;
}
var Ir = "-";
function ys(e) {
  var t = xs(e), r = e.conflictingClassGroups, n = e.conflictingClassGroupModifiers, o = n === void 0 ? {} : n;
  function s(c) {
    var d = c.split(Ir);
    return d[0] === "" && d.length !== 1 && d.shift(), co(d, t) || bs(c);
  }
  function i(c, d) {
    var u = r[c] || [];
    return d && o[c] ? [].concat(u, o[c]) : u;
  }
  return {
    getClassGroupId: s,
    getConflictingClassGroupIds: i
  };
}
function co(e, t) {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  var r = e[0], n = t.nextPart.get(r), o = n ? co(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length !== 0) {
    var s = e.join(Ir);
    return (i = t.validators.find(function(c) {
      var d = c.validator;
      return d(s);
    })) == null ? void 0 : i.classGroupId;
  }
}
var wn = /^\[(.+)\]$/;
function bs(e) {
  if (wn.test(e)) {
    var t = wn.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function xs(e) {
  var t = e.theme, r = e.prefix, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = Ss(Object.entries(e.classGroups), r);
  return o.forEach(function(s) {
    var i = s[0], c = s[1];
    fr(c, n, i, t);
  }), n;
}
function fr(e, t, r, n) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var s = o === "" ? t : yn(t, o);
      s.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (_s(o)) {
        fr(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(function(i) {
      var c = i[0], d = i[1];
      fr(d, yn(t, c), r, n);
    });
  });
}
function yn(e, t) {
  var r = e;
  return t.split(Ir).forEach(function(n) {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}
function _s(e) {
  return e.isThemeGetter;
}
function Ss(e, t) {
  return t ? e.map(function(r) {
    var n = r[0], o = r[1], s = o.map(function(i) {
      return typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(function(c) {
        var d = c[0], u = c[1];
        return [t + d, u];
      })) : i;
    });
    return [n, s];
  }) : e;
}
function Ts(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function o(s, i) {
    r.set(s, i), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get: function(i) {
      var c = r.get(i);
      if (c !== void 0)
        return c;
      if ((c = n.get(i)) !== void 0)
        return o(i, c), c;
    },
    set: function(i, c) {
      r.has(i) ? r.set(i, c) : o(i, c);
    }
  };
}
var lo = "!";
function Ps(e) {
  var t = e.separator || ":", r = t.length === 1, n = t[0], o = t.length;
  return function(i) {
    for (var c = [], d = 0, u = 0, f, m = 0; m < i.length; m++) {
      var v = i[m];
      if (d === 0) {
        if (v === n && (r || i.slice(m, m + o) === t)) {
          c.push(i.slice(u, m)), u = m + o;
          continue;
        }
        if (v === "/") {
          f = m;
          continue;
        }
      }
      v === "[" ? d++ : v === "]" && d--;
    }
    var y = c.length === 0 ? i : i.substring(u), _ = y.startsWith(lo), T = _ ? y.substring(1) : y, W = f && f > u ? f - u : void 0;
    return {
      modifiers: c,
      hasImportantModifier: _,
      baseClassName: T,
      maybePostfixModifierPosition: W
    };
  };
}
function Es(e) {
  if (e.length <= 1)
    return e;
  var t = [], r = [];
  return e.forEach(function(n) {
    var o = n[0] === "[";
    o ? (t.push.apply(t, r.sort().concat([n])), r = []) : r.push(n);
  }), t.push.apply(t, r.sort()), t;
}
function Cs(e) {
  return {
    cache: Ts(e.cacheSize),
    splitModifiers: Ps(e),
    ...ys(e)
  };
}
var js = /\s+/;
function Is(e, t) {
  var r = t.splitModifiers, n = t.getClassGroupId, o = t.getConflictingClassGroupIds, s = /* @__PURE__ */ new Set();
  return e.trim().split(js).map(function(i) {
    var c = r(i), d = c.modifiers, u = c.hasImportantModifier, f = c.baseClassName, m = c.maybePostfixModifierPosition, v = n(m ? f.substring(0, m) : f), y = !!m;
    if (!v) {
      if (!m)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      if (v = n(f), !v)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      y = !1;
    }
    var _ = Es(d).join(":"), T = u ? _ + lo : _;
    return {
      isTailwindClass: !0,
      modifierId: T,
      classGroupId: v,
      originalClassName: i,
      hasPostfixModifier: y
    };
  }).reverse().filter(function(i) {
    if (!i.isTailwindClass)
      return !0;
    var c = i.modifierId, d = i.classGroupId, u = i.hasPostfixModifier, f = c + d;
    return s.has(f) ? !1 : (s.add(f), o(d, u).forEach(function(m) {
      return s.add(c + m);
    }), !0);
  }).reverse().map(function(i) {
    return i.originalClassName;
  }).join(" ");
}
function pr() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n, o, s, i = c;
  function c(u) {
    var f = t[0], m = t.slice(1), v = m.reduce(function(y, _) {
      return _(y);
    }, f());
    return n = Cs(v), o = n.cache.get, s = n.cache.set, i = d, d(u);
  }
  function d(u) {
    var f = o(u);
    if (f)
      return f;
    var m = Is(u, n);
    return s(u, m), m;
  }
  return function() {
    return i(ws.apply(null, arguments));
  };
}
function F(e) {
  var t = function(n) {
    return n[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var uo = /^\[(?:([a-z-]+):)?(.+)\]$/i, ks = /^\d+\/\d+$/, Ls = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ms = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Os = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Rs = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function we(e) {
  return Ne(e) || Ls.has(e) || ks.test(e) || mr(e);
}
function mr(e) {
  return ze(e, "length", zs);
}
function Ns(e) {
  return ze(e, "size", fo);
}
function Ds(e) {
  return ze(e, "position", fo);
}
function As(e) {
  return ze(e, "url", Bs);
}
function St(e) {
  return ze(e, "number", Ne);
}
function Ne(e) {
  return !Number.isNaN(Number(e));
}
function $s(e) {
  return e.endsWith("%") && Ne(e.slice(0, -1));
}
function rt(e) {
  return bn(e) || ze(e, "number", bn);
}
function j(e) {
  return uo.test(e);
}
function nt() {
  return !0;
}
function ke(e) {
  return Ms.test(e);
}
function Fs(e) {
  return ze(e, "", Us);
}
function ze(e, t, r) {
  var n = uo.exec(e);
  return n ? n[1] ? n[1] === t : r(n[2]) : !1;
}
function zs(e) {
  return Os.test(e);
}
function fo() {
  return !1;
}
function Bs(e) {
  return e.startsWith("url(");
}
function bn(e) {
  return Number.isInteger(Number(e));
}
function Us(e) {
  return Rs.test(e);
}
function hr() {
  var e = F("colors"), t = F("spacing"), r = F("blur"), n = F("brightness"), o = F("borderColor"), s = F("borderRadius"), i = F("borderSpacing"), c = F("borderWidth"), d = F("contrast"), u = F("grayscale"), f = F("hueRotate"), m = F("invert"), v = F("gap"), y = F("gradientColorStops"), _ = F("gradientColorStopPositions"), T = F("inset"), W = F("margin"), S = F("opacity"), L = F("padding"), B = F("saturate"), de = F("scale"), I = F("sepia"), fe = F("skew"), he = F("space"), ye = F("translate"), ve = function() {
    return ["auto", "contain", "none"];
  }, Pe = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, ne = function() {
    return ["auto", j, t];
  }, g = function() {
    return [j, t];
  }, b = function() {
    return ["", we];
  }, w = function() {
    return ["auto", Ne, j];
  }, E = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, P = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, M = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, N = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, A = function() {
    return ["", "0", j];
  }, G = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, ie = function() {
    return [Ne, St];
  }, ee = function() {
    return [Ne, j];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [nt],
      spacing: [we],
      blur: ["none", "", ke, j],
      brightness: ie(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ke, j],
      borderSpacing: g(),
      borderWidth: b(),
      contrast: ie(),
      grayscale: A(),
      hueRotate: ee(),
      invert: A(),
      gap: g(),
      gradientColorStops: [e],
      gradientColorStopPositions: [$s, mr],
      inset: ne(),
      margin: ne(),
      opacity: ie(),
      padding: g(),
      saturate: ie(),
      scale: ie(),
      sepia: A(),
      skew: ee(),
      space: g(),
      translate: g()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", j]
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
        columns: [ke]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": G()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": G()
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
        object: [].concat(E(), [j])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Pe()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Pe()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Pe()
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
        inset: [T]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [T]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [T]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [T]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [T]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [T]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [T]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [T]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [T]
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
        z: ["auto", rt]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: ne()
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
        flex: ["1", "auto", "initial", "none", j]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: A()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: A()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", rt]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [nt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", rt]
        }, j]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": w()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": w()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [nt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [rt]
        }, j]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": w()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": w()
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
        "auto-cols": ["auto", "min", "max", "fr", j]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", j]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [v]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [v]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [v]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(N())
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
        content: ["normal"].concat(N(), ["baseline"])
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
        "place-content": [].concat(N(), ["baseline"])
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
        m: [W]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [W]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [W]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [W]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [W]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [W]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [W]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [W]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [W]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [he]
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
        "space-y": [he]
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
        w: ["auto", "min", "max", "fit", j, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", j, we]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [ke]
        }, ke, j]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [j, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", j, we]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [j, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ke, mr]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", St]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [nt]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", j]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ne, St]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", j, we]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", j]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", j]
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
        "placeholder-opacity": [S]
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
        "text-opacity": [S]
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
        decoration: [].concat(P(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", we]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", j, we]
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
        indent: g()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", j]
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
        content: ["none", j]
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
        "bg-opacity": [S]
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
        bg: [].concat(E(), [Ds])
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
        bg: ["auto", "cover", "contain", Ns]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, As]
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
        from: [_]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [_]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [_]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [y]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [y]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [y]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [c]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [c]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [c]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [c]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [c]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [c]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [c]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [c]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [c]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [S]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(P(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [c]
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
        "divide-y": [c]
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
        "divide-opacity": [S]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: P()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(P())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [j, we]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [we]
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
        ring: b()
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
        "ring-opacity": [S]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [we]
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
        shadow: ["", "inner", "none", ke, Fs]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [nt]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [S]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": M()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": M()
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
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [d]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", ke, j]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [f]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [m]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [B]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [I]
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
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [d]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [f]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [m]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [S]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [B]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [I]
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
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", j]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ee()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", j]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: ee()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", j]
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
        scale: [de]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [de]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [de]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [rt, j]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [ye]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [ye]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [fe]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [fe]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", j]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", j]
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
        "scroll-m": g()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": g()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": g()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": g()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": g()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": g()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": g()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": g()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": g()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": g()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": g()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": g()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": g()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": g()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": g()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": g()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": g()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": g()
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
        "will-change": ["auto", "scroll", "contents", "transform", j]
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
        stroke: [we, St]
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
function Vs(e, t) {
  for (var r in t)
    po(e, r, t[r]);
  return e;
}
var Ws = Object.prototype.hasOwnProperty, Gs = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function po(e, t, r) {
  if (!Ws.call(e, t) || Gs.has(typeof r) || r === null) {
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
    for (var n in r)
      po(e[t], n, r[n]);
  }
}
function qs(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return typeof e == "function" ? pr.apply(void 0, [hr, e].concat(r)) : pr.apply(void 0, [function() {
    return Vs(hr(), e);
  }].concat(r));
}
var Hs = /* @__PURE__ */ pr(hr), Ys = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, mo = (e) => e || void 0, lt = (...e) => mo(oo(e).filter(Boolean).join(" ")), Zt = null, Mt = {}, vr = !1, ot = (...e) => (t) => t.twMerge ? ((!Zt || vr) && (vr = !1, Zt = ae(Mt) ? Hs : qs(Mt)), mo(Zt(lt(e)))) : lt(e), xn = (e, t) => {
  for (let r in t) e.hasOwnProperty(r) ? e[r] = lt(e[r], t[r]) : e[r] = t[r];
  return e;
}, V = (e, t) => {
  let { extend: r = null, slots: n = {}, variants: o = {}, compoundVariants: s = [], compoundSlots: i = [], defaultVariants: c = {} } = e, d = { ...Ys, ...t }, u = r != null && r.base ? lt(r.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, f = r != null && r.variants && !ae(r.variants) ? so(o, r.variants) : o, m = r != null && r.defaultVariants && !ae(r.defaultVariants) ? { ...r.defaultVariants, ...c } : c;
  !ae(d.twMergeConfig) && !gs(d.twMergeConfig, Mt) && (vr = !0, Mt = d.twMergeConfig);
  let v = ae(r == null ? void 0 : r.slots), y = ae(n) ? {} : { base: lt(e == null ? void 0 : e.base, v && (r == null ? void 0 : r.base)), ...n }, _ = v ? y : xn({ ...r == null ? void 0 : r.slots }, ae(y) ? { base: e == null ? void 0 : e.base } : y), T = (S) => {
    if (ae(f) && ae(n) && v) return ot(u, S == null ? void 0 : S.class, S == null ? void 0 : S.className)(d);
    if (s && !Array.isArray(s)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof s}`);
    if (i && !Array.isArray(i)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof i}`);
    let L = (g, b, w = [], E) => {
      let P = w;
      if (typeof b == "string") P = P.concat(gn(b).split(" ").map((M) => `${g}:${M}`));
      else if (Array.isArray(b)) P = P.concat(b.reduce((M, N) => M.concat(`${g}:${N}`), []));
      else if (typeof b == "object" && typeof E == "string") {
        for (let M in b) if (b.hasOwnProperty(M) && M === E) {
          let N = b[M];
          if (N && typeof N == "string") {
            let A = gn(N);
            P[E] ? P[E] = P[E].concat(A.split(" ").map((G) => `${g}:${G}`)) : P[E] = A.split(" ").map((G) => `${g}:${G}`);
          } else Array.isArray(N) && N.length > 0 && (P[E] = N.reduce((A, G) => A.concat(`${g}:${G}`), []));
        }
      }
      return P;
    }, B = (g, b = f, w = null, E = null) => {
      var P;
      let M = b[g];
      if (!M || ae(M)) return null;
      let N = (P = E == null ? void 0 : E[g]) != null ? P : S == null ? void 0 : S[g];
      if (N === null) return null;
      let A = vn(N), G = Array.isArray(d.responsiveVariants) && d.responsiveVariants.length > 0 || d.responsiveVariants === !0, ie = m == null ? void 0 : m[g], ee = [];
      if (typeof A == "object" && G) for (let [Ke, ht] of Object.entries(A)) {
        let Xe = M[ht];
        if (Ke === "initial") {
          ie = ht;
          continue;
        }
        Array.isArray(d.responsiveVariants) && !d.responsiveVariants.includes(Ke) || (ee = L(Ke, Xe, ee, w));
      }
      let Y = M[A] || M[vn(ie)];
      return typeof ee == "object" && typeof w == "string" && ee[w] ? xn(ee, Y) : ee.length > 0 ? (ee.push(Y), ee) : Y;
    }, de = () => f ? Object.keys(f).map((g) => B(g, f)) : null, I = (g, b) => {
      if (!f || typeof f != "object") return null;
      let w = new Array();
      for (let E in f) {
        let P = B(E, f, g, b), M = g === "base" && typeof P == "string" ? P : P && P[g];
        M && (w[w.length] = M);
      }
      return w;
    }, fe = {};
    for (let g in S) S[g] !== void 0 && (fe[g] = S[g]);
    let he = (g, b) => {
      var w;
      let E = typeof (S == null ? void 0 : S[g]) == "object" ? { [g]: (w = S[g]) == null ? void 0 : w.initial } : {};
      return { ...m, ...fe, ...E, ...b };
    }, ye = (g = [], b) => {
      let w = [];
      for (let { class: E, className: P, ...M } of g) {
        let N = !0;
        for (let [A, G] of Object.entries(M)) {
          let ie = he(A, b);
          if (Array.isArray(G)) {
            if (!G.includes(ie[A])) {
              N = !1;
              break;
            }
          } else if (ie[A] !== G) {
            N = !1;
            break;
          }
        }
        N && (E && w.push(E), P && w.push(P));
      }
      return w;
    }, ve = (g) => {
      let b = ye(s, g), w = ye(r == null ? void 0 : r.compoundVariants, g);
      return io(w, b);
    }, Pe = (g) => {
      let b = ve(g);
      if (!Array.isArray(b)) return b;
      let w = {};
      for (let E of b) if (typeof E == "string" && (w.base = ot(w.base, E)(d)), typeof E == "object") for (let [P, M] of Object.entries(E)) w[P] = ot(w[P], M)(d);
      return w;
    }, ne = (g) => {
      if (i.length < 1) return null;
      let b = {};
      for (let { slots: w = [], class: E, className: P, ...M } of i) {
        if (!ae(M)) {
          let N = !0;
          for (let A of Object.keys(M)) {
            let G = he(A, g)[A];
            if (G === void 0 || (Array.isArray(M[A]) ? !M[A].includes(G) : M[A] !== G)) {
              N = !1;
              break;
            }
          }
          if (!N) continue;
        }
        for (let N of w) b[N] = b[N] || [], b[N].push([E, P]);
      }
      return b;
    };
    if (!ae(n) || !v) {
      let g = {};
      if (typeof _ == "object" && !ae(_)) for (let b of Object.keys(_)) g[b] = (w) => {
        var E, P;
        return ot(_[b], I(b, w), ((E = Pe(w)) != null ? E : [])[b], ((P = ne(w)) != null ? P : [])[b], w == null ? void 0 : w.class, w == null ? void 0 : w.className)(d);
      };
      return g;
    }
    return ot(u, de(), ve(), S == null ? void 0 : S.class, S == null ? void 0 : S.className)(d);
  }, W = () => {
    if (!(!f || typeof f != "object")) return Object.keys(f);
  };
  return T.variantKeys = W(), T.extend = r, T.base = u, T.slots = _, T.variants = f, T.defaultVariants = m, T.compoundSlots = i, T.compoundVariants = s, T;
};
const Js = (
  /*tw*/
  V({
    slots: {
      base: "tw--flex-1 tw--w-full tw--px-[15px] tw--py-[11px] tw--rounded-[20px] tw--border select-none tw--bg-glazeBg tw--text-glazeText tw--border-glaze  tw--font-density-different"
    }
  })
), Ks = (
  /*tw*/
  V({
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
), Xs = ({ text: e = "", onClick: t, e2e: r }) => {
  const { base: n } = Js();
  return /* @__PURE__ */ l.jsx(
    "button",
    {
      onClick: t,
      className: n(),
      type: "button",
      "data-e2e": r,
      children: e
    }
  );
}, pt = ({ children: e, color: t = "main", outlined: r = !1, onClick: n, e2e: o = null, disabled: s = !1 }) => {
  const { base: i } = Ks({ outlined: r, color: t });
  return /* @__PURE__ */ l.jsx(
    "button",
    {
      onClick: n,
      className: i(),
      "data-e2e": o,
      disabled: s,
      type: "button",
      children: e
    }
  );
}, ho = () => /* @__PURE__ */ l.jsx(
  "svg",
  {
    height: "24px",
    viewBox: "0 0 24 24",
    width: "24px",
    children: /* @__PURE__ */ l.jsxs(
      "g",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeWidth: "2",
        children: [
          /* @__PURE__ */ l.jsx(
            "line",
            {
              x1: "6",
              x2: "18",
              y1: "6",
              y2: "18"
            }
          ),
          /* @__PURE__ */ l.jsx(
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
), Zs = ({ code: e }) => /* @__PURE__ */ l.jsx(
  "iframe",
  {
    "data-e2e": "video-in-modal",
    className: "tw--min-h-[315px] tw--w-full",
    src: `https://www.youtube.com/embed/${e}?enablejsapi=1&rel=0&origin=${window.location.origin}&autoplay=1`,
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; modestbranding; showinfo=0; fullscreen",
    frameBorder: "0"
  }
), Qs = ({ props: { title: e, code: t, isVisible: r, image: n } }) => {
  const o = Te(), s = (i) => {
    o(as());
  };
  return /* @__PURE__ */ l.jsx(vs, { onClose: s, children: /* @__PURE__ */ l.jsxs("div", { className: "tw--bg-loader tw--mx-auto tw--max-w-[335px] md:tw--max-w-[570px] tw--mt-20 tw--rounded-lg tw--p-3 tw--shadow-card", onClick: (i) => i.stopPropagation(), children: [
    /* @__PURE__ */ l.jsxs("div", { className: "tw--pb-6 tw--px-1 tw--w-full tw--flex tw--justify-between tw--items-center tw--text-zeta", children: [
      /* @__PURE__ */ l.jsx("h3", { className: "tw--text-2xl", children: e }),
      /* @__PURE__ */ l.jsx(pt, { e2e: "media-modal-close-btn", color: "secondary", onClick: s, children: /* @__PURE__ */ l.jsx(ho, {}) })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "tw--w-full tw--h-full tw--flex tw--justify-center tw--items-end tw--bg-whisper", children: n ? /* @__PURE__ */ l.jsx(
      "img",
      {
        "data-e2e": "image-in-modal",
        src: n,
        alt: e
      }
    ) : /* @__PURE__ */ l.jsx(Zs, { code: t }) })
  ] }) });
}, ea = (
  /*tw*/
  V({
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
), ta = (
  /*tw*/
  V({
    slots: {
      base: "tw--flex tw--justify-between tw--px-5 tw--py-[11px] tw--shadow-[-1px_2px_5px_0] tw--shadow-zephyr-200"
    }
  })
), vo = (
  /*tw*/
  V({
    slots: {
      base: "tw--flex tw--items-center tw--flex-wrap tw--px-5 tw--mt-[11px]",
      input: "tw--flex-1 tw--pr-2",
      button: "tw--flex tw--grow-0"
    }
  })
), ra = ({ head: e, stream: t, foot: r }) => {
  const { themeId: n, isPluginMode: o, mediaModal: s } = O(Fe), { base: i, wrapper: c } = ea(), [d, u] = ms();
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      "data-e2e": "base-container",
      style: { height: `${u}px` },
      className: i({ minimized: o }) + " " + n,
      children: [
        s.isVisible && /* @__PURE__ */ l.jsx(Qs, { props: s }),
        /* @__PURE__ */ l.jsxs("div", { className: c(), children: [
          e,
          t,
          r
        ] })
      ]
    }
  );
}, na = (
  /*tw*/
  V({
    slots: {
      base: "loader js-payment-loader tw--hidden tw--fixed tw--left-0 tw--top-0 tw--z-[101] tw--m-0 tw--flex tw--h-screen tw--w-screen tw--items-center tw--justify-center tw--px-5 tw--bg-whisper"
    }
  })
), oa = ({ children: e }) => {
  const { base: t } = na();
  return /* @__PURE__ */ l.jsx("div", { className: t(), children: e });
}, ce = ({
  eventType: e,
  systemType: t,
  utmParams: r,
  customerUuid: n,
  email: o,
  phone: s
}) => {
  if (window.trackEventInGTM && window.tracking) {
    const i = window.tracking.event({
      eventType: e,
      systemType: t,
      uri: window.location.pathname,
      domain: window.location.hostname,
      customerUuid: n,
      email: o || null,
      phone: s || null,
      additionalData: {},
      utmParams: r
    });
    window.tracking.trackClient(i), window.trackEventInGTM && window.trackEventInGTM(i);
  }
};
window.tracking = window.tracking || null;
window.trackEventInGTM = window.trackEventInGTM || null;
const go = (
  /*tw*/
  V({
    slots: {
      btn: "tw--flex-1 tw--space-x-2 tw--text-white tw--text-center tw--bg-neon tw--max-w-[280px] tw--mx-auto tw--px-4 tw--py-3 tw--font-bold tw--rounded-[20px] tw--shadow-[0px_12px_24px_-4px_rgba(1,154,255,0.2)] tw--flex tw--justify-center tw--items-center tw--cursor-pointer tw--relative tw--w-full tw--text-xl max-h-[46px] tw--mb-[11px] customXs:max-h-[52px]",
      link: "tw--flex-1 tw--space-x-2 tw--text-white tw--text-center tw--bg-neon tw--max-w-[280px] tw--mx-auto tw--px-4 tw--py-3 tw--font-extrabold tw--rounded-[20px] tw--shadow-[0px_12px_24px_-4px_rgba(1,154,255,0.2)] tw--flex tw--justify-center tw--items-center tw--cursor-pointer tw--relative tw--w-full tw--mb-[11px] spaced-letters max-h-[46px] customXs:max-h-[52px] customXs:tw--max-w-xs customXs:te--text-[20px] customXs:tw--text-xl"
    }
  })
), ia = (
  /*tw*/
  V({
    slots: {
      base: "tw--absolute tw--top-0 tw--left-0 tw--w-full tw--h-screen tw--flex tw--flex-col tw--justify-center tw--items-center tw--px-5 tw--z-50 tw--bg-lumina"
    }
  })
), sa = (
  /*tw*/
  V({
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
), aa = (
  /*tw*/
  V({
    slots: {
      base: "tw--absolute tw--top-[-30px] tw--right-[-10px] tw--w-6 tw--h-6 tw--p-1 tw--bg-white tw--rounded-full tw--cursor-pointer tw--text-muted-blue"
    }
  })
), ca = V({
  slots: {
    base: "tw--mt-[30px] tw--flex tw--items-center tw--justify-center tw--text-[12.8px] tw--leading-[1.56] tw--text-[#21bb5a] tw--font-bold",
    icon: "tw--mr-[5px]"
  }
}), la = (
  /*tv*/
  V({
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
), ua = ({ text: e, onClick: t, e2e: r, disabled: n = !1 }) => {
  const o = O((c) => c.meta), s = O((c) => c.intentions.email.current), { btn: i } = go();
  return dt(() => {
    const c = {
      eventType: se.addToCart,
      systemType: o.systemType,
      utmParams: o.marketing.lastUtmParams,
      customerUuid: o.cid,
      email: s
    };
    ce(c), c.eventType = se.priceSeen, ce(c);
  }, []), /* @__PURE__ */ l.jsxs(
    "button",
    {
      onClick: t,
      className: i(),
      disabled: n,
      type: "button",
      "data-e2e": r,
      children: [
        /* @__PURE__ */ l.jsxs(
          "svg",
          {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            children: [
              /* @__PURE__ */ l.jsx(
                "path",
                {
                  opacity: ".3",
                  d: "M4 12h16v6H4v-6zm0-6h16v2H4V6z",
                  fill: "currentColor"
                }
              ),
              /* @__PURE__ */ l.jsx("path", { d: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z", fill: "currentColor" })
            ]
          }
        ),
        /* @__PURE__ */ l.jsx("span", { children: e })
      ]
    }
  );
}, da = ({ onClick: e }) => {
  const { base: t } = aa();
  return /* @__PURE__ */ l.jsx(
    "button",
    {
      type: "button",
      className: t(),
      onClick: e,
      children: /* @__PURE__ */ l.jsx(
        "svg",
        {
          fill: "none",
          viewBox: "0 0 18 18",
          children: /* @__PURE__ */ l.jsx(
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
}, fa = () => {
  const { base: e, icon: t } = ca();
  return /* @__PURE__ */ l.jsxs("footer", { className: e(), children: [
    /* @__PURE__ */ l.jsx(
      "svg",
      {
        className: t(),
        fill: "none",
        height: "12",
        width: "12",
        viewBox: "0 0 12 12",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ l.jsx(
          "path",
          {
            d: "M9 4h-.5V3a2.5 2.5 0 0 0-5 0v1H3c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 8.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM7.55 4h-3.1V3c0-.855.695-1.55 1.55-1.55.855 0 1.55.695 1.55 1.55v1z",
            fill: "currentColor"
          }
        )
      }
    ),
    /* @__PURE__ */ l.jsx("span", { children: "SSL Secure Connection" })
  ] });
}, pa = ({ config: e }) => {
  const { translations: t } = O((m) => m.config), { wrapper: r, left: n, leftTop: o, icon: s, text: i, bottom: c, right: d, price: u, info: f } = sa();
  return /* @__PURE__ */ l.jsx("header", { children: /* @__PURE__ */ l.jsxs("div", { className: r(), children: [
    /* @__PURE__ */ l.jsxs("span", { className: n(), children: [
      /* @__PURE__ */ l.jsxs("div", { className: o(), children: [
        /* @__PURE__ */ l.jsx("span", { className: s(), children: /* @__PURE__ */ l.jsx("svg", { width: "26", height: "26", children: /* @__PURE__ */ l.jsx("use", { xlinkHref: "/img/sprite.svg#secured-check" }) }) }),
        /* @__PURE__ */ l.jsx("span", { className: i(), dangerouslySetInnerHTML: { __html: t.paymentHeaderTxt1 } })
      ] }),
      /* @__PURE__ */ l.jsx("div", { className: c(), children: t.paymentHeaderTxt2 })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: d(), children: [
      /* @__PURE__ */ l.jsx("div", { className: u(), children: e.price }),
      /* @__PURE__ */ l.jsx("div", { className: f(), children: e.period })
    ] })
  ] }) });
}, wo = Gn((e, t) => {
  const { link: r } = go(), { href: n, text: o, onClick: s, e2e: i = null } = e;
  return /* @__PURE__ */ l.jsx(
    "a",
    {
      className: r(),
      "data-e2e": i,
      href: n,
      onClick: s,
      ref: t,
      children: o
    }
  );
});
wo.displayName = "Link";
const ma = ({ texts: e = [], title: t = "" }) => {
  const {
    wrapper: r,
    inner: n,
    dots: o,
    dotsIn: s,
    icon: i,
    progressCheckmark: c,
    panelTitle: d,
    spinningTexts: u,
    filmContainer: f,
    film: m
  } = la();
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: r(),
      children: [
        /* @__PURE__ */ l.jsx("div", { className: n(), children: /* @__PURE__ */ l.jsx("div", { className: o(), children: /* @__PURE__ */ l.jsx(
          "span",
          {
            className: s()
          }
        ) }) }),
        /* @__PURE__ */ l.jsxs("div", { className: c(), children: [
          /* @__PURE__ */ l.jsx("span", { className: i(), children: /* @__PURE__ */ l.jsxs(
            "svg",
            {
              width: "24",
              height: "24",
              fill: "none",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                /* @__PURE__ */ l.jsx(
                  "circle",
                  {
                    cx: "12",
                    cy: "12",
                    r: "12"
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  "path",
                  {
                    d: "m9.75 15.127-2.602-2.602a.748.748 0 0 0-1.058 1.057l3.135 3.136a.747.747 0 0 0 1.058 0l7.935-7.935a.748.748 0 0 0-1.058-1.058l-7.41 7.402z",
                    fill: "white"
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ l.jsx("p", { className: d(), children: t })
        ] }),
        /* @__PURE__ */ l.jsx("div", { className: f(), children: /* @__PURE__ */ l.jsx("div", { className: m(), children: e.map((v) => /* @__PURE__ */ l.jsx("div", { className: u(), children: v }, v)) }) })
      ]
    }
  );
}, ha = ({ onClose: e }) => {
  const { displayPlanPrice: t, billingFrequencyTmsg: r } = O((s) => s.meta.pd), { translations: n } = O((s) => s.config), { base: o } = ia();
  return /* @__PURE__ */ l.jsx("div", { className: o(), children: /* @__PURE__ */ l.jsxs(
    "div",
    {
      id: "chat-payment-view",
      className: "light-pink-blue tw--max-w-[500px] tw--bg-white tw--w-full tw--min-h-[400px] tw--relative tw--rounded-lg tw--flex tw--flex-col tw--p-7",
      children: [
        /* @__PURE__ */ l.jsx(oa, { children: /* @__PURE__ */ l.jsx(ma, { texts: n.loaderTexts, title: n.tm1224 }) }),
        /* @__PURE__ */ l.jsx(da, { onClick: e }),
        /* @__PURE__ */ l.jsx("div", { id: "primer-form-container", className: "h-full primer-theme tw--w-full", children: /* @__PURE__ */ l.jsx(pa, { config: { price: t, period: r } }) }),
        /* @__PURE__ */ l.jsx(fa, {})
      ]
    }
  ) });
}, va = (
  /* tw*/
  V({
    slots: {
      base: "tw--pt-10 tw--w-full tw--h-full tw--pb-5 tw--px-5 tw--overflow-y-scroll tw--flex tw--flex-col-reverse tw--translate-z-0 tw--text-zephyr-100 tw--font-density-different tw--mt-0 tw--mb-auto",
      second: "tw--mt-0 tw--mb-auto",
      date: "tw--text-center tw--text-sm tw--pb-[5px] tw--opacity-40"
    }
  })
), ga = (
  /* tw*/
  V({
    slots: {
      base: "tw--flex tw--flex-col tw--items-center tw--w-full tw--mx-auto tw--pt-5 tw--pb-10",
      title: "tw--pb-[30px] tw--max-w-[400px] tw--text-center tw--mx-[30px] select-none  tw--font-density-different"
    }
  })
), wa = (
  /* tw*/
  V({
    slots: {
      base: "tw--grid tw--break-words"
    }
  })
), ya = (
  /* tw */
  V({
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
), yo = (
  /* tw*/
  V({
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
), ba = V({
  slots: {
    dotFirst: "tw--inline-block tw--h-[12px] tw--w-[12px] tw--rounded-full tw--opacity-40 tw--animate-wave tw--bg-zephyr-100",
    dotSecond: "tw--inline-block tw--h-[12px] tw--w-[12px] tw--rounded-full tw--opacity-40 tw--animate-wave-delay tw--bg-zephyr-100",
    dotThird: "tw--inline-block tw--h-[12px] tw--w-[12px] tw--rounded-full tw--opacity-40 tw--animate-wave-delay-2 tw--bg-zephyr-100"
  }
}), xa = () => {
  const { dotFirst: e, dotSecond: t, dotThird: r } = ba();
  return /* @__PURE__ */ l.jsxs("div", { className: "tw--ml-7 tw--space-x-[6px]", "data-e2e": "stream-response-loader", children: [
    /* @__PURE__ */ l.jsx("span", { className: e() }),
    /* @__PURE__ */ l.jsx("span", { className: t() }),
    /* @__PURE__ */ l.jsx("span", { className: r() })
  ] });
}, _a = "chatSeen", bo = "linkClickedFromChat", Sa = "chatConversationFinishedTimeStamp", Ta = "cid", Pa = 1e3, xo = "scroll-stop", kr = "support", Ea = 500, Ca = "/", ja = 3e3, Ia = {
  transports: ["websocket"],
  upgrade: !1,
  pingInterval: 1e3 * 60 * 5,
  pingTimeout: 1e3 * 60 * 3,
  secure: !0,
  reconnect: !0
};
X(), U.assistant, (/* @__PURE__ */ new Date()).getTime();
X(), U.assistant, (/* @__PURE__ */ new Date()).getTime(), X(), U.assistant, (/* @__PURE__ */ new Date()).getTime();
const ka = (e, t) => e.map((r) => {
  var o, s;
  const n = r.sequence === t.sequence && r.type === t.type;
  return n && r.type === te.text && t.text ? { ...r, text: r.text + t.text } : n && r.type === te.buttons && ((o = t == null ? void 0 : t.buttons) != null && o.length) && ((s = r == null ? void 0 : r.buttons) != null && s.length) ? { ...r, buttons: [...r.buttons, ...t.buttons] } : r;
});
function Q(e) {
  for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  if (re.env.NODE_ENV !== "production") {
    var o = $a[e], s = o ? typeof o == "function" ? o.apply(null, r) : o : "unknown error nr: " + e;
    throw Error("[Immer] " + s);
  }
  throw Error("[Immer] minified error nr: " + e + (r.length ? " " + r.map(function(i) {
    return "'" + i + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function He(e) {
  return !!e && !!e[le];
}
function $e(e) {
  var t;
  return !!e && (function(r) {
    if (!r || typeof r != "object") return !1;
    var n = Object.getPrototypeOf(r);
    if (n === null) return !0;
    var o = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
    return o === Object || typeof o == "function" && Function.toString.call(o) === Fa;
  }(e) || Array.isArray(e) || !!e[In] || !!(!((t = e.constructor) === null || t === void 0) && t[In]) || Lr(e) || Mr(e));
}
function ut(e, t, r) {
  r === void 0 && (r = !1), Je(e) === 0 ? (r ? Object.keys : Ar)(e).forEach(function(n) {
    r && typeof n == "symbol" || t(n, e[n], e);
  }) : e.forEach(function(n, o) {
    return t(o, n, e);
  });
}
function Je(e) {
  var t = e[le];
  return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : Lr(e) ? 2 : Mr(e) ? 3 : 0;
}
function gr(e, t) {
  return Je(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function La(e, t) {
  return Je(e) === 2 ? e.get(t) : e[t];
}
function _o(e, t, r) {
  var n = Je(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function Ma(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Lr(e) {
  return Da && e instanceof Map;
}
function Mr(e) {
  return Aa && e instanceof Set;
}
function Oe(e) {
  return e.o || e.t;
}
function Or(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = za(e);
  delete t[le];
  for (var r = Ar(t), n = 0; n < r.length; n++) {
    var o = r[n], s = t[o];
    s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (t[o] = { configurable: !0, writable: !0, enumerable: s.enumerable, value: e[o] });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function Rr(e, t) {
  return t === void 0 && (t = !1), Nr(e) || He(e) || !$e(e) || (Je(e) > 1 && (e.set = e.add = e.clear = e.delete = Oa), Object.freeze(e), t && ut(e, function(r, n) {
    return Rr(n, !0);
  }, !0)), e;
}
function Oa() {
  Q(2);
}
function Nr(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function Se(e) {
  var t = Ba[e];
  return t || Q(18, e), t;
}
function _n() {
  return re.env.NODE_ENV === "production" || Ye || Q(0), Ye;
}
function Qt(e, t) {
  t && (Se("Patches"), e.u = [], e.s = [], e.v = t);
}
function Ot(e) {
  wr(e), e.p.forEach(Ra), e.p = null;
}
function wr(e) {
  e === Ye && (Ye = e.l);
}
function Sn(e) {
  return Ye = { p: [], l: Ye, h: e, m: !0, _: 0 };
}
function Ra(e) {
  var t = e[le];
  t.i === 0 || t.i === 1 ? t.j() : t.g = !0;
}
function er(e, t) {
  t._ = t.p.length;
  var r = t.p[0], n = e !== void 0 && e !== r;
  return t.h.O || Se("ES5").S(t, e, n), n ? (r[le].P && (Ot(t), Q(4)), $e(e) && (e = Rt(t, e), t.l || Nt(t, e)), t.u && Se("Patches").M(r[le].t, e, t.u, t.s)) : e = Rt(t, r, []), Ot(t), t.u && t.v(t.u, t.s), e !== So ? e : void 0;
}
function Rt(e, t, r) {
  if (Nr(t)) return t;
  var n = t[le];
  if (!n) return ut(t, function(c, d) {
    return Tn(e, n, t, c, d, r);
  }, !0), t;
  if (n.A !== e) return t;
  if (!n.P) return Nt(e, n.t, !0), n.t;
  if (!n.I) {
    n.I = !0, n.A._--;
    var o = n.i === 4 || n.i === 5 ? n.o = Or(n.k) : n.o, s = o, i = !1;
    n.i === 3 && (s = new Set(o), o.clear(), i = !0), ut(s, function(c, d) {
      return Tn(e, n, o, c, d, r, i);
    }), Nt(e, o, !1), r && e.u && Se("Patches").N(n, r, e.u, e.s);
  }
  return n.o;
}
function Tn(e, t, r, n, o, s, i) {
  if (re.env.NODE_ENV !== "production" && o === r && Q(5), He(o)) {
    var c = Rt(e, o, s && t && t.i !== 3 && !gr(t.R, n) ? s.concat(n) : void 0);
    if (_o(r, n, c), !He(c)) return;
    e.m = !1;
  } else i && r.add(o);
  if ($e(o) && !Nr(o)) {
    if (!e.h.D && e._ < 1) return;
    Rt(e, o), t && t.A.l || Nt(e, o);
  }
}
function Nt(e, t, r) {
  r === void 0 && (r = !1), !e.l && e.h.D && e.m && Rr(t, r);
}
function tr(e, t) {
  var r = e[le];
  return (r ? Oe(r) : e)[t];
}
function Pn(e, t) {
  if (t in e) for (var r = Object.getPrototypeOf(e); r; ) {
    var n = Object.getOwnPropertyDescriptor(r, t);
    if (n) return n;
    r = Object.getPrototypeOf(r);
  }
}
function yr(e) {
  e.P || (e.P = !0, e.l && yr(e.l));
}
function rr(e) {
  e.o || (e.o = Or(e.t));
}
function br(e, t, r) {
  var n = Lr(t) ? Se("MapSet").F(t, r) : Mr(t) ? Se("MapSet").T(t, r) : e.O ? function(o, s) {
    var i = Array.isArray(o), c = { i: i ? 1 : 0, A: s ? s.A : _n(), P: !1, I: !1, R: {}, l: s, t: o, k: null, o: null, j: null, C: !1 }, d = c, u = xr;
    i && (d = [c], u = at);
    var f = Proxy.revocable(d, u), m = f.revoke, v = f.proxy;
    return c.k = v, c.j = m, v;
  }(t, r) : Se("ES5").J(t, r);
  return (r ? r.A : _n()).p.push(n), n;
}
function Na(e) {
  return He(e) || Q(22, e), function t(r) {
    if (!$e(r)) return r;
    var n, o = r[le], s = Je(r);
    if (o) {
      if (!o.P && (o.i < 4 || !Se("ES5").K(o))) return o.t;
      o.I = !0, n = En(r, s), o.I = !1;
    } else n = En(r, s);
    return ut(n, function(i, c) {
      o && La(o.t, i) === c || _o(n, i, t(c));
    }), s === 3 ? new Set(n) : n;
  }(e);
}
function En(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return Or(e);
}
var Cn, Ye, Dr = typeof Symbol < "u" && typeof Symbol("x") == "symbol", Da = typeof Map < "u", Aa = typeof Set < "u", jn = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", So = Dr ? Symbol.for("immer-nothing") : ((Cn = {})["immer-nothing"] = !0, Cn), In = Dr ? Symbol.for("immer-draftable") : "__$immer_draftable", le = Dr ? Symbol.for("immer-state") : "__$immer_state", $a = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(e) {
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
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" }, Fa = "" + Object.prototype.constructor, Ar = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Object.getOwnPropertyNames, za = Object.getOwnPropertyDescriptors || function(e) {
  var t = {};
  return Ar(e).forEach(function(r) {
    t[r] = Object.getOwnPropertyDescriptor(e, r);
  }), t;
}, Ba = {}, xr = { get: function(e, t) {
  if (t === le) return e;
  var r = Oe(e);
  if (!gr(r, t)) return function(o, s, i) {
    var c, d = Pn(s, i);
    return d ? "value" in d ? d.value : (c = d.get) === null || c === void 0 ? void 0 : c.call(o.k) : void 0;
  }(e, r, t);
  var n = r[t];
  return e.I || !$e(n) ? n : n === tr(e.t, t) ? (rr(e), e.o[t] = br(e.A.h, n, e)) : n;
}, has: function(e, t) {
  return t in Oe(e);
}, ownKeys: function(e) {
  return Reflect.ownKeys(Oe(e));
}, set: function(e, t, r) {
  var n = Pn(Oe(e), t);
  if (n != null && n.set) return n.set.call(e.k, r), !0;
  if (!e.P) {
    var o = tr(Oe(e), t), s = o == null ? void 0 : o[le];
    if (s && s.t === r) return e.o[t] = r, e.R[t] = !1, !0;
    if (Ma(r, o) && (r !== void 0 || gr(e.t, t))) return !0;
    rr(e), yr(e);
  }
  return e.o[t] === r && (r !== void 0 || t in e.o) || Number.isNaN(r) && Number.isNaN(e.o[t]) || (e.o[t] = r, e.R[t] = !0), !0;
}, deleteProperty: function(e, t) {
  return tr(e.t, t) !== void 0 || t in e.t ? (e.R[t] = !1, rr(e), yr(e)) : delete e.R[t], e.o && delete e.o[t], !0;
}, getOwnPropertyDescriptor: function(e, t) {
  var r = Oe(e), n = Reflect.getOwnPropertyDescriptor(r, t);
  return n && { writable: !0, configurable: e.i !== 1 || t !== "length", enumerable: n.enumerable, value: r[t] };
}, defineProperty: function() {
  Q(11);
}, getPrototypeOf: function(e) {
  return Object.getPrototypeOf(e.t);
}, setPrototypeOf: function() {
  Q(12);
} }, at = {};
ut(xr, function(e, t) {
  at[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
}), at.deleteProperty = function(e, t) {
  return re.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && Q(13), at.set.call(this, e, t, void 0);
}, at.set = function(e, t, r) {
  return re.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && Q(14), xr.set.call(this, e[0], t, r, e[0]);
};
var Ua = function() {
  function e(r) {
    var n = this;
    this.O = jn, this.D = !0, this.produce = function(o, s, i) {
      if (typeof o == "function" && typeof s != "function") {
        var c = s;
        s = o;
        var d = n;
        return function(T) {
          var W = this;
          T === void 0 && (T = c);
          for (var S = arguments.length, L = Array(S > 1 ? S - 1 : 0), B = 1; B < S; B++) L[B - 1] = arguments[B];
          return d.produce(T, function(de) {
            var I;
            return (I = s).call.apply(I, [W, de].concat(L));
          });
        };
      }
      var u;
      if (typeof s != "function" && Q(6), i !== void 0 && typeof i != "function" && Q(7), $e(o)) {
        var f = Sn(n), m = br(n, o, void 0), v = !0;
        try {
          u = s(m), v = !1;
        } finally {
          v ? Ot(f) : wr(f);
        }
        return typeof Promise < "u" && u instanceof Promise ? u.then(function(T) {
          return Qt(f, i), er(T, f);
        }, function(T) {
          throw Ot(f), T;
        }) : (Qt(f, i), er(u, f));
      }
      if (!o || typeof o != "object") {
        if ((u = s(o)) === void 0 && (u = o), u === So && (u = void 0), n.D && Rr(u, !0), i) {
          var y = [], _ = [];
          Se("Patches").M(o, u, y, _), i(y, _);
        }
        return u;
      }
      Q(21, o);
    }, this.produceWithPatches = function(o, s) {
      if (typeof o == "function") return function(u) {
        for (var f = arguments.length, m = Array(f > 1 ? f - 1 : 0), v = 1; v < f; v++) m[v - 1] = arguments[v];
        return n.produceWithPatches(u, function(y) {
          return o.apply(void 0, [y].concat(m));
        });
      };
      var i, c, d = n.produce(o, s, function(u, f) {
        i = u, c = f;
      });
      return typeof Promise < "u" && d instanceof Promise ? d.then(function(u) {
        return [u, i, c];
      }) : [d, i, c];
    }, typeof (r == null ? void 0 : r.useProxies) == "boolean" && this.setUseProxies(r.useProxies), typeof (r == null ? void 0 : r.autoFreeze) == "boolean" && this.setAutoFreeze(r.autoFreeze);
  }
  var t = e.prototype;
  return t.createDraft = function(r) {
    $e(r) || Q(8), He(r) && (r = Na(r));
    var n = Sn(this), o = br(this, r, void 0);
    return o[le].C = !0, wr(n), o;
  }, t.finishDraft = function(r, n) {
    var o = r && r[le];
    re.env.NODE_ENV !== "production" && (o && o.C || Q(9), o.I && Q(10));
    var s = o.A;
    return Qt(s, n), er(void 0, s);
  }, t.setAutoFreeze = function(r) {
    this.D = r;
  }, t.setUseProxies = function(r) {
    r && !jn && Q(20), this.O = r;
  }, t.applyPatches = function(r, n) {
    var o;
    for (o = n.length - 1; o >= 0; o--) {
      var s = n[o];
      if (s.path.length === 0 && s.op === "replace") {
        r = s.value;
        break;
      }
    }
    o > -1 && (n = n.slice(o + 1));
    var i = Se("Patches").$;
    return He(r) ? i(r, n) : this.produce(r, function(c) {
      return i(c, n);
    });
  }, e;
}(), ue = new Ua(), Le = ue.produce;
ue.produceWithPatches.bind(ue);
ue.setAutoFreeze.bind(ue);
ue.setUseProxies.bind(ue);
ue.applyPatches.bind(ue);
ue.createDraft.bind(ue);
ue.finishDraft.bind(ue);
const Z = (e) => e.chat.thread[We()] || e.chat.thread.default, To = Ft({
  name: "chat",
  initialState: _t,
  reducers: {
    setOutgoing(e, { payload: t }) {
      e.outgoing = {
        term: We(),
        user_id: localStorage.getItem("__cid") || "",
        role: U.user,
        message: t
      };
    },
    resetOutgoing(e) {
      e.outgoing = _t.outgoing;
    },
    initiateThread(e, { payload: { threadId: t, term: r } }) {
      return Le(e, (n) => {
        n.thread[r] = t, n.record[t] || (n.record[t] = {
          historyIds: [],
          historyData: {}
        });
      });
    },
    syncMessageStatus(e, { payload: { threadId: t, history: r } }) {
      return Le(e, (n) => {
        var s;
        const o = (s = n.record[t]) == null ? void 0 : s.historyIds.filter(
          (i) => !r.find((c) => c.id === i)
        );
        o == null || o.forEach(
          (i) => n.record[t].historyData[i].content = n.record[t].historyData[i].content.map(
            (c) => ({
              ...c,
              sent: !1,
              resend: !0
            })
          )
        );
      });
    },
    updateHistoryByThread(e, { payload: { history: t, threadId: r } }) {
      return Le(e, (n) => {
        const o = t.sort((i, c) => i.time - c.time).map(({ id: i }) => i), s = n.record[r].historyIds;
        for (let i = 0; i < o.length; i++) {
          const c = o[i];
          s.includes(c) ? n.record[r].historyData[c] = {
            ...n.record[r].historyData[c],
            isStreaming: !1
          } : (s.splice(i, 0, c), n.record[r].historyData[c] = t[i]);
        }
        n.record[r].historyIds = s;
      });
    },
    addPredefinedAssistantMessage(e, { payload: t }) {
      return Le(e, (r) => {
        const n = X(), o = Z({ chat: r });
        r.record[o].historyIds.push(n), r.record[o].historyData[n] = {
          id: n,
          role: U.assistant,
          content: [
            { type: te.text, text: t.content, sequence: 1 },
            { type: te.buttons, buttons: t.buttons || [], sequence: 2 }
          ]
        };
      });
    },
    fillAssistantHistoryData(e, { payload: { id: t, content: r, sequence: n, threadId: o, isStreaming: s } }) {
      return Le(e, (i) => {
        var c;
        if (i.record[o] && !i.record[o].historyData[t]) {
          i.record[o].historyData[t] = { id: t, role: U.assistant, isStreaming: s, content: [] }, i.record[o].historyIds.push(t);
          return;
        }
        if ((c = i.record[o]) != null && c.historyData[t] && (i.record[o].historyData[t].isStreaming = s), !!r && i.record[o]) {
          if (i.record[o].historyData[t].content.some(
            (d) => d.sequence === r.sequence && d.type === r.type
          )) {
            i.record[o].historyData[t].content = ka(
              i.record[o].historyData[t].content,
              r
            );
            return;
          }
          i.record[o].historyData[t].content.push(r);
        }
      });
    },
    fillUserHistoryData(e, { payload: { id: t, content: r, threadId: n } }) {
      const o = Z({ chat: e });
      if (n === o)
        return Le(e, (s) => {
          var c;
          let i;
          if (r.groupId && ((c = s.record[n]) != null && c.historyData) && Object.entries(s.record[n].historyData).forEach(([d, u]) => {
            [...u.content].find((f) => f.groupId === r.groupId) && (i = d);
          }), i) {
            s.record[n].historyData[i].content.push(r);
            return;
          }
          s.record[n].historyData[t] || (s.record[n].historyData[t] = { id: t, role: U.user, content: [r] }, s.record[n].historyIds.push(t));
        });
    },
    fillInitialMessage(e, { payload: { message: t } }) {
      const r = Z({ chat: e });
      e.record[r].historyIds.push(t.id), e.record[r].historyData[t.id] = {
        id: t.id,
        role: U.assistant,
        time: (/* @__PURE__ */ new Date()).getTime(),
        content: t.content
      };
    },
    setIsLoading(e) {
      e.isLoading = !0;
    },
    resetIsLoading(e) {
      e.isLoading = _t.isLoading;
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
      return Le(e, (r) => {
        const n = Z({ chat: r });
        r.record[n].historyData[t.itemId].content = r.record[n].historyData[t.itemId].content.map((o) => ({
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
      return Le(e, (r) => {
        const n = Z({ chat: r });
        r.record[n].historyData[t.itemId].content = r.record[n].historyData[t.itemId].content.map((o) => ({
          ...o,
          sent: !0,
          resend: !1
        }));
      });
    },
    setError(e, { payload: t }) {
      e.error = t;
    },
    resetError(e) {
      e.error = _t.error;
    },
    resetHistory(e, { payload: { thread: t } }) {
      e.record[t] = { historyData: {}, historyIds: [] };
    }
  }
}), $r = (e) => e.chat, Fr = (e) => {
  var t;
  return (t = e.chat.record[Z(e)]) == null ? void 0 : t.historyIds;
}, Va = (e) => {
  const t = Z(e);
  return (Fr(e) || []).find((n) => e.chat.record[t].historyData[n].role === U.user);
}, Wa = (e) => {
  var n, o;
  const t = Z(e), r = Fr(e) || [];
  return rs(((o = (n = e.chat.record[t]) == null ? void 0 : n.historyData[r[0]]) == null ? void 0 : o.time) || (/* @__PURE__ */ new Date()).getTime());
}, Ga = (e) => [...e.chat.record[Z(e)].historyIds].pop(), qa = (e) => (t) => t.chat.record[Z(t)].historyData[e], Ha = (e, t) => e.sequence && t.sequence ? e.sequence - t.sequence : 0, {
  setOutgoing: zr,
  resetOutgoing: Ya,
  updateHistoryByThread: Ja,
  addPredefinedAssistantMessage: Po,
  setIsLoading: Tt,
  resetIsLoading: it,
  setLastGroupPointer: Eo,
  setTypingTimeoutExpired: Co,
  setError: Pt,
  resetError: nr,
  setConnected: kn,
  setClosed: zt,
  showResendIcon: Ln,
  resendMessage: jo,
  fillAssistantHistoryData: or,
  fillUserHistoryData: Dt,
  resetHistory: Ka,
  fillInitialMessage: Xa,
  initiateThread: Za,
  syncMessageStatus: Qa
} = To.actions, ec = To.reducer, Io = Ft({
  name: "intentions",
  initialState: ns,
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
}), ko = (e) => e.intentions.email, tc = (e) => e.intentions.payment, {
  setEmailSuccess: rc,
  setIsPaymentSuccessful: nc,
  setPaymentFormVisibility: oc,
  setEmailError: Mn,
  setIsEmailLoading: _r,
  setIsPaymentButtonVisible: ic,
  setPaymentIntentError: sc,
  setEmail: ac,
  setLink: Lo
} = Io.actions, cc = Io.reducer, lc = () => {
  var b;
  const { cid: e, systemType: t, marketing: r, pd: n } = O(ft), { translations: o, purpose: s, specialUrls: i } = O(Fe), { isLoading: c, record: d, error: u, thread: f } = O($r), m = Z({ chat: { thread: f } }), v = O((w) => w.intentions.link), { error: y, current: _ } = O(ko), {
    isFormVisible: T,
    error: W,
    isSuccessful: S
  } = O(tc), B = {
    systemType: t,
    marketing: r,
    error: u || y || W,
    cid: e,
    isLoading: c,
    currentEmail: _,
    translations: o,
    pd: n,
    isStreaming: !1,
    isPaymentButtonVisible: !1,
    isPaymentFormVisible: !1,
    isEmailFormVisible: !1,
    isResponseFormVisible: !1,
    ctaText: "",
    ctaHref: ""
  };
  if (!m)
    return B;
  const de = [...d[m].historyIds].pop(), I = de && d[m].historyData[de], fe = I && I.role === U.assistant, he = fe && v, ye = !(I && (I != null && I.content.find((w) => w.buttons))), ve = I && (I == null ? void 0 : I.content.find((w) => w.payment)), Pe = I && (I == null ? void 0 : I.content.find((w) => w.email));
  if (I && "isStreaming" in I && (B.isStreaming = !!I.isStreaming), fe && ve)
    return {
      ...B,
      isPaymentButtonVisible: !0
    };
  if (fe && Pe)
    return {
      ...B,
      isEmailFormVisible: !0,
      isPaymentFormVisible: T
    };
  if (S)
    return {
      ...B,
      ctaText: o.ctaTextContent,
      ctaHref: "/",
      isPaymentFormVisible: T
    };
  const ne = I && ((b = I == null ? void 0 : I.content) == null ? void 0 : b.find((w) => w.special));
  if (fe && ne && (ne != null && ne.special) && i[ne.special])
    return {
      ...B,
      ctaText: i[ne.special].includes("merchant") ? o.merchantButton : o.supportButton,
      ctaHref: i[ne.special]
    };
  if (he && s === kr && ye)
    return {
      ...B,
      isResponseFormVisible: !0
    };
  const g = I && !he && !c && (ye || (I == null ? void 0 : I.role) === U.user);
  return {
    ...B,
    ctaText: o.mealButton,
    ctaHref: he,
    isResponseFormVisible: g
  };
};
var Br = { exports: {} }, qe = typeof Reflect == "object" ? Reflect : null, On = qe && typeof qe.apply == "function" ? qe.apply : function(t, r, n) {
  return Function.prototype.apply.call(t, r, n);
}, kt;
qe && typeof qe.ownKeys == "function" ? kt = qe.ownKeys : Object.getOwnPropertySymbols ? kt = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : kt = function(t) {
  return Object.getOwnPropertyNames(t);
};
function uc(e) {
  console && console.warn && console.warn(e);
}
var Mo = Number.isNaN || function(t) {
  return t !== t;
};
function D() {
  D.init.call(this);
}
Br.exports = D;
Br.exports.once = mc;
D.EventEmitter = D;
D.prototype._events = void 0;
D.prototype._eventsCount = 0;
D.prototype._maxListeners = void 0;
var Rn = 10;
function Bt(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(D, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Rn;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || Mo(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    Rn = e;
  }
});
D.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
D.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || Mo(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function Oo(e) {
  return e._maxListeners === void 0 ? D.defaultMaxListeners : e._maxListeners;
}
D.prototype.getMaxListeners = function() {
  return Oo(this);
};
D.prototype.emit = function(t) {
  for (var r = [], n = 1; n < arguments.length; n++) r.push(arguments[n]);
  var o = t === "error", s = this._events;
  if (s !== void 0)
    o = o && s.error === void 0;
  else if (!o)
    return !1;
  if (o) {
    var i;
    if (r.length > 0 && (i = r[0]), i instanceof Error)
      throw i;
    var c = new Error("Unhandled error." + (i ? " (" + i.message + ")" : ""));
    throw c.context = i, c;
  }
  var d = s[t];
  if (d === void 0)
    return !1;
  if (typeof d == "function")
    On(d, this, r);
  else
    for (var u = d.length, f = $o(d, u), n = 0; n < u; ++n)
      On(f[n], this, r);
  return !0;
};
function Ro(e, t, r, n) {
  var o, s, i;
  if (Bt(r), s = e._events, s === void 0 ? (s = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (s.newListener !== void 0 && (e.emit(
    "newListener",
    t,
    r.listener ? r.listener : r
  ), s = e._events), i = s[t]), i === void 0)
    i = s[t] = r, ++e._eventsCount;
  else if (typeof i == "function" ? i = s[t] = n ? [r, i] : [i, r] : n ? i.unshift(r) : i.push(r), o = Oo(e), o > 0 && i.length > o && !i.warned) {
    i.warned = !0;
    var c = new Error("Possible EventEmitter memory leak detected. " + i.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    c.name = "MaxListenersExceededWarning", c.emitter = e, c.type = t, c.count = i.length, uc(c);
  }
  return e;
}
D.prototype.addListener = function(t, r) {
  return Ro(this, t, r, !1);
};
D.prototype.on = D.prototype.addListener;
D.prototype.prependListener = function(t, r) {
  return Ro(this, t, r, !0);
};
function dc() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function No(e, t, r) {
  var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r }, o = dc.bind(n);
  return o.listener = r, n.wrapFn = o, o;
}
D.prototype.once = function(t, r) {
  return Bt(r), this.on(t, No(this, t, r)), this;
};
D.prototype.prependOnceListener = function(t, r) {
  return Bt(r), this.prependListener(t, No(this, t, r)), this;
};
D.prototype.removeListener = function(t, r) {
  var n, o, s, i, c;
  if (Bt(r), o = this._events, o === void 0)
    return this;
  if (n = o[t], n === void 0)
    return this;
  if (n === r || n.listener === r)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete o[t], o.removeListener && this.emit("removeListener", t, n.listener || r));
  else if (typeof n != "function") {
    for (s = -1, i = n.length - 1; i >= 0; i--)
      if (n[i] === r || n[i].listener === r) {
        c = n[i].listener, s = i;
        break;
      }
    if (s < 0)
      return this;
    s === 0 ? n.shift() : fc(n, s), n.length === 1 && (o[t] = n[0]), o.removeListener !== void 0 && this.emit("removeListener", t, c || r);
  }
  return this;
};
D.prototype.off = D.prototype.removeListener;
D.prototype.removeAllListeners = function(t) {
  var r, n, o;
  if (n = this._events, n === void 0)
    return this;
  if (n.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n[t] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n[t]), this;
  if (arguments.length === 0) {
    var s = Object.keys(n), i;
    for (o = 0; o < s.length; ++o)
      i = s[o], i !== "removeListener" && this.removeAllListeners(i);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (r = n[t], typeof r == "function")
    this.removeListener(t, r);
  else if (r !== void 0)
    for (o = r.length - 1; o >= 0; o--)
      this.removeListener(t, r[o]);
  return this;
};
function Do(e, t, r) {
  var n = e._events;
  if (n === void 0)
    return [];
  var o = n[t];
  return o === void 0 ? [] : typeof o == "function" ? r ? [o.listener || o] : [o] : r ? pc(o) : $o(o, o.length);
}
D.prototype.listeners = function(t) {
  return Do(this, t, !0);
};
D.prototype.rawListeners = function(t) {
  return Do(this, t, !1);
};
D.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Ao.call(e, t);
};
D.prototype.listenerCount = Ao;
function Ao(e) {
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
D.prototype.eventNames = function() {
  return this._eventsCount > 0 ? kt(this._events) : [];
};
function $o(e, t) {
  for (var r = new Array(t), n = 0; n < t; ++n)
    r[n] = e[n];
  return r;
}
function fc(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function pc(e) {
  for (var t = new Array(e.length), r = 0; r < t.length; ++r)
    t[r] = e[r].listener || e[r];
  return t;
}
function mc(e, t) {
  return new Promise(function(r, n) {
    function o(i) {
      e.removeListener(t, s), n(i);
    }
    function s() {
      typeof e.removeListener == "function" && e.removeListener("error", o), r([].slice.call(arguments));
    }
    Fo(e, t, s, { once: !0 }), t !== "error" && hc(e, o, { once: !0 });
  });
}
function hc(e, t, r) {
  typeof e.on == "function" && Fo(e, "error", t, r);
}
function Fo(e, t, r, n) {
  if (typeof e.on == "function")
    n.once ? e.once(t, r) : e.on(t, r);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function o(s) {
      n.once && e.removeEventListener(t, o), r(s);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var vc = Br.exports;
const _e = {
  type: Zn,
  core: new vc.EventEmitter()
}, gc = (
  /* tw*/
  V({
    slots: {
      base: "tw--relative tw--flex tw--items-center",
      input: "tw--w-full tw--px-[15px] tw--py-[11px] tw--rounded-[20px] focus:tw--outline-none focus:!tw--bg-lumina tw--bg-lumina tw--text-zephyr-100 tw--font-density-different",
      loader: "tw--absolute tw--right-4 tw--top-[50%] tw--translate-y-[-50%]",
      spin: "tw--block tw--w-6 tw--h-6 tw--border-solid tw--border-[5px] tw--rounded-3xl tw--animate-rotate tw--m-auto tw--border-zephyr-200 tw--border-t-zephyr-600 tw--border-l-zephyr-600"
    }
  })
), Ur = Gn((e, t) => {
  const {
    disabled: r,
    e2e: n,
    isLoading: o,
    onChange: s,
    onKeyUp: i,
    placeholder: c,
    type: d,
    value: u
  } = e, { base: f, input: m, loader: v, spin: y } = gc();
  return /* @__PURE__ */ l.jsxs("div", { className: f(), children: [
    /* @__PURE__ */ l.jsx(
      "input",
      {
        className: m(),
        "data-e2e": n,
        disabled: o || r,
        onChange: s,
        onKeyUp: i,
        placeholder: c,
        ref: t,
        type: d,
        value: u
      }
    ),
    o && /* @__PURE__ */ l.jsx("span", { className: v(), children: /* @__PURE__ */ l.jsx("span", { className: y() }) })
  ] });
});
Ur.displayName = "Input";
const wc = () => {
  const e = Te(), t = O((v) => v.meta), { translations: r } = O(Fe), { isLoading: n } = O(ko), { base: o, input: s, button: i } = vo(), [c, d] = ct(""), u = Cr(null);
  dt(() => {
    ce({
      eventType: se.emailField,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid
    }), setTimeout(() => {
      u.current && u.current.focus();
    }, 500);
  });
  const f = (v) => {
    const y = v.target.value.trim();
    d(y);
  }, m = (v) => {
    v.preventDefault(), c !== "" && (e(_r(!0)), e(ac(c)), _e.core.emit(_e.type.email, { email: c }), d(""));
  };
  return /* @__PURE__ */ l.jsxs(
    "form",
    {
      className: o(),
      onSubmit: m,
      "data-e2e": "email-form",
      children: [
        /* @__PURE__ */ l.jsx("div", { className: s(), children: /* @__PURE__ */ l.jsx(
          Ur,
          {
            e2e: "email-input",
            isLoading: n,
            name: "email",
            onChange: f,
            ref: u,
            placeholder: r.emailPlaceholder,
            type: "email",
            value: c
          }
        ) }),
        /* @__PURE__ */ l.jsx("div", { className: i(), children: /* @__PURE__ */ l.jsx(pt, { onClick: m, e2e: "email-validate-btn", children: /* @__PURE__ */ l.jsx(
          "svg",
          {
            fill: "currentColor",
            viewBox: "0 0 24 24",
            width: "20px",
            height: "20px",
            children: /* @__PURE__ */ l.jsx(
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
}, yc = () => {
  const e = Te(), t = O($r), { base: r, input: n, button: o } = vo(), [s, i] = ct(""), [c, d] = ct(null), u = O((_) => _.chat.lastGroupId), f = Cr(null);
  dt(() => {
    setTimeout(() => {
      var _;
      (_ = f.current) == null || _.focus();
    }, 500);
  }, []);
  const m = (_) => {
    i(_.target.value), y();
  }, v = (_) => {
    _.preventDefault(), s.trim() && e(Dt({
      id: X(),
      threadId: Z({ chat: t }),
      content: {
        text: s,
        groupId: u,
        resend: !1,
        sent: !0
      }
    })), i(""), y();
  }, y = () => {
    c && clearTimeout(c);
    const _ = setTimeout(() => {
      e(Co(!0)), e(Eo(X()));
    }, ja);
    d(_);
  };
  return /* @__PURE__ */ l.jsxs(
    "form",
    {
      className: r(),
      onSubmit: v,
      "data-e2e": "user-form",
      children: [
        /* @__PURE__ */ l.jsx("div", { className: n(), children: /* @__PURE__ */ l.jsx(
          Ur,
          {
            disabled: !t.connected,
            isLoading: t.isLoading,
            e2e: "message-input",
            name: "response",
            onChange: m,
            placeholder: "Write your message here...",
            type: "response",
            value: s,
            ref: f
          }
        ) }),
        /* @__PURE__ */ l.jsx("div", { className: o(), children: /* @__PURE__ */ l.jsx(pt, { onClick: v, disabled: !t.connected, children: /* @__PURE__ */ l.jsx(
          "svg",
          {
            fill: "currentColor",
            viewBox: "0 0 24 24",
            width: "20px",
            height: "20px",
            children: /* @__PURE__ */ l.jsx(
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
}, bc = () => {
  const e = Te(), t = lc(), r = Cr(null), [n, o] = ct(!1), s = (m) => {
    e(oc(m));
  };
  dt(() => {
    t.isEmailFormVisible && ce({
      eventType: se.emailField,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid,
      email: t.currentEmail
    });
  }, [t.isEmailFormVisible]);
  const i = (m) => {
    m.currentTarget.disabled = !0, _e.core.emit(_e.type.destroy), s(!1), o(!1);
  }, c = () => {
    e(Po({ content: t.translations.tm1226 })), e(nc(!0)), e(ic(!1)), s(!1), ce({
      eventType: se.linkProvided,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid,
      email: t.currentEmail
    }), setTimeout(() => {
      r.current && r.current.click();
    }, 7e3);
  }, d = (m) => {
    e(sc(m));
  }, u = () => {
    _e.core.emit(_e.type.payment, { setIsPaymentContainerVisible: s, onPaymentSuccess: c, onError: d }), o(!0);
  }, f = (m) => {
    localStorage.setItem(bo, m.currentTarget.href), ce({
      eventType: se.linkClicked,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid,
      email: t.currentEmail
    }), e(zt());
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "tw--space-y-[11px] tw--pb-[11px]", "data-e2e": "chat-foot", children: [
    t.error && /* @__PURE__ */ l.jsx("div", { "data-e2e": "error-message", className: "tw--pl-[35px] tw--text-[#ff0043] tw--font-medium", children: t.error }),
    t.isPaymentFormVisible && /* @__PURE__ */ l.jsx(ha, { onClose: i }),
    t.isLoading && /* @__PURE__ */ l.jsx(xa, {}),
    t.ctaHref && /* @__PURE__ */ l.jsx(
      wo,
      {
        ref: r,
        text: t.ctaText,
        onClick: f,
        href: t.ctaHref,
        e2e: "quiz-trigger-btn"
      }
    ),
    !t.isStreaming && t.isEmailFormVisible && /* @__PURE__ */ l.jsx(wc, {}),
    !t.isStreaming && t.isResponseFormVisible && /* @__PURE__ */ l.jsx(yc, {}),
    t.isPaymentButtonVisible && /* @__PURE__ */ l.jsx(
      ua,
      {
        text: t.translations.payButton,
        onClick: u,
        disabled: n,
        e2e: "payment-form-trigger-btn"
      }
    )
  ] });
}, xc = (
  /*tw*/
  V({
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
), zo = ({ orientation: e = jr.horizontal, minimized: t = !1 }) => {
  const { aiProfile: r } = O(Fe), { base: n, avatar: o, info: s, name: i, role: c, imgWrapper: d } = xc({ orientation: e, minimized: t });
  return /* @__PURE__ */ l.jsxs("div", { className: n(), children: [
    /* @__PURE__ */ l.jsx("span", { className: d(), children: /* @__PURE__ */ l.jsx(
      "img",
      {
        className: o(),
        src: r.imgSrc,
        alt: "img"
      }
    ) }),
    /* @__PURE__ */ l.jsxs("div", { className: s(), children: [
      /* @__PURE__ */ l.jsx("div", { className: i(), children: r.name }),
      /* @__PURE__ */ l.jsx("div", { className: c(), children: r.role })
    ] })
  ] });
}, _c = () => {
  const e = Te(), t = hs(), { base: r } = ta({ theme: t.theme }), n = (o) => {
    o.currentTarget.disabled = !0, ce({
      eventType: se.closeClicked,
      systemType: t.systemType,
      utmParams: t.marketing.lastUtmParams,
      customerUuid: t.cid
    }), setTimeout(() => {
      e(zt());
    }, Ea);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: r(), "data-e2e": "chat-heading", children: [
    /* @__PURE__ */ l.jsx(zo, {}),
    t.closeVisible && /* @__PURE__ */ l.jsx(pt, { e2e: "chat-close-btn", onClick: n, children: /* @__PURE__ */ l.jsx(ho, {}) })
  ] });
}, Sc = (e) => {
  const t = (n) => /[?&]([^=#]+)=([^&#]*)/g.test(n);
  let r;
  if (window.location.search) {
    const n = new URLSearchParams(window.location.search);
    n.append(_a, "true"), n.append(Ta, localStorage.getItem("__cid") || ""), r = `/?${n}`;
  } else
    r = "";
  return t(e) ? e : e + r;
}, Tc = (e) => e.replaceAll(/\\r\\n|\\n|\r\n|<br>|<br\/>/g, `
`), Pc = ({ properties: e }) => {
  const { purpose: t } = O(Fe), { cid: r, marketing: n, systemType: o } = O(ft), s = Te(), i = e.href ? Sc(e.href) : "#";
  dt(() => {
    s(Lo(i));
  });
  const c = (d) => {
    t !== kr && localStorage.setItem(bo, d.currentTarget.href), ce({
      eventType: se.linkClicked,
      systemType: o,
      utmParams: n.lastUtmParams,
      customerUuid: r
    }), s(zt());
  };
  return /* @__PURE__ */ l.jsx(
    "a",
    {
      href: i,
      onClick: c,
      className: "tw--underline",
      children: e.href
    }
  );
}, Nn = Mi(function({ url: t, background: r, title: n = "", type: o, image: s, e2e: i }) {
  const c = Te(), d = () => {
    const u = { code: "", image: "", isVisible: !0, title: n };
    o === te.video && t && (u.code = t), o === te.image && s && (u.image = s), c(ss(u));
  };
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      className: "w-full tw--h-[200px] tw--justify-center tw--flex tw--items-center tw--pointer-events-auto tw--w-[300px] md:tw--w-[350px]",
      "data-e2e": i,
      onClick: d,
      style: {
        backgroundImage: r,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
      },
      children: o === te.video && /* @__PURE__ */ l.jsx("button", { className: "tw--items-center tw--justify-center tw--w-16 tw--h-16 tw--rounded-full tw--cursor-pointer tw--pointer-events-auto tw--flex tw--bg-gradient-to-b tw--from-[#FF0000] tw--to-[#F25640]", children: /* @__PURE__ */ l.jsx("svg", { className: "tw--pointer-events-none", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ l.jsx(
        "path",
        {
          d: "M10.6665 9.09335V22.9067C10.6665 23.96 11.8265 24.6 12.7198 24.0267L23.5732 17.12C23.7632 16.9998 23.9197 16.8334 24.0282 16.6364C24.1366 16.4394 24.1935 16.2182 24.1935 15.9933C24.1935 15.7685 24.1366 15.5473 24.0282 15.3503C23.9197 15.1533 23.7632 14.9869 23.5732 14.8667L12.7198 7.97335C12.5187 7.84327 12.2862 7.76989 12.0469 7.76094C11.8076 7.75199 11.5702 7.8078 11.36 7.92249C11.1497 8.03718 10.9743 8.20649 10.8523 8.41257C10.7302 8.61864 10.666 8.85384 10.6665 9.09335V9.09335Z",
          fill: "white"
        }
      ) }) })
    }
  );
}), Ec = (
  /* tw*/
  V({
    slots: {
      base: "tw--flex-1 tw--w-full tw--px-[15px] tw--py-[11px] tw--rounded-[20px] tw--border select-none tw--text-center tw--bg-glaze tw--text-whisper"
    }
  })
);
/* tw*/
V({
  slots: {
    base: "tw--flex-1 tw--px-4 tw--py-2"
  }
});
const Cc = ({ text: e, href: t, onClick: r }) => {
  const { base: n } = Ec();
  return /* @__PURE__ */ l.jsx(
    "a",
    {
      href: t,
      onClick: r,
      className: n(),
      children: e
    }
  );
}, jc = ({ options: e = [] }) => {
  const t = Te(), r = O(ft), n = O($r), o = !O(Va), s = (c, d) => {
    t(Dt({
      id: X(),
      threadId: Z({ chat: n }),
      content: {
        text: c,
        resend: !1,
        sent: !0,
        groupId: ""
      }
    })), t(zr(c)), o && ce({
      eventType: se.buttonClick + d,
      systemType: r.systemType,
      utmParams: r.marketing.lastUtmParams,
      customerUuid: r.cid
    });
  }, i = (c) => {
    t(Dt({
      id: X(),
      threadId: Z({ chat: n }),
      content: {
        text: c,
        resend: !1,
        sent: !0,
        groupId: ""
      }
    }));
  };
  return [...e].sort((c, d) => c.sequence - d.sequence).map(({ value: c, link: d, sequence: u, noStream: f }) => d ? /* @__PURE__ */ l.jsx(
    Cc,
    {
      text: c,
      href: d
    },
    X()
  ) : /* @__PURE__ */ l.jsx(
    Xs,
    {
      text: c,
      onClick: f ? () => i(c) : () => s(c, u),
      e2e: "option-button"
    },
    X()
  ));
}, Ic = ({ message: e, itemId: t }) => {
  const { pd: r } = O(ft), n = O(Ga) === t, { base: o } = ya({ isTyping: !!e.isStreaming }), s = [...e.content].sort(Ha);
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: s.map((i) => {
    var c, d, u, f, m, v;
    if (i.type === te.text)
      return /* @__PURE__ */ l.jsx("div", { className: "tw--flex tw--flex-col tw--space-y-[10px]", "data-e2e": "assistant-text", children: /* @__PURE__ */ l.jsx("span", { className: o(), children: /* @__PURE__ */ l.jsx(
        Fi,
        {
          components: {
            a(y) {
              return /* @__PURE__ */ l.jsx(Pc, { properties: y });
            }
          },
          children: Tc(i[i.type] || "")
        },
        X()
      ) }) }, X());
    if (i.type === te.buttons && n)
      return /* @__PURE__ */ l.jsx("div", { className: "tw--flex tw--flex-col tw--space-y-[10px]", children: /* @__PURE__ */ l.jsx(jc, { options: i[i.type] }) }, X());
    if (i.type === te.video)
      return /* @__PURE__ */ l.jsx(
        Nn,
        {
          e2e: "assistant-iframe",
          title: ((c = i[i.type]) == null ? void 0 : c.title) || "",
          background: `url(https://img.youtube.com/vi/${hn((d = i[i.type]) == null ? void 0 : d.url)}/hqdefault.jpg)`,
          url: hn(((u = i[i.type]) == null ? void 0 : u.url) || "https://www.youtube.com/embed/g4B8Dhl4pxY"),
          type: te.video
        },
        X()
      );
    if (i.type === te.image)
      return /* @__PURE__ */ l.jsx(
        Nn,
        {
          e2e: "assistant-img",
          image: ((f = i[i.type]) == null ? void 0 : f.url) || "",
          background: `url("${(m = i[i.type]) == null ? void 0 : m.url}")`,
          type: te.image,
          title: (v = i[i.type]) == null ? void 0 : v.title
        },
        X()
      );
    if (i.type === te.payment)
      return `${i[i.type]} ${r.displayPlanPrice} ${r.billingFrequencyTmsg}`;
    if (i.type === te.email)
      return i[i.type];
  }) });
}, kc = $t.memo(Ic), Lc = ({ itemId: e }) => {
  const t = O(qa(e));
  return t && /* @__PURE__ */ l.jsx(
    "div",
    {
      className: yo({ type: t.role }).base(),
      "data-e2e": t.role === U.assistant ? "stream-assistant-msg" : "user-msg",
      children: t.role === U.assistant ? /* @__PURE__ */ l.jsx(kc, { message: t, itemId: e }) : [...t.content].map((r) => /* @__PURE__ */ l.jsx(
        Nc,
        {
          record: {
            text: r.text || "",
            resend: r.resend || !1,
            sent: r.sent || !0,
            groupId: r.groupId || "",
            itemId: e
          }
        },
        X()
      ))
    }
  );
}, Mc = $t.memo(Lc), Oc = ({ titleTxt: e }) => {
  const { base: t, title: r } = ga();
  return /* @__PURE__ */ l.jsxs("div", { className: t(), children: [
    r && /* @__PURE__ */ l.jsx("div", { className: r(), children: e }),
    /* @__PURE__ */ l.jsx(zo, { orientation: jr.vertical })
  ] });
}, Rc = () => {
  const { aiProfile: e } = O(Fe), t = O(Fr) || [], r = O(Wa), { base: n, second: o, date: s } = va(), { base: i } = wa();
  return /* @__PURE__ */ l.jsx("div", { className: n(), children: /* @__PURE__ */ l.jsxs("div", { className: o(), "data-e2e": "history-container", children: [
    /* @__PURE__ */ l.jsx(Oc, { titleTxt: e.welcome }),
    /* @__PURE__ */ l.jsx("div", { className: s(), "data-e2e": "stream-assistant-msg-date", children: r }),
    t.map((c) => /* @__PURE__ */ l.jsx(
      "div",
      {
        className: i(),
        "data-e2e": "history-item",
        children: /* @__PURE__ */ l.jsx(Mc, { itemId: c })
      },
      X()
    ))
  ] }) });
}, Nc = ({ record: e }) => {
  const t = Te(), { action: r, separator: n } = yo({ type: U.user }), o = () => {
    t(jo({ ...e }));
  };
  return /* @__PURE__ */ l.jsxs("div", { className: n(), children: [
    /* @__PURE__ */ l.jsx("span", { children: e.text }),
    e.resend && !e.sent && /* @__PURE__ */ l.jsx("div", { className: r(), children: /* @__PURE__ */ l.jsx(pt, { outlined: !0, onClick: () => o(), children: /* @__PURE__ */ l.jsxs(
      "svg",
      {
        fill: "currentColor",
        viewBox: "0 0 24 24",
        width: "20px",
        height: "20px",
        children: [
          /* @__PURE__ */ l.jsx("path", { fill: "none", d: "M0 0h24v24H0V0z" }),
          /* @__PURE__ */ l.jsx("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" })
        ]
      }
    ) }) })
  ] });
}, Dc = ({ config: e }) => {
  const t = Te();
  return t(ls(e.meta)), t(os(e.app.purpose)), t(is(e.specialUrls)), t(to(e.app)), /* @__PURE__ */ l.jsx(
    ra,
    {
      head: /* @__PURE__ */ l.jsx(_c, {}),
      stream: /* @__PURE__ */ l.jsx(Rc, {}),
      foot: /* @__PURE__ */ l.jsx(bc, {})
    }
  );
};
var Vr = {}, Wr = {};
Wr.__esModule = !0;
Wr.default = Fc;
function Lt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Lt = function(r) {
    return typeof r;
  } : Lt = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Lt(e);
}
function ir() {
}
var Ac = {
  getItem: ir,
  setItem: ir,
  removeItem: ir
};
function $c(e) {
  if ((typeof self > "u" ? "undefined" : Lt(self)) !== "object" || !(e in self))
    return !1;
  try {
    var t = self[e], r = "redux-persist ".concat(e, " test");
    t.setItem(r, "test"), t.getItem(r), t.removeItem(r);
  } catch {
    return re.env.NODE_ENV !== "production" && console.warn("redux-persist ".concat(e, " test failed, persistence will be disabled.")), !1;
  }
  return !0;
}
function Fc(e) {
  var t = "".concat(e, "Storage");
  return $c(t) ? self[t] : (re.env.NODE_ENV !== "production" && console.error("redux-persist failed to create sync storage. falling back to noop storage."), Ac);
}
Vr.__esModule = !0;
Vr.default = Uc;
var zc = Bc(Wr);
function Bc(e) {
  return e && e.__esModule ? e : { default: e };
}
function Uc(e) {
  var t = (0, zc.default)(e);
  return {
    getItem: function(n) {
      return new Promise(function(o, s) {
        o(t.getItem(n));
      });
    },
    setItem: function(n, o) {
      return new Promise(function(s, i) {
        s(t.setItem(n, o));
      });
    },
    removeItem: function(n) {
      return new Promise(function(o, s) {
        o(t.removeItem(n));
      });
    }
  };
}
var Bo = void 0, Vc = Wc(Vr);
function Wc(e) {
  return e && e.__esModule ? e : { default: e };
}
var Gc = (0, Vc.default)("local");
Bo = Gc;
var z = {};
function qc(e) {
  return !!(e && typeof e.then == "function");
}
function At(e) {
  return e || (e = 0), new Promise(function(t) {
    return setTimeout(t, e);
  });
}
function Hc(e, t) {
  return Math.floor(Math.random() * (t - e + 1) + e);
}
function Ut() {
  return Math.random().toString(36).substring(2);
}
var Dn = 0, sr = 0;
function Vt() {
  var e = (/* @__PURE__ */ new Date()).getTime();
  return e === Dn ? (sr++, e * 1e3 + sr) : (Dn = e, sr = 0, e * 1e3);
}
var mt = Object.prototype.toString.call(typeof re < "u" ? re : 0) === "[object process]", Yc = Vt, Jc = "native";
function Kc(e) {
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
function Xc(e) {
  e.bc.close(), e.subFns = [];
}
function Zc(e, t) {
  try {
    return e.bc.postMessage(t, !1), Promise.resolve();
  } catch (r) {
    return Promise.reject(r);
  }
}
function Qc(e, t) {
  e.messagesCallback = t;
}
function el() {
  if (mt && typeof window > "u") return !1;
  if (typeof BroadcastChannel == "function") {
    if (BroadcastChannel._pubkey)
      throw new Error("BroadcastChannel: Do not overwrite window.BroadcastChannel with this module, this is not a polyfill");
    return !0;
  } else return !1;
}
function tl() {
  return 150;
}
const rl = {
  create: Kc,
  close: Xc,
  onMessage: Qc,
  postMessage: Zc,
  canBeUsed: el,
  type: Jc,
  averageResponseTime: tl,
  microSeconds: Yc
};
var Uo = (
  /** @class */
  function() {
    function e(t) {
      this.ttl = t, this.set = /* @__PURE__ */ new Set(), this.timeMap = /* @__PURE__ */ new Map();
    }
    return e.prototype.has = function(t) {
      return this.set.has(t);
    }, e.prototype.add = function(t) {
      var r = this;
      this.timeMap.set(t, Vo()), this.set.add(t), setTimeout(function() {
        nl(r);
      }, 0);
    }, e.prototype.clear = function() {
      this.set.clear(), this.timeMap.clear();
    }, e;
  }()
);
function nl(e) {
  for (var t = Vo() - e.ttl, r = e.set[Symbol.iterator](); ; ) {
    var n = r.next().value;
    if (!n)
      return;
    var o = e.timeMap.get(n);
    if (o < t)
      e.timeMap.delete(n), e.set.delete(n);
    else
      return;
  }
}
function Vo() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function Wt() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = JSON.parse(JSON.stringify(e));
  return typeof t.webWorkerSupport > "u" && (t.webWorkerSupport = !0), t.idb || (t.idb = {}), t.idb.ttl || (t.idb.ttl = 1e3 * 45), t.idb.fallbackInterval || (t.idb.fallbackInterval = 150), e.idb && typeof e.idb.onclose == "function" && (t.idb.onclose = e.idb.onclose), t.localstorage || (t.localstorage = {}), t.localstorage.removeTimeout || (t.localstorage.removeTimeout = 1e3 * 60), e.methods && (t.methods = e.methods), t.node || (t.node = {}), t.node.ttl || (t.node.ttl = 1e3 * 60 * 2), typeof t.node.useFastPath > "u" && (t.node.useFastPath = !0), t;
}
var ol = Vt, il = "pubkey.broadcast-channel-0-", je = "messages", sl = "idb";
function Wo() {
  if (typeof indexedDB < "u") return indexedDB;
  if (typeof window < "u") {
    if (typeof window.mozIndexedDB < "u") return window.mozIndexedDB;
    if (typeof window.webkitIndexedDB < "u") return window.webkitIndexedDB;
    if (typeof window.msIndexedDB < "u") return window.msIndexedDB;
  }
  return !1;
}
function al(e) {
  var t = Wo(), r = il + e, n = t.open(r, 1);
  n.onupgradeneeded = function(s) {
    var i = s.target.result;
    i.createObjectStore(je, {
      keyPath: "id",
      autoIncrement: !0
    });
  };
  var o = new Promise(function(s, i) {
    n.onerror = function(c) {
      return i(c);
    }, n.onsuccess = function() {
      s(n.result);
    };
  });
  return o;
}
function cl(e, t, r) {
  var n = (/* @__PURE__ */ new Date()).getTime(), o = {
    uuid: t,
    time: n,
    data: r
  }, s = e.transaction([je], "readwrite");
  return new Promise(function(i, c) {
    s.oncomplete = function() {
      return i();
    }, s.onerror = function(u) {
      return c(u);
    };
    var d = s.objectStore(je);
    d.add(o);
  });
}
function ll(e, t) {
  var r = e.transaction(je).objectStore(je), n = [];
  function o() {
    try {
      var s = IDBKeyRange.bound(t + 1, 1 / 0);
      return r.openCursor(s);
    } catch {
      return r.openCursor();
    }
  }
  return new Promise(function(s) {
    o().onsuccess = function(i) {
      var c = i.target.result;
      c ? c.value.id < t + 1 ? c.continue(t + 1) : (n.push(c.value), c.continue()) : s(n);
    };
  });
}
function ul(e, t) {
  var r = e.transaction([je], "readwrite").objectStore(je).delete(t);
  return new Promise(function(n) {
    r.onsuccess = function() {
      return n();
    };
  });
}
function dl(e, t) {
  var r = (/* @__PURE__ */ new Date()).getTime() - t, n = e.transaction(je).objectStore(je), o = [];
  return new Promise(function(s) {
    n.openCursor().onsuccess = function(i) {
      var c = i.target.result;
      if (c) {
        var d = c.value;
        if (d.time < r)
          o.push(d), c.continue();
        else {
          s(o);
          return;
        }
      } else
        s(o);
    };
  });
}
function fl(e, t) {
  return dl(e, t).then(function(r) {
    return Promise.all(r.map(function(n) {
      return ul(e, n.id);
    }));
  });
}
function pl(e, t) {
  return t = Wt(t), al(e).then(function(r) {
    var n = {
      closed: !1,
      lastCursorId: 0,
      channelName: e,
      options: t,
      uuid: Ut(),
      /**
       * emittedMessagesIds
       * contains all messages that have been emitted before
       * @type {ObliviousSet}
       */
      eMIs: new Uo(t.idb.ttl * 2),
      // ensures we do not read messages in parrallel
      writeBlockPromise: Promise.resolve(),
      messagesCallback: null,
      readQueuePromises: [],
      db: r
    };
    return r.onclose = function() {
      n.closed = !0, t.idb.onclose && t.idb.onclose();
    }, Go(n), n;
  });
}
function Go(e) {
  e.closed || qo(e).then(function() {
    return At(e.options.idb.fallbackInterval);
  }).then(function() {
    return Go(e);
  });
}
function ml(e, t) {
  return !(e.uuid === t.uuid || t.eMIs.has(e.id) || e.data.time < t.messagesCallbackTime);
}
function qo(e) {
  return e.closed || !e.messagesCallback ? Promise.resolve() : ll(e.db, e.lastCursorId).then(function(t) {
    var r = t.filter(function(n) {
      return !!n;
    }).map(function(n) {
      return n.id > e.lastCursorId && (e.lastCursorId = n.id), n;
    }).filter(function(n) {
      return ml(n, e);
    }).sort(function(n, o) {
      return n.time - o.time;
    });
    return r.forEach(function(n) {
      e.messagesCallback && (e.eMIs.add(n.id), e.messagesCallback(n.data));
    }), Promise.resolve();
  });
}
function hl(e) {
  e.closed = !0, e.db.close();
}
function vl(e, t) {
  return e.writeBlockPromise = e.writeBlockPromise.then(function() {
    return cl(e.db, e.uuid, t);
  }).then(function() {
    Hc(0, 10) === 0 && fl(e.db, e.options.idb.ttl);
  }), e.writeBlockPromise;
}
function gl(e, t, r) {
  e.messagesCallbackTime = r, e.messagesCallback = t, qo(e);
}
function wl() {
  if (mt) return !1;
  var e = Wo();
  return !!e;
}
function yl(e) {
  return e.idb.fallbackInterval * 2;
}
const bl = {
  create: pl,
  close: hl,
  onMessage: gl,
  postMessage: vl,
  canBeUsed: wl,
  type: sl,
  averageResponseTime: yl,
  microSeconds: ol
};
var xl = Vt, _l = "pubkey.broadcastChannel-", Sl = "localstorage";
function Ho() {
  var e;
  if (typeof window > "u") return null;
  try {
    e = window.localStorage, e = window["ie8-eventlistener/storage"] || window.localStorage;
  } catch {
  }
  return e;
}
function Yo(e) {
  return _l + e;
}
function Tl(e, t) {
  return new Promise(function(r) {
    At().then(function() {
      var n = Yo(e.channelName), o = {
        token: Ut(),
        time: (/* @__PURE__ */ new Date()).getTime(),
        data: t,
        uuid: e.uuid
      }, s = JSON.stringify(o);
      Ho().setItem(n, s);
      var i = document.createEvent("Event");
      i.initEvent("storage", !0, !0), i.key = n, i.newValue = s, window.dispatchEvent(i), r();
    });
  });
}
function Pl(e, t) {
  var r = Yo(e), n = function(s) {
    s.key === r && t(JSON.parse(s.newValue));
  };
  return window.addEventListener("storage", n), n;
}
function El(e) {
  window.removeEventListener("storage", e);
}
function Cl(e, t) {
  if (t = Wt(t), !Jo())
    throw new Error("BroadcastChannel: localstorage cannot be used");
  var r = Ut(), n = new Uo(t.localstorage.removeTimeout), o = {
    channelName: e,
    uuid: r,
    eMIs: n
    // emittedMessagesIds
  };
  return o.listener = Pl(e, function(s) {
    o.messagesCallback && s.uuid !== r && (!s.token || n.has(s.token) || s.data.time && s.data.time < o.messagesCallbackTime || (n.add(s.token), o.messagesCallback(s.data)));
  }), o;
}
function jl(e) {
  El(e.listener);
}
function Il(e, t, r) {
  e.messagesCallbackTime = r, e.messagesCallback = t;
}
function Jo() {
  if (mt) return !1;
  var e = Ho();
  if (!e) return !1;
  try {
    var t = "__broadcastchannel_check";
    e.setItem(t, "works"), e.removeItem(t);
  } catch {
    return !1;
  }
  return !0;
}
function kl() {
  var e = 120, t = navigator.userAgent.toLowerCase();
  return t.includes("safari") && !t.includes("chrome") ? e * 2 : e;
}
const Ll = {
  create: Cl,
  close: jl,
  onMessage: Il,
  postMessage: Tl,
  canBeUsed: Jo,
  type: Sl,
  averageResponseTime: kl,
  microSeconds: xl
};
var Ml = Vt, Ol = "simulate", Gr = /* @__PURE__ */ new Set();
function Rl(e) {
  var t = {
    name: e,
    messagesCallback: null
  };
  return Gr.add(t), t;
}
function Nl(e) {
  Gr.delete(e);
}
function Dl(e, t) {
  return new Promise(function(r) {
    return setTimeout(function() {
      var n = Array.from(Gr);
      n.filter(function(o) {
        return o.name === e.name;
      }).filter(function(o) {
        return o !== e;
      }).filter(function(o) {
        return !!o.messagesCallback;
      }).forEach(function(o) {
        return o.messagesCallback(t);
      }), r();
    }, 5);
  });
}
function Al(e, t) {
  e.messagesCallback = t;
}
function $l() {
  return !0;
}
function Fl() {
  return 5;
}
const zl = {
  create: Rl,
  close: Nl,
  onMessage: Al,
  postMessage: Dl,
  canBeUsed: $l,
  type: Ol,
  averageResponseTime: Fl,
  microSeconds: Ml
};
var Sr = [
  rl,
  // fastest
  bl,
  Ll
];
if (mt) {
  var An = require("../../src/methods/node.js");
  typeof An.canBeUsed == "function" && Sr.push(An);
}
function Ko(e) {
  var t = [].concat(e.methods, Sr).filter(Boolean);
  if (e.type) {
    if (e.type === "simulate")
      return zl;
    var r = t.find(function(o) {
      return o.type === e.type;
    });
    if (r) return r;
    throw new Error("method-type " + e.type + " not found");
  }
  !e.webWorkerSupport && !mt && (t = t.filter(function(o) {
    return o.type !== "idb";
  }));
  var n = t.find(function(o) {
    return o.canBeUsed();
  });
  if (n) return n;
  throw new Error("No useable methode found:" + JSON.stringify(Sr.map(function(o) {
    return o.type;
  })));
}
var qr = function(t, r) {
  this.name = t, Tr && (r = Tr), this.options = Wt(r), this.method = Ko(this.options), this._iL = !1, this._onML = null, this._addEL = {
    message: [],
    internal: []
  }, this._uMP = /* @__PURE__ */ new Set(), this._befC = [], this._prepP = null, Vl(this);
};
qr._pubkey = !0;
function Bl(e) {
  e = Wt(e);
  var t = Ko(e);
  return t.type === "node" ? t.clearNodeFolder().then(function() {
    return !0;
  }) : Promise.resolve(!1);
}
var Tr;
function Ul(e) {
  Tr = e;
}
qr.prototype = {
  postMessage: function(t) {
    if (this.closed)
      throw new Error("BroadcastChannel.postMessage(): Cannot post message after channel has closed");
    return $n(this, "message", t);
  },
  postInternal: function(t) {
    return $n(this, "internal", t);
  },
  set onmessage(e) {
    var t = this.method.microSeconds(), r = {
      time: t,
      fn: e
    };
    zn(this, "message", this._onML), e && typeof e == "function" ? (this._onML = r, Fn(this, "message", r)) : this._onML = null;
  },
  addEventListener: function(t, r) {
    var n = this.method.microSeconds(), o = {
      time: n,
      fn: r
    };
    Fn(this, t, o);
  },
  removeEventListener: function(t, r) {
    var n = this._addEL[t].find(function(o) {
      return o.fn === r;
    });
    zn(this, t, n);
  },
  close: function() {
    var t = this;
    if (!this.closed) {
      this.closed = !0;
      var r = this._prepP ? this._prepP : Promise.resolve();
      return this._onML = null, this._addEL.message = [], r.then(function() {
        return Promise.all(Array.from(t._uMP));
      }).then(function() {
        return Promise.all(t._befC.map(function(n) {
          return n();
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
function $n(e, t, r) {
  var n = e.method.microSeconds(), o = {
    time: n,
    type: t,
    data: r
  }, s = e._prepP ? e._prepP : Promise.resolve();
  return s.then(function() {
    var i = e.method.postMessage(e._state, o);
    return e._uMP.add(i), i.catch().then(function() {
      return e._uMP.delete(i);
    }), i;
  });
}
function Vl(e) {
  var t = e.method.create(e.name, e.options);
  qc(t) ? (e._prepP = t, t.then(function(r) {
    e._state = r;
  })) : e._state = t;
}
function Xo(e) {
  return e._addEL.message.length > 0 || e._addEL.internal.length > 0;
}
function Fn(e, t, r) {
  e._addEL[t].push(r), Wl(e);
}
function zn(e, t, r) {
  e._addEL[t] = e._addEL[t].filter(function(n) {
    return n !== r;
  }), Gl(e);
}
function Wl(e) {
  if (!e._iL && Xo(e)) {
    var t = function(o) {
      e._addEL[o.type].forEach(function(s) {
        o.time >= s.time && s.fn(o.data);
      });
    }, r = e.method.microSeconds();
    e._prepP ? e._prepP.then(function() {
      e._iL = !0, e.method.onMessage(e._state, t, r);
    }) : (e._iL = !0, e.method.onMessage(e._state, t, r));
  }
}
function Gl(e) {
  if (e._iL && !Xo(e)) {
    e._iL = !1;
    var t = e.method.microSeconds();
    e.method.onMessage(e._state, null, t);
  }
}
const ql = Object.prototype.toString.call(typeof re < "u" ? re : 0) === "[object process]";
function Hl(e) {
  if (!(typeof WorkerGlobalScope == "function" && self instanceof WorkerGlobalScope)) {
    if (typeof window.addEventListener != "function") return;
    window.addEventListener("beforeunload", function() {
      e();
    }, !0), window.addEventListener("unload", function() {
      e();
    }, !0);
  }
}
const Yl = {
  add: Hl
}, Jl = {};
var Kl = ql ? Jl : Yl, Ae = /* @__PURE__ */ new Set(), Bn = !1;
function Xl() {
  Bn || (Bn = !0, Kl.add(Zo));
}
function Zl(e) {
  if (Xl(), typeof e != "function") throw new Error("Listener is no function");
  Ae.add(e);
  var t = {
    remove: function() {
      return Ae.delete(e);
    },
    run: function() {
      return Ae.delete(e), e();
    }
  };
  return t;
}
function Zo() {
  var e = [];
  return Ae.forEach(function(t) {
    e.push(t()), Ae.delete(t);
  }), Promise.all(e);
}
function Ql() {
  Ae.clear();
}
function eu() {
  return Ae.size;
}
const tu = {
  add: Zl,
  runAll: Zo,
  removeAll: Ql,
  getSize: eu
};
var Qo = function(t, r) {
  this._channel = t, this._options = r, this.isLeader = !1, this.isDead = !1, this.token = Ut(), this._isApl = !1, this._reApply = !1, this._unl = [], this._lstns = [], this._invs = [], this._dpL = function() {
  }, this._dpLC = !1;
};
Qo.prototype = {
  applyOnce: function() {
    var t = this;
    if (this.isLeader || this.isDead) return Promise.resolve(!1);
    if (this._isApl)
      return this._reApply = !0, Promise.resolve(!1);
    this._isApl = !0;
    var r = !1, n = function(i) {
      i.context === "leader" && i.token != t.token && (i.action === "apply" && i.token > t.token && (r = !0), i.action === "tell" && (r = !0));
    };
    this._channel.addEventListener("internal", n);
    var o = De(this, "apply").then(function() {
      return At(t._options.responseTime);
    }).then(function() {
      return r ? Promise.reject(new Error()) : De(t, "apply");
    }).then(function() {
      return At(t._options.responseTime);
    }).then(function() {
      return r ? Promise.reject(new Error()) : De(t);
    }).then(function() {
      return ei(t);
    }).then(function() {
      return !0;
    }).catch(function() {
      return !1;
    }).then(function(s) {
      return t._channel.removeEventListener("internal", n), t._isApl = !1, !s && t._reApply ? (t._reApply = !1, t.applyOnce()) : s;
    });
    return o;
  },
  awaitLeadership: function() {
    return this._aLP || (this._aLP = ru(this)), this._aLP;
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
      }), De(this, "death");
  }
};
function ru(e) {
  return e.isLeader ? Promise.resolve() : new Promise(function(t) {
    var r = !1;
    function n() {
      r || (r = !0, clearInterval(o), e._channel.removeEventListener("internal", s), t(!0));
    }
    e.applyOnce().then(function() {
      e.isLeader && n();
    });
    var o = setInterval(function() {
      e.applyOnce().then(function() {
        e.isLeader && n();
      });
    }, e._options.fallbackInterval);
    e._invs.push(o);
    var s = function(c) {
      c.context === "leader" && c.action === "death" && e.applyOnce().then(function() {
        e.isLeader && n();
      });
    };
    e._channel.addEventListener("internal", s), e._lstns.push(s);
  });
}
function De(e, t) {
  var r = {
    context: "leader",
    action: t,
    token: e.token
  };
  return e._channel.postInternal(r);
}
function ei(e) {
  e.isLeader = !0;
  var t = tu.add(function() {
    return e.die();
  });
  e._unl.push(t);
  var r = function(o) {
    o.context === "leader" && o.action === "apply" && De(e, "tell"), o.context === "leader" && o.action === "tell" && !e._dpLC && (e._dpLC = !0, e._dpL(), De(e, "tell"));
  };
  return e._channel.addEventListener("internal", r), e._lstns.push(r), De(e, "tell");
}
function nu(e, t) {
  return e || (e = {}), e = JSON.parse(JSON.stringify(e)), e.fallbackInterval || (e.fallbackInterval = 3e3), e.responseTime || (e.responseTime = t.method.averageResponseTime(t.options)), e;
}
function ou(e, t) {
  if (e._leaderElector)
    throw new Error("BroadcastChannel already has a leader-elector");
  t = nu(t, e);
  var r = new Qo(e, t);
  return e._befC.push(function() {
    return r.die();
  }), e._leaderElector = r, r;
}
const iu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BroadcastChannel: qr,
  beLeader: ei,
  clearNodeFolder: Bl,
  createLeaderElection: ou,
  enforceOptions: Ul
}, Symbol.toStringTag, { value: "Module" })), su = /* @__PURE__ */ Hi(iu);
var Hr;
Object.defineProperty(z, "__esModule", {
  value: !0
});
var ti = z.initMessageListener = z.initStateWithPrevTab = z.withReduxStateSync = z.createReduxStateSync = Hr = z.createStateSyncMiddleware = z.WINDOW_STATE_SYNC_ID = z.INIT_MESSAGE_LISTENER = z.RECEIVE_INIT_STATE = z.SEND_INIT_STATE = z.GET_INIT_STATE = void 0;
z.generateUuidForAction = oi;
z.isActionAllowed = ii;
z.isActionSynced = pu;
z.MessageListener = si;
var au = su, Pr = 0, Yr = z.GET_INIT_STATE = "&_GET_INIT_STATE", Jr = z.SEND_INIT_STATE = "&_SEND_INIT_STATE", Kr = z.RECEIVE_INIT_STATE = "&_RECEIVE_INIT_STATE", cu = z.INIT_MESSAGE_LISTENER = "&_INIT_MESSAGE_LISTENER", Er = {
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
}, lu = function() {
  return { type: Yr };
}, uu = function() {
  return { type: Jr };
}, du = function(t) {
  return { type: Kr, payload: t };
}, fu = function() {
  return { type: cu };
};
function Me() {
  return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
}
function ri() {
  return "" + Me() + Me() + "-" + Me() + "-" + Me() + "-" + Me() + "-" + Me() + Me() + Me();
}
var ni = z.WINDOW_STATE_SYNC_ID = ri();
function oi(e) {
  var t = e;
  return t.$uuid = ri(), t.$wuid = ni, t;
}
function ii(e) {
  var t = e.predicate, r = e.blacklist, n = e.whitelist, o = function() {
    return !0;
  };
  return t && typeof t == "function" ? o = t : Array.isArray(r) ? o = function(i) {
    return r.indexOf(i.type) < 0;
  } : Array.isArray(n) && (o = function(i) {
    return n.indexOf(i.type) >= 0;
  }), o;
}
function pu(e) {
  return !!e.$isSync;
}
function si(e) {
  var t = e.channel, r = e.dispatch, n = e.allowed, o = !1, s = {};
  this.handleOnMessage = function(i) {
    i.$wuid !== ni && i.type !== Kr && i.$uuid && i.$uuid !== Pr && (i.type === Yr && !s[i.$wuid] ? (s[i.$wuid] = !0, r(uu())) : i.type === Jr && !s[i.$wuid] ? o || (o = !0, r(du(i.payload))) : n(i) && (Pr = i.$uuid, r(Object.assign(i, {
      $isSync: !0
    }))));
  }, this.messageChannel = t, this.messageChannel.onmessage = this.handleOnMessage;
}
Hr = z.createStateSyncMiddleware = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Er, r = ii(t), n = new au.BroadcastChannel(t.channel, t.broadcastChannelOption), o = t.prepareState || Er.prepareState, s = null;
  return function(i) {
    var c = i.getState, d = i.dispatch;
    return function(u) {
      return function(f) {
        if (s || (s = new si({ channel: n, dispatch: d, allowed: r })), f && !f.$uuid) {
          var m = oi(f);
          Pr = m.$uuid;
          try {
            if (f.type === Jr)
              return c() && (m.payload = o(c()), n.postMessage(m)), u(f);
            (r(m) || f.type === Yr) && n.postMessage(m);
          } catch {
            console.error("Your browser doesn't support cross tab communication");
          }
        }
        return u(Object.assign(f, {
          $isSync: typeof f.$isSync > "u" ? !1 : f.$isSync
        }));
      };
    };
  };
};
var mu = z.createReduxStateSync = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Er.receiveState;
  return function(n, o) {
    var s = n;
    return o.type === Kr && (s = r(n, o.payload)), t(s, o);
  };
};
z.withReduxStateSync = mu;
z.initStateWithPrevTab = function(t) {
  var r = t.dispatch;
  r(lu());
};
ti = z.initMessageListener = function(t) {
  var r = t.dispatch;
  r(fu());
};
const hu = (e) => (t) => {
  const r = (n) => {
    var i;
    const { meta: o } = e.getState(), s = {};
    return o.pd && typeof n == "object" && "billingOptionType" in n ? (n.billingFrequencyTmsg = n.billingOptionType === "one-time" ? o.pd.oneTimer : (i = o.pd.subscriberBillingFrequency) == null ? void 0 : i.replace(
      "{1}",
      n.frequencyInMonths
    ), n = { ...n, ...s }, n) : s;
  };
  return _e.core.on(_e.type.emailSuccess, () => {
    const { meta: n, intentions: o } = e.getState();
    e.dispatch(_r(!1)), e.dispatch(Mn("")), e.dispatch(
      Dt({
        id: X(),
        threadId: Z({ chat: e.getState().chat }),
        content: {
          text: o.email.current,
          resend: !1,
          sent: !0,
          groupId: ""
        }
      })
    ), e.dispatch(zr(o.email.current)), e.dispatch(rc(!0)), ce({
      eventType: se.emailEntered,
      systemType: n.systemType,
      utmParams: n.marketing.lastUtmParams,
      customerUuid: n.cid,
      email: o.email.current
    });
  }), _e.core.on(_e.type.emailError, (n) => {
    const { meta: o, intentions: s, config: i } = e.getState(), { tm716: c, tm526: d, tm715: u, tm505: f } = i.translations;
    if (e.dispatch(_r(!1)), n.status === 409) {
      e.dispatch(Po({
        content: c,
        buttons: [
          { sequence: 1, id: "opt-1", text: d, value: d, link: n.data.buttonLink, noStream: !0 },
          { sequence: 2, id: "opt-2", text: u, value: u, link: "", noStream: !0 }
        ]
      })), ce({
        eventType: se.emailExist,
        systemType: o.systemType,
        utmParams: o.marketing.lastUtmParams,
        customerUuid: o.cid,
        email: s.email.current
      });
      return;
    }
    n.status === 422 && (e.dispatch(Mn(n.errors.email[0] || f)), ce({
      eventType: se.emailWrong,
      systemType: o.systemType,
      utmParams: o.marketing.lastUtmParams,
      customerUuid: o.cid,
      email: s.email.current
    }));
  }), Un("marketing", e, us), Un(
    "__pd",
    e,
    ds,
    r
  ), (n) => {
    if (Lo.match(n) && n.payload) {
      const { meta: o, intentions: s } = e.getState();
      ce({
        eventType: se.linkProvided,
        systemType: o.systemType,
        utmParams: o.marketing.lastUtmParams,
        customerUuid: o.cid,
        email: s.email.current
      });
    }
    t(n);
  };
}, Un = (e, t, r, n) => {
  const o = setInterval(() => {
    let s = localStorage.getItem(e) || "";
    try {
      s = JSON.parse(s);
    } catch {
      s = localStorage.getItem(e) || "";
    }
    n && s && (s = n(s)), n && s && (t.dispatch(r(s)), clearInterval(o));
  }, Pa);
};
let K;
const vu = (e) => (t) => (r) => {
  const { meta: n, config: o } = e.getState(), s = () => {
    e.dispatch(it()), e.dispatch(Pt(o.translations.error));
  }, i = () => {
    const u = Z({ chat: e.getState().chat });
    u && (e.dispatch(Ln({ itemId: [...e.getState().chat.record[u].historyIds].pop() })), s());
  }, c = (u) => {
    if (!r.$isSync) {
      if (u.role === U.user && e.dispatch(Tt()), K && K.connected && u.message.trim() !== "") {
        K.emit(
          me.chat,
          {
            ...u,
            time: (/* @__PURE__ */ new Date()).getTime(),
            threadId: Z({ chat: e.getState().chat }),
            term: We(),
            region: n.region,
            userId: n.cid
          },
          Vn(i)
        ), e.dispatch(nr());
        return;
      }
      i();
    }
  }, d = ({ itemId: u }) => {
    const f = Z({ chat: e.getState().chat });
    e.dispatch(Tt());
    const m = () => {
      const { config: y } = e.getState();
      e.dispatch(Ln({ itemId: u })), e.dispatch(it()), e.dispatch(Pt(y.translations.error));
    }, v = e.getState().chat.record[f].historyData[u].content.map((y) => y.text).join([`
`]);
    K != null && K.connected && v.trim() !== "" ? (K.volatile.emit(
      me.chat,
      {
        role: U.user,
        message: v,
        term: We(),
        threadId: f,
        region: n.region,
        messageId: u,
        userId: n.cid
      },
      Vn(m)
    ), e.dispatch(nr())) : m();
  };
  if (zr.match(r)) {
    const u = e.getState().chat;
    c({
      role: U.user,
      message: r.payload,
      messageId: [...u.record[Z({ chat: u })].historyIds].pop()
    });
  }
  if (zt.match(r)) {
    const u = document.querySelector("#chatbot-container");
    document.body && u && o.purpose !== kr && (u.innerHTML = "", document.body.classList.remove(xo)), localStorage.setItem(Sa, (/* @__PURE__ */ new Date()).getTime().toString()), K && K.close(), window.location.href = o.close.href || Ca;
  }
  if (Co.match(r) && r.payload) {
    const u = e.getState().chat, f = Z({ chat: u }), m = [...u.record[f].historyIds].pop(), v = u.record[f].historyData[m], y = u.record[f].historyData[m].content.map(({ text: _ }) => _).join(`
`);
    v.role === U.user && y.trim() !== "" && c({
      role: U.user,
      message: y,
      messageId: m
    });
  }
  if (jo.match(r) && d(r.payload), !to.match(r))
    return t(r);
  e.dispatch(Tt()), K = Ui.connect(r.payload.chatUrl, { query: `cid=${n.cid}`, ...Ia }), K.on(me.connect, () => {
    const { meta: u } = e.getState();
    K.sendBuffer = [], K.emit(me.chatHistory, { userId: u.cid, region: u.region, term: We() }), e.dispatch(kn(!0)), e.dispatch(Eo(X()));
  }), K.on(
    me.chatHistory,
    ({ history: u, errors: f, region: m, term: v, threadId: y }) => {
      e.dispatch(it()), e.dispatch(fs(m)), e.dispatch(Za({ threadId: y, term: v }));
      const { config: _ } = e.getState();
      if (f.length) {
        e.dispatch(Pt(f[0]));
        return;
      }
      if (u.length) {
        e.dispatch(Qa({ history: u, term: v })), e.dispatch(Ja({ history: u, threadId: y }));
        return;
      }
      e.dispatch(Ka({ term: We(), thread: y })), e.dispatch(Tt());
      let T = 0;
      _.aiProfile.initialMessage.forEach(
        (W, S, L) => {
          T += 1e3, setTimeout(() => {
            e.dispatch(Xa({ message: W, threadId: y })), L.length === S + 1 && (_.aiProfile.initialMessage.forEach(
              (B) => c({
                role: U.assistant,
                message: JSON.stringify(B.content),
                messageId: B.id
              })
            ), e.dispatch(it()));
          }, T);
        }
      );
    }
  ), K.on(me.streamStart, ({ id: u, term: f, threadId: m }) => {
    e.dispatch(it()), e.dispatch(Ya()), e.dispatch(nr()), e.dispatch(
      or({
        id: u,
        term: f,
        threadId: m,
        isStreaming: !0
      })
    );
  }), K.on(
    me.streamData,
    (u) => {
      var f;
      e.dispatch(
        or({
          id: u.id,
          sequence: u.sequence,
          term: u.term,
          threadId: u.threadId,
          isStreaming: !0,
          content: {
            type: u.type,
            [u.type]: u[u.type],
            sequence: u.sequence
          }
        })
      ), (f = u.errors) != null && f.length && !e.getState().chat.error && e.dispatch(Pt(u.errors[0]));
    }
  ), K.on(me.streamEnd, ({ id: u, term: f, threadId: m }) => {
    e.dispatch(
      or({
        id: u,
        term: f,
        threadId: m,
        isStreaming: !1
      })
    );
  }), K.on(me.streamError, s), K.on(me.error, s), K.on(me.disconnect, () => {
    e.dispatch(kn(!1));
  }), t(r);
}, Vn = (e, t = 5e3) => {
  let r = !1;
  const n = setTimeout(() => {
    r || (r = !0, e());
  }, t);
  return () => {
    r || (r = !0, clearTimeout(n));
  };
}, gu = {
  key: "root",
  storage: Bo,
  whitelist: ["chat", "meta", "config"]
}, Xr = Ai({
  reducer: zi(
    gu,
    $i({
      meta: ps,
      config: cs,
      chat: ec,
      intentions: cc
    })
  ),
  middleware: (e) => e({ serializableCheck: !1 }).concat(
    vu,
    hu,
    Hr({
      whitelist: [
        "chat/resetIsLoading",
        "chat/resetOutgoing",
        "chat/resetError",
        "chat/fillAssistantHistoryData",
        "chat/fillUserHistoryData"
      ]
    })
  )
});
ti(Xr);
const wu = Bi(Xr);
let Wn = !1;
const Ru = (e) => {
  Wn || (Wn = !0, st.createRoot(e.root).render(
    /* @__PURE__ */ l.jsx(Di, { store: Xr, children: /* @__PURE__ */ l.jsx(Kn, { persistor: wu, children: /* @__PURE__ */ l.jsx(Dc, { config: e.initialConfig }) }) })
  ), document.body.classList.add(xo));
};
export {
  Ru as ReactBotClient,
  Ru as default,
  _e as intent
};
//# sourceMappingURL=index.es.js.map
