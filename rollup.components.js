import fs from 'fs/promises';

import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import vue from 'rollup-plugin-vue2';
import less from 'rollup-plugin-less';
import { uglify } from 'rollup-plugin-uglify';

const input = {};
const dir = './src/components';
const components = await fs.readdir(dir);
for await (const component of components) {
  input[component] = `${dir}/${component}/index.js`;
}

export default {
  input, // 必须，入口文件
  output: {
    dir: 'dist',
    globals: {
      vue: 'Vue', // 告诉rollup全局变量Vue即是vue
    },
  },
  external: ['vue'],
  plugins: [
    // 引入的插件在这里配置
    nodeResolve(),
    vue({
      compileTemplate: true,
    }),
    commonjs(),
    less({
      output: './dist/components.css',
    }),
    babel({
      extensions: ['.js', '.vue', '.ts'],
      exclude: 'node_modules/**', // 防止打包node_modules下的文件
      babelHelpers: 'runtime', // 使plugin-transform-runtime生效
      // 使用预设
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            // 目标浏览器
            targets: {
              ie: '10',
            },
            // corejs: 3,
          },
        ],
      ],
      plugins: [
        //  多次导入的文件，只导入一次
        ['@babel/plugin-transform-runtime'],
      ],
    }),
    uglify(),
  ],
};
