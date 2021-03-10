import React from 'react';
import styled from 'styled-components/macro';
import ListContainer from './components/ListContainer';

const TITLE = 'Tag your Lists';

const App = () => {
    return (
        <Container>
            <Title id="title">{TITLE}</Title>
            <ListContainer />
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 40px;
    margin-top: 50px;
`;
export default App;
