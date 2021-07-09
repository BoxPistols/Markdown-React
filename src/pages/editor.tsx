import * as React from 'react'
import styled from 'styled-components'
import * as ui from '../components/ui'
import { useStateWithStorage } from '../hooks/use_state_with_storage'
import * as ReactMarkdown from 'react-markdown'
const { useState } = React

import { putMemo } from '../indexeddb/memos'
import { Button } from '../components/button'
import { SaveModal } from '../components/save_modal'
import { Link } from 'react-router-dom'

export const Editor: React.FC = () => {
    const StorageKey = 'pages/editor:text'
    const [text, setText] = useStateWithStorage('', StorageKey)
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <Wrapper>
                <Header>
                    <Header__Mol_Title>
                        Markdown Editor
                        <div>
                            <Button onClick={() => setShowModal(true)}>
                                Save
                            </Button>
                            <Link to="/history">履歴を見る</Link>
                        </div>
                    </Header__Mol_Title>
                </Header>
                <TextArea__Org>
                    <TextArea
                        onChange={(event) => setText(event.target.value)}
                        value={text}
                    />
                </TextArea__Org>
                <Preview>
                    <ReactMarkdown source={text} />
                </Preview>
                <Footer>footer</Footer>
            </Wrapper>
            {showModal && (
                <SaveModal
                    onSave={(title: string): void => {
                        putMemo(title, text)
                        setShowModal(false)
                    }}
                    onCancel={() => setShowModal(false)}
                />
            )}
        </>
    )
}

// ===== Styling Start =====
const texColor = 'ghostwhite'

const Wrapper = styled.div`
    ${ui.fz(16)};
    ${ui.block.dg}
    ${ui.bgc(ui.c.gray.g800)};
    color: ${texColor};
    // TODO: Autoprefix for IE
    grid-template-columns: 50% 1fr;
    grid-template-rows: 60px 1fr 40px;
    min-height: 100vh;
`
const Header = styled.header`
    /* // col(Horizontal), row(Vertical) */
    ${ui.grid(1, 4, 1, 2)}
    ${ui.bgc(ui.c.gray.g400)};
`
const Header__Mol_Title = styled.div`
    /* ${ui.fx_center} */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1vw;
    ${ui.color(ui.c.main)};
    ${ui.fz(24)};
    ${ui.bgc(ui.c.dark)};
    height: 60px;
`
// Atomic
const TextArea__Org = styled.div`
    /* // col(Horizontal), row(Vertical) */
    ${ui.grid(1, 2, 2, 3)}
`
const TextArea = styled.textarea`
    ${ui.block.df}
    ${ui.bgc(ui.c.gray.g900)};
    ${ui.fz(16)};
    color: ${texColor};
    width: 100%;
    height: 100%;
    padding: 24px;
    border: none;
    resize: none;
    &:hover {
        background-color: #222;
        transition: 0.3s;
    }
`
const Preview = styled.div`
    // col, row
    ${ui.grid(2, 3, 2, 3)}
    padding: 24px;
    ${ui.fz(18)};
    background-color: #212;
    line-height: 1.75;
`
const Footer = styled.footer`
    grid-column: 1 / 4;
    grid-row: 3 / 4;
    ${ui.fx_center}
    background-color: #111;
`
// ===== Styling End =====
