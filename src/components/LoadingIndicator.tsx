/* eslint-disable react/react-in-jsx-scope */

import { Loader, Stack, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export const LoadingIndicator = () => {
  const { t } = useTranslation('common');

  return (
    <Stack align="center" justify="center" p="md">
      <Loader size="lg" />

      <Text>{t('LOADING')}</Text>
    </Stack>
  );
};
