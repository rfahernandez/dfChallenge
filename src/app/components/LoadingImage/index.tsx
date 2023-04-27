import React, { useState } from 'react';
import { ActivityIndicator, Image, ImageSourcePropType, ImageStyle, StyleProp, View } from 'react-native';

import { styles } from './styles';

interface Props {
  source: ImageSourcePropType;
  style: StyleProp<ImageStyle>;
}

export const LoadingImage: React.FC<Props> = ({ source, style }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <View style={style}>
      {isLoading && <ActivityIndicator testID="loader" style={styles.loader} />}
      <Image testID="image" source={source} style={style} onLoadEnd={handleImageLoad} />
    </View>
  );
};
