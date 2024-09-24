import axios from "axios";

export const fetchAllPosts = async (setBlogPosts) => {
    try {
        const { data } = await axios.get(`http://localhost:3000/api/my-posts`);
        const sortedData = data.posts.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
        setBlogPosts(sortedData);
    } catch(err) {
        console.log(err);
    }
};