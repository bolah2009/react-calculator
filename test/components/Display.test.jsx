import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Display from '../../src/components/Display';

describe('Display component', () => {
  test('should render with default result value', () => {
    const display = renderer.create(<Display />);
    expect(display.toJSON()).toMatchSnapshot();
  });

  test('should render with an assigned result value', () => {
    const display = renderer.create(<Display result="20" />);
    expect(display.toJSON()).toMatchSnapshot();
  });

  test('should render with an assigned result value and current button', () => {
    const display = renderer.create(<Display result="20" currentButton="+" />);
    expect(display.toJSON()).toMatchSnapshot();
  });
});

describe('when result prop is supplied', () => {
  it('renders with the supplied result', () => {
    render(<Display result="500" />);

    const container = screen.getByRole('status');
    expect(container).toHaveTextContent('500');
  });
});

describe('when no result prop is supplied', () => {
  it('renders with a default 0 result', () => {
    render(<Display />);

    const container = screen.getByRole('status');
    expect(container).toHaveTextContent('0');
  });
});

describe('when currentButton prop is supplied', () => {
  it('renders with the supplied currentButton', () => {
    render(<Display currentButton="X" />);

    const container = screen.getByRole('presentation');
    expect(container).toHaveTextContent('X');
  });
});

describe('when no currentButton prop is supplied', () => {
  it('renders no currentButton', () => {
    render(<Display />);

    const container = screen.getByRole('presentation');
    expect(container).toHaveTextContent('');
  });
});
