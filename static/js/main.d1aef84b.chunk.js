(this["webpackJsonprandom-quote-generator"]=this["webpackJsonprandom-quote-generator"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(5),s=n.n(a),u=(n(11),n(2)),o=n.n(u),i=n(3),j=n(6),l=n(0);var p=function(e){var t=e.quote;return Object(l.jsxs)("div",{className:"quote",children:[Object(l.jsx)("div",{className:"anime",title:t.anime,children:t.anime}),Object(l.jsx)("blockquote",{children:t.quote}),Object(l.jsx)("div",{className:"character",title:t.character,children:t.character})]})};var h=function(){var e=Object(r.useState)({anime:null,character:null,quote:null}),t=Object(j.a)(e,2),n=t[0],c=t[1],a=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://animechan.vercel.app/api/random").then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,a();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)(Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,a();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(p,{quote:n}),Object(l.jsx)("button",{onClick:s,children:"Generate new quote"})]})};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d1aef84b.chunk.js.map