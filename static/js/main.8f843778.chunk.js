(this["webpackJsonpreact-slider"]=this["webpackJsonpreact-slider"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/1.334a207c.jpg"},function(e,t,n){e.exports=n.p+"static/media/2.76798903.jpg"},function(e,t,n){e.exports=n.p+"static/media/3.f492a9dd.jpg"},function(e,t,n){e.exports=n.p+"static/media/4.e4c4d38e.jpg"},function(e,t,n){e.exports=n.p+"static/media/5.0ea2727d.jpg"},function(e,t,n){e.exports=n(30)},,,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),i=n.n(r),o=n(3),s=n(2),l=n(4),m=(n(21),n(6)),u=n(8),d=function(e){var t=e.sliderArr,n=e.nextDot,a=e.prevDot,r=e.state,i=e.setState,o=e.x,s=e.setX;return c.a.createElement("div",{className:"slider"},t.map((function(e,t){return c.a.createElement("div",{key:t,className:"slide",style:{transform:"translateX(".concat(o,"%)")}},e)})),c.a.createElement("button",{id:"goLeft",onClick:function(){s(0===o?-100*(t.length-1):o+100),0===o?(i(t.length),a(t.length+1)):(i(r-1),a(r))}},c.a.createElement(m.a,{icon:u.a})),c.a.createElement("button",{id:"goRight",onClick:function(){o===-100*(t.length-1)?s(0):s(o-100),o===-100*(t.length-1)?(i(1),n(0)):(i(r+1),n(r))}},c.a.createElement(m.a,{icon:u.b})))},f=function(e){var t=e.src;return c.a.createElement("img",{src:t,style:{width:"100%",objectFit:"content"},className:"content",alt:"slide-img"})},p=(n(27),n(28),function(e){var t=e.sliderArr,n=e.state,a=e.handleClick;return c.a.createElement("div",{className:"dots-cont"},t.map((function(e,t){return c.a.createElement("div",{onClick:a.bind(null,t+1),key:t,id:t+1,className:n[t+1]?"dot-item active":"dot-item"})})))}),b=n(11),j=n.n(b),E=n(12),g=n.n(E),h=n(13),v=n.n(h),O=n(14),k=n.n(O),x=n(15),w=n.n(x),y=[c.a.createElement(f,{src:j.a}),c.a.createElement(f,{src:g.a}),c.a.createElement(f,{src:v.a}),c.a.createElement(f,{src:k.a}),c.a.createElement(f,{src:w.a})],N=Object.fromEntries(y.map((function(e){return[e,!1]})));N[1]=!0;var S=function(){var e=Object(a.useState)(N),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(1),m=Object(l.a)(i,2),u=m[0],f=m[1],b=Object(a.useState)(0),j=Object(l.a)(b,2),E=j[0],g=j[1];return c.a.createElement("div",{className:"App"},c.a.createElement(d,{sliderArr:y,nextDot:function(e){r(Object(s.a)(Object(s.a)({},N),{},Object(o.a)({1:!1},e+1,!0)))},prevDot:function(e){r(Object(s.a)(Object(s.a)({},N),{},Object(o.a)({1:!1},e-1,!0)))},state:u,setState:f,x:E,setX:g}),c.a.createElement(p,{sliderArr:y,state:n,handleClick:function(e){r(Object(s.a)(Object(s.a)({},N),{},Object(o.a)({1:!1},e,!0))),f(e),g(-100*(e-1))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(29);i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.8f843778.chunk.js.map