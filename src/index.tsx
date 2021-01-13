import * as React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Editor } from './pages/editor'

const GlobalStyle = createGlobalStyle`
body{
    fontFamily: sans-serif,
}
*{
    margin: 0;
}
`
const Main = (
    <>
        <GlobalStyle />
        <Editor />
    </>
)
render(Main, document.getElementById('app'))
