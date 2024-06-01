import { useState, useEffect } from "react";
import { Box, Button, Text, VStack, HStack } from "@chakra-ui/react";

const Index = () => {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setCounter(0);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg="gray.800"
      color="white"
    >
      <VStack spacing={8}>
        <Box
          bg="black"
          borderRadius="md"
          p={4}
          width="200px"
          textAlign="center"
        >
          <Text fontSize="4xl" fontFamily="monospace">
            {new Date(counter * 1000).toISOString().substr(11, 8)}
          </Text>
        </Box>
        <HStack spacing={4}>
          <Button colorScheme="green" onClick={handleStart}>
            Start
          </Button>
          <Button colorScheme="red" onClick={handleStop}>
            Stop
          </Button>
          <Button colorScheme="yellow" onClick={handleReset}>
            Reset
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Index;