import styled from "styled-components";

export const Box = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr 1fr;
align-items: center;
gap: 1em;
margin: 4em;
padding: 1em 4em;
grid-column: 2/3;
justify-content: center;
border-radius:2em;
background-image: linear-gradient(135deg,#26CBD6,#5552F3);
max-width:32em;
min-height: 20em;
`;

export const Txt = styled.input`
    grid-row: 2/3;
    grid-column:2/3;
    border: 0;
    line-height:3em;
    border-radius:1em;
`;

export const Pass = styled.input`
    grid-row: 3/4;
    grid-column:2/3;
    border: 0;
    line-height:3em;
    border-radius:1em;
`;

export const Btn = styled.button`
    grid-column: 1/3;
    justify-self: center;
    padding: 0.5em 4em;
    line-height: 2em;
    border-radius: 2em;
    border: 0;
`;