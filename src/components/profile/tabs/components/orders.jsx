import NoResult from "@/components/no-result";
import { useAuth } from "@/hooks/use-auth";
import { getOrders } from "@/lib/order";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";

const Orders = () => {
  const { user } = useAuth();

  const [orders, setOrders] = useState([]);

  const createdAt = (createdDate) => {
    const newCreatedDate = new Date(createdDate).toISOString();
    return DateTime.fromISO(newCreatedDate, { locale: "es" }).toFormat(
      "dd/MM/yyyy",
    );
  };

  const getTotalProducts = (products) =>
    products.reduce((total, product) => total + product.quantity, 0);

  useEffect(() => {
    (async () => {
      try {
        const ordersRes = await getOrders(user.id);
        setOrders(ordersRes.data);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  return orders.length ? (
    <div className="flex flex-col gap-4">
      {orders.map((order) => (
        <div
          key={order.id}
          className="flex cursor-pointer items-center justify-between rounded-md border border-neutral-700 bg-neutral-700 p-5 hover:border-orange-600"
        >
          <div>
            <span className="text-sm text-neutral-400">
              {createdAt(order.createdAt)}
            </span>

            <p>{getTotalProducts(order.products)} productos</p>
          </div>

          <p className="text-xl font-semibold">
            {order.totalPayment.toFixed(2)}€
          </p>
        </div>
      ))}
    </div>
  ) : (
    <NoResult text="No tienes ningún producto comprado" />
  );
};

export default Orders;
