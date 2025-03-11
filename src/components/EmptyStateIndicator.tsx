/* eslint-disable react/react-in-jsx-scope */

import { Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export const EmptyStateIndicator = () => {
  const { t } = useTranslation('common');

  return <Title order={2}>{t('EMPTY')}</Title>;
};
