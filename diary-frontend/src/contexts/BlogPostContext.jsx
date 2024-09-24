import axios from "axios";
import { createContext, useEffect, useState } from "react"
import toast from "react-hot-toast";
import { fetchAllPosts } from "../../hooks/useFetchAllPosts";

export const BlogContext = createContext();


function BlogPostContext({ children }) {

    const [blogPosts, setBlogPosts] = useState([]);
    const [blogImages, setBlogImages] = useState([]);
    const [showForm, setShowForm] = useState(false);
    
    useEffect(() => {
        fetchAllPosts(setBlogPosts);
    }, []);

    const deletePost = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3000/api/my-posts/${id}`);
            if (res.status === 204) toast.success("Post deleted");
            fetchAllPosts(setBlogPosts);

        } catch(err) {
            if (err.response || err.request) return toast.error("Unable to delete post, try again later");
        }   
    };

    const value = {
        blogPosts,
        setBlogPosts,
        setShowForm,
        showForm,
        deletePost,
    };

    return (
        <BlogContext.Provider value={value}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogPostContext
