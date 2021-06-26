import { useState } from 'react'

// カスタムフック ＝（初期値、保存キー）[カスタムフック戻り値 = 文字列, 値無し]
export const useStorage = (init, keyNeme) => {
  // useStateの呼び出し。[値、変化値] = 取得値 || 初期値
  const [val, setVal] = useState(localStorage.getItem(keyNeme) || init)

  // 保存のロジック
  const setValStorage = (nextVal) => {
    setVal(nextVal)
    // キー、設定値
    localStorage.setItem(keyNeme, nextVal)
  }
  // 戻す 値, 変更値
  return [val, setValStorage]
}
