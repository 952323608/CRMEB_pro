(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-327bfad7"],{7655:function(t,e,a){},"975d":function(t,e,a){"use strict";var n=a("7655");a.n(n).a},a584:function(t,e,a){"use strict";var n={name:"cards",data:function(){return{colsize:{xl:4,lg:8,md:12}}},props:{cardLists:Array},methods:{},created:function(){switch(this.cardLists.length){case 1:this.colsize.xl=24,this.colsize.lg=24,this.colsize.md=24;break;case 2:this.colsize.xl=12,this.colsize.lg=12,this.colsize.md=12;break;case 3:this.colsize.xl=8,this.colsize.lg=8,this.colsize.md=8;break;case 4:this.colsize.xl=6,this.colsize.lg=6,this.colsize.md=12;break;case 5:this.colsize.xl=8,this.colsize.lg=8,this.colsize.md=12;break;default:this.colsize.xl=4,this.colsize.lg=8,this.colsize.md=12}4==this.cardLists.length?this.colsize.lg=6:4==this.cardLists.length&&(this.colsize.lg=8)}};a("975d"),a=a("2877"),a=Object(a.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{staticClass:"ivu-mt",attrs:{align:"middle",gutter:24}},t._l(t.cardLists,(function(e,n){return a("el-col",{key:n,staticClass:"ivu-mb",attrs:{xl:e.col||t.colsize.xl,lg:t.colsize.lg,md:t.colsize.md,sm:24,xs:24}},[a("el-card",{staticClass:"card_cent",attrs:{shadow:"never"}},[a("div",{staticClass:"card_box"},[a("div",{staticClass:"card_box_cir",class:{one:n%5==0,two:n%5==1,three:n%5==2,four:n%5==3,five:n%5==4}},[a("div",{staticClass:"card_box_cir1",class:{one1:n%5==0,two1:n%5==1,three1:n%5==2,four1:n%5==3,five1:n%5==4}},[a("span",{staticClass:"iconfont",class:e.className})])]),a("div",{staticClass:"card_box_txt"},[a("span",{staticClass:"sp1",domProps:{textContent:t._s(e.count||0)}}),a("span",{staticClass:"sp2",domProps:{textContent:t._s(e.name)}})])])])],1)})),1)],1)}),[],!1,null,"0eb9e1a0",null);e.a=a.exports},d2d3:function(t,e,a){"use strict";a.r(e),a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("b636"),a("944a"),a("0c47"),a("23dc"),a("3410"),a("d9e2"),a("159b"),a("b0c0"),a("131a"),a("fb6a");var n=a("0122"),r=a("c964"),i=(a("d81d"),a("a584")),o=a("b7be");function s(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */s=function(){return t};var t={},e=Object.prototype,a=e.hasOwnProperty,r=Object.defineProperty||function(t,e,a){t[e]=a.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(e){u=function(t,e,a){return t[e]=a}}function d(t,e,a,n){var i,o,s,l;e=e&&e.prototype instanceof f?e:f,e=Object.create(e.prototype),n=new k(n||[]);return r(e,"_invoke",{value:(i=t,o=a,s=n,l="suspendedStart",function(t,e){if("executing"===l)throw new Error("Generator is already running");if("completed"===l){if("throw"===t)throw e;return z()}for(s.method=t,s.arg=e;;){var a=s.delegate;if(a&&(a=function t(e,a){var n=a.method,r=e.iterator[n];return void 0===r?(a.delegate=null,"throw"===n&&e.iterator.return&&(a.method="return",a.arg=void 0,t(e,a),"throw"===a.method)||"return"!==n&&(a.method="throw",a.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p):(n=h(r,e.iterator,a.arg),"throw"===n.type?(a.method="throw",a.arg=n.arg,a.delegate=null,p):(r=n.arg,r?r.done?(a[e.resultName]=r.value,a.next=e.nextLoc,"return"!==a.method&&(a.method="next",a.arg=void 0),a.delegate=null,p):r:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,p)))}(a,s),a)){if(a===p)continue;return a}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if("suspendedStart"===l)throw l="completed",s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);if(l="executing",a=h(i,o,s),"normal"===a.type){if(l=s.done?"completed":"suspendedYield",a.arg===p)continue;return{value:a.arg,done:s.done}}"throw"===a.type&&(l="completed",s.method="throw",s.arg=a.arg)}})}),e}function h(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var p={};function f(){}function m(){}function v(){}i={};var g=(u(i,o,(function(){return this})),Object.getPrototypeOf),y=(g=g&&g(g(L([]))),g&&g!==e&&a.call(g,o)&&(i=g),v.prototype=f.prototype=Object.create(i));function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var i;r(this,"_invoke",{value:function(r,o){function s(){return new e((function(i,s){!function r(i,o,s,l){var c;i=h(t[i],t,o);if("throw"!==i.type)return(o=(c=i.arg).value)&&"object"==Object(n.a)(o)&&a.call(o,"__await")?e.resolve(o.__await).then((function(t){r("next",t,s,l)}),(function(t){r("throw",t,s,l)})):e.resolve(o).then((function(t){c.value=t,s(c)}),(function(t){return r("throw",t,s,l)}));l(i.arg)}(r,o,i,s)}))}return i=i?i.then(s,s):s()}})}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function L(t){if(t){var e,n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return e=-1,(n=function n(){for(;++e<t.length;)if(a.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n}).next=n}return{next:z}}function z(){return{value:void 0,done:!0}}return r(y,"constructor",{value:m.prototype=v,configurable:!0}),r(v,"constructor",{value:m,configurable:!0}),m.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){return t="function"==typeof t&&t.constructor,!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},w(b.prototype),u(b.prototype,l,(function(){return this})),t.AsyncIterator=b,t.async=function(e,a,n,r,i){void 0===i&&(i=Promise);var o=new b(d(e,a,n,r),i);return t.isGeneratorFunction(a)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},w(y),u(y,c,"Generator"),u(y,o,(function(){return this})),u(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e,a=Object(t),n=[];for(e in a)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in a)return t.value=e,t.done=!1,t}return t.done=!0,t}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(a,n){return o.type="throw",o.arg=t,e.next=a,n&&(e.method="next",e.arg=void 0),!!n}for(var r=this.tryEntries.length-1;0<=r;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}var o=(i=i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc?null:i)?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),x(a),p}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var a,n,r=this.tryEntries[e];if(r.tryLoc===t)return"throw"===(a=r.completion).type&&(n=a.arg,x(r)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:L(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=void 0),p}},t}i={name:"index",components:{cardsData:i.a},data:function(){return{modals:!1,grid:{xl:7,lg:7,md:12,sm:24,xs:24},id:0,tbody:[],labelWidth:"80px",total:0,tabs:[{type:"0",label:"活动参与人"},{type:"1",label:"活动订单"}],currentTab:0,loading:!1,thead:[{title:"头像",slot:"avatar"},{title:"发起用户",key:"nickname"},{title:"开团时间",key:"_add_time"},{title:"拼团人数",slot:"people"},{title:"结束时间",key:"_stop_time"},{title:"拼团状态",slot:"status"},{title:"操作",slot:"action"}],thead2:[{title:"订单号",key:"order_id"},{title:"用户",key:"real_name"},{title:"订单状态",key:"status"},{title:"订单支付金额",key:"pay_price"},{title:"订单商品数",key:"total_num"},{title:"下单时间",key:"add_time"},{title:"支付时间",key:"pay_time"}],cardLists:[{col:4,count:0,name:"活动参与人数（人）",className:"iconcanyurenshu"},{col:4,count:0,name:"推广人数（人）",className:"icontuiguangrenshu"},{col:4,count:0,name:"发起拼团数",className:"iconfaqirenshu"},{col:4,count:0,name:"成团数",className:"iconchengtuanshu"},{col:4,count:0,name:"支付订单额（元）",className:"iconzhifudingdan"},{col:4,count:0,name:"支付人数（人）",className:"iconxiadanrenshu"}],pagination:{page:1,limit:15,real_name:"",status:""},type:0,loading2:!1,tabList3:[]}},created:function(){this.id=this.$route.params.id,this.getStatistics(this.id),this.getList(this.id)},methods:{getStatistics:function(t){var e=this;Object(o.H)(t).then((function(t){var a=["people_count","spread_count","start_count","success_count","pay_price","pay_count"];e.cardLists.map((function(e,n){e.count=t.data[a[n]]}))}))},getList:function(t){var e=this;this.loading=!0,0==this.type?Object(o.J)(this.id,this.pagination).then((function(t){e.loading=!1;t=t.data;var a=t.count;t=t.list;e.total=a,e.tbody=t})):Object(o.I)(this.id,this.pagination).then((function(t){e.loading=!1;t=t.data;var a=t.count;t=t.list;e.total=a,e.tbody=t}))},onClickTab:function(t){this.type=t.index,this.getList(this.id)},searchList:function(){this.pagination.page=1,this.getList(this.id)},Info:function(t){var e=this;this.modals=!0,this.rows=t,Object(o.Z)(t.id).then(function(){var t=Object(r.a)(s().mark((function t(a){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=a.data,e.tabList3=n.list,e.loading=!1;case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.loading=!1,e.$message.error(t.msg)}))}}},a("d6ad"),a=a("2877"),a=Object(a.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("pages-header",{ref:"pageHeader",attrs:{title:t.$route.meta.title,backUrl:t.$routeProStr+"/marketing/store_combination/index"}}),0<=t.cardLists.length?a("cards-data",{staticClass:"ivu-mt-16",attrs:{cardLists:t.cardLists}}):t._e(),a("el-card",{staticClass:"ivu-mt",attrs:{bordered:!1,shadow:"never"}},[a("el-form",{ref:"pagination",attrs:{model:t.pagination,"label-width":"80px","label-position":"right",inline:""},nativeOn:{submit:function(t){t.preventDefault()}}},[1==t.type?a("el-form-item",{attrs:{label:"订单状态：","label-for":"status"}},[a("el-select",{staticClass:"form_content_width",attrs:{placeholder:"请选择订单状态",clearable:""},on:{change:t.searchList},model:{value:t.pagination.status,callback:function(e){t.$set(t.pagination,"status",e)},expression:"pagination.status"}},[a("el-option",{attrs:{value:"1",label:"待发货"}}),a("el-option",{attrs:{value:"2",label:"待收货"}}),a("el-option",{attrs:{value:"3",label:"待评价"}}),a("el-option",{attrs:{value:"4",label:"交易完成"}})],1)],1):t._e(),a("el-form-item",{attrs:{label:"订单搜索：","label-for":"title"}},[a("el-input",{staticClass:"form_content_width",attrs:{placeholder:1==t.type?"请输入用户|订单号|UID":"请输入用户姓名|UID"},model:{value:t.pagination.real_name,callback:function(e){t.$set(t.pagination,"real_name",e)},expression:"pagination.real_name"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.searchList}},[t._v("查询")])],1)],1),a("el-tabs",{on:{"tab-click":t.onClickTab},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},t._l(t.tabs,(function(t,e){return a("el-tab-pane",{key:e,attrs:{label:t.label,name:t.type}})})),1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",attrs:{data:t.tbody,"highlight-current-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"}},t._l(1==t.type?t.thead2:t.thead,(function(e,n){return a("el-table-column",{key:n,attrs:{label:e.title,"min-width":e.minWidth},scopedSlots:t._u([{key:"default",fn:function(n){return[e.key?[a("div",[a("span",[t._v(t._s(n.row[e.key]))])])]:"avatar"===e.slot?[a("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.row.avatar,expression:"scope.row.avatar"}]})])]:"people"===e.slot?[a("span",[t._v(" "+t._s(n.row.count_people+" / "+n.row.people))])]:"status"===e.slot?[a("el-tag",{directives:[{name:"show",rawName:"v-show",value:1===n.row.status,expression:"scope.row.status === 1"}],attrs:{type:"info"}},[t._v("进行中")]),a("el-tag",{directives:[{name:"show",rawName:"v-show",value:3===n.row.status,expression:"scope.row.status === 3"}],attrs:{type:"danger"}},[t._v("已失败")]),a("el-tag",{directives:[{name:"show",rawName:"v-show",value:2===n.row.status,expression:"scope.row.status === 2"}]},[t._v("已成功")])]:"action"===e.slot?[a("a",{on:{click:function(e){return t.Info(n.row)}}},[t._v("查看详情")])]:t._e()]}}],null,!0)})})),1),a("div",{staticClass:"acea-row row-right page"},[t.total?a("pagination",{attrs:{total:t.total,page:t.pagination.page,limit:t.pagination.limit},on:{"update:page":function(e){return t.$set(t.pagination,"page",e)},"update:limit":function(e){return t.$set(t.pagination,"limit",e)},pagination:t.getList}}):t._e()],1)],1),a("el-dialog",{staticClass:"tableBox",attrs:{visible:t.modals,title:"查看详情","close-on-click-modal":!1,width:"750px"},on:{"update:visible":function(e){t.modals=e}}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading2,expression:"loading2"}],ref:"selection",attrs:{data:t.tabList3,"empty-text":"暂无数据","highlight-current-row":"","max-height":"600",size:"small"}},[a("el-table-column",{attrs:{label:"ID",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.id))])]}}])}),a("el-table-column",{attrs:{label:"用户头像","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.row.avatar,expression:"scope.row.avatar"}]})])]}}])}),a("el-table-column",{attrs:{label:"用户名称","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(" "+t._s(e.row.nickname+" / "+e.row.uid))])]}}])}),a("el-table-column",{attrs:{label:"订单编号","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.order_id))])]}}])}),a("el-table-column",{attrs:{label:"金额","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.total_price))])]}}])}),a("el-table-column",{attrs:{label:"订单状态","min-width":"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{directives:[{name:"show",rawName:"v-show",value:0!=e.row.is_refund,expression:"scope.row.is_refund != 0"}]},[t._v("已退款")]),a("el-tag",{directives:[{name:"show",rawName:"v-show",value:0===e.row.is_refund,expression:"scope.row.is_refund === 0"}],attrs:{type:"danger"}},[t._v("未退款")])]}}])})],1)],1)],1)}),[],!1,null,"5f5189c8",null),e.default=a.exports},d6ad:function(t,e,a){"use strict";var n=a("f2f2");a.n(n).a},f2f2:function(t,e,a){}}]);