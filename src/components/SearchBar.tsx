/* eslint-disable react/react-in-jsx-scope */

import { useCallback } from 'react';
import { TextInput } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { FiSearch } from 'react-icons/fi';

type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

export const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  const { t } = useTranslation('common');

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    [setSearchTerm]
  );

  return (
    <TextInput
      placeholder={t('SEARCH_PLACEHOLDER')}
      value={searchTerm}
      onChange={handleOnChange}
      mb="md"
      style={{ width: '400px' }}
      leftSection={<FiSearch size={18} />}
      leftSectionWidth={40}
      radius="lg"
    />
  );
};
