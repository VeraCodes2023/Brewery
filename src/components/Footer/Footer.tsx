import React from 'react';
import {Typography, Container} from "@mui/material";

const Footer = () => {
  return (
    <footer>
       <Container>
            <Typography variant="body1" color="textSecondary" sx={{fontSize:13, marginBottom:3}}> 
                The theme specifies the color of the components, darkness of the surfaces, level of shadow, appropriate opacity of ink elements <br></br>etc. React Material UI Project Tutorial [2022]
            </Typography>
        </Container>
    </footer>
  )
}

export default Footer