# Markdown-editor by React

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

### add WebPack TS Setting

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

`$ mv src/index.js src/index.ts`

#### TS Test

```ts
const log = (message: string): void => {
  console.log(message)
}
log('TS go')
```

---

## Add React

`$ yarn add react react-dom @types/react @types/react-dom`

```js
  "dependencies": {
    "@types/react": "^16.9.56",
    "@types/react-dom": "^16.9.9",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "ts-loader": "^8.0.7",
    "typescript": "^4.0.5",
    "webpack": "^5.3.2",
    "webpack-cli": "^4.1.0"
  }
```

### webpack.config.js

- entry: './src/index.ts' -> entry: './src/index.tsx'
- test: /\.ts$/, ->  test: /\.tsx?$/
- extensions: ['.js'] -> extensions: ['.js', '.ts', '.tsx'],

### tsconfig.json

add `"jsx": "react"`

### src/index.ts

- src/index.ts -> src/index.tsx

```tsx
import * as React from 'react'
import { render } from 'react-dom'

const Main = <h1>Markdown Editor</h1>

render(Main, document.getElementById('app'))
```

- buid test

### ./index.html

add new

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <title>Markdown Editor</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./dist/index.js"></script>
  </body>
</html>
```

- .gitignore
  - `#dist` is Public
- gitPage Push & Open

## webpack-dev-server

`$ yarn add webpack-dev-server`

- Bug -> webpack-cli/bin/config-yargs
- Do -> https://teratail.com/questions/300230 \*ıversin

- pakcage.json

```json
"start": "webpack-dev-server",

"devDependencies": {
  "webpack": "^4.19.1",
  "webpack-cli": "^3.1.0",
  "webpack-dev-server": "^3.1.8"
}
```

`$ yarn install`

- webpack.config.js

```js
devServer: {
   hot: true,
   open: true,
 }
```

`$ yarn run start`

## styled-component

`$ yarn add styled-components @types/styled-components`

- src/index.tsx

```tsx
import * as React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components' // add

const Main = <h1>Markdown Editor + Dev Server</h1>

const Header = styled.h1`
  // add
  color: red;
`

const Main = <Header>Markdown Editor</Header> // set

render(Main, document.getElementById('app'))
```

- yarn run start
