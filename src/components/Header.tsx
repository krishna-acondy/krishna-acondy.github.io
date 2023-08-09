import styles from './Header.module.css';
function Logo() {
  return (
    <svg
      width='48'
      height='48'
      viewBox='0 0 100 100'
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs>
        <linearGradient id='gradient' x1='1' y1='0.5' x2='0' y2='0.5'>
          <stop offset='0%' stop-color='#9ae6b4' />
          <stop offset='19.6%' stop-color='#81ceb5' />
          <stop offset='39.2%' stop-color='#6ab6b0' />
          <stop offset='58.8%' stop-color='#539ea9' />
          <stop offset='98%' stop-color='#2b6cb0' />
        </linearGradient>
        <style>
          {`rect {
      fill: url(#gradient);
    }
    text {
        fill: white;
      }
    @media (prefers-color-scheme: dark) {
      rect {
        fill: transparent;
      }
      text {
        fill: url(#gradient);
      }
    }`}
        </style>
      </defs>
      <rect width='100%' height='100%' rx='8' />
      <text
        x='50%'
        y='50%'
        textAnchor='middle'
        fontFamily='ui-monospace, Menlo, Monaco'
        strokeWidth='2px'
        fontWeight='bolder'
        fontSize='4rem'
        dy='.35em'
        letterSpacing={-5.5}
      >
        Kr
      </text>
    </svg>
  );
}
function Header() {
  return (
    <div className={styles.container}>
      <Logo />
    </div>
  );
}

export default Header;
