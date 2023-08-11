import styles from './page.module.css';
import { roles } from './data';
import RoleCard from './RoleCard';

export default function Career() {
  return (
    <main className={styles.main}>
      <div className={styles.roles}>
        {roles
          .sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
          .map((role) => (
            <RoleCard key={role.company + role.designation} role={role} />
          ))}
      </div>
    </main>
  );
}
