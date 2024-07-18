import { Link, useLocation } from "react-router-dom";
import styles from "./breadcrumbs.module.css";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const translations = {
    delivery: "Доставка",
    catalog: "Каталог",
    partners: 'Партнерам',
    contacts: "Контакты"
  };

  const translate = (name) => {
    return translations[name.toLowerCase()] || decodeURIComponent(name);
  };

  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav className={styles.breadcrumbs} aria-label="breadcrumb">
      <ol className={styles.breadcrumbsList}>
        <li className={styles.breadcrumbItem}>
          <Link to="/" className={styles.breadcrumbLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={styles.homeIcon}
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className={styles.srOnly}>Главная</span>
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={name} className={styles.breadcrumbItem}>
              {isLast ? (
                <span className={styles.breadcrumbCurrent} aria-current="page">
                  {translate(name)}
                </span>
              ) : (
                <Link to={routeTo} className={styles.breadcrumbLink}>
                  {translate(name)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
