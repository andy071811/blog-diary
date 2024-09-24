import { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const Img = styled.img`
    width: 100%;
    height: 100%;
    margin: 0 10px;
    align-self: center;
    transition: 0.4s;

    &:hover {
        box-shadow: 0px 0px 20px;
        cursor: pointer;
    }
`;

const EnlargedImg = styled.img`
    height: 95vh;
    cursor: pointer;
`;

function BlogImage({ post }) {

    const { images } = post;
    const [toggleModal, setToggleModal] = useState(false);

    const handleToggleModal = () => {
        setToggleModal(prev => !prev)
    }

    return (
        <>
            <Img src={`/images/${images}`} alt="uploaded photo" onClick={handleToggleModal}/>
            {toggleModal && (
                <Modal onClick={handleToggleModal}>
                    <EnlargedImg src={`/images/${images}`} alt="uploaded photo" onClick={handleToggleModal} />
                </Modal>
            )}
        </>
    )
}

export default BlogImage
