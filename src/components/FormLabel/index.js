import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
`;

function FormLabel(props) {
  return <StyledLabel {...props} />;
}

FormLabel.displayName = 'FormLabel';

export default FormLabel;
