import React from 'react';
import renderer from 'react-test-renderer';
import ButtonPanel from '../../src/components/ButtonPanel';

describe('ButtonPanel component should ', () => {
  test('should render buttons in group', () => {
    const buttonPanel = renderer.create(<ButtonPanel />);
    expect(buttonPanel.toJSON()).toMatchSnapshot();
  });
});
