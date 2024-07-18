// eslint-disable-next-line no-unused-vars
// import React, { useEffect } from "react";
import CategoriesList from "../../components/Categories-List/categories-list";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import CompanyLocation from "../../components/LocationCompany/LocationCompany";
import ProductSelection from "../../components/ProductSelection/ProductSelection";
import FrozenProductCarousel from "../../components/ProductShowcase/ProductShowcase";
// import { uploadProductsToFirestore } from "../../utils/firebase.utils";

const Home = () => {
  // useEffect(() => {
  //   console.log("useEffect в Home компоненте запущен");
  //   const uploadProducts = async () => {
  //     try {
  //       await uploadProductsToFirestore();
  //       console.log("Продукты успешно загружены в Firestore");
  //     } catch (error) {
  //       console.error("Ошибка при загрузке продуктов:", error);
  //     }
  //   };
  //   uploadProducts();
  // }, []);
  return (
    <div>
      <FrozenProductCarousel />
      <AboutCompany />
      <CategoriesList />
      <ProductSelection />
      <CompanyLocation />
    </div>
  );
};

export default Home;
