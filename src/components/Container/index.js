import React from 'react';
import styled, { css } from 'styled-components';

const baseContainer = css`
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
`;

const StyledContainer = styled.div`
  ${baseContainer}
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

const StyledContainerFluid = styled.div`
  ${baseContainer}
  width: auto;
`;

function Container({ fluid, ...props }) {
  return fluid ? (
    <StyledContainerFluid {...props} />
  ) : (
    <StyledContainer {...props} />
  );
}

Container.displayName = 'Container';

export default Container;
