
import React from 'react';
import styled from 'styled-components';
import {
  layout, space, color,
  LayoutProps, SpaceProps, ColorProps
} from 'styled-system';

export function generateInitials(name: string) {
  const nameParts = name.split(' ');
  let initials = nameParts[0].substring(0, 1).toUpperCase();

  if (nameParts.length > 1) {
    initials += nameParts[nameParts.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
}

type ReactDiv = Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>;

export interface Props extends ReactDiv, LayoutProps, SpaceProps, ColorProps {
  name: string
  src?: string
}

export function Avatar({
  name,
  src,
  ...props
}: Props) {
  function renderImage() {
    return src && (
      <img src={src} alt="User Avatar" />
    );
  }

  function renderInitial() {
    return !src && (
      generateInitials(name)
    );
  }

  return (
    <AvatarBase
      color="white"
      backgroundColor="default"
      {...props}
    >
      {renderInitial()}
      {renderImage()}
    </AvatarBase>
  );
}

const AvatarBase: React.ComponentType<Omit<Props, 'name'>> = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  
  font-size: 18px;
  font-family: "Cabin";
  font-weight: 600;

  overflow: hidden;

  ${layout}
  ${space}
  ${color}
`;

export default Avatar;
