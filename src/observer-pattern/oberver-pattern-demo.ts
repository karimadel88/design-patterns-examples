import { Customer } from "./Customer";
import { eventManager } from "./EventManger";
import { Product } from "./Product";

export function observerDemo() {
  const karimCustomer = new Customer("Karim Adel", "5");
  const ahmedCustomer = new Customer("Ahmed Saeed", "6");
  const noorCustomer = new Customer("noor", "7");

  eventManager.subscribeGroup([
    {
      type: "product",
      listener: karimCustomer,
    },
    {
      type: "product",
      listener: ahmedCustomer,
    },
    {
      type: "product",
      listener: noorCustomer,
    },
  ]);

  const product = new Product("Laptop", "1");

  const product2 = new Product("Mobile", "2");
}
