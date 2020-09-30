import React, { ComponentPropsWithoutRef } from 'react';
import { LayoutProps, SpaceProps } from 'styled-system';
import Icon from '@knack-ux/icon';

import {
  Container,
  Description,
  Title,
  AlertBase
} from './styled';

export interface Props extends ComponentPropsWithoutRef<'div'>,
  LayoutProps,
  SpaceProps {
  title?: string
  description: string
  /**
   * Specified by the intents property
   * of the @knack-ux/theme's ThemeProvider
   * Specified options by default are:
   * info | warning | danger | success
   */
  intent?: string
  icon?: string
}

export function Alert({
  title,
  description,
  intent = 'info',
  icon,
  ...props
}: Props) {
  function renderIcon() {
    let iconName = intent;
    if (intent === 'danger') iconName = 'error';
    else if (intent === 'success') iconName = 'check';

    return (
      <Icon icon={icon || iconName} />
    );
  }

  return (
    <AlertBase
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
    </AlertBase>
  );
}

export default Alert;
