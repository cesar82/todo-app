import path from 'path';
import webpack from 'webpack';

export default {
  "devtool" : "eval-source-map",
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'client/index.js')
  ],
  output: {
    filename: "bundle.js",
    path: "/",
    publicPath: "/"
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        loader: ['react-hot-loader/webpack', 'babel-loader']
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader', options: {
              includePaths: ['./node_modules', './node_modules/grommet/node_modules']
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.js' ]
  }
}
