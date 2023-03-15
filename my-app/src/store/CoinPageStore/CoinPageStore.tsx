import axios from "axios";
import { action, makeObservable, observable } from "mobx";

interface ICoinInfo {
  id: string;
  name: string;
  symbol: string;
  description: { en: string };
  image: { small: string };
  market_data: {
    current_price: { usd: number };
    market_cap: { usd: number };
    price_change_24h_in_currency: { usd: number };
    price_change_percentage_24h: number;
    fully_diluted_valuation: { usd: number };
    circulating_supply: number;
    max_supply: number;
    total_supply: number;
  };
}

class CoinPageStore {
  constructor() {
    makeObservable(this, {
      info: observable.ref,
      fetch: action,
      destroy: action,
    });
  }

  info: ICoinInfo | null = null;

  fetch = async (id: string | undefined) => {
    let result = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    this.info = result.data;
  };

  destroy = (e: React.MouseEventHandler<HTMLButtonElement>) => {
    this.info = null;
  };
}

export default CoinPageStore;
