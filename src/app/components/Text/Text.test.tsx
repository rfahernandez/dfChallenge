import { render } from '@testing-library/react-native';
import React from 'react';

import { Colors } from '@/constants/colors';

import { Text } from './';

describe('Text Component', () => {
  it('renders correctly with default color', () => {
    const { getByTestId } = render(<Text testID="text">Hello World</Text>);
    const text = getByTestId('text');
    expect(text).toBeTruthy();
    expect(text.props.style).toContainEqual({ color: Colors.black });
  });

  it('renders correctly with specified color', () => {
    const { getByTestId } = render(
      <Text testID="text" color="red">
        Hello World
      </Text>
    );
    const text = getByTestId('text');
    expect(text).toBeTruthy();
    expect(text.props.style).toContainEqual({ color: '#FF0000' });
  });

  it('renders children correctly', () => {
    const { getByTestId } = render(<Text testID="text">Hello World</Text>);
    const text = getByTestId('text');
    expect(text.props.children).toBe('Hello World');
  });
});
