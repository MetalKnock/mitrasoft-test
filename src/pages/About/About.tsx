import { Container, Image, ListGroup, Stack } from 'react-bootstrap';
import { ABOUT_INFO, PROJECTS } from 'src/constants/common';
import photo from 'src/assets/photo.jpg';

export default function About() {
  return (
    <Container>
      <Stack className='mt-3' gap={3}>
        <Image rounded src={photo} width={100} height={100} />
        <h4>About:</h4>
        <ListGroup as='ul'>
          {ABOUT_INFO.map((info) => (
            <ListGroup.Item key={info.title}>
              <p>{`${info.title}: ${info.description}`}</p>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <h4>List of projects:</h4>
        <ListGroup as='ul'>
          {PROJECTS.map((project) => (
            <ListGroup.Item key={project.title}>
              <a href={project.link}>{project.title}</a>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Stack>
    </Container>
  );
}
