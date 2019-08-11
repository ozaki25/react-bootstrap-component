import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  margin: 0;
  padding: 6px 12px;
  overflow: visible;
  font-weight: normal;
  font-size: 14px;
  line-height: 1.42857143;
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    outline: 0;
  }
  &:focus,
  &:active {
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  }
  &:focus,
  &:hover,
  &:active {
    color: #333;
    text-decoration: none;
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  }
  &:disabled {
    box-shadow: none;
    cursor: not-allowed;
    opacity: 0.65;
    filter: alpha(opacity=65);
    pointer-events: none;
  }
`;

const NomalButton = styled(StyledButton)`
  color: #333;
  background-color: #fff;
  border-color: #ccc;
  &:focus,
  &.focus {
    color: #333;
    background-color: #e5e5e5;
    border-color: #999;
  }
  &:hover {
    color: #333;
    background-color: #e5e5e5;
    border-color: #b3b3b3;
  }
  &:active,
  &.active,
  .open > &.dropdown-toggle {
    color: #333;
    background-color: #e5e5e5;
    background-image: none;
    border-color: #b3b3b3;

    &:hover,
    &:focus,
    &.focus {
      color: #333;
      background-color: #d3d3d3;
      border-color: #999;
    }
  }
  &.disabled,
  &[disabled],
  fieldset[disabled] & {
    &:hover,
    &:focus,
    &.focus {
      background-color: #fff;
      border-color: #ccc;
    }
  }

  .badge {
    color: #fff;
    background-color: #333;
  }
`;
const PrimaryButton = styled(StyledButton)`
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;

  &:focus,
  &.focus {
    color: #fff;
    background-color: #2d6da4;
    border-color: #22517b;
  }
  &:hover {
    color: #fff;
    background-color: #2d6da4;
    border-color: #285f90;
  }
  &:active,
  &.active,
  .open > &.dropdown-toggle {
    color: #fff;
    background-color: #2d6da4;
    background-image: none;
    border-color: #285f90;

    &:hover,
    &:focus,
    &.focus {
      color: #fff;
      background-color: #2a6597;
      border-color: #22517b;
    }
  }
  &.disabled,
  &[disabled],
  fieldset[disabled] & {
    &:hover,
    &:focus,
    &.focus {
      background-color: #337ab7;
      border-color: #2e6da4;
    }
  }

  .badge {
    color: #337ab7;
    background-color: #fff;
  }
`;

function Button({ label, type, onClick, primary, disabled, ...props }) {
  const ButtonComponent = primary ? PrimaryButton : NomalButton;
  const isInput = type === 'input';
  return (
    <ButtonComponent
      onClick={onClick}
      disabled={disabled}
      as={type}
      type={isInput ? 'submit' : 'button'}
      value={isInput ? label : null}
      {...props}
    >
      {isInput ? null : label}
    </ButtonComponent>
  );
}

Button.displayName = 'Button';

export default Button;
