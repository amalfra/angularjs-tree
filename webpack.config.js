import path from 'path';
import { fileURLToPath } from 'url';
import TerserPlugin from 'terser-webpack-plugin';
import webpack from 'webpack';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env, argv) => {
  const isProd = argv.mode === 'production';

  const banner = `
${pkg.name} - v${pkg.version}
(c) ${new Date().getFullYear()}. ${pkg.author || ''}
License: ${pkg.license || 'MIT'}
`.trim();

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProd
        ? 'angularjs-tree.min.js'
        : 'angularjs-tree.js',
      library: {
        name: 'angularjs.tree',
        type: 'umd'
      },
      globalObject: 'this'
    },
    externals: {
      angular: 'angular'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    plugins: [
      new webpack.BannerPlugin({
        banner,
        raw: false,
        entryOnly: true
      })
    ],
    optimization: {
      minimize: isProd,
      minimizer: [new TerserPlugin({
        extractComments: false // prevent separate LICENSE file
      })]
    },
    devtool: isProd ? false : 'source-map',
    mode: isProd ? 'production' : 'development'
  };
};
