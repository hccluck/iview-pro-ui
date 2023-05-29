"use strict";var TablePage={render:function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"table-page"},[e("Table",{ref:"table",attrs:{columns:t.columns,data:t.data,stripe:t.stripe,border:t.border,"show-header":t.showHeader,width:t.width,height:t.height,"max-height":t.maxHeight,"disabled-hover":t.disabledHover,"row-class-name":t.rowClassName,size:t.size,"no-data-tex":t.noDataText,"no-filtered-data-text":t.noFilteredDataText,draggable:t.draggable,"tooltip-theme":t.tooltipTheme,"row-key":t.rowKey,"highlight-row":t.highlightRow,"span-method":t.spanMethod},on:{"on-current-change":t.onCurrentChange,"on-select":t.onSelect,"on-select-cancel":t.onSelectCancel,"on-select-all":t.onSelectAll,"on-select-all-cancel":t.onSelectAllCancel,"on-selection-change":t.onSelectionChange,"on-sort-change":t.onSortChange,"on-filter-change":t.onFilterChange,"on-row-click":t.onRowClick,"on-row-dblclick":t.onRowDblclick,"on-expand":t.onExpand,"on-drag-drop":t.onDragDrop}},[e("template",{slot:"header"},[t._t("header")],2),t._v(" "),e("template",{slot:"footer"},[t._t("footer")],2),t._v(" "),e("template",{slot:"loading"},[t._t("loading")],2)],2),t._v(" "),t.showpage?e("div",{staticClass:"page-box"},[e("Page",{ref:"page",attrs:{total:t.total,current:t.internalCurrent,"page-size":t.internalPageSize,"page-size-opts":t.pageSizeOpts,placement:t.placement,size:t.size,simple:t.simple,"show-total":t.showTotal,"show-elevator":t.showElevator,"show-sizer":t.showSizer,"class-name":t.pageClassName,styles:t.styles,transfer:t.transfer,"prev-text":t.prevText,"next-text":t.nextText,disabled:t.disabled},on:{"update:current":function(e){t.internalCurrent=e},"on-change":t.onChange,"on-page-size-change":t.onPageSizeChange}},[t._t("default")],2)],1):t._e()],1)},staticRenderFns:[],name:"TablePage",props:{data:{type:Array,default:function(){return[]}},columns:{type:Array,default:function(){return[]}},stripe:{type:Boolean,default:!1},border:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},width:[String,Number],height:[String,Number],maxHeight:[String,Number],loading:{type:Boolean,default:!1},disabledHover:{type:Boolean,default:!1},highlightRow:{type:Boolean,default:!1},spanMethod:{type:Function},rowClassName:{type:Function,default:function(){return""}},size:{type:String,default:"small"},noDataText:{type:String,default:"暂无数据"},noFilteredDataText:{type:String,default:"暂无筛选结果"},draggable:{type:Boolean,default:!1},tooltipTheme:{type:String,default:"dark"},rowKey:{type:Boolean,default:!1},current:{type:Number,default:1},total:{type:Number,default:0},pageSize:{type:Number,default:10},pageSizeOpts:{type:Array,default:function(){return[10,20,30]}},placement:{type:String,default:"bottom"},simple:{type:Boolean,default:!1},showTotal:{type:Boolean,default:!1},showElevator:{type:Boolean,default:!0},showSizer:{type:Boolean,default:!0},pageClassName:{type:String,default:""},styles:{type:Object,default:function(){return{}}},transfer:{type:Boolean,default:!1},prevText:{type:String,default:""},nextText:{type:String,default:""},disabled:{type:Boolean,default:!1},showpage:{type:Boolean,default:!0}},data:function(){return{internalCurrent:this.current,internalPageSize:this.pageSize}},mounted:function(){var t=this;this.$watch("internalCurrent",function(e){t.$emit("update:current",e)}),this.$watch("current",function(e){t.internalCurrent=e})},methods:{onCurrentChange:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.$emit.apply(this,["on-current-change"].concat(t))},onSelect:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.$emit.apply(this,["on-select"].concat(t))},onSelectCancel:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.$emit.apply(this,["on-select-cancel"].concat(t))},onSelectAll:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.$emit.apply(this,["on-select-all"].concat(t))},onSelectAllCancel:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.$emit.apply(this,["on-select-all-cancel"].concat(t))},onSelectionChange:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.$emit.apply(this,["on-selection-change"].concat(t))},onSortChange:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.$emit.apply(this,["on-sort-change"].concat(t))},onFilterChange:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.$emit.apply(this,["on-filter-change"].concat(t))},onRowClick:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.$emit.apply(this,["on-row-click"].concat(t))},onRowDblclick:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.$emit.apply(this,["on-row-dblclick"].concat(t))},onExpand:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.$emit.apply(this,["on-expand"].concat(t))},onDragDrop:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.$emit.apply(this,["on-drag-drop"].concat(t))},onChange:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];this.$emit.apply(this,["on-change",e].concat(n)),this.refresh(e,this.internalPageSize)},onPageSizeChange:function(e){this.internalPageSize=e;for(var t=arguments.length,n=new Array(1<t?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];this.$emit.apply(this,["on-page-size-change",e].concat(n)),this.$emit("update:pageSize",e),1===this.internalCurrent&&this.refresh(1,e)},clearCurrentRow:function(){this.$refs.table.clearCurrentRow()},selectAll:function(e){this.$refs.table.selectAll(e)},exportCsv:function(){var e;(e=this.$refs.table).exportCsv.apply(e,arguments)},refresh:function(e,t){this.$emit("refresh",e,t)},query:function(){0<arguments.length&&void 0!==arguments[0]&&!arguments[0]||(this.internalCurrent=1),this.refresh(this.internalCurrent,this.internalPageSize)}},install:function(e){e.component(TablePage.name,TablePage)}};module.exports=TablePage;
