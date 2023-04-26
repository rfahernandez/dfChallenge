import { StyleSheet } from 'react-native';

import { Fonts } from '@/constants/fonts';
import { scale } from '@/utils/scale';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  allProducts: {
    ...Fonts.h4,
    fontFamily: 'Avenir-Black',
  },
  filterText: Fonts.paragraph,
  filterButton: {
    width: scale(170),
  },
});
