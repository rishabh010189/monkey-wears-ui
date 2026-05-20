import { describe, expect, it, vi } from 'vitest';
import { renderWithProviders } from '../../tests/utils/renderWithProviders';
import FancySearch from './FancySearch';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const navigateMock = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');

  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

describe('test fancy search feature component', () => {
  it('should render the component', () => {
    const { container } = renderWithProviders(<FancySearch />);
    expect(container).toBeDefined();
  });

  it('should show the search input', () => {
    renderWithProviders(<FancySearch />);
    const inpElm = screen.getByRole('textbox', { name: 'search-anything' });
    expect(inpElm).toBeInTheDocument();
  });

  it('should trigger search handler on input change', async () => {
    renderWithProviders(<FancySearch />);
    const inpElm = screen.getByRole('textbox', { name: 'search-anything' });
    await userEvent.type(inpElm, 'joggers');
    expect(inpElm).toHaveValue('joggers');
    expect(await screen.findByText(/Monochrome/i)).toBeInTheDocument();
    expect(await screen.findByText(/3 matching products/i)).toBeInTheDocument();
  });

  it('should submit the form on enter key and navigate to search page', async () => {
    const user = userEvent.setup();
    renderWithProviders(<FancySearch />);
    const inpElm = screen.getByRole('textbox', { name: 'search-anything' });
    await user.type(inpElm, 'joggers');
    await user.keyboard('{Enter}');
    expect(navigateMock).toHaveBeenCalledWith({
      pathname: '/search',
      search: 'q=joggers',
    });
  });
});
