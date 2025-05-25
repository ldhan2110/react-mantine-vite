import { useDisclosure } from '@mantine/hooks';

export const useToggle = (initialValue?: boolean) => {
  const [isToggle, { toggle: toggle }] = useDisclosure(initialValue);
  return {
    isToggle,
    toggle,
  };
};
