import { useContext } from "react"
import BlogPost from "../components/BlogPost";
import Button from "../components/Button";
import styled from "styled-components";
import NewPostForm from "../components/NewPostForm";
import { BlogContext } from "../contexts/BlogPostContext";
import Modal from "../components/Modal";
import DropDownOptions from "../components/DropDownOptions";
import DropDownMenu from "../components/DropDownMenu";
import Pagination from "../components/Pagination";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledButtonsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
`;

function MyPosts() {

    const { blogPosts, setShowForm, showForm } = useContext(BlogContext);

    const blogPost = blogPosts.length ? blogPosts.map((post, i) => <BlogPost key={post._id} post={post} i={i} />) : <h1>No posts to show yet</h1>;

    return (
        <>
            <StyledButtonsDiv>
                <DropDownMenu />
                <Button handleClick={() => setShowForm(prev => !prev)}>{showForm ? 'Close form' : 'Add new post'}</Button>
                <DropDownOptions />
            </StyledButtonsDiv>
            <Div>    
                {showForm && <Modal><NewPostForm /></Modal>}
                {blogPost}
            </Div>
            <Pagination />
        </>
    )
}

export default MyPosts
