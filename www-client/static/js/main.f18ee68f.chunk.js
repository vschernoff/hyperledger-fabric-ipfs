(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{166:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return s});var a=n(19),r=n.n(a),c=n(36),o=n(313),u=n.n(o),i=n(4),s={addDocument:function(e){return f.apply(this,arguments)},getDocument:function(e){return h.apply(this,arguments)}},l=window.location.hostname,m=u()(l,"5001",{protocol:"http"});function d(e){return p.apply(this,arguments)}function p(){return(p=Object(c.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Promise(function(e,n){var a=new FileReader,r=i.d[t.type];void 0===r?e(void 0):(a.readAsArrayBuffer(t),a.onload=function(t){e({file:t.target.result,type:r})})}),e.next=3,n;case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function f(){return(f=Object(c.a)(r.a.mark(function t(n){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=new Promise(function(t,a){d(n).then(function(n){if(void 0===n)t(void 0);else{var r=e.from(n.file),c=n.type;m.add(r,function(e,n){e&&a(e),t({hash:n[0].hash,type:c})})}})}),t.next=3,a;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function h(){return(h=Object(c.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Promise(function(e,n){m.get(t,function(t,a){t&&n(t),e(a[0].content)})}),e.next=3,n;case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}}).call(this,n(2).Buffer)},264:function(e,t){},314:function(e,t,n){e.exports=n.p+"static/media/logo-altoros.b1a90325.svg"},327:function(e,t,n){e.exports=n(878)},332:function(e,t,n){},334:function(e,t,n){},379:function(e,t){},381:function(e,t){},4:function(e,t,n){"use strict";var a={SUCCESS:"ALERT_SUCCESS",ERROR:"ALERT_ERROR",CLEAR:"ALERT_CLEAR"},r={SUCCESS:"CONFIG_SUCCESS",FAILURE:"CONFIG_FAILURE"},c={LOGIN_REQUEST:"USERS_LOGIN_REQUEST",LOGIN_SUCCESS:"USERS_LOGIN_SUCCESS",LOGIN_FAILURE:"USERS_LOGIN_FAILURE",LOGOUT:"USERS_LOGOUT"},o={SHOW:"MODAL_SHOW",HIDE:"MODAL_HIDE",SET_DATA:"MODAL_SET_DATA"},u={addDocument:"addDocument",viewDocument:"viewDocument"},i=["request","success","failure"],s={};["get","getall","add","update"].forEach(function(e){i.forEach(function(t){var n="".concat(e.toUpperCase(),"_").concat(t.toUpperCase());s[n]="DOCUMENT_"+n})});var l={"image/jpg":1,"image/jpeg":1,"audio/mpeg":2,"video/mpeg":3,"application/pdf":4},m={1:"image/jpeg",2:"audio/mpeg",3:"video/mpeg",4:"application/pdf"},d=["request","success","failure"],p={};["add","get"].forEach(function(e){d.forEach(function(t){var n="".concat(e.toUpperCase(),"_").concat(t.toUpperCase());p[n]="IPFS_"+n})}),n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r}),n.d(t,"h",function(){return c}),n.d(t,"f",function(){return o}),n.d(t,"g",function(){return u}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return l}),n.d(t,"e",function(){return m})},425:function(e,t){},426:function(e,t){},429:function(e,t){},431:function(e,t){},452:function(e,t){},454:function(e,t){},471:function(e,t){},473:function(e,t){},477:function(e,t){},486:function(e,t){},488:function(e,t){},524:function(e,t){},526:function(e,t){},531:function(e,t){},533:function(e,t){},649:function(e,t){},665:function(e,t){},875:function(e,t,n){},878:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(161),o=n.n(c),u=(n(332),n(334),n(336),n(338),n(20)),i=n(21),s=n(24),l=n(22),m=n(25),d=n(880),p=n(881),f=n(879),h=n(23),b=n(308),v=n(67),g=n.n(v),E=function(e){return g()(e).format(g.a.localeData().longDateFormat("l")+" "+g.a.localeData().longDateFormat("LT"))},O=n(84),j=Object(O.a)(),S=n(65),y=n(311),D=n(312),T=n(4),C="user",x="token";function N(e){localStorage.setItem(C,JSON.stringify(e)),localStorage.setItem(x,e.token)}function U(){var e=localStorage.getItem(C);return e?JSON.parse(e):null}function w(){localStorage.removeItem(C),localStorage.removeItem(x)}var I=U(),k=I?{loggedIn:!0,user:I}:{};I||j.push("./login");var _=n(13);var A=n(42),L=n(325);var R,H=Object(S.c)({authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T.h.LOGIN_REQUEST:return{loggingIn:!0,user:t.user};case T.h.LOGIN_SUCCESS:return{loggedIn:!0,user:t.user};case T.h.LOGIN_FAILURE:case T.h.LOGOUT:return{};default:return e}},alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T.a.SUCCESS:return{type:"alert-success",message:t.message};case T.a.ERROR:return{type:"alert-danger",message:t.message};case T.a.CLEAR:return{};default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type;if(t.shadowMode)return!1;var a=/(.*)_(REQUEST)/.exec(n),r=/(.*)_(SUCCESS|FAILURE)/.exec(n);return a||r?!!a||!r:e},documents:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T.c.GET_REQUEST:return Object(_.a)({},e,{loading:!0,adding:void 0});case T.c.GET_SUCCESS:return Object(_.a)({},e,{items:t.documents.result,loading:!1});case T.c.GET_FAILURE:return Object(_.a)({},e,{items:{},error:t.error,loading:!1});case T.c.GETALL_REQUEST:return Object(_.a)({},e,{loading:!0,adding:void 0});case T.c.GETALL_SUCCESS:return Object(_.a)({},e,{items:t.documents.result,loading:!1});case T.c.GETALL_FAILURE:return Object(_.a)({},e,{items:{},error:t.error,loading:!1});case T.c.ADD_REQUEST:return Object(_.a)({},e,{adding:!0});case T.c.ADD_SUCCESS:return Object(_.a)({},e,{adding:!1});case T.c.ADD_FAILURE:return Object(_.a)({},e,{error:t.error});case T.c.UPDATE_REQUEST:return Object(_.a)({},e,{adding:!0});case T.c.UPDATE_SUCCESS:return Object(_.a)({},e,{adding:!1});case T.c.UPDATE_FAILURE:return Object(_.a)({},e,{error:t.error});default:return e}},config:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T.b.SUCCESS:return t.config;default:return e}},modals:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.modalId,a=t.type,r=Object(L.a)(t,["modalId","type"]);switch(a){case T.f.SHOW:case T.f.HIDE:return Object(_.a)({},e,Object(A.a)({},n,Object(_.a)({},e[n],r,{show:a===T.f.SHOW})));case T.f.SET_DATA:return Object(_.a)({},e,Object(A.a)({},n,Object(_.a)({},e[n],r)));default:return e}}}),F=Object(D.createLogger)(),G=Object(S.d)(H,Object(S.a)(y.a,F)),P=n(19),M=n.n(P),Q=n(36),J=n(323),W={load:function(){if(q)return R;return q=!0,R=se("/config",{method:"GET"}).then(function(e){return B=e})},get:function(){return B},update:function(){return Promise.all([V(),Z()])},getPeers:function(){if(B.peers)return B.peers;var e=B["network-config"][B.org];return B.peers=Object.keys(e).filter(function(e){return e.startsWith("peer")}),B.peers},getIpAddress:function(){if(B.ip_address)return B.ip_address;var e=B["network-config"][B.org];return B.ip_address=e.ip_address,B.ip_address},getChannels:V,getChaincodes:Z},B={org:""},q=!1;function z(e,t,n){return B[t]?Promise.resolve(B[t]):e.promise?e.promise:(e.promise=e().then(function(a){return B[t]={},a[n].forEach(function(e){B[t][e.name]=e.name}),delete e.promise,B[t]}),e.promise)}function V(){return z(ee,"channels","channels")}function Z(){return z(te,"chaincodes","chaincodes")}function Y(){return W.getPeers()[0]}function K(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=W.get().org,c={peer:"".concat(r,"/").concat(Y()),fcn:n,args:JSON.stringify(a)},o=new URL("".concat(window.location.origin,"/channels/").concat(e,"/chaincodes/").concat(t));return Object.keys(c).forEach(function(e){return o.searchParams.append(e,c[e])}),se("".concat(o.pathname).concat(o.search),{method:"GET"})}function X(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=W.get().org;a=a.map(function(e){return e+""});var c={method:"POST",body:JSON.stringify({peers:["".concat(r,"/").concat(Y())],fcn:n,args:a})};return se("/channels/".concat(e,"/chaincodes/").concat(t),c)}function $(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return se("/users",{method:"POST",body:JSON.stringify({username:e.name,orgName:e.org})},t)}function ee(){return se("/channels?peer=".concat(Y()))}function te(){return se("/chaincodes?peer=".concat(Y()))}var ne,ae={obtainToken:function(){return ce.apply(this,arguments)}},re=!1;function ce(){return(ce=Object(Q.a)(M.a.mark(function e(){var t;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=U()){e.next=6;break}return re=!1,w(),window.location.reload(!0),e.abrupt("return",Promise.resolve());case 6:if(!re){e.next=8;break}return e.abrupt("return",ne);case 8:return re=!0,ne=$(t,!1).then(function(e){return re=!1,e.token&&(t.token=e.token,N(t)),W.update().then(function(){return t})}).catch(function(e){return re=!1,Promise.reject(e)}),e.abrupt("return",ne);case 11:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var oe={REFRESH_SET_TIMEOUT:3500,ALERT_SET_TIMEOUT:3e3,AUTHORIZATION_SET_TIMEOUT:1e3},ue={401:{retry:3,timeout:oe.AUTHORIZATION_SET_TIMEOUT,fnc:ae.obtainToken.bind(ae)},500:{retry:0,timeout:oe.REFRESH_SET_TIMEOUT,fnc:Promise.resolve.bind(Promise)}};function ie(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.replace(")","").split("message: ");return Object(J.a)(t,2)[1]||e}function se(e){return le.apply(this,arguments)}function le(){return(le=Object(Q.a)(M.a.mark(function e(t){var n,a,r,c,o,u,i=arguments;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},a=!(i.length>2&&void 0!==i[2])||i[2],n.headers=pe(n.headers),e.next=5,fetch(t,n);case 5:if((r=e.sent).ok){e.next=21;break}if(!(c=ue[r.status])||!a){e.next=16;break}return e.next=11,c.fnc();case 11:return e.next=13,me(t,n,c.timeout,c.retry);case 13:return e.abrupt("return",e.sent);case 16:return e.next=18,r.json();case 18:return o=e.sent,u=o&&o.message&&ie(o.message)||r.statusText,e.abrupt("return",Promise.reject(new Error(u)));case 21:return e.next=23,r.json();case 23:return e.abrupt("return",e.sent);case 24:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var me=function(e,t,n,a){return new Promise(function(r,c){!function e(t,n,a,r,c,o,u){return r<0?o(u):t.apply(this,n).then(c).catch(function(u){r--,setTimeout(function(){e(t,n,a,r,c,o,u)},a)})}(se,[e,t,!1],n,a,r,c)})};function de(){var e=localStorage.getItem(x);return e?{Authorization:"Bearer "+e}:{}}function pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(_.a)({},e,de(),{"Content-Type":"application/json"})}var fe=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})},he={success:function(e){return function(t){return setTimeout(function(){t(be())},oe.ALERT_SET_TIMEOUT),t({type:T.a.SUCCESS,message:e})}},error:function(e){return function(t){return setTimeout(function(){t(be())},oe.ALERT_SET_TIMEOUT),t({type:T.a.ERROR,message:e})}},clear:be};function be(){return{type:T.a.CLEAR}}var ve={login:function(e,t){return N({name:e,org:t}),ae.obtainToken()},logout:function(){w()}};var ge={get:function(e){return Se.apply(this,arguments)},getAll:function(){return ye.apply(this,arguments)},add:function(e){return De.apply(this,arguments)},update:function(e){return Te.apply(this,arguments)}},Ee={get:"getDocument",getAll:"getDocuments",add:"createDocument",update:"updateDocument"},Oe={reference:"reference"},je={common:"common"};function Se(){return(Se=Object(Q.a)(M.a.mark(function e(t){var n,a;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.getChannels();case 2:return n=e.sent,e.next=5,W.getChaincodes();case 5:return a=e.sent,e.next=8,K(n[je.common],a[Oe.reference],Ee.get,[t]);case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function ye(){return(ye=Object(Q.a)(M.a.mark(function e(){var t,n;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.getChannels();case 2:return t=e.sent,e.next=5,W.getChaincodes();case 5:return n=e.sent,e.next=8,K(t[je.common],n[Oe.reference],Ee.getAll,[]);case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function De(){return(De=Object(Q.a)(M.a.mark(function e(t){var n,a;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.getChannels();case 2:return n=e.sent,e.next=5,W.getChaincodes();case 5:return a=e.sent,e.next=8,X(n[je.common],a[Oe.reference],Ee.add,[t.key.documentID,t.value.documentType,t.value.documentDescription,t.value.documentHash]);case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function Te(){return(Te=Object(Q.a)(M.a.mark(function e(t){var n,a;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.getChannels();case 2:return n=e.sent,e.next=5,W.getChaincodes();case 5:return a=e.sent,e.next=8,X(n[je.common],a[Oe.reference],Ee.update,[t.key.documentID,t.value.documentType,t.value.documentDescription,t.value.documentHash]);case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var Ce=n(166),xe={get:function(){return function(e){W.load().then(function(t){e(function(e){return{type:T.b.SUCCESS,config:e}}(t))},function(t){e(function(e){return{type:T.b.FAILURE,error:e}}(t.toString()))})}}};var Ne={register:function(e){return{type:T.f.HIDE,modalId:e}},show:function(e,t){return{type:T.f.SHOW,modalId:e,object:t}},hide:function(e){return{type:T.f.HIDE,modalId:e}}};var Ue={login:function(e,t){return function(n){var a;n((a={username:e},{type:T.h.LOGIN_REQUEST,user:a})),ve.login(e,t).then(function(e){n(function(e){return{type:T.h.LOGIN_SUCCESS,user:e}}(e)),j.push("./")},function(e){n(function(e){return{type:T.h.LOGIN_FAILURE,error:e}}(e.toString())),n(he.error(e.toString()))})}},logout:function(){return function(e){ve.logout(),e({type:T.h.LOGOUT})}}};var we={get:function(e){return function(t){t(function(e){return{type:T.c.GET_REQUEST,documentID:e}}(e)),ge.get(e).then(function(e){t(function(e){return{type:T.c.GET_SUCCESS,documents:e}}(e))},function(e){t(function(e){return{type:T.c.GET_FAILURE,error:e}}(e.toString())),t(he.error(e.toString()))})}},getAll:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(t){t(function(e){return{type:T.c.GETALL_REQUEST,shadowMode:e}}(e)),ge.getAll().then(function(e){t(function(e){return{type:T.c.GETALL_SUCCESS,documents:e}}(e))},function(e){t(function(e){return{type:T.c.GETALL_FAILURE,error:e}}(e.toString())),t(he.error(e.toString()))})}},add:function(e){return function(t){t({type:T.c.ADD_REQUEST}),ge.add(e).then(function(e){t({type:T.c.ADD_SUCCESS}),t(he.success("Document was added"))},function(e){t(function(e){return{type:T.c.ADD_FAILURE,error:e}}(e.toString())),t(he.error(e.toString()))})}},update:function(e){return function(t){t({type:T.c.UPDATE_REQUEST}),ge.update(e).then(function(e){t({type:T.c.UPDATE_SUCCESS}),t(he.success("Document was updated"))},function(e){t(function(e){return{type:T.c.UPDATE_FAILURE,error:e}}(e.toString())),t(he.error(e.toString()))})}}};var Ie=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=(new Date).getFullYear();return r.a.createElement("footer",{className:"row-custom footer"},r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"text-white text-center"},"\xa9 ",e," Altoros. All rights reserved")))}}]),t}(r.a.Component),ke=n(882),_e=n(314),Ae=n.n(_e),Le=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.user,t=(new Date).toLocaleDateString();return r.a.createElement("nav",{className:"row-custom header navbar navbar-light navbar-expand"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(ke.a,{exact:!0,to:"/",className:"nav-link"},r.a.createElement("img",{src:Ae.a,alt:"logo",className:"logo"}))),e&&r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"ml-5 text-white"},"Hi, ",r.a.createElement("b",null,e.name)),r.a.createElement("div",{className:"nav navbar-nav text-white"},t),r.a.createElement("ul",{className:"nav navbar-nav pull-xs-right"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(ke.a,{to:"/login",className:"nav-link text-white"},"Logout")))))}}]),t}(r.a.Component);var Re=Object(h.b)(function(e){return{user:e.authentication.user}})(Le),He=n(7),Fe=n(316),Ge=n.n(Fe),Pe={content:{width:"100%",height:"100%",top:"0",left:"0",cursor:"default","background-color":"rgba(255, 255, 255, 0.1)"},overlay:{"z-index":"20"}},Me=function(e){function t(e){var n;return Object(u.a)(this,t),n=Object(s.a)(this,Object(l.a)(t).call(this,e)),Object(He.a)(Object(He.a)(n)).handleCloseModal=n.handleCloseModal.bind(Object(He.a)(Object(He.a)(n))),Object(He.a)(Object(He.a)(n)).setSubmitFn=n.setSubmitFn.bind(Object(He.a)(Object(He.a)(n))),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.modalId;(0,e.dispatch)(Ne.register(t))}},{key:"setSubmitFn",value:function(e){this.handleSubmit=e}},{key:"handleCloseModal",value:function(){var e=this.props,t=e.modalId;(0,e.dispatch)(Ne.hide(t))}},{key:"render",value:function(){var e=this,t=this.props,n=t.modalId,a=t.modals,c=t.children,o=t.footer,u=void 0===o||o,i=t.submitText,s=void 0===i?"Save":i,l=a[n];return l&&l.show?(l.modalId=n,r.a.createElement(Ge.a,{isOpen:l.show,style:Pe},r.a.createElement("div",{className:"modal",tabIndex:"-1",role:"dialog",style:{display:"block"}},r.a.createElement("div",{className:(this.props.large?"modal-lg":"")+" modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},this.props.title),r.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:this.handleCloseModal},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"col"},r.a.Children.map(c,function(t){return r.a.cloneElement(t,Object(_.a)({setSubmitFn:e.setSubmitFn,data:l.data,initData:l.object,modal:l},e.props))}))),u&&r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(t){e.handleSubmit(t)}},s),r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:this.handleCloseModal},"Close"))))))):null}}],[{key:"open",value:function(e,t,n){e(Ne.show(t,n))}}]),t}(r.a.Component);var Qe=Object(h.b)(function(e){return{modals:e.modals}})(Me),Je=(n(875),function(e){function t(e){var n;return Object(u.a)(this,t),n=Object(s.a)(this,Object(l.a)(t).call(this,e)),Object(He.a)(Object(He.a)(n)).cancel=n.cancel.bind(Object(He.a)(Object(He.a)(n))),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.alert;return r.a.createElement("div",null,r.a.createElement("div",{className:"notification "+(e.message?"fadein":"fadeout invisible")},e.message&&r.a.createElement("div",{className:"d-flex justify-content-between align-items-between  alert ".concat(e.type||"")},r.a.createElement("div",{className:"m-1 align-items-center message-block"},e.message instanceof Array?e.message.map(function(e){return r.a.createElement("div",{className:"m-1 border"},r.a.createElement("span",{className:"w-100 message-text"},e))}):r.a.createElement("div",{className:"m-1"},r.a.createElement("span",{className:"w-100 message-text"},e.message))),r.a.createElement("div",{className:"m-1 d-flex align-items-center"},r.a.createElement("span",{"aria-hidden":"true",onClick:this.cancel,className:"close-btn"},"\xd7")))))}},{key:"cancel",value:function(){this.props.dispatch(he.clear())}}]),t}(r.a.Component));var We=Object(h.b)(function(e){return{alert:e.alert,user:e.authentication.user}})(Je),Be=n(324),qe=function(e){function t(e){var n;Object(u.a)(this,t);var a=(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).props.initData||{key:{documentID:fe()},value:{documentDescription:"",documentHash:"",documentType:0,timestamp:0,updated:0}};return n.state={document:a,submitted:!1},Object(He.a)(Object(He.a)(n)).handleChange=n.handleChange.bind(Object(He.a)(Object(He.a)(n))),Object(He.a)(Object(He.a)(n)).handleSubmit=n.handleSubmit.bind(Object(He.a)(Object(He.a)(n))),Object(He.a)(Object(He.a)(n)).changeDocumentHash=n.changeDocumentHash.bind(Object(He.a)(Object(He.a)(n))),Object(He.a)(Object(He.a)(n)).changeDocumentType=n.changeDocumentType.bind(Object(He.a)(Object(He.a)(n))),n.props.setSubmitFn&&n.props.setSubmitFn(n.handleSubmit),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"onDrop",value:function(e){var t=this;Ce.a.addDocument(e[0]).then(function(e){e?(t.changeDocumentHash(e.hash),t.changeDocumentType(e.type),t.props.dispatch(he.success("Document file was uploaded"))):t.props.dispatch(he.error("Document type is not supported"))},function(e){t.props.dispatch(he.error("Error: ".concat(e.toString())))})}},{key:"changeDocumentHash",value:function(e){var t=this.state.document;this.setState({document:Object(_.a)({},t,{value:Object(_.a)({},t.value,{documentHash:e})})})}},{key:"changeDocumentType",value:function(e){var t=this.state.document;this.setState({document:Object(_.a)({},t,{value:Object(_.a)({},t.value,{documentType:e})})})}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value,r=this.state.document;this.setState({document:Object(_.a)({},r,{value:Object(_.a)({},r.value,Object(A.a)({},n,a))}),submitted:!1})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({submitted:!0});var t=this.state.document;t.value.documentHash&&this.props.dispatch(we.add(t))}},{key:"render",value:function(){var e=this,t=this.state,n=t.document,a=t.submitted;return r.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"documentDescription"},"Description"),r.a.createElement("div",{className:"input-group"},r.a.createElement("textarea",{className:"form-control",name:"documentDescription",value:n.value.documentDescription,ref:function(t){e.documentDescriptionTextArea=t},onChange:this.handleChange}))),r.a.createElement(Be.a,{onDrop:this.onDrop.bind(this)},function(e){var t=e.getRootProps,c=e.getInputProps;return r.a.createElement("div",null,r.a.createElement("div",Object.assign({},t(),{className:"text-center drop-zone-section w-75"+(a&&!n.value.documentHash?" border-danger":"")}),r.a.createElement("input",c()),r.a.createElement("div",{className:"d-table w-100 h-100"},r.a.createElement("p",{className:"d-table-cell align-middle bg-light"},"Drop file here, or click to select file"))),a&&!n.value.documentHash&&r.a.createElement("div",{className:"text-danger invalid-feedback"},"Document file is required"))}))}}]),t}(r.a.Component);var ze=Object(h.b)(function(e){return{document:e.document}})(qe),Ve=function(e){function t(e){var n;Object(u.a)(this,t);var a=(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).props.initData||{key:{documentID:fe()},value:{documentDescription:"",documentHash:"",documentType:0,timestamp:0,updated:0}};return n.state={document:a,objUrl:""},Object(He.a)(Object(He.a)(n)).getDocumentUrl=n.getDocumentUrl.bind(Object(He.a)(Object(He.a)(n))),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"getDocumentUrl",value:function(){var e=this,t=this.state.document;t&&t.value.documentHash&&Ce.a.getDocument(t.value.documentHash).then(function(n){var a=new Blob([n],{type:T.e[t.value.documentType]}),r=URL.createObjectURL(a);e.setState({objUrl:r})},function(t){e.props.dispatch(he.error("Error: ".concat(t.toString())))})}},{key:"render",value:function(){var e=this,t=this.state.document;return t?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"documentDescription"},"Description"),r.a.createElement("div",{className:"input-group"},r.a.createElement("textarea",{className:"form-control",name:"documentDescription",value:t.value.documentDescription,readOnly:!0}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"documentHash"},"Document Hash"),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control",name:"documentHash",value:t.value.documentHash,readOnly:!0}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"documentHash"},"Document Type"),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control",name:"documentHash",value:T.e[t.value.documentType],readOnly:!0}))),t.value.documentHash&&r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group justify-content-center "},r.a.createElement("button",{className:"btn btn-sm btn-primary w-50 m-2",title:"Get document from IPFS",onClick:function(){return e.getDocumentUrl()}},"Get document from IPFS"))),this.state.objUrl&&r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"input-group justify-content-center"},r.a.createElement("a",{className:"btn btn-sm btn-primary w-50 m-2",title:"Download document",href:this.state.objUrl,target:"_blank"},"Download document"))))):null}}]),t}(r.a.Component);var Ze=Object(h.b)(function(e){return{documents:e.documents}})(Ve),Ye=n(321),Ke=n(318),Xe=n(319),$e=function(e){function t(e){var n;return Object(u.a)(this,t),n=Object(s.a)(this,Object(l.a)(t).call(this,e)),Object(He.a)(Object(He.a)(n)).refreshData=n.refreshData.bind(Object(He.a)(Object(He.a)(n))),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.refreshData()}},{key:"refreshData",value:function(){this.props.dispatch(we.getAll())}},{key:"render",value:function(){var e=this,t=this.props.documents;if(!t||!t.items)return null;var n=[{Header:"Document ID",id:"key.DocumentID",accessor:"key.documentID"},{Header:"Document Hash",id:"value.documentHash",accessor:function(e){return e.value.documentHash}},{Header:"Document Description",id:"value.documentDescription",accessor:function(e){return e.value.documentDescription}},{Header:"Document Type",id:"value.documentType",accessor:function(e){return T.e[e.value.documentType]}},{Header:"Timestamp",id:"value.timestamp",accessor:function(e){return E(new Date(1e3*e.value.timestamp))}},{Header:"Updated",id:"value.updated",accessor:function(e){return E(new Date(1e3*e.value.updated))}},{Header:"Actions",id:"actions",accessor:"key.documentID",filterable:!1,Cell:function(t){var n=t.original;return r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("button",{className:"btn btn-sm btn-primary m-1",title:"View details",onClick:function(){return Qe.open(e.props.dispatch,T.g.viewDocument,n)}},r.a.createElement(Ke.a,{fixedWidth:!0,icon:Xe.a})))}}];return r.a.createElement(Ye.a,{columns:n,data:t.items||[],className:"-striped -highlight w-100",defaultPageSize:10,filterable:!0,defaultFilterMethod:function(e,t){return String(t[e.id]).indexOf(e.value)+1},defaultSorted:[{id:"value.timestamp",desc:!0}]})}}]),t}(r.a.Component);var et=Object(h.b)(function(e){return{documents:e.documents,user:e.authentication.user}})($e),tt=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.route,t=this.props.component;return r.a.createElement("div",{className:"row-custom content-section h-75 overflow-auto"},r.a.createElement(We,null),r.a.createElement(t,{route:e}))}}]),t}(r.a.Component);var nt=Object(h.b)(function(e){return{alert:e.alert}})(tt),at=function(e){function t(e){return Object(u.a)(this,t),Object(s.a)(this,Object(l.a)(t).call(this,e))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.documents,a=t.dispatch;!1===n.adding&&(this.refreshData(),a(Ne.hide(T.g.addDocument)))}},{key:"refreshData",value:function(e){this.props.dispatch(we.getAll(e))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container mt-3"},r.a.createElement("div",{className:"row justify-content-between"},r.a.createElement("button",{className:"btn btn-primary mb-2",onClick:function(){return Qe.open(e.props.dispatch,T.g.addDocument)}},"Add Document"),r.a.createElement("button",{className:"btn btn-primary mb-2",onClick:function(){return e.refreshData()}},"Refresh")),r.a.createElement(Qe,{modalId:T.g.addDocument,title:"Add Document"},r.a.createElement(ze,null)),r.a.createElement(Qe,{modalId:T.g.viewDocument,title:"View Document",footer:!1},r.a.createElement(Ze,null)),r.a.createElement("div",{className:"row w-100"},r.a.createElement(et,null)))}}]),t}(r.a.Component);var rt=Object(h.b)(function(e){var t=e.authentication,n=e.modals,a=e.documents;return{user:t.user,documents:a,modals:n}})(at),ct=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).props.dispatch(Ue.logout()),n.state={username:"",orgName:"",submitted:!1},n.handleChange=n.handleChange.bind(Object(He.a)(Object(He.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(He.a)(Object(He.a)(n))),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){var t,n=e.target,a=n.name,r=n.value;this.setState((t={},Object(A.a)(t,a,r),Object(A.a)(t,"submitted",!1),t))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({submitted:!0,orgName:W.get().org},function(){var e=t.state,n=e.username,a=e.orgName,r=t.props.dispatch;n&&r(Ue.login(n,a))})}},{key:"render",value:function(){var e=this.state,t=e.username,n=e.submitted;return r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("h2",null,"Login"),r.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",className:"form-control "+(n&&!t&&"is-invalid"),name:"username",value:t,onChange:this.handleChange}),n&&!t&&r.a.createElement("div",{className:"text-danger"},"Username is required")),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary"},"Login"))))}}]),t}(r.a.Component);var ot=[{component:rt,path:"/"},{component:Object(h.b)(function(){})(ct),path:"/login"}],ut=[],it=function(e){function t(e){var n;Object(u.a)(this,t);var a=(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).props.dispatch;return j.listen(function(e,t){a(he.clear())}),a(xe.get()),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.config,n=e.loading;W.get().org;return t?r.a.createElement(d.a,null,r.a.createElement(p.a,null,ot.concat(ut).map(function(e,a){var c=e.component,o=e.path;return r.a.createElement(f.a,{exact:!0,path:o,key:a,render:function(e){return r.a.createElement("div",{className:"main-section"},r.a.createElement(Re,{route:e}),r.a.createElement("div",{className:"overlay d-flex justify-content-center align-items-center "+(n?"visible":"invisible")},r.a.createElement(b.ScaleLoader,{loading:!!n})),r.a.createElement(nt,{component:c,route:e,config:t}),r.a.createElement(Ie,null))}})}))):null}}]),t}(r.a.Component);var st=Object(h.b)(function(e){return{config:e.config,loading:e.loading}})(it);o.a.render(r.a.createElement(h.a,{store:G},r.a.createElement(st,null)),document.getElementById("app"))}},[[327,2,1]]]);
//# sourceMappingURL=main.f18ee68f.chunk.js.map