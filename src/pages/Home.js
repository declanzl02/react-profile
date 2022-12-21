import { Container, Text, Image, Flex } from '@chakra-ui/react';
import CenteredHeader from '../components/CenteredHeader'
import ProfilePic from '../img/profile.jpg'

function Home() {
  return (
    <>
      <CenteredHeader 
        text={"Welcome to Declan's Profile"}
      />
      <Flex justifyContent="center">
        <Image
          borderRadius='full'
          boxSize='150px'
          src={ProfilePic}
          alt='Declan Lawson'
        />
      </Flex>
      <Container maxW="2xl">
        <Text fontSize="2xl">Hi, I'm Declan.</Text>
        <Text fontSize="2xl">
          I'm a student, currently studying Sofware Engineering.
          I am passionate about using technology to solve problems and improve people's lives. 
          </Text>
      </Container>
    </>
  );
}

export default Home;
