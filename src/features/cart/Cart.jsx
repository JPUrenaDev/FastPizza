import { Link, Outlet } from 'react-router-dom';
import { Button } from '../../ui/Button';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;
  const selector = useSelector((state) => state);
  console.log(selector);

  return (
    <div className="px-4 py-3">
      <Link
        to="/menu"
        className="mt-7  text-xl font-semibold text-blue-500 hover:text-blue-600 hover:underline"
      >
        &larr; Back to menu
      </Link>

      <h2 className="mt-6">Your cart, {selector.counter.Name}</h2>

      <ul className="mt-3 divide-y divide-black border-b border-black">
        {fakeCart.map((item, key) => (
          <CartItem item={item} key={key}></CartItem>
        ))}
      </ul>
      <div className="mt-6 space-x-3">
        <Button type="primary">Order Pizzas</Button>

        <Button type="secondary">Clear cart</Button>

        <Outlet />
      </div>
    </div>
  );
}

export default Cart;
