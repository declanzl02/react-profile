import CenteredHeader from '../components/CenteredHeader';
import { Container, Text, Stack } from '@chakra-ui/react';

function About() {
	return (
		<>
			<CenteredHeader text={'A Little About Me'} />;
			<Container maxW="2xl">
				<Stack>
					<Text fontSize="2xl">
						I am a software engineering student at Swinburne
						University of Technology, where I am learning the skills
						and knowledge necessary to become a successful software
						developer.
					</Text>
					<Text fontSize="2xl">
						Throughout my studies and personal projects, I have
						gained experience with a variety of programming
						languages, including C#, C++, Python, HTML, CSS, and
						JavaScript. I have also worked with frameworks such as
						Vue and React.
					</Text>
					<Text fontSize="2xl">
						One of my proudest accomplishments to date is the
						creation of my own Chrome Extension. This project
						allowed me to apply my skills and knowledge in a
						real-world setting, and I was able to see the fruits of
						my labor as people began using my extension.
					</Text>
					<Text fontSize="2xl">
						I am always striving to learn and grow as a developer,
						and I am excited to see where my journey in the field of
						software engineering takes me.
					</Text>
					<Text fontSize="2xl">
						Thank you for visiting my website and learning more
						about me.
					</Text>
				</Stack>
			</Container>
		</>
	);
}

export default About;
