import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  // Поиск по тексту в разметке:
  it('render App component and search by text', () => {
    render(<App />);
    screen.debug(); // - в случае ошибки выводит в консоль HTML-разметку соответствующего компонента (см render(...))
    expect(screen.getByText(/Search:/i)).toBeInTheDocument();
    expect(screen.getByText(/Searches for/i)).toBeInTheDocument();
  });

  // Поиск по ролям:
  // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
  it('render App component and search by role', () => {
    render(<App />);
    screen.debug(); // - в случае ошибки выводит в консоль HTML-разметку соответствующего компонента (см render(...))
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    // Роль формы должна быть определена явно, через aria-label атрибут:
    // https://github.com/testing-library/dom-testing-library/issues/474
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('render App component and search by other methods', () => {
    render(<App />);
    screen.debug(); // - в случае ошибки выводит в консоль HTML-разметку соответствующего компонента (см render(...))
    expect(screen.getByPlaceholderText('search text...')).toBeInTheDocument();
    expect(screen.getByAltText('search image')).toBeInTheDocument();
    expect(screen.getByDisplayValue('yoyo')).toBeInTheDocument();
  });
});
