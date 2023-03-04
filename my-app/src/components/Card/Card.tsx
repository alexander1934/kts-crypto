import React from "react";
import style from "./Card.module.scss";

export type CardProps = {
  /** URL изображения */
  image: string;
  /** Заголовок карточки */
  title: string;
  /** Подзаголовок карточки */
  subtitle: string;
  /** Содержимое карточки (футер/боковая часть), может быть пустым */
  content: React.ReactNode;
  /** Клик на карточку */
  onClick?: React.MouseEventHandler;
  difference: string;
};

const Card: React.FC<CardProps> = ({ ...props }) => {
  let classes = style.card__difference;
  if (Number(props.difference) < 0) {
    classes += ` ${style.red}`;
  }
  return (
    <div className={style.card} onClick={props.onClick}>
      <div className={style.card__left}>
        <img
          src={props.image}
          alt={`${props.title?.toString()[0]}`}
          className={style.card__image}
        />
        <div className={style.card__title}>
          {props.title}
          <div className={style.card__subtitle}>
            {props.subtitle.toUpperCase()}
          </div>
        </div>
      </div>
      <div className={style.card__right}>
        ${props.content}
        <div className={classes}>{props.difference}%</div>
      </div>
    </div>
  );
};
export default React.memo(Card);
