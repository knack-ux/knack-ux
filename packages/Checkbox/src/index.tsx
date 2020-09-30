import React, { ChangeEvent, ComponentPropsWithoutRef } from 'react';
import Icon from '@knack-ux/icon';

import {
  CheckboxBase,
  Input,
  Label
} from './styled';

export interface Option {
  label: string
  value: string
}

export interface Props extends ComponentPropsWithoutRef<'div'> {
  id: string
  label: string
  checked: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
}

export function Checkbox({
  id,
  onChange,
  checked,
  label,
  disabled,
  ...props
}: Props) {
  return (
    <CheckboxBase {...props}>
      <Label
        htmlFor={id}
        aria-disabled={disabled}
        checked={checked}
      >
        <Icon
          icon="done"
          color="#FFF"
        />
        <Input
          name={id}
          id={id}
          type="checkbox"
          checked={checked}
          onChange={!disabled ? onChange : () => {}}
          aria-disabled={disabled}
        />
        {label}
      </Label>
    </CheckboxBase>
  );
}

export default Checkbox;
