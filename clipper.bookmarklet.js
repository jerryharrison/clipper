javascript:(function(){function m(a,o){var b,c=a.length;for(b=0;b<c;b++)o(a[b])}function c(a,b,c,e){function d(a){a=g?window.event.srcElement:a.target;(e||!a.doNotRemoveOnClick)&&c(a)}g?(b="on"+b,a.attachEvent(b,d)):a.addEventListener(b,d,!1);if(!a.es)a.es=[];a.es.push(function(){g?a.detachEvent(b,d):a.removeEventListener(b,d,!1)});a.removeEvent=function(){m(a.es,function(a){a()})}}function p(a){var b=a.onclick,c=a.onmouseup,d=a.onmousedown;a.onclick=function(){return!1};a.onmouseup=function(){return!1}; a.onmousedown=function(){return!1};a.restoreEventHandlers=function(){a.onclick=b;a.onmouseup=c;a.onmousedown=d}}function d(a,b,c){b=e.createElement(b);if(c)b.innerHTML=c;a.appendChild(b);return b}function n(){b.style.top=f&2?"":"10px";b.style.bottom=f&2?"10px":"";b.style.left=f&1?"":"10px";b.style.right=f&1?"10px":""}var g=!1,e=document,h,f=0,b,i,j,k,l;if(!window._clippedElements)window._clippedElements=[];h=window._clippedElements;c(e.body,"mouseover",function(a){a.style.backgroundColor="#ffff99"; p(a)});c(e.body,"mouseout",function(a){a.style.backgroundColor="";a.restoreEventHandlers&&a.restoreEventHandlers()});c(e.body,"click",function(a){a.style.display="none";h.push(a)});b=d(e.body,"div");b.style.cssText="position:"+(g?"absolute":"fixed")+";padding:2px;background-color:#99FF99;border:1px solid green;z-index:9999;font-family:sans-serif;font-size:10px";n();i=d(b,"a"," Undo |");c(i,"click",function(){var a=h.pop();if(a)a.style.display=""},!0);j=d(b,"a"," Undo All |");c(j,"click",function(){for(var a;a= h.pop();)a.style.display=""},!0);k=d(b,"a"," Move |");c(k,"click",function(){f++;n()},!0);l=d(b,"a"," Exit ");c(l,"click",function(){e.body.removeEvent();b.parentNode.removeChild(b)},!0);m([b,i,k,l,j],function(a){a.style.cursor="pointer";a.doNotRemoveOnClick=1})})()