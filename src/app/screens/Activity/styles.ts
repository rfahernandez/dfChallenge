import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/colors';
import { scale } from '@/utils/scale';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.alabaster,
  },
  content: {
    backgroundColor: Colors.alabaster,
    marginHorizontal: scale(20),
    justifyContent: 'space-between',
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
