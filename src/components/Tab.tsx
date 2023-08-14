'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Tab.module.css';

type TabProps = {
  url?: string;
  label: string;
  active?: boolean;
  onClick?: () => unknown;
};

function Tab({ url, label, active, onClick }: TabProps) {
  const pathname = usePathname();
  const isCurrentRoute = url === pathname;

  const tabFragment = (
    <div
      className={`${styles.tab} ${
        isCurrentRoute || active ? styles.active : ''
      }`}
      onClick={onClick}
    >
      {label}
    </div>
  );

  return url ? <Link href={url}>{tabFragment}</Link> : tabFragment;
}

export default Tab;
