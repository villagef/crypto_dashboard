import styled from 'styled-components';

export const StyledLayout = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: row;
    background: ${props => props.theme.bodyBg}
`

export const StyledMain = styled.div`
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;

`;