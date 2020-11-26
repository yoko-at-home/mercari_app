import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import './sell.styles.css'
import '../AuthStyles.css'



export const Sell = () => {
  const history = useHistory()

  const [item, setItem] = useState({
    name: '',
    description: '',
    category: '',
    status: '',
    delivery: '',
    deliveryMethod: '',
    from: '',
    daysToDeliver: '',
    price: '',
  })

  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()


    if (item.name === '' ||
      item.description === '' ||
      item.category === '' ||
      item.status === '' ||
      item.delivery === '' ||
      item.deliveryMethod === '' ||
      item.from === '' ||
      item.daysToDeliver === '' ||
      item.price === ''
      ) {
      // console.log('entered err')
      setError('入力漏れがあります')
      return
    }
    console.log('item', item)
    // response -> string型
    // '{"status": "success"}'
    const response = await fetch('http://localhost:4000/api/users/login', {
      // credentials: 'include',
      headers: {
        // 'Access-Control-Allow-Origin': 'http://localhost:4000',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(info),
    })
    // console.log(info);
    // '{"status": "success"}'.json() -> { status : "success"}
    // json string型をjavascriptのオブジェクトに変換する
    const resJavascript = await response.json()

    // console.log(resJavascript.status) // "success", "fail"
    if (resJavascript.status === 'success') {
      //   // クッキーをつける
      // } else {
      //   setError(resJavascript.message)
      localStorage.setItem('token', resJavascript.token)

      // landing pageにユーザーを飛ばす
      history.push('/')
    } else {
      setError(resJavascript.message)
    }
  }
  return (
       <>
      <div className='main__no-account'>
        <div className='section__center'>
          <div>
<label>出品画像</label><div className='necessary-badge'>必須</div>
</div>
          <div>
<div className='main__text'>最大10枚までアップロードできます</div>

<div>
  <label>商品名</label>
  <div className='necessary-badge'>必須</div>
</div>
<div className="style_textField__1jvsM common_fontFamily__3-3Si style_fluid__1h6iv"><div className="style_inputarea__1mtsA">
  <input type="text" name="name" value="" placeholder="40文字まで" autoComplete="off"/></div>
</div>
</div>
</div>
<div>
          <label>商品の説明</label>
          <div className='necessary-badge'>必須</div>
</div>
<textarea className="style_textarea__24aZZ common_fontFamily__3-3Si style_fluid__10CPG" name="description" rows="7" placeholder="商品の説明（必須 1,000文字以内）
（色、素材、重さ、定価、注意点など）

例）2010年頃に1万円で購入したジャケットです。ライトグレーで傷はありません。あわせやすいのでおすすめです。
          "></textarea>
          <div className="style_counter__ofu-P common_fontFamily__3-3Si style_right__1Vw8k"><span className="">0</span>/<!-- -->1000</div>
</div>
</div>
</div>

<hr className="style_divider__1tLu3 style_size1__3jc3t"/><div className="sc-gtXRHa fAKjln"><p className="sc-fyjYeE kLnlAr">商品の詳細</p>
<div>
<label>カテゴリー</label>
<div className='necessary-badge'>必須</div>
</div>
<div className="style_select__3R6W_ common_fontFamily__3-3Si style_fluid__31br4"><div className="style_selectarea__3ZX8E"><select name="categoryId"><option " value="" label="選択してください" >選択してください</option>
<option value="レディース" value="1"></div>レディース</option>
<option value="メンズ" value="2">メンズ</option>
<option value="ベビー・キッズ" value="3">ベビー・キッズ</option>
<option value="インテリア・住まい・小物" value="4">インテリア・住まい・小物</option>
<option value="本・音楽・ゲーム" value="5">本・音楽・ゲーム</option>
<option value="おもちゃ・ホビー・グッズ" value="1328">おもちゃ・ホビー・グッズ</option>
<option value="コスメ・香水・美容" value="6">コスメ・香水・美容</option>
<option value="家電・スマホ・カメラ" value="7">家電・スマホ・カメラ</option>
<option value="スポーツ・レジャー" value="8">スポーツ・レジャー</option>
<option value="ハンドメイド" value="9">ハンドメイド</option>
<option value="チケット" value="1027">チケット</option>
<option value="自動車・オートバイ" value="1318">自動車・オートバイ</option>
<option value="その他" value="10">その他</option></select><svg width="24" height="24" fill="#888888" fill-rule="evenodd" viewBox="0 0 24 24" aria-hidden="true"><path d="M12,15.66a1.73,1.73,0,0,1-1.2-.49L5.21,9.54a.7.7,0,0,1,1-1l5.62,5.62c.15.15.27.15.41,0L17.8,8.6a.71.71,0,0,1,1,0,.69.69,0,0,1,0,1l-5.57,5.58A1.71,1.71,0,0,1,12,15.66Z"></path></svg></div>
</div>
</div>
</div>
<div className="style_formgroup__3IPME sc-hDgvsY kmUPMq"><div className="style_body__1OP1S"><div className="style_formLabel__3wM81 common_fontFamily__3-3Si">
<label>ブランド</label><span className="style_tag__xA80S style_hint__3awFd style_small__2vSa8 common_fontFamily__3-3Si">任意</span></div>
<div className="style_textField__1jvsM common_fontFamily__3-3Si style_fluid__1h6iv"><div className="style_inputarea__1mtsA">
  <input type="text" name="brandName" value="" placeholder="例）シャネル" autoComplete="off"/>
</div>
</div>
<ul className="sc-jbKcbu cApMkI sc-ixltIz bkyCtT style_controls__B6nQm"></ul></div>
</div>
<div className="style_formgroup__3IPME sc-hDgvsY kmUPMq"><div className="style_body__1OP1S"><div name="itemCondition"><div className="style_formLabel__3wM81 common_fontFamily__3-3Si">
<label>商品の状態</label><div className='necessary-badge'>必須</div>
</div>
<div className="style_select__3R6W_ common_fontFamily__3-3Si style_fluid__31br4"><div className="style_selectarea__3ZX8E">
  <select name="itemCondition"><option " value="" label="選択してください" >選択してください</option>
<option value="新品、未使用" value="1">新品、未使用</option>
<option value="未使用に近い" value="2">未使用に近い</option>
<option value="目立った傷や汚れなし" value="3">目立った傷や汚れなし</option>
<option value="やや傷や汚れあり" value="4">やや傷や汚れあり</option>
<option value="傷や汚れあり" value="5">傷や汚れあり</option>
<option value="全体的に状態が悪い" value="6">全体的に状態が悪い</option></select>
<svg width="24" height="24" fill="#888888" fill-rule="evenodd" viewBox="0 0 24 24" aria-hidden="true"><path d="M12,15.66a1.73,1.73,0,0,1-1.2-.49L5.21,9.54a.7.7,0,0,1,1-1l5.62,5.62c.15.15.27.15.41,0L17.8,8.6a.71.71,0,0,1,1,0,.69.69,0,0,1,0,1l-5.57,5.58A1.71,1.71,0,0,1,12,15.66Z"></path></svg></div>
</div>
</div>
</div>
</div>

<hr className="style_divider__1tLu3 style_size1__3jc3t"/><div className="sc-gtXRHa fAKjln"><p className="sc-fyjYeE kLnlAr">配送について<svg width="24" height="24" fill="#222222" fill-rule="evenodd" viewBox="0 0 24 24" aria-hidden="true" className="sc-dWcDbm eRlJKB"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18.6A8.6,8.6,0,1,1,20.6,12,8.61,8.61,0,0,1,12,20.6Z"></path><path d="M14.18,7.52A2.72,2.72,0,0,0,13.25,7a3.16,3.16,0,0,0-1.17-.2A3.12,3.12,0,0,0,10,7.43,2.92,2.92,0,0,0,9,9.27c0,.12,0,.18.12.19l1.4.22c.09,0,.15,0,.17-.13a1.63,1.63,0,0,1,.44-.91A1.2,1.2,0,0,1,12,8.31a1.17,1.17,0,0,1,.88.33,1.15,1.15,0,0,1,.33.83,1.62,1.62,0,0,1-.12.61,3.46,3.46,0,0,1-.41.67l-1.23,1.67a2.53,2.53,0,0,0-.31.58,2.51,2.51,0,0,0-.09.75v.63a.14.14,0,0,0,.16.16h1.44a.14.14,0,0,0,.16-.16v-.45a1.7,1.7,0,0,1,.07-.56,1.31,1.31,0,0,1,.24-.42l1.22-1.67A2.93,2.93,0,0,0,15,9.46a2.62,2.62,0,0,0-.22-1.09A2.43,2.43,0,0,0,14.18,7.52Z"></path><circle cx="12" cy="16.24" r="1"></circle></svg></p><div className="style_formgroup__3IPME sc-hDgvsY kmUPMq"><div className="style_body__1OP1S"><div name="shippingPayer"><div className="style_formLabel__3wM81 common_fontFamily__3-3Si">
<label>配送料の負担</label><div className='necessary-badge'>必須</div>
</div>
<div className="style_select__3R6W_ common_fontFamily__3-3Si style_fluid__31br4"><div className="style_selectarea__3ZX8E"><select name="shippingPayer">
  <option " value="" label="選択してください" >選択してください</option>
<option value="送料込み(出品者負担)" value="2">送料込み(出品者負担)</option>
<option value="着払い(購入者負担)" value="1">着払い(購入者負担)</option></select><svg width="24" height="24" fill="#888888" fill-rule="evenodd" viewBox="0 0 24 24" aria-hidden="true"><path d="M12,15.66a1.73,1.73,0,0,1-1.2-.49L5.21,9.54a.7.7,0,0,1,1-1l5.62,5.62c.15.15.27.15.41,0L17.8,8.6a.71.71,0,0,1,1,0,.69.69,0,0,1,0,1l-5.57,5.58A1.71,1.71,0,0,1,12,15.66Z"></path></svg></div>
</div>
</div>
</div>
<div className="style_formgroup__3IPME sc-hDgvsY kmUPMq"><div className="style_body__1OP1S"><div name="shippingFromArea"><div className="style_formLabel__3wM81 common_fontFamily__3-3Si">
<label>発送元の地域</label><div className='necessary-badge'>必須</div>
</div>
<div className="style_select__3R6W_ common_fontFamily__3-3Si style_fluid__31br4"><div className="style_selectarea__3ZX8E"><select name="shippingFromArea">
  <option " value="" label="選択してください" >選択してください</option>
<option value="北海道" value="1">北海道</option>
<option value="青森県" value="2">青森県</option>
<option value="岩手県" value="3">岩手県</option>
<option value="宮城県" value="4">宮城県</option>
<option value="秋田県" value="5">秋田県</option>
<option value="山形県" value="6">山形県</option>
<option value="福島県" value="7">福島県</option>
<option value="茨城県" value="8">茨城県</option>
<option value="栃木県" value="9">栃木県</option>
<option value="群馬県" value="10">群馬県</option>
<option value="埼玉県" value="11">埼玉県</option>
<option value="千葉県" value="12">千葉県</option>
<option value="東京都" value="13">東京都</option>
<option value="神奈川県" value="14">神奈川県</option>
<option value="新潟県" value="15">新潟県</option>
<option value="富山県" value="16">富山県</option>
<option value="石川県" value="17">石川県</option>
<option value="福井県" value="18">福井県</option>
<option value="山梨県" value="19">山梨県</option>
<option value="長野県" value="20">長野県</option>
<option value="岐阜県" value="21">岐阜県</option>
<option value="静岡県" value="22">静岡県</option>
<option value="愛知県" value="23">愛知県</option>
<option value="三重県" value="24">三重県</option>
<option value="滋賀県" value="25">滋賀県</option>
<option value="京都府" value="26">京都府</option>
<option value="大阪府" value="27">大阪府</option>
<option value="兵庫県" value="28">兵庫県</option>
<option value="奈良県" value="29">奈良県</option>
<option value="和歌山県" value="30">和歌山県</option>
<option value="鳥取県" value="31">鳥取県</option>
<option value="島根県" value="32">島根県</option>
<option value="岡山県" value="33">岡山県</option>
<option value="広島県" value="34">広島県</option>
<option value="山口県" value="35">山口県</option>
<option value="徳島県" value="36">徳島県</option>
<option value="香川県" value="37">香川県</option>
<option value="愛媛県" value="38">愛媛県</option>
<option value="高知県" value="39">高知県</option>
<option value="福岡県" value="40">福岡県</option>
<option value="佐賀県" value="41">佐賀県</option>
<option value="長崎県" value="42">長崎県</option>
<option value="熊本県" value="43">熊本県</option>
<option value="大分県" value="44">大分県</option>
<option value="宮崎県" value="45">宮崎県</option>
<option value="鹿児島県" value="46">鹿児島県</option>
<option value="沖縄県" value="47">沖縄県</option>
<option value="未定" value="99">未定</option>
</select>
<svg width="24" height="24" fill="#888888" fill-rule="evenodd" viewBox="0 0 24 24" aria-hidden="true"><path d="M12,15.66a1.73,1.73,0,0,1-1.2-.49L5.21,9.54a.7.7,0,0,1,1-1l5.62,5.62c.15.15.27.15.41,0L17.8,8.6a.71.71,0,0,1,1,0,.69.69,0,0,1,0,1l-5.57,5.58A1.71,1.71,0,0,1,12,15.66Z"></path></svg></div>
</div>
</div>
</div>
<div className="style_formgroup__3IPME sc-hDgvsY kmUPMq"><div className="style_body__1OP1S"><div name="shippingDuration"><div className="style_formLabel__3wM81 common_fontFamily__3-3Si">
<label>発送までの日数</label><div className='necessary-badge'>必須</div>
</div>
<div className="style_select__3R6W_ common_fontFamily__3-3Si style_fluid__31br4"><div className="style_selectarea__3ZX8E"><select name="shippingDuration"><option " value="" label="選択してください" >選択してください</option>
<option value="1~2日で発送" value="1">1~2日で発送</option>
<option value="2~3日で発送" value="2">2~3日で発送</option>
<option value="4~7日で発送" value="3">4~7日で発送</option>
</select><svg width="24" height="24" fill="#888888" fill-rule="evenodd" viewBox="0 0 24 24" aria-hidden="true"><path d="M12,15.66a1.73,1.73,0,0,1-1.2-.49L5.21,9.54a.7.7,0,0,1,1-1l5.62,5.62c.15.15.27.15.41,0L17.8,8.6a.71.71,0,0,1,1,0,.69.69,0,0,1,0,1l-5.57,5.58A1.71,1.71,0,0,1,12,15.66Z"></path></svg></div>


<hr className="style_divider__1tLu3 style_size1__3jc3t"/>
<div className="sc-esExBO dRybVY"><p className="sc-fyjYeE kLnlAr">価格（¥<!-- -->300<!-- -->〜<!-- -->9,999,999<!-- -->）<svg width="24" height="24" fill="#222222" fill-rule="evenodd" viewBox="0 0 24 24" aria-hidden="true" className="sc-dWcDbm eRlJKB"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18.6A8.6,8.6,0,1,1,20.6,12,8.61,8.61,0,0,1,12,20.6Z"></path><path d="M14.18,7.52A2.72,2.72,0,0,0,13.25,7a3.16,3.16,0,0,0-1.17-.2A3.12,3.12,0,0,0,10,7.43,2.92,2.92,0,0,0,9,9.27c0,.12,0,.18.12.19l1.4.22c.09,0,.15,0,.17-.13a1.63,1.63,0,0,1,.44-.91A1.2,1.2,0,0,1,12,8.31a1.17,1.17,0,0,1,.88.33,1.15,1.15,0,0,1,.33.83,1.62,1.62,0,0,1-.12.61,3.46,3.46,0,0,1-.41.67l-1.23,1.67a2.53,2.53,0,0,0-.31.58,2.51,2.51,0,0,0-.09.75v.63a.14.14,0,0,0,.16.16h1.44a.14.14,0,0,0,.16-.16v-.45a1.7,1.7,0,0,1,.07-.56,1.31,1.31,0,0,1,.24-.42l1.22-1.67A2.93,2.93,0,0,0,15,9.46a2.62,2.62,0,0,0-.22-1.09A2.43,2.43,0,0,0,14.18,7.52Z"></path><circle cx="12" cy="16.24" r="1"></circle></svg></p><div className="sc-dCaJBF kFwUEa"><div className="sc-hENMEE jjEcNK"><div name="price" className="sc-csZoYU dzLEUW"><div className="style_formLabel__3wM81 common_fontFamily__3-3Si">
<label>販売価格</label><div className='necessary-badge'>必須</div>
</div>
<span className="sc-ihiiSJ gsRcks">¥</span><div className="style_textField__1jvsM common_fontFamily__3-3Si style_fluid__1h6iv sc-ctwKVn gtFgYo"><div className="style_inputarea__1mtsA">
  <input type="number" name="price" placeholder="0" value="" autoComplete="off"/></div>
</div>
</div>
<div className="sc-hENMEE jjEcNK"><div data-test="fee-label" className="sc-cXHFlN izIndD"><div>販売手数料（10%）</div>
</div>
<span data-test="fee-value" className="sc-gJTSre fETaKw">—</span></div>

<hr className="style_divider__1tLu3 style_size1__3jc3t"/><div className="sc-hENMEE jjEcNK"><div className="sc-cXHFlN izIndD">販売利益</div>
<span data-test="total-value" className="sc-gJTSre fETaKw">—</span></div>
</div>
</div>
<div className="sc-fdqjUm jDEnOL">
<button type="submit" tabindex="0" className="style_button__3yWFH common_fontFamily__3-3Si style_primary__Mg3zL style_medium__3wTQ5 style_fluid__3mdYA style_legacy__2D0U0">出品する</button>
<button type="button" tabindex="0" className="style_button__3yWFH common_fontFamily__3-3Si style_defaultIntent__22709 style_medium__3wTQ5 style_fluid__3mdYA style_legacy__2D0U0">下書きに保存</button>
<Link className="style_textlink__iJYDm common_fontFamily__3-3Si sc-eAyhxF eQzsLC" to="/">もどる</Link></div>
<div className="sc-kbdWBx bJUpRt"><p className="sc-eVrGFk qsNmL">
  <p>禁止されている行為および出品物を必ずご確認ください。偽ブランド品や盗品物などの販売は犯罪であり、法律により処罰される可能性があります。 また、出品をもちまして加盟店規約に同意したことになります。</p></p></div>
</form>

 </>
  )
}
