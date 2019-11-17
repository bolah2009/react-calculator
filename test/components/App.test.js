import React from 'react';
import renderer from 'react-test-renderer';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from '../../src/components/App';

describe('App component should ', () => {
  test('should render ButtonPanel and Display components', () => {
    const app = renderer.create(<App />);
    expect(app.toJSON()).toMatchSnapshot();
  });
});

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

describe('when App button is clicked', () => {
  it('displays number buttons on the Display component', () => {
    act(() => {
      render(<App />, container);
    });

    const display = document.querySelector('#display');
    const button = document.querySelector('#button-0');
    expect(display.textContent).toBe('0');

    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(display.textContent).toBe('0');

    for (let i = 1; i < 10; i += 1) {
      act(() => {
        const button = document.querySelector(`#button-${i}`);
        button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
    }

    expect(display.textContent).toBe('0123456789');
  });
});
