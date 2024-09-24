import { useContext } from "react"
import { BlogContext } from "../contexts/BlogPostContext"
import BlogImage from "../components/BlogImage";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 10px 0;
    max-width: 99%;
    gap: 10px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

function MyPhotos() {

    const { blogPosts } = useContext(BlogContext);

    const filteredPosts = blogPosts.filter(post => post.images.length != 0);
    const uploadedImages = filteredPosts.map(post => <BlogImage post={post} key={post._id} />);

    return (
        <StyledDiv>
            {uploadedImages}
        </StyledDiv>
    )
}

export default MyPhotos
