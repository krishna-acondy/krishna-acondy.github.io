'use client';
import { useRouter } from 'next/navigation';
import styles from './Header.module.css';
import Logo from './Logo';
import Tab from './Tab';

function Header() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Logo onClick={() => router.replace('/')} />
      <Tab url='/career' label='Career' />
    </div>
  );
}

export default Header;
