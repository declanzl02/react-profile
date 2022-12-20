import { Link } from 'react-router-dom'
import { Flex} from '@chakra-ui/react'

function Navbar() {
    return (
        <Flex>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </Flex>
    );
}

export default Navbar;  