import React from 'react';

import style from './style';

type tProps = {
  name: string,
  checked: boolean,
  checkedLabel: string,
  uncheckedLabel: string,
  onChange: () => void
};

export default ({
  name,
  checked,
  checkedLabel = 'On',
  uncheckedLabel = 'Off',
  onChange
}: tProps) => (
  <>
    <label className={style.wrapperLabel}>
      <span className={style.sliderLabel}>
        {checked ? checkedLabel : uncheckedLabel}
      </span>
      <input
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className={style.slider} />
    </label>
  </>
);
