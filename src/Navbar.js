import { Link } from 'react-router-dom';
import { Flex, HStack, ButtonGroup, Button } from '@chakra-ui/react';

function Navbar() {
  return (
    <Flex>
      <HStack>
        <Link to="/">
          <Button variant="link">Home</Button>
        </Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </HStack>
    </Flex>
  );
}

export default Navbar;
