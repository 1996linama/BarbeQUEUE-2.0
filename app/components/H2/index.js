import styled from 'styled-components';

const H2 = styled.h2`
    font-size: 1.75rem;
    font-weight: 400;
`

const H2C = styled(H2)`
    &&& {
        text-align: center;
    }
`

export {
    H2,
    H2C
};