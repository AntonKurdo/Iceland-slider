(this["webpackJsonpreact-slider"]=this["webpackJsonpreact-slider"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/1.334a207c.jpg"},function(e,t,n){e.exports=n.p+"static/media/2.76798903.jpg"},function(e,t,n){e.exports=n.p+"static/media/3.f492a9dd.jpg"},function(e,t,n){e.exports=n.p+"static/media/4.e4c4d38e.jpg"},function(e,t,n){e.exports=n.p+"static/media/5.0ea2727d.jpg"},function(e,t,n){e.exports=n(29)},,,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),i=n.n(c),o=n(3),s=n(2),l=n(4),d=(n(21),n(6)),u=n(8),m=function(e){var t=e.sliderArr,n=e.nextDot,c=e.prevDot,i=e.state,o=e.setState,s=e.x,l=e.setX,m=!1,f=null,p=Object(a.useRef)(null),g=s,w=null,E=function(e){"content"===e.target.className&&(f=e.pageX,m=!0,g=s)},v=function(e){if(m&&"content"===e.target.className){var t=0;w=Math.round((e.pageX-f)/window.innerWidth*100),p.current&&(t=window.getComputedStyle(p.current).transform.split(",")[4].trim()/window.innerWidth*100),l(Math.round(t+w))}},b=function(e){"content"===e.target.className&&(m=!1,w&&w<0&&(l(g-100),o(i+1),n(i)),w&&w>0&&0!==s&&(l(g+100),o(i-1),c(i)))};return Object(a.useEffect)((function(){return window.PointerEvent&&(window.addEventListener("pointerdown",E),window.addEventListener("pointermove",v),window.addEventListener("pointerup",b)),function(){window.removeEventListener("pointerdown",E)}})),r.a.createElement("div",{className:"slider"},t.map((function(e,t){return r.a.createElement("div",{ref:p,key:t,className:"slide",style:{transform:"translateX(".concat(s,"%)")}},e)})),r.a.createElement("button",{id:"goLeft",onClick:function(){l(0===s?-100*(t.length-1):s+100),0===s?(o(t.length),c(t.length+1)):(o(i-1),c(i))}},r.a.createElement(d.a,{icon:u.a})),r.a.createElement("button",{id:"goRight",onClick:function(){s===-100*(t.length-1)?l(0):l(s-100),s===-100*(t.length-1)?(o(1),n(0)):(o(i+1),n(i))}},r.a.createElement(d.a,{icon:u.b})))},f=(n(27),function(e){var t=e.sliderArr,n=e.state,a=e.handleClick;return r.a.createElement("div",{className:"dots-cont"},t.map((function(e,t){return r.a.createElement("div",{onClick:a.bind(null,t+1),key:t,id:t+1,className:n[t+1]?"dot-item active":"dot-item"})})))}),p=function(e){var t=e.src;return r.a.createElement("img",{src:t,draggable:!1,style:{width:"100%"},className:"content",alt:"slide-img"})},g=n(11),w=n.n(g),E=n(12),v=n.n(E),b=n(13),h=n.n(b),j=n(14),O=n.n(j),k=n(15),x=n.n(k),N=[r.a.createElement(p,{src:w.a}),r.a.createElement(p,{src:v.a}),r.a.createElement(p,{src:h.a}),r.a.createElement(p,{src:O.a}),r.a.createElement(p,{src:x.a})],y=Object.fromEntries(N.map((function(e){return[e,!1]})));y[1]=!0;var S=function(){var e=Object(a.useState)(y),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(1),d=Object(l.a)(i,2),u=d[0],p=d[1],g=Object(a.useState)(0),w=Object(l.a)(g,2),E=w[0],v=w[1];return r.a.createElement("div",{className:"App"},r.a.createElement(m,{sliderArr:N,nextDot:function(e){c(Object(s.a)(Object(s.a)({},y),{},Object(o.a)({1:!1},e+1,!0)))},prevDot:function(e){c(Object(s.a)(Object(s.a)({},y),{},Object(o.a)({1:!1},e-1,!0)))},state:u,setState:p,x:E,setX:v}),r.a.createElement(f,{sliderArr:N,state:n,handleClick:function(e){c(Object(s.a)(Object(s.a)({},y),{},Object(o.a)({1:!1},e,!0))),p(e),v(-100*(e-1))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(28);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.20ab579e.chunk.js.map