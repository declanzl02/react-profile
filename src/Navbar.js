import { Link } from 'react-router-dom';
import { Flex, HStack } from '@chakra-ui/react';

function Navbar() {
  return (
    <Flex>
      <HStack>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </HStack>
    </Flex>
  );
}

export default Navbar;
