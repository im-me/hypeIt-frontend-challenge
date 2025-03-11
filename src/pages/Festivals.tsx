/* eslint-disable react/react-in-jsx-scope */

import { useEffect, useState } from 'react';
import { Box, Stack, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useQueryFestivals } from 'src/api/generated/apiComponents';
import { EmptyStateIndicator } from 'src/components/EmptyStateIndicator';
import { ErrorIndicator } from 'src/components/ErrorIndicator';
import { FestivalCard } from 'src/components/FestivalCard';
import { LanguageToggle } from 'src/components/languageToggle';
import { LoadingIndicator } from 'src/components/LoadingIndicator';
import { SearchBar } from 'src/components/SearchBar';
import { useFestivalFilter } from 'src/hooks/useFestivalFilter';

export const Festivals = () => {
  useTranslation('festivals');

  const { data, isFetching, isError } = useQueryFestivals({});

  const [searchInput, setSearchInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFestivals = useFestivalFilter(data ?? [], searchTerm);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchTerm(searchInput);
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [searchInput]);

  if (isFetching) {
    return (
      <Stack className="content" align="center" justify="center" p="md">
        <LoadingIndicator />
      </Stack>
    );
  }

  if (isError) {
    return (
      <Stack className="content" align="center" justify="center" p="md">
        <ErrorIndicator />
      </Stack>
    );
  }

  return (
    <Stack
      className="content"
      align="center"
      justify="flex-start"
      gap="lg"
      p="md"
    >
      <LanguageToggle />

      <Title order={1} mb="lg">
        Festivals
      </Title>

      <SearchBar searchTerm={searchInput} setSearchTerm={setSearchInput} />

      <Stack
        gap="xl"
        justify="center"
        style={{
          maxWidth: '800px',
          width: '100%',
        }}
      >
        {filteredFestivals.length === 0 ? (
          <EmptyStateIndicator />
        ) : (
          filteredFestivals?.map((festival) => (
            <Box key={festival.id} style={{ minWidth: '300px' }}>
              <FestivalCard key={festival.id} festival={festival} />
            </Box>
          ))
        )}
      </Stack>
    </Stack>
  );
};
