(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-dada2fde"],{2250:function(t,e,n){"use strict";n.r(e);var a=n("b311"),s=n.n(a),i=n("f478");a={name:"links",data:function(){return{list:[{name:"商城首页",url:"/pages/goods/order_list/index",parameter:[{}],example:"/pages/activity/bargain/index"},{name:"商城首页",url:"/pages/goods/order_list/index",parameter:[{}],example:"/pages/activity/bargain/index"}]}},created:function(){var t=this;Object(i.o)().then((function(e){t.list=e.data.url}))},mounted:function(){this.$nextTick((function(){var t=this;new s.a(".copy-data").on("success",(function(){t.$message.success("复制成功")}))}))},methods:{onCopy:function(t){var e=this;this.$copyText(t).then((function(t){e.$message.success("复制成功")})).catch((function(t){e.$message.error("复制失败")}))}}},n("c738"),n=n("2877"),n=Object(n.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right-box"},t._l(t.list,(function(e,a){return n("div",{key:a,staticClass:"link-item"},[n("div",{staticClass:"title"},[t._v(t._s(e.name))]),n("div",{staticClass:"txt"},[n("span",[t._v("地址：")]),t._v(t._s(e.url))]),e.parameter?n("div",{staticClass:"txt"},[t._m(0,!0),t._l(e.parameter,(function(e,a,s){return n("span",{key:s},[t._v(t._s(a+"="+e)),n("i",{staticStyle:{"font-style":"normal"}},[t._v("&")])])}))],2):t._e(),n("div",{staticClass:"tips"},[t._v("\n      例如："+t._s(e.example)+"\n      "),n("span",{staticClass:"copy copy-data",on:{click:function(n){return t.onCopy(e.example)}}},[t._v("复制")])])])})),0)}),[function(){var t=this,e=t.$createElement;e=t._self._c||e;return e("p",[e("span",[t._v("参数：")])])}],!1,null,"1323ba50",null);e.default=n.exports},"81be":function(t,e,n){},c738:function(t,e,n){"use strict";var a=n("81be");n.n(a).a}}]);