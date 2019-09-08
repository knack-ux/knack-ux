import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

import {
  RowWrap,
  Content,
  Header
} from './styled';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

type ReactDiv = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onClick'
>

interface Props extends ReactDiv {
  open?: boolean
  title: string
  className?: string
  children: React.ReactNode
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function Row({
  title,
  open = false,
  className,
  children,
  onClick,
  ...props
}: Props) {
  const controls = useAnimation();

  useEffect(() => {
    if (open) {
      controls.start({
        visibility: 'visible'
      }).then(() => {
        controls.start({
          height: 'auto'
        });
      });
    } else {
      controls.start({
        height: 0
      }).then(() => {
        controls.start({
          visibility: 'hidden'
        });
      });
    }
  }, [open]);

  function renderHeader() {
    return (
      <h3>
        <Header
          open={open}
          title={title}
          onClick={onClick}
        />
      </h3>
    );
  }


  function renderContent() {
    return (
      <Content animate={controls}>
        {children}
      </Content>
    );
  }

  return (
    <RowWrap className={className} {...props}>
      {renderHeader()}
      {renderContent()}
    </RowWrap>
  );
}

export { Props };
export default React.memo(
  Row
);
