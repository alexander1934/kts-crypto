import { useEffect } from "react";
import Button from "@components/Button";
import Card from "@components/Card";
import Input from "@components/Input";
import { LoaderSize } from "@components/Loader";
import Loader from "@components/Loader";
import MultiDropdown from "@components/MultiDropdown";
import MainPageStore from "@store/MainPageStore";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import style from "./MainPage.module.scss";
import searchIcon from "../../assets/images/searchIcon.svg";

const store = new MainPageStore();

const MainPage = () => {
  useEffect(() => {
    store.fetch();
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
            options={[
              { key: "fav", value: "Favourite" },
              { key: "up", value: "Rising" },
              { key: "down", value: "Falling" },
            ]}
          />
        </div>
        {store.coins ? (
          <div className={style.main__coinsBlock}>
            {store.coins!.map((coin) => (
              <Link to={`/coin/${coin.id}`} key={coin.id}>
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

export default observer(MainPage);
