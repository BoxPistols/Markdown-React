import { useState } from 'react'

// カスタムフック ＝（初期値、保存キー）[カスタムフック戻り値 = 文字列, 値無し]
// useStateの呼び出し。[値、設定値] = 取得値 || 引数の初期値
export const  useStateWithStorage = (init: string, key: string):[string, (s: string)=> void] => {
  const [value, setValue] = useState<string>(localStorage.getItem(key) || init))

    // 保存のロジック
    const setValueWithStorage = (nextValue: string): void => {
      setValue(nextValue)
      // キー、設定値
      localStorage.setItem(key, nextValue)
    }
    // 戻す 値,変更値
    return [value, setValueWithStorage]
}
