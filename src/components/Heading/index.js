import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-size: 36px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 500;
  line-height: 1.1;
`;

const StyledH2 = styled.h2`
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 500;
  line-height: 1.1;
`;

const StyledH3 = styled.h3`
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 500;
  line-height: 1.1;
`;

const StyledH4 = styled.h4`
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 500;
  line-height: 1.1;
`;

const StyledH5 = styled.h5`
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 500;
  line-height: 1.1;
`;

const StyledH6 = styled.h6`
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 500;
  line-height: 1.1;
`;

const StyledSubHeading = styled.small`
  font-size: 65%;
  font-weight: 400;
  line-height: 1;
  color: #777;
`;

function Heading({ level, children, ...props }) {
  const HeadingComponent =
    level === '1'
      ? StyledH1
      : level === '2'
      ? StyledH2
      : level === '3'
      ? StyledH3
      : level === '4'
      ? StyledH4
      : level === '5'
      ? StyledH5
      : level === '6'
      ? StyledH6
      : StyledH1;
  return <HeadingComponent {...props}>{children}</HeadingComponent>;
}

export function SubHeading(props) {
  return <StyledSubHeading {...props} />;
}

Heading.displayName = 'Heading';

SubHeading.displayName = 'SubHeading';

export default Heading;
