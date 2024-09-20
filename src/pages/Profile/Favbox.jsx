import React from "react";
import { FiTrash } from "react-icons/fi";

const Favbox = ({ sh, deleteFav }) => {
  return (
    <div
      key={sh?.id}
      className="border dark:border-neutral-500 p-3 flex flex-col gap-y-2 rounded-md bg-white dark:bg-transparent "
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl text-gray-700 dark:text-white">
            {sh?.name}{" "}
            <span>
              {sh.quantity
                ? (
                    <span className="dark:bg-neutral-600 bg-neutral-200 px-3 text-sm rounded-md">
                      x{sh?.quantity}
                    </span>
                  ) || 1
                : null}
            </span>
          </h1>
          <div className="flex gap-x-2">
            <span className="dark:text-white">{sh?.price}₺</span>
            <span className="dark:text-white">
              {sh?.size ? <span>{sh?.size} Numara</span> : null}
            </span>
          </div>
        </div>
        <div>
          <button
            onClick={() => deleteFav(sh?.id)}
            className="text-red-500 bg-red-100 p-3 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300"
          >
            <FiTrash size={18} />
          </button>
        </div>
      </div>
      <div className="w-full  flex justify-center items-center dark:bg-neutral-800">
        {sh?.image && (
          <img
            src={sh?.image}
            alt={sh?.name}
            className="rounded-md  h-72 w-full object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default Favbox;
