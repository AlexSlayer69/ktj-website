import styled from "styled-components";

export const Box = styled.div`
display: grid;
grid-template-columns: 1fr 1.5fr;
grid-template-rows: 2fr 1fr 1fr 1fr;
grid-auto-rows: 0.5fr;
align-items: center;
gap: 1em;
margin: 4em;
padding: 1em 4em;
grid-column: 2/3;
border-radius:2em;
background-image: linear-gradient(135deg,#26CBD6,#5552F3);
max-width:32em;
min-height: 20em;
`;

export const Txt = styled.input`
    grid-row: 2/3;
    grid-column:2/3;
    align-items: center;
    justify-self:stretch;
    border: 0;
    line-height:3em;
    font-size: 0.9rem;
    padding-left:2em;
    color: #5552F3;
    font-weight: 400;
    border-radius:1em;
`;

export const Pass = styled.input`
    -webkit-text-security: disc;
    text-security: disc;
    grid-row: 3/4;
    grid-column:2/3;
    border: 0;
    align-items: center;
    justify-self:stretch;
    line-height:3em;
    font-size: 0.9rem;
    color: #5552F3;
    font-weight: 400;
    padding-left:2em;
    border-radius:1em;
`;

export const Btn = styled.button`
    grid-column: 1/3;
    justify-self: center;
    padding: 0.5em 4em;
    line-height: 2em;
    background-color:white;
    border-radius: 2em;
    border: 0;
    color: #5552F3;
    font-weight: bold;
    transition: all 0.2s ;
    :active{
        background-image:linear-gradient(135deg,#26CBD6,#5552F3);
        border: 2px solid white;
        color: white;
    }
`;