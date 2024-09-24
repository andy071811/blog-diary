/* eslint-disable react/prop-types */
import styled from "styled-components"

const StyledButton = styled.button`
    border: none;
    border-radius: 5px;
    background-color: #56569a;
    //width: 40vh;
    margin: 10px;
    padding: 10px;
    transition: 0.5s;

    &:hover {
        background-color: #7575b9;
        cursor: pointer;
    }
    
`;

function Button({ children, handleClick }) {
    return (
        <StyledButton onClick={handleClick}>
            {children}
        </StyledButton>
    )
}

export default Button
