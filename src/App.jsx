import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Heading from "./ui/Heading";
import Row from "./ui/Row";
import Button from "./ui/Button";
import Input from "./ui/Input";

const StyledApp = styled.main`
    padding: 20px;
`;

function App() {
    return (
        <>
            <GlobalStyles />
            <StyledApp>
                <Row type="vertical">
                    <Row type="horizontal">
                        <Heading as="h1">The Wild Oasis</Heading>
                        <div>
                            <Heading as="h2">Check in and out</Heading>
                            <Button
                                variation="primary"
                                onClick={() => alert("Check in")}
                            >
                                Check in
                            </Button>
                            <Button
                                variation="secondary"
                                size="small"
                                onClick={() => alert("Check out")}
                            >
                                Check out
                            </Button>
                        </div>
                    </Row>

                    <Row type="vertical">
                        <Heading as="h3">Form</Heading>
                        <form>
                            <Input
                                type="number"
                                placeholder="Number of guests"
                            ></Input>
                            <Input
                                type="number"
                                placeholder="Number of guests"
                            ></Input>
                        </form>
                    </Row>
                </Row>
            </StyledApp>
        </>
    );
}

export default App;
