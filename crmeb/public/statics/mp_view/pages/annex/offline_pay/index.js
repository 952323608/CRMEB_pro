(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/annex/offline_pay/index"],{"075a":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("5ba0"),a=n("a368"),o=n("26cb"),c=(getApp(),{data:function(){return{money:"",payPrice:"",payType:"weixin",alipayHtml:"",alipay:!1,wxpay:!1,yuePay:!1,paying:!1,now_money:0,isWeixin:!1,site_name:"",isCommitted:!1}},watch:{money:function(t,e){t&&"number"===typeof t?this.checkPrice():this.payPrice=""}},computed:(0,o.mapGetters)(["isLogin"]),onLoad:function(t){this.isLogin||(0,a.toLogin)()},onShow:function(){this.isLogin&&this.getPayType()},methods:{inputChange:function(t){var e=this;t.target.value=t.target.value.match(/^\d*(.?\d{0,2})/g)[0]||"",this.$nextTick((function(){e.money=t.target.value,e.checkPrice()}))},getPayType:function(){var e=this;(0,i.orderOfflinePayType)().then((function(n){var i=n.data,a=i.ali_pay_status,o=i.pay_weixin_open,c=i.yue_pay_status,s=i.offline_pay_status,u=i.site_name,r=i.now_money;e.alipay="1"===a,e.wxpay=1===o,e.yuePay=1===c,e.now_money=r,e.site_name=u,s||t.showModal({title:e.$t("支付提醒"),content:e.$t("线下支付已关闭，请点击确认按钮返回主页"),showCancel:!1,success:function(){t.switchTab({url:"/pages/index/index"})}}),u&&t.setNavigationBarTitle({title:u})})).catch((function(e){t.showToast({title:e,icon:"none"})}))},checkForm:function(e){var n=e.detail.value,i=n.money,a=n.method;i?this.combData(a):t.showToast({title:this.$t("请输入支付金额"),icon:"none"})},checkPrice:function(){var e=this;(0,i.offlineCheckPrice)({pay_price:this.money}).then((function(t){e.payPrice=t.data.pay_price})).catch((function(e){t.showToast({title:e,icon:"none"})}))},combData:function(e){var n=this,a={type:3,pay_type:e,from:"weixinh5",price:this.payPrice||this.money,money:this.money};a.from="routine",this.paying||(this.paying=!0,t.showLoading({title:this.$t("正在确认")}),(0,i.offlineCreate)(a).then((function(e){t.hideLoading(),n.callPay(e)})).catch((function(e){n.paying=!1,t.showToast({title:e,icon:"none"})})))},callPay:function(e){var n=e.data,i=n.status,a=n.result,o=a.orderId,c=a.jsConfig,s="/pages/annex/offline_result/index?site_name="+this.site_name;switch(i){case"ORDER_EXIST":case"EXTEND_ORDER":case"PAY_ERROR":this.paying=!1,this.$util.Tips({title:e.msg},{tab:5,url:s});break;case"SUCCESS":this.paying=!1,this.money="",this.$util.Tips({title:e.msg,icon:"success"},{tab:5,url:s});break;case"WECHAT_PAY":var u=this,r="";r=t.requestOrderPayment?"requestOrderPayment":"requestPayment",t[r]({timeStamp:c.timestamp,nonceStr:c.nonceStr,package:c.package,signType:c.signType,paySign:c.paySign,success:function(t){u.$util.Tips({title:u.$t("支付成功"),icon:"success"},{tab:5,url:"/pages/annex/offline_result/index"})},fail:function(){t.showToast({title:u.$t("取消支付"),icon:"none",success:function(){u.paying=!1}})},complete:function(){u.paying=!1,t.hideLoading()}});break;case"PAY_DEFICIENCY":this.paying=!1,this.$util.Tips({title:e.msg});break;case"WECHAT_H5_PAY":this.paying=!1,t.showToast({title:e.msg,success:function(){location.href=c.mweb_url}});break;case"ALIPAY_PAY":this.paying=!1,t.navigateTo({url:"/pages/users/alipay_invoke/index?id=".concat(o,"&link=").concat(c.qrCode)});break}}}});e.default=c}).call(this,n("543d")["default"])},"1ffa":function(t,e,n){},"260b":function(t,e,n){"use strict";var i=n("d812"),a=n.n(i);a.a},"2fae":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$t("支付金额")),i=t.$t("￥"),a=t.payPrice?t.$t("会员优惠价"):null,o=t.payPrice?t.$t("￥"):null,c=t.$t("支付方式"),s=t.yuePay?t.$t("余额支付"):null,u=t.yuePay?t.$t("可用余额"):null,r=t.yuePay?t.$t("￥"):null,l=t.wxpay?t.$t("微信支付"):null,f=t.$t("确认");t.$mp.data=Object.assign({},{$root:{m0:n,m1:i,m2:a,m3:o,m4:c,m5:s,m6:u,m7:r,m8:l,m9:f}})},o=[]},"5a75":function(t,e,n){"use strict";n.r(e);var i=n("075a"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"87f1":function(t,e,n){"use strict";var i=n("1ffa"),a=n.n(i);a.a},"89d9":function(t,e,n){"use strict";n.r(e);var i=n("2fae"),a=n("5a75");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("87f1"),n("260b");var c,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"e15fc1a8",null,!1,i["a"],c);e["default"]=u.exports},d812:function(t,e,n){},e443:function(t,e,n){"use strict";(function(t){n("7b91");i(n("66fd"));var e=i(n("89d9"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])}},[["e443","common/runtime","common/vendor"]]]);