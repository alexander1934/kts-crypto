import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import style from "./Content.module.scss";
import image from "../../../assets/images/backbutton.svg";

export type ContentProps = {
  coinImage: string;
  name: string;
  symbol: string;
  currentPrice: number;
  priceCurrency: number;
  pricePercentage: number;
  marketCap: number;
  dilutedValuation: number;
  circulatingSupply: number;
  totalSupply: number;
  maxSupply: number;
  description: string;
};

const Content: React.FC<ContentProps> = ({ ...props }) => {
  let classs = style.differenceValue + " ";

  if (Number(props.priceCurrency) < 0) {
    classs += style.red;
  }
  let description = props.description;

  return (
    <div>
      <div className={style.top}>
        <button className={style.backButton}>
          <Link to="/">
            <img className={style.backImage} src={image} alt="" />
          </Link>
        </button>
        <img className={style.coinImage} src={props.coinImage} alt="" />
        <div className={style.coinName}>{props.name}</div>
        <div className={style.coinIndex}>({props.symbol})</div>
      </div>
      <div className={style.price}>
        <div className={style.currentValue}>${props.currentPrice}</div>
        <div className={classs}>
          {props.priceCurrency} ({props.pricePercentage}%)
        </div>
      </div>
      <ul>
        <li className={style.infoItem}>
          Market Cap
          <div className={style.infoValue}>${props.marketCap}</div>
        </li>
        <li className={style.infoItem}>
          Fully Diluted Valuation
          <div className={style.infoValue}>${props.dilutedValuation}</div>
        </li>
        <li className={style.infoItem}>
          Circulating Supply
          <div className={style.infoValue}>${props.circulatingSupply}</div>
        </li>
        <li className={style.infoItem}>
          Total Supply
          <div className={style.infoValue}>${props.totalSupply}</div>
        </li>
        {props.maxSupply && (
          <li className={style.infoItem}>
            Max Supply
            <div className={style.infoValue}>${props.maxSupply}</div>
          </li>
        )}
      </ul>
      <div>
        <div className={style.description}>Description</div>
        <p
          className={style.description__text}
          dangerouslySetInnerHTML={{
            __html: description!,
          }}
        ></p>
      </div>
    </div>
  );
};

export default observer(Content);
