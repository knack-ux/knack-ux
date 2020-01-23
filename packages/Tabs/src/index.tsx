import React, {
  useEffect,
  ReactNode,
  ReactElement,
  KeyboardEvent
} from 'react';
import { useAnimation } from 'framer-motion';

import {
  Wrap,
  Indicator,
  Tab,
  TabList,
  TabPanel,
  BorderBottom
} from './styled';

import { useNumberLoop } from './helpers';

export interface Props {
  label: string
  initial?: string
  children: ReactElement<typeof Tabs>[]
}

export function Tabs({
  label,
  initial = '',
  children
}: Props) {
  const tabs = React.Children.toArray(children) as ReactElement<typeof Tabs>[];

  const [activeIndex, activeActions] = useNumberLoop(0, tabs.length);
  const [focusIndex, focusActions] = useNumberLoop(0, tabs.length);
  const indicatorAnimation = useAnimation();

  useEffect(() => {
    const initialActive = tabs.findIndex((child) => child.props.name === initial);

    activeActions.set(initialActive || 0);
    focusActions.set(initialActive || 0);
  }, []);

  const activeChild: ReactElement = tabs[activeIndex];
  const focusChild: ReactElement = tabs[focusIndex];

  function handleTabListKeyPress(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') focusActions.increase();
    else if (event.key === 'ArrowLeft') focusActions.decrease();
    else if (event.key === 'End') focusActions.set(tabs.length - 1);
    else if (event.key === 'Home') focusActions.set(0);
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
        {tabs.map((child, index) => (
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
                  x: ref.offsetLeft
                });
              }

              if (ref && index === focusIndex) {
                ref.scrollIntoView();
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
    <Wrap>
      {renderTabList()}
      <BorderBottom />
      <TabPanel role="tabpanel">
        {activeChild.props.children}
      </TabPanel>
    </Wrap>
  );
}


export { Tab };
export default Tabs;
