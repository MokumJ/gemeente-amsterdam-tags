import React from 'react';
import styled from 'styled-components/macro';
import { useApiData } from 'react-api-data';
import ListForm from './ListForm';
import BoxLoader from './BoxLoader';
import { List } from '../typings/types';
import ListItem from './ListItem';

const Lists = () => {
    const lists = useApiData<Array<List>>('getLists');
    return (
        <Container>
            {lists.loading ? (
                <StyledBoxLoader />
            ) : (
                <ListContainer>
                    {lists.data?.map((item: List, index: number) => {
                        return <ListItem key={index} {...item} />;
                    })}
                    <ListForm />
                </ListContainer>
            )}
        </Container>
    );
};

const StyledBoxLoader = styled(BoxLoader)`
    display: flex;
    margin-top: 100px;
`;

const Container = styled.div`
    max-width: 100vw;
    width: 95%;
    display: flex;
    margin: auto;
    justify-content: center;
    margin-top: 10px;
    @media screen and (min-width: 1280px) {
        max-width: 1200px;
    }
`;

const ListContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`;

export default Lists;
