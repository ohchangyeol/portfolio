(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(4),j=c.n(s),r=c(2),i=c(0),a=function(){var e=Object(n.useState)(new Date),t=Object(r.a)(e,2),c=t[0],s=t[1],j=function(){s(new Date)};return Object(n.useEffect)((function(){var e=setInterval(j,1e3);return function(){clearInterval(e)}}),[]),Object(i.jsxs)("span",{children:[c.getHours()<10?"0".concat(c.getHours()):c.getHours()," : ",c.getMinutes()<10?"0".concat(c.getMinutes()):c.getMinutes()]})},d=function(){return Object(i.jsxs)("div",{className:"mod",children:[Object(i.jsx)("button",{children:"Light"}),Object(i.jsx)("button",{children:"Dark"})]})},O=function(e){return Object(i.jsxs)("div",{className:"nav_box",children:[Object(i.jsx)("nav",{children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"/",children:"Main"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"/",children:"About"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"/",children:"Project"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"/",children:"Contact"})})]})}),e.state.state<768?Object(i.jsx)(d,{}):Object(i.jsx)(i.Fragment,{})]})},b=function(){var e=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){return t.current&&t.current.addEventListener("click",e),function(){t.current&&t.current.removeEventListener("click",e)}}),[]),t}((function(e){var t=document.querySelectorAll(".nav_box"),c=document.querySelectorAll(".hamburger");t[0].classList.toggle("open"),c[0].classList.toggle("close")}));return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"hamburger",children:[Object(i.jsx)("button",{ref:e}),Object(i.jsxs)("span",{children:[Object(i.jsx)("span",{className:"one_line"}),Object(i.jsx)("span",{className:"two_line"}),Object(i.jsx)("span",{className:"three_line"})]})]})})},l=(c(10),function(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("div",{className:"header_logo",children:Object(i.jsx)("img",{src:"data:image/png;base64,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"})}),e.state>=768?Object(i.jsx)(O,{state:e}):Object(i.jsx)(i.Fragment,{}),e.state<768?Object(i.jsx)(b,{}):Object(i.jsx)(i.Fragment,{}),Object(i.jsxs)("div",{className:"clock_mod",children:[Object(i.jsx)("div",{className:"clock",children:Object(i.jsx)(a,{})}),e.state>=768?Object(i.jsx)(d,{}):Object(i.jsx)(i.Fragment,{})]})]}),e.state<768?Object(i.jsx)(O,{state:e}):Object(i.jsx)(i.Fragment,{})]})}),A=c.p+"static/media/mark.e46fe547.svg",h=(c(11),function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{children:Object(i.jsx)("span",{children:"Individuality"})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:"Quiet"}),Object(i.jsx)("span",{children:"Neat"}),Object(i.jsx)("span",{children:"Concise"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:"Meticulous"}),Object(i.jsx)("span",{children:"Stable"}),Object(i.jsx)("span",{children:"Precise"})]})]})}),x=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{children:Object(i.jsx)("span",{children:"Individuality"})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:"Quiet"}),Object(i.jsx)("span",{children:"Neat"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:"Concise"}),Object(i.jsx)("span",{children:"Stable"})]}),Object(i.jsx)("div",{children:Object(i.jsx)("span",{children:"Precise"})}),Object(i.jsx)("div",{children:Object(i.jsx)("span",{children:"Meticulous"})})]})},u=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("span",{children:"Individuality"}),Object(i.jsx)("span",{children:"Quiet"}),Object(i.jsx)("span",{children:"Neat"}),Object(i.jsx)("span",{children:"Concise"}),Object(i.jsx)("span",{children:"Stable"}),Object(i.jsx)("span",{children:"Precise"}),Object(i.jsx)("span",{children:"Meticulous"})]})},o=function(e){return Object(i.jsxs)("div",{className:"main_page",children:[Object(i.jsx)("div",{className:"keyword_is",children:Object(i.jsx)("span",{children:"My keyword is ..."})}),Object(i.jsx)("div",{className:"quotation_mark",children:Object(i.jsx)("img",{src:A})}),Object(i.jsxs)("div",{className:"keyword_box",children:[e.state>1279?Object(i.jsx)(h,{}):Object(i.jsx)(i.Fragment,{}),e.state>=768&&e.state<=1279?Object(i.jsx)(x,{}):Object(i.jsx)(i.Fragment,{}),e.state<768?Object(i.jsx)(u,{}):Object(i.jsx)(i.Fragment,{})]})]})},g=function(){var e=Object(n.useState)(window.innerWidth),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){window.addEventListener("resize",(function(){s(window.innerWidth)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{state:c}),Object(i.jsx)(o,{state:c})]})};c(12);j.a.render(Object(i.jsx)(g,{}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.785e86a7.chunk.js.map