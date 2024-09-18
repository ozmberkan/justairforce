import React from "react";
import { allProducts } from "~/data/data";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  const findProduct = allProducts.find((product) => product.id === id);

  if (!findProduct) {
    return <div>Ürün bulunamadı!</div>;
  }

  return (
    <div className="w-full p-4">
      <div className="p-6 rounded-md border flex sm:flex-row flex-col-reverse justify-center items-start sm:gap-x-12 gap-y-6 ">
        <div className="flex flex-col  items-start justify-start gap-y-5 bg-[#F6F6F6] rounded-md border sm:h-[500px] sm:w-2/3 sm:p-12 p-4">
          <div className="flex justify-between items-center w-full">
            <p className="text-5xl font-semibold">{findProduct.name}</p>
            <p className="text-3xl font-semibold text-green-500 bg-green-100 px-4 rounded-xl py-2">
              {findProduct.price}₺
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
            iusto autem ratione, saepe aliquam fugiat similique doloremque
            voluptas earum. Debitis quae magnam quisquam maiores. Deleniti
            repellat beatae ex fuga veniam a consectetur magni libero quaerat,
            maiores qui, impedit voluptas illum itaque. Doloribus repellendus
            esse corrupti mollitia. Vitae exercitationem nesciunt numquam.
          </p>
        </div>

        <div className="relative">
          <img
            src={findProduct.image}
            alt={findProduct.name}
            className="sm:w-[700px] sm:h-[500px] object-cover rounded-xl border"
          />
          <p className="absolute top-3 right-3 px-4 py-2 bg-orange-100 text-orange-500 rounded-xl">
            Ürün Kodu: {findProduct.id}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
