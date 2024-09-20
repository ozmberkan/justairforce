import { doc, updateDoc } from "firebase/firestore";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { FiAlertCircle } from "react-icons/fi";
import { toast } from "react-toastify";
import { productEditForm } from "~/data/data";
import { db } from "~/firebase/firebase";

const ProductEditModal = ({ setIsProductEditMode, currentProduct }) => {
  const { register, handleSubmit } = useForm();

  const updateUser = async (data) => {
    try {
      await updateDoc(doc(db, "shoes", currentProduct.mainId), {
        id: data.id,
        name: data.name,
        price: data.price,
        image: data.image,
      });
      toast.success("Kullanıcı Başarıyla Güncellendi!");
      setIsProductEditMode(false);
    } catch (error) {
      toast.error("Kullanıcı Güncellenirken Bir Hata Oluştu!" + error);
      console.log(error);
    }
  };

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
      >
        <motion.div
          initial={{ scale: 0, rotate: "12.5deg" }}
          animate={{ scale: 1, rotate: "0deg" }}
          exit={{ scale: 0, rotate: "0deg" }}
          className="bg-gradient-to-br from-black to-[#5B348F] text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
        >
          <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
          <div className="relative z-10">
            <div className="bg-white w-12 h-12 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
              <FiAlertCircle />
            </div>
            <form
              className="flex flex-col gap-y-5 mt-6 text-black"
              onSubmit={handleSubmit(updateUser)}
            >
              {productEditForm?.map((input) => (
                <input
                  key={input.id}
                  className="px-4 py-2 rounded-md bg-white border border-zinc-600"
                  type={input.type}
                  defaultValue={currentProduct[input.name]}
                  {...register(input.name)}
                />
              ))}

              <div className="flex gap-x-5">
                <button className="bg-white border-2 border-transparent hover:bg-transparent hover:border-2 hover:border-white text-[#5B348F] hover:text-white transition-colors duration-300 font-semibold w-full py-2 rounded">
                  Kaydet!
                </button>
                <button
                  onClick={() => setIsProductEditMode(false)}
                  className="bg-white border-2 border-transparent hover:bg-transparent hover:border-2 hover:border-white text-[#5B348F] hover:text-white transition-colors duration-300 font-semibold w-full py-2 rounded"
                >
                  Vazgeç!
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.getElementById("modal-root")
  );
};

export default ProductEditModal;
