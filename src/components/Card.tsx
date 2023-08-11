import styles from './Card.module.css';

type CardProps = {
  style?: Record<string, unknown>;
};

function Card({ children, style = {} }: React.PropsWithChildren<CardProps>) {
  return (
    <div className={styles.card} style={style}>
      {children}
    </div>
  );
}

export default Card;
