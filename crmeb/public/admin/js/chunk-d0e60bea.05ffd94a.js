(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-d0e60bea"],{"3d12":function(t,e,a){"use strict";var i=a("7b11");a.n(i).a},"3d87":function(t,e,a){a=a("4930"),t.exports=a&&!!Symbol.for&&!!Symbol.keyFor},"428f":function(t,e,a){a=a("da84"),t.exports=a},"57b9":function(t,e,a){var i=a("c65b"),r=a("d066"),s=a("b622"),o=a("cb2d");t.exports=function(){var t=r("Symbol"),e=(t=t&&t.prototype,t&&t.valueOf),a=s("toPrimitive");t&&!t[a]&&o(t,a,(function(t){return i(e,this)}),{arity:1})}},"5a47":function(t,e,a){var i=a("23e7"),r=a("4930"),s=a("d039"),o=a("7418"),n=a("7b0b");i({target:"Object",stat:!0,forced:!r||s((function(){o.f(1)}))},{getOwnPropertySymbols:function(t){var e=o.f;return e?e(n(t)):[]}})},"746f":function(t,e,a){var i=a("428f"),r=a("1a2d"),s=a("e538"),o=a("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});r(e,t)||o(e,t,{value:s.f(t)})}},"7b11":function(t,e,a){},a4d3:function(t,e,a){a("d9f5"),a("b4f8"),a("c513"),a("e9c4"),a("5a47")},b4f8:function(t,e,a){var i=a("23e7"),r=a("d066"),s=a("1a2d"),o=a("577e"),n=a("5692"),l=(a=a("3d87"),n("string-to-symbol-registry")),c=n("symbol-to-string-registry");i({target:"Symbol",stat:!0,forced:!a},{for:function(t){var e;t=o(t);return s(l,t)?l[t]:(e=r("Symbol")(t),l[t]=e,c[e]=t,e)}})},b982:function(t,e,a){"use strict";a.r(e);var i=a("c964"),r=a("d0ff"),s=a("f3f3"),o=a("fc11"),n=(a("96cf"),a("a4d3"),a("e01a"),a("d3b7"),a("159b"),a("a434"),a("4e82"),a("99af"),a("d81d"),a("2f62")),l=a("c4ad"),c=a("b0e7"),d=a("b7be"),u=a("c4c8"),m=a("5334"),p=a("a069");l={name:"storeBargainCreate",components:{goodsList:l.default,uploadPictures:c.a,freightTemplate:m.a,WangEditor:p.a},data:function(){return{submitOpen:!1,spinShow:!1,myConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/admin/UEditor/",serverUrl:""},isChoice:"",current:0,modalPic:!1,grid:{xl:12,lg:20,md:24,sm:24,xs:24},grid2:{xl:8,lg:8,md:12,sm:24,xs:24},gridPic:{xl:6,lg:8,md:12,sm:12,xs:12},gridBtn:{xl:4,lg:8,md:8,sm:8,xs:8},modals:!1,modal_loading:!1,images:[],templateList:[],columns:[],specsData:[],formValidate:Object(o.a)({images:[],info:"",title:"",store_name:"",image:"",unit_name:"",price:0,min_price:0,bargain_max_price:10,bargain_min_price:.01,cost:0,bargain_num:1,people_num:2,stock:1,sales:0,sort:0,num:1,give_integral:0,postage:0,is_postage:0,is_hot:0,status:0,section_time:[],description:"",rule:"",id:0,product_id:0,temp_id:"",attrs:[],items:[],logistics:["1"],freight:2},"postage",1),description:"",rule:"",ruleValidate:{image:[{required:!0,message:"请选择主图",trigger:"change"}],images:[{required:!0,type:"array",message:"请选择主图",trigger:"change"},{type:"array",min:1,message:"Choose two hobbies at best",trigger:"change"}],title:[{required:!0,message:"请输入砍价活动名称",trigger:"blur"}],info:[{required:!0,message:"请输入砍价活动简介",trigger:"blur"}],store_name:[{required:!0,message:"请输入砍价商品名称",trigger:"blur"}],section_time:[{required:!0,type:"array",message:"请选择活动时间",trigger:"change"}],unit_name:[{required:!0,message:"请输入单位",trigger:"blur"}],price:[{required:!0,type:"number",message:"请输入原价",trigger:"blur"}],min_price:[{required:!0,type:"number",message:"请输入最低购买价",trigger:"blur"}],cost:[{required:!0,type:"number",message:"请输入成本价",trigger:"blur"}],bargain_num:[{required:!0,type:"number",message:"请输入帮砍次数",trigger:"blur"}],people_num:[{required:!0,type:"number",message:"请输入砍价人数",trigger:"blur"}],stock:[{required:!0,type:"number",message:"请输入库存",trigger:"blur"}],num:[{required:!0,type:"number",message:"请输入单次允许购买数量",trigger:"blur"}],temp_id:[{required:!0,message:"请选择运费模板",trigger:"change",type:"number"}]},currentid:"",picTit:"",tableIndex:0,copy:0}},computed:Object(s.a)(Object(s.a)({},Object(n.e)("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:140},labelPosition:function(){return this.isMobile?"top":"right"}}),mounted:function(){"0"!==this.$route.params.id&&this.$route.params.id&&(this.copy=this.$route.params.copy,this.current=1,this.getInfo()),this.productGetTemplate()},methods:{getEditorContent:function(t){this.description=t},getEditorContent2:function(t){this.rule=t},freight:function(){this.$refs.template.id=0,this.$refs.template.isTemplate=!0},productAttrs:function(t){var e=this,a=this;Object(d.fb)(t.id,2).then((function(t){t=t.data.info;var i={title:"选择",key:"chose",width:60,align:"center",render:function(t,a){var i=a.index,r=!1,s=(r=e.currentid===i,e);return t("div",[t("Radio",{props:{value:r},on:{"on-change":function(){s.currentid=i;var t=[];t.push(a.row),s.formValidate.attrs=t}}})])}};a.columns=t.header,a.columns.unshift(i),a.specsData=t.attrs,a.inputChange(t),a.formValidate.items=t.items})).catch((function(t){a.$Message.error(t.msg)}))},inputChange:function(t){var e=this,a=[];t.header.forEach((function(t,e){1===t.type&&a.push({index:e,key:t.key,title:t.title})})),a.forEach((function(t,a){var i=t.title,r=t.key;e.columns.splice(t.index,1,{title:i,key:r,align:"center",minWidth:100,render:function(t,a){return t("div",[t("InputNumber",{props:{min:1,precision:0,value:a.row.quota},on:{"on-change":function(t){a.row.quota=t,e.specsData[a.index]=a.row,e.formValidate.attrs&&e.formValidate.attrs.length&&e.formValidate.attrs.forEach((function(t,i){t.id===a.row.id&&e.formValidate.attrs.splice(i,1,a.row)}))}}})])}})}))},productGetTemplate:function(){var t=this;Object(u.u)().then((function(e){t.templateList=e.data}))},getProductId:function(t){var e=this;this.modal_loading=!1,this.modals=!1,setTimeout((function(){var a;e.formValidate=(a={images:t.slider_image,info:t.store_info,title:t.store_name,store_name:t.store_name,image:t.image,unit_name:t.unit_name,price:0,min_price:0,bargain_max_price:10,bargain_min_price:.01,cost:t.cost,bargain_num:1,people_num:2,stock:t.stock,sales:t.sales,sort:t.sort,num:1,give_integral:t.give_integral,postage:t.postage,is_postage:t.is_postage,is_hot:t.is_hot,status:0,section_time:[],description:t.description,rule:"",id:0,product_id:t.id,temp_id:t.temp_id,logistics:t.temp_id,freight:t.freight},Object(o.a)(a,"postage",t.postage),Object(o.a)(a,"custom_form",t.custom_form),Object(o.a)(a,"virtual_type",t.virtual_type),a),e.productAttrs(t)}),500)},cancel:function(){this.modals=!1},handleDragStart:function(t,e){this.dragging=e},handleDragEnd:function(t,e){this.dragging=null},handleDragOver:function(t){t.dataTransfer.dropEffect="move"},handleDragEnter:function(t,e){var a;t.dataTransfer.effectAllowed="move",e!==this.dragging&&(a=(t=Object(r.a)(this.formValidate.images)).indexOf(this.dragging),e=t.indexOf(e),t.splice.apply(t,[e,0].concat(Object(r.a)(t.splice(a,1)))),this.formValidate.images=t)},onchangeTime:function(t){this.formValidate.section_time=t},getInfo:function(){var t=this;this.spinShow=!0,Object(d.c)(this.$route.params.id).then(function(){var e=Object(i.a)(regeneratorRuntime.mark((function e(a){var i,r,s,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=t,r=a.data.info,t.formValidate=r,t.formValidate.rule=null===r.rule?"":r.rule,t.$set(t.formValidate,"items",r.attrs.items),t.columns=r.attrs.header,s={title:"选择",key:"chose",width:60,align:"center",render:function(e,a){var i=a.index,r=!1,s=(r=t.currentid===i,t);return e("div",[e("Radio",{props:{value:r},on:{"on-change":function(){s.currentid=i;var t=[];t.push(a.row),s.formValidate.attrs=t}}})])}},i.columns.unshift(s),t.specsData=r.attrs.value,o=[],r.attrs.value.forEach((function(t,e){t.opt&&(o.push(t),i.$set(i,"currentid",e),i.$set(i.formValidate,"attrs",o))})),t.spinShow=!1;case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.spinShow=!1,t.$Message.error(e.msg)}))},next:function(t){var e=this;3===this.current?(this.formValidate.description=this.description,this.formValidate.rule=this.rule,this.$refs[t].validate((function(t){if(!t)return!1;1==e.copy&&(e.formValidate.copy=1),e.formValidate.id=e.$route.params.id||0,e.submitOpen=!0,Object(d.b)(e.formValidate).then(function(){var t=Object(i.a)(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.submitOpen=!1,e.$Message.success(a.msg),setTimeout((function(){e.$router.push({path:"/admin/marketing/store_bargain/index"})}),500);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.submitOpen=!1,e.$Message.error(t.msg)}))}))):1===this.current?this.$refs[t].validate((function(t){var a;return t?""===e.currentid?e.$Message.error("请选择属性规格"):(t=e.specsData[e.currentid],(a=e.formValidate.attrs[0]).price=t.price,a.min_price=t.min_price,a.quota=t.quota,e.formValidate.attrs[0].quota<=0?e.$Message.error("砍价限量必须大于0"):e.formValidate.attrs[0].quota>e.formValidate.attrs[0].stock?e.$Message.error("砍价限量不能超过规格库存"):void(e.current+=1)):e.$Message.warning("请完善您的信息")})):this.formValidate.image?this.current+=1:this.$Message.warning("请选择商品")},step:function(){this.current--},getContent:function(t){this.formValidate.description=t},getRole:function(t){this.formValidate.rule=t},modalPicTap:function(t,e,a){this.modalPic=!0,this.isChoice="dan"===t?"单选":"多选",this.picTit=e,this.tableIndex=a},getPic:function(t){"danFrom"===this.picTit?this.formValidate.image=t.att_dir:(this.specsData[this.tableIndex].pic=t.att_dir,this.formValidate.attrs[0].pic=t.att_dir),this.modalPic=!1},getPicD:function(t){var e=this;this.images=t,this.images.map((function(t){e.formValidate.images.push(t.att_dir),e.formValidate.images=e.formValidate.images.splice(0,10)})),this.modalPic=!1},handleRemove:function(t){this.images.splice(t,1),this.formValidate.images.splice(t,1)},changeGoods:function(){this.modals=!0,this.$refs.goodslist.formValidate.is_presale=0,this.$refs.goodslist.getList(),this.$refs.goodslist.goodsCategory()},validate:function(t,e,a){!1===e&&this.$Message.error(a)},addCustomDialog:function(t){window.UE.registerUI("test-dialog",(function(t,e){var a=new window.UE.ui.Dialog({iframeUrl:"/admin/widget.images/index.html?fodder=dialog",editor:t,name:e,title:"上传图片",cssRules:"width:960px;height:550px;padding:20px;"});return this.dialog=a,new window.UE.ui.Button({name:"dialog-button",title:"上传图片",cssRules:"background-image: url(../../../assets/images/icons.png);background-position: -726px -77px;",onclick:function(){a.render(),a.open()}})}),37)}}},a("3d12"),c=a("2877"),m=Object(c.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header header_top"},[a("div",{staticClass:"i-layout-page-header fl_header"},[a("router-link",{attrs:{to:{path:"/admin/marketing/store_bargain/index"}}},[a("Button",{attrs:{icon:"ios-arrow-back",size:"small",type:"text"}},[t._v("返回")])],1),a("Divider",{attrs:{type:"vertical"}}),a("span",{staticClass:"ivu-page-header-title mr20",staticStyle:{padding:"0"},domProps:{textContent:t._s("0"!==t.$route.params.id?"编辑砍价商品":"添加砍价商品")}})],1)]),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("Row",{staticClass:"mt30 acea-row row-middle row-center",attrs:{type:"flex"}},[a("Col",{attrs:{span:"20"}},[a("Steps",{attrs:{current:t.current}},[a("Step",{attrs:{title:"选择砍价商品"}}),a("Step",{attrs:{title:"填写基础信息"}}),a("Step",{attrs:{title:"修改商品详情"}}),a("Step",{attrs:{title:"修改商品规则"}})],1)],1),a("Col",{attrs:{span:"23"}},[a("Form",{ref:"formValidate",staticClass:"form mt30",attrs:{rules:t.ruleValidate,model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},on:{"on-validate":t.validate},nativeOn:{submit:function(t){t.preventDefault()}}},[a("FormItem",{directives:[{name:"show",rawName:"v-show",value:0===t.current,expression:"current === 0"}],attrs:{label:"选择商品：",prop:"image_input"}},[a("div",{staticClass:"picBox",on:{click:t.changeGoods}},[t.formValidate.image?a("div",{staticClass:"pictrue"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.formValidate.image,expression:"formValidate.image"}]})]):a("div",{staticClass:"upLoad acea-row row-center-wrapper"},[a("Icon",{staticClass:"iconfonts",attrs:{type:"ios-camera-outline",size:"26"}})],1)])]),a("Row",{directives:[{name:"show",rawName:"v-show",value:1===t.current,expression:"current === 1"}],attrs:{type:"flex"}},[a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"商品主图：",prop:"image"}},[a("div",{staticClass:"picBox",on:{click:function(e){return t.modalPicTap("dan","danFrom")}}},[t.formValidate.image?a("div",{staticClass:"pictrue"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.formValidate.image,expression:"formValidate.image"}]})]):a("div",{staticClass:"upLoad acea-row row-center-wrapper"},[a("Icon",{staticClass:"iconfonts",attrs:{type:"ios-camera-outline",size:"26"}})],1)])])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"商品轮播图：",prop:"images"}},[a("div",{staticClass:"acea-row"},[t._l(t.formValidate.images,(function(e,i){return a("div",{key:i,staticClass:"pictrue",attrs:{draggable:"true"},on:{dragstart:function(a){return t.handleDragStart(a,e)},dragover:function(a){return a.preventDefault(),t.handleDragOver(a,e)},dragenter:function(a){return t.handleDragEnter(a,e)},dragend:function(a){return t.handleDragEnd(a,e)}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"item"}]}),a("Button",{staticClass:"btndel",attrs:{shape:"circle",icon:"md-close"},nativeOn:{click:function(e){return t.handleRemove(i)}}})],1)})),t.formValidate.images.length<10?a("div",{staticClass:"upLoad acea-row row-center-wrapper",on:{click:function(e){return t.modalPicTap("duo")}}},[a("Icon",{staticClass:"iconfonts",attrs:{type:"ios-camera-outline",size:"26"}})],1):t._e()],2)])],1),a("Col",{attrs:{span:"24"}},[a("Col",t._b({},"Col",t.grid,!1),[a("FormItem",{attrs:{label:"砍价活动名称：",prop:"title","label-for":"title"}},[a("Input",{attrs:{placeholder:"请输入砍价活动名称","element-id":"title"},model:{value:t.formValidate.title,callback:function(e){t.$set(t.formValidate,"title",e)},expression:"formValidate.title"}})],1)],1)],1),a("Col",{attrs:{span:"24"}},[a("Col",t._b({},"Col",t.grid,!1),[a("FormItem",{attrs:{label:"砍价活动简介：",prop:"info","label-for":"info"}},[a("Input",{attrs:{placeholder:"请输入砍价活动简介",type:"textarea",rows:4,"element-id":"info"},model:{value:t.formValidate.info,callback:function(e){t.$set(t.formValidate,"info",e)},expression:"formValidate.info"}})],1)],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"活动时间：",prop:"section_time"}},[a("div",{staticClass:"acea-row row-middle"},[a("DatePicker",{staticClass:"perW30",attrs:{editable:!1,type:"datetimerange",format:"yyyy-MM-dd HH:mm",placeholder:"请选择活动时间",value:t.formValidate.section_time},on:{"on-change":t.onchangeTime},model:{value:t.formValidate.section_time,callback:function(e){t.$set(t.formValidate,"section_time",e)},expression:"formValidate.section_time"}}),a("div",{staticClass:"ml10 grey"},[t._v("设置活动开启结束时间，用户可以在设置时间内发起参与砍价")])],1)])],1),0==t.formValidate.virtual_type?a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"物流方式：",prop:"logistics"}},[a("CheckboxGroup",{on:{"on-change":t.logisticsBtn},model:{value:t.formValidate.logistics,callback:function(e){t.$set(t.formValidate,"logistics",e)},expression:"formValidate.logistics"}},[a("Checkbox",{attrs:{label:"1"}},[t._v("快递")]),a("Checkbox",{attrs:{label:"2"}},[t._v("到店核销")])],1)],1)],1):t._e(),0==t.formValidate.virtual_type?a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"运费设置：",prop:1!=t.formValidate.freight?"freight":""}},[a("RadioGroup",{model:{value:t.formValidate.freight,callback:function(e){t.$set(t.formValidate,"freight",e)},expression:"formValidate.freight"}},[a("Radio",{attrs:{label:2}},[t._v("固定邮费")]),a("Radio",{attrs:{label:3}},[t._v("运费模板")])],1)],1)],1):t._e(),3!=t.formValidate.freight&&1!=t.formValidate.freight&&0==t.formValidate.virtual_type?a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:""}},[a("div",{staticClass:"acea-row"},[a("InputNumber",{staticClass:"perW20 maxW",attrs:{min:"0.01",max:"10000",placeholder:"请输入金额"},model:{value:t.formValidate.postage,callback:function(e){t.$set(t.formValidate,"postage",e)},expression:"formValidate.postage"}})],1)])],1):t._e(),3==t.formValidate.freight&&0==t.formValidate.virtual_type?a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"",prop:"temp_id"}},[a("div",{staticClass:"acea-row"},[a("Select",{staticClass:"perW20 maxW",attrs:{clearable:"",placeholder:"请选择运费模板"},model:{value:t.formValidate.temp_id,callback:function(e){t.$set(t.formValidate,"temp_id",e)},expression:"formValidate.temp_id"}},t._l(t.templateList,(function(e,i){return a("Option",{key:i,attrs:{value:e.id}},[t._v(t._s(e.name))])})),1),a("span",{staticClass:"addfont",on:{click:t.freight}},[t._v("新增运费模板")])],1)])],1):t._e(),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"砍价人数：",prop:"people_num","label-for":"people_num"}},[a("div",{staticClass:"acea-row row-middle"},[a("InputNumber",{staticClass:"perW20",attrs:{placeholder:"请输入砍价人数","element-id":"people_num",min:2,max:1e4,precision:0},model:{value:t.formValidate.people_num,callback:function(e){t.$set(t.formValidate,"people_num",e)},expression:"formValidate.people_num"}}),a("div",{staticClass:"ml10 grey"},[t._v("需要多少人砍价成功")])],1)])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"帮砍次数：",prop:"bargain_num","label-for":"bargain_num"}},[a("div",{staticClass:"acea-row row-middle"},[a("InputNumber",{staticClass:"perW20",attrs:{placeholder:"请输入帮砍次数","element-id":"bargain_num",min:1,max:1e4,precision:0},model:{value:t.formValidate.bargain_num,callback:function(e){t.$set(t.formValidate,"bargain_num",e)},expression:"formValidate.bargain_num"}}),a("div",{staticClass:"ml10 grey"},[t._v("\n                    单个商品用户可以帮砍的次数，例：次数设置为1，甲和乙同时将商品A的砍价链接发给丙，丙只能帮甲或乙其中一个人砍价\n                  ")])],1)])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"购买数量限制：",prop:"num"}},[a("div",{staticClass:"acea-row row-middle"},[a("InputNumber",{staticClass:"perW20",attrs:{placeholder:"购买数量限制",min:1,max:1e4,precision:0},model:{value:t.formValidate.num,callback:function(e){t.$set(t.formValidate,"num",e)},expression:"formValidate.num"}}),a("div",{staticClass:"ml10 grey"},[t._v("单个活动每个用户发起砍价次数限制")])],1)])],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"单位：",prop:"unit_name","label-for":"unit_name"}},[a("Input",{staticClass:"perW20",attrs:{placeholder:"请输入单位","element-id":"unit_name"},model:{value:t.formValidate.unit_name,callback:function(e){t.$set(t.formValidate,"unit_name",e)},expression:"formValidate.unit_name"}})],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"排序："}},[a("InputNumber",{staticClass:"perW10",attrs:{placeholder:"请输入排序","element-id":"sort",min:0,max:1e4,precision:0},model:{value:t.formValidate.sort,callback:function(e){t.$set(t.formValidate,"sort",e)},expression:"formValidate.sort"}})],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"活动状态：",props:"status","label-for":"status"}},[a("RadioGroup",{attrs:{"element-id":"status"},model:{value:t.formValidate.status,callback:function(e){t.$set(t.formValidate,"status",e)},expression:"formValidate.status"}},[a("Radio",{staticClass:"radio",attrs:{label:1}},[t._v("开启")]),a("Radio",{attrs:{label:0}},[t._v("关闭")])],1)],1)],1),a("Col",{attrs:{span:"24"}},[a("FormItem",{attrs:{label:"规格选择："}},[a("Table",{attrs:{data:t.specsData,columns:t.columns,border:""},scopedSlots:t._u([{key:"pic",fn:function(e){e.row;var i=e.index;return[a("div",{staticClass:"acea-row row-middle row-center-wrapper",on:{click:function(e){return t.modalPicTap("dan","danTable",i)}}},[t.specsData[i].pic?a("div",{staticClass:"pictrue pictrueTab"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.specsData[i].pic,expression:"specsData[index].pic"}]})]):a("div",{staticClass:"upLoad pictrueTab acea-row row-center-wrapper"},[a("Icon",{staticClass:"iconfonts",attrs:{type:"ios-camera-outline",size:"21"}})],1)])]}},{key:"price",fn:function(e){e.row;var i=e.index;return[a("InputNumber",{staticClass:"priceBox",attrs:{min:0,precision:2,"active-change":!1},model:{value:t.specsData[i].price,callback:function(e){t.$set(t.specsData[i],"price",e)},expression:"specsData[index].price"}})]}},{key:"min_price",fn:function(e){e.row;var i=e.index;return[a("InputNumber",{staticClass:"priceBox",attrs:{min:0,precision:2,"active-change":!1},model:{value:t.specsData[i].min_price,callback:function(e){t.$set(t.specsData[i],"min_price",e)},expression:"specsData[index].min_price"}})]}},{key:"quota",fn:function(e){e.row;var i=e.index;return[a("InputNumber",{staticClass:"priceBox",attrs:{min:1,"active-change":""},model:{value:t.specsData[i].quota,callback:function(e){t.$set(t.specsData[i],"quota",e)},expression:"specsData[index].quota"}})]}}])})],1)],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:2===t.current,expression:"current === 2"}]},[a("FormItem",{attrs:{label:"内容："}},[a("WangEditor",{staticStyle:{width:"90%"},attrs:{content:t.formValidate.description},on:{editorContent:t.getEditorContent}})],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:3===t.current,expression:"current === 3"}]},[a("FormItem",{attrs:{label:"规则："}},[a("WangEditor",{staticStyle:{width:"90%"},attrs:{content:t.formValidate.rule},on:{editorContent:t.getEditorContent2}})],1)],1),a("FormItem",[a("Button",{directives:[{name:"show",rawName:"v-show",value:0!==t.current,expression:"current !== 0"}],staticClass:"submission mr15",attrs:{disabled:t.$route.params.id&&"0"!==t.$route.params.id&&1===t.current},on:{click:t.step}},[t._v("上一步")]),a("Button",{staticClass:"submission",attrs:{type:"primary",disabled:t.submitOpen&&3===t.current},domProps:{textContent:t._s(3===t.current?"提交":"下一步")},on:{click:function(e){return t.next("formValidate")}}})],1),t.spinShow?a("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1)],1)],1),a("Modal",{staticClass:"paymentFooter",attrs:{title:"商品列表",footerHide:"",scrollable:"",width:"900"},on:{"on-cancel":t.cancel},model:{value:t.modals,callback:function(e){t.modals=e},expression:"modals"}},[a("goods-list",{ref:"goodslist",on:{getProductId:t.getProductId}})],1),a("Modal",{attrs:{width:"950px",scrollable:"","footer-hide":"",closable:"",title:"上传商品图","mask-closable":!1,"z-index":888},model:{value:t.modalPic,callback:function(e){t.modalPic=e},expression:"modalPic"}},[t.modalPic?a("uploadPictures",{attrs:{isChoice:t.isChoice,gridBtn:t.gridBtn,gridPic:t.gridPic},on:{getPic:t.getPic,getPicD:t.getPicD}}):t._e()],1),a("freight-template",{ref:"template",on:{addSuccess:t.productGetTemplate}})],1)}),[],!1,null,"388f1e5b",null);e.default=m.exports},c513:function(t,e,a){var i=a("23e7"),r=a("1a2d"),s=a("d9b5"),o=a("0d51"),n=a("5692"),l=(a=a("3d87"),n("symbol-to-string-registry"));i({target:"Symbol",stat:!0,forced:!a},{keyFor:function(t){if(!s(t))throw TypeError(o(t)+" is not a symbol");if(r(l,t))return l[t]}})},d9f5:function(t,e,a){"use strict";function i(t,e){var a=rt[t]=k(X);return J(a,{type:A,tag:t,description:e}),g||(a.description=e),a}function r(t,e,a){return t===K&&r(st,e,a),y(t),e=V(e),y(a),(v(rt,e)?(a.enumerable?(v(t,H)&&t[H][e]&&(t[H][e]=!1),a=k(a,{enumerable:C(0,!1)})):(v(t,H)||tt(t,H,C(1,{})),t[H][e]=!0),nt):tt)(t,e,a)}function s(t,e){y(t);var a=w(e);e=$(a).concat(c(a));return G(e,(function(e){g&&!m(o,a,e)||r(t,e,a[e])})),t}function o(t){t=V(t);var e=m(at,this,t);return!(this===K&&v(rt,t)&&!v(st,t))&&(!(e||!v(this,t)||!v(rt,t)||v(this,H)&&this[H][t])||e)}function n(t,e){var a;t=w(t),e=V(e);if(t!==K||!v(rt,e)||v(st,e))return!(a=Z(t,e))||!v(rt,e)||v(t,H)&&t[H][e]||(a.enumerable=!0),a}function l(t){t=et(w(t));var e=[];return G(t,(function(t){v(rt,t)||v(R,t)||it(e,t)})),e}function c(t){var e=t===K,a=(t=et(e?st:w(t)),[]);return G(t,(function(t){!v(rt,t)||e&&!v(K,t)||it(a,rt[t])})),a}var d=a("23e7"),u=a("da84"),m=a("c65b"),p=a("e330"),f=a("c430"),g=a("83ab"),h=a("4930"),b=a("d039"),v=a("1a2d"),_=a("3a9b"),y=a("825a"),w=a("fc6a"),V=a("a04b"),x=a("577e"),C=a("5c6c"),k=a("7c73"),$=a("df75"),I=a("241c"),S=a("057f"),O=a("7418"),D=a("06cf"),P=a("9bf2"),F=a("37e8"),E=a("d1e7"),q=a("cb2d"),T=a("5692"),j=a("f772"),R=a("d012"),N=a("90e3"),M=a("b622"),W=a("e538"),z=a("746f"),B=a("57b9"),L=a("d44e"),U=a("69f3"),G=a("b727").forEach,H=j("hidden"),A="Symbol",J=(a="prototype",U.set),Q=U.getterFor(A),K=Object[a],X=(j=u.Symbol,j&&j[a]),Y=u.TypeError,Z=(U=u.QObject,D.f),tt=P.f,et=S.f,at=E.f,it=p([].push),rt=T("symbols"),st=T("op-symbols"),ot=(u=T("wks"),!U||!U[a]||!U[a].findChild),nt=g&&b((function(){return 7!=k(tt({},"a",{get:function(){return tt(this,"a",{value:7}).a}})).a}))?function(t,e,a){var i=Z(K,e);i&&delete K[e],tt(t,e,a),i&&t!==K&&tt(K,e,i)}:tt;h||(q(X=(j=function(){if(_(X,this))throw Y("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?x(arguments[0]):void 0,e=N(t),a=function(t){this===K&&m(a,st,t),v(this,H)&&v(this[H],e)&&(this[H][e]=!1),nt(this,e,C(1,t))};return g&&ot&&nt(K,e,{configurable:!0,set:a}),i(e,t)})[a],"toString",(function(){return Q(this).tag})),q(j,"withoutSetter",(function(t){return i(N(t),t)})),E.f=o,P.f=r,F.f=s,D.f=n,I.f=S.f=l,O.f=c,W.f=function(t){return i(M(t),t)},g&&(tt(X,"description",{configurable:!0,get:function(){return Q(this).description}}),f||q(K,"propertyIsEnumerable",o,{unsafe:!0}))),d({global:!0,constructor:!0,wrap:!0,forced:!h,sham:!h},{Symbol:j}),G($(u),(function(t){z(t)})),d({target:A,stat:!0,forced:!h},{useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),d({target:"Object",stat:!0,forced:!h,sham:!g},{create:function(t,e){return void 0===e?k(t):s(k(t),e)},defineProperty:r,defineProperties:s,getOwnPropertyDescriptor:n}),d({target:"Object",stat:!0,forced:!h},{getOwnPropertyNames:l}),B(),L(j,A),R[H]=!0},e01a:function(t,e,a){"use strict";var i,r,s,o,n,l,c,d=a("23e7"),u=a("83ab"),m=a("da84"),p=a("e330"),f=a("1a2d"),g=a("1626"),h=a("3a9b"),b=a("577e"),v=a("9bf2").f,_=(a=a("e893"),m.Symbol),y=_&&_.prototype;!u||!g(_)||"description"in y&&void 0===_().description||(i={},a(m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:b(arguments[0]),e=h(y,this)?new _(t):void 0===t?_():_(t);return""===t&&(i[e]=!0),e},_),(m.prototype=y).constructor=m,r="Symbol(test)"==String(_("test")),s=p(y.toString),o=p(y.valueOf),n=/^Symbol\((.*)\)[^)]+$/,l=p("".replace),c=p("".slice),v(y,"description",{configurable:!0,get:function(){var t=o(this),e=s(t);return f(i,t)?"":""===(t=r?c(e,7,-1):l(e,n,"$1"))?void 0:t}}),d({global:!0,constructor:!0,forced:!0},{Symbol:m}))},e538:function(t,e,a){a=a("b622"),e.f=a}}]);