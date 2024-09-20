import React from "react";
import { FiEdit } from "react-icons/fi";

const UsersList = ({ userData }) => {
  return (
    <div className="relative overflow-x-auto border rounded-md">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
              key={user.id}
              className="bg-white border-b text-base dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.uid || user.id} {/* UID gösteriliyor */}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.displayName} {/* Kullanıcının adı soyadı */}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.email} {/* Kullanıcının e-posta adresi */}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.admin ? "Yetkili" : "Kullanıcı"}{" "}
                {/* Kullanıcının yetkisi */}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button className="bg-neutral-900 hover:bg-neutral-800 text-white p-2 rounded-md">
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
