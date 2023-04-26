import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';

import { Text } from '@/app/components';
import { Product } from '@/interfaces/products';

import { styles } from './styles';

interface Props {
  products: Product[];
}

export const Products: React.FC<Props> = ({ products }) => {
  const renderItem = useCallback(({ item }: { item: Product }) => {
    return <Text>{item.product}</Text>;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header} color="dustyGray">
        TUS MOVIMIENTOS
      </Text>
      <FlatList data={products} renderItem={renderItem} style={styles.list} />
    </View>
  );
};
