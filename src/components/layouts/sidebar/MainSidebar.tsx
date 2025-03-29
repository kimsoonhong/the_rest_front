import { hoverEffect } from "@/styles/styled";
import styled from "@emotion/styled";

interface IMainSidebar {
  pathname: string;
}

export default function MainSidebar({ pathname }: IMainSidebar) {
  console.log(pathname);
  return (
    <MainSidebarContainer>
      <ItemDiv>JAVA</ItemDiv>
      <ItemDiv>JS</ItemDiv>
      <ItemDiv>CSS</ItemDiv>
      <ItemDiv>HTML</ItemDiv>
      <ItemDiv>REACT</ItemDiv>
      <ItemDiv>CS</ItemDiv>
      <ItemDiv>SOMETHING</ItemDiv>
    </MainSidebarContainer>
  );
}

const MainSidebarContainer = styled.div`
  background-color: var(--w);
  position: fixed;
  height: 100%;
  padding: 1rem;
  display: flex;
  width: 12rem;
  flex-direction: column;
  gap: 1rem;

  overflow: scroll;
  height: -webkit-fill-available;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ItemDiv = styled.div`
  gap: 1.5rem;
  cursor: pointer;
  text-align: center;
  ${hoverEffect}
`;
