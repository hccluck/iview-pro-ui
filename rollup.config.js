import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import vue from 'rollup-plugin-vue2';
import less from 'rollup-plugin-less';
// import { terser } from 'rollup-plugin-terser';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: './src/index.js', // 必须，入口文件
  output: {
    file: 'dist/iViewProUi.min.js',
    name: 'iViewProUi',
    sourcemap: false,
  },
  plugins: [
    // 引入的插件在这里配置
    nodeResolve(),
    json(),
    vue({
      compileTemplate: true,
    }),
    commonjs(),
    less({
      output: './dist/index.css',
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
            useBuiltIns: 'usage',
            // 目标浏览器
            targets: {
              ie: '10',
            },
            corejs: 3,
          },
        ],
      ],
      plugins: [
        //  多次导入的文件，只导入一次
        ['@babel/plugin-transform-runtime'],
      ],
    }),
    // terser(),
    uglify(),
  ],
};
