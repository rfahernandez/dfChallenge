import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import { Text } from '@/app/components';
import { Product } from '@/interfaces/products';
import { getFormattedDate } from '@/utils/date';

import { styles } from './styles';

const chevron = require('@/assets/chevron.png');

interface Props {
  product: Product;
  onPress: (product: Product) => void;
}

export const ProductItem: React.FC<Props> = ({ product, onPress }) => {
  const handlePress = () => {
    onPress(product);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.asset} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.product}</Text>
        <Text style={styles.date}>{getFormattedDate(product.createdAt)}</Text>
      </View>
      <View style={styles.pointsContainer}>
        <Text style={styles.points}>
          <Text color={product.is_redemption ? 'red' : 'jade'}>{product.is_redemption ? '- ' : '+ '}</Text>
          {product.points}
        </Text>
      </View>
      <Image source={chevron} style={styles.chevron} />
    </TouchableOpacity>
  );
};
