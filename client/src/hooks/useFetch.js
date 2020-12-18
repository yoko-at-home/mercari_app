import { useState, useEffect } from 'react'
const useFetch = (url, limit = 10) => {
  const [state, setState] = useState([]) //Hooksの書き方
  useEffect(() => {
    async function fetchData() {
      try {
        //apiから情報を取得（からの配列を最初に取得なのでawait、結果がきたら情報が入る
        const res = await fetch(url)
        // console.log('res', res);

        //json形式をjavascriptに変換
        const resJson = await res.json()
        console.log('repsonse', resJson)
        // 九つだけ表示させる
        const data = resJson.data.slice(0, limit)

        setState(data)
      } catch (err) {
        throw err
      }
    }
    fetchData()
  }, []) //第二の引数 useEffect　ページがレンダリングされる前に一度だけ呼ばれる(値を入れると無限ループ)
  return state
}

export default useFetch
