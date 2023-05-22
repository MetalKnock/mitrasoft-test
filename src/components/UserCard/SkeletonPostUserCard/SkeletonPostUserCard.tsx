import { Card, Placeholder } from 'react-bootstrap';

export default function SkeletonPostUserCard() {
  return (
    <Card>
      <Card.Body>
        <Placeholder as={Card.Title} animation='glow'>
          <Placeholder xs={3} />
        </Placeholder>
        <Placeholder as={Card.Text} animation='glow'>
          <Placeholder xs={2} />
        </Placeholder>
        <Placeholder as={Card.Title} animation='glow'>
          <Placeholder xs={3} />
        </Placeholder>
        <Placeholder as={Card.Text} animation='glow'>
          <Placeholder xs={2} />
        </Placeholder>
        <Placeholder as={Card.Title} animation='glow'>
          <Placeholder xs={3} />
        </Placeholder>
        <Placeholder as={Card.Text} animation='glow'>
          <Placeholder xs={2} />
        </Placeholder>
        <Placeholder as={Card.Title} animation='glow'>
          <Placeholder xs={3} />
        </Placeholder>
        <Placeholder as={Card.Text} animation='glow'>
          <Placeholder xs={2} />
        </Placeholder>
      </Card.Body>
    </Card>
  );
}
