import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getModifiedCategoriesAndDocuments } from "../../utils/firebase.utils";
import styles from "./subcategory-list.module.css";
import LoaderComponent from "../Loader/Loader";
import frozen from "../../assets/frozen.svg";
import cooled from "../../assets/cooled.svg";

const SubcategoriesList = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const categoriesMap = await getModifiedCategoriesAndDocuments();
        setCategory(categoriesMap[categoryId]);
      } catch (error) {
        console.error("Error fetching category:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategory();
  }, [categoryId]);

  if (isLoading) {
    return <LoaderComponent />;
  }

  const subcategories = [
    ...new Set(category.items.map((item) => item.subcategoryTitle)),
  ];

  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{category.title}</h1>
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
        <div className={styles.heroImageContainer}>
          <img
            src={category.imageUrl}
            alt={category.title}
            className={styles.heroImage}
          />
        </div>
      </div>
      <div className={styles.subcategoriesSection}>
        <h2 className={styles.sectionTitle}>Подкатегории</h2>
        <div className={styles.subcategoriesGrid}>
          {subcategories.map((subcategory, index) => (
            <Link
              key={subcategory}
              to={`/catalog/${categoryId}/${encodeURIComponent(subcategory)}`}
              className={styles.subcategoryCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.subcategoryContent}>
                <h3 className={styles.subcategoryTitle}>{subcategory}</h3>
                <span className={styles.exploreLink}>Смотреть &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubcategoriesList;
