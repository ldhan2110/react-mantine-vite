import { notifications } from '@mantine/notifications';
import { IconX, IconCheck, IconExclamationMark, IconInfoCircleFilled } from '@tabler/icons-react';

export function useNotification() {
  const notifyInfo = (message: string) => {
    notifications.show({
      title: 'Info',
      message,
      color: 'blue',
      position: 'top-right',
      icon: <IconInfoCircleFilled />,
    });
  };

  const notifySuccess = (message: string) => {
    notifications.show({
      title: 'Success',
      message,
      color: 'teal',
      position: 'top-right',
      icon: <IconCheck />,
    });
  };

  const notifyError = (message: string) => {
    notifications.show({
      title: 'Error',
      message,
      color: 'red',
      position: 'top-right',
      icon: <IconX />,
    });
  };

  const notifyWarning = (message: string) => {
    notifications.show({
      title: 'Warning',
      message,
      color: 'yellow',
      position: 'top-right',
      icon: <IconExclamationMark />,
    });
  };

  return { notifyInfo, notifySuccess, notifyError, notifyWarning };
}
