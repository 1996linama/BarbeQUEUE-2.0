import styled from 'styled-components';

const H1 = styled.h1`
    font-size: 2rem;
`

const H1C = styled(H1)`
    &&& {
        text-align: center;
    }
`

export {
    H1,
    H1C
};