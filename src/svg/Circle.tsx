import React from 'react';

type Props = React.SVGAttributes<SVGElement> & { isBig?: boolean; color: string };

const Circle = ({ color, isBig }: Props) => (
    <svg height={isBig ? '160' : '16'} width={isBig ? '160' : '16'}>
        <circle
            cx={isBig ? '75' : '7.5'}
            cy={isBig ? '75' : '7.5'}
            r={isBig ? '70' : '7'}
            stroke="black"
            strokeWidth={isBig ? '2' : '1'}
            fill={color}
        />
    </svg>
);

export default Circle;
