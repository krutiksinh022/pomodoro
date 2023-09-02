import React from 'react';
import { Stack, Button } from '@chakra-ui/react';
import { auth, provider } from '../firebase-config.js';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
function Login({ setAuth }) {
  const navigate = useNavigate();
  const handleSignIn = () => {
    signInWithPopup(auth, provider).then(result => {
      localStorage.setItem('auth', true);
      setAuth(true);
      navigate('/');
    });
  };
  return (
    <>
      <Stack
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        height={'90vh'}
      >
        <Button colorScheme={'blue'} onClick={handleSignIn}>
          Sign In With Google
        </Button>
      </Stack>
    </>
  );
}

export default Login;
