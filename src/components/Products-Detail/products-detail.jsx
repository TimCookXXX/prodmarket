import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getModifiedCategoriesAndDocuments } from "../../utils/firebase.utils";
import { Truck, CreditCard, Shield } from "lucide-react";
import styles from "./products-detail.module.css";
import LoaderComponent from "../Loader/Loader";
import CallToAction from "../CallToAction/CallToAction";
import frozen from "../../assets/frozen.svg";
import cooled from "../../assets/cooled.svg";

const ProductDetails = () => {
  const { categoryId, subcategoryId, productId } = useParams();
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const categoriesMap = await getModifiedCategoriesAndDocuments();
        const category = categoriesMap[categoryId];
        setCategory(category);
        setProduct(category.items.find((p) => p.id === productId));
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [categoryId, subcategoryId, productId]);

  if (isLoading) return <LoaderComponent />;
  if (!product || !category)
    return <div className={styles.error}>Продукт не найден</div>;

  return (
    <div className={styles.container}>
      <div className={styles.productHero}>
        <div className={styles.imageSection}>
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
        <div className={styles.infoSection}>
          <h1 className={styles.productTitle}>{product.title}</h1>
          <div className={styles.productMeta}>
            <span className={styles.productCategory}>{category.title}</span>
            <span className={styles.productWeight}>
              {product.weight} {product.unit}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.serviceInfo}>
        <div className={styles.serviceCard}>
          <Truck className={styles.serviceIcon} />
          <h3>Оперативная доставка</h3>
          <p>
            Доставим в день заказа или на следующий день. Выберите удобное для
            вас время.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <CreditCard className={styles.serviceIcon} />
          <h3>Удобная оплата</h3>
          <p>Оплатите любым удобным способом: наличными, картой или онлайн.</p>
        </div>
        <div className={styles.serviceCard}>
          <Shield className={styles.serviceIcon} />
          <h3>Гарантия качества</h3>
          <p>Мы уверены в нашем товаре.</p>
        </div>
      </div>

      <CallToAction productTitle={product.title} />
    </div>
  );
};

export default ProductDetails;
