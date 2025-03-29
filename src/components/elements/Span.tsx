import React from "react";
import styled from "@emotion/styled";

interface SpanProps {
  style?: string;
  children: string;
}

const TextStyled = styled.span<{ customStyle?: string }>`
  min-width: max-content;
  ${({ customStyle }) => customStyle}
`;

const Span: React.FC<SpanProps> = ({ style, children, ...rest }) => {
  return (
    <TextStyled {...rest} customStyle={style}>
      {children}
    </TextStyled>
  );
};

export default Span;
