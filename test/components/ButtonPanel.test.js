import React from 'react';
import renderer from 'react-test-renderer';
import ButtonPanel from '../../src/components/ButtonPanel';

describe('ButtonPanel component should ', () => {
  const handleClick = jest.fn();
  test('should render buttons in group', () => {
    const buttonPanel = renderer.create(<ButtonPanel clickHandler={i => handleClick(i)} />);
    expect(buttonPanel.toJSON()).toMatchSnapshot();
  });
});
