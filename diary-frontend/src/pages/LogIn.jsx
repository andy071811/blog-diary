import { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../hooks/useUsers";
import Modal from "../components/Modal";
import SignUpForm from "../components/SignUpForm";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px;
    padding: 20px 20px 0px 20px;
    background-color: blanchedalmond;
    box-shadow: 0px 0px 20px;
    width: 93%;
`;

const Input = styled.input`
    width: 30%;
    border: none;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
`;

function LogIn() {

    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });

    const handleChange = e => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(loginData, navigate);
    }

    const toggleModal = () => {
        setOpenModal(prev => !prev);
    }

    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleChange}
                placeholder="Enter username"
            />
            <Input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="Enter password"
                />
            <Button>Log In</Button>
            <Button handleClick={toggleModal}>No account? Sign up here</Button>
        </Form>
            {openModal && (
                <Modal>
                    <SignUpForm handleToggle={toggleModal} />
                </Modal>
            )}
        </>
    )
}

export default LogIn
