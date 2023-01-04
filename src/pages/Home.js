import { Container, Text, Image, Flex, Stack } from '@chakra-ui/react';
import CenteredHeader from '../components/CenteredHeader';
import ProfilePic from '../img/profile.jpg';

function Home() {
	return (
		<>
			<CenteredHeader text={'Welcome to My Profile'} />
			<Flex justifyContent="center">
				<Image
					borderRadius="full"
					boxSize="150px"
					boxShadow="dark-lg"
					src={ProfilePic}
					alt="Declan Lawson"
				/>
			</Flex>
			<Container maxW="2xl">
				<Stack>
					<Text fontSize="2xl" id="greeting">
						Hi there! I'm Declan.
					</Text>
					<Text fontSize="2xl">
						I'm a software engineering student with a passion for
						using technology to make a positive impact on people's
						lives. Whether it's through creating efficient and
						user-friendly software solutions or finding innovative
						ways to utilize technology and I am always looking for
						opportunities to make a difference.
					</Text>
					<Text fontSize="2xl">
						I am currently studying at Swinburne University of
						Technology, where I am gaining the skills and knowledge
						necessary to turn my passion into a successful career.
					</Text>
				</Stack>
			</Container>
		</>
	);
}

export default Home;
