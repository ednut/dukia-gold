import styled from 'styled-components';

const Wrapper = styled.div`
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    margin-right: auto;
    margin-left: auto;
    height: inherit;
    @media (min-width: 768px) {
        width: 750px;
    }
    @media (min-width: 992px) {
        width: 970px;
    }
    @media (min-width: 1200px) {
        width: 1170px;
    }
`

export default Wrapper