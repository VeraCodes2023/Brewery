import React from 'react';
import {Box} from '@mui/material';
import BackHomePageBtn from '../utiles/BackHomePageBtn';
import ErrorAlert from '../utiles/ErrorAlert'


const NotFound:React.FC = () => {
  return (
    <Box>
        <ErrorAlert/>
        <BackHomePageBtn/>
    </Box>
  )
}

export default NotFound