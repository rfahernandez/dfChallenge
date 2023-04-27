import React, { memo } from 'react';

import { Text } from '@/components';

import { styles } from './styles';

const ActivityHeader = () => {
  return (
    <>
      <Text style={styles.welcome}>Bienvenido de vuelta!</Text>
      <Text style={styles.name}>Ruben Rodriguez</Text>
    </>
  );
};

export const MemoHeader = memo(ActivityHeader);
