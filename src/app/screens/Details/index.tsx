import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { SafeAreaView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button, Card, LoadingImage, StatusBar, Text } from '@/app/components';
import { Routes } from '@/constants/routes';
import { TNavigation } from '@/interfaces/navigation';
import { getFormattedDate } from '@/utils/date';
import { Haptic } from '@/utils/haptic';
import { verticalScale } from '@/utils/scale';

import styles from './styles';

export const Details: React.FC<TNavigation<Routes.Details>> = ({ route }) => {
  const { product } = route.params;
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  const handleAcceptPress = useCallback(() => {
    navigation.goBack();
    Haptic.cancel();
  }, [navigation]);

  return (
    <>
      <StatusBar backgroundColor="periwinkle" />
      <SafeAreaView style={styles.container}>
        <View style={[styles.header, { height: verticalScale(150 - top) }]}>
          <Text style={styles.productName}>{product.product}</Text>
        </View>
        <View style={styles.content}>
          <Card style={styles.card}>
            <LoadingImage source={{ uri: product.image }} style={styles.asset} />
          </Card>
          <Text style={styles.description} color="dustyGray">
            Detalle del producto:
          </Text>
          <Text style={styles.date}>{`${product.is_redemption ? 'Canjeado' : 'Comprado'} el ${getFormattedDate(
            product.createdAt
          )}`}</Text>
          <Text style={styles.description} color="dustyGray">
            {`Con esta compra ${product.is_redemption ? 'canjeaste' : 'acumulaste'}:`}
          </Text>
          <Text style={styles.points}>{`${product.points} puntos`}</Text>
          <Button onPress={handleAcceptPress}>
            <Text style={styles.accept} color="white">
              Aceptar
            </Text>
          </Button>
        </View>
      </SafeAreaView>
    </>
  );
};
