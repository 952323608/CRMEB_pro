(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_distribution_level/index"],{4572:function(t,e,n){"use strict";(function(t){n("7b91");i(n("66fd"));var e=i(n("5d6d"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},4872:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$t("一级分佣上浮")),i=t.$t("二级分佣上浮"),o=t.__map(t.distributionLevel,(function(e,n){var i=t.__get_orig(e),o=t.$t(e.name);return{$orig:i,m0:o}})),r=t.$t("快速升级技巧"),a=t.__map(t.task,(function(e,n){var i=t.__get_orig(e),o=t.$t(e.name),r=e.finish?t.$t("已完成"):null,a=e.finish?null:t.$t("未完成"),l=Math.floor(e.new_number/e.number>1?100:e.new_number/e.number*100),u=e.finish?null:t.$t(e.task_type_title);return{$orig:i,m4:o,m5:r,m6:a,g0:l,m7:u}}));t._isMounted||(t.e0=function(e){t.growthValue=!0}),t.$mp.data=Object.assign({},{$root:{m1:n,m2:i,l0:o,m3:r,l1:a}})},r=[]},"5d6d":function(t,e,n){"use strict";n.r(e);var i=n("4872"),o=n("683a");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("7f4c");var a,l=n("f0c5"),u=Object(l["a"])(o["default"],i["b"],i["c"],!1,null,"f9131aa2",null,!1,i["a"],a);e["default"]=u.exports},"683a":function(t,e,n){"use strict";n.r(e);var i=n("cab6"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},"7f4c":function(t,e,n){"use strict";var i=n("d3fea"),o=n.n(i);o.a},cab6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("816a"),o=n("768b"),r=n("a368"),a=n("26cb"),l=u(n("9ad2"));function u(t){return t&&t.__esModule?t:{default:t}}var s=function(){Promise.all([n.e("common/vendor"),n.e("components/recommend/index")]).then(function(){return resolve(n("ef32"))}.bind(null,n)).catch(n.oe)},c={components:{recommend:s},mixins:[l.default],data:function(){return{reach_count:0,distributionLevel:[],swiperIndex:0,growthValue:!0,task:[],illustrate:"",level_id:0,hostProduct:[],grade:0,hotScroll:!1,hotPage:1,hotLimit:10,level_title:"",level_discount:"",levelInfo:{},userInfo:{},taskInfo:{},taskNum:0}},computed:(0,a.mapGetters)(["isLogin"]),watch:{distributionLevel:function(){var t=this;t.distributionLevel.length>0&&t.distributionLevel.forEach((function(e,n){!1===e.is_clear&&(t.activeIndex=n,t.grade=e.grade)}))},isLogin:{handler:function(t,e){t&&this.get_host_product()},deep:!0}},onLoad:function(){this.isLogin?this.agentLevelList():(0,r.toLogin)(),this.get_host_product()},methods:{agentLevelList:function(){var t=this;(0,i.agentLevelList)().then((function(e){var n=e.data,i=n.level_info,o=n.level_list,r=n.task,a=n.user;t.levelInfo=i,t.distributionLevel=o,t.userInfo=a,t.taskInfo=r,t.levelInfo.exp=parseFloat(t.levelInfo.exp),t.levelInfo.rate=Math.floor(t.levelInfo.exp/t.levelInfo.exp_num*100),t.levelInfo.rate>100&&(t.levelInfo.rate=100);var l=o.findIndex((function(t,e){return t.id===a.agent_level}));-1!==l&&(t.swiperIndex=-1===l?0:l),t.level_id=t.distributionLevel[-1===l?0:l].id||0,t.getTask()}))},get_host_product:function(){var t=this;t.hotScroll||(0,o.getProductHot)(t.hotPage,t.hotLimit).then((function(e){t.hotPage++,t.hotScroll=e.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(e.data)}))},swiperChange:function(t){var e=t.detail.current;this.swiperIndex=e,this.level_id=this.distributionLevel[e].id||0,this.level_title=this.distributionLevel[e].name||"",this.level_discount=this.distributionLevel[e].discount||"",this.getTask()},growthValueClose:function(){this.growthValue=!0},opHelp:function(t){this.growthValue=!1,this.illustrate=this.task[t].desc},getTask:function(){var t=this;t.taskNum=0,(0,i.agentLevelTaskList)(t.level_id).then((function(e){t.task=e.data;for(var n=0;n<t.task.length;n++)t.task[n].finish&&(t.taskNum+=1)}))}},onReachBottom:function(){this.hotScroll||this.get_host_product()}};e.default=c},d3fea:function(t,e,n){}},[["4572","common/runtime","common/vendor"]]]);