(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22a563ec"],{"0198":function(t,e,i){},1987:function(t,e,i){t.exports=i.p+"img/green.ad79683b.jpg"},"2ba2":function(t,e,i){t.exports=i.p+"img/pink.a3f8f9ed.jpg"},"2f46":function(t,e,i){t.exports=i.p+"img/red.a05c2bd5.jpg"},"6ca1":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"i-layout-page-header"},[i("span",{staticClass:"ivu-page-header-title mr20"},[t._v(t._s(t.$route.meta.title))]),i("div",[i("div",{staticStyle:{float:"right"}},[i("Button",{staticClass:"bnt",attrs:{type:"primary"},on:{click:t.submit}},[t._v("保存")])],1)])]),i("Card",{staticClass:"ivu-mt",style:"min-height:"+t.clientHeight+"px",attrs:{bordered:!1,"dis-hover":""}},[i("Form",{attrs:{"label-width":t.labelWidth}},[i("FormItem",{attrs:{label:"选择配色方案："}},[i("RadioGroup",{on:{"on-change":t.changeColor},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}},[i("Radio",{staticClass:"box",attrs:{label:1,border:""}},[t._v("天空蓝"),i("i",{staticClass:"iconfont iconxuanzhong6"})]),i("Radio",{staticClass:"box green",attrs:{label:2,border:""}},[t._v("生鲜绿"),i("i",{staticClass:"iconfont iconxuanzhong6"})]),i("Radio",{staticClass:"box red",attrs:{label:3,border:""}},[t._v("热情红"),i("i",{staticClass:"iconfont iconxuanzhong6"})]),i("Radio",{staticClass:"box pink",attrs:{label:4,border:""}},[t._v("魅力粉"),i("i",{staticClass:"iconfont iconxuanzhong6"})]),i("Radio",{staticClass:"box orange",attrs:{label:5,border:""}},[t._v("活力橙"),i("i",{staticClass:"iconfont iconxuanzhong6"})])],1)],1),i("FormItem",{attrs:{label:"当前风格示例："}},[i("div",{staticClass:"acea-row row-top"},t._l(t.picList,(function(t,e){return i("div",{key:e,staticClass:"pictrue"},[i("img",{attrs:{src:t.image}})])})),0)])],1)],1)],1)},a=[],s=(i("8e6e"),i("ac6a"),i("456d"),i("bd86")),c=i("2f62"),r=i("f478");function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var u={name:"themeStyle",data:function(){return{grid:{xl:7,lg:7,md:12,sm:24,xs:24},picList:[],picListBule:[{image:i("aefb")}],picListGreen:[{image:i("1987")}],picListRed:[{image:i("2f46")}],picListPink:[{image:i("2ba2")}],picListOrange:[{image:i("6de0")}],current:"",clientHeight:0,loadingExist:!1}},computed:l(l({},Object(c["e"])("admin/layout",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:100},labelPosition:function(){return this.isMobile?"top":"right"}}),created:function(){this.picList=this.picListBule,this.getInfo()},mounted:function(){var t=this;this.$nextTick((function(){t.clientHeight="".concat(document.documentElement.clientHeight)-250;var e=t;window.onresize=function(){e.clientHeight="".concat(document.documentElement.clientHeight)-250}}))},methods:{getInfo:function(){var t=this;Object(r["g"])("color_change").then((function(e){t.current=e.data.status?e.data.status:3,t.changeColor(t.current)})).catch((function(e){t.$Message.error(e.msg)}))},submit:function(){var t=this;this.loadingExist=!0,Object(r["a"])(this.current,"color_change").then((function(e){t.loadingExist=!1,t.$Message.success(e.msg)})).catch((function(){t.loadingExist=!1}))},changeColor:function(t){switch(t){case 1:this.picList=this.picListBule;break;case 2:this.picList=this.picListGreen;break;case 3:this.picList=this.picListRed;break;case 4:this.picList=this.picListPink;break;case 5:this.picList=this.picListOrange;break;default:break}}}},p=u,d=(i("a199"),i("2877")),g=Object(d["a"])(p,n,a,!1,null,"01874340",null);e["default"]=g.exports},"6de0":function(t,e,i){t.exports=i.p+"img/orange.78f28374.jpg"},a199:function(t,e,i){"use strict";var n=i("0198"),a=i.n(n);a.a},aefb:function(t,e,i){t.exports=i.p+"img/bule.1786e93d.jpg"}}]);