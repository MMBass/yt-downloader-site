(this["webpackJsonpyt-downloader-site"]=this["webpackJsonpyt-downloader-site"]||[]).push([[0],Array(40).concat([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),i=n(13),r=n.n(i),o=n(4),s=(n(40),n(12)),l=n(3),d=(n(41),n(42),n(5)),u={setMode:function(e){return{type:"setMode",payload:e}},setGlobalFormat:function(e){return{type:"setGlobalFormat",payload:e}}},j=(n(43),n(1));var b=function(e){return Object(j.jsx)("div",{className:"flex-container",children:e.children})};n(45);var f=function(){return Object(j.jsxs)("nav",{className:"navbar",children:[Object(j.jsx)(s.b,{to:"yt-downloader-site/",children:"Home"}),Object(j.jsx)(s.b,{to:"yt-downloader-site/history",children:"History"}),Object(j.jsx)(s.b,{to:"yt-downloader-site/settings",children:"Settings"})]})};n(46);var h=function(){return Object(j.jsx)("div",{className:"lang-switch",children:Object(j.jsx)("span",{children:" HE "})})};n(47);var O=function(e){return Object(j.jsx)("select",{className:"select",onChange:function(t){e.handleChange(t.target.value)},children:e.options.map((function(e){return Object(j.jsx)("option",{value:e,children:e})}))})};n(48);var p=function(){return Object(o.c)((function(e){return e.loaderLine}))?Object(j.jsx)("div",{className:"loaderLine",children:Object(j.jsx)("div",{className:"innerLoaderLine"})}):null};var v=function(){var e=Object(o.b)(),t=Object(d.a)(u,e).setMode;return Object(j.jsxs)("div",{id:"HEADER",children:[Object(j.jsx)(p,{}),Object(j.jsxs)(b,{children:[Object(j.jsx)("h1",{children:"YT DOWNLOADER"}),Object(j.jsx)(f,{}),Object(j.jsx)(O,{options:["video","list","music"],handleChange:function(e){t(e)}}),Object(j.jsx)(h,{})]})]})};n(49);var m=function(e){return Object(j.jsx)("div",{className:"layout",children:e.children})},x=(n(50),n(9)),y=(n(51),n(19)),g=n.n(y),w=n(29),N=n(14),k=n.n(N),S=k.a.create({baseURL:"https://www.googleapis.com/youtube/v3/"}),C=k.a.create({baseURL:"https://bass-ytd.herokuapp.com/",timeout:25e3,headers:{"X-Custom-Header":"foobar"}}),L=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"openPlayer":return t.payload;default:return e}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setVideo":return t.payload;default:return e}},E=[],F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setList":return e.concat(t.payload);case"resetList":return[];default:return e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"openLoader":return t.payload;default:return e}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setSelected":return t.payload;default:return e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"openModal":return t.payload;default:return e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setFormats":return t.payload;default:return e}},_={mode:"video",globalFormat:"audio"},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0,n=e;switch(t.type){case"setMode":return n.mode=t.payload,n;case"setGlobalFormat":return n.globalFormat=t.payload,n;default:return e}},Y=Object(d.b)({player:L,video:I,vidList:F,loaderLine:P,selected:M,openModal:T,formats:A,settings:R}),D=Object(d.c)(Y,{}),H={setList:function(e){return{type:"setList",payload:e}},resetList:function(e){return{type:"resetList",payload:e}}},G={openLoader:function(e){return{type:"openLoader",payload:e}}},K=0,q=Object(d.a)(H,D.dispatch),V=q.resetList,B=q.setList,W=Object(d.a)(G,D.dispatch).openLoader;function J(){return(J=Object(w.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:W(!0),C.get("ytsr",{params:{term:t}}).then((function(e){console.log(e.data),B(e.data),W(!1)})).catch((function(e){console.log(e),W(!1)})).then((function(){}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U=function e(t,n){var c=window.localStorage.getItem("API_KEY");W(!0),0===K&&V(!0),S.get("search",{params:{q:t,key:c,maxResults:"500",part:"snippet",type:"video",pageToken:n}}).then((function(n){B(n.data.items),K<5?(K++,e(t,n.data.nextPageToken)):K=0,W(!1)})).catch((function(e){console.log(e),function(e){J.apply(this,arguments)}(t)})).then((function(){}))},z=n(15),X=n(10);n(71);var Z=function(e){return Object(j.jsx)("button",{type:e.type,children:e.children||e.btnContent})};n(72);var Q=function(e){return Object(j.jsx)("input",{name:e.name,placeholder:e.placeholder,onChange:e.onChange})};var $=function(){var e=Object(c.useState)(""),t=Object(x.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),r=Object(x.a)(i,2),o=r[0],s=r[1],l=function(e){var t=e.target.value;switch(e.target.name){case"key-input":s(t);break;case"video-search":a(d(t));break;default:return}},d=function(e){if(e.indexOf("youtu.be/")>=0){var t=e.indexOf(".be/");return e.slice(t+4,t+4+11)}if(e.indexOf("youtube.com")>=0&&e.indexOf("v=")>=0){var n=e.indexOf("v=");return e.slice(n+2,n+2+11)}return e};return!window.localStorage.getItem("API_KEY")||window.localStorage.getItem("API_KEY").length<6?Object(j.jsxs)("form",{onSubmit:function(e){window.localStorage.setItem("API_KEY",o)},children:[Object(j.jsx)(Q,{onChange:l,name:"key-input",type:"text",placeholder:"Enter the api key first"}),Object(j.jsx)(Z,{type:"submit",children:Object(j.jsx)(X.c,{})})]}):Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),U(n)},children:[Object(j.jsx)(Q,{onChange:l,name:"video-search",type:"text",placeholder:"Search text / video id / link..."}),Object(j.jsx)(Z,{type:"submit",children:Object(j.jsx)(z.b,{})})]})},ee=(n(73),n(11)),te=(n(74),n(75),{setFormats:function(e){return{type:"setFormats",payload:e}}}),ne={openModal:function(e){return{type:"openModal",payload:e}}},ce=function(e){var t=Object(d.a)(ne,D.dispatch).openModal,n=Object(d.a)(te,D.dispatch).setFormats,c=Object(d.a)(G,D.dispatch).openLoader;c(!0);var a=window.localStorage.getItem("API_KEY");C.get("getInfo",{params:{v_id:e.id.videoId,key:a}}).then((function(e){n(e.data),t(!0),c(!1)})).catch((function(e){console.log(e),c(!1)})).then((function(){c(!1)}))},ae={setSelected:function(e){return{type:"setSelected",payload:e}}};var ie=function(e){var t=Object(o.b)(),n=Object(d.a)(ae,t).setSelected;console.log(e);var c="Video Title",a="Channel Title";return e.snippet&&(a=e.snippet.channelTitle,c=e.snippet.title),e.title&&(a=e.author.name,c=e.title),c=c.length>65?c.substr(0,64)+"...":c,Object(j.jsxs)("div",{className:"vid-details",children:[Object(j.jsx)("p",{className:"vid-title",children:c}),Object(j.jsx)("i",{className:"vid-source",children:a}),Object(j.jsxs)("small",{className:"vid-footer",onClick:function(t){return function(t){t.stopPropagation(),n(e),ce(e)}(t)},children:[" ",e.publishTime," ",Object(j.jsx)(X.a,{})]})]})};n(76);var re=function(){return Object(j.jsxs)("div",{className:"example-paragraph",children:[Object(j.jsx)("div",{className:"empty top-empty"}),Object(j.jsx)("div",{className:"empty middle-empty"}),Object(j.jsx)("div",{className:"empty bottom-empty"})]})},oe=(n(77),{openPlayer:function(e){return{type:"openPlayer",payload:e}}});var se=function(){var e=Object(o.b)(),t=Object(d.a)(oe,e).openPlayer,n=Object(o.c)((function(e){return e.player}));return Object(j.jsx)("div",{id:"MINIMIZE_PLAYER",children:Object(j.jsx)(Z,{children:n?Object(j.jsx)(X.b,{className:"react-icons",onClick:function(){return t(!1)}}):Object(j.jsx)(z.a,{className:"react-icons",onClick:function(){return t(!0)}})})})};var le=function(e){var t=Object(o.c)((function(e){return e.player})),n=Object(o.c)((function(e){return e.video})),c=n.id?Object(j.jsx)(ie,Object(ee.a)({},n)):Object(j.jsx)(re,{}),a=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"frame-wrapper",children:n.id?Object(j.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(n.id.videoId),title:e.title||"video",frameBorder:"0",allowFullScreen:!0}):Object(j.jsx)("iframe",{title:"uniqe",frameBorder:"0"})}),c]})};return Object(j.jsxs)("div",{className:t?"player":"player fold-player",children:[Object(j.jsx)(se,{}),t&&Object(j.jsx)(a,{})]})},de=(n(78),n(79),{setVideo:function(e){return{type:"setVideo",payload:e}}});var ue=function(e){var t=Object(o.b)(),n=Object(d.a)(de,t).setVideo,c=Object(d.a)(oe,t).openPlayer;return Object(j.jsxs)("div",{className:"vid-item",onClick:function(){return n(e),void c(!0)},children:[e.id?Object(j.jsx)("img",{className:"vid-thumb",src:e.bestThumbnail?e.bestThumbnail.url:e.snippet.thumbnails.default.url,alt:e.id,lazyload:!0}):Object(j.jsx)("img",{className:"vid-thumb",src:"",alt:null}),e.id?Object(j.jsx)(ie,Object(ee.a)({},e)):Object(j.jsx)(re,{})]})};var je=function(){var e=Object(o.c)((function(e){return e.vidList}));return e.length<1&&(e=[{},{},{},{},{},{},{},{},{},{},{},{}]),Object(j.jsx)("div",{className:"vid-list",children:Object(j.jsx)(b,{children:e.map((function(e){return Object(j.jsx)(j.Fragment,{children:Object(c.createElement)(ue,Object(ee.a)(Object(ee.a)({},e),{},{key:new Date||e.id.videoId}))})}))})})};var be=function(){return Object(j.jsxs)("div",{className:"display-layout",children:[Object(j.jsx)(le,{"data-src":""}),Object(j.jsx)(je,{})]})};n(80);var fe=function(e){var t=Object(o.b)(),n=Object(d.a)(ae,t).setSelected,c=Object(o.c)((function(e){return e.video}));return Object(j.jsx)("div",{className:"down-btn",onClick:function(){return n(c),void ce(c)},children:Object(j.jsx)(Z,{children:Object(j.jsx)(X.a,{})})})},he=(n(81),function(e){var t=Object(d.a)(G,D.dispatch).openLoader,n=D.getState();window.localStorage.getItem("API_KEY");t(!0),window.location.href="https://bass-ytd.herokuapp.com/download?v_id=".concat(n.selected.id.videoId,"&format=").concat(e),t(!1)});var Oe=function(e){var t=Object(c.useState)(""),n=Object(x.a)(t,2),a=n[0],i=n[1],r=Object(o.c)((function(e){return e.formats})),s=Object(o.b)(),l=Object(d.a)(ne,s).openModal;return Object(j.jsx)("div",{className:"modalcontainer",children:Object(j.jsxs)("div",{className:"modal",children:[Object(j.jsx)("div",{className:"close",onClick:function(){return l(!1)},children:Object(j.jsx)("span",{children:"+"})}),Object(j.jsx)("h2",{children:"Select Format"}),Object(j.jsx)("div",{className:"content",children:r.map((function(e){return Object(j.jsxs)("div",{className:"format-item-wrapper",children:[Object(j.jsx)("input",{type:"radio",id:e.quality,name:"format",value:e.code,onChange:function(){return t=e.code,void i(t);var t}}),Object(j.jsx)("label",{htmlFor:e.quality,children:e.quality}),Object(j.jsx)("label",{className:"format-label",htmlFor:e.format,children:e.format})]})}))}),Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("span",{onClick:function(){return l(!1)},children:"Cancel"}),Object(j.jsx)("span",{onClick:function(){a&&(he(a),l(!1))},children:"Download"})]})]})})};var pe=function(){var e=Object(o.c)((function(e){return e.video})),t=Object(o.c)((function(e){return e.openModal}));return Object(j.jsxs)("div",{className:"home-page",children:[Object(j.jsx)($,{}),Object(j.jsx)(be,{}),e.id&&Object(j.jsx)(fe,{}),t&&Object(j.jsx)(Oe,{})]})};n(82),n(83);var ve=function(e){return Object(j.jsx)("div",{className:"inner-frame",children:e.children})};n(84);var me=function(e){return Object(j.jsx)("div",{className:"inner-nav",children:e.items.map((function(t){var n="inner-nav-link";return e.active===t.id&&(n+=" active"),Object(j.jsx)("p",{className:n,onClick:function(){return e.navClick(t.id)},children:t.text})}))})};var xe=function(){Object(o.b)();var e=Object(c.useState)(3),t=Object(x.a)(e,2),n=t[0];t[1],Object(c.useEffect)((function(){}),[]);var a=function(){if(1!==n)return Object(j.jsx)(je,{})};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(me,{items:[{text:"Search",id:1},{text:"Watch",id:2},{text:"Download",id:3}],navClick:function(e){},active:n}),Object(j.jsx)(ve,{id:"HISTORY_PAGE",children:Object(j.jsx)(a,{})})]})};n(85);var ye=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(ve,{id:"SETTINGS_PAGE"})})};n(86);var ge=function(){return Object(j.jsxs)("div",{id:"NO_MATCH_WRAPPER",children:[Object(j.jsx)("p",{children:"404"}),Object(j.jsx)("p",{children:"Nothing Here"})]})};var we=function(){var e=Object(o.c)((function(e){return e.settings.mode}));return Object(j.jsxs)(s.a,{children:[Object(j.jsx)(v,{}),Object(j.jsx)(m,{children:Object(j.jsx)("div",{className:e,children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"yt-downloader-site/",element:Object(j.jsx)(pe,{})}),Object(j.jsx)(l.a,{exact:!0,path:"yt-downloader-site/history",element:Object(j.jsx)(xe,{})}),Object(j.jsx)(l.a,{exact:!0,path:"yt-downloader-site/settings",element:Object(j.jsx)(ye,{})}),Object(j.jsx)(l.a,{path:"yt-downloader-site/*",element:Object(j.jsx)(ge,{})})]})})})]})},Ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,88)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(o.a,{store:D,children:Object(j.jsx)(we,{})})}),document.getElementById("root")),Ne()}]),[[87,1,2]]]);
//# sourceMappingURL=main.bcd6dc78.chunk.js.map