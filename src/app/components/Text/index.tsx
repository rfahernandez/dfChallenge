import React from 'react';
import { Text as RNText, TextProps } from 'react-native';

import { Colors } from '@/constants/colors';

interface Props extends TextProps {
  color?: keyof typeof Colors;
}

export const Text: React.FC<Props> = ({ style, color = 'black', children, ...props }) => {
  return (
    <RNText testID="text" allowFontScaling={false} style={[style, { color: Colors[color] }]} {...props}>
      {children}
    </RNText>
  );
};
