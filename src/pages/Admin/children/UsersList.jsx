import React from "react";
import { FiEdit } from "react-icons/fi";

const UsersList = ({ userData, handleEdit }) => {
  return (
    <div className="relative overflow-x-auto border rounded-md">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-neutral-700 dark:text-neutral-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              UID
            </th>
            <th scope="col" className="px-6 py-3">
              İsim Soyisim
            </th>
            <th scope="col" className="px-6 py-3">
              E-Posta
            </th>
            <th scope="col" className="px-6 py-3">
              Yetki
            </th>
            <th scope="col" className="px-6 py-3">
              Aksiyon
            </th>
          </tr>
        </thead>
        <tbody>
          {userData?.map((user) => (
            <tr
              key={user.uid}
              className="bg-white border-b text-base dark:bg-neutral-800 dark:border-neutral-700"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.uid || user.id}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.displayName}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.email}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.admin === true ? "Yetkili" : "Kullanıcı"}{" "}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button
                  onClick={() => handleEdit(user)}
                  className="bg-neutral-900 hover:bg-neutral-800 text-white p-2 rounded-md"
                >
                  <FiEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
