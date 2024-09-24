import { useContext } from "react";
import Button from "./Button"
import { BlogContext } from "../contexts/BlogPostContext";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const P = styled.p`
    @media (max-width: 768px) {
        font-size: small;
        text-align: center;
    }
`

function Pagination() {

    const { page, setPage, totalPages } = useContext(BlogContext);

    const handlePrevPage = () => {
        if (page > 1) setPage(prev => prev - 1);
    };
    const handleNextPage = () => {
        if (page < totalPages) setPage(prev => prev + 1);
    }; 

    return (
        <Div>
            <Button handleClick={handlePrevPage}>&larr; Previous</Button>   
            <P>Page {page} of {totalPages} pages</P>   
            <Button handleClick={handleNextPage}>Next &rarr;</Button>   
        </Div>
    )
}

export default Pagination
