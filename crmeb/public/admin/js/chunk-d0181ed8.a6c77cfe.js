(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-d0181ed8"],{"0c6b":function(t,e,a){"use strict";a.r(e);var s=a("c964"),n=(a("a434"),a("96cf"),a("8593")),o=a("9860"),i=(o=a.n(o),a("31b4")),r=a("6b6c");o={name:"list",components:{formCreate:o.a.$form(),editFrom:i.a},data:function(){return{modals2:!1,grid:{xl:7,lg:7,md:12,sm:24,xs:24},loading:!1,formValidate:{tab_id:0,page:1,limit:20},total:0,columns1:[{title:"ID",key:"id",width:80},{title:"配置名称",key:"info",minWidth:130},{title:"字段变量",key:"menu_name",minWidth:140},{title:"字段类型",key:"type",minWidth:90},{title:"值",slot:"values",minWidth:230},{title:"是否显示",slot:"statuss",minWidth:90},{title:"操作",slot:"action",fixed:"right",minWidth:120}],FromData:null,FromRequestData:{},modalTitleSs:"",classList:[],num:0,typeFrom:{type:0,tab_id:this.$route.params.id},rules:[]}},watch:{$route:{handler:function(t,e){this.getList()},deep:!0}},mounted:function(){this.getList()},methods:{onhangeTab:function(t){this.typeFrom.type=t,this.classAdd()},classAdd:function(){var t=this;Object(n.k)(this.typeFrom).then(function(){var e=Object(s.a)(regeneratorRuntime.mark((function e(a){var s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1===a.data.status)return e.abrupt("return",t.$authLapse(a.data));e.next=2;break;case 2:s=a.data||{},t.FromRequestData={action:s.action,method:s.method},t.rules=s.rules,t.modals2=!0;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},edit:function(t){var e=this;Object(n.l)(t.id).then(function(){var t=Object(s.a)(regeneratorRuntime.mark((function t(a){var s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!1===a.data.status)return t.abrupt("return",e.$authLapse(a.data));t.next=2;break;case 2:s=a.data||{},e.FromRequestData={action:s.action,method:s.method},e.rules=s.rules,e.$refs.edits.modals=!0,e.modals2=!0;case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},onSubmit:function(t){var e=this;Object(r.a)({url:this.FromRequestData.action,method:this.FromRequestData.method,data:t}).then((function(t){e.$Message.success(t.msg),setTimeout((function(){e.modals2=!1}),1e3),setTimeout((function(){e.getList()}),1500)})).catch((function(t){e.$Message.error(t.msg)}))},submitFail:function(){this.getList()},goIndex:function(){this.$router.push({path:"/admin/system/config/system_config_tab/index"})},configureAdd:function(){this.classAdd()},getList:function(){var t=this;this.loading=!0,this.formValidate.tab_id=this.$route.params.id,Object(n.m)(this.formValidate).then(function(){var e=Object(s.a)(regeneratorRuntime.mark((function e(a){var s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=a.data,t.classList=s.list,t.total=s.count,t.loading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},pageChange:function(t){this.formValidate.page=t,this.getList()},del:function(t,e,a){var s=this;e={title:e,num:a,url:"/setting/config/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(e).then((function(t){s.$Message.success(t.msg),s.classList.splice(a,1)})).catch((function(t){s.$Message.error(t.msg)}))},onchangeIsShow:function(t){var e=this;Object(n.j)(t.id,t.status).then(function(){var t=Object(s.a)(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$Message.success(a.msg);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))}}},a("2821"),i=a("2877"),a=Object(i.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header header_top"},[a("div",{staticClass:"i-layout-page-header fl_header"},[a("router-link",{attrs:{to:{path:"/admin/system/config/system_config_tab/index"}}},[a("Button",{attrs:{icon:"ios-arrow-back",size:"small",type:"text"}},[t._v("返回")])],1),a("Divider",{attrs:{type:"vertical"}}),a("span",{staticClass:"ivu-page-header-title mr20",staticStyle:{padding:"0"},domProps:{textContent:t._s(t.$route.meta.title)}})],1)]),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Row",{attrs:{type:"flex"}},[a("Col",t._b({},"Col",t.grid,!1),[a("Button",{staticClass:"mr20",attrs:{type:"primary"},on:{click:t.goIndex}},[t._v("配置分类")]),a("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:t.configureAdd}},[t._v("添加配置")])],1)],1),a("Divider",{attrs:{dashed:""}}),a("Table",{ref:"table",attrs:{columns:t.columns1,data:t.classList,loading:t.loading,"no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"values",fn:function(e){var s=e.row;return e.index,["text"===s.type||"textarea"===s.type||"radio"===s.type||"checkbox"===s.type?a("span",[t._v(t._s(s.value))]):t._e(),"upload"===s.type&&3===s.upload_type?a("div",{staticClass:"valBox acea-row"},[s.value instanceof Array?a("div",t._l(s.value,(function(e,s){return a("div",{key:s,staticClass:"valPicbox acea-row row-column-around"},[a("div",{staticClass:"valPicbox_pic"},[a("Icon",{attrs:{type:"md-document"}})],1),a("span",{staticClass:"valPicbox_sp"},[t._v(t._s(e.filename))])])})),0):t._e()]):t._e(),"upload"===s.type&&3!==s.upload_type?a("div",{staticClass:"valBox acea-row"},[s.value instanceof Array?a("div",t._l(s.value,(function(e,s){return a("div",{key:s,staticClass:"valPicbox acea-row row-column-around"},[a("div",{staticClass:"valPicbox_pic"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.filepath,expression:"item.filepath"}]})]),a("span",{staticClass:"valPicbox_sp"},[t._v(t._s(e.filename))])])})),0):t._e()]):t._e()]}},{key:"statuss",fn:function(e){var s=e.row;return e.index,[a("i-switch",{attrs:{value:s.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeIsShow(s)}},model:{value:s.status,callback:function(e){t.$set(s,"status",e)},expression:"row.status"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("显示")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("隐藏")])])]}},{key:"action",fn:function(e){var s=e.row,n=e.index;return[a("a",{on:{click:function(e){return t.edit(s)}}},[t._v("编辑")]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.del(s,"删除分类",n)}}},[t._v("删除")])]}}])})],1),a("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:"添加配置字段","mask-closable":!1,"z-index":1,width:"700"},model:{value:t.modals2,callback:function(e){t.modals2=e},expression:"modals2"}},[a("Tabs",{staticClass:"tabsName",on:{"on-click":t.onhangeTab},model:{value:t.typeFrom.type,callback:function(e){t.$set(t.typeFrom,"type",e)},expression:"typeFrom.type"}},[a("TabPane",{attrs:{label:"文本框 ",name:"0"}}),a("TabPane",{attrs:{label:"多行文本框",name:"1"}}),a("TabPane",{attrs:{label:"单选框",name:"2"}}),a("TabPane",{attrs:{label:"文件上传",name:"3"}}),a("TabPane",{attrs:{label:"多选框",name:"4"}}),a("TabPane",{attrs:{label:"下拉框",name:"5"}})],1),0!=t.rules.length?a("form-create",{ref:"fc",staticClass:"formBox",attrs:{rule:t.rules,handleIcon:"false"},on:{"on-submit":t.onSubmit}}):t._e()],1),a("edit-from",{ref:"edits",attrs:{FromData:t.FromData},on:{submitFail:t.submitFail}})],1)}),[],!1,null,"20d3e0ab",null);e.default=a.exports},2821:function(t,e,a){"use strict";var s=a("b8bd");a.n(s).a},"31b4":function(t,e,a){"use strict";var s=a("f3f3"),n=a("9860"),o=(n=a.n(n),a("6b6c")),i=a("2f62");n={name:"edit",components:{formCreate:n.a.$form()},computed:Object(s.a)({},Object(i.e)("userLevel",["taskId","levelId"])),props:{FromData:{type:Object,default:null},update:{type:Boolean,default:!0}},data:function(){return{modals:!1,type:0,config:{global:{upload:{props:{onSuccess:function(t,e){200===t.status?e.url=t.data.src:this.Message.error(t.msg)}}}}}}},methods:{couponsType:function(){this.$parent.addType(this.type)},onSubmit:function(t){var e=this;Object(o.a)({url:this.FromData.action,method:this.FromData.method,data:t}).then((function(t){e.update&&e.$parent.getList(),e.$Message.success(t.msg),e.modals=!1,setTimeout((function(){e.$emit("submitFail")}),1e3)})).catch((function(t){e.$Message.error(t.msg)}))},cancel:function(){this.type=0}}},a("3c71"),s=a("2877"),i=Object(s.a)(n,(function(){var t=this,e=t.$createElement;e=t._self._c||e;return t.FromData?e("div",[e("Modal",{attrs:{scrollable:"","footer-hide":"",closable:"",title:t.FromData.title,"z-index":1,width:"700"},on:{"on-cancel":t.cancel},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[["/marketing/coupon/save.html"===t.FromData.action?e("div",{staticClass:"radio acea-row row-middle"},[e("div",{staticClass:"name ivu-form-item-content"},[t._v("优惠券类型")]),e("Radio-group",{on:{"on-change":t.couponsType},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[e("Radio",{attrs:{label:0}},[t._v("通用券")]),e("Radio",{attrs:{label:1}},[t._v("品类券")]),e("Radio",{attrs:{label:2}},[t._v("商品券")])],1)],1):t._e()],e("form-create",{ref:"fc",staticClass:"formBox",attrs:{option:t.config,rule:Array.from(t.FromData.rules),handleIcon:"false"},on:{"on-submit":t.onSubmit}})],2)],1):t._e()}),[],!1,null,"671a3e20",null);e.a=i.exports},"3c71":function(t,e,a){"use strict";var s=a("be2f");a.n(s).a},b8bd:function(t,e,a){},be2f:function(t,e,a){}}]);