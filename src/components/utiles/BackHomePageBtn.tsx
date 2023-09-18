import React  from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const BackHomePageBtn:React.FC = () => {
  const redirect = useNavigate()
  return (
    <Button
    sx={{
      marginTop:10,
      marginBottom:10
    }}
    component="a"
    target="_blank"
    rel="noopener noreferrer"
    onClick={()=>{redirect('/', {replace:true})}}
  >
    Back to Homepage
  </Button>
  )
}

export default BackHomePageBtn