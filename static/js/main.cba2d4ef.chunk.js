(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var a=c(23),s=c(8),n=c(2),i=c(12),b=c.n(i),j=c(3),r=function(){var e=Object(n.m)();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(s.b,{to:"/",className:b()("navbar-item",{"is-active":"/"===e.pathname}),children:"Home"}),Object(j.jsx)(s.b,{to:"/tabs",className:b()("navbar-item",{"is-active":e.pathname.startsWith("/tabs")}),children:"Tabs"})]})})}),Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(n.a,{})})})]})},l=c(0),d=function(){var e=Object(n.o)();return Object(l.useEffect)((function(){e("..")}),[]),Object(j.jsx)("h1",{className:"title",children:"Home page"})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],h=function(){var e=Object(n.q)().tabId,t=o.find((function(t){return t.id===e}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"Tabs page"}),Object(j.jsx)("div",{className:"tabs is-boxed",children:Object(j.jsx)("ul",{children:o.map((function(t){var c=t.id,a=t.title;return Object(j.jsx)("li",{"data-cy":"Tab",className:b()({"is-active":e===t.id}),children:Object(j.jsx)(s.b,{to:"../".concat(c),children:a})},c)}))})}),Object(j.jsx)("div",{className:"block","data-cy":"TabContent",children:t?"".concat(null===t||void 0===t?void 0:t.content):"Please select a tab"})]})},x=function(){return Object(j.jsx)(s.a,{children:Object(j.jsx)(n.d,{children:Object(j.jsxs)(n.b,{path:"/",element:Object(j.jsx)(r,{}),children:[Object(j.jsx)(n.b,{index:!0,element:Object(j.jsx)(d,{})}),Object(j.jsx)(n.b,{path:"tabs",children:Object(j.jsx)(n.b,{path:":tabId?",element:Object(j.jsx)(h,{})})}),Object(j.jsx)(n.b,{path:"*",element:Object(j.jsx)("h1",{className:"title",children:"Page not found"})}),Object(j.jsx)(n.b,{path:"home",element:Object(j.jsx)(d,{})})]})})})},O=(c(33),c(34),c(35),document.getElementById("root"));Object(a.createRoot)(O).render(Object(j.jsx)(x,{}))}},[[36,1,2]]]);
//# sourceMappingURL=main.cba2d4ef.chunk.js.map