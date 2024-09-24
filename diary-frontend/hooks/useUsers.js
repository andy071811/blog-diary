import axios from "axios";
import toast from "react-hot-toast";

export const signIn = async (loginData, navigate) => {
    
    try {
        const res = await axios.post('http://localhost:3000/api/login', loginData);
        console.log(res);

        if (res.status === 200) {
            toast.success("Login successful");
            return navigate('/my-posts', { replace: true });
        };
    } catch(err) {
        if (err.response) return toast.error("There was an issue signing in, please check your username and password and try again");
        if (err.request) return toast.error("There was a network error, if the problem persists please try again later");
    }
}

export const signUp = async (newUser, navigate) => {

    try {
        const res = await axios.post('http://localhost:3000/api/user/signup', newUser);

        if (res.status === 201) {
            toast.success("Sign up successful");
            return navigate('/my-posts', { replace: true }); 
        }
    } catch(err) {
        console.log(err)
        if (err.response) return toast.error("That username already exists, please use password to log in or choose another username");
        if (err.request) return toast.error("There was a network error, if the problem persists please try again later");
    };
}