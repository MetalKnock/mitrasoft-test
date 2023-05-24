import { Card, Col, Image, Placeholder } from 'react-bootstrap';
import placeholder from 'src/assets/placeholder.svg';

export default function SkeletonPost() {
  return (
    <Col xs={12}>
      <Card className='my-3'>
        <Card.Header>
          <Image src={placeholder} roundedCircle width={50} height={50} />
        </Card.Header>
        <Card.Body>
          <Placeholder as={Card.Text} animation='glow'>
            <Placeholder xs={12} />
          </Placeholder>
          <Placeholder as={Card.Text} animation='glow'>
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation='glow'>
            <Placeholder xs={12} />
          </Placeholder>
          <Placeholder as={Card.Text} animation='glow'>
            <Placeholder xs={6} />
          </Placeholder>
        </Card.Body>
        <Card.Footer>
          <Placeholder.Button className='mt-2 mb-2' xs={1} animation='glow'>
            <Placeholder xs={0} />
          </Placeholder.Button>
        </Card.Footer>
      </Card>
    </Col>
  );
}
