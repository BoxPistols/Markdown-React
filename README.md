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
mkdir src/pages
mkdir src/components
touch src/pages/editor.tsx
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

--> UpDate on branch `dv/re__setting-for-UI-Component` ← Create UI Modules 21/1/13

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

## Memo

2021/1/13

CSS Use on tsx Flow
<https://maku.blog/p/eu4cksy/>

---

## Origin UI Components

`src/components/ui.js`

- Common UI
- Mixin Function
- Calc fonsize px to rem of body

---

## Local Storage

btanch:
`dv/re__011-localStorage`

- editer.tsx

```tsx
const StorageKey = 'pages/editor:text'
// ↑ key Name for local Storage = path:value

const [text, setText] = useState<string>(
    localStorage.getItem(StorageKey) || ''
)
// init = get value onn local Storage
//      * first time is null => || ''
 ```

```tsx
onChange={(event) => {
  const changedText = event.target.value
  // input value
  localStorage.setItem(StorageKey, changedText)
  setText(changedText)
  // save value if change value use State function[setText]
  ```

log:

- dv/re__011-localStorage
- commit: e0ba73a

## [WIP] Custom Hook

- [ ] re:input

create `src/hooks/use_state_with_storage.ts`

```tsx
// useHoge useで始める
export const useStateWithStorage = (
    // カスタムフック関数の定義
    init: string, // 初期値 型
    key: string // localStorageのキー
): [string, (s: string) => void] => {
    // カスタムフックの戻り値
    const [value, setValue] = useState<string>( // useStateを呼び出す
        localStorage.getItem(key) || init // localStorageの取得
    )

    // useStateから取得した関数 + loalStorageへの保存
    const setStateWithStorage = (
        nextValue: string // 新しい値 型
    ): void => {
        // 戻り値
        setValue(nextValue) // ステータス変更(新しい値)
        localStorage.setItem(key, nextValue) // 保存
    }

    return [value, setStateWithStorage] // 返り値[値, 更新関数]
}
```

- edit.tsx

```tsx
import { useStateWithStorage } from '../hooks/use_state_with_storage'

const StorageKey = 'pages/editor:text'
const [text, setText] = useStateWithStorage('', StorageKey)

<TextArea
    onChange={(event) => setText(event.target.value)}
    value={text}
/>
```

## React-MarkDown

<https://github.com/remarkjs/react-markdown>

`yarn add react-markdown`

```tsx
 import * as ReactMarkdown from 'react-markdown'

<Preview>
    <ReactMarkdown source={text} />
</Preview>
 ```

TODO:

- [ ] highlight for Code
- [ ] Preview Design

<br>
<br>
<br>
<br>
<br>
