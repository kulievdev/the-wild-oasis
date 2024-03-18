import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Heading from "./ui/Heading";

const StyledApp = styled.main`
    background-color: orangered;
    padding: 20px;
`;

function App() {
    return (
        <>
            <GlobalStyles />
            <StyledApp>
                <Heading as="h1">The Wild Oasis</Heading>
            </StyledApp>
        </>
    );
}

export default App;
