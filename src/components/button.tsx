import * as React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: dodgerblue;
    border: none;
    box-shadow: none;
    color: white;
    font-size: 1rem;
    height: 2rem;
    min-width: 5rem;
    padding: 0 1rem;
`
// 渡すパラメーターの型の定義
interface Props {
    children: string
    onClick: () => void
}
// React.FC<Props> 引数の props は Propsである型定義
export const Button: React.FC<Props> = (props) => (
    <StyledButton onClick={props.onClick}>{props.children}</StyledButton>
)
