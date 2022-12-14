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

const Login = () => {
  return (
    <Cont>
      <Box>
        <h1 style={{gridColumn: "1/-1",color:"white",fontSize:"4rem",justifySelf:"center"}} > Welcome Back! </h1>
        <p style={{color:"white"}}>Username</p><Txt placeholder="Username"/>
        <p style={{color:"white"}}>Password </p><Pass placeholder= "Password"/>
        <Btn>Log In</Btn>
      </Box>
    </Cont>
  );
};
  
export default Login;