import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getModifiedCategoriesAndDocuments } from "../../utils/firebase.utils";
import styles from "./product-list.module.css";
import LoaderComponent from "../Loader/Loader";
import frozen from "../../assets/frozen.svg";
import cooled from "../../assets/cooled.svg";

const ProductsList = () => {
  const { categoryId, subcategoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categoriesMap = await getModifiedCategoriesAndDocuments();
        const category = categoriesMap[categoryId];
        setCategory(category);
        setProducts(
          category.items.filter(
            (product) =>
              product.subcategoryTitle === decodeURIComponent(subcategoryId)
          )
        );
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [categoryId, subcategoryId]);

  if (isLoading) {
    return <LoaderComponent />;
  }

  if (!category || products.length === 0) {
    return <div className={styles.error}>Товары не найдены</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{decodeURIComponent(subcategoryId)}</h1>
      </div>
      <div className={styles.productsGrid}>
        {products.map((product, index) => (
          <Link
            key={product.id}
            to={`/catalog/${categoryId}/${subcategoryId}/${product.id}`}
            className={styles.productCard}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className={styles.imageWrapper}>
              <img
                src={product.imageUrl}
                alt={product.title}
                className={styles.productImage}
              />
              <div className={styles.badgeContainer}>
                {category.isFrozen && (
                  <img
                    src={frozen}
                    alt="Frozen"
                    className={`${styles.badge} ${styles.frozen}`}
                  />
                )}
                {category.isCooled && (
                  <img
                    src={cooled}
                    alt="Cooled"
                    className={`${styles.badge} ${styles.cooled}`}
                  />
                )}
              </div>
            </div>
            <div className={styles.productInfo}>
              <h2 className={styles.productTitle}>{product.title}</h2>
              <p className={styles.productUnit}>
                Вес: <span>{product.unit}</span>
              </p>
              <div className={styles.viewDetails}>
                <span>Подробнее</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
