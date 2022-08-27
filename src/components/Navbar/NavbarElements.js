import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background: #ffffff;
height: 64px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
filter: drop-shadow(0px 2px 2px #333333);
z-index: 12;
`;

export const NavLink = styled(Link)`
color: #808080;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
    color: #4d4dff;
  }
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const Btn1 = styled.button`
    grid-column: 1/3;
    justify-self: center;
    padding: 0.5em 2.5em;
    line-height: 2em;
    background:linear-gradient(90deg,#26CBD6,#5552F3);
    border-radius: 2em;
    border:2px solid white;
    color: white;
    font-weight: bold;
    transition: all 0.2s ;
    :hover{
        background: white;
        border: 2px solid #5552F3;
        color:#5552F3;
    }
`;

export const Btn2 = styled.button`
    grid-column: 1/3;
    justify-self: center;
    padding: 0.5em 2.5em;
    line-height: 2em;
    background-color:white;
    border-radius: 2em;
    border: 2px solid #5552F3;
    color: #5552F3;
    font-weight: bold;
    transition: all 0.2s ;
    :hover{
        background:linear-gradient(90deg,#26CBD6,#5552F3);
		border:2px solid white;
        color: white;
    }
`;
