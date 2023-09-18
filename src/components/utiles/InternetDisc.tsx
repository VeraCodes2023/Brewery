import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const  InternetDisconnectionAlert:React.FC =() =>{
  const [isOnline, setIsOnline] = useState(true); 
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setOpen(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      open={!isOnline && open} 
      autoHideDuration={6000} 
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="error">
        Internet connection lost. Please check your network.
      </Alert>
    </Snackbar>
  );
}

export default InternetDisconnectionAlert;