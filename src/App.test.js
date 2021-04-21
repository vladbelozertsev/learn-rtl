import { render, screen } from '@testing-library/react';
import SearchTypes from './components/SearchTypes';
import SearchVariants from './components/SearchVariants';

// Первые две части describe(...) касаются касаются поисковых запросов - getBy/queryBy/findBy.
// Приоритет использования методов данных запросов: https://testing-library.com/docs/queries/about#priority

describe('Lesson search types', () => {
  // Методы getBy... сразу возвращают ошибку, если элемента нет в разметке
  // Подробнее: https://testing-library.com/docs/queries/about#types-of-queries

  // Поиск по тексту в разметке:
  it('render SearchTypes component and search by text', () => {
    render(<SearchTypes />);
    // screen.debug(); // - в случае ошибки выводит в консоль HTML-разметку соответствующего компонента (см render(...))
    expect(screen.getByText(/Search:/i)).toBeInTheDocument();
    expect(screen.getByText(/Searches for/i)).toBeInTheDocument();
  });

  // Поиск по ролям:
  // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
  it('render SearchTypes component and search by role', () => {
    render(<SearchTypes />);
    // screen.debug(); // - в случае ошибки выводит в консоль HTML-разметку соответствующего компонента (см render(...))
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    // Роль формы должна быть определена явно, через aria-label атрибут:
    // https://github.com/testing-library/dom-testing-library/issues/474
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('render SearchTypes component and search by other methods', () => {
    render(<SearchTypes />);
    // screen.debug(); // - в случае ошибки выводит в консоль HTML-разметку соответствующего компонента (см render(...))
    expect(screen.getByPlaceholderText('search text...')).toBeInTheDocument();
    expect(screen.getByAltText('search image')).toBeInTheDocument();
    expect(screen.getByDisplayValue('yoyo')).toBeInTheDocument();
  });
});

describe('Lesson search variants', () => {
  // Методы queryBy... возвращают null, если элемента нет в разметке, и ошибку, если элементов более одного
  // Методы findBy... возвращают промисс, который разрешается в случае если элемент появляется в разментке. Данные
  // методы подходят для работы с асинхронным кодом
  // Подробнее: https://testing-library.com/docs/queries/about#types-of-queries

  it('render SearchVariants component and search by', async () => {
    render(<SearchVariants />);

    // expect(screen.queryByText(/Searches for React/i)).toBeNull();
    expect(screen.queryByText(/Logged in as/i)).toBeNull();
    screen.debug();

    expect(await screen.findByText(/Logged in as/i)).toBeInTheDocument();

    screen.debug();
  });
});
