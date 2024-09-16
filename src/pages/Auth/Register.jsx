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

const Register = () => {
  const dispatch = useDispatch();
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
        cart: [],
        favorites: [],
      };

      dispatch(setUser(userData));

      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, userData);

      reset();
    } catch (error) {
      console.error("Kayıt Hatası", error);
    }
  };
  return (
    <div className="flex flex-grow justify-center items-center">
      <form
        onSubmit={handleSubmit(registerHandle)}
        className="space-y-6 w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg border"
      >
        {registerForm.map((input) => (
          <div key={input.name} className="space-y-2 flex flex-col">
            <label
              htmlFor={input.name}
              className="text-sm font-medium text-gray-600"
            >
              {input.placeholder}
            </label>
            <input
              id={input.name}
              type={input.type}
              {...register(input.name)}
              placeholder={input.placeholder}
              className="px-4 py-2 rounded-md border focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
            />
            {errors[input.name] && (
              <p className="text-sm text-red-500">
                {errors[input.name].message}
              </p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded-md  transition duration-200"
        >
          Kayıt Ol
        </button>
      </form>
    </div>
  );
};

export default Register;
