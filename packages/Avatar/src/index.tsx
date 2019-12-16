
import React, { HTMLAttributes } from 'react';
import {
  LayoutProps,
  SpaceProps,
  ColorProps,
  FontSizeProps
} from 'styled-system';

import { AvatarBase } from './styled';
import { getInitials, getInitialFontSize } from './helpers';

type ReactDiv = Omit<HTMLAttributes<HTMLDivElement>, 'color'>;

type BaseProps =
  & ReactDiv
  & LayoutProps
  & SpaceProps
  & ColorProps
  & FontSizeProps;

export interface Props extends BaseProps {
  name: string
  src?: string
  size?: number
  sizeLimitOneCharacter?: number
}

export function Avatar({
  name,
  src,
  size = 40,
  sizeLimitOneCharacter = 24,
  ...props
}: Props) {
  function renderImage() {
    return src && (
      <img src={src} alt="User Avatar" />
    );
  }

  function renderInitial() {
    if (size > sizeLimitOneCharacter) {
      return !src && (
        getInitials(name)
      );
    }

    return getInitials(name)[0];
  }

  const fontSize = getInitialFontSize(size, sizeLimitOneCharacter);

  return (
    <AvatarBase
      color="white"
      backgroundColor="default"
      size={size}
      fontSize={fontSize}
      {...props}
    >
      {renderInitial()}
      {renderImage()}
    </AvatarBase>
  );
}


export default Avatar;
