export function getInitials(name: string) {
  const nameParts = name.split(' ');
  let initials = nameParts[0].substring(0, 1).toUpperCase();
  if (nameParts.length > 1) {
    initials += nameParts[nameParts.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
}


export function getInitialFontSize(
  size: number,
  sizeLimitOneCharacter: number
) {
  if (size <= sizeLimitOneCharacter) {
    return Math.ceil(size / 2.2);
  }

  return Math.ceil(size / 2.6);
}
