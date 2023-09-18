import React from 'react'
import { CircularProgress, Typography, Container, Box } from '@mui/material';

const Loading: React.FC = () => {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
        <Typography variant="h6" color="textSecondary" style={{ marginLeft: '10px' }}>
          Loading...
        </Typography>
      </Box>
    </Container>
  )
}
export default Loading