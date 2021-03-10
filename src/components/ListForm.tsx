import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { useActions } from 'react-api-data';
import TextInput from './TextInput';
import { Option, OptionItemProps } from 'react-dropdown-aria';
import DropdownComponent from './DropdownComponent';
import Circle from '../svg/Circle';
import Triangle from '../svg/Triangle';
import Button from './Button';
import { COLORS } from '../constants/colors';
import { SHAPES } from '../constants/shapes';

const TITLE = 'Create new list';

const ListForm = () => {
    const actions = useActions();
    const [name, setName] = useState<string>('');
    const [color, setColor] = useState<Option>();
    const [shape, setShape] = useState<Option>();
    return (
        <Container id="listForm">
            <Title>{TITLE}</Title>
            <TextInput
                label="Name"
                placeholder="Give your list a name"
                value={name}
                id="listName"
                onChange={(value: string) => setName(value)}
            />

            <DropdownComponent
                options={COLORS}
                placeholder="Color of choice"
                ariaLabel="Pick a color"
                id="colorPicker"
                onChange={(selectedOption: Option) => setColor(selectedOption)}
                value={color?.title ?? ''}
                optionItemRenderer={(item: OptionItemProps) => (
                    <ColorOption id={`color${item.option.title}`}>
                        <ColorBox color={item.option.value} />
                        {item.option.title}
                    </ColorOption>
                )}
                label="Color"
            />

            <DropdownComponent
                options={SHAPES}
                placeholder="Pick a shape"
                ariaLabel="Pick a shape"
                id="shapePicker"
                onChange={(selectedOption: Option) => setShape(selectedOption)}
                value={shape?.title ?? ''}
                optionItemRenderer={(item: OptionItemProps) => (
                    <ColorOption id={`shape${item.option.title}`}>
                        {item.option.value === 'circle' && (
                            <IconContainer>
                                <Circle color={color?.value ?? '#FFC600'} />
                            </IconContainer>
                        )}

                        {item.option.value === 'triangle' && (
                            <IconContainer>
                                <Triangle color={color?.value ?? '#FFC600'} />
                            </IconContainer>
                        )}
                        {item.option.value === 'square' && <ColorBox color={color?.value ?? '#FFC600'} />}
                        {item.option.title}
                    </ColorOption>
                )}
                label="Shape"
            />
            <StyledButton
                id="addList"
                isDisabled={name?.length === 0 || !color || !shape}
                onPress={() =>
                    actions.perform('createList', {}, { name, shape: shape?.value, color: color?.value }).then(() => {
                        actions.invalidateCache('getLists');
                    })
                }
            >
                Create List
            </StyledButton>
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
    margin: 12px;
    height: 450px;
    border-radius: 3px;
`;

const StyledButton = styled(Button)`
    margin-top: 24px;
`;

const Title = styled.h2`
    font-size: 28px;
`;

const ColorOption = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ColorBox = styled.div<{ color: string }>`
    background: ${({ color }) => color};
    width: 13px;
    height: 13px;
    margin-right: 10px;
    border: 1px solid black;
`;

const IconContainer = styled.div`
    width: 15px;
    height: 15px;
    margin-right: 10px;
`;

export default ListForm;
