import React, {
  useEffect,
  ReactNode,
  ReactElement,
  KeyboardEvent
} from 'react';
import { useAnimation } from 'framer-motion';

import {
  Indicator,
  Tab,
  TabList,
  TabPanel
} from './styled';

import { useNumberLoop } from './helpers';

export interface Props {
  label: string
  children: ReactNode
  initial?: string
}

export function Tabs({
  label,
  initial,
  children
}) {
  const tabCount = React.Children.toArray(children).length;

  const [activeIndex, activeActions] = useNumberLoop(0, tabCount);
  const [focusIndex, focusActions] = useNumberLoop(0, tabCount);
  const indicatorAnimation = useAnimation();

  useEffect(() => {
    const initialActive = React.Children.toArray(children)
      .findIndex((child) => child.props.name === initial);

    activeActions.set(initialActive || 0);
    focusActions.set(initialActive || 0);
  }, []);

  const activeChild: ReactElement = React.Children.toArray(children)[activeIndex];
  const focusChild: ReactElement = React.Children.toArray(children)[focusIndex];

  function handleTabListKeyPress(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') focusActions.increase();
    else if (event.key === 'ArrowLeft') focusActions.decrease();
    else if (event.key === 'Home') focusActions.set(0);
    else if (event.key === 'End') focusActions.set(tabCount - 1);
    else if (event.key === ' ' || event.key === 'Enter') activeActions.set(focusIndex);
  }

  function handleTabSelect(index: number) {
    return () => {
      activeActions.set(index);
      focusActions.set(index);
    };
  }

  function renderTabList() {
    return (
      <TabList
        role="tablist"
        aria-label={label}
        tabIndex={0}
        aria-activedescendant={focusChild.props.name}
        onKeyDown={handleTabListKeyPress}
      >
        {React.Children.toArray(children).map((child, index) => (
          <Tab
            id={child.props.name}
            key={child.props.name}
            role="tab"
            tabIndex={-1}
            aria-selected={activeIndex === index}
            onClick={handleTabSelect(index)}
            ref={(ref) => {
              if (ref && index === activeIndex) {
                indicatorAnimation.start({
                  scaleX: ref.offsetWidth,
                  x: ref.offsetLeft,
                });
              }
            }}
          >
            {child.props.name}
          </Tab>
        ))}
        <Indicator
          animate={indicatorAnimation}
          transition={{
            type: 'tween',
            ease: 'easeInOut',
            duration: 0.2
          }}
        />
      </TabList>
    );
  }

  return (
    <div>
      {renderTabList()}
      <TabPanel role="tabpanel">
        {activeChild.props.children}
      </TabPanel>
    </div>
  );
}

export { Tab };
export default Tabs;
