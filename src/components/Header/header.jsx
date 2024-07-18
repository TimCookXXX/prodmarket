import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, PhoneCall } from "lucide-react";
import styles from "./header.module.css";
import prodLogo from "../../assets/Group.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={prodLogo} alt="ProdMarket" />
          </Link>
        </div>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
          <button className={styles.closeMenu} onClick={closeMenu}>
            <X size={24} />
          </button>
          <ul>
            <li>
              <Link
                to="/"
                className={`${styles.navLink} ${
                  location.pathname === "/" ? styles.active : ""
                }`}
                onClick={closeMenu}
              >
                Главная
              </Link>
            </li>
            <li>
              <Link
                to="/catalog"
                className={`${styles.navLink} ${
                  location.pathname.startsWith("/catalog") ? styles.active : ""
                }`}
                onClick={closeMenu}
              >
                Каталог
              </Link>
            </li>
            <li>
              <Link
                to="/delivery"
                className={`${styles.navLink} ${
                  location.pathname === "/delivery" ? styles.active : ""
                }`}
                onClick={closeMenu}
              >
                Доставка
              </Link>
            </li>
            <li>
              <Link
                to="/partners"
                className={`${styles.navLink} ${
                  location.pathname === "/partners" ? styles.active : ""
                }`}
                onClick={closeMenu}
              >
                Партнерам
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                className={`${styles.navLink} ${
                  location.pathname === "/contacts" ? styles.active : ""
                }`}
                onClick={closeMenu}
              >
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.actions}>
          <a href="tel:79183338558" className={styles.phoneNumber}>
            <PhoneCall size={20} />
            <span>+7 (918) 333-85-58</span>
          </a>
          <button className={styles.menuToggle} onClick={toggleMenu}>
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
