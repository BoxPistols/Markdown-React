import Dexie from 'dexie'

// TypeScriptの型の定義
export interface MemoRecord {
    datetime: string
    title: string
    text: string
}

/* --- Table作成 ----------------------------------------------------------------------- */

// Dexieインスタンス
const database = new Dexie('markdown-editor')
// テーブル定義 DBバージョン store(テーブル名：index)
database.version(1).stores({ memos: '&datetime' })
// データを扱うテーブルクラスを取得
const memos: Dexie.Table<MemoRecord, string> = database.table('memos')

/* --- Table保存 ----------------------------------------------------------------------- */
// title text を引数として受け取る
export const putMemo = async (title: string, text: string): Promise<void> => {
    // IndexDB保存 ISO8601
    const datetime = new Date().toISOString()
    await memos.put({ datetime, title, text })
}
