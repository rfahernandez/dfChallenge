import React from 'react';
import { ActivityIndicator, SafeAreaView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text } from '@/app/components';
import { Colors } from '@/constants/colors';
import { useProducts } from '@/hooks/useProducts';
import { verticalScale } from '@/utils/scale';

import { ActivityFilters } from './components/Filters';
import { MemoHeader as ActivityHeader } from './components/Header';
import { ActivityPoints } from './components/Points';
import { Products } from './components/Products';
import { styles } from './styles';

export const Activity = () => {
  const { filteredProducts, isLoading, isError, setFilter, filter, points } = useProducts();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={styles.fallbackContainer}>
        <ActivityIndicator size={'large'} color={Colors.blueRibbon} />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.fallbackContainer}>
        <Text>¡Ups! Ocurrio un error al cargar tus movimientos</Text>
        <Text>Por favor, reinicia la app.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.content, { marginTop: verticalScale(60 - top) }]}>
        <ActivityHeader />
        <ActivityPoints points={points} />
        <Products products={filteredProducts} />
        <ActivityFilters setFilter={setFilter} filter={filter} />
      </View>
    </SafeAreaView>
  );
};
