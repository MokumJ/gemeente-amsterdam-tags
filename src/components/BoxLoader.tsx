import React from 'react';
import styled, { keyframes } from 'styled-components';
import { COLORS } from '../constants/colors';

interface Props {
    className?: string;
}
const BoxLoader = (props: Props) => {
    return (
        <LoadingContainer className={props.className}>
            <Item color={COLORS[(COLORS.length * Math.random()) | 0].value} />
        </LoadingContainer>
    );
};

const animate = keyframes`
  50% {
    transform: rotateY(-180deg);
  }
  100% {
    transform: rotateY(-180deg) rotateX(-180deg);
  }
`;

const LoadingContainer = styled.div`
    perspective: 120px;
    width: 120px;
    height: 120px;
    position: relative;
`;

const Item = styled.div`
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 120px;
    height: 120px;
    transform: rotate(0);
    border: 2px solid black;
    background: ${props => props.color || '#00adb5'};
    animation: ${animate} 1s infinite;
`;

export default BoxLoader;
