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
