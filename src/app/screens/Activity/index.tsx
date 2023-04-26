import React from 'react';
import { ActivityIndicator, Pressable, SafeAreaView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text } from '@/app/components';
import { Colors } from '@/constants/colors';
import { useProducts } from '@/hooks/useProducts';

import { ActivityHeader } from './components/Header';
import { ActivityPoints } from './components/Points';
import { Products } from './components/Products';
import { styles } from './styles';

interface Props {}

export const Activity: React.FC<Props> = () => {
  const { products, isLoading, isError } = useProducts();
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
      <View style={[styles.content, { marginTop: 60 - top }]}>
        <ActivityHeader />
        <ActivityPoints points={10000} />
        <Products products={products} />
        {/* Buttons */}
        <View>
          <Pressable>
            <Text>Ganados</Text>
          </Pressable>
          <Pressable>
            <Text>Canjeados</Text>
          </Pressable>
        </View>
        <Text>Todos</Text>
      </View>
    </SafeAreaView>
  );
};
