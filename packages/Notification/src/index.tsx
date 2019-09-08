import React from 'react';

import InfoSVG from './assets/info.svg';
import WarningSVG from './assets/warning.svg';
import ErrorSVG from './assets/error.svg';

import {
  Container,
  Description,
  Wrap,
  CloseButton,
  Icon,
  Title
} from './styled';

interface Props {
  title: string
  description?: string
  /**
   * Defaults to 'info'
   * @default info
   */
  type?: 'info' | 'warning' | 'error'
}

function Notification({
  title,
  description,
  type = 'info'
}: Props) {
  function renderIcon() {
    switch (type) {
      case 'warning': return <WarningSVG fill="#FF7F50" />;
      case 'error': return <ErrorSVG fill="#DD215A" />;
      default: return <InfoSVG fill="#0052CC" />;
    }
  }

  function renderText() {
    return (
      <Container>
        <Title>{title}</Title>
        {description && (
          <Description>
            {description}
          </Description>
        )}
      </Container>
    );
  }

  return (
    <Wrap type={type}>
      <Icon>
        {renderIcon()}
      </Icon>
      {renderText()}
      <CloseButton />
    </Wrap>
  );
}


export { Props };
export * from './styled';
export default Notification;
