import React from 'react';
import {Box,Txt,Pass,Btn} from '../components/site_elements'
import styled from 'styled-components';

export const Cont = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr;
align-items: center;
gap: 1em;
justify-content: center;
`;

const Signup = () => {
  return (
    <Cont>
      <Box>
        <h1 style={{gridColumn: "1/-1",color:"white",fontSize:"4rem",justifySelf:"center"}} >Create Account</h1>
        <p style={{color:"white"}}>Username</p><Txt placeholder="Username"/>
        <p style={{color:"white"}}>Password </p><Pass placeholder= "Password"/>
        <p style={{color:"white"}}>Email</p><Txt placeholder="email@email.com" style={{gridRow: "4/5"}}/>
        <Btn>Sign Up</Btn>
      </Box>
    </Cont>
  );
};
  
export default Signup;