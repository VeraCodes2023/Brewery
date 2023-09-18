import React  from 'react';
import { useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';

const ClickReadMoreBtn:React.FC = () => {
  const redirect = useNavigate()
  const id = ""
  return (
    <Button
    component="a"
    target="_blank"
    rel="noopener noreferrer"
    onClick={()=>{redirect(`/details/:${id}`, {replace:true})}}
  >
    More
  </Button>
  )
}

export default ClickReadMoreBtn