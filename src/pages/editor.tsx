import * as React from 'react'
import styled from 'styled-components'
import * as ui from '../components/ui'
const { useState } = React

// ===== Styling Start =====
const texColor = 'ghostwhite'

const Wrapper = styled.div`
    ${ui.fz(16)};
    ${ui.block.dg}
    ${ui.bgc(ui.c.gray.g800)};
    color: ${texColor};
    grid-template-columns: 50% 1fr;
    grid-template-rows: 60px 1fr 40px;
    min-height: 100vh;
`
const Header = styled.header`
    // col(Horizontal), row(Vertical)
    ${ui.grid(1, 4, 1, 2)};
    ${ui.bgc(ui.c.gray.g400)};
`
const Header__Mol_Title = styled.div`
    ${ui.fx_center}
    ${ui.color(ui.c.main)};
    ${ui.fz(24)};
    ${ui.bgc(ui.c.dark)};
    height: 60px;
`
// Atomic
const TextArea__Org = styled.div`
    // col(Horizontal), row(Vertical)
    ${ui.grid(1, 2, 2, 3)}
`
const TextArea = styled.textarea`
    ${ui.block.df}
    ${ui.bgc(ui.c.gray.g900)};
    ${ui.fz(18)};
    color: ${texColor};
    width: 100%;
    height: 100%;
    padding: 24px;
    border: none;
    &:hover {
        background-color: #222;
        transition: 0.3s;
    }
`
const Preview = styled.div`
    // col, row
    ${ui.grid(2, 3, 2, 3)}
    padding: 24px;
    font-size: 20px;
    background-color: #212;
`
const Footer = styled.footer`
    grid-column: 1 / 4;
    grid-row: 3 / 4;
    ${ui.fx_center}
    background-color: #111;
`
// ===== Styling End =====

export const Editor: React.FC = () => {
    const [text, setText] = useState<string>(' ')
    return (
        <>
            <Wrapper>
                <Header>
                    <Header__Mol_Title>
                        Markdown Editor
                    </Header__Mol_Title>
                </Header>
                <TextArea__Org>
                    <TextArea
                        onChange={(e) => {
                            setText(e.target.value)
                        }}
                        value={text}
                    />
                </TextArea__Org>
                <Preview>
                    プレビューエリア
                    <p>{text}</p>
                </Preview>
                <Footer>footer</Footer>
            </Wrapper>
        </>
    )
}
