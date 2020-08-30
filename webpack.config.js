const path = require('path');

module.exports = {
  entry: './src/index.js',
  target: 'node',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'mattermost-client.js',
  },
  resolve: {
    extensions: ['.js'],
},
};
