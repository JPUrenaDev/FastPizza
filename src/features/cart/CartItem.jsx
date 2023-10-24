import { formatCurrency } from '../../utils/helpers';
import { Button } from '../../ui/Button';
import PropTypes from 'prop-types';
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex  items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small">Delete</Button>
      </div>
    </li>
  );
}

CartItem.propTypes = {
  pizzaId: PropTypes.string,
  name: PropTypes.string,
  quantity: PropTypes.string,
  totalPrice: PropTypes.string,
  item: PropTypes.object,
  // Ajusta el tipo según lo que esperas recibir
};

export default CartItem;
