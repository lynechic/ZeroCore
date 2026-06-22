// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ZeroCore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ZeroCore/i);
    expect(titleElement).toBeInTheDocument();
});
