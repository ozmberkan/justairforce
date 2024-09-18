import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginscheme, registerscheme } from "~/validation/scheme";
import { loginForm } from "~/data/data";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "~/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setUser } from "~/redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import Logo from "~/assets/Svg/Logo.svg";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        favorites: userDoc.data().favorites || [],
      };

      dispatch(setUser(userData));
      console.log("giriş yapıldı");
      navigate("/");
    } catch (error) {
      console.error("giriş hatası", error);
    }
  };
  return (
    <div className="flex w-full sm:flex-row flex-col sm:p-24 p-5 flex-grow justify-start items-center bg-bannerHistory bg-center bg-cover gap-x-12">
      <form
        onSubmit={handleSubmit(loginHandle)}
        className="w-full sm:max-w-md  bg-white p-6 rounded-lg shadow-lg border flex flex-col gap-y-3"
      >
        <h1 className="text-2xl font-semibold mb-5 ">Giriş Yap</h1>
        {loginForm.map((input) => (
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
              className="px-4 py-2 rounded-md border outline-none  focus:ring-1 ring-offset-2 focus:ring-[#763ebe] transition-all duration-300"
            />
          </div>
        ))}
        <div className="text-sm text-end ">
          <a href="/forgot-password" className="text-[#763ebe] hover:underline">
            Şifreni mi unuttun?
          </a>
        </div>

        <button
          type="submit"
          className="px-4 py-1.5 rounded-md text-white bg-gradient-to-r from-black to-[#5B348F] transition-colors duration-500"
        >
          Giriş Yap
        </button>

        {/* Şifremi Unuttum Linki */}

        {/* Hesabın Var mı? Linki */}
        <div className="text-sm text-center mt-2">
          Hesabın yok mu?
          <a href="/register" className="text-[#763ebe] hover:underline">
            Kayıt Ol
          </a>
        </div>
      </form>

      <div className="w-full  relative sm:flex items-center justify-center text-center hidden">
        <img
          src={Logo}
          alt="Logo"
          className="absolute w-full opacity-20 drop-shadow-lg"
        />
        <span className="relative z-10 text-5xl text-white font-semibold flex flex-col gap-y-4">
          <p className="font-black">Tekrar Hoş Geldin, Şimdi Sahne Senin!</p>{" "}
          Just Air Force ailesine geri dön! Stilinle fark yaratmaya ve sınırları
          zorlamaya devam etmek için giriş yap. En ikonik sneaker’lar seni
          bekliyor.
        </span>
      </div>
    </div>
  );
};

export default Login;
