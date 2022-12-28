import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../src/components/App';

describe('App component should ', () => {
  test('should render ButtonPanel and Display components', () => {
    const app = renderer.create(<App />);
    expect(app.toJSON()).toMatchSnapshot();
  });
});

describe('when App button is clicked', () => {
  it('displays number buttons on the Display component', () => {
    const numbers = '1234567890';
    render(<App />);

    expect(screen.getByRole('status')).toHaveTextContent('0');

    numbers.split('').forEach(async buttonText => {
      fireEvent.click(screen.getByRole('button', { name: buttonText }));
    });

    expect(screen.getByRole('status')).toHaveTextContent(numbers);
  });
});
