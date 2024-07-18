import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import styles from "./error-page.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.subtitle}>Упс! Страница не найдена</p>
        <p className={styles.description}>
          Похоже, что вы забрели в неизведанные земли нашего сайта. Не
          волнуйтесь, даже у лучших продуктов иногда теряются страницы!
        </p>
        <Link to="/" className={styles.homeButton}>
          <Home size={24} />
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
