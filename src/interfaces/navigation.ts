import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationOptions, NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Routes } from '@/constants/routes';

import { Product } from './products';

export type StackParamList = {
  [Routes.Details]: {
    product: Product;
  };
};

export type TNavigation<R extends keyof StackParamList> = {
  route: TRoute<R>;
  navigation: NativeStackNavigationProp<StackParamList, R>;
};

export type TRoute<R extends keyof StackParamList> = RouteProp<StackParamList, R>;

export type AppNavOptions = {
  [K in Routes]?: NativeStackNavigationOptions;
};
