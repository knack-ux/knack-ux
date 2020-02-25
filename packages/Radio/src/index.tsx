import React, { ChangeEvent } from 'react';

import {
  Input,
  InputLabel,
  Label,
  RadioBase
} from './styled';

export interface Option {
  label: string
  value: string
}

export interface Props {
  id: string
  value: string
  label: string
  options: Option[]
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function Radio({
  id,
  options,
  onChange,
  value,
  label
}: Props) {
  function renderLabel() {
    return (
      <Label>{label}</Label>
    );
  }

  function renderOptions() {
    return options.map((option) => {
      const optionId = `${id}-${option.value}`;
      return (
        <InputLabel
          key={optionId}
          htmlFor={optionId}
          checked={option.value === value}
        >
          <Input
            name={id}
            id={optionId}
            type="radio"
            value={option.value}
            checked={option.value === value}
            onChange={onChange}
          />
          {option.label}
        </InputLabel>
      );
    });
  }

  return (
    <RadioBase>
      {renderLabel()}
      {renderOptions()}
    </RadioBase>
  );
}


export default Radio;
