import styles from "./LinkButton.module.css";

type LinkButtonProps = {
  url: string;
  title: string;
  description: string;
};

function LinkButton({ url, title, description }: LinkButtonProps) {
  return (
    <a
      href={url}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{description}</p>
    </a>
  );
}

export default LinkButton;
