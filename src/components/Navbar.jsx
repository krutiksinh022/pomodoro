import { Stack, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
function Navbar({ setAuth }) {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth).then(result => {
      localStorage.clear();
      setAuth(false);
      navigate('/login');
    });
  };
  return (
    <>
      <Stack
        display={'flex'}
        flexDirection={'row'}
        width="100vw"
        alignItems={'center'}
        justifyContent={'center'}
        backgroundColor={'black'}
      >
        <Text marginRight={'50px'} color={'white'}>
          PomoDoro
        </Text>
        <Button
          marginLeft={'50px'}
          colorScheme="blackAlpha"
          onClick={handleSignOut}
        >
          Log Out
        </Button>
      </Stack>
    </>
  );
}

export default Navbar;
