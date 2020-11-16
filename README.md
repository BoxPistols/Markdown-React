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

---

## View & Atomic

```js
$ mkdir src/pages
$ mkdir src/components
$ touch src/pages/editor.tsx
```

src/index.tsx

```js
import * as React from 'react'
import { render } from 'react-dom'
// import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Editor } from './pages/editor'

const GlobalStyle = createGlobalStyle`
  body * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const Main = (
  <>
    <GlobalStyle />
    <Editor />
  </>
)
render(Main, document.getElementById('app'))
```

src/pages/editor.tsx

```tsx
import * as React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  font-size: 1.5rem;
  height: 2rem;
  left: 0;
  line-height: 2rem;
  padding: 0.5rem 1rem;
  position: fixed;
  right: 0;
  top: 0;
`

const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 3rem;
`

const TextArea = styled.textarea`
  border-right: 1px solid silver;
  border-top: 1px solid silver;
  bottom: 0;
  font-size: 1rem;
  left: 0;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  width: 50vw;
`

const Preview = styled.div`
  border-top: 1px solid silver;
  bottom: 0;
  overflow-y: scroll;
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  width: 50vw;
`

export const Editor: React.FC = () => {
  return (
    <>
      <Header>Markdown Editor</Header>
      <Wrapper>
        <TextArea value="テキスト入力エリア" />
        <Preview>プレビューエリア</Preview>
      </Wrapper>
    </>
  )
}
```

---

## Hooks(useState)

### useState is ?

- React Status Controller function
- hook is React 16.8 ~
- Dont't use class

```js
const [value, setValue] = useState <string> 'initial value'

const [値, 値をセットする関数] = useState < 扱う状態の型 > 初期値`
useState<string> = TypeScriptのジェネリクス（総称型）という型定義の方法 = 型を抽象化

example:
- useState<number>
- useState<{ key1: string, key2: number }>
```

editor.tsx

```tsx
const { useState } = React // import useState
export const Editor: React.FC = () => {
  const [text, setText] = useState<string>('') // add [val, setFunc] = useState<type>(init)
  return (
    <>
      ...
      <Wrapper>
        <TextArea
          onChange={(event) => { // event
            setText(event.target.value) // setFunc(target.val)
          }}
          value={text} // value={val}
        />
        ...
      </Wrapper>
    </>...
```

---

## Local Storage

### Web Storage is KeyValue Store

- View value or save value of Set key,
- Web Storage
  - sessionStotage
    - on opne browser
    - if close is delete
  - localStorage 　<- use this
    - forever
    - Max 5MB(Chrome)
  - get key `localStorage.getItem(Key)`
  - set key `localStorage.setItem(Key, change)`
    - trigger `const change = event.target.value`

useState の初期設定

```js
// 重複防止　規則 -> ファイルパス：値の名前
const StorageKey = 'pages/editor:text' // path:valueName

// init = localStorage.getItem(const)
const [text, setText] =
  useState < string > (localStorage.getItem(StorageKey) || '')
// 初期値のセット
```

Save

```ts
onChange={(event) => {
  const changedText = event.target.value
  localStorage.setItem(StorageKey, changedText)
  setText(changedText)
}}
```

## Custom Hook

new -> src/hooks/use_state_with_storage.ts

```ts
import { useState } from 'react'
//  関数use...を定義
export const useStateWithStorage = (
  init: string, // 初期値
  key: string, 　// 保存キー for localStorage
): [string, (s: string) => void] => { // カスタムフック 戻り値
  const [value, setValue] = useState<string>(localStorage.getItem(key) || init)

  const setValueWithStorage = (nextValue: string): void => {
    setValue(nextValue)
    localStorage.setItem(key, nextValue)
  }

  return [value, setValueWithStorage]
}
```

---

## Markdown

`$ yarn add react-markdown`

```json
import * as ReactMarkdown from 'react-markdown'
...
<Preview>
  <ReactMarkdown source={text}/>
</Preview>
```
