'use client';
import {
  differenceInMonths,
  differenceInYears,
  format,
  formatDuration,
} from 'date-fns';
import styles from './RoleCard.module.css';
import Card from '~/components/Card';
import { Role, Technology } from './data';
import React from 'react';

type RoleCardProps = {
  role: Role;
};

const techColorMap: Record<Technology, string> = {
  AWS: '#ff9900',
  Android: '#3dda84',
  HTML: '#e44d27',
  CSS: '#036ac1',
  JavaScript: '#f0dc4e',
  'Node.js': '#83cc2a',
  TypeScript: '#7ebcfb',
  Angular: '#b62b2e',
  'Ember.js': '#e05b44',
  Salesforce: '#00a2e1',
  React: '#60dafc',
  'Ruby on Rails': '#cb0000',
  'C#': '#6a1577',
  'Dotnet Core': '#6c429c',
  Go: '#00aed8',
  Java: '#932b2d',
  GraphQL: '#e534ab',
  'REST APIs': '#e41f35',
  'E2E Testing': 'blue',
  PostgreSQL: '#336791',
  DynamoDB: '#4052d5',
  MySQL: '#ffa518',
  'MS SQL': '#ba1c1b',
};

const changeBrightness = (hexColor: string, magnitude: number) => {
  hexColor = hexColor.replace(`#`, ``);
  if (hexColor.length === 6) {
    const decimalColor = parseInt(hexColor, 16);
    let r = (decimalColor >> 16) + magnitude;
    r > 255 && (r = 255);
    r < 0 && (r = 0);
    let g = (decimalColor & 0x0000ff) + magnitude;
    g > 255 && (g = 255);
    g < 0 && (g = 0);
    let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
    b > 255 && (b = 255);
    b < 0 && (b = 0);
    return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
  } else {
    return hexColor;
  }
};

function RoleCard({ role }: RoleCardProps) {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  React.useEffect(() => {
    setIsDarkMode(
      window &&
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches,
    );
  }, []);

  const diffInMonths = differenceInMonths(
    role.endDate || new Date(),
    role.startDate,
  );

  const diffInYears = differenceInYears(
    role.endDate || new Date(),
    role.startDate,
  );

  const duration = formatDuration({
    years: diffInYears,
    months: diffInMonths % 12,
  });

  return (
    <Card
      style={
        role.endDate
          ? {}
          : {
              boxShadow: '0 0 3px 3px rgba(var(--active-tab-rgb), 1)',
            }
      }
    >
      <div className={styles.content}>
        <h2>{role.designation}</h2>
        <a
          href={role.url}
          className={styles.link}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h3>{role.company}</h3>
        </a>
        <h4>
          {format(role.startDate, 'MMM yyyy')} -{' '}
          {role.endDate ? format(role.endDate, 'MMM yyyy') : 'Present'} {'('}
          {duration}
          {')'}
        </h4>
        <p>{role.description}</p>
        <h5>Tech</h5>
        <ul className={styles.tech}>
          {role.tech
            .sort((a, b) => a.localeCompare(b))
            .map((t) => (
              <li
                key={t}
                className={styles.chip}
                style={{
                  background: changeBrightness(
                    techColorMap[t],
                    isDarkMode ? -50 : 100,
                  ),
                }}
              >
                {t}
              </li>
            ))}
        </ul>
        <h5>Tooling</h5>
        <ul className={styles.tech}>
          {role.tools
            .sort((a, b) => a.localeCompare(b))
            .map((t) => (
              <li key={t} className={styles.chip}>
                {t}
              </li>
            ))}
        </ul>
        <h5>Themes</h5>
        <ul className={styles.tech}>
          {role.themes
            .sort((a, b) => a.localeCompare(b))
            .map((t) => (
              <li key={t} className={styles.chip}>
                {t}
              </li>
            ))}
        </ul>
      </div>
    </Card>
  );
}

export default RoleCard;
