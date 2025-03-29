import { ReactNode } from "react";
import styled from "@emotion/styled";

import MainHeader from "./header/MainHeader";
import MainSidebar from "./sidebar/MainSidebar";

import { Toaster } from "react-hot-toast";
import MainFooter from "./footer/MainFooter";

interface ILayoutIndex {
  children: ReactNode;
  pathname: string;
}

const LayoutIndex = ({ children, pathname }: ILayoutIndex) => {
  return (
    <LayoutContainer id="LayoutContainer">
      <MainHeader />
      <SubLayoutContainer>
        <MainSidebar pathname={pathname} />
        <BodyContainer>
          <MainView>{children}</MainView>
          <MainFooter />
        </BodyContainer>
      </SubLayoutContainer>

      <Toaster position="bottom-right" />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const SubLayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  margin-top: 4rem;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;

  width: 100%;
  margin-left: 12rem;
`;

const MainView = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: var(--w);
  min-height: calc(100vh - 12rem);
`;

export default LayoutIndex;
