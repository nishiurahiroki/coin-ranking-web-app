const COIN_INFO_API_URL = 'https://api.coinmarketcap.com/v2/ticker/'

export default class CoinInfomationRepository {
  static async getCoinInfos({locate = 'JPY', sort = 'price', orderBy = 'desc'}) {
    const result = await fetch(`${COIN_INFO_API_URL}${locate ? `?convert=${locate}` : ''}`)
    if(!result) {
      return []
    }

    const resultJson = await result.json()
    if(!resultJson) {
      return []
    }

    const SORT = {
      desc : (a, b) => b.quotes[locate][sort] - a.quotes[locate][sort],
      asc : (b, a) => b.quotes[locate][sort] - a.quotes[locate][sort]
    }

    const coinInfos = resultJson.data
    return Object
            .keys(coinInfos)
            .map(coinKey => coinInfos[coinKey])
            .sort(SORT[orderBy])
  }
}
