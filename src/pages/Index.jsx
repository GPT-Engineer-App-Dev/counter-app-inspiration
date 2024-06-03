import { useState, useEffect } from "react";
import { Box, Button, Text, VStack, HStack } from "@chakra-ui/react";

const Index = () => {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [splits, setSplits] = useState([]);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleToggle = () => setIsRunning(!isRunning);
  const handleReset = () => {
    setIsRunning(false);
    setCounter(0);
    setSplits([]);
  };
  const handleSplit = () => {
    setSplits([...splits, counter]);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg="brand.900"
      color="white"
    >
      <VStack spacing={8}>
        <Box
          bg="black"
          borderRadius="md"
          p={4}
          width="250px"
          textAlign="center"
        >
          <Text fontSize="4xl" fontFamily="monospace" color="brand.700">
            {new Date(counter * 1000).toISOString().substr(11, 8)}
          </Text>
        </Box>
        <HStack spacing={4}>
          <Button colorScheme={isRunning ? "red" : "brand.800"} onClick={handleToggle}>
            {isRunning ? "Stop" : "Start"}
          </Button>
          <Button colorScheme="brand.700" onClick={handleReset}>
            Reset
          </Button>
          <Button colorScheme="brand.600" onClick={handleSplit}>
            Split
          </Button>
        </HStack>
        <VStack spacing={4}>
          {splits.map((split, index) => (
            <Text key={index} fontSize="2xl" fontFamily="monospace" color="brand.500">
              Split {index + 1}: {new Date(split * 1000).toISOString().substr(11, 8)}
            </Text>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Index;