import React, {
  useState,
  ComponentType,
  useEffect
} from 'react';

// import Notification from '@knack/alert';
import { useAnimation } from 'framer-motion';

import {
  Container,
  Expand,
  Fixed,
  HorizontalLine,
  Link,
  Menu,
  Nav,
  Wrap
} from './styled';

function areSimilar(
  child: React.ReactElement,
  Component: React.ComponentType<any>
) {
  return (
    child.type === Component
      || child.type === (<Component />).type
  );
}

type AllowedChildrenElements = any

interface Props {
  Logo: ComponentType
  children: AllowedChildrenElements
}

function Navbar({
  Logo,
  children
}: Props) {
  const [isOpen, setOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen]);

  // function renderNotifications() {
  //   return (
  //     React.Children
  //       .toArray(children)
  //       .filter(
  //         (child) => areSimilar(child, Notification)
  //       )
  //   );
  // }

  function renderMenu() {
    return (
      <Menu animate={controls}>
        <Nav>
          {React.Children
            .toArray(children)
            .filter((child) => areSimilar(child, Link) && !child.props.fixed)}
        </Nav>
      </Menu>
    );
  }

  function renderFixedLinks() {
    return (
      React.Children
        .toArray(children)
        .filter((child) => child.type === Link && child.props.fixed)
    );
  }

  return (
    <Wrap>
      <HorizontalLine />
      {/* {renderNotifications()} */}
      <Container>
        <Logo />
        <Fixed>
          {renderFixedLinks()}
          <Expand
            active={isOpen}
            onClick={() => setOpen(!isOpen)}
          />
        </Fixed>
      </Container>
      {renderMenu()}
    </Wrap>
  );
}

export * from './styled';
export default Navbar;
