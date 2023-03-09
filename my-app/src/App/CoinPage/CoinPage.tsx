import { useEffect, useState } from "react";
import { Loader, LoaderSize } from "@components/Loader/Loader";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import style from "./CoinPage.module.scss";
import image from "../../assets/images/backbutton.svg";

const CoinPage = () => {
  let [info, setInfo] = useState({
    id: "",
    name: "",
    symbol: "",
    description: { en: "" },
    image: { small: "" },
    market_data: {
      current_price: { usd: "" },
      market_cap: { usd: "" },
      price_change_24h_in_currency: { usd: "" },
      price_change_percentage_24h: "",
      fully_diluted_valuation: { usd: "" },
      circulating_supply: "",
      max_supply: "",
      total_supply: "",
    },
  });

  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      let result = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}`
      );
      setInfo(result.data);
    };

    fetch();
  }, []);

  let classs = style.differenceValue + " ";

  if (Number(info.market_data.price_change_24h_in_currency.usd) < 0) {
    classs += style.red;
  }

  return (
    <div className={style.coinPage}>
      {info.id !== "" ? (
        <>
          <div className={style.top}>
            <button className={style.backButton}>
              <Link to="/">
                <img className={style.backImage} src={image} alt="" />
              </Link>
            </button>
            <img className={style.coinImage} src={info.image.small} alt="" />
            <div className={style.coinName}>{info.name}</div>
            <div className={style.coinIndex}>({info.symbol.toUpperCase()})</div>
          </div>
          <div className={style.price}>
            <div className={style.currentValue}>
              ${info.market_data.current_price.usd}
            </div>
            <div className={classs}>
              {info.market_data.price_change_24h_in_currency.usd} (
              {info.market_data.price_change_percentage_24h}%)
            </div>
          </div>
          <ul>
            <li className={style.infoItem}>
              Market Cap
              <div className={style.infoValue}>
                ${info.market_data.market_cap.usd}
              </div>
            </li>
            <li className={style.infoItem}>
              Fully Diluted Valuation
              <div className={style.infoValue}>
                ${info.market_data.fully_diluted_valuation.usd}
              </div>
            </li>
            <li className={style.infoItem}>
              Circulating Supply
              <div className={style.infoValue}>
                ${info.market_data.circulating_supply}
              </div>
            </li>
            <li className={style.infoItem}>
              Total Supply
              <div className={style.infoValue}>
                ${info.market_data.total_supply}
              </div>
            </li>
            {info.market_data.max_supply && (
              <li className={style.infoItem}>
                Max Supply
                <div className={style.infoValue}>
                  ${info.market_data.max_supply}
                </div>
              </li>
            )}
          </ul>
          <div>
            <div className={style.description}>Description</div>
            <p
              className={style.description__text}
              dangerouslySetInnerHTML={{
                __html: info!.description.en,
              }}
            ></p>
          </div>
        </>
      ) : (
        <div className={style.CoinPage__Loader}>
          <Loader size={LoaderSize.l} />
        </div>
      )}
    </div>
  );
};

export default CoinPage;
