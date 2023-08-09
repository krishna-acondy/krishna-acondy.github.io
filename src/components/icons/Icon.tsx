import React from 'react';
import styles from './icon.module.css';

type IconProps = {
  url: string;
  viewBox: string;
  path: React.ReactNode;
  size?: number | string;
  title?: string;
};

function Icon({ url, viewBox, path, size = 40, title = '' }: IconProps) {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      title={title}
      className={styles.container}
    >
      <svg
        width={size}
        height={size}
        xmlns='http://www.w3.org/2000/svg'
        viewBox={viewBox}
      >
        <g fillRule='evenodd' clipRule='evenodd' className={styles.icon}>
          {path}
        </g>
      </svg>
    </a>
  );
}

export default Icon;
