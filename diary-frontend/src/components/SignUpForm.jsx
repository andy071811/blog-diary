import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signUp } from "../../hooks/useUsers";
import toast from "react-hot-toast";
import Button from "./Button";


const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 20px 20px 0px 20px;
    background-color: blanchedalmond;
    box-shadow: 0px 0px 20px;
    width: 50vh;
`;

const Input = styled.input`
    border: none;
    border-radius: 5px;
    padding: 5px;
`;

const Span = styled.span`
    display: flex;
    justify-content: center;
`;

function SignUpForm({ handleToggle }) {

    const navigate = useNavigate();

    const [signUpData, setSignUpData] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = e => {
        setSignUpData({
           ...signUpData,
            [e.target.name]: e.target.value 
        });
    }

    const handleSignUp = e => {
        e.preventDefault();
        if (!signUpData.username || !signUpData.password || !signUpData.confirmPassword) return toast.error("Please complete all fields");
        if (signUpData.password != signUpData.confirmPassword) return toast.error("Passwords do not match!");
        signUp(signUpData, navigate);
    }

    return (
        <Form onSubmit={handleSignUp}>
            <h2>Sign Up</h2>
            <Input
                type="text"
                name="username"
                value={signUpData.username}
                onChange={handleChange}
                placeholder="Enter username"
            />
            <Input
                type="password"
                name="password"
                value={signUpData.password}
                onChange={handleChange}
                placeholder="Enter password"
            />
            <Input
                type="password"
                name="confirmPassword"
                value={signUpData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
            />
            <Span>
                <Button>Sign Up</Button>
                <Button handleClick={handleToggle}>Cancel</Button>
            </Span>
        </Form>
    )
}

export default SignUpForm
