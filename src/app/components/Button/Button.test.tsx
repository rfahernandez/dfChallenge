import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { verticalScale } from '@/utils/scale';

import { Text } from '../Text';
import { Button } from './';

describe('Button component', () => {
  it('should render children prop', () => {
    const { getByText } = render(
      <Button>
        <Text>Click me</Text>
      </Button>
    );
    expect(getByText('Click me')).toBeDefined();
  });

  it('should call onPress callback when pressed', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(<Button onPress={mockOnPress}>Press me</Button>);
    fireEvent.press(getByTestId('button'));
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('should apply style prop', () => {
    const { getByTestId } = render(<Button style={{ backgroundColor: 'red' }}>Style me</Button>);
    const button = getByTestId('button');
    expect(button.props.style.backgroundColor).toBe('red');
  });

  it('should apply default styles', () => {
    const { getByTestId } = render(<Button>Default style</Button>);
    const button = getByTestId('button');
    expect(button.props.style.backgroundColor).toBe('#334FFA');
    expect(button.props.style.justifyContent).toBe('center');
    expect(button.props.style.height).toBe(verticalScale(50));
    expect(button.props.style.borderRadius).toBe(10);
  });
});
