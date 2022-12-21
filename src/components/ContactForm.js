import {
	FormControl,
	FormLabel,
	Input,
	Container,
	Textarea,
	Button,
	Flex,
	Heading,
} from '@chakra-ui/react';
import { useState, setInput } from 'react';

function ContactForm() {
	const [state, setState] = useState({
		fullName: null,
		email: null,
		message: null,
	});

	const handleInputChange = (e) => setInput(e.target.value);

	const handleSubmit = () => {
		alert(state.fullName);
	};

	return (
		<Container boxShadow="2xl" borderRadius="10" py="3">
			<Heading align="center" size="md">
				{' '}
				Send an Email!
			</Heading>
			<FormControl>
				<FormLabel isRequired>Name</FormLabel>
				<Input
					placeholder="John Smith"
					value={state.fullName}
					onChange={handleInputChange}
				></Input>
				<FormLabel isRequired>Email address</FormLabel>
				<Input
					type="email"
					value={state.email}
					onChange={handleInputChange}
				></Input>
				<FormLabel>Message</FormLabel>
				<Textarea
					value={state.message}
					onChange={handleInputChange}
				></Textarea>
				<Flex py="2" justifyContent="left">
					<Button colorScheme="purple">Send</Button>
				</Flex>
			</FormControl>
		</Container>
	);
}

export default ContactForm;
