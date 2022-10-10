# iview-pro-ui

> 基于 iview 封装了一些业务组件

## 安装使用

Install with npm

```sh

npm i --save iview-pro-ui
```

Install with yarn

```sh
yarn add iview-pro-ui
```

Then import `iViewProUi` in the `main.js` file:

```js
import Vue from 'vue';
import iViewProUi from 'iview-pro-ui';

Vue.use(iViewProUi);
```

## 项目说明

### 文件目录

```bash
iview-pro-ui
|
├── src
|   |
|   ├── components
|   |   |
|   |   ├── SearchForm          // 可折叠搜索表单
|   |   |
|   |   └── TablePage           // 表格+分页组件
|   |
|   ├── directives
|   |   |
|   |   ├── copy.js             // v-copy 指令
|   |   |
|   |   └── loading.js          // v-loading 指令
|   |
|   └── utils
|
|
├── index.js                    // 入口
|
├── package.json
|
└── README.md
```

### 使用说明

`SearchForm` 组件用例

```jsx
<search-form :showFold="false">
  <form-item label="字段1：">
    <Input v-model="value1" placeholder="请输入" />
  </form-item>
  <form-item label="字段2：">
    <Input v-model="value2" placeholder="请输入" />
  </form-item>
  <form-item label="字段3：">
    <Input v-model="value3" placeholder="请输入" />
  </form-item>
  <form-item label="字段4：">
    <Input v-model="value4" placeholder="请输入" />
  </form-item>

  <template #extra>
    <Button @click="search" icon="ios-search" type="info">搜索</Button>
  </template>
</search-form>
```

`TablePage` 组件用例

```jsx
<table-page :columns="table.columns" :data="list" :total="total" :loading="loading"></table-page>
```

`v-copy` 指令用例

```jsx
<div v-copy="{ success: this.copySuccess, error: this.copyError, data: 'data' }">点击复制</div>
```

`v-loading` 指令用例

```jsx
<div v-loading="loading">content</div>
```
