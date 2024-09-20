import React from "react";
import { FiEdit, FiTrash, FiTrash2 } from "react-icons/fi";

const ProductsList = ({ productData }) => {
  return (
    <div className="relative overflow-x-auto border rounded-md">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Ürün Adı
            </th>
            <th scope="col" className="px-6 py-3">
              Fiyat
            </th>
            <th scope="col" className="px-6 py-3">
              Ürün Görsel
            </th>
            <th scope="col" className="px-6 py-3">
              Aksiyon
            </th>
          </tr>
        </thead>
        <tbody>
          {productData?.map((product) => (
            <tr
              key={product.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-base"
            >
              <td className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product.uid || product.id}
              </td>
              <td className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product.name}
              </td>
              <td className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product.price}₺
              </td>
              <td className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img src={product.image} className="w-12 rounded-md" />
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-x-2">
                <button className="bg-neutral-900 hover:bg-neutral-800 text-white p-2 rounded-md">
                  <FiEdit />
                </button>
                <button className="bg-neutral-900 hover:bg-neutral-800 text-white p-2 rounded-md ">
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
