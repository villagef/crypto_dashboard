import styled from "styled-components";

export const StyledLayout = styled.div`
    height: 100%;
    width: 100%;
`

export const StyledWrapperContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledContent = styled.div(({style}) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    ...style
}))