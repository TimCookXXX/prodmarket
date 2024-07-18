import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSortedCategoriesAndDocuments } from "../../utils/firebase.utils";
import LoaderComponent from "../Loader/Loader";
import styles from "./categories-list.module.css";
import frozen from "../../assets/frozen.svg";
import cooled from "../../assets/cooled.svg";

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const sortedCategories = await getSortedCategoriesAndDocuments();
        setCategories(Object.values(sortedCategories));
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Наша продукция</h1>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <div className={styles.categoriesGrid}>
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/catalog/${category.id}`}
              className={styles.categoryCard}
            >
              <div className={styles.imageContainer}>
                <img
                  src={category.imageUrl}
                  alt={category.title}
                  className={styles.categoryImage}
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
              <div className={styles.categoryInfo}>
                <h2 className={styles.categoryTitle}>{category.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriesList;
