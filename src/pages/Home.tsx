import React, { useCallback } from 'react';
import { Stack, Text, Title } from '@mantine/core';
import { Trans, useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { LanguageToggle } from 'src/components/languageToggle';

export const Home: React.FC = () => {
  const { t } = useTranslation('common');

  const navigate = useNavigate();

  const navigateToFestivals = useCallback(
    () => navigate('festivals/'),
    [navigate]
  );

  return (
    <>
      <Stack className="content" justify="center">
        <LanguageToggle />

        <Title order={1} mb="lg">
          {t('HEADLINE')}
        </Title>
        <Stack gap="sm">
          <Text>{t('GREETING')}</Text>
          <Text>
            <Trans
              i18nKey="INFO"
              components={{
                a: (
                  <a
                    href="https://github.com/hypeIT-GmbH/hypeit-frontend-challenge/blob/main/README.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                ),
              }}
            />
          </Text>
        </Stack>

        <Text
          style={{
            fontSize: 24,
            fontWeight: 700,
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
          onClick={navigateToFestivals}
        >
          {t('CTA')}
        </Text>
      </Stack>
    </>
  );
};
