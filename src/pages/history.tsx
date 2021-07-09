import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '../components/button'
import { UI_Header } from '../components/header'

export const History: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <UI_Header title="MD Note">
                <Button onClick={() => history.push('/editor')}>
                    エディタへ戻る
                </Button>
            </UI_Header>
        </>
    )
}
