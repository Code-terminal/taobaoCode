(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c12acd2"],{8070:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"member-center"},[i("div",{staticClass:"header"},[i("div",{staticClass:"slider-banner banner"},[i("swiper",{ref:"mySwiper",staticClass:"swiper-wrapper",attrs:{options:t.swiperVip}},t._l(t.vipList,function(s,e){return i("swiperSlide",{key:e,staticClass:"swiper-slide memberBg",class:s.class,style:{backgroundImage:"url("+s.image+")"}},[i("div",{staticClass:"name"},[t._v(t._s(s.name))]),i("div",{staticClass:"discount"},[t._v("\n            可享受商品折扣: "+t._s(s.discount/10)+"折"),i("span",{staticClass:"iconfont icon-zhekou"})]),s.grade==t.grade?i("div",{staticClass:"nav acea-row"},t._l(t.vipComplete,function(s,e){return i("div",{key:e,staticClass:"item"},[i("div",{staticClass:"num"},[t._v(t._s(s.new_number))]),i("div",[t._v(t._s(s.real_name))])])}),0):t._e(),s.grade>t.grade?i("div",{staticClass:"lock"},[i("span",{staticClass:"iconfont icon-quanxianguanlisuozi"}),t._v("该会员等级尚未解锁\n          ")]):t._e(),s.grade<t.grade?i("div",{staticClass:"lock"},[i("span",{staticClass:"iconfont icon-xuanzhong1"}),t._v("已解锁更高等级\n          ")]):t._e()])}),1)],1)]),i("div",{staticClass:"wrapper"},[i("div",{staticClass:"title acea-row row-between-wrapper"},[t._m(0),i("div",{staticClass:"num"},[i("span",{staticClass:"current"},[t._v(t._s(t.taskCount))]),t._v("/"+t._s(t.vipRequire.length)+"\n      ")])]),i("div",{staticClass:"list"},t._l(t.vipComplete,function(s,e){return i("div",{key:e,staticClass:"item"},[i("div",{staticClass:"top acea-row row-between-wrapper"},[i("div",{staticClass:"name"},[t._v("\n            "+t._s(s.name)),s.illustrate?i("span",{staticClass:"iconfont icon-wenti",on:{click:function(e){return t.showGrow(s)}}}):t._e()]),i("div",[t._v(t._s(s.finish?"已满足条件":"未满足条件"))])]),i("div",{staticClass:"cu-progress"},[i("div",{staticClass:"bg-red",style:{width:s.speed+"%"}})]),i("div",{staticClass:"experience acea-row row-between-wrapper"},[i("div",[t._v(t._s(s.task_type_title))]),i("div",[i("span",{staticClass:"num"},[t._v(t._s(s.new_number))]),t._v("/"+t._s(s.number)+"\n          ")])])])}),0)]),i("Recommend"),i("div",{staticClass:"growthValue",class:!1===t.growthValue?"on":""},[i("div",{staticClass:"pictrue"},[i("img",{attrs:{src:e("eb85")}}),i("span",{staticClass:"iconfont icon-guanbi3",on:{click:t.growthTap}})]),i("div",{staticClass:"conter"},[t._v("\n      "+t._s(t.illustrate)+"\n    ")])]),i("div",{staticClass:"mask",attrs:{hidden:t.growthValue},on:{click:t.growthTap}})],1)},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("span",{staticClass:"iconfont icon-jingyanzhi"}),t._v("会员升级要求")])}],n=(e("ac6a"),e("7212")),r=(e("e5d0"),e("f410")),c=e("c24f"),o={name:"Poster",components:{swiper:n["swiper"],swiperSlide:n["swiperSlide"],Recommend:r["a"]},props:{},data:function(){return{vipList:[],vipRequire:[],vipComplete:[],taskCount:0,grade:0,swiperVip:{speed:1e3,effect:"coverflow",slidesPerView:"auto",centeredSlides:!0,coverflowEffect:{rotate:0,stretch:-20,depth:100,modifier:2,slideShadows:!1},observer:!0,observeParents:!0},loading:!1,growthValue:!0,illustrate:"",activeIndex:0}},watch:{vipList:function(){var t=this;t.vipList.length>0&&t.vipList.forEach(function(s,e){!1===s.is_clear&&(t.swiper.slideTo(e),t.activeIndex=e,t.grade=s.grade)})}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},mounted:function(){var t=this;Object(c["U"])(),t.getInfo(),t.swiper.on("slideChange",function(){t.activeIndex=t.swiper.activeIndex,t.getTask()})},methods:{growthTap:function(){this.growthValue=!0},getInfo:function(){var t=this;Object(c["F"])().then(function(s){t.vipList=s.data.list,t.vipRequire=s.data.task.list,t.vipComplete=s.data.task.task,t.taskCount=s.data.task.reach_count},function(s){t.$dialog.message(s.msg)})},getTask:function(){var t=this;Object(c["G"])(t.vipList[t.activeIndex].id).then(function(s){t.vipRequire=s.data.list,t.vipComplete=s.data.task,t.taskCount=s.data.reach_count},function(s){t.$dialog.message(s.msg)})},showGrow:function(t){this.illustrate!=t.illustrate&&(this.illustrate=t.illustrate),this.growthValue=!1}}},l=o,d=e("2877"),p=Object(d["a"])(l,i,a,!1,null,null,null);s["default"]=p.exports},eb85:function(t,s,e){t.exports=e.p+"h5/img/value.7469f35b.jpg"}}]);
//# sourceMappingURL=chunk-3c12acd2.2f5bc2bc.js.map