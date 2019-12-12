import styled from 'styled-components';

const H3 = styled.h3`
    font-size: 1.5rem;
    font-weight: 400;
`

const H3C = styled(H3)`
    &&& {
        text-align: center;
    }
`

export {
    H3,
    H3C
};