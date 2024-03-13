import { Spinner } from "react-bootstrap";

function Loading () {
    return (
        <Spinner animation="border" variant="light">
        <span className="sr-only">Loading...</span>
    </Spinner>
    )
}

export default Loading