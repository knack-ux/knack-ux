
import React, { HTMLAttributes } from 'react';
import {
  LayoutProps,
  SpaceProps,
  ColorProps,
  FontSizeProps
} from 'styled-system';
import Icon from '@knack-ux/icon';

import { AvatarBase } from './styled';
import { getInitials, getInitialFontSize, getIconFontSize } from './helpers';

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
  icon?: string
  size?: number
  sizeLimitOneCharacter?: number
}

export function Avatar({
  name,
  src,
  icon,
  size = 40,
  sizeLimitOneCharacter = 24,
  ...props
}: Props) {
  function renderIcon() {
    return icon && (
      <Icon
        icon={icon}
        fontSize={getIconFontSize(size)}
      />
    );
  }

  function renderImage() {
    return src && (
      <img
        src={src}
        alt={name}
      />
    );
  }

  function renderInitial() {
    if (size > sizeLimitOneCharacter) {
      return !src && !icon && (
        getInitials(name)
      );
    }

    return getInitials(name)[0];
  }

  const fontSize = getInitialFontSize(size, sizeLimitOneCharacter);

  return (
    <AvatarBase
      aria-label={name}
      backgroundColor="info"
      fontSize={fontSize}
      color="white"
      size={size}
      {...props}
    >
      {renderIcon()}
      {renderInitial()}
      {renderImage()}
    </AvatarBase>
  );
}


export default Avatar;
