(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-binding_phone-index"],{"1a44a":function(t,e,a){"use strict";a.r(e);var i=a("4b6b"),n=a("b648");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("5685");var c=a("f0c5"),s=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"5d6bea48",null,!1,i["a"],void 0);e["default"]=s.exports},"4b6b":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"wrapper",style:t.colorStyle},[a("v-uni-view",{staticClass:"bag"}),a("v-uni-view",{staticClass:"system-height",style:{height:t.statusBarHeight}}),a("v-uni-view",{staticClass:"page-msg"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(1==t.pageType?t.$t("绑定手机号"):t.$t("手机号登录")))]),a("v-uni-view",{staticClass:"tip"},[t._v(t._s(1==t.pageType?t.$t("登录注册需绑定手机号"):t.$t("首次登录会自动注册")))])],1),a("v-uni-view",{staticClass:"page-form"},[a("v-uni-view",{staticClass:"item"},[a("v-uni-input",{attrs:{type:"number",placeholder:t.$t("填写手机号码"),"placeholder-class":"placeholder",maxlength:11},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),a("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[a("v-uni-input",{staticClass:"codeIput",attrs:{type:"number",placeholder:t.$t("填写验证码"),"placeholder-class":"placeholder",maxlength:6},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}}),a("v-uni-view",{staticClass:"line"}),a("v-uni-button",{staticClass:"code font-num",class:!0===t.disabled?"on":"",attrs:{disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.code.apply(void 0,arguments)}}},[t._v(t._s(t.text))])],1),a("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submitData.apply(void 0,arguments)}}},[t._v(t._s(t.$t(1==t.pageType?"绑定手机号":"立即登录")))])],1),0!=t.pageType||t.canGetPrivacySetting?t._e():a("v-uni-view",{staticClass:"protocol"},[a("v-uni-checkbox-group",{on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.ChangeIsDefault.apply(void 0,arguments)}}},[a("v-uni-checkbox",{class:t.inAnimation?"trembling":"",attrs:{checked:!!t.protocol},on:{animationend:function(e){arguments[0]=e=t.$handleEvent(e),t.inAnimation=!1}}}),a("v-uni-text",{on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.ChangeIsDefault.apply(void 0,arguments)}}},[t._v(t._s(t.$t("已阅读并同意")))]),a("v-uni-text",{staticClass:"main-color",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.privacy(4)}}},[t._v(t._s(t.$t("《用户协议》")))]),t._v(t._s(t.$t("与"))),a("v-uni-text",{staticClass:"main-color",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.privacy(3)}}},[t._v(t._s(t.$t("《隐私协议》")))])],1)],1),a("Verify",{ref:"verify",attrs:{captchaType:"clickWord",imgSize:{width:"330px",height:"155px"}},on:{success:function(e){arguments[0]=e=t.$handleEvent(e),t.success.apply(void 0,arguments)}}}),a("editUserModal",{attrs:{isShow:t.isShow},on:{closeEdit:function(e){arguments[0]=e=t.$handleEvent(e),t.closeEdit.apply(void 0,arguments)},editSuccess:function(e){arguments[0]=e=t.$handleEvent(e),t.editSuccess.apply(void 0,arguments)}}})],1)},n=[]},5685:function(t,e,a){"use strict";var i=a("a4c6"),n=a.n(i);n.a},a4c6:function(t,e,a){var i=a("bfa7");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("68b830de",i,!0,{sourceMap:!1,shadowMode:!1})},ae7a:function(t,e,a){"use strict";(function(t){a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("c7eb")),o=i(a("1da1"));a("ac1f"),a("00b4");var c=i(a("3de7")),s=i(a("66ca")),r=i(a("b326")),u=i(a("d177")),p=a("d322"),h=a("8ba8"),d=a("a9a5"),l=i(a("7635")),f=i(a("233b")),g=i(a("ebdf")),v=getApp(),b=uni.getSystemInfoSync().statusBarHeight+"px",m={mixins:[c.default,s.default],components:{Verify:f.default,editUserModal:r.default,privacyAgreementPopup:u.default},data:function(){return{statusBarHeight:b,pageType:1,phone:"",captcha:"",text:"获取验证码",isShow:!1,protocol:!1,inAnimation:!1,authKey:"",backUrl:"",pageTitle:"绑定手机号",configData:g.default.get("BASIC_CONFIG"),canGetPrivacySetting:!1}},onLoad:function(t){t.authKey&&(this.authKey=t.authKey),this.backUrl=t.backUrl||"",t.pageType&&(this.pageType=t.pageType||1,this.pageTitle=1==t.pageType?"绑定手机号":"手机号登录");var e=getCurrentPages(),a=e[e.length-2];a&&"pages/order_addcart/order_addcart"==a.route?this.isHome=!0:this.isHome=!1},methods:{onAgree:function(){this.protocol=!0},submitData:function(){if(0!=this.pageType){if(this.rules())if(this.authKey)this.phoneAuth(this.authKey);else{var t=this.$Cache.get("snsapiKey");this.phoneAuth(t)}}else this.isLogin()},rules:function(){return this.protocol||0!=this.pageType?this.phone?/^1(3|4|5|7|8|9|6)\d{9}$/i.test(this.phone)?!!this.captcha||this.$util.Tips({title:this.$t("请填写验证码")}):(this.$util.Tips({title:this.$t("请输入正确的手机号码")}),!1):(this.$util.Tips({title:this.$t("请填写手机号码")}),!1):(uni.showToast({title:this.$t("请先阅读并同意协议"),icon:"none",duration:2e3}),!1)},isLogin:function(){var t=this;this.rules()&&(uni.showLoading({title:this.$t("正在登录中")}),l.default.getCode().then((function(e){(0,d.phoneLogin)({code:e,spread_spid:v.globalData.spid,spread_code:v.globalData.code,phone:t.phone,captcha:t.captcha}).then((function(e){uni.hideLoading();var a=e.data.expires_time-t.$Cache.time();t.$store.commit("LOGIN",{token:e.data.token,time:a}),t.getUserInfo(e.data.bindName)})).catch((function(t){uni.hideLoading(),uni.showToast({title:t,icon:"none",duration:2e3})}))})).catch((function(t){})))},phoneAuth:function(t){var e,a=this;uni.showLoading({title:this.$t("正在登录中")}),e=d.wechatBindingPhone,e({phone:this.phone,captcha:this.captcha,key:t}).then((function(t){var e=t.data.expires_time-a.$Cache.time();a.$store.commit("LOGIN",{token:t.data.token,time:e}),a.getUserInfo(t.data.bindName)})).catch((function(t){uni.hideLoading(),a.$util.Tips({title:t})}))},getUserInfo:function(t){var e=this,a=this;(0,h.getUserInfo)().then((function(i){uni.hideLoading(),a.userInfo=i.data,a.$store.commit("SETUID",i.data.uid),a.$store.commit("UPDATE_USERINFO",i.data),t?e.isShow=!0:a.$util.Tips({title:a.$t("登录成功"),icon:"success"},{url:e.backUrl||"pages/user/index"})}))},success:function(t){var e=this;this.$refs.verify.hide();var a=this;(0,p.verifyCode)().then((function(i){(0,p.registerVerify)(a.phone,"reset",i.data.key,e.captchaType,t.captchaVerification).then((function(t){a.$util.Tips({title:t.msg}),a.sendCode()})).catch((function(t){return a.$util.Tips({title:t})}))}))},code:function(){var t=this;return(0,o.default)((0,n.default)().mark((function e(){var a;return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t,a.phone){e.next=3;break}return e.abrupt("return",a.$util.Tips({title:a.$t("请填写手机号码")}));case 3:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(a.phone)){e.next=5;break}return e.abrupt("return",a.$util.Tips({title:a.$t("请输入正确的手机号码")}));case 5:return t.$refs.verify.show(),e.abrupt("return");case 7:case"end":return e.stop()}}),e)})))()},ChangeIsDefault:function(){this.$set(this,"protocol",!this.protocol)},closeEdit:function(){this.isShow=!1,this.$util.Tips({title:this.$t("登录成功"),icon:"success"},{tab:3,url:2})},editSuccess:function(){this.isShow=!1},back:function(){uni.navigateBack({delta:this.configData.wechat_auth_switch?2:1})},privacy:function(t){uni.navigateTo({url:"/pages/users/privacy/index?type="+t})}}};e.default=m}).call(this,a("5a52")["default"])},b648:function(t,e,a){"use strict";a.r(e);var i=a("ae7a"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},bfa7:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.wrapper[data-v-5d6bea48]{background-color:#fff;min-height:100vh;position:relative}.wrapper .bag[data-v-5d6bea48]{position:absolute;top:0;left:0;width:%?750?%;height:%?460?%;background:var(--view-linear)}.wrapper .page-msg[data-v-5d6bea48]{padding-top:%?160?%;margin-left:%?72?%}.wrapper .page-msg .title[data-v-5d6bea48]{font-size:%?48?%;font-weight:500;color:#333;line-height:%?68?%}.wrapper .page-msg .tip[data-v-5d6bea48]{font-size:%?28?%;font-weight:400;color:#333;line-height:%?40?%}.wrapper .page-form[data-v-5d6bea48]{width:%?606?%;margin:%?100?% auto 0 auto}.wrapper .page-form .item[data-v-5d6bea48]{width:100%;height:%?88?%;background:#f5f5f5;border-radius:%?45?%;padding:%?24?% %?48?%;margin-bottom:%?32?%}.wrapper .page-form .item uni-input[data-v-5d6bea48]{width:100%;height:100%;font-size:%?32?%}.wrapper .page-form .item .placeholder[data-v-5d6bea48]{color:#bbb;font-size:%?28?%}.wrapper .page-form .item uni-input.codeIput[data-v-5d6bea48]{width:%?300?%}.wrapper .page-form .item .line[data-v-5d6bea48]{width:%?2?%;height:%?28?%;background:#ccc}.wrapper .page-form .item .code[data-v-5d6bea48]{font-size:%?28?%;color:var(--view-theme);background-color:hsla(0,0%,100%,0)}.wrapper .page-form .item .code.on[data-v-5d6bea48]{color:#bbb!important}.wrapper .page-form .btn[data-v-5d6bea48]{width:%?606?%;height:%?88?%;background:var(--view-theme);border-radius:%?200?% %?200?% %?200?% %?200?%;display:flex;justify-content:center;align-items:center;font-size:%?32?%;font-family:PingFang SC-Regular,PingFang SC;font-weight:400;color:#fff;line-height:%?44?%;margin-top:%?48?%;letter-spacing:1px}.title-bar[data-v-5d6bea48]{position:relative;display:flex;align-items:center;justify-content:center;font-size:%?34?%;font-weight:500;color:#333;line-height:%?48?%}.icon[data-v-5d6bea48]{position:absolute;left:%?30?%;top:0;display:flex;align-items:center;justify-content:center;width:%?80?%;height:%?80?%}.icon uni-image[data-v-5d6bea48]{width:%?35?%;height:%?35?%}.protocol[data-v-5d6bea48]{position:fixed;bottom:%?52?%;left:0;width:100%;margin:0 auto;color:#999;font-size:%?24?%;line-height:%?22?%;text-align:center;bottom:calc(52rpx+ constant(safe-area-inset-bottom));bottom:calc(%?52?% + env(safe-area-inset-bottom))}.protocol .main-color[data-v-5d6bea48]{color:var(--view-theme)}.protocol .trembling[data-v-5d6bea48]{-webkit-animation:shake .6s;animation:shake .6s}[data-v-5d6bea48] uni-checkbox .uni-checkbox-input{width:%?28?%;height:%?28?%}[data-v-5d6bea48] uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked::before{font-size:%?24?%}[data-v-5d6bea48] uni-checkbox .uni-checkbox-wrapper{margin-bottom:1px}\n/*checkbox 选项框大小  */[data-v-5d6bea48] uni-checkbox .wx-checkbox-input{width:%?28?%;height:%?28?%}\n/*checkbox选中后样式  */[data-v-5d6bea48] uni-checkbox .wx-checkbox-input.wx-checkbox-input-checked{background:#fff}\n/*checkbox选中后图标样式  */[data-v-5d6bea48] uni-checkbox .wx-checkbox-input.wx-checkbox-input-checked::before{width:%?28?%;height:%?28?%;line-height:%?28?%;text-align:center;font-size:%?22?%;background:transparent;transform:translate(-50%,-50%) scale(1);-webkit-transform:translate(-50%,-50%) scale(1)}',""]),t.exports=e}}]);