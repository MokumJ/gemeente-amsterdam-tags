import React, { useRef } from 'react';
import styled from 'styled-components';
import { AriaButtonProps } from '@react-types/button';
import { useButton } from '@react-aria/button';

interface Props extends AriaButtonProps {
    className?: string;
}

const Button = (props: Props) => {
    const ref = useRef<HTMLElement>(null);
    const { buttonProps } = useButton(props, ref);
    const { children } = props;
    return (
        <StyledButton {...buttonProps} className={props.className} ref={ref as any}>
            {children}
        </StyledButton>
    );
};

const StyledButton = styled.button<{ disabled?: boolean }>`
    width: 100%;
    height: 52px;
    font-style: bold;
    font-weight: 900;
    border: 2px solid black;
    font-size: 16px;
    max-height: 56px;
    padding: 0 12px;
    border-radius: 3px;
    color: white;
    display: flex;
    background: black;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export default Button;
