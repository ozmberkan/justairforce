import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Logo from "~/assets/Svg/Logo.svg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const sendEmail = async () => {
    try {
      await sendPasswordResetEmail(email);
      toast.success("Başarıyla şifre sıfırlama bağlantısı gönderildi.");
    } catch (error) {
      toast.error("Bir hata ile karşılaştık!");
    }
  };

  return (
    <div className="flex w-full sm:flex-row flex-col sm:p-24 p-5 flex-grow justify-start items-center bg-bannerHistory bg-center bg-cover gap-x-12">
      <form
        onSubmit={sendEmail}
        className="w-full max-w-md  bg-white p-6 rounded-lg shadow-lg border flex flex-col gap-y-3"
      >
        <h1 className="text-2xl font-semibold mb-5 ">Şifreni Sıfırla</h1>

        <div className="space-y-2 flex flex-col">
          <label className="text-sm font-medium text-gray-600">
            Şifre Sıfırlama Bağlantısı
          </label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-Posta Giriniz..."
            className="px-4 py-2 rounded-md border outline-none  focus:ring-1 ring-offset-2 focus:ring-[#763ebe] transition-all duration-300"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-1.5 rounded-md text-white bg-gradient-to-r from-black to-[#5B348F] transition-colors duration-500"
        >
          Gönder
        </button>
      </form>

      <div className="w-full  relative sm:flex items-center justify-center text-center hidden">
        <img
          src={Logo}
          alt="Logo"
          className="absolute w-full opacity-20 drop-shadow-lg"
        />
        <span className="relative z-10 text-5xl text-white font-semibold flex flex-col gap-y-4">
          Sorun yok, herkes unutabilir! Şifreni sıfırlayarak Air Force dünyasına
          yeniden giriş yapabilirsin. Soldaki bağlantıyı kullanarak yeni şifreni
          belirle ve stilini kaldığın yerden konuşturmaya devam et!
        </span>
      </div>
    </div>
  );
};

export default ForgotPassword;
