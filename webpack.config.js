const path = require('path');

module.exports = {
 entry: [path.resolve(__dirname, 'src', 'index.js')],

 mode: 'development',
 output: {
  filename: 'main.js',
  path: path.resolve(__dirname, 'dist'),
 },
 module: {
  rules: [
   {
    test: /\.(js)$/,
    exclude: /node_modules/,
    use: ['babel-loader'],
   },
   {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
   },
   {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
   },
   {
    test: /\.mind$/,
    type: 'asset/targets/resource',
   },
   { test: /\.txt$/, use: 'raw-loader' },
  ],
 },
 resolve: {
  extensions: ['*', '.js'],
 },
};
