import React, { useState } from "react";
import style from "./MultiDropdown.module.scss";
import arrow from "../../assets/images/dropdownArrow.svg";

export type Option = {
  /** Ключ варианта, используется для отправки на бек/использования в коде */
  key: string;
  /** Значение варианта, отображается пользователю */
  value: string;
};

/** Пропсы, которые принимает компонент Dropdown */
export type MultiDropdownProps = {
  /** Массив возможных вариантов для выбора */
  options?: Option[];
  /** Текущие выбранные значения поля, может быть пустым */
  value?: Option[];
  /** Callback, вызываемый при выборе варианта */
  onChange?: (value: Option[]) => void;
  /** Заблокирован ли дропдаун */
  disabled?: boolean;
  /** Преобразовать выбранные значения в строку. Отображается в дропдауне в качестве выбранного значения */
};

export const MultiDropdown: React.FC<MultiDropdownProps> = ({
  options,
  value,
  onChange,
  disabled = false,
}) => {
  let [isOpen, openToggler] = useState(false);

  let openHandler = () => {
    openToggler((prevValue) => !prevValue);
  };

  return (
    <div>
      <div className={style.selected_value} onClick={openHandler}>
        <div>Chose category</div>
        <img src={arrow} alt="" />
      </div>
      {isOpen && (
        <div className={style.choose_list}>
          <ul>
            <li className={style.option}>ger43tg</li>
            <li className={style.option}>h35h5h</li>
            <li className={style.option}>rgherherh</li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default MultiDropdown;
