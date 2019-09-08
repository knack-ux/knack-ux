import React from 'react';

import {
  Base,
  Container,
  ErrorIcon,
  ErrorText,
  Label,
  WarningIcon,
  WarningText,
  Wrap
} from './styled';

type ReactInput = React.InputHTMLAttributes<HTMLInputElement>;

interface Props extends ReactInput {
  id: string
  label: string
  warning?: string
  error?: string
  fluid?: boolean
}

function Input({
  id,
  label,
  warning,
  error,
  disabled,
  ...props
}: Props) {
  function renderIcon() {
    if (warning) return <WarningIcon />;
    if (error) return <ErrorIcon />;
    return null;
  }

  function renderWarning() {
    return (
      <WarningText>
        {warning}
      </WarningText>
    );
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
          warning={warning}
          error={error}
          disabled={disabled}
          {...props}
        />
        {renderIcon()}
      </Container>
      {warning && renderWarning()}
      {error && renderError()}
    </Wrap>
  );
}

export { Props };
export default Input;
