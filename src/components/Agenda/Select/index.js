import React from 'react';

import style from './style';

/**
 * Select component with style
 */

type tProps = {
  defaultValue: string,
  defaultLabel: string,
  selectOptions: array,
  onChange: () => void
};

export default ({
  defaultValue,
  defaultLabel,
  selectOptions,
  onChange
}: tProps) => (
  <>
    <select
      defaultValue={defaultValue}
      className={style.select}
      onChange={onChange}
    >
      <option value={defaultValue}>{defaultLabel}</option>
      />
      {selectOptions.map(option => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  </>
);
