import * as React from 'react'
import styled from 'styled-components'
const { useState } = React

import * as ReactMarkdown from 'react-markdown'

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
// 一意のバリュー名 ＝ キーの変数
const StorageKey = 'pages/editor:text'

export const Editor: React.FC = () => {
  // useState 値, ステート変化値 <文字列> get Item（キー名で取り出す） or カラ
  const [text, setText] = useState<string>(localStorage.getItem(StorageKey) || "")
  return (
    <>
      <Header>
        Markdown Editor
      </Header>
      <Wrapper>
        <TextArea
        // 変化の取得
          onChange={(e) => {
            // 入力エリアの値
            const changedText = e.target.value
            // set Item（キー名で保存、入力エリアの値を）
            localStorage.setItem(StorageKey, changedText)
            // ステート変化値（は入力エリアの値）
            setText(changedText)
          }}
          // 表示する値はステート値
          value={text}
        />
        <Preview>
          <ReactMarkdown source={text}/>
        </Preview>
      </Wrapper>
    </>
  )
}