require('./common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/points_mall/integral_order"],{"13d2":function(t,e,i){"use strict";var n=i("d237"),s=i.n(n);s.a},6366:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=(t._self._c,0==t.shippingType&&t.addressInfo.real_name&&t.addressInfo.is_default?t.$t("[默认]"):null),n=0!=t.shippingType||t.addressInfo.real_name?null:t.$t("设置收货地址"),s=t.$t("共"),a=t.$t("件商品"),o=t.$t("积分"),r=t.$t("可用积分"),d=t.$t("快递费用"),u=t.$t("免运费"),c=t.textareaStatus?t.$t("备注信息"):null,l=t.textareaStatus?t.$t("请添加备注（150字以内）"):null,h=t.$t("合计"),f=t.$t("积分"),p=t.$t("立即兑换");t.$mp.data=Object.assign({},{$root:{m0:i,m1:n,m2:s,m3:a,m4:o,m5:r,m6:d,m7:u,m8:c,m9:l,m10:h,m11:f,m12:p}})},s=[]},"6f2f":function(t,e,i){"use strict";i.r(e);var n=i("6366"),s=i("eebd");for(var a in s)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(a);i("13d2");var o=i("f0c5"),r=Object(o["a"])(s["default"],n["b"],n["c"],!1,null,"2413d122",null,!1,n["a"],void 0);e["default"]=r.exports},"8fe8":function(t,e,i){"use strict";(function(t){var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i("6a71"),a=i("8ba8"),o=(i("1579"),i("2038"),i("666f")),r=i("26cb"),d=n(i("66ca")),u={components:{couponListWindow:function(){Promise.all([i.e("common/vendor"),i.e("components/couponListWindow/index")]).then(function(){return resolve(i("34ab"))}.bind(null,i)).catch(i.oe)},addressWindow:function(){i.e("components/addressWindow/index").then(function(){return resolve(i("1b17"))}.bind(null,i)).catch(i.oe)},orderGoods:function(){i.e("components/orderGoods/index").then(function(){return resolve(i("7c5c"))}.bind(null,i)).catch(i.oe)},home:function(){Promise.all([i.e("common/vendor"),i.e("components/home/index")]).then(function(){return resolve(i("03ff"))}.bind(null,i)).catch(i.oe)},authorize:function(){i.e("components/Authorize").then(function(){return resolve(i("b29f"))}.bind(null,i)).catch(i.oe)}},mixins:[d.default],data:function(){return{textFocus:!1,textareaStatus:!0,cartArr:[{name:this.$t("微信支付"),icon:"icon-weixin2",value:"weixin",title:this.$t("使用微信快捷支付"),payStatus:1},{name:this.$t("支付宝支付"),icon:"icon-zhifubao",value:"alipay",title:this.$t("使用线上支付宝支付"),payStatus:1},{name:this.$t("余额支付"),icon:"icon-yuezhifu",value:"yue",title:this.$t("可用余额:"),payStatus:1},{name:this.$t("线下支付"),icon:"icon-yuezhifu1",value:"offline",title:this.$t("选择线下付款方式"),payStatus:2}],formContent:"",payType:"weixin",openType:1,active:0,coupon:{coupon:!1,list:[],statusTile:this.$t("立即使用")},address:{address:!1},addressInfo:{},pinkId:0,addressId:0,couponId:0,cartId:"",BargainId:0,combinationId:0,seckillId:0,userInfo:{},coupon_price:0,useIntegral:!1,integral_price:0,integral:0,ChangePrice:0,formIds:[],status:0,is_address:!1,toPay:!1,shippingType:0,system_store:{},storePostage:0,contacts:"",contactsTel:"",mydata:{},storeList:[],store_self_mention:0,cartInfo:{},priceGroup:{},animated:!1,totalPrice:0,integralRatio:"0",pagesUrl:"",orderKey:"",offlinePostage:"",isAuto:!1,isShowAuth:!1,from:"",news:1,invTitle:this.$t("不开发票"),special_invoice:!1,invoice_func:!1,header_type:"",invShow:!1,invList:[],invChecked:"",urlQuery:"",pay_close:!1,resData:{},mark:""}},computed:(0,r.mapGetters)(["isLogin"]),onLoad:function(t){if(this.from="routine",!t.unique)return this.$util.Tips({title:this.$t("请选择要购买的商品")},{tab:3,url:1});this.unique=t.unique,this.num=t.num,this.couponId=t.couponId||0,this.pinkId=t.pinkId?parseInt(t.pinkId):0,this.addressId=t.addressId||0,this.cartId=t.cartId,this.is_address=!!t.is_address,this.news=t.new&&"0"!==t.new?1:0,this.invChecked=t.invoice_id||"",this.header_type=t.header_type||"1",this.couponTitle=t.couponTitle||this.$t("请选择"),this.textareaStatus=!0,this.isLogin&&0==this.toPay?(this.getaddressInfo(),this.getConfirm(),this.$nextTick((function(){this.$refs.addressWindow.getAddressList()}))):(0,o.toLogin)()},onShow:function(){var e=this;t.$on("handClick",(function(i){i&&(e.system_store=i.address),t.$off("handClick")}))},methods:{getInvoiceList:function(){var e=this;t.showLoading({title:this.$t("正在加载…")}),(0,a.invoiceList)().then((function(i){t.hideLoading(),e.invList=i.data.map((function(t){return t.id=t.id.toString(),t}));var n=e.invList.find((function(t){return t.id==e.invChecked}));if(n){var s="";s+=1===n.header_type?e.$t("个人"):e.$t("企业"),s+=1===n.type?e.$t("普通"):e.$t("专用"),s+=e.$t("发票"),e.invTitle=s}})).catch((function(e){t.showToast({title:e,icon:"none"})}))},onChangeFun:function(t){var e=t,i=e.action||null,n=void 0!=e.value?e.value:null;i&&this[i]&&this[i](n)},payClose:function(){this.pay_close=!1},goPay:function(){var e=this;if(!e.addressId)return e.$util.Tips({title:e.$t("请选择收货地址")});if(parseFloat(e.resData.integral)<parseFloat(e.cartInfo.price))return e.$util.Tips({title:e.$t("可用积分不足！")});var i={addressId:e.addressId,mark:e.mark,unique:this.cartInfo.unique,num:this.resData.num};(0,s.integralOrderCreate)(i).then((function(e){t.redirectTo({url:"/pages/points_mall/integral_order_status?order_id=".concat(e.data.result.orderId)})})).catch((function(i){return t.hideLoading(),e.$util.Tips({title:i})}))},changeClose:function(){this.$set(this.address,"address",!1)},computedPrice:function(){var t=this,e=this.shippingType;postOrderComputed(this.orderKey,{addressId:this.addressId,useIntegral:this.useIntegral?1:0,couponId:this.couponId,shipping_type:parseInt(e)+1,payType:this.payType}).then((function(i){var n=i.data.result;n&&(t.totalPrice=n.pay_price,t.integral_price=n.deduction_price,t.coupon_price=n.coupon_price,t.integral=t.useIntegral?n.SurplusIntegral:t.userInfo.integral,t.$set(t.priceGroup,"storePostage",1==e?0:n.pay_postage),t.$set(t.priceGroup,"storePostageDiscount",n.storePostageDiscount))}))},ChangCouponsClone:function(){this.$set(this.coupon,"coupon",!1)},changeTextareaStatus:function(){for(var t=0,e=this.coupon.list.length;t<e;t++)this.coupon.list[t].use_title="",this.coupon.list[t].is_use=0;this.textareaStatus=!0,this.status=0,this.$set(this.coupon,"list",this.coupon.list)},OnChangeAddress:function(t){this.textareaStatus=!0,this.addressId=t,this.address.address=!1,this.getaddressInfo()},bindHideKeyboard:function(t){this.mark=t.detail.value},getConfirm:function(){var t=this,e=this;(0,s.integralOrderConfirm)({unique:this.unique,num:this.num}).then((function(t){e.$set(e,"resData",t.data),e.$set(e,"cartInfo",t.data.productInfo)})).catch((function(e){return t.$util.Tips({title:e})}))},getBargainId:function(){var t=this.cartInfo,e=0,i=0;t.forEach((function(t,n,s){e=s[n].bargain_id,i=s[n].combination_id})),this.$set(this,"BargainId",parseInt(e)),this.$set(this,"combinationId",parseInt(i)),3==this.cartArr.length&&(e||i||this.seckillId)&&(this.cartArr[2].payStatus=0,this.$set(this,"cartArr",this.cartArr))},getaddressInfo:function(){var t=this;t.addressId?(0,a.getAddressDetail)(t.addressId).then((function(e){e.data.is_default=parseInt(e.data.is_default),t.addressInfo=e.data||{},t.addressId=e.data.id||0,t.address.addressId=e.data.id||0})):(0,a.getAddressDefault)().then((function(e){e.data.is_default=parseInt(e.data.is_default),t.addressInfo=e.data||{},t.addressId=e.data.id||0,t.address.addressId=e.data.id||0}))},couponTap:function(){var t=this;this.coupon.coupon=!0,this.coupon.list.forEach((function(e,i){e.id==t.couponId?e.is_use=1:e.is_use=0})),this.$set(this.coupon,"list",this.coupon.list)},car:function(){this.animated=!1},onAddress:function(){this.textareaStatus=!1,this.address.address=!0,this.pagesUrl="/pages/points_mall/user_address?unique=".concat(this.unique,"&num=").concat(this.num)},clickTextArea:function(){this.textFocus=!0}}};e.default=u}).call(this,i("543d")["default"])},d237:function(t,e,i){},ec87:function(t,e,i){"use strict";(function(t,e){var n=i("4ea4");i("248d");n(i("66fd"));var s=n(i("6f2f"));t.__webpack_require_UNI_MP_PLUGIN__=i,e(s.default)}).call(this,i("bc2e")["default"],i("543d")["createPage"])},eebd:function(t,e,i){"use strict";i.r(e);var n=i("8fe8"),s=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=s.a}},[["ec87","common/runtime","common/vendor"]]]);