/* eslint-disable react/react-in-jsx-scope */

import { useMemo } from 'react';
import { Card, Flex, Image, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { FiMapPin } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { FestivalType } from 'src/api/generated/apiSchemas';
import { formatLocation, formatStartEndDates } from 'src/utils/helpers';

type FestivalCardProps = {
  festival: FestivalType;
};

export const FestivalCard = ({ festival }: FestivalCardProps) => {
  const { t } = useTranslation('festivals');

  const navigate = useNavigate();

  const location = useMemo(() => {
    const formattedLocation = formatLocation(festival.location);

    if (!formattedLocation) {
      return t('NO_LOCATION');
    }

    return formattedLocation;
  }, [t, festival.location]);

  const dates = useMemo(() => {
    const formattedDates = formatStartEndDates(festival?.start, festival?.end);

    if (!formattedDates) {
      return t('NO_DATES');
    }

    return formatStartEndDates(festival?.start, festival?.end);
  }, [t, festival?.start, festival?.end]);

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{ minWidth: 300, minHeight: 300, gap: 12 }}
    >
      <Card.Section>
        <Image
          src={festival.image}
          height={160}
          alt={festival.name || 'festival image'}
        />
      </Card.Section>

      <Text style={{ fontWeight: 700 }} size="lg">
        {festival.name}
      </Text>

      <Text size="sm" color="gray">
        {dates}
      </Text>

      <Flex align="center" gap="xs">
        <FiMapPin size={16} />

        <Text size="xs">{location}</Text>
      </Flex>

      <Text
        size="sm"
        style={{ textDecoration: 'underline', cursor: 'pointer' }}
        onClick={() => navigate(`/festival/${festival.id}`)}
      >
        {t('MORE')}
      </Text>
    </Card>
  );
};
