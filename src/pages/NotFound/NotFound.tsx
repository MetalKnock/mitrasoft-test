import { Container, Image, Stack } from 'react-bootstrap';
import hero from 'src/assets/404-hero.svg';

export default function NotFound() {
  return (
    <Container>
      <Stack className='justify-content-center text-center'>
        <h1>Page not found</h1>
        <Image src={hero} />
      </Stack>
    </Container>
  );
}
