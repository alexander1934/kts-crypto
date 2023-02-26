import React, { useEffect, useState } from "react";
import { Button } from "@components/Button/Button";
import { Card } from "@components/Card/Card";
import { Input } from "@components/Input/Input";
import axios from "axios";
import { Link } from "react-router-dom";
import { Loader, LoaderSize } from "./../../components/Loader/Loader";
import { MultiDropdown } from "./../../components/MultiDropdown/MultiDropdown";
import style from "./MainPage.module.scss";
import searchIcon from "../../assets/images/searchIcon.svg";

const MainPage = () => {
  let [coins, setCoins] = useState([
    {
      id: "",
      image: "",
      name: "",
      symbol: "",
      current_price: "",
      price_change_percentage_24h: "",
    },
  ]);

  useEffect(() => {
    const fetch = async () => {
      let result = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
      );

      setCoins(result.data);
    };

    fetch();
  }, []);
  return (
    <div className={style.main}>
      <div className={style.main__wrapper}>
        <div className={style.main__searchBlock}>
          <Input
            className={style.main__input}
            placeholder="Search Cryptocurrency"
          />
          <Button>
            <img className={style.main__searchButton} src={searchIcon} alt="" />
          </Button>
        </div>
        <div className={style.main__chooseBlock}>
          <p className={style.main__p}>Coins</p>
          <MultiDropdown
            options={[]}
            value={[]}
            onChange={() => {
              return "Hello";
            }}
          />
        </div>
        {coins.length > 1 ? (
          <div className={style.main__coinsBlock}>
            {coins.map((coin) => (
              <Link to={`/coin/${coin.id}`}>
                <Card
                  key={coin.id}
                  image={coin.image}
                  title={coin.name}
                  subtitle={coin.symbol}
                  content={coin.current_price}
                  difference={coin.price_change_percentage_24h}
                />
              </Link>
            ))}
          </div>
        ) : (
          <div className={style.main__loader}>
            <Loader size={LoaderSize.l} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
