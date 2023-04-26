import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';

import { Text } from '@/app/components';
import { Routes } from '@/constants/routes';
import { StackParamList } from '@/interfaces/navigation';
import { Product } from '@/interfaces/products';
import { Haptic } from '@/utils/haptic';

import { ProductItem } from '../Product';
import { styles } from './styles';

interface Props {
  products: Product[];
}

export const Products: React.FC<Props> = ({ products }) => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  const handleProductPress = useCallback(
    (product: Product) => {
      Haptic.success();
      navigation.navigate(Routes.Details, { product });
    },
    [navigation]
  );

  const renderItem = useCallback(
    ({ item }: { item: Product }) => {
      return <ProductItem product={item} onPress={handleProductPress} />;
    },
    [handleProductPress]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header} color="dustyGray">
        TUS MOVIMIENTOS
      </Text>
      <FlatList data={products} renderItem={renderItem} style={styles.list} />
    </View>
  );
};
