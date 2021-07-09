import * as React from 'react'
import styled from 'styled-components'

export const Header: React.FC<Props> = (props) => {
    return (
        <HeaderWrap>
            <Header__Mol_Title>
                {props.title}
                <Header_inner>{props.children}</Header_inner>
            </Header__Mol_Title>
        </HeaderWrap>
    )
}

interface Props {
    title: string
    children: React.ReactNode
}
// ===== Styling Start =====

const HeaderWrap = styled.header`
    /* // col(Horizontal), row(Vertical) */
    ${ui.grid(1, 4, 1, 2)}
    ${ui.bgc(ui.c.gray.g400)};
`
const Header_inner = styled.div`
    ${ui.fx_ai_center}
`
const DivLink = styled.div`
    ${ui.color(ui.c.accent)};
    ${ui.fz(14)};
    margin-right: 12px;
`

const Header__Mol_Title = styled.div`
    ${ui.fx_ai_center}
    justify-content: space-between;
    padding: 0 1vw;
    ${ui.color(ui.c.main)};
    ${ui.fz(24)};
    ${ui.bgc(ui.c.dark)};
    height: 60px;
`
