import { ReactNode } from 'react';
import { Button, useAccordionButton } from 'react-bootstrap';

interface CustomToggleProps {
  children: ReactNode;
  eventKey: string;
  callback?: () => void;
}

export default function CustomToggle({ children, eventKey, callback }: CustomToggleProps) {
  const decoratedOnClick = useAccordionButton(eventKey, callback);

  return (
    <Button variant='primary' type='button' onClick={decoratedOnClick}>
      {children}
    </Button>
  );
}

CustomToggle.defaultProps = { callback: () => {} };
