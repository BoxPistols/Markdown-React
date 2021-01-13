import { useState } from 'react'

/**
 *
 * @param init 初期値
 * @param key localStorageの保存用キー
 */

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
