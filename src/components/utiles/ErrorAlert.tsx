import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const  ErrorAlert : React.FC = () =>{
  return (
    <Stack sx={{ width: '30%' , margin:"auto"}} spacing={2}>
      <Alert severity="error">Data can not be fetched due to possible reason of invalid url request</Alert>
    </Stack>
  );
}
export default  ErrorAlert
