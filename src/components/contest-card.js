import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from 'react-bootstrap';

function ContestCard(params) {
    return(
        <Card>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    );
}

export default ContestCard;