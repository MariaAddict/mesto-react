(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{10:function(e,a,t){e.exports=t(16)},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(5),c=t.n(r),l=(t(15),t(9)),i=t(1),s=t(6),m=t.n(s);var u=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{src:m.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto",className:"header__logo"}))},d=o.a.createContext();var _=function(e){var a=o.a.useContext(d),t=e.owner._id===a._id,n=e.likes.some((function(e){return e._id===a._id}));return o.a.createElement("li",{className:"cards__item"},o.a.createElement("img",{src:e.link,alt:e.name,className:"cards__image",onClick:function(){e.onCardClick(e)}}),o.a.createElement("div",{className:"cards__description"},o.a.createElement("h3",{className:"cards__title"},e.name),o.a.createElement("div",{className:"cards__likes"},o.a.createElement("button",{type:"button",onClick:function(){e.onCardLike(e)},className:"cards__like ".concat(n?"card__like_pressed":"")}),o.a.createElement("p",{className:"cards__number-of-likes"},e.likes.length))),o.a.createElement("button",{type:"button",className:"cards__delete ".concat(t?"":"cards__delete_hidden"),onClick:function(){e.onCardDelete(e)}}))};var f=function(e){var a=o.a.useContext(d);return o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__overlay",onClick:e.onEditAvatar},o.a.createElement("img",{src:a.avatar,alt:"\u0424\u043e\u0442\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"profile__image"})),o.a.createElement("div",{className:"profile__info"},o.a.createElement("h1",{className:"profile__name"},a.name),o.a.createElement("button",{type:"button",className:"profile__info-button",onClick:e.onEditProfile}),o.a.createElement("p",{className:"profile__activity-type"},a.about)),o.a.createElement("button",{type:"button",className:"profile__add-button",onClick:e.onAddPlace})),o.a.createElement("section",null,o.a.createElement("ul",{className:"cards"},e.cards.map((function(a){return o.a.createElement(_,Object.assign({key:a._id},a,{onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete}))})))))};var h=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"&COPY; 2020 Mesto Russia"))};var p=function(e){return o.a.createElement("div",{className:"modal modal_type_figure ".concat(e.hasOwnProperty("link")?"modal_opened":"")},o.a.createElement("div",{className:"modal__container modal__container_type_image"},o.a.createElement("figure",{className:"modal__figure"},o.a.createElement("img",{src:e.link,alt:e.name,className:"modal__image"}),o.a.createElement("figcaption",{className:"modal__caption"},e.name)),o.a.createElement("button",{type:"button",className:"modal__close-button",onClick:e.onClose})))},v=t(7),E=t(8),b=function(e){return e.ok?e.json():Promise.reject(e.status)},g=new(function(){function e(a,t){var n=t.headers;Object(v.a)(this,e),this._url=a,this._headers=n}return Object(E.a)(e,[{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"cards"),{method:"GET",headers:this._headers}).then(b)}},{key:"addCard",value:function(e){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(b)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then(b)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"users/me"),{method:"GET",headers:this._headers}).then(b)}},{key:"editUserInfo",value:function(e){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(b)}},{key:"changeLike",value:function(e,a){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:a?"PUT":"DELETE",headers:this._headers}).then(b)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(b)}},{key:"getAppInfo",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}}]),e}())("https://mesto.nomoreparties.co/v1/cohort-15/",{headers:{"Content-Type":"application/json",authorization:"e7e08b6b-adf3-43f0-9ed1-13df27223916"}});var C=function(e){return o.a.createElement("div",{className:"modal modal_type_".concat(e.name," ").concat(e.isOpen?"modal_opened":"")},o.a.createElement("div",{className:"modal__container"},o.a.createElement("h2",{className:"modal__title"},e.title),o.a.createElement("form",{action:"#",name:"modal-form",className:"modal__form modal__container_type_".concat(e.name),onSubmit:e.onSubmit},e.children),o.a.createElement("button",{type:"button",className:"modal__close-button",onClick:e.onClose})))};var N=function(e){var a=e.isOpen,t=e.onClose,n=e.onUpdateUser,r=o.a.useContext(d),c=o.a.useState(""),l=Object(i.a)(c,2),s=l[0],m=l[1],u=o.a.useState(""),_=Object(i.a)(u,2),f=_[0],h=_[1];return o.a.useEffect((function(){m(r.name),h(r.about)}),[r]),o.a.createElement(C,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:a,onClose:t,onSubmit:function(e){e.preventDefault(),n({name:s,about:f})}},o.a.createElement("input",{type:"text",name:"name",className:"modal__item modal__item_type_name",placeholder:"\u0418\u043c\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f",value:s,onChange:function(e){m(e.target.value)}}),o.a.createElement("span",{className:"modal__error modal__error_visible",id:"label-error"}),o.a.createElement("input",{type:"text",name:"activity",className:"modal__item modal__item_type_activity-type",placeholder:"\u041e \u0441\u0435\u0431\u0435",value:f,onChange:function(e){h(e.target.value)}}),o.a.createElement("span",{className:"modal__error modal__error_visible",id:"activity-error"}),o.a.createElement("button",{type:"submit",className:"modal__save-button"},o.a.createElement("span",{className:"modal__name-button"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))};var y=function(e){var a=e.isOpen,t=e.onClose,n=e.onUpdateAvatar,r=o.a.useRef();return o.a.createElement(C,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:a,onClose:t,onSubmit:function(e){e.preventDefault(),n({avatar:r.current.value}),r.current.value=""}},o.a.createElement("input",{ref:r,type:"url",name:"link",className:"modal__item modal__item_type_url-image",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",id:"url"}),o.a.createElement("span",{className:"modal__error modal__error_visible",id:"url-error"}),o.a.createElement("button",{type:"submit",className:"modal__save-button"},o.a.createElement("span",{className:"modal__name-button"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))};var k=function(e){var a=e.isOpen,t=e.onClose,n=e.onAddPlace,r=o.a.useState(""),c=Object(i.a)(r,2),l=c[0],s=c[1],m=o.a.useState(""),u=Object(i.a)(m,2),d=u[0],_=u[1];return o.a.createElement(C,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:a,onClose:t,onSubmit:function(e){e.preventDefault(),n({name:l,link:d}),s(""),_("")}},o.a.createElement("input",{type:"text",name:"name",className:"modal__item modal__item_type_header-image",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",id:"name",onChange:function(e){s(e.target.value)},value:l}),o.a.createElement("span",{className:"modal__error modal__error_visible",id:"name-error"}),o.a.createElement("input",{type:"url",name:"link",className:"modal__item modal__item_type_url-image",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",id:"url",onChange:function(e){_(e.target.value)},value:d}),o.a.createElement("span",{className:"modal__error modal__error_visible",id:"url-error"}),o.a.createElement("button",{type:"submit",className:"modal__save-button"},o.a.createElement("span",{className:"modal__name-button"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c")))};var O=function(){var e=o.a.useState(!1),a=Object(i.a)(e,2),t=a[0],n=a[1],r=o.a.useState(!1),c=Object(i.a)(r,2),s=c[0],m=c[1],_=o.a.useState(!1),v=Object(i.a)(_,2),E=v[0],b=v[1],C=o.a.useState({}),O=Object(i.a)(C,2),S=O[0],j=O[1],P=o.a.useState({about:"",avatar:"",cohort:"",name:"",_id:""}),A=Object(i.a)(P,2),U=A[0],w=A[1],I=o.a.useState([]),x=Object(i.a)(I,2),D=x[0],T=x[1];function L(){m(!1),n(!1),b(!1),j({})}return o.a.useEffect((function(){Promise.all([g.getUserInfo(),g.getInitialCards()]).then((function(e){var a=Object(i.a)(e,2),t=a[0],n=a[1];w(t),T(n)})).catch((function(e){console.log(e)}))}),[]),o.a.createElement(d.Provider,{value:U},o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"page"},o.a.createElement(u,null),o.a.createElement(f,{onEditProfile:function(){n(!0)},onAddPlace:function(){m(!0)},onEditAvatar:function(){b(!0)},onCardClick:function(e){j(e)},onCardDelete:function(e){g.deleteCard(e._id).then((function(){var a=D.filter((function(a){return!(a._id===e._id)}));T(a)})).catch((function(e){console.log(e)}))},onCardLike:function(e){var a=e.likes.some((function(e){return e._id===U._id}));g.changeLike(e._id,!a).then((function(a){var t=D.map((function(t){return t._id===e._id?a:t}));T(t)})).catch((function(e){console.log(e)}))},cards:D}),o.a.createElement(h,null),o.a.createElement(N,{isOpen:t,onClose:L,onUpdateUser:function(e){g.editUserInfo(e).then((function(e){w(e),n(!1)})).catch((function(e){console.log(e)}))}}),o.a.createElement(y,{isOpen:E,onClose:L,onUpdateAvatar:function(e){g.changeAvatar(e).then((function(e){w(e),b(!1)})).catch((function(e){console.log(e)}))}}),o.a.createElement(k,{isOpen:s,onClose:L,onAddPlace:function(e){g.addCard(e).then((function(e){T([e].concat(Object(l.a)(D))),m(!1)})).catch((function(e){console.log(e)}))}}),o.a.createElement(p,Object.assign({},S,{onClose:L})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,a,t){e.exports=t.p+"static/media/logo.855a8c98.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.f17ea53c.chunk.js.map