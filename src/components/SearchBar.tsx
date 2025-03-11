/* eslint-disable react/react-in-jsx-scope */

import { useCallback } from 'react';
import { TextInput } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { FiSearch } from 'react-icons/fi';

type SearchBarProps = {
  value: string;
  setValue: (value: string) => void;
};

export const SearchBar = ({ value, setValue }: SearchBarProps) => {
  const { t } = useTranslation('common');

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  return (
    <TextInput
      placeholder={t('SEARCH_PLACEHOLDER')}
      value={value}
      onChange={handleOnChange}
      mb="md"
      style={{ width: '400px' }}
      leftSection={<FiSearch size={18} />}
      leftSectionWidth={40}
      radius="lg"
    />
  );
};
