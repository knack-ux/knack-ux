export function calcPosition(
  placement: string,
  contentRect: DOMRect,
  triggerRect: DOMRect
) {
  const {
    width: contentWidth,
    height: contentHeight
  } = contentRect;
  const {
    width: triggerWidth,
    height: triggerHeight
  } = triggerRect;
  let { x, y } = triggerRect;

  if (placement.includes('top')) y -= 8 + contentHeight;
  else if (placement.includes('bottom')) y = y + 8 + triggerHeight;

  if (placement.includes('center')) x -= (contentWidth - triggerWidth) / 2;
  else if (placement.includes('right')) x -= contentWidth - triggerWidth;

  return { x, y };
}
