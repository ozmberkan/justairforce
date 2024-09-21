import { collection, doc, deleteDoc } from "firebase/firestore";
import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";
import { db } from "~/firebase/firebase";

const ProductsList = ({ productData, handleProductEdit }) => {
  const deleteProduct = async (id) => {
    try {
      const productRef = doc(db, "shoes", id);
      await deleteDoc(productRef);
      toast.success("Ürün Başarıyla Silindi!");
    } catch (error) {
      toast.error("Ürün Silinirken Bir Hata Oluştu! " + error.message);
    }
  };

  return (
    <div className="relative overflow-x-auto border rounded-md transition-colors duration-500 dark:border-neutral-500 ">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-neutral-700 dark:text-neutral-400 ">
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
              className="bg-white border-b dark:bg-neutral-800 dark:border-neutral-700 text-base"
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
                <button
                  onClick={() => handleProductEdit(product)}
                  className="bg-neutral-900 hover:bg-neutral-800 text-white p-2 rounded-md"
                >
                  <FiEdit />
                </button>
                <button
                  onClick={() => deleteProduct(product.mainId)} // Doğru ID'yi burada kullanıyoruz.
                  className="bg-neutral-900 hover:bg-neutral-800 text-white p-2 rounded-md "
                >
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
