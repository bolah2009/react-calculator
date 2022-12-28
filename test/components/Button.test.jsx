import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../../src/components/Button';

const handleClick = jest.fn();

describe('Button component', () => {
  test('should render with orange default background color', () => {
    const button = renderer.create(
      <Button handleClick={i => handleClick(i)} name="0" isWide={false} />,
    );
    expect(button.toJSON()).toMatchSnapshot();
  });

  test('should render with grey background color', () => {
    const button = renderer.create(
      <Button
        handleClick={i => handleClick(i)}
        color="grey"
        name="+"
        isWide={false}
      />,
    );
    expect(button.toJSON()).toMatchSnapshot();
  });

  test('should render with 50% width when isWide is true', () => {
    const button = renderer.create(
      <Button handleClick={i => handleClick(i)} color="grey" name="0" isWide />,
    );
    expect(button.toJSON()).toMatchSnapshot();
  });
});

describe('when isWide is true', () => {
  it('renders button name with "wide" class', () => {
    render(<Button handleClick={i => handleClick(i)} name="=" isWide />);

    const container = screen.getByRole('button', { name: '=' });

    expect(container).toHaveTextContent('=');
    expect(container).toHaveClass('wide');
  });
});

describe('when isWide is false', () => {
  it('renders button name with no "wide" class', () => {
    render(
      <Button handleClick={i => handleClick(i)} name="=" isWide={false} />,
    );

    const container = screen.getByRole('button', { name: '=' });

    expect(container).toHaveTextContent('=');
    expect(container).not.toHaveClass('wide');
  });
});

describe('when color prop is supplied', () => {
  it('renders with the supplied color', () => {
    render(
      <Button
        handleClick={i => handleClick(i)}
        color="lightgrey"
        name="="
        isWide
      />,
    );

    const container = screen.getByRole('button', { name: '=' });
    expect(container).toHaveStyle('background-color: lightgrey');
  });
});

describe('when no color prop is supplied', () => {
  it('renders with a default orange color', () => {
    render(<Button handleClick={i => handleClick(i)} name="=" isWide />);

    const container = screen.getByRole('button', { name: '=' });
    expect(container).toHaveStyle('background-color: orange');
  });
});
