import React from 'react';
import renderer from 'react-test-renderer';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Display from '../../src/components/Display';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Display component', () => {
  test('should render with default result value', () => {
    const display = renderer.create(<Display />);
    expect(display.toJSON()).toMatchSnapshot();
  });

  test('should render with an assigned result value', () => {
    const display = renderer.create(<Display result="20" />);
    expect(display.toJSON()).toMatchSnapshot();
  });
});

it('renders with or without result property', () => {
  act(() => {
    render(<Display />, container);
  });
  expect(container.textContent).toBe('0');

  act(() => {
    render(<Display result="500" />, container);
  });
  expect(container.textContent).toBe('500');
});
