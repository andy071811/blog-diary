import styled from "styled-components"
import Button from "./Button";
import { NavLink } from "react-router-dom";

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    margin-right: auto;

    @media (min-width: 769px) {
        display: none;
    }
`;

const DropDownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
`;

const DropDownLi = styled.li`
  display: inline-block;

  &:hover ${DropDownContent} {
    display: block;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: center;

  &:hover {
    background-color: #e1e0e0;
  }
`;

function DropDownMenu() {

    return (
        <StyledUl>
            <DropDownLi>
                <Button>Navigate</Button>
                <DropDownContent>
                    <StyledNavLink to='/my-posts'>My Posts</StyledNavLink>
                    <StyledNavLink to='/my-photos'>My Photos</StyledNavLink>
                    <StyledNavLink to='/settings'>Settings</StyledNavLink>
                    <StyledNavLink to='/login'>Log Out</StyledNavLink>
                </DropDownContent>
            </DropDownLi>
        </StyledUl>
    )
}

export default DropDownMenu
