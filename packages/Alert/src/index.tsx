import React, { HTMLAttributes } from 'react';
import {
  system, LayoutProps, SpaceProps
} from 'styled-system';

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
      <i className="material-icons-round">
        {iconName}
      </i>
    );
  }

  return (
    <Wrap intent={intent} {...props}>
      {renderIcon()}
      <Container>
        {title && <Title>{title}</Title>}
        <Description>
          {description}
        </Description>
      </Container>
    </Wrap>
  );
}


export default Alert;
