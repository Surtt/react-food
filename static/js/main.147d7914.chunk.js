(this["webpackJsonpreact-food"]=this["webpackJsonpreact-food"]||[]).push([[0],{24:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(18),a=c.n(s),i=(c(24),c(4)),j=c(2),o=c(0),l=function(){return Object(o.jsx)("nav",{className:" light-green darken-1",children:Object(o.jsxs)("div",{className:"nav-wrapper",children:[Object(o.jsx)(i.b,{to:"/",className:"brand-logo",children:"React Food"}),Object(o.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/about",children:"About"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/contacts",children:"Contacts"})})]})]})})},b=function(){return Object(o.jsx)("footer",{className:"page-footer  light-green lighten-2",children:Object(o.jsx)("div",{className:"footer-copyright",children:Object(o.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(o.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/Surtt/react-shop",target:"_blank",rel:"noreferrer",children:"Repo"})]})})})},u=c(8),d=c(10),h=c.n(d),O=c(13),x="https://www.themealdb.com/api/json/v1/".concat("1","/"),m=function(){var e=Object(O.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"lookup.php?i=").concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"categories.php"));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(O.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"filter.php?c=").concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){return Object(o.jsx)("div",{className:"progress",children:Object(o.jsx)("div",{className:"indeterminate"})})},v=c(12),N=function(e){var t=e.strCategory,c=e.strCategoryThumb,n=e.strCategoryDescription;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("img",{src:c,alt:t})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsx)("span",{className:"card-title",children:t}),Object(o.jsxs)("p",{children:[n.slice(0,70),"..."]})]}),Object(o.jsx)("div",{className:"card-action",children:Object(o.jsx)(i.b,{to:"/category/".concat(t),className:"btn",children:"Watch category"})})]})},y=function(e){var t=e.catalog,c=void 0===t?[]:t;return Object(o.jsx)("div",{className:"list",children:c.map((function(e){return Object(o.jsx)(N,Object(v.a)({},e),e.idCategory)}))})},w=function(e){var t=e.cb,c=Object(n.useState)(""),r=Object(u.a)(c,2),s=r[0],a=r[1],i=function(){t(s)};return Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"input-field col s12",children:[Object(o.jsx)("input",{type:"search",id:"search-field",placeholder:"search",onKeyDown:function(e){"Enter"===e.key&&i()},onChange:function(e){return a(e.target.value)},value:s}),Object(o.jsx)("button",{className:"btn",style:{position:"absolute",top:0,right:0},onClick:i,children:"Search"})]})})},C=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),a=Object(u.a)(s,2),i=a[0],l=a[1],b=Object(j.g)(),d=b.pathname,h=b.search,O=Object(j.f)().push;return Object(n.useEffect)((function(){p().then((function(e){var t=e.categories;r(t),l(h?t.filter((function(e){return e.strCategory.toLowerCase().includes(h.split("=")[1].toLowerCase())})):t)}))}),[h]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(w,{cb:function(e){l(c.filter((function(t){return t.strCategory.toLowerCase().includes(e.toLowerCase())}))),O({pathname:d,search:"?search=".concat(e)})}}),c?Object(o.jsx)(y,{catalog:i}):Object(o.jsx)(g,{})]})},k=function(){return Object(o.jsx)("h1",{children:"Hello from About page"})},M=function(){return Object(o.jsx)("h1",{children:"Hello from Contact page"})},S=function(){return Object(o.jsx)("h1",{children:"Page not found"})},F=function(e){var t=e.strMeal,c=e.idMeal,n=e.strMealThumb;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("img",{src:n,alt:t})}),Object(o.jsx)("div",{className:"card-content",children:Object(o.jsx)("span",{className:"card-title",children:t})}),Object(o.jsx)("div",{className:"card-action",children:Object(o.jsx)(i.b,{to:"/meal/".concat(c),className:"btn",children:"Watch recipe"})})]})},A=function(e){var t=e.meals;return Object(o.jsx)("div",{className:"list",children:t.map((function(e){return Object(o.jsx)(F,Object(v.a)({},e),e.idMeal)}))})},B=function(){var e=Object(j.h)().name,t=Object(n.useState)([]),c=Object(u.a)(t,2),r=c[0],s=c[1],a=Object(j.f)().goBack;return Object(n.useEffect)((function(){return f(e).then((function(e){var t=e.meals;return s(t)}))}),[e]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{className:"btn",onClick:a,children:"Go Back"}),r?Object(o.jsx)(A,{meals:r}):Object(o.jsx)(g,{})]})},E=function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(j.h)().id,a=Object(j.f)().goBack;return Object(n.useEffect)((function(){return m(s).then((function(e){return r(e.meals[0])}))}),[s]),Object(o.jsxs)(o.Fragment,{children:[c.idMeal?Object(o.jsxs)("div",{className:"recipe",children:[Object(o.jsx)("img",{src:c.strMealThumb,alt:c.strMeal}),Object(o.jsx)("h1",{children:c.strMeal}),Object(o.jsxs)("h6",{children:["Category: ",c.strCategory]}),c.strArea?Object(o.jsxs)("h6",{children:["Area: ",c.strArea]}):null,Object(o.jsx)("p",{children:c.strInstructions}),Object(o.jsxs)("table",{className:"centered",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Ingredient"}),Object(o.jsx)("th",{children:"Measure"})]})}),Object(o.jsx)("tbody",{children:Object.keys(c).map((function(e){return e.includes("Ingredient")&&c[e]?Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:c[e]}),Object(o.jsx)("td",{children:c["strMeasure".concat(e.slice(13))]})]},e):null}))})]}),c.strYoutube?Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("h5",{style:{margin:"2rem 0 1.5rem"},children:"Video Recipe"}),Object(o.jsx)("iframe",{title:s,src:"https://www.youtube.com/embed/".concat(c.strYoutube.slice(-11))})]}):null]}):Object(o.jsx)(g,{}),Object(o.jsx)("button",{className:"btn",onClick:a,children:"Go Back"})]})},I=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(i.a,{children:[Object(o.jsx)(l,{}),Object(o.jsx)("main",{className:"container content",children:Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",component:C}),Object(o.jsx)(j.a,{path:"/about",component:k}),Object(o.jsx)(j.a,{path:"/contacts",component:M}),Object(o.jsx)(j.a,{path:"/category/:name",component:B}),Object(o.jsx)(j.a,{path:"/meal/:id",component:E}),Object(o.jsx)(j.a,{component:S})]})}),Object(o.jsx)(b,{})]})})};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(I,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.147d7914.chunk.js.map