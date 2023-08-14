import React from 'react';
import styles from './Badge.module.css';
function Badge({ children }: React.PropsWithChildren<unknown>) {
  return <div className={styles.badge}>{children}</div>;
}

export default Badge;
