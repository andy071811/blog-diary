import styled from "styled-components"
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import BlogPostContext from "../contexts/BlogPostContext";

const Div = styled.div`
    display: grid;
    grid-template-columns: 15% 1fr;
    height: 100vh;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const Main = styled.main`
    overflow-y: scroll;

    @media (max-width: 768px) {
        grid-column: 1 / span - 1;
    }
`;

function AppLayout() {
    return (
        <Div>
            <Sidebar />
            <BlogPostContext>
                <Main>
                    <Outlet />
                </Main>
            </BlogPostContext>
        </Div>
    )
}

export default AppLayout
