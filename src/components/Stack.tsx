import styles from './Stack.module.css';
import React from 'react';

type StackProps = {
  direction?: 'row' | 'column';
  gap?: number;
  justifyContent?: React.CSSProperties['justifyContent'];
  alignItems?: React.CSSProperties['alignItems'];
};

function Stack({
  children,
  gap = 0,
  direction = 'column',
  justifyContent,
  alignItems,
}: React.PropsWithChildren<StackProps>) {
  return (
    <div
      className={styles.stack}
      style={{
        flexDirection: direction,
        gap: `${gap}rem`,
        justifyContent,
        alignItems,
      }}
    >
      {children}
    </div>
  );
}

export default Stack;
