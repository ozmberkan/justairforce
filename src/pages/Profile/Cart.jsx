import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { user } = useSelector((store) => store.user);
  return (
    <div className="w-full px-7 py-6 flex flex-col gap-y-6">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-3xl font-semibold text-gray-700">Sepetim</h1>
        <input
          className="px-4 py-2 rounded-md border bg-zinc-100 outline-none"
          value={`Toplam: ${user.cart.reduce(
            (acc, item) => acc + item.price,
            0
          )}₺`}
        />
      </div>
      <div className="grid grid-cols-4 gap-5">
        {user.cart.map((sh) => (
          <div
            key={sh.id}
            className="border p-3 flex flex-col gap-y-2 rounded-md bg-white"
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <h1 className="font-bold text-2xl text-gray-700">{sh.name}</h1>
                <span>{sh.price}₺</span>
              </div>
            </div>
            <img src={sh.image} className="rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
