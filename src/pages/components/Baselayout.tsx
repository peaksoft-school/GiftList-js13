import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import Breadcrumbs from "../../shared/breadcrumbs/Breadcrumbs";

interface PathNamesMap {
  [key: string]: string;
}

const pathNamesMap: PathNamesMap = {
  courses: "Курсы",
  anouncements: "Объявление",
  material: "Материал",
  students: "Студент",
  all: "Все",
  myGroup: "Моя группа",
};

const BaseLayout: React.FC = () => {
  return (
    <Container>
      <Nav>
        <StyledNavLink to="courses">Courses</StyledNavLink>
        <StyledNavLink to="anouncements">Anouncements</StyledNavLink>
      </Nav>
      <Content>
        <Breadcrumbs pathNamesMap={pathNamesMap} />
        <Outlet />
      </Content>
    </Container>
  );
};

export default BaseLayout;

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #343a40;
  padding: 20px;
`;

const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #495057;
  }

  &.active {
    background-color: #007bff;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: #f8f9fa;
`;
