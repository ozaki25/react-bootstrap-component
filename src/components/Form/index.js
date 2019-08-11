import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import FormLabel from '../FormLabel';
import TextInput from '../TextInput';

const StyledForm = styled.form``;

const StyledFormItem = styled.div`
  margin-bottom: 15px;
`;

const ButtonContainer = styled.div`
  float: ${({ buttonRight }) => (buttonRight ? 'right' : 'left')};
`;

function FormItem({ label, ...props }) {
  return (
    <StyledFormItem>
      <FormLabel>{label}</FormLabel>
      <TextInput {...props} />
    </StyledFormItem>
  );
}

function Form({ items, onSubmit, buttonProps, horizontal, buttonRight }) {
  return (
    <StyledForm onSubmit={onSubmit}>
      {items.map(props => (
        <FormItem {...props} />
      ))}
      <ButtonContainer buttonRight={buttonRight}>
        <Button {...buttonProps} type="input" />
      </ButtonContainer>
    </StyledForm>
  );
}

Form.displayName = 'Form';

export default Form;
