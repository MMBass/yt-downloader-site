(this["webpackJsonpyt-downloader-site"]=this["webpackJsonpyt-downloader-site"]||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),i=n(13),r=n.n(i),s=n(4),o=(n(38),n(12)),l=n(3),d=(n(39),n(40),n(41),n(1));var j=function(e){return Object(d.jsx)("div",{className:"flex-container",children:e.children})};n(43);var u=function(){return Object(d.jsxs)("nav",{className:"navbar",children:[Object(d.jsx)(o.b,{to:"/",children:"Home"}),Object(d.jsx)(o.b,{to:"history",children:"History"}),Object(d.jsx)(o.b,{to:"settings",children:"Settings"})]})};n(44);var b=function(){return Object(d.jsx)("div",{className:"lang-switch",children:Object(d.jsx)("span",{children:" HE "})})};n(45);var h=function(){return Object(s.c)((function(e){return e.loaderLine}))?Object(d.jsx)("div",{className:"loaderLine",children:Object(d.jsx)("div",{className:"innerLoaderLine"})}):null};var p=function(){return Object(d.jsxs)("div",{id:"HEADER",children:[Object(d.jsx)(h,{}),Object(d.jsxs)(j,{children:[Object(d.jsx)("h1",{children:"YT DOWNLOADER"}),Object(d.jsx)(u,{}),Object(d.jsx)(b,{})]})]})};n(46);var O=function(e){return Object(d.jsx)("div",{className:"layout",children:e.children})},f=(n(47),n(9)),v=(n(48),n(5)),m=n(14),x=n.n(m),y=x.a.create({baseURL:"https://www.googleapis.com/youtube/v3/"}),g=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"openPlayer":return t.payload;default:return e}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setVideo":return t.payload;default:return e}},N=[{},{},{},{},{},{},{},{},{},{},{},{}],S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setList":return t.payload;default:return e}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"openLoader":return t.payload;default:return e}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setSelected":return t.payload;default:return e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"openModal":return t.payload;default:return e}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["720p","mp3","mp4","360p"],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setFormats":return t.payload;default:return e}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setName":return t.payload;default:return e}},P=Object(v.b)({player:g,video:w,vidList:S,loaderLine:I,selected:L,openModal:k,formats:C,settings:E}),F=Object(v.c)(P,{}),A={setList:function(e){return{type:"setList",payload:e}}},_={openLoader:function(e){return{type:"openLoader",payload:e}}},M=function(e){var t=Object(v.a)(_,F.dispatch).openLoader,n=Object(v.a)(A,F.dispatch).setList;t(!0);var c=window.localStorage.getItem("API_KEY");y.get("search",{params:{q:e,key:c,maxResults:"100",part:"snippet",type:"video"}}).then((function(e){n(e.data.items),t(!1)})).catch((function(e){console.log(e),t(!1)})).then((function(){}))},R=n(15),T=n(10);n(67);var Y=function(e){return Object(d.jsx)("button",{type:e.type,children:e.children||e.btnContent})};n(68);var H=function(e){return Object(d.jsx)("input",{name:e.name,placeholder:e.placeholder,onChange:e.onChange})};var D=function(){var e=Object(c.useState)(""),t=Object(f.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),r=Object(f.a)(i,2),s=r[0],o=r[1],l=function(e){switch(e.target.name){case"key-input":o(e.target.value);break;case"video-search":a(e.target.value);break;default:return}};return!window.localStorage.getItem("API_KEY")||window.localStorage.getItem("API_KEY").length<6?Object(d.jsxs)("form",{onSubmit:function(e){window.localStorage.setItem("API_KEY",s)},children:[Object(d.jsx)(H,{onChange:l,name:"key-input",type:"text",placeholder:"Enter the api key first"}),Object(d.jsx)(Y,{type:"submit",children:Object(d.jsx)(T.c,{})})]}):Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),M(n)},children:[Object(d.jsx)(H,{onChange:l,name:"video-search",type:"text",placeholder:"Search text / video id / link..."}),Object(d.jsx)(Y,{type:"submit",children:Object(d.jsx)(R.b,{})})]})},K=(n(69),n(11)),q=(n(70),n(71),x.a.create({baseURL:"https://bass-ytd.herokuapp.com/",timeout:8e3,headers:{"X-Custom-Header":"foobar"}})),B={setFormats:function(e){return{type:"setFormats",payload:e}}},V={openModal:function(e){return{type:"openModal",payload:e}}},G=function(e){var t=Object(v.a)(V,F.dispatch).openModal,n=Object(v.a)(B,F.dispatch).setFormats,c=Object(v.a)(_,F.dispatch).openLoader;c(!0);var a=window.localStorage.getItem("API_KEY");q.get("getInfo",{params:{v_id:e.id.videoId,key:a}}).then((function(e){n(e.data),t(!0),c(!1)})).catch((function(e){console.log(e),c(!1)})).then((function(){c(!1)}))},J={setSelected:function(e){return{type:"setSelected",payload:e}}};var U=function(e){var t=Object(s.b)(),n=Object(v.a)(J,t).setSelected;return e.snippet.title=e.snippet.title.length>65?e.snippet.title.substr(0,64)+"...":e.snippet.title,Object(d.jsxs)("div",{className:"vid-details",children:[Object(d.jsx)("p",{className:"vid-title",children:e.snippet.title}),Object(d.jsx)("i",{className:"vid-source",children:e.snippet.channelTitle}),Object(d.jsxs)("small",{className:"vid-footer",onClick:function(){return n(e),void G(e)},children:[" ",e.publishTime," ",Object(d.jsx)(T.a,{})]})]})};n(72);var W=function(){return Object(d.jsxs)("div",{className:"example-paragraph",children:[Object(d.jsx)("div",{className:"empty top-empty"}),Object(d.jsx)("div",{className:"empty middle-empty"}),Object(d.jsx)("div",{className:"empty bottom-empty"})]})},X=(n(73),{openPlayer:function(e){return{type:"openPlayer",payload:e}}});var Z=function(){var e=Object(s.b)(),t=Object(v.a)(X,e).openPlayer,n=Object(s.c)((function(e){return e.player}));return Object(d.jsx)("div",{id:"MINIMIZE_PLAYER",children:Object(d.jsx)(Y,{children:n?Object(d.jsx)(T.b,{className:"react-icons",onClick:function(){return t(!1)}}):Object(d.jsx)(R.a,{className:"react-icons",onClick:function(){return t(!0)}})})})};var z=function(e){var t=Object(s.c)((function(e){return e.player})),n=Object(s.c)((function(e){return e.video})),c=n.id?Object(d.jsx)(U,Object(K.a)({},n)):Object(d.jsx)(W,{}),a=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"frame-wrapper",children:n.id?Object(d.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(n.id.videoId),title:n.snippet.title||"video",frameBorder:"0",allowFullScreen:!0}):Object(d.jsx)("iframe",{title:"uniqe",frameBorder:"0"})}),c]})};return Object(d.jsxs)("div",{className:t?"player":"player fold-player",children:[Object(d.jsx)(Z,{}),t&&Object(d.jsx)(a,{})]})},Q=(n(74),n(75),{setVideo:function(e){return{type:"setVideo",payload:e}}});var $=function(e){var t=Object(s.b)(),n=Object(v.a)(Q,t).setVideo,c=Object(v.a)(X,t).openPlayer;return Object(d.jsxs)("div",{className:"vid-item",onClick:function(){return n(e),void c(!0)},children:[Object(d.jsx)("img",{className:"vid-thumb",src:e.id?e.snippet.thumbnails.default.url:null,alt:e.id?"video thumbnail":null}),e.id?Object(d.jsx)(U,Object(K.a)({},e)):Object(d.jsx)(W,{})]})};var ee=function(){var e=Object(s.c)((function(e){return e.vidList}));return Object(d.jsx)("div",{className:"vid-list",children:Object(d.jsx)(j,{children:e.map((function(e){return Object(d.jsx)(d.Fragment,{children:Object(c.createElement)($,Object(K.a)(Object(K.a)({},e),{},{key:new Date||e.id.videoId}))})}))})})};var te=function(){return Object(d.jsxs)("div",{className:"display-layout",children:[Object(d.jsx)(z,{"data-src":""}),Object(d.jsx)(ee,{})]})};n(76);var ne=function(e){var t=Object(s.b)(),n=Object(v.a)(J,t).setSelected,c=Object(s.c)((function(e){return e.video}));return Object(d.jsx)("div",{className:"down-btn",onClick:function(){return n(c),void G(c)},children:Object(d.jsx)(Y,{children:Object(d.jsx)(T.a,{})})})},ce=(n(77),function(e){var t=Object(v.a)(_,F.dispatch).openLoader,n=F.getState();window.localStorage.getItem("API_KEY");t(!0),window.location.href="https://bass-ytd.herokuapp.com/download?v_id=".concat(n.selected.id.videoId,"&format=").concat(e),t(!1)});var ae=function(e){var t=Object(c.useState)(""),n=Object(f.a)(t,2),a=n[0],i=n[1],r=Object(s.c)((function(e){return e.formats})),o=Object(s.b)(),l=Object(v.a)(V,o).openModal;return Object(d.jsx)("div",{className:"modalcontainer",children:Object(d.jsxs)("div",{className:"modal",children:[Object(d.jsx)("div",{className:"close",onClick:function(){return l(!1)},children:Object(d.jsx)("span",{children:"+"})}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("h2",{children:"Select Format"}),Object(d.jsx)(j,{children:r.map((function(e){return Object(d.jsxs)("div",{className:"format-item-wrapper",children:[Object(d.jsxs)("label",{htmlFor:e.quality,children:[e.format," - ",e.quality]}),Object(d.jsx)("input",{type:"radio",id:e.quality,name:"format",value:e.code,onChange:function(){return t=e.code,void i(t);var t}})]})}))})]}),Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("span",{onClick:function(){return l(!1)},children:"Cancel"}),Object(d.jsx)("span",{onClick:function(){return ce(a),void l(!1)},children:"Download"})]})]})})};var ie=function(){var e=Object(s.c)((function(e){return e.video})),t=Object(s.c)((function(e){return e.openModal}));return Object(d.jsxs)("div",{className:"home-page",children:[Object(d.jsx)(D,{}),Object(d.jsx)(te,{}),e.id&&Object(d.jsx)(ne,{}),t&&Object(d.jsx)(ae,{})]})};n(78),n(79);var re=function(e){return Object(d.jsx)("div",{className:"inner-frame",children:e.children})};var se=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(re,{id:"HISTORY_PAGE"})})};n(80);var oe=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(re,{id:"SETTINGS_PAGE"})})};var le=function(){return Object(d.jsx)("div",{id:"NO_MATCH_WRAPPER",children:Object(d.jsx)("h1",{children:"Nothing Here"})})};var de=function(){return Object(d.jsxs)(o.a,{children:[Object(d.jsx)(p,{}),Object(d.jsx)(O,{children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",element:Object(d.jsx)(ie,{})}),Object(d.jsx)(l.a,{exact:!0,path:"history",element:Object(d.jsx)(se,{})}),Object(d.jsx)(l.a,{exact:!0,path:"settings",element:Object(d.jsx)(oe,{})}),Object(d.jsx)(l.a,{path:"*",element:Object(d.jsx)(le,{})})]})})]})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(s.a,{store:F,children:Object(d.jsx)(de,{})})}),document.getElementById("root")),je()}},[[81,1,2]]]);
//# sourceMappingURL=main.81bcf517.chunk.js.map