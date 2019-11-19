import React from 'react';
import renderer from 'react-test-renderer';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Button from '../../src/components/Button';

let container = null;
const handleClick = jest.fn();
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Button component', () => {
  test('should render with orange default background color', () => {
    const button = renderer.create(
      <Button onClick={i => handleClick(i)} name="0" isWide={false} />,
    );
    expect(button.toJSON()).toMatchSnapshot();
  });

  test('should render with grey background color', () => {
    const button = renderer.create(
      <Button onClick={i => handleClick(i)} color="grey" name="+" isWide={false} />,
    );
    expect(button.toJSON()).toMatchSnapshot();
  });

  test('should render with 50% width when isWide is true', () => {
    const button = renderer.create(
      <Button onClick={i => handleClick(i)} color="grey" name="0" isWide />,
    );
    expect(button.toJSON()).toMatchSnapshot();
  });
});

it('renders with name and isWide property', () => {
  act(() => {
    render(<Button onClick={i => handleClick(i)} name="=" isWide />, container);
  });

  expect(container.textContent).toBe('=');
});

it('renders with or without color property', () => {
  act(() => {
    render(<Button onClick={i => handleClick(i)} name="=" isWide />, container);
  });
  expect(container.firstChild.style.backgroundColor).toBe('orange');

  act(() => {
    render(<Button onClick={i => handleClick(i)} color="lightgrey" name="=" isWide />, container);
  });

  expect(container.firstChild.style.backgroundColor).toBe('lightgrey');
});
