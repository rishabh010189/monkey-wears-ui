import { selectedProduct } from '../../tests/mocks/data/selectedProduct';
import { effectiveVariant } from '../../tests/mocks/data/effectiveVariant';
import AddToCart from './AddToCart';
import { renderWithProviders } from '../../tests/utils/renderWithProviders';

const props = {
  product: selectedProduct,
  effectiveVariant: effectiveVariant,
};
describe('test add to cart component', () => {
  it('should render the component', () => {
    renderWithProviders(<AddToCart {...props} />);
  });
});
