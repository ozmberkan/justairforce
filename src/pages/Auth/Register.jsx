import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerscheme } from "~/validation/scheme";
import { registerForm } from "~/data/data";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "~/firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setUser } from "~/redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import Logo from "~/assets/Svg/Logo.svg";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerscheme),
  });

  const registerHandle = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const user = userCredential.user;

      await updateProfile(user, {
        displayName: data.displayName,
      });

      const userData = {
        uid: user.uid,
        email: user.email,
        displayName: data.displayName,
        emailVerified: user.emailVerified,
        admin: false,
        hasbeenlogged: false,
        cart: [],
        favorites: [],
      };

      dispatch(setUser(userData));

      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, userData);

      navigate("/");
    } catch (error) {
      console.error("Kayıt Hatası", error);
    }
  };
  return (
    <div className="flex w-full sm:p-24 p-5 sm:flex-row flex-col flex-grow justify-start items-center bg-bannerHistory bg-center bg-cover gap-x-12">
      <form
        onSubmit={handleSubmit(registerHandle)}
        className="w-full max-w-md  dark:text-white bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg border flex flex-col gap-y-3"
      >
        <h1 className="text-2xl font-semibold mb-5 ">Kayıt Ol</h1>
        {registerForm.map((input) => (
          <div key={input.name} className="space-y-2 flex flex-col">
            <label
              htmlFor={input.name}
              className="text-sm font-medium text-gray-600 dark:text-white"
            >
              {input.placeholder}
            </label>
            <input
              id={input.name}
              type={input.type}
              {...register(input.name)}
              placeholder={input.placeholder}
              className="px-4 py-2 rounded-md dark:bg-neutral-800 border outline-none  focus:ring-1 ring-offset-2 focus:ring-[#763ebe] transition-all duration-300"
            />
          </div>
        ))}

        <button
          type="submit"
          className="px-4 py-1.5 rounded-md text-white bg-gradient-to-r from-black to-[#5B348F] dark:from-black dark:to-black transition-colors duration-500"
        >
          Kayıt Ol
        </button>

        {/* Şifremi Unuttum Linki */}

        {/* Hesabın Var mı? Linki */}
        <div className="text-sm text-center mt-2">
          Zaten bir hesabın var mı?{" "}
          <a href="/login" className="text-[#763ebe] hover:underline">
            Giriş Yap
          </a>
        </div>
      </form>

      <div className="w-full  relative sm:flex hidden items-center justify-center text-center">
        <img
          src={Logo}
          alt=""
          className="absolute w-full opacity-20 drop-shadow-lg"
        />
        <span className="relative z-10 text-5xl text-white font-black">
          Sınırları zorlamaya hazır mısın? En ikonik sneaker'ların dünyasına
          adım at ve sadece bir adım ötede olan sınırsız stile sahip ol. Şimdi
          kaydol, ilk adımı sen at!
        </span>
      </div>
    </div>
  );
};

export default Register;
