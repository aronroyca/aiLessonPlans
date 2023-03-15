import Spinner from 'react-bootstrap/Spinner';

function Spin() {
    return (
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
   ) 
}

export default Spin