"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{42:function(e,t,n){var r=n(861),a=n(757),c=n.n(a),s=n(243),i="e9d0a81ada840dc5591eec7d6bc6424f";function u(){return(u=(0,r.Z)(c().mark((function e(t,n){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"trending"!==t){e.next=8;break}return e.next=4,s.Z.get("trending/all/day?api_key=".concat(i));case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:if("search"!==t){e.next=13;break}return e.next=11,s.Z.get("search/movie?query=".concat(n,"&api_key=").concat(i));case 11:return a=e.sent,e.abrupt("return",a.data.results);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3/",t.Z=function(e,t){return u.apply(this,arguments)}},544:function(e,t,n){n.r(t);var r=n(439),a=n(791),c=n(689),s=n(87),i=n(42),u=n(184);t.default=function(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],o=t[1],l=(0,c.TH)();return(0,a.useEffect)((function(){(0,i.Z)("trending").then((function(e){return o(e)}))}),[]),(0,u.jsx)("main",{children:(0,u.jsx)("section",{children:(0,u.jsx)("div",{className:"container",children:(0,u.jsx)("ul",{children:n&&n.map((function(e){var t;return(0,u.jsx)("li",{children:(0,u.jsx)(s.rU,{to:"/movies/".concat(e.id),state:{from:l},children:null!==(t=e.title)&&void 0!==t?t:e.name},e.id)},e.id)}))})})})})}}}]);
//# sourceMappingURL=544.22e0ef7b.chunk.js.map