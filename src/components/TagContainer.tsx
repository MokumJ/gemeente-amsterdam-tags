import React from 'react';
import styled from 'styled-components/macro';

import { Tag } from '../typings/types';

import { useActions } from 'react-api-data';

interface Props {
    tags: Tag[];
    listId: string;
}

const TagContainer = ({ tags, listId }: Props) => {
    const actions = useActions();
    return (
        <Container>
            {tags.map((tag: Tag, index: number) => {
                return (
                    <TagItem key={index}>
                        <TagText id={`${tag.name}Text`}>- {tag.name}</TagText>
                        <Delete
                            id={`${tag.name}Delete`}
                            aria-label="delete-tag"
                            onClick={() =>
                                actions.perform('deleteTag', { listId, tagId: tag.id }, {}).then(() => {
                                    actions.invalidateCache('getLists');
                                })
                            }
                        >
                            x
                        </Delete>
                    </TagItem>
                );
            })}
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    margin-bottom: 24px;
`;

const TagText = styled.p`
    margin: 0px;
    font-size: 20px;
`;

const TagItem = styled.div`
    width: 100%;
    margin-bottom: 10px;
    flex-direction: row;
    display: flex;
    padding: 8px;
    border: 2px solid black;
    justify-content: space-between;
    :hover {
        background: #ffc600;
    }
`;

const Delete = styled.button`
    width: 30px;
    height: 30px;
    align-items: center;
    display: flex;
    border-radius: 50%;
    cursor: pointer;
    color: white;
    text-align: center;
    padding-bottom: 3px;
    background: #eb0003;
    justify-content: center;
    border: none;
    :hover {
        background: #eb0003;
    }
`;

export default TagContainer;
