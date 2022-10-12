// Type definitions for iview 3.3.1
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue, { VNode } from 'vue';

export declare class TableExportCsvParams {
  /**
   * 文件名，默认为 table.csv
   */
  filename?: string;
  /**
   * 是否导出为原始数据，默认为 true
   */
  original?: boolean;
  /**
   * 不显示表头，默认为 false
   */
  noHeader?: boolean;
  /**
   * 自定义导出的列数据
   */
  columns?: any[];
  /**
   * 自定义导出的行数据
   */
  data?: any[];
  /**
   * 添加此函数后，不会下载，而是返回数据
   */
  callback?: (data?: string) => void;
  /**
   * 数据分隔符，默认是逗号(,)
   * @default ,
   */
  separator?: string;
  /**
   * 每项数据是否加引号
   * @default false
   */
  quoted?: boolean;
}

export declare class TablePage extends Vue {
  /**
   * 显示的结构化数据，其中，字段 cellClassName 用于设置任意单元格的样式名称，
   * 因此数据不能使用该字段，详见示例特定样式。
   * @default []
   */
  data?: object[];
  /**
   * 表格列的配置描述，具体项见后文
   * @default []
   */
  columns?: object[];
  /**
   * 是否显示间隔斑马纹
   * @default false
   */
  stripe?: boolean;
  /**
   * 是否显示纵向边框
   * @default false
   */
  border?: boolean;
  /**
   * 是否显示表头
   * @default true
   */
  'show-header'?: boolean;
  /**
   * 表格宽度，单位 px
   * @default 自动
   */
  width?: number | string;
  /**
   * 表格高度，单位 px，设置后，如果表格内容大于此值，会固定表头
   */
  height?: number | string;
  /**
   * 表格最大高度，单位 px，设置后，如果表格内容大于此值，会固定表头
   */
  'max-height'?: number | string;
  /**
   * 表格是否加载中
   * @default false
   */
  loading?: boolean;
  /**
   * 禁用鼠标悬停时的高亮
   * @default false
   */
  'disabled-hover'?: boolean;
  /**
   * 是否支持高亮选中的行，即单选
   * @default false
   */
  'highlight-row'?: boolean;
  /**
   * 行的 className 的回调方法，传入参数：
   * row：当前行数据
   * index：当前行的索引
   */
  'row-class-name'?: (row?: object, index?: number) => void;
  /**
   * 表格尺寸，可选值为 large、small、default 或者不填
   */
  size?: string;
  /**
   * 数据为空时显示的提示内容
   * @default 暂无数据
   */
  'no-data-text'?: string;
  /**
   * 筛选数据为空时显示的提示内容
   * @default 暂无筛选结果
   */
  'no-filtered-data-text'?: string;
  /**
   * 是否开启拖拽调整行顺序，需配合 @on-drag-drop 事件使用
   * @default false
   */
  'draggable'?: boolean;
  /**
   * 列使用 tooltip 时，配置它的主题，可选值为 dark 或 light
   * @default dark
   */
  'tooltip-theme'?: string;
  /**
   * 是否强制使用内置的 row-key，开启后可能会影响性能
   * @default false
   */
  'row-key'?: boolean;
  /**
   * 开启 highlight-row 后有效，当表格的当前行发生变化的时候会触发
   * currentRow：当前高亮行的数据
   * oldCurrentRow：上一次高亮的数据
   */
  $emit(eventName: 'on-current-change', currentRow: object, oldCurrentRow: object): this;
  /**
   * 在多选模式下有效，选中某一项时触发
   * selection：已选项数据
   * row：刚选择的项数据
   */
  $emit(eventName: 'on-select', selection: object[], row: object): this;
  /**
   * 在多选模式下有效，取消选中某一项时触发
   * selection：已选项数据
   * row：取消选择的项数据
   */
  $emit(eventName: 'on-select-cancel', selection: object[], row: object): this;
  /**
   * 在多选模式下有效，点击全选时触发
   * selection：已选项数据
   */
  $emit(eventName: 'on-select-all', selection: object[]): this;
  /**
   * 在多选模式下有效，点击取消全选时触发
   * selection：已选项数据
   */
  $emit(eventName: 'on-select-all-cancel', selection: object[]): this;
  /**
   * 在多选模式下有效，只要选中项发生变化时就会触发
   * selection：已选项数据
   */
  $emit(eventName: 'on-selection-change', selection: object[]): this;
  /**
   * 排序时有效，当点击排序时触发
   * column：当前列数据
   * key：排序依据的指标
   * order：排序的顺序，值为 asc 或 desc
   */
  $emit(eventName: 'on-sort-change', column?: object, key?: string, order?: 'asc' | 'desc'): this;
  /**
   * 筛选时有效，筛选条件发生变化时触发	当前列数据
   */
  $emit(eventName: 'on-filter-change', value: any): this;
  /**
   * 单击某一行时触发
   * currentRow：当前行的数据
   * index?: 当前行的索引
   */
  $emit(eventName: 'on-row-click', currentRow: object, index: number): this;
  /**
   * 双击某一行时触发
   * currentRow：当前行的数据
   * index?: 当前行的索引
   */
  $emit(eventName: 'on-row-dblclick', currentRow: object, index: number): this;
  /**
   * 展开或收起某一行时触发
   * row：当前行的数据
   * status：当前的状态
   */
  $emit(eventName: 'on-expand', row: object, status: string): this;
  /**
   * 拖拽排序松开时触发，返回置换的两行数据索引
   * index1
   * index2
   */
  $emit(eventName: 'on-drag-drop', index1: number, index2: number): this;
  /**
   * 导出数据
   */
  exportCsv(params: TableExportCsvParams): void;
  /**
   * 执行改变大小重绘table
   */
  handleResize(): void;
  /**
   * 清除高亮项，仅在开启 highlight-row 时可用
   */
  clearCurrentRow(): void;
  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 表头
     */
    header: VNode[];
    /**
     * 页脚
     */
    footer: VNode[];
    /**
     * 加载中
     */
    loading: VNode[];
  };
  /**
   * 当前页码，支持 .sync 修饰符
   * @default 1
   */
  current?: number;
  /**
   * 数据总数
   * @default 0
   */
  total?: number;
  /**
   * 每页条数
   * @default 10
   */
  'page-size'?: number;
  /**
   * 每页条数切换的配置
   * @default [10, 20, 30, 40]
   */
  'page-size-opts'?: number[];
  /**
   * 条数切换弹窗的展开方向，可选值为 bottom 和 top
   * @default bottom
   */
  placement?: string;
  /**
   * 简洁版
   * @default false
   */
  simple?: boolean;
  /**
   * 显示总数
   * @default false
   */
  'show-total'?: boolean;
  /**
   * 显示电梯，可以快速切换到某一页
   * @default false
   */
  'show-elevator'?: boolean;
  /**
   * 显示分页，用来改变page-size
   * @default false
   */
  'show-sizer'?: boolean;
  /**
   * 自定义 class 名称
   */
  'class-name'?: string;
  /**
   * 自定义 style 样式
   */
  styles?: object;
  /**
   * 是否将弹层放置于 body 内，
   * 在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，
   * 它将不受父级样式影响，从而达到更好的效果
   * @default false
   */
  transfer?: boolean;
  /**
   * 替代图标显示的上一页文字
   */
  'prev-text'?: string;
  /**
   * 替代图标显示的下一页文字
   */
  'next-text'?: string;
  /**
   * 页码改变的回调，返回改变后的页码
   * @param pageNum 页码
   */
  $emit(eventName: 'on-change', pageNum: number): this;
  /**
   * 切换每页条数时的回调，返回切换后的每页条数
   * @param pageSize 每页条数
   */
  $emit(eventName: 'on-page-size-change', pageSize: number): this;
  /**
   * slot插槽对象
   */
  $slots: {
    /**
     * 自定义显示总数的内容
     */
    '': VNode[];
  };
}

export declare class SearchForm extends Vue {
  /**
   * 距离窗口顶部达到指定偏移量后触发
   * @default 68
   */
  height?: number | string;
  /**
   * 距离窗口底部达到指定偏移量后触发
   * @default false
   */
  showFold?: boolean;
}

interface IViewInstallOptions extends IViewGlobalOptions {
  locale?: any;
  i18n?: any;
}

declare const API: {
  version: string;
  locale: (l: any) => void;
  i18n: (fn: any) => void;
  install: (Vue: Vue, opts: IViewInstallOptions) => void;
  lang: (code: string) => void;
};

export default API;
