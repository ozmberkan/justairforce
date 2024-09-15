import React from "react";
import airforceone from "~/assets/Products/1.jpeg";

const AirforceOne = () => {
  return (
    <div className="flex justify-start items-center w-full bg-white p-12 gap-x-5 flex-grow">
      <img
        src={airforceone}
        alt="airforceOne"
        className="w-[1200px] h-[300px] object-cover bg-white rounded-xl shadow-xl border"
      />
      <div className="flex flex-col gap-y-4">
        <h1 className="font-bold text-4xl text-gray-600">Air Force One</h1>
        <h1 className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          sapiente, iusto, in voluptatum unde itaque rem recusandae rerum
          quibusdam excepturi quae! Ullam modi quidem molestias iusto cupiditate
          repellat quibusdam? Voluptatum, quidem quia? Fuga libero quas,
          laboriosam ea dolorem doloremque fugiat architecto numquam repellendus
          totam, voluptatibus perspiciatis sint magnam quidem ex.
        </h1>
        <button className="w-1/4 bg-green-100 text-green-500 border-green-500 border  rounded-md px-4 py-2">
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default AirforceOne;
