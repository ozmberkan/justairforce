import React from "react";
import airforcecherry from "~/assets/Products/15.jpeg";

const AirForceCherry = () => {
  return (
    <div className="flex sm:flex-row flex-col dark:bg-neutral-900 transition-colors duration-500  justify-start items-center w-full bg-white  p-12 sm:gap-x-5 gap-y-5 flex-grow">
      <img
        src={airforcecherry}
        alt="airforcecherry"
        className="w-[1200px] h-[300px] object-cover bg-white rounded-xl shadow-xl border "
      />
      <div className="flex flex-col gap-y-4">
        <h1 className="font-bold text-4xl text-gray-600 dark:text-white">
          Air Force Cherry
        </h1>
        <h1 className="text-gray-600 dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          sapiente, iusto, in voluptatum unde itaque rem recusandae rerum
          quibusdam excepturi quae! Ullam modi quidem molestias iusto cupiditate
          repellat quibusdam? Voluptatum, quidem quia? Fuga libero quas,
          laboriosam ea dolorem doloremque fugiat architecto numquam repellendus
          totam, voluptatibus perspiciatis sint magnam quidem ex.
        </h1>
      </div>
    </div>
  );
};

export default AirForceCherry;
