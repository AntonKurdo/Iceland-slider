(this["webpackJsonpreact-slider"]=this["webpackJsonpreact-slider"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/1.334a207c.jpg"},function(e,t,n){e.exports=n.p+"static/media/2.76798903.jpg"},function(e,t,n){e.exports=n.p+"static/media/3.f492a9dd.jpg"},function(e,t,n){e.exports=n.p+"static/media/4.e4c4d38e.jpg"},function(e,t,n){e.exports=n.p+"static/media/5.0ea2727d.jpg"},function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(5),i=n.n(c),r=n(2),d=n(1),u=n(3),s=(n(16),function(e){var t=e.src;return o.a.createElement("img",{draggable:!1,src:t,style:{width:"100%",objectFit:"content"},className:"content",alt:"slide-img"})}),l=(n(17),function(e){var t=e.data,n=e.dots,a=e.moveToSelectedSlide;return o.a.createElement("div",{className:"dots-cont"},t.map((function(e,t){return o.a.createElement("div",{onClick:a.bind(null,t+1),key:t,id:t+1,className:n[t+1]?"dot-item active":"dot-item"})})))}),m=n(6),f=n.n(m),w=n(7),v=n.n(w),p=n(8),E=n.n(p),g=n(9),b=n.n(g),j=n(10),h=n.n(j),O=[f.a,v.a,E.a,b.a,h.a];function L(e,t){var n=Object(a.useRef)(t);Object(a.useEffect)((function(){n.current=t})),Object(a.useEffect)((function(){function t(t){t.code===e&&n.current(t)}return document.addEventListener("keydown",t),function(){return document.removeEventListener("keydown",t)}}),[e])}var k=Object.fromEntries(O.map((function(e){return[e,!1]})));k[1]=!0;var N=function(){var e=Object(a.useState)(k),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(1),m=Object(u.a)(i,2),f=m[0],w=m[1],v=Object(a.useState)(0),p=Object(u.a)(v,2),E=p[0],g=p[1];L("ArrowLeft",(function(){g(0===E?-100*(O.length-1):E+100),0===E?(w(O.length),j(O.length+1)):(w(f-1),j(f))}));L("ArrowRight",(function(){E===-100*(O.length-1)?g(0):g(E-100),E===-100*(O.length-1)?(w(1),b(0)):(w(f+1),b(f))}));var b=function(e){c(Object(d.a)(Object(d.a)({},k),{},Object(r.a)({1:!1},e+1,!0)))},j=function(e){c(Object(d.a)(Object(d.a)({},k),{},Object(r.a)({1:!1},e-1,!0)))},h=!1,N=null,S=Object(a.useRef)(null),y=E,x=null,C=function(e){"content"===e.target.className&&(N=e.pageX,h=!0,y=E)},R=function(e){if(h&&"content"===e.target.className){var t=0;(x=Math.round((e.pageX-N)/window.innerWidth*100))<0&&E===-100*(O.length-1)||x>0&&0===E?x=null:(S.current&&(t=window.getComputedStyle(S.current).transform.split(",")[4].trim()/window.innerWidth*100),g(Math.round(t+x)))}},A=function(e){"content"===e.target.className&&(h=!1,x&&x<0&&E!==-100*(O.length-1)&&(g(y-100),w(f+1),b(f)),x&&x>0&&0!==E&&(g(y+100),w(f-1),j(f)))};return Object(a.useEffect)((function(){return window.PointerEvent?(window.addEventListener("pointerdown",C),window.addEventListener("pointermove",R),window.addEventListener("pointerup",A),function(){return window.removeEventListener("pointerdown",C)}):(window.addEventListener("mousedown",C),window.addEventListener("mousemove",R),window.addEventListener("mouseup",A),window.addEventListener("touchdown",C),window.addEventListener("touchmove",R),window.addEventListener("touchup",A),function(){window.removeEventListener("mousedown",C),window.removeEventListener("touchdown",C)})})),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"slider"},O.map((function(e,t){return o.a.createElement("div",{ref:S,key:t,className:"slide",style:{transform:"translateX(".concat(E,"%)")}},o.a.createElement(s,{src:e}))})),o.a.createElement("button",{id:"goLeft",onClick:function(){g(0===E?-100*(O.length-1):E+100),0===E?(w(O.length),j(O.length+1)):(w(f-1),j(f))}}," < "),o.a.createElement("button",{id:"goRight",onClick:function(){E===-100*(O.length-1)?g(0):g(E-100),E===-100*(O.length-1)?(w(1),b(0)):(w(f+1),b(f))}}," > ")),o.a.createElement(l,{data:O,dots:n,moveToSelectedSlide:function(e){c(Object(d.a)(Object(d.a)({},k),{},Object(r.a)({1:!1},e,!0))),w(e),g(-100*(e-1))}}))},S=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(N,null))};n(18);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null)),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.cb45bded.chunk.js.map