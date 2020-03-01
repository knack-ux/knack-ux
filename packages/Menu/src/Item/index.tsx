import React, { ComponentPropsWithoutRef } from 'react';

import { ItemBase } from './styled';

export interface Props extends ComponentPropsWithoutRef<'div'> {
  key?: string
  icon?: string
  onSelect?: () => void
}

export function Item({
  icon,
  onSelect,
  ...props
}: Props) {
  return (
    <ItemBase
      onClick={onSelect}
      onSelect={onSelect}
      {...props}
    />
  );
}

export default Item;
