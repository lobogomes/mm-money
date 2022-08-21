import styled from "styled-components";

export const Container = styled.header`
    background: var(--pink);

    img.imgHeader {
        position: absolute; 
        height: 19rem;
        left: 2rem;
        transform: rotate(-0.67deg);
    }
    
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 4rem 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        position: relative;
    }

    button {
        font-size: 1rem;
        color: #fff;
        background-color: #000;
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;


        filter: drop-shadow(2px 6px 4px rgba(0, 0, 0, 0.25));

        transition: 0.7s;

        &:hover{
            color: #000;
            background-color: #fff;
        }
    }
`