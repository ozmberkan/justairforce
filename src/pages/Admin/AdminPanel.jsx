import { collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "~/firebase/firebase";
import { IoMdAdd } from "react-icons/io";
import UsersList from "./children/UsersList";
import ProductsList from "./children/ProductsList";
import UserEditModal from "~/components/UI/Admin/UserModal/UserEditModal";
import ProductEditModal from "~/components/UI/Admin/ProductsModal/ProductEditModal";
import AddProductModal from "~/components/UI/Admin/AddModals/AddProductModal";

const AdminPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const usersRef = collection(db, "users");
  const shoesRef = collection(db, "shoes");

  const [snapshot] = useCollection(usersRef);
  const [snapshotforShoes] = useCollection(shoesRef);

  const userData = snapshot?.docs?.map((user) => ({
    ...user.data(),
  }));

  const productData = snapshotforShoes?.docs?.map((product) => ({
    id: product.id,
    ...product.data(),
  }));

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const [isEditMode, setIsEditMode] = useState(null);
  const [isProductEditMode, setIsProductEditMode] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null);

  const [isAddProductModal, setIsAddProductModal] = useState(false);

  const handleEdit = (user) => {
    setIsEditMode(true);
    setCurrentUser(user);
  };

  const handleProductEdit = (product) => {
    setIsProductEditMode(true);
    setCurrentProduct(product);
  };

  return (
    <>
      <div className="w-full p-5 flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-5">
          <div className="flex gap-x-2 items-center justify-between">
            <h1 className="text-3xl font-semibold dark:text-white">
              Kullanıcılar
            </h1>
          </div>
          <UsersList userData={userData} handleEdit={handleEdit} />
        </div>
        <hr />
        <div className="flex flex-col gap-y-5">
          <div className="flex gap-x-2 items-center justify-between">
            <h1 className="text-3xl font-semibold dark:text-white">Ürünler</h1>
            <button
              onClick={() => setIsAddProductModal(true)}
              className="px-4 py-2 rounded-md bg-white border dark:bg-neutral-700 dark:text-white dark:border-neutral-500 dark:hover:bg-neutral-500 transition-colors"
            >
              <IoMdAdd />
            </button>
          </div>
          <ProductsList
            productData={productData}
            handleProductEdit={handleProductEdit}
          />
        </div>
      </div>
      {isEditMode && (
        <UserEditModal
          setIsEditMode={setIsEditMode}
          currentUser={currentUser}
        />
      )}
      {isProductEditMode && (
        <ProductEditModal
          setIsProductEditMode={setIsProductEditMode}
          currentProduct={currentProduct}
        />
      )}
      {isAddProductModal && (
        <AddProductModal setIsAddProductModal={setIsAddProductModal} />
      )}
    </>
  );
};

export default AdminPanel;
