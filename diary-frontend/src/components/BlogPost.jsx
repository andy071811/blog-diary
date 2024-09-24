import moment from "moment";
import { useContext, useState } from "react";
import { HiTrash } from "react-icons/hi2";
import styled from "styled-components";
import { BlogContext } from "../contexts/BlogPostContext";
import Modal from "./Modal";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px;
    padding: 20px 20px 0px 20px;
    background-color: blanchedalmond;
    box-shadow: 0px 0px 20px;
    width: 93%;
`;

const H1 = styled.h1`
    text-align: center;
    padding: 5px;
    border-bottom: 2px solid black;
`;

const P = styled.p`
    padding: 5px;
    max-height: 300px;
    overflow-y: scroll;
`;

const Span = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.7rem;
    width: 100%;
`;

function BlogPost({ post }) {

    const { _id: id, title, content, images, createdAt } = post;
    const { deletePost } = useContext(BlogContext);

    const [open, setOpen] = useState(false);

    const date = moment(createdAt).format('DD-MM-YYYY HH:mm:ss');

    const handleDeletePost = e => {
        e.preventDefault();
        deletePost(id);
    };

    const enlargeImage = () => {
        setOpen(prev => !prev);
    }

    return (
        <Div>
            <H1>{title}</H1>
            <P>{content}</P>
            {images.length != 0 ? <img src={`/images/${images}`} alt={title} style={{ height: '50vh'}} onClick={enlargeImage}/> : ''}
            {open && (
                <Modal>
                    <img
                        src={`/images/${images}`}
                        style={{ height: '95vh'}}
                        onClick={enlargeImage}
                    />
                </Modal>
            )}
            <Span>
                {/* <p>Post #{id} | Created: {date}</p> */}
                <p>Created: {date}</p>
                <button onClick={handleDeletePost}><HiTrash /></button>
            </Span>

        </Div>
    )
}

export default BlogPost
