'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Tab.module.css';

type TabProps = {
  url: string;
  label: string;
};

function Tab({ url, label }: TabProps) {
  const pathname = usePathname();
  const isCurrentRoute = url === pathname;

  return (
    <Link href={url}>
      <div className={`${styles.tab} ${isCurrentRoute ? styles.active : ''}`}>
        {label}
      </div>
    </Link>
  );
}

export default Tab;
