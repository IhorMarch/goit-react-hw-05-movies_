import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';




export const Wrapper = styled.div`


  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
const Header = styled.header`
  padding: 0 15px;

    font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 800;
  color: black
`

const List = styled.ul`
  display: flex;

  gap: 20px;
`
export const Layout = () => {
  return (
    <Wrapper>
      <Header>
        <List>
          <li>
            <StyledLink to="/" >
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/movies" end>
              Movies
            </StyledLink>
          </li>
        </List>
      </Header>
<Suspense fallback={<Loader />}>
      <Outlet />
 </Suspense>
    </Wrapper>
  );
};