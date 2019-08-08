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
  ${({ nomal }) =>
    nomal &&
    `
    color: #333;
    background-color: #fff;
    border-color: #ccc;
    &:focus,
    &.focus {
      color: #333;
      background-color: darken(#fff, 10%);
      border-color: darken(#ccc, 25%);
    }
    &:hover {
      color: #333;
      background-color: darken(#fff, 10%);
      border-color: darken(#ccc, 12%);
    }
    &:active,
    &.active,
    .open > &.dropdown-toggle {
      color: #333;
      background-color: darken(#fff, 10%);
      background-image: none;
      border-color: darken(#ccc, 12%);

      &:hover,
      &:focus,
      &.focus {
        color: #333;
        background-color: darken(#fff, 17%);
        border-color: darken(#ccc, 25%);
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
  `}
  ${({ primary }) =>
    primary &&
    `
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;

    &:focus,
    &.focus {
      color: #fff;
      background-color: darken(#337ab7, 10%);
      border-color: darken(#2e6da4, 25%);
    }
    &:hover {
      color: #fff;
      background-color: darken(#337ab7, 10%);
      border-color: darken(#2e6da4, 12%);
    }
    &:active,
    &.active,
    .open > &.dropdown-toggle {
      color: #fff;
      background-color: darken(#337ab7, 10%);
      background-image: none;
      border-color: darken(#2e6da4, 12%);

      &:hover,
      &:focus,
      &.focus {
        color: #fff;
        background-color: darken(#337ab7, 17%);
        border-color: darken(#2e6da4, 25%);
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
  `}
`;

function Button({ children, onClick, nomal, primary, disabled }) {
  return (
    <StyledButton
      onClick={onClick}
      nomal={nomal}
      primary={primary}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
}

Button.displayName = 'Button';

export default Button;
