import { collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "~/firebase/firebase";
import UsersList from "./children/UsersList";
import ProductsList from "./children/ProductsList";
import SpringModal from "~/components/UI/Modal";
import AdminModal from "~/components/UI/AdminModal";

const AdminPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const usersRef = collection(db, "users");
  const shoesRef = collection(db, "shoes");

  const [snapshot] = useCollection(usersRef);
  const [snapshotforShoes] = useCollection(shoesRef);

  const userData = snapshot?.docs?.map((user) => ({
    id: user.uid,
    ...user.data(),
  }));

  const productData = snapshotforShoes?.docs?.map((product) => ({
    id: product.id,
    ...product.data(),
  }));

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      {isOpen && (
        <AdminModal
          title={"Dikkat!"}
          description={"Admin Panelinde Aksiyonlar Henüz Oluşturulmadı!"}
          setIsOpen={setIsOpen}
        />
      )}
      <div className="w-full p-5 flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-3xl font-semibold dark:text-white">
            Kullanıcılar
          </h1>
          <UsersList userData={userData} />
        </div>
        <hr />
        <div className="flex flex-col gap-y-5">
          <h1 className="text-3xl font-semibold dark:text-white">Ürünler</h1>
          <ProductsList productData={productData} />
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
