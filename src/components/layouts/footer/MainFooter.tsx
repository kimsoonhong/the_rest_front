import Div from "@/components/elements/Div";
import { hoverEffect } from "@/styles/styled";
import styled from "@emotion/styled";

export default function MainFooter() {
  return (
    <MainFooterContainer>
      <Div
        style="display: flex;
        flex-direction: column;
        gap: 0.25rem;
        justify-content: center;
        "
      >
        <Span>© Copyright 2025. All Rights Reserved by shong.</Span>
        <Span>shong1332@naver.com</Span>
        <Span>https://github.com/kimsoonhong/</Span>
      </Div>
      <Div
        style="display: flex;
        flex-direction: row;
        gap: 0.25rem;
        justify-content: center;
        padding-top: 1.25rem;
        gap: 1rem;
        width: 8rem;
        "
      >
        <Span style={{ color: "var(--gn3)" }}>Stacks</Span>
        <Span style={{ color: "var(--gn3)" }}>Terms of Use</Span>
      </Div>
    </MainFooterContainer>
  );
}

const MainFooterContainer = styled.footer`
  height: 8rem;
  padding: 0 4rem;
  min-height: 8rem;
  display: flex;
  gap: 4rem;
  align-items: center;
  background-color: var(--w);
  justify-content: space-between;
  border-top: 1px solid var(--gy1);
`;

const Span = styled.span`
  font-size: 12px;
  cursor: pointer;
  height: min-content;
  ${hoverEffect}
`;
