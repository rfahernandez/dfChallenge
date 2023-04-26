import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/colors';
import { Fonts } from '@/constants/fonts';
import { scale, verticalScale } from '@/utils/scale';

export const styles = StyleSheet.create({
  container: {},
  header: {
    ...Fonts.h5,
    marginVertical: verticalScale(20),
  },
  list: {
    height: verticalScale(350),
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(20),
    marginBottom: verticalScale(43),
  },
});
