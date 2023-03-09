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
  options: Option[];
  /** Текущие выбранные значения поля, может быть пустым */
  value?: Option[];
  /** Callback, вызываемый при выборе варианта */
  onChange?: (value: Option[]) => void;
  /** Заблокирован ли дропдаун */
  disabled?: boolean;
  /** Преобразовать выбранные значения в строку. Отображается в дропдауне в качестве выбранного значения */
};

const MultiDropdown: React.FC<MultiDropdownProps> = ({
  options,
  value,
  onChange,
  disabled = false,
}) => {
  const [isOpen, openToggler] = useState(false);

  const openHandler = React.useCallback(
    () => openToggler((prevValue) => !prevValue),
    []
  );

  return (
    <div>
      <div className={style.selected_value} onClick={openHandler}>
        <div>Chose category</div>
        <img src={arrow} alt="" />
      </div>
      {isOpen && (
        <div className={style.choose_list}>
          <ul>
            {options.map((option) => {
              return (
                <li key={option.key} className={style.option}>
                  {option.value}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
export default React.memo(MultiDropdown);
