import React, { HTMLAttributes } from 'react';
import { LayoutProps, SpaceProps } from 'styled-system';
import Icon from '@knack-ux/icon';

import {
  Container,
  Description,
  Title,
  Wrap
} from './styled';

type ReactDiv = HTMLAttributes<HTMLDivElement>;

export interface Props extends ReactDiv, LayoutProps, SpaceProps {
  title?: string
  description: string
  intent?: string
}

export function Alert({
  title,
  description,
  intent = 'info',
  ...props
}: Props) {
  function renderIcon() {
    let iconName = intent;
    if (intent === 'danger') iconName = 'error';
    else if (intent === 'success') iconName = 'check';

    return (
      <Icon icon={iconName} />
    );
  }

  return (
    <Wrap
      paddingY={[16, 24]}
      paddingRight={[40, 48]}
      paddingLeft={[16, 24]}
      intent={intent}
      {...props}
    >
      {renderIcon()}
      <Container>
        {title && (
        <Title fontSize={[2, 3]}>
          {title}
        </Title>
        )}
        <Description fontSize={[1, 2]}>
          {description}
        </Description>
      </Container>
    </Wrap>
  );
}


export default Alert;
