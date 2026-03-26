import NoResult from "@/components/no-result";
import OrderModal from "@/components/profile/tabs/components/orders/components/order-modal";
import { useAuth } from "@/hooks/use-auth";
import { getOrders } from "@/lib/order";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";

const Orders = () => {
  const { user } = useAuth();

  const [allOrders, setAllOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [singleOrder, setSingleOrder] = useState(null);

  const createdAt = (createdDate) => {
    const newCreatedDate = new Date(createdDate).toISOString();
    return DateTime.fromISO(newCreatedDate, { locale: "es" }).toFormat(
      "dd/MM/yyyy",
    );
  };

  const getTotalProducts = (products) => {
    const quantityProducts = products.reduce(
      (total, product) => total + product.quantity,
      0,
    );

    return `${quantityProducts} ${quantityProducts === 1 ? "Producto" : "Productos"}`;
  };

  const openCloseModal = (order) => {
    if (!showModal) setSingleOrder(order);
    setShowModal(!showModal);
  };

  useEffect(() => {
    (async () => {
      try {
        const ordersRes = await getOrders(user.id);
        setAllOrders(ordersRes.data);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  return allOrders.length ? (
    <>
      <div className="flex flex-col gap-4">
        {allOrders.map((order) => (
          <div key={order.id}>
            <div
              onClick={() => openCloseModal(order)}
              className="flex cursor-pointer items-center justify-between rounded-md border border-neutral-700 bg-neutral-700 p-5 hover:border-orange-600"
            >
              <div>
                <span className="text-sm text-neutral-400">
                  {createdAt(order.createdAt)}
                </span>

                <p>{getTotalProducts(order.products)}</p>
              </div>

              <p className="text-xl font-semibold">
                {order.totalPayment.toFixed(2)}€
              </p>
            </div>
          </div>
        ))}
      </div>

      <OrderModal
        showModal={showModal}
        openCloseModal={openCloseModal}
        order={singleOrder}
      />
    </>
  ) : (
    <NoResult text="No tienes ningún producto comprado" />
  );
};

export default Orders;
