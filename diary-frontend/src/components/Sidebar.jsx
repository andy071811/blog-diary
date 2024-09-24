import { NavLink } from "react-router-dom"
import styled from "styled-components"

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-around;
    height: 100vh;
    border-right: 1px solid black;

    @media (max-width: 768px) {
        display: none;
    }
`;

const StyledNavLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    height: 3rem;
    border-radius: 10px;
    color: #555555;
    text-decoration: none;
    transition: 0.4s;

    &:hover,
    &.active:link,
    &.active:visited {
        color: black;
        background-color: #7575b9;
    }
`;

function Sidebar() {
    return (
        <Nav>
            <StyledNavLink to='/my-posts'>My Posts</StyledNavLink>
            <StyledNavLink to='/my-photos'>My Photos</StyledNavLink>
            <StyledNavLink to='/settings'>Settings</StyledNavLink>
            <StyledNavLink to='/login'>Log Out</StyledNavLink>
        </Nav>
    )
}

export default Sidebar
