import { collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "~/firebase/firebase";
import UsersList from "./children/UsersList";
import ProductsList from "./children/ProductsList";
import UserEditModal from "~/components/UI/Admin/UserModal/UserEditModal";
import ProductEditModal from "~/components/UI/Admin/ProductsModal/ProductEditModal";

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
          <h1 className="text-3xl font-semibold dark:text-white">
            Kullanıcılar
          </h1>
          <UsersList userData={userData} handleEdit={handleEdit} />
        </div>
        <hr />
        <div className="flex flex-col gap-y-5">
          <h1 className="text-3xl font-semibold dark:text-white">Ürünler</h1>
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
    </>
  );
};

export default AdminPanel;
