const path = require('path')

module.exports = {
  mode : 'development',
  entry : './src/index.js',
  output : {
    path : path.resolve(__dirname, 'dist'),
    filename : 'bundle.js'
  },
  module: {
    rules: [
      {
        loader : 'babel-loader',
        exclude : /node_modules/,
        test : /\.js[x]?$/,
        query: {
          cacheDirectory: true,
          presets: ['env'],
          plugins: [
            ['transform-react-jsx', {'pragma': 'h' }],
            ['transform-runtime', {'regenerator': true}],
          ]
        }
      }
    ]
  }
}
