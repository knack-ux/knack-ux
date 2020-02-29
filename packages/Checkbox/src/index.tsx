import React, { ChangeEvent, ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import Icon from '@knack-ux/icon';

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

export const CheckboxBase = styled.div`
  display: inline-flex;
  flex-direction: column;

  font-family: 'IBM Plex Sans';
`;

export const Input = styled.input`
  position: absolute;
  clip: rect(1px,1px,1px,1px);
  height: 1px;
  width: 1px;
  opacity: 0;
  overflow: hidden;
`;

export const Label = styled.label<{checked?: boolean}>`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  & > i {
    user-select: none;
    box-sizing: border-box;

    font-size: 16px;
  
    border-radius: 3px;
    background: ${({ checked, theme }) => (checked ? theme.colors.info : '#FFFFFF')};
    border: 2px solid ${({ theme }) => theme.colors.info};

    margin-right: 16px;
  }

  &[aria-disabled="true"] {
    & > i {
      border: 2px solid #B3BAC5; 
      background: ${({ checked }) => (checked ? '#B3BAC5' : '#FFF')};
    }
  }

  &:nth-of-type(n + 2) {
    margin-top: 8px;
  }
`;


export default Checkbox;
