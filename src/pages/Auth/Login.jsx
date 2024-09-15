import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginscheme, registerscheme } from "~/validation/scheme";
import { loginForm } from "~/data/data";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "~/firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setUser } from "~/redux/slices/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginscheme),
  });

  const loginHandle = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const user = userCredential.user;
      const userDoc = await getDoc(doc(db, "users", user.uid));

      const userData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        emailVerified: user.emailVerified,
        admin: userDoc.data()?.admin || false,
        cart: userDoc.data()?.cart || [],
      };

      dispatch(setUser(userData));
      console.log("giriş yapıldı");

      reset();
    } catch (error) {
      console.error("giriş hatası", error);
    }
  };
  return (
    <div className="flex flex-grow justify-center items-center">
      <form
        onSubmit={handleSubmit(loginHandle)}
        className="space-y-6 w-full max-w-md mx-auto bg-white p-6"
      >
        <div className="space-y-2 flex flex-col">
          <label htmlFor="email">E-posta</label>
          <input
            id="email"
            type="email"
            placeholder="ornek@email.com"
            {...register("email")}
            className="px-4 py-2 rounded-md border"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2 flex flex-col">
          <label htmlFor="password">Şifre</label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            {...register("password")}
            className="px-4 py-2 rounded-md border"
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded-md"
        >
          Giriş Yap
        </button>
      </form>
    </div>
  );
};

export default Login;
