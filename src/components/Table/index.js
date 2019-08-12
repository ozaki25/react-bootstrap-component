import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  max-width: 100%;
  margin-bottom: ${({ withPanel }) => (withPanel ? 0 : '20px')};
  border-collapse: collapse;
  border-spacing: 0;
`;

const StyledTH = styled.th`
  vertical-align: bottom;
  border-bottom: 2px solid #ddd;
  padding: 8px;
  line-height: 1.42857143;
  text-align: left;
`;

const StyledTD = styled.td`
  padding: 8px;
  line-height: 1.42857143;
  vertical-align: top;
  border-top: 1px solid #ddd;
`;

function Table({ withPanel, ...props }) {
  return <StyledTable withPanel {...props} />;
}

export function TableHead(props) {
  return <StyledTH {...props} />;
}

export function TableData(props) {
  return <StyledTD {...props} />;
}

Table.displayName = 'Table';

TableHead.displayName = 'TableHead';

TableData.displayName = 'TableData';

export default Table;
