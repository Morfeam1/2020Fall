(function(t){function e(e){for(var r,n,i=e[0],l=e[1],u=e[2],c=0,v=[];c<i.length;c++)n=i[c],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&v.push(s[n][0]),s[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);p&&p(e);while(v.length)v.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,n=1;n<a.length;n++){var i=a[n];0!==s[i]&&(r=!1)}r&&(o.splice(e--,1),t=l(l.s=a[0]))}return t}var r={},n={app:0},s={app:0},o=[];function i(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"8461fdbd"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"db3935a3"}[t]+".css",s=l.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===r||c===s))return e()}var v=document.getElementsByTagName("style");for(i=0;i<v.length;i++){u=v[i],c=u.getAttribute("data-href");if(c===r||c===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete n[t],p.parentNode.removeChild(p),a(o)},p.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){n[t]=0})));var r=s[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,a){r=s[t]=[e,a]}));e.push(r[2]=o);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=i(t);var v=new Error;u=function(e){c.onerror=c.onload=null,clearTimeout(p);var a=s[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;v.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",v.name="ChunkLoadError",v.type=r,v.request=n,a[1](v)}s[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(a,r,function(e){return t[e]}.bind(null,r));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="2020fall/2020fall3/",l.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var v=0;v<u.length;v++)e(u[v]);var p=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"220e":function(t,e,a){"use strict";var r=a("8d3f"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("router-view")],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[t._m(0),a("div",{staticClass:"navbar-menu",attrs:{id:"navbarBasicExample"}},[a("div",{staticClass:"navbar-start"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),a("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v("About")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/feed"}},[t._v("Feed")]),t._m(1)],1),a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("div",{staticClass:"buttons"},[t._m(2),a("router-link",{staticClass:"button is-light",attrs:{to:"/Login"}},[t._v("Login")])],1)])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-brand"},[a("a",{staticClass:"navbar-item",attrs:{href:"https://bulma.io"}},[a("img",{attrs:{src:"https://bulma.io/images/bulma-logo.png",width:"112",height:"28"}})]),a("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("a",{staticClass:"navbar-link"},[t._v(" More ")]),a("div",{staticClass:"navbar-dropdown"},[a("a",{staticClass:"navbar-item"},[t._v(" About ")]),a("a",{staticClass:"navbar-item"},[t._v(" Jobs ")]),a("a",{staticClass:"navbar-item"},[t._v(" Contact ")]),a("hr",{staticClass:"navbar-divider"}),a("a",{staticClass:"navbar-item"},[t._v(" Report an issue ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"button is-primary"},[a("strong",[t._v("Sign up")])])}],l={},u=l,c=a("2877"),v=Object(c["a"])(u,o,i,!1,null,null,null),p=v.exports,f={components:{Navbar:p}},d=f,h=(a("5c0b"),Object(c["a"])(d,n,s,!1,null,null,null)),m=h.exports,b=(a("d3b7"),a("8c4f")),g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},_=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._m(0),a("h3",[t._v("Installed CLI Plugins")]),t._m(1),a("h3",[t._v("Essential Links")]),t._m(2),a("h3",[t._v("Ecosystem")]),t._m(3)])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),a("br"),t._v(" check out the "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],k={name:"HelloWorld",props:{msg:String}},j=k,w=(a("220e"),Object(c["a"])(j,C,y,!1,null,"116c7c08",null)),E=(w.exports,{name:"Home",components:{}}),x=E,O=Object(c["a"])(x,g,_,!1,null,null,null),$=O.exports,L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"level section"},[a("div",{staticClass:"level-item"},[a("form",[a("div",{staticClass:"field"},[a("p",{staticClass:"control has-icons-left has-icons-right"},[a("input",{staticClass:"input",attrs:{type:"email",placeholder:"Email"}}),a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-envelope"})]),a("span",{staticClass:"icon is-small is-right"},[a("i",{staticClass:"fas fa-check"})])])]),a("div",{staticClass:"field"},[a("p",{staticClass:"control has-icons-left"},[a("input",{staticClass:"input",attrs:{type:"password",placeholder:"Password"}}),a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-lock"})])])]),a("div",{staticClass:"field"},[a("p",{staticClass:"control"},[a("button",{staticClass:"button is-success"},[t._v(" Login ")])])])])])])}],S={},A=S,T=Object(c["a"])(A,L,P,!1,null,null,null),N=T.exports;r["a"].use(b["a"]);var F=[{path:"/",name:"Home",component:$},{path:"/Login",name:"Login",component:N},{path:"/Feed",name:"Feed",component:function(){return a.e("about").then(a.bind(null,"4787"))}},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],H=new b["a"]({mode:"history",base:"2020fall/2020fall3/",routes:F}),B=H;a("5abe");r["a"].config.productionTip=!1,new r["a"]({router:B,render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var r=a("9c0c"),n=a.n(r);n.a},"8d3f":function(t,e,a){},"9c0c":function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.64a4b8f7.js.map