import React from 'react';

import { Card, Text } from '@/app/components';

import { styles } from './styles';

interface Props {
  points: number;
}

export const ActivityPoints: React.FC<Props> = ({ points }) => {
  return (
    <>
      <Text style={styles.header} color="dustyGray">
        TUS PUNTOS
      </Text>
      <Card style={styles.card}>
        <>
          <Text style={[styles.month]} color="white">
            Diciembre
          </Text>
          <Text style={styles.points} color="white">
            {points} pts
          </Text>
        </>
      </Card>
    </>
  );
};
