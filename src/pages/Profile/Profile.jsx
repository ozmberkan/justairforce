import { sendEmailVerification } from "firebase/auth";
import React from "react";
import { BsSend } from "react-icons/bs";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { auth } from "~/firebase/firebase";

const Profile = () => {
  const { user } = useSelector((store) => store.user);

  const emailVer = async (e) => {
    e.preventDefault();
    try {
      await sendEmailVerification(auth.currentUser);
      toast.success(
        "E-Posta Doğrulama Maili Gönderildi. Lütfen e-posta kutunuzu kontrol ediniz."
      );
    } catch (error) {
      toast.error(
        "E-Posta Doğrulama Maili Gönderilirken bir hata oluştu. Sürekli istek algılandı."
      );
    }
  };

  return (
    <div className="flex justify-start items-start flex-grow p-5">
      <div className="bg-white dark:bg-neutral-800 dark:border-neutral-700 rounded-md w-full border px-4 py-2 flex gap-x-5">
        <div className="sm:w-1/2 w-full flex flex-col gap-4 p-6 ">
          <input
            defaultValue={user?.displayName}
            className="px-4 py-2 border rounded-md bg-zinc-100 dark:bg-neutral-600 dark:text-white dark:border-neutral-500 shadow-sm focus:outline-none sm:w-[400px]"
            placeholder="İsim"
            readOnly
          />
          <input
            defaultValue={user?.email}
            className="px-4 py-2 border rounded-md bg-zinc-100 dark:bg-neutral-600 dark:text-white dark:border-neutral-500 shadow-sm focus:outline-none sm:w-[400px]"
            placeholder="E-posta"
            readOnly
          />
          <div className="flex gap-x-2">
            <input
              defaultValue={
                user?.emailVerified === true
                  ? "E-Posta Onaylanmış!"
                  : "E-Posta Onaylanmamış"
              }
              className="px-4 py-2 border rounded-md bg-zinc-100 dark:bg-neutral-600 dark:text-white dark:border-neutral-500 shadow-sm focus:outline-none sm:w-[400px]"
              placeholder="E-Posta Durumu"
              readOnly
            />
            <button
              onClick={emailVer}
              className="bg-blue-100 text-blue-500 px-4 rounded-md"
            >
              <BsSend size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
