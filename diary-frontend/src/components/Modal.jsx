import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  //background-color: var(--color-grey-0);
  //border-radius: var(--border-radius-lg);
  //box-shadow: var(--shadow-lg);
  //padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  //background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

function Modal({ children }) {

  // FUNCTION TO EXIT MODAL WITH ESC KEY

    return (
        <Overlay>
            <StyledModal>
                {children}
            </StyledModal>
        </Overlay>
    )
}

export default Modal
