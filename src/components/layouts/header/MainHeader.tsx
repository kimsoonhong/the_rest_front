import Div from "@/components/elements/Div";
import Span from "@/components/elements/span";
import { hoverEffect } from "@/styles/styled";

import styled from "@emotion/styled";

export default function Header() {
  return (
    <HeaderContainer>
      <Div
        style="height: inherit;
        -webkit-box-align: center;
        width: 12rem;
        text-align: center;
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;"
      >
        <Span
          style="width: 12rem;  
          font-size: 24px;
          color: var(--gn3);
          font-family: serif;
          font-weight: 800;"
        >
          ㅅ ㅜ ㅣ ㅁ
        </Span>
        <Span
          style="font-size: 12px;
          font-family: fantasy;
          color: var(--gn3);"
        >
          for Rest
        </Span>
      </Div>
      <Div
        style="width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;"
      >
        <Nav>
          <A>Development</A>
          <A>Book Review</A>
          <A>Diary</A>
        </Nav>
        <Div style="width: 12rem;">사용자</Div>
      </Div>
    </HeaderContainer>
  );
}
const HeaderContainer = styled.div`
  background-color: var(--w);
  height: 4rem;
  min-height: 4rem;
  position: fixed;
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid var(--gy1);
`;

const Nav = styled.nav`
  flex: 1;

  width: 100%;
  display: flex;
  flex-direction: row;
  padding-left: 4rem;
  gap: 4rem;
`;

const A = styled.a`
  text-align: center;
  display: flex;
  align-items: center;
  //font-family: fantasy;
  font-size: 18px;
  min-width: fit-content;
  ${hoverEffect}
`;
