import React, { ReactNode } from "react";
import styled from "@emotion/styled";

interface DivProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "style"> {
  children: string | ReactNode;
  style?: string;
}

const Div: React.FC<DivProps> = ({ style, children, ...rest }) => {
  return (
    <DivStyled styleText={style} {...rest}>
      {children}
    </DivStyled>
  );
};

export default Div;

const DivStyled = styled.div<{ styleText?: string }>`
  height: inherit;
  ${({ styleText }) => styleText || ""}
`;
