import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../src/components/App';

describe('App component should ', () => {
  test('should render BurronPanel and Display components', () => {
    const app = renderer.create(<App />);
    expect(app.toJSON()).toMatchSnapshot();
  });
});
