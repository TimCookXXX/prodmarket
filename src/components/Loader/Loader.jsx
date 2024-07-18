import { Loader } from 'lucide-react';
import styles from './loader.module.css';

const LoaderComponent = () => {
  return (
    <div className={styles.loaderContainer}>
      <Loader className={styles.loader} />
    </div>
  );
};

export default LoaderComponent;
