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
      coins: observable.ref,
      input: observable.ref,
      coinsId: observable.ref,
      currentPage: observable.ref,
      isFetching: observable.ref,
      fetch: action,
      inputHandler: action,
      searchCoin: action,
      bottomLoading: action.bound,
    });
  }

  // Запрос за полным списком монет

  coins: Array<ICoin> | null = null;

  fetch = async (page: number = 1) => {
    let result = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&page=${page}`
    );

    this.coins = result.data;
  };

  // Логика поиска

  input: string = "";

  coinsId: string = "";

  inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.input = e.target.value;
  };

  searchCoin = async () => {
    let result = await axios.get(
      `https://api.coingecko.com/api/v3/search?query=${this.input}`
    );

    this.coinsId = result.data.coins
      .map((coin: { id: string }) => {
        return coin.id;
      })
      .join("%2C%20");

    let search = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${this.coinsId}`
    );

    this.coins = search.data;
  };

  // Логика бесконечного скролла

  currentPage: number = 1;

  isFetching: boolean = true;

  bottomLoading = async () => {
    if (this.isFetching) {
      await axios
        .get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20&page=${this.currentPage}`
        )
        .then((responce) => {
          this.currentPage = this.currentPage + 1;
          this.coins!.push(...responce.data);
          console.log(this.coins);
        })
        .finally(() => (this.isFetching = false));
    }
  };
}

export default MainPageStore;
