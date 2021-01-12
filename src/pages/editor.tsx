import * as React from 'react'
import styled from 'styled-components'

const texColor = 'ghostwhite'

const fx_center = () => {
    return `
    display: flex;
    align-items: center;
    justify-content: center;
`
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 50% 1fr;
    grid-template-rows: 60px 1fr 40px;
    min-height: 100vh;
    background-color: #234;
    color: ${texColor};
`
const Header = styled.header`
    grid-column: 1 / 4;
    grid-row: 1 / 2;
    background-color: #111;
`
const Header__Mol_Title = styled.div`
    ${fx_center}
    height: 60px;
    font-size: 24px;
`

const TextArea__Org = styled.div`
    grid-column: 1 / 2;
    grid-row: 2 / 3;
`
const TextArea = styled.textarea`
    width: 100%;
    height: 100%;
    background-color: #234;
    color: ${texColor};
    padding: 24px;
    font-size: 18px;
    outline: none;
    border: none;
    &:hover {
        background-color: #222;
        transition: 0.3s;
    }
`
const Preview = styled.div`
    grid-column: 2 / 3;
    grid-row-start: 2 / 3;
    padding: 24px;
    font-size: 20px;
    background-color: #212;
`
const Footer = styled.footer`
    grid-column: 1 / 4;
    grid-row: 3 / 4;
    ${fx_center}
    background-color: #111;
`
export const Editor: React.FC = () => {
    return (
        <>
            <Wrapper>
                <Header>
                    <Header__Mol_Title>Markdown Editor</Header__Mol_Title>
                </Header>
                <TextArea__Org>
                    <TextArea value="テキスト入力エリア" />
                </TextArea__Org>
                <Preview>プレビューエリア</Preview>
                <Footer>footer</Footer>
            </Wrapper>
        </>
    )
}
