"use strict";var t={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[1001==t.total||0==t.total&&t.length?[a("span",[t._v("共 "+t._s(1001==t.total?"1000+":0)+" 条")]),t._v(" "),a("Button",{staticClass:"ml4",staticStyle:{height:"24px",padding:"0px 7px"},attrs:{loading:t.loading,disabled:t.loading||t.disabled,type:t.type},on:{click:t.getTotal}},[t._v("获取总条数")])]:[t._v("共 "+t._s(t.total)+" 条")]],2)},staticRenderFns:[],props:{total:{type:Number,default:0},length:{type:Number,default:0},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},type:{type:String,default:"primary"}},methods:{getTotal:function(){this.$emit("getTotal")}},install:function(e){e.component(t.name,t)}};module.exports=t;