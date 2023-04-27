import { render } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';

import { Card } from '@/components';

describe('Card Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Card />);
    const cardContainer = getByTestId('card-container');
    expect(cardContainer).toBeTruthy();
  });

  it('renders children correctly', () => {
    const { getByTestId } = render(
      <Card>
        <View testID="card-child" />
      </Card>
    );
    const cardChild = getByTestId('card-child');
    expect(cardChild).toBeTruthy();
  });

  it('applies additional styles correctly', () => {
    const additionalStyles = { backgroundColor: 'red' };
    const { getByTestId } = render(<Card style={additionalStyles} />);
    const cardContainer = getByTestId('card-container');
    expect(cardContainer.props.style).toContainEqual(additionalStyles);
  });
});
