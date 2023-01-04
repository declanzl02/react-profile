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
import { useState } from 'react';

function ContactForm() {
	const [state, setState] = useState({
		name: null,
		email: null,
		message: null,
	});

	const handleInputChange = (e) => {
		setState((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
		console.log(state.name);
		console.log(state.email);
		console.log(state.message);
	};

	const handleSubmit = () => {};

	return (
		<Container boxShadow="xl" borderRadius="10" py="3">
			<Heading align="center" size="md">
				{' '}
				Send an Email!
			</Heading>
			<form onSubmit={() => handleSubmit()}>
				<FormControl>
					<FormLabel name="name">Name</FormLabel>
					<Input
						placeholder="John Smith"
						onChange={handleInputChange}
						name="name"
						required
					></Input>
					<FormLabel name="email">Email address</FormLabel>
					<Input
						type="email"
						onChange={handleInputChange}
						name="email"
						required
					></Input>
					<FormLabel name="message">Message</FormLabel>
					<Textarea
						onChange={handleInputChange}
						name="message"
						required
					></Textarea>
					<Flex py="2" justifyContent="left">
						<Button colorScheme="purple" type="submit">
							Send
						</Button>
					</Flex>
				</FormControl>
			</form>
		</Container>
	);
}

export default ContactForm;
