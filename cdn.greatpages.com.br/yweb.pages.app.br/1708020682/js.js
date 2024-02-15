 
 
 (function(){'use strict';var e={"class":"className",contenteditable:"contentEditable","for":"htmlFor",readonly:"readOnly",maxlength:"maxLength",tabindex:"tabIndex",colspan:"colSpan",rowspan:"rowSpan",usemap:"useMap"};function aa(a,b){try{return a(b)}catch(c){return b}}var k=document,m=window,ba=k.documentElement,n=k.createElement.bind(k),ca=n("div"),p=n("table"),da=n("tbody"),ea=n("tr"),q=Array.isArray,r=Array.prototype,fa=r.concat,t=r.filter,ha=r.indexOf,ia=r.map,ja=r.push,ka=r.slice,u=r.some,la=r.splice,ma=/^#(?:[\w-]|\\.|[^\x00-\xa0])*$/,na=/^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/,oa=/<.+>/,pa=/^\w+$/;function v(a,b){return a&&(w(b)||x(b))?na.test(a)?b.getElementsByClassName(a.slice(1)):pa.test(a)?b.getElementsByTagName(a):b.querySelectorAll(a):[]}var B=function(){function a(a,c){if(a){if(a instanceof B)return a;var b=a;if(C(a)){if(b=(c instanceof B?c[0]:c)||k,b=ma.test(a)?b.getElementById(a.slice(1)):oa.test(a)?qa(a):v(a,b),!b)return}else if(D(a))return this.ready(a);if(b.nodeType||b===m)b=[b];this.length=b.length;a=0;for(c=this.length;a<c;a++)this[a]=b[a]}}a.prototype.init=function(b,c){return new a(b,c)};return a}(),E=B.prototype,F=E.init;F.fn=F.prototype=E;E.length=0;E.splice=la;"function"===typeof Symbol&&(E[Symbol.iterator]=r[Symbol.iterator]);E.map=function(a){return F(fa.apply([],ia.call(this,function(b,c){return a.call(b,c,b)})))};E.slice=function(a,b){return F(ka.call(this,a,b))};var ra=/-([a-z])/g;function G(a){return a.replace(ra,function(a,c){return c.toUpperCase()})}F.guid=1;function sa(a,b){var c=a&&(a.matches||a.webkitMatchesSelector||a.msMatchesSelector);return!!c&&!!b&&c.call(a,b)}function H(a){return!!a&&a===a.window}function w(a){return!!a&&9===a.nodeType}function x(a){return!!a&&1===a.nodeType}function D(a){return"function"===typeof a}function C(a){return"string"===typeof a}function ta(a){return!isNaN(parseFloat(a))&&isFinite(a)}function I(a){if("object"!==typeof a||null===a)return!1;a=Object.getPrototypeOf(a);return null===a||a===Object.prototype}F.isWindow=H;F.isFunction=D;F.isArray=q;F.isNumeric=ta;F.isPlainObject=I;E.get=function(a){if(void 0===a)return ka.call(this);a=Number(a);return this[0>a?a+this.length:a]};E.eq=function(a){return F(this.get(a))};E.first=function(){return this.eq(0)};E.last=function(){return this.eq(-1)};function J(a,b,c){if(c)for(c=a.length;c--&&!1!==b.call(a[c],c,a[c]););else if(I(a)){var d=Object.keys(a);c=0;for(var h=d.length;c<h;c++){var f=d[c];if(!1===b.call(a[f],f,a[f]))break}}else for(c=0,h=a.length;c<h&&!1!==b.call(a[c],c,a[c]);c++);return a}F.each=J;E.each=function(a){return J(this,a)};E.prop=function(a,b){if(a){if(C(a))return a=e[a]||a,2>arguments.length?this[0]&&this[0][a]:this.each(function(c,h){h[a]=b});for(var c in a)this.prop(c,a[c]);return this}};E.removeProp=function(a){return this.each(function(b,c){delete c[e[a]||a]})};function K(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];b="boolean"===typeof a[0]?a.shift():!1;var c=a.shift(),d=a.length;if(!c)return{};if(!d)return K(b,F,c);for(var h=0;h<d;h++){var f=a[h],g;for(g in f)b&&(q(f[g])||I(f[g]))?(c[g]&&c[g].constructor===f[g].constructor||(c[g]=new f[g].constructor),K(b,c[g],f[g])):c[g]=f[g]}return c}F.extend=K;E.extend=function(a){return K(E,a)};function L(a){return C(a)?function(b,c){return sa(c,a)}:D(a)?a:a instanceof B?function(b,c){return a.is(c)}:a?function(b,c){return c===a}:function(){return!1}}E.filter=function(a){var b=L(a);return F(t.call(this,function(a,d){return b.call(a,d,a)}))};function M(a,b){return b?a.filter(b):a}var ua=/\S+/g;function N(a){return C(a)?a.match(ua)||[]:[]}E.hasClass=function(a){return!!a&&u.call(this,function(b){return x(b)&&b.classList.contains(a)})};E.removeAttr=function(a){var b=N(a);return this.each(function(a,d){x(d)&&J(b,function(a,b){d.removeAttribute(b)})})};E.attr=function(a,b){if(a){if(C(a)){if(2>arguments.length){if(!this[0]||!x(this[0]))return;var c=this[0].getAttribute(a);return null===c?void 0:c}return void 0===b?this:null===b?this.removeAttr(a):this.each(function(c,h){x(h)&&h.setAttribute(a,b)})}for(c in a)this.attr(c,a[c]);return this}};E.toggleClass=function(a,b){var c=N(a),d=void 0!==b;return this.each(function(a,f){x(f)&&J(c,function(a,c){d?b?f.classList.add(c):f.classList.remove(c):f.classList.toggle(c)})})};E.addClass=function(a){return this.toggleClass(a,!0)};E.removeClass=function(a){return arguments.length?this.toggleClass(a,!1):this.attr("class","")};function O(a,b,c,d){for(var h=[],f=D(b),g=d&&L(d),y=0,z=a.length;y<z;y++)if(f){var l=b(a[y]);l.length&&ja.apply(h,l)}else for(l=a[y][b];!(null==l||d&&g(-1,l));)h.push(l),l=c?l[b]:null;return h}function P(a){return 1<a.length?t.call(a,function(a,c,d){return ha.call(d,a)===c}):a}F.unique=P;E.add=function(a,b){return F(P(this.get().concat(F(a,b).get())))};function Q(a,b,c){if(x(a)){var d=m.getComputedStyle(a,null);return c?d.getPropertyValue(b)||void 0:d[b]||a.style[b]}}function R(a,b){return parseInt(Q(a,b),10)||0}var S=/^--/,T={},va=ca.style,wa=["webkit","moz","ms"];function xa(a,b){void 0===b&&(b=S.test(a));if(b)return a;if(!T[a]){b=G(a);var c=""+b[0].toUpperCase()+b.slice(1);b=(b+" "+wa.join(c+" ")+c).split(" ");J(b,function(b,c){if(c in va)return T[a]=c,!1})}return T[a]}var ya={animationIterationCount:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0};function za(a,b,c){void 0===c&&(c=S.test(a));return c||ya[a]||!ta(b)?b:b+"px"}E.css=function(a,b){if(C(a)){var c=S.test(a);a=xa(a,c);if(2>arguments.length)return this[0]&&Q(this[0],a,c);if(!a)return this;b=za(a,b,c);return this.each(function(d,f){x(f)&&(c?f.style.setProperty(a,b):f.style[a]=b)})}for(var d in a)this.css(d,a[d]);return this};var Aa=/^\s+|\s+$/;function Ba(a,b){a=a.dataset[b]||a.dataset[G(b)];return Aa.test(a)?a:aa(JSON.parse,a)}E.data=function(a,b){if(!a){if(!this[0])return;var c={},d;for(d in this[0].dataset)c[d]=Ba(this[0],d);return c}if(C(a))return 2>arguments.length?this[0]&&Ba(this[0],a):void 0===b?this:this.each(function(c,d){c=b;c=aa(JSON.stringify,c);d.dataset[G(a)]=c});for(d in a)this.data(d,a[d]);return this};function Ca(a,b){var c=a.documentElement;return Math.max(a.body["scroll"+b],c["scroll"+b],a.body["offset"+b],c["offset"+b],c["client"+b])}function Da(a,b){return R(a,"border"+(b?"Left":"Top")+"Width")+R(a,"padding"+(b?"Left":"Top"))+R(a,"padding"+(b?"Right":"Bottom"))+R(a,"border"+(b?"Right":"Bottom")+"Width")}J([!0,!1],function(a,b){J(["Width","Height"],function(a,d){E[(b?"outer":"inner")+d]=function(c){if(this[0])return H(this[0])?b?this[0]["inner"+d]:this[0].document.documentElement["client"+d]:w(this[0])?Ca(this[0],d):this[0][(b?"offset":"client")+d]+(c&&b?R(this[0],"margin"+(a?"Top":"Left"))+R(this[0],"margin"+(a?"Bottom":"Right")):0)}})});J(["Width","Height"],function(a,b){var c=b.toLowerCase();E[c]=function(d){if(!this[0])return void 0===d?void 0:this;if(!arguments.length)return H(this[0])?this[0].document.documentElement["client"+b]:w(this[0])?Ca(this[0],b):this[0].getBoundingClientRect()[c]-Da(this[0],!a);var h=parseInt(d,10);return this.each(function(b,d){x(d)&&(b=Q(d,"boxSizing"),d.style[c]=za(c,h+("border-box"===b?Da(d,!a):0)))})}});var U={};E.toggle=function(a){return this.each(function(b,c){if(x(c))if(void 0===a?"none"===Q(c,"display"):a){if(c.style.display=c.___cd||"","none"===Q(c,"display")){b=c.style;c=c.tagName;if(U[c])c=U[c];else{var d=n(c);k.body.insertBefore(d,null);var h=Q(d,"display");k.body.removeChild(d);c=U[c]="none"!==h?h:"block"}b.display=c}}else c.___cd=Q(c,"display"),c.style.display="none"})};E.hide=function(){return this.toggle(!1)};E.show=function(){return this.toggle(!0)};function Ea(a,b){return!b||!u.call(b,function(b){return 0>a.indexOf(b)})}var V={focus:"focusin",blur:"focusout"},W={mouseenter:"mouseover",mouseleave:"mouseout"},Fa=/^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;function Ga(a,b,c,d,h){var f=a.___ce=a.___ce||{};f[b]=f[b]||[];f[b].push([c,d,h]);a.addEventListener(b,h)}function X(a){a=a.split(".");return[a[0],a.slice(1).sort()]}function Y(a,b,c,d,h){var f=a.___ce=a.___ce||{};if(b)f[b]&&(f[b]=f[b].filter(function(f){var g=f[0],z=f[1];f=f[2];if(h&&f.guid!==h.guid||!Ea(g,c)||d&&d!==z)return!0;a.removeEventListener(b,f)}));else for(b in f)Y(a,b,c,d,h)}E.off=function(a,b,c){var d=this;if(void 0===a)this.each(function(a,b){(x(b)||w(b)||H(b))&&Y(b)});else if(C(a))D(b)&&(c=b,b=""),J(N(a),function(a,h){a=X(h);h=a[0];var f=a[1],g=W[h]||V[h]||h;d.each(function(a,d){(x(d)||w(d)||H(d))&&Y(d,g,f,b,c)})});else for(var h in a)this.off(h,a[h]);return this};E.on=function(a,b,c,d,h){var f=this;if(!C(a)){for(var g in a)this.on(g,b,c,a[g],h);return this}C(b)||(void 0!==b&&null!==b&&(void 0!==c&&(d=c),c=b),b="");D(d)||(d=c,c=void 0);if(!d)return this;J(N(a),function(a,g){a=X(g);g=a[0];var l=a[1],z=W[g]||V[g]||g,y=g in W,Ka=g in V;z&&f.each(function(a,f){if(x(f)||w(f)||H(f))a=function La(a){if(a.target["___i"+a.type])return a.stopImmediatePropagation();if(!a.namespace||Ea(l,a.namespace.split(".")))if(b||!(Ka&&(a.target!==f||a.___ot===z)||y&&a.relatedTarget&& f.contains(a.relatedTarget))){var g=f;if(b){for(var A=a.target;!sa(A,b);){if(A===f)return;A=A.parentNode;if(!A)return}g=A;a.___cd=!0}a.___cd&&Object.defineProperty(a,"currentTarget",{configurable:!0,get:function(){return g}});Object.defineProperty(a,"data",{configurable:!0,get:function(){return c}});A=d.call(g,a,a.___td);h&&Y(f,z,l,b,La);!1===A&&(a.preventDefault(),a.stopPropagation())}},a.guid=d.guid=d.guid||F.guid++,Ga(f,z,l,b,a)})});return this};E.one=function(a,b,c,d){return this.on(a,b,c,d,!0)};E.ready=function(a){function b(){return setTimeout(a,0,F)}"loading"!==k.readyState?b():k.addEventListener("DOMContentLoaded",b);return this};E.trigger=function(a,b){if(C(a)){var c=X(a),d=c[0];c=c[1];var h=W[d]||V[d]||d;if(!h)return this;var f=Fa.test(h)?"MouseEvents":"HTMLEvents";a=k.createEvent(f);a.initEvent(h,!0,!0);a.namespace=c.join(".");a.___ot=d}a.___td=b;var g=a.___ot in V;return this.each(function(b,c){g&&D(c[a.___ot])&&(c["___i"+a.type]=!0,c[a.___ot](),c["___i"+a.type]=!1);c.dispatchEvent(a)})};function Ha(a){return a.multiple&&a.options?O(t.call(a.options,function(a){return a.selected&&!a.disabled&&!a.parentNode.disabled}),"value"):a.value||""}var Ia=/%20/g,Ja=/\r?\n/g,Ma=/file|reset|submit|button|image/i,Na=/radio|checkbox/i;E.serialize=function(){var a="";this.each(function(b,c){J(c.elements||[c],function(b,c){c.disabled||!c.name||"FIELDSET"===c.tagName||Ma.test(c.type)||Na.test(c.type)&&!c.checked||(b=Ha(c),void 0!==b&&(b=q(b)?b:[b],J(b,function(b,d){b=a;d="&"+encodeURIComponent(c.name)+"="+encodeURIComponent(d.replace(Ja,"\r\n")).replace(Ia,"+");a=b+d})))})});return a.slice(1)};E.val=function(a){return arguments.length?this.each(function(b,c){if((b=c.multiple&&c.options)||Na.test(c.type)){var d=q(a)?ia.call(a,String):null===a?[]:[String(a)];b?J(c.options,function(a,b){b.selected=0<=d.indexOf(b.value)},!0):c.checked=0<=d.indexOf(c.value)}else c.value=void 0===a||null===a?"":a}):this[0]&&Ha(this[0])};E.clone=function(){return this.map(function(a,b){return b.cloneNode(!0)})};E.detach=function(a){M(this,a).each(function(a,c){c.parentNode&&c.parentNode.removeChild(c)});return this};var Oa=/^\s*<(\w+)[^>]*>/,Pa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,Qa={"*":ca,tr:da,td:ea,th:ea,thead:p,tbody:p,tfoot:p};function qa(a){if(!C(a))return[];if(Pa.test(a))return[n(RegExp.$1)];var b=Oa.test(a)&&RegExp.$1;b=Qa[b]||Qa["*"];b.innerHTML=a;return F(b.childNodes).detach().get()}F.parseHTML=qa;E.empty=function(){return this.each(function(a,b){for(;b.firstChild;)b.removeChild(b.firstChild)})};E.html=function(a){return arguments.length?void 0===a?this:this.each(function(b,c){x(c)&&(c.innerHTML=a)}):this[0]&&this[0].innerHTML};E.remove=function(a){M(this,a).detach().off();return this};E.text=function(a){return void 0===a?this[0]?this[0].textContent:"":this.each(function(b,c){x(c)&&(c.textContent=a)})};E.unwrap=function(){this.parent().each(function(a,b){"BODY"!==b.tagName&&(a=F(b),a.replaceWith(a.children()))});return this};E.offset=function(){var a=this[0];if(a)return a=a.getBoundingClientRect(),{top:a.top+m.pageYOffset,left:a.left+m.pageXOffset}};E.offsetParent=function(){return this.map(function(a,b){for(a=b.offsetParent;a&&"static"===Q(a,"position");)a=a.offsetParent;return a||ba})};E.position=function(){var a=this[0];if(a){var b="fixed"===Q(a,"position"),c=b?a.getBoundingClientRect():this.offset();if(!b){var d=a.ownerDocument;for(b=a.offsetParent||d.documentElement;(b===d.body||b===d.documentElement)&&"static"===Q(b,"position");)b=b.parentNode;b!==a&&x(b)&&(d=F(b).offset(),c.top-=d.top+R(b,"borderTopWidth"),c.left-=d.left+R(b,"borderLeftWidth"))}return{top:c.top-R(a,"marginTop"),left:c.left-R(a,"marginLeft")}}};E.children=function(a){return M(F(P(O(this,function(a){return a.children}))),a)};E.contents=function(){return F(P(O(this,function(a){return"IFRAME"===a.tagName?[a.contentDocument]:"TEMPLATE"===a.tagName?a.content.childNodes:a.childNodes})))};E.find=function(a){return F(P(O(this,function(b){return v(a,b)})))};var Ra=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Sa=/^$|^module$|\/(java|ecma)script/i,Ta=["type","src","nonce","noModule"];function Ua(a,b){a=F(a);a.filter("script").add(a.find("script")).each(function(a,d){if(Sa.test(d.type)&&ba.contains(d)){var c=n("script");c.text=d.textContent.replace(Ra,"");J(Ta,function(a,b){d[b]&&(c[b]=d[b])});b.head.insertBefore(c,null);b.head.removeChild(c)}})}function Z(a,b,c,d,h,f,g,y){J(a,function(a,f){J(F(f),function(a,f){J(F(b),function(b,g){var l=c?g:f;b=c?a:b;g=c?f:g;l=b?l.cloneNode(!0):l;b=!b;h?g.insertBefore(l,d?g.firstChild:null):g.parentNode.insertBefore(l,d?g:g.nextSibling);b&&Ua(l,g.ownerDocument)},y)},g)},f);return b}E.after=function(){return Z(arguments,this,!1,!1,!1,!0,!0)};E.append=function(){return Z(arguments,this,!1,!1,!0)};E.appendTo=function(a){return Z(arguments,this,!0,!1,!0)};E.before=function(){return Z(arguments,this,!1,!0)};E.insertAfter=function(a){return Z(arguments,this,!0,!1,!1,!1,!1,!0)};E.insertBefore=function(a){return Z(arguments,this,!0,!0)};E.prepend=function(){return Z(arguments,this,!1,!0,!0,!0,!0)};E.prependTo=function(a){return Z(arguments,this,!0,!0,!0,!1,!1,!0)};E.replaceWith=function(a){return this.before(a).remove()};E.replaceAll=function(a){F(a).replaceWith(this);return this};E.wrapAll=function(a){a=F(a);for(var b=a[0];b.children.length;)b=b.firstElementChild;this.first().before(a);return this.appendTo(b)};E.wrap=function(a){return this.each(function(b,c){var d=F(a)[0];F(c).wrapAll(b?d.cloneNode(!0):d)})};E.wrapInner=function(a){return this.each(function(b,c){b=F(c);c=b.contents();c.length?c.wrapAll(a):b.append(a)})};E.has=function(a){var b=C(a)?function(b,d){return v(a,d).length}:function(b,d){return d.contains(a)};return this.filter(b)};E.is=function(a){var b=L(a);return u.call(this,function(a,d){return b.call(a,d,a)})};E.next=function(a,b,c){return M(F(P(O(this,"nextElementSibling",b,c))),a)};E.nextAll=function(a){return this.next(a,!0)};E.nextUntil=function(a,b){return this.next(b,!0,a)};E.not=function(a){var b=L(a);return this.filter(function(c,d){return(!C(a)||x(d))&&!b.call(d,c,d)})};E.parent=function(a){return M(F(P(O(this,"parentNode"))),a)};E.index=function(a){var b=a?F(a)[0]:this[0];a=a?this:F(b).parent().children();return ha.call(a,b)};E.closest=function(a){var b=this.filter(a);if(b.length)return b;var c=this.parent();return c.length?c.closest(a):b};E.parents=function(a,b){return M(F(P(O(this,"parentElement",!0,b))),a)};E.parentsUntil=function(a,b){return this.parents(b,a)};E.prev=function(a,b,c){return M(F(P(O(this,"previousElementSibling",b,c))),a)};E.prevAll=function(a){return this.prev(a,!0)};E.prevUntil=function(a,b){return this.prev(b,!0,a)};E.siblings=function(a){return M(F(P(O(this,function(a){return F(a).parent().children().not(a)}))),a)};"undefined"!==typeof exports?module.exports=F:m.cash=m.$=F;})();
 
 var elementos_css ={};
 var blocos_posicao ={};
 var elementos_posicao ={};
 var elementos_popup ={};
 var elementos_botoes_evento ={};
 var pagina_controle ={
 'classe_bloco':'gpc-b',
 'classe_elemento':'gpc-e',
 'classe_elemento_antigo':'gpc-elemento',
 'classe_elemento_interno':'c',
 'classe_elemento_interno_antigo':'conteudo',
 'elementos_timer':{}
};
 var largura_tela, altura_tela, timeout_resize;
 
 function GreatResize(){
 let tamanho_tela = $(window).width();
 
 function iOS(){return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document)}
 if(tamanho_tela <= 1200){
 let controle = 1200;
 if(tamanho_tela > 360 && tamanho_tela <= 800){
 $('.gpc-b').each(function(){if($(this).css('background-attachment') == 'fixed'){$(this).css('background-position','');}});
 if(iOS()){$('meta[name="viewport"]').attr('content','width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, shrink-to-fit=no');}
 else{$('body').css('zoom','');}
 return;
}else if(tamanho_tela <= 360){controle = 360;}
 let proporcao = (((tamanho_tela*100)/controle)).toFixed(5), novo_tamanho;
 novo_tamanho = (tamanho_tela-(tamanho_tela*(proporcao/100)));
 if(novo_tamanho != 0){
 $('.gpc-b').each(function(i,bloco){
 if($(bloco).css('background-attachment') == 'fixed'){
 if(iOS()){$(bloco).css('background-attachment','initial');}
 if($(bloco).position().top >= $(window).height()){$(bloco).css('background-position',$(bloco).css('background-position-x')+' 100%');}
 else{$(bloco).css('background-position',$(bloco).css('background-position-x')+' 0%');}
}
});
 if(iOS()){$('meta[name="viewport"]').attr('content','width='+novo_tamanho+', initial-scale='+(proporcao/100)+', maximum-scale='+(proporcao/100)+', minimum-scale='+(proporcao/100)+', user-scalable=no, shrink-to-fit=no');
}else{$('body').css({'zoom':proporcao+'%'});}
}else{
 if(iOS()){
 $('.gpc-b').each(function(i,bloco){
 if($(bloco).css('background-attachment') == 'fixed'){
 $(bloco).css('background-attachment','initial');
 if($(bloco).position().top >= $(window).height()){$(bloco).css('background-position',$(bloco).css('background-position-x')+' 100%');}
 else{$(bloco).css('background-position',$(bloco).css('background-position-x')+' 0%');}
}
});
}
}
}else{
 $('.gpc-b').each(function(i,bloco){if($(bloco).css('background-attachment') == 'fixed'){$(bloco).css('background-position','');}});
 if(iOS()){$('meta[name="viewport"]').attr('content','width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, shrink-to-fit=no');}
 else{$('body').css('zoom','');}
}
}
 GreatResize();
 $(function(){GreatResize();});
 window.addEventListener('resize', function(e){
 e.preventDefault();
 e.stopPropagation();
 if(timeout_resize){clearTimeout(timeout_resize);timeout_resize = null;}
 largura_tela = $(window).width();
 altura_tela = $(window).height();
 timeout_resize = setTimeout(function(){
 if($(window).width() == largura_tela && $(window).height() == altura_tela){GreatResize();}
},50);
},{passive:true});
 
 function GreatFontes(modal){
 if(modal == undefined){modal = false;}
 if((navigator.userAgent.match(/Android/i) && (navigator.userAgent.match(/Instagram/i) || navigator.userAgent.match(/FBAN/i) || navigator.userAgent.match(/FBAV/i))) || (navigator.userAgent.match(/iPhone/i) && $(window).width() < 360)){
 
 $((modal ? '.gm ':'')+'.gpc-e').each(function(){
 
 var elemento = $(this);
 var elemento_id = elemento.attr('id');
 
 if (elementos_css.hasOwnProperty(elemento_id)){
 
 var elemento_conteudo = (elemento.hasClass('e_formulario') ? elemento.find('.gpc_botao') :elemento.children('.c'));
 var fs_aumento = fs_novo = 0;
 
 if (parseFloat(elemento_conteudo.css('font-size')) != elementos_css[elemento_id]['fs']){
 
 fs_aumento = (elementos_css[elemento_id]['fs']*100)/parseFloat(elemento_conteudo.css('font-size'));
 fs_novo = elementos_css[elemento_id]['fs']-((100-fs_aumento)*(elementos_css[elemento_id]['fs']/100));
 
 elemento_conteudo.css('font-size',fs_novo+'px');
 elemento_conteudo.children().each(function(){$(this).css('font-size',fs_novo+'px');});
 
 if (elementos_css[elemento_id]['lh']){
 
 elemento_conteudo.css('line-height',elementos_css[elemento_id]['lh']);
 elemento_conteudo.children().each(function(){$(this).css('line-height',elementos_css[elemento_id]['lh']);});
}
 
 if (elemento.hasClass('e_timer')){
 
 if (parseFloat(elemento_conteudo.css('font-size')) != elementos_css[elemento_id]['fs']){
 elemento_conteudo.find('.contador_titulos').css('line-height','1');
 elemento_conteudo.find('.contador_itens').children('span').css('line-height','1.2');
}
}else if (elemento.hasClass('e_formulario')){
 
 var fs_aumento_form = fs_novo_form = 0;
 fs_aumento_form = (14*100)/parseFloat(elemento_conteudo.find('.gpc_campos-titulo').css('font-size'));
 fs_novo_form = 14-((100-fs_aumento_form)*(14/100));
 elemento_conteudo.find('.gpc_campos-titulo').css({'font-size':fs_novo_form+'px', 'line-height':'1.4'});
 
 fs_aumento_form = (12*100)/parseFloat(elemento_conteudo.find('.gpc_campos-texto').css('font-size'));
 fs_novo_form = 12-((100-fs_aumento_form)*(12/100));
 elemento_conteudo.find('.gpc_campos-texto').css({'font-size':fs_novo_form+'px', 'line-height':'1.4'});
 
 elemento_conteudo.find('.gpc_botao').css({'font-size':fs_novo+'px', 'line-height':elementos_css[elemento_id]['lh']});
}
}
}
});
}
}
 $(function(){
 
 GreatFontes();
});
 
 
 $(function(){GreatLoader('iniciar');});
 
 var gle_fontes ={}, gle_css ={}, gle_scripts ={};
 
 function GreatLoader(acao){
 
 
 gle_fontes['elementos'] = $('.gle_fontes');
 gle_fontes['encontrados'] = gle_fontes['elementos'].length;
 gle_fontes['carregados'] = 0;
 
 if (gle_fontes['encontrados'] != 0){
 if(!window.getCrawler()){
 InserirFontes(acao);
 setTimeout(function(){CarregarFontes();},4500);
}else{CarregarFontes();}
}else{CarregarFontes();}
 
 setTimeout(function(){
 
 gle_scripts['elementos'] = $('.gle_scripts');
 gle_scripts['encontrados'] = gle_scripts['elementos'].length;
 gle_scripts['carregados'] = 0;
 
 if (gle_scripts['encontrados'] != 0){
 InserirScripts(acao);
}else{if (acao == 'iniciar'){if (window.InserirScriptsInline != undefined){InserirScriptsInline();}}}
},20);
 
 setTimeout(function(){
 
 gle_css = $('.gle_css');
 
 InserirCss(acao);
},30);
 
 setTimeout(function(){
 GObserver.instalar({
 'elemento' :'.e_animacoes',
 'antecipacao' :0,
 'executar' :function(elemento){
 (function(elemento){
 var elemento_carregando = setInterval(function(){
 if (!$(elemento).hasClass('se_imagem') && !$(elemento).hasClass('se_video') && !$(elemento).hasClass('se_caixa') && !$(elemento).find('.c').hasClass('se_fonte') && !$(elemento).hasClass('se_slider')){
 
 clearInterval(elemento_carregando);
 
 var elemento_id = $(elemento).attr('id').replace('_d', '').replace('_m', '');
 var elemento_informacoes = ($(elemento).hasClass('e_video') && $(elemento).find('.carregando').length ? $(elemento).find('.carregando') :$(elemento).find('.c'));
 var animacao_nome = $(elemento_informacoes).attr('data-animation-nome');
 var animacao_duration = ($(elemento_informacoes).attr('data-animation-duration') ? $(elemento_informacoes).attr('data-animation-duration')+'ms' :'1000ms');
 var animacao_delay = ($(elemento_informacoes).attr('data-animation-delay') ? $(elemento_informacoes).attr('data-animation-delay')+'ms' :'0ms');
 var animacao_repeat = ($(elemento_informacoes).attr('data-animation-repeat') == 'loop' ? 'infinite' :'');
 
 if (animacao_nome == 'slide' || animacao_nome == 'zoom' || animacao_nome == 'flip'){var animacao_tipo = 'cubic-bezier(.25,.46,.45,.94)';}
 else if (animacao_nome == 'fade'){var animacao_tipo = 'cubic-bezier(0.390, 0.575, 0.565, 1.000)';}
 else if (animacao_nome == 'roll'){var animacao_tipo = 'ease-out';}
 else if (animacao_nome == 'fold'){var animacao_tipo = 'cubic-bezier(.175,.885,.32,1.275)';}
 else{var animacao_tipo = '';}
 
 $(elemento).removeClass('e_animacoes');
 if(!window.getCrawler()){
 if($(elemento).hasClass('e_faq')){
 var itens = $(elemento).find('.gac-item');
 for (var i = 0;i < itens.length;i++){
 $(itens[i]).css({
 'animation':elemento_id+'_animacao '+animacao_duration+' '+animacao_tipo+' '+(parseInt(animacao_delay)+(500*i))+'ms '+animacao_repeat+' both',
 '-webkit-animation':elemento_id+'_animacao '+animacao_duration+' '+animacao_tipo+' '+(parseInt(animacao_delay)+(500*i))+'ms '+animacao_repeat+' both',
 'transform':'translate3d(0,0,0)',
 '-webkit-transform':'translate3d(0,0,0)',
 'perspective':'500px'});
 }
}else{
 $(elemento).find('.c').css({
 'animation':elemento_id+'_animacao '+animacao_duration+' '+animacao_tipo+' '+animacao_delay+' '+animacao_repeat+' both',
 '-webkit-animation':elemento_id+'_animacao '+animacao_duration+' '+animacao_tipo+' '+animacao_delay+' '+animacao_repeat+' both',
 'transform':'translate3d(0,0,0)',
 '-webkit-transform':'translate3d(0,0,0)',
 'perspective':'500px'});
}
}
 
 $(elemento_informacoes).removeAttr('data-animation-nome data-animation-duration data-animation-delay data-animation-repeat');
 }
}, 50);
})(elemento);
}
});
},30);
 
 setTimeout(function(){
 GObserver.instalar({
 'elemento' :'.se_imagem',
 'antecipacao' :600,
 'executar' :function(elemento){
 
 if (window.innerWidth <= 800){var dispositivo = 'mobile';}else if (window.innerWidth > 800){var dispositivo = 'desktop';}
 
 var imagem_download = new Image();
 imagem_download.src = ((dispositivo == 'mobile' && elemento.getAttribute('ll_src_mobile')) ? elemento.getAttribute('ll_src_mobile') :elemento.getAttribute('ll_src'));
 imagem_download.onload = function(e){
 
 let img_mobile = elemento.getAttribute('ll_src_mobile'), img_desktop = elemento.getAttribute('ll_src'), html = '<div class="imagem_fundo"></div>';
 elemento.removeAttribute('ll_src');
 elemento.removeAttribute('ll_src_mobile');
 elemento.querySelector('.'+pagina_controle['classe_elemento_interno']).removeAttribute('gpc_nome_imagem');
 elemento.classList.remove('se_imagem');
 elemento.children[0].innerHTML = html;
}
}
});
},40);
 
 setTimeout(function(){
 GObserver.instalar({
 'elemento' :'.se_caixa',
 'antecipacao' :500,
 'executar' :function(elemento){
 
 if (window.innerWidth <= 800){var dispositivo = 'mobile';}else if (window.innerWidth > 800){var dispositivo = 'desktop';}
 
 var elemento_carregando_src = '';
 if (dispositivo == 'mobile' && elemento.getAttribute('ll_src_mobile')){elemento_carregando_src = elemento.getAttribute('ll_src_mobile');}
 else if (dispositivo == 'desktop' && elemento.getAttribute('ll_src')){elemento_carregando_src = elemento.getAttribute('ll_src');}
 if (elemento_carregando_src){
 
 var imagem_download = new Image();
 imagem_download.src = elemento_carregando_src;
 imagem_download.onload = function(e){
 
 elemento.removeAttribute('ll_src');
 elemento.removeAttribute('ll_src_mobile');
 elemento.classList.remove('se_caixa');
}
}
}
});
},40);
 
 setTimeout(function(){
 GObserver.instalar({
 'elemento' :'.se_slider',
 'antecipacao' :500,
 'executar' :function(elemento){
 
 if (window.innerWidth <= 800){var dispositivo = 'mobile';}
 else if (window.innerWidth > 800){var dispositivo = 'desktop';}
 
 var imagens = $(elemento).find('.imagem');
 if(imagens.length){
 imagens.each(function(i,imagem){
 var elemento_carregando_src = '';
 if (dispositivo == 'mobile' && imagem.getAttribute('ll_src_mobile')){elemento_carregando_src = imagem.getAttribute('ll_src_mobile');}
 else if (dispositivo == 'desktop' && imagem.getAttribute('ll_src')){elemento_carregando_src = imagem.getAttribute('ll_src');}
 if (elemento_carregando_src){
 
 var imagem_download = new Image();
 imagem_download.src = elemento_carregando_src;
 imagem_download.onload = function(e){
 
 imagem.removeAttribute('ll_src');
 imagem.removeAttribute('ll_src_mobile');
 imagem.closest('.'+pagina_controle['classe_elemento']).classList.remove('se_slider');
 if(imagem.classList.contains('gsi_clone')){imagem.style.backgroundImage = 'url('+elemento_carregando_src+')';}
}
 }
});
}
}
});
},400);
 
 setTimeout(function(){
 GObserver.instalar({
 'elemento' :'.ll_background',
 'antecipacao' :500,
 'executar' :function(elemento){
 
 if (window.innerWidth <= 800){var dispositivo = 'mobile';}
 else if (window.innerWidth > 800){var dispositivo = 'desktop';}
 
 var elemento_carregando_src = '';
 if (dispositivo == 'mobile' && elemento.getAttribute('ll_src_mobile')){elemento_carregando_src = elemento.getAttribute('ll_src_mobile');}
 else if (dispositivo == 'desktop' && elemento.getAttribute('ll_src')){elemento_carregando_src = elemento.getAttribute('ll_src');}
 if (elemento_carregando_src){
 
 var background_download = new Image();
 background_download.src = elemento_carregando_src;
 background_download.onload = function(e){
 
 elemento.removeAttribute('ll_src');
 elemento.removeAttribute('ll_src_mobile');
 elemento.classList.remove('ll_background');
}
}else{
 
 elemento.removeAttribute('ll_src');
 elemento.removeAttribute('ll_src_mobile');
 elemento.classList.remove('ll_background');
}
}
});
},50);
 
 if(!window.getCrawler()){
 setTimeout(function(){
 GObserver.instalar({
 'elemento' :'.se_video',
 'antecipacao' :0,
 'executar' :function(elemento){
 
 if(document.getElementById(elemento.getAttribute('id')).getElementsByTagName('iframe').length == 0){
 
 var animacao_nome = (elemento.querySelector('.carregando').getAttribute('data-animation-nome') ? elemento.querySelector('.carregando').getAttribute('data-animation-nome') :'none');
 var animacao_duration = (elemento.querySelector('.carregando').getAttribute('data-animation-duration') ? elemento.querySelector('.carregando').getAttribute('data-animation-duration') :1000);
 var animacao_delay = (elemento.querySelector('.carregando').getAttribute('data-animation-delay') ? elemento.querySelector('.carregando').getAttribute('data-animation-delay') :0);
 var animacao_repeat = (elemento.querySelector('.carregando').getAttribute('data-animation-repeat') == 'loop' ? 'infinite' :'show');
 
 var video_download = document.createElement("iframe");
 video_download.setAttribute('src', elemento.getAttribute('ll_src'));
 video_download.setAttribute('frameborder', 0);
 video_download.setAttribute('allowfullscreen', '');
 video_download.setAttribute('mozallowfullscreen', '');
 video_download.setAttribute('webkitallowfullscreen', '');
 video_download.setAttribute('allow', 'accelerometer;autoplay;picture-in-picture');
 video_download.setAttribute('class', 'c e_video');
 video_download.setAttribute('data-animation-nome', animacao_nome);
 video_download.setAttribute('data-animation-duration', animacao_duration);
 video_download.setAttribute('data-animation-delay', animacao_delay);
 video_download.setAttribute('data-animation-repeat', animacao_repeat);
 video_download.onload = function(){
 if(document.getElementById(elemento.getAttribute('id')).querySelector('.carregando')){
 document.getElementById(elemento.getAttribute('id')).querySelector('.carregando').remove();
}
 elemento.removeAttribute('ll_src');
 elemento.classList.remove('se_video');
 };
 video_download.onreadystatechange = function(){
 if(document.getElementById(elemento.getAttribute('id')).querySelector('.carregando')){
 document.getElementById(elemento.getAttribute('id')).querySelector('.carregando').remove();
}
 if (this.readyState == 'complete'){
 elemento.removeAttribute('ll_src');
 elemento.classList.remove('se_video');
}
 };
 
 document.getElementById(elemento.getAttribute('id')).appendChild(video_download);
}
}
});
},400);
}
}
 
 function InserirFontes(acao){
 if (gle_fontes['elementos'].length){
 for(var i = 0;i < gle_fontes['elementos'].length;i++){
 
 (function(index){
 
 var elemento = $(gle_fontes['elementos'][index]);
 
 gle_fontes['elementos'].splice(index, 1);
 
 var fonte = document.createElement('link');
 fonte.href = elemento.attr('gle_href');
 fonte.rel = 'stylesheet';
 fonte.media = 'all';
 fonte.onload = function(){
 
 elemento.remove();
 
 gle_fontes['carregados']++;
 
 CarregarFontes();
 
 InserirFontes(acao);
};
 fonte.onerror = function(){
 
 elemento.remove();
 
 gle_fontes['carregados']++;
 
 CarregarFontes();
 
 InserirFontes(acao);
};
 fonte.onreadystatechange = function(){if (this.readyState == 'complete'){
 
 elemento.remove();
 
 gle_fontes['carregados']++;
 
 CarregarFontes();
 
 InserirFontes(acao);
}};
 document.head.appendChild(fonte);
})(i, acao);
 
 break;
}
}
}
 function CarregarFontes(){
 var fontes_carregar = $('.se_fonte, .se_contador');
 if (fontes_carregar.length){
 for(var i = 0;i < fontes_carregar.length;i++){
 
 if ($(fontes_carregar[i]).hasClass('se_fonte')){$(fontes_carregar[i]).removeClass('se_fonte');}
 else{$(fontes_carregar[i]).removeClass('se_contador');}
}
}
}
 
 function InserirCss(acao){
 if (gle_css.length){
 for(var i = 0;i < gle_css.length;i++){
 
 (function(index){
 
 var elemento = $(gle_css[index]);
 
 gle_css.splice(index, 1);
 
 var fonte = document.createElement('link');
 
 for (var x = 0;x < elemento[0].attributes.length;x++){
 if(elemento[0].attributes[x].nodeName != 'rel'){fonte.setAttribute(elemento[0].attributes[x].nodeName.replace('gle_',''),elemento[0].attributes[x].nodeValue.replace('gle_css',''));}
}
 
 fonte.onload = function(){
 
 elemento.remove();
 
 InserirCss(acao);
};
 fonte.onerror = function(){
 
 elemento.remove();
 
 InserirCss(acao);
};
 fonte.onreadystatechange = function(){if (this.readyState == 'complete'){
 
 elemento.remove();
 
 InserirCss(acao);
}};
 document.body.appendChild(fonte);
})(i, acao);
 
 break;
}
}
}
 
 function InserirScripts(acao){
 if (gle_scripts['elementos'].length){
 for(var i = 0;i < gle_scripts['elementos'].length;i++){
 
 (function(index){
 
 var elemento = $(gle_scripts['elementos'][index]);
 if((elemento.attr('href').indexOf('gtag') || elemento.attr('href').indexOf('fbevents')) && window.getCrawler()){
 
 elemento.remove();
 
 InserirScripts(acao);
 
 return;
}
 
 gle_scripts['elementos'].splice(index, 1);
 
 var script = document.createElement('script');
 
 for (var x = 0;x < elemento[0].attributes.length;x++){
 let valor = elemento[0].attributes[x].nodeValue;
 if(elemento[0].attributes[x].nodeName != 'href'){
 valor = valor.replace(/dns-prefetch\s+?/gm,'');
 valor = valor.replace(/\s+?dns-prefetch/gm,'');
 valor = valor.replace(/preconnect\s+?/gm,'');
 valor = valor.replace(/\s+?preconnect/gm,'');
 valor = valor.replace('dns-prefetch','');
 valor = valor.replace('preconnect','');
 valor = valor.replace('gle_scripts','');
 if(elemento[0].attributes[x].nodeName != 'async'){script.setAttribute(elemento[0].attributes[x].nodeName,valor);}
}
}
 script.src = elemento.attr('href');
 script.type = 'text/javascript';
 script.defer = true;
 script.onload = function(){
 
 elemento.remove();
 
 gle_scripts['carregados']++;
 
 if (gle_scripts['encontrados'] == gle_scripts['carregados'] && acao == 'iniciar'){
 if (window.InserirScriptsInline != undefined){InserirScriptsInline();}
}
 
 InserirScripts(acao);
};
 script.onerror = function(){
 
 elemento.remove();
 
 gle_scripts['carregados']++;
 
 if (gle_scripts['encontrados'] == gle_scripts['carregados'] && acao == 'iniciar'){
 if (window.InserirScriptsInline != undefined){InserirScriptsInline();}
}
 
 InserirScripts(acao);
};
 script.onreadystatechange = function(){if (this.readyState == 'complete'){
 
 elemento.remove();
 
 gle_scripts['carregados']++;
 
 if (gle_scripts['encontrados'] == gle_scripts['carregados'] && acao == 'iniciar'){
 if (window.InserirScriptsInline != undefined){InserirScriptsInline();}
}
 
 InserirScripts(acao);
}};
 document.body.appendChild(script);
})(i, acao);
 
 break;
}
}
}
 
 var elementos_formulario_redirecionamento ={};
 function ValidacaoFormularios (formulario){
 var formulario_passos = formulario.find("fieldset");
 var formulario_validado = true;
 $(formulario_passos).each(function(formulario_passos_total){if (!ValidacaoPasso($(this))){formulario_validado = false;}});
 return formulario_validado;
}
 function ValidacaoPasso (passo){
 var passo_campo = passo.find(".gpc_campos");
 var passo_validado = true;
 if(passo_campo.length){
 $(passo_campo).each(function(passo_campo_total){
 if($(this).find(".gpc_campos-campo-opcao").length){if (!ValidacaoCampos($(this))){passo_validado = false;}}
 else{if (!ValidacaoCampos($(this).find(".gpc_campo"))){passo_validado = false;}}
});
}else{
 var caixa = passo.closest('.gm');
 var passo_campo = passo.find(".admin_campos");
 $(passo_campo).each(function(passo_campo_total){
 if (!ValidacaoCampos($(this).find(".admin_campo"))){
 passo_validado = false;
 
 if (caixa.length){
 if (passo.hasClass('passo_fechado')){
 
 var caixa_andamento = caixa.children('.gmf-andamento');
 var caixa_rodape = caixa.children('.gmf-rodape');
 var formulario = caixa.find('#formulario').find("fieldset.passo");
 var passos_atual = parseInt(passo.attr('passo'));
 var passos_quantidade = parseInt(caixa_andamento.attr('caixa_passos_quantidade'));
 
 $(formulario).each(function(formulario_passos_total){if ($(this).hasClass('passo_aberto')){$(this).removeClass('passo_aberto').addClass('passo_fechado');}});
 
 passo.removeClass('passo_fechado').addClass('passo_aberto');
 
 PosicionarGM(caixa.attr('id'), false);
 
 caixa_andamento.attr('caixa_passos_atual', passos_atual);
 caixa_andamento.children('.gmf-andamento-barra').css({'width':((100/passos_quantidade)*passos_atual)+'%'});
 
 if (passos_quantidade == (passos_atual+1)){
 if (!caixa_rodape.find('.passo_proximo').hasClass('esconder')){caixa_rodape.find('.passo_proximo').addClass('esconder');}
 if (caixa_rodape.find('#enviar_formulario_ajax').hasClass('esconder')){caixa_rodape.find('#enviar_formulario_ajax').removeClass('esconder');}
 }else{
 if (caixa_rodape.find('.passo_proximo').hasClass('esconder')){caixa_rodape.find('.passo_proximo').removeClass('esconder');}
 if (!caixa_rodape.find('#enviar_formulario_ajax').hasClass('esconder')){caixa_rodape.find('#enviar_formulario_ajax').addClass('esconder');}
 }
 if (passos_atual == 0){
 if (!caixa_rodape.find('.passo_anterior').hasClass('esconder')){caixa_rodape.find('.passo_anterior').addClass('esconder');}
 if (caixa_rodape.find('#cancelar_formulario_ajax').hasClass('esconder')){caixa_rodape.find('#cancelar_formulario_ajax').removeClass('esconder');}
 }else{
 if (caixa_rodape.find('.passo_anterior').hasClass('esconder')){caixa_rodape.find('.passo_anterior').removeClass('esconder');}
 if (!caixa_rodape.find('#cancelar_formulario_ajax').hasClass('esconder')){caixa_rodape.find('#cancelar_formulario_ajax').addClass('esconder');}
 }
}
}
}
});
}
 if(passo_validado){return true;}
 else{return false;}
}
 function ValidacaoCampos (campo){
 
 if($(campo).hasClass('admin_campo')){
 
 var campo_validado = true;
 var campo_auxiliar = campo.closest('.admin_campos').children('.admin_auxiliar');
 var campo_valor = campo.val();
 var campo_area = campo.closest('.admin_campos');
 if(campo_valor){
 if(campo_valor.substr(0,1) == ' '){
 campo.val(campo_valor.substr(1));
 campo_valor = campo_valor.substr(1);
}
 if(campo_valor.substr(-1) == ' '){
 campo.val(campo_valor.substr(0,(campo_valor.length-1)));
 campo_valor = campo_valor.substr(0,(campo_valor.length-1));
}
}
 
 if (campo_auxiliar.attr('html_original') == '' && campo_auxiliar.html() != ''){campo_auxiliar.attr('html_original',campo_auxiliar.html());}
 
 if (campo.hasClass('required') && campo_valor == ''){
 campo_validado = false;
 if (campo_auxiliar.html() != 'Campo obrigatório.' && campo_auxiliar.html() != ''){campo_auxiliar.attr('html_original',campo_auxiliar.html());}
 campo_auxiliar.html('Campo obrigatório.');
}else{if (campo_auxiliar.html() == 'Campo obrigatório.'){campo_auxiliar.html('');}}
 if ((campo.hasClass('email') || campo.hasClass('email_multiplo') || campo.hasClass('cemail')) && campo_validado && campo_valor != ''){
 campo_valor = campo_valor.replace(/ /g, '');
 campo.val(campo_valor);
 var filtro = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 if(campo.hasClass('email_multiplo')){
 var emails = campo_valor.split(',');
 for (var i = 0;i < emails.length;i++){
 if(!filtro.test(emails[i])){
 campo_validado = false;
 campo_auxiliar.html('Informe um endereço de e-mail válido.');
 break;
}
}
}else{
 if(!filtro.test(campo_valor)){
 campo_validado = false;
 campo_auxiliar.html('Informe um endereço de e-mail válido.');
}
}
}
 if(campo.attr('maxlength') != undefined && campo.hasClass('required_max_length') && campo_validado ){
 var total_caracteres = campo_valor.length, tamanho_maximo = campo.attr('maxlength');
 if(tamanho_maximo < total_caracteres){
 campo_validado = false;
 campo_auxiliar.html("Informe no máximo "+tamanho_maximo+" caracteres.");
}else{campo_validado = true;}
 if (campo_validado){
 campo_auxiliar.html('');
 if(campo_auxiliar.attr('html_original') == "Informe no máximo "+tamanho_maximo+" caracteres."){campo_auxiliar.attr('html_original','');}
}
}
 if((campo.attr('min') != undefined || campo.attr('max') != undefined) && campo.hasClass('required') && campo_validado ){
 campo_valor = parseInt(campo_valor);
 if(campo.attr('min') != undefined && campo.attr('max') != undefined){
 var minimo = parseInt(campo.attr('min')), maximo = parseInt(campo.attr('max'));
 if(campo_valor >= minimo && campo_valor <= maximo){campo_validado = true;}
 else{
 campo_validado = false;
 campo_auxiliar.html("Informe um valor entre "+minimo+" e "+maximo+".");
}
}else if(campo.attr('min') != undefined){
 var minimo = parseInt(campo.attr('min'));
 if(campo_valor >= minimo){campo_validado = true;}
 else{
 campo_validado = false;
 campo_auxiliar.html("Informe um valor maior ou igual a "+minimo+".");
}
}else if(campo.attr('max') != undefined){
 var maximo = parseInt(campo.attr('max'));
 if(campo_valor <= minimo){campo_validado = true;}
 else{
 campo_validado = false;
 campo_auxiliar.html("Informe um valor menor ou igual a "+minimo+".");
}
}
 if (campo_validado){
 campo_auxiliar.html('');
 if(campo_auxiliar.attr('html_original') == "Informe um valor menor ou igual a "+minimo+"." || campo_auxiliar.attr('html_original') == "Informe um valor maior ou igual a "+minimo+"."|| campo_auxiliar.attr('html_original') == "Informe um valor entre "+minimo+" e "+maximo+"."){campo_auxiliar.attr('html_original','');}
}
}
 if (campo.hasClass('required_travar_zero') && (campo_valor == 0 || campo_valor == '') && campo_validado){campo_validado = false;campo_auxiliar.html('Campo obrigatório.');}
 if (campo.hasClass('required_telefone_validar') && campo.hasClass('required') && campo_validado){
 campo_validado = ValidarTelefone(campo_valor);
 if(campo_validado == false){campo_auxiliar.html('Informe um número de telefone válido.');}
 else{campo_auxiliar.html('');}
}
 if (campo.hasClass('required_cpf_validar') && campo.hasClass('required') && campo_validado){
 campo_validado = ValidarCpf(campo_valor);
 if(campo_validado == false){campo_auxiliar.html('Informe um CPF válido.');}
 else{campo_auxiliar.html('');}
}
 if (campo.hasClass('required_cnpj_validar') && campo.hasClass('required') && campo_validado){
 campo_validado = ValidarCnpj(campo_valor);
 if(campo_validado == false){campo_auxiliar.html('Informe um CNPJ válido.');}
 else{campo_auxiliar.html('');}
}
 
 if (campo_validado){
 if (campo_auxiliar.attr('html_original') == 'Campo obrigatório.' || campo_auxiliar.attr('html_original') == 'Link da página informado não é válido.' || campo_auxiliar.attr('html_original') == 'Informe seu domínio no formato do exemplo abaixo.' || campo_auxiliar.attr('html_original') == 'Informe um endereço de e-mail válido.' || campo_auxiliar.attr('html_original') == 'Cartão informado está expirado.' || campo_auxiliar.attr('html_original') == 'Informe um número de telefone válido.' || campo_auxiliar.attr('html_original') == 'Informe um CPF válido.' || campo_auxiliar.attr('html_original') == 'Informe um CNPJ válido.' || campo_auxiliar.attr('html_original') == 'Bandeiras aceitas Visa, MasterCard, Elo e Diners' || campo_auxiliar.attr('html_original') == 'Número do cartão inválido' || campo_auxiliar.attr('html_original') == 'Informe um número de cartão' || campo_auxiliar.attr('html_original') == 'Senha informada não confere com a utilizada.' || campo_auxiliar.attr('html_original') == 'Link de acesso em uso, tente outro.' || campo_auxiliar.attr('html_original') == 'Já cadastrado' || campo_auxiliar.attr('html_original') == 'Informe seu domínio no formato do exemplo abaixo.' || campo_auxiliar.attr('html_original') == 'Subdomínio informado já foi cadastrado.'){campo_auxiliar.attr({'html_original':''});}
 if (campo_area.hasClass('admin_campos-error')){campo_area.removeClass('admin_campos-error');}
 if (campo_auxiliar.attr('html_original') != undefined && campo_auxiliar.attr('html_original') != ''){campo_auxiliar.html(campo_auxiliar.attr('html_original'));bindEvents();}
 else{campo_auxiliar.html('');}
 return true;
}else{
 if (!campo_area.hasClass('admin_campos-error')){campo_area.addClass('admin_campos-error');}
 return false;
}
}else{
 var campo_validado = true;
 var campo_valor = '';
 if($(campo).hasClass('gpc_campos-check') || $(campo).hasClass('gpc_campos-radio') || $(campo).hasClass('gpc_campos-consentimento_lgpd')){
 if(campo.find('.gpc_campos-erro').length == 0){campo.append('<div class="gpc_campos-erro icone_bold-aviso gtt-esquerda" data-gtt=""></div>');bindEvents();}
 var campo_auxiliar = campo.find('.gpc_campos-erro');
 $(campo).find('input').each(function(campo_atual){if($(this).prop('checked')){campo_valor = $(this).val();}});
}else{
 if(campo.closest('.gpc_campos-campo').find('.gpc_campos-erro').length == 0){campo.after('<div class="gpc_campos-erro icone_bold-aviso gtt-esquerda" data-gtt=""></div>');bindEvents();}
 var campo_auxiliar = campo.closest('.gpc_campos').find('.gpc_campos-erro');
 campo_valor = campo.val();
 if($(campo).closest('.gpc_campos').hasClass('gpc_campos-select')){let opcoes = $(campo).find('option');for (var i = 0;i < opcoes.length;i++){if(campo_valor == opcoes[i].value && opcoes[i].disabled){campo_valor = '';}}}
}
 if(campo_valor == null){campo_valor = '';}
 var campo_area = campo.closest('.gpc_campos');
 if(campo_valor && !$(campo).hasClass('gpc_campos-check') && !$(campo).hasClass('gpc_campos-radio') && !$(campo).hasClass('gpc_campos-consentimento_lgpd') && !$(campo).hasClass('gpc_campos-select')){
 if(campo_valor.substr(0,1) == ' '){
 campo.val(campo_valor.substr(1));
 campo_valor = campo_valor.substr(1);
}
 if(campo_valor.substr(-1) == ' '){
 campo.val(campo_valor.substr(0,(campo_valor.length-1)));
 campo_valor = campo_valor.substr(0,(campo_valor.length-1));
}
}
 
 if ((campo_auxiliar.attr('data-gtt') == '' || campo_auxiliar.attr('data-gtt') == undefined) && campo_auxiliar.html() != ''){campo_auxiliar.attr('data-gtt','');}
 
 if($(campo).hasClass('gpc_campos-check') || $(campo).hasClass('gpc_campos-radio') || $(campo).hasClass('gpc_campos-consentimento_lgpd')){
 if (campo.find('em').length && campo_valor == ''){
 campo_validado = false;
 if (campo_auxiliar.attr('data-gtt') != 'Campo obrigatório.' && campo_auxiliar.attr('data-gtt') != '' && campo_auxiliar.attr('data-gtt') != undefined){campo_auxiliar.attr({'data-gtt':''});}
 campo_auxiliar.attr({'data-gtt':'Campo obrigatório.'});
}else{if (campo_auxiliar.attr('data-gtt') == 'Campo obrigatório.'){campo_auxiliar.attr({'data-gtt':''});}}
}else{
 if (campo.hasClass('obrigatorio') && campo_valor == ''){
 campo_validado = false;
 if (campo_auxiliar.attr('data-gtt') != 'Campo obrigatório.' && campo_auxiliar.attr('data-gtt') != '' && campo_auxiliar.attr('data-gtt') != undefined){campo_auxiliar.attr({'data-gtt':''});}
 campo_auxiliar.attr({'data-gtt':'Campo obrigatório.'});
}else{if (campo_auxiliar.attr('data-gtt') == 'Campo obrigatório.'){campo_auxiliar.attr({'data-gtt':''});}}
 if ((campo.hasClass('email') || campo.hasClass('email_multiplo') || campo.hasClass('cemail')) && campo_validado && campo_valor != ''){
 campo_valor = campo_valor.replace(/ /g, '');
 campo.val(campo_valor);
 var filtro = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 if(campo.hasClass('email_multiplo')){
 var emails = campo_valor.split(',');
 for (var i = 0;i < emails.length;i++){
 if(!filtro.test(emails[i])){
 campo_validado = false;
 campo_auxiliar.attr({'data-gtt':'Informe um endereço de e-mail válido.'});
 break;
 }
}
}else{
 if(!filtro.test(campo_valor)){
 campo_validado = false;
 campo_auxiliar.attr({'data-gtt':'Informe um endereço de e-mail válido.'});
}
}
}
 if(campo.attr('maxlength') != undefined && campo.hasClass('required_max_length') && campo_validado ){
 var total_caracteres = campo_valor.length, tamanho_maximo = campo.attr('maxlength');
 if(tamanho_maximo < total_caracteres){
 campo_validado = false;
 campo_auxiliar.attr({'data-gtt':"Informe no máximo "+tamanho_maximo+" caracteres."});
}else{campo_validado = true;}
}
 if((campo.attr('min') != undefined || campo.attr('max') != undefined) && campo.hasClass('required') && campo_validado ){
 campo_valor = parseInt(campo_valor);
 if(campo.attr('min') != undefined && campo.attr('max') != undefined){
 var minimo = parseInt(campo.attr('min')), maximo = parseInt(campo.attr('max'));
 if(campo_valor >= minimo && campo_valor <= maximo){campo_validado = true;}
 else{
 campo_validado = false;
 campo_auxiliar.attr({'data-gtt':"Informe um valor entre "+minimo+" e "+maximo+"."});
}
}else if(campo.attr('min') != undefined){
 var minimo = parseInt(campo.attr('min'));
 if(campo_valor >= minimo){campo_validado = true;}
 else{
 campo_validado = false;
 campo_auxiliar.attr({'data-gtt':"Informe um valor maior ou igual a "+minimo+"."});
}
}else if(campo.attr('max') != undefined){
 var maximo = parseInt(campo.attr('max'));
 if(campo_valor <= minimo){campo_validado = true;}
 else{
 campo_validado = false;
 campo_auxiliar.attr({'data-gtt':"Informe um valor menor ou igual a "+minimo+"."});
}
}
}
 if (campo.hasClass('required_travar_zero') && (campo_valor == 0 || campo_valor == '') && campo_validado){
 campo_validado = false;
 campo_auxiliar.attr({'data-gtt':'Campo obrigatório.'});
}
 if (campo.hasClass('telefone') && (campo.hasClass('obrigatorio') || campo_valor != '') && campo_validado){
 campo_validado = ValidarTelefone(campo_valor);
 if(campo_validado == false){campo_auxiliar.attr({'data-gtt':'Informe um número de telefone válido.'});}
 else{campo_auxiliar.attr({'data-gtt':''});}
}
 if (campo.hasClass('required_cpf_validar') && campo.hasClass('required') && campo_validado){
 campo_validado = ValidarCpf(campo_valor);
 if(campo_validado == false){campo_auxiliar.attr({'data-gtt':'Informe um CPF válido.'});}
 else{campo_auxiliar.attr({'data-gtt':''});}
}
 if (campo.hasClass('required_cnpj_validar') && campo.hasClass('required') && campo_validado){
 campo_validado = ValidarCnpj(campo_valor);
 if(campo_validado == false){campo_auxiliar.attr({'data-gtt':'Informe um CNPJ válido.'});}
 else{campo_auxiliar.attr({'data-gtt':''});}
}
}
 
 if (campo_validado){
 if (
 campo_auxiliar.attr('data-gtt') == 'Campo obrigatório.' ||
 campo_auxiliar.attr('data-gtt') == 'Informe um endereço de e-mail válido.' ||
 campo_auxiliar.attr('data-gtt') == 'Informe um número de telefone válido.' ||
 campo_auxiliar.attr('data-gtt') == 'Informe um CPF válido.' ||
 campo_auxiliar.attr('data-gtt') == 'Informe um CNPJ válido.' ||
 campo_auxiliar.attr('data-gtt') == 'Já cadastrado'
 ){campo_auxiliar.attr({'data-gtt':''});}
 if (campo_area.hasClass('gpc_campos-error')){campo_area.removeClass('gpc_campos-error');}
 campo_auxiliar.attr({'data-gtt':''});
 return true;
}else{
 if (!campo_area.hasClass('gpc_campos-error')){campo_area.addClass('gpc_campos-error');}
 return false;
}
}
}
 function ValidarTelefone(campo_valor){
 if(campo_valor.substr(0,1) == '+'){campo_valor = campo_valor.substr((campo_valor.indexOf(' ')+1),campo_valor.length);}
 var valor_usar = campo_valor.replace("(","").replace(")", "").replace("-", "").replace(" ", "").replace("_", "").trim();
 var ddd = parseInt(valor_usar.substr(0,2));
 var telefone = valor_usar.substr(2,valor_usar.length);
 
 // if(telefone.replace(/9/g,'') == '' || telefone.replace(/9/g,'').length <= 4 || telefone.replace(/8/g,'') == '' || telefone.replace(/8/g,'').length <= 4 || telefone.replace(/7/g,'') == '' || telefone.replace(/7/g,'').length <= 4 || telefone.replace(/6/g,'') == '' || telefone.replace(/6/g,'').length <= 4 || telefone.replace(/5/g,'') == '' || telefone.replace(/5/g,'').length <= 4 || telefone.replace(/4/g,'') == '' || telefone.replace(/4/g,'').length <= 4 || telefone.replace(/3/g,'') == '' || telefone.replace(/3/g,'').length <= 4 || telefone.replace(/2/g,'') == '' || telefone.replace(/2/g,'').length <= 4 || telefone.replace(/1/g,'') == '' || telefone.replace(/1/g,'').length <= 4 || telefone.replace(/0/g,'') == '' || telefone.replace(/0/g,'').length <= 4){return false;}
 if(telefone.replace(/9/g,'') == '' || telefone.replace(/8/g,'') == '' || telefone.replace(/7/g,'') == '' || telefone.replace(/6/g,'') == '' || telefone.replace(/5/g,'') == '' || telefone.replace(/4/g,'') == '' || telefone.replace(/3/g,'') == '' || telefone.replace(/2/g,'') == '' || telefone.replace(/1/g,'') == '' || telefone.replace(/0/g,'') == ''){return false;}
 
 if((valor_usar.length < 10 || valor_usar.length > 11)){return false;}
 
 if(ddd <= 10 || ddd == 20 || ddd == 23 || (ddd > 24 && ddd < 27) || (ddd > 28 && ddd < 31) || (ddd > 38 && ddd < 41) || ddd == 50 || (ddd > 55 && ddd < 61) || ddd == 70 || ddd == 72 || ddd == 76 || ddd == 78 || ddd == 80 || ddd > 99){return false;}
 
 return true;
}
 function ValidarCpf(cpf){
 
 cpf = cpf.replace('-', "").replace('.', "").replace('.', "").trim();
 
 var numeros, digitos, soma, i, resultado, digitos_iguais;
 digitos_iguais = 1;
 
 if (cpf.length < 11){return false;}
 
 for (i = 0;i < cpf.length - 1;i++){
 if (cpf.charAt(i) != cpf.charAt(i + 1)){
 digitos_iguais = 0;
 break;
}
}
 if (!digitos_iguais){
 
 numeros = cpf.substring(0,9);
 
 digitos = cpf.substring(9);
 
 soma = 0;
 for (i = 10;i > 1;i--){soma += numeros.charAt(10 - i) * i;}
 resultado = soma % 11 < 2 ? 0 :11 - soma % 11;
 
 if (resultado != digitos.charAt(0)){return false;}
 numeros = cpf.substring(0,10);
 soma = 0;
 for (i = 11;i > 1;i--){soma += numeros.charAt(11 - i) * i;}
 resultado = soma % 11 < 2 ? 0 :11 - soma % 11;
 if (resultado != digitos.charAt(1)){return false;}
 return true;
}else{return false;}
}
 function ValidarCnpj(cnpj){
 
 cnpj = cnpj.replace(/[^\d]+/g,'');
 
 if (cnpj == ''){return false;}
 if (cnpj.length != 14){return false;}
 
 if (cnpj == "00000000000000" || cnpj == "11111111111111" || cnpj == "22222222222222" || cnpj == "33333333333333" || cnpj == "44444444444444" || cnpj == "55555555555555" || cnpj == "66666666666666" || cnpj == "77777777777777" || cnpj == "88888888888888" || cnpj == "99999999999999"){return false;}
 
 tamanho = cnpj.length - 2;
 numeros = cnpj.substring(0,tamanho);
 digitos = cnpj.substring(tamanho);
 soma = 0;
 pos = tamanho - 7;
 for (i = tamanho;i >= 1;i--){
 soma += numeros.charAt(tamanho - i) * pos--;
 if (pos < 2){pos = 9;}
}
 resultado = soma % 11 < 2 ? 0 :11 - soma % 11;
 if (resultado != digitos.charAt(0)){return false;}
 tamanho = tamanho + 1;
 numeros = cnpj.substring(0,tamanho);
 soma = 0;
 pos = tamanho - 7;
 for (i = tamanho;i >= 1;i--){
 soma += numeros.charAt(tamanho - i) * pos--;
 if (pos < 2){pos = 9;}
}
 resultado = soma % 11 < 2 ? 0 :11 - soma % 11;
 if (resultado != digitos.charAt(1)){return false;}
 return true;
}
 window.tempo_tela_obrigado = 1000;
 function EnviarFormulario(elemento){
 GLoading.carregar({'ativar':true});
 
 var formulario_validado = ValidacaoFormularios(elemento);
 
 if (formulario_validado){
 
 var html_aviso = '<div class="aviso_fundo"></div><div class="aviso_texto">Enviando informações...</div>';
 $('body').addClass('body_bloquear').append(html_aviso);
 setTimeout(function(){$('.aviso_fundo, .aviso_texto').addClass('mostrar_aviso');},100);
 
 elemento.find('.gpc_botao').css({'pointer-events':'none'});
 GLoading.carregar({'ativar':false});
 var campos = $(elemento).find('.gpc_campos');
 var elemento_envio = elemento.closest('.'+pagina_controle['classe_elemento']).attr('id');
 if(elemento_envio == undefined || elemento_envio == ''){elemento_envio = elemento.closest('.'+pagina_controle['classe_elemento_antigo']).attr('id');}
 var campos = $(elemento).find('.gpc_campos');
 var total_campos = 0;
 var post ={'campos':{},'elemento':elemento_envio};
 campos.each(function(i){
 var id = $(this).find('.gpc_campo').first().attr('id');
 var titulo = $(this).find('.gpc_campos-titulo label').text();
 if(titulo.substr(0,1) == '*'){titulo = titulo.substr(1);}
 if($(this).hasClass('gpc_campos-check') || $(this).hasClass('gpc_campos-radio') || $(this).hasClass('gpc_campos-consentimento_lgpd')){
 id = $(this).find('input').first().attr('name');
 var valor ={};
 var posicao = 0;
 if($(this).hasClass('gpc_campos-consentimento_lgpd')){
 valor = false;
 $(this).find('input').each(function(x, campo_atual){valor = $(campo_atual).prop('checked');});
}else if($(this).hasClass('gpc_campos-radio')){
 $(this).find('input').each(function(x, campo_atual){if($(campo_atual).prop('checked')){valor = $(this).val().replace(/\*/g, '');}});
}else{
 $(this).find('input').each(function(x, campo_atual){
 if($(campo_atual).prop('checked')){
 valor[posicao] = $(this).val().replace(/\*/g, '');
 posicao++;
 }
});
}
 if($(this).hasClass('gpc_campos-consentimento_lgpd')){post['campos'][i] ={'id':id, 'titulo':titulo, 'valor':valor};}
 else{post['campos'][i] ={'id':id, 'titulo':titulo, 'valor':valor};}
}else{post['campos'][i] ={'id':id, 'titulo':titulo, 'valor':$(this).find('.gpc_campo').val()};}
 total_campos = i;
});
 total_campos +=1;
 post['campos'][total_campos] ={'id':'input_referral_source', 'titulo':'Referral source', 'valor':(document.referrer == "" ? 'Acesso direto' :document.referrer)};
 total_campos +=1;
 post['campos'][total_campos] ={'id':'input_mobile', 'titulo':'Dispositivo', 'valor':(Mobile() ? 'Mobile' :'Desktop')};
 total_campos +=1;
 post['campos'][total_campos] ={'id':'input_uri', 'titulo':'URL', 'valor':window.location.href};
 
 let random = Math.random().toString();
 let IdConversion = 'GPages.'+random.substr(random.length-4)+(new Date()).getTime();
 post['eid'] = IdConversion;
 
 if($('.mostrar_demo').length){
 if($('.gpc_campos').length){
 elemento.find('.gpc_campos').each(function(){
 if(!$(this).hasClass('gpc_campos-hidden')){
 if($(this).hasClass('gpc_campos-check') || $(this).hasClass('gpc_campos-radio') || $(this).hasClass('gpc_campos-consentimento_lgpd')){
 $(this).find('input').each(function(campo_atual){
 if($(this).prop('checked')){$(this).prop({'checked':false});}
});
 }else{$(this).find('.gpc_campo').val('');}
}
});
 $('.aviso_texto').html((elemento.find('.gpc_botao').attr('gpc-mensagem_parabens') != undefined && elemento.find('.gpc_botao').attr('gpc-mensagem_parabens') != '' ? elemento.find('.gpc_botao').attr('gpc-mensagem_parabens') :"Obrigado!!!"));
 setTimeout(function(){
 $('body').removeClass('body_bloquear');
 $('.aviso_fundo, .aviso_texto').removeClass('mostrar_aviso');
 setTimeout(function(){$('.aviso_fundo, .aviso_texto').remove();},100);
 elemento.find('.gpc_botao').css({'pointer-events':''});
},2000);
}
}else{
 
 AdicionarFilaGQA({
 
 'verbo' :'POST',
 'url' :'https://r3-pages-conversions.greatpages.com.br/',
 'uri' :JSON.stringify(post),
 'timeout' :10000,
 'prioridade' :'baixa',
 'carregar' :true,
 'externo' :true,
 'funcao_sucesso' :function(retorno){
 
 if(elementos_botoes_evento.hasOwnProperty(elemento.closest('.gpc-e').attr('id'))){elementos_botoes_evento[elemento.closest('.gpc-e').attr('id')]['conteudo']();}
 setTimeout(function(){
 elemento.find('.gpc_campos').each(function(){
 if(!$(this).hasClass('gpc_campos-hidden')){
 if($(this).hasClass('gpc_campos-check') || $(this).hasClass('gpc_campos-radio') || $(this).hasClass('gpc_campos-consentimento_lgpd')){
 $(this).find('input').each(function(campo_atual){
 if($(this).prop('checked')){$(this).prop({'checked':false});}
 });
}else{$(this).find('.gpc_campo').val('');}
}
 });
},800);
 $('.aviso_texto').html((elemento.find('.gpc_botao').attr('gpc-mensagem_parabens') != undefined && elemento.find('.gpc_botao').attr('gpc-mensagem_parabens') != '' ? elemento.find('.gpc_botao').attr('gpc-mensagem_parabens') :"Obrigado!!!"));
 setTimeout(function(){
 $('body').removeClass('body_bloquear');
 $('.aviso_fundo, .aviso_texto').removeClass('mostrar_aviso');
 setTimeout(function(){$('.aviso_fundo, .aviso_texto').remove();},100);
 if(elemento.find('.gpc_botao').attr('gpc-link') != undefined && elemento.find('.gpc_botao').attr('gpc-link') != ''){
 var link = '', id_elemento = elemento.closest('.gpc-e').attr('id');
 if(elementos_formulario_redirecionamento.hasOwnProperty(id_elemento)){
 for (var i = 0;i < total_campos;i++){
 let id = post['campos'][i].id;
 
 if(elementos_formulario_redirecionamento[id_elemento]['conteudo'][id] != undefined){
 link += elementos_formulario_redirecionamento[id_elemento]['conteudo'][id]+'='+encodeURI(post['campos'][i].valor)+'&';
}
 }
 if(link){link = link.substr(0,(link.length-1));}
}
 setTimeout(function(){
 if(link){link = (elemento.find('.gpc_botao').attr('gpc-link').indexOf('?') === -1 ? '?' :'&')+link;}
 GLoading.carregar({'ativar':false});
 if(elemento.find('.gpc_botao').attr('gpc-link').substr(0,7) == 'http://' || elemento.find('.gpc_botao').attr('gpc-link').substr(0,8) == 'https://' || elemento.find('.gpc_botao').attr('gpc-link').substr(0,6) == 'sms://' || elemento.find('.gpc_botao').attr('gpc-link').substr(0,6) == 'ftp://' || elemento.find('.gpc_botao').attr('gpc-link').substr(0,6) == 'tel://' || elemento.find('.gpc_botao').attr('gpc-link').substr(0,7) == 'mailto:'){window.location.href = elemento.find('.gpc_botao').attr('gpc-link')+link;}
 else{window.location.href = 'https://'+elemento.find('.gpc_botao').attr('gpc-link')+link;}
},150);
 }
 elemento.find('.gpc_botao').css({'pointer-events':''});
},tempo_tela_obrigado);
},
 'funcao_erro' :function(retorno){
 if($('.aviso_fundo').length){
 var html_aviso = 'Não foi possivel fazer seu cadastro, tente novamente.';
 $('.aviso_texto').html(html_aviso);
}else{
 var html_aviso = '<div class="aviso_fundo"></div><div class="aviso_texto">Não foi possivel fazer seu cadastro, tente novamente.</div>';
 $('body').addClass('body_bloquear').append(html_aviso);
 setTimeout(function(){$('.aviso_fundo, .aviso_texto').addClass('mostrar_aviso');},100);
}
 setTimeout(function(){
 $('body').removeClass('body_bloquear');
 $('.aviso_fundo, .aviso_texto').removeClass('mostrar_aviso');
 setTimeout(function(){$('.aviso_fundo, .aviso_texto').remove();},100);
 elemento.find('.gpc_botao').css({'pointer-events':''});
},4000);
}
});
}
 return true;
}else{
 
 GLoading.carregar({'ativar':false});
 window.scroll({top:0, behavior:"smooth"});
 return false;
}
}
 $(function(){
 $("body").on('submit', 'form', function(e){
 
 var elemento = $(this).closest('.e_formulario');
 if ($(elemento).length){
 e.preventDefault();
 e.stopPropagation();
 return EnviarFormulario(elemento);
}
});
 $('body').on('click','.gpc_campos-campo-opcao',function(e){
 if($(e.target).prop('nodeName') != 'A'){
 e.preventDefault();
 e.stopPropagation();
 if($(this).find('input').first().prop('checked')){$(this).find('input').first().prop('checked',false);}
 else{$(this).find('input').first().prop('checked',true);}
 ValidacaoCampos($(this).closest('.gpc_campos'));
}
});
 $('body').on('click','.gpc_campos-erro',function(e){
 e.preventDefault();
 e.stopPropagation();
 if($(this).closest('.gpc_campos').hasClass('gpc_campos-check') || $(this).closest('.gpc_campos').hasClass('gpc_campos-radio') || $(this).closest('.gpc_campos').hasClass('gpc_campos-consentimento_lgpd')){$(this).closest('.gpc_campos-campo').find('input').first().trigger('click');}
 else if($(this).closest('.gpc_campos').hasClass('gpc_campos-select')){$(this).closest('.gpc_campos-campo').find('select').trigger('click');}
 else{$(this).closest('.gpc_campos-campo').find('.gpc_campo').trigger('focus');}
});
 $('body').on('click','.gpc_botao',function(e){
 
 GLoading.carregar({'ativar':true});
 var formulario_validado = ValidacaoFormularios($(this).closest('form'));
 if(formulario_validado == false){
 e.preventDefault();
 e.stopPropagation();
}else{
 if(typeof jQuery != 'undefined'){
 var elemento = $(this).parents('.e_formulario');
 if ($(elemento).hasClass('e_formulario') || $(elemento).hasClass('elemento_formulario')){return EnviarFormulario(elemento);}
}else{$(this).closest('form').trigger('submit');}
}
});
 $('body').on('focusout','.gpc_campo',function(e){
 
 e.preventDefault();
 e.stopPropagation();
 GLoading.carregar({'ativar':true});
 var passo_validado = true;
 if (!ValidacaoCampos($(this))){passo_validado = false;}
 if (passo_validado){return true;}
 else{return false;}
});
 $("body").on('focusin','.admin_campo',function(evento){
 if ($(this).attr('type') != 'hidden'){
 if ($(this).hasClass('readonly') && this.hasAttribute('readonly')){
 if($(this).hasClass('data_calendario') || $(this).hasClass('data_calendario2') || $(this).hasClass('data_calendario3') || $(this).hasClass('data_calendario4') || $(this).hasClass('data_calendario4') || $(this).attr('id') == '#data_vencimento' || $(this).attr('id') == '#data_pagamento' || $(this).attr('id') == '#pagamento_data_inicio' || $(this).attr('id') == '#data_prazo' || $(this).attr('id') == '#data_de' || $(this).attr('id') == '#data_ate' || $(this).attr('id') == '#data_inicio'){$(this).removeClass('readonly').closest('.admin_campos').addClass('admin_campos-focus');}
 else{$(this).removeAttr('readonly').removeClass('readonly').closest('.admin_campos').addClass('admin_campos-focus');}
}else{$(this).closest('.admin_campos').addClass('admin_campos-focus');}
}
}).on('focusout','.admin_campo', function (evento){
 if ($(this).attr('type') != 'hidden'){
 if ($(this).hasClass('readonly') && this.hasAttribute('readonly')){$(this).removeAttr('readonly');}
 else{
 var caixa = $(this).closest('.admin_campos');
 caixa.removeClass('admin_campos-focus');
 if ($(this).val()){if (!caixa.hasClass('admin_campos-valor')){caixa.addClass('admin_campos-valor');}}
 else{if (caixa.hasClass('admin_campos-valor')){caixa.removeClass('admin_campos-valor');}}
 ValidacaoCampos($(this));
}
}
});
});
 
 
 
 function bindEvents(){
 var caixa = $('gmf').last().attr('id');
 if(caixa != undefined){caixa = '#'+caixa+' ';}else{caixa = '';}
 
 GFM.instalar({'elemento' :'.telefone', 'mascara' :'(00) 0000-00009', 'placeholder' :'(__) ____-_____'});
 GFM.instalar({'elemento' :'#celular', 'mascara' :'(00) 0000-00009', 'placeholder' :'(__) ____-_____'});
 GFM.instalar({'elemento' :'input.cnpj', 'mascara' :'00.000.000/0000-00', 'placeholder' :'__.___.___/____-__'});
 GFM.instalar({'elemento' :'input.cpf', 'mascara' :'000.000.000-00', 'placeholder' :'___.___.___-__'});
 GFM.instalar({'elemento' :'input.hora', 'mascara' :'00:00', 'placeholder' :'__:__'});
 GFM.instalar({'elemento' :'input.data', 'mascara' :'00/00/0000', 'placeholder' :'__/__/____'});
 GFM.instalar({'elemento' :'input.datahora', 'mascara' :'00/00/0000 00:00', 'placeholder' :'__/__/____ __:__'});
 
 GTooltip.instalar({'elemento' :'.gtt-direita', 'direcao' :'direita'});
 GTooltip.instalar({'elemento' :'.gtt-esquerda', 'direcao' :'esquerda'});
 GTooltip.instalar({'elemento' :'.gtt-cima', 'direcao' :'cima'});
 GTooltip.instalar({'elemento' :'.gtt-baixo', 'direcao' :'baixo'});
 GTooltip.instalar({'elemento' :'.balao_direita', 'direcao' :'direita'});
 GTooltip.instalar({'elemento' :'.balao_esquerda', 'direcao' :'esquerda'});
 GTooltip.instalar({'elemento' :'.balao_cima', 'direcao' :'cima'});
 GTooltip.instalar({'elemento' :'.balao_baixo', 'direcao' :'baixo'});
}
 function Mobile(){
 if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){return true;}
 return false;
}
 window.smoothScrollTo = function (endX, endY, duration){
 let startX = window.scrollX || window.pageXOffset,
 startY = window.scrollY || window.pageYOffset,
 distanceX = endX - startX,
 distanceY = endY - startY,
 startTime = new Date().getTime();
 let easeInOutQuart = function (time, from, distance, duration){
 if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
 return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
};
 let timer = window.setInterval(function (){
 let time = new Date().getTime() - startTime,
 newX = easeInOutQuart(time, startX, distanceX, duration),
 newY = easeInOutQuart(time, startY, distanceY, duration);
 if (time >= duration){
 window.clearInterval(timer);
}
 window.scrollTo(newX, newY);
}, 1000 / 60);
};
 $(function(){
 
 GLoading.carregar({'ativar':false});
 
 $('body').removeClass('preload');
 
 bindEvents();
 
 $('.mensagem_fechar').on('click',function(evento){$('.mensagens').removeAttr('style');});
 
 $(document).on('keydown', function(e){
 var tecla = (e.keyCode?e.keyCode:e.which);
 if($('.gm').length){
 var caixa = $('.gm').last().attr('id');
 var caixa_andamento = $('#'+caixa).find('.gmf-andamento');
 if((e.ctrlKey && tecla == 83)){
 e.preventDefault();
 e.stopPropagation();
 if (caixa_andamento.length){
 if (caixa_andamento.attr('caixa_passos_controle') == (caixa_andamento.attr('caixa_passos_quantidade')-1)){$('#'+caixa+' #enviar_formulario_ajax').trigger('click');}
 else{PassosGMF(caixa, 'proximo');}
}else{$('#'+caixa+' #enviar_formulario_ajax').trigger('click');}
 return false;
}else if(tecla == 27){
 e.preventDefault();
 e.stopPropagation();
 if ($('#'+caixa).attr('gm_componente') == 'gsp'){FecharGSP(caixa);}
 else if($('#'+caixa).attr('gm_componente') == 'gmf'){$('#'+caixa+' .gmf-topo-fechar').click();}
 else if($('#'+caixa).attr('gm_componente') == 'guo' || $('#'+caixa).attr('gm_componente') == 'gd'){PulsarGM($('#'+caixa).attr('id'));}
 else if ($('#'+caixa).attr('gm_componente') == 'gmi'){
 
 gmi_caixa['elemento'] = '';
 gmi_caixa_imagem['elemento'] = '';
 gmi_fundo['elemento'] = '';
 
 FecharGM(caixa);
}else{FecharGM(caixa);}
 return false;
}
}else{
 if((e.ctrlKey && tecla == 83)){
 e.preventDefault();
 e.stopPropagation();
 if($('#editar_formulario').length){$('#editar_formulario').trigger('click');}
 else if($('#enviar_formulario').length){$('#enviar_formulario').trigger('click');}
 else if($('.admin_botao-login').length){$('.admin_botao-login').trigger('click');}
 else if($('.admin_botao-esqueci_minha_senha').length){$('.admin_botao-esqueci_minha_senha').trigger('click');}
 return false;
}
}
 if((e.ctrlKey && tecla == 85) || tecla == 123){
 e.preventDefault();
 e.stopPropagation();
 return false;
}
});
 
 $('body').on('click','.botao_evento',function(e){
 
 e.preventDefault();
 e.stopPropagation();
 elementos_botoes_evento[$(this).parent().attr('id')]['conteudo']();
 // if($(this).hasClass('link_externo')){Links($(this),'externo');}
 // else if($(this).hasClass('link_interno')){Links($(this),'interno');}
 // else if($(this).hasClass('link_popup')){Links($(this),'popup');}
 return false;
});
 
 $('body').on('click','.link_popup',function(e){
 e.preventDefault();
 e.stopPropagation();
 if($(this).closest('.'+pagina_controle['classe_elemento'])){var elemento = $(this).closest('.'+pagina_controle['classe_elemento']);}
 else{var elemento = $(this).closest('.'+pagina_controle['classe_elemento_antigo']);}
 Links(elemento,'popup');
 
 return false;
});
 $('body').on('click','.gpc_modal_popup-topo-fechar, .gpc_modal_popup-fundo-fechar',function(e){FecharGM($('.gpc_modal').last().attr('id'));});
 
 $('body').on('click','.link_interno',function(e){
 e.preventDefault();
 e.stopPropagation();
 if($(this).closest('.'+pagina_controle['classe_elemento'])){var elemento = $(this).closest('.'+pagina_controle['classe_elemento']);}
 else{var elemento = $(this).closest('.'+pagina_controle['classe_elemento_antigo']);}
 Links($(this),'interno');
 return false;
});
 
 $('body').on('click','.link_externo',function(e){
 e.preventDefault();
 e.stopPropagation();
 if($(this).closest('.'+pagina_controle['classe_elemento'])){var elemento = $(this).closest('.'+pagina_controle['classe_elemento']);}
 else{var elemento = $(this).closest('.'+pagina_controle['classe_elemento_antigo']);}
 Links($(this),'externo');
 return false;
});
 
 function Links(botao,tipo){
 if(tipo == undefined){tipo = '';}
 if(tipo == 'externo'){
 setTimeout(function(){
 var link = $(botao).attr('href');
 if(link.indexOf('https://') == -1 && link.indexOf('http://') == -1 && link.indexOf('tel:') == -1 && link.indexOf('mailto:') == -1 && link.indexOf('sms:') == -1 && link){link = 'https://'+link;}
 if($(botao).attr('target') != undefined && $(botao).attr('target') == '_blank'){var tab = window.open(link,'_blank');}
 else{var tab = window.open(link,'_self');}
 tab = null;
},200);
}else if(tipo == 'interno'){
 var link = $(botao);
 if(link.attr('data-bloco-mobile') !== undefined && $(window).width() < 720){
 var bloco = link.attr('data-bloco-mobile');
 if(!$((bloco.substr(0,1) == '#' ? bloco :'#'+bloco)).length){bloco = link.attr('data-bloco');}
}else{var bloco = link.attr('data-bloco');}
 if(bloco != undefined){
 if($((bloco.substr(0,1) == '#' ? bloco :'#'+bloco)).length){
 var offset = $((bloco.substr(0,1) == '#' ? bloco :'#'+bloco)).offset();
 if ('scrollBehavior' in document.documentElement.style){window.scroll({top:(offset.top-60), behavior:"smooth"});}
 else{smoothScrollTo(0, (offset.top-60), 600);}
}
}
}else if(tipo == 'popup'){
 var elemento = $(botao);
 
 var conteudo = elementos_popup[elemento.attr('id')]['conteudo'];
 if(conteudo == undefined || conteudo == ''){conteudo = '<div></div>';}
 
 gm_quantidade++;
 
 var configuracao ={
 'gm' :{
 'conteudos' :{
 'topo' :{
 'conteudo' :"<div class='gpc_modal_popup-topo-fechar icone-fechar'></div>",
 'estilos' :'',
 'extras' :''
 },
 'centro' :{
 'conteudo' :conteudo,
 'estilos' :'',
 'extras' :''
 },
 'rodape' :{
 'conteudo' :'<div></div>',
 'estilos' :'',
 'extras' :''
 }
},
 'classes' :'gpc_modal',
 'estilos' :elementos_popup[elemento.attr('id')]['estilos'][($(window).width() > 960 ? 'desktop' :'mobile')],
 'extras' :'gpc_id_elemento="'+elemento.attr('id')+'"'
},
 'gm_fundo' :{
 'conteudos' :{'topo' :{'conteudo' :"<div class='gpc_modal_popup-fundo-fechar icone-fechar'></div>"}},
 'classes' :'gpc_modal-fundo',
 'estilos' :'overflow:hidden;',
 'extras' :'gm_fundo_acao="fechar"'
}
};
 
 AbrirGM('gpc_modal_'+gm_quantidade, 'gpc_modal_popup',configuracao);
 
 setTimeout(function(){
 GreatLoader('atualizar');
 GreatFontes(true);
 bindEvents();
},400);
}
}
 
 if(!window.getCrawler()){
 GModalApproval.instalar({
 'barra':{
 'cor':'ffffff',
 'classe':'',
 'texto':'Usamos cookies para personalizar conteúdos e melhorar a sua experiência.',
 'botao_configurar':false,
 'botao_aceitar':'Ok, entendi',
 'fechar':false,
 'editar_consentimento':false
},
 'opcoes':[
{
 'titulo':'Cookies obrigatórios',
 'texto':'Eles são cookies para garantir o funcionamento adequado do site.',
 'aviso':'Sempre ativo',
 'id':'o'
}
 ],
 'dominio':'.pages.app.br',
 'editado':(GModalApproval.preferencias() ? true :false)
});
}
});
 
 'use strict';

var carregando = false;

var GLoading = function(){
 return{
 instalar :function(){
 
 var gl = document.querySelector('#gloading');
 if (gl == null || gl == undefined){
 var gl_loading = document.createElement("div");
 gl_loading.id = 'gloading';
 gl_loading.className = 'gloading_esconder';
 gl_loading.innerHTML = '<span></span>';
 document.body.appendChild(gl_loading);
}
},
 carregar :function(configuracao){
 
 if (configuracao.hasOwnProperty('ativar') == false){configuracao.ativar = false;}
 if (configuracao.ativar != true && configuracao.ativar != false){configuracao.ativar = false;}
 if (configuracao.hasOwnProperty('tempo') == false){configuracao.tempo = 0;}
 if (configuracao.hasOwnProperty('tipo') == false){configuracao.tipo = 'barra';}
 if (configuracao.tipo != 'barra' && configuracao.tipo != 'tela'){configuracao.tipo = 'barra';}
 
 var gl = document.querySelector('#gloading');
 
 if (gl != null && gl != undefined){
 
 if (configuracao.ativar == true){GLoading.carregar_mostrar(gl, configuracao);}
 
 if (configuracao.ativar == false || configuracao.tempo != 0){GLoading.carregar_esconder(gl, configuracao);}
}
},
 carregar_mostrar :function(gl, configuracao){
 
 carregando = true;
 
 gl.classList.add('gloading_'+configuracao.tipo+'_carregando');
},
 carregar_esconder :function(gl, configuracao){
 (function(gl, configuracao){
 if(configuracao.tempo > 0){
 setTimeout(function(){
 
 if (gl.classList.contains('gloading_tela_carregando')){gl.classList.remove('gloading_tela_carregando');}
 if (gl.classList.contains('gloading_barra_carregando')){gl.classList.remove('gloading_barra_carregando');}
 
 carregando = false;
}, configuracao.tempo);
}else{
 
 if (gl.classList.contains('gloading_tela_carregando')){gl.classList.remove('gloading_tela_carregando');}
 if (gl.classList.contains('gloading_barra_carregando')){gl.classList.remove('gloading_barra_carregando');}
 
 carregando = false;
}
})(gl, configuracao);
}
};
}();




 $(function(){
 $('body').on('click', '.check .check-borda, .check .check-texto',function(evento){
 
 var check = $(this).closest('.check');
 var check_borda = check.find('.check-borda');
 var campo = check.closest('.admin_campos-campo').find('.admin_campo');
 
 if (!check.hasClass('check_selecionado')){
 
 check.addClass('check_selecionado');
 check_borda.addClass('check-borda_efeito').html("<span class='check-borda-bolinha'></span>");
}else{
 
 check.removeClass('check_selecionado');
 check_borda.html("");
}
 var valores = '', opcoes = check.closest('.checks').find('.check_selecionado');
 if(opcoes.length){
 opcoes.each(function(){valores += $(this).attr('id')+',';});
 valores = valores.substr(0,(valores.length-1));
}
 campo.val(valores).trigger('change');
 ValidacaoCampos(campo);
 setTimeout(function(){check_borda.removeClass('check-borda_efeito');},200);
});
});
'use strict';
var GFM = function(){
 return{
 instalar :function(configuracao){
 
 if (configuracao.hasOwnProperty('elemento') == false){configuracao.elemento = '';}
 if (configuracao.hasOwnProperty('mascara') == false){configuracao.mascara = '';}
 if (configuracao.hasOwnProperty('placeholder') == false){configuracao.placeholder = '';}
 
 var elementos = document.querySelectorAll(configuracao.elemento);
 
 for (var i = 0;i < elementos.length;i++){
 (function(configuracao, elemento){
 
 if (elemento !== undefined && elemento !== null){
 
 if (elemento.dataset.gfm_mascara !== undefined && elemento.dataset.gfm_mascara !== null){configuracao.mascara = elemento.dataset.gfm_mascara;}
 if (elemento.dataset.gfm_placeholder !== undefined && elemento.dataset.gfm_placeholder !== null){configuracao.placeholder = elemento.dataset.gfm_placeholder;}
 
 if (elemento.addEventListener){
 elemento.addEventListener("focusin", function (evento){GFM.campo_focusin(configuracao, elemento, evento);});
 elemento.addEventListener("focusout", function (evento){GFM.campo_focusout(configuracao, elemento, evento);});
 elemento.addEventListener('input', function (evento){GFM.campo_digitar(configuracao, elemento, evento);});
}else if (elemento.attachEvent){
 elemento.attachEvent("onfocusin", function (evento){GFM.campo_focusin(configuracao, elemento, evento);});
 elemento.attachEvent("onfocusout", function (evento){GFM.campo_focusout(configuracao, elemento, evento);});
 elemento.attachEvent('oninput', function (evento){GFM.campo_digitar(configuracao, elemento, evento);});
}
}
})(configuracao, elementos[i]);
}
},
 campo_focusin :function(configuracao, elemento, evento){
 
 if (elemento.placeholder){elemento.dataset.gfm_placeholder_anterior = elemento.placeholder;}
 else{elemento.dataset.gfm_placeholder_anterior = ' ';}
 if (configuracao.placeholder){elemento.placeholder = configuracao.placeholder;}
 
 elemento.maxLength = configuracao.mascara.length;
},
 campo_focusout :function(configuracao, elemento, evento){
 
 if (elemento.value.length < configuracao.mascara.replace('9','').replace('Z','').replace('D','').replace('?','').length){elemento.value = '';}
 
 if (elemento.dataset.gfm_placeholder_anterior){elemento.placeholder = elemento.dataset.gfm_placeholder_anterior;}
},
 campo_digitar :function(configuracao, elemento, evento){
 if (evento.data != null){
 
 var tecla = evento.data;
 
 var tecla_codigo = tecla.charCodeAt(0);
 
 
 if (tecla_codigo !== 8 && tecla_codigo !== 46 && tecla_codigo !== 16 && tecla_codigo !== 17 && tecla_codigo !== 18){
 
 if (tecla_codigo !== 37 && tecla_codigo !== 38 && tecla_codigo !== 39 && tecla_codigo !== 40){
 
 evento.preventDefault();
 evento.stopPropagation();
 
 var texto = elemento.value;
 
 var posicionar_cursor = false;
 
 if (typeof elemento.selectionStart == "number" && typeof elemento.selectionEnd == "number"){
 var selecao_inicio = elemento.selectionStart;
 var selecao_fim = elemento.selectionEnd;
 if (selecao_inicio != selecao_fim || elemento.value.length != selecao_fim){
 
 
 
 
 posicionar_cursor = true;
 
}
}
 
 var texto_tamanho = texto.length;
 var texto_novo = '';
 var caractere = '';
 
 for (var numero_mascara = 0, numero_texto = 0;numero_mascara < configuracao.mascara.length;++numero_mascara){
 
 caractere = texto.charAt(numero_texto);
 
 switch (configuracao.mascara.charAt(numero_mascara)){
 case '0' :
 case '9' :
 if (/\d/.test(caractere)){texto_novo += caractere;}
 ++numero_texto;
 break;
 case 'A' :
 case 'Z' :
 if (/[a-z]/i.test(caractere)){texto_novo += caractere;}
 ++numero_texto;
 break;
 case 'C' :
 case 'D' :
 if (/[a-z0-9]/i.test(caractere)){texto_novo += caractere;}
 ++numero_texto;
 break;
 case 'X' :
 case '?' :
 texto_novo += caractere;
 ++numero_texto;
 break;
 default :
 texto_novo += configuracao.mascara.charAt(numero_mascara);
 if (configuracao.mascara.charAt(numero_mascara) == texto.charAt(numero_mascara)){
 ++numero_texto;
}else{if (posicionar_cursor && numero_texto+1 == selecao_inicio){++selecao_inicio;}}
 break;
}
 
 if (numero_texto == texto_tamanho){break;}
}
 
 elemento.value = texto_novo;
 
 if (posicionar_cursor && elemento.setSelectionRange){elemento.setSelectionRange(selecao_inicio, selecao_inicio);}
}
}
}
}
};
}();


 
 var gm_quantidade = 0;
 function AbrirGM(id_gm, componente, configuracao){
 
 var z_index_fundo = 999, z_index_caixa = 1000;
 if($('#gpc-menu').length){
 z_index_fundo = 99999902;
 z_index_caixa = 99999903;
}
 var gm_conteudos = '';
 if (configuracao['gm']['conteudos']){$.each(configuracao['gm']['conteudos'], function (classe, div){if (div.conteudo){gm_conteudos += "<div class='"+componente+"-"+classe+"' "+div.extras+" style='"+div.estilos+"'>"+div.conteudo+"</div>";}});}
 var gm_fundo_conteudos = '';
 if (configuracao['gm']['conteudos']){$.each(configuracao['gm_fundo']['conteudos'], function (classe, div){if (div.conteudo){gm_fundo_conteudos += "<div class='"+componente+"_fundo-"+classe+"' "+div.extras+" style='"+div.estilos+"'>"+div.conteudo+"</div>";}});}
 var scroll = window.scrollY;
 var tela_altura = $(window).height();
 if(componente == 'gpc_modal' && $('#gpc-blocos_editor').length){
 scroll = (document.getElementById("gpc-blocos").scrollTop-$('#gpc-blocos').offset().top);
 tela_altura = $('#gpc-blocos_editor').height();
}
 
 if(componente == 'gpc_modal' && $('#gpc-blocos_editor').length){$('#gpc-blocos_editor').append("<div gm_id='"+id_gm+"' gm_componente='"+componente+"' class='gm_fundo "+id_gm+" "+configuracao['gm_fundo']['classes']+"' "+configuracao['gm_fundo']['extras']+" style='z-index:"+(z_index_fundo+gm_quantidade)+";"+configuracao['gm_fundo']['estilos']+"'>"+gm_fundo_conteudos+"</div>");}
 else{$("body").append("<div gm_id='"+id_gm+"' gm_componente='"+componente+"' class='gm_fundo "+id_gm+" "+configuracao['gm_fundo']['classes']+"' "+configuracao['gm_fundo']['extras']+" style='z-index:"+(z_index_fundo+gm_quantidade)+";"+configuracao['gm_fundo']['estilos']+"'>"+gm_fundo_conteudos+"</div>");}
 
 $("."+id_gm).addClass('gm_fundo_ativo');
 if(!$(".gm").length || $('.gpc_modal').lenght){
 
 if(componente == 'gpc_modal' && $('#gpc-blocos_editor').length){$('#gpc-blocos_editor').addClass('body_bloquear');}
 else{
 if(componente == 'gpc_modal_popup'){$("body").addClass('body_bloquear_site');}
 else{
 $("body").addClass('body_bloquear');
 if(componente == 'gpc_modal_imagens'){$("body").css({'overflow':'hidden'});}
}
}
 
 if($('#site').length && componente != 'gma_modal'){$('#site').addClass('site_borrar').css({'top':-scroll+'px','height':($('#site').height()+scroll)+''});}
 else if(componente == 'gpc_modal' && $('#gpc-blocos_editor').length){$('#gpc-blocos_editor-blocos').addClass('administrador_borrar').css({'top':-(scroll)+'px'});}
 else{$('#administrador').addClass('administrador_borrar').css({'top':-scroll+'px'});}
}
 
 if(componente == 'gpc_modal' && $('#gpc-blocos_editor').length){$('#gpc-blocos_editor').append("<div id='"+id_gm+"' gm_componente='"+componente+"' gm_scroll='"+scroll+"' class='gm "+configuracao['gm']['classes']+"' "+configuracao['gm']['extras']+" style='z-index:"+(z_index_caixa+gm_quantidade)+";top:"+tela_altura+"px;"+configuracao['gm']['estilos']+"'>"+gm_conteudos+"</div>");}
 else if(componente == 'gma_modal'){$("body").append("<div id='"+id_gm+"' gm_componente='"+componente+"' gm_scroll='"+scroll+"' class='gm gm_efeitos "+configuracao['gm']['classes']+"' "+configuracao['gm']['extras']+" style='z-index:"+(z_index_caixa+gm_quantidade)+";top:"+((tela_altura/100)*5)+"px;"+configuracao['gm']['estilos']+"'>"+gm_conteudos+"</div>");}
 else if(componente == 'gpc_modal_popup'){$("body").append("<div id='"+id_gm+"' gm_componente='"+componente+"' gm_scroll='"+scroll+"' class='gm gm_esconder "+configuracao['gm']['classes']+"' "+configuracao['gm']['extras']+" style='z-index:"+(z_index_caixa+gm_quantidade)+";top:"+(tela_altura+scroll)+"px;"+configuracao['gm']['estilos']+"'>"+gm_conteudos+"</div>");}
 else{$("body").append("<div id='"+id_gm+"' gm_componente='"+componente+"' gm_scroll='"+scroll+"' class='gm gm_esconder "+configuracao['gm']['classes']+"' "+configuracao['gm']['extras']+" style='z-index:"+(z_index_caixa+gm_quantidade)+";top:"+tela_altura+"px;"+configuracao['gm']['estilos']+"'>"+gm_conteudos+"</div>");}
 
 if(componente == 'gma_modal'){
 setTimeout(function(){
 $('#'+id_gm).css('opacity', '1');
 PosicionarGM(id_gm);
},250);
}else{setTimeout(function(){PosicionarGM(id_gm);},150);}
 
 window.addEventListener('resize', function(event){
 if(componente != 'gpc_modal'){
 if (componente == 'gmi'){PosicionarGM(id_gm, false);}
 else{PosicionarGM(id_gm);}
}
});
}
 function PosicionarGM(id_gm, efeitos){
 
 if(efeitos === undefined || efeitos === ''){efeitos = true;}
 
 var gm = $("#"+id_gm);
 if (gm.length){
 
 var tela_altura = $(window).height();
 var tela_largura = $(window).width();
 var tela = window.scrollY;
 if($('.gm').length > 1){tela = 0;}
 
 if (gm.attr('gm_componente') == 'gpc_modal'){
 tela = document.getElementById("gpc-blocos").scrollTop;
 tela_altura = $('#gpc-blocos_editor').height();
 gm.find('.gpc_modal-centro').removeAttr('style');
 var gm_fundo = $("."+id_gm);
 var height = 20;
 $('.'+gpc_controle['classe_bloco']).each(function(){height += $(this).height();});
 gm_fundo.css({'height':height+'px'});
}
 if (gm.attr('gm_componente') == 'gpc_modal_formulario'){gm.find('.gpc_modal_formulario-centro').removeAttr('style');}
 if (gm.attr('gm_componente') == 'gml'){gm.find('.gml-centro').removeAttr('style');}
 if (gm.attr('gm_componente') == 'gmf'){gm.find('.gmf-centro').removeAttr('style');}
 if (gm.attr('gm_componente') == 'gm_configurar_dns_completo'){gm.find('.gm_configurar_dns_completo-centro').removeAttr('style');}
 if (gm.attr('gm_componente') == 'guo'){gm.find('.guo-passos').removeAttr('style');}
 if (gm.attr('gm_componente') == 'gsp'){gm.find('.gmf-opcoes').removeAttr('style');}
 if (gm.attr('gm_componente') == 'gpc_modal_imagens'){gm.find('.gpc_modal_imagens-centro, .gpc_modal_imagens-centro-pastas, .gpc_modal_imagens-centro-fotos').removeAttr('style');}
 if (gm.attr('gm_componente') == 'gmi'){
 
 var imagem = CalcularGMI(gmi_elemento['elemento']);
 
 if (gmi_caixa['elemento']){
 
 gmi_caixa['elemento'].css({'width':imagem['largura']+'px', 'height':imagem['altura']+'px'});
 
 gmi_caixa_imagem['elemento'].css({'width':imagem['largura']+'px', 'height':imagem['altura']+'px'});
}
}
 if (gm.attr('gm_componente') == 'gmi_informacoes'){gm.find('.gmi_informacoes-centro').removeAttr('style');}
 if (gm.attr('gm_componente') == 'gmi_comentarios'){gm.find('.gmi_comentarios-centro').css('height','100%');}
 
 var gm_largura = gm.width();
 
 var gm_altura = 0;
 if (gm.attr('gm_componente') == 'gpc_modal_imagens' || gm.attr('gm_componente') == 'gml'){gm_altura = tela_altura;
}else if (gm.attr('gm_componente') == 'gpc_modal_popup' || gm.attr('gm_componente') == 'gpc_modal'){
 if(gm.attr('gm_componente') == 'gpc_modal_popup'){tela = 0;}
 gm_altura = $('.gpc_modal').height();
 var gm_fundo = $("."+id_gm);
 var height = 20;
 if (gm.attr('gm_componente') == 'gpc_modal_popup'){
 gm_altura = $('.gpc_modal_popup-centro').height();
 $('.gpc-b').each(function(){height += $(this).height();});
}else{$('.'+gpc_controle['classe_bloco']).each(function(){height += $(this).height();});}
 if (gm_altura >= tela_altura){
 $('#site').css({'height':(gm_altura+Math.abs(parseFloat($('#site').css('top')))+70)+'px'});
 gm_fundo.css({'height':(gm_altura+70)+'px'});
}else{
 $('#site').css({'height':(tela_altura+Math.abs(parseFloat($('#site').css('top'))))+'px'});
 if(gm_altura+20 >= (gm_fundo.height()-10)){gm_fundo.css({'height':(tela_altura+10)+'px'});}
 else{gm_fundo.css({'height':tela_altura+'px'});}
}
}else if (gm.attr('gm_componente') == 'gpc_modal_formulario'){gm_altura = $('.gpc_modal_formulario').height();
}else if (gm.attr('gm_componente') == 'gma_modal'){gm_altura = $('#gm-gpages_modal').height();
}else{gm.children().each(function(){gm_altura += $(this).outerHeight(true);});}
 if (gm_altura >= tela_altura){
 if (gm.attr('gm_componente') == 'gpc_modal_formulario'){gm.find('.gpc_modal_formulario-centro').css({'height':$('.gpc_modal_formulario').height()+'px'});}
 if (gm.attr('gm_componente') == 'gpc_modal'){gm.find('.gpc_modal-centro').css({'height':$('.gpc_modal').height()+'px'});}
 if (gm.attr('gm_componente') == 'gpc_modal_popup'){gm.find('.gpc_modal_popup-centro').css({'height':$('.gpc_modal_popup').height()+'px'});}
 if (gm.attr('gm_componente') == 'gml'){
 
 tela += 20;
 gm.find('.gml-centro, .gml-opcoes-lista-lateral, .gml-opcoes-lista-opcoes').css({'height':((tela_altura-(gm.find('.gml-topo').outerHeight()))-50)+'px'});
}
 if (gm.attr('gm_componente') == 'gmf'){gm.find('.gmf-centro').css({'height':((tela_altura-((gm.find('.gmf-topo').outerHeight())+(gm.find('.gmf-rodape').outerHeight())))-20)+'px'});}
 if (gm.attr('gm_componente') == 'gm_configurar_dns_completo'){gm.find('.gm_configurar_dns_completo-centro').css({'height':((tela_altura-((gm.find('.gm_configurar_dns_completo-topo').outerHeight())+(gm.find('.gm_configurar_dns_completo-rodape').outerHeight())))-20)+'px'});}
 if (gm.attr('gm_componente') == 'gpc_modal_imagens'){
 tela += 50;
 gm.find('.gpc_modal_imagens-centro, .gpc_modal_imagens-centro-pastas, .gpc_modal_imagens-centro-fotos').css({'height':((tela_altura-(gm.find('.gpc_modal_imagens-topo').outerHeight()))-120)+'px'});
}
 if (gm.attr('gm_componente') == 'guo'){gm.find('.guo-passos').css({'height':(gm_altura-(gm_altura-tela_altura)-96)+'px'});}
 if (gm.attr('gm_componente') == 'gsp'){gm.find('.gsp-opcoes').css({'height':((tela_altura-((gm.find('.gsp-topo').outerHeight())+(gm.find('.gsp-rodape').outerHeight())))-20)+'px'});}
 if (gm.attr('gm_componente') == 'gmi_informacoes'){gm.find('.gmi_informacoes-centro').css({'height':((tela_altura-((gm.find('.gmi_informacoes-topo').outerHeight())))-20)+'px'});}
 if (gm.attr('gm_componente') == 'gmi_comentarios'){gm.find('.gmi_comentarios-centro').css({'height':((tela_altura-((gm.find('.gmi_comentarios-topo').outerHeight())+(gm.find('.gmi_comentarios-rodape').outerHeight())))-20)+'px'});}
 
 if (efeitos){if (!gm.hasClass('gm_efeitos')){gm.addClass('gm_efeitos');}}else{if (gm.hasClass('gm_efeitos')){gm.removeClass('gm_efeitos');}}
 
 if(gm.attr('gm_componente') == 'gpc_modal_popup'){
 setTimeout(function(){
 gm.css({'top':(tela+10)+'px'}).removeClass('gm_esconder');
 $('.'+id_gm).css({'overflow':''});
},25);
}else if (gm.attr('gm_componente') == 'gma_modal'){setTimeout(function(){gm.css({'top':(tela)+'px'}).removeClass('gm_esconder');},25);}
 else{setTimeout(function(){gm.css({'top':(tela+10)+'px'}).removeClass('gm_esconder');},25);}
}else{
 if (gm.attr('gm_componente') == 'gpc_modal_imagens'){gm.find('.gpc_modal_imagens-centro, .gpc_modal_imagens-centro-pastas, .gpc_modal_imagens-centro-fotos').css({'height':((gm_altura-(gm.find('.gpc_modal_imagens-topo').outerHeight()))-120)+'px'});}
 if (gm.attr('gm_componente') == 'gml'){gm.find('.gml-centro, .gml-opcoes-lista-lateral, .gml-opcoes-lista-opcoes').css({'height':((tela_altura-(gm.find('.gml-topo').outerHeight()))-50)+'px'});}
 
 if (efeitos){if (!gm.hasClass('gm_efeitos')){gm.addClass('gm_efeitos');}}else{if (gm.hasClass('gm_efeitos')){gm.removeClass('gm_efeitos');}}
 
 if(gm.attr('gm_componente') == 'gpc_modal_popup'){
 setTimeout(function(){
 gm.css({'top':(((tela_altura-gm_altura)/2)+tela)+'px','bottom':'initial'}).removeClass('gm_esconder');
 $('.'+id_gm).css({'overflow':''});
},25);
}else{setTimeout(function(){gm.css({'top':(((tela_altura-gm_altura)/2)+tela)+'px','bottom':'initial'}).removeClass('gm_esconder');},25);}
}
}
}
 function FecharGM(id_gm){
 var gm = $("#"+id_gm);
 if (gm.length){
 var componente = gm.attr('gm_componente');
 if(componente == 'gpc_modal_formulario'){MostrarPreview(false);}
 if(gm.attr('id') == 'gm-plano_alteracao_pagamento' || gm.attr('id') == 'gm-plano_alteracao' || gm.attr('id') == 'gm-plano_contratou'){
 editou = false;
 editou_caixa = false;
 GLoading.carregar({'ativar':false});
 document.location.reload();
}
 
 var gm_fundo = $("."+id_gm);
 var tela = window.scrollY;
 var tela_altura = $(window).height();
 if (componente == 'gpc_modal'){
 tela_largura = $('#gpc-blocos_editor').width();
 tela = document.getElementById("gpc-blocos").scrollTop;
}
 
 if (!gm.hasClass('gm_efeitos')){gm.addClass('gm_efeitos');}
 
 if(componente == 'gma_modal'){gm.css({'opacity':'0'});}
 else{gm.css({'top':(tela_altura+tela)+'px'});}
 
 setTimeout(function(){gm_fundo.removeClass('gm_fundo_ativo');},100);
 
 setTimeout(function(){
 
 if($('.gm_fundo').length == 1){
 if (componente == 'gpc_modal'){
 $('.'+gpc_controle['classe_elemento_adicionar']+'[gpc_tipo="bloco"]').removeClass('esconder');
 var elemento_original = $('.gpc_modal').attr('gpc_id_elemento');
 if(gpc_controle['elementos_selecionados']['elementos_resize'] != ''){
 gpc_controle['elementos_selecionados'] ={'elementos':{}, 'elementos_resize':'', 'total' :0,'helper':{'largura':0,'altura':0,'left_original':'','top_original':'','elemento_left_original':'','elemento_top_original':'','scrollTop':$("#gpc-blocos").offset().top,'scrollLeft':$("#gpc-blocos").scrollLeft()}};
 $('#'+gpc_controle['classe_elementos_selecionados']).remove();
 $('.ui-selected').removeClass('ui-selected');
}
 if(Object.keys(gpc_controle['elementos_iniciados']).length){
 $.each(gpc_controle['elementos_iniciados'], function (i, elemento_iniciado){gpc_controle['elementos_iniciados'][i].destroy();});
 gpc_controle['elementos_iniciados'] ={};
}
 setTimeout(function(){
 if($('.'+gpc_controle['classe_grupos']).length){$('.'+gpc_controle['classe_grupos']).each(function(i,grupo){PosicionarGrupos($(grupo).attr('id'));})}
 $('#elementos_'+elemento_original).trigger('click');
},300);
 $('#gpc-blocos_editor-blocos').removeClass('administrador_borrar').removeAttr('style');
 $('.'+gpc_controle['classe_bloco_configurar']).remove();
}else if ($('#site').length){
 if($('#site').closest('.gmf').length){$('#administrador').removeClass('administrador_borrar').removeAttr('style');}
 else{$('#site').removeClass('site_borrar').removeAttr('style');}
}else{$('#administrador').removeClass('administrador_borrar').removeAttr('style');}
}
 
 if($('.gm_fundo').length == 1){
 if (componente == 'gpc_modal'){$('#gpc-blocos_editor').removeClass('body_bloquear');}
 else{$('body').removeClass('body_bloquear body_bloquear_site');}
}
 
 if($('.gm_fundo').length == 1){
 if(componente == 'gpc_modal'){document.getElementById("gpc-blocos").scrollTop = parseFloat(gm.attr('gm_scroll'))+$('#gpc-blocos').offset().top;}
 else{window.scroll({top:gm.attr('gm_scroll'), behavior:"auto"});}
}
 
 gm.remove();gm_fundo.remove();
 editou = false;
 editou_caixa = false;
 GLoading.carregar({'ativar':false});
 if(componente == 'gpc_modal_imagens'){$("body").css({'overflow':''});}
},200);
}
}
 function PulsarGM(id_gm){
 $('#'+id_gm).addClass('gm_pulsar');
 setTimeout(function(){$('#'+id_gm).removeClass('gm_pulsar');},100);
}
 $(function(){
 $('body').on('click','.gm_fundo',function(){if ($(this).attr('gm_fundo_acao') == 'pulsar'){PulsarGM($(this).attr('gm_id'));}else if ($(this).attr('gm_fundo_acao') == 'fechar'){FecharGM($(this).attr('gm_id'));}});
 $('body').on('click','.gm_fechar',function(){FecharGM($(this).attr('gm_id'));});
});
'use strict';

var GModalApproval = function(){
 return{
 
 instalar :function(configuracao){
 
 if (configuracao.hasOwnProperty('barra') == false){configuracao.barra = '';}
 
 if (configuracao.barra != ''){
 
 if(GModalApproval.preferencias() == null){GModalApproval.barra(configuracao);}
 else{
 GModalApproval.botao(configuracao);
 GModalApproval.instalar_scripts(configuracao,false);
}
 
 setTimeout(function(){GModalApproval.posicionar();}, 500);
}
},
 
 barra :function(configuracao){
 
 if (configuracao.barra.hasOwnProperty('fechar') == false){configuracao.fechar = false;}
 if (configuracao.barra.hasOwnProperty('cor') == false){configuracao.barra.cor = 'ffffff';}
 if (configuracao.barra.hasOwnProperty('classe') == false){configuracao.barra.classe = '';}
 if (configuracao.barra.hasOwnProperty('botao_configurar') == false){configuracao.barra.botao_configurar = false;}
 if (configuracao.barra.hasOwnProperty('botao_aceitar') == false){configuracao.barra.botao_aceitar = 'Entendi e aceito';}
 if (configuracao.barra.hasOwnProperty('texto') == false){configuracao.barra.texto = 'Usamos cookies para personalizar conteúdos e melhorar a sua experiência.';}
 
 var barra = '<div id="gpc-lgpd_texto">'+configuracao.barra.texto+'</div>';
 barra += '<div id="gpc-lgpd_botoes">';
 if(configuracao.barra.botao_configurar){barra += '<div id="gpc-lgpd_botoes-configurar" class="gpc-lgpd_botoes-botao">'+configuracao.barra.botao_configurar+'</div>';}
 barra += '<div id="gpc-lgpd_botoes-confirmar" class="gpc-lgpd_botoes-botao">'+configuracao.barra.botao_aceitar+'</div>';
 barra += "</div>";
 if(configuracao.barra.fechar){barra += '<div id="gpc-lgpd_fechar"></div>';}
 
 var g_lgpd = document.createElement("div");
 g_lgpd.id = 'gpc-lgpd';
 g_lgpd.className = 'posicionar gpc-lgpd-cor_'+configuracao.barra.cor+' '+(configuracao.barra.botao_configurar ? 'botoes' :'botao')+' '+configuracao.barra.classe;
 g_lgpd.innerHTML = barra;
 document.body.appendChild(g_lgpd);
 setTimeout(function(){GModalApproval.configurar(configuracao);}, 300);
},
 botao :function(configuracao){
 
 if(configuracao.barra.hasOwnProperty('editar_consentimento') == false){configuracao.barra.editar_consentimento = true;}
 if(configuracao.barra.editar_consentimento){
 var g_lgpd = document.getElementById("gpc-lgpd_editar");
 if(g_lgpd == null){
 
 var g_lgpd = document.createElement("div");
 g_lgpd.id = 'gpc-lgpd_editar';
 g_lgpd.className = 'posicionar gtt-direita gpc-lgpd-cor_'+configuracao.barra.cor+' '+configuracao.barra.classe;
 g_lgpd.setAttribute('data-gtt','Preferências de cookies');
 document.body.appendChild(g_lgpd);
 GTooltip.instalar({'elemento' :'.gtt-direita', 'direcao' :'direita'});
 
 setTimeout(function(){GModalApproval.configurar(configuracao);}, 300);
}
}
 
 setTimeout(function(){GModalApproval.posicionar();}, 200);
},
 modal :function(configuracao){
 
 GLoading.carregar({'ativar':true});
 
 var conteudo = '';
 if (configuracao.hasOwnProperty('textos') == false){configuracao.textos = '';}
 if (configuracao.hasOwnProperty('opcoes') == false){configuracao.opcoes = '';}
 
 if(configuracao.textos != ''){
 conteudo += '<div id="gpc_modal_lgpd-titulo">';
 for (var i = 0;i < configuracao.textos.length;i++){
 if(configuracao.textos[i].tipo == 'titulo'){conteudo += '<div class="gpc_modal_lgpd-titulo-titulo">'+configuracao.textos[i].texto+'</div>';}
 if(configuracao.textos[i].tipo == 'texto'){conteudo += '<div class="gpc_modal_lgpd-titulo-texto">'+configuracao.textos[i].texto+'</div>';}
}
 conteudo += '</div>';
}
 if(configuracao.opcoes != ''){
 var cookie = GModalApproval.preferencias();
 for (var i = 0;i < configuracao.opcoes.length;i++){
 if (configuracao.opcoes[i].hasOwnProperty('aviso') == false){configuracao.opcoes[i].aviso = '';}
 if (configuracao.opcoes[i].hasOwnProperty('titulo') == false){configuracao.opcoes[i].titulo = '';}
 if (configuracao.opcoes[i].hasOwnProperty('texto') == false){configuracao.opcoes[i].texto = '';}
 conteudo += '<div class="gpc_modal_lgpd-opcoes">';
 conteudo += '<div class="gpc_modal_lgpd-opcoes-protecao">';
 conteudo += '<span class="gpc_modal_lgpd-opcoes-titulo">'+configuracao.opcoes[i].titulo+'</span>';
 if(configuracao.opcoes[i].aviso != ''){conteudo += '<span class="gpc_modal_lgpd-opcoes-aviso">'+configuracao.opcoes[i].aviso+'</span>';}
 else{
 if(cookie){configuracao.opcoes[i].valor = (cookie.indexOf(configuracao.opcoes[i].id+':1') !== -1 ? true :false);}
 conteudo += '<span id="'+configuracao.opcoes[i].id+'" class="gpc_modal_lgpd-opcoes-selecao'+(configuracao.opcoes[i].valor ? ' gpc_modal_lgpd-opcoes-selecao_selecionado' :'')+'"><span class="marcador"></span></span>';
}
 conteudo += '</div>';
 conteudo += '<div class="gpc_modal_lgpd-opcoes-texto">'+configuracao.opcoes[i].texto+'</div>';
 conteudo += '</div>';
}
}
 conteudo += '<div id="gpc_modal_lgpd-confirmar">Confirmar configurações</div>';
 
 var modal ={
 'gm' :{
 'conteudos' :{
 'topo' :{'conteudo' :"<div id='gpc_modal_popup_lgpd-topo-fechar' class='gpc_modal_popup_lgpd-topo-fechar gpc_modal_popup-fechar icone-fechar'></div>", 'estilos' :'', 'extras' :''},
 'centro' :{'conteudo' :conteudo, 'estilos' :'', 'extras' :''}
},
 'classes' :'gm_lgpd',
 'estilos' :'max-width:420px;',
 'extras' :''
},
 'gm_fundo' :{
 'conteudos' :{'topo' :{'conteudo' :"<div id='gpc_modal_popup-fundo-fechar' class='gpc_modal_popup-fundo-fechar gpc_modal_popup-fechar icone-fechar'></div>"}},
 'classes' :'gpc_modal_lgpd-fundo',
 'estilos' :'overflow:hidden;',
 'extras' :'gm_fundo_acao="fechar" id="gpc_modal_lgpd-fundo"'
}
};
 
 gm_quantidade++;
 AbrirGM('gpc_modal_lgpd_'+gm_quantidade, 'gpc_modal_popup_lgpd',modal);
 
 GLoading.carregar({'ativar':false});
 var lgpd = document.getElementById("gpc-lgpd");
 if(lgpd == null){lgpd = document.getElementById("gpc-lgpd_editar");}
 lgpd.classList.add('posicionar');
 lgpd.classList.remove('posicionado');
 setTimeout(function(){
 
 var botao_confirmar = document.getElementById("gpc_modal_lgpd-confirmar");
 if(botao_confirmar != null){botao_confirmar.addEventListener("click", function(){GModalApproval.confirmar(configuracao);});}
 var fechar1 = document.getElementById("gpc_modal_popup_lgpd-topo-fechar");
 if(fechar1 != null){
 fechar1.addEventListener("click", function(){
 FecharGM('gpc_modal_lgpd_'+gm_quantidade);
 GModalApproval.posicionar();
});
}
 var fechar2 = document.getElementById("gpc_modal_popup-fundo-fechar");
 if(fechar2 != null){fechar2.addEventListener("click", function(){GModalApproval.posicionar();});}
 var fechar3 = document.getElementById("gpc_modal_lgpd-fundo");
 if(fechar3 != null){fechar3.addEventListener("click", function(){GModalApproval.posicionar();});}
 var opcoes = document.getElementsByClassName('gpc_modal_lgpd-opcoes-selecao');
 if(opcoes != null){
 for (var i = 0;i < opcoes.length;i++){
 opcoes[i].addEventListener("click", function(e){
 if(this.classList.contains('gpc_modal_lgpd-opcoes-selecao_selecionado')){this.classList.remove('gpc_modal_lgpd-opcoes-selecao_selecionado');}
 else{this.classList.add('gpc_modal_lgpd-opcoes-selecao_selecionado');}
});
}
}
},400);
},
 posicionar :function(){
 var g_lgpd = document.getElementById("gpc-lgpd");
 if(g_lgpd == null){g_lgpd = document.getElementById("gpc-lgpd_editar");}
 if(g_lgpd){
 g_lgpd.classList.add('posicionado');
 g_lgpd.classList.remove('posicionar');
}
},
 
 configurar :function(configuracao){
 
 var botao_editar = document.getElementById("gpc-lgpd_editar");
 if(botao_editar){
 botao_editar.removeEventListener("click",function(){GModalApproval.modal(configuracao);},false);
 botao_editar.addEventListener("click", function(){GModalApproval.modal(configuracao);});
}
 
 var botao_configurar = document.getElementById("gpc-lgpd_botoes-configurar");
 if(botao_configurar){
 botao_configurar.removeEventListener("click",function(){GModalApproval.modal(configuracao);},false);
 botao_configurar.addEventListener("click", function(){GModalApproval.modal(configuracao);});
}
 
 var botao_confirmar = document.getElementById("gpc-lgpd_botoes-confirmar");
 if(botao_confirmar){
 botao_confirmar.removeEventListener("click",function(){GModalApproval.confirmarTodos(configuracao);},false);
 botao_confirmar.addEventListener("click", function(){GModalApproval.confirmarTodos(configuracao);});
}
 
 var botao_fechar = document.getElementById("gpc-lgpd_fechar");
 if(botao_fechar){
 botao_fechar.removeEventListener("click",function(){GModalApproval.cancelarTodos(configuracao);},false);
 botao_fechar.addEventListener("click", function(){GModalApproval.cancelarTodos(configuracao);});
}
},
 confirmar :function(configuracao){
 
 var valor = 'o:1';
 
 var elementos = document.getElementsByClassName('gpc_modal_lgpd-opcoes-selecao');
 let editado = false;
 if (elementos.length){
 for (var i = 0;i < elementos.length;i++){
 valor += '&'+elementos[i].id+':'+(elementos[i].classList.contains('gpc_modal_lgpd-opcoes-selecao_selecionado') ? '1' :'0');
 if (elementos[i].classList.contains('gpc_modal_lgpd-opcoes-selecao') == true){
 for (var x = 0;x < configuracao.opcoes.length;x++){
 if (configuracao.opcoes[x].id == elementos[i].id){
 if(configuracao.opcoes[x].valor != elementos[i].classList.contains('gpc_modal_lgpd-opcoes-selecao_selecionado')){editado = true;}
 configuracao.opcoes[x].valor = elementos[i].classList.contains('gpc_modal_lgpd-opcoes-selecao_selecionado');
}
}
}
}
}
 configuracao.editado = editado;
 GModalApproval.salvar_preferencias(valor,configuracao.dominio);
 
 
 FecharGM('gpc_modal_lgpd_'+gm_quantidade);
 
 var elemento = document.getElementById('gpc-lgpd');
 if (elemento != null){
 
 elemento.remove();
 
 GModalApproval.botao(configuracao);
}
 
 GModalApproval.posicionar();
 
 GModalApproval.remover_preferencias(configuracao);
},
 confirmarTodos :function(configuracao){
 
 var valor = 'o:1';
 
 for (var x = 0;x < configuracao.opcoes.length;x++){
 if(configuracao.opcoes[x].hasOwnProperty('valor')){
 configuracao.opcoes[x].valor = true;
 valor += '&'+configuracao.opcoes[x].id+':1';
}
}
 GModalApproval.salvar_preferencias(valor,configuracao.dominio);
 GModalApproval.instalar_scripts(configuracao);
 configuracao.editado = true;
 
 var elemento = document.getElementById('gpc-lgpd');
 if(elemento != null){elemento.remove();}
 
 GModalApproval.botao(configuracao);
},
 cancelarTodos :function(configuracao){
 
 var valor = 'o:1';
 
 for (var x = 0;x < configuracao.opcoes.length;x++){
 if(configuracao.opcoes[x].hasOwnProperty('valor')){
 configuracao.opcoes[x].valor = false;
 valor += '&'+configuracao.opcoes[x].id+':0';
}
}
 configuracao.editado = true;
 GModalApproval.salvar_preferencias(valor,configuracao.dominio);
 GModalApproval.instalar_scripts(configuracao);
 
 var elemento = document.getElementById('gpc-lgpd');
 if(elemento != null){elemento.remove();}
 
 GModalApproval.botao(configuracao);
},
 
 preferencias :function(){
 
 var strNomeIgual = "gpages_cookies=";
 var cookie_array = document.cookie.split(';');
 
 for(var i = 0;i < cookie_array.length;i++){
 var cookie_string = cookie_array[i];
 while (cookie_string.charAt(0) == ' '){cookie_string = cookie_string.substring(1, cookie_string.length);}
 if (cookie_string.indexOf(strNomeIgual) != -1){return cookie_string.substring(strNomeIgual.length, cookie_string.length);}
}
 
 return null;
},
 salvar_preferencias :function(preferencias, dominio){
 
 if (dominio == undefined){dominio = '';}
 var data = new Date();
 
 data.setTime(data.getTime() + (365 * 24 * 60 * 60 * 1000));
 document.cookie = "gpages_cookies=" + preferencias + ";Expires=" + data.toGMTString() + ";Path=/;"+(dominio ? ' Domain='+dominio :'');
 
 return true;
},
 remover_preferencias :function(configuracao){
 
 if(configuracao.editado){
 var cookie_array = document.cookie.split(';');
 var cookies_limpos = '';
 for(var i = 0;i < cookie_array.length;i++){
 var cookie_string = cookie_array[i];
 while (cookie_string.charAt(0) == ' '){cookie_string = cookie_string.substring(1, cookie_string.length);}
 if (cookie_string.indexOf('gpages_') === -1){cookies_limpos += cookie_string.substring(0,cookie_string.indexOf('='))+"=;Expires=Thu, 01 Jan 1970 00:00:01 GMT;Path=/;"+(configuracao.dominio ? ' Domain='+configuracao.dominio :'');}
 else{cookies_limpos += cookie_string;}
}
 document.cookie = cookies_limpos;
 
 setTimeout(function(){document.location.reload(true);},100);
}
},
 
 instalar_scripts :function(configuracao,loader){
 if(loader == undefined){loader = true;}
 
 let cookie = GModalApproval.preferencias();
 
 if(configuracao.opcoes != ''){for (var x = 0;x < configuracao.opcoes.length;x++){configuracao.opcoes[x].valor = (cookie.indexOf(configuracao.opcoes[x].id+':1') !== -1 ? true :false);}}
 if(configuracao.hasOwnProperty('opcoes')){
 let total = Object.entries(configuracao.opcoes).length;
 for (var i = 0;i < total;i++){
 if((configuracao.opcoes[i].valor == true || configuracao.opcoes[i].valor == 'true') && configuracao.opcoes[i].hasOwnProperty('codigos')){
 let scripts = configuracao.opcoes[i]['codigos']();
 let total_scripts = Object.entries(scripts).length;
 if(total_scripts){
 let tipo = '_'+configuracao.opcoes[i]['id'];
 $('.gle_css'+tipo).removeClass('gle_css'+tipo).addClass('gle_css');
 $('.gle_scripts'+tipo).removeClass('gle_scripts'+tipo).addClass('gle_scripts');
 Object.entries(scripts).forEach(([key, value]) =>{
 if(scripts[key].hasOwnProperty('html')){
 let div = document.createElement("div");
 div.innerHTML = scripts[key]['html'];
 document.body.appendChild(div);
}
 setTimeout(function(){
 if(scripts[key].hasOwnProperty('js_interno')){
 let total_js_interno = Object.entries(scripts[key]['js_interno']).length;
 for (let y = 0;y < total_js_interno;y++){
 let script = document.createElement("script"), conteudo = scripts[key]['js_interno'][y].toString();
 conteudo = conteudo.substr(11,conteudo.length);
 conteudo = conteudo.substr(0,(conteudo.length-1));
 script.innerHTML = conteudo;
 document.body.appendChild(script);
}
}
},50);
});
}
}
}
 if(loader){GreatLoader('atualizar');}
}
}
};
}();




'use strict';

var GTooltip = function(){
 return{
 instalar :function(configuracao){
 
 if (configuracao.hasOwnProperty('elemento') == false){configuracao.elemento = '';}
 if (configuracao.hasOwnProperty('direcao') == false){configuracao.direcao = 'cima';}
 if (configuracao.direcao != 'cima' && configuracao.direcao != 'baixo' && configuracao.direcao != 'direita' && configuracao.direcao != 'esquerda'){configuracao.direcao = 'cima';}
 if (configuracao.elemento != ''){
 
 var elementos = document.querySelectorAll(configuracao.elemento);
 
 if (elementos.length){
 for (var i = 0;i < elementos.length;i++){
 elementos[i].addEventListener('mouseenter', function(){GTooltip.adicionar(this, configuracao.direcao);}, false);
 elementos[i].addEventListener('mouseout', function(){GTooltip.remover(this);}, false);
}
}
}
},
 adicionar :function(elemento, direcao){
 if (elemento.dataset.gtt != ''){
 
 var gtt = document.createElement("div");
 gtt.className = 'gtt_caixa gtt_caixa-'+direcao;
 gtt.innerHTML = '<span class="gtt_caixa-seta"></span><span class="gtt_caixa-conteudo">'+elemento.dataset.gtt+'</span>';
 document.body.appendChild(gtt);
 
 var pagina_offset = window.scrollY || window.pageYOffset;
 var elemento_offset = elemento.getBoundingClientRect();
 var gtt_width = parseFloat(getComputedStyle(gtt).width.replace("px", ""));
 var gtt_height = parseFloat(getComputedStyle(gtt).height.replace("px", ""));
 
 if (direcao == 'cima'){
 
 gtt.style.top = (pagina_offset+(elemento_offset.top-gtt_height))-10+'px';
 gtt.style.left = (elemento_offset.left+(elemento.offsetWidth/2))-(gtt_width/2)+'px';
 
 var gtt_seta = gtt.querySelector('.gtt_caixa-seta');
 gtt_seta.style.bottom = '-10px';
 gtt_seta.style.left = ((gtt_width/2)-5)+'px';
}else if (direcao == 'baixo'){
 
 gtt.style.top = (pagina_offset+(elemento_offset.top+elemento.offsetHeight))+10+'px';
 gtt.style.left = (elemento_offset.left+(elemento.offsetWidth/2))-(gtt_width/2)+'px';
 
 var gtt_seta = gtt.querySelector('.gtt_caixa-seta');
 gtt_seta.style.top = '-10px';
 gtt_seta.style.left = ((gtt_width/2)-5)+'px';
}else if (direcao == 'esquerda'){
 
 gtt.style.top = (pagina_offset+(elemento_offset.top+(elemento.offsetHeight/2))-(gtt_height/2))+'px';
 gtt.style.left = (elemento_offset.left-gtt_width)-10+'px';
 
 var gtt_seta = gtt.querySelector('.gtt_caixa-seta');
 gtt_seta.style.right = '-10px';
 gtt_seta.style.top = ((gtt_height/2)-5)+'px';
}else if (direcao == 'direita'){
 
 gtt.style.top = (pagina_offset+(elemento_offset.top+(elemento.offsetHeight/2))-(gtt_height/2))+'px';
 gtt.style.left = (elemento_offset.left+elemento.offsetWidth)+10+'px';
 
 var gtt_seta = gtt.querySelector('.gtt_caixa-seta');
 gtt_seta.style.left = '-10px';
 gtt_seta.style.top = ((gtt_height/2)-5)+'px';
}
}
},
 remover :function(elemento){
 if (elemento.dataset.gtt != ''){
 
 var gtt = document.body.querySelector('.gtt_caixa');
 
 if(gtt != null || window.navigator.sayswho.toLowerCase().indexOf('ie') !== false){gtt.remove();}
}
}
};
}();
var gqa_status = false;
var gqa_fila = [];
var gqa_executando = false;

function ControlarFilaGQA(){
 
 if (gqa_executando){clearTimeout(gqa_executando);}
 
 gqa_executando = setInterval(function(){ExecutarFilaGQA();}, (document.hidden) ? 8000 :100);
}



function AdicionarFilaGQA(parametros){
 
 if (parametros.hasOwnProperty('verbo') == false){parametros.verbo = 'POST';}
 if (parametros.hasOwnProperty('url') == false){return false;}
 if (parametros.hasOwnProperty('uri') == false){parametros.uri = '';}
 else{
 if(typeof parametros.uri == 'object' || typeof parametros.uri == 'array'){
 parametros.uri = FormatarUriGQA(parametros.uri);
}
}
 if (parametros.hasOwnProperty('extensao') == false){parametros.extensao = 'json';}
 if (parametros.hasOwnProperty('prioridade') == false){parametros.prioridade = 'baixa';}
 if (parametros.hasOwnProperty('carregar') == false){parametros.carregar = false;}
 if (parametros.hasOwnProperty('timeout') == false){parametros.timeout = 10000;}
 
 if (parametros.prioridade == 'alta'){
 
 EnviarAjaxGQA(parametros);
}else if (parametros.prioridade == 'media'){
 
 gqa_fila.unshift([parametros]);
}else if (parametros.prioridade == 'baixa'){
 
 gqa_fila.push([parametros]);
}
}
function ExecutarFilaGQA(){
 if (gqa_status == false && gqa_fila.length){
 
 var proximo = gqa_fila.shift();
 
 gqa_status = true;
 
 EnviarAjaxGQA(proximo[0])
}
}
function EnviarAjaxGQA(parametros){
 
 if (parametros.hasOwnProperty('verbo') == false){parametros.verbo = 'POST';}
 if (parametros.hasOwnProperty('url') == false){return false;}
 if (parametros.hasOwnProperty('uri') == false){parametros.uri = '';}
 if (parametros.hasOwnProperty('extensao') == false){parametros.extensao = 'json';}
 if (parametros.hasOwnProperty('prioridade') == false){parametros.prioridade = 'baixa';}
 if (parametros.hasOwnProperty('carregar') == false){parametros.carregar = false;}
 if (parametros.hasOwnProperty('timeout') == false){parametros.timeout = 10000;}
 if (parametros.hasOwnProperty('externo') == false){parametros.externo = false;}
 if (parametros.hasOwnProperty('funcao_erro') == false){parametros.funcao_erro = '';}
 if (parametros.hasOwnProperty('funcao_sucesso') == false){parametros.funcao_sucesso = '';}
 
 if (parametros.carregar == true){GLoading.carregar({'ativar':true});}
 
 if (parametros.verbo == 'POST'){
 var url = parametros.url;
 var dados = parametros.uri;
}else{
 if (parametros.uri){
 var url = parametros.url+'?'+parametros.uri;
}else{var url = parametros.url;}
 var dados = '';
}
 
 var requisicao = new XMLHttpRequest();
 requisicao.open(parametros.verbo, url, true);
 requisicao.timeout = parametros.timeout;
 if (parametros.extensao){requisicao.responseType = parametros.extensao;}
 requisicao.withCredentials = true;
 requisicao.overrideMimeType("application/"+parametros.extensao);
 if (parametros.verbo == 'POST'){
 if(parametros.externo){
 requisicao.withCredentials = false;
 requisicao.setRequestHeader('Content-Type', "application/json");
}else{
 requisicao.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
}
}
 if (parametros.externo){
 requisicao.setRequestHeader('Access-Control-Allow-Methods', 'POST');
 requisicao.setRequestHeader('Access-Control-Allow-Headers', "*");
 requisicao.setRequestHeader('Access-Control-Allow-Origin', '*');
}
 requisicao.onreadystatechange = function(){
 if (this.readyState == 4){
 if (this.status == 200){
 
 if (this.responseType == 'json'){
 var resposta = this.response;
}else if (this.responseType == 'text' || this.responseType == ''){
 var resposta = this.responseText;
}else{
 var resposta = this.response;
}
 
 if (parametros.funcao_sucesso){parametros.funcao_sucesso(resposta);}
 
 GLoading.carregar({'ativar':false});
 
 gqa_status = false;
}else{
 
 if(url.indexOf('conversoes.php') != -1){
 // WARNING:For POST requests, body is set to null by browsers.
 var data = "payload=%7B%22channel%22%3A%20%22%23request-conversoes%22%2C%20%22username%22%3A%20%22webhookbot%22%2C%20%22text%22%3A%20%22%5BTEXTO%5D%22%2C%20%22icon_emoji%22%3A%20%22%3Aghost%3A%22%7D";
 
 if (this.responseType == 'json'){var resposta = this.response;}
 else if (this.responseType == 'text' || this.responseType == ''){var resposta = this.responseText;}
 else{var resposta = this.response;}
 data = data.replace('%5BTEXTO%5D', encodeURIComponent('URL:'+window.location.toString()+' - Status:'+this.status+' - Status text:'+this.statusText+' - Post:'+JSON.stringify(dados)+' - Retorno:'+resposta));
 var xhr_s = new XMLHttpRequest();
 xhr_s.withCredentials = true;
 xhr_s.addEventListener("readystatechange", function(){if(this.readyState === 4){console.log(this.responseText);}});
 xhr_s.open("POST", "https://hooks.slack.com/services/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");
 xhr_s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
 xhr_s.send(data);
}
 
 if (parametros.funcao_erro){parametros.funcao_erro(this);}
 
 GLoading.carregar({'ativar':false});
 
 
 
 gqa_status = false;
}
}
};
 requisicao.send(dados);
 requisicao = null;

 

 
}
function FormatarUriGQA(post, prefixo){
 var retorno = [], post_chave, post_valor;
 for(var p in post){
 if (!post.hasOwnProperty(p)){continue;}
 if (~p.indexOf('[')){post_chave = prefixo ? prefixo + "[" + p.substring(0, p.indexOf('[')) + "]" + p.substring(p.indexOf('[')) :p;}
 else{post_chave = prefixo ? prefixo + "[" + p + "]" :p;}
 post_valor = post[p];
 retorno.push(typeof post_valor == "object" ? FormatarUriGQA(post_valor, post_chave) :encodeURIComponent(post_chave) + "=" + encodeURIComponent(post_valor));
}
 return retorno.join("&");
}
$(function(){
 
 if(document.addEventListener){document.addEventListener("visibilitychange", ControlarFilaGQA);}
 
 ControlarFilaGQA();
});'use strict';

var go_elementos = [];

var GObserver = function(){
 return{
 iniciar :function (){
 
 window.addEventListener('resize', function(){GObserver.observar(true);}, false);
 window.addEventListener('scroll', function(){GObserver.observar(true);}, false);
},
 instalar :function(configuracao){
 
 if (configuracao.hasOwnProperty('elemento') == false){configuracao.elemento = '';}
 if (configuracao.hasOwnProperty('antecipacao') == false){configuracao.antecipacao = 0;}
 if (configuracao.hasOwnProperty('executar') == false){configuracao.executar = '';}
 
 if (configuracao.elemento != ''){
 
 var elementos = document.querySelectorAll(configuracao.elemento);
 
 if (elementos.length){
 for (var i = 0;i < elementos.length;i++){
 if (elementos[i].id){
 
 var instalar ={
 'elemento' :'#'+elementos[i].id,
 'antecipacao' :configuracao.antecipacao,
 'executar' :configuracao.executar
};
 
 go_elementos.push(instalar);
}
}
 
 GObserver.observar(false);
}
}
},
 observar :function(antecipacao){
 
 if (go_elementos.length){
 
 var janela_top = window.scrollY || window.pageYOffset;
 var janela_bottom = janela_top+window.innerHeight;
 for(var i = 0;i < go_elementos.length;i++){
 
 var antecipar = (antecipacao == true ? go_elementos[i].antecipacao :0);
 var elemento = document.querySelector(go_elementos[i].elemento);
 if (elemento !== null && elemento !== undefined){
 var elemento_estilo = window.getComputedStyle(elemento);
 if (elemento_estilo.display !== 'none'){
 var elemento_top = elemento.getBoundingClientRect().top+janela_top;
 var elemento_bottom = elemento_top+elemento.clientHeight;
 
 if (elemento_bottom >= janela_top && (elemento_top-antecipar) <= janela_bottom){
 
 (function(index){go_elementos[index].executar(document.querySelector(go_elementos[index].elemento));})(i);
 
 go_elementos.splice(i, 1);
 
 this.observar(antecipacao);break;
}
}
}
}
}
}
};
}();


GObserver.iniciar();

 elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088d72af673282358':{'desktop':48.75, 'mobile':45}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088d73cc089787528':{'fs':'14', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088d73cc089787528':{'desktop':49.75, 'mobile':126}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088d7502772954292':{'fs':'28', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088d7502772954292':{'desktop':207.75, 'mobile':147.297}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088d75ff106930769':{'fs':'15', 'lh':'1.6'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088d75ff106930769':{'desktop':387.25, 'mobile':254.297}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088d76f5616461545':{'fs':'16', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088d76f5616461545':{'desktop':514, 'mobile':357.891}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088d7832985723941':{'fs':'14', 'lh':'1.8'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088d7832985723941':{'desktop':599.25, 'mobile':725.297}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088d7947196919514':{'fs':'18', 'lh':'2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088d7947196919514':{'desktop':53.25, 'mobile':207}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088d7a6b156330103':{'fs':'18', 'lh':'2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088d7a6b156330103':{'desktop':53.25, 'mobile':283}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088d7b90498729392':{'fs':'18', 'lh':'2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088d7b90498729392':{'desktop':53.25, 'mobile':359}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088d7de5642069873':{'desktop':230.542, 'mobile':420.141}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088d7f09343933071':{'desktop':726.5, 'mobile':829.297}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088e418e437475157':{'desktop':110.25, 'mobile':386.375}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088e430b295739358':{'fs':'28', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088e430b295739358':{'desktop':84.844, 'mobile':35.7188}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088e4482187995994':{'fs':'15', 'lh':'1.6'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088e4482187995994':{'desktop':226.563, 'mobile':135.719}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088e45f6872534932':{'fs':'14', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088e45f6872534932':{'desktop':466.5, 'mobile':347}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088eaa40017632974':{'fs':'15', 'lh':'1.6'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088eaa40017632974':{'desktop':782.375, 'mobile':812.75}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088eaf7c757579832':{'fs':'28', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088eaf7c757579832':{'desktop':615.922, 'mobile':716.75}});elementos_css = Object.assign(elementos_css,{'e_486123_1_20817':{'fs':'16', 'lh':'1.7'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_20817':{'desktop':687.094, 'mobile':963.75}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791602582697712':{'fs':'27', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791602582697712':{'desktop':687.094, 'mobile':966.75}});elementos_css = Object.assign(elementos_css,{'e_486123_1_08425':{'fs':'26', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_08425':{'desktop':743.172, 'mobile':1069.75}});elementos_css = Object.assign(elementos_css,{'e_486123_1_92111':{'fs':'27', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_92111':{'desktop':795.969, 'mobile':1018.22}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088eb41a602329943':{'fs':'15', 'lh':'1.6'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088eb41a602329943':{'desktop':125.5, 'mobile':95.9219}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088eb649334041966':{'fs':'20', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088eb649334041966':{'desktop':79.5, 'mobile':57.9219}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088eb845472637785':{'fs':'15', 'lh':'1.6'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088eb845472637785':{'desktop':294, 'mobile':243.875}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088eba65104331870':{'fs':'20', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088eba65104331870':{'desktop':248, 'mobile':202.094}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088ebc6a582477042':{'fs':'20', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088ebc6a582477042':{'desktop':412.5, 'mobile':367.047}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088ebe77567049657':{'fs':'15', 'lh':'1.6'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088ebe77567049657':{'desktop':458.5, 'mobile':408.094}});elementos_css = Object.assign(elementos_css,{'e_486123_1_90998':{'fs':'20', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_90998':{'desktop':80.5, 'mobile':856.188}});elementos_css = Object.assign(elementos_css,{'e_486123_1_18606':{'fs':'15', 'lh':'1.6'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_18606':{'desktop':125.5, 'mobile':897.531}});elementos_css = Object.assign(elementos_css,{'e_486123_1_65975':{'fs':'20', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_65975':{'desktop':248, 'mobile':686.438}});elementos_css = Object.assign(elementos_css,{'e_486123_1_41647':{'fs':'15', 'lh':'1.6'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_41647':{'desktop':294, 'mobile':728.938}});elementos_css = Object.assign(elementos_css,{'e_486123_1_61715':{'fs':'20', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_61715':{'desktop':412.5, 'mobile':524.469}});elementos_css = Object.assign(elementos_css,{'e_486123_1_07546':{'fs':'15', 'lh':'1.6'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_07546':{'desktop':458.5, 'mobile':565.297}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791759324074509':{'fs':'30.9844', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791759324074509':{'desktop':252.583, 'mobile':684.938}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791768092955061':{'fs':'33', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791768092955061':{'desktop':80.5, 'mobile':853.688}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791814052998935':{'fs':'33', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791814052998935':{'desktop':410, 'mobile':520.484}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791858897173678':{'fs':'36', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791858897173678':{'desktop':413.562, 'mobile':362.047}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791871430236641':{'fs':'31', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791871430236641':{'desktop':248, 'mobile':200.094}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791886904080172':{'fs':'30.9844', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791886904080172':{'desktop':80.5, 'mobile':56.4375}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088dc7ba275723480':{'fs':'28', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088dc7ba275723480':{'desktop':69, 'mobile':46}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088dc90d199247083':{'fs':'15', 'lh':'1.6'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088dc90d199247083':{'desktop':134, 'mobile':94}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088e2a13873712403':{'desktop':290.5, 'mobile':463}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088e2f45130265883':{'fs':'15', 'lh':'1.6'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088e2f45130265883':{'desktop':360, 'mobile':509.5}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088e30f8098490203':{'desktop':259, 'mobile':443}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088e3470782677429':{'desktop':290.5, 'mobile':256.5}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088e35fd484106000':{'desktop':258.5, 'mobile':236}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088e37ba607546415':{'fs':'15', 'lh':'1.6'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088e37ba607546415':{'desktop':359, 'mobile':300}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088dac6f509622173':{'fs':'28', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088dac6f509622173':{'desktop':75, 'mobile':50}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088dad4e840510991':{'desktop':179.25, 'mobile':156.969}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088daf32539539165':{'fs':'60', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088daf32539539165':{'desktop':256.25, 'mobile':227.969}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088db034910211066':{'desktop':168.25, 'mobile':147.969}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088db102440054223':{'fs':'16', 'lh':'2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088db102440054223':{'desktop':220.25, 'mobile':195.969}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088db1da001889233':{'fs':'30', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088db1da001889233':{'desktop':276.5, 'mobile':248.969}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088db2b7030630972':{'fs':'30', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088db2b7030630972':{'desktop':276.5, 'mobile':248.969}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088db5e6941572168':{'desktop':184.25, 'mobile':650.969}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088dbb9a981213921':{'fs':'15', 'lh':'2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088dbb9a981213921':{'desktop':337.25, 'mobile':843}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088dc63e394239588':{'fs':'14', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088dc63e394239588':{'desktop':550.75, 'mobile':511.75}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_24747':{'desktop':168.25, 'mobile':644.5}});elementos_css = Object.assign(elementos_css,{'e_486123_1_31159':{'fs':'18', 'lh':'2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_31159':{'desktop':220.25, 'mobile':702.5}});elementos_css = Object.assign(elementos_css,{'e_486123_1_31449':{'fs':'56.9998', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_31449':{'desktop':256.25, 'mobile':744.5}});elementos_css = Object.assign(elementos_css,{'e_486123_1_70361':{'fs':'28.5', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_70361':{'desktop':277.969, 'mobile':764.422}});elementos_css = Object.assign(elementos_css,{'e_486123_1_02093':{'fs':'28.5', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_02093':{'desktop':271.891, 'mobile':760.469}});elementos_css = Object.assign(elementos_css,{'e_486123_1_86313':{'fs':'15', 'lh':'2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_86313':{'desktop':337.25, 'mobile':336.969}});elementos_css = Object.assign(elementos_css,{'e_486123_1_13131':{'fs':'14', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_13131':{'desktop':550.75, 'mobile':1053}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088d6fec157707577':{'fs':'15', 'lh':'1.6'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088d6fec157707577':{'desktop':135.25, 'mobile':119}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088d70cb083489918':{'fs':'20', 'lh':'1.5'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088d70cb083489918':{'desktop':62.25, 'mobile':37}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088d530b030969443':{'fs':'28', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088d530b030969443':{'desktop':95.5, 'mobile':43}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088d539e080589288':{'fs':'15', 'lh':'1.6'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088d539e080589288':{'desktop':170.5, 'mobile':142}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088d5434961251656':{'fs':'12', 'lh':'1.6'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088d5434961251656':{'desktop':561.75, 'mobile':499}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088d54ca595383192':{'fs':'16', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088d54ca595383192':{'desktop':294.5, 'mobile':258}});elementos_css = Object.assign(elementos_css,{'e_486123_1_170791335265ccb088d49bf527620770':{'fs':'12', 'lh':'2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_486123_1_170791335265ccb088d49bf527620770':{'desktop':17.5, 'mobile':7.25}});function InserirScriptsInline(){if(!window.getCrawler()){setTimeout(function(){
},150);
}if(!window.getCrawler()){

 var contadores = $('#e_1336, #e_1342, #e_1337, #e_1339');
 function Contador(){
 if (contadores.length){
 var janela_top = window.scrollY;
 var janela_bottom = janela_top + $(window).height();
 for (var i = 0;i < contadores.length;i++){
 var elemento = $(contadores[i]);
 var elemento_top = elemento.offset().top;
 var elemento_bottom = elemento_top + elemento.height();
 if (elemento_bottom > janela_top && elemento_top < janela_bottom){
 (function(index){
 var elemento_contador = $(contadores[index]);
 contadores.splice(index, 1);
 elemento_contador.html(elemento_contador.html().replace('.', ''));
 var numero = parseInt(elemento_contador.text().match(/[0-9]+/g));
 elemento_contador.find("span").html(elemento_contador.find("span").html().replace(/[0-9]+/, 0));
 var contador = 0;
 var contar = setInterval(function(){
 contador++;
 elemento_contador.find("span").html(elemento_contador.find("span").html().replace(/[0-9]+/, contador));
 if (contador == numero){
 clearInterval(contar);
 }
 }, (2000 / numero));
 })(i);
 Contador();
 break;
 }
 }
 }
 }
 $(document).ready(function(){
 setTimeout(function(){
 Contador();
 }, 250);
 });
 $(document).on('resize scroll', function(){
 setTimeout(function(){
 Contador();
 }, 250);
 });


 var contadores = $('#e_486123_1_170791335265ccb088d83cd314076001, #e_486123_1_170791335265ccb088d8a78071722081, #e_486123_1_170791335265ccb088d84e3804016841, #e_486123_1_170791335265ccb088d871f434338502');
 function Contador(){
 if (contadores.length){
 var janela_top = window.scrollY;
 var janela_bottom = janela_top + $(window).height();
 for (var i = 0;i < contadores.length;i++){
 var elemento = $(contadores[i]);
 var elemento_top = elemento.offset().top;
 var elemento_bottom = elemento_top + elemento.height();
 if (elemento_bottom > janela_top && elemento_top < janela_bottom){
 (function(index){
 var elemento_contador = $(contadores[index]);
 contadores.splice(index, 1);
 elemento_contador.html(elemento_contador.html().replace('.', ''));
 var numero = parseInt(elemento_contador.text().match(/[0-9]+/g));
 elemento_contador.find("span").html(elemento_contador.find("span").html().replace(/[0-9]+/, 0));
 var contador = 0;
 var contar = setInterval(function(){
 contador++;
 elemento_contador.find("span").html(elemento_contador.find("span").html().replace(/[0-9]+/, contador));
 if (contador == numero){
 clearInterval(contar);
 }
 }, (2000 / numero));
 })(i);
 Contador();
 break;
 }
 }
 }
 }
 $(document).ready(function(){
 setTimeout(function(){
 Contador();
 }, 250);
 });
 $(document).on('resize scroll', function(){
 setTimeout(function(){
 Contador();
 }, 250);
 });

}
}var scripts_estatisticas ={}, scripts_marketing ={};
