require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/goods_list/index"],{"034c":function(t,e,i){"use strict";i.r(e);var o=i("972b"),s=i("effc");for(var c in s)["default"].indexOf(c)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(c);i("99e4");var n=i("f0c5"),r=Object(n["a"])(s["default"],o["b"],o["c"],!1,null,"4ca788d2",null,!1,o["a"],void 0);e["default"]=r.exports},"6e86":function(t,e,i){},"886b":function(t,e,i){"use strict";(function(t){var o=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i("1579"),c=i("26cb"),n=i("2c78"),r=i("989b"),l=o(i("66ca")),h={computed:(0,c.mapGetters)(["uid"]),components:{recommend:function(){Promise.all([i.e("common/vendor"),i.e("components/recommend/index")]).then(function(){return resolve(i("f1f8"))}.bind(null,i)).catch(i.oe)},home:function(){Promise.all([i.e("common/vendor"),i.e("components/home/index")]).then(function(){return resolve(i("03ff"))}.bind(null,i)).catch(i.oe)}},mixins:[l.default],data:function(){return{imgHost:r.HTTP_REQUEST_URL,productList:[],is_switch:!0,where:{sid:0,keyword:"",priceOrder:"",salesOrder:"",news:0,page:1,limit:20,cid:0},price:0,stock:0,nows:!1,loadend:!1,loading:!1,loadTitle:this.$t("加载更多"),title:"",hostProduct:[],hotPage:1,hotLimit:10,hotScroll:!1,scrollTop:0,old:{scrollTop:0},scrollTopShow:!1}},onLoad:function(t){this.where.cid=t.cid||0,this.where.coupon_category_id=t.coupon_category_id||"",this.$set(this.where,"sid",t.sid||0),this.title=t.title||"",this.$set(this.where,"keyword",t.searchValue||""),this.$set(this.where,"productId",t.productId||""),this.get_product_list()},methods:{scroll:function(t){this.scrollTopShow=t.detail.scrollTop>150,this.old.scrollTop=t.detail.scrollTop},goTop:function(t){var e=this;this.scrollTop=this.old.scrollTop,this.$nextTick((function(){e.scrollTop=0}))},godDetail:function(e){(0,n.goShopDetail)(e,this.uid).then((function(i){t.navigateTo({url:"/pages/goods_details/index?id=".concat(e.id)})}))},Changswitch:function(){this.is_switch=!this.is_switch},searchSubmit:function(t){this.$set(this.where,"keyword",t.detail.value),this.loadend=!1,this.$set(this.where,"page",1),this.get_product_list(!0)},get_host_product:function(){var t=this;t.hotScroll||(0,s.getProductHot)(t.hotPage,t.hotLimit).then((function(e){t.hotPage++,t.hotScroll=e.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(e.data)}))},set_where:function(e){switch(e){case 1:return t.navigateBack({delta:1});case 2:0==this.price?this.price=1:1==this.price?this.price=2:2==this.price&&(this.price=0),this.stock=0;break;case 3:0==this.stock?this.stock=1:1==this.stock?this.stock=2:2==this.stock&&(this.stock=0),this.price=0;break;case 4:this.nows=!this.nows;break}this.loadend=!1,this.$set(this.where,"page",1),this.get_product_list(!0)},setWhere:function(){0==this.price?this.where.priceOrder="":1==this.price?this.where.priceOrder="asc":2==this.price&&(this.where.priceOrder="desc"),0==this.stock?this.where.salesOrder="":1==this.stock?this.where.salesOrder="asc":2==this.stock&&(this.where.salesOrder="desc"),this.where.news=this.nows?1:0},get_product_list:function(t){var e=this,i=this;i.setWhere(),i.loadend||i.loading||(!0===t&&i.$set(i,"productList",[]),i.loading=!0,i.loadTitle="",(0,s.getProductslist)(i.where).then((function(t){var o=t.data,s=i.$util.SplitArray(o,i.productList),c=o.length<i.where.limit;i.loadend=c,i.loading=!1,i.loadTitle=c?i.$t("没有更多内容啦~"):i.$t("加载更多"),i.$set(i,"productList",s),i.$set(i.where,"page",i.where.page+1),i.productList.length||e.get_host_product()})).catch((function(t){i.loading=!1,i.loadTitle=i.$t("加载更多")})))}},onPullDownRefresh:function(){},onReachBottom:function(){this.productList.length>0?this.get_product_list():this.get_host_product()},onPageScroll:function(e){t.$emit("scroll")}};e.default=h}).call(this,i("543d")["default"])},"972b":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,i=(t._self._c,t.$t("搜索商品名称")),o=t.title?t.$t(t.title):null,s=t.title?null:t.$t("默认"),c=t.$t("价格"),n=t.$t("销量"),r=t.$t("新品"),l=t.$t("￥"),h=t.$t("已售"),a=t.__map(t.productList,(function(e,i){var o=t.__get_orig(e),s=e.activity&&"1"===e.activity.type?t.$t("秒杀"):null,c=e.activity&&"2"===e.activity.type?t.$t("砍价"):null,n=e.activity&&"3"===e.activity.type?t.$t("拼团"):null,r=e.vip_price&&e.vip_price>0?t.$t("￥"):null,l=t.$t(e.unit_name)||t.$t("件");return{$orig:o,m6:s,m7:c,m8:n,m10:r,m12:l}})),d=t.productList.length,u=0==t.productList.length&&t.where.page>1,p=u?t.$t("暂无商品，去看点别的吧"):null;t.$mp.data=Object.assign({},{$root:{m0:i,m1:o,m2:s,m3:c,m4:n,m5:r,m9:l,m11:h,l0:a,g0:d,g1:u,m13:p}})},s=[]},"99e4":function(t,e,i){"use strict";var o=i("6e86"),s=i.n(o);s.a},effc:function(t,e,i){"use strict";i.r(e);var o=i("886b"),s=i.n(o);for(var c in o)["default"].indexOf(c)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(c);e["default"]=s.a},fdd6:function(t,e,i){"use strict";(function(t,e){var o=i("4ea4");i("248d");o(i("66fd"));var s=o(i("034c"));t.__webpack_require_UNI_MP_PLUGIN__=i,e(s.default)}).call(this,i("bc2e")["default"],i("543d")["createPage"])}},[["fdd6","common/runtime","common/vendor"]]]);