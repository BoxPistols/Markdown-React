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

## add / webpack.config.js

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

## add / index.js

$ mkcd src
$ touch index.js

## add Build

add `"build": "webpack --mode=production"`

```js
"scripts": {
"start": "echo 'Hello! package.json'",
"build": "webpack --mode=production"
},

```

test:

`$ node ./dist/index.js`

## add TS

`$ yarn add typescript`

`$ touch tsconfig.json`

```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "outDir": "./dist/",
    "target": "ES2015"
  }
}
```

TS Loader
`$ npm i ts-loader`

### add Webpack TS Setting

```ts
module: {
   rules: [
     {
       test: /\.ts$/,
       use: 'ts-loader',
       exclude: /node_modules/,
     },
   ],
 },
 resolve: {
   extensions: ['.ts'],
 },
```
