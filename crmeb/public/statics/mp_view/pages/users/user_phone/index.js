(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_phone/index"],{"10f2":function(t,e,n){"use strict";(function(t){n("6e38");i(n("66fd"));var e=i(n("afbd"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"37cf":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(n("a34a")),u=s(n("f875")),r=n("7fe6"),c=n("c6cd"),o=n("26cb"),a=s(n("c83f"));function s(t){return t&&t.__esModule?t:{default:t}}function f(t,e,n,i,u,r,c){try{var o=t[r](c),a=o.value}catch(s){return void n(s)}o.done?e(a):Promise.resolve(a).then(i,u)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(i,u){var r=t.apply(e,n);function c(t){f(r,i,u,c,o,"next",t)}function o(t){f(r,i,u,c,o,"throw",t)}c(void 0)}))}}var d=function(){n.e("components/Authorize").then(function(){return resolve(n("420f"))}.bind(null,n)).catch(n.oe)},h={mixins:[u.default,a.default],components:{authorize:d},data:function(){return{phone:"",captcha:"",isAuto:!1,isShowAuth:!1,key:"",authKey:"",type:0}},computed:(0,o.mapGetters)(["isLogin"]),onLoad:function(t){var e=this;this.isLogin?((0,r.verifyCode)().then((function(t){e.$set(e,"key",t.data.key)})),this.authKey=t.key||"",this.url=t.url||""):(0,c.toLogin)(),this.type=t.type||0},methods:{onLoadFun:function(){},authColse:function(t){this.isShowAuth=t},editPwd:function(){var e=this;return e.phone?/^1(3|4|5|7|8|9|6)\d{9}$/i.test(e.phone)?e.captcha?void(0==this.type?(0,r.bindingUserPhone)({phone:e.phone,captcha:e.captcha}).then((function(n){if(void 0===n.data||!n.data.is_bind)return e.$util.Tips({title:"绑定成功！",icon:"success"},{tab:5,url:"/pages/users/user_info/index"});t.showModal({title:"是否绑定账号",content:n.msg,confirmText:"绑定",success:function(t){if(t.confirm)(0,r.bindingUserPhone)({phone:e.phone,captcha:e.captcha,step:1}).then((function(t){return e.$util.Tips({title:t.msg,icon:"success"},{tab:5,url:"/pages/users/user_info/index"})})).catch((function(t){return e.$util.Tips({title:t})}));else if(t.cancel)return e.$util.Tips({title:"您已取消绑定！"},{tab:5,url:"/pages/users/user_info/index"})}})})).catch((function(t){return e.$util.Tips({title:t})})):(0,r.updatePhone)({phone:e.phone,captcha:e.captcha}).then((function(t){return e.$util.Tips({title:t.msg,icon:"success"},{tab:5,url:"/pages/users/user_info/index"})})).catch((function(t){return e.$util.Tips({title:t})}))):e.$util.Tips({title:"请填写验证码"}):e.$util.Tips({title:"请输入正确的手机号码！"}):e.$util.Tips({title:"请填写手机号码！"})},code:function(){var t=this;return l(i.default.mark((function e(){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.phone){e.next=3;break}return e.abrupt("return",n.$util.Tips({title:"请填写手机号码！"}));case 3:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(n.phone)){e.next=5;break}return e.abrupt("return",n.$util.Tips({title:"请输入正确的手机号码！"}));case 5:return e.next=7,(0,r.verifyCode)().then((function(t){(0,r.registerVerify)(n.phone,"reset",t.data.key,n.captcha).then((function(t){n.$util.Tips({title:t.msg}),n.sendCode()})).catch((function(t){return n.$util.Tips({title:t})}))}));case 7:case"end":return e.stop()}}),e)})))()}}};e.default=h}).call(this,n("543d")["default"])},"3e71":function(t,e,n){},5113:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var u=function(){var t=this,e=t.$createElement;t._self._c},r=[]},afbd:function(t,e,n){"use strict";n.r(e);var i=n("5113"),u=n("dc5f");for(var r in u)"default"!==r&&function(t){n.d(e,t,(function(){return u[t]}))}(r);n("d525");var c,o=n("f0c5"),a=Object(o["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);e["default"]=a.exports},d525:function(t,e,n){"use strict";var i=n("3e71"),u=n.n(i);u.a},dc5f:function(t,e,n){"use strict";n.r(e);var i=n("37cf"),u=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=u.a}},[["10f2","common/runtime","common/vendor"]]]);