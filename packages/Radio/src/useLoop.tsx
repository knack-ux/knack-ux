import { useState } from 'react';

function useArrayLoop(
  array: any[],
  startIndex: number
) {
  const [index, setIndex] = useState(startIndex);

  function proceed() {
    return (
      index !== 0
        ? index - 1
        : array.length - 1
    );
  }

  function goBack() {
    return (
      index !== array.length - 1
        ? index + 1
        : 0
    );
  }

  return [index, setIndex, proceed, goBack];
}

export default useArrayLoop;
