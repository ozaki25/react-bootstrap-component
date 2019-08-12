import React from 'react';
import styled, { css } from 'styled-components';

const panelDefault = css`
  border-color: #ddd;
`;

const panelPrimary = css`
  border-color: #337ab7;
`;

const StyledPanel = styled.div`
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  ${({ type }) => (type === 'primary' ? panelPrimary : panelDefault)}
`;

const panelHeadingDefault = css`
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;
`;

const panelHeadingPrimary = css`
  color: #fff;
  background-color: #337ab7;
  border-color: #337ab7;
`;

const PanelHeading = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  ${({ type }) =>
    type === 'primary' ? panelHeadingPrimary : panelHeadingDefault}
`;

const PanelTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
`;

const PanelBody = styled.div`
  padding: 15px;
`;

function Panel({ title, children, primary, withTable }) {
  const type = primary ? 'primary' : 'default';
  return (
    <StyledPanel type={type}>
      <PanelHeading type={type}>
        <PanelTitle>{title}</PanelTitle>
      </PanelHeading>
      {withTable ? children : <PanelBody>{children}</PanelBody>}
    </StyledPanel>
  );
}

Panel.displayName = 'Panel';

export default Panel;
