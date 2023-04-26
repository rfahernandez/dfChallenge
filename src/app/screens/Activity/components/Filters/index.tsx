import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { View } from 'react-native';

import { Button, Text } from '@/app/components';
import { Filters } from '@/interfaces/products';
import { Haptic } from '@/utils/haptic';

import { styles } from './styles';

interface Props {
  setFilter: Dispatch<SetStateAction<Filters>>;
  filter: Filters;
}

export const ActivityFilters: React.FC<Props> = ({ setFilter, filter }) => {
  const handleCleanFilter = useCallback(() => {
    Haptic.cancel();
    setFilter(null);
  }, [setFilter]);

  const handleEarnedPress = useCallback(() => {
    Haptic.success();
    setFilter('earned');
  }, [setFilter]);

  const handleRedeemedPress = useCallback(() => {
    Haptic.success();
    setFilter('redeemed');
  }, [setFilter]);

  return (
    <View style={styles.container}>
      {filter ? (
        <Button onPress={handleCleanFilter}>
          <Text style={styles.allProducts} color="white">
            Todos
          </Text>
        </Button>
      ) : (
        <>
          <Button style={styles.filterButton} onPress={handleEarnedPress}>
            <Text style={styles.filterText} color="white">
              Ganados
            </Text>
          </Button>
          <Button style={styles.filterButton} onPress={handleRedeemedPress}>
            <Text style={styles.filterText} color="white">
              Canjeados
            </Text>
          </Button>
        </>
      )}
    </View>
  );
};
