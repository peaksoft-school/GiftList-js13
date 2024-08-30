import { FC } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../sideBar/SideBar";
import SearchHeader from "../../widgets/landimg/searchHeader/SearchHeader";
import styled from "styled-components";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import { DataUserBreadcrumbs } from "../../app/router/userRouter";

const UserLayout: FC = () => {
  return (
    <Container>
      <SideBarWrapper>
        <SideBar />
      </SideBarWrapper>

      <ContentWrapper>
        <SearchHeaderWrapper>
          <SearchHeader />

          <BreadcrumbsWrapper>
            <Breadcrumbs data={DataUserBreadcrumbs} />
          </BreadcrumbsWrapper>
        </SearchHeaderWrapper>

        <Pages>
          <Outlet />
        </Pages>
      </ContentWrapper>
    </Container>
  );
};

export default UserLayout;

const Container = styled.div`
  height: 100vh;
`;

const SideBarWrapper = styled.div`
  position: fixed;
  height: 100%;
  overflow-y: auto;
`;

const ContentWrapper = styled.div`
  margin-left: 310px;
  max-width: 80vw;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const SearchHeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 80%;
  z-index: 100;
`;

const BreadcrumbsWrapper = styled.div`
  margin: 20px;
`;

const Pages = styled.div`
  margin-top: 170px;
  padding: 0 20px;
  overflow-y: auto;
  height: calc(100vh - 100px);
  width: 100%;
`;
