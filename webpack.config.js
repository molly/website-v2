const path = require('path');
const fs = require('fs');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const generatePluginForPage = directory => (page) => {
  const parts = page.split('.');
  const [name, extension] = parts;
  return new HtmlWebpackPlugin({
    filename: `${directory.out ? `${directory.out}/` : ''}${name}.html`,
    template: path.resolve(__dirname, `${directory.src}/${name}.${extension}`),
    inject: true,
    favicon: path.resolve(__dirname, 'src', 'images', 'favicon.ico'),
  });
};

const generatePluginsForDir = (directory) => {
  const files = fs.readdirSync(path.resolve(__dirname, directory.src));
  return files.filter(page => !page.startsWith('.')).map(generatePluginForPage(directory));
};

const getHtmlWebpackPlugins = () => {
  const directories = [{ src: './src/pug/pages', out: '' }, { src: './src/pug/blog', out: 'blog' }];
  return directories.map(generatePluginsForDir).reduce((acc, v) => acc.concat(v), []);
};

module.exports = {
  entry: {
    index: './src/js/index.js',
  },
  devServer: {
    port: 8080,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    pathinfo: true,
    filename: 'bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...getHtmlWebpackPlugins(),
    new MiniCssExtractPlugin({
      filename: 'css/styles.css',
      options: {
        publicPath: (resourcePath, context) => `${path.relative(path.dirname(resourcePath), context)}/`,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        include: path.join(__dirname, 'src', 'pug'),
        use: [
          {
            loader: 'pug-loader',
            options: { pretty: true },
          }],
      },
      {
        test: /\.(sa|c)ss$/,
        include: path.join(__dirname, 'src', 'sass'),
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: { name: 'images/[name].[ext]' },
        }],
      },
    ],
  },
};
