import React, { useState } from 'react';
import styled from 'styled-components/macro';
import TextInput from './TextInput';
import TagContainer from './TagContainer';
import Button from './Button';
import { List } from '../typings/types';
import Circle from '../svg/Circle';
import Triangle from '../svg/Triangle';
import { useActions } from 'react-api-data';

interface Props extends List {}

const ListItem = ({ name, color, shape, tags, id }: Props) => {
    const actions = useActions();
    const [newTag, setNewTag] = useState<string>('');
    return (
        <Container>
            <Title id={`list${name}`}>{name}</Title>
            {shape === 'circle' && (
                <IconContainer>
                    <Circle color={color ?? '#FFC600'} isBig />
                </IconContainer>
            )}

            {shape === 'triangle' && (
                <IconContainer>
                    <Triangle color={color ?? '#FFC600'} isBig />
                </IconContainer>
            )}
            {shape === 'square' && (
                <IconContainer>
                    <ColorBox color={color ?? '#FFC600'} />{' '}
                </IconContainer>
            )}
            <SubTitle>Tags</SubTitle>
            <TagContainer tags={tags} listId={id} />
            <TextInput
                id={`${name}NewTag`}
                label="New tag"
                placeholder="Give your tag a name"
                value={newTag}
                onChange={(value: string) => setNewTag(value)}
            />

            <StyledButton
                id={`${name}CreateNewTag`}
                isDisabled={newTag?.length === 0}
                onPress={() =>
                    actions.perform('createTag', { listId: id }, { name: newTag }).then(() => {
                        actions.invalidateCache('getLists');
                        setNewTag('');
                    })
                }
            >
                Create Tag
            </StyledButton>
            <DeleteButton
                id={`${name}Delete`}
                onPress={() =>
                    actions.perform('deleteList', { listId: id }, {}).then(() => {
                        actions.invalidateCache('getLists');
                    })
                }
            >
                Delete List
            </DeleteButton>
        </Container>
    );
};

const Container = styled.div`
    width: 300px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    border-radius: 3px;
    margin: 12px;
`;

const SubTitle = styled.h3`
    font-size: 24px;
    margin-bottom: 0px;
    width: 100%;
`;

const StyledButton = styled(Button)`
    margin-top: 24px;
`;

const DeleteButton = styled(Button)`
    margin-top: 24px;
    background: #eb0003;
    border-color: #eb0003;
`;

const Title = styled.h2`
    font-size: 28px;
`;

const ColorBox = styled.div<{ color: string }>`
    background: ${({ color }) => color};
    width: 150px;
    height: 150px;
    border: 2px solid black;
`;

const IconContainer = styled.div`
    width: 150px;
    height: 150px;
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
`;

export default ListItem;
