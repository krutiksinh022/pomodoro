import { Button, Center, Stack, Text, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
function Timex() {
  const [second, setSecond] = useState(59);
  const [minutes, setMinutes] = useState(25);
  const [breaksec, setBreakSec] = useState(59);
  const [breakmin, setMinuteBreak] = useState(5);
  const [start, setStart] = useState(false);
  const [rest, setRest] = useState(false);
  let timer;
  const restartTime = () => {
    setSecond(59);
    setMinutes(25);
  };

  const startTime = () => {
    setStart(true);
    setStart(!start);
  };

  const startBreak = () => {
    // setMinuteBreak(5);
    // setBreakSec(59);
  };
  useEffect(() => {
    if (start) {
      timer = setInterval(() => {
        setSecond(second - 1);
        if (second === 0) {
          setSecond(59);
        }
      }, 1000);
      if (second === 59) {
        setMinutes(minutes - 1);
        setSecond(59);
      }
      if (minutes == 0 && second == 0) {
        setRest(true);
        setStart(false);
      }
      return () => {
        clearInterval(timer);
      };
    }
    if (rest) {
      timer = setInterval(() => {
        setBreakSec(breaksec - 1);
        if (breaksec === 0) {
          setBreakSec(59);
        }
      }, 1000);
      if (breaksec === 59) {
        setMinuteBreak(breakmin - 1);
        setBreakSec(59);
      }
      if (breakmin === 0 && breaksec === 0) {
        setRest(false);
        setStart(true);
      }
      return () => {
        clearInterval(timer);
      };
    }
  }, [second, start, breaksec]);
  return (
    <>
      <Stack display={'flex'} alignItems={'center'} justifyContent={'center'}>
        {rest ? (
          <>
            <Heading as="h1" size="xl" noOfLines={1}>
              Break
            </Heading>
            <Text color="white">
              {breakmin > 10 ? '0' + breakmin : breakmin}:
              {breaksec > 10 ? '0' + breaksec : breaksec}
            </Text>
          </>
        ) : (
          <Stack
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            backgroundColor={'black'}
            height="40vh"
            width={'40vw'}
            marginTop={'40vh'}
            flexDirection="column"
          >
            <Heading as="h1" size="xl" noOfLines={1} color={'white'}>
              Focus
            </Heading>
            <Text color={'white'} variant={''}>
              {minutes < 10 && start ? '0' + minutes : minutes}:{' '}
              {second < 10 && start ? '0' + second : second}
            </Text>
            <Stack
              display={'flex'}
              alignItems={'center'}
              flexDirection={'row'}
              padding={'10'}
            >
              <Button onClick={startTime}>{start ? 'stop' : 'start'}</Button>
              <Button onClick={restartTime}>Restart</Button>
            </Stack>
          </Stack>
        )}
      </Stack>
    </>
  );
}

export default Timex;
