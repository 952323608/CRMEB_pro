(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-goods_details_store-index"],{"049b":function(t,e,n){"use strict";n.r(e);var i=n("9fce"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"102d":function(t,e,n){var i=n("151f");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("53b68b13",i,!0,{sourceMap:!1,shadowMode:!1})},"151f":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.geoPage[data-v-44c6374e]{position:fixed;width:100%;height:100%;top:0;z-index:10000}.storeBox[data-v-44c6374e]{width:100%;background-color:#fff;padding:0 %?30?%}.storeBox-box[data-v-44c6374e]{width:100%;height:auto;display:flex;align-items:center;padding:%?23?% 0;justify-content:space-between;border-bottom:1px solid #eee}.store-cent[data-v-44c6374e]{display:flex;align-items:center;width:80%}.store-cent-left[data-v-44c6374e]{width:45%}.store-img[data-v-44c6374e]{width:%?120?%;height:%?120?%;border-radius:%?6?%;margin-right:%?22?%}.store-img img[data-v-44c6374e]{width:100%;height:100%}.store-name[data-v-44c6374e]{color:#282828;font-size:%?30?%;margin-bottom:%?22?%;font-weight:800}.store-address[data-v-44c6374e]{color:#666;font-size:%?24?%}.store-phone[data-v-44c6374e]{width:%?50?%;height:%?50?%;color:#fff;border-radius:50%;background-color:var(--view-theme);margin-bottom:%?22?%;text-decoration:none}.store-phone .icon-dadianhua01[data-v-44c6374e]{font-size:%?22?%}.store-distance[data-v-44c6374e]{font-size:%?22?%;color:var(--view-theme)}.iconfont[data-v-44c6374e]{font-size:%?20?%}.row-right[data-v-44c6374e]{display:flex;flex-direction:column;align-items:flex-end;width:33.5%}',""]),t.exports=e},1579:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.collectAdd=function(t,e){return a.default.post("collect/add",{id:t,product:void 0===e?"product":e})},e.collectAll=function(t,e){return a.default.post("collect/all",{id:t,category:void 0===e?"product":e})},e.collectDel=function(t,e){return a.default.post("collect/del",{id:t,category:void 0===e?"product":e})},e.create=function(t){return a.default.post("agent/apply/".concat(t.id),t)},e.deleteVisitList=function(t){return a.default.delete("user/visit",t)},e.getAgentAgreement=function(t){return a.default.get("agent/get_agent_agreement",{},{noAuth:!0})},e.getAttr=function(t,e){return a.default.get("v2/get_attr/"+t+"/"+e)},e.getCategoryList=function(){return a.default.get("category",{},{noAuth:!0})},e.getCodeApi=function(){return a.default.get("verify_code",{},{noAuth:!0})},e.getCollectUserList=function(t){return a.default.get("collect/user",t)},e.getGoodsDetails=function(){return a.default.get("agent/apply/info",{},{noAuth:!0})},e.getGroomList=function(t,e){return a.default.get("groom/list/"+t,e,{noAuth:!0})},e.getHomeProducts=function(t){return a.default.get("home/products",t,{noAuth:!0})},e.getPresellProductDetail=function(t){return a.default.get("advance/detail/"+t)},e.getProductCode=function(t){return a.default.get("product/code/"+t,{})},e.getProductDetail=function(t){return a.default.get("product/detail/"+t,{},{noAuth:!0})},e.getProductHot=function(t,e){return a.default.get("product/hot",{page:void 0===t?1:t,limit:void 0===e?4:e},{noAuth:!0})},e.getProductslist=function(t){return a.default.get("products",t,{noAuth:!0})},e.getReplyConfig=function(t){return a.default.get("reply/config/"+t)},e.getReplyList=function(t,e){return a.default.get("reply/list/"+t,e)},e.getSearchKeyword=function(){return a.default.get("search/keyword",{},{noAuth:!0})},e.getVisitList=function(t){return a.default.get("user/visit_list",t)},e.postCartAdd=function(t){return a.default.post("cart/add",t)},e.postCartNum=function(t){return a.default.post("v2/set_cart_num",t)},e.registerVerify=function(t){return a.default.post("register/verify",t,{noAuth:!0})},e.storeDiscountsList=function(t){return a.default.get("store_discounts/list/"+t,{},{noAuth:!0})},e.storeListApi=function(t){return a.default.get("store_list",t)};var a=i(n("3160"))},"1e51":function(t,e,n){"use strict";n.r(e);var i=n("3f4e"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"277e":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.colorStyle},[n("div",{ref:"container",staticClass:"storeBox"},[t._l(t.storeList,(function(e,i){return n("div",{key:i,staticClass:"storeBox-box",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.checked(e)}}},[n("div",{staticClass:"store-img"},[n("img",{attrs:{src:e.image,"lazy-load":"true"}})]),n("div",{staticClass:"store-cent-left"},[n("div",{staticClass:"store-name"},[t._v(t._s(e.name))]),n("div",{staticClass:"store-address line1"},[t._v(t._s(e.address)+t._s(", "+e.detailed_address))])]),n("div",{staticClass:"row-right"},[n("div",[n("a",{staticClass:"store-phone acea-row row-center-wrapper",attrs:{href:"tel:"+e.phone}},[n("span",{staticClass:"iconfont icon-dadianhua01"})])]),n("div",{staticClass:"store-distance",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.showMaoLocation(e)}}},[e.range?n("span",{staticClass:"addressTxt"},[t._v(t._s(e.range)+t._s(t.$t("千米距离")))]):n("span",{staticClass:"addressTxt"},[t._v(t._s(t.$t("查看地图")))]),n("span",{staticClass:"iconfont icon-youjian"})])])])})),n("Loading",{attrs:{loaded:t.loaded,loading:t.loading}})],2)])},a=[]},"3f4e":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"Loading",props:{loaded:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}}};e.default=i},4882:function(t,e,n){"use strict";n.r(e);var i=n("277e"),a=n("049b");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("b5c9");var r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"44c6374e",null,!1,i["a"],void 0);e["default"]=s.exports},"77a00":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.loading&&!t.loaded?n("v-uni-view",{staticClass:"Loads acea-row row-center-wrapper",staticStyle:{"margin-top":".2rem"}},[t.loading?n("v-uni-view",[n("v-uni-view",{staticClass:"iconfont icon-jiazai loading acea-row row-center-wrapper"}),t._v(t._s(t.$t("正在加载中")))],1):n("v-uni-view",[t._v(t._s(t.$t("上拉加载更多")))])],1):t._e()],1)},a=[]},"8c13":function(t,e,n){var i=n("e20b");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("05df0bae",i,!0,{sourceMap:!1,shadowMode:!1})},"9bda":function(t,e,n){"use strict";n.r(e);var i=n("77a00"),a=n("1e51");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("f8f1");var r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"71b32b65",null,!1,i["a"],void 0);e["default"]=s.exports},"9fce":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("99af"),n("14d9");var a=i(n("9bda")),o=n("1579"),r=(n("94de"),n("fd9f"),i(n("66ca"))),s=(n("26cb"),{name:"storeList",components:{Loading:a.default},mixins:[r.default],data:function(){return{page:1,limit:20,loaded:!1,loading:!1,storeList:[],system_store:{},user_latitude:0,user_longitude:0}},onLoad:function(){try{this.user_latitude=uni.getStorageSync("user_latitude"),this.user_longitude=uni.getStorageSync("user_longitude")}catch(t){}},mounted:function(){this.user_latitude&&this.user_longitude?this.getList():this.selfLocation()},methods:{call:function(t){uni.makePhoneCall({phoneNumber:t})},selfLocation:function(){var t=this,e=this;e.$wechat.isWeixin()?e.$wechat.location().then((function(n){t.user_latitude=n.latitude,t.user_longitude=n.longitude,uni.setStorageSync("user_latitude",n.latitude),uni.setStorageSync("user_longitude",n.longitude),e.getList()})):uni.getLocation({type:"wgs84",success:function(n){try{t.user_latitude=n.latitude,t.user_longitude=n.longitude,uni.setStorageSync("user_latitude",n.latitude),uni.setStorageSync("user_longitude",n.longitude)}catch(i){}e.getList()},complete:function(){e.getList()}})},showMaoLocation:function(t){this.$wechat.isWeixin()?this.$wechat.seeLocation({latitude:Number(t.latitude),longitude:Number(t.longitude)}).then((function(t){})):uni.openLocation({latitude:Number(t.latitude),longitude:Number(t.longitude),name:t.name,address:"".concat(t.address,"-").concat(t.detailed_address),success:function(){}})},checked:function(t){uni.$emit("handClick",{address:t}),uni.navigateBack()},getList:function(){var t=this;if(!this.loading&&!this.loaded){this.loading=!0;var e={latitude:this.user_latitude||"",longitude:this.user_longitude||"",page:this.page,limit:this.limit};(0,o.storeListApi)(e).then((function(e){t.loading=!1,t.loaded=e.data.list.length<t.limit,t.storeList.push.apply(t.storeList,e.data.list.list),t.page=t.page+1})).catch((function(e){t.$util.Tips({title:e})}))}}},onReachBottom:function(){this.getList()}});e.default=s},b5c9:function(t,e,n){"use strict";var i=n("102d"),a=n.n(i);a.a},e20b:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".Loads[data-v-71b32b65]{height:%?80?%;font-size:%?25?%;color:#000}.Loads .iconfont[data-v-71b32b65]{font-size:%?30?%;margin-right:%?10?%;height:%?32?%;line-height:%?32?%}\n/*加载动画*/@-webkit-keyframes load-data-v-71b32b65{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes load-data-v-71b32b65{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.loadingpic[data-v-71b32b65]{-webkit-animation:load-data-v-71b32b65 3s linear 1s infinite;animation:load-data-v-71b32b65 3s linear 1s infinite}.loading[data-v-71b32b65]{-webkit-animation:load-data-v-71b32b65 linear 1s infinite;animation:load-data-v-71b32b65 linear 1s infinite}",""]),t.exports=e},f8f1:function(t,e,n){"use strict";var i=n("8c13"),a=n.n(i);a.a}}]);