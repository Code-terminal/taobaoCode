(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1002"],{"43d1":function(i,t,s){"use strict";s.r(t);var n=function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",{ref:"container",staticClass:"commission-details"},[s("div",{staticClass:"promoterHeader bg-color-red"},[s("div",{staticClass:"headerCon acea-row row-between-wrapper"},[s("div",[s("div",{staticClass:"name"},[i._v("佣金明细")]),s("div",{staticClass:"money"},[i._v("\n          ￥"),s("span",{staticClass:"num"},[i._v(i._s(i.commission))])])]),s("div",{staticClass:"iconfont icon-jinbi1"})])]),s("div",{ref:"content",staticClass:"sign-record"},[s("div",{staticClass:"list"},i._l(i.info,function(t,n){return s("div",{key:n,staticClass:"item"},[s("div",{staticClass:"data"},[i._v(i._s(t.time))]),i._l(t.list,function(t,n){return s("div",{key:n,staticClass:"listn"},[s("div",{staticClass:"itemn acea-row row-between-wrapper"},[s("div",[s("div",{staticClass:"name line1"},[i._v(i._s(t.title))]),s("div",[i._v(i._s(t.add_time))])]),1==t.pm?s("div",{staticClass:"num"},[i._v("+"+i._s(t.number))]):i._e(),0==t.pm?s("div",{staticClass:"num font-color-red"},[i._v("\n              -"+i._s(t.number)+"\n            ")]):i._e()])])})],2)}),0)]),s("Loading",{attrs:{loaded:i.loaded,loading:i.loading}})],1)},e=[],a=s("c24f"),o=s("3a5e"),d={name:"CommissionDetails",components:{Loading:o["a"]},props:{},data:function(){return{info:[],commission:0,where:{page:1,limit:3},types:3,loaded:!1,loading:!1}},mounted:function(){var i=this;this.getCommission(),this.getIndex(),this.$scroll(this.$refs.container,function(){!1===i.loading&&i.getIndex()})},methods:{getIndex:function(){var i=this;1!=i.loading&&1!=i.loaded&&(i.loading=!0,Object(a["o"])(i.where,i.types).then(function(t){i.loading=!1,i.loaded=t.data.length<i.where.limit,i.loadTitle=i.loaded?"人家是有底线的":"上拉加载更多",i.where.page=i.where.page+1,i.info.push.apply(i.info,t.data)},function(t){i.$dialog.message(t.msg)}))},getCommission:function(){var i=this,t=this;Object(a["A"])().then(function(i){t.commission=i.data.commissionCount},function(t){i.$dialog.message(t.msg)})}}},l=d,c=s("2877"),r=Object(c["a"])(l,n,e,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0c1002.3d4ace9b.js.map