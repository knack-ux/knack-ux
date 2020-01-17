import { useState } from 'react';

export function useNumberLoop(initial: number, length: number) {
  const [active, set] = useState(initial);

  function increase(by: number = 1) {
    if (active + by > length - 1) set(active + by - length);
    else set(active + by);
  }

  function decrease(by: number = 1) {
    if (active - by < 0) set(length - by + active);
    else set(active - by);
  }

  return [
    active,
    { set, increase, decrease }
  ] as const;
}
