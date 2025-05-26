import { Button as MantineButton, type ButtonProps as MantineButtonProps } from '@mantine/core';

type ButtonProps = MantineButtonProps & {
  type?: 'primary' | 'secondary' | 'danger' | 'default' | 'link';
  danger?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export function Button({ children, type = 'default', danger, ...props }: ButtonProps) {
  let variant = 'default';
  switch (type) {
    case 'primary':
      variant = 'filled';
      break;
    case 'secondary':
      variant = 'outline';
      break;
    case 'link':
      variant = 'transparent';
      break;
    default:
      variant = 'default';
  }

  if (danger) {
    return (
      <MantineButton variant="filled" color="red" size={props.size || 'sm'} {...props}>
        {children}
      </MantineButton>
    );
  }

  return (
    <MantineButton variant={variant} size={props.size || 'sm'} {...props}>
      {children}
    </MantineButton>
  );
}
