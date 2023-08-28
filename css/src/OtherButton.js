import React from 'react';
import styled from'styled-components';

const Button = styled.button `
    color: blue;
    &:hover {
        color:red;
    }
`;
const OtherButton = () => {
    return (
        <Button>OtherButton</Button>
    )
}

export default OtherButton;