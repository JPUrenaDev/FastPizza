import { useState } from 'react';
import {
  Form,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import { Button } from '../../ui/Button';
import { useSelector } from 'react-redux';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

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

export function CreateOrder() {
  const navigation = useNavigation();
  const navegacion = navigation.state === 'submitting';
  const formErrors = useActionData();
  const selector = useSelector((state) => state);
  console.log(selector, 2);
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Lets go!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col sm:flex-row sm:items-center sm:gap-2">
          <label className="sm:basis-40">First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="input w-full"
            defaultValue={selector.counter.Name}
            disabled={true}
          />
        </div>

        <div className="mb-5 flex  flex-col sm:flex-row sm:items-center sm:gap-2">
          <label className="sm:basis-40">Phone number</label>
          <div className="w-full grow">
            <input name="phone" required className="input w-full" />
            {formErrors?.phone && (
              <p className="mt-2 rounded-md p-2 text-xs text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center ">
          <label className="sm:basis-40">Address</label>
          <div className="w-full grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
            />
          </div>
        </div>

        <div className="mb-12 flex gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="rounded-full accent-yellow-500"

            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <Button disabled={navegacion} type="primary">
            {navegacion ? 'Packing orders' : 'submit order'}
          </Button>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const data = await request.formData();

  const dataReal = Object.fromEntries(data);

  const priority = dataReal.priority === 'on' ? 'verdadero' : 'falso';
  const order = {
    ...dataReal,
    cart: JSON.parse(dataReal.cart),
    priority,
  };
  const errors = {};

  if (!isValidPhone(order.phone))
    errors.phone = 'Please give us your correct phone number.';
  console.log(errors);
  if (Object.keys(errors).length > 0) return errors;

  const resultado = await createOrder(order); //await porque necesito que esto se ejecute antes de pasar a la de abajo
  return redirect(`/order/${resultado.id}`);
}

export default CreateOrder;
