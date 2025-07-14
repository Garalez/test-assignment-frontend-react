import { FC } from 'react';
import styles from './ImageSkeleton.module.css';

export const ImageSkeleton: FC = () =>  (
  <div className={styles.skeletonCard}>
    <div className={styles.skeletonImage}></div>
    <div className={styles.skeletonContent}>
      <div className={styles.skeletonName}></div>
      <div className={styles.skeletonId}></div>
    </div>
  </div>
);
