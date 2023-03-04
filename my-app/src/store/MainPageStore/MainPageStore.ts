import axios from "axios";
import { action, makeObservable, observable } from "mobx";

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: string;
}

class MainPageStore {
  constructor() {
    makeObservable(this, {
      coins: observable,
      fetch: action,
    });
  }

  coins: Array<ICoin> | null = null;

  fetch = async () => {
    let result = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
    );

    this.coins = result.data;
  };
}

export default MainPageStore;
