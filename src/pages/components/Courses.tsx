import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const Courses: React.FC = () => {
  return (
    <div>
      <HeaderContainer>
        <Nav>
          <StyledNavLink to="material">Material</StyledNavLink>
          <StyledNavLink to="students">Students</StyledNavLink>
        </Nav>
      </HeaderContainer>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Courses;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f0f0f0;
`;

const Nav = styled.nav`
  display: flex;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  margin-right: 20px;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }

  &.active {
    color: #007bff;
    border-bottom: 2px solid #007bff;
  }
`;
