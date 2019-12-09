import React from 'react';
import { SpaceProps } from 'styled-system';

import {
  Base,
  Container,
  ErrorText,
  Label,
  Wrap
} from './styled';

type ReactDiv = React.HTMLAttributes<HTMLDivElement>;
type ReactInput = React.InputHTMLAttributes<HTMLInputElement>;

interface Props extends ReactDiv, SpaceProps {
  id: string
  label: string
  value: string
  error?: string
  disabled?: boolean
  inputProps?: ReactInput
  onChange: () => void
}

function Input({
  id,
  label,
  value,
  error,
  disabled,
  inputProps,
  onChange,
  ...props
}: Props) {
  function renderIcon() {
    if (error) {
      return (
        <i className="material-icons-round">
          error
        </i>
      );
    }
    return null;
  }

  function renderError() {
    return (
      <ErrorText>
        {error}
      </ErrorText>
    );
  }

  return (
    <Wrap {...props}>
      <Label
        htmlFor={id}
        disabled={disabled}
      >
        {label}
      </Label>
      <Container>
        <Base
          id={id}
          value={value}
          onChange={onChange}
          disabled={disabled}
          error={error}
          {...inputProps}
        />
        {renderIcon()}
      </Container>
      {error && renderError()}
    </Wrap>
  );
}

export { Props };
export default Input;
