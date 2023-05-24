import { ReactNode } from 'react';
import { Button, useAccordionButton } from 'react-bootstrap';

interface CustomToggleProps {
  children: ReactNode;
  eventKey: string;
  className?: string;
  callback?: () => void;
}

export default function CustomToggle({
  children,
  eventKey,
  className,
  callback,
}: CustomToggleProps) {
  const decoratedOnClick = useAccordionButton(eventKey, callback);

  return (
    <Button className={className} variant='primary' type='button' onClick={decoratedOnClick}>
      {children}
    </Button>
  );
}

CustomToggle.defaultProps = { className: '', callback: () => {} };
