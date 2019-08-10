import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.428571429;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075));
  box-sizing: border-box;
   
  &[disabled],
  &[readonly],
  fieldset[disabled] & {
    background-color: #777;
    opacity: 1;
  }

  &[disabled],
  fieldset[disabled] & {
    cursor: not-allowed;
  }
`;

function TextInput(props) {
  return <StyledInput {...props} />;
}

TextInput.displayName = 'TextInput';

export default TextInput;
