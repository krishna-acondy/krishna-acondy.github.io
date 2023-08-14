'use client';
import styles from './page.module.css';
import { Role, partTimeRoles, volunteerRoles, workRoles } from './data';
import RoleCard from './RoleCard';
import Tab from '~/components/Tab';
import React from 'react';

const roleMap: Record<string, Role[]> = {
  work: workRoles,
  partTime: partTimeRoles,
  volunteering: volunteerRoles,
};

const tabs = [
  { label: 'Work', id: 'work' },
  { label: 'Part-time', id: 'partTime' },
  { label: 'Volunteering', id: 'volunteering' },
];

export default function Career() {
  const [tab, setTab] = React.useState('work');
  return (
    <main className={styles.main}>
      <div className={styles.tabs}>
        {tabs.map((t) => (
          <Tab
            label={t.label}
            active={tab === t.id}
            key={t.id}
            onClick={() => setTab(t.id)}
          />
        ))}
      </div>
      <div className={styles.roles}>
        {roleMap[tab]
          .sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
          .map((role) => (
            <RoleCard key={role.company + role.designation} role={role} />
          ))}
      </div>
    </main>
  );
}
