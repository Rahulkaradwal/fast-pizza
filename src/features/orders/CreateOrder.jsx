import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../utils/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const { username } = useSelector((store) => store.user);
  const navigation = useNavigation();

  const isSubmitting = (navigation.state = "submitting");

  const formErrors = useActionData();

  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div className="flex justify-center p-8 text-center ">
      <div>
        <h2 className="m-8">Ready to order? Let's go!</h2>

        {/* <Form method="POST" action="/order/new"> */}
        {/* writing action is optional */}
        <Form method="POST" className="flex flex-col gap-4 ">
          <div className="flex">
            <label className="w-40">First Name</label>
            <input
              className="inputForm"
              type="text"
              name="customer"
              defaultValue={username}
              required
            />
          </div>

          <div className="flex">
            <label className="w-40">Phone number</label>

            <input className="inputForm" type="tel" name="phone" required />

            {formErrors?.phone && <p>{formErrors.phone}</p>}
          </div>

          <div className="flex">
            <label className="w-40">Address</label>

            <input className="inputForm" type="text" name="address" required />
          </div>

          <div>
            <input
              type="checkbox"
              name="priority"
              id="priority"
              // value={withPriority}
              // onChange={(e) => setWithPriority(e.target.checked)}
            />
            <label htmlFor="priority">
              Want to yo give your order priority?
            </label>
          </div>

          <div>
            <input type="hidden" name="cart" value={JSON.stringify(cart)} />

            <Button disabled={isSubmitting}>
              {isSubmitting ? "Placing Order" : "Order Now"}{" "}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const errors = {};

  if (!isValidPhone(order.phone))
    errors.phone =
      "Please provide your correct phone number, we might need to contact you for further information";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
