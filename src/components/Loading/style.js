import styled from "styled-components";

export const BoxLoading = styled.div`
    position: fixed;
    background-color: black;
    inset: 0;
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;

    & img{
        width: 40px;
        position: absolute;
        top: 250px;
        opacity: 0;
    }
`