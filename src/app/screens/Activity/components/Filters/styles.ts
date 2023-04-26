import { StyleSheet } from 'react-native';

import { Fonts } from '@/constants/fonts';
import { scale, verticalScale } from '@/utils/scale';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalScale(43),
  },
  allProducts: Fonts.h4Bold,
  filterText: Fonts.paragraph,
  filterButton: {
    width: scale(170),
  },
});
