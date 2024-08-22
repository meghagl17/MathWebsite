import * as React from 'react';
import { Box, Flex, Text, Button, useBreakpointValue } from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';
import { IconButton } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
  const navigate = useNavigate();

  return (
    <Box bg="blue.900" color="white" boxShadow="md" borderBottom="2px" borderColor="blue.700">
      <Flex as="nav" align="center" justify="space-between" padding="1rem" maxW="1200px" mx="auto">
        {/* Uncomment and use Chakra UI's `IconButton` and `HamburgerIcon` if needed */}
        {/* {!isDesktop && (
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Menu"
            variant="outline"
            colorScheme="whiteAlpha"
          />
        )} */}
        <Text fontSize="xl" fontWeight="bold" letterSpacing="wider">
          Math4Fun
        </Text>
        <Flex gap="6">
        <Button
      variant="link"
      color="white"
      _hover={{ textDecoration: 'underline' }}
      leftIcon={<FaHome />}
      fontSize="lg"
      padding={0}
      minWidth={0}
      onClick={() => navigate('/')}
    >
      HOME
    </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
