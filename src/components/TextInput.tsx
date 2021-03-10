import React, { useRef } from 'react';
import { useTextField, AriaTextFieldOptions } from '@react-aria/textfield';
import styled from 'styled-components/macro';

type Props = AriaTextFieldOptions;

const TextInput = (props: Props) => {
    const { label } = props;
    const ref = useRef<HTMLInputElement>(null);
    const { labelProps, inputProps } = useTextField(props, ref);

    return (
        <Container>
            <StyledLabel {...labelProps}>{label}</StyledLabel>
            <StyledInput {...(inputProps as any)} ref={ref} id={props.id} />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const StyledInput = styled.input`
    height: 52px;
    border: 2px solid black;
    font-size: 16px;
    max-height: 56px;
    padding: 0 12px;
    border-radius: 3px;
    color: black;

    :enabled:focus {
        outline: 0 none;
        outline-offset: 0;
        border-color: #034c3c;
    }
    :enabled:hover {
        border-color: #034c3c;
    }
`;

const StyledLabel = styled.label`
    margin-bottom: 8px;
`;

export default TextInput;
