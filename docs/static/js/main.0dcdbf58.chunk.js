(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(7),a=n.n(r),i=(n(15),n(2)),s=n(9),u=n(0),o=function(e){var t=e.setCategories,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],o=r[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),a.trim().length>2&&t((function(e){return[a].concat(Object(s.a)(e))}))},children:Object(u.jsx)("input",{type:"text",value:a,onChange:function(e){return function(e){o(e.target.value)}(e)},placeholder:"Buscar"})})},j=n(10),d=n(6),l=n.n(d),p=n(8),b=function(){var e=Object(p.a)(l.a.mark((function e(t){var n,c,r,a,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=P0hjP5eBIwVLxMF8CMYRSYZJOxtZAsaR&q=".concat(encodeURI(t),"&limit=10"),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:return r=e.sent,a=r.data,i=a.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.id,n=e.title,c=e.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__pulse",children:[Object(u.jsx)("img",{src:c,alt:n},t),Object(u.jsx)("p",{children:n})]})},O=function(e){var t=e.category,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){b(e).then((function(e){console.log(e),a({data:e,loading:!1})}))}),[e]),r}(t),r=n.data,a=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:t}),a&&Object(u.jsx)("p",{children:"Loading"}),Object(u.jsx)("div",{className:"card-grid",children:Object(u.jsx)("ol",{children:r.map((function(e){return Object(u.jsx)(f,Object(j.a)({},e),e.id)}))})})]})},h=function(){var e=Object(c.useState)(["One Punch"]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:r}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(e){return Object(u.jsx)(O,{category:e},e)}))})]})};a.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.0dcdbf58.chunk.js.map