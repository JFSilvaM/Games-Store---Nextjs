import ConfirmModal from "@/components/confirm-modal";
import { ENV } from "@/config/env";
import { calcDiscountedPrice } from "@/utils/calc-discounted-price";
import Image from "next/image";

const OrderModal = ({ showModal, openCloseModal, order }) =>
  order && (
    <ConfirmModal
      isOpen={showModal}
      onOpenClose={openCloseModal}
      title="Información del pedido"
      content={
        <>
          {order.products.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-4 border-b border-neutral-600 pb-4 last-of-type:border-b-0"
            >
              <div>
                <Image
                  src={`${ENV.SERVER_HOST}${product.cover.url}`}
                  alt={product.cover.name}
                  width={165}
                  height={165}
                  loading="eager"
                  unoptimized
                  className="h-24 w-40 rounded-md object-cover"
                />
              </div>

              <div className="flex w-full items-center justify-between font-semibold">
                <div>
                  <p>{product.title}</p>

                  <p className="text-sm font-normal text-neutral-400">
                    {product.platform.title}
                  </p>
                </div>

                <div className="flex gap-3">
                  <span>x{product.quantity}</span>

                  <span>
                    {calcDiscountedPrice(product.price, product.discount)}€
                  </span>
                </div>
              </div>
            </div>
          ))}

          <div className="rounded-md bg-neutral-700 p-4">
            <p className="font-semibold">{order.addressShipping.title}</p>

            <p className="text-sm text-neutral-400">
              {order.addressShipping.name}, {order.addressShipping.address},{" "}
              {order.addressShipping.state}, {order.addressShipping.city},{" "}
              {order.addressShipping.postal_code}
            </p>
          </div>

          <p className="text-end text-xl font-semibold text-orange-600">
            TOTAL: {order.totalPayment.toFixed(2)}€
          </p>
        </>
      }
    />
  );

export default OrderModal;
