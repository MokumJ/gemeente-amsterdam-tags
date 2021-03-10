import React from 'react';

type Props = React.SVGAttributes<SVGElement> & { isBig?: boolean; color: string };

const Triangle = ({ color, isBig }: Props) => (
    <svg height={isBig ? '150' : '16'} width={isBig ? '150' : '16'}>
        <polygon
            points={isBig ? '75 15,150 150,0 150' : '8 0,16 16,0 16'}
            stroke="black"
            strokeWidth={isBig ? '2' : '1'}
            fill={color}
        />
    </svg>
);

export default Triangle;
