(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(n,t,e){"use strict";e(37),e(15);var r=e(2),o=e(335),l=e.n(o);t.a=function(){r.a.filter("datetime",(function(n){return n?l.a.tz(n,"Asia/Singapore").format("Do MMM YYYY h:mm a"):""}))}},183:function(n,t,e){var content=e(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(86).default)("5af514b4",content,!0,{sourceMap:!1})},330:function(n,t,e){"use strict";e.r(t);var r=[function(){var n=this._self._c;return n("p",[n("span",[this._v("Personal Website")])])},function(){var n=this,t=n._self._c;return t("div",{staticClass:"text-center my-6"},[t("p",[n._v("Connect with me through:")]),n._v(" "),t("ul",{staticClass:"flex space-x-4"},[t("li",{staticClass:"flex items-center space-x-1",attrs:{title:"Checkout my LinkedIn profile"}},[t("span",[t("img",{staticClass:"h-3",attrs:{src:e(412),alt:"linkedin"}})]),n._v(" "),t("span",[t("a",{staticClass:"hover:text-gray-800",attrs:{target:"_blank",href:"https://www.linkedin.com/in/tengweisong"}},[n._v("LinkedIn")])])]),n._v(" "),t("li",{staticClass:"flex items-center space-x-1",attrs:{title:"Explore my posts on Medium"}},[t("span",[t("img",{staticClass:"h-3",attrs:{src:e(413),alt:"medium"}})]),n._v(" "),t("span",[t("a",{staticClass:"hover:text-gray-800",attrs:{target:"_blank",href:"https://weisong0908.medium.com"}},[n._v("Medium")])])]),n._v(" "),t("li",{staticClass:"flex items-center space-x-1",attrs:{title:"Some of my repositories on Github"}},[t("span",[t("img",{staticClass:"h-3",attrs:{src:e(414),alt:"github"}})]),n._v(" "),t("span",[t("a",{staticClass:"hover:text-gray-800",attrs:{target:"_blank",href:"https://github.com/weisong0908"}},[n._v("Github")])])]),n._v(" "),t("li",{staticClass:"flex items-center space-x-1",attrs:{title:"Email me"}},[t("span",[t("img",{staticClass:"h-3",attrs:{src:e(415),alt:"email"}})]),n._v(" "),t("span",[t("a",{staticClass:"hover:text-gray-800",attrs:{href:"mailto:weisong.teng.work@gmail.com?subject=Hi"}},[n._v("Email")])])])])])}],o=e(27),component=Object(o.a)({},(function(){var n=this,t=n._self._c;return t("footer",{staticClass:"mt-24 text-sm text-gray-500 align-middle"},[t("div",{staticClass:"grid space-x-4 justify-items-center"},[t("div",{staticClass:"flex space-x-1 items-center"},[t("NuxtLink",{attrs:{to:"/"}},[t("img",{staticClass:"h-4",attrs:{src:e(411),alt:"personal-website",title:"Personal Website"}})]),n._v(" "),n._m(0)],1),n._v(" "),n._m(1)])])}),r,!1,null,null,null);t.default=component.exports;installComponents(component,{Footer:e(330).default})},338:function(n,t,e){"use strict";var r=e(27),component=Object(r.a)({},(function(){var n=this,t=n._self._c;return t("main",{staticClass:"h-screen w-screen max-w-4xl my-4 mx-auto font-serif"},[t("div",{staticClass:"flex flex-col mx-4 gap-4"},[t("Navbar"),n._v(" "),t("Nuxt",{staticClass:"mb-auto"}),n._v(" "),t("Footer")],1)])}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{Navbar:e(429).default,Footer:e(330).default})},341:function(n,t,e){e(342),n.exports=e(343)},40:function(n,t,e){"use strict";var r={props:["error"],layout:"error"},o=e(27),component=Object(o.a)(r,(function(){var n=this,t=n._self._c;return t("div",{staticClass:"my-12 text-center"},[t("h1",{staticClass:"text-3xl"},[404===n.error.statusCode?t("span",[n._v(" Page not found ")]):t("span",[n._v(" An error occurred ")])]),n._v(" "),t("br"),n._v(" "),t("NuxtLink",{staticClass:"border border-gray-200 font-sans text-gray-400 text-xs p-1 hover:bg-gray-200",attrs:{to:"/"}},[n._v("Go to home")])],1)}),[],!1,null,null,null);t.a=component.exports},405:function(n,t,e){var content=e(406);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(86).default)("d706d280",content,!0,{sourceMap:!1})},406:function(n,t,e){var r=e(85)((function(i){return i[1]}));r.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,500;1,300;1,500&display=swap);"]),r.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique&display=swap);"]),r.push([n.i,"/*! tailwindcss v2.2.19 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: Zen Kaku Gothic Antique, sans-serif; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n*, ::before, ::after{\n  --tw-border-opacity:1;\n  border-color:rgba(229, 231, 235, var(--tw-border-opacity));\n}\n\nbody{\n  --tw-bg-opacity:1;\n  background-color:rgba(243, 244, 246, var(--tw-bg-opacity))\n}\n\nmain{\n  --tw-text-opacity:1;\n  color:rgba(31, 41, 55, var(--tw-text-opacity))\n}\n\n::-moz-selection{\n  --tw-bg-opacity:1;\n  background-color:rgba(156, 163, 175, var(--tw-bg-opacity));\n  --tw-text-opacity:1;\n  color:rgba(243, 244, 246, var(--tw-text-opacity))\n}\n\n::selection{\n  --tw-bg-opacity:1;\n  background-color:rgba(156, 163, 175, var(--tw-bg-opacity));\n  --tw-text-opacity:1;\n  color:rgba(243, 244, 246, var(--tw-text-opacity))\n}\n\n.static{\n  position:static;\n}\n\n.mx-4{\n  margin-left:1rem;\n  margin-right:1rem;\n}\n\n.mx-auto{\n  margin-left:auto;\n  margin-right:auto;\n}\n\n.my-1{\n  margin-top:0.25rem;\n  margin-bottom:0.25rem;\n}\n\n.my-4{\n  margin-top:1rem;\n  margin-bottom:1rem;\n}\n\n.my-6{\n  margin-top:1.5rem;\n  margin-bottom:1.5rem;\n}\n\n.my-8{\n  margin-top:2rem;\n  margin-bottom:2rem;\n}\n\n.my-12{\n  margin-top:3rem;\n  margin-bottom:3rem;\n}\n\n.mt-4{\n  margin-top:1rem;\n}\n\n.mt-24{\n  margin-top:6rem;\n}\n\n.mb-auto{\n  margin-bottom:auto;\n}\n\n.flex{\n  display:flex;\n}\n\n.table{\n  display:table;\n}\n\n.grid{\n  display:grid;\n}\n\n.h-3{\n  height:0.75rem;\n}\n\n.h-4{\n  height:1rem;\n}\n\n.h-6{\n  height:1.5rem;\n}\n\n.h-10{\n  height:2.5rem;\n}\n\n.h-12{\n  height:3rem;\n}\n\n.h-48{\n  height:12rem;\n}\n\n.h-screen{\n  height:100vh;\n}\n\n.w-2{\n  width:0.5rem;\n}\n\n.w-screen{\n  width:100vw;\n}\n\n.w-min{\n  width:-webkit-min-content;\n  width:-moz-min-content;\n  width:min-content;\n}\n\n.max-w-4xl{\n  max-width:56rem;\n}\n\n@-webkit-keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@-webkit-keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@-webkit-keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n.grid-cols-2{\n  grid-template-columns:repeat(2, minmax(0, 1fr));\n}\n\n.flex-row{\n  flex-direction:row;\n}\n\n.flex-col{\n  flex-direction:column;\n}\n\n.flex-wrap{\n  flex-wrap:wrap;\n}\n\n.items-center{\n  align-items:center;\n}\n\n.justify-center{\n  justify-content:center;\n}\n\n.justify-items-center{\n  justify-items:center;\n}\n\n.gap-1{\n  gap:0.25rem;\n}\n\n.gap-2{\n  gap:0.5rem;\n}\n\n.gap-4{\n  gap:1rem;\n}\n\n.space-x-1 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(0.25rem * var(--tw-space-x-reverse));\n  margin-left:calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-x-4 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(1rem * var(--tw-space-x-reverse));\n  margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-x-16 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(4rem * var(--tw-space-x-reverse));\n  margin-left:calc(4rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-y-4 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse:0;\n  margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom:calc(1rem * var(--tw-space-y-reverse));\n}\n\n.overflow-x-scroll{\n  overflow-x:scroll;\n}\n\n.border{\n  border-width:1px;\n}\n\n.border-t{\n  border-top-width:1px;\n}\n\n.border-b-2{\n  border-bottom-width:2px;\n}\n\n.border-b{\n  border-bottom-width:1px;\n}\n\n.border-gray-200{\n  --tw-border-opacity:1;\n  border-color:rgba(229, 231, 235, var(--tw-border-opacity));\n}\n\n.border-gray-400{\n  --tw-border-opacity:1;\n  border-color:rgba(156, 163, 175, var(--tw-border-opacity));\n}\n\n.bg-gray-200{\n  --tw-bg-opacity:1;\n  background-color:rgba(229, 231, 235, var(--tw-bg-opacity));\n}\n\n.bg-gray-400{\n  --tw-bg-opacity:1;\n  background-color:rgba(156, 163, 175, var(--tw-bg-opacity));\n}\n\n.bg-yellow-100{\n  --tw-bg-opacity:1;\n  background-color:rgba(254, 243, 199, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-gray-200:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(229, 231, 235, var(--tw-bg-opacity));\n}\n\n.object-cover{\n  -o-object-fit:cover;\n     object-fit:cover;\n}\n\n.p-1{\n  padding:0.25rem;\n}\n\n.p-2{\n  padding:0.5rem;\n}\n\n.px-1{\n  padding-left:0.25rem;\n  padding-right:0.25rem;\n}\n\n.text-center{\n  text-align:center;\n}\n\n.text-justify{\n  text-align:justify;\n}\n\n.align-middle{\n  vertical-align:middle;\n}\n\n.font-sans{\n  font-family:Zen Kaku Gothic Antique, sans-serif;\n}\n\n.font-serif{\n  font-family:\"Crimson Pro\", serif;\n}\n\n.text-xs{\n  font-size:0.75rem;\n  line-height:1rem;\n}\n\n.text-sm{\n  font-size:0.875rem;\n  line-height:1.25rem;\n}\n\n.text-lg{\n  font-size:1.125rem;\n  line-height:1.75rem;\n}\n\n.text-xl{\n  font-size:1.25rem;\n  line-height:1.75rem;\n}\n\n.text-2xl{\n  font-size:1.5rem;\n  line-height:2rem;\n}\n\n.text-3xl{\n  font-size:1.875rem;\n  line-height:2.25rem;\n}\n\n.text-6xl{\n  font-size:3.75rem;\n  line-height:1;\n}\n\n.font-normal{\n  font-weight:400;\n}\n\n.font-bold{\n  font-weight:700;\n}\n\n.italic{\n  font-style:italic;\n}\n\n.text-gray-100{\n  --tw-text-opacity:1;\n  color:rgba(243, 244, 246, var(--tw-text-opacity));\n}\n\n.text-gray-400{\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity));\n}\n\n.text-gray-500{\n  --tw-text-opacity:1;\n  color:rgba(107, 114, 128, var(--tw-text-opacity));\n}\n\n.hover\\:text-gray-800:hover{\n  --tw-text-opacity:1;\n  color:rgba(31, 41, 55, var(--tw-text-opacity));\n}\n\n.underline{\n  text-decoration:underline;\n}\n\n*, ::before, ::after{\n  --tw-shadow:0 0 #0000;\n}\n\n*, ::before, ::after{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n\n.filter{\n  --tw-blur:var(--tw-empty,/*!*/ /*!*/);\n  --tw-brightness:var(--tw-empty,/*!*/ /*!*/);\n  --tw-contrast:var(--tw-empty,/*!*/ /*!*/);\n  --tw-grayscale:var(--tw-empty,/*!*/ /*!*/);\n  --tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/);\n  --tw-invert:var(--tw-empty,/*!*/ /*!*/);\n  --tw-saturate:var(--tw-empty,/*!*/ /*!*/);\n  --tw-sepia:var(--tw-empty,/*!*/ /*!*/);\n  --tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/);\n  filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.grayscale{\n  --tw-grayscale:grayscale(100%);\n}\n\n.saturate-50{\n  --tw-saturate:saturate(.5);\n}\n\n@media (min-width: 640px){\n  .sm\\:h-6{\n    height:1.5rem;\n  }\n\n  .sm\\:h-14{\n    height:3.5rem;\n  }\n\n  .sm\\:h-16{\n    height:4rem;\n  }\n\n  .sm\\:h-80{\n    height:20rem;\n  }\n\n  .sm\\:w-1\\/4{\n    width:25%;\n  }\n\n  .sm\\:w-3\\/4{\n    width:75%;\n  }\n\n  .sm\\:flex-row{\n    flex-direction:row;\n  }\n\n  .sm\\:gap-6{\n    gap:1.5rem;\n  }\n}\n\n@media (min-width: 768px){\n}\n\n@media (min-width: 1024px){\n}\n\n@media (min-width: 1280px){\n}\n\n@media (min-width: 1536px){\n}",""]),r.locals={},n.exports=r},409:function(n,t,e){"use strict";e(183)},410:function(n,t,e){var r=e(85)((function(i){return i[1]}));r.push([n.i,"/*purgecss start ignore*/\n.nuxt-link-exact-active[data-v-86ed9c96]{\n  border-bottom-width:2px;\n  --tw-border-opacity:1;\n  border-color:rgba(229, 231, 235, var(--tw-border-opacity))\n}\n\n/*purgecss end ignore*/",""]),r.locals={},n.exports=r},411:function(n,t,e){n.exports=e.p+"img/favicon.8555124.png"},412:function(n,t,e){n.exports=e.p+"img/linkedin.58f4a0d.png"},413:function(n,t,e){n.exports=e.p+"img/medium.acdffa2.png"},414:function(n,t,e){n.exports=e.p+"img/github.b039b2d.png"},415:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAI6SURBVHic7dq/ahRRHMXxz65BXQ0BGwsLbdQHsBCECDbpBG1EwV5bwZewt4oPoCE+iopiIkaiEAstrVxQE6PFzupkmclukrlzZzP3Cz9Y9k84v3MO7Ez2kkgkEolEoq10co+P4z5u4zxmoigKxxY+YgmL+Jl/8RxW8acls5LtDHp41wBRdc8qekfwAHe1j9P41sErXIosJhYvO/iOk7GVRKLfxa/YKiLyo4vXsVVE5E3X4DuxrfzbfVn8r6W6ZynvxAweY7sBwkLPdrZr4ZXuVaw3QGSo2cBC0eJ5TuARfjdAcJWpL2KuaOH5EiMOSxs2lKc+L+dO0cXQNLdht9R72V5bch/4hGslTk1bGzaUp34Fa7n3Fro2rW2YNPX8Zwr/0G5tWMDnBiw7Ol9wvUTzaOpjDRjXhrnstaZcNyzjVIHOstQnMmAa2rDf1PdkQFPbcJDU92xAk9pQRer7NiB2G6pK/UAGxGhD1alXYkBdbQiRemUGhGxDyNQrN6DqNoROPYgBVbShrtSDGjCuDbN4mC2zmc1a9txswftDpB7cgEnaAEezKSNU6rUZMK4NZYROvVYDhrOOG3b+JD9KBzfV+L+HztCFGvmA53iBr9lzZ3AZt3CxTjExDGgU3dgCYpMMiC0gNsmA2AJikwyILSA2yQD0Y4uISL9rcLfVVt538Sy2iog8ZXDr2aZzwsN5a3BAHIODwysNEFXn8mfZeW9+DPdwBxccvuPym/4fl39i5Lh8IpFIJBKJ9vEXEVe0/8vmeKoAAAAASUVORK5CYII="},427:function(n,t,e){var map={"./af":195,"./af.js":195,"./ar":196,"./ar-dz":197,"./ar-dz.js":197,"./ar-kw":198,"./ar-kw.js":198,"./ar-ly":199,"./ar-ly.js":199,"./ar-ma":200,"./ar-ma.js":200,"./ar-sa":201,"./ar-sa.js":201,"./ar-tn":202,"./ar-tn.js":202,"./ar.js":196,"./az":203,"./az.js":203,"./be":204,"./be.js":204,"./bg":205,"./bg.js":205,"./bm":206,"./bm.js":206,"./bn":207,"./bn-bd":208,"./bn-bd.js":208,"./bn.js":207,"./bo":209,"./bo.js":209,"./br":210,"./br.js":210,"./bs":211,"./bs.js":211,"./ca":212,"./ca.js":212,"./cs":213,"./cs.js":213,"./cv":214,"./cv.js":214,"./cy":215,"./cy.js":215,"./da":216,"./da.js":216,"./de":217,"./de-at":218,"./de-at.js":218,"./de-ch":219,"./de-ch.js":219,"./de.js":217,"./dv":220,"./dv.js":220,"./el":221,"./el.js":221,"./en-au":222,"./en-au.js":222,"./en-ca":223,"./en-ca.js":223,"./en-gb":224,"./en-gb.js":224,"./en-ie":225,"./en-ie.js":225,"./en-il":226,"./en-il.js":226,"./en-in":227,"./en-in.js":227,"./en-nz":228,"./en-nz.js":228,"./en-sg":229,"./en-sg.js":229,"./eo":230,"./eo.js":230,"./es":231,"./es-do":232,"./es-do.js":232,"./es-mx":233,"./es-mx.js":233,"./es-us":234,"./es-us.js":234,"./es.js":231,"./et":235,"./et.js":235,"./eu":236,"./eu.js":236,"./fa":237,"./fa.js":237,"./fi":238,"./fi.js":238,"./fil":239,"./fil.js":239,"./fo":240,"./fo.js":240,"./fr":241,"./fr-ca":242,"./fr-ca.js":242,"./fr-ch":243,"./fr-ch.js":243,"./fr.js":241,"./fy":244,"./fy.js":244,"./ga":245,"./ga.js":245,"./gd":246,"./gd.js":246,"./gl":247,"./gl.js":247,"./gom-deva":248,"./gom-deva.js":248,"./gom-latn":249,"./gom-latn.js":249,"./gu":250,"./gu.js":250,"./he":251,"./he.js":251,"./hi":252,"./hi.js":252,"./hr":253,"./hr.js":253,"./hu":254,"./hu.js":254,"./hy-am":255,"./hy-am.js":255,"./id":256,"./id.js":256,"./is":257,"./is.js":257,"./it":258,"./it-ch":259,"./it-ch.js":259,"./it.js":258,"./ja":260,"./ja.js":260,"./jv":261,"./jv.js":261,"./ka":262,"./ka.js":262,"./kk":263,"./kk.js":263,"./km":264,"./km.js":264,"./kn":265,"./kn.js":265,"./ko":266,"./ko.js":266,"./ku":267,"./ku.js":267,"./ky":268,"./ky.js":268,"./lb":269,"./lb.js":269,"./lo":270,"./lo.js":270,"./lt":271,"./lt.js":271,"./lv":272,"./lv.js":272,"./me":273,"./me.js":273,"./mi":274,"./mi.js":274,"./mk":275,"./mk.js":275,"./ml":276,"./ml.js":276,"./mn":277,"./mn.js":277,"./mr":278,"./mr.js":278,"./ms":279,"./ms-my":280,"./ms-my.js":280,"./ms.js":279,"./mt":281,"./mt.js":281,"./my":282,"./my.js":282,"./nb":283,"./nb.js":283,"./ne":284,"./ne.js":284,"./nl":285,"./nl-be":286,"./nl-be.js":286,"./nl.js":285,"./nn":287,"./nn.js":287,"./oc-lnc":288,"./oc-lnc.js":288,"./pa-in":289,"./pa-in.js":289,"./pl":290,"./pl.js":290,"./pt":291,"./pt-br":292,"./pt-br.js":292,"./pt.js":291,"./ro":293,"./ro.js":293,"./ru":294,"./ru.js":294,"./sd":295,"./sd.js":295,"./se":296,"./se.js":296,"./si":297,"./si.js":297,"./sk":298,"./sk.js":298,"./sl":299,"./sl.js":299,"./sq":300,"./sq.js":300,"./sr":301,"./sr-cyrl":302,"./sr-cyrl.js":302,"./sr.js":301,"./ss":303,"./ss.js":303,"./sv":304,"./sv.js":304,"./sw":305,"./sw.js":305,"./ta":306,"./ta.js":306,"./te":307,"./te.js":307,"./tet":308,"./tet.js":308,"./tg":309,"./tg.js":309,"./th":310,"./th.js":310,"./tk":311,"./tk.js":311,"./tl-ph":312,"./tl-ph.js":312,"./tlh":313,"./tlh.js":313,"./tr":314,"./tr.js":314,"./tzl":315,"./tzl.js":315,"./tzm":316,"./tzm-latn":317,"./tzm-latn.js":317,"./tzm.js":316,"./ug-cn":318,"./ug-cn.js":318,"./uk":319,"./uk.js":319,"./ur":320,"./ur.js":320,"./uz":321,"./uz-latn":322,"./uz-latn.js":322,"./uz.js":321,"./vi":323,"./vi.js":323,"./x-pseudo":324,"./x-pseudo.js":324,"./yo":325,"./yo.js":325,"./zh-cn":326,"./zh-cn.js":326,"./zh-hk":327,"./zh-hk.js":327,"./zh-mo":328,"./zh-mo.js":328,"./zh-tw":329,"./zh-tw.js":329};function r(n){var t=o(n);return e(t)}function o(n){if(!e.o(map,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return map[n]}r.keys=function(){return Object.keys(map)},r.resolve=o,n.exports=r,r.id=427},429:function(n,t,e){"use strict";e.r(t);e(409);var r=e(27),component=Object(r.a)({},(function(){var n=this,t=n._self._c;return t("div",{staticClass:"my-8"},[t("ul",{staticClass:"flex flex-row space-x-16 items-center justify-center"},[t("li",[t("NuxtLink",{staticClass:"p-2 hover:bg-gray-200",attrs:{to:"/"}},[n._v("Home")])],1),n._v(" "),t("li",[t("NuxtLink",{staticClass:"p-2 hover:bg-gray-200",attrs:{to:"/about-me"}},[n._v("About Me")])],1),n._v(" "),t("li",[t("NuxtLink",{staticClass:"p-2 hover:bg-gray-200",attrs:{to:"/projects"}},[n._v("Projects")])],1),n._v(" "),t("li",[t("NuxtLink",{staticClass:"p-2 hover:bg-gray-200",attrs:{to:"/notes"}},[n._v("Notes")])],1)])])}),[],!1,null,"86ed9c96",null);t.default=component.exports}},[[341,8,1,9]]]);