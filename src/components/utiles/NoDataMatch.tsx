import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const  NoDataMatch : React.FC = () =>{
  return (
    <Stack sx={{ width: '100%' , margin:"auto"}} spacing={2}>
      <Alert severity="error">No matching data found</Alert>
    </Stack>
  );
}
export default  NoDataMatch
