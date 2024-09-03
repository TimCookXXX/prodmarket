import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Home from "./pages/Home/Home";
import CategoriesList from "./components/Categories-List/categories-list";
import SubcategoriesList from "./components/SubCategoryList/subcategorylist";
import ProductsList from "./components/Product-List/product-list";
import ProductDetails from "./components/Products-Detail/products-detail";
import Breadcrumbs from "./components/BreadCrumbs/BreadCrumbs";
import Delivery from "./pages/Delivery/Delivery";
import Contacts from "./pages/Contacts/Contacts";
import Partners from "./pages/Partners/Partners";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SplashScreen from "./components/Splash/Splash";
import ContactsForm from "./components/ContactsForm/ContactsFrom";
import Privacy from "./pages/Privacy/Privacy";

const Layout = () => (
  <>
    <ScrollToTop />
    <Header />
    <Breadcrumbs />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash") === "true";
    if (hasSeenSplash) {
      setShowSplash(false);
      setShowContent(true);
    }
  }, []);

  const handleSplashFinish = () => {
    setShowSplash(false);
    sessionStorage.setItem("hasSeenSplash", "true");
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "delivery",
          element: <Delivery />,
        },
        {
          path: "form",
          element: <ContactsForm />,
        },
        {
          path: "partners",
          element: <Partners />,
        },
        {
          path: "contacts",
          element: <Contacts />,
        },
        {
          path: "privacy",
          element: <Privacy />,
        },
        {
          path: "catalog",
          children: [
            {
              index: true,
              element: <CategoriesList />,
            },
            {
              path: ":categoryId",
              children: [
                {
                  index: true,
                  element: <SubcategoriesList />,
                },
                {
                  path: ":subcategoryId",
                  children: [
                    {
                      index: true,
                      element: <ProductsList />,
                    },
                    {
                      path: ":productId",
                      element: <ProductDetails />,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      {showContent && <RouterProvider router={router} />}
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
    </>
  );
}

export default App;
