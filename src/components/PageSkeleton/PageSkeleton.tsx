import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './PageSkeleton.module.css';

interface PageSkeletonProps {
  type?: 'list' | 'detail';
}

export const PageSkeleton: FC<PageSkeletonProps> = ({ type }) => {
  const location = useLocation();
  const isDetailPage = type === 'detail' || location.pathname.includes('/pokemon/');
  
  if (isDetailPage) {
    return (
      <div className={styles.container}>
        <div className={`${styles.skeletonTitle} ${styles.backButtonSkeleton}`}></div>
        <div className={`${styles.card} ${styles.detailCard}`}>
          <div className={`${styles.skeletonImage} ${styles.detailImage}`}></div>
          <div className={`${styles.content} ${styles.detailContent}`}>
            <div className={`${styles.skeletonName} ${styles.detailName}`}></div>
            <div className={`${styles.skeletonId} ${styles.detailId}`}></div>
            
            <div className={styles.typesContainer}>
              <div className={`${styles.skeletonId} ${styles.typeChip}`}></div>
              <div className={`${styles.skeletonId} ${styles.typeChip}`}></div>
            </div>
            
            <div className={styles.sectionContainer}>
              <div className={`${styles.skeletonName} ${styles.sectionItem} ${styles.sectionTitle}`}></div>
              <div className={styles.physicalInfoGrid}>
                <div className={styles.physicalInfoItem}>
                  <div className={`${styles.skeletonId} ${styles.physicalInfoLabel}`}></div>
                  <div className={`${styles.skeletonName} ${styles.physicalInfoValue}`}></div>
                </div>
                <div className={styles.physicalInfoItem}>
                  <div className={`${styles.skeletonId} ${styles.physicalInfoLabel}`}></div>
                  <div className={`${styles.skeletonName} ${styles.physicalInfoValue}`}></div>
                </div>
              </div>
            </div>
            
            <div className={styles.sectionContainer}>
              <div className={`${styles.skeletonName} ${styles.sectionItem} ${styles.sectionTitle}`}></div>
              <div className={styles.abilitiesContainer}>
                <div className={`${styles.skeletonId} ${styles.abilityChip}`}></div>
                <div className={`${styles.skeletonId} ${styles.abilityChip}`}></div>
              </div>
            </div>
            
            <div>
              <div className={`${styles.skeletonName} ${styles.sectionItem} ${styles.sectionTitle}`}></div>
              <div className={styles.statsGrid}>
                {Array(6).fill(null).map((_, index) => (
                  <div key={`stat-${index}`} className={styles.statItem}>
                    <div className={`${styles.skeletonId} ${styles.statName}`}></div>
                    <div className={`${styles.skeletonName} ${styles.statValue}`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.skeletonSubtitle}></div>
      </div>
      
      <div className={styles.grid}>
        {Array(12).fill(null).map((_, index) => (
          <div key={`skeleton-${index}`} className={styles.card}>
            <div className={styles.skeletonImage}></div>
            <div className={styles.content}>
              <div className={styles.skeletonName}></div>
              <div className={styles.skeletonId}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
