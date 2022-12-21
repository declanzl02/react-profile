import { Container, Heading } from '@chakra-ui/react';

function CenteredHeader({ text }) {
	return (
		<>
			<Container py="10">
				<Heading textAlign="center">{text}</Heading>
			</Container>
		</>
	);
}

export default CenteredHeader;
