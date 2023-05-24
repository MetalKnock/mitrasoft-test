import { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { SkeletonPostUserCard } from './SkeletonPostUserCard';

export default function UserCard() {
  const { userId } = useParams();
  const { users, loading, error } = useAppSelector((store) => store.users);

  if (loading) {
    return <SkeletonPostUserCard />;
  }

  const currentUser = users.find((user) => user.id === Number(userId));

  if (error) {
    return (
      <Card>
        <Card.Body>
          <Card.Title>User Not Found</Card.Title>
        </Card.Body>
      </Card>
    );
  }

  if (currentUser === undefined) {
    return <div />;
  }

  const { name, email, phone, website } = currentUser;

  const fields = [
    { title: 'Full Name:', text: name },
    { title: 'Email:', text: email },
    { title: 'Phone:', text: phone },
    { title: 'Website:', text: website },
  ];

  return (
    <Card>
      <Card.Body>
        {fields.map((field) => (
          <Fragment key={field.title}>
            <Card.Title>{field.title}</Card.Title>
            <Card.Text>{field.text}</Card.Text>
          </Fragment>
        ))}
      </Card.Body>
    </Card>
  );
}
