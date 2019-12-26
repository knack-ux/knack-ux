import React, {
  ReactNode,
  cloneElement,
  ReactElement,
  MouseEvent
} from 'react';
import Icon from '@knack-ux/icon';

import Item from './Item';
import { MenuBase, Divider, Title } from './styled';

export interface Props {
  id: string
  title?: string
  children: ReactNode
}

export function Menu({
  id,
  title,
  children
}: Props) {
  function renderChildren() {
    return React.Children.map(children, (child: ReactElement, index) => {
      if (child.type === Item) {
        const itemId = child.props.id || `menu-${id}-item-${index}`;
        const { icon, onSelect, children: itemChildren } = child.props;
        return cloneElement(child, {
          ...child.props,
          id: itemId,
          key: itemId,
          tabIndex: 0,
          role: 'menuitem',
          onClick: (event: MouseEvent) => {
            onSelect(event);
          },
          children: (
            <>
              {icon && <Icon icon={icon} />}
              {itemChildren}
            </>
          )
        });
      }

      return child;
    });
  }

  function renderTitle() {
    return title && (
      <Title>{title.toUpperCase()}</Title>
    );
  }

  return (
    <MenuBase role="menu">
      {renderTitle()}
      {renderChildren()}
    </MenuBase>
  );
}

export { Divider, Item };
export default Menu;
