import { useEffect } from "react";
import { LoaderSize } from "@components/Loader";
import Loader from "@components/Loader";
import CoinPageStore from "@store/CoinPageStore";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import style from "./CoinPage.module.scss";
import Content from "./Content/Content";

export type Coin = {
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
};

const store = new CoinPageStore();

const CoinPage = () => {
  const { id } = useParams();

  useEffect(() => {
    store.fetch(id);
  }, [id]);

  return (
    <div className={style.coinPage}>
      {store.info ? (
        <Content
          name={store.info.name}
          coinImage={store.info.image.small}
          symbol={store.info.symbol.toUpperCase()}
          currentPrice={store.info.market_data.current_price.usd}
          priceCurrency={
            store.info.market_data.price_change_24h_in_currency.usd
          }
          pricePercentage={store.info.market_data.price_change_percentage_24h}
          marketCap={store.info.market_data.market_cap.usd}
          dilutedValuation={store.info.market_data.fully_diluted_valuation.usd}
          circulatingSupply={store.info.market_data.circulating_supply}
          totalSupply={store.info.market_data.total_supply}
          maxSupply={store.info.market_data.max_supply}
          description={store.info.description.en}
        />
      ) : (
        <div className={style.CoinPage__Loader}>
          <Loader size={LoaderSize.l} />
        </div>
      )}
    </div>
  );
};

export default observer(CoinPage);
