# markdown-editor

## add / package.json

```json
{
  "name": "markdown-editor",
  "version": "1.0.0",
  "scripts": {
    "start": "echo 'Hello! package.json'"
  },
  "dependencies": {
    "webpack": "^5.3.2",
    "webpack-cli": "^4.1.0"
  }
}
```

## add  / webpack.config.js

```js
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: 'dist/',
  },
}
```
