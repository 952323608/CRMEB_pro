(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_cancellation/index"],{"14af":function(t,n,e){"use strict";(function(t){e("7b91");a(e("66fd"));var n=a(e("bca7"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},"845a":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=c(e("9ad2")),u=e("816a");function c(t){return t&&t.__esModule?t:{default:t}}var i=getApp(),r={mixins:[a.default],data:function(){return{isCancellation:!1,agreementData:""}},onLoad:function(){this.getAgreement()},methods:{getAgreement:function(){var t=this;(0,u.getUserAgreement)(5).then((function(n){t.agreementData=n.data}))},cancelUser:function(){var n=this;(0,u.cancelUser)().then((function(e){i.globalData.spid="",i.globalData.pid="",n.$store.commit("LOGOUT"),t.reLaunch({url:"/pages/index/index"})})).catch((function(t){return n.$util.Tips({title:t})}))}}};n.default=r}).call(this,e("543d")["default"])},"9dad":function(t,n,e){},bca7:function(t,n,e){"use strict";e.r(n);var a=e("bf76"),u=e("d744");for(var c in u)"default"!==c&&function(t){e.d(n,t,(function(){return u[t]}))}(c);e("ea18");var i,r=e("f0c5"),o=Object(r["a"])(u["default"],a["b"],a["c"],!1,null,"5fc04c54",null,!1,a["a"],i);n["default"]=o.exports},bf76:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return a}));var u=function(){var t=this,n=t.$createElement,e=(t._self._c,t.$t("点击【立即注销】即代表您已经同意《用户注销协议》")),a=t.$t("立即注销"),u=t.$t("是否确认注销"),c=t.$t("注销后无法恢复，请谨慎操作"),i=t.$t("注销"),r=t.$t("取消");t._isMounted||(t.e0=function(n){t.isCancellation=!0},t.e1=function(n){t.isCancellation=!1}),t.$mp.data=Object.assign({},{$root:{m0:e,m1:a,m2:u,m3:c,m4:i,m5:r}})},c=[]},d744:function(t,n,e){"use strict";e.r(n);var a=e("845a"),u=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(n,t,(function(){return a[t]}))}(c);n["default"]=u.a},ea18:function(t,n,e){"use strict";var a=e("9dad"),u=e.n(a);u.a}},[["14af","common/runtime","common/vendor"]]]);