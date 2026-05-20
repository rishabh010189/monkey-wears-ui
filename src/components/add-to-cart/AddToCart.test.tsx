import { selectedProduct } from '../../tests/mocks/data/selectedProduct';
import { effectiveVariant } from '../../tests/mocks/data/effectiveVariant';
import AddToCart from './AddToCart';
import { renderWithProviders } from '../../tests/utils/renderWithProviders';
import { screen } from '@testing-library/react';
import { store } from '../../app/store';
import userEvent from '@testing-library/user-event';

const props = {
  product: selectedProduct,
  effectiveVariant: effectiveVariant,
};
describe('test add to cart component', () => {
  it('should render the component', () => {
    renderWithProviders(<AddToCart {...props} />);
  });

  it('should render the blue color button for category men', () => {
    renderWithProviders(<AddToCart {...props} />);
    expect(screen.getByRole('button')).toHaveClass('bg-blue-500');
  });

  it('should add the item to the store on btn click', async () => {
    renderWithProviders(<AddToCart {...props} />);
    const btn = screen.getByRole('button', { name: /add-to-cart-btn/i });
    await userEvent.click(btn);
    const state = store.getState();
    expect(state.cart.items).toHaveLength(1);
  });
});
