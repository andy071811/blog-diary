import { useContext, useState } from "react";
import Button from "./Button"
import styled from "styled-components";
import { BlogContext } from "../contexts/BlogPostContext";
import toast from "react-hot-toast";
import axios from "axios";
import { fetchAllPosts } from "../../hooks/useFetchAllPosts";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    background-color: blanchedalmond;
    border: 2px solid black;
    width: 70vh;
`;

const Textarea = styled.textarea`
    resize: none;
    height: 40vh;
`;

const Span = styled.span`
    display: flex;
    justify-content: center;
`;

function NewPostForm() {

    const { setShowForm, setBlogPosts } = useContext(BlogContext);
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState(null);
    const [titleContent, setTitleContent] = useState({
        title: '',
        content: ''
    });

    const handleChange = e => {
        setTitleContent({
            ...titleContent,
            [e.target.name]: e.target.value
        })
    };

    const handleInputImage = e => {
        setImage(e.target.files[0])
    };

    const handleAddPost = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('title', titleContent.title);
        formData.append('content', titleContent.content);
        if (image) formData.append('image', image);

        if (!titleContent.title || !titleContent.content) return toast.error("Please enter a title and a message");
        console.log(formData)
        
        try {
            setIsLoading(true)
            const res = await axios.post('http://localhost:3000/api/my-posts', formData, {
                headers: { "Content-Type": "multipart/form-data"}
            });
            console.log(formData)
            if (res.status === 201) toast.success("Success! Post posted!");
            fetchAllPosts(setBlogPosts);

            
            setIsLoading(false);
            setShowForm(prev => !prev);
        } catch(err) {
            if (err.response || err.request) toast.error("Unable to upload new post, try again later");
            console.log(formData)
            setIsLoading(false);
        }
    };
    
    return (
        <Form onSubmit={handleAddPost}>
            <input
                type="text"
                name="title"
                onChange={handleChange}
                placeholder="The title of your blog post"
                disabled={isLoading}
            />
            <Textarea
                name="content"
                onChange={handleChange}
                placeholder="What are you thinking about..."
                disabled={isLoading}
            />
            <input
                type="file"
                name="image" accept="image/*"
                onChange={handleInputImage}
                disabled={isLoading}
            />
            <Span>
                <Button>Submit</Button>
                <Button
                    handleClick={() => setShowForm(prev => !prev)}
                >Cancel</Button>
            </Span>
            
        </Form>
    )
}

export default NewPostForm
