import { Link } from 'react-router-dom';
import { Container, Box, ButtonGroup, Button, useColorModeValue } from '@chakra-ui/react';

function Navbar() {
  return (
    <Box as="nav" boxShadow={useColorModeValue('sm', 'sm-dark')} position="relative">
      <Container py="4" ml="0">
        <ButtonGroup variant="link" spacing="10">
          <Link to="/">
            <Button>Home</Button>
          </Link>
          <Link to="/about">
            <Button>About</Button>
          </Link>
          <Link to="/contact">
            <Button>Contact</Button>
          </Link>
        </ButtonGroup>
      </Container>
    </Box>
  );
}

export default Navbar;
