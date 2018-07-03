const COIN_INFO_API_URL = 'https://api.coinmarketcap.com/v2/ticker/'

export default class CoinInfomationRepository {
  static async getCoinInfos({locate}) {
    const result = await fetch(`${COIN_INFO_API_URL}${locate ? `?convert=${locate}` : ''}`)

    if(!result) {
      return []
    }

    const resultJson = await result.json()
    const coinInfos = resultJson.data
    return Object
            .keys(coinInfos)
            .map(coinKey => coinInfos[coinKey])
  }
}
