import React from 'react';
import { useLabel, LabelAriaProps } from '@react-aria/label';
import Dropdown, { Option, DropdownOption, OptionRendererFunction } from 'react-dropdown-aria';
import styled from 'styled-components/macro';

interface Props {
    label: string;
    ariaLabel?: string;
    options?: DropdownOption[];
    optionItemRenderer?: OptionRendererFunction;
    placeholder: string;
    value: string;
    id: string;
    className?: string;
    onChange: (option: Option) => void;
}
const DropdownComponent = (props: Props) => {
    const label: LabelAriaProps = { label: props.label };
    const { labelProps } = useLabel(label);
    return (
        <Container>
            <StyledLabel {...labelProps}>{label.label}</StyledLabel>
            <StyledDropdown {...(props as any)} className={props.className} />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 24px;
`;

const StyledDropdown = styled(Dropdown)`
    width: 100%;
    height: 52px;
    border: 2px solid black;
    font-size: 16px;
    border-radius: 3px;
    color: black;
    display: flex;
    padding: 0px;
    background: white;
    justify-content: center;
    max-height: 52px;

    &:focus {
        outline: 0 none;
        outline-offset: 0;
        border-color: #034c3c;
    }
`;

const StyledLabel = styled.label`
    margin-bottom: 8px;
`;

export default DropdownComponent;
