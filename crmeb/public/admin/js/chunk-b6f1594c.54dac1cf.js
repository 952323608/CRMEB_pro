(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-b6f1594c"],{3968:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"i",(function(){return i})),a.d(e,"g",(function(){return o})),a.d(e,"h",(function(){return r})),a.d(e,"e",(function(){return l})),a.d(e,"j",(function(){return c})),a.d(e,"f",(function(){return u})),a.d(e,"c",(function(){return d})),a.d(e,"d",(function(){return p})),a.d(e,"b",(function(){return m})),a.d(e,"k",(function(){return h})),a("99af");var s=a("6b6c");function n(t){return Object(s.a)({url:"/setting/system_out_account/index",method:"get",params:t})}function i(t){return Object(s.a)({url:"setting/system_out_account/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function o(t){return Object(s.a)({url:"setting/system_out_account/save",method:"post",data:t})}function r(t){return Object(s.a)({url:"setting/system_out_account/update/".concat(t.id),method:"post",data:t})}function l(){return Object(s.a)({url:"setting/system_out_interface/list",method:"get"})}function c(t){return Object(s.a)({url:"setting/system_out_account/set_up/".concat(t.id),method:"put",data:t})}function u(t){return Object(s.a)({url:"setting/system_out_interface/save/".concat(t.id),method:"post",data:t})}function d(t){return Object(s.a)({url:"setting/system_out_interface/info/".concat(t),method:"get"})}function p(t){return Object(s.a)({url:"setting/system_out_interface/edit_name",method:"PUT",data:t})}function m(t){return Object(s.a)({url:"setting/system_out_interface/del/"+t,method:"delete"})}function h(t){return Object(s.a)({url:"setting/system_out_account/text_out_url",method:"post",data:t})}},"6b91":function(t,e,a){"use strict";a.r(e);var s=a("c964"),n=a("f3f3"),i=(a("96cf"),a("a9e3"),a("d81d"),a("a434"),a("2f62")),o=a("3968");n={name:"systemOut",data:function(){return{grid:{xl:7,lg:7,md:12,sm:24,xs:24},total:0,loading:!1,roleData:{status1:""},formValidate:{roles:"",status:"",name:"",page:1,limit:20},status:"",list:[],intList:[],columns:[{type:"selection",width:60,align:"center"},{title:"接口名称",key:"name"}],columns1:[{title:"编号",key:"id",minWidth:80},{title:"账号",key:"appid",minWidth:150},{title:"描述",key:"title",minWidth:250},{title:"添加时间",key:"add_time",minWidth:180},{title:"最后登录时间",key:"last_time",minWidth:180},{title:"最后登录ip",key:"ip",minWidth:180},{title:"状态",slot:"status",minWidth:90},{title:"操作",key:"action",slot:"action",fixed:"right",minWidth:120}],FromData:null,modalTitleSs:"",ids:Number,modals:!1,modalsid:"",type:0,modalsdate:{appid:"",appsecret:"",title:"",rules:[]},settingModals:!1,settingData:{switch:1,name:""},ruleValidate:{appid:[{required:!0,message:"请输入正确的账号 (4到30位之间)",trigger:"blur",min:4,max:30}],appsecret:[{required:!0,message:"请输入正确的密码 (6到32位之间)",trigger:"blur",min:6,max:32}],title:[{message:"请输入正确的描述 (不能多于200位数)",trigger:"blur",max:200}]},editValidate:{appsecret:[{required:!1,message:"请输入正确的密码 (6到32位之间)",trigger:"blur",min:6,max:32}]}}},computed:Object(n.a)(Object(n.a)({},Object(i.e)("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:50},labelPosition:function(){return this.isMobile?"top":"left"}}),created:function(){this.getList()},methods:{onchangeIsShow:function(t){var e=this;t={id:t.id,status:t.status};Object(o.i)(t).then(function(){var t=Object(s.a)(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$Message.success(a.msg);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Message.error(t.msg)}))},submitFail:function(){this.getList()},getList:function(){var t=this;this.loading=!0,this.formValidate.roles=this.formValidate.roles||"",Object(o.a)(this.formValidate).then(function(){var e=Object(s.a)(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.total=a.data.count,t.list=a.data.list,t.loading=!1;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},pageChange:function(t){this.formValidate.page=t,this.getList()},add:function(){this.modals=!0,this.type=0,this.modalsdate={appid:"",appsecret:"",title:"",rules:[]},this.getIntList()},selectTree:function(t,e){},getIntList:function(t,e){var a=this;Object(o.e)().then((function(s){a.intList=s.data,t?e.map((function(t){a.intList.map((function(e){1===e.id&&(e.checked=!0,e.disableCheckbox=!0,e.children.length&&e.children.map((function(t){t.checked=!0,t.disableCheckbox=!0}))),function t(e,a){e.length&&e.map((function(e){e.id==a&&(e.checked=!0),e.children&&t(e.children)}))}(e.children||[],t)}))})):a.intList.map((function(t){1===t.id&&(t.checked=!0,t.disableCheckbox=!0,t.children.length&&t.children.map((function(t){t.checked=!0,t.disableCheckbox=!0})))}))}))},edit:function(t){this.modals=!0,this.modalsdate.appid=t.appid,this.modalsdate.title=t.title,this.modalsdate.rules=t.rules.map((function(t){return Number(t)})),this.modalsid=t.id,this.type=1,this.getIntList("edit",this.modalsdate.rules)},del:function(t,e,a){var s=this;e={title:e,num:a,url:"setting/system_out_account/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(e).then((function(t){s.$Message.success(t.msg),s.list.splice(a,1)})).catch((function(t){s.$Message.error(t.msg)}))},setUp:function(t){this.settingModals=!0,this.settingData=t},userSearchs:function(){this.formValidate.status="all"===this.status?"":this.status,this.formValidate.page=1,this.list=[],this.getList()},submit:function(t){var e=this;Object(o.j)(this.settingData).then((function(t){e.$Message.success(t.msg),e.settingModals=!1,e.getList()}))},textOutUrl:function(){var t=this;Object(o.k)(this.settingData).then((function(e){t.$Message.success(e.msg)})).catch((function(e){t.$Message.error(e.msg)}))},ok:function(t){var e=this,a=this.modalsid?o.h:o.g;this.$refs[t].validate((function(t){t?(e.modalsdate.rules=[],e.$refs.tree.getCheckedAndIndeterminateNodes().map((function(t){e.modalsdate.rules.push(t.id)})),e.modalsid&&(e.modalsdate.id=e.modalsid),a(e.modalsdate).then((function(t){e.modalsdate={appid:"",appsecret:"",title:"",rules:[]},e.modals=!1,e.$Message.success(t.msg),e.modalsid="",e.getList()})).catch((function(t){e.$Message.error(t.msg)}))):e.$Message.warning("请完善数据")}))},cancel:function(){this.modalsid="",this.modalsdate={appid:"",appsecret:"",title:""},this.modals=!1},reset:function(){for(var t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",e=t.length,a="",s=0;s<16;s++)a+=t.charAt(Math.floor(Math.random()*e));this.modalsdate.appsecret=a}}},a("e328"),i=a("2877"),a=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Form",{ref:"formValidate",attrs:{model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[a("Row",{attrs:{type:"flex"}},[a("Col",t._b({},"Col",t.grid,!1),[a("Button",{directives:[{name:"auth",rawName:"v-auth",value:["setting-system_admin-add"],expression:"['setting-system_admin-add']"}],attrs:{type:"primary",icon:"md-add"},on:{click:t.add}},[t._v("添加账号")])],1)],1)],1),a("Table",{staticClass:"mt25",attrs:{columns:t.columns1,data:t.list,"no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果",loading:t.loading,"highlight-row":""},scopedSlots:t._u([{key:"roles",fn:function(e){return e=e.row,[0!==e.roles.length?a("div",t._l(e.roles.split(","),(function(e,s){return a("Tag",{key:s,attrs:{color:"blue"},domProps:{textContent:t._s(e)}})})),1):t._e()]}},{key:"status",fn:function(e){var s=e.row;return[a("i-switch",{attrs:{value:s.status,"true-value":1,"false-value":0,size:"large"},on:{"on-change":function(e){return t.onchangeIsShow(s)}},model:{value:s.status,callback:function(e){t.$set(s,"status",e)},expression:"row.status"}},[a("span",{attrs:{slot:"open"},slot:"open"},[t._v("开启")]),a("span",{attrs:{slot:"close"},slot:"close"},[t._v("关闭")])])]}},{key:"action",fn:function(e){var s=e.row,n=e.index;return[a("a",{on:{click:function(e){return t.setUp(s)}}},[t._v("设置")]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.edit(s)}}},[t._v("编辑")]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.del(s,"删除账号",n)}}},[t._v("删除")])]}}])}),a("div",{staticClass:"acea-row row-right page"},[a("Page",{attrs:{total:t.total,current:t.formValidate.page,"show-elevator":"","show-total":"","page-size":t.formValidate.limit},on:{"on-change":t.pageChange}})],1)],1),a("Modal",{attrs:{scrollable:"",title:0==t.type?"添加账号":"编辑账号","mask-closable":!1,width:"700",closable:!1},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[a("Form",{ref:"modalsdate",attrs:{model:t.modalsdate,rules:0==t.type?t.ruleValidate:t.editValidate,"label-width":70,"label-position":"right"}},[a("FormItem",{attrs:{label:"账号",prop:"appid"}},[a("div",{staticStyle:{display:"flex"}},[a("Input",{attrs:{type:"text",disabled:0!=t.type},model:{value:t.modalsdate.appid,callback:function(e){t.$set(t.modalsdate,"appid",e)},expression:"modalsdate.appid"}})],1)]),a("FormItem",{attrs:{label:"密码",prop:"appsecret"}},[a("div",{staticStyle:{display:"flex"}},[a("Input",{staticClass:"input",attrs:{type:"text"},model:{value:t.modalsdate.appsecret,callback:function(e){t.$set(t.modalsdate,"appsecret",e)},expression:"modalsdate.appsecret"}}),a("Button",{staticClass:"reset",attrs:{type:"primary"},on:{click:t.reset}},[t._v("重置")])],1)]),a("FormItem",{attrs:{label:"描述",prop:"title"}},[a("div",{staticStyle:{display:"flex"}},[a("Input",{attrs:{type:"textarea"},model:{value:t.modalsdate.title,callback:function(e){t.$set(t.modalsdate,"title",e)},expression:"modalsdate.title"}})],1)]),a("FormItem",{attrs:{label:"接口权限",prop:"title"}},[a("Tree",{ref:"tree",attrs:{data:t.intList,multiple:"","show-checkbox":""},on:{"on-check-change":t.selectTree}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.ok("modalsdate")}}},[t._v("确定")]),a("Button",{on:{click:t.cancel}},[t._v("取消")])],1)],1),a("Modal",{attrs:{scrollable:"",title:"设置推送","mask-closable":!1,width:"900",closable:!1},model:{value:t.settingModals,callback:function(e){t.settingModals=e},expression:"settingModals"}},[a("Form",{ref:"settingData",staticClass:"setting-style",attrs:{model:t.settingData,rules:0==t.type?t.ruleValidate:t.editValidate,"label-width":140,"label-position":"right"}},[a("FormItem",{attrs:{label:"推送开关",prop:"switch"}},[a("i-switch",{attrs:{"true-value":1,"false-value":0},model:{value:t.settingData.push_open,callback:function(e){t.$set(t.settingData,"push_open",e)},expression:"settingData.push_open"}})],1),a("FormItem",{attrs:{label:"推送账号",prop:"push_account"}},[a("div",{staticClass:"form-content"},[a("Input",{attrs:{type:"text",placeholder:"请输入推送账号"},model:{value:t.settingData.push_account,callback:function(e){t.$set(t.settingData,"push_account",e)},expression:"settingData.push_account"}}),a("span",{staticClass:"trip"},[t._v("接受推送方获取token的账号")])],1)]),a("FormItem",{attrs:{label:"推送密码",prop:"push_password"}},[a("div",{staticClass:"form-content"},[a("Input",{attrs:{type:"text",placeholder:"请输入推送密码"},model:{value:t.settingData.push_password,callback:function(e){t.$set(t.settingData,"push_password",e)},expression:"settingData.push_password"}}),a("span",{staticClass:"trip"},[t._v("接受推送方获取token的密码")])],1)]),a("FormItem",{attrs:{label:"获取TOKEN接口",prop:"push_token_url"}},[a("div",{staticClass:"form-content"},[a("div",{staticClass:"input-button"},[a("Input",{attrs:{type:"text",placeholder:"请输入获取TOKEN接口"},model:{value:t.settingData.push_token_url,callback:function(e){t.$set(t.settingData,"push_token_url",e)},expression:"settingData.push_token_url"}}),a("Button",{staticClass:"ml10",attrs:{type:"primary"},on:{click:function(e){return t.textOutUrl(t.settingData.id)}}},[t._v("测试链接")])],1),a("span",{staticClass:"trip"},[t._v("接受推送方获取token的URL地址，POST方法，传入push_account和push_password，返回token和有效时间time(秒)")])])]),a("FormItem",{attrs:{label:"用户数据修改推送接口",prop:"user_update_push"}},[a("div",{staticClass:"form-content"},[a("Input",{attrs:{type:"text",placeholder:"请输入用户数据修改推送接口"},model:{value:t.settingData.user_update_push,callback:function(e){t.$set(t.settingData,"user_update_push",e)},expression:"settingData.user_update_push"}}),a("span",{staticClass:"trip"},[t._v("用户修改积分，余额，经验等将用户信息推送至该地址，POST方法")])],1)]),a("FormItem",{attrs:{label:"订单创建推送接口",prop:"order_create_push"}},[a("div",{staticClass:"form-content"},[a("Input",{attrs:{type:"text",placeholder:"请输入订单创建推送接口"},model:{value:t.settingData.order_create_push,callback:function(e){t.$set(t.settingData,"order_create_push",e)},expression:"settingData.order_create_push"}}),a("span",{staticClass:"trip"},[t._v("订单创建时推送订单信息至该地址，POST方法")])],1)]),a("FormItem",{attrs:{label:"订单支付推送接口",prop:"order_pay_push"}},[a("div",{staticClass:"form-content"},[a("Input",{attrs:{type:"text",placeholder:"请输入订单支付推送接口"},model:{value:t.settingData.order_pay_push,callback:function(e){t.$set(t.settingData,"order_pay_push",e)},expression:"settingData.order_pay_push"}}),a("span",{staticClass:"trip"},[t._v("订单完成支付时推送订单已支付信息至该地址，POST方法")])],1)]),a("FormItem",{attrs:{label:"售后订单创建推送接口",prop:"refund_create_push"}},[a("div",{staticClass:"form-content"},[a("Input",{attrs:{type:"text",placeholder:"请输入售后订单创建推送接口"},model:{value:t.settingData.refund_create_push,callback:function(e){t.$set(t.settingData,"refund_create_push",e)},expression:"settingData.refund_create_push"}}),a("span",{staticClass:"trip"},[t._v("售后订单生成时推送售后单信息至该地址，POST方法")])],1)]),a("FormItem",{attrs:{label:"售后订单取消推送接口",prop:"refund_cancel_push"}},[a("div",{staticClass:"form-content"},[a("Input",{attrs:{type:"text",placeholder:"请输入售后订单取消推送接口"},model:{value:t.settingData.refund_cancel_push,callback:function(e){t.$set(t.settingData,"refund_cancel_push",e)},expression:"settingData.refund_cancel_push"}}),a("span",{staticClass:"trip"},[t._v("售后订单取消时推送售后单取消信息至该地址，POST方法")])],1)])],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.submit("settingData")}}},[t._v("确定")]),a("Button",{on:{click:function(e){t.settingModals=!1}}},[t._v("取消")])],1)],1)],1)}),[],!1,null,"cc9e91da",null);e.default=a.exports},8004:function(t,e,a){},e328:function(t,e,a){"use strict";var s=a("8004");a.n(s).a}}]);