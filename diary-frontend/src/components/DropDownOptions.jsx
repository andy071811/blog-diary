import { useContext, useState } from "react"
import styled from "styled-components"
import { BlogContext } from "../contexts/BlogPostContext";

const StyledDropDownOptions = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    text-align: center;
`;

const Option = styled.option`
    text-align: center;

    &:hover {
        background-color: #56569a;
    }
`;

function DropDownOptions() {

    const [sortBy, setSortBy] = useState('New-Old');
    const { blogPosts, setBlogPosts } = useContext(BlogContext);

    const handleSort = option => {
        let sortedData = [...blogPosts];

        if (option === 'A-Z') sortedData.sort((a,b) => a.title.localeCompare(b.title));
        if (option === 'Z-A') sortedData.sort((a,b) => b.title.localeCompare(a.title));
        if (option === 'New-Old') sortedData.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
        if (option === 'Old-New') sortedData.sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt));

        setBlogPosts(sortedData);
    }

    const handleChange = e => {
        const selectedOption = e.target.value;
        setSortBy(selectedOption);
        handleSort(selectedOption);
    };

    return (
        <StyledDropDownOptions>
            <label htmlFor="options">Sort posts by:</label>
            <select name='options' value={sortBy} onChange={handleChange}>
                <Option value='New-Old'>Newest-Oldest</Option>
                <Option value='Old-New'>Oldest-Newest</Option>
                <Option value='A-Z'>Title A-Z</Option>
                <Option value='Z-A'>Title Z-A</Option>
            </select>
        </StyledDropDownOptions>
    )
}

export default DropDownOptions
