/* eslint-disable react/react-in-jsx-scope */

import { useMemo } from 'react';
import { Flex, Image, Stack, Text, Title } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { useQueryFestivals } from 'src/api/generated/apiComponents';
import { ErrorIndicator } from 'src/components/ErrorIndicator';
import { LoadingIndicator } from 'src/components/LoadingIndicator';
import { formatLocation, formatStartEndDates } from 'src/utils/helpers';

const FestivalDetailPage = () => {
  const { id } = useParams();

  // was thinking of using redux here, but due to less time and too much boilerplate, i decided to simply fetch the data.
  const { data, isFetching, isError } = useQueryFestivals({});

  const festival = useMemo(() => {
    if (!data) {
      return null;
    }

    return data.find((f) => f.id === id);
  }, [data, id]);

  const location = useMemo(
    () => formatLocation(festival?.location),
    [festival]
  );

  const dates = useMemo(
    () => formatStartEndDates(festival?.start, festival?.end),
    [festival?.start, festival?.end]
  );

  const artists = useMemo(() => {
    if (!festival?.artists) {
      return null;
    }

    return festival?.artists?.map((artist) => artist.name).join(' - ');
  }, [festival?.artists]);

  if (!festival) {
    return (
      <Stack className="content" align="center" justify="center" p="md">
        <ErrorIndicator />
      </Stack>
    );
  }

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
    <Flex
      className="content"
      direction={{ base: 'column', sm: 'row' }}
      align="center"
      justify="center"
      gap={{ base: 'sm', sm: 'lg' }}
      p="lg"
      wrap="wrap"
    >
      <Stack gap="md">
        <Title order={2}> {festival.name}</Title>

        <Text>{dates}</Text>

        <Text>{location}</Text>
      </Stack>

      <Image
        src={festival.image}
        alt={festival.name || 'festival image'}
        height={600}
        fit="cover"
      />

      {artists && <Text>{artists}</Text>}

      <Text>{festival.info}</Text>
    </Flex>
  );
};

export default FestivalDetailPage;
