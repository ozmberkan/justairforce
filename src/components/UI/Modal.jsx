import { doc, updateDoc } from "firebase/firestore";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { FiAlertCircle } from "react-icons/fi";
import { useSelector } from "react-redux";
import { db } from "~/firebase/firebase";

const SpringModal = ({ title, description, setIsOpen }) => {
  const { user } = useSelector((store) => store.user);

  const toggleNotification = async () => {
    try {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, {
        hasbeenlogged: true,
      });
      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, hasbeenlogged: true })
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsOpen(false)}
        className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
      >
        <motion.div
          initial={{ scale: 0, rotate: "12.5deg" }}
          animate={{ scale: 1, rotate: "0deg" }}
          exit={{ scale: 0, rotate: "0deg" }}
          onClick={() => setIsOpen(false)}
          className="bg-gradient-to-br from-black to-[#5B348F] text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
        >
          <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
          <div className="relative z-10">
            <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
              <FiAlertCircle />
            </div>
            <h3 className="text-3xl font-bold text-center mb-2">{title}</h3>
            <p className="text-center mb-6">{description}</p>
            <div className="flex gap-2">
              <button
                onClick={toggleNotification}
                className="bg-white border-2 border-transparent hover:bg-transparent hover:border-2 hover:border-white text-[#5B348F] hover:text-white transition-colors duration-300 font-semibold w-full py-2 rounded"
              >
                Anladım!
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.getElementById("modal-root")
  );
};

export default SpringModal;
