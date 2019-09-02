import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import App from './App';

let container: HTMLElement = document.createElement("div");

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = document.createElement("div");
});


it('renders without crashing', () => {
  act(() => {
    render(<App />, container);
  });
});

it('render title', () => {
  act(() => {
    render(<App />, container);
  });

  expect(container.textContent).toBe("Hi, there!");
});

it('render all input', () => {
  act(() => {
    render(<App />, container);
  });
  
  expect(container.querySelectorAll('input').length).toBe(3);
  expect(container.querySelector('textarea')).toBeInstanceOf(HTMLTextAreaElement)
});